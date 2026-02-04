/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_QueryOrchestrator_ChatMemory';

describe(filename, function () {
  function createSeedDataForRewrite(ctx) {
    var firstProgressResult = TestApi.upsertEntity(ctx, 'Genai.Query.Result', {
      searchQuery: Genai.Query.fromString('How many planets exist in the solar system?'),
      answer: 'There are 8 planets in the solar system',
    }).get('this');
    var secondProgressResult = TestApi.upsertEntity(ctx, 'Genai.Query.Result', {
      searchQuery: Genai.Query.fromString('What is the biggest?'),
    }).get('this');
    return [firstProgressResult, secondProgressResult];
  }

  function checkResultSuccess(result) {
    if (result.failed) {
      fail('result.failed: engineLog=' + result.get('engineLog').engineLog);
    }
  }

  beforeAll(function () {
    Genai.PyUtil.terminateAllEngines();
    Genai.Setup.clearGenaiConfigs();
    TestApi.setMisConfig();
    TestApi.setAwsBedrockKeys();
    TestApi.setOpenAiApiKey();
    TestApi.setGcpKey();

    // Generate a separate context that can be set up and torn down independently of the QO ctx
    this.ctx = TestApi.createContext(filename);
    this.setupRes = TestApi.setUpQueryOrchestratorTest(filename);
    Genai.Translator.Config.setConfigValue('enabled', false, ConfigOverride.APP);
    this.queryOrchestrator = this.setupRes.queryOrchestrator;
    this.resultIds = this.setupRes.resultIds;
    this.queryOrchestrator = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default');
    this.summaryBufferExpectedResults = [
      'The human asks about the number of planets',
      'what is the biggest planet',
      'Jupiter',
    ];
    this.expectedRewriterResults = ['solar', 'system'];

    /*
     *TODO: GEN-13044 Re-enable mocking
     *this.originalMockLlmConfigMode = TestApi.enableMockLlmPlaybackIfInJarvis();
     *TestApi.setMockLlmConfigPath(filename);
     */
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    TestApi.tearDownQueryOrchestratorTest(this.setupRes);

    /*
     *TODO: GEN-13044 Re-enable mocking
     *Genai.Llm.MockLlmConfig.inst().setConfigValue('mode', this.originalMockLlmConfigMode);
     */
  });

  describe('generateChatMemory ', function () {
    // TODO GEN-11239 Add tests for llama-3.1-8B model to repace zephyr tests
    ['gpt4', 'gemini', 'claude'].forEach((testCase) => {
      describe('with ' + testCase, function () {
        beforeAll(function () {
          Genai.UnstructuredQuery.Engine.stopAllHandlers();
        });

        afterAll(function () {
          TestApi.teardown(this.ctx);
        });

        describe('rewrite', function () {
          it('should return the correct answer', function () {
            const [firstProgressResult, secondProgressResult] = createSeedDataForRewrite(this.ctx);
            var result = this.queryOrchestrator
              .generateChatMemory(secondProgressResult, firstProgressResult, null, 'question_rewriter_' + testCase)
              .get('this');
            checkResultSuccess(result);

            /*
             * Question rewrite should contain some expected keyword(s) based on conversation context
             * e.g. "What is the biggest planet in the solar system?"
             */
            TestApi.checkStringMatches(result.chatMemory.chatMemoryResult, this.expectedRewriterResults);
          });
        });

        describe('with summary', function () {
          beforeAll(function () {
            TestApi.createSeedDataForSummaryTest(this.ctx);
            this.summaryOriginalQuery = Genai.Query.Result.forId('summary_tutorial_parent_result');
            this.summaryCurrentQuery = Genai.Query.Result.forId('summary_tutorial_followup_result_2');
            this.summaryExpectedResults = ['The human', 'Assistant', 'type'];
          });

          it('should return the correct answer', function () {
            var result = this.queryOrchestrator
              .generateChatMemory(this.summaryCurrentQuery, this.summaryOriginalQuery, null, 'summary_' + testCase)
              .get('this');
            checkResultSuccess(result);

            /*
             * Summary should contain some expected keyword(s) based on conversation context
             * e.g. "The human asks what a type is, and the Assistant explains that a type is the definition of a
             * potentially complex object that the system understands, similar to a class in object-oriented programming
             * languages, but nottied to any particular programming language. Types are the primary interface for all
             * platform services and the primary way application logic is organized. Some types are defined by and built
             * into the platform itself, while others are defined by developers using the platform. Types may normally
             * be inherited by other types and their fields and methods modified. Additionally, a type becomes
             * persistable if it is a {@link Persistable} type, which is the base type for all types that support data
             * persistence in either a relational or key/value data store."
             */
            TestApi.checkStringMatches(result.chatMemory.chatMemoryResult, this.summaryExpectedResults);
          });
        });

        describe('with summary buffer', function () {
          beforeAll(function () {
            TestApi.createSeedDataForSummaryBufferTest(this.ctx);
            this.summaryBufferOriginalQuery = Genai.Query.Result.forId('summary_buffer_tutorial_parent_result');
            this.summaryBufferCurrentQuery = Genai.Query.Result.forId('summary_buffer_tutorial_followup_result_3');
          });

          it('should return the correct answer', function () {
            var result = this.queryOrchestrator
              .generateChatMemory(
                this.summaryBufferCurrentQuery,
                this.summaryBufferOriginalQuery,
                null,
                'summary_buffer_' + testCase
              )
              .get('this');

            checkResultSuccess(result);

            /*
             * Summary buffer should contain some expected keyword(s) based on conversation context
             * e.g. "Summary of earlier conversation:\nThe human asks about the number of planets in the Solar System,
             * and the Assistant responds that there are eight planets.\n\nLatest conversation:\nQ. what is the biggest
             * planet of the solar system?\nA. Jupiter is the fifth planet from the Sun, and the largest in the solar
             * system more than twice as massive as the other planets combined.\nQ. what is the temperature of Jupiter?
             * A. Jupiter's average temperature is -166°F (-110°C) at the point where the atmospheric pressure is equal
             * to one bar on Earth.\n"
             */
            TestApi.checkStringMatches(result.chatMemory.chatMemoryResult, this.summaryBufferExpectedResults);
          });
        });
      });
    });

    describe('with buffer', function () {
      beforeAll(function () {
        this.ctx = TestApi.createContext('test_buffer');
        TestApi.createSeedDataForSummaryBufferTest(this.ctx);
        this.summaryBufferOriginalQuery = Genai.Query.Result.forId('summary_buffer_tutorial_parent_result');
        this.summaryBufferCurrentQuery = Genai.Query.Result.forId('summary_buffer_tutorial_followup_result_3');
      });

      afterAll(function () {
        TestApi.teardown(this.ctx);
      });

      it('should return the correct answer', function () {
        var result = this.queryOrchestrator
          .generateChatMemory(
            this.summaryBufferCurrentQuery,
            this.summaryBufferOriginalQuery,
            this.summaryBufferOriginalQuery.get(
              '{chatHistory:[id,{responseAiResult:[searchQuery,answer,chatMemory]}]},id'
            ).chatHistory,
            'buffer'
          )
          .get('this');
        checkResultSuccess(result);

        /*
         * Buffer should contain some expected keyword(s) based on conversation context
         * e.g. "Q. what is the biggest planet of the solar system?\nA. Jupiter is the fifth
         * planet from the Sun, and the largest in the solar system – more than twice as massive
         * as the other planets combined.\nQ. what is the temperature of Jupiter?\nA. Jupiter's
         * average temperature is -166°F (-110°C) at the point where the atmospheric pressure is
         * equal to one bar on Earth.\n"
         */
        expect(result.chatMemory.chatMemoryResult).toContain('fifth planet from the Sun, and the largest in the solar');
        expect(result.chatMemory.chatMemoryResult).toContain('the atmospheric pressure is equal to one bar on Earth');
      });
    });
  });

  describe('query with chatWithFullHistory', function () {
    beforeAll(function () {
      Genai.UnstructuredQuery.Engine.Config.setConfigValue('chatWithFullHistory', true, ConfigOverride.APP);
      Genai.UnstructuredQuery.Engine.stopAllHandlers();
    });

    afterAll(function () {
      TestApi.teardown(this.ctx);
    });

    describe('with rewrite', function () {
      beforeAll(function () {
        Genai.UnstructuredQuery.Engine.Config.setConfigValue(
          'chatMemoryConfigName',
          'question_rewriter_gpt4',
          ConfigOverride.APP
        );
        Genai.UnstructuredQuery.Engine.stopAllHandlers();
        this.toProgressResultMock = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
          searchQuery: Genai.Query.make({
            rawQuery: 'What is the biggest?',
            baseQuery: 'What is the biggest?',
            standaloneQuery: 'What is the biggest planet in the solar system?',
          }),
          answer: 'Jupiter is the biggest planet in the solar system',
          chatMemory: Genai.ChatMemoryOutput.Rewriter.make({
            chatMemoryResult: 'What is the biggest planet in the solar system?',
            originalQuestion: 'What is the biggest?',
          }),
        }).get('this');
      });

      afterAll(function () {
        Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      });

      it('should return the correct answer and standaloneQuery', function () {
        var result = this.queryOrchestrator.query(this.toProgressResultMock).get('this');
        var expectedResult = 'What is the biggest planet in the solar system?';
        checkResultSuccess(result);

        /*
         * QueryOrchestrator.query should return the baseQuery with the chatMemoryResult
         * e.g. "What is the biggest planet in the solar system?"
         */
        expect(result.searchQuery.baseQuery).withContext('baseQuery').toEqual(expectedResult);
        expect(result.searchQuery.baseQuery)
          .withContext('baseQuery != rawQuery')
          .not.toEqual(result.searchQuery.rawQuery);

        /*
         * This validation helps us to verify that the standaloneQuery is maintained when standaloneQuery
         * is different from the baseQuery for QueryOrchestrator.query
         */
        expect(result.searchQuery.standaloneQuery).withContext('standaloneQuery').toEqual(expectedResult);

        if (result.searchQuery.baseQuery !== expectedResult || result.searchQuery.standaloneQuery !== expectedResult) {
          fail('result for failure: ' + result.get().toJsonString());
        }
      });
    });

    describe('with summary', function () {
      beforeAll(function () {
        Genai.UnstructuredQuery.Engine.Config.setConfigValue(
          'chatMemoryConfigName',
          'summary_gpt4',
          ConfigOverride.APP
        );
        Genai.UnstructuredQuery.Engine.stopAllHandlers();
        this.toProgressResultMock = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
          searchQuery: Genai.Query.make({
            rawQuery: 'Who is it?',
            baseQuery: 'Who is it?',
            standaloneQuery: 'Who is the chairman of the board of the issuers?',
          }),
          answer: 'this is that',
          chatMemory: Genai.ChatMemoryOutput.make({
            chatMemoryResult: 'The human asks something, and the Assistant explains that something.',
          }),
        }).get('this');
      });

      afterAll(function () {
        Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      });

      it('should return the correct answer and standaloneQuery', function () {
        var result = this.queryOrchestrator.query(this.toProgressResultMock).get('this');
        checkResultSuccess(result);

        /*
         * QueryOrchestrator.query should return the baseQuery with the chatMemoryResult plus the rawQuery
         * e.g. "The human asks something, and the Assistant explains that something.\nWho is it?"
         */
        expect(result.searchQuery.baseQuery).toEqual(
          'The human asks something, and the Assistant explains that something.\nWho is it?'
        );
        expect(result.searchQuery.baseQuery).not.toEqual(result.searchQuery.rawQuery);

        /*
         * This validation helps us to verify that the standaloneQuery is maintained when standaloneQuery
         * is different from the baseQuery for QueryOrchestrator.query
         */
        expect(result.searchQuery.standaloneQuery).toEqual('Who is the chairman of the board of the issuers?');
      });
    });

    describe('originalAiResult', function () {
      beforeAll(function () {
        this.originalQuestion = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
          searchQuery: Genai.Query.fromString('What is the original question?'),
        }).get('this');
      });

      it('should return the original query', function () {
        var result = this.queryOrchestrator.query(this.originalQuestion).get('this');
        checkResultSuccess(result);

        expect(result.searchQuery.baseQuery).toEqual('What is the original question?');
      });
    });
  });
});
