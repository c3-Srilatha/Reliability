/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceFile_downstreamCleanup';

// Allow time for runtime installation
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120 * 60 * 1000;

describe(filename, function () {
  if (TestApi.isRunningInJarvis()) {
    // Will install all the runtimes not yet been installed, so waitForSetup does not time out when installing
    TestApi.installRuntimes();
  }

  beforeAll(function () {
    Genai.PyUtil.terminateAllEngines();
    this.ctx = TestApi.createContext(filename);
    this.collectionRootSubpath = 'test_GenaiSourceCollection/' + Uuid.create() + '/testCollRoot';
    this.collectionRoot = C3.FileSystem.makeFile(this.collectionRootSubpath);

    this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      rootUrl: this.collectionRoot.url,
      targetUrl: filename + '/test',
    }).get('this');
    this.collectionFiles = TestApi.populateTxtSrcCollectionRoot(this.collection, 3);
    expect(this.collectionFiles.size).toEqual(3);
    var syncJobs = this.collection.sync(null);
    TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 600);
    TestApi.waitForSetup(this.ctx, null, 1, 30);

    this.collectionSrcFiles = this.collection.get('files').files;
    this.chunkingSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Line });
    Genai.SourceFile.Chunker.Universal.chunkFilesBatch(this.collectionSrcFiles, this.chunkingSpec);
    TestApi.waitForSetup(this.ctx, null, 1, 30);

    // Index source files into vector store
    this.vectorStore = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.PgVector', {
      name: filename + '-pgVector' + DateTime.now(),
    }).get();
    this.initialUnstructuredQueryEngineConfig = Genai.UnstructuredQuery.Engine.Config.inst();
    this.initialUnstructuredQueryEngineConfig
      .withFields({
        name: filename,
        vectorStore: this.vectorStore,
      })
      .setConfig();
    Genai.UnstructuredQuery.Engine.Config.setDefault(filename);
    this.collection = this.collection.get('id, files');

    this.indexPassagesSpy = TestApi.indexPassagesSpy(this.ctx);
    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    try {
      TestApi.cleanUpCollection(this.collection);
      this.vectorStore.purgeIndex();
    } finally {
      Genai.UnstructuredQuery.Engine.Config.setDefault(this.initialUnstructuredQueryEngineConfig.name);
      TestApi.teardown(this.ctx);
      Genai.PyUtil.terminateAllEngines();
    }
  });

  it('starts with the correct history from sync', function () {
    TestApi.checkSrcFileHistory(this.collectionSrcFiles, [
      Genai.SourceFile.StatusEnum.CHUNKED,
      Genai.SourceFile.StatusEnum.CHUNKING,
      Genai.SourceFile.StatusEnum.NOT_INDEXED,
    ]);
  });

  describe('SourceFile.process', function () {
    it('succeeds', function () {
      Genai.SourceFile.process(this.collectionSrcFiles, null, this.chunkingSpec);

      // Currently, this test actually indexes all passages, so allow extra time for that
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'MapReduceQueue', 'CalcFieldsQueue'], 1, 120);
    });

    it('places them into `INDEXED` state and gives them the correct history', function () {
      TestApi.checkSrcFileHistory(this.collectionSrcFiles, [
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.NOT_INDEXED,
      ]);
    });
  });

  describe('removing the originalFiles and syncing again', function () {
    beforeAll(function () {
      FileSystem.deleteFilesBatch(FileSystem.listFiles(this.collectionRoot.url).files);
      TestApi.waitForSetup(this.ctx, null, 1, 30);
      var syncJobs = this.collection.sync({ checkForRemovedOriginalFiles: true });
      TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 30);
      TestApi.waitForJob(this.ctx, syncJobs.objBatchJob, 1, 30);
      TestApi.waitForSetup(this.ctx, null, 1, 30);
    });

    it('places them in the `NEEDS_REMOVAL` state and gives them correct history', function () {
      TestApi.checkSrcFileHistory(this.collectionSrcFiles, [
        Genai.SourceFile.StatusEnum.NEEDS_REMOVAL,
        Genai.SourceFile.StatusEnum.SYNCING,
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.NOT_INDEXED,
      ]);
    });

    it('does not remove their passagesFiles yet', function () {
      var collectionFiles = Genai.SourceFile.fetch({
        filter: Filter.eq('collection.id', this.collection.id),
        include: 'passagesFile',
      }).objs;
      collectionFiles.each((file) => {
        expect(file.passagesFile.exists()).toBe(true);
      });
    });

    describe('SourceFile.unprocess', function () {
      beforeAll(function () {
        this.archivedSourceFiles = this.collectionSrcFiles.slice(0, 2);
      });

      it('succeeds', function () {
        this.unindexPassagesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'unindexPassages');
        function unindexLambda(_action, input) {
          var currIndexedFiles = Genai.SourceFile.fetch({
            filter: Filter.endsWith('originalFile.url', 'file0.txt')
              .or()
              .endsWith('originalFile.url', 'file1.txt')
              .or()
              .endsWith('originalFile.url', 'file2.txt'),
          }).objs;
          var passages = Genai.SourceFile.fetch({
            filter: Filter.endsWith('originalFile.url', 'file2.txt'),
          })
            .first()
            .readPassages();
          input.this.onIndexComplete(passages, currIndexedFiles, true, true);
        }
        this.unindexPassagesSpy.callFake(unindexLambda).register();
        this.indexedSourceFilesSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'indexedSourceFiles')
          .returnValue(this.collectionSrcFiles)
          .register();
        Genai.SourceFile.unprocess(this.archivedSourceFiles);
        this.unindexPassagesSpy.unregister();
        this.indexedSourceFilesSpy.unregister();
        TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 90);
      });

      it('places them in the `ARCHIVED` state and gives them correct history', function () {
        TestApi.checkSrcFileHistory(this.archivedSourceFiles, [
          Genai.SourceFile.StatusEnum.ARCHIVED,
          Genai.SourceFile.StatusEnum.NEEDS_REMOVAL,
          Genai.SourceFile.StatusEnum.SYNCING,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
          Genai.SourceFile.StatusEnum.NOT_INDEXED,
        ]);
      });

      it('removes the passagesFiles from the archived SourceFiles', function () {
        var collectionFiles = Genai.SourceFile.fetch({
          filter: Filter.intersects(
            'id',
            this.archivedSourceFiles.map((file) => {
              return file.id;
            })
          ),
          include: 'passagesFile',
        }).objs;
        collectionFiles.each((file) => {
          expect(file.passagesFile.exists()).toBe(false);
        });
      });
    });
  });

  describe('manually removing source files deletes their passagesFiles', function () {
    beforeAll(function () {
      var originalFile = C3.FileSystem.makeFile(filename + '/originalFile.txt');
      this.sourceFileIds = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile', [
        { originalFile: originalFile },
        { originalFile: originalFile },
        { originalFile: originalFile },
      ]);
      this.sourceFiles = Genai.SourceFile.fetch({ filter: Filter.intersects('id', this.sourceFileIds) }).objs;
      expect(this.sourceFiles.size).toEqual(3);

      this.sourceFiles = this.sourceFiles.map((file) => {
        file = file.withPassagesFile(C3.FileSystem.makeFile(filename + '/' + file.id + 'passagesFile.txt'));
        file.passagesFile.writeString('test');
        return file.merge({ mergeInclude: 'passagesFile' }).get();
      });

      // Include one without a passagesFile because that should not cause problems
      this.sourceFiles = this.sourceFiles.with(
        TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
          originalFile: originalFile,
        }).get()
      );
      expect(this.sourceFiles.size).toEqual(4);
      this.sourceFiles.slice(0, 3).each((file) => {
        expect(file.passagesFile.exists()).toBe(true);
      });
      expect(this.sourceFiles[3].passagesFile).toBe(undefined);
    });

    it('removes the passages files', function () {
      Genai.SourceFile.removeBatch(this.sourceFiles);
      this.sourceFiles.slice(0, 3).each((file) => {
        expect(file.passagesFile.exists()).toBe(false);
      });
    });
  });
});
