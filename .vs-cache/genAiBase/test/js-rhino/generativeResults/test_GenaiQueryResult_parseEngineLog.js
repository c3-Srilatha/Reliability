/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiQueryResult_parseEngineLog';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    var errorEvalLogEngineLog =
      '{"SpecGenerationModel":{"filled_prompt_string":"Given the data model and the query, write the corresponding \\n json spec","eval_spec":{"sourceType":"Vehicles","spec":{"filter":"1==1","projection":"count(id)","interval":"DAY","timeZone":{"name":"NONE"}}}},"error":"Was unable to generate spec due to error Traceback","predicted_spec":{"sourceType":"Vehicles","spec":{"filter":"1==1","projection":"count(id)","interval":"DAY","timeZone":{"name":"NONE"}}},"EvalQuery_default":{"error":"Error while generating structured spec for query"}}';
    var errorEvalError =
      'JavaException: c3.platform.err.C3RuntimeException: Internal Java error: c3.platform.err.C3RuntimeException: Python process died with exit code 137 while executing a Py4j action Invalid call to Genai.Agent.QueryOrchestrator0#chatQuery: Python process died with exit code 137 while executing a Py4j action!';
    var errorEvalLogQuery = JSON.stringify([errorEvalLogEngineLog, errorEvalError]);

    this.queries = TestApi.upsertBatchEntity(this.ctx, 'Genai.Query.Result', [
      {
        searchQuery: Genai.Query.fromString('Simple Query'),
        engineLog:
          '[{"query":"Simple Query"},{"llms_used":{"extraction":"gpt-4","qa":"gpt-35-turbo","rewriter":"gpt-4"}},{"chain_result":"{\\"query\\": \\"Simple Query\\"}"},{"relation_source_pid":"5f57c895-2c2a-4d23-afc7-c2dce91cd68b#4","source_file":"s3://837215289271--c3awsmp/didemo3/lab/dl/documents/All_TroubleshootingGuide.docx"}]',
      },
      {
        searchQuery: Genai.Query.fromString('Eval Query'),
        engineLog:
          '{"SpecGenerationModel":{"eval_spec":{"sourceType":"SnowflakePublicWindturbineGenaiDev","spec":{"filter":"1==1","order":"descending(riskscore)","limit":-1,"projection":"turbinename, riskscore","group":"turbinename, riskscore","interval":"DAY","timeZone":{"name":"NONE"}}}},"TableAnswering":{"spec":{"llmModelName":"azureGpt35","maxRowsForLlmAnswer":20,"showStatistics":"onlyBigTable","verbalizeTableMethod":"verbalizeEvalDefault","processTableMethod":"default","summaryStatisticsDecimalPlaces":2},"processed_table (first 20 rows)":[{"riskscore":0.95,"turbinename":"TURBINE-1"},{"riskscore":0.5,"turbinename":"TURBINE-6"},{"riskscore":0.41,"turbinename":"TURBINE-5"},{"riskscore":0.4,"turbinename":"TURBINE-17"},{"riskscore":0.31,"turbinename":"TURBINE-18"},{"riskscore":0.29,"turbinename":"TURBINE-8"},{"riskscore":0.27,"turbinename":"TURBINE-19"},{"riskscore":0.23,"turbinename":"TURBINE-15"},{"riskscore":0.17,"turbinename":"TURBINE-2"},{"riskscore":0.15,"turbinename":"TURBINE-12"},{"riskscore":0.14,"turbinename":"TURBINE-7"},{"riskscore":0.13,"turbinename":"TURBINE-10"},{"riskscore":0.11,"turbinename":"TURBINE-20"},{"riskscore":0.08,"turbinename":"TURBINE-11"},{"riskscore":0.07,"turbinename":"TURBINE-3"},{"riskscore":0.03,"turbinename":"TURBINE-4"},{"riskscore":0.01,"turbinename":"TURBINE-13"},{"riskscore":0,"turbinename":"TURBINE-14"}]}}',
      },
      {
        searchQuery: Genai.Query.fromString('Cache Query'),
        engineLog:
          '{"CacheEntry":{"spec":{"limit":-1,"projection":"turbinename, city, country, latitude, longitude","group":"turbinename, city, country, latitude, longitude","interval":"DAY","timeZone":{"name":"NONE"}}},"SpecProcessor":{"validated_spec":{"limit":-1,"projection":"turbinename, city, country, latitude, longitude","group":"turbinename, city, country, latitude, longitude","interval":"DAY","timeZone":{"name":"NONE"},"order":"","sourceType":"SnowflakePublicWindturbineGenaiDev"}},"TableAnswering":{"spec":{"llmModelName":"azureGpt35","templatePrompt":{"id":"mar-5-2-table-ans","parameters":{"source_type":null,"table_doc":null,"eval_spec":null,"table_str":null,"table_summary":null,"query":null}},"maxRowsForLlmAnswer":20,"showStatistics":"onlyBigTable","verbalizeTableMethod":"verbalizeEvalDefault","processTableMethod":"default","summaryStatisticsDecimalPlaces":2}}}',
      },
      {
        searchQuery: Genai.Query.fromString('Error Log Query'),
        engineLog:
          '[{"SpecGenerationModel":{"filled_prompt_string":"Given the data model and the query, write the corresponding json spec","eval_spec":{"sourceType":"Vehicles","spec":{"filter":"1==1","projection":"count(id)","interval":"DAY","timeZone":{"name":"NONE"}}}},"error":"Was unable to generate spec due to error Traceback","predicted_spec":{"sourceType":"Vehicles","spec":{"filter":"1==1","projection":"count(id)","interval":"DAY","timeZone":{"name":"NONE"}}},"EvalQuery_default":{"error":"Error while generating structured spec for query"}}, "Traceback (most recent call last): File: /usr/local/share/c3/runtimes/n7598817857869062204"]',
      },
      {
        searchQuery: Genai.Query.fromString('Error Eval Log Query'),
        engineLog: errorEvalLogQuery,
      },
      {
        searchQuery: Genai.Query.fromString('Traceback Error'),
        engineLog:
          'Traceback (most recent call last):\n  File "/c3/genAiBase/src/agentsAndTools/tools/Genai.Agent/Genai.Agent.QueryOrchestrator/Genai.Agent.QueryOrchestrator.py", line 317, in run\n    ensureInitialized(this)\n  File "/c3/genAiBase/src/agentsAndTools/tools/Genai.Agent/Genai.Agent.QueryOrchestrator/Genai.Agent.QueryOrchestrator.py", line 150, in ensureInitialized\n    initialize(this)\n  File "/c3/genAiBase/src/agentsAndTools/tools/Genai.Agent/Genai.Agent.QueryOrchestrator/Genai.Agent.QueryOrchestrator.py", line 113, in initialize\n    tool.initialize(forceReload)\n  File "/c3/platform/src/remote/ServerConnection.py", line 2007, in funcForStayInRuntime\n  File "/c3/platform/src/remote/ServerConnection.py-server.py", line 583, in addToStackFrame\n  File "/c3/platform/src/remote/ServerConnection.py", line 2019, in inlineMethodWithErrorHandling\n  File "/c3/genAiBase/src/agentsAndTools/tools/Genai.Agent.Tool/Genai.Agent.Tool.EvalQuery/Genai.Agent.Tool.EvalQuery.py", line 40, in initialize\n    FUZZY_MATCHER = c3.Genai.Agent.Tool.Util.StringFuzzyMatcher.initialize(CONFIG.fuzzyMatcherSpec)\n  File "/c3/platform/src/remote/ServerConnection.py-server.py", line 444, in func\nC3Error: Internal Java error: c3.platform.err.C3RuntimeException: Error invoking Python method Genai.Agent.Tool.Util.StringFuzzyMatcher#initialize executing in runtime py-fuzzymatcher on server using py4j',
      },
    ]);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::parseEngineLog', function () {
    beforeAll(function () {
      this.engineLogSimpleQuery = Genai.Query.Result.make({ id: this.queries.at(0) }).parseEngineLog();
      this.engineLogEvalQuery = Genai.Query.Result.make({ id: this.queries.at(1) }).parseEngineLog();
      this.engineLogCacheQuery = Genai.Query.Result.make({ id: this.queries.at(2) }).parseEngineLog();
      this.engineLogError = Genai.Query.Result.make({ id: this.queries.at(3) }).parseEngineLog();
      this.engineLogEvalError = Genai.Query.Result.make({ id: this.queries.at(4) }).parseEngineLog();
      this.engineLogTraceback = Genai.Query.Result.make({ id: this.queries.at(5) }).parseEngineLog();
    });

    describe('::simple query', function () {
      it('should return the parsed engineLog simple query', function () {
        expect(this.engineLogSimpleQuery.parsedEngineLog).toEqual({
          query: 'Simple Query',
          llms_used: {
            extraction: 'gpt-4',
            qa: 'gpt-35-turbo',
            rewriter: 'gpt-4',
          },
          chain_result: {
            query: 'Simple Query',
          },
          relation_source_pid: '5f57c895-2c2a-4d23-afc7-c2dce91cd68b#4',
          source_file: 's3://837215289271--c3awsmp/didemo3/lab/dl/documents/All_TroubleshootingGuide.docx',
        });

        expect(this.engineLogSimpleQuery.parsed).toEqual(true);
      });
    });

    describe('::simple eval query', function () {
      it('should return the parsed engineLog eval query', function () {
        expect(this.engineLogEvalQuery.parsedEngineLog).toEqual({
          SpecGenerationModel: {
            eval_spec: {
              sourceType: 'SnowflakePublicWindturbineGenaiDev',
              spec: {
                filter: '1==1',
                order: 'descending(riskscore)',
                limit: -1,
                projection: 'turbinename, riskscore',
                group: 'turbinename, riskscore',
                interval: 'DAY',
                timeZone: {
                  name: 'NONE',
                },
              },
            },
          },
          TableAnswering: {
            spec: {
              llmModelName: 'azureGpt35',
              maxRowsForLlmAnswer: 20,
              showStatistics: 'onlyBigTable',
              verbalizeTableMethod: 'verbalizeEvalDefault',
              processTableMethod: 'default',
              summaryStatisticsDecimalPlaces: 2,
            },
            'processed_table (first 20 rows)': [
              {
                riskscore: 0.95,
                turbinename: 'TURBINE-1',
              },
              {
                riskscore: 0.5,
                turbinename: 'TURBINE-6',
              },
              {
                riskscore: 0.41,
                turbinename: 'TURBINE-5',
              },
              {
                riskscore: 0.4,
                turbinename: 'TURBINE-17',
              },
              {
                riskscore: 0.31,
                turbinename: 'TURBINE-18',
              },
              {
                riskscore: 0.29,
                turbinename: 'TURBINE-8',
              },
              {
                riskscore: 0.27,
                turbinename: 'TURBINE-19',
              },
              {
                riskscore: 0.23,
                turbinename: 'TURBINE-15',
              },
              {
                riskscore: 0.17,
                turbinename: 'TURBINE-2',
              },
              {
                riskscore: 0.15,
                turbinename: 'TURBINE-12',
              },
              {
                riskscore: 0.14,
                turbinename: 'TURBINE-7',
              },
              {
                riskscore: 0.13,
                turbinename: 'TURBINE-10',
              },
              {
                riskscore: 0.11,
                turbinename: 'TURBINE-20',
              },
              {
                riskscore: 0.08,
                turbinename: 'TURBINE-11',
              },
              {
                riskscore: 0.07,
                turbinename: 'TURBINE-3',
              },
              {
                riskscore: 0.03,
                turbinename: 'TURBINE-4',
              },
              {
                riskscore: 0.01,
                turbinename: 'TURBINE-13',
              },
              {
                riskscore: 0,
                turbinename: 'TURBINE-14',
              },
            ],
          },
        });

        expect(this.engineLogEvalQuery.parsed).toEqual(true);
      });
    });

    describe('::simple cache query', function () {
      it('should return the parsed engineLog cache query', function () {
        expect(this.engineLogCacheQuery.parsedEngineLog).toEqual({
          CacheEntry: {
            spec: {
              limit: -1,
              projection: 'turbinename, city, country, latitude, longitude',
              group: 'turbinename, city, country, latitude, longitude',
              interval: 'DAY',
              timeZone: {
                name: 'NONE',
              },
            },
          },
          SpecProcessor: {
            validated_spec: {
              limit: -1,
              projection: 'turbinename, city, country, latitude, longitude',
              group: 'turbinename, city, country, latitude, longitude',
              interval: 'DAY',
              timeZone: {
                name: 'NONE',
              },
              order: '',
              sourceType: 'SnowflakePublicWindturbineGenaiDev',
            },
          },
          TableAnswering: {
            spec: {
              llmModelName: 'azureGpt35',
              templatePrompt: {
                id: 'mar-5-2-table-ans',
                parameters: {
                  source_type: null,
                  table_doc: null,
                  eval_spec: null,
                  table_str: null,
                  table_summary: null,
                  query: null,
                },
              },
              maxRowsForLlmAnswer: 20,
              showStatistics: 'onlyBigTable',
              verbalizeTableMethod: 'verbalizeEvalDefault',
              processTableMethod: 'default',
              summaryStatisticsDecimalPlaces: 2,
            },
          },
        });

        expect(this.engineLogCacheQuery.parsed).toEqual(true);
      });
    });

    describe('::error query', function () {
      it('should return the parseable part of the engineLog', function () {
        expect(this.engineLogError.parsedEngineLog).toEqual({
          SpecGenerationModel: {
            filled_prompt_string: 'Given the data model and the query, write the corresponding json spec',
            eval_spec: {
              sourceType: 'Vehicles',
              spec: {
                filter: '1==1',
                projection: 'count(id)',
                interval: 'DAY',
                timeZone: {
                  name: 'NONE',
                },
              },
            },
          },
          error: 'Was unable to generate spec due to error Traceback',
          predicted_spec: {
            sourceType: 'Vehicles',
            spec: {
              filter: '1==1',
              projection: 'count(id)',
              interval: 'DAY',
              timeZone: {
                name: 'NONE',
              },
            },
          },
          EvalQuery_default: {
            error: 'Error while generating structured spec for query',
          },
        });

        expect(this.engineLogError.parsed).toEqual(true);
      });
    });

    describe('::error eval query', function () {
      it('should return the parseable part of the engineLog', function () {
        expect(this.engineLogEvalError.parsedEngineLog).toEqual({
          SpecGenerationModel: {
            filled_prompt_string: 'Given the data model and the query, write the corresponding \n json spec',
            eval_spec: {
              sourceType: 'Vehicles',
              spec: {
                filter: '1==1',
                projection: 'count(id)',
                interval: 'DAY',
                timeZone: {
                  name: 'NONE',
                },
              },
            },
          },
          error: 'Was unable to generate spec due to error Traceback',
          predicted_spec: {
            sourceType: 'Vehicles',
            spec: {
              filter: '1==1',
              projection: 'count(id)',
              interval: 'DAY',
              timeZone: {
                name: 'NONE',
              },
            },
          },
          EvalQuery_default: {
            error: 'Error while generating structured spec for query',
          },
        });

        expect(this.engineLogEvalError.parsed).toEqual(true);
      });
    });

    describe('::no parseable query', function () {
      it('should return the original engineLog', function () {
        expect(this.engineLogTraceback.engineLog).toEqual(
          'Traceback (most recent call last):\n  File "/c3/genAiBase/src/agentsAndTools/tools/Genai.Agent/Genai.Agent.QueryOrchestrator/Genai.Agent.QueryOrchestrator.py", line 317, in run\n    ensureInitialized(this)\n  File "/c3/genAiBase/src/agentsAndTools/tools/Genai.Agent/Genai.Agent.QueryOrchestrator/Genai.Agent.QueryOrchestrator.py", line 150, in ensureInitialized\n    initialize(this)\n  File "/c3/genAiBase/src/agentsAndTools/tools/Genai.Agent/Genai.Agent.QueryOrchestrator/Genai.Agent.QueryOrchestrator.py", line 113, in initialize\n    tool.initialize(forceReload)\n  File "/c3/platform/src/remote/ServerConnection.py", line 2007, in funcForStayInRuntime\n  File "/c3/platform/src/remote/ServerConnection.py-server.py", line 583, in addToStackFrame\n  File "/c3/platform/src/remote/ServerConnection.py", line 2019, in inlineMethodWithErrorHandling\n  File "/c3/genAiBase/src/agentsAndTools/tools/Genai.Agent.Tool/Genai.Agent.Tool.EvalQuery/Genai.Agent.Tool.EvalQuery.py", line 40, in initialize\n    FUZZY_MATCHER = c3.Genai.Agent.Tool.Util.StringFuzzyMatcher.initialize(CONFIG.fuzzyMatcherSpec)\n  File "/c3/platform/src/remote/ServerConnection.py-server.py", line 444, in func\nC3Error: Internal Java error: c3.platform.err.C3RuntimeException: Error invoking Python method Genai.Agent.Tool.Util.StringFuzzyMatcher#initialize executing in runtime py-fuzzymatcher on server using py4j'
        );
        expect(this.engineLogTraceback.parsed).toEqual(false);
      });
    });
  });
});
