/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_MultimodalPdfChunker_AES_Support';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.setOpenAiApiKey();
    var mmPdfCfg = Genai.SourceFile.Chunker.MultimodalPdf.Config.getConfig();
    mmPdfCfg.setConfigValue('imageParserSpec.raiseOnError', true);
    mmPdfCfg.setConfigValue('layoutParserSpec.device', 'cpu');
    this.sourceFileWithAES = TestApi.upsertEntity(
      this.ctx,
      'Genai.SourceFile',
      Genai.SourceFile.make({
        originalFile: Pkg.file('meta://genAiBase/test/resource/chunker/pdfChunker/great-expectations-ch1-aes.pdf'),
      })
    );
  });

  it('handles files that require AES encoding support', function () {
    var output = TestApi.getChunkedPassages(this.sourceFileWithAES);

    if (output.objList.errors.length) {
      fail(output.objList.errors[0].message);
    }

    expect(output.passages.length).toEqual(7);
  });
});
