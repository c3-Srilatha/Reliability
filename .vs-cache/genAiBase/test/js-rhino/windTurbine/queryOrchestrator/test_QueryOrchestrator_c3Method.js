/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_c3Method';

// NOTE: more extensive testing of the C3Method tool is in test_tool_c3method.py

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.setOpenAiApiKey();
    Genai.PyUtil.terminateAllEngines();
    this.tool = Genai.Agent.Tool.C3Method.forId('Genai.Agent.Tool.C3Method.TestType_calculateInsuranceRate_0_test');
    this.toolConfig = this.tool.config();
    this.query = 'What is the insurance rate for a 42 year old woman living in Paris who earns $100,000 per year?';
    var toolkit = Genai.Agent.Toolkit.make({
      name: filename,
      tools: [{ id: this.tool.id }],
    });
    toolkit.setConfig();
    var qoConfig = Genai.Agent.Config.forConfigKey('QueryOrchestrator_default_test');
    qoConfig = qoConfig.withName(filename).withToolkitName(toolkit.name).withDoNotCreateRelations(true);
    qoConfig.setConfig();
    Genai.Agent.QueryOrchestrator.DefaultConfig.setConfigValue('queryOrchestratorConfigName', qoConfig.name);

    var toolId = this.tool.id;
    this.checkLogEntry = function (queryResult, checkSuccessfulKeys) {
      var logs = queryResult.parseEngineLog().parsedEngineLog;
      expect(logs).toBeDefined();
      expect(toolId in logs)
        .withContext('expected tool to have log entry')
        .toBe(true);
      var toolEntry = logs[toolId];
      if (checkSuccessfulKeys) {
        var expectedKeys = ['filledPrompt', 'generatedArgs', 'methodResult', 'toolOutput'];
        expect(Object.keys(toolEntry).sort()).withContext('expected log entry keys').toEqual(expectedKeys.sort());
      }

      return toolEntry;
    };
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.Agent.QueryOrchestrator.DefaultConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.PyUtil.terminateAllEngines();
  });

  describe('successful query', function () {
    beforeAll(function () {
      this.expectedResult = '{age: 42, income: 100000.0, livesInCity: true, numChildren: null}';
      this.queryResult = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
        searchQuery: Genai.Query.fromString(this.query).withTargetTool(this.toolConfig.toolName),
      }).get();

      this.queryResult = Genai.Agent.QueryOrchestrator.inst().chatQuery(this.queryResult).get('this');
    });

    it('should produce the expected result', function () {
      TestApi.checkResultSucceeded(this.queryResult);
      expect(this.queryResult.answer).toEqual(this.expectedResult);
    });

    it('has relevant logs', function () {
      this.checkLogEntry(this.queryResult, true);
    });

    it('has the correct statusHistory', function () {
      var statusHistory = this.queryResult.get('statusHistory.this').statusHistory;
      var expectedStatuses = [
        Genai.Query.Result.InterimStatusEnum.C3_METHOD_GENERATE_ARGS,
        Genai.Query.Result.InterimStatusEnum.C3_METHOD_INVOKE_METHOD,
        Genai.Query.Result.InterimStatusEnum.C3_METHOD_PROCESS_RESULT,
        Genai.Query.Result.InterimStatusEnum.GENERATE_ANSWER,
        Genai.Query.Result.InterimStatusEnum.COMPLETED,
      ];
      TestApi.checkInterimStatuses(statusHistory, expectedStatuses);
    });
  });

  describe('with an error', function () {
    beforeAll(function () {
      Genai.PyUtil.terminateAllEngines();
      this.toolConfig.setConfigValue(
        'generateArgsOverrideLambda',
        Lambda.fromPySrc('def foo(tool, prompt, inProgressResult):\n\traise RuntimeError("test error")')
      );
      this.queryResult = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
        searchQuery: Genai.Query.fromString(this.query).withTargetTool(this.toolConfig.toolName),
      }).get();
      this.queryResult = Genai.Agent.QueryOrchestrator.inst().chatQuery(this.queryResult).get('this');
    });

    afterAll(function () {
      this.toolConfig.clearConfigValue('generateArgsOverrideLambda');
    });

    it('should fail', function () {
      expect(this.queryResult.failed).toBe(true);
      expect(this.queryResult.answer).toEqual(
        Translation.getTranslationForLocale('EnterpriseSearch.ErrorMessage.UnableToAnswer', 'en')
      );
    });

    it('should have a relevant error log', function () {
      var logEntry = this.checkLogEntry(this.queryResult, false);
      expect('error' in logEntry)
        .withContext('should have an error key')
        .toBe(true);
      expect(logEntry.error).toContain("Error in step 'generateArgs' of C3Method tool " + this.tool.id);
      expect(logEntry.error).toContain('RuntimeError: test error');

      expect('filledPrompt' in logEntry)
        .withContext('should maintain logs for successful steps')
        .toBe(true);
    });
  });
});
