/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_singleHop_mss_c3po_sonnet';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 60 * 1000;
var mssTestObj;

describe(filename, function () {
  mssTestObj = {
    c3poLlmConfigName: 'awsBedrock_claude_v3_5_sonnet',
    toolkitName: 'QueryOrchestrator_mss_c3po_test',
    tool: 'StructuredDataQueryPy',
    toolsOverride: ['relationalDatabaseQuery()', 'documentQuestionAnswer()'],
    query:
      'Answer the following 2 questions: 1) How many Aircrafts are in Sn Francisco according to our database? 2) Who is the chairman of the board of the directors?',

    /*
     * This tests the case when no unstructured docs are available
     * and only spec for structured query is generated and processed
     */
    structuredQuery: 'How many Aircrafts are in San Francisco according to our database?',
    translationValues: {
      englishValue:
        'Who is the chairman of the board of the directors and how many Aircrafts are in San Francisco according to our database?',
      translatedValue:
        '¿Quién es el presidente de la junta directiva y cuántos aviones hay en San Francisco según nuestra base de datos?',
      expectedAnswers: [
        ['Robert L. Smith', 'presidente'],
        ['presidente', '25 aviones'],
      ],
    },
    expectedAnswers: ['Robert Smith', '25', 'San Francisco'],
    expectedStructuredRuleBasedAnswer: null,
    expectedSpec: Genai.StructuredQuery.Spec.make({
      spec: EvalSpec.make({
        filter: "('San Francisco' == location.city)",
        projection: 'count()',
      }),
      sourceType: 'Genai.Aircraft',
    }),
  };

  TestApi.testQueryOrchestratorWithMss(filename, mssTestObj);
});
