/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UnstructuredQuery_Engine_Config';

describe(filename, function () {
  beforeAll(function () {
    this.origPipelineConfig = Genai.UnstructuredQuery.Engine.Config.inst().getConfig();
    this.origQaConfig = Genai.UnstructuredQuery.Engine.REA.ContextualQaConfig.forConfigKey('qa_config');
    this.origExtractConfig = Genai.UnstructuredQuery.Engine.REA.ExtractorConfig.forConfigKey('extraction_config');
    this.origQrConfig =
      Genai.UnstructuredQuery.Engine.REA.QuestionRewritingConfig.forConfigKey('question_rewriting_config');
  });

  afterAll(function () {
    this.origPipelineConfig.setConfig();
    this.origQaConfig.setConfig();
    this.origExtractConfig.setConfig();
    this.origQrConfig.setConfig();
    Genai.UnstructuredQuery.Engine.REA.RetrieverConfig.clearAllConfigAndSecretOverrides('APP', true);
  });

  describe('populateReaEngineConfigs', function () {
    beforeAll(function () {
      this.retriever = Genai.Retriever.Dense.forName('alabamaBond-dense');
      this.executorParams = Genai.UnstructuredQuery.Engine.Config.forConfigKey('alabamaBond').executorParams;
    });

    beforeAll(function () {
      this.queryEngineConfig = Genai.UnstructuredQuery.Engine.Config.make({
        name: filename,
        modelConfigName: 'awsBedrock',
        extractionModelConfigName: 'awsBedrock',
        questionRewritingConfigName: 'question_rewriting_config_aws_claude_v2',
        vectorStore: this.retriever,
        executorParams: this.executorParams,
      });
      this.queryEngineConfig.setConfig();
    });

    afterAll(function () {
      this.queryEngineConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    it('sets the expected fields', function () {
      this.queryEngineConfig.populateReaEngineConfigs();
      expect(this.origQaConfig.getConfig().modelInferenceConfigName)
        .withContext('QA config')
        .not.toEqual(this.origQaConfig.modelInferenceConfigName);
      expect(this.origExtractConfig.getConfig().modelInferenceConfigName)
        .withContext('extraction config')
        .toEqual(this.origExtractConfig.modelInferenceConfigName);
      expect(this.origQrConfig.getConfig().modelInferenceConfigName)
        .withContext('QR config')
        .not.toEqual(this.origQrConfig.modelInferenceConfigName);
    });
  });
});
