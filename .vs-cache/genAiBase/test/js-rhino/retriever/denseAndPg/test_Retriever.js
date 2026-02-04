/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Retriever';

describe(filename, function () {
  describe('queryFilterToSourceIds', function () {
    beforeAll(function () {
      var baseQuery = 'What is the CUSIP?';
      this.matchingQuery = Genai.Query.make({
        baseQuery: baseQuery,
        filters: {
          fileName: [{ target: ['Alabama.pdf'], wrappingExp: 'any' }],
        },
      });
      this.nonMatchingQuery = Genai.Query.make({
        baseQuery: baseQuery,
        filters: {
          fileName: [{ target: ['anotherFile.pdf'], wrappingExp: 'any' }],
        },
      });
      this.nonFilteredQuery = Genai.Query.make({
        baseQuery: baseQuery,
      });
      this.retriever = Genai.Retriever.Dense.forName('alabamaBond-dense');
      this.retriever.initialize();
    });

    it('returns a matching source', function () {
      var sourceIds = this.retriever.queryFilterToSourceIds(this.matchingQuery);
      expect(sourceIds).withContext('sourceIds').not.toBeNull();
      expect(sourceIds.length).withContext('sourceIds.length').toEqual(1);
    });

    it('returns empty list for no matching source', function () {
      var sourceIds = this.retriever.queryFilterToSourceIds(this.nonMatchingQuery);
      expect(sourceIds).withContext('sourceIds').not.toBeNull();
      expect(sourceIds.length).withContext('sourceIds.length').toEqual(0);
    });

    it('returns null for no filter', function () {
      var sourceIds = this.retriever.queryFilterToSourceIds(this.nonFilteredQuery);
      expect(sourceIds).withContext('sourceIds').toBeNull();
    });
  });
});
