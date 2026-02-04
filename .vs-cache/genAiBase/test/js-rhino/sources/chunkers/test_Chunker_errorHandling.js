/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Chunker_errorHandling';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    var sourceFile = TestApi.upsertEntity(
      this.ctx,
      'Genai.SourceFile',
      Genai.SourceFile.make({
        originalFile: Pkg.file('meta://genAiBase/test/resource/chunker/pdfChunker/malformed.pdf'),
      })
    );
    Genai.SourceFile.Chunker.Universal.chunkFile(
      sourceFile,
      Genai.SourceFile.Chunker.UniversalChunker.Spec.make(),
      true
    );
    TestApi.waitForFunction(
      Lambda.fromJsFunc(function (sourceFile) {
        return sourceFile.get('status.value').status.value === 'Failed';
      }).partiallyApply({ sourceFile: sourceFile }),
      'Source file did not transition to failed state',
      1,
      20
    );

    this.sourceFileStatus = sourceFile.get('status').status;
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  it('source file transitioned to failed status', function () {
    expect(this.sourceFileStatus.value).toEqual('Failed');
  });

  it('correct error message surfaced', function () {
    expect(this.sourceFileStatus.errorMessage).toContain('Chunking failed with error:');
    expect(this.sourceFileStatus.errorMessage).toContain('Stream has ended unexpectedly');
  });

  describe('with a rasterized pdf', function () {
    beforeAll(function () {
      this.rasterized = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
        originalFile: Pkg.file('meta://genAiBase/test/resource/chunker/pdfChunker/rasterized.pdf'),
      });

      this.result = Genai.SourceFile.Chunker.Universal.chunkFile(
        this.rasterized,
        Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Universal }),
        true
      );
      TestApi.waitForSetup(this.ctx);
      this.rasterized = this.rasterized.get('status');
    });

    it('chunking does not error', function () {
      expect(this.result.objList.errors.length).toEqual(0);
    });

    it('file is marked failed', function () {
      expect(this.rasterized.status.value).toEqual(Genai.SourceFile.StatusEnum.FAILED);
      expect(this.rasterized.status.errorMessage).toContain('Chunking returned nothing');
    });
  });
});
