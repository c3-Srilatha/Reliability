/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Retriever_PgVector_indexing';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120 * 60 * 1000;

describe(filename, function () {
  // Retries action multiple times to wait for PgVector index to update
  function retryPgVectorAction(action) {
    Retry.action(action)
      .withNextSleepMillis(() => {
        return 1000;
      })
      .withMaxRetries(10)
      .withRetryAllErrors(true)
      .now();
  }

  if (TestApi.isRunningInJarvis()) {
    TestApi.installRuntimes(['py-query_orchestrator']);
    TestApi.installHuggingfaceModels([
      'sentence-transformers/facebook-dpr-ctx_encoder-multiset-base',
      'sentence-transformers/facebook-dpr-question_encoder-multiset-base',
      'sentence-transformers/msmarco-distilbert-base-tas-b',
    ]);
  }

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

    // Set the filterIdLimit small enough that we can test the looping logic
    Genai.Vector.Config.setConfigValue('filterIdLimit', 5);
    this.retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.PgVector', {
      name: filename + '-pgVector-' + Uuid.create(),
    }).get();
  });

  afterAll(function () {
    try {
      this.retriever.purgeIndex(true);
    } finally {
      Genai.Vector.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      TestApi.teardownRetrieverTestSources(this.ctx, this.testConfig);
      Genai.PyUtil.terminateAllEngines();
    }
  });

  describe('resultsForPassageIds', function () {
    it('returns nothing when there are no matching passages', function () {
      // This ensures that the function works correctly and ensures code coverage
      var results = this.retriever.resultsForPassageIds(['none']);
      expect(results.length).toEqual(0);
    });
  });

  Genai.Retriever.Dense.Embedder.values().each((embedderModelName) => {
    describe(embedderModelName, function () {
      beforeAll(function () {
        this.mergeBatchSpy = TestApi.spyOn(this.ctx, Genai.Vector.SourcePassage.name(), 'mergeBatch')
          .callThrough()
          .register();
        this.retriever = this.retriever.get().withEmbedderModelName(embedderModelName).merge({ returnInclude: 'this' });
        Genai.PyUtil.terminateAllEngines();
      });

      afterAll(function () {
        // Ensures that the Genai.Vectors will be removed
        this.retriever.purgeIndex(true);
        this.mergeBatchSpy.unregister();
        Genai.PyUtil.terminateAllEngines();
      });

      it('indexes multiple passages', function () {
        var mergeBatchCallCountBefore = this.mergeBatchSpy.getActionMock().callCount();
        var objList = this.retriever.indexFiles([this.sourceFiles[0]], true);
        TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 360);

        retryPgVectorAction(() => {
          TestApi.checkIndexResult(this.retriever, 9, objList, 1, 0, 1);
        });
        TestApi.testSearch(this.retriever, [this.testQueries.finetuning], [2]);

        TestApi.checkSrcFileHistory(
          [this.sourceFiles[0]],
          [Genai.SourceFile.StatusEnum.INDEXED, Genai.SourceFile.StatusEnum.INDEXING]
        );
        var mergeBatchCallCountAfter = this.mergeBatchSpy.getActionMock().callCount();
        expect(mergeBatchCallCountAfter - mergeBatchCallCountBefore)
          .withContext('Genai.Vector.SourcePassage mergeBatch call count')
          .toBeGreaterThan(1);
      });

      describe('truncateQuery', function () {
        beforeAll(function () {
          this.longQuestion = 'How do I finetune a large language model?';
          while (this.longQuestion.length < this.retriever.queryMaxLen * 4) {
            this.longQuestion += '\nHow do I finetune a large language model?';
          }
        });

        describe('when truncating long queries', function () {
          beforeEach(function () {
            this.truncatedQuestion = this.retriever.truncateQuery(this.longQuestion);
          });

          it('should truncate queries exceeding maxQueryLen', function () {
            expect(this.longQuestion.length).toBeGreaterThan(this.truncatedQuestion.length);
          });
        });

        describe('when performing similarity search with query exceeding maxQueryLen', function () {
          beforeEach(function () {
            this.query = {
              question: Genai.Query.fromString(this.longQuestion),
              source: this.sourceFiles[0],
              passageContent: 'we can finetune large language models',
            };
          });

          it('should complete successfully', function () {
            TestApi.testSearch(this.retriever, [this.query], [2]);
          });
        });
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

        retryPgVectorAction(() => {
          TestApi.checkIndexResult(this.retriever, 10, objList, 1, 0, 2);
        });
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

        retryPgVectorAction(() => {
          TestApi.checkIndexResult(this.retriever, 10, objList, 1, 0, 2);
        });
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

      describe('with a preprocessor lambda', function () {
        beforeAll(function () {
          this.retriever = this.retriever
            .withQueryPreprocessLambda(
              Lambda.fromJsFunc(function (query) {
                return query.replace(/Donnerstag/g, 'Thursday');
              })
            )
            .merge({ mergeInclude: 'queryPreprocessLambda', returnInclude: 'this' });
        });

        afterAll(function () {
          this.retriever = this.retriever
            .withoutQueryPreprocessLambda()
            .merge({ mergeInclude: 'queryPreprocessLambda', returnInclude: 'this' });
        });

        it('it should use the updated query', function () {
          TestApi.testSearch(this.retriever, [this.testQueries.donnerstag], [1]);
        });
      });

      it('unindexes a single passage', function () {
        var objList = this.retriever.unindexFiles([this.sourceFiles[3]]);
        TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 180);

        retryPgVectorAction(() => {
          TestApi.checkIndexResult(this.retriever, 9, objList, 1, 0, 1);
        });
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

        retryPgVectorAction(() => {
          TestApi.checkIndexResult(this.retriever, 1, objList, 1, 0, 1);
        });
        TestApi.testSearch(this.retriever, [this.testQueries.one], [1]);
      });
    });
  });

  describe('with acls', function () {
    beforeAll(function () {
      this.retriever.purgeIndex();
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 180);
      this.basicUser = TestIdp.createTestUsersForGroup('Genai.BasicUser')[0];
      this.adminUser = TestIdp.createTestUsersForGroup('Genai.AdminUser')[0];
      this.sourceFilesWithAcls = Genai.SourceFile.arrayBuilder();
      [this.sourceFiles[0], this.sourceFiles[3]].forEach((sourceFile, index) => {
        var role = index === 0 ? Role.forId('Genai.BasicUser') : Role.forId('Genai.AdminUser');
        var groups = index === 0 ? ['Genai.BasicUser'] : ['Genai.AdminUser'];
        this.sourceFilesWithAcls.add(
          sourceFile
            .get()
            .withAcl([
              {
                member: role,
              },
              {
                canRemove: true,
                member: Role.forId('C3.ClusterAdmin'),
              },
            ])
            .withGroups(groups)
        );
      });
      this.sourceFilesWithAcls = Genai.SourceFile.mergeBatch(this.sourceFilesWithAcls.build()).objs;
      var objList = this.retriever.indexFiles(this.sourceFilesWithAcls);
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 180);

      // 9 passages from sourceFiles[0] and 1 passage from sourceFiles[3]
      TestApi.checkIndexResult(this.retriever, 10, objList, 2, 0, 2);

      // Wait for the pgvector index to update
      Thread.sleep(5000);
      EnableAclPrivilege.forId('Genai.SourceFile').withEnabled(true).merge();
      Genai.SourceFile.refreshAcls();
      TestApi.waitForSetup(this.ctx, ['BatchQueue'], 1, 180);
    });

    afterAll(function () {
      TestIdp.removeUser(this.basicUser);
      TestIdp.removeUser(this.adminUser);
      EnableAclPrivilege.forId('Genai.SourceFile').withEnabled(false).merge({ mergeInclude: 'enabled' });
    });

    it('returns all passages for admin user', function () {
      var output = TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (retriever, testQueries) {
          var searchResults1 = retriever.similaritySearch(
            Genai.Retriever.SearchSpec.make({
              searchQuery: testQueries.thor.question,
              k: 1,
            })
          );

          var searchResults2 = retriever.similaritySearch(
            Genai.Retriever.SearchSpec.make({
              searchQuery: testQueries.finetuning.question,
              k: 1,
            })
          );
          return {
            searchResults1,
            searchResults2,
          };
        }).partiallyCall([this.retriever, this.testQueries])
      );
      expect(output.get('searchResults1')[0].page_content).withContext('searchResults1.page_content').toContain('Thor');
      expect(output.get('searchResults2')[0].page_content)
        .withContext('searchResults2.page_content')
        .toContain('Finetuning');
    });

    it('returns only specific passages for basic user', function () {
      var output = TestRunner.asUser(
        this.basicUser,
        Lambda.fromJsFunc(function (retriever, testQueries) {
          var searchResults1 = retriever.similaritySearch(
            Genai.Retriever.SearchSpec.make({
              searchQuery: testQueries.thor.question,
              k: 1,
            })
          );

          var searchResults2 = retriever.similaritySearch(
            Genai.Retriever.SearchSpec.make({
              searchQuery: testQueries.finetuning.question,
              k: 1,
            })
          );
          return {
            searchResults1,
            searchResults2,
          };
        }).partiallyCall([this.retriever, this.testQueries])
      );

      // Thor is from sourceFiles[3] and should not be returned because the ACLs filter it out
      expect(output.get('searchResults1').length > 0 ? output.get('searchResults1')[0].page_content : '')
        .withContext('searchResults1.page_content')
        .not.toContain('Thor');
      expect(output.get('searchResults2')[0].page_content)
        .withContext('searchResults2.page_content')
        .toContain('Finetuning');
    });
  });
});
