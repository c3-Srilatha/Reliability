/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UnstructuredQuery_Engine_REA_azure';

var ctx;
describe(filename, function () {
  ctx = TestApi.createContext(filename);
  beforeAll(function () {
    this.origConfigs = Genai.UnstructuredQueryEngineTester.setupTest({
      filename: filename,
      apiKeySetupFuncNames: ['setOpenAiApiKey'],
      extractionConfigName: 'extraction_config',
      suffix: '_gpt4o',
    });
  });

  afterAll(function () {
    Genai.UnstructuredQueryEngineTester.teardownTest(ctx, this.origConfigs);
  });

  Genai.UnstructuredQueryEngineTester.runTest(ctx, {
    testCaseNames: ['basicDocQuery'],
    testWithVaryingNumSources: false,
    useExtraction: true,
  });
});
