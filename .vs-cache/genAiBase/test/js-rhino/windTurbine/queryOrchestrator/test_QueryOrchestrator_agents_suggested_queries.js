/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_agents_suggested_queries';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.setOpenAiApiKey();
    TestApi.ensureDefaultProjectExists();

    this.defaultProject = Genai.Project.forId('default');
    this.defaultProjectQoConfigName = this.defaultProject.queryOrchestratorConfigName;
    this.defaultProjectQoConfig = Genai.Agent.Config.forConfigKey(this.defaultProjectQoConfigName);
    this.defaultProjectQoConfig.setConfigValue('enableFollowUpSuggestions', true);

    // Stop handlers to reflect change in the query orchestrator config
    Genai.Agent.QueryOrchestrator.stopAllHandlers();

    this.queryPairResults = [
      [
        ['How are you?', 'I am fine.'],
        ['What is your name?', 'My name is AI.'],
      ],
      [
        ['What is the capital of France?', 'The capital of France is Paris.'],
        ['What is the capital of Germany?', 'The capital of Germany is Berlin.'],
      ],
    ];
  });

  afterAll(function () {
    this.defaultProjectQoConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  describe('suggested queries', function () {
    beforeAll(function () {
      this.queryPairResults = TestApi.setUpQueryResultPairs(this.queryPairResults, this.defaultProject);

      // Wait for merge batch to complete
      TestApi.waitForSetup(this.ctx, null, 1, 60);
    });

    afterAll(function () {
      TestApi.tearDownQueryResultPairs(this.queryPairResults);
    });

    describe('when querying', function () {
      beforeAll(function () {
        this.query = 'How are you?';
        this.executeSpec = Genai.Query.ExecuteSpec.make({ agent: 'default' });
        this.searchQuery = Genai.Query.fromString(this.query).withExecuteSpec(this.executeSpec);
        this.queryResult = Genai.Query.Result.make({ searchQuery: this.searchQuery }).upsert();
        this.queryResult = Genai.Agent.QueryOrchestrator.forConfigKey(this.defaultProjectQoConfigName).query(
          this.queryResult
        );
      });

      afterAll(function () {
        this.queryResult.remove();
      });

      it('an entry for suggested queries should be added in the engine log', function () {
        this.engineLog = this.queryResult.getMissing({ include: 'engineLog' }).engineLog;
        expect(this.engineLog).toContain('SuggestedFollowUpQueries');
      });

      it('the result served to the UI should contain the suggested follow up queries', function () {
        this.getForUiResult = this.queryResult.getForUi();
        this.suggestedFollowUpQueries = this.getForUiResult.headResult.suggestedFollowUpQueries;
        expect(this.suggestedFollowUpQueries.length).toBeGreaterThan(0);
      });
    });
  });
});
