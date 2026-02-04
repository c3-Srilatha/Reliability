/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_multipleStructuredTools';
var testObjs;

describe(filename, function () {
  testObjs = [
    {
      query: 'What city is aircraft with id "x-39" located in?', // Purposefully wrong format so uses fuzzy matcher
      tool: 'relationalDatabaseQuery()',
      expectedAnswers: ['Madrid'],
    },
    {
      query: 'What turbines have "cooridnates.id" field of Sacremntoo', // Purposefully mispelled so uses fuzzy matcher
      tool: 'relationalDatabaseQuery2()',
      expectedAnswers: ['TURBINE-11'],
    },
  ];

  beforeAll(function () {
    this.setupRes = TestApi.setUpQueryOrchestratorTest(filename, testObjs);
    this.ctx = this.setupRes.ctx;
    this.queryOrchestratorCfg = Genai.Agent.Config.forConfigKey('QueryOrchestrator_default');

    // Configure second structured db agent with different data model graph
    const tool2Id = 'StructuredDataQueryPy_default_test_2';

    var tool1Cfg = Genai.Agent.Tool.StructuredDataQueryPy.Config.forConfigKey('StructuredDataQueryPy_default_test');
    var tool1InitSpec = tool1Cfg.initializationSpec;

    this.windTurbineDataModelGraph = TestApi.upsertWindTurbineDataModelGraph();

    var windTurbineFuzzyMatcherSpec = tool1InitSpec.fuzzyMatcherSpec
      .withDataModelGraph(this.windTurbineDataModelGraph)
      .withName('windTurbine');

    var tool2InitializationSpec = tool1InitSpec.withFields({
      dataModelGraph: this.windTurbineDataModelGraph,
      fuzzyMatcherSpec: windTurbineFuzzyMatcherSpec,
    });

    this.tool2Cfg = tool1Cfg.withFields({
      id: tool2Id,
      toolName: 'relationalDatabaseQuery2()',
      initializationSpec: tool2InitializationSpec,
    });
    this.tool2Cfg.setConfig();

    var toolkit = Genai.Agent.Toolkit.forName(this.queryOrchestratorCfg.toolkitName);
    var updatedTools = toolkit.tools.withAll([{ id: tool2Id }]);
    toolkit.withTools(updatedTools).setConfig();

    var updatedUiSelectableTools = this.queryOrchestratorCfg.uiSelectableTools.withAll([tool2Id]);
    this.queryOrchestratorCfg.withUiSelectableTools(updatedUiSelectableTools).setConfig();
    Genai.Agent.QueryOrchestrator.stopAllHandlers();
  });

  afterAll(function () {
    TestApi.tearDownQueryOrchestratorTest(this.setupRes);
    this.tool2Cfg.clearConfigAndSecretOverride(ConfigOverride.APP);
    this.windTurbineDataModelGraph.remove();
  });

  testObjs.forEach(function (testObj) {
    describe(testObj.tool, function () {
      beforeAll(function () {
        var queryRes = Genai.Query.Result.fetch({
          filter: Filter.eq('searchQuery.rawQuery', testObj.query),
          limit: 1,
        }).first();
        this.genAiResult = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default')
          .chatQuery(queryRes)
          .get('engineLog,answer');
      });

      it('uses the correct format data prompt', function () {
        TestApi.checkStringMatches(this.genAiResult.answer, testObj.expectedAnswers, false, this.genAiResult.engineLog);
      });

      afterAll(function () {
        this.genAiResult.remove();
      });
    });
  });
});
