/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_S3BucketAccess';

describe(filename, function () {
  beforeAll(function () {
    TestApi.setAwsS3BucketCreds(['c3--test-genai']);
    this.listFilesResult = FileSystem.s3().listFiles(Genai.SourceSystem.S3.getRootUrl('c3--test-genai'));
  });

  it('has access to external S3 bucket', function () {
    expect(this.listFilesResult.files.length).toEqual(9);
  });
});
