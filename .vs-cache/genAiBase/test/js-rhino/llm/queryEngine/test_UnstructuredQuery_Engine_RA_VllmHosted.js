/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UnstructuredQuery_Engine_RA_VllmHosted';

describe(filename, function () {
  var ctx = TestApi.createContext(filename);
  beforeAll(function () {
    this.origConfigs = Genai.UnstructuredQueryEngineTester.setupTest({
      filename: filename,
      apiKeySetupFuncNames: ['setVllmEndpoint'],
      suffix: '_vllm',
    });
  });

  afterAll(function () {
    Genai.UnstructuredQueryEngineTester.teardownTest(ctx, this.origConfigs);
  });

  Genai.UnstructuredQueryEngineTester.runTest(ctx, {
    /**
     * Currently, no requests are being dispatched in Jarvis builds to the remote VLLM endpoint,
     * but if testing changes manually, re-add these to the `testCaseNames`:
     * 'basicDocQuery',
     * 'docQueryWithFileFilter',
     * 'docQueryWithFiletypeFilter',
     */
    testCaseNames: [],
    testWithVaryingNumSources: false,
    doNotCheckRationale: true,
    doNotCheckChatFilter: true,
  });
});
