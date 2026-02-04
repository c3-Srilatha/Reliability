/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_concurrency';
var ctx;
var queryOrchestrator;

describe(filename, function () {
  ctx = TestApi.createContext(filename);

  beforeAll(function () {
    TestApi.setupStructuredDbAgentTest();
  });

  Genai.ConcurrentQueryTester.runConcurrencyTests({
    ctx: ctx,
    targetTool: 'relationalDatabaseQuery()',
    queryChainA: [
      'What is the riskScore of the aircraft with ID X84 according to our database? The filter for the eval query should be id == "X84".',
      'what is it?  The filter for the eval query should be id == "X84".',
    ],
    expectedAnswersA: ['score', 'score'],
    queryChainB: ['What is average daily temperature of all aircarfts?', 'What is it?.'],
    expectedAnswersB: ['temperature', 'temperature'],
  });

  afterAll(function () {
    TestApi.teardownStructuredDbAgentTest();
  });
});
