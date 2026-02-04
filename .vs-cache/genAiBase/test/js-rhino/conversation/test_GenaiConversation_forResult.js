/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiConversation_forResult';
var logger = Logger.for(filename);

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.initialQuery = 'Initial query';
    this.secondInitialQuery = 'Second initial query';
    this.query = 'unstructured query';
    this.querySDL = 'what SDL is?';
    this.answer = 'Generic answer';
    this.queriesResult = TestApi.upsertBatchEntity(this.ctx, 'Genai.Query.Result', [
      {
        searchQuery: Genai.Query.fromString(this.initialQuery),
        usedTranslation: false,
        answer: this.answer,
        failed: false,
      },
      {
        searchQuery: Genai.Query.fromString(this.query),
        usedTranslation: false,
        answer: this.answer,
        failed: false,
        edited: true,
      },
      {
        searchQuery: Genai.Query.fromString(this.querySDL),
        usedTranslation: false,
        answer: this.answer,
        failed: false,
      },
      {
        searchQuery: Genai.Query.fromString(this.secondInitialQuery),
        usedTranslation: false,
        answer: this.answer,
        failed: false,
      },
      {
        searchQuery: Genai.Query.fromString(this.query, Genai.Query.Type.CHAT),
        usedTranslation: false,
        answer: this.answer,
        failed: false,
      },
      {
        searchQuery: Genai.Query.fromString(this.querySDL, Genai.Query.Type.QUERY_FROM_CHAT),
        usedTranslation: false,
        answer: this.answer,
        failed: false,
      },
    ]);

    this.messages = TestApi.upsertBatchEntity(this.ctx, 'Genai.Query.ChatMessage', [
      {
        message: 'Message 1',
        parentAiResult: this.queriesResult[0],
        sentTime: DateTime.now(),
        user: User.myUser(),
        responseAiResult: this.queriesResult[1],
      },
      {
        message: 'Message 2',
        parentAiResult: this.queriesResult[0],
        sentTime: DateTime.now(),
        user: User.myUser(),
        responseAiResult: this.queriesResult[2],
      },
      {
        message: 'Message 3',
        parentAiResult: this.queriesResult[3],
        sentTime: DateTime.now(),
        user: User.myUser(),
        responseAiResult: this.queriesResult[4],
      },
    ]);

    this.chatTrajectory = TestApi.upsertEntity(this.ctx, 'Genai.Agent.DynamicTrajectory', {
      queryResult: this.queriesResult[1],
    });

    var queryResult = Genai.Query.Result.forId(this.queriesResult[1]);
    var searchQuery = queryResult.searchQuery.withExecuteSpec({ agent: { id: 'default' } });
    queryResult.withSearchQuery(searchQuery).withPlan(this.chatTrajectory).merge({ mergeInclude: 'searchQuery, plan' });

    this.step = TestApi.upsertEntity(this.ctx, 'Genai.Agent.DynamicTrajectory.Step', {
      trajectory: this.chatTrajectory,
      agentName: 'placeHolderAgentName',
    });

    this.parentPlan = TestApi.upsertEntity(this.ctx, 'Genai.Agent.DynamicTrajectory', {
      queryResult: this.queriesResult[0],
    });
    var queryResultWithPlan = Genai.Query.Result.forId(this.queriesResult[0]);
    var searchQueryWithPlan = queryResultWithPlan.searchQuery.withExecuteSpec({ agent: { id: 'default' } });
    queryResultWithPlan
      .withSearchQuery(searchQueryWithPlan)
      .withPlan(this.parentPlan)
      .merge({ mergeInclude: 'searchQuery, plan' });

    this.statusHistory = TestApi.upsertBatchEntity(this.ctx, 'Genai.Query.Result.InterimStatusHistory', [
      {
        parent: this.queriesResult[0],
        timestamp: DateTime.now(),
        status: Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY,
      },
      {
        parent: this.queriesResult[0],
        timestamp: DateTime.now(),
        status: Genai.Query.Result.InterimStatusEnum.COMPLETED,
      },
      {
        parent: this.queriesResult[3],
        timestamp: DateTime.now(),
        status: Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY,
      },
      {
        parent: this.queriesResult[3],
        timestamp: DateTime.now(),
        status: Genai.Query.Result.InterimStatusEnum.COMPLETED,
      },
      {
        parent: this.queriesResult[5],
        timestamp: DateTime.now(),
        status: Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY,
      },
      {
        parent: this.queriesResult[5],
        timestamp: DateTime.now(),
        status: Genai.Query.Result.InterimStatusEnum.COMPLETED,
      },
    ]);

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe(':forResult', function () {
    describe('when the search query is a QUERY', function () {
      beforeAll(function () {
        this.conversation = Genai.Conversation.forResult(this.queriesResult[0], undefined, true);
        this.conversationMessages = this.conversation.chatMessages;
        this.parentQueryResult = Genai.Query.Result.make({ id: this.queriesResult[0] }).getMissing({
          include: Genai.Conversation.queryResultIncludeString(true),
        });
        this.parentMessages = this.parentQueryResult.chatHistory;
      });

      describe('the conversations returned', function () {
        it('should contains the expected parent id', function () {
          expect(this.conversation.parentResult.id).toEqual(this.parentQueryResult.id);
        });

        it('should contains the expected search query', function () {
          expect(this.conversation.parentResult.searchQuery).toEqual(this.parentQueryResult.searchQuery);
        });

        it('should contains the expected answer', function () {
          expect(this.conversation.parentResult.answer).toEqual(this.parentQueryResult.answer);
        });

        it('should contains the expected failed', function () {
          expect(this.conversation.parentResult.failed).toEqual(this.parentQueryResult.failed);
        });

        it('should contains the expected status history', function () {
          expect(this.conversation.parentResult.statusHistory.length).toEqual(2);
          expect(this.conversation.parentResult.statusHistory).toEqual(this.parentQueryResult.statusHistory);
        });

        it('should contains the expected used translation', function () {
          expect(this.conversation.parentResult.usedTranslation).toEqual(this.parentQueryResult.usedTranslation);
        });

        it('should contains the expected created date', function () {
          expect(this.conversation.parentResult.meta.created).toEqual(this.parentQueryResult.meta.created);
        });

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

        it('should contains the expected number of chat messages associated', function () {
          expect(this.conversation.chatMessages.length).toEqual(2);
        });
      });

      describe('the chat messages returned', function () {
        it('should return the values for first message', function () {
          checkMessages(this.conversationMessages[0], this.parentMessages[0]);
        });

        it('should return the values for second message', function () {
          checkMessages(this.conversationMessages[1], this.parentMessages[1]);
        });

        it('returns the trajectory data from chat messages', function () {
          var plan = this.conversationMessages[0].responseAiResult.plan;
          expect(plan.id).toEqual(this.chatTrajectory.id);
          expect(plan.steps[0].id).toEqual(this.step.id);
        });
      });
    });

    describe('when the search query is a chat query', function () {
      beforeAll(function () {
        this.chatQuery = Genai.Conversation.forResult(this.queriesResult[4], undefined, true);
        this.parentQueryResult = Genai.Query.Result.make({ id: this.queriesResult[3] }).getMissing({
          include: Genai.Conversation.queryResultIncludeString(true),
        });
      });

      describe('query result type Genai.Query.Type.CHAT', function () {
        it('should contains the expected parent id', function () {
          expect(this.chatQuery.parentResult.id).toEqual(this.queriesResult[3]);
        });

        it('should contains the expected search query', function () {
          expect(this.chatQuery.parentResult.searchQuery).toEqual(this.parentQueryResult.searchQuery);
        });

        it('should contains the expected answer', function () {
          expect(this.chatQuery.parentResult.answer).toEqual(this.parentQueryResult.answer);
        });

        it('should contains the expected failed', function () {
          expect(this.chatQuery.parentResult.failed).toEqual(this.parentQueryResult.failed);
        });

        it('should contains the expected status history', function () {
          expect(this.chatQuery.parentResult.statusHistory.length).toEqual(2);
          expect(this.chatQuery.parentResult.statusHistory).toEqual(this.parentQueryResult.statusHistory);
        });

        it('should contains the expected used translation', function () {
          expect(this.chatQuery.parentResult.usedTranslation).toEqual(this.parentQueryResult.usedTranslation);
        });

        it('should contains the expected created date', function () {
          expect(this.chatQuery.parentResult.meta.created).toEqual(this.parentQueryResult.meta.created);
        });

        it('should contains the expected number of chat messages associated', function () {
          expect(this.chatQuery.chatMessages.length).toEqual(1);
        });

        it('should return the values for first message', function () {
          checkMessages(this.chatQuery.chatMessages[0], this.parentQueryResult.chatHistory[0]);
        });
      });
    });

    describe('when the search query is from chat', function () {
      beforeAll(function () {
        this.chatQueryFromChat = Genai.Conversation.forResult(this.queriesResult[5]);
        this.parentQueryResult = Genai.Query.Result.make({ id: this.queriesResult[5] }).getMissing({
          include: Genai.Conversation.queryResultIncludeString(),
        });
      });

      describe('query result type Genai.Query.Type.QUERY_FROM_CHAT', function () {
        it('should contains the expected parent id', function () {
          expect(this.chatQueryFromChat.parentResult.id).toEqual(this.queriesResult[5]);
        });

        it('should contains the expected search query', function () {
          expect(this.chatQueryFromChat.parentResult.searchQuery).toEqual(this.parentQueryResult.searchQuery);
        });

        it('should contains the expected answer', function () {
          expect(this.chatQueryFromChat.parentResult.answer).toEqual(this.parentQueryResult.answer);
        });

        it('should contains the expected failed', function () {
          expect(this.chatQueryFromChat.parentResult.failed).toEqual(this.parentQueryResult.failed);
        });

        it('should contains the expected status history', function () {
          expect(this.chatQueryFromChat.parentResult.statusHistory.length).toEqual(2);
          expect(this.chatQueryFromChat.parentResult.statusHistory).toEqual(this.parentQueryResult.statusHistory);
        });

        it('should contains the expected used translation', function () {
          expect(this.chatQueryFromChat.parentResult.usedTranslation).toEqual(this.parentQueryResult.usedTranslation);
        });

        it('should contains the expected created date', function () {
          expect(this.chatQueryFromChat.parentResult.meta.created).toEqual(this.parentQueryResult.meta.created);
        });

        it('should contains the expected number of chat messages associated', function () {
          expect(this.chatQueryFromChat.chatMessages.length).toEqual(0);
        });
      });
    });

    describe('When the conversation is from /feed and has edited queries', function () {
      beforeAll(function () {
        this.conversation = Genai.Conversation.forResult(this.queriesResult[0], true);
        this.conversationMessages = this.conversation.chatMessages;
        this.parentQueryResult = Genai.Query.Result.make({ id: this.queriesResult[0] }).getMissing({
          include: Genai.Conversation.queryResultIncludeString(),
        });
        this.parentMessages = this.parentQueryResult.chatHistory?.filter((chatMessage) => {
          return !chatMessage?.responseAiResult?.edited;
        });
      });

      describe('the conversations returned', function () {
        it('should contains the expected parent id', function () {
          expect(this.conversation.parentResult.id).toEqual(this.parentQueryResult.id);
        });

        it('should contains the expected search query', function () {
          expect(this.conversation.parentResult.searchQuery).toEqual(this.parentQueryResult.searchQuery);
        });

        it('should contains the expected answer', function () {
          expect(this.conversation.parentResult.answer).toEqual(this.parentQueryResult.answer);
        });

        it('should contains the expected failed', function () {
          expect(this.conversation.parentResult.failed).toEqual(this.parentQueryResult.failed);
        });

        it('should contains the expected status history', function () {
          expect(this.conversation.parentResult.statusHistory.length).toEqual(2);
          expect(this.conversation.parentResult.statusHistory).toEqual(this.parentQueryResult.statusHistory);
        });

        it('should contains the expected used translation', function () {
          expect(this.conversation.parentResult.usedTranslation).toEqual(this.parentQueryResult.usedTranslation);
        });

        it('should contains the expected created date', function () {
          expect(this.conversation.parentResult.meta.created).toEqual(this.parentQueryResult.meta.created);
        });

        it('should contains the expected number of chat messages associated', function () {
          expect(this.conversation.chatMessages.length).toEqual(1);
        });
      });

      describe('the chat messages returned', function () {
        it('should return the values for first message', function () {
          checkMessages(this.conversationMessages[0], this.parentMessages[0]);
        });
      });
    });

    describe('when the search query is from child result it recurses up to the parent result', function () {
      beforeAll(function () {
        this.parentQuery = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
          id: 'test_parent_query',
          answer: 'parent answer',
          searchQuery: Genai.Query.fromString(this.query, Genai.Query.Type.QUERY),
        });
        this.childQuery1 = this.parentQuery.createChildResult('fakeTool1');
        this.childQuery2 = this.childQuery1.createChildResult('fakeTool2');
        this.conversationResult = Genai.Conversation.forResult(this.childQuery2, undefined, true);
      });

      afterAll(function () {
        this.childQuery1.remove();
        this.childQuery2.remove();
      });

      it('recursively traverses up to find parent result', function () {
        expect(this.conversationResult.parentResult.id).toEqual(this.parentQuery.id);
      });
    });

    describe(':queryResultIncludeString', function () {
      it('should return the correct include fields for full result', function () {
        var includeString = Genai.Conversation.queryResultIncludeString(true);
        expect(includeString).toContain('meta.created');
        expect(includeString).toContain('latency');
        expect(includeString).toContain('parsedEngineLog');
        expect(includeString).toContain('userEmail');
      });

      it('should return the correct include fields for non-full result', function () {
        var includeString = Genai.Conversation.queryResultIncludeString(false);
        expect(includeString).not.toContain('meta.created');
        expect(includeString).not.toContain('latency');
        expect(includeString).not.toContain('parsedEngineLog');
        expect(includeString).not.toContain('userEmail');
      });
    });
  });
});

function checkMessages(conversationMessage, parentMessage) {
  expect(conversationMessage.message).withContext('message should be the same').toEqual(parentMessage.message);
  expect(conversationMessage.parentAiResult)
    .withContext('parentAiResult should be the same')
    .toEqual(parentMessage.parentAiResult);
  expect(conversationMessage.sentTime).withContext('sentTime should be the same').toEqual(parentMessage.sentTime);
  expect(conversationMessage.user).withContext('user should be the same').toEqual(parentMessage.user);
  expect(conversationMessage.responseAiResult.withoutField('plan'))
    .withContext('responseAiResult should be the same')
    .toEqual(parentMessage.responseAiResult.withoutField('plan'));
}
