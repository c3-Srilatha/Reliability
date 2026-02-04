/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_MultimodalPdfChunker_LayoutParser';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.setOpenAiApiKey();

    this.originalMockLlmConfigMode = TestApi.enableMockLlmPlaybackIfInJarvis();
    TestApi.setMockLlmConfigPath(filename);
    Genai.PyUtil.terminateAllEngines();

    this.sourceFile = TestApi.upsertEntity(
      this.ctx,
      'Genai.SourceFile',
      Genai.SourceFile.make({
        originalFile: Pkg.file('meta://genAiBase/test/resource/layoutParser/multicolumns_2.pdf'),
      })
    );
  });

  afterAll(function () {
    Genai.Llm.MockLlmConfig.getConfig().setConfigValue('mode', this.originalMockLlmConfigMode);
    TestApi.teardown(this.ctx);
    Genai.SourceFile.Chunker.MultimodalPdf.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.PyUtil.terminateAllEngines();
  });

  describe('with the layout parser enabled', function () {
    beforeAll(function () {
      var mmPdfCfg = Genai.SourceFile.Chunker.MultimodalPdf.Config.getConfig();
      mmPdfCfg.setConfigValue('layoutParserSpec.device', 'cpu');
      mmPdfCfg.setConfigValue('enableLayoutParser', true);
    });

    afterAll(function () {
      Genai.SourceFile.Chunker.MultimodalPdf.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    it('extracts the correct number of text passages', function () {
      var output = TestApi.getChunkedPassages(this.sourceFile);
      var errors = output.objList.errors;
      var textPassages = [];
      var tablePassages = [];
      var imagePassages = [];

      if (errors.length) {
        fail(output.objList.errors[0].message);
      }

      this.passages = output.passages;
      this.passages.each((passage) => {
        if (passage.tableVerbalization) {
          tablePassages.push(passage);
        } else if (passage.caption) {
          imagePassages.push(passage);
        } else {
          textPassages.push(passage);
        }
      });
      var table2Index = tablePassages.length - 1;

      // The layout parser sometimes get 20 or 21 passages
      expect(this.passages.length).toBeGreaterThan(19);
      expect(textPassages[0].contentStr).toContain('Research');
      expect(textPassages[1].contentStr).toContain('Liliana');
      expect(textPassages[2].contentStr).toContain('June');
      expect(textPassages[3].contentStr).toContain('taxonomy');
      expect(textPassages[4].contentStr).toContain('systematic');
      expect(textPassages[5].contentStr).toContain('knowledge');

      // Table 1
      TestApi.checkStringMatches(tablePassages[0].tableVerbalization, ['taxonomy', 'scenarios', 'COVID-19'], false);
      expect(tablePassages[0].dataFrameFile).withContext('table 1 dataFrameFile').toBeDefined();
      expect(tablePassages[0].header).withContext('table 1 header').toContain('Scenario');
      expect(tablePassages[0].title).withContext('table 1 title').toContain('Table 1');

      // Image 1
      TestApi.checkStringMatches(imagePassages[0].contentStr, ['Doctoral', 'Research', 'Framework'], false);
      expect(imagePassages[0].caption).withContext('Figure 1 caption').toBeDefined();

      // Image 2
      TestApi.checkStringMatches(
        imagePassages[1].contentStr,
        ['Schematic', 'Environmental', 'Technology', 'IoT', 'agriculture'],
        false
      );
      expect(imagePassages[1].caption).withContext('Figure 2 caption').toBeDefined();

      // Image 3
      TestApi.checkStringMatches(imagePassages[2].contentStr, ['3D', 'Plant', 'Simulation'], false);
      expect(imagePassages[2].caption).withContext('Figure 3 caption').toBeDefined();

      // Table 2
      TestApi.checkStringMatches(
        tablePassages[table2Index].tableVerbalization,
        ['Dominio', 'collaboration', 'domain based'],
        false
      );
      expect(tablePassages[table2Index].dataFrameFile).withContext('table 2 dataFrameFile').toBeDefined();
      expect(tablePassages[table2Index].header).withContext('table 2 header').toContain('Objetivo');
      expect(tablePassages[table2Index].title).withContext('table 2 title').toContain('Table 2');
    });
  });
});
