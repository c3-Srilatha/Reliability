/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UnstructuredQuery_Engine_changeDataConfig';

var ctx;
describe(filename, function () {
  ctx = TestApi.createContext(filename);
  beforeAll(function () {
    this.docQuestion = 'What is an ml pipeline?';
    this.bondQuestion = 'Who is Annie Furrer?';

    this.utaStr = Translation.getTranslationForLocale(
      'EnterpriseSearch.ErrorMessage.UnableToAnswer',
      'en'
    ).toLowerCase();
    this.checkDontKnow = function (query) {
      var shouldNotKnow = TestApi.makeAndLogQuery('chatQuery', query);
      expect(shouldNotKnow).toBeDefined();
      expect(shouldNotKnow.answer.toLowerCase()).toContain(this.utaStr);
    };
  });

  describe('with the documentation dataset', function () {
    beforeAll(function () {
      this.origConfigs = Genai.UnstructuredQueryEngineTester.setupTest({
        filename: filename,
        apiKeySetupFuncNames: ['setOpenAiApiKey'],
        retrieverName: 'c3DocumentationV6',
        suffix: '_gpt4o',
        doNotTruncateCallLog: false,
      });
    });

    afterAll(function () {
      Genai.UnstructuredQueryEngineTester.teardownTest(ctx, this.origConfigs);
    });

    it('knows the answer to documentation questions', function () {
      var queryResult = TestApi.makeAndLogQuery('chatQuery', this.docQuestion);
      TestApi.checkStringMatches(queryResult.answer, ['machine', 'pipe']);
      if (queryResult.failed) {
        fail(queryResult.engineLog);
      }
    });

    it('does not know the answer to bond questions', function () {
      this.checkDontKnow(this.bondQuestion);
    });
  });

  describe('with the bond dataset', function () {
    beforeAll(function () {
      this.origConfigs = Genai.UnstructuredQueryEngineTester.setupTest({
        filename: filename,
        apiKeySetupFuncNames: ['setOpenAiApiKey'],
        retrieverName: 'alabamaBond',
        suffix: '_gpt4o',
        doNotTruncateCallLog: true,
      });
    });

    afterAll(function () {
      Genai.UnstructuredQueryEngineTester.teardownTest(ctx, this.origConfigs);
    });

    it('knows the answer to bond questions', function () {
      var queryResult = TestApi.makeAndLogQuery('chatQuery', this.bondQuestion);
      TestApi.checkStringMatches(queryResult.answer, ['citizens bank', 'banker']);
      if (queryResult.failed) {
        fail(queryResult.engineLog);
      }
    });

    it('does not know the answer to documentation questions', function () {
      this.checkDontKnow(this.docQuestion);
    });
  });
});
