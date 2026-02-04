/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiTranslatorGoogle';

// TODO GEN-11338, GEN-11339: Re-enable test_GenaiTranslatorGoogle with minimal calls to Google translation API.
xdescribe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.setGcpKey();
    this.translator = Genai.Translator.translator();
    this.englishText = 'Hello! How are you doing?';
    this.expectedSpanishTextList = ['Hola', 'Cómo', 'estás'];
    this.expectedLargerEnglishTextList = [
      'Delivering',
      'Building',
      'Ensuring',
      'green',
      'resilient',
      'inclusive',
      'recovery',
    ];
    this.spanishLanguageCode = 'es';
    var filePath =
      'gcs://c3--datasets/genai/filesForJarvis/Malpass-on-Building-a-Green-Resilient-and-Inclusive-Recovery-FR.txt';
    this.largeTextToTranslate = C3.GcsFile.make(filePath).readString();
    this.smallTexts = ['Bonjour le monde', 'comment vas-tu?', 'ce qui se passe'];
    this.explodeChunkList = Array.from({ length: 1500 }, (_, i) => {
      return this.smallTexts[i % this.smallTexts.length];
    });

    this.checkSmallTextTranslatedValues = (translatedTexts) => {
      TestApi.checkStringMatches(translatedTexts[0], ['Hello', 'world'], false);
      TestApi.checkStringMatches(translatedTexts[1], ['How', 'are', 'you', 'doing?'], false);
      TestApi.checkStringMatches(translatedTexts[2], ['what', 'is', 'happening'], false);
    };
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  it('translates text from english to spanish', function () {
    var translatedText = this.translator.translate(this.englishText, this.spanishLanguageCode);
    TestApi.checkStringMatches(translatedText, this.expectedSpanishTextList, false);
  });

  it('detects language code and confidence level of the given text', function () {
    var detectedObj = this.translator.detectLanguage('¡Hola! ¿Cómo estás?');
    expect(detectedObj.detectedLanguageCode).toEqual(this.spanishLanguageCode);
    expect(detectedObj.confidence).toEqual(1);
    expect(detectedObj.isUnsupported).toBeFalsy();
  });

  it('translates a text greater than 30000 codepoints', function () {
    var translatedText = this.translator.translate(this.largeTextToTranslate, 'en');
    TestApi.checkStringMatches(translatedText, this.expectedLargerEnglishTextList, false);
  });

  it('batch translates a text less than 30000 codepoints', function () {
    var translatedTexts = this.translator.translateBatch(this.smallTexts, 'en');
    expect(translatedTexts.length).toEqual(this.smallTexts.length);
    this.checkSmallTextTranslatedValues(translatedTexts);
  });

  it('batch translates a text greater than 30000 codepoints', function () {
    var translatedTexts = this.translator.translateBatch([this.largeTextToTranslate, this.largeTextToTranslate], 'en');
    expect(translatedTexts.length).toEqual(2);
    translatedTexts.each((translatedText) => {
      TestApi.checkStringMatches(translatedText, this.expectedLargerEnglishTextList, false);
    });
  });

  it("batch translates a text with lot of mini chunks to explode google's max input sub-request of length 1024 items.", function () {
    var translatedTexts = this.translator.translateBatch(this.explodeChunkList, 'en');
    expect(translatedTexts.length).toEqual(1500);
    const expectedEnglishTexts = [
      ['Hello', 'world'],
      ['How', 'are', 'you', 'doing?'],
      ['what', 'is', 'happening'],
    ];
    for (let i = 0; i < translatedTexts.length; i++) {
      TestApi.checkStringMatches(translatedTexts[i], expectedEnglishTexts[i % 3], false);
    }
  });

  it('batch translates a text greater than 30000 codepoints along with small texts', function () {
    var textsToTranslate = [this.largeTextToTranslate].concat(this.smallTexts);
    var translatedTexts = this.translator.translateBatch(textsToTranslate, 'en');
    expect(translatedTexts.length).toEqual(textsToTranslate.length);
    TestApi.checkStringMatches(translatedTexts[0], this.expectedLargerEnglishTextList, false);
    this.checkSmallTextTranslatedValues(translatedTexts.slice(1));
  });

  describe('with unsupported languages', function () {
    beforeAll(function () {
      this.origTranslatorConfig = Genai.Translator.Config.inst().getConfig();
      this.origTranslatorConfig.setConfigValue('unsupportedLanguageCodes', ['es']);
    });

    afterAll(function () {
      this.origTranslatorConfig.setConfig();
    });

    it('detects language code and identifies it as unsupported', function () {
      var detectedObj = this.translator.detectLanguage('¡Hola! ¿Cómo estás?');
      expect(detectedObj.detectedLanguageCode).toEqual(this.spanishLanguageCode);
      expect(detectedObj.confidence).toEqual(1);
      expect(detectedObj.isUnsupported).toEqual(true);
    });
  });

  describe('with translate api key is missing', function () {
    beforeAll(function () {
      this.serviceAccountInfoValue = Genai.Llm.Gcp.Config.getSecret().serviceAccountInfo;
      Genai.Llm.Gcp.Config.inst().setSecretValue('serviceAccountInfo', '');
    });

    afterAll(function () {
      Genai.Llm.Gcp.Config.inst().setSecretValue('serviceAccountInfo', this.serviceAccountInfoValue);
    });

    it('throws the expected exception', function () {
      var translator = this.translator;
      expect(function () {
        translator.detectLanguage('Hello');
      }).toThrowError(/Translate API Key missing/);
    });
  });
});
