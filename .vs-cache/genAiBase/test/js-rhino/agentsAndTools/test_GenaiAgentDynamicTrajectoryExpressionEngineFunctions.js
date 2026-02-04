/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiAgentDynamicTrajectoryExpressionEngineFunctions.js';
var logger = Logger.for(filename);

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.start = DateTime.now().minusDays(1);

    // With plan
    this.queryResult1 = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      searchQuery: Genai.Query.fromString('first test'),
    });

    // With plan but insufficient history
    this.queryResult2 = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      searchQuery: Genai.Query.fromString('second test'),
    });

    // With plan but no start time
    this.queryResult3 = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      searchQuery: Genai.Query.fromString('third test'),
    });

    // With plan but no end time
    this.queryResult4 = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      searchQuery: Genai.Query.fromString('fourth test'),
    });

    this.testTool = Genai.Agent.Tool.MultiSourceSynthesizer.make({ id: 'MultiSourceSynthesizer_default_test' });

    this.testStep = Genai.Agent.DynamicTrajectory.Step.make({
      stepId: 'test',
    });

    this.plan1 = TestApi.upsertEntity(this.ctx, 'Genai.Agent.DynamicTrajectory', {
      steps: [this.testStep],
      queryResult: this.queryResult1,
    });
    this.queryResult1 = this.queryResult1.withPlan(this.plan1).merge({ mergeInclude: 'plan', returnInclude: 'this' });

    this.plan2 = TestApi.upsertEntity(this.ctx, 'Genai.Agent.DynamicTrajectory', {
      steps: [this.testStep],
      queryResult: this.queryResult2,
    });
    this.queryResult2 = this.queryResult2.withPlan(this.plan2).merge({ mergeInclude: 'plan', returnInclude: 'this' });

    this.plan3 = TestApi.upsertEntity(this.ctx, 'Genai.Agent.DynamicTrajectory', {
      steps: [this.testStep],
      queryResult: this.queryResult3,
    });
    this.queryResult3 = this.queryResult3.withPlan(this.plan3).merge({ mergeInclude: 'plan', returnInclude: 'this' });

    this.plan4 = TestApi.upsertEntity(this.ctx, 'Genai.Agent.DynamicTrajectory', {
      steps: [this.testStep],
      queryResult: this.queryResult4,
    });
    this.queryResult4 = this.queryResult4.withPlan(this.plan4).merge({ mergeInclude: 'plan', returnInclude: 'this' });

    this.status = TestApi.upsertBatchEntity(
      this.ctx,
      'Genai.Query.Result.InterimStatusHistory',
      [
        {
          parent: this.queryResult1,
          status: Genai.Query.Result.InterimStatusEnum.INITIALIZE_DYNAMIC_AGENT,
          meta: { created: this.start.plusMillis(3000) },
        },
        {
          parent: this.queryResult1,
          status: Genai.Query.Result.InterimStatusEnum.COMPLETED,
          meta: { created: this.start.plusMillis(5000) },
        },
        {
          parent: this.queryResult1,
          status: Genai.Query.Result.InterimStatusEnum.USE_DYNAMIC_AGENT,
          meta: { created: this.start.plusMillis(8000) },
        },
        {
          parent: this.queryResult1,
          status: Genai.Query.Result.InterimStatusEnum.COMPLETED,
          meta: { created: this.start.plusMillis(13000) },
        },
        {
          parent: this.queryResult2,
          status: Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY,
          meta: { created: this.start.plusMillis(21000) },
        },
        {
          parent: this.queryResult3,
          status: Genai.Query.Result.InterimStatusEnum.COMPLETED,
          meta: { created: this.start.plusMillis(34000) },
        },
        {
          parent: this.queryResult3,
          status: Genai.Query.Result.InterimStatusEnum.COMPLETED,
          meta: { created: this.start.plusMillis(55000) },
        },
        {
          parent: this.queryResult4,
          status: Genai.Query.Result.InterimStatusEnum.INITIALIZE_DYNAMIC_AGENT,
          meta: { created: this.start.plusMillis(89000) },
        },
        {
          parent: this.queryResult4,
          status: Genai.Query.Result.InterimStatusEnum.USE_DYNAMIC_AGENT,
          meta: { created: this.start.plusMillis(144000) },
        },
      ],
      { metaOverride: true }
    );

    this.planGenerationHelper = function (plan) {
      return plan.get('planGenerationLatency').planGenerationLatency;
    };

    this.planExecutionHelper = function (plan) {
      return plan.get('planExecutionLatency').planExecutionLatency;
    };
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::getAgentInitializationLatency', function () {
    it('complete information', function () {
      const latency = this.planGenerationHelper(this.plan1);
      expect(latency).toEqual(2000);
    });

    it('insufficient history', function () {
      const latency = this.planGenerationHelper(this.plan2);
      expect(latency).toEqual(-1);
    });

    it('no start', function () {
      const latency = this.planGenerationHelper(this.plan3);
      expect(latency).toEqual(-1);
    });

    it('no end', function () {
      const latency = this.planGenerationHelper(this.plan4);
      expect(latency).toEqual(-1);
    });
  });

  describe('::getAgentExecutionLatency', function () {
    it('complete information', function () {
      const latency = this.planExecutionHelper(this.plan1);
      expect(latency).toEqual(5000);
    });

    it('insufficient history', function () {
      const latency = this.planExecutionHelper(this.plan2);
      expect(latency).toEqual(-1);
    });

    it('no start', function () {
      const latency = this.planExecutionHelper(this.plan3);
      expect(latency).toEqual(-1);
    });

    it('no end', function () {
      const latency = this.planExecutionHelper(this.plan4);
      expect(latency).toEqual(-1);
    });
  });
});
