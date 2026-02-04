/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiUnstructuredQueryEngineModelConfig';

describe(filename, function () {
  beforeAll(function () {
    TestApi.setGcpKey();
    TestApi.setAwsBedrockKeys();
    TestApi.setOpenAiApiKey();
    TestApi.setMockLlmConfigPath(filename);
    this.geminiModelConfig = Genai.UnstructuredQuery.Engine.ModelConfig.forConfigKey('gemini_flash_2_0');
    this.bedrockModelConfig = Genai.UnstructuredQuery.Engine.ModelConfig.forConfigKey('awsBedrock_claude_v3_5_sonnet');
    this.gptModelConfig = Genai.UnstructuredQuery.Engine.ModelConfig.forConfigKey('azureGpt4o_mini');
    this.messages1 = [
      {
        role: 'user',
        content: 'provide and execute code to add 100 + 200',
      },
    ];
    this.messages2 = [
      {
        role: 'user',
        content: 'count to 5',
      },
      {
        role: 'assistant',
        content: '1,2,3,4,5',
      },
      {
        role: 'user',
        content: 'count 5 more from where you left off',
      },
    ];
    this.totalConfigs = Genai.UnstructuredQuery.Engine.ModelConfig.listConfigs()
      .collect()
      .filter((model) => {
        return model.llmType !== 'Vllm' && model.llmType !== 'Mis';
      }).length;

    Py.closeAllPy4jInterpreters();
  });

  function testGenerateText(modelName, getModelConfig) {
    describe('generateText with ' + modelName, function () {
      it('gives valid output with prompt of type `string`', function () {
        var output = getModelConfig.call(this).generateText({ prompt: 'Count from 1 to 10.' });
        expect(output).toContain('10');
      });

      it('gives valid output with prompt of type `Genai Prompt` with params', function () {
        var prompt = Genai.Prompt.fromString('What is 1 + 4 and also calculate {{param1}} * {{param2}}').setParams({
          param1: 2,
          param2: 3,
        });
        var output = getModelConfig.call(this).generateText({ prompt: prompt });
        expect(output).toContain('5');
        expect(output).toContain('6');
      });

      it('gives valid output when passing messages and no prompt param', function () {
        var output = getModelConfig.call(this).generateText({ messages: this.messages1 });
        expect(output).toContain('300');
      });

      it('does not create strings with the provided stop sequence', function () {
        var stopValue = '5';
        var output = getModelConfig.call(this).generateText({
          prompt: 'Count from 1 to 10.',
          stop_sequences: [stopValue],
        });
        expect(output).not.toContain(stopValue);
      });

      it('handles complex message-based conversations', function () {
        var output = getModelConfig.call(this).generateText({ messages: this.messages2 });
        expect(output).toContain('7');
      });
    });
  }

  // Run test suites for each model
  testGenerateText('Gemini', function () {
    return this.geminiModelConfig;
  });
  testGenerateText('Bedrock', function () {
    return this.bedrockModelConfig;
  });
  testGenerateText('GPT', function () {
    return this.gptModelConfig;
  });

  // GEN-10971 disabled until this works from an Azure cluster as well
  xdescribe('generateTextBatch', function () {
    beforeAll(function () {
      this.job = this.geminiModelConfig.generateTextBatch({
        prompts: ['Count from 1 to 100.'],
      });
    });

    afterAll(function () {
      this.job.remove();
    });

    it('creates the batch job', function () {
      expect(this.job).toBeDefined();
    });

    it('reports the state for the batch job', function () {
      expect(this.job.state()).toContain('JobState.JOB_STATE_');
    });
  });

  describe('fetch', function () {
    it('return the expected result with hasMore false', function () {
      var spec = FetchSpec.make({
        order: 'name',
        offset: 0,
        limit: 1000,
      });
      var result = Genai.UnstructuredQuery.Engine.ModelConfig.fetch(spec);
      expect(result.count).toEqual(this.totalConfigs);
      expect(result.hasMore).toEqual(false);
    });

    it('return the expected result with hasMore true', function () {
      var spec = FetchSpec.make({
        order: 'descending(name)',
        offset: 0,
        limit: this.totalConfigs - 1,
      });
      var result = Genai.UnstructuredQuery.Engine.ModelConfig.fetch(spec);
      expect(result.count).toEqual(this.totalConfigs - 1);
      expect(result.hasMore).toEqual(true);
      expect(result.objs[0].name).toBeGreaterThanOrEqual(result.objs.last().name);
    });

    it('return a correct result with the use of a filter', function () {
      var result = Genai.UnstructuredQuery.Engine.ModelConfig.fetch({
        filter:
          '(contains(lowerCase(string(name)), "vertex_claude_3_haiku") || contains(lowerCase(string(credential.name)), "vertex_claude_3_haiku"))',
      });
      expect(result.count).toBeGreaterThan(0);
      expect(result.objs[0].name).toContain('vertex_claude_3_haiku');
    });
  });

  describe('fetchCount', function () {
    it('return the expected count using a filter', function () {
      var spec = FetchSpec.make({
        filter: 'contains(lowerCase(string(name)), "awsBedrock_claude_v3_5_sonnet")',
      });
      var count = Genai.UnstructuredQuery.Engine.ModelConfig.fetchCount(spec);
      expect(count).toEqual(1);
    });
  });

  describe('getParameterFields', function () {
    it('returns the parameter fields', function () {
      var requiredFields = Genai.Llm.getParameterFields({ provider: 'Gemini' }, true);
      var allFields = Genai.Llm.getParameterFields({ provider: 'Gemini' });
      expect(requiredFields.size).toBeLessThanOrEqual(allFields.size);
      expect(requiredFields.keys().collect()).toContain('top_p');
    });
  });

  describe('getParameterFieldsInfo', function () {
    it('returns the parameter fields and values', function () {
      var result = Genai.Llm.getParameterFieldsInfo('azureGpt4o_mini', { provider: 'Gpt' }, true);
      expect(result.size).toEqual(7);
      expect(result.get('model_name')).toBeDefined();
    });
  });

  describe('fromSpec', function () {
    beforeAll(function () {
      this.credential = Genai.Llm.ExternalLlm.Config.fetch()
        .objs.filter((e) => {
          return e.name === 'default - Gpt';
        })
        .first();
      this.config = Genai.UnstructuredQuery.Engine.ModelConfig.listConfigs()
        .collect()
        .filter((e) => {
          return e.name === 'azureGpt4';
        })
        .first();
      this.llmKwargs = this.config.llmKwargs;
      this.spec = Genai.ModelConfigSpec.make({
        name: 'azureGpt4_tests',
        credential: this.credential,
        llmKwargs: this.llmKwargs,
      });
      Genai.UnstructuredQuery.Engine.ModelConfig.setFromSpec(this.spec);
      this.llm = Genai.UnstructuredQuery.Engine.ModelConfig.forConfigKey('azureGpt4_tests');
      this.llmCore = GenaiCore.Llm.Completion.Client.forConfigKey('azureGpt4_tests');
      var updatedLLMKwargs = Object.assign({}, this.llmKwargs, { temperature: 0.9 });
      this.duplicateSpec = Genai.ModelConfigSpec.make({
        name: 'azureGpt4_tests',
        credential: this.credential,
        llmKwargs: updatedLLMKwargs,
      });
    });

    it('creates a model config from a spec and response the questions correctly', function () {
      var result = this.llm.generateText({ prompt: 'please count from 1 to 10' });
      var resultCore = this.llmCore.completion([{ content: 'please count from 1 to 10', role: 'user' }], {
        returnJson: true,
      });
      expect(result).toContain('10');
      expect(resultCore.choices[0].message.content).toContain('10');
    });

    it('fails when try to add a config with existing name', function () {
      try {
        Genai.UnstructuredQuery.Engine.ModelConfig.setFromSpec(this.duplicateSpec);
      } catch (e) {
        expect(e.message).toContain('The name already exists: azureGpt4_tests');
      }
    });

    it('update existing config', function () {
      var result = Genai.UnstructuredQuery.Engine.ModelConfig.setFromSpec(this.duplicateSpec, true);
      expect(result).toEqual('Configurations successfully edited.');
    });
  });

  describe('deleteConfig', function () {
    it('deletes a model config', function () {
      var result = Genai.UnstructuredQuery.Engine.ModelConfig.deleteConfig('azureGpt4_tests');
      expect(result.success).toEqual(true);
      expect(result.error).toEqual(null);
    });

    it('fails when try to delete a seed config', function () {
      var result = Genai.UnstructuredQuery.Engine.ModelConfig.deleteConfig('awsBedrock_claude_v3_5_sonnet');
      expect(result.success).toEqual(false);
      expect(result.error).toEqual('A seed configuration cannot be deleted.');
    });
  });

  describe('LLM threadpool configurability', function () {
    beforeAll(function () {
      Genai.Llm.stopAllHandlers();
      expect(Genai.Llm.list().size).toEqual(0);

      this.originalGptDeployConfig = Genai.Llm.DeploymentConfig.forConfigKey('Genai.Llm.AzureOpenAI_deployment_config');
      this.originalGptDeployConfig.setConfigValue('deploySpec', {
        threadPool: {
          minThreads: 2,
          initialThreads: 2,
          maxThreads: 2,
        },
      });

      this.originalBedrockDeployConfig = Genai.Llm.DeploymentConfig.forConfigKey(
        'Genai.Llm.AwsBedrock_deployment_config'
      );
      this.originalBedrockDeployConfig.setConfigValue('deploySpec', {
        threadPool: {
          minThreads: 2,
          initialThreads: 2,
          maxThreads: 2,
        },
      });
    });

    afterAll(function () {
      this.originalGptDeployConfig.setConfig();
      this.originalBedrockDeployConfig.setConfig();
      Genai.Llm.stopAllHandlers();
    });

    it('starts new Gpt4 depoyment with custom threadpool', function () {
      var output = this.gptModelConfig.generateText({ prompt: 'Count to 10' });
      expect(output).toContain('10');

      var llmEngines = Genai.Llm.list();
      expect(llmEngines.size).toEqual(1);

      var engine = llmEngines.first();
      engine.waitForDeployment();

      // Given that Jarvis executors are SNEs, get the node id accordingly
      var nodeId = C3.app().nodes().first().id;

      var engineSummary = engine.summarizeThreads(nodeId).collect();
      expect(engineSummary.size).toEqual(2); // 2 threads
    });

    it('starts new Bedrock depoyment with custom threadpool', function () {
      var output = this.bedrockModelConfig.generateText({ prompt: 'Count to 10' });
      expect(output).toContain('10');

      var llmEngines = Genai.Llm.list();
      expect(llmEngines.size).toEqual(2);

      var index = llmEngines.indexOfAny((eng) => eng.name === 'Genai.Llm.AwsBedrock');
      var engine = llmEngines[index];
      engine.waitForDeployment();

      // Given that Jarvis executors are SNEs, get the node id accordingly
      var nodeId = C3.app().nodes().first().id;

      var engineSummary = engine.summarizeThreads(nodeId).collect();
      expect(engineSummary.size).toEqual(2); // 2 threads
    });
  });
});
