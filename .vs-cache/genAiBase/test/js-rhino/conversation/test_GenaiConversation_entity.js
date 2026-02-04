/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiConversation_entity';
var logger = Logger.for(filename);

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.basicUser = TestIdp.createTestUsersForGroup('Genai.BasicUser')[0];
    this.adminUser = TestIdp.createTestUsersForGroup('Genai.AdminUser')[0];

    this.basicUserQueryResult = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      id: 'basic_user_query_id',
      searchQuery: Genai.Query.fromString('basic user query'),
    });

    this.adminUserQueryResult = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      id: 'admin_user_query_id',
      searchQuery: Genai.Query.fromString('admin user query'),
    });

    // Create conversations as different users
    this.basicUserConversation = TestRunner.asUser(
      this.basicUser,
      Lambda.fromJsFunc(function (queryResult) {
        return Genai.Conversation.make({
          parentResult: queryResult,
          title: 'Basic User Conversation',
          projects: ['default'],
        }).merge();
      }).partiallyCall([this.basicUserQueryResult])
    );

    this.adminUserConversation = TestRunner.asUser(
      this.adminUser,
      Lambda.fromJsFunc(function (queryResult) {
        return Genai.Conversation.make({
          parentResult: queryResult,
          title: 'Admin User Conversation',
          projects: ['default'],
        }).merge();
      }).partiallyCall([this.adminUserQueryResult])
    );
  });

  afterAll(function () {
    TestIdp.removeUser(this.basicUser);
    TestIdp.removeUser(this.adminUser);
    TestApi.teardown(this.ctx);
  });

  describe('::removeItem', function () {
    beforeAll(function () {
      this.removedConversation = this.basicUserConversation.removeItem();
    });

    it('marks the conversation as "removed"', function () {
      expect(this.removedConversation.softRemoved).toBe(true); // Returned value
      expect(this.basicUserConversation.get('softRemoved').softRemoved).toBe(true); // Persisted value
    });
  });

  describe('::rename', function () {
    beforeAll(function () {
      this.newTitle = 'this is a new test conversation';
      this.renamedConversation = this.adminUserConversation.get().rename(this.newTitle);
    });

    it('renames the conversation', function () {
      expect(this.renamedConversation.title).toEqual(this.newTitle); // Returned value
      expect(this.renamedConversation.get('title').title).toEqual(this.newTitle); // Persisted value
    });
  });

  describe('::fetch(Count)ForUser', function () {
    beforeAll(function () {
      this.fetchCountForUserHelper = (spec) => {
        return TestRunner.asUser(
          this.basicUser,
          Lambda.fromJsFunc(function (spec) {
            return Genai.Conversation.fetchCountForUser(spec);
          }).partiallyCall([spec])
        );
      };

      this.fetchForUserHelper = (spec) => {
        return TestRunner.asUser(
          this.basicUser,
          Lambda.fromJsFunc(function (spec) {
            return Genai.Conversation.fetchForUser(spec);
          }).partiallyCall([spec])
        );
      };

      var basicUserConversations = Genai.Conversation.fetch({
        filter: `meta.createdBy == "${this.basicUser.id}"`,
      });
      this.totalCount = basicUserConversations.count;
    });

    describe('with no projects', function () {
      describe(':fetchCountForUser', function () {
        it('with no spec returns the count of all entities', function () {
          var count = this.fetchCountForUserHelper();
          expect(count).toEqual(this.totalCount);
        });

        it('with a filter spec returns only the count of filtered entities', function () {
          var count = this.fetchCountForUserHelper({ filter: 'id == "a_fake_id"' });
          expect(count).toEqual(0);
        });
      });

      describe(':fetchForUser', function () {
        it('with no spec returns all entities', function () {
          var result = this.fetchForUserHelper();
          expect(result.objs.size).toEqual(this.totalCount);
        });

        it('with a filter spec returns only the correctly filtered entities', function () {
          var result = this.fetchForUserHelper({ filter: 'id == "a_fake_id"' });
          expect(result.objs.size).toEqual(0);
        });
      });
    });

    describe('with a project', function () {
      describe(':fetchCountForUser', function () {
        it('with no spec returns the count of all entities in current project', function () {
          var count = this.fetchCountForUserHelper();
          expect(count).toEqual(1);
        });

        it('with a filter spec returns only the count of filtered entities in current project', function () {
          var count = this.fetchCountForUserHelper({ filter: 'id == "a_fake_id"' });
          expect(count).toEqual(0);
        });
      });

      describe(':fetchForUser', function () {
        it('with no spec returns all entities in current project', function () {
          var result = this.fetchForUserHelper();
          expect(result.objs.size).toEqual(1);
          expect(result.objs.first().title).toEqual('Basic User Conversation');
        });

        it('with a filter spec returns only the correctly filtered entities in current project', function () {
          var result = this.fetchForUserHelper({ filter: 'id == "a_fake_id"' });
          expect(result.objs.size).toEqual(0);
        });
      });
    });

    describe(':startConversation upserts new conversation', function () {
      beforeAll(function () {
        this.newConversation = Genai.Conversation.startConversation(this.basicUserQueryResult).conversation;
      });

      it('with title set to the submitted query text', function () {
        expect(this.newConversation.title).toEqual('basic user query');
      });

      it('with correct last updated date', function () {
        expect(this.newConversation.lastUpdated).toEqual(this.basicUserQueryResult.meta.updated);
      });

      afterAll(function () {
        this.newConversation?.remove();
      });
    });
  });

  describe('::fetch(Count)ForUser - User Isolation Tests', function () {
    describe('Basic User', function () {
      it('can only see their own conversations', function () {
        var result = TestRunner.asUser(
          this.basicUser,
          Lambda.fromJsFunc(function () {
            return Genai.Conversation.fetchForUser();
          })
        );

        expect(result.objs.size).toEqual(1);
        expect(result.objs.first().title).toEqual('Basic User Conversation');
        expect(result.objs.first().meta.createdBy).toEqual(this.basicUser.id);
      });

      it('count returns only their conversations', function () {
        var count = TestRunner.asUser(
          this.basicUser,
          Lambda.fromJsFunc(function () {
            return Genai.Conversation.fetchCountForUser();
          })
        );

        expect(count).toEqual(1);
      });
    });

    describe('Cross-User Isolation', function () {
      it('basic user cannot see admin user conversations', function () {
        var result = TestRunner.asUser(
          this.basicUser,
          Lambda.fromJsFunc(function () {
            return Genai.Conversation.fetchForUser({ filter: 'title == "Admin User Conversation"' });
          })
        );
        expect(result.objs.size).toEqual(0);
      });
    });
  });
});
