/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_translatorFactory';

describe(filename, function () {
  describe('setting global translator type name with no overrides for query , document, and language detection', function () {
    beforeAll(function () {
      Genai.Translator.Config.setConfigValue('translatorTypeName', 'Genai.Translator.Google');
      Genai.Translator.Config.clearConfigValue('documentTranslatorTypeName');
      Genai.Translator.Config.clearConfigValue('languageDetectionHandlerTypeName');
      Genai.Translator.Config.clearConfigValue('queryTranslatorTypeName');
    });

    it('returns global translator as when no translatorType passed', function () {
      expect(Genai.Translator.translator().name()).toEqual('Genai.Translator.Google');
    });

    it('returns global translator when translatorType passed', function () {
      expect(Genai.Translator.translator('query').name()).toEqual('Genai.Translator.Google');
    });
  });

  describe('overriding translator for query, document, and language detection', function () {
    beforeAll(function () {
      Genai.Translator.Config.setConfigValue('translatorTypeName', 'Genai.Translator.Google');
      Genai.Translator.Config.setConfigValue('documentTranslatorTypeName', 'Genai.Translator.Azure');
      Genai.Translator.Config.setConfigValue('languageDetectionHandlerTypeName', 'Genai.Translator.Azure');
      Genai.Translator.Config.setConfigValue('queryTranslatorTypeName', 'Genai.Translator.Azure');
    });

    it('returns global translator as when no translatorType passed', function () {
      expect(Genai.Translator.translator().name()).toEqual('Genai.Translator.Google');
    });

    it('returns query translator overriden by queryTranslatorTypeName', function () {
      expect(Genai.Translator.translator('query').name()).toEqual('Genai.Translator.Azure');
    });

    it('returns document translator overriden by documentTranslatorTypeName', function () {
      expect(Genai.Translator.translator('document').name()).toEqual('Genai.Translator.Azure');
    });

    it('returns language detection handler overridden by languageDetectionHandlerTypeName', function () {
      expect(Genai.Translator.translator('language-detection').name()).toEqual('Genai.Translator.Azure');
    });
  });

  afterAll(function () {
    Genai.Translator.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
  });
});
