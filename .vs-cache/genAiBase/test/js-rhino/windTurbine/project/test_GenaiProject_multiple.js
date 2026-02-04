/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiProject_multiple';
var utaStr = Translation.getTranslationForLocale('EnterpriseSearch.ErrorMessage.UnableToAnswer', 'en');
var utaStructuredStr = Translation.getTranslationForLocale('EnterpriseSearch.Tool.DefaultInvalidQueryAnswer', 'en');
var testObjs = {
  documentQuestionAnswer: [
    {
      query: 'What is the purpose of the bond?',
      expectedAnswers: ['acquisition', 'rehabilitation', 'installation', 'multi-family residential project'],
      targetTool: 'documentQuestionAnswer()',
    },
    {
      query: 'What is the capital of India?',
      expectedAnswers: ['Delhi'],
      targetTool: 'documentQuestionAnswer()',
    },
    {
      query: 'What is an ml pipeline?',
      expectedAnswers: ['machine learning', 'model', 'pipe'],
      targetTool: 'documentQuestionAnswer()',
    },
  ],
  relationalDatabaseQuery: [
    {
      query: 'How many Aircrafts are in Sn Francisco according to our database?',
      expectedAnswers: ['25'],
      targetTool: 'relationalDatabaseQuery()',
    },
    {
      query: 'Where are my windTurbines located?',
      expectedAnswers: ['latitude', 'longitude'],
      targetTool: 'relationalDatabaseQuery()',
    },
  ],
};

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    // TODO: GEN-7055 Merge data model graphs and set FuzzyMatcher accordingly
    Genai.PyUtil.terminateAllEngines();
    TestApi.setOpenAiApiKey();
    TestApi.setMisConfig();

    var readinessGraph = TestApi.upsertReadinessDataModelGraph();
    TestApi.upsertDefaultEvalSpecGenerationPrompt();
    TestApi.upsertDefaultEvalSpecCorrectionPrompt();
    var defaultUnstructuredToolConfig = Genai.Agent.Tool.UnstructuredDataQuery.Config.forConfigKey(
      'UnstructuredQueryTool_default'
    );
    var defaultEvalToolConfig = Genai.Agent.Tool.EvalQuery.Config.forConfigKey('EvalQuery_default');

    Genai.UnstructuredQuery.Engine.REA.ContextualQaConfig.forConfigKey('qa_config').setConfigValue(
      'modelInferenceConfigName',
      'qa_inference_config_gpt4o'
    );

    // Project 1 - Unstructured tool
    var project1 = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'default_1_' + filename,
      chunkerConfig: 'default',
      projectType: 'production',
      queryOrchestratorConfigName: 'QueryOrchestrator_default_test_project_1',
      handlerTypeName: 'Genai.Agent.QueryOrchestrator',
    });
    Genai.UnstructuredQuery.Engine.Config.forConfigKey('alabamaBond')
      .withName('multi_project_alabamaBond')
      .withVectorStore(TestApi.pgVectorRetrieverForTestDataset('alabamaBond'))
      .setConfig();
    defaultUnstructuredToolConfig
      .withId('UnstructuredQueryTool_default_test_project_1')
      .withConfigName('multi_project_alabamaBond') // Should override the pipeline config in the tool
      .setConfig();

    // EvalQuery
    defaultEvalToolConfig
      .withId('EvalQuery_default_test_project_1')
      .withDataModelGraph(readinessGraph)
      .withFuzzyMatcherSpec({
        name: 'EvalQuery_default_test_project_1_fuzzy_matcher',
        techniqueKwargs: {
          lower_case_fuzzy_matched_fields: false,
        },
      })
      .withSpecGenerationModelSpec(
        defaultEvalToolConfig.specGenerationModelSpec.withTemplatePrompt({
          id: 'test_eval_spec_generation_prompt',
        })
      )
      .withTableAnsweringModelSpec(defaultEvalToolConfig.tableAnsweringModelSpec.withLlmModelName('azureGpt4o'))
      .setConfig();

    // Project 2 - Unstructured tool
    var project2 = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'default_2_' + filename,
      chunkerConfig: 'default',
      projectType: 'production',
      queryOrchestratorConfigName: 'QueryOrchestrator_default_test_project_2',
      handlerTypeName: 'Genai.Agent.QueryOrchestrator',
    });
    Genai.UnstructuredQuery.Engine.Config.forConfigKey('worldFacts')
      .withName('multi_project_worldFacts')
      .withVectorStore(TestApi.pgVectorRetrieverForTestDataset('worldFacts'))
      .setConfig();
    defaultUnstructuredToolConfig
      .withId('UnstructuredQueryTool_default_test_project_2')
      .withConfigName('multi_project_worldFacts') // Should override the pipeline config in the tool
      .setConfig();

    // EvalQuery
    var windturbineGraph = TestApi.upsertWindTurbineDataModelGraph();
    defaultEvalToolConfig
      .withId('EvalQuery_default_test_project_2')
      .withDataModelGraph(windturbineGraph)
      .withFuzzyMatcherSpec({
        name: 'EvalQuery_default_test_project_2_fuzzy_matcher',
        techniqueKwargs: {
          lower_case_fuzzy_matched_fields: false,
        },
      })
      .withSpecGenerationModelSpec(
        defaultEvalToolConfig.specGenerationModelSpec.withTemplatePrompt({
          id: 'test_eval_spec_generation_prompt',
        })
      )
      .withTableAnsweringModelSpec(defaultEvalToolConfig.tableAnsweringModelSpec.withLlmModelName('azureGpt4o'))
      .setConfig();

    // Project 3 - Unstructured tool
    var project3PipelineConfig = Genai.UnstructuredQuery.Engine.Config.forConfigKey('alabamaBond');
    var c3DocRetriever = TestApi.pgVectorRetrieverForTestDataset('c3DocumentationV6');
    project3PipelineConfig = project3PipelineConfig.withName('default_3_' + filename).withVectorStore(c3DocRetriever);
    project3PipelineConfig.setConfig();
    project3 = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'default_3_' + filename,
      chunkerConfig: 'default',
      handlerTypeName: 'Genai.UnstructuredQuery.Engine',
      unstructuredQueryEngineConfigName: project3PipelineConfig.name,
      retriever: c3DocRetriever,
    });

    this.executeQuery = function (testObj, project) {
      var result = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
        searchQuery: Genai.Query.fromString(testObj.query).withTargetTool(testObj.targetTool),
      });
      result = project.handler().chatQuery(result);
      return result;
    };
    this.projects = [project1, project2, project3];

    this.pgVectors = ['alabamaBond-pgVector', 'worldFacts-pgVector', 'c3DocumentationV6-pgVector'];
    this.pgVectors.forEach(function (pgVector) {
      Genai.Retriever.PgVector.forId(pgVector).initialize();
    });
  });

  afterAll(function () {
    Genai.UnstructuredQuery.Engine.REA.ContextualQaConfig.forConfigKey('qa_config').clearConfigAndSecretOverride(
      ConfigOverride.APP
    );
    Genai.StructuredData.DataModelGraph.forName('readiness_test_data_model_graph').remove();
    Genai.StructuredData.DataModelGraph.forName('wind_turbine_test_data_model_graph').remove();
    Genai.Agent.Tool.UnstructuredDataQuery.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.Tool.EvalQuery.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    TestApi.cleanPgVectorRetrieverForTestDataset('alabamaBond');
    TestApi.cleanPgVectorRetrieverForTestDataset('worldFacts');
    TestApi.cleanPgVectorRetrieverForTestDataset('c3DocumentationV6');
    TestApi.waitForSetup(this.ctx, null, 1, 60);
    TestApi.teardown(this.ctx);
    Genai.UnstructuredQuery.Engine.stopAllHandlers();
    GenaiCore.Embedder.Engine.list().each((embedderEngine) => {
      embedderEngine.terminate();
    });
    Py.closeAllPy4jInterpreters();
    Genai.PyUtil.terminateAllEngines();
  });

  describe('documentQuestionAnswer()', function () {
    testObjs.documentQuestionAnswer.forEach(function (testObj, index) {
      it('project ' + (index + 1) + ' answers correctly', function () {
        var result = this.executeQuery(testObj, this.projects[index]);
        if (result.failed) {
          fail(result.get('engineLog').engineLog);
        }
        TestApi.checkStringMatches(result.answer, testObj.expectedAnswers);
      });

      it('project ' + (((index + 2) % 3) + 1) + ' does not answer a question for a different project', function () {
        var result = this.executeQuery(testObj, this.projects[(index + 1) % 3]);
        expect(result.answer).toEqual(utaStr);
      });
    });
  });

  describe('relationalDatabaseQuery()', function () {
    testObjs.relationalDatabaseQuery.forEach(function (testObj, index) {
      it('project ' + (index + 1) + ' answers correctly', function () {
        var result = this.executeQuery(testObj, this.projects[index]);
        if (result.failed) {
          fail(result.get('engineLog').engineLog);
        }
        TestApi.checkStringMatches(result.answer, testObj.expectedAnswers);
      });

      it('project ' + (((index + 2) % 3) + 1) + ' does not answer a question for a different project', function () {
        var result = this.executeQuery(testObj, this.projects[(index + 1) % 3]);
        TestApi.checkStringMatches(result.answer, [utaStr, utaStructuredStr], false, result.get('engineLog').engineLog);
      });
    });
  });
});
