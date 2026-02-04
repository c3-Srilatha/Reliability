/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceFile_multipleBatches';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    Genai.App.ReadOnlyConfig.inst().setConfigValue('sourceFileBatchSize', 5);

    // 2001 ensures both more than the default batchSize and the default fetch limit
    this.numFiles = 2001;

    this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      name: filename,
      rootUrl: filename + '/collRoot',
      targetUrl: filename + '/test',
    }).get('this');
    Genai.SourceFile.StatusHistory.removeAll(
      {
        filter: Filter.ne('parent.collection.id', this.collection.id),
      },
      true
    );
    TestApi.waitForSetup(this.ctx, null, 1, 300);
    this.txtFiles = TestApi.populateTxtSrcCollectionRoot(this.collection, (numFiles = this.numFiles), (numLines = 1));
    var syncJobs = this.collection.sync();
    TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 600);
    TestApi.waitForSetup(this.ctx, null, 1, 300);

    this.files = Genai.SourceFile.fetch({
      filter: Filter.eq('collection.id', this.collection.id),
      order: 'ascending(originalFile.url)',
      include: 'this',
      limit: this.numFiles,
    }).objs;
    this.fileIds = this.files.pluck('id');

    // Ensure that the test doesn't need to do actual indexing
    this.indexPassagesSpy = TestApi.indexPassagesSpy(this.ctx);
    this.retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
      name: filename + DateTime.now(),
    }).get();

    expect(this.files.size).toEqual(this.numFiles);
  });

  afterAll(function () {
    // Remove the files from collection.sync()
    Genai.SourceFile.removeAll({ filter: Filter.eq('collection.id', this.collection.id) }, true);
    TestApi.waitForSetup(this.ctx, null, 1, 300);
    Genai.SourceFile.Chunker.Engine.terminate();
    TestApi.teardown(this.ctx);

    // Genai.SourceFile#beforeRemove removes the status histories as well
    expect(Genai.SourceFile.StatusHistory.fetchCount({ filter: Filter.intersects('parent.id', this.fileIds) }))
      .withContext('all Genai.SourceFile.StatusHistory entities have been removed in afterAll')
      .toEqual(0);
  });

  describe('status transitions', function () {
    beforeAll(function () {
      this.statusCountBefore = Genai.SourceFile.StatusHistory.fetchCount({
        filter: Filter.intersects('parent.id', this.fileIds),
      });
      Genai.SourceFile.transitionFilesToStatus(this.files, Genai.SourceFile.StatusEnum.SYNCING);
      TestApi.waitForSetup(this.ctx, ['CalcFieldsQueue'], 1, 100);
      Genai.SourceFile.transitionCollectionToStatus(this.collection, Genai.SourceFile.StatusEnum.CHUNKING);
      TestApi.waitForSetup(this.ctx, ['CalcFieldsQueue'], 1, 100);
      Genai.SourceFile.handleTransitionToChunked(this.files);
      TestApi.waitForSetup(this.ctx, ['CalcFieldsQueue'], 1, 100);
      Genai.SourceFile.transitionCollectionToStatus(this.collection, Genai.SourceFile.StatusEnum.INDEXING);
      TestApi.waitForSetup(this.ctx, ['CalcFieldsQueue'], 1, 100);
      Genai.SourceFile.transitionFilesToStatus(
        this.files,
        Genai.SourceFile.StatusEnum.FAILED,
        null,
        C3.Array.repeat(PrimitiveType.ofStr(), this.files.length, 'test error')
      );
      TestApi.waitForSetup(this.ctx, null, 1, 120);
    });

    it('should have transitioned all files for each transition in setup', function () {
      TestApi.checkSrcFileHistory(this.files, [
        Genai.SourceFile.StatusEnum.FAILED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.CHUNKED,
        Genai.SourceFile.StatusEnum.CHUNKING,
        Genai.SourceFile.StatusEnum.SYNCING,
      ]);

      /*
       * Each transition results in an updated Genai.SourceFile.StatusHistory for each file that is transitioned.
       * Since there are 5 transitions, we expect 5 * numFiles status histories.
       */
      var statusCount = Genai.SourceFile.StatusHistory.fetchCount({
        filter: Filter.intersects('parent.id', this.fileIds),
      });
      expect(statusCount - this.statusCountBefore)
        .withContext('Genai.SourceFile.StatusHistory.fetchCount')
        .toEqual(this.numFiles * 5);

      var statusCountWithError = Genai.SourceFile.StatusHistory.fetchCount({
        filter: Filter.intersects('parent.id', this.fileIds).and().eq('errorMessage', 'test error'),
      });
      expect(statusCountWithError)
        .withContext('Genai.SourceFile.StatusHistory.fetchCount with error')
        .toEqual(this.numFiles * 1);
    });
  });

  describe('adding metadata to passages', function () {
    beforeAll(function () {
      function indexedContentStrLambda(passageContent, sourceFile) {
        sourceFile.withName('bar').merge();
        return passageContent;
      }
      var combinedPassagesFile = C3.FileSystem.makeFile(this.collection.targetUrl + '/combinedPassagesFile');
      var passages = this.files.mapTo('Genai.SourcePassage', function (file) {
        return Genai.SourcePassage.make({ source: { id: file.id }, intraSourceId: 1, contentStr: 'foo' });
      });
      combinedPassagesFile.writeString(passages.toJsonString());
      this.collection = this.collection
        .get()
        .withIndexedContentProvider(Lambda.fromJsFunc(indexedContentStrLambda))
        .withCombinedPassagesFile(combinedPassagesFile)
        .merge();
      expect(this.collection.readPassages().length).toEqual(this.numFiles);
      this.collection.config().setConfigValue('embedMetadata', true);
      expect(Genai.SourceFile.fetchCount({ filter: Filter.intersects('id', this.fileIds) })).toEqual(this.numFiles);

      this.retriever.indexCollections([this.collection]);
      TestApi.waitForSetup(this.ctx, null, 1, 300);
    });

    it('should have called the lambda for every file', function () {
      expect(
        Genai.SourceFile.fetchCount({ filter: Filter.intersects('id', this.fileIds).and().eq('name', 'bar') })
      ).toEqual(this.numFiles);
    });
  });

  describe('process', function () {
    beforeAll(function () {
      this.batchSize = 200;
      this.maxConcurrencyPerNode = 8;
      this.nodePool = 'singlenode';
      Genai.SourceFile.Chunker.UniversalChunker.Config.setConfigValue('mapReduceOptions', {
        batchSize: this.batchSize,
        maxConcurrencyPerNode: this.maxConcurrencyPerNode,
        nodePool: this.nodePool,
      });
      this.chunkMapReduceSpy = TestApi.spyOn(this.ctx, 'Genai.SourceFile.Job.ChunkMapReduce', 'startJob')
        .callThrough()
        .register();
      this.chunkFilesSpy = TestApi.spyOn(this.ctx, 'Genai.SourceFile.Chunker.Engine', 'chunkFilesBatch')
        .callThrough()
        .register();
    });

    afterAll(function () {
      this.chunkMapReduceSpy.unregister();
      this.chunkFilesSpy.unregister();
      Genai.SourceFile.Chunker.UniversalChunker.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      Genai.SourceFile.Job.ChunkMapReduce.removeAll(
        { filter: Filter.eq('spec.vectorStore.id', this.retriever.id) },
        true
      );
    });

    it('returns the expected list of objects', function () {
      /*
       * Multiple concurrent calls to ensure that parallel ChunkMapReduce jobs are handled correctly
       */
      for (var batchStart = 0; batchStart < this.numFiles; batchStart = batchEnd) {
        var batchEnd = batchStart < 1500 ? batchStart + 500 : this.files.length;
        var objList = Genai.SourceFile.process(this.files.slice(batchStart, batchEnd), this.retriever);
        expect(objList.objs.length).withContext(`objList ${batchStart} objs`).toBeGreaterThanOrEqual(500);
        expect(objList.errors.length).withContext(`objList ${batchStart} errors`).toEqual(0);
      }

      // Because there are multiple batches, we need to simulate the processQueues CronJob triggering multiple times
      var attempt = 0;
      do {
        // Simulate the CronJob firing
        Genai.Retriever.IndexAction.processQueues([this.retriever]);
        TestApi.waitForSetup(this.ctx, null, 1, 600);
        attempt++;
      } while (Genai.Retriever.IndexAction.indexActionCount(this.retriever) > 0 && attempt < 5);
    });

    it('should populate the ChunkMapReduce with the mapReduceOptions', function () {
      var job = Genai.SourceFile.Job.ChunkMapReduce.fetch({ order: 'descending(meta.created)' }).first();
      expect(job.spec).withContext('spec').toBeDefined();
      expect(job.spec.files.length).withContext('spec.files').toBeGreaterThanOrEqual(500);
      expect(job.batchSize).withContext('batchSize').toEqual(this.batchSize);
      expect(job.maxConcurrencyPerNode).withContext('maxConcurrencyPerNode').toEqual(this.maxConcurrencyPerNode);
      expect(job.filter).withContext('filter').toContain(this.files[2000].id);
      expect(job.nodePool).withContext('nodePool').toEqual(this.nodePool);
    });

    it('should have only started one job', function () {
      expect(this.chunkMapReduceSpy.getActionMock().callCount()).withContext('chunkMapReduceSpy called').toEqual(4);
    });

    it('calls chunkMapReduceJob with expected batch size', function () {
      var expectedNumMapTasks = Math.ceil(this.numFiles / this.batchSize) + 1;
      expect(this.chunkFilesSpy.getActionMock().callCount())
        .withContext('chunkFilesSpy call count')
        .toEqual(expectedNumMapTasks);
    });

    it('should have called indexPassages for each batch', function () {
      expect(this.indexPassagesSpy.getActionMock().callCount())
        .withContext('indexPassagesSpy call count')
        .toBeGreaterThanOrEqual(4);
    });

    it('should have updated all files to be Indexed', function () {
      this.files.each((file) => {
        file = file.get('metadata, status');
        expect(file.status.value)
          .withContext(`${file.metadata.fileName} status`)
          .toEqual(Genai.SourceFile.StatusEnum.INDEXED);
      });
    });
  });
});
