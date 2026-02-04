/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceFileStatusHistory_integration';

describe(filename, function () {
  TestApi.installRuntimes();
  beforeAll(function () {
    Genai.PyUtil.terminateAllEngines();
    this.ctx = TestApi.createContext(filename);
    this.collectionRootSubpath = 'test_GenaiSourceCollection/' + Uuid.create() + '/testCollRoot';
    this.collectionRoot = FileSystem.makeFile(this.collectionRootSubpath);

    // Create the SourceCollection
    this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      description: 'mergedPassages collection',
      name: 'testMergedPassagesCollection',
      rootUrl: this.collectionRoot.url,
      targetUrl: filename + '/test',
    }).get('this');
    this.collectionFiles = TestApi.populateTxtSrcCollectionRoot(this.collection, 5);
    expect(this.collectionFiles.size).toEqual(5);
    this.chunkingSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Line });

    var syncJobs = this.collection.sync(null);
    TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 600);
    TestApi.waitForSetup(this.ctx, null, 1, 300);
    this.collectionSrcFiles = this.collection.get('files').files;

    this.vectorStore = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
      name: filename,
    }).get();
    this.initialUnstructuredQueryEngineConfig = Genai.UnstructuredQuery.Engine.Config.inst();
    Genai.UnstructuredQuery.Engine.Config.inst().setConfigValue('vectorStore', this.vectorStore);
    this.indexPassagesSpy = TestApi.indexPassagesSpy(this.ctx);
    this.processQueuesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.IndexAction', 'processQueues');
  });

  afterAll(function () {
    try {
      this.vectorStore.purgeIndex();
      this.vectorStore.remove();
      this.initialUnstructuredQueryEngineConfig.setConfig();
      TestApi.cleanUpCollection(this.collection);
    } finally {
      TestApi.teardown(this.ctx);
      Genai.PyUtil.terminateAllEngines();
    }
  });

  describe('with a mixture of source files with and without text content', function () {
    beforeAll(function () {
      this.invalidFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
        originalFile: C3.File.make('invalid.txt'),
      }).get();
      this.invalidFile.originalFile.writeString('');

      this.validFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
        originalFile: C3.File.make('valid.txt'),
      }).get();
      this.validFile.originalFile.writeString(' some text'.repeat(100));

      this.files = [this.invalidFile, this.validFile];

      Genai.SourceFile.process(this.files);
      TestApi.waitForSetup(this.ctx, null, 1, 300);
    });

    it('places files with no text content in the failed state', function () {
      TestApi.checkSrcFileHistory([this.invalidFile], [Genai.SourceFile.StatusEnum.FAILED]);
    });

    it('places files with valid text content in the indexed state', function () {
      TestApi.checkSrcFileHistory(
        [this.validFile],
        [
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
        ]
      );
    });
  });

  it('initial sync creates SourceFiles in the `NOT_INDEXED` state', function () {
    TestApi.checkSrcFileHistory(this.collectionSrcFiles, [Genai.SourceFile.StatusEnum.NOT_INDEXED]);
  });

  describe('indexing files with process', function () {
    it('completes without errors', function () {
      // Since vectorStore is set on Genai.UnstructuredQuery.Engine.Config, we don't need to pass it directly to process
      var srcFiles = Genai.SourceFile.process(this.collectionSrcFiles, null, this.chunkingSpec);
      expect(srcFiles.count()).toEqual(this.collectionSrcFiles.length);
      expect(srcFiles.errors.length).toEqual(0);
      TestApi.waitForSetup(this.ctx, null, 1, 300);
    });

    it('places them into `INDEXED` state and gives them the correct history', function () {
      TestApi.checkSrcFileHistory(this.collectionSrcFiles, [
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.NOT_INDEXED,
      ]);
    });
  });

  describe('addTags', function () {
    describe('with embedMetadata=false', function () {
      it('does not set status to NEEDS_REINDEXING', function () {
        this.collectionSrcFiles.each((srcFile) => {
          return srcFile.addTag('test-tag-1');
        });
        TestApi.waitForSetup(this.ctx, null, 1, 300);
        TestApi.checkSrcFileHistory(this.collectionSrcFiles, [
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
          Genai.SourceFile.StatusEnum.NOT_INDEXED,
        ]);
      });
    });

    describe('with embedMetadata=true', function () {
      beforeAll(function () {
        this.collection.config().setConfigValue('embedMetadata', true);
        Genai.SourceCollection.Metadata.Config.clearCache();
      });

      afterAll(function () {
        this.collection.config().setConfigValue('embedMetadata', false);
        Genai.SourceCollection.Metadata.Config.clearCache();
      });

      it('sets status to NEEDS_REINDEXING', function () {
        this.collectionSrcFiles.each((srcFile) => {
          return srcFile.addTag('test-tag-2');
        });
        TestApi.waitForSetup(this.ctx, null, 1, 300);
        TestApi.checkSrcFileHistory(this.collectionSrcFiles, [
          Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
          Genai.SourceFile.StatusEnum.NOT_INDEXED,
        ]);
      });

      it('reprocesses those that need reindexing', function () {
        var srcFiles = Genai.SourceFile.process(this.collectionSrcFiles, null, this.chunkingSpec);
        expect(srcFiles.count()).toEqual(this.collectionSrcFiles.length);
        expect(srcFiles.errors.length).toEqual(0);
        TestApi.waitForSetup(this.ctx, null, 1, 300);

        TestApi.checkSrcFileHistory(this.collectionSrcFiles, [
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
          Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
          Genai.SourceFile.StatusEnum.NOT_INDEXED,
        ]);
      });
    });
  });

  describe('updating file contents and syncing again', function () {
    it('completes without errors', function () {
      this.collection = this.collection.get('this');
      this.collectionFiles = TestApi.populateTxtSrcCollectionRoot(this.collection, 5, 15);
      var syncJobs = this.collection.sync(null);
      TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob);
      TestApi.waitForSetup(this.ctx, null, 1, 300);
    });

    it('sets `NEEDS_REINDEXING` state and gives them the correct history', function () {
      TestApi.checkSrcFileHistory(this.collectionSrcFiles, [
        Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
        Genai.SourceFile.StatusEnum.SYNCING,
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.NOT_INDEXED,
      ]);
    });
  });

  describe('re-indexing the same files', function () {
    it('completes without errors', function () {
      var srcFiles = Genai.SourceFile.process(this.collectionSrcFiles, null, this.chunkingSpec);
      expect(srcFiles.count()).toEqual(this.collectionSrcFiles.length);
      expect(srcFiles.errors.length).toEqual(0);
      TestApi.waitForSetup(this.ctx, null, 1, 300);
    });

    it('places them in the `INDEXED` state again and maintains history', function () {
      TestApi.checkSrcFileHistory(this.collectionSrcFiles, [
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
        Genai.SourceFile.StatusEnum.SYNCING,
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.NOT_INDEXED,
      ]);
    });

    describe('then unprocessing', function () {
      it('completes without errors', function () {
        this.indexPassagesSpy.unregister();
        this.unindexPassagesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'unindexPassages');
        function unindexLambda(_action, input) {
          var currIndexedFiles = Genai.SourceFile.fetch({
            filter: Filter.endsWith('originalFile.url', 'file0.txt')
              .or()
              .endsWith('originalFile.url', 'file1.txt')
              .or()
              .endsWith('originalFile.url', 'file2.txt')
              .or()
              .endsWith('originalFile.url', 'file3.txt')
              .or()
              .endsWith('originalFile.url', 'file4.txt'),
          }).objs;
          var passages = [];
          input.this.onIndexComplete(passages, currIndexedFiles, true, true);
        }
        this.unindexPassagesSpy.callFake(unindexLambda).register();
        this.indexedSourceFilesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'indexedSourceFiles')
          .returnValue(this.collectionSrcFiles)
          .register();
        Genai.SourceFile.unprocess(this.collectionSrcFiles);
        this.unindexPassagesSpy.unregister();
        this.indexedSourceFilesSpy.unregister();
        TestApi.waitForSetup(this.ctx, null, 1, 300);
      });

      afterAll(function () {
        this.indexPassagesSpy = TestApi.indexPassagesSpy(this.ctx);
      });

      it('places them in the `NOT_INDEXED` state and maintains history', function () {
        TestApi.checkSrcFileHistory(this.collectionSrcFiles, [
          Genai.SourceFile.StatusEnum.NOT_INDEXED,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
          Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
          Genai.SourceFile.StatusEnum.SYNCING,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
          Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
          Genai.SourceFile.StatusEnum.NOT_INDEXED,
        ]);
      }).pend('GEN-11259 this works on SNEs but not on Jarvis');
    });
  });

  describe('with indexing errors', function () {
    beforeAll(function () {
      this.processQueuesSpy
        .callFake(
          Lambda.fromJsFunc(function (_action, _input) {
            throw new Error('indexing error');
          })
        )
        .register();
    });

    it('completes with errors for all files', function () {
      Genai.SourceFile.Chunker.Universal.chunkFilesBatch(this.collectionSrcFiles, this.chunkingSpec);
      TestApi.waitForSetup(this.ctx, null, 1, 300);
      var srcFiles = this.vectorStore.indexFiles(this.collectionSrcFiles);
      expect(srcFiles.count()).toEqual(0);
      expect(srcFiles.errors.length).toEqual(this.collectionSrcFiles.length);
      TestApi.waitForSetup(this.ctx, null, 1, 300);
    });

    it('places files in the failed state', function () {
      TestApi.checkSrcFileHistory(this.collectionSrcFiles, [
        Genai.SourceFile.StatusEnum.FAILED,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.NOT_INDEXED,
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
        Genai.SourceFile.StatusEnum.SYNCING,
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.NOT_INDEXED,
      ]);
    }).pend('GEN-11259 this works on SNEs but not on Jarvis');

    it('persists error messages for the source files', function () {
      var messages = Genai.SourceFile.fetch({
        filter: Filter.intersects(
          'id',
          this.collectionSrcFiles.map((f) => {
            return f.id;
          })
        ),
        include: 'statusHistory.errorMessage',
      }).objs.pluck('statusHistory[0].errorMessage');

      _.each(messages, function (msg) {
        expect(msg).toContain('indexing error');
      });
    });
  });
});
