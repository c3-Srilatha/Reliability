/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Retriever_Dense_indexing_allPermutations';
var testCases = [
  {
    descriptor: 'dpr',
    embedderSpec: {
      embedderType: GenaiCore.Embedder.Hf,
      embedderModelName: 'sentence-transformers/facebook-dpr-ctx_encoder-multiset-base',
    },
  },
  {
    descriptor: 'e5',
    embedderSpec: {
      embedderType: GenaiCore.Embedder.Hf,
      embedderModelName: 'intfloat/e5-large-v2',
    },
  },
  {
    descriptor: 'mxbai',
    embedderSpec: {
      embedderType: GenaiCore.Embedder.Hf,
      embedderModelName: 'mixedbread-ai/mxbai-embed-large-v1',
    },
  },
  {
    descriptor: 'tas-b',
    embedderSpec: {
      embedderType: GenaiCore.Embedder.Hf,
      embedderModelName: 'sentence-transformers/msmarco-distilbert-base-tas-b',
    },
  },
  {
    descriptor: 'vertex_ai',
    embedderSpec: {
      embedderType: GenaiCore.Embedder.Llm,
      providerType: GenaiCore.Llm.VertexAi,
      embedderModelName: 'text-embedding-005',
    },
  },
];

jasmine.DEFAULT_TIMEOUT_INTERVAL = 120 * 60 * 1000;

