/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_singleHop_tools';
var testObjs;
var resultIds;

describe(filename, function () {
  testObjs = [
    {
      query: 'According to our documents who is the Chairman of the Board of Issuers?',
      shouldBeStructured: false,
      enableFollowUpSuggestions: true,
      expectedTool: 'documentQuestionAnswer()',
      expectedAnswersList: [['robert l. smith', 'robert smith']],
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
      shouldBeStructured: true,
      enableFollowUpSuggestions: true,
      expectedTool: 'relationalDatabaseQuery()',
      expectedAnswersList: [['25', 'San Francisco']],
      rationale: ['Genai.Aircraft', 'EvalSpec', 'San Francisco'],
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

  function checkStepSingleHop(step, testObj, result) {
    expect(step.thought).withContext('step.thought').toEqual(testObj.query);
    expect(step.actionInput).withContext('step.actionInput').toEqual(testObj.query);
    expect(step.actionName).withContext('step.actionName').toEqual(testObj.expectedTool);
    expect(step.observation).withContext('step.observation').toEqual(result.answer);
    if (testObj.shouldBeStructured) {
      expect(step.structuredQuerySpec).withContext('step.structuredQuerySpec').toBeDefined();
    } else {
      expect(step.structuredQuerySpec).withContext('step.structuredQuerySpec').toBeUndefined();
    }
  }

  function checkResultsSingleHop(result, testObj, checkStatuses, isStale) {
    var statusHistory;
    if (isStale) {
      TestApi.checkStaleResult(result, testObj);
      return;
    }

    expect(result.failed).withContext('result.failed').toBeFalse();
    if (result.failed) {
      fail('engineLog for unexpected failure: ' + result.engineLog);
    }

    statusHistory = result.get('statusHistory.status').statusHistory;
    expect(result.steps.length).withContext('result.steps.length').toEqual(1);
    checkStepSingleHop(result.steps[0], testObj, result);

    if (checkStatuses) {
      TestApi.checkInterimStatuses(statusHistory, testObj.expectedStatuses);
    }

    if (testObj.shouldBeStructured) {
      TestApi.checkStringMatches(result.rationale, testObj.rationale, false, 'rationale');
      var engineLog;
      if (result.engineLog) {
        engineLog = JSON.parse(result.engineLog)[0];
      }
      var specLimit = (engineLog && engineLog.limit) || -1;
      if (specLimit !== 1) {
        // Only one result means no visualization
        TestApi.checkVisualization(result.visualization, true);

        TestApi.checkInterimStatuses(statusHistory, [Genai.Query.Result.InterimStatusEnum.GENERATE_VISUALIZATION]);
      }
      _.each(testObj.expectedAnswersList, function (expectedAnswers) {
        TestApi.checkStringMatches(result.answer, expectedAnswers, false, 'answer');
      });
    }

    if (testObj.enableFollowUpSuggestions) {
      expect(result.engineLog).toContain('SuggestedFollowUpQueries');
    }

    if (testObj.expectedSpec) {
      TestApi.checkStructuredResultSource(result, testObj.expectedSpec, false);
    }

    TestApi.checkStringMatches(result.engineLog, testObj.expectedEngineLogString, false, 'engineLog');

    if (!testObj.shouldBeStructured) {
      /*
       * Structured query tools log intermediate steps while creating the spec, some of which
       * may include errors that are handled.
       */
      expect(result.engineLog).not.toContain('ERROR');
    }
  }

  function getInProgressGenAiResultForTestObj(testObj) {
    return Genai.Query.Result.fetch({
      filter: Filter.intersects('id', testObj.queryId).and().eq('searchQuery.rawQuery', testObj.query),
      limit: 1,
    }).first();
  }

  beforeAll(function () {
    this.setupRes = TestApi.setUpQueryOrchestratorTest(filename, testObjs);
    this.queryOrchestrator = this.setupRes.queryOrchestrator;
    resultIds = this.setupRes.resultIds;
    testObjs.forEach((testObj, index) => {
      testObj.queryId = resultIds[index];
    });
  });

  afterAll(function () {
    TestApi.tearDownQueryOrchestratorTest(this.setupRes);
  });

  testObjs.forEach(function (testObj) {
    describe(testObj.expectedTool, function () {
      beforeAll(function () {
        this.queryOrchestrator.config().setConfigValue('doNotCreateRelations', testObj.doNotCreateRelations);
        this.queryOrchestrator.config().setConfigValue('enableFollowUpSuggestions', testObj.enableFollowUpSuggestions);
        this.queryOrchestrator.initialize(true);
        this.ctx = this.setupRes.ctx;

        // Used to check the call count and to throw an error if similaritySearch is called when it should not be
        this.similaritySearchSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense.Engine', 'similaritySearch');

        if (testObj.doNotCreateRelations) {
          this.similaritySearchSpy = this.similaritySearchSpy.callFake(
            Lambda.fromJsFunc(function (_action, _input) {
              throw new Error('Should not be called!');
            })
          );
        } else {
          this.similaritySearchSpy = this.similaritySearchSpy.callThrough();
        }
        this.similaritySearchSpy.register();
      });

      afterAll(function () {
        Genai.App.State.removeAll({ filter: Filter.exists('id') }, true);
        Genai.App.State.setState('dataModelState', Genai.App.State.FieldStatus.SYNCED);
      });

      // TODO GEN-12252: Update to work with structured db agent
      xit('produces the expected results when data model is not "stale"', function () {
        var similaritySearchSpyCountBefore = this.similaritySearchSpy.getActionMock().callCount();

        var finalResult = this.queryOrchestrator
          .chatQuery(inProgressResult, null, null, false, false)
          .get('this, steps.this');

        expect(this.similaritySearchSpy.getActionMock().callCount())
          .withContext('similaritySearch call count')
          .toEqual(similaritySearchSpyCountBefore + testObj.expectedSimilaritySearchCallCount);

        checkResultsSingleHop(finalResult, testObj, true);
      });

      if (testObj.shouldBeStructured) {
        // TODO GEN-11619: Structured db agent does not show error when data model graph is stale
        xdescribe('with stale data model', function () {
          it('produces the expected results', function () {
            Genai.App.State.setState('dataModelState', Genai.App.State.FieldStatus.STALE);

            var inProgressResult = getInProgressGenAiResultForTestObj(testObj);

            finalResult = Genai.Agent.QueryOrchestrator.chatQuery(inProgressResult).get(
              'this, statusHistory.status, failed'
            );

            checkResultsSingleHop(finalResult, testObj, true, true);
          });
        });
      }

      it('picks the right tool', function () {
        this.pickToolResult = Genai.Query.Result.make({
          searchQuery: Genai.Query.fromString(testObj.query).withDetectedLanguage('en'),
        }).upsert();
        var selectedTool = this.queryOrchestrator.pickNextTool(testObj.query, this.pickToolResult);
        expect(selectedTool).toEqual(testObj.expectedTool);
      });
    });
  });
});
