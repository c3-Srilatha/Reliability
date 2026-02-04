/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiConfigUtil';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    Genai.PyUtil.terminateAllEngines();
    this.user = TestIdp.createTestUsersForGroup('Genai.AdminUser')[0];
    Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.QueryOrchestrator.DefaultConfig.setConfigValue(
      'queryOrchestratorConfigName',
      'QueryOrchestrator_default'
    );
    Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').clearConfigAndSecretOverride(ConfigOverride.APP);
    this.engineConfig = Genai.UnstructuredQuery.Engine.Config.inst().getConfig();
    this.queryEngineConfig = Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').getConfig();

    this.loadCommonConfigsForUser = function (user, project) {
      return TestRunner.asUser(
        user,
        Lambda.fromJsFunc(function (project) {
          return Genai.ConfigUtil.loadCommonConfigs(project);
        }).partiallyCall([project])
      );
    };

    this.generateConfigKeyForUser = function (user, project) {
      return TestRunner.asUser(
        user,
        Lambda.fromJsFunc(function (project) {
          return Genai.ConfigUtil.generateConfigKey(undefined, project);
        }).partiallyCall([project])
      );
    };

    this.configMap = this.loadCommonConfigsForUser(this.user, undefined);

    this.tutorialProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'tutorial_' + filename,
      projectType: Genai.Project.Type.TUTORIAL,
      unstructuredQueryEngineConfigName: 'alabamaBond',
      queryOrchestratorConfigName: 'QueryOrchestrator_default_test_project_2',
      chunkerConfig: 'default',
    });

    this.defaultProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'default_' + filename,
      projectType: Genai.Project.Type.PRODUCTION,
      unstructuredQueryEngineConfigName: 'worldFacts',
      queryOrchestratorConfigName: 'QueryOrchestrator_default_test_project_1',
      chunkerConfig: 'default',
    });
    this.defaultProjectSettings = TestApi.upsertEntity(this.ctx, 'Genai.Project.Settings', {
      id: 'default',
      defaultProject: this.defaultProject,
      tutorialProject: this.tutorialProject,
    });

    // Clear toolkit from dynamic agent
    this.dynamicAgentConfig = Genai.Agent.Dynamic.Config.forConfigKey('DynamicAgent_default');
    this.dynamicAgentConfig.setConfigValue('toolkit', null);
  });

  afterAll(function () {
    Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.ChatBot.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.Agent.QueryOrchestrator.DefaultConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
    this.dynamicAgentConfig.setConfig();
    Genai.App.UserSettings.removeAll({ filter: Filter.eq('user', this.user) }, true);
    TestIdp.removeUser(this.user);
    TestApi.teardown(this.ctx);
  });

  function getCommonConfigs() {
    it('returns a non-empty map populated with the query engine config', function () {
      const fieldNameToSubtypeMap = {
        modelConfigName: Genai.UnstructuredQuery.Engine.ModelConfig,
        extractionModelConfigName: Genai.UnstructuredQuery.Engine.ModelConfig,
        questionRewritingConfigName: Genai.UnstructuredQuery.Engine.REA.QuestionRewritingConfig,
        chatMemoryConfigName: Genai.UnstructuredQuery.Engine.REA.ChatMemoryConfig,
        retrieverConfigName: Genai.UnstructuredQuery.Engine.REA.RetrieverConfig,
        extractionConfigName: Genai.UnstructuredQuery.Engine.REA.ExtractorConfig,
        rerankerConfigName: Genai.UnstructuredQuery.Engine.REA.RerankerConfig,
        questionAnsweringConfigName: Genai.UnstructuredQuery.Engine.REA.ContextualQaConfig,
      };
      var engineKeys = Object.keys(this.engineConfig);

      // EngineKeys.pop('issues'); // Field specific to Config, not relevant for settings
      expect(Object.keys(this.configMap.queryEngineConfigs)).toEqual(engineKeys);
      for (var key in this.configMap.queryEngineConfigs) {
        var value = this.configMap.queryEngineConfigs[key];
        if (typeof value === 'object' && 'name' in value) {
          // Since loadCommonConfigs is recursive, it will have the nested configs as objects
          expect(key in fieldNameToSubtypeMap)
            .withContext('key ' + key + ' should have been in ' + Object.keys(fieldNameToSubtypeMap))
            .toBe(true);
          expect(value.name)
            .withContext('name in configmap should be the same as deployed config')
            .toEqual(this.engineConfig[key]);
          var expectedJson;
          if (fieldNameToSubtypeMap[key].meta().isA(Genai.ParentConfig)) {
            expectedJson = fieldNameToSubtypeMap[key].forConfigKey(value.name).getRecursive();
          } else {
            expectedJson = fieldNameToSubtypeMap[key].forConfigKey(value.name).getConfig();
          }
          expect(JSON.stringify(value))
            .withContext('expected jsons to be equal for field ' + key)
            .toEqual(JSON.stringify(expectedJson));
        } else {
          expect(value)
            .withContext('expected jsons to be equal for field ' + key)
            .toEqual(this.engineConfig[key]);
        }
      }
    });
  }

  describe('loadCommonConfigs', function () {
    beforeAll(function () {
      TestApi.ensureDefaultProjectExists();
      Genai.Agent.QueryOrchestrator.DefaultConfig.setConfigValue(
        'queryOrchestratorConfigName',
        'QueryOrchestrator_default'
      );
    });

    afterAll(function () {
      Genai.Agent.QueryOrchestrator.DefaultConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
    });
    getCommonConfigs();

    describe('with an active project', function () {
      beforeAll(function () {
        Genai.ChatBot.Config.make().getConfig().setConfigValue('handlerTypeName', 'Genai.Project.QueryRouter');

        this.setProjectAsUser = function (user, userSettings, project) {
          return TestRunner.asUser(
            user,
            Lambda.fromJsFunc(function (userSettings, project) {
              return userSettings.setActiveProject(project);
            }).partiallyCall([userSettings, project])
          );
        };

        this.setProjectAsUser(this.user, Genai.App.UserSettings.forUser(this.user), this.defaultProject);
        this.configMap = this.loadCommonConfigsForUser(this.user, undefined);
      });

      getCommonConfigs();

      it('loads the correct configs for the active project', function () {
        expect(this.configMap.reaConfigs.name).toEqual(
          this.defaultProject.getMissing({ include: 'unstructuredQueryEngineConfigName' })
            .unstructuredQueryEngineConfigName
        );
        expect(this.configMap.structuredDataConfigs.queryOrchestratorConfig.name).toEqual(
          this.defaultProject.getMissing({ include: 'queryOrchestratorConfigName' }).queryOrchestratorConfigName
        );
      });

      describe('uiPlannerSelectionOptions', function () {
        describe('using Genai.Project.QueryRouter', function () {
          beforeAll(function () {
            Genai.Agent.QueryOrchestrator.DefaultConfig.setConfigValue(
              'queryOrchestratorConfigName',
              'QueryOrchestrator_dynamicAgent'
            );
            this.setProjectAsUser(this.user, Genai.App.UserSettings.forUser(this.user), Genai.Project.forId('default'));
          });

          afterAll(function () {
            Genai.Agent.QueryOrchestrator.DefaultConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
          });

          it('returns the agents for the default project when it is active', function () {
            var output = TestRunner.asUser(
              this.user,
              Lambda.fromJsFunc(function () {
                return Genai.ConfigUtil.uiPlannerSelectionOptions();
              }).partiallyCall([])
            );
            expect(output[0].config.name).toEqual('DynamicAgent_default');
          });
        });

        describe('using QueryOrchestrator as the ChatBot handler', function () {
          beforeAll(function () {
            this.originalChatBotConfig = Genai.ChatBot.Config.inst().getConfig();
            Genai.ChatBot.Config.setConfigValue('handlerTypeName', 'Genai.Agent.QueryOrchestrator');
          });

          afterAll(function () {
            this.originalChatBotConfig.setConfig();
          });

          it('returns the agents linked to the query orchestrator', function () {
            var output = TestRunner.asUser(
              this.user,
              Lambda.fromJsFunc(function () {
                return Genai.ConfigUtil.uiPlannerSelectionOptions();
              }).partiallyCall([])
            );
            expect(output[0].config.name).toEqual('DynamicAgent_default');
          });
        });
      });
    });

    describe('with a selected project', function () {
      beforeAll(function () {
        this.configMap = this.loadCommonConfigsForUser(this.user, this.tutorialProject);
      });

      getCommonConfigs();

      it('loads the correct configs for the selected project', function () {
        expect(this.configMap.reaConfigs.name).toEqual(
          this.tutorialProject.getMissing({ include: 'unstructuredQueryEngineConfigName' })
            .unstructuredQueryEngineConfigName
        );
        expect(this.configMap.structuredDataConfigs.queryOrchestratorConfig.name).toEqual(
          this.tutorialProject.getMissing({ include: 'queryOrchestratorConfigName' }).queryOrchestratorConfigName
        );
      });
    });
  });

  describe('generateConfigKey', function () {
    beforeAll(function () {
      this.configMap = this.loadCommonConfigsForUser(this.user, this.tutorialProject);
      this.configKey = this.generateConfigKeyForUser(this.user, this.tutorialProject);
      this.configKeyFilter = { filter: Filter.eq('configKey', this.configKey) };
      this.savedConfigHistory = Genai.ConfigHistory.fetch(this.configKeyFilter).first();
    });

    it('persists config map in config history', function () {
      var expectedConfigMapString = JSON.stringify(this.configMap);
      expect(this.savedConfigHistory.configMapString).toEqual(expectedConfigMapString);
    });
  });

  describe('structuredDataWhitelistedTypes', function () {
    describe('with EvalQuery tool', function () {
      beforeAll(function () {
        this.whitelistedDataModel = TestApi.spyOn(this.ctx, 'Genai.Agent.Tool.EvalQuery', 'getWhitelistedDataModel')
          .returnValue({
            whitelistedDataModel: {
              AccountMeterBillingDiscrepancy: {
                fields: [
                  'id',
                  'meter',
                  'billingAccount',
                  'accountComparisonCheck',
                  'meterExchangeCheck',
                  'billingActualsCheck',
                  'discrepancyCheck',
                  'discrepancyTimestamp',
                  'meterStatus',
                ],
              },
            },
          })
          .register();
        Genai.Agent.QueryOrchestrator.DefaultConfig.setConfigValue(
          'queryOrchestratorConfigName',
          'QueryOrchestrator_default'
        );
      });

      afterAll(function () {
        this.whitelistedDataModel.unregister();
        Genai.Agent.QueryOrchestrator.DefaultConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
      });

      it('should return the configured whitelisted data model', function () {
        var result = Genai.ConfigUtil.structuredDataWhitelistedTypes();
        expect(result).toEqual([
          {
            whitelistedDataModel: {
              AccountMeterBillingDiscrepancy: {
                fields: [
                  'id',
                  'meter',
                  'billingAccount',
                  'accountComparisonCheck',
                  'meterExchangeCheck',
                  'billingActualsCheck',
                  'discrepancyCheck',
                  'discrepancyTimestamp',
                  'meterStatus',
                ],
              },
            },
          },
        ]);
      });
    });

    describe('with Dynamic Agent', function () {
      beforeAll(function () {
        Genai.Agent.QueryOrchestrator.DefaultConfig.setConfigValue(
          'queryOrchestratorConfigName',
          'QueryOrchestrator_dynamicAgent'
        );
        this.readinessDataModelGraph = TestApi.upsertReadinessDataModelGraph();
        this.orgRetrievalSpecTool = Genai.Agent.Dynamic.Tool.forId('execute_retrieval_spec');
        this.executeRetrievalSpecTool = this.orgRetrievalSpecTool
          .withToolConfigurationParams({ dataModelName: 'readiness_test_data_model_graph' })
          .merge({ mergeInclude: 'toolConfigurationParams', returnInclude: 'this' });

        var toolkit = Genai.Agent.Dynamic.Toolkit.make({
          id: 'test_retrieval_toolkit',
          name: 'test_retrieval_toolkit',
          tools: { execute_retrieval_spec_tool: this.executeRetrievalSpecTool },
        });

        this.toolkit = toolkit.merge();

        this.dynamicAgentConfig.setConfigValue('toolkit', this.toolkit);

        this.whitelistedDataModels = Genai.ConfigUtil.structuredDataWhitelistedTypes();
      });

      afterAll(function () {
        this.executeRetrievalSpecTool
          .get('id')
          .withToolConfigurationParams(this.orgRetrievalSpecTool.toolConfigurationParams)
          .merge();
        this.dynamicAgentConfig.setConfig();
        this.toolkit.remove();
        this.readinessDataModelGraph.remove();
      });

      it('should return the readiness whitelisted data model from the structured dynamic agent tool', function () {
        expect('Genai.Aircraft' in this.whitelistedDataModels[0]).toBe(true);
        expect('Genai.Airport' in this.whitelistedDataModels[0]).toBe(true);
      });
    });
  });

  describe('Config Diff Functions', function () {
    beforeAll(function () {
      this.startTime = DateTime.now();
    });

    afterAll(function () {
      this.endTime = DateTime.now();
    });

    describe('diffConfigs', function () {
      it('handles keys present only in first config', function () {
        const result = Genai.ConfigUtil.diffConfigs({ uniqueKey: 'value' }, {});
        expect(result.uniqueKey).toEqual({ obj1: 'value' });
      });

      it('handles keys present only in second config', function () {
        const result = Genai.ConfigUtil.diffConfigs({}, { uniqueKey: 'value' });
        expect(result.uniqueKey).toEqual({ obj2: 'value' });
      });

      it('handles different values between configs', function () {
        const result = Genai.ConfigUtil.diffConfigs({ key: 'value1' }, { key: 'value2' });
        expect(result.key).toEqual({ obj1: 'value1', obj2: 'value2' });
      });
    });

    describe('diffCurrentConfig', function () {
      it('returns a diff result', function () {
        const config = { testKey: 'testValue' };
        const commonConfigs = Genai.ConfigUtil.loadCommonConfigs(this.tutorialProject);
        const result = Genai.ConfigUtil.diffCurrentConfig(config, this.tutorialProject);
        expect(result).toBeDefined();
        expect(result.testKey).toBeDefined();
      });
    });

    describe('diffCommonConfigs', function () {
      it('passes config parameters through to diffConfigs', function () {
        const config1 = { a: 1 };
        const config2 = { b: 2 };
        const result = Genai.ConfigUtil.diffCommonConfigs(config1, config2);
        expect(result.a).toEqual({ obj1: 1 });
        expect(result.b).toEqual({ obj2: 2 });
      });
    });
  });

  describe('test dynamic agent test config', function () {
    beforeAll(function () {
      this.configMap = this.loadCommonConfigsForUser(this.user, this.tutorialProject);
      this.dynamicAgentConfigFromFunc = Genai.Agent.Dynamic.Config.inst().getConfig();
      this.dynamicAgentTestConfigFromFunc = Genai.Agent.Dynamic.Config.forConfigKey(
        Genai.Agent.Dynamic.Config.inst().testAgentConfigName
      ).getConfig();
    });

    afterAll(function () {
      Genai.Agent.Dynamic.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    it('compares dynamic agent test config from configMap and function call', function () {
      const dynamicAgentTestConfigFromConfigMap = this.configMap.dynamicAgentTestConfig;
      expect(dynamicAgentTestConfigFromConfigMap).toBeDefined();
      expect(this.dynamicAgentTestConfigFromFunc).toBeDefined();

      expect(dynamicAgentTestConfigFromConfigMap.name).toEqual(this.dynamicAgentTestConfigFromFunc.name);
    });
  });

  describe('test planner configs', function () {
    beforeAll(function () {
      this.configMap = this.loadCommonConfigsForUser(this.user, this.tutorialProject);
    });

    it('returns the planner configs for the project and compares names', function () {
      const plannerConfigsFromConfigMap = this.configMap.structuredDataConfigs.plannerConfigs;
      const activeAgentsFromFunc = Genai.Agent.Persistable.fetch({
        filter: Filter.eq('inactive', false),
      }).objs.map((agent) => agent.config.getConfig());
      plannerConfigsFromConfigMap.each(function (planner, index) {
        expect(agent.name).toEqual(activeAgentsFromFunc[index].name);
      });
    });
  });
});

