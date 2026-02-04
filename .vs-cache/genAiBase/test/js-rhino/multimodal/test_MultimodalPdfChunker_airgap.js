/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_MultimodalPdfChunker_airgap';

describe(filename, function () {
  beforeAll(function () {
    TestApi.setOpenAiApiKey();

    Genai.App.AirGapConfig.inst().setConfigValue(
      'nougatZipPath',
      'gcs://c3--datasets/genai/airgap/models/nougat-small.zip'
    );
    Genai.App.AirGapConfig.inst().setConfigValue(
      'nltkSentenceTokenizerModelFilePath',
      'gcs://c3--datasets/genai/airgap/punkt/PY3/english.pickle'
    );
    Genai.App.AirGapConfig.inst().setConfigValue(
      'detectronZipPath',
      'gcs://c3--datasets/genai/detectron2/faster_rcnn_R_50_FPN_3x.zip'
    );
    Genai.App.AirGapConfig.inst().setConfigValue(
      'tatrZipPath',
      'gcs://c3--datasets/genai/airgap/transformers/table-transformer-detection.zip'
    );
  });

  afterAll(function () {
    Genai.App.AirGapConfig.inst().clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  TestApi.testMultimodalChunking(filename);
});
