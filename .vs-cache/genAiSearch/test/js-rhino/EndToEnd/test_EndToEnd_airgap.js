/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_EndToEnd_airgap';

// Allow time for runtime installation
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120 * 60 * 1000;

xdescribe(filename, function () {
  if (TestApi.isRunningInJarvis()) {
    TestApi.installRuntimes();
  }

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.setMisConfig();

    this.collection = Genai.SourceCollection.forId('default-app-collection');

    // Move test files from package metadata to collection root
    C3.File.make('meta://genAiBase/test/resource/chunker/pdfChunker/sales_tax_table.pdf').copy(
      this.collection.rootUrl + '/sales_tax_table.pdf'
    );

    this.retriever = Genai.Retriever.Dense.forName('default-dense');
    this.originalAirGapConfig = Genai.App.AirGapConfig.inst().getConfig();
    Genai.App.AirGapConfig.inst().setConfigValues({
      attributorTokenizerPath: 'gcs://c3--datasets/genai/airgap/models/bert-base-uncased.zip',
      nltkSentenceTokenizerModelFilePath: 'gcs://c3--datasets/genai/airgap/punkt/PY3/english.pickle',
      msmarcoDistilbertBaseTasBFilePath: 'gcs://c3--datasets/genai/airgap/models/msmarco-distilbert-base-tas-b.zip',
      sourceFileChunkerTokenizerPath: 'gcs://c3--datasets/genai/airgap/models/bert-base-uncased.zip',
      tableTextSplitterEncoderPath: 'gcs://c3--datasets/genai/airgap/models/gpt2.zip',
      tatrZipPath: 'gcs://c3--datasets/genai/airgap/transformers/table-transformer-detection.zip',
    });
    this.origConfigs = Genai.UnstructuredQuery.Engine.Config.setReaConfigsBySuffix('_mis');
    Genai.UnstructuredQuery.Engine.Config.inst().getConfig().setConfigValue('vectorStore', this.retriever);
    this.orgQOConfig = Genai.Agent.Config.forConfigKey('QueryOrchestrator_default');
    this.orgQOConfig
      .withToolkitName('QueryOrchestrator_unstructuredOnly')
      .withUiSelectableTools(['UnstructuredQueryTool_default'])
      .withLlmConfigName('modelInference_llama_31_8')
      .withPromptConfigName('QueryOrchestrator_mis')
      .setConfig();
    this.orgGuideConfig = Genai.Llm.Guide.Config.inst().configValue('modelConfigName');
    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    try {
      Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      this.origConfigs.each((origConfig) => {
        origConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
      });
      this.originalAirGapConfig.setConfig();
      Genai.ChatBot.Config.make().getConfig().clearConfigAndSecretOverride(ConfigOverride.APP);
      Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default')
        .config()
        .getConfig()
        .clearConfigAndSecretOverride(ConfigOverride.APP);
      Genai.Llm.Guide.Config.inst().getConfig().setConfigValue('modelConfigName', this.orgGuideConfig);
      TestApi.cleanUpCollection(this.collection, false, true);
      this.retriever.purgeIndex(true);
    } finally {
      Genai.PyUtil.terminateAllEngines();

      // Shut everything down at the end
      TestApi.teardown(this.ctx);
    }
  });

  describe('config validation', function () {
    beforeAll(function () {
      Genai.App.AirGapConfig.inst().setConfigValue(
        'guideTokenizerPath',
        'gcs://c3--datasets/genai/airgap/models/does-not-exist.zip'
      );
    });

    afterAll(function () {
      Genai.App.AirGapConfig.inst().clearConfigValue('guideTokenizerPath');
    });

    it('is correct', function () {
      var validated = Genai.App.AirGapConfig.validateConfigs();
      expect(validated.attributorTokenizerPath).toEqual('Validated!');
      expect(validated.guideTokenizerPath).toContain('does not exist');
      expect(validated.e5EmbedderPath).toEqual('Warning! Field not set!');
      expect(validated.validateConfigs).toBeUndefined();
    });
  });

  describe('setup', function () {
    beforeAll(function () {
      CronQueue.pause();
      CronQueue.clear();
      TestApi.waitForSetup(this.ctx);
    });

    afterAll(function () {
      CronQueue.resume();
    });

    it('syncs the collection', function () {
      var syncJobs = this.collection.sync(
        null,
        Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Universal })
      );
      TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 15 * 60);
      TestApi.waitForSetup(this.ctx);
    });

    it('has populated the passageFile', function () {
      this.collection.get('files').files.each((f) => {
        expect(f.readPassages())
          .withContext(f.id + ' passageFile')
          .toBeDefined();
      });
    });

    it('indexes the collection', function () {
      this.retriever.indexFiles(this.collection.get('files').files);
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 10 * 60);
    });
  });

  describe('Genai.Agent.QueryOrchestrator', function () {
    beforeAll(function () {
      Genai.ChatBot.Config.make().getConfig().setConfigValue('handlerTypeName', 'Genai.Agent.QueryOrchestrator');
      this.query = 'What is the states tax in january?';
      this.queryOrchestrator = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default');
      Genai.Agent.QueryOrchestrator.DefaultConfig.setConfigValue(
        'queryOrchestratorConfigName',
        'QueryOrchestrator_default'
      );
      this.queryResult = Genai.ChatBot.createInitialGenAiResult(
        this.query,
        Genai.Query.Type.QUERY,
        {},
        'documentQuestionAnswer()'
      );
    });

    afterAll(function () {
      Genai.Agent.QueryOrchestrator.DefaultConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    it('handles unstructured queries successfully', function () {
      var queryResult = Genai.ChatBot.query(this.queryResult);
      expect(queryResult.get('failed').failed)
        .withContext(this.query + ' failed')
        .toBeFalsy();
    });

    it('pickNextTool returns the expected tool', function () {
      expect(this.queryOrchestrator.pickNextTool(this.query, this.queryResult))
        .withContext('pickNextTool')
        .toEqual('documentQuestionAnswer()');
    });
  });
});