describe(filename, function () {
  describe('verify configName match between Genai.ConfigUtil.modelInferenceConfig and Genai.UnstructuredQuery.Engine.REA.ModelInferenceConfig calls', function () {
    it('should return the same config name', function () {
      var configName = 'test config name';
      var modelInferenceConfig = Genai.ConfigUtil.modelInferenceConfig(configName);
      var modelInferenceConfigName =
        Genai.UnstructuredQuery.Engine.REA.ModelInferenceConfig.forConfigKey(configName).getConfig().name;
      expect(modelInferenceConfig.name).toEqual(modelInferenceConfigName);
      expect(modelInferenceConfig.name).toEqual(configName);
      expect(modelInferenceConfig).toEqual(
        Genai.UnstructuredQuery.Engine.REA.ModelInferenceConfig.forConfigKey(configName).getConfig()
      );
    });
  });

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('mock action on Genai.UnstructuredQuery.Engine.REA.ModelInferenceConfig call', function () {
    beforeAll(function () {
      this.reaModelInferenceConfigSpy = TestApi.spyOn(
        this.ctx,
        'Genai.UnstructuredQuery.Engine.REA.ModelInferenceConfig',
        'forConfigKey'
      ).register();
      this.reaModelInferenceConfigSpyCountBefore = this.reaModelInferenceConfigSpy.getActionMock().callCount();
    });

    afterAll(function () {
      this.reaModelInferenceConfigSpy.unregister();
    });

    it('model inference config call', function () {
      TestApi.waitForSetup(this.ctx);
      Genai.ConfigUtil.modelInferenceConfig('test config name');
      expect(this.reaModelInferenceConfigSpy.getActionMock().callCount()).toEqual(
        this.reaModelInferenceConfigSpyCountBefore + 1
      );
    });
  });

  describe('verify retrieverConfigName match between Genai.ConfigUtil.retrieverConfig and Genai.UnstructuredQuery.Engine.REA.RetrieverConfig calls', function () {
    it('should return the same retriever config name', function () {
      var configName = 'test retriever config name';
      var retrieverConfig = Genai.ConfigUtil.retrieverConfig(configName);
      var retrieverConfigName =
        Genai.UnstructuredQuery.Engine.REA.RetrieverConfig.forConfigKey(configName).getConfig().name;
      expect(retrieverConfig.name).toEqual(configName);
      expect(retrieverConfig.name).toEqual(retrieverConfigName);
      expect(retrieverConfig).toEqual(
        Genai.UnstructuredQuery.Engine.REA.RetrieverConfig.forConfigKey(configName).getConfig()
      );
    });
  });

  describe('mock action on Genai.UnstructuredQuery.Engine.REA.RetrieverConfig call', function () {
    beforeAll(function () {
      this.reaRetrieverConfigSpy = TestApi.spyOn(
        this.ctx,
        'Genai.UnstructuredQuery.Engine.REA.RetrieverConfig',
        'forConfigKey'
      ).register();
      this.reaRetrieverConfigSpyCountBefore = this.reaRetrieverConfigSpy.getActionMock().callCount();
    });

    afterAll(function () {
      this.reaRetrieverConfigSpy.unregister();
    });

    it('retriever config call', function () {
      TestApi.waitForSetup(this.ctx);
      Genai.ConfigUtil.retrieverConfig('fake retriever');
      expect(this.reaRetrieverConfigSpy.getActionMock().callCount()).toEqual(this.reaRetrieverConfigSpyCountBefore + 1);
    });
  });

  describe('test diff common configs call', function () {
    it('diff commmon configs call', function () {
      var config1 = {
        key1: 'value1',
      };
      var config2 = {
        key2: 'value2',
      };
      var diffResult = Genai.ConfigUtil.diffCommonConfigs(config1, config2);
      expect(diffResult).toEqual({
        key1: { obj1: 'value1' },
        key2: { obj2: 'value2' },
      });
    });
  });
});
