/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_SchemaUpgradeUtil';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('upgradeMultiLingualTemplates_1', function () {
    it('does nothing', function () {
      expect(function () {
        Genai.SchemaUpgradeUtil.upgradeMultiLingualTemplates_1();
      }).not.toThrow();
    });
  });

  describe('upgradeProjects_2', function () {
    it('completes without an error', function () {
      expect(function () {
        Genai.SchemaUpgradeUtil.upgradeProjects_2();
      }).not.toThrow();
    });
  });

  describe('upgradeProjectsIsTutorial_3', function () {
    it('completes without an error', function () {
      expect(function () {
        Genai.SchemaUpgradeUtil.upgradeProjectsIsTutorial_3();
      }).not.toThrow();
    });
  });

  describe('upgradeModelConfigurationTemplates_4', function () {
    it('does nothing', function () {
      expect(function () {
        Genai.SchemaUpgradeUtil.upgradeModelConfigurationTemplates_4();
      }).not.toThrow();
    });
  });

  describe('upgradeModelInferenceConfigs_5', function () {
    beforeAll(function () {
      this.result = Genai.SchemaUpgradeUtil.upgradeModelInferenceConfigs_5();
    });

    it('verify that all the migrated model configs are set to the new version', function () {
      var modelsMigrated = Genai.UnstructuredQuery.Engine.ModelConfig.listConfigs().collect();
      this.result.modelConfigs.migrated.each((element) => {
        var exists = modelsMigrated.containsAny(function (e) {
          return e.name === element;
        });
        expect(exists).toBe(true);
      });
    });

    it('verify that all the prompt configs are set to the new version', function () {
      var numberMigratedPrompts = Genai.Prompt.fetchCount({
        filter: Filter.intersects('id', this.result.prompts),
      });
      expect(numberMigratedPrompts).toEqual(this.result.prompts.length);
    });

    it('verify uiOptions are set to the new version', function () {
      var modelNames = Genai.UnstructuredQuery.Engine.REA.ModelInferenceConfig.listConfigs()
        .collect()
        .filter((config) => {
          return config.uiOptions !== undefined;
        })
        .map(function (model) {
          return model.name;
        });
      modelNames.each((modelName) => {
        var modelConfig = Genai.UnstructuredQuery.Engine.ModelConfig.forConfigKey(modelName);
        expect(modelConfig.uiOptions).toBeDefined();
      });
    });
  });

  describe('reaPipelineConfigToEngineConfig_6', function () {
    beforeAll(function () {
      this.testConfigName = filename + DateTime.nowWithMillis().toString();
      this.testPipelineConfig = Genai.UnstructuredQuery.Engine.REA.PipelineConfig.make({
        name: this.testConfigName,
        attributionSpec: Genai.Agent.Tool.Util.Attributor.Spec.make({
          attributeOnAllTags: true,
        }),
        engineThreadPoolSpec: App.Node.ThreadPool.Spec.make({
          initialThreads: 1,
        }),
        extractionConfigName: filename + '_extraction',
        rerankerConfigName: filename + '_reranker',
        retrieverConfigName: filename + '_retriever',
        questionAnsweringConfigName: filename + '_questionAnswering',
        questionRewritingConfigName: filename + '_questionRewriting',
      });
      this.testPipelineConfig.setConfig(ConfigOverride.APP);
    });

    afterAll(function () {
      this.testPipelineConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    it('copies the fields to Genai.UnstructuredQuery.Engine.Config', function () {
      var engineConfig = Genai.UnstructuredQuery.Engine.Config.forConfigKey(this.testConfigName);
      expect(engineConfig.retrieverConfigName)
        .withContext('retrieverConfigName should be unset before')
        .toBeUndefined();
      Genai.SchemaUpgradeUtil.reaPipelineConfigToEngineConfig_6();

      var testPipelineConfig = this.testPipelineConfig;
      engineConfig = Genai.UnstructuredQuery.Engine.Config.forConfigKey(this.testConfigName);
      [
        'attributionSpec',
        'chatWithFullHistory',
        'engineThreadPoolSpec',
        'extractionConfigName',
        'questionAnsweringConfigName',
        'questionRewritingConfigName',
        'rerankerConfigName',
        'retrieverConfigName',
        'streamTimeoutSeconds',
      ].forEach(function (field) {
        expect(engineConfig[field])
          .withContext(field + ' should be copied from pipeline config')
          .toEqual(testPipelineConfig[field]);
      });
    });
  });

  describe('migrateAllCredentialsToGenaiCore_7', function () {
    beforeAll(function () {
      this.migrateAllCredentialsToGenaiCoreSpy = TestApi.spyOn(
        this.ctx,
        'Genai.QuickStart',
        'migrateAllCredentialsToGenaiCore'
      )
        .returnValue()
        .register();
    });

    afterAll(function () {
      this.migrateAllCredentialsToGenaiCoreSpy.unregister();
    });

    it('should correctly call migrateAllCredentialsToGenaiCore function', function () {
      Genai.SchemaUpgradeUtil.migrateAllCredentialsToGenaiCore_7();

      expect(this.migrateAllCredentialsToGenaiCoreSpy.toHaveBeenCalled()).toBeTrue();
    });
  });

  describe('retrieverPgVectorEmbedderSpec_8', function () {
    beforeAll(function () {
      this.retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.PgVector', {
        name: filename + '-pgVector',
      }).get();
      this.retrieverE5 = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.PgVector', {
        name: filename + '-pgVectorWithE5',
        embedderModelName: Genai.Retriever.Dense.Embedder.E5,
      }).get();
      this.retrieverMxbai = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.PgVector', {
        name: filename + '-pgVectorWithMxbai',
        embedderModelName: 'mixedbread-ai/mxbai-embed-large-v1',
        embedderEngineDeploySpec: { name: filename + '-mxbai' },
      }).get();
    });

    it('should correctly populate embedderSpec on all Genai.Retriever.PgVectors', function () {
      Genai.SchemaUpgradeUtil.retrieverPgVectorEmbedderSpec_8();

      var embedderSpec = this.retriever.get().embedderSpec;
      expect(embedderSpec.embedderType)
        .withContext('default embedderType should be populated')
        .toEqual(GenaiCore.Embedder.Hf);
      expect(embedderSpec.embedderModelName)
        .withContext('default embedderModelName should be populated')
        .toEqual('mixedbread-ai/mxbai-embed-large-v1');
      expect(embedderSpec.embedderEngineDeploySpec)
        .withContext('default embedderEngineDeploySpec should be empty')
        .toBeUndefined();

      embedderSpec = this.retrieverE5.get().embedderSpec;
      expect(embedderSpec.embedderType)
        .withContext('E5 embedderType should be populated')
        .toEqual(GenaiCore.Embedder.Hf);
      expect(embedderSpec.embedderModelName)
        .withContext('E5 embedderModelName should be migrated')
        .toEqual('intfloat/e5-large-v2');
      expect(embedderSpec.embedderEngineDeploySpec)
        .withContext('E5 embedderEngineDeploySpec should be empty')
        .toBeUndefined();

      embedderSpec = this.retrieverMxbai.get().embedderSpec;
      expect(embedderSpec.embedderType)
        .withContext('MXBAI embedderType should be populated')
        .toEqual(GenaiCore.Embedder.Hf);
      expect(embedderSpec.embedderModelName)
        .withContext('MXBAI embedderModelName should be migrated')
        .toEqual(this.retrieverMxbai.embedderModelName);
      expect(embedderSpec.embedderEngineDeploySpec)
        .withContext('MXBAI embedderEngineDeploySpec should be migrated')
        .toEqual(this.retrieverMxbai.embedderEngineDeploySpec);
    });
  });

  describe('retrieverDenseEmbedderSpec_9', function () {
    beforeAll(function () {
      this.retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
        name: filename + '-dense',
      }).get();
      this.retrieverE5 = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
        name: filename + '-denseWithE5',
        embedderModelName: Genai.Retriever.Dense.Embedder.E5,
      }).get();
    });

    it('should correctly populate embedderSpec on all Genai.Retriever.Dense', function () {
      Genai.SchemaUpgradeUtil.retrieverDenseEmbedderSpec_9();

      var embedderSpec = this.retriever.get().embedderSpec;
      expect(embedderSpec.embedderType)
        .withContext('default embedderType should be populated')
        .toEqual(GenaiCore.Embedder.Hf);
      expect(embedderSpec.embedderModelName)
        .withContext('default embedderModelName should be populated')
        .toEqual('mixedbread-ai/mxbai-embed-large-v1');

      embedderSpec = this.retrieverE5.get().embedderSpec;
      expect(embedderSpec.embedderType)
        .withContext('E5 embedderType should be populated')
        .toEqual(GenaiCore.Embedder.Hf);
      expect(embedderSpec.embedderModelName)
        .withContext('E5 embedderModelName should be migrated')
        .toEqual('intfloat/e5-large-v2');
    });
  });

  describe('migrateAllEnginesToUseDeploySpec_10', function () {
    beforeAll(function () {
      this.engineThreadPoolSpec = {
        minThreads: 1,
        initialThreads: 1,
        maxThreads: 1,
      };
      Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').setConfigValues({
        engineThreadPoolSpec: this.engineThreadPoolSpec,
        deploySpec: null,
      });
    });

    afterAll(function () {
      Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    it('should correctly set deploySpec for engine configs', function () {
      Genai.SchemaUpgradeUtil.migrateAllEnginesToUseDeploySpec_10();

      expect(Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').deploySpec.threadPool.toJson()).toEqual(
        this.engineThreadPoolSpec
      );
    });
  });

  describe('upgradeDynamicAgentToolsAndToolkits_11', function () {
    beforeAll(function () {
      this.toolId = filename + '-testTool';
      this.toolkitId = filename + '-testToolkit';
      this.toolPySrcUrl = 'meta://genAiBase/test/resource/Genai.Agent.Dynamic/test_tool_bobs_age.py';
      this.toolCfgParams = { someParam: 'someValue' };
      this.tableExistsSpy = TestApi.spyOn(this.ctx, 'Genai.SchemaUpgradeUtil', 'tableExists')
        .returnValue(true)
        .register();
      this.executeDbQuerySpy = TestApi.spyOn(this.ctx, 'Genai.SchemaUpgradeUtil', 'executeDbQuery');
      this.executeDbQuerySpy
        .callFake(
          Lambda.fromJsFunc(function (_action, input) {
            if (input.query.startsWith('SELECT RID, VALUE FROM C3_2_NMHLPR_TOOLS')) {
              return {
                results: [
                  {
                    cells: [
                      {
                        str: 'RID',
                      },
                      {
                        str: 'VALUE',
                      },
                    ],
                  },
                  {
                    cells: [
                      {
                        str: 'test_SchemaUpgradeUtil-testToolkit',
                      },
                      {
                        str: 'test_SchemaUpgradeUtil-testTool',
                      },
                    ],
                  },
                ],
              };
            } else {
              return {
                results: [
                  {
                    cells: [
                      {
                        str: 'ID',
                      },
                      {
                        str: 'TYPE_IDENT',
                      },
                      {
                        str: 'PYSRC_URL_S',
                      },
                      {
                        str: 'DESCRIPTIONFORUSER_S',
                      },
                      {
                        str: 'TOOLCONFIGURATIONPARAMS_J',
                      },
                    ],
                  },
                  {
                    cells: [
                      {
                        str: 'test_SchemaUpgradeUtil-testTool',
                      },
                      {
                        str: 'DNTL',
                      },
                      {
                        str: 'meta://genAiBase/test/resource/Genai.Agent.Dynamic/test_tool_bobs_age.py',
                      },
                      {
                        str: '',
                      },
                      {
                        str: '{"someParam":"someValue"}',
                      },
                    ],
                  },
                  {
                    cells: [
                      {
                        str: 'test_SchemaUpgradeUtil-testToolkit',
                      },
                      {
                        str: 'DYNTLKT',
                      },
                      {
                        str: '',
                      },
                      {
                        str: '',
                      },
                      {
                        str: '',
                      },
                    ],
                  },
                ],
              };
            }
          })
        )
        .register();
    });

    afterAll(function () {
      this.tableExistsSpy.unregister();
      this.executeDbQuerySpy.unregister();
      Genai.Agent.Dynamic.Tool.make({ id: this.toolId }).remove();
      Genai.Agent.Dynamic.Toolkit.make({ id: this.toolkitId }).remove();
    });

    it('completes without an error', function () {
      expect(function () {
        Genai.SchemaUpgradeUtil.upgradeDynamicAgentToolsAndToolkits_11();
      }).not.toThrow();
    });

    it('creates a tool with the correct properties', function () {
      var tool = Genai.Agent.Dynamic.Tool.forId(this.toolId);
      expect(tool).toBeDefined();
      expect(tool.pySrc.url).toEqual(this.toolPySrcUrl);
      expect(tool.descriptionForLlm).toEqual('A dynamic agent tool');
      expect(tool.toolConfigurationParams).toEqual(this.toolCfgParams);
    });

    it('creates a toolkit with the correct properties', function () {
      var toolkit = Genai.Agent.Dynamic.Toolkit.forId(this.toolkitId);
      expect(toolkit).toBeDefined();
      expect(toolkit.tools.size).toEqual(1);
      expect(toolkit.tools.first().id).toEqual(this.toolId);
      expect(toolkit.descriptionForUser).toEqual('A dynamic agent toolkit');
    });
  });

  describe('migrateAllModelConfigsToGenaiCore_12', function () {
    beforeAll(function () {
      Genai.QuickStart.migrateAllModelConfigsToGenaiCore();
      TestApi.waitForSetup(this.ctx, null, 1, 120);
    });

    it('should correctly migrate all model configs to GenaiCore', function () {
      var modelConfigs = Genai.UnstructuredQuery.Engine.ModelConfig.listConfigs().collect();
      modelConfigs.each((modelConfig) => {
        if (
          modelConfig.llmDeployment === 'Genai.Llm.AzureOpenAI' ||
          modelConfig.llmDeployment === 'Genai.Llm.AwsBedrock' ||
          modelConfig.llmDeployment === 'Genai.Llm.Gcp'
        ) {
          expect(GenaiCore.Llm.Completion.Client.forConfigKey(modelConfig.name))
            .withContext('GenaiCore.Llm.Completion.Client should be created for ' + modelConfig.name)
            .toBeDefined();
        }
      });
    });
  });
});
