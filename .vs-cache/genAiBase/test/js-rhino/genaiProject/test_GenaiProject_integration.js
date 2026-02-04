/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiProject_integration';

const TUTORIAL_HANDLER_TYPE = 'Genai.Tutorial.REAEngine';
const DEFAULT_HANDLER_TYPE = 'Genai.UnstructuredQuery.Engine';
const QO_TYPE = 'Genai.Agent.QueryOrchestrator';
const QO_CONFIG_NAME = 'QueryOrchestrator_default';

/*
 * NOTE: More comprehensive/thorough testing of the functionality of Genai.Project, querying with projects, etc
 *       is included in other tests that do not actually hit the LLM. This test is intended as the (sole) integration
 *       test for the feature.
 */

var user1;
var user2;
var tutorialTestObj;
var defaultTestObj;
var defaultStructuredTestObj;
var queryAndCheck;

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    Genai.PyUtil.terminateAllEngines();
    TestApi.setOpenAiApiKey();

    Genai.ChatBot.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    this.config = Genai.UnstructuredQuery.Engine.Config.inst();
    this.config.setConfigValue('vectorStore', Genai.Retriever.Dense.forName('alabamaBond-dense'));

    // Users

    // TODO: GENAI-3013 This probably should be BasicUser, but we need to figure out permissions w.r.t. keys
    this.users = TestIdp.createTestUsersForGroup('Genai.AdminUser', 2);
    [user1, user2] = this.users;

    Genai.UnstructuredQuery.Engine.REA.ContextualQaConfig.forConfigKey('qa_config').setConfigValue(
      'modelInferenceConfigName',
      'qa_inference_config_gpt4o'
    );

    // Projects
    Genai.Project.removeAll({}, true);
    this.tutorialProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'tutorial_using_worldfacts_' + filename,
      projectType: 'tutorial',
      unstructuredQueryEngineConfigName: 'worldFacts',
      chunkerConfig: 'default',
    });
    tutorialTestObj = {
      query: 'What should I do to get an international driving permit?',
      projectId: this.tutorialProject.id,
      expectedAnswers: ['American Automobile Association', 'AAA', 'American Automobile Touring Alliance', 'AATA'],
    };

    this.defaultProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'default_using_alabamaBond_' + filename,
      projectType: 'production',
      queryOrchestratorConfigName: QO_CONFIG_NAME,
      chunkerConfig: 'default',
      handlerTypeName: QO_TYPE,
    });

    Genai.Agent.Tool.UnstructuredDataQuery.Config.forConfigKey('UnstructuredQueryTool_default').setConfigValue(
      'configName',
      'alabamaBond'
    );

    defaultStructuredTestObj = {
      query: 'fish',
      projectId: this.defaultProject.id,

      // See impl in genai/genAiBase/test/src/Genai.Agent.Tool.TestTool1.py for why this is the expected answer
      expectedAnswers: ['TestTool1 echoing '],
      targetTool: 'TestTool1_toolName',
    };

    defaultTestObj = {
      query: 'Who are the members of the board of the issuers?',
      projectId: this.defaultProject.id,
      expectedAnswers: ['robert l. smith', 'annie furrer', 'vacancy', 'state officials'],
      targetTool: 'documentQuestionAnswer()',
    };

    // Project Settings
    this.defaultProjectSettings = TestApi.upsertEntity(this.ctx, 'Genai.Project.Settings', {
      id: 'default',
      defaultProject: this.defaultProject,
      tutorialProject: this.tutorialProject,
    });

    this.setProjectAsUser = function (user, userSettings, project) {
      return TestRunner.asUser(
        user,
        Lambda.fromJsFunc(function (userSettings, project) {
          return userSettings.setActiveProject(project);
        }).partiallyCall([userSettings, project])
      );
    };

    this.createSettingsWithProject = function (user, project) {
      return TestApi.upsertEntity(this.ctx, 'Genai.App.UserSettings', {
        user: user,
        activeProject: project,
      });
    };

    var ctx = this.ctx;
    var utaStr = Translation.getTranslationForLocale('EnterpriseSearch.ErrorMessage.UnableToAnswer', 'en');

    // With gpt-3.5-turbo, the LLM is very strict about what it considers "appropriate" for humans
    var iqStr = 'Your question appears to be inappropriate and not in accordance with our terms of service';

    queryAndCheck = function (user, testObj, shouldWork) {
      var userProject = Genai.Project.forUser(user).id;
      expect(shouldWork).toEqual(userProject === testObj.projectId);
      var res = TestApi.upsertEntity(ctx, 'Genai.Query.Result', {
        searchQuery: Genai.Query.fromString(testObj.query).withTargetTool(testObj.targetTool),
      });
      res = TestRunner.asUser(
        user,
        Lambda.fromJsFunc(function (gair) {
          return Genai.Project.QueryRouter.handler().chatQuery(gair, null, null);
        }).partiallyCall([res])
      ).get();
      expect(res)
        .withContext(testObj.projectId + ': ' + testObj.query)
        .toBeDefined();

      if (shouldWork) {
        TestApi.checkResultSucceeded(res);
        const engineLog = res.parseEngineLog().parsedEngineLog;
        const hasChainResult = engineLog?.chain_result;
        if (hasChainResult) {
          TestApi.checkRetrievedDocs(
            res,
            testObj.expectedAnswers,
            `${testObj.projectId}: ${testObj.query} should have the expected answer in the retrieved documents with user's project set to ${userProject}`
          );
        } else {
          TestApi.checkStringMatches(
            res.answer,
            testObj.expectedAnswers,
            false,
            `${testObj.projectId}: ${testObj.query} should have the expected answer with user's project set to ${userProject}`
          );
        }
      } else if (res.answer.indexOf(iqStr) < 0) {
        TestApi.checkStringMatches(
          res.answer.toLowerCase(),
          ['please rephrase your question and try again.', utaStr.toLowerCase()],
          false,
          `${testObj.projectId}: ${testObj.query} should be unable to answer with user's project set to ${userProject}`
        );
      }

      return shouldWork;
    };

    this.createSettingsWithProject(user1, this.tutorialProject);
    this.createSettingsWithProject(user2, this.defaultProject);

    this.initialConfigTestArrays = [
      [user1, tutorialTestObj, true],
      [user2, defaultTestObj, true],
      [user2, defaultStructuredTestObj, true],
      [user2, tutorialTestObj, false],
      [user1, defaultTestObj, false],
    ];

    this.postChangeTestArrays = [
      [user1, defaultTestObj, true],
      [user2, defaultTestObj, true],
      [user2, defaultStructuredTestObj, true],
      [user1, defaultStructuredTestObj, true],
      [user2, tutorialTestObj, false],
      [user1, tutorialTestObj, false],
    ];

    this.originalAgentConfig = Genai.Agent.Config.forConfigKey('QueryOrchestrator_default');
    this.originalAgentConfig.setConfigValue('toolkitName', 'GenaiProject_tests');
    this.originalAgentConfig.setConfigValue('llmConfigName', 'azureGpt4o');
  });

  afterAll(function () {
    Genai.UnstructuredQuery.Engine.REA.ContextualQaConfig.forConfigKey('qa_config').clearConfigAndSecretOverride(
      ConfigOverride.APP
    );
    Genai.ChatBot.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    this.config.clearConfigAndSecretOverride(ConfigOverride.APP);
    this.originalAgentConfig.setConfig();
    Genai.Agent.Tool.UnstructuredDataQuery.Config.forConfigKey(
      'UnstructuredQueryTool_default'
    ).clearConfigAndSecretOverride(ConfigOverride.APP);
    TestIdp.removeTestUsers(this.users);
    TestApi.teardown(this.ctx);
    Genai.PyUtil.terminateAllEngines();
  });

  it('initializes the projects', function () {
    this.defaultProjectSettings.initializeProjects();
    expect(this.tutorialProject.get('handlerTypeName').handlerTypeName).toEqual(TUTORIAL_HANDLER_TYPE);
    expect(this.defaultProject.get('handlerTypeName').handlerTypeName).toEqual(QO_TYPE);
  });

  it('persists a Genai.Retriever.Dense for the default project', function () {
    var defaultRetriever = Genai.Retriever.Dense.forName('alabamaBond-dense');
    expect(defaultRetriever).toBeDefined();
  });

  it('persists a Genai.Retriever.Dense.Tutorial for the tutorial project', function () {
    var tutorialRetriever = Genai.Retriever.Dense.Tutorial.forName('worldFacts-dense');
    expect(tutorialRetriever).toBeDefined();
  });

  it('gets expected results in initial configuration', function () {
    this.initialConfigTestArrays.forEach(function (testTuple) {
      var [user, testObj, shouldWork] = testTuple;
      queryAndCheck(user, testObj, shouldWork);
    });
  });

  it('gets expected results after user update and has low latency to let users change projects', function () {
    var initialTestTuple = this.initialConfigTestArrays[0];
    var [initialUser, initialTestObj, initialShouldWork] = initialTestTuple;

    queryAndCheck(initialUser, initialTestObj, initialShouldWork);

    var start = DateTime.now();
    this.setProjectAsUser(user1, Genai.App.UserSettings.forUser(user1), this.defaultProject);

    var postChangeTestTuple = this.postChangeTestArrays[0];

    var [postChangeUser, postChangeTestObj, postChangeShouldWork] = postChangeTestTuple;
    queryAndCheck(postChangeUser, postChangeTestObj, postChangeShouldWork);

    var end = DateTime.now();

    expect(end.seconds - start.seconds).toBeLessThan(30);

    // Confirm that user2 unaffected
    this.postChangeTestArrays.slice(1).forEach(function (testTuple) {
      var [user, testObj, shouldWork] = testTuple;
      queryAndCheck(user, testObj, shouldWork);
    });
  });

  describe('when the engines are terminated', function () {
    beforeAll(function () {
      this.setProjectAsUser(user1, Genai.App.UserSettings.forUser(user1), this.tutorialProject);
      Genai.UnstructuredQuery.Engine.stopAllHandlers();
      Genai.Agent.QueryOrchestrator.stopAllHandlers();
      Py.closeAllPy4jInterpreters();
    });

    it('the engines for the tutorial are initialized if a query is made against the tutorial project', function () {
      var initialTestTuple = this.initialConfigTestArrays[0];
      var [initialUser, initialTestObj, initialShouldWork] = initialTestTuple;

      queryAndCheck(initialUser, initialTestObj, initialShouldWork);

      // Check that the engines are re-initialized for the tutorial project
      expect(C3.type(TUTORIAL_HANDLER_TYPE).inst().isInitialized())
        .withContext(TUTORIAL_HANDLER_TYPE + '.inst().isInitialized()')
        .toBeTrue();
      expect(C3.type(QO_TYPE).list().length)
        .withContext(QO_TYPE + '.list().length')
        .toBe(0);
    });

    it('the engines for the default project are initialized if a query is made against the default project', function () {
      var initialTestTuple = this.initialConfigTestArrays[1];
      var [initialUser, initialTestObj, initialShouldWork] = initialTestTuple;

      queryAndCheck(initialUser, initialTestObj, initialShouldWork);

      // Check that the engines are re-initialized now for both projects
      expect(C3.type(TUTORIAL_HANDLER_TYPE).inst().isInitialized())
        .withContext(TUTORIAL_HANDLER_TYPE + '.inst().isInitialized()')
        .toBeTrue();
      expect(C3.type(QO_TYPE).forConfigKey(QO_CONFIG_NAME).isInitialized())
        .withContext(QO_TYPE + '.inst().isInitialized()')
        .toBeTrue();
    });

    describe('#handler', function () {
      it('returns an initialized handler for the tutorial project', function () {
        expect(this.tutorialProject.handler().isInitialized())
          .withContext('tutorialProject.handler().isInitialized()')
          .toBeTrue();
      });

      it('returns an initialized handler for the default project', function () {
        expect(this.defaultProject.handler().isInitialized())
          .withContext('defaultProject.handler().isInitialized()')
          .toBeTrue();
      });
    });
  });
});