(TestApi.runTestInNightly(filename) ? xdescribe : describe)(filename, function () {
  if (TestApi.isRunningInJarvis()) {
    TestApi.installRuntimes(['py-query_orchestrator']);
    TestApi.installHuggingfaceModels([
      'sentence-transformers/facebook-dpr-ctx_encoder-multiset-base',
      'sentence-transformers/facebook-dpr-question_encoder-multiset-base',
      'sentence-transformers/msmarco-distilbert-base-tas-b',
    ]);
  }

  describe('setup', function () {
    beforeAll(function () {
      this.ctx = TestApi.createContext(filename);
      this.testConfig = TestApi.setupRetrieverTestSources(this.ctx, filename);
      this.sourceFiles = this.testConfig.sourceFiles;
      this.sourceCollections = this.testConfig.sourceCollections;
      this.testQueries = this.testConfig.testQueries;

      /*
       * We have passages
       *  sourceFiles[0] - 9, finetuning
       *  sourceFiles[1] - 28, Python SDK
       *  sourceFiles[2] - 53, Lightbulb
       *  sourceFiles[3] - 1, Thor
       * for a total of 91 passages, so setting persistBatchSize to 5 will result in multiple batches
       */
      Genai.Vector.Config.setConfigValue('persistBatchSize', 5);

      this.retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
        name: filename + DateTime.now(),
        indexZipUrl: this.testConfig.baseLocation + '/retriever-dense.zip',
      }).get();
    });

    afterAll(function () {
      try {
        this.retriever.purgeIndex(true);
        this.retriever.terminateEngine();
      } finally {
        Genai.Vector.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
        TestApi.teardownRetrieverTestSources(this.ctx, this.testConfig);
        Genai.PyUtil.terminateAllEngines();
      }
    });

    testCases.forEach((testCase) => {
      Genai.Retriever.Dense.RetrieverType.values().each((retrieverName) => {
        describe(testCase.descriptor + ' + ' + retrieverName, function () {
          beforeAll(function () {
            this.retriever = this.retriever
              .get('embedderSpec, denseRetrieverName')
              .withDenseRetrieverName(retrieverName)
              .withEmbedderSpec(testCase.embedderSpec)
              .merge({ returnInclude: 'this' });
            Genai.PyUtil.terminateAllEngines();
          });

          afterAll(function () {
            // Ensures that the Genai.Vectors will be removed
            this.retriever.purgeIndex(true);
            if (this.mergeBatchSpy) {
              this.mergeBatchSpy.unregister();
            }
            Genai.PyUtil.terminateAllEngines();
          });

          it('indexes multiple passages', function () {
            if (this.mergeBatchSpy) {
              var mergeBatchCallCountBefore = this.mergeBatchSpy.getActionMock().callCount();
            }
            var objList = this.retriever.indexFiles([this.sourceFiles[0]], true);
            TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 360);
            if (Genai.Retriever.Dense.RetrieverType.C3_VECTOR_STORE === retrieverName) {
              // Wait for the pgvector index to update
              Thread.sleep(2000);
            }
            TestApi.checkIndexResult(this.retriever, 9, objList, 1, 0, 1);
            TestApi.testSearch(this.retriever, [this.testQueries.finetuning], [2]);

            TestApi.checkSrcFileHistory(
              [this.sourceFiles[0]],
              [Genai.SourceFile.StatusEnum.INDEXED, Genai.SourceFile.StatusEnum.INDEXING]
            );
            if (this.mergeBatchSpy) {
              var mergeBatchCallCountAfter = this.mergeBatchSpy.getActionMock().callCount();
              expect(mergeBatchCallCountAfter - mergeBatchCallCountBefore)
                .withContext(`${this.vectorType} mergeBatch call count`)
                .toBeGreaterThan(1);
            }
          });

          it('appends a single passage', function () {
            // Deliberately not calling waitForSetup immediately, so we can test the behavior while running
            var objList = this.retriever.indexFiles([this.sourceFiles[3]]);

            // Test that it gracefully handles searches while indexing is running
            var searchResults = this.retriever.similaritySearch(
              Genai.Retriever.SearchSpec.make({
                searchQuery: this.testQueries.finetuning.question,
                k: 5,
              })
            );
            expect(searchResults.length).withContext('result length while indexing is running').toEqual(5);

            TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 180);
            if (Genai.Retriever.Dense.RetrieverType.C3_VECTOR_STORE === retrieverName) {
              // Wait for the pgvector index to update
              Thread.sleep(2000);
            }
            TestApi.checkIndexResult(this.retriever, 10, objList, 1, 0, 2);
            TestApi.testSearch(this.retriever, [this.testQueries.finetuning, this.testQueries.thor], [2, 1]);

            // Check that sourceFiles[0] is unchanged and sourceFiles[3] was updated
            TestApi.checkSrcFileHistory(
              [this.sourceFiles[0], this.sourceFiles[3]],
              [Genai.SourceFile.StatusEnum.INDEXED, Genai.SourceFile.StatusEnum.INDEXING]
            );
          });

          it('reindexes the same single passage', function () {
            var objList = this.retriever.indexFiles([this.sourceFiles[3]]);
            TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 180);
            if (Genai.Retriever.Dense.RetrieverType.C3_VECTOR_STORE === retrieverName) {
              // Wait for the pgvector index to update
              Thread.sleep(2000);
            }
            TestApi.checkIndexResult(this.retriever, 10, objList, 1, 0, 2);
            TestApi.testSearch(this.retriever, [this.testQueries.finetuning, this.testQueries.thor], [2, 1]);

            // Unchanged
            TestApi.checkSrcFileHistory(
              [this.sourceFiles[0]],
              [Genai.SourceFile.StatusEnum.INDEXED, Genai.SourceFile.StatusEnum.INDEXING]
            );

            // Shows reindexed
            TestApi.checkSrcFileHistory(
              [this.sourceFiles[3]],
              [
                Genai.SourceFile.StatusEnum.INDEXED,
                Genai.SourceFile.StatusEnum.INDEXING,
                Genai.SourceFile.StatusEnum.INDEXED,
                Genai.SourceFile.StatusEnum.INDEXING,
              ]
            );
          });

          it('returns results when searching with matched filters', function () {
            TestApi.testSearch(this.retriever, [this.testQueries.finetuning_with_tag], [2]);
          });

          it('returns nothing when searching with unmatched filters', function () {
            TestApi.testSearch(this.retriever, [this.testQueries.thor_with_tag], [0]);
          });

          it('unindexes a single passage', function () {
            var objList = this.retriever.unindexFiles([this.sourceFiles[3]]);
            TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 180);
            if (Genai.Retriever.Dense.RetrieverType.C3_VECTOR_STORE === retrieverName) {
              // Wait for the pgvector index to update
              Thread.sleep(2000);
            }
            TestApi.checkIndexResult(this.retriever, 9, objList, 1, 0, 1);
            TestApi.testSearch(this.retriever, [this.testQueries.finetuning], [2]);

            // Shows reindexed
            TestApi.checkSrcFileHistory(
              [this.sourceFiles[3]],
              [
                Genai.SourceFile.StatusEnum.NOT_INDEXED,
                Genai.SourceFile.StatusEnum.INDEXED,
                Genai.SourceFile.StatusEnum.INDEXING,
                Genai.SourceFile.StatusEnum.INDEXED,
                Genai.SourceFile.StatusEnum.INDEXING,
              ]
            );
          });

          it('clears everything and adds only a single-character passage', function () {
            var sourcePassage = Genai.SourcePassage.make({
              source: Genai.SourceFile.make({ id: this.sourceFiles[3].id }),
              intraSourceId: '1',
              contentStr: 'A',
            });
            var objList = this.retriever.indexPassages([sourcePassage], true);
            TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 180);
            if (Genai.Retriever.Dense.RetrieverType.C3_VECTOR_STORE === retrieverName) {
              // Wait for the pgvector index to update
              Thread.sleep(2000);
            }
            TestApi.testSearch(this.retriever, [this.testQueries.one], [1]);
            TestApi.checkIndexResult(this.retriever, 1, objList, 1, 0, 1);
          });
        });
      });
    });
  });
});
