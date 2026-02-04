/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_MultimodalPdfChunker_nullCharacter';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.setOpenAiApiKey();

    this.originalMockLlmConfigMode = TestApi.enableMockLlmPlaybackIfInJarvis();
    TestApi.setMockLlmConfigPath(filename);
    Genai.PyUtil.terminateAllEngines();

    var mmPdfCfg = Genai.SourceFile.Chunker.MultimodalPdf.Config.getConfig();
    mmPdfCfg.setConfigValue('layoutParserSpec.device', 'cpu');
    mmPdfCfg.setConfigValue('tableParserSpec.tableDetectorSpec.detectionThreshold', '0.3');
    mmPdfCfg.setConfigValue('imageParserSpec.detectionThreshold', '2');
    var sourceFile = TestApi.upsertEntity(
      this.ctx,
      'Genai.SourceFile',
      Genai.SourceFile.make({
        originalFile: Pkg.file('meta://genAiBase/test/resource/chunker/pdfChunker/table_with_null_byte.pdf'),
      })
    );
    var chunkResult = TestApi.getChunkedPassages(sourceFile);
    this.extractedTable = _.find(chunkResult.passages, (passage) => {
      return passage.tableVerbalization;
    });
  });

  afterAll(function () {
    Genai.Llm.MockLlmConfig.getConfig().setConfigValue('mode', this.originalMockLlmConfigMode);
    Genai.SourceFile.Chunker.MultimodalPdf.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  it('removes null character from extracted table contents', function () {
    var extractedTableContents = this.extractedTable.dataFrameFile.readString();
    expect(extractedTableContents.indexOf('\x00')).toBe(-1);
  });
});
