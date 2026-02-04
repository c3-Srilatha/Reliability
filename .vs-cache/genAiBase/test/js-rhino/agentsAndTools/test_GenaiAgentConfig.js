/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_GenaiAgentConfig';

var originalUiOptions;

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    Genai.Agent.QueryOrchestrator.DefaultConfig.setConfigValue(
      'queryOrchestratorConfigName',
      'QueryOrchestrator_default'
    );
    this.agentConfig = Genai.Agent.Config.make({
      name: filename,
      toolkitName: 'QueryOrchestrator_v2_no_tableReasoning',
      llmConfigName: 'default_orchestrator_model',
      promptConfigName: 'QueryOrchestrator_default',
      finalAnswerToolId: 'UtilTool_Finish',
      idkToolId: 'UtilTool_Idk',
      maxSteps: 0,
      freezeActionInputs: true,
      disableLogitBias: false,
      defaultToolName: 'submitFinalAnswer()',
    });
    this.agentConfig.setConfig();
    this.agentConfig = this.agentConfig.getConfig();

    this.allTools = Genai.Agent.Toolkit.forName(this.agentConfig.toolkitName).allTools();
    this.allToolConfigs = this.allTools.map((tool) => {
      return tool.config();
    });
    this.allToolIds = this.allToolConfigs.map((toolConfig) => {
      return toolConfig.id;
    });
    this.allToolNames = this.allToolConfigs.map((toolConfig) => {
      return toolConfig.toolName;
    });
    originalUiOptions = this.allToolConfigs.map((toolConfig) => {
      return toolConfig.uiOptions;
    });

    this.setToolConfigUiOptions = function (uiOptionsList) {
      _.each(this.allToolConfigs, function (toolConfig, index) {
        if (!uiOptionsList[index]) {
          /**
           * Workaround until PLAT-73276 is fixed.
           * Leaving this comment so a search-all for `clearConfigValue` may help find this.
           */
          toolConfig.setConfigValue('uiOptions', null);

          // ToolConfig.clearConfigValue('uiOptions');
        } else {
          toolConfig.setConfigValue('uiOptions', uiOptionsList[index]);
        }
      });
    };
  });

  afterAll(function () {
    _.each(this.allToolConfigs, function (toolConfig, index) {
      toolConfig.setConfigValue('uiOptions', originalUiOptions[index]);
    });
    Genai.Agent.Toolkit.forName(this.agentConfig.toolkitName).clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.QueryOrchestrator.DefaultConfig.clearConfigAndSecretOverride('APP');
    TestApi.teardown(this.ctx);
  });

  describe('throws an error if', function () {
    it('one of the tools in uiSelectableTools is not in the toolkit', function () {
      this.agentConfig.setConfigValue('uiSelectableTools', ['UnstructuredQueryTool_default', 'FakeTool']);
      this.setToolConfigUiOptions([
        { displayName: 'A', icon: 'A' },
        { displayName: 'B', icon: 'B' },
      ]);
      expect(() => {
        return this.agentConfig.uiMenuToolOptions();
      }).toThrowError(/Tool with id FakeTool not found in toolkit/);
    });

    it('one of the tools in uiSelectableTools does not have uiOptions set', function () {
      this.agentConfig.setConfigValue('uiSelectableTools', this.allToolIds);
      this.setToolConfigUiOptions([null, { displayName: 'B', icon: 'B' }]);
      expect(() => {
        return this.agentConfig.uiMenuToolOptions();
      }).toThrowError(
        /Tool with id EvalQuery_default does not have uiOptions set but is included in uiSelectableTools/
      );
    });
  });

  describe('returns the correct options when', function () {
    it('uiSelectableTools is empty', function () {
      this.agentConfig.setConfigValue('uiSelectableTools', []);
      expect(this.agentConfig.uiMenuToolOptions()).toEqual([]);
    });

    it('uiSelectableTools has all tools', function () {
      this.agentConfig.setConfigValue('uiSelectableTools', this.allToolIds);
      this.setToolConfigUiOptions([{ displayName: 'A', icon: 'A' }, { icon: 'B' }]);
      var uiToolOptions = this.agentConfig.uiMenuToolOptions();
      expect(uiToolOptions[0].toJsonString()).toEqual(
        JSON.stringify({
          displayName: 'A',
          displayDescription: originalUiOptions[0].displayDescription,
          displaySearchPlaceholder: originalUiOptions[0].displaySearchPlaceholder,
          icon: 'A',
          toolId: this.allToolIds[0],
          toolName: this.allToolNames[0],
          featureFlags: originalUiOptions[0].featureFlags,
        })
      );
      expect(uiToolOptions[1].toJsonString()).toEqual(
        JSON.stringify({
          displayName: originalUiOptions[1].displayName,
          displayDescription: originalUiOptions[1].displayDescription,
          displaySearchPlaceholder: originalUiOptions[1].displaySearchPlaceholder,
          icon: 'B',
          toolId: this.allToolIds[1],
          toolName: this.allToolNames[1],
        })
      );
    });

    it('uiSelectableTools has some tools', function () {
      this.agentConfig.setConfigValue('uiSelectableTools', this.allToolIds.slice(0, 2));
      this.setToolConfigUiOptions([{ icon: 'A' }, { displayName: 'B', icon: 'B' }]);
      var uiToolOptions = this.agentConfig.uiMenuToolOptions();
      expect(uiToolOptions[0].toJsonString()).toEqual(
        JSON.stringify({
          displayName: originalUiOptions[0].displayName,
          displayDescription: originalUiOptions[0].displayDescription,
          displaySearchPlaceholder: originalUiOptions[0].displaySearchPlaceholder,
          icon: 'A',
          toolId: this.allToolIds[0],
          toolName: this.allToolNames[0],
          featureFlags: originalUiOptions[0].featureFlags,
        })
      );
      expect(uiToolOptions[1].toJsonString()).toEqual(
        JSON.stringify({
          displayName: 'B',
          displayDescription: originalUiOptions[1].displayDescription,
          displaySearchPlaceholder: originalUiOptions[1].displaySearchPlaceholder,
          icon: 'B',
          toolId: this.allToolIds[1],
          toolName: this.allToolNames[1],
          featureFlags: originalUiOptions[1].featureFlags,
        })
      );
    });
  });

  describe('::hasUnstructuredQueryTool', function () {
    it('should return true if an unstructured query tool exists in the toolkit', function () {
      var toolExists = Genai.Agent.Toolkit.forName('QueryOrchestrator_default').hasUnstructuredQueryTool();
      expect(toolExists).toEqual(true);
    });

    it('should return false if an unstructured query tool does not exist in the toolkit', function () {
      var toolExists = Genai.Agent.Toolkit.forName('QueryOrchestrator_webSearch').hasUnstructuredQueryTool();
      expect(toolExists).toEqual(false);
    });
  });
});
