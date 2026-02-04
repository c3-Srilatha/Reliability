/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

/**
 * Note: The core Chunker capabilities (i.e. chunking with and without persisting, writing passages files, etc) are
 * tested in test_UniversalChunker. This test additionally checks specific behavior of each of the chunkers.
 *
 * The calls should still go through Genai.SourceFile.Chunker.Universal because we want to ensure that the capabilities
 * tested are part of UniversalChunker and therefore the default data ingestion pipeline.
 */

var filename = 'test_Chunkers';

// Allow time for Huggingface model installation
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 60 * 1000;

var txs1 = Genai.SourceFile.TextSplitter.Spec.make({
  textSplitter: 'SpacyTextSplitter',
  chunkSize: 500,
  chunkOverlap: 100,
  specType: Genai.SourceFile.TextSplitter.Spec,
});
var txs2 = Genai.SourceFile.TextSplitter.Spec.make({
  textSplitter: 'TokenTextSplitter',
  chunkSize: 200,
  chunkOverlap: 50,
  specType: Genai.SourceFile.TextSplitter.Spec,
});
var wordDocChunkerSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
  chunker: Genai.SourceFile.Chunker.WordDoc,
  textSplitters: [txs1, txs2],
});
var htmlChunkerSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
  chunker: Genai.SourceFile.Chunker.UnstructuredHtml,
  textSplitters: [txs1, txs2],
});
var c3DocChunkerSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
  chunker: Genai.SourceFile.Chunker.C3Doc,
  textSplitters: [txs2],
});
var pyPdfChunkerSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
  chunker: Genai.SourceFile.Chunker.PyPdf,
  textSplitters: [txs1, txs2],
});
var nougatPdfChunkerSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
  chunker: Genai.SourceFile.Chunker.Nougat,
  textSplitters: [txs1, txs2],
});
var pptChunkerSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
  chunker: Genai.SourceFile.Chunker.PowerPoint,
  textSplitters: [txs1, txs2],
});
var txtChunkerSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
  chunker: Genai.SourceFile.Chunker.Txt,
  textSplitters: [txs1, txs2],
});
var msgChunkerSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
  chunker: Genai.SourceFile.Chunker.Msg,
  textSplitters: [txs2],
});
var mdChunkerSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
  chunker: Genai.SourceFile.Chunker.Markdown,
  textSplitters: [txs2],
  replaceCodeRefIfValidTokenLen: true,
});
var rtfChunkerSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
  chunker: Genai.SourceFile.Chunker.UnstructuredRtf,
  textSplitters: [txs1, txs2],
});
var xlsxChunkerSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
  chunker: Genai.SourceFile.Chunker.Excel,
  textSplitters: [txs1, txs2],
});

