/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_planner';

function getAllResults(queryResult) {
  queryResult = queryResult.get('this, childResults');
  let allResults = [queryResult];
  if (queryResult.childResults && queryResult.childResults.length > 0) {
    _.each(queryResult.childResults, (child) => {
      allResults = allResults.concat(getAllResults(child));
    });
  }

  return allResults;
}

function removeAllResults(queryResult) {
  const allResults = getAllResults(queryResult);
  Genai.Query.Result.removeBatch(allResults);
}

xdescribe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.setOpenAiApiKey();
    TestApi.setGcpKey();
    TestApi.setMisConfig();
    this.chatBotConfig = Genai.ChatBot.Config.getConfig();
    Genai.ChatBot.Config.setConfigValue('handlerTypeName', 'Genai.Agent.QueryOrchestrator');

    this.queryOrchestrator = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default_test');
    this.planner = this.queryOrchestrator.config().planners[0];

    var configName = 'alabamaBond';
    this.unstructuredToolConfig = Genai.Agent.Tool.UnstructuredDataQuery.Config.forConfigKey(
      'UnstructuredQueryTool_default'
    );
    this.unstructuredToolConfig.setConfigValue('configName', configName);

    TestApi.setTestToolConfigs();

    this.evalQueryToolConfig = Genai.Agent.Tool.EvalQuery.Config.inst().getConfig();

    var updatedTableAnsweringModelSpec = Genai.Agent.Tool.EvalQuery.Config.inst()
      .getConfig()
      .tableAnsweringModelSpec.withLlmModelName('azureGpt4o')
      .withNumExamplesForTypeAndFieldDoc(2)
      .withIncludeValueType(true);
    Genai.Agent.Tool.EvalQuery.Config.inst().withTableAnsweringModelSpec(updatedTableAnsweringModelSpec).setConfig();

    this.evalQueryToolConfig.setConfigValue(
      'specGenerationModelSpec',
      this.evalQueryToolConfig.specGenerationModelSpec.withLlmModelNameReflexionAgent('azureGpt4o')
    );

    this.evalQueryToolConfig.setConfigValue(
      'specProcessorSpec',
      this.evalQueryToolConfig.specProcessorSpec.withLlmModelNameReflexionAgent('azureGpt4o')
    );

    this.structuredDataQueryPyConfig = Genai.Agent.Tool.StructuredDataQueryPy.Config.forConfigKey(
      'StructuredDataQueryPy_default_test'
    ).getConfig();
    this.structuredDataQueryPyConfig.setConfigValue(
      'initializationSpec',
      this.structuredDataQueryPyConfig.initializationSpec.withLlmConfigName('azureGpt4o')
    );

    this.staticPlannerAgent = Genai.Agent.StaticPlanner.make({ name: 'StaticPlanner_default' });
    this.staticPlannerAgentConfig = this.staticPlannerAgent.config();
    this.mssConfig = Genai.Agent.Tool.MultiSourceSynthesizer.Config.forConfigKey('MultiSourceSynthesizer_default_test');
    this.mssConfig.setConfigValue('llmModelName', 'azureGpt4o');
    this.staticPlannerAgent.config().setConfigValue('tools', [
      {
        id: 'FinalAnswerTool_default',
      },
      {
        id: 'MultiSourceSynthesizer_default_test',
      },
    ]);
    this.staticPlannerAgent.config().setConfigValue('llmConfigName', 'azureGpt4o');
    this.finalAnswerToolConfig = Genai.Agent.Tool.FinalAnswer.Config.forConfigKey('FinalAnswerTool_default');
    this.finalAnswerToolConfig.setConfigValue('llmConfigName', 'azureGpt4o');

    this.checkPlan = function (plan, expectedTools, expectedSteps, expectedToolNames) {
      expect(plan).withContext('Plan should not be null').not.toBeNull();
      var steps = _.orderBy(plan.steps, 'stepId');
      expect(plan.tools.length).withContext(`Plan should have exactly ${expectedTools} tools`).toBe(expectedTools);
      expect(steps.length).withContext(`Plan should have exactly ${expectedSteps} steps`).toBe(expectedSteps);
      _.forEach(steps, (step, index) => {
        expect(step.toolName)
          .withContext(`Step[${index}] should use ${expectedToolNames[index]}`)
          .toBe(expectedToolNames[index]);
      });
    };

    this.checkExecutedPlanResults = function (plan, queryResult, expectedAnswers) {
      queryResult = queryResult.get('this');
      TestApi.checkResultSucceeded(queryResult);
      if (queryResult.answer) {
        TestApi.checkStringMatches(queryResult.answer, expectedAnswers);
      } else {
        fail('Query result should have an answer');
      }
      var steps = plan.get('steps').steps;
      expect(steps.length).withContext('Plan should have exactly 3 steps').toBe(3);

      const checkStepResult = (step, expectedAnswers) => {
        expect(step.status).withContext('Step status should be "Completed"').toBe('Completed');
        expect(step.logs).withContext('Step logs should not be null').not.toBeNull();
        TestApi.checkStringMatches(step.output, expectedAnswers);
      };

      checkStepResult(steps[0], ['Robert L. Smith', 'chairman']);
      checkStepResult(steps[1], ['25', 'San Francisco', 'aircraft']);
      checkStepResult(steps[2], ['Robert L. Smith', '25', 'San Francisco', 'chairman', 'aircraft']);
    };
    Genai.PyUtil.terminateAllEngines();

    this.makeQueryResult = function (query) {
      return Genai.ChatBot.createInitialGenAiResult(query, 'query', {}, false, undefined, this.planner);
    };
  });

  afterAll(function () {
    this.chatBotConfig.setConfig();
    this.unstructuredToolConfig.setConfig();
    this.evalQueryToolConfig.setConfig();
    this.staticPlannerAgentConfig.setConfig();
    this.mssConfig.setConfig();
    this.finalAnswerToolConfig.setConfig();
    this.structuredDataQueryPyConfig.setConfig();
  });

  ['MultiSourceSynthesizer_default_test', 'MultiSourceSynthesizer_c3po_test'].forEach((mssToolkitName) => {
    describe(`with ${mssToolkitName} toolkit`, function () {
      beforeAll(function () {
        this.mssConfig.setConfigValue('toolkitName', mssToolkitName);
        var query =
          'Who is the chairman of the board of the issuers and how many Aircrafts are in Sn Francisco according to our database?';
        this.queryResult = this.makeQueryResult(query);
        Genai.PyUtil.terminateAllEngines();
      });

      afterAll(function () {
        removeAllResults(this.queryResult);
        this.mssConfig.setConfigValue('toolkitName', 'MultiSourceSynthesizer_default_test');
      });

      it('Genai.ChatBot#query generates a plan', function () {
        this.queryResult = Genai.ChatBot.query(this.queryResult).get('plan.this');
        this.checkPlan(this.queryResult.plan, 2, 3, [
          'information_retrieval_tool',
          'information_retrieval_tool',
          'final_answer',
        ]);
      });

      it('Genai.ChatBot#executePlan returns final answer', function () {
        var plan = this.queryResult.get('plan').plan;
        this.queryResult = Genai.ChatBot.executePlan(plan);
        this.checkExecutedPlanResults(plan, this.queryResult, [
          'Robert L. Smith',
          '25',
          'San Francisco',
          'chairman',
          'aircraft',
        ]);
      });
    });
  });

  describe('with a spanish query', function () {
    beforeAll(function () {
      Genai.Translator.Config.setConfigValue('enabled', true);
      Genai.PyUtil.terminateAllEngines();
      var query =
        '¿Quién es el presidente del directorio de los emisores y cuántas aeronaves hay en San Francisco según nuestra base de datos?';
      this.queryResult = this.makeQueryResult(query);
    });

    afterAll(function () {
      removeAllResults(this.queryResult);
      Genai.Translator.Config.clearConfigAndSecretOverride('APP');
    });

    it('Genai.ChatBot#query generates a plan', function () {
      this.queryResult = Genai.ChatBot.query(this.queryResult).get('plan.this');
      this.checkPlan(this.queryResult.plan, 2, 3, [
        'information_retrieval_tool',
        'information_retrieval_tool',
        'final_answer',
      ]);
    });

    it('Genai.ChatBot#executePlan returns final answer', function () {
      var plan = this.queryResult.get('plan').plan;
      this.queryResult = Genai.ChatBot.executePlan(plan);
      this.checkExecutedPlanResults(plan, this.queryResult, ['Robert L. Smith', 'presidente', '25', 'aviones']);
    });
  });

  describe('with only unstructured query', function () {
    beforeAll(function () {
      Genai.PyUtil.terminateAllEngines();
      var query = 'Who is Robert?';
      this.queryResult = this.makeQueryResult(query);
    });

    afterAll(function () {
      removeAllResults(this.queryResult);
      Genai.Translator.Config.clearConfigAndSecretOverride('APP');
    });

    it('Genai.ChatBot#query generates a plan', function () {
      this.queryResult = Genai.ChatBot.query(this.queryResult).get('plan.this');
      this.checkPlan(this.queryResult.plan, 2, 2, ['information_retrieval_tool', 'final_answer']);
    });

    it('Genai.ChatBot#executePlan returns final answer', function () {
      var plan = this.queryResult.get('plan').plan;
      this.queryResult = Genai.ChatBot.executePlan(plan);
      TestApi.checkStringMatches(this.queryResult.get('answer').answer, ['chairman']);
    });
  });

  describe('with irrelevant query', function () {
    beforeAll(function () {
      Genai.PyUtil.terminateAllEngines();
      var query = 'Who is Batman?';
      this.queryResult = this.makeQueryResult(query);
    });

    afterAll(function () {
      removeAllResults(this.queryResult);
      Genai.Translator.Config.clearConfigAndSecretOverride('APP');
    });

    it('Genai.ChatBot#query generates a plan', function () {
      this.queryResult = Genai.ChatBot.query(this.queryResult).get('plan.this');
      this.checkPlan(this.queryResult.plan, 2, 2, ['information_retrieval_tool', 'final_answer']);
    });

    it('Genai.ChatBot#executePlan returns final answer', function () {
      var plan = this.queryResult.get('plan').plan;
      this.queryResult = Genai.ChatBot.executePlan(plan).get();
      expect(this.queryResult.failed).toBeFalsy();
      expect(this.queryResult.answer).toEqual(
        Translation.getTranslationForLocale('EnterpriseSearch.ErrorMessage.UnableToAnswer', 'en')
      );
    });
  });

  describe('with only a structured query', function () {
    beforeAll(function () {
      Genai.PyUtil.terminateAllEngines();
      var query = 'How many aircrafts are in San Francisco?';
      this.queryResult = this.makeQueryResult(query);
    });

    afterAll(function () {
      removeAllResults(this.queryResult);
    });

    it('Genai.ChatBot#query generates a plan', function () {
      this.queryResult = Genai.ChatBot.query(this.queryResult).get('plan.this');
      this.checkPlan(this.queryResult.plan, 2, 2, ['information_retrieval_tool', 'final_answer']);
    });

    it('Genai.ChatBot#executePlan returns final answer', function () {
      var plan = this.queryResult.get('plan').plan;
      this.queryResult = Genai.ChatBot.executePlan(plan);
      TestApi.checkStringMatches(this.queryResult.get('answer').answer, ['25']);
    });
  });
});
