/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UnstructuredQuery_Engine_RA_azure_attributionWithCorroboration_withEntailment';
var ctx;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 60 * 1000;
describe(filename, function () {
  // Models used by Attribution
  TestApi.installHuggingfaceModels(['cross-encoder/nli-deberta-v3-large', 'google-bert/bert-base-uncased']);
  ctx = TestApi.createContext(filename);

  beforeAll(function () {
    this.origConfigs = Genai.UnstructuredQueryEngineTester.setupTest({
      filename: filename,
      apiKeySetupFuncNames: ['setOpenAiApiKey'],
      suffix: '_gpt4o',
      useAttributionWithCorroboration: true,
    });
    Genai.UnstructuredQuery.Engine.Config.setConfigValue('chatWithFullHistory', null);
  });

  afterAll(function () {
    Genai.UnstructuredQueryEngineTester.teardownTest(ctx, this.origConfigs);
    Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  Genai.UnstructuredQueryEngineTester.runTest(ctx, {
    testCaseNames: ['basicDocQuery', 'unableToAnswerQuery'],

    // One from question-answering plus one from attribution
    numSimilaritySearchCalls: 2,
    checkAnswerReferences: true,
    checkAttributionResults: true,
  });
});
