/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UnstructuredQuery_Engine_RA_azure_withReranker';
var ctx;
var testConfig;

describe(filename, function () {
  ctx = TestApi.createContext(filename);
  beforeAll(function () {
    Genai.UnstructuredQuery.Engine.REA.RetrieverConfig.clearAllConfigAndSecretOverrides('APP', true);
    this.origConfigs = Genai.UnstructuredQueryEngineTester.setupTest({
      filename: filename,
      apiKeySetupFuncNames: ['setOpenAiApiKey'],
      suffix: '_gpt4o',
      rerankerConfigName: 'reranking_config',
    });

    this.config = Genai.UnstructuredQuery.Engine.Config.inst().getConfig();
    this.config.setConfigValue('chatWithFullHistory', null);
    this.rerankerConfig = Genai.UnstructuredQuery.Engine.REA.RerankerConfig.forConfigKey(
      this.config.rerankerConfigName
    );
    this.rerankerConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  afterAll(function () {
    Genai.UnstructuredQueryEngineTester.teardownTest(ctx, this.origConfigs);
    this.config.clearConfigAndSecretOverride(ConfigOverride.APP);
    this.rerankerConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  testConfig = {
    testWithVaryingNumSources: false,
    numSimilaritySearchCalls: 2,
  };

  // Tests setting just scoreThreshold
  describe('with scoreThreshold set to 0.05', function () {
    beforeAll(function () {
      this.rerankerConfig.setConfigValue('scoreThreshold', 0.05);
      Genai.PyUtil.terminateAllEngines();
    });

    Genai.UnstructuredQueryEngineTester.runTest(
      ctx,
      Object.assign(testConfig, {
        testCaseNames: ['basicDocQuery'],
      })
    );
  });

  /*
   * Tests setting just rankThreshold. Using 4 instead of 1, because with fewer than 4,
   * GPT-3.5 responds with, "please provide a specific question related to the given extracts"
   */
  describe('with rankThreshold set to 4', function () {
    beforeAll(function () {
      this.rerankerConfig.setConfigValue('rankThreshold', 4);
      this.rerankerConfig.setConfigValue('scoreThreshold', 0);
      Genai.PyUtil.terminateAllEngines();
    });

    Genai.UnstructuredQueryEngineTester.runTest(
      ctx,
      Object.assign(testConfig, {
        testCaseNames: ['basicDocQuery'],
      })
    );
  });

  // Tests setting both and verifies that filtering everything out is handled gracefully
  describe('with scoreThreshold set to > queryMaxLen (exclude everything)', function () {
    beforeAll(function () {
      this.rerankerConfig.setConfigValue(
        'scoreThreshold',
        Genai.UnstructuredQuery.Engine.REA.RetrieverConfig.forConfigKey('retriever_config').queryMaxLen + 1
      );
      this.rerankerConfig.setConfigValue('rankThreshold', 1);
      Genai.PyUtil.terminateAllEngines();
    });

    Genai.UnstructuredQueryEngineTester.runTest(
      ctx,
      Object.assign(
        Object.assign(testConfig, {
          testCaseNames: ['forcedIDontKnow'],
        })
      )
    );
  });
});