var testCases = [
  {
    filePath: 'meta://genAiBase/test/resource/chunker/pdfChunker/great-expectations-ch1-aes.pdf',
    description: 'PDFs requiring PyCryptodome for AES encoding',
    overrideChunkSize: {
      expectedResults: {
        minNumPassages: 4,
        maxNumPassages: 32,
        firstPassageSubstring: 'So, I called myself Pip, and came to be called Pip',
        lastPassageSubstring: 'But now I was frightened again, and ran home \nwithout stopping.',
        lastPassagePageNum: 4,
      },

      // PyPdf and Nougat chunk differently
      nougatLastPassageSubstring: 'only two black things in all the prospect that seemed to be standing upright',
    },
    overrideConfig: {
      expectedResults: {
        minNumPassages: 9,
        maxNumPassages: 32,
        firstPassageSubstring: 'So, I called myself Pip, and came to be called Pip',
        lastPassageSubstring: 'But now I was frightened again, and ran home \nwithout stopping.',
        lastPassagePageNum: 4,
      },
    },
    defaultResults: {
      minNumPassages: 4,
      maxNumPassages: 11,
      firstPassageSubstring: 'So, I called myself Pip, and came to be called Pip',
      lastPassageSubstring: 'But now I was frightened again, and ran home \nwithout stopping.',
      lastPassagePageNum: 4,
    },
    optionalOverride: false,
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/wordDocChunker/Digital-transformation.docx',
    description: 'Sample Docx file',
    overrideChunkSize: {
      expectedResults: {
        minNumPassages: 42,
        maxNumPassages: 42,
        firstPassageSubstring:
          'big data, the internet of things, and artificial intelligence\n\nhold such disruptive power that they have inverted the dynamics of technology leadership.',
        lastPassageSubstring:
          'he founded siebel systems, serving as its ceo and chairman from 1993 until its acquisition by oracle',
      },
    },
    overrideConfig: {
      expectedResults: {
        minNumPassages: 11,
        maxNumPassages: 11,
        firstPassageSubstring:
          'big data, the internet of things, and artificial intelligence\n\nhold such disruptive power that they have inverted the dynamics of technology leadership.',
        lastPassageSubstring:
          'he founded siebel systems, serving as its ceo and chairman from 1993 until its acquisition by oracle',
      },
    },
    defaultResults: {
      minNumPassages: 12,
      maxNumPassages: 12,
      firstPassageSubstring:
        'big data, the internet of things, and artificial intelligence\n\nhold such disruptive power that they have inverted the dynamics of technology leadership.',
      lastPassageSubstring:
        'my advice is that they should be talking about this all the time, with their boards, in the c-suite—and mobilizing the entire company.',
    },
    optionalOverride: true,
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/wordDocChunker/njeda.doc',
    description: 'Sample Doc file',
    overrideChunkSize: {
      expectedResults: {
        minNumPassages: 17,
        maxNumPassages: 17,
        firstPassageSubstring: 'seq chapter',
        lastPassageSubstring:
          'non-new jersey resident employees must relocate to new jersey within one year of their date of hire and provide proof of residency',
      },
    },
    overrideConfig: {
      expectedResults: {
        minNumPassages: 5,
        maxNumPassages: 5,
        firstPassageSubstring:
          'new jersey economic development authority job description job title: director legal affairs',
        lastPassageSubstring:
          'your employment at njeda is voluntary and subject to termination by you or njeda at will, with or without cause, or with or without notice, at any time',
      },
    },
    defaultResults: {
      minNumPassages: 4,
      maxNumPassages: 4,
      firstPassageSubstring:
        'new jersey economic development authority job description job title: director legal affairs',
      lastPassageSubstring:
        'nothing in this job description shall be interpreted to conflict, eliminate or modify the employment-at-will status of njeda employees',
    },
    optionalOverride: true,
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/htmlChunker/C3AI.html',
    description: 'Sample Html file to test UnstructuredHtmlChunker',
    overrideChunkSize: {
      expectedResults: {
        minNumPassages: 23,
        maxNumPassages: 24,
        firstPassageSubstring:
          'ai software\n\nc3 ai applications\n\nc3 ai applications overiew\n\nc3 ai anti-money laundering\n\nc3 ai cash management',
        lastPassageSubstring:
          'includes cookies that ensures basic functionalities and security features of the website.\n\nthese cookies do not store any personal information.\n\n\n\nsave & accept',
      },
    },
    overrideConfig: {
      expectedResults: {
        minNumPassages: 7,
        maxNumPassages: 7,
        firstPassageSubstring:
          'ai software\n\nc3 ai applications\n\nc3 ai applications overiew\n\nc3 ai anti-money laundering\n\nc3 ai cash management',
        lastPassageSubstring:
          'includes cookies that ensures basic functionalities and security features of the website.\n\nthese cookies do not store any personal information.\n\n\n\nsave & accept',
      },
    },
    defaultResults: {
      minNumPassages: 8,
      maxNumPassages: 9,
      firstPassageSubstring:
        'ai software\n\nc3 ai applications\n\nc3 ai applications overiew\n\nc3 ai anti-money laundering\n\nc3 ai cash management',
      lastPassageSubstring:
        'includes cookies that ensures basic functionalities and security features of the website.\n\nthese cookies do not store any personal information.\n\n\n\nsave & accept',
    },
    optionalOverride: true,
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/pptxChunker/sample.pptx',
    description: 'Sample pptx file to test PowerPointChunker',
    overrideChunkSize: {
      expectedResults: {
        minNumPassages: 3,
        maxNumPassages: 4,
        firstPassageSubstring: 'C3 AI Transform update',
        lastPassageSubstring: 'hackathon',
      },
    },
    overrideConfig: {
      expectedResults: {
        minNumPassages: 1,
        maxNumPassages: 1,
        firstPassageSubstring: 'C3 AI Transform update',
        lastPassageSubstring: 'hackathon',
      },
    },
    defaultResults: {
      minNumPassages: 1,
      maxNumPassages: 1,
      firstPassageSubstring: 'C3 AI Transform update',
      lastPassageSubstring: 'hackathon',
    },
    optionalOverride: false,
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/txtChunker/piracy.txt',
    description: 'Test support for txt files',
    overrideChunkSize: {
      expectedResults: {
        minNumPassages: 14,
        maxNumPassages: 14,
        firstPassageSubstring: 'Software Piracy',
        lastPassageSubstring: 'Use only original software',
      },
    },
    overrideConfig: {
      expectedResults: {
        minNumPassages: 4,
        maxNumPassages: 4,
        firstPassageSubstring: 'Software Piracy',
        lastPassageSubstring: 'Use only original software',
      },
    },
    defaultResults: {
      minNumPassages: 5,
      maxNumPassages: 5,
      firstPassageSubstring: 'Software Piracy',
      lastPassageSubstring: 'Use only original software',
    },
    optionalOverride: true,
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/msgChunker/sample.msg',
    description: 'Test support for Outlook .msg files',
    overrideChunkSize: {
      expectedResults: {
        minNumPassages: 3,
        maxNumPassages: 3,
        firstPassageSubstring: 'Prompt C5 to SW arbs are down slightly to pre-cycle projections',
        lastPassageSubstring: 'this really changes nothing as the pipes sound to be running full',
      },
    },
    overrideConfig: {
      expectedResults: {
        minNumPassages: 1,
        maxNumPassages: 1,
        firstPassageSubstring: 'Prompt C5 to SW arbs are down slightly to pre-cycle projections',
        lastPassageSubstring: 'this really changes nothing as the pipes sound to be running full',
      },
    },
    defaultResults: {
      minNumPassages: 1,
      maxNumPassages: 1,
      firstPassageSubstring: 'Prompt C5 to SW arbs are down slightly to pre-cycle projections',
      lastPassageSubstring: 'this really changes nothing as the pipes sound to be running full',
    },
    optionalOverride: false,
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/universalChunker/PythonSDK1.md',
    description: 'Python SDK1 markdown file',
    defaultResults: {
      minNumPassages: 27,
      maxNumPassages: 27,
      firstPassageSubstring: 'Python SDK\nThis document describes the Python SDK',
      lastPassageSubstring: 'Python SDK, Python SDK Variants, Server Side Python SDKs',
    },
    optionalOverride: false,
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/badCharsDocument/japanese.pdf',
    description: 'PDF with bad character',
    defaultResults: {
      minNumPassages: 10,
      maxNumPassages: 10,
      firstPassageSubstring: '第2次  岸',
      lastPassageSubstring: '内閣官房 内',
    },
    optionalOverride: false,
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/rtfChunker/Digital-transformation.rtf',
    description: 'Sample RTF file',
    overrideChunkSize: {
      expectedResults: {
        minNumPassages: 42,
        maxNumPassages: 42,
        firstPassageSubstring: 'in his description of evolutionary biology.',
        lastPassageSubstring: 'Thomas M. Siebel is the chairman and CEO of C3 IoT.',
      },
    },
    overrideConfig: {
      expectedResults: {
        minNumPassages: 10,
        maxNumPassages: 10,
        firstPassageSubstring: 'When it’s over, a new equilibrium will emerge.',
        lastPassageSubstring: 'Thomas M. Siebel is the chairman and CEO of C3 IoT.',
      },
    },
    defaultResults: {
      minNumPassages: 13,
      maxNumPassages: 13,
      firstPassageSubstring:
        'Each of these innovations collided with a society that had been in a period of relative stasis—followed by massive disruption.',
      lastPassageSubstring:
        'My advice is that they should be talking about this all the time, with their boards, in the C-suite—and mobilizing the entire company.\n\nThe threat is existential.',
    },
    optionalOverride: false,
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/badCharsDocument/special_chars.txt',
    description: 'utf-8 encoded txt files with special chars',
    defaultResults: {
      minNumPassages: 10,
      maxNumPassages: 10,
      firstPassageSubstring: 'is the first letter and the first vowel',
      lastPassageSubstring: 'basic latin letters',
    },
    optionalOverride: false,
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/htmlChunker/windows1252.html',
    description: 'windows1252 encoded html file',
    defaultResults: {
      minNumPassages: 28,
      maxNumPassages: 29,
      firstPassageSubstring: 'bureau of global public affairs',
      lastPassageSubstring: 'photo essays, posters, pamphlets',
    },
    optionalOverride: false,
  },
  {
    filePath: 'meta://genAiBase/test/resource/chunker/xlsxChunker/openpyxl_tests_sample.xlsx',
    description: 'Sample xlsx file to test ExcelChunker',
    overrideChunkSize: {
      expectedResults: {
        minNumPassages: 30,
        maxNumPassages: 32,
        firstPassageSubstring: 'oxford industries: tommy bahama',
        lastPassageSubstring: 'not reported days in prelim 57',
      },
    },
    defaultResults: {
      minNumPassages: 12,
      maxNumPassages: 12,
      firstPassageSubstring: 'oxford industries: tommy bahama',
      lastPassageSubstring: 'not reported days in prelim',
    },
    optionalOverride: false,
  },
];

