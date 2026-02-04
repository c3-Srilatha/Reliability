/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UnstructuredQuery_Engine_RA_claude_attributionWithCorroboration_withEntailment';
var ctx = TestApi.createContext(filename);

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 60 * 1000;
describe(filename, function () {
  // Models used by Attribution
  TestApi.installHuggingfaceModels(['cross-encoder/nli-deberta-v3-large', 'google-bert/bert-base-uncased']);

  beforeAll(function () {
    // Ensure that, if another test failed to clean up, the LLM mocking is disabled
    this.origMockLlmConfig = Genai.Llm.MockLlmConfig.inst().getConfig();
    this.origMockLlmConfig.setConfigValue('mode', 'off');
    this.origConfigs = Genai.UnstructuredQueryEngineTester.setupTest({
      filename: filename,
      apiKeySetupFuncNames: ['setAwsBedrockKeys'],
      suffix: '_aws_claude_v3_haiku',
      useAttributionWithCorroboration: true,

      // Since the variance in LLM responses due to entailment makes mocking untenable
      doNotUseMocking: true,
    });
  });

  afterAll(function () {
    this.origMockLlmConfig.setConfigValue('mode', this.origMockLlmConfig.mode);
    Genai.UnstructuredQueryEngineTester.teardownTest(ctx, this.origConfigs);
  });

  Genai.UnstructuredQueryEngineTester.runTest(ctx, {
    testCaseNames: ['basicDocQuery'],

    // One from question-answering plus one from attribution
    numSimilaritySearchCalls: 2,
    checkAnswerReferences: true,
    retrieverConfigName: this.retrieverConfigName,
    checkAttributionResults: true,
  });
});
