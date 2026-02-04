/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Retriever_onIndexFailure';

describe('filename', function () {
  if (TestApi.isRunningInJarvis()) {
    TestApi.installRuntimes(['py-query_orchestrator']);
  }

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.testConfig = TestApi.setupTestRetriever(this.ctx, filename);
    this.retriever = this.testConfig.retriever;
    this.sourceCollections = this.testConfig.sourceCollections;
    this.sourceFiles = this.testConfig.sourceFiles;

    this.retriever.indexFiles(this.sourceFiles.slice(0, 3));
    TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 300);

    var firstMillis = DateTime.nowWithMillis().millis;
    TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile.StatusHistory', [
      {
        id: Str.safeId(this.sourceFiles[0].id + firstMillis),
        parent: this.sourceFiles[0].id,
        value: Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
      },
      {
        id: Str.safeId(this.sourceFiles[1].id + firstMillis),
        parent: this.sourceFiles[1].id,
        value: Genai.SourceFile.StatusEnum.NEEDS_REMOVAL,
      },
    ]);
    TestApi.waitForSetup(this.ctx);

    var sourceFiles = this.sourceFiles;
    var secondMillis = DateTime.nowWithMillis().millis;
    var histories = C3.Array.ofInt(0, 1, 2, 3).map(function (idx) {
      return {
        id: Str.safeId(sourceFiles[idx].id + secondMillis),
        parent: sourceFiles[idx].id,
        value: Genai.SourceFile.StatusEnum.INDEXING,
      };
    });
    TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile.StatusHistory', histories);
    TestApi.waitForSetup(this.ctx);

    var failedPassages = [];
    C3.Array.ofInt(0, 1, 2, 3).each(function (idx) {
      var sf = sourceFiles[idx];
      failedPassages = failedPassages.concat(sf.readPassages());
    });
    this.failedPassages = failedPassages;
    this.errorMessage = 'Random Test Message';
  });

  afterAll(function () {
    TestApi.teardownTestRetriever(this.ctx, this.testConfig);
    TestApi.teardown(this.ctx);
  });

  it('succeeds with unindexing=false', function () {
    var failedPassages = this.failedPassages;
    var errorMessage = this.errorMessage;
    var retriever = this.retriever;
    expect(function () {
      retriever.onIndexFailure(failedPassages, errorMessage, false);
    }).not.toThrow();
  });

  it('keeps first file in `NEEDS_REINDEXING`', function () {
    TestApi.checkSrcFileHistory(
      [this.sourceFiles[0]],
      [
        Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
      ]
    );
  });

  it('keeps second file in `NEEDS_REMOVAL`', function () {
    TestApi.checkSrcFileHistory(
      [this.sourceFiles[1]],
      [
        Genai.SourceFile.StatusEnum.NEEDS_REMOVAL,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.NEEDS_REMOVAL,
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
      ]
    );
  });

  it('keeps third file in `INDEXED`', function () {
    TestApi.checkSrcFileHistory(
      [this.sourceFiles[2]],
      [
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
        Genai.SourceFile.StatusEnum.INDEXED,
        Genai.SourceFile.StatusEnum.INDEXING,
      ]
    );
  });

  it('moves fourth file to `FAILED`', function () {
    TestApi.checkSrcFileHistory([this.sourceFiles[3]], [Genai.SourceFile.StatusEnum.FAILED]);
  });

  it('stores error message on fourth file', function () {
    var erroredSourceFile = this.sourceFiles[3].get('status.errorMessage');
    expect(erroredSourceFile.status.errorMessage).toContain(this.errorMessage);
  });

  it('succeeds with unindexing=true', function () {
    var failedPassages = this.failedPassages;
    var errorMessage = this.errorMessage;
    var retriever = this.retriever;
    expect(function () {
      retriever.onIndexFailure(failedPassages, errorMessage, false);
    }).not.toThrow();
  });
});