describe(filename, function () {
  TestApi.installHuggingfaceModels(['facebook/nougat-small']);

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    var sourceFiles = testCases.map((testCase) => {
      return Genai.SourceFile.make({ originalFile: Pkg.file(testCase.filePath) });
    });
    var sourceFileIds = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile', sourceFiles);
    testCases.forEach((testCase, idx) => {
      testCase.sourceFile = Genai.SourceFile.make({ id: sourceFileIds[idx] }).get();
    });

    // Set default chunkers to legacy chunkers
    var chunkerConfig = Genai.SourceFile.Chunker.UniversalChunker.Config.forConfigKey('default');
    let fileExtToChunkerSpecMap = C3.Map.fromJson(chunkerConfig.fileExtToChunkerSpecMap);
    fileExtToChunkerSpecMap = fileExtToChunkerSpecMap.with(
      '.docx',
      Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
        chunker: Genai.SourceFile.Chunker.WordDoc,
      })
    );
    fileExtToChunkerSpecMap = fileExtToChunkerSpecMap.with(
      '.pptx',
      Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
        chunker: Genai.SourceFile.Chunker.PowerPoint,
      })
    );
    chunkerConfig.setConfigValue('fileExtToChunkerSpecMap', fileExtToChunkerSpecMap);
  });

  afterAll(function () {
    Genai.SourceFile.Chunker.UniversalChunker.Config.setDefault('default');
    Genai.SourceFile.Chunker.UniversalChunker.Config.forConfigKey('default').clearConfigAndSecretOverride(
      ConfigOverride.APP
    );
    TestApi.teardown(this.ctx);
  });

  [true, false].forEach((setGenaiAirGapConfig) => {
    describe('with GenaiAirGapConfig set to ' + setGenaiAirGapConfig + ' and default chunking for', function () {
      beforeAll(function () {
        this.initialAirGapConfigValue = Genai.App.AirGapConfig.inst().configValue('sourceFileChunkerTokenizerPath');
        if (setGenaiAirGapConfig) {
          Genai.PyUtil.terminateAllEngines();
          Genai.App.AirGapConfig.inst().setConfigValue(
            'sourceFileChunkerTokenizerPath',
            'gcs://c3--datasets/genai/airgap/models/bert-base-uncased.zip'
          );
        }
      });

      afterAll(function () {
        if (setGenaiAirGapConfig) {
          Genai.App.AirGapConfig.inst().setConfigValue('sourceFileChunkerTokenizerPath', this.initialAirGapConfigValue);
        }
      });

      Genai.SourceFile.Chunker.UniversalChunker.Config.setDefault('default');
      testCases.forEach((testCase) => {
        it(testCase.description, function () {
          // Test default chunking
          var passages = Genai.SourceFile.Chunker.Universal.chunkFile(
            testCase.sourceFile,
            Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
              chunker: Genai.SourceFile.Chunker.Universal,
            }),
            true
          ).passages;
          TestApi.checkChunking(testCase.sourceFile, passages, testCase.defaultResults);
        });
      });
    });
  });

  describe('with overridden chunk size', function () {
    testCases.forEach((testCase) => {
      if (testCase.overrideChunkSize) {
        var isPdf = testCase.filePath.indexOf('.pdf') > 0;
        var pdfChunkerSpecs = [pyPdfChunkerSpec];
        if (isPdf) {
          pdfChunkerSpecs.push(nougatPdfChunkerSpec);
        }
        pdfChunkerSpecs.forEach((pdfChunkerSpec, idx) => {
          it(testCase.description + (isPdf ? ' with ' + pdfChunkerSpec.chunker.name() : ''), function () {
            var fileExtMap = {
              '.doc': wordDocChunkerSpec,
              '.docx': wordDocChunkerSpec,
              '.html': htmlChunkerSpec,
              '.c3doc.md': c3DocChunkerSpec,
              '.c3doc': c3DocChunkerSpec,
              '.pdf': pdfChunkerSpec,
              '.pptx': pptChunkerSpec,
              '.txt': txtChunkerSpec,
              '.msg': msgChunkerSpec,
              '.rtf': rtfChunkerSpec,
              '.xlsx': xlsxChunkerSpec,
            };

            // Test override chunking
            var passages = Genai.SourceFile.Chunker.Universal.chunkFile(
              testCase.sourceFile,
              Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
                chunker: Genai.SourceFile.Chunker.Universal,
                textSplitters: [txs1, txs2],
                fileExtToChunkerSpecMap: fileExtMap,
              }),
              true
            ).passages;

            var expectedResults = testCase.overrideChunkSize.expectedResults;
            if (pdfChunkerSpec.chunker.name() === 'Genai.SourceFile.Chunker.Nougat') {
              // PyPdf and Nougat chunk differently
              expectedResults.lastPassageSubstring = testCase.overrideChunkSize.nougatLastPassageSubstring;
            }
            TestApi.checkChunking(testCase.sourceFile, passages, expectedResults);
          });
        });
      }
    });
  });

  describe('with some chunkers with overridden chunk size and chunk overlap values for', function () {
    testCases.forEach((testCase) => {
      it(testCase.description, function () {
        var fileExtMap = {
          '.doc': wordDocChunkerSpec,
          '.docx': wordDocChunkerSpec,
          '.html': htmlChunkerSpec,
          '.txt': txtChunkerSpec,
        };
        var passages;

        if (testCase.optionalOverride) {
          // Test override chunking
          passages = Genai.SourceFile.Chunker.Universal.chunkFile(
            testCase.sourceFile,
            Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
              chunker: Genai.SourceFile.Chunker.Universal,
              textSplitters: [txs1, txs2],
              fileExtToChunkerSpecMap: fileExtMap,
            }),
            true
          ).passages;
          TestApi.checkChunking(testCase.sourceFile, passages, testCase.overrideChunkSize.expectedResults);
        } else {
          // Test default chunking
          passages = Genai.SourceFile.Chunker.Universal.chunkFile(
            testCase.sourceFile,
            Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Universal }),
            true
          ).passages;
          TestApi.checkChunking(testCase.sourceFile, passages, testCase.defaultResults);
        }
      });
    });
  });

  describe('with files with bad characters', function () {
    it('like null character', function () {
      var passages = Genai.SourceFile.Chunker.Universal.chunkFile(
        testCases[8].sourceFile,
        Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Universal }),
        true
      ).passages;
      passages.each((p) => {
        return expect(p.contentStr.indexOf('\0')).toBe(-1);
      });
    });

    it('works with special chars in utf-8 encoding', function () {
      var passages = Genai.SourceFile.Chunker.Universal.chunkFile(
        testCases[10].sourceFile,
        Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Universal }),
        true
      ).passages;
      expect(passages.length).toBeGreaterThan(0);
    });
  });

  [pyPdfChunkerSpec, nougatPdfChunkerSpec].forEach((pdfChunkerSpec, idx) => {
    describe('chunkFilesBatch with ' + pdfChunkerSpec.chunker.name(), function () {
      beforeAll(function () {
        this.malformedFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
          originalFile: Pkg.file('meta://genAiBase/test/resource/chunker/pdfChunker/malformed.pdf'),
        });
        this.fileExtMap = {
          '.pdf': pdfChunkerSpec,
        };
      });

      it('gracefully handles a single file failing', function () {
        var result = Genai.SourceFile.Chunker.Universal.chunkFilesBatch(
          [this.malformedFile, testCases[0].sourceFile],
          Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
            chunker: Genai.SourceFile.Chunker.Universal,
            textSplitters: [txs1, txs2],
            fileExtToChunkerSpecMap: this.fileExtMap,
          }),
          true
        );
        expect(result.objList.objs.length).withContext('objList.objs.length').toEqual(1);
        expect(result.objList.errors.length).withContext('objList.errors.length').toEqual(1);
        expect(result.objList.errors[0].message).toMatch(/(Stream has ended unexpectedly|EOF marker not found)/);
        expect(result.passages.length).toBeGreaterThanOrEqual(testCases[0].defaultResults.minNumPassages);
      });
    });
  });

  describe('with different options', function () {
    beforeAll(function () {
      // Remove the previous setup
      Genai.SourceFile.Chunker.UniversalChunker.Config.setDefault('default');
      TestApi.teardown(this.ctx);

      var sourceFiles = testCases.map((testCase) => {
        return Genai.SourceFile.make({ originalFile: Pkg.file(testCase.filePath) });
      });
      var sourceFileIds = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile', sourceFiles);
      testCases.forEach((testCase, idx) => {
        testCase.sourceFile = Genai.SourceFile.make({ id: sourceFileIds[idx] }).get();
      });
      Genai.SourceFile.Chunker.UniversalChunker.Config.setDefault('test');
    });

    describe('with overridden chunk size and chunk overlap from config for', function () {
      testCases.forEach((testCase) => {
        if (testCase.overrideConfig) {
          it(testCase.description, function () {
            // Test override chunking from config
            var passages = Genai.SourceFile.Chunker.Universal.chunkFile(
              testCase.sourceFile,
              Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Universal }),
              true
            ).passages;
            TestApi.checkChunking(testCase.sourceFile, passages, testCase.overrideConfig.expectedResults);
          });
        }
      });
    });

    describe('setting maxTokens to 512', function () {
      it('adds the code snippets to chunks', function () {
        var passages = Genai.SourceFile.Chunker.Universal.chunkFile(
          testCases[7].sourceFile,
          mdChunkerSpec,
          true
        ).passages;
        expect(passages[4].contentStr).toContain('```c3typ\n// File "Panda.c3typ"');
        expect(passages[4].contentStr.toLowerCase().match(/\{code:[\da-f]+\}/)).toBeNull();
      });
    });

    describe('setting maxTokens to 1', function () {
      beforeAll(function () {
        this.initialMaxTokens = Genai.SourceFile.Chunker.UniversalChunker.Config.inst()
          .getConfig()
          .configValue('maxTokens');
        Genai.SourceFile.Chunker.UniversalChunker.Config.inst().setConfigValue('maxTokens', 1, ConfigOverride.APP);
      });

      afterAll(function () {
        Genai.SourceFile.Chunker.UniversalChunker.Config.inst().setConfigValue(
          'maxTokens',
          this.initialMaxTokens,
          ConfigOverride.APP
        );
      });

      it('does not add the code snippets to chunks', function () {
        var passages = Genai.SourceFile.Chunker.Universal.chunkFile(
          testCases[7].sourceFile,
          mdChunkerSpec,
          true
        ).passages;
        expect(passages[4].contentStr).not.toContain('```c3typ\n// File "Panda.c3typ"');
        expect(passages[4].contentStr.toLowerCase().match(/\{code:[\da-f]+\}/)).not.toBeNull();
      });
    });
  });

  describe('Genai.SourceFile.Chunker.WordDoc', function () {
    beforeAll(function () {
      this.fakeLocalPath = 'fakeFile.docx';
      this.sourceFile = Genai.SourceFile.make({
        id: 'fakeFile',
        originalFile: FileSystem.makeFile(this.fakeLocalPath),
      });
    });

    it('::readFirstNLines return empty string if the file does not exist', function () {
      var result = Genai.SourceFile.Chunker.WordDoc.readFirstNLines(this.sourceFile, 10);
      expect(result).toEqual('');
    });

    it('::doChunkFilesBatch return a result with an error if the file does not exist', function () {
      var result = Genai.SourceFile.Chunker.WordDoc.doChunkFilesBatch(
        [this.sourceFile],
        [this.fakeLocalPath],
        wordDocChunkerSpec
      );
      expect(result.objList.errors[0].message).toContain('no such file ' + this.fakeLocalPath);
    });
  });
});
