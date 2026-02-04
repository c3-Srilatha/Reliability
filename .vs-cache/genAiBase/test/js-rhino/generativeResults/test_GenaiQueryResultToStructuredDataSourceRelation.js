/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiQueryResultToStructuredDataSourceRelation';
describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.obj = Genai.Query.ResultToStructuredDataSourceRelation.make({
      id: 101,
      to: Genai.Query.Result.Source.StructuredData.make({
        id: 1,
        structuredQuerySpec: Genai.StructuredQuery.Spec.make({
          sourceType: Genai.Aircraft,
          spec: EvalSpec.make({
            id: 'evalspec',
          }),
        }),
      }),
      numRows: 10,
    });

    TestApi.upsertEntity(this.ctx, 'Genai.Query.ResultToStructuredDataSourceRelation', this.obj);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('displayDetails', function () {
    beforeAll(function () {
      this.result = this.obj.displayDetails;
      this.expectedResult =
        '<h3>Genai.Aircraft (rows: 10, columns: 15)</h3><p>An aircraft entity. Can be used to answer questions related to aircraft.</p>';
    });

    it('returns expected HTML string', function () {
      expect(this.result).toEqual(this.expectedResult);
    });
  });
});
