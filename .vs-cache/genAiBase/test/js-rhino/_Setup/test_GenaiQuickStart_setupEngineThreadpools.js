/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiQuickStart_setupEngineThreadpools.js';

describe(filename, function () {
  beforeAll(function () {
    TestApi.setOpenAiApiKey();

    this.llmType = Genai.Llm.AzureOpenAI;
    var deploymentConfigName = Genai.Llm.DeploymentConfig.getDeploymentConfigKey(this.llmType.name());
    this.llmDeploymentConfig = Genai.Llm.DeploymentConfig.forConfigKey(deploymentConfigName).getConfig();

    this.numThreads = 1; // 2 is default initialThreads for QO and QE
    Genai.QuickStart.setupEngineThreadPools(this.numThreads);
    Genai.QuickStart.setupLlmEngine(this.numThreads, [], 'azureGpt4o');
  });

  afterAll(function () {
    Genai.Agent.Config.inst().clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.Config.inst().clearConfigAndSecretOverride(ConfigOverride.APP);
    this.llmDeploymentConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  describe('setupEngineThreadPools', function () {
    beforeAll(function () {
      this.expectedThreadPoolConfig = {
        minThreads: this.numThreads,
        initialThreads: this.numThreads,
        maxThreads: this.numThreads,
      };
    });

    it('applies the threadpool spec to the query orchestrator engine', function () {
      expect(Genai.Agent.Config.inst().getConfig().deploySpec.threadPool).toEqual(this.expectedThreadPoolConfig);
    });

    it('applies the threadpool spec to the unstructured query engine', function () {
      expect(Genai.UnstructuredQuery.Engine.Config.getConfig().deploySpec.threadPool).toEqual(
        this.expectedThreadPoolConfig
      );
    });

    it('applies the threadpool spec to the LLM engine', function () {
      expect(this.llmDeploymentConfig.getConfig().deploySpec.threadPool).toEqual(this.expectedThreadPoolConfig);
    });
  });
});
