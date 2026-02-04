/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Genai.TestSetupUtil';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::setupUnstructuredTool', function () {
    beforeAll(function () {
      Genai.TestSetupUtil.setupUnstructuredTool();
      TestApi.waitForSetup(this.ctx, null, 1, 60);
    });

    afterAll(function () {
      Genai.TestSetupUtil.cleanUnstructuredTool();
    });

    describe('the retrievers', function () {
      it('sets up a functional Dense retriever with the wind turbine index', function () {
        var denseRetriever = Genai.Retriever.Dense.forName('dense-default');
        var similarPassages = denseRetriever.similaritySearch(
          Genai.Retriever.SearchSpec.make({
            searchQuery: Genai.Query.fromString('How can a wind turbine fail?'),
            k: 2,
          })
        );

        expect(similarPassages.length).toEqual(2);
        expect(similarPassages[0].page_content).toContain('wind turbine');
        expect(similarPassages[0].page_content).toContain('problems');
      });

      it('sets the retriever of the pipeline config to the one used as the function parameter', function () {
        this.pipelineRetriever = Genai.UnstructuredQuery.Engine.Config.inst().vectorStore;
      });
    });

    describe('the file infrastructure', function () {
      beforeAll(function () {
        this.sourceCollection = Genai.SourceCollection.forId('windturbine');
      });

      describe('the source collection', function () {
        it('is set up', function () {
          expect(this.sourceCollection).toBeDefined();
        });

        it('contains the source files', function () {
          this.sourceCollection = this.sourceCollection.get('files');
          expect(this.sourceCollection.files.length).toEqual(6);
        });
      });

      describe('the source files', function () {
        beforeAll(function () {
          this.sourceFiles = Genai.SourceFile.fetch({}).objs;
        });

        it('are set up', function () {
          expect(this.sourceFiles.length).toEqual(6);
        });
      });
    });

    describe('end to end queries', function () {
      beforeAll(function () {
        TestApi.setOpenAiApiKey();
      });

      it('does not fail', function () {
        var initialResult = Genai.ChatBot.createInitialGenAiResult(
          'How to troubleshoot common problems with industrial wind turbines?',
          Genai.Query.Type.QUERY
        );
        var result = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default').chatQuery(initialResult);
        result = result.get('answer, failed, engineLog');

        expect(result.failed).withContext(result.engineLog).toBeFalsy();
        expect(result.answer).toBeDefined();
      });
    });
  });

  describe('::cleanUnstructuredTool', function () {
    beforeAll(function () {
      this.defaultQueryEngineConfig = Genai.UnstructuredQuery.Engine.Config.getConfig();
      this.defaultPipelineConfig = Genai.UnstructuredQuery.Engine.Config.getConfig();
      this.defaultQuestionRewritingConfig = Genai.UnstructuredQuery.Engine.REA.QuestionRewritingConfig.forConfigKey(
        this.defaultPipelineConfig.questionRewritingConfigName
      ).getConfig();
      this.defaultContextualQaConfig = Genai.UnstructuredQuery.Engine.REA.ContextualQaConfig.forConfigKey(
        this.defaultPipelineConfig.questionAnsweringConfigName
      ).getConfig();

      this.defaultModelInferenceConfig = Genai.UnstructuredQuery.Engine.REA.ModelInferenceConfig.forConfigKey(
        this.defaultContextualQaConfig.modelInferenceConfigName
      ).getConfig();

      this.defaultModelInferencePromptConfig =
        Genai.UnstructuredQuery.Engine.REA.ModelInference.Prompt.Config.forConfigKey(
          this.defaultModelInferenceConfig.promptConfigName
        ).getConfig();

      Genai.TestSetupUtil.setupUnstructuredTool();

      // Modify some configs
      Genai.UnstructuredQuery.Engine.Config.setConfigValue('numPassages', 21);
      Genai.UnstructuredQuery.Engine.Config.setConfigValue('modelConfigName', 'azureGpt5');
      Genai.UnstructuredQuery.Engine.REA.QuestionRewritingConfig.forConfigKey(
        this.defaultPipelineConfig.questionRewritingConfigName
      ).setConfigValue('conversationLimit', 10);

      Genai.UnstructuredQuery.Engine.REA.ContextualQaConfig.forConfigKey(
        this.defaultPipelineConfig.questionAnsweringConfigName
      ).setConfigValue('modelInferenceConfigName', 'test');

      this.defaultModelInferencePromptConfig.setConfigValue('promptTemplate', 'TEST');

      Genai.TestSetupUtil.cleanUnstructuredTool();
    });

    it('resets the unstructured query engine config', function () {
      expect(Genai.UnstructuredQuery.Engine.Config.getConfig()).toEqual(this.defaultQueryEngineConfig);
    });

    it('purges the Dense retriever', function () {
      var denseRetriever = Genai.Retriever.Dense.forId('dense-default');
      expect(denseRetriever.passageCount()).toEqual(0);
    });

    it('resets the pipeline config to the default config', function () {
      expect(Genai.UnstructuredQuery.Engine.Config.getConfig()).toEqual(this.defaultPipelineConfig);
    });

    it('resets the contextual QA config', function () {
      expect(
        Genai.UnstructuredQuery.Engine.REA.ContextualQaConfig.forConfigKey(
          this.defaultPipelineConfig.questionAnsweringConfigName
        ).getConfig()
      ).toEqual(this.defaultContextualQaConfig);
    });

    it('resets the question rewriting config', function () {
      expect(
        Genai.UnstructuredQuery.Engine.REA.QuestionRewritingConfig.forConfigKey(
          this.defaultPipelineConfig.questionRewritingConfigName
        ).getConfig()
      ).toEqual(this.defaultQuestionRewritingConfig);
    });

    it('resets the model inference prompt', function () {
      expect(
        Genai.UnstructuredQuery.Engine.REA.ModelInference.Prompt.Config.forConfigKey(
          this.defaultModelInferenceConfig.promptConfigName
        ).getConfig()
      ).toEqual(this.defaultModelInferencePromptConfig);
    });
  });

  describe('::setupDenseRetriever', function () {
    beforeAll(function () {
      this.denseIndexUrl = 'meta://genAiBase/test/resource/retrievers/dense/index.zip';
      this.denseRetriever = Genai.TestSetupUtil.setupDenseRetriever(this.denseIndexUrl);
    });

    afterAll(function () {
      this.denseRetriever.purgeIndex(true);
      this.denseRetriever.remove();
    });

    it('setup us the retriever with the expected index', function () {
      expect(this.denseRetriever.passageCount()).toEqual(1697);
    });
  });

  describe('::setupSourceCollection', function () {
    beforeAll(function () {
      this.sourceCollection = Genai.TestSetupUtil.setupSourceCollection().get();
    });

    afterAll(function () {
      this.sourceCollection.remove();
    });

    it('creates a source collection pointing to the expected URLs', function () {
      expect(this.sourceCollection.id).toEqual('windturbine');
      expect(this.sourceCollection.name).toEqual('Windturbine Collection');
      expect(this.sourceCollection.targetUrl).toEqual(FileSystem.inst().rootUrl() + 'retrievers/');
      expect(this.sourceCollection.rootUrl).toEqual(FileSystem.mounts().get('data-load'));
    });
  });

  describe('::setupSourceFiles', function () {
    beforeAll(function () {
      this.sourceCollection = Genai.TestSetupUtil.setupSourceCollection().get();
      this.sourceFiles = Genai.TestSetupUtil.setupSourceFiles(
        'windTurbineGenAi/resource/documents',
        'windTurbineGenAi/resource/passages',
        this.sourceCollection
      );
    });

    afterAll(function () {
      this.sourceCollection.remove();
    });

    it('adds the source files to the source collection passed as a parameter', function () {
      this.sourceFiles.each(function (sourceFile) {
        expect(sourceFile.collection.id).toEqual('windturbine');
      });
    });

    it('updates the passages file of each source file', function () {
      var passageFilesDir = C3.File.make('sourceFilesWithoutCollection/passagesFiles/');
      this.sourceFiles.each(function (sourceFile) {
        var passagesFileName = sourceFile.passagesFile.url.split('/').slice(-1)[0];
        expect(sourceFile.passagesFile.url).toEqual(passageFilesDir + 'passages/' + passagesFileName);
      });
    });

    it('updates the documents file of each source file', function () {
      var sourceCollection = this.sourceCollection;
      this.sourceFiles.each(function (sourceFile) {
        var fileName = sourceFile.originalFile.url.split('/').slice(-1)[0];
        expect(sourceFile.originalFile.url).toEqual(sourceCollection.rootUrl + 'documents/' + fileName);
      });
    });

    it('updates the display url of each source file', function () {
      this.sourceFiles.each(function (sourceFile) {
        expect(sourceFile.displayUrl).toEqual('file/' + sourceFile.originalFile.url);
      });
    });
  });
});
