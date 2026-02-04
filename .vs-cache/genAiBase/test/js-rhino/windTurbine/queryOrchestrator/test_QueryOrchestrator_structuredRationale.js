/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_structuredRationale';

describe(filename, function () {
  beforeAll(function () {
    Genai.UnstructuredQuery.Engine.DefaultConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.QueryOrchestrator.DefaultConfig.setConfigValue(
      'queryOrchestratorConfigName',
      'QueryOrchestrator_default'
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
      doNotCreateRelations: true,
    }).setConfig();
    Genai.PyUtil.terminateAllEngines();
    TestApi.setOpenAiApiKey(); // Not actually used, but initializing the QO tries initializing the guide model
  });

  afterAll(function () {
    Genai.Agent.Config.make({
      name: Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').name,
    }).clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.QueryOrchestrator.DefaultConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.PyUtil.terminateAllEngines();
  });

  it('works for the default implementation of serializing the spec', function () {
    var toolName = Genai.Agent.Tool.DataRetriever.Config.forConfigKey('TestTool1').toolName;
    var initialResult = Genai.ChatBot.createInitialGenAiResult(
      'test query',
      Genai.Query.Type.QUERY,
      null,
      toolName
    );
    var response = Genai.Agent.QueryOrchestrator.chatQuery(initialResult).get('rationale');
    var tool = Genai.Agent.Tool.TestTool1.make({ id: 'TestTool1' });
    var expectedOutput = '\n```\n' + tool.structuredQuerySpec().toJsString() + '\n```\n';
    expect(response.rationale).withContext(response.get('engineLog').engineLog).toEqual(expectedOutput);
  });

  it('works for custom rationale', function () {
    var toolName = Genai.Agent.Tool.DataRetriever.Config.forConfigKey('TestTool2').toolName;
    var initialResult = Genai.ChatBot.createInitialGenAiResult(
      'test query',
      Genai.Query.Type.QUERY,
      null,
      toolName
    );
    var response = Genai.Agent.QueryOrchestrator.chatQuery(initialResult).get('rationale');
    var tool = Genai.Agent.Tool.TestTool2.make({ id: 'TestTool2' });
    expect(response.rationale)
      .withContext(response.get('engineLog').engineLog)
      .toEqual(tool.rationale('foo', { inProgressResult: initialResult }));
  });

  it('works for the default implementation of returning an empty string if there is no spec', function () {
    var toolName = Genai.Agent.Tool.DataRetriever.Config.forConfigKey('TestTool3').toolName;
    var initialResult = Genai.ChatBot.createInitialGenAiResult(
      'test query',
      Genai.Query.Type.QUERY,
      null,
      toolName
    );
    var response = Genai.Agent.QueryOrchestrator.chatQuery(initialResult).get('rationale');
    expect(C3.Str.isEmpty(response.rationale)).withContext(response.get('engineLog').engineLog).toBeTrue();
  });
});
