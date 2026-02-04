/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_singleHop_translation';
var testObjs;
var resultIds;

describe(filename, function () {
  testObjs = [
    {
      query: 'According to our documents who is the Chairman of the Board of Issuers?',
      nonTranslatedQuery: '¿Quién es el presidente del directorio de los emisores?',
      detectedLanguage: 'es',
      expectedTool: 'documentQuestionAnswer()',
      expectedTranslatedAnswersList: ['presidente'],
      expectedTranslatedRationale: ['presidente'],
    },
    {
      query: 'How many Aircrafts are in Sn Francisco according to our database?', // Typo is deliberate to use fuzzy matching
      nonTranslatedQuery: 'Cuantas Aeronaves hay en Sn Francisco según nuestra base de datos?',
      detectedLanguage: 'es',
      expectedTool: 'relationalDatabaseQuery()',
      expectedTranslatedAnswersList: ['25', 'la cuadrícula para obtener más detalles'],
      expectedTranslatedRationale: ['Genai.Aircraft', 'EvalSpec', 'San Francisco'], // Structured rationale is not translated
    },
  ];

  function getInProgressGenAiResultForTestObj(testObj) {
    return Genai.Query.Result.fetch({
      filter: Filter.intersects('id', resultIds).and().eq('searchQuery.rawQuery', testObj.query),
      limit: 1,
    }).first();
  }

  beforeAll(function () {
    this.setupRes = TestApi.setUpQueryOrchestratorTest(filename, testObjs);
    Genai.Translator.Config.getConfig().setConfigValue('enabled', true);
    Genai.Translator.Config.setConfigValue('translatorTypeName', Genai.Translator.Llm);
    this.queryOrchestrator = this.setupRes.queryOrchestrator;
    resultIds = this.setupRes.resultIds;
  });

  afterAll(function () {
    Genai.Translator.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    TestApi.tearDownQueryOrchestratorTest(this.setupRes);
  });

  testObjs.forEach(function (testObj) {
    describe(testObj.expectedTool, function () {
      beforeAll(function () {
        this.queryOrchestrator.config().setConfigValue('doNotCreateRelations', false);
        this.queryOrchestrator.config().setConfigValue('enableFollowUpSuggestions', true);
        this.queryOrchestrator.initialize(true);
        this.genAiResultWithTranslation = this.queryOrchestrator
          .chatQuery(getInProgressGenAiResultForTestObj(testObj))
          .get('this, usedTranslation');
      });

      it('marks the usedTranslation field as true', function () {
        expect(this.genAiResultWithTranslation.usedTranslation).toBeTrue();
      });

      it('produces the translated result', function () {
        TestApi.checkStringMatches(this.genAiResultWithTranslation.answer, testObj.expectedTranslatedAnswersList);
      });

      it('produces the translated rationale', function () {
        TestApi.checkStringMatches(this.genAiResultWithTranslation.rationale, testObj.expectedTranslatedRationale);
      });

      afterAll(function () {
        this.genAiResultWithTranslation.remove();
      });
    });
  });
});
