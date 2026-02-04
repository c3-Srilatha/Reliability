/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_singleHop_c3po_gpt4o';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 60 * 1000;

describe(filename, function () {
  beforeAll(function () {
    this.testObj = {
      tool: 'StructuredDataQueryPy',
      query: 'Where are the aircrafts located?',
      expectedAnswers: ['100', 'aircraft'],
    };
    Genai.PyUtil.terminateAllEngines();
    this.setupRes = TestApi.setUpQueryOrchestratorTest(filename);
    this.queryOrchestrator = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default');
    this.queryOrchestrator.config().withToolkitName('QueryOrchestrator_mss_c3po_test').setConfig();
    this.structuredDataQueryPyConfig = Genai.Agent.Tool.StructuredDataQueryPy.Config.forConfigKey(
      'StructuredDataQueryPy_default_test'
    ).getConfig();
    this.structuredDataQueryPyConfig.setConfigValue(
      'initializationSpec',
      this.structuredDataQueryPyConfig.initializationSpec.withLlmConfigName('azureGpt4o')
    );
    this.queryOrchestrator.ensureInitialized(true);

    this.inProgressResult = Genai.Query.Result.make({
      searchQuery: Genai.Query.fromString(this.testObj.query)
        .withTargetTool('relationalDatabaseQuery()')
        .withDetectedLanguage('en'),
    }).upsert();
    this.result = this.queryOrchestrator.chatQuery(this.inProgressResult).get('this, engineLog');
  });

  it('should return the expected answers', function () {
    TestApi.checkStringMatches(this.result.answer, this.testObj.expectedAnswers, false, this.result.engineLog);
  });

  it('should return the expected visualization', function () {
    expect(this.result.allSources().length).toEqual(1);
  });

  afterAll(function () {
    this.result.remove();
    this.structuredDataQueryPyConfig.setConfig();
    TestApi.tearDownQueryOrchestratorTest(this.setupRes);
  });
});
