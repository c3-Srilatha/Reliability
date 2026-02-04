/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_unstructuredTool';

describe(filename, function () {
  beforeAll(function () {
    TestApi.setOpenAiApiKey();
    this.ctx = TestApi.createContext(filename);
    this.queryOrchestrator = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default');

    Genai.Agent.Tool.UnstructuredDataQuery.Config.forConfigKey('UnstructuredQueryTool_default')
      .withConfigName('alabamaBond')
      .setConfig();

    Genai.Agent.Tool.UnstructuredDataQuery.Config.forConfigKey('UnstructuredQueryTool_experimental')
      .withConfigName('worldFacts')
      .setConfig();

    this.queries = [
      'According to our documents who is the Chairman of the Board of Issuers?',
      'What is the capital of India?',
    ];
    this.resultForQuery = function (query, targetTool) {
      return TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
        searchQuery: Genai.Query.fromString(query).withTargetTool(targetTool),
      }).get();
    };

    this.checkResult = function (result, expectedAnswers) {
      result = result.get();
      TestApi.checkResultSucceeded(result);
      TestApi.checkStringMatches(result.answer.toLowerCase(), expectedAnswers, false, result.engineLog);
    };

    this.queryOrchestrator.config().setConfigValue('toolkitName', 'QueryOrchestrator_unstructuredOnly_multiple');
    Py.closeAllPy4jInterpreters();
    this.queryOrchestrator.initialize();
  });

  afterAll(function () {
    Genai.Agent.Tool.UnstructuredDataQuery.Config.forConfigKey(
      'UnstructuredQueryTool_default'
    ).clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.Tool.UnstructuredDataQuery.Config.forConfigKey(
      'UnstructuredQueryTool_experimental'
    ).clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    this.queryOrchestrator.config().clearConfigAndSecretOverride(ConfigOverride.APP);
    Py.closeAllPy4jInterpreters();
  });

  describe('query using first unstructured tool', function () {
    it('returns valid results', function () {
      var queryResult = this.resultForQuery(this.queries[0], 'documentQuestionAnswer()');
      queryResult = this.queryOrchestrator.chatQuery(queryResult);
      this.checkResult(queryResult, ['robert l. smith', 'robert smith']);
    });
  });

  describe('query using second unstructured tool', function () {
    it('returns valid results', function () {
      var queryResult = this.resultForQuery(this.queries[1], 'documentQuestionAnswerExp()');
      queryResult = this.queryOrchestrator.chatQuery(queryResult);
      this.checkResult(queryResult, ['delhi']);
    });
  });
});
