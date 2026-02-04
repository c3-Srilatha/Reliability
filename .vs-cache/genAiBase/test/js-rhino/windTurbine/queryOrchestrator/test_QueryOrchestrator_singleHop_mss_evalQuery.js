/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_singleHop_mss_evalQuery';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 60 * 1000;
var mssTestObj;

// TODO GEN-11233 Remove support for Eval Query
xdescribe(filename, function () {
  mssTestObj = {
    tool: 'EvalQuery',
    toolsOverride: ['relationalDatabaseQuery()', 'documentQuestionAnswer()'],
    query:
      'Who is the chairman of the board of the issuers? How many Aircrafts are in Sn Francisco according to our database?',

    /*
     * This tests the case when no unstructured docs are available
     * and only spec for structured query is generated and processed
     */
    structuredQuery: 'How many Aircrafts are in San Francisco according to our database?',
    translationValues: {
      englishValue:
        'Who is the chairman of the board of the issuers and how many Aircrafts are in San Francisco according to our database?',
      translatedValue:
        '¿Quién es el presidente del directorio de las emisoras y cuántas Aeronaves hay en San Francisco según nuestra base de datos?',
      expectedAnswers: [['Robert L. Smith'], ['presidente', '25 aviones']],
    },
    expectedAnswers: ['Robert Smith', '25', 'San Francisco'],
    expectedStructuredRuleBasedAnswer: 'the table has 1 rows and 1 columns',
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
