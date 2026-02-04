/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */
var filename = 'test_GenaiMigrationHelper.js';
describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.Tool.MultiSourceSynthesizer.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    this.qoConfig = Genai.Agent.Config.forConfigKey('QueryOrchestrator_default');
    this.qoConfig.setConfigValue('toolkitName', 'QueryOrchestrator_multipleEvalQueryTools');
    this.qoConfig.setConfigValue('uiSelectableTools', [
      'UnstructuredQueryTool_default',
      'EvalQuery_default',
      'EvalQuery_default_test',
      'MultiSourceSynthesizer_default',
    ]);
    Genai.Agent.Tool.forId('EvalQuery_default')
      .config()
      .setConfigValue('dataModelGraph', Genai.StructuredData.DataModelGraph.make({ id: 'default' }));
    Genai.Agent.Tool.forId('EvalQuery_default_test')
      .config()
      .setConfigValue('dataModelGraph', Genai.StructuredData.DataModelGraph.make({ id: 'default_2' }));

    this.migratedStructuredDbToolId = 'StructuredDataQueryPy_1';
    this.migratedStructuredDbToolId_2 = 'StructuredDataQueryPy_2';
  });

  describe('migrate from eval query to structured db agent tool', function () {
    beforeAll(function () {
      Genai.MigrationHelper.migrateEvalQueryToStructuredDbAgent();

      this.qoConfig = this.qoConfig.getConfig();
      this.qoTools = Genai.Agent.Toolkit.forName(this.qoConfig.toolkitName).tools.map((tool) => {
        return tool.id;
      });
      this.mssTools = Genai.Agent.Toolkit.forName('MultiSourceSynthesizer_default_v1').tools.map((tool) => {
        return tool.id;
      });
    });

    it('removes eval query tool from qo toolkit', function () {
      expect(this.qoTools).not.toContain('EvalQuery_default');
      expect(this.qoTools).not.toContain('EvalQuery_default_test');
    });

    it('adds new structured db agent tools to qo toolkit', function () {
      expect(this.qoTools).toContain(this.migratedStructuredDbToolId);
      expect(this.qoTools).toContain(this.migratedStructuredDbToolId_2);
    });

    it('migrates the data model graph to the structured data query config', function () {
      function validateStructuredDbDataModelGraph(toolId, expectedDataModelGraph) {
        var tool = Genai.Agent.Tool.forId(toolId);
        var toolCfg = tool.config();
        expect(toolCfg.initializationSpec.dataModelGraph.id).toEqual(expectedDataModelGraph);
      }

      validateStructuredDbDataModelGraph(this.migratedStructuredDbToolId, 'default');
      validateStructuredDbDataModelGraph(this.migratedStructuredDbToolId_2, 'default_2');
    });

    it('removes eval query tool from mss toolkit in qo', function () {
      expect(this.mssTools).not.toContain('EvalQuery_default');
    });

    it('adds new structured db agent tool to mss toolkit in qo', function () {
      expect(this.mssTools).toContain(this.migratedStructuredDbToolId);
    });

    it('removes eval query tool from ui selectable tools', function () {
      expect(this.qoConfig.uiSelectableTools).not.toContain('EvalQuery_default');
      expect(this.qoConfig.uiSelectableTools).not.toContain('EvalQuery_default_test');
    });

    it('adds new structured db agent tool to ui selectable tools', function () {
      expect(this.qoConfig.uiSelectableTools).toContain(this.migratedStructuredDbToolId);
      expect(this.qoConfig.uiSelectableTools).toContain(this.migratedStructuredDbToolId_2);
    });

    it('configures the tool name and mss tool description', function () {
      function validateStructuredDbCfg(toolId) {
        var tool = Genai.Agent.Tool.forId(toolId);
        var toolCfg = tool.config();
        expect(toolCfg.toolName).toBeDefined();
        expect(toolCfg.descriptionForMultiTool).toBeDefined();
      }

      validateStructuredDbCfg(this.migratedStructuredDbToolId);
      validateStructuredDbCfg(this.migratedStructuredDbToolId_2);
    });
  });

  afterAll(function () {
    Genai.Agent.Tool.EvalQuery.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.Tool.MultiSourceSynthesizer.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.Tool.forId(this.migratedStructuredDbToolId).config().clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.Tool.forId(this.migratedStructuredDbToolId_2).config().clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.Toolkit.forName('QueryOrchestrator_multipleEvalQueryTools').clearConfigAndSecretOverride(
      ConfigOverride.APP
    );
    Genai.Agent.Toolkit.forName('MultiSourceSynthesizer_default_v1').clearConfigAndSecretOverride(ConfigOverride.APP);
    TestApi.teardown(this.ctx);
  });
});
