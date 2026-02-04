/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_SyncExternalSource';

describe(filename, function () {
  beforeAll(function () {
    TestApi.setAwsS3BucketCreds(['c3--test-genai']);
    this.ctx = TestApi.createContext(filename);
    this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      name: 'external collection',
      rootUrl: Genai.SourceSystem.S3.getRootUrl('c3--test-genai'),
      targetUrl: filename + '/target', // Target url is still in Default FS
    });

    this.collection.sync();
    TestApi.waitForSetup(this.ctx, null, 1, 180);
    this.collectionFiles = this.collection.get('files').files;
    this.listFiles = C3.FileSystem.s3().listFiles(Genai.SourceSystem.S3.getRootUrl('c3--test-genai')).files;
    this.supportedListFiles = Genai.Source.filterSourcesForFileTypes(this.listFiles);
  });

  it('creates correct number of source files', function () {
    expect(this.collectionFiles.length).toEqual(this.supportedListFiles.size);
  });

  it('places them in the `NOT_INDEXED` state', function () {
    TestApi.checkSrcFileHistory(this.collectionFiles, [Genai.SourceFile.StatusEnum.NOT_INDEXED]);
  });

  afterAll(function () {
    TestApi.cleanUpCollection(this.collection, true);
    TestApi.teardown(this.ctx);
  });
});
