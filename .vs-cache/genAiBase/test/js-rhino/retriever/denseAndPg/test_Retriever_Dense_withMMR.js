/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Retriever_Dense_withMMR';

describe(filename, function () {
  describe('test file dataset', function () {
    beforeAll(function () {
      this.ctx = TestApi.createContext(filename);
      this.testConfig = TestApi.setupRetrieverTestSources(this.ctx, filename);
      this.sourceFiles = this.testConfig.sourceFiles;
      this.sourceCollections = this.testConfig.sourceCollections;

      this.retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
        name: filename,
        indexZipUrl: this.testConfig.baseLocation + '/retriever-dense.zip',
        denseRetrieverName: Genai.Retriever.Dense.RetrieverType.C3_VECTOR_STORE,
      }).get();

      this.retriever.indexPassages(this.sourceCollections[1].readPassages());
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 600);
    });

    afterAll(function () {
      try {
        this.retriever.purgeIndex(true);
        this.retriever.terminateEngine();
      } finally {
        TestApi.teardownRetrieverTestSources(this.ctx, this.testConfig);
        TestApi.teardown(this.ctx);
        Genai.PyUtil.terminateAllEngines();
      }
    });

    it('gets different passages with MMR and relevanceToRedundancyRatio set to 0', function () {
      var query = 'What is the Python SDK and how does it work?';
      var results = this.retriever.similaritySearch(
        Genai.Retriever.SearchSpec.make({
          searchQuery: Genai.Query.fromString(query),
          k: 2,
        })
      );
      var mmrSpec = Genai.Retriever.MmrSpec.make({
        relevanceToRedundancyRatio: 0.0,
        fetchPassagesMultiplier: 2.0,
      });
      var resultsWithMmr = this.retriever.similaritySearch(
        Genai.Retriever.SearchSpec.make({
          searchQuery: Genai.Query.fromString(query),
          k: 2,
          mmrSpec: mmrSpec,
        })
      );
      expect(results.length).toEqual(2);
      expect(resultsWithMmr.length).toEqual(2);

      // The first passage should be the same
      expect(results[0].page_content).toEqual(resultsWithMmr[0].page_content);

      // The second passage should be different
      expect(results[1].page_content).not.toEqual(resultsWithMmr[1].page_content);
    });

    it('gets same passages with MMR and relevanceToRedundancyRatio set to 1.0', function () {
      var query = 'What is the Python SDK and how does it work?';
      var results = this.retriever.similaritySearch(
        Genai.Retriever.SearchSpec.make({
          searchQuery: Genai.Query.fromString(query),
          k: 2,
        })
      );
      var mmrSpec = Genai.Retriever.MmrSpec.make({
        relevanceToRedundancyRatio: 1.0,
        fetchPassagesMultiplier: 2.0,
      });
      var resultsWithMmr = this.retriever.similaritySearch(
        Genai.Retriever.SearchSpec.make({
          searchQuery: Genai.Query.fromString(query),
          k: 2,
          mmrSpec: mmrSpec,
        })
      );
      expect(results.length).toEqual(2);
      expect(resultsWithMmr.length).toEqual(2);

      // The first passage should be the same
      expect(results[0].page_content).toEqual(resultsWithMmr[0].page_content);

      // The second passage should be the same as well
      expect(results[1].page_content).toEqual(resultsWithMmr[1].page_content);
    });
  });
});
