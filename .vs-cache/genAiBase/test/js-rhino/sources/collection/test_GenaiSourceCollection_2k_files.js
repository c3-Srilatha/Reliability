/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceCollection_2k_files';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 300 * 60 * 1000;

// This test is currently disabled as it takes a very long time (~2h) to execute.
xdescribe(filename, function () {
  beforeAll(function () {
    this.collectionLogger = Logger.for('Genai.SourceCollection');
    this.collectionLogger.setLogLevel('DEBUG');
    this.ctx = TestApi.createContext(filename);
  });

  afterAll(function () {
    this.collectionLogger.setLogLevel('INFO');
    TestApi.teardown(this.ctx);
  });

  describe('mergedPassages with 2k files', function () {
    beforeAll(function () {
      this.mergedPassages2KId = filename + '_corpus_largefiles_2kfiles';
      this.mergedPassages2KColl = Genai.SourceCollection.make({
        id: this.mergedPassages2KId,
        name: this.mergedPassages2KId,
        rootUrl: 'gcs://c3--datasets/genai/corpus/corpus_largefiles_2kfiles/',
        targetUrl: C3.GcsFileSystem.makeFile(this.mergedPassages2KId).url,
      }).upsert();
      var syncJobs = this.mergedPassages2KColl.sync(null, { chunker: Genai.SourceFile.Chunker.Universal });
      TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 300 * 60);
      this.mergedPassagesFile = this.mergedPassages2KColl.mergedPassages();
    });

    afterAll(function () {
      TestApi.cleanUpCollection(this.mergedPassages2KColl, true);
      TestApi.teardown(this.ctx);
    });

    it('creates a File with all passages', function () {
      expect(this.mergedPassagesFile).toBeDefined();
    });
  });
});
