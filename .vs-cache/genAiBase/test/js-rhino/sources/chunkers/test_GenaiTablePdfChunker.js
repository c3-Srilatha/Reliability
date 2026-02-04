/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiTablePdfChunker';

// Test PDFs with tables
describe(filename, function () {
  TestApi.installHuggingfaceModels(['facebook/nougat-small', 'gpt2']);

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.sourceFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      originalFile: Pkg.file('meta://genAiBase/test/resource/chunker/pdfChunker/sales_tax_table.pdf'),
    });

    this.boldSourceFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      originalFile: Pkg.file('meta://genAiBase/test/resource/chunker/pdfChunker/bold_text_doc.pdf'),
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  function countOfHeadersInTablePassage(passages, keyword) {
    var count = 0;
    passages.each((passage) => {
      if (passage.metadata.kind === 'table') {
        var content = passage.contentStr.toLowerCase();
        if (content.includes(keyword.toLowerCase())) {
          count++;
        }
      }
    });
    return count;
  }

  function countTablePassages(passages) {
    var count = 0;
    passages.each((passage) => {
      if (passage.metadata.kind === 'table') {
        count++;
      }
    });
    return count;
  }

  function checkHeaderInfoInTableChunks(passages, header) {
    var passagesWithTable = countTablePassages(passages);
    var tablePassagesWithHeaders = countOfHeadersInTablePassage(passages, header);
    expect(passagesWithTable).toEqual(tablePassagesWithHeaders);
  }

  [true, false].forEach((setAirGapConfig) => {
    describe('with PDFs containing tables with AirGapConfig: ' + setAirGapConfig, function () {
      beforeAll(function () {
        this.splitter = {
          textSplitter: 'TableTextSplitter',
          splitterModule: {
            name: 'custom',
            importPath: '/genAiBase/resource/code/c3genai/text_splitters.py',
          },
        };
        if (setAirGapConfig) {
          Genai.PyUtil.terminateAllEngines();
          Genai.App.AirGapConfig.inst().setConfigValue(
            'tableTextSplitterEncoderPath',
            'gcs://c3--datasets/genai/airgap/models/gpt2.zip'
          );
          Genai.App.AirGapConfig.inst().setConfigValue(
            'tatrZipPath',
            'gcs://c3--datasets/genai/airgap/transformers/table-transformer-detection.zip'
          );
          Genai.App.AirGapConfig.inst().setConfigValue(
            'tokenTextSplitterEncoderPath',
            'gcs://c3--datasets/genai/airgap/tiktoken/tiktoken_gpt2.zip'
          );
          Genai.App.AirGapConfig.inst().setConfigValue(
            'spacyModelPath',
            'gcs://c3--datasets/genai/airgap/spacy_model/en_core_web_sm-3.5.0.zip'
          );
        }
        this.passages = Genai.SourceFile.Chunker.TablePdf.chunkFile(
          this.sourceFile,
          Genai.SourceFile.Chunker.TablePdf.Spec.make({
            chunker: Genai.SourceFile.Chunker.TablePdf,
            textSplitters: [this.splitter],
          }),
          true
        ).passages;
      });

      afterAll(function () {
        if (setAirGapConfig) {
          Genai.App.AirGapConfig.inst().clearConfigAndSecretOverride(ConfigOverride.APP);
        }
      });

      it('should chunk with tables present in the chunk', function () {
        expect(this.passages.length).toEqual(7);
        expect(countTablePassages(this.passages)).toBeGreaterThan(0);
      });

      it('should maintain table header info in the table chunks', function () {
        var header = 'STATE APPROPRIATION OF SALES TAX REVENUES (2018-2022)';
        checkHeaderInfoInTableChunks(this.passages, header);
      });
    });
  });

  describe('with overriden chunker size and chunkOverlap', function () {
    beforeAll(function () {
      this.splitter = {
        textSplitter: 'TableTextSplitter',
        chunkSize: 2500,
        chunkOverlap: 100,
        splitterModule: {
          name: 'custom',
          importPath: '/genAiBase/resource/code/c3genai/text_splitters.py',
        },
      };
      this.passages = Genai.SourceFile.Chunker.TablePdf.chunkFile(
        this.sourceFile,
        Genai.SourceFile.Chunker.TablePdf.Spec.make({
          chunker: Genai.SourceFile.Chunker.TablePdf,
          textSplitters: [this.splitter],
        }),
        true
      ).passages;
    });

    describe('with PDFs containing tables', function () {
      beforeAll(function () {
        this.passages = Genai.SourceFile.Chunker.TablePdf.chunkFile(
          this.sourceFile,
          Genai.SourceFile.Chunker.TablePdf.Spec.make({
            chunker: Genai.SourceFile.Chunker.TablePdf,
            textSplitters: [this.splitter],
          }),
          true
        ).passages;
      });

      it('should chunk with tables present in the chunk', function () {
        expect(this.passages.length).toEqual(3);
        expect(countTablePassages(this.passages)).toBeGreaterThan(0);
      });

      it('should maintain table header info in the table chunks', function () {
        var header = 'STATE APPROPRIATION OF SALES TAX REVENUES (2018-2022)';
        checkHeaderInfoInTableChunks(this.passages, header);
      });
    });

    describe('with PDFs containing bold text', function () {
      beforeAll(function () {
        this.passages = Genai.SourceFile.Chunker.TablePdf.chunkFile(
          this.boldSourceFile,
          Genai.SourceFile.Chunker.TablePdf.Spec.make({
            chunker: Genai.SourceFile.Chunker.TablePdf,
            textSplitters: [this.splitter],
          }),
          true
        ).passages;
      });

      it('should chunk', function () {
        expect(this.passages.length).toEqual(3);
        expect(countTablePassages(this.passages)).toBeGreaterThan(0);
      });

      it('should not have duplicate characters in the bold text', function () {
        expect(this.passages[1].contentStr).toContain('will Lula skewer ethanol');
      });
    });
  });

  describe('Table PDF Chunker with camelotTableVerbalizerLambda', function () {
    beforeAll(function () {
      var tx = Genai.SourceFile.TextSplitter.TablePdf.Spec.make({
        textSplitter: 'TableTextSplitter',
        specType: Genai.SourceFile.TextSplitter.TablePdf.Spec,
        chunkSize: 2500,
        chunkOverlap: 100,
        splitterModule: {
          name: 'custom',
          importPath: '/genAiBase/resource/code/c3genai/text_splitters.py',
        },
        offsetLines: 10,
      });
      var chunkerSpec = Genai.SourceFile.Chunker.TablePdf.Spec.make({
        chunker: Genai.SourceFile.Chunker.TablePdf,
        textSplitters: [tx],
        specType: Genai.SourceFile.Chunker.TablePdf.Spec,
        camelotTableVerbalizerLambda: Lambda.fromPySrc('lambda table: table.to_string()'),
      });
      this.passages = Genai.SourceFile.Chunker.TablePdf.chunkFile(this.sourceFile, chunkerSpec, true).passages;
    });

    it('should chunk with tables present in the chunk', function () {
      expect(this.passages.length).toEqual(4);
      expect(countTablePassages(this.passages)).toBeGreaterThan(0);
    });

    it('should maintain table header info in the table chunks', function () {
      var header = 'STATE APPROPRIATION OF SALES TAX REVENUES (2018-2022)';
      checkHeaderInfoInTableChunks(this.passages, header);
    });
  });
});

