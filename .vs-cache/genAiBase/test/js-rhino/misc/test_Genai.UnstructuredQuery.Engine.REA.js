/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Genai.UnstructuredQuery.Engine.REA.js';
describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.promptConfigExample = Genai.UnstructuredQuery.Engine.REA.ModelInference.Prompt.Config.ExampleBase.make({
      id: 'testId',
      questionValues: Genai.Translation.Values.make({
        userLanguageValue: 'test question user language',
        englishValue: 'test question english',
      }),
      answerValues: Genai.Translation.Values.make({
        userLanguageValue: 'test answer user language',
        englishValue: 'test answer english',
      }),
      extractsValues: Genai.Translation.Values.make({
        userLanguageValue: 'test extracts user language',
        englishValue: 'test extracts english',
      }),
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::generateExampleString for AwsClaude', function () {
    beforeAll(function () {
      this.result = Genai.UnstructuredQuery.Engine.REA.ModelInference.Prompt.Creator.AwsClaude.generateExampleString(
        this.promptConfigExample,
        1
      );
      this.expectedResult =
        '\n\nHuman: Passages: test extracts english --- Question: test question english \n\nAssistant: test answer english ';
    });

    it('returns expected string', function () {
      expect(this.result).toEqual(this.expectedResult);
    });
  });
});
