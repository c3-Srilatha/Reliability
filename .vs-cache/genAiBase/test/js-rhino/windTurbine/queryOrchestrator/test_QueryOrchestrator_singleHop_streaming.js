/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_singleHop_streaming';
var testObjs;

describe(filename, function () {
  testObjs = [
    {
      query: 'Who is the the Executive Director of the Issuer?',
      shouldBeStructured: false,
      tool: 'documentQuestionAnswer()',
      expectedAnswersList: [['Robert Strickland']],
      expectedRationale: ['154 persons', 'board'],
      expectedEngineLogString: ['relation_source_pid'],
      minRationaleSources: 0,
      minSources: 0,
    },
    {
      query:
        'How many Aircrafts are in Sn Francisco according to our database? Provide the source of this information.', // Typo is deliberate to use fuzzy matching
      shouldBeStructured: true,
      tool: 'relationalDatabaseQuery()',
      expectedAnswersList: [['25', 'San Francisco', 'Genai.Aircraft']],
      expectedEngineLogString: ['FuzzyMatch'],
      expectedRationale: ['"sourceType" : "Genai.Aircraft"', "('San Francisco' == location.city)"],
      minRationaleSources: 0,
      minSources: 1,
    },
    {
      query:
        'Answer the following 2 questions: 1) How many Aircrafts are in Sn Francisco according to our database? 2) Who is the the Executive Director of the Issuer?',
      shouldBeStructured: true,
      expectedAnswersList: [['Robert Strickland'], ['San Francisco']],
      tool: 'multiSourceQuery()',
      toolsOverride: ['relationalDatabaseQuery()', 'documentQuestionAnswer()'],
      isMSS: true,
      minRationaleSources: 1,
      minSources: 1,
    },
    {
      nonTranslatedQuery:
        'Responda las siguientes dos preguntas: 1) ¿Cuántas aeronaves hay en San Francisco según nuestra base de datos? 2) ¿Quién preside el consejo de administración de la empresa emisora?',
      query:
        'Answer the following 2 questions: 1) How many Aircrafts are in Sn Francisco according to our database? 2) Who is the the Executive Director of the Issuer?',
      shouldBeStructured: true,
      expectedAnswersList: [['Robert Strickland'], ['San Francisco', 'presidente', '25 aviones']],
      tool: 'multiSourceQuery()',
      toolsOverride: ['relationalDatabaseQuery()', 'documentQuestionAnswer()'],
      isMSS: true,
      isTranslated: true,
      detectedLanguage: 'es',
      minRationaleSources: 1,
      minSources: 1,
    },
  ];

  beforeAll(function () {
    this.setupRes = TestApi.setUpQueryOrchestratorTest(filename, testObjs);
    this.queryOrchestrator = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default');
    this.ctx = this.setupRes.ctx;
  });

  afterAll(function () {
    TestApi.tearDownQueryOrchestratorTest(this.setupRes);
  });

  testObjs.forEach(function (testObj) {
    describe(testObj.tool + (testObj.isTranslated ? ' with translation' : ''), function () {
      beforeAll(function () {
        this.originalUnstructuredDataQueryConfig = Genai.Agent.Tool.UnstructuredDataQuery.make({
          id: 'UnstructuredQueryTool_default',
        }).config();
        this.originalQueryOrchestratorConfig = this.queryOrchestrator.config();

        if (testObj.isTranslated) {
          Genai.Translator.Config.setConfigValue('enabled', true);
          Genai.Translator.Config.setConfigValue('translatorTypeName', Genai.Translator.Llm);
        }

        if (testObj.isMSS) {
          this.queryOrchestrator.config().withToolkitName('QueryOrchestrator_multiSource_test').setConfig();
          Genai.Agent.Tool.MultiSourceSynthesizer.Config.forConfigKey(
            'MultiSourceSynthesizer_default_test'
          ).setConfigValues({
            toolkitName: 'QueryOrchestrator_multiSource_test',
            produceSubtoolAnswers: true,
          });
          Genai.PyUtil.restartAllEngines();
          this.queryOrchestrator.waitForDeployment();
        }

        this.queryOrchestrator.ensureInitialized(true);
        expect(this.queryOrchestrator.isInitialized()).withContext('QO should be initialized').toBe(true);

        var query = Genai.Query.fromString(testObj.query);
        query = query.withDetectedLanguage(testObj.detectedLanguage || 'en');
        if (testObj.nonTranslatedQuery) {
          query = query.withNonTranslatedQuery(testObj.nonTranslatedQuery);
        }
        query = query.withTargetTool(testObj.tool).withToolsOverride(testObj.toolsOverride);
        this.queryResult = { searchQuery: query };
      });

      afterAll(function () {
        Genai.App.State.removeAll({ filter: Filter.exists('id') }, true);
        Genai.Translator.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
        Genai.Agent.Tool.MultiSourceSynthesizer.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
        this.originalUnstructuredDataQueryConfig.setConfig();
        this.originalQueryOrchestratorConfig.setConfig();
      });

      describe('streaming', function () {
        beforeAll(function () {
          this.inProgressResult = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', this.queryResult);
          this.stream = this.queryOrchestrator.streamChatQuery(this.inProgressResult, null, null, false);
          this.inProgressResult = this.inProgressResult.get(
            'this, childResults.this, answer, searchQuery, statusHistory.this, engineLog'
          );
          if (this.inProgressResult.failed) {
            fail(this.inProgressResult.engineLog);
          }
        });

        describe('the query status', function () {
          it('should have an empty answer', function () {
            expect(this.inProgressResult.answer).toBeUndefined();
          });

          it('is not finished processing', function () {
            var statusHistory = this.inProgressResult.statusHistory;
            expect(statusHistory.length).toBeGreaterThan(0);
            expect(statusHistory[statusHistory.length - 1].status).not.toEqual(
              Genai.Query.Result.InterimStatusEnum.COMPLETED
            );
          });
        });

        describe('chunking', function () {
          it('should have correct relative sizes and no reference ids', function () {
            var currChunk = '';
            var prevChunk;
            expect(this.stream).withContext('stream').toBeDefined();
            while (this.stream.hasNext()) {
              prevChunk = currChunk;
              currChunk = this.stream.next();
              expect(currChunk.length).toBeGreaterThan(prevChunk.length);
              expect(/\[[^\],]+#[^\]]+\]/.test(currChunk)).toEqual(false);
            }
          });
        });

        describe('answers', function () {
          beforeAll(function () {
            TestApi.waitForSetup(this.ctx, null, 1, 90);
            this.inProgressResult = this.inProgressResult.get(
              'this, answer, streamingState, engineLog, rationaleSources.this, sourceRelations.this, rationale, statusHistory.this'
            );
          });

          it('is finished streaming and has the expected answers', function () {
            expect(this.inProgressResult.streamingState).withContext('streamingState').toEqual('COMPLETED');
            if (this.inProgressResult.failed) {
              fail(this.inProgressResult.engineLog);
            }
            TestApi.checkStringMatches(
              this.inProgressResult.answer,
              testObj.expectedAnswersList[0],
              false,
              testObj.query
            );
          });

          it('has the expected sources in the parent result', function () {
            expect(this.inProgressResult.rationaleSources.length)
              .withContext(`rationaleSources.length for answer: ${this.inProgressResult.answer}`)
              .toBeGreaterThanOrEqual(testObj.minRationaleSources);
            expect(this.inProgressResult.sourceRelations.length)
              .withContext(`sourceRelations.length for answer: ${this.inProgressResult.answer}`)
              .toBeGreaterThanOrEqual(testObj.minSources);
          });

          if (!testObj.isMSS) {
            it('has rationale', function () {
              expect(this.inProgressResult.rationale).toBeDefined();
              TestApi.checkStringMatches(this.inProgressResult.rationale, testObj.expectedRationale);
            });
          }

          if (testObj.shouldBeStructured) {
            it('has structuredQuerySources with passageUiDisplayIndex defined for MSS and not for StructuredDbQuery and EvalMetrics', function () {
              var sourceRelations = this.inProgressResult.sourceRelations;
              if (testObj.isMSS) {
                sourceRelations.each((sourceRelation) => {
                  return expect(sourceRelation.passageUiDisplayIndex).toBeDefined();
                });
              } else {
                sourceRelations.each((sourceRelation) => {
                  return expect(sourceRelation.passageUiDisplayIndex).not.toBeDefined();
                });
              }
            });
          }
        });
      });
    });
  });
});