// Test PDFs without tables

var txs = Genai.SourceFile.TextSplitter.TablePdf.Spec.make({
  textSplitter: 'TableTextSplitter',
  specType: Genai.SourceFile.TextSplitter.TablePdf.Spec,
  chunkSize: 500,
  chunkOverlap: 100,
  splitterModule: {
    name: 'custom',
    importPath: '/genAiBase/resource/code/c3genai/text_splitters.py',
  },
  offsetLines: 10,
});

var pdfChunkerSpec = Genai.SourceFile.Chunker.TablePdf.Spec.make({
  chunker: Genai.SourceFile.Chunker.TablePdf,
  textSplitters: [txs],
  specType: Genai.SourceFile.Chunker.TablePdf.Spec,
  detThreshold: 0.9,
  pageImageKwargs: { antialias: true },
  enableNougat: false,
  nougatModel: 'nougat-small',
  nougatModelKwargs: {
    min_length: 1,
    max_length: 100000,
    return_dict_in_generate: true,
    output_scores: true,
  },
  pypdf2OverlapRatio: 0.01,
  enableCamelot: true,
  camelotKwargs: { flavor: 'stream', row_tol: 10 },
});

var testCases = [
  {
    filePath: 'meta://genAiBase/test/resource/chunker/pdfChunker/great-expectations-ch1-aes.pdf',
    description: 'PDFs that require PyCryptodome for AES encoding',
    overrideChunkSize: {
      expectedResults: {
        minNumPassages: 7,
        maxNumPassages: 32,
        firstPassageSubstring: 'So, I called myself Pip, and came to be called Pip',
        lastPassageSubstring: 'But now I was frightened again, and ran home \nwithout stopping.',
        lastPassagePageNum: 4,
      },
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
    filePath: 'meta://genAiBase/test/resource/chunker/badCharsDocument/japanese.pdf',
    description: 'PDF with bad character',
    defaultResults: {
      minNumPassages: 6,
      maxNumPassages: 20,
      firstPassageSubstring: '第2次  岸',
      lastPassageSubstring: '内閣官房 内',
    },
    optionalOverride: false,
  },
];

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    var sourceFiles = testCases.map((testCase) => Genai.SourceFile.make({ originalFile: Pkg.file(testCase.filePath) }));
    var sourceFileIds = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile', sourceFiles);
    testCases.forEach((testCase, idx) => {
      testCase.sourceFile = Genai.SourceFile.forId(sourceFileIds[idx]);
    });
  });

  afterAll(function () {
    Genai.SourceFile.Chunker.UniversalChunker.Config.setDefault('default');
    TestApi.teardown(this.ctx);
  });

  describe('with seeded config chunking for', function () {
    Genai.SourceFile.Chunker.UniversalChunker.Config.setDefault('table');
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

  describe('with overridden chunk size and chunk overlap values for', function () {
    testCases.forEach((testCase) => {
      if (testCase.overrideChunkSize) {
        it(testCase.description, function () {
          var fileExtMap = {
            '.pdf': pdfChunkerSpec,
          };

          // Test override chunking
          var passages = Genai.SourceFile.Chunker.Universal.chunkFile(
            testCase.sourceFile,
            Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
              chunker: Genai.SourceFile.Chunker.Universal,
              textSplitters: [txs],
              fileExtToChunkerSpecMap: fileExtMap,
            }),
            true
          ).passages;
          TestApi.checkChunking(testCase.sourceFile, passages, testCase.overrideChunkSize.expectedResults);
        });
      }
    });
  });

  describe('with files with bad characters', function () {
    it('like null character', function () {
      var passages = Genai.SourceFile.Chunker.TablePdf.chunkFile(
        testCases[1].sourceFile,
        Genai.SourceFile.Chunker.TablePdf.Spec.make({
          chunker: Genai.SourceFile.Chunker.TablePdf,
          textSplitters: [txs],
        }),
        true
      ).passages;
      passages.each((p) => expect(p.contentStr.indexOf('\0')).toBe(-1));
    });
  });

  describe('chunkFilesBatch', function () {
    beforeAll(function () {
      this.malformedFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
        originalFile: Pkg.file('meta://genAiBase/test/resource/chunker/pdfChunker/malformed.pdf'),
      });
      this.fileExtMap = {
        '.pdf': pdfChunkerSpec,
      };
    });

    it('gracefully handles a single file failing', function () {
      var result = Genai.SourceFile.Chunker.TablePdf.chunkFilesBatch(
        [this.malformedFile, testCases[0].sourceFile],
        Genai.SourceFile.Chunker.TablePdf.Spec.make({
          chunker: Genai.SourceFile.Chunker.TablePdf,
          textSplitters: [txs],
        }),
        true
      );
      expect(result.objList.objs.length).toEqual(1);
      expect(result.objList.errors.length).toEqual(1);
      expect(result.objList.errors[0].message).toMatch(/EOF marker not found/);
      expect(result.passages.length).toBeGreaterThanOrEqual(testCases[0].defaultResults.minNumPassages);
    });
  });
});

describe('with basic UniversalChunker.Spec and with overridden chunksize and chunk overlap', function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    var sourceFiles = testCases.map((testCase) => Genai.SourceFile.make({ originalFile: Pkg.file(testCase.filePath) }));
    var sourceFileIds = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile', sourceFiles);
    testCases.forEach((testCase, idx) => {
      testCase.sourceFile = Genai.SourceFile.forId(sourceFileIds[idx]);
    });
    Genai.SourceFile.Chunker.UniversalChunker.Config.setDefault('test');
  });

  afterAll(function () {
    Genai.SourceFile.Chunker.UniversalChunker.Config.setDefault('default');
    TestApi.teardown(this.ctx);
  });

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
