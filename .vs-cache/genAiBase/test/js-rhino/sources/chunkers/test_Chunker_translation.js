/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_Chunker_translation';
const largeDocxFilePath = 'gcs://c3--datasets/genai/filesForJarvis/Digital-transformation-espanol-with-doge.docx';

var translationFilesRoot = 'meta://genAiBase/test/resource/chunker/translation/';
var testCases = [
  {
    filePath: translationFilesRoot + 'Malpass-on-Building-a-Green-Resilient-and-Inclusive-Recovery-FR.pdf',
    description: 'French PDF with more than 20 pages translated to English',
    expectedMinNumPassages: 94,
    expectedFirstPassageContent: [
      'More than a year after',
      'outbreak',
      'speech  given  at  the  london  school',
      'world  bank  group',
    ],
    expectedLastPassageContent: ['thank  you  for  your  attention', 'financial', 'reconstruction'],
  },
  {
    filePath:
      translationFilesRoot +
      'Speech-by-World-Bank-Group-President-David-Malpass-on-Building-a-Green-Resilient-and-Inclusive-Recovery-on-March-29-2021.pdf',
    description: 'English PDF stays in English',
    expectedMinNumPassages: 25,
    expectedFirstPassageContent: ['Building a Green, Resilient, and Inclusive Recovery'],
    expectedLastPassageContent: ['dangers of climate change', 'prosperity especially'],
  },
  {
    filePath: translationFilesRoot + 'French-Speech.txt',
    description: 'French txt file translated to English',
    expectedMinNumPassages: 1,
    expectedFirstPassageContent: ['introduction', 'thank you', 'significant role', 'let me start', 'pandemic'],
    expectedLastPassageContent: ['urgent social spending', 'COVID-19', 'lasting scars'],
  },
  {
    /*
     * 50559 characters, so this is over GOOGLE_TRANSLATE_CHARACTER_LIMIT and
     * exercises the piece-by-piece txt translation
     */
    filePath: translationFilesRoot + 'Medium-File-JP.txt',
    description: 'Large Japanese txt file can be translated to English',
    expectedMinNumPassages: 64,
    expectedFirstPassageContent: ['Towards a green', 'resilient and inclusive recovery'],
    expectedLastPassageContent: ['foreign direct investment', 'help financial institutions', 'non-performing loans'],
  },
  {
    filePath: translationFilesRoot + 'Digital-transformation-espanol.docx',
    description: 'Small Spanish docx can be translated to English',
    expectedMinNumPassages: 12,
    expectedFirstPassageContent: ['Why digital transformation', 'shoulders of the CEO'],
    expectedLastPassageContent: ['the president and CEO', 'until its acquisition by Oracle'],
  },
  {
    // File is artificially bloated to exceed 30mb limit to test handling of large docx
    filePath: largeDocxFilePath,
    description: 'Large Spanish docx can be translated to English',
    expectedMinNumPassages: 12,
    expectedFirstPassageContent: ['Why digital transformation', 'shoulders of the CEO'],
    expectedLastPassageContent: ['the president and CEO', 'until its acquisition by Oracle'],
  },
  {
    filePath: translationFilesRoot + 'Invalid.pdf',
  },
];

// TODO GEN-11339: Ensure that no existing tests use Genai.Translator.Google.translateFile, then add one simple nightly test that does
xdescribe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.sourceFileIds = TestApi.setupChunkingTranslationTest(this.ctx, 'Genai.Translator.Google', testCases);

    var largeDocxFileSize = C3.GcsFile.make(largeDocxFilePath).readMetadata().contentLength;
    expect(largeDocxFileSize / (1024 * 1024))
      .withContext('large docx file should be greater than 20mb (google translation limit for single file)')
      .toBeGreaterThan(20);
  });

  afterAll(function () {
    Genai.Translator.Config.inst().setConfigValue('enabled', false);
    TestApi.teardown(this.ctx);
  });

  testCases.forEach(function (testCase, idx) {
    it(testCase.description, function () {
      /*
       * Skip the last test case as the last file - Invalid.pdf will not be chunked.
       * There's a separate test case below for that.
       */
      if (idx === testCases.length - 1) {
        return;
      }
      TestApi.runChunkingTranslationTest(this.sourceFileIds[idx], testCase);
    });
  });

  it("should not contain 'Machine Translated by Google'", function () {
    var sourceFile = Genai.SourceFile.forId(this.sourceFileIds[0]);
    var passages = sourceFile.readPassages();
    passages.each((p) => {
      return expect(p.contentStr).not.toContain('Machine Translated by Google');
    });
  });

  it('Genai.SourceFile should not contain Invalid.pdf as it successfully chunked all files except Invalid.pdf', function () {
    var sourceFilesCount = Genai.SourceFile.fetch({ filter: Filter.eq('status.value', 'Chunked') }).count;
    expect(sourceFilesCount).toBe(testCases.length - 1);
  });
});
