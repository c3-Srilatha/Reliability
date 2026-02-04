/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_MultimodalPdfChunker_other_configurations';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 60 * 1000;

function updateMultimodalPdfConfig({
  disableTableParser = false,
  disableImageParser = false,
  enableLayoutParser = false,
  enableDocumentHierarchy = false,
} = {}) {
  var mmPdfCfg = Genai.SourceFile.Chunker.MultimodalPdf.Config.getConfig();
  mmPdfCfg.setConfigValue('layoutParserSpec.device', 'cpu');
  if (disableTableParser) {
    mmPdfCfg.setConfigValue('disableTableParser', true);
  }

  if (disableImageParser) {
    mmPdfCfg.setConfigValue('disableImageParser', true);
  }

  if (enableLayoutParser) {
    mmPdfCfg.setConfigValue('enableLayoutParser', true);
  }

  if (enableDocumentHierarchy) {
    mmPdfCfg.setConfigValues({
      enableLayoutParser: true,
      'layoutParserSpec.documentHierarchyParserSpec.llmConfigName': 'qa_inference_config_gpt4o',
      'layoutParserSpec.documentHierarchyParserSpec.pageToStopTableOfContentDetection': 10,
      'layoutParserSpec.documentHierarchyParserSpec.earlyStopTableOfContentDetectionIncrement': 3,
      'layoutParserSpec.documentHierarchyParserSpec.targetTableOfContentStrings': ['table of content', 'index'],
      'layoutParserSpec.documentHierarchyParserSpec.tableOfContentDetectionMode': 'conditional',
      'layoutParserSpec.documentHierarchyParserSpec.fuzzyMatchThreshold': 80,
      'layoutParserSpec.documentHierarchyParserSpec.prefixesToRemove': [
        'section',
        'subsection',
        'item',
        'part',
        'article',
      ],
      'layoutParserSpec.documentHierarchyParserSpec.tableOfContentDetectionPrompt':
        "You are given an image which I suspect to be the table of contents of a document. You will extract the table of content into a nested json format. The table of content may be hierarchical (e.g. with sections, subsections and so on). Reflect this hierarchical structure in a nested json format, where the key is the full section name (including any prefixes). If a section has no 'children', its value should be an empty json {}. Ignore the page numbers. If this is not a table or not a table of content, return {}. Note that, you should always return answer in JSON format. Dont return a string. Response should not start with ```JSON, instead it should start with {. Begin here!",
    });
  }
}

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.setOpenAiApiKey();

    Genai.PyUtil.terminateAllEngines();

    this.sourceFile = TestApi.upsertEntity(
      this.ctx,
      'Genai.SourceFile',
      Genai.SourceFile.make({
        originalFile: Pkg.file('meta://genAiBase/resource/code/parsing/data/Docs/sample_doc.pdf'),
      })
    );
    this.sourceFileWithContentsPage = TestApi.upsertEntity(
      this.ctx,
      'Genai.SourceFile',
      Genai.SourceFile.make({
        originalFile: Pkg.file('meta://genAiBase/resource/code/parsing/data/Docs/pdf_with_contents_page.pdf'),
      })
    );
    this.sourceFileWithTOC = TestApi.upsertEntity(
      this.ctx,
      'Genai.SourceFile',
      Genai.SourceFile.make({
        originalFile: Pkg.file('meta://genAiBase/resource/code/parsing/data/Docs/multi_column_sample_document.pdf'),
      })
    );
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.SourceFile.Chunker.MultimodalPdf.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.PyUtil.terminateAllEngines();
  });

  // Only Image Parser is disabled.
  describe('with image parser disabled', function () {
    beforeAll(function () {
      updateMultimodalPdfConfig({ disableImageParser: true });
    });

    afterAll(function () {
      Genai.SourceFile.Chunker.MultimodalPdf.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    it('should only parse tables and text, but not images', function () {
      var output = TestApi.getChunkedPassages(this.sourceFile);
      var errors = output.objList.errors;

      if (errors.length) {
        fail(output.objList.errors[0].message);
      }
      [this.passages, this.textPassages, this.imagePassages, this.tablePassages] = TestApi.filterOutput(output);

      expect(this.textPassages.length).withContext('text passages').toBeGreaterThanOrEqual(12); // Should be equal to 12 as of July, 2024
      expect(this.imagePassages.length).withContext('image passages').toEqual(0);
      expect(this.tablePassages.length).withContext('table passages').toBeGreaterThanOrEqual(2); // Should be equal to 2 as of July, 2024
    });
  });

  // Only Table Parser is disabled.
  describe('with table parser disabled', function () {
    beforeAll(function () {
      updateMultimodalPdfConfig({ disableTableParser: true });
    });

    afterAll(function () {
      Genai.SourceFile.Chunker.MultimodalPdf.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    it('should only parse images and text, but not tables', function () {
      var output = TestApi.getChunkedPassages(this.sourceFile);
      var errors = output.objList.errors;
      if (errors.length) {
        fail(output.objList.errors[0].message);
      }
      [this.passages, this.textPassages, this.imagePassages, this.tablePassages] = TestApi.filterOutput(output);

      expect(this.textPassages.length).withContext('text passages').toBeGreaterThanOrEqual(12); // Should be equal to 12 as of July, 2024
      expect(this.imagePassages.length).withContext('image passages').toBeGreaterThanOrEqual(4); // Should be equal to 4 as of July, 2024
      expect(this.tablePassages.length).withContext('table passages').toEqual(0);
    });
  });

  // If both image and the table parsers are disabled.
  describe('with both image and table parser disabled', function () {
    beforeAll(function () {
      updateMultimodalPdfConfig({ disableTableParser: true, disableImageParser: true });
    });

    afterAll(function () {
      Genai.SourceFile.Chunker.MultimodalPdf.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    it('should only parse text, but not images and tables', function () {
      var output = TestApi.getChunkedPassages(this.sourceFile);
      var errors = output.objList.errors;
      if (errors.length) {
        fail(output.objList.errors[0].message);
      }
      [this.passages, this.textPassages, this.imagePassages, this.tablePassages] = TestApi.filterOutput(output);

      expect(this.textPassages.length).withContext('text passages').toBeGreaterThanOrEqual(12); // Should be equal to 12 as of July, 2024
      expect(this.imagePassages.length).withContext('image passages').toEqual(0); // Should be equal to 4 as of July, 2024
      expect(this.tablePassages.length).withContext('table passages').toEqual(0);
    });
  });

  describe('for table or image components if the table / image file does not exist', function () {
    beforeAll(function () {
      updateMultimodalPdfConfig({ disableTableParser: false, disableImageParser: false, enableLayoutParser: false });
    });

    afterAll(function () {
      Genai.SourceFile.Chunker.MultimodalPdf.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    it('should still succesfully chunk it', function () {
      var output = TestApi.getChunkedPassages(this.sourceFileWithContentsPage);
      var errors = output.objList.errors;

      if (errors.length) {
        fail(output.objList.errors[0].message);
      }

      this.passages = output.passages;
      this.passagesWithContentStr = this.passages.filter((x) => {
        return x && x.contentStr !== undefined;
      });
      expect(this.passages.length).toBeGreaterThan(75);
      expect(this.passagesWithContentStr.length).toBeGreaterThan(75);
    });
  });

  describe('with custom splitLength', function () {
    beforeAll(function () {
      Genai.SourceFile.Chunker.MultimodalPdf.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      var mmPdfCfg = Genai.SourceFile.Chunker.MultimodalPdf.Config.getConfig();
      var textChunkerSpec = mmPdfCfg.textParserSpec.textChunkerSpec.withSplitLength(300);
      var textParserSpec = mmPdfCfg.textParserSpec.withTextChunkerSpec(textChunkerSpec);
      var tableParserSpec = mmPdfCfg.tableParserSpec.withSplitLength(200);
      mmPdfCfg.withTextParserSpec(textParserSpec).withTableParserSpec(tableParserSpec).setConfig();
      mmPdfCfg.setConfigValue('layoutParserSpec.device', 'cpu');
      mmPdfCfg.setConfigValue('tableParserSpec.tableVerbalizerSpec.modelInferenceConfigName', 'qa_inference_config');

      var output = Genai.SourceFile.Chunker.MultimodalPdf.chunkFile(
        this.sourceFile,
        Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.MultimodalPdf }),
        true
      );

      [this.passages, this.textPassages, this.imagePassages, this.tablePassages] = TestApi.filterOutput(output);

      Genai.SourceFile.Chunker.MultimodalPdf.Config.getConfig().setConfigValues({
        textParserSpec: {
          textChunkerSpec: {
            splitLength: 300,
            splitOverlap: 100,
          },
          pageImageKwargs: {
            antialias: true,
            resolution: 100,
          },
          pypdf2OverlapRatio: 0.01,
          postProcessorThresholdLow: 0.15,
          postProcessorThresholdHigh: 0.3,
        },
        layoutParserSpec: {
          device: 'cpu',
        },
      });
    });

    afterAll(function () {
      Genai.SourceFile.Chunker.MultimodalPdf.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    it('should chunk texts respecting the limit specified', function () {
      var output = Genai.SourceFile.Chunker.MultimodalPdf.chunkFile(
        this.sourceFile,
        Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.MultimodalPdf }),
        true
      );

      this.textPassages = output.passages.filter((x) => {
        return x && x.imageFile === undefined && x.dataFrameFile === undefined;
      });
      this.textPassages.each((psg) => {
        return expect(
          psg.contentStr.split(/\s+/).filter((str) => {
            return str.length > 0;
          }).length
        ).toBeLessThanOrEqual(300);
      });
    });

    it('should chunk table passages respecting the limit specified', function () {
      this.tablePassages.each((psg) => {
        return expect(
          psg.contentStr.split(/\s+/).filter((str) => {
            return str.length > 0;
          }).length
        ).toBeLessThanOrEqual(200);
      });
    });
  });

  describe('for pdf with table of contents', function () {
    beforeAll(function () {
      updateMultimodalPdfConfig({ enableDocumentHierarchy: true });
    });

    afterAll(function () {
      Genai.SourceFile.Chunker.MultimodalPdf.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    it('should update document hierarchy in metadata', function () {
      var output = TestApi.getChunkedPassages(this.sourceFileWithTOC);
      var errors = output.objList.errors;

      if (errors.length) {
        fail(output.objList.errors[0].message);
      }

      this.passages = output.passages;
      this.passagesWithMetaData = this.passages.filter((passage) => {
        return passage && passage.metadata.header_hierarchy !== undefined;
      });
      expect(this.passagesWithMetaData.length).toBeGreaterThan(190);
      TestApi.checkStringMatches(
        this.passagesWithMetaData[0].metadata.header_hierarchy,
        ['Summary', 'Program', 'Description', 'Guidebook'],
        false
      );
    });
  });
});
