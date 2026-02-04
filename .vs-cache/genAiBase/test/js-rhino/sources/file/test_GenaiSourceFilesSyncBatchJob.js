/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceFilesSyncBatchJob';

describe(filename, function () {
  beforeAll(function () {
    this.collectionLogger = Logger.for('Genai.SourceFile.Job.SyncBatchJob');
    this.collectionLogger.setLogLevel('DEBUG');
    this.ctx = TestApi.createContext(filename);

    this.collection1 = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      description: 'test collection1',
      name: 'test collection1',
      rootUrl: 'root/url/1',
      targetUrl: 'target/url/1',
    }).get('this');

    this.file1 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      collection: this.collection1,
      originalFile: C3.File.make('test-file1'),
    }).get('this');

    this.collection2 = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      description: 'test collection2',
      name: 'test collection2',
      rootUrl: 'root/url/2',
      targetUrl: 'target/url/2',
    }).get('this');

    this.file2 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      collection: this.collection2,
      originalFile: C3.File.make('test-file2'),
    }).get('this');

    this.indexSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'indexPassages').returnValue().register();
  });

  afterAll(function () {
    TestApi.cleanUpCollection(this.collection1);
    TestApi.cleanUpCollection(this.collection2);
    this.collectionLogger.setLogLevel('INFO');
    TestApi.teardown(this.ctx);
  });

  describe('batchJob', function () {
    beforeAll(function () {
      this.syncFilesSpy = TestApi.spyOn(this.ctx, 'Genai.SourceCollection', 'syncFiles').returnValue(null).register();
      this.batchJobCountBefore = Genai.SourceFile.Job.SyncBatchJob.fetchCount();

      Genai.SourceFile.syncFilesBatch([this.file1, this.file2]);
      this.batchJobCountAfter = Genai.SourceFile.Job.SyncBatchJob.fetchCount();

      TestApi.waitForSetup(this.ctx);
    });

    afterAll(function () {
      this.syncFilesSpy.unregister();
    });

    it('successfully completes', function () {
      expect(
        Genai.SourceFile.Job.SyncBatchJob.fetch({ order: 'descending(meta.created)' }).first().status().status
      ).toEqual('completed');
    });

    it('transitions files to the `SYNCING` state', function () {
      this.syncingFiles = Genai.SourceFile.fetch({
        filter: Filter.intersects('collection.id', [this.collection1.id, this.collection2.id]),
        include: 'status.value, statusHistory.value',
      }).objs;
      TestApi.checkSrcFileHistory(this.syncingFiles, [Genai.SourceFile.StatusEnum.SYNCING]);
    });

    it('calls the syncFiles api for every collection', function () {
      expect(this.batchJobCountAfter).toEqual(this.batchJobCountBefore + 2);
    });
  });
});
