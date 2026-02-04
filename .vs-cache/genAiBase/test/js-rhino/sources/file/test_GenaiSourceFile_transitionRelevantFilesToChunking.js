/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_GenaiSourceFile_transitionRelevantFilesToChunking';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.intArray = C3.Array.ofIntInRange(0, 4);
    this.sourceFileIds = TestApi.upsertBatchEntity(
      this.ctx,
      'Genai.SourceFile',
      this.intArray.map(function (val) {
        var stringVal = val.toString();
        return {
          id: 'sf' + stringVal,
          name: 'sf' + stringVal,
          originalFile: 'random/url' + stringVal + '.txt',
        };
      })
    );

    var statusArray = [
      Genai.SourceFile.StatusEnum.NOT_INDEXED,
      Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
      Genai.SourceFile.StatusEnum.FAILED,
      Genai.SourceFile.StatusEnum.INDEXED,
    ];
    this.histories = TestApi.upsertBatchEntity(
      this.ctx,
      'Genai.SourceFile.StatusHistory',
      this.intArray.map(function (val) {
        var stringVal = val.toString();
        return {
          parent: 'sf' + stringVal,
          id: 'sf' + stringVal,
          value: statusArray[val],
        };
      })
    );
    TestApi.waitForSetup(this.ctx);
    Genai.SourceFile.refreshCalcFields({
      ids: this.sourceFileIds,
      sync: true,
    });

    // Call function which synchronously transitions correct files to `CHUNKING` state.
    this.relevantFiles = Genai.SourceFile.transitionRelevantFilesToChunking();
  });

  afterAll(function () {
    Genai.SourceFile.StatusHistory.removeAll(
      {
        filter: Filter.intersects('parent.id', this.sourceFileIds),
      },
      true
    );
    TestApi.teardown(this.ctx);
  });

  it('transitions correct files to `CHUNKING` state', function () {
    TestApi.checkSrcFileHistory(this.relevantFiles, [Genai.SourceFile.StatusEnum.CHUNKING]);
  });
});
