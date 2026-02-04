/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_MultimodalPdfChunker_claude_vertex';

// TODO GEN-11028 re-enable and record this test when OP-55185 is finally addressed
xdescribe(filename, function () {
  beforeAll(function () {
    TestApi.setGcpKey();

    this.originalMockLlmConfigMode = TestApi.enableMockLlmPlaybackIfInJarvis();
    TestApi.setMockLlmConfigPath(filename);
    Genai.PyUtil.terminateAllEngines();

    var mmPdfCfg = Genai.SourceFile.Chunker.MultimodalPdf.Config.getConfig();
    var imageParserSpec = mmPdfCfg.imageParserSpec;
    mmPdfCfg.setConfigValue(
      'tableParserSpec.tableVerbalizerSpec.modelInferenceConfigName',
      'qa_inference_config_vertex_claude_3_haiku'
    );
    mmPdfCfg.setConfigValue(
      'imageParserSpec',
      imageParserSpec.withImageVerbalizerSpec({
        modelName: 'vertex',
        modelParams: {
          model: 'claude-3-haiku@20240307',
          max_output_tokens: 1024,
          context_length: 8192,
          temperature: 0.0,
          top_p: 0.9,
        },
      })
    );
  });

  afterAll(function () {
    Genai.Llm.MockLlmConfig.getConfig().setConfigValue('mode', this.originalMockLlmConfigMode);
  });

  TestApi.testMultimodalChunking(filename);
});
