/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_MsftXChunker';

var testCases = [
  {
    filePath: 'meta://genAiBase/test/resource/chunker/wordDocChunker/Holcim.docx',
    description: 'Sample Docx file with a table and images',
    expectedNumImagePassages: 5,
    expectedNumTablePassages: 1,
    expectedNumTextPassages: 8,
    expectedFirstImagePassage: {
      imageVerbalization: ['fraction', 'cement'],
      contentStr: ['fraction', 'cement', 'Image Caption:'],
    },
    expectedFirstTablePassage: {
      tableVerbalization: ['production', 'cost'],
      contentStr: ['table', 'production', 'cost'],
    },
    expectedFirstTextPassageContentSubstring: 'Raw Material Extraction',
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/pptxChunker/sample.pptx',
    description: 'Sample Pptx file with a table and images',
    expectedNumImagePassages: 0,
    expectedNumTablePassages: 0,
    expectedNumTextPassages: 2,
    expectedFirstTextPassageContentSubstring: 'c3 generative ai',
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/pptxChunker/Holcim.pptx',
    description: 'Sample Pptx file with a table and images',
    expectedNumImagePassages: 3,
    expectedNumTablePassages: 0,
    expectedNumTextPassages: 5,
    expectedFirstImagePassage: {
      imageVerbalization: ['thermal', 'industrial', 'blue', 'temperatures'],
      contentStr: ['thermal', 'industrial', 'blue', 'temperatures', 'Image Caption:'],
    },
    expectedFirstTextPassageContentSubstring: 'impact of excessive temperature',
  },
];

describe(filename, function () {
  beforeAll(function () {
    TestApi.setOpenAiApiKey();
    TestApi.setAwsBedrockKeys();
    this.originalMockLlmConfigMode = TestApi.enableMockLlmPlaybackIfInJarvis();
    TestApi.setMockLlmConfigPath(filename);
    Genai.PyUtil.terminateAllEngines();

    this.ctx = TestApi.createContext(filename);
    var sourceFiles = testCases.map((testCase) => {
      return Genai.SourceFile.make({ originalFile: Pkg.file(testCase.filePath) });
    });
    var sourceFileIds = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile', sourceFiles);
    testCases.forEach((testCase, idx) => {
      testCase.sourceFile = Genai.SourceFile.make({ id: sourceFileIds[idx] }).get();
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.Llm.MockLlmConfig.getConfig().setConfigValue('mode', this.originalMockLlmConfigMode);
  });
  testCases.forEach((testCase) => {
    describe(testCase.description, function () {
      beforeAll(function () {
        this.result = Genai.SourceFile.Chunker.MsftX.chunkFile(testCase.sourceFile, null, true);

        var passages = this.result.passages;
        this.imagePassages = passages.filter((x) => {
          return x && x.imageFile !== undefined;
        });
        this.tablePassages = passages.filter((x) => {
          return x && x.dataFrameFile !== undefined;
        });
        this.textPassages = passages.filter((x) => {
          return x && x.imageFile === undefined && x.dataFrameFile === undefined;
        });
      });

      it('no errors', function () {
        var objList = this.result.objList;
        expect(objList.errors.length).withContext('objList.errors.length').toEqual(0);
        if (objList.errors.length > 0) {
          fail(objList.errors[0].message);
        }
      });

      it('expected number of passages of each type', function () {
        expect(this.imagePassages.length)
          .withContext('imagePassages.length')
          .toEqual(testCase.expectedNumImagePassages);
        expect(this.tablePassages.length)
          .withContext('tablePassages.length')
          .toEqual(testCase.expectedNumTablePassages);
        expect(this.textPassages.length).withContext('textPassages.length').toEqual(testCase.expectedNumTextPassages);
      });

      it('populates image contentStr, imageVerbalization and imageFile', function () {
        if (testCase.expectedNumImagePassages > 0) {
          var firstImagePassage = this.imagePassages.first();
          expect(firstImagePassage).withContext('first passage').toBeDefined();
          TestApi.checkStringMatches(
            firstImagePassage.contentStr,
            testCase.expectedFirstImagePassage.contentStr,
            false,
            'contentStr'
          );
          TestApi.checkStringMatches(
            firstImagePassage.imageVerbalization,
            testCase.expectedFirstImagePassage.imageVerbalization,
            false,
            'imageVerbalization'
          );
          expect(firstImagePassage.imageFile).withContext('imageFile').toBeDefined();
          var imageUrl = firstImagePassage.imageFile.url;
          expect(imageUrl).withContext('imageUrl').toContain('.png');
          expect(C3.File.make(imageUrl).readMetadata().contentLength).withContext('imageFile').toBeGreaterThan(0);
        }
      });

      it('populates table contentStr, tableVerbalization and dataframeFile', function () {
        if (testCase.expectedNumTablePassages > 0) {
          var firstTablePassage = this.tablePassages.first();
          expect(firstTablePassage).withContext('first passage').toBeDefined();
          TestApi.checkStringMatches(
            firstTablePassage.contentStr,
            testCase.expectedFirstTablePassage.contentStr,
            false,
            'contentStr'
          );
          TestApi.checkStringMatches(
            firstTablePassage.tableVerbalization,
            testCase.expectedFirstTablePassage.tableVerbalization,
            false,
            'tableVerbalization'
          );
          expect(firstTablePassage.dataFrameFile).withContext('dataFrameFile').toBeDefined();
          var dataFrameUrl = firstTablePassage.dataFrameFile.url;
          expect(dataFrameUrl).withContext('dataFrameUrl').toContain('.csv');
          expect(C3.File.make(dataFrameUrl).readMetadata().contentLength)
            .withContext('dataFrameFile')
            .toBeGreaterThan(0);
        }
      });

      it('populates text contentStr', function () {
        var firstTextPassage = this.textPassages.first();
        TestApi.checkStringMatches(
          firstTextPassage.contentStr,
          testCase.expectedFirstTextPassageContentSubstring,
          false,
          'contentStr'
        );
      });
    });
  });
});
