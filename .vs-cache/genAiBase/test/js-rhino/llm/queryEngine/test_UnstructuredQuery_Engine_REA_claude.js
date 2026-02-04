/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UnstructuredQuery_Engine_REA_claude';

var ctx;
describe(filename, function () {
  ctx = TestApi.createContext(filename);
  beforeAll(function () {
    this.origConfigs = Genai.UnstructuredQueryEngineTester.setupTest({
      filename: filename,
      apiKeySetupFuncNames: ['setAwsBedrockKeys'],
      extractionConfigName: 'extraction_config',
      suffix: '_aws_claude_v3_haiku',
    });
    this.config = Genai.UnstructuredQuery.Engine.Config.inst().getConfig();
    this.config.setConfigValue('retrieverConfigName', 'retriever_config_aws_claude_v3');
    this.config.setConfigValue('chatWithFullHistory', null);
    Py.closeAllPy4jInterpreters();
  });

  afterAll(function () {
    Genai.UnstructuredQueryEngineTester.teardownTest(ctx, this.origConfigs);
    this.config.clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  Genai.UnstructuredQueryEngineTester.runTest(ctx, {
    testCaseNames: ['basicDocQuery', 'docQueryWithFileFilter'],
    testWithVaryingNumSources: false,
    doNotCheckRationale: true,
    doNotCheckChatFilter: true,
    useExtraction: true,
  });
});
