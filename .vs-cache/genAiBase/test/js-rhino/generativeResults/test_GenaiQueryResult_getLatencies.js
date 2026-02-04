/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiQueryResult_getLatencies';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.start = DateTime.now().minusDays(1);
    this.queryResult = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      searchQuery: Genai.Query.fromString('What is an ML Pipeline?'),
    });
    this.queryResult2 = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      searchQuery: Genai.Query.fromString('What is SDL?'),
    });

    this.status = TestApi.upsertBatchEntity(
      this.ctx,
      'Genai.Query.Result.InterimStatusHistory',
      [
        {
          parent: this.queryResult,
          status: Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY,
          meta: { created: this.start },
        },
        {
          parent: this.queryResult,
          status: Genai.Query.Result.InterimStatusEnum.QUERY_DATABASE,
          meta: { created: this.start.plusMillis(1000) },
        },
        {
          parent: this.queryResult,
          status: Genai.Query.Result.InterimStatusEnum.SEARCH_DOCUMENTS,
          meta: { created: this.start.plusMillis(3000) },
        },
        {
          parent: this.queryResult,
          status: Genai.Query.Result.InterimStatusEnum.GENERATE_VISUALIZATION,
          meta: { created: this.start.plusMillis(5000) },
        },
        {
          parent: this.queryResult,
          status: Genai.Query.Result.InterimStatusEnum.GENERATE_ANSWER,
          meta: { created: this.start.plusMillis(9000) },
        },
        {
          parent: this.queryResult,
          status: Genai.Query.Result.InterimStatusEnum.COMPLETED,
          meta: { created: this.start.plusMillis(10000) },
        },
        {
          parent: this.queryResult2,
          status: Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY,
          meta: { created: this.start },
        },
      ],
      { metaOverride: true }
    );
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::getLatencies', function () {
    beforeAll(function () {
      this.latenciesQueryResult1 = this.queryResult.getLatencies();
      this.latenciesQueryResult2 = this.queryResult2.getLatencies();
    });

    it('should return the latencies of the query in ms', function () {
      expect(this.latenciesQueryResult1).toEqual({
        'Step-1-ProcessQuery-QueryDatabase': 1000,
        'Step-2-QueryDatabase-SearchDocuments': 2000,
        'Step-3-SearchDocuments-GenerateVisualization': 2000,
        'Step-4-GenerateVisualization-GenerateAnswer': 4000,
        'Step-5-GenerateAnswer-Completed': 1000,
      });
    });

    it('should return an empty object when queryResult only has one status', function () {
      expect(this.latenciesQueryResult2).toEqual({});
    });
  });
});
