/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Retriever_IndexAction';

describe(filename, function () {
  if (TestApi.isRunningInJarvis()) {
    TestApi.installRuntimes(['py-query_orchestrator']);
  }

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.testConfig = TestApi.setupTestRetriever(this.ctx, filename);
    this.sourceCollections = this.testConfig.sourceCollections;
    this.sourceFiles = this.testConfig.sourceFiles;
    this.retriever = this.testConfig.retriever;
    this.indexPassagesSpy = TestApi.indexPassagesSpy(this.ctx);

    var asyncActionSpec = {
      typeName: this.retriever.type().name(),
      action: 'indexPassagesFile',
      actionName: 'indexPassagesFile',
      args: {
        passagesFile: C3.FileSystem.makeFile(`IndexAction/${filename}.json`),
        unindexing: false,
      },
    };

    // Creating this through TestApi.upsertEntity leads to an error in TestApi.teardown
    this.asyncAction = AsyncAction.make(asyncActionSpec).upsert().get();
    this.indexAction = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.IndexAction', {
      retriever: this.retriever,
      asyncAction: this.asyncAction,
      asyncActionSpec: asyncActionSpec,
      startTime: DateTime.now().plusSeconds(-1801),

      // By setting numTries to 3, this will be returned in the fetch, but will fall into the else block
      numTries: 3,
      indexNumber: 0,
    }).get();

    this.onIndexPassagesFileFailureSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'onIndexPassagesFileFailure')
      .returnValue(null)
      .register();
    this.alertLongRunningIndexActionSpy = TestApi.spyOn(this.ctx, 'Genai.Alert', 'alertLongRunningIndexAction')
      .returnValue(null)
      .register();
    Genai.Mail.Config.setConfigValue('sendAlertsEmail', true);
  });

  afterAll(function () {
    Genai.Mail.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    TestApi.teardownTestRetriever(this.ctx, this.testConfig);
    this.asyncAction.remove();
  });

  describe('processQueues', function () {
    it('calls onIndexPassagesFileFailure after maxTries has been exceeded', function () {
      Genai.Retriever.IndexAction.processQueues([this.retriever]);
      expect(this.onIndexPassagesFileFailureSpy.toHaveBeenCalledTimes(1))
        .withContext('onIndexPassagesFileFailure has been called')
        .toBeTrue();
    });
  });

  describe('monitorLongRunningIndexAction', function () {
    it('sends an alert email', function () {
      Genai.Retriever.IndexAction.monitorLongRunningIndexAction(DateTime.now(), this.indexAction, this.retriever);
      expect(this.alertLongRunningIndexActionSpy.toHaveBeenCalledTimes(1))
        .withContext('alertLongRunningIndexActionSpy has been called')
        .toBeTrue();
    });
  });

  describe('processFailedActions', function () {
    beforeAll(function () {
      this.asyncAction
        .get()
        .withField('completed', true)
        .withField('error', C3.Error.make({ id: Uuid.create() }))
        .merge();
    });

    it('calls onIndexPassagesFileFailure', function () {
      Genai.Retriever.IndexAction.processFailedActions(this.retriever);
      expect(this.onIndexPassagesFileFailureSpy.toHaveBeenCalledTimes(2))
        .withContext('onIndexPassagesFileFailure has been called again')
        .toBeTrue();
    });
  });

  describe('indexActionCount', function () {
    it('gets the expected number', function () {
      expect(Genai.Retriever.IndexAction.indexActionCount(this.retriever))
        .withContext('counting non-completed')
        .toEqual(0);
      expect(Genai.Retriever.IndexAction.indexActionCount(this.retriever, true))
        .withContext('counting completed')
        .toEqual(1);

      this.asyncAction.get().withField('completed', false).merge();
      expect(Genai.Retriever.IndexAction.indexActionCount(this.retriever))
        .withContext('counting non-completed')
        .toEqual(1);
      expect(Genai.Retriever.IndexAction.indexActionCount(this.retriever, true))
        .withContext('counting completed')
        .toEqual(0);
    });
  });
});
