/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UnstructuredQueryTool';
var toolId = 'UnstructuredQueryTool_' + filename;
describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.setOpenAiApiKey();

    Genai.PyUtil.terminateAllEngines();
    this.initialConfig = Genai.UnstructuredQuery.Engine.Config.inst();

    var vectorStore = Genai.Retriever.Dense.forName('c3DocumentationV6-dense');
    vectorStore.initialize();
    this.config = this.initialConfig.withFields({
      name: filename,
      vectorStore: vectorStore,
      chatWithFullHistory: false,
    });
    this.config.setConfig();

    this.toolConfig = Genai.Agent.Tool.UnstructuredDataQuery.Config.inst().getConfig();
    this.toolConfig = this.toolConfig.withId(toolId).withConfigName(filename);
    this.toolConfig.setConfig();
    this.unstructuredQueryTool = Genai.Agent.Tool.UnstructuredDataQuery.make({ id: toolId });

    // Deliberately set to a different configs to test that the tool uses its own config and not the defaults
    Genai.UnstructuredQuery.Engine.Config.setDefault('alabamaBond');
    Genai.UnstructuredQuery.Engine.DefaultConfig.setConfigValue('queryEngineConfigName', 'alabamaBond');
    Genai.UnstructuredQuery.Engine.Config.inst().setConfigValue(
      'vectorStore',
      Genai.Retriever.Dense.forName('alabamaBond-dense')
    );
    Genai.Agent.Tool.UnstructuredDataQuery.DefaultConfig.setConfigValue(
      'unstructuredQueryConfigId',
      'UnstructuredQueryTool_default'
    );

    // This sets the pipeline config that the tool should use
    Genai.Agent.Tool.UnstructuredDataQuery.Config.inst().setConfigValue('configName', this.config.name);
    this.yearString = String(DateTime.now().year);
    this.queries = [
      'What is an ml pipeline?',
      'What is an ml pipeline? Show results in the month of January ' + this.yearString + '?',
      'What is an ml pipeline? date:between(' + this.yearString + '-01-01,' + this.yearString + '-01-28)',
    ];
    this.resultForQuery = function (query) {
      return TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
        searchQuery: Genai.Query.fromString(query),
      }).get();
    };
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.DefaultConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.Tool.UnstructuredDataQuery.DefaultConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
    this.config.clearConfigAndSecretOverride(ConfigOverride.APP);
    this.toolConfig.clearConfigAndSecretOverride(ConfigOverride.APP);

    Genai.PyUtil.terminateAllEngines();
  });

  describe('initialize', function () {
    it('takes a few seconds', function () {
      var t0 = DateTime.nowWithMillis();
      this.unstructuredQueryTool.initialize();
      var t1 = DateTime.nowWithMillis();

      // Usually ~4000
      expect(DateTime.deltaMillis(t0, t1)).toBeGreaterThan(500);
    });

    it('takes about the same amount of time on re-initialize', function () {
      var t0 = DateTime.nowWithMillis();
      this.unstructuredQueryTool.initialize();
      var t1 = DateTime.nowWithMillis();

      // Usually ~4000
      expect(DateTime.deltaMillis(t0, t1)).toBeLessThan(10000);
    });

    it('takes about the same amount of time on force re-initialize', function () {
      var t0 = DateTime.nowWithMillis();
      this.unstructuredQueryTool.initialize(true);
      var t1 = DateTime.nowWithMillis();

      // Usually ~4000
      expect(DateTime.deltaMillis(t0, t1)).toBeGreaterThan(500);
    });
  });

  describe('retrieveData and formatData', function () {
    beforeAll(function () {
      this.query = 'What is a machine learning pipeline?';
      var resultParent = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
        searchQuery: Genai.Query.fromString(this.query),
      });
      this.result = resultParent.createChildResult(this.unstructuredQueryTool.id);
      this.output = this.unstructuredQueryTool.retrieveData(
        Genai.Agent.Tool.DataRetriever.RetrieveDataSpec.make({
          input: this.query,
          inProgressResult: this.result,
        })
      );

      var filteredQuery = this.query + 'date:between(2100-07-01,2100-07-28)';
      var filteredResultParent = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
        searchQuery: Genai.Query.fromString(filteredQuery),
      });

      // Test that filter makes it through createChildResult
      this.filteredResult = filteredResultParent.createChildResult(this.unstructuredQueryTool.id);
      this.filteredOutput = this.unstructuredQueryTool.retrieveData(
        Genai.Agent.Tool.DataRetriever.RetrieveDataSpec.make({
          input: filteredQuery,
          inProgressResult: this.filteredResult,
        })
      );
    });

    afterAll(function () {
      this.result.remove();
      this.filteredResult.remove();
    });

    it('returns the passages and sets them on the Genai.Query.Result#passages', function () {
      expect(this.output.data.length).withContext('data.length').toEqual(this.config.numSources());
      expect(this.output.data[0].page_content).toContain('Machine Learning Pipeline');
      expect(this.result.get('potentialRationaleSources').potentialRationaleSources.length)
        .withContext('sources.length')
        .toEqual(this.output.data.length);
    });

    it('has logs', function () {
      expect(this.output.logs.UnstructuredDataQuery).toBeDefined();
    });

    it('formats the data correctly', function () {
      var spec = Genai.Agent.Tool.DataRetriever.FormatDataSpec.make({
        retrieveDataOutput: this.output,
        inProgressResult: this.result,
        input: this.query,
      });
      var formattedData = this.unstructuredQueryTool.formatData(spec);
      var expected =
        '\nPASSAGES\n' +
        Str.join(
          '\n\n',
          this.output.data.map(function (source) {
            return '[' + source.sourcePassage.passageId + '] ' + source.page_content;
          })
        ) +
        '\n';
      expect(formattedData).toEqual(expected);
    });

    it('respects filters', function () {
      expect(this.filteredOutput.data.length).toEqual(0);
      expect(this.filteredResult.get('rationaleSources').rationaleSources.length).toEqual(0);
    });
  });

  describe('::childConfigFields', function () {
    it('checks if it returns the correct child config fields', function () {
      const result = Genai.Agent.Tool.UnstructuredDataQuery.Config.childConfigFields();
      expect(result.get('configName').name()).toEqual('Genai.UnstructuredQuery.Engine.Config');
    });
  });
});
