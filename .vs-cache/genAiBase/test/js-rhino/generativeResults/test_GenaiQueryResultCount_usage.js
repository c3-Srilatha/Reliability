/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiQueryResultCount_usage';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.basicUsers = TestIdp.createTestUsersForGroup('Genai.BasicUser', 2);
    this.users = User.fetch({
      filter: Filter.intersects('id', this.basicUsers),
    }).objs;

    this.now = DateTime.now();
    this.fetchSpy = TestApi.spyOn(this.ctx, 'Genai.Query.Result', 'fetch')
      .returnValue({
        objs: [
          {
            meta: {
              created: this.now,
            },
          },
        ],
        count: 1,
        hasMore: true,
      })
      .register();
  });

  afterAll(function () {
    this.basicUsers.each((user) => TestIdp.removeUser(user));
    TestApi.teardown(this.ctx);
  });

  describe('when there is no query usage', function () {
    beforeAll(function () {
      this.allQueryCountSpy = TestApi.spyOn(this.ctx, 'Genai.Query.ResultCount', 'allQueryCount')
        .returnValue(null)
        .register();
    });

    it('userCount should return zero', function () {
      var userCount = Genai.Query.ResultCount.userCount(this.now.minusHours(1), this.now);
      expect(userCount).toEqual(0);
    });

    it('should return zero results', function () {
      var usage = Genai.Query.ResultCount.usage();
      expect(usage.objs).toEqual([]);
      expect(usage.count).toEqual(0);
      expect(usage.hasMore).toEqual(false);
      this.allQueryCountSpy.unregister();
    });
  });

  describe('when there is query usage', function () {
    beforeAll(function () {
      this.allQueryCountSpy = TestApi.spyOn(this.ctx, 'Genai.Query.ResultCount', 'allQueryCount')
        .returnValue([
          {
            user: this.users[0],
            queryCount: 2,
            testCaseCount: 4,
            chatCount: 3,
          },
          {
            user: this.users[1],
            queryCount: 10,
            testCaseCount: 5,
            chatCount: 10,
          },
        ])
        .register();

      this.assertFetchResult = function (usage, user, totalQueryCount, lastQueryTime) {
        expect(usage.user).toEqual(user);
        expect(usage.totalQueryCount).toEqual(totalQueryCount);
        expect(usage.lastQueryTime).toEqual(lastQueryTime);
      };
    });

    it('should correctly return the first paginated result', function () {
      var usage = Genai.Query.ResultCount.usage({
        offset: 0,
        limit: 1,
        start: this.now.minusHours(1),
        end: this.now,
      });
      expect(usage.count).toEqual(1);
      this.assertFetchResult(usage.objs[0], this.users[1].email, 25, this.now);
    });

    it('should correctly return the second paginated result', function () {
      var usage = Genai.Query.ResultCount.usage({ offset: 1, limit: 1 });
      expect(usage.count).toEqual(1);
      this.assertFetchResult(usage.objs[0], this.users[0].email, 9, this.now);
    });

    it('should correctly return no result for the third paginated call', function () {
      var usage = Genai.Query.ResultCount.usage({ offset: 2, limit: 1 });
      expect(usage.count).toEqual(0);
    });

    it('should correctly return the result ordered by ascending totalQueryCount', function () {
      var usage = Genai.Query.ResultCount.usage({
        offset: 0,
        order: 'ascending(totalQueryCount, false)',
      });
      expect(usage.count).toEqual(2);
      this.assertFetchResult(usage.objs[0], this.users[0].email, 9, this.now);
      this.assertFetchResult(usage.objs[1], this.users[1].email, 25, this.now);
    });

    it('should correctly return the result ordered by descending lastQueryTime', function () {
      var usage = Genai.Query.ResultCount.usage({
        offset: 0,
        order: 'descending(lastQueryTime, false)',
      });
      expect(usage.count).toEqual(2);
      this.assertFetchResult(usage.objs[0], this.users[1].email, 25, this.now);
      this.assertFetchResult(usage.objs[1], this.users[0].email, 9, this.now);
    });

    it('should correctly return the result ordered by ascending user', function () {
      var usage = Genai.Query.ResultCount.usage({
        offset: 0,
        order: 'ascending(user, false)',
      });
      expect(usage.count).toEqual(2);
      if (this.users[1].email < this.users[0].email) {
        this.assertFetchResult(usage.objs[0], this.users[1].email, 25, this.now);
      } else if (this.users[1].email > this.users[0].email) {
        this.assertFetchResult(usage.objs[0], this.users[0].email, 9, this.now);
      }
    });
  });
});

describe(filename + '_excludeChildResult', function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename + '_excludeChildResult');
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('when Genai.Query.Result is created from ::createChildResult', function () {
    [false, true].forEach(function (isStructuredTool) {
      describe(`for usedStructuredData = ${isStructuredTool}`, function () {
        beforeAll(function () {
          this.startTime = DateTime.now();
          this.querySuffix = filename + this.startTime.toString();
          var query = 'What is a machine learning pipeline?' + this.querySuffix;
          this.beforeCountForQueryResult = Genai.Query.Result.fetchCount({
            filter: Filter.contains('searchQuery.baseQuery', this.querySuffix),
          });
          var resultParent = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
            searchQuery: Genai.Query.fromString(query),
          });
          this.countAfterParentResult = Genai.Query.Result.fetchCount({
            filter: Filter.contains('searchQuery.baseQuery', this.querySuffix),
          });
          this.result = resultParent.createChildResult('testTool', isStructuredTool);
          this.countAfterChildResult = Genai.Query.Result.fetchCount({
            filter: Filter.contains('searchQuery.baseQuery', this.querySuffix),
          });
          this.endTime = DateTime.now();
        });

        afterAll(function () {
          Genai.Query.Result.removeAll({ filter: Filter.contains('searchQuery.baseQuery', this.querySuffix) }, true);
        });

        it('aggregateAllQueryCount should not include QUERY_FROM_CHILD_RESULT', function () {
          expect(Genai.Query.ResultCount.aggregateAllQueryCount(this.startTime, this.endTime))
            .withContext('parent result')
            .toEqual(this.countAfterParentResult); // Only the parent result should be aggregated
          expect(this.countAfterChildResult)
            .withContext('parent result + child result')
            .toEqual(this.countAfterParentResult + 1); // Parent result + child result
        });

        it('correctly marks structured vs unstructured tool', function () {
          expect(this.result.get('usedStructuredData').usedStructuredData).toEqual(isStructuredTool);
        });
      });
    });
  });
});
