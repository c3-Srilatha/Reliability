/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UnstructuredQuery_Engine_REA_gemini_streaming';
var ctx;

describe(filename, function () {
  ctx = TestApi.createContext(filename);
  beforeAll(function () {
    Genai.UnstructuredQuery.Engine.stopAllHandlers();
    this.origConfigs = Genai.UnstructuredQueryEngineTester.setupTest({
      filename: filename,
      apiKeySetupFuncNames: ['setGcpKey'],
      suffix: '_gemini_flash_2_0',
      extractionConfigName: 'extraction_inference_config_gemini_flash_2_0',
      doNotUseMocking: true,
    });
  });

  afterAll(function () {
    Genai.UnstructuredQuery.Engine.stopAllHandlers();
    Genai.UnstructuredQueryEngineTester.teardownTest(ctx, this.origConfigs);
  });

  Genai.UnstructuredQueryEngineTester.runStreamingTest({
    query: 'What is an ml pipeline?',
    expectedAnswers: ['machine', 'pipe'],
    expectedRationaleContent: ['model', 'pipe'],
    chatQueries: ['how do I train one?'],
    retryableErrorMessages: ['Response has no candidates', 'Content has no parts'],
    expectedChatAnswers: [['pipe', 'mlmodel.route', 'mloperationrun', 'model deployment']],
    expectedChatSources: [
      [
        'wind-turbine-predictive-maintenance.ipynb',
        'ds-ml-pipeline-tutorial.c3doc',
        'ds-model-dev-workflow.c3doc',
        'ml-pipeline.ipynb',
        'usecasehealthcare.ipynb',
        'usecasesampling.ipynb',
        'usecasebank.ipynb',
        'hpo.ipynb',
      ],
    ],
  });
});
