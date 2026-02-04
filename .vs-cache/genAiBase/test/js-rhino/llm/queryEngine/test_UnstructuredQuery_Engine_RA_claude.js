/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UnstructuredQuery_Engine_RA_claude';

var ctx;
describe(filename, function () {
  ctx = TestApi.createContext(filename);
  beforeAll(function () {
    Genai.PyUtil.terminateAllEngines();
    this.origConfigs = Genai.UnstructuredQueryEngineTester.setupTest({
      filename: filename,
      apiKeySetupFuncNames: ['setAwsBedrockKeys'],
      suffix: '_aws_claude_v3_haiku',
      useAttribution: true,
    });

    // Use source attribution in the RA + Claude pipeline
    this.config = Genai.UnstructuredQuery.Engine.Config.inst().getConfig();
    this.config.setConfigValue('chatWithFullHistory', null);
  });

  afterAll(function () {
    Genai.UnstructuredQueryEngineTester.teardownTest(ctx, this.origConfigs);
    this.config.clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  Genai.UnstructuredQueryEngineTester.runTest(ctx, {
    testCaseNames: ['basicDocQuery'],

    // 1 call for the question-answering step
    numSimilaritySearchCalls: 1,
  });
});
