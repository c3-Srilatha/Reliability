/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiFewShotExampleStructuredQuery';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.query = 'What is an ML Pipeline?';
    this.result = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      id: filename + '_result',
      searchQuery: Genai.Query.fromString(this.query),
    });

    this.evalStructuredQuerySources = TestApi.upsertBatchEntity(this.ctx, 'Genai.Query.Result.Source.StructuredData', [
      {
        id: 'eval_structured_query_source1',
        displayName: 'Genai.Aircraft',
        structuredQuerySpec: Genai.StructuredQuery.Spec.make({
          spec: EvalSpec.make({
            filter: "('San Francisco' == location.city)",
            projection: 'count()',
          }),
          sourceType: 'Genai.Aircraft',
        }),
      },
      {
        id: 'eval_structured_query_source2',
        displayName: 'Genai.Aircraft',
        structuredQuerySpec: Genai.StructuredQuery.Spec.make({
          spec: EvalSpec.make({
            filter: "('New York' == location.city)",
            projection: 'count()',
          }),
          sourceType: 'Genai.Aircraft',
        }),
      },
    ]);

    this.evalStructuredQuerySourceRelations = TestApi.upsertBatchEntity(
      this.ctx,
      'Genai.Query.ResultToStructuredDataSourceRelation',
      [
        {
          to: this.evalStructuredQuerySources[0],
          from: this.result,
          numRows: 10,
          displayName: 'SF Genai.Aircraft data',
        },
        {
          to: this.evalStructuredQuerySources[1],
          from: this.result,
          numRows: 10,
          displayName: 'NY Genai.Aircraft data',
          passageUiDisplayIndex: -1,
        },
        {
          to: this.evalStructuredQuerySources[0],
          from: this.result,
          numRows: 10,
          displayName: 'SFO/CA Genai.Aircraft data',
        },
      ]
    );
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.FewShotExample.StructuredQuery.EvalQuery.removeAll({ filter: Filter.eq('query', this.query) }, true);
  });

  describe(':addFewShots', function () {
    beforeAll(function () {
      this.beforeCountEvalFewShots = Genai.FewShotExample.StructuredQuery.EvalQuery.fetchCount();
      Genai.FewShotExample.StructuredQuery.addFewShots(this.result);
      this.afterCountEvalFewShots = Genai.FewShotExample.StructuredQuery.EvalQuery.fetchCount();

      this.upsertedEvalFewShot = Genai.FewShotExample.StructuredQuery.EvalQuery.fetch({
        filter: Filter.eq('query', this.query),
        limit: 1,
      }).first();
    });

    it('upserts few shots for EvalQuery for unique relations which do not have passageUiDisplayIndex -1', function () {
      expect(this.afterCountEvalFewShots).toEqual(this.beforeCountEvalFewShots + 1);
      expect(this.upsertedEvalFewShot.spec.sourceType).toEqual('Genai.Aircraft');
    });
  });
});
