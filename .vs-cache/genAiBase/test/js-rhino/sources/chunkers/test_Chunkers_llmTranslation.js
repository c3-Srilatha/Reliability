/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_Chunkers_llmTranslation';

const translationFilesRoot = 'meta://genAiBase/test/resource/chunker/translation/';
const testCases = [
  {
    filePath: translationFilesRoot + 'Digital-transformation-espanol.docx',
    description: 'Small Spanish docx can be translated to English',
    expectedMinNumPassages: 12,
    expectedFirstPassageContent: ['digital transformation'],
    expectedLastPassageContent: ['founded', 'transform'],
  },
];

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    // Set default docx chunker to legacy chunker
    var chunkerConfig = Genai.SourceFile.Chunker.UniversalChunker.Config.forConfigKey('default');
    let fileExtToChunkerSpecMap = C3.Map.fromJson(chunkerConfig.fileExtToChunkerSpecMap);
    fileExtToChunkerSpecMap = fileExtToChunkerSpecMap.with(
      '.docx',
      Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
        chunker: Genai.SourceFile.Chunker.WordDoc,
      })
    );
    chunkerConfig.setConfigValue('fileExtToChunkerSpecMap', fileExtToChunkerSpecMap);

    this.sourceFileIds = TestApi.setupChunkingTranslationTest(this.ctx, 'Genai.Translator.Llm', testCases);
  });

  afterAll(function () {
    Genai.Translator.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.SourceFile.Chunker.UniversalChunker.Config.forConfigKey('default').clearConfigAndSecretOverride(
      ConfigOverride.APP
    );
    TestApi.teardown(this.ctx);
  });

  testCases.forEach(function (testCase, idx) {
    it(testCase.description, function () {
      TestApi.runChunkingTranslationTest(this.sourceFileIds[idx], testCase);
    });
  });
});
