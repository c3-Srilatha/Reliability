/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_singleHop_errorHandling';
var testObjs;
describe(filename, function () {
  testObjs = [
    {
      query: 'According to our documents who is the Chairman of the Board of Issuers?',
      nonTranslatedQuery: '¿Quién es el presidente del directorio de los emisores?',
      detectedLanguage: 'es',
      shouldBeStructured: false,
      enableFollowUpSuggestions: true,
      tool: 'documentQuestionAnswer()',
      expectedTool: 'documentQuestionAnswer()',
      expectedAnswersList: [['robert l. smith', 'robert smith']],
      expectedTranslatedAnswersList: ['presidente'],
      expectedTranslatedRationale: ['presidente'],
      expectedEngineLogString: ['relation_source_pid'],
      expectedStatuses: [
        Genai.Query.Result.InterimStatusEnum.GENERATE_ANSWER,
        Genai.Query.Result.InterimStatusEnum.COMPLETED,
      ],
      expectedSimilaritySearchCallCount: 1,
      doNotCreateRelations: false,
    },
    {
      query: 'How many Aircrafts are in Sn Francisco according to our database?', // Typo is deliberate to use fuzzy matching
      nonTranslatedQuery: 'Cuantas Aeronaves hay en Sn Francisco según nuestra base de datos?',
      detectedLanguage: 'es',
      shouldBeStructured: true,
      enableFollowUpSuggestions: true,
      tool: 'relationalDatabaseQuery()',
      expectedTool: 'relationalDatabaseQuery()',
      expectedAnswersList: [['25', 'San Francisco']],
      rationale: ['Genai.Aircraft', 'EvalSpec', 'San Francisco'],
      expectedTranslatedAnswersList: ['25', 'la cuadrícula para obtener más detalles'],
      expectedTranslatedRationale: ['Genai.Aircraft', 'EvalSpec', 'San Francisco'], // Structured rationale is not translated
      expectedEngineLogString: ['FuzzyMatch'],
      expectedStatuses: [
        Genai.Query.Result.InterimStatusEnum.QUERY_DATABASE,
        Genai.Query.Result.InterimStatusEnum.GENERATE_VISUALIZATION,
        Genai.Query.Result.InterimStatusEnum.GENERATE_ANSWER,
        Genai.Query.Result.InterimStatusEnum.COMPLETED,
      ],
      expectedSimilaritySearchCallCount: 1,
      doNotCreateRelations: false,
      expectedSpec: Genai.StructuredQuery.Spec.make({
        spec: EvalSpec.make({
          filter: "('San Francisco' == location.city)",
          projection: 'count()',
        }),
        sourceType: 'Genai.Aircraft',
      }),
    },
  ];

  beforeAll(function () {
    TestApi.pgVectorRetrieverForTestDataset('alabamaBond');
    this.setupRes = TestApi.setUpQueryOrchestratorTest(filename, testObjs);

    // Since there is no direct way to execute a call over all threads in engine thread pool, setting up the thread pool spec for the test to only use 1 thread to ensure re-initialization of the engine is tested.
    var threadPoolSpec = {
      minThreads: 1,
      initialThreads: 1,
      maxThreads: 1,
    };
    Genai.Agent.Config.forConfigKey('QueryOrchestrator_default_test').setConfigValue('deploySpec', {
      threadPool: threadPoolSpec,
    });
    Genai.PyUtil.terminateAllEngines();
  });

  afterAll(function () {
    TestApi.tearDownQueryOrchestratorTest(this.setupRes);
    TestApi.cleanPgVectorRetrieverForTestDataset('alabamaBond');
  });

  describe('error in spec generation for irrelevant query is handled correctly', function () {
    beforeAll(function () {
      this.queryOrchestrator = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default_test');
      this.query = 'What is the average salary of my employees?';
      this.inProgressResult = Genai.Query.Result.make({
        searchQuery: Genai.Query.fromString(this.query).withTargetTool('relationalDatabaseQuery()'),
      }).upsert();
      this.result = this.queryOrchestrator.chatQuery(this.inProgressResult).get('this');
    });

    afterAll(function () {
      this.inProgressResult.remove();
    });

    it('does not try to answer the question', function () {
      /*
       * TODO: GEN-6944 Sawshark returns with an irrelvant spec on retry and hence doesn't fail the query
       * Hence we check that rationale sources aren't used to answer the query if sawshark generates an irrelevant spec
       */
      if (this.result.failed) {
        expect(Str.isEmpty(this.result.rationale)).toBeTrue();
      } else {
        var rationaleSources = this.result.allRationaleSources();
        rationaleSources.each((source) => {
          return expect(source.passageUiDisplayIndex).toEqual(-1);
        });
      }
      expect(this.result.answer).toContain(
        Translation.getTranslationForLocale('EnterpriseSearch.ErrorMessage.UnableToAnswerStructuredDbAgent', 'en')
      );
    });

    it('has a relevant log message', function () {
      var parsedLog = this.result.parseEngineLog().parsedEngineLog;
      expect('Step_0' in parsedLog)
        .withContext('The engine log should have a step 0' + this.result.engineLog)
        .toBeTrue();
    });
  });

  describe('No retriever and doNotCreateRelations = false', function () {
    describe('when an error occurs in similaritySearch', function () {
      beforeAll(function () {
        Genai.PyUtil.terminateAllEngines();

        this.ctx = this.setupRes.ctx;

        this.similaritySearchSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense.Engine', 'similaritySearch')
          .callFake(
            Lambda.fromJsFunc(function (_action, _input) {
              throw new Error('Unexpected error string');
            })
          )
          .register();

        Genai.Agent.Config.forConfigKey('QueryOrchestrator_default_test').setConfigValue('doNotCreateRelations', false);
        this.queryOrchestrator = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default_test');
        this.query = testObjs[1].query;
        this.inProgressResult = Genai.Query.Result.make({
          searchQuery: Genai.Query.fromString(this.query).withTargetTool('relationalDatabaseQuery()'),
        }).upsert();
        this.result = this.queryOrchestrator.chatQuery(this.inProgressResult).get('this');
      });

      afterAll(function () {
        Genai.Agent.Config.forConfigKey('QueryOrchestrator_default_test').clearConfigAndSecretOverride(
          ConfigOverride.APP
        );
        this.similaritySearchSpy.unregister();
        this.inProgressResult.remove();
      });

      it('marks the query as failed', function () {
        expect(this.result.failed).toBe(true);
      });
    });
  });

  describe('errors when initializing tools', function () {
    afterAll(function () {
      Genai.Agent.Tool.UnstructuredDataQuery.make({ id: 'UnstructuredQueryTool_default' })
        .config()
        .clearConfigAndSecretOverride(ConfigOverride.APP);

      Genai.Agent.Tool.EvalQuery.make({ id: 'EvalQuery_default_test' })
        .config()
        .clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    function brokenToolTest(testObj, brokenToolId, expectedLogMessages, shouldHaveBrokenToolsLogs) {
      this.queryOrchestrator = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default_test');
      Genai.Agent.QueryOrchestrator.list().each((engine) => {
        return engine.ensureInitialized(true);
      });
      var inProgressResult = Genai.Query.Result.make({
        searchQuery: Genai.Query.fromString(testObj.query).withDetectedLanguage('en').withTargetTool(testObj.tool),
      }).upsert();

      var finalResult = this.queryOrchestrator.chatQuery(inProgressResult, null, null, false).get('this');
      TestApi.checkResultSucceeded(finalResult);
      _.each(testObj.expectedAnswersList, function (expectedAnswers) {
        TestApi.checkStringMatches(finalResult.answer, expectedAnswers, false, 'answer');
      });

      var engineLog = JSON.parse(finalResult.engineLog);

      expect('QueryOrchestrator_brokenTools' in engineLog)
        .withContext('broken tools log message')
        .toEqual(shouldHaveBrokenToolsLogs);
      if (shouldHaveBrokenToolsLogs) {
        var logs = engineLog.QueryOrchestrator_brokenTools;
        _.each(expectedLogMessages.concat([brokenToolId]), function (word) {
          expect(logs.error).toContain(word);
        });
      }
    }

    function brokenToolStaleModelTest(testObj) {
      this.queryOrchestrator = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default_test');
      this.queryOrchestrator.initialize(true);
      var inProgressResult = Genai.Query.Result.make({
        searchQuery: Genai.Query.fromString(testObj.query).withDetectedLanguage('en').withTargetTool(testObj.tool),
      }).upsert();

      var finalResult = this.queryOrchestrator
        .chatQuery(inProgressResult, null, null, false, false)
        .get('answer, failed');
      TestApi.checkStaleResult(finalResult, testObj);
    }

    describe('error in initializing a single tool does not affect other tools', function () {
      describe('for unstructured query', function () {
        beforeAll(function () {
          this.brokenTool = 'StructuredDataQueryPy_default_test';
          this.structuredDbAgentToolCfg = Genai.Agent.Tool.forId(this.brokenTool).config();
          this.originalInitializationSpec = this.structuredDbAgentToolCfg.initializationSpec;
          this.structuredDbAgentToolCfg.setConfigValue('initializationSpec', null);
        });

        afterAll(function () {
          this.structuredDbAgentToolCfg.setConfigValue('initializationSpec', this.originalInitializationSpec);
        });

        it('broken eval tool', function () {
          brokenToolTest(testObjs[0], this.brokenTool, [this.brokenTool], true);
        });

        it('no longer has log messages once the tool is fixed', function () {
          this.structuredDbAgentToolCfg.setConfigValue('initializationSpec', this.originalInitializationSpec);
          brokenToolTest(testObjs[0], this.brokenTool, ['dataModelGraph'], false);
        });
      });

      describe('for structured db agent', function () {
        beforeAll(function () {
          this.brokenTool = 'UnstructuredQueryTool_default';
          this.brokenConfig = Genai.Agent.Tool.UnstructuredDataQuery.Config.forConfigKey(this.brokenTool).getConfig();
          this.originalConfigValue = this.brokenConfig.formatDataPrompt;
          this.brokenConfig.setConfigValue('formatDataPrompt', null);
        });

        afterAll(function () {
          this.brokenConfig.setConfigValue('formatDataPrompt', this.originalConfigValue);
        });

        it('broken unstructured query tool', function () {
          brokenToolTest(testObjs[1], this.brokenTool, ['formatDataPrompt'], true);
        });

        it('no longer has log messages once the tool is fixed', function () {
          this.brokenConfig.setConfigValue('formatDataPrompt', this.originalConfigValue);
          brokenToolTest(testObjs[1], this.brokenTool, ['formatDataPrompt'], false);
        });
      });
    });

    // TODO GEN-11619: Structured db agent does not show error when data model graph is stale
    xdescribe('error in initializing tool after removing data source returns correct answer', function () {
      describe('for structured db agent', function () {
        beforeAll(function () {
          /*
           * Defined unstructured query tool (UQT) and Stuctured query tool (SQT).
           * Break the UQT and set the data model state for SQT to be stale.
           * Query asked is for SQT.
           */
          this.brokenTool = 'UnstructuredQueryTool_default';
          this.brokenConfig = Genai.Agent.Tool.UnstructuredDataQuery.Config.forConfigKey(this.brokenTool).getConfig();
          this.originalDataPrompt = this.brokenConfig.formatDataPrompt;
          this.brokenConfig.setConfigValue('formatDataPrompt', null);
          Genai.App.State.setState('dataModelState', Genai.App.State.FieldStatus.STALE);
        });

        afterAll(function () {
          Genai.App.State.setState('dataModelState', Genai.App.State.FieldStatus.SYNCED);
          this.brokenConfig.setConfigValue('formatDataPrompt', this.originalDataPrompt);
        });

        it('returns correct answer', function () {
          brokenToolStaleModelTest(testObjs[1]); // RelationalDatbaseQuery() test object
        });
      });
    });
  });

  describe('Invalid LLM api key set', function () {
    beforeAll(function () {
      Genai.Llm.OpenAI.Config.inst().setSecretValue('apiKey', 'abc');
      Genai.QuickStart.migrateAzureCredentialsToGenaiCore();
      Genai.PyUtil.terminateAllEngines();

      this.ctx = this.setupRes.ctx;
      this.queryOrchestrator = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default_test');
      this.query = testObjs[0].query;
      this.inProgressResult = Genai.Query.Result.make({
        searchQuery: Genai.Query.fromString(this.query)
          .withDetectedLanguage('en')
          .withTargetTool('documentQuestionAnswer()'),
      }).upsert();
      this.result = this.queryOrchestrator.chatQuery(this.inProgressResult).get('this');
    });

    afterAll(function () {
      this.inProgressResult.remove();
      TestApi.setOpenAiApiKey();
    });

    it('marks the query as failed', function () {
      expect(this.result.failed).toBeTruthy();
    });

    it('Indicates a failure in answer', function () {
      expect(this.result.answer).toContain('Please rephrase your question and try again.');
    });

    it('has a relevant log message', function () {
      expect(this.result.engineLog)
        .withContext(this.result.engineLog)
        .toContain('Access denied due to invalid subscription key or wrong API endpoint.');
    });
  });
});
