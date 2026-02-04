/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Chunker_Mew3_allFileTypes';

var testCases = [
  {
    filePath: 'meta://genAiBase/test/resource/chunker/pdfChunker/great-expectations-ch1-aes.pdf',
    description: 'PDFs requiring PyCryptodome for AES encoding',
    defaultResults: {
      minNumPassages: 4,
      maxNumPassages: 11,
      firstPassageSubstring: 'my father',
      lastPassageSubstring: 'like a man whose legs were numbed and stiff',
      lastPassagePageNum: 4,
    },
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/badCharsDocument/japanese.pdf',
    description: 'PDF with bad character',
    defaultResults: {
      minNumPassages: 10,
      maxNumPassages: 43,
      firstPassageSubstring: 'verbalization',
      lastPassageSubstring: 'text',
    },
  },

  /*
   * Every other file type fails with "raise LayoutModException"
   *{
   *  filePath: 'meta://genAiBase/test/resource/chunker/wordDocChunker/Digital-transformation.docx',
   *  description: 'Sample Docx file',
   *  defaultResults: {
   *    minNumPassages: 12,
   *    maxNumPassages: 12,
   *    firstPassageSubstring:
   *      'big data, the internet of things, and artificial intelligence\n\nhold such disruptive power that they have inverted the dynamics of technology leadership.',
   *    lastPassageSubstring:
   *      'my advice is that they should be talking about this all the time, with their boards, in the c-suite—and mobilizing the entire company.',
   *  },
   *},
   *{
   *  filePath: 'meta://genAiBase/test/resource/chunker/wordDocChunker/njeda.doc',
   *  description: 'Sample Doc file',
   *  defaultResults: {
   *    minNumPassages: 4,
   *    maxNumPassages: 4,
   *    firstPassageSubstring:
   *      'new jersey economic development authority job description job title: director legal affairs',
   *    lastPassageSubstring:
   *      'nothing in this job description shall be interpreted to conflict, eliminate or modify the employment-at-will status of njeda employees',
   *  },
   *},
   *{
   *  filePath: 'meta://genAiBase/test/resource/chunker/htmlChunker/C3AI.html',
   *  description: 'Sample Html file to test UnstructuredHtmlChunker',
   *  defaultResults: {
   *    minNumPassages: 8,
   *    maxNumPassages: 9,
   *    firstPassageSubstring:
   *      'ai software\n\nc3 ai applications\n\nc3 ai applications overiew\n\nc3 ai anti-money laundering\n\nc3 ai cash management',
   *    lastPassageSubstring:
   *      'includes cookies that ensures basic functionalities and security features of the website.\n\nthese cookies do not store any personal information.\n\n\n\nsave & accept',
   *  },
   *},
   *{
   *  filePath: 'meta://genAiBase/test/resource/chunker/pptxChunker/sample.pptx',
   *  description: 'Sample pptx file to test PowerPointChunker',
   *  defaultResults: {
   *    minNumPassages: 1,
   *    maxNumPassages: 1,
   *    firstPassageSubstring: 'C3 AI Transform update',
   *    lastPassageSubstring: 'hackathon',
   *  },
   *},
   *{
   *  filePath: 'meta://genAiBase/test/resource/chunker/txtChunker/piracy.txt',
   *  description: 'Test support for txt files',
   *  defaultResults: {
   *    minNumPassages: 5,
   *    maxNumPassages: 5,
   *    firstPassageSubstring: 'Software Piracy',
   *    lastPassageSubstring: 'Use only original software',
   *  },
   *},
   *{
   *  filePath: 'meta://genAiBase/test/resource/chunker/msgChunker/sample.msg',
   *  description: 'Test support for Outlook .msg files',
   *  defaultResults: {
   *    minNumPassages: 1,
   *    maxNumPassages: 1,
   *    firstPassageSubstring: 'Prompt C5 to SW arbs are down slightly to pre-cycle projections',
   *    lastPassageSubstring: 'this really changes nothing as the pipes sound to be running full',
   *  },
   *},
   *{
   *  filePath: 'meta://genAiBase/test/resource/chunker/universalChunker/PythonSDK1.md',
   *  description: 'Python SDK1 markdown file',
   *  defaultResults: {
   *    minNumPassages: 27,
   *    maxNumPassages: 27,
   *    firstPassageSubstring: 'Python SDK\nThis document describes the Python SDK',
   *    lastPassageSubstring: 'Python SDK, Python SDK Variants, Server Side Python SDKs',
   *  },
   *},
   *{
   *  filePath: 'meta://genAiBase/test/resource/chunker/rtfChunker/Digital-transformation.rtf',
   *  description: 'Sample RTF file',
   *  defaultResults: {
   *    minNumPassages: 13,
   *    maxNumPassages: 13,
   *    firstPassageSubstring:
   *      'Each of these innovations collided with a society that had been in a period of relative stasis—followed by massive disruption.',
   *    lastPassageSubstring:
   *      'My advice is that they should be talking about this all the time, with their boards, in the C-suite—and mobilizing the entire company.\n\nThe threat is existential.',
   *  },
   *},
   *{
   *  filePath: 'meta://genAiBase/test/resource/chunker/badCharsDocument/special_chars.txt',
   *  description: 'utf-8 encoded txt files with special chars',
   *  defaultResults: {
   *    minNumPassages: 10,
   *    maxNumPassages: 10,
   *    firstPassageSubstring: 'is the first letter and the first vowel',
   *    lastPassageSubstring: 'basic latin letters',
   *  },
   *},
   *{
   *  filePath: 'meta://genAiBase/test/resource/chunker/htmlChunker/windows1252.html',
   *  description: 'windows1252 encoded html file',
   *  defaultResults: {
   *    minNumPassages: 28,
   *    maxNumPassages: 29,
   *    firstPassageSubstring: 'bureau of global public affairs',
   *    lastPassageSubstring: 'photo essays, posters, pamphlets',
   *  },
   *},
   *{
   *  filePath: 'meta://genAiBase/test/resource/chunker/xlsxChunker/openpyxl_tests_sample.xlsx',
   *  description: 'Sample xlsx file to test ExcelChunker',
   *  defaultResults: {
   *    minNumPassages: 12,
   *    maxNumPassages: 12,
   *    firstPassageSubstring: 'oxford industries: tommy bahama',
   *    lastPassageSubstring: 'not reported days in prelim',
   *  },
   *},
   */
];

describe(filename, function () {
  TestApi.installHuggingfaceModels(['bert-base-uncased', 'ds4sd/docling-models']);

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.setOpenAiApiKey();
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
  });

  testCases.forEach((testCase) => {
    describe(testCase.description, function () {
      it('should chunk successfully', function () {
        var result = Genai.SourceFile.Chunker.Mew3.chunkFile(
          testCase.sourceFile,
          Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Mew3 }),
          true
        );

        if (result.objList.errors.length) {
          fail(result.objList.errors[0].message);
        }

        TestApi.checkChunking(testCase.sourceFile, result.passages, testCase.defaultResults);
      });
    });
  });
});
