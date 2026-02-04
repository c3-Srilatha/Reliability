/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiQueryResult_fetchFilteredQueries';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    const currentDateTime = new Date().toISOString();

    // Create query strings with the current date and time
    queryString1 = `queryExample1_${currentDateTime}`;
    queryString2 = `queryExample2_${currentDateTime}`;

    // Upsert a parent query entity with queryString1
    this.parentQuery = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      id: 'test_parent_query1',
      answer: 'parent answer',
      searchQuery: Genai.Query.fromString(queryString1, Genai.Query.Type.QUERY),
    });

    /*
     *  Create child queries for the parent query
     * a query with toolId as "final_answer" should not be filtered out
     */
    this.childQuery1 = this.parentQuery.createChildResult('final_answer');
    this.childQuery2 = this.childQuery1.createChildResult('fakeTool2');

    // Upsert another parent query entity with queryString2
    this.parentQuery = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      id: 'test_parent_query2',
      answer: 'parent answer',
      searchQuery: Genai.Query.fromString(queryString2, Genai.Query.Type.QUERY),
    });

    /*
     *  Create child queries for the second parent query
     * a query with toolId as "information_retrieval_tool" should not be filtered out
     */
    this.childQuery1 = this.parentQuery.createChildResult('information_retrieval_tool');
    this.childQuery2 = this.childQuery1.createChildResult('fakeTool3');
  });

  afterAll(function () {
    // Remove all queries related to the first parent query
    Genai.Query.Result.removeAll({ filter: Filter.eq('parent.id', 'test_parent_query1') }, true);

    // Remove all queries related to the second parent query
    Genai.Query.Result.removeAll({ filter: Filter.eq('parent.id', 'test_parent_query2') }, true);
    TestApi.teardown(this.ctx);
  });

  describe('#fetchFilteredQueriesCount', function () {
    beforeAll(function () {
      this.count = Genai.Query.Result.fetchFilteredQueriesCount({
        filter: Filter.eq('searchQuery.rawQuery', queryString1),
      });
    });

    it('should apply default filter and return the count', function () {
      expect(this.count).toBe(2);
    });
  });

  describe('#fetchFilteredQueries', function () {
    beforeAll(function () {
      const spec = {
        include: 'searchQuery.rawQuery',
        limit: 10,
        order: 'descending(meta.created)',
        filter: Filter.eq('searchQuery.rawQuery', queryString2),
      };
      this.queries = Genai.Query.Result.fetchFilteredQueries(spec);
    });

    it('should fetch the filtered queries', function () {
      expect(this.queries.objs.size).toBe(2);
    });
  });
});
