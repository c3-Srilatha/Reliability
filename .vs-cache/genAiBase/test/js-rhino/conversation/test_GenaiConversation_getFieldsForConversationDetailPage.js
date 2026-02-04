/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiConversation_getFieldsForConversationDetailPage';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.initialQuery = 'first initial query';

    this.latencies = [3000, 5000, 8000, 13000, 75000, 20000];

    this.testUserId = filename + '_testUser';
    this.testUser = TestIdp.createTestUser(this.testUserId, 'Password1', ['Genai.AdminUser']);

    this.queryResults = TestApi.upsertBatchEntity(
      this.ctx,
      'Genai.Query.Result',
      [
        {
          searchQuery: Genai.Query.fromString('test query 1'),
          meta: {
            createdBy: this.testUser,
          },
        },
        {
          searchQuery: Genai.Query.fromString('test query 2'),
          meta: {
            createdBy: this.testUser,
          },
        },
        {
          searchQuery: Genai.Query.fromString('test query 3'),
          meta: {
            createdBy: this.testUser,
          },
        },
      ],
      { metaOverride: true }
    );

    this.testTool = Genai.Agent.Tool.MultiSourceSynthesizer.make({ id: 'MultiSourceSynthesizer_default_test' });

    this.start = DateTime.now().minusDays(1);

    this.parentPlan = TestApi.upsertEntity(this.ctx, 'Genai.Agent.DynamicTrajectory', {
      queryResult: this.queryResults[0],
    });

    var queryResultWithPlan = Genai.Query.Result.forId(this.queryResults[0]);
    var searchQueryWithPlan = queryResultWithPlan.searchQuery.withExecuteSpec({ agent: { id: 'default' } });
    queryResultWithPlan
      .withSearchQuery(searchQueryWithPlan)
      .withPlan(this.parentPlan)
      .merge({ mergeInclude: 'searchQuery, plan' });

    this.messages = TestApi.upsertBatchEntity(this.ctx, 'Genai.Query.ChatMessage', [
      {
        message: 'Message 1',
        sentTime: DateTime.now(),
        user: User.myUser(),
        parentAiResult: this.queryResults[0],
        responseAiResult: this.queryResults[1],
      },
      {
        message: 'Message 1',
        sentTime: DateTime.now(),
        user: User.myUser(),
        parentAiResult: this.queryResults[0],
        responseAiResult: this.queryResults[2],
      },
    ]);

    this.statusHistory = TestApi.upsertBatchEntity(
      this.ctx,
      'Genai.Query.Result.InterimStatusHistory',
      [
        {
          parent: this.queryResults[0],
          status: Genai.Query.Result.InterimStatusEnum.INITIALIZE_PLANNER,
          meta: { created: this.start.plusMillis(this.latencies[0]) },
        },
        {
          parent: this.queryResults[0],
          status: Genai.Query.Result.InterimStatusEnum.GENERATE_PLAN_COMPLETED,
          meta: { created: this.start.plusMillis(this.latencies[1]) },
        },
        {
          parent: this.queryResults[0],
          status: Genai.Query.Result.InterimStatusEnum.EXECUTE_PLAN,
          meta: { created: this.start.plusMillis(this.latencies[2]) },
        },
        {
          parent: this.queryResults[0],
          status: Genai.Query.Result.InterimStatusEnum.COMPLETED,
          meta: { created: this.start.plusMillis(this.latencies[3]) },
        },
        {
          parent: this.queryResults[1],
          status: Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY,
          meta: { created: DateTime.now().minusMillis(this.latencies[4]) },
        },
        {
          parent: this.queryResults[1],
          status: Genai.Query.Result.InterimStatusEnum.COMPLETED,
          meta: { created: DateTime.now() },
        },
        {
          parent: this.queryResults[2],
          status: Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY,
          meta: { created: DateTime.now().minusMillis(this.latencies[5]) },
        },
        {
          parent: this.queryResults[2],
          status: Genai.Query.Result.InterimStatusEnum.COMPLETED,
          meta: { created: DateTime.now() },
        },
      ],
      { metaOverride: true }
    );

    TestApi.waitForSetup(this.ctx);

    this.queryResults = _.map(this.queryResults, (result) => {
      return Genai.Query.Result.make({ id: result }).get('latency');
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::getFieldsForConversationDetailPage', function () {
    beforeAll(function () {
      this.returnedFields = Genai.Conversation.getFieldsForConversationDetailPage(this.queryResults[0]);
      this.conversation = Genai.Conversation.forResult(this.queryResults[0], undefined, true);
      this.conversationMessages = this.conversation.chatMessages;
      this.parentQueryResult = Genai.Query.Result.make({ id: this.queryResults[0] }).getMissing({
        include: Genai.Conversation.queryResultIncludeString(true),
      });
      this.parentMessages = this.parentQueryResult.chatHistory;
    });

    it('returns the correct fields', function () {
      expect(this.returnedFields.avgLatency).toContain(31.67);
      expect(this.returnedFields.userEmail).toEqual(this.testUserId + '@c3');
    });

    describe('when the result contains a plan', function () {
      it('should contain plan', function () {
        expect(this.conversation.parentResult.plan.id).toEqual(this.parentQueryResult.plan.id);
      });

      it('should contain plan with planExecutionLatency', function () {
        expect(this.conversation.parentResult.plan.planExecutionLatency).toEqual(
          this.parentQueryResult.plan.get('planExecutionLatency').planExecutionLatency
        );
      });

      it('should contain plan with planGenerationLatency', function () {
        expect(this.conversation.parentResult.plan.planGenerationLatency).toEqual(
          this.parentQueryResult.plan.get('planGenerationLatency').planGenerationLatency
        );
      });

      it('should contain the expected number of chat messages associated', function () {
        expect(this.conversation.chatMessages.length).toEqual(2);
      });
    });
  });

  describe(':calculateLatency', function () {
    describe('when both planGenerationLatency and planExecutionLatency are greater than 0', function () {
      beforeAll(function () {
        this.result = Genai.Query.Result.make({
          plan: {
            planExecutionLatency: 10,
            planGenerationLatency: 20,
          },
        });
      });

      it('returns the sum of latencies', function () {
        var latency = Genai.Conversation.calculateLatency(this.result);
        expect(latency).toEqual(30);
      });
    });

    describe('when only planGenerationLatency is greater than 0', function () {
      beforeAll(function () {
        this.result = Genai.Query.Result.make({
          plan: {
            planGenerationLatency: 15,
            planExecutionLatency: -5,
          },
        });
      });

      it('returns only planGenerationLatency as latency', function () {
        var latency = Genai.Conversation.calculateLatency(this.result);
        expect(latency).toEqual(15);
      });
    });

    describe('when only planExecutionLatency is greater than 0', function () {
      beforeAll(function () {
        this.result = Genai.Query.Result.make({
          plan: {
            planGenerationLatency: 0,
            planExecutionLatency: 25,
          },
        });
      });

      it('returns only planExecutionLatency as latency', function () {
        var latency = Genai.Conversation.calculateLatency(this.result);
        expect(latency).toEqual(25);
      });
    });

    describe('when neither planGenerationLatency or planExecutionLatency are greater than 0', function () {
      beforeAll(function () {
        this.result = Genai.Query.Result.make({
          plan: {
            planGenerationLatency: -20,
            planExecutionLatency: -10,
          },
        });
      });

      it('returns 0 as latency', function () {
        var latency = Genai.Conversation.calculateLatency(this.result);
        expect(latency).toEqual(0);
      });
    });
  });
});
