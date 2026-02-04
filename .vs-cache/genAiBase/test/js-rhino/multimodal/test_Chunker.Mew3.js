/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Chunker.Mew3';

describe(filename, function () {
  TestApi.installHuggingfaceModels(['bert-base-uncased', 'ds4sd/docling-models']);

  beforeAll(function () {
    TestApi.setOpenAiApiKey();
  });

  TestApi.testMultimodalChunking(filename, {
    multimodalChunkerTypeName: 'Genai.SourceFile.Chunker.Mew3',
    skipTableHeaderCheck: true,
    passageCount: 36,
    textPassageCount: 33,
    imagePassageCount: 6,
    tablePassageCount: 2,
  });

  describe('with VGT layout parser', function () {
    beforeAll(function () {
      Genai.SourceFile.Chunker.Mew3.Config.setConfigValue('pipelineSpec', {
        layout_parser_spec: {
          layout_model: {
            kind: 'VGT',
            kwargs: {
              vgt_inference_batch_size: 1,
              models_zip: 'gcs://c3--datasets/genai/models/layoutParser/models_m.zip',
              dont_generate_grid: true,
              device: 'cpu',
            },
          },
        },
      });
    });

    TestApi.testMultimodalChunking(filename, {
      multimodalChunkerTypeName: 'Genai.SourceFile.Chunker.Mew3',
      skipTableHeaderCheck: true,
      passageCount: 36,
      textPassageCount: 31,
      imagePassageCount: 3,
      tablePassageCount: 2,
    });

    afterAll(function () {
      Genai.SourceFile.Chunker.Mew3.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    });
  });
});
