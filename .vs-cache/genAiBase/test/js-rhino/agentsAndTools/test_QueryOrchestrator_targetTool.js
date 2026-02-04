/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_targetTool';

describe(filename, function () {
  beforeAll(function () {
    Genai.UnstructuredQuery.Engine.DefaultConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.QueryOrchestrator.DefaultConfig.setConfigValue(
      'queryOrchestratorConfigName',
      'QueryOrchestrator_default'
    );
    Genai.UnstructuredQuery.Engine.Config.inst().setConfigValue(
      'vectorStore',
      Genai.Retriever.Dense.forName('alabamaBond-dense')
    );

    Genai.Agent.Config.make({
      name: Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').name,
      toolkitName: 'TestToolkit4',
      llmConfigName: 'default_orchestrator_model',
      promptConfigName: 'QueryOrchestrator_default',
      finalAnswerToolId: 'UtilTool_Finish',
      idkToolId: 'UtilTool_Idk',
      maxSteps: 0,
      freezeActionInputs: true,
      disableLogitBias: false,
      defaultToolName: 'submitFinalAnswer()',
      uiSelectableTools: ['TestTool1', 'TestTool2', 'TestTool3'],
    }).setConfig();
    Genai.PyUtil.terminateAllEngines();
    TestApi.setOpenAiApiKey();
  });

  afterAll(function () {
    Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.QueryOrchestrator.DefaultConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.PyUtil.terminateAllEngines();
  });

  _.each(['TestTool1', 'TestTool2', 'TestTool3'], function (toolId) {
    it('works when setting targetTool to ' + toolId, function () {
      var toolName = Genai.Agent.Tool.DataRetriever.Config.forConfigKey(toolId).toolName;
      var initialResult = Genai.ChatBot.createInitialGenAiResult(
        'test query',
        Genai.Query.Type.QUERY,
        null,
        toolName
      );
      var response = Genai.Agent.QueryOrchestrator.chatQuery(initialResult);
      expect(response.answer)
        .withContext('unexpected answer: ' + response.get('engineLog').engineLog)
        .toEqual(toolId + ' echoing test query');
    });
  });
});
