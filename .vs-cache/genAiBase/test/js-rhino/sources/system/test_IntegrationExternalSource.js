/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_IntegrationExternalSource';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 60 * 1000;

describe(filename, function () {
  beforeAll(function () {
    TestApi.setAwsS3BucketCreds(['c3--test-genai-write']);
    this.ctx = TestApi.createContext(filename);
    this.bucketUrl = FileSystem.s3().urlFromMount('GENAI_TEST_WRITE');

    // Need Uuid to create isolation between tests in different concurrent builds
    this.uuid = Uuid.create();
    this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      name: 'external collection',
      rootUrl: this.bucketUrl + 'root-' + this.uuid,
      targetUrl: this.bucketUrl + 'target-' + this.uuid,
    });

    this.files = TestApi.populateTxtSrcCollectionRoot(this.collection, 5, 20);
    var syncJobs = this.collection.sync();
    TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 600);
    TestApi.waitForSetup(this.ctx, null, 1, 300);

    this.collectionFiles = Genai.SourceFile.fetch({
      filter: Filter.eq('collection.id', this.collection.id),
      order: 'ascending(originalFile.url)',
      include: 'this',
    }).objs;
    this.firstCollectionFile = this.collectionFiles[0];
    this.secondCollectionFile = this.collectionFiles[1];

    // Note if this is run in static/console this line will cause failures.
    this.otherCollectionFiles = this.collectionFiles.slice(2);

    this.vectorStore = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
      name: filename,
    }).get();
    TestApi.waitForSetup(this.ctx, null, 1, 300);
  });

  it('syncing creates correct number of source files', function () {
    expect(this.collectionFiles.length).toEqual(5);
  });

  it('syncing sends files to correct state', function () {
    TestApi.checkSrcFileHistory(this.collectionFiles, [Genai.SourceFile.StatusEnum.NOT_INDEXED]);
  });

  afterAll(function () {
    try {
      this.vectorStore.purgeIndex(true);
      TestApi.cleanUpCollection(this.collection);
    } finally {
      TestApi.teardown(this.ctx);
    }
  });

  describe('chunking', function () {
    beforeAll(function () {
      Genai.SourceFile.Chunker.Universal.chunkFilesBatch(
        this.collectionFiles,
        Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Universal })
      );
      TestApi.waitForSetup(this.ctx, null, 1, 300);
    });

    it('creates passages files for each source file', function () {
      var files = Genai.SourceFile.fetch({
        filter: Filter.intersects(
          'id',
          this.collectionFiles.map((sf) => {
            return sf.id;
          })
        ),
        include: 'passagesFile',
      }).objs;
      files.each(function (f) {
        expect(f.passagesFile.exists()).toEqual(true);
      });
    });

    it('places source files in the correct state', function () {
      TestApi.checkSrcFileHistory(this.collectionFiles, [Genai.SourceFile.StatusEnum.CHUNKED]);
    });

    describe('then indexing', function () {
      beforeAll(function () {
        this.vectorStore.indexFiles(this.collectionFiles);
        TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 300);
      });

      it('places source files in the correct state', function () {
        TestApi.checkSrcFileHistory(this.collectionFiles, [Genai.SourceFile.StatusEnum.INDEXED]);
      });

      it('has indexed files', function () {
        var result = this.vectorStore.similaritySearch(
          Genai.Retriever.SearchSpec.make({
            searchQuery: 'line 1',
            k: 2,
          })
        );
        expect(result.length).toBeGreaterThan(0);
      });

      describe('rewriting first two files content and syncing', function () {
        beforeAll(function () {
          this.files = TestApi.populateTxtSrcCollectionRoot(this.collection, 2, 30);
          var syncJobs = this.collection.sync();
          TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 600);
          TestApi.waitForSetup(this.ctx, null, 1, 300);
        });

        it('places correct files in `NEEDS_REINDEXING` state', function () {
          TestApi.checkSrcFileHistory(
            [this.firstCollectionFile, this.secondCollectionFile],
            [Genai.SourceFile.StatusEnum.NEEDS_REINDEXING]
          );
        });

        describe('then indexing', function () {
          beforeAll(function () {
            this.vectorStore.indexFiles([this.firstCollectionFile, this.secondCollectionFile]);
            TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 300);
          });

          it('places them in `INDEXED` state', function () {
            TestApi.checkSrcFileHistory(
              [this.firstCollectionFile, this.secondCollectionFile],
              [Genai.SourceFile.StatusEnum.INDEXED]
            );
          });

          describe('then deleting the original files and re-syncing', function () {
            beforeAll(function () {
              this.vectorStore.unindexFiles([this.firstCollectionFile]);
              TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 300);

              this.firstCollectionFile.originalFile.delete();
              this.secondCollectionFile.originalFile.delete();
              var syncJobs = this.collection.sync({ checkForRemovedOriginalFiles: true });
              TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 600);
              TestApi.waitForJob(this.ctx, syncJobs.objBatchJob, 1, 600);
              TestApi.waitForSetup(this.ctx, null, 1, 300);
            });

            it('sends the files to `ARCHIVED`', function () {
              TestApi.checkSrcFileHistory([this.firstCollectionFile], [Genai.SourceFile.StatusEnum.ARCHIVED]);

              // Since second file was not unindexed, it is not archived, and first needs removal
              TestApi.checkSrcFileHistory([this.secondCollectionFile], [Genai.SourceFile.StatusEnum.NEEDS_REMOVAL]);
            });

            it('deletes the passagesFile', function () {
              expect(this.firstCollectionFile.get('passagesFile').passagesFile.exists()).toEqual(false);

              // Second file is not archived as it was not unindexed
              expect(this.secondCollectionFile.get('passagesFile').passagesFile.exists()).toEqual(true);
            });

            describe('then unindexing the second file', function () {
              beforeAll(function () {
                this.vectorStore.unindexFiles([this.firstCollectionFile, this.secondCollectionFile]);
                TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 300);
              });

              it('sends first file to `FAILED` state', function () {
                // The file does not exist to unindex
                TestApi.checkSrcFileHistory([this.firstCollectionFile], [Genai.SourceFile.StatusEnum.FAILED]);
              });

              it('sends it to `ARCHIVED` state', function () {
                TestApi.checkSrcFileHistory([this.secondCollectionFile], [Genai.SourceFile.StatusEnum.ARCHIVED]);
              });
            });
          });
        });
      });
    });
  });
});
