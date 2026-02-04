/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_QueryOrchestrator_initialization';

var warmLoadTime = 0;
describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.setOpenAiApiKey();
    Genai.Agent.Tool.EvalQuery.DefaultConfig.setConfigValue('evalQueryConfigId', 'EvalQuery_default_test');

    TestApi.setTestToolConfigs();

    // Use QueryOrchestrator_default_test so it uses the configs set in TestApi.setTestToolConfigs()
    Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').setConfigValue(
      'toolkitName',
      'QueryOrchestrator_default_test'
    );
    var threadPoolSpec = {
      minThreads: 1,
      initialThreads: 1,
      maxThreads: 1,
    };
    Genai.Agent.Config.forConfigKey('QueryOrchestrator_default').setConfigValue('deploySpec', {
      threadPool: threadPoolSpec,
    });
    TestApi.waitForSetup(this.ctx);
    Genai.PyUtil.terminateAllEngines();
    this.queryOrchestrator = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_default');
  });

  afterAll(function () {
    Genai.Agent.Tool.StructuredDataQueryPy.Config.forConfigKey(
      'StructuredDataQueryPy_default_test'
    ).clearConfigAndSecretOverride(ConfigOverride.APP);
    this.queryOrchestrator.config().clearConfigAndSecretOverride(ConfigOverride.APP);
    Genai.PyUtil.terminateAllEngines();
  });

  describe('initialize', function () {
    it('takes a while on the first run', function () {
      var t0 = DateTime.nowWithMillis();
      this.queryOrchestrator.initialize();
      var t1 = DateTime.nowWithMillis();

      expect(DateTime.deltaSeconds(t0, t1)).toBeGreaterThanOrEqual(1);
      expect(DateTime.deltaSeconds(t0, t1)).toBeLessThan(120);
    });

    it('completes quickly once interpreters are warm', function () {
      var t0 = DateTime.nowWithMillis();
      this.queryOrchestrator.initialize();
      var t1 = DateTime.nowWithMillis();

      warmLoadTime = DateTime.deltaMillis(t0, t1);
      expect(warmLoadTime).toBeLessThan(1000);
    });

    it('takes longer when reloading everything', function () {
      var t0 = DateTime.nowWithMillis();
      this.queryOrchestrator.initialize(true);
      var t1 = DateTime.nowWithMillis();

      expect(DateTime.deltaMillis(t0, t1)).toBeGreaterThan(warmLoadTime);
      expect(DateTime.deltaSeconds(t0, t1)).toBeLessThan(20);
    });
  });

  describe(':activeAgents', function () {
    beforeAll(function () {
      TestApi.ensureDefaultProjectExists();

      this.queryOrchestratorId = 'QueryOrchestrator_dynamicAgent';
      this.queryOrchestrator = Genai.Agent.QueryOrchestrator.forConfigKey(this.queryOrchestratorId);
      this.defaultProject = Genai.Project.forId('default');
    });

    afterAll(function () {
      Genai.Agent.Config.forConfigKey(this.queryOrchestratorId).clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    describe('for the default seeded config', function () {
      it('returns the config for the dynamic agent', function () {
        var activeAgents = Genai.ConfigUtil.activeAgents(this.queryOrchestratorId);
        expect(activeAgents.length).toBe(1);
        expect(activeAgents[0].name).toEqual('Dynamic Agent');
      });
    });

    describe('when new agents are added to the project', function () {
      beforeAll(function () {
        var newAgentConfig = Genai.Agent.Dynamic.Config.forConfigKey('DynamicAgent_default')
          .withName('DynamicAgent_test')
          .setConfig();

        this.newDynamicAgent = Genai.Agent.Dynamic.Persistable.make({
          name: 'DynamicAgent_test',
          config: 'DynamicAgent_test',
          projects: [this.defaultProject],
        }).merge();
      });

      afterAll(function () {
        this.newDynamicAgent.remove();
      });

      it('returns the config for the new agents', function () {
        var activeAgents = Genai.ConfigUtil.activeAgents(this.queryOrchestratorId);
        var activeAgentsNames = _.map(activeAgents, 'name');
        expect(activeAgents.length).toBe(2);
        expect(activeAgentsNames).toContain('Dynamic Agent');
        expect(activeAgentsNames).toContain('DynamicAgent_test');
      });
    });

    describe('when the orchestrator is not used as part of a project', function () {
      beforeAll(function () {
        this.originalQueryOrchestratorConfigName = this.defaultProject.queryOrchestratorConfigName;
        this.defaultProject = this.defaultProject
          .withQueryOrchestratorConfigName(null)
          .merge({ mergeInclude: 'queryOrchestratorConfigName' });
      });

      afterAll(function () {
        this.defaultProject = this.defaultProject
          .withQueryOrchestratorConfigName(this.originalQueryOrchestratorConfigName)
          .merge({ mergeInclude: 'queryOrchestratorConfigName' });
      });

      it('returns an empty array', function () {
        var activeAgents = Genai.ConfigUtil.activeAgents(this.queryOrchestratorId);
        expect(activeAgents.length).toBe(0);
      });
    });
  });

  describe(':getActiveConfigName', function () {
    beforeAll(function () {
      this.basicUser = TestIdp.createTestUsersForGroup('Genai.BasicUser')[0];
      this.originalChatBotConfig = Genai.ChatBot.Config.getConfig();
      this.defaultQueryOrchestratorConfigName =
        Genai.Agent.QueryOrchestrator.DefaultConfig.getConfig().queryOrchestratorConfigName;

      this.getActiveConfigNameAsUser = function (user) {
        return TestRunner.asUser(
          user,
          Lambda.fromJsFunc(function () {
            return Genai.Agent.QueryOrchestrator.getActiveConfigName();
          })
        );
      };
    });

    afterAll(function () {
      this.originalChatBotConfig.setConfig();
      TestIdp.removeUser(this.basicUser);
    });

    describe('when using GenAI Projects', function () {
      beforeAll(function () {
        Genai.ChatBot.Config.setConfigValue('handlerTypeName', 'Genai.Project.QueryRouter');
        TestApi.ensureDefaultProjectExists();

        this.defaultProject = Genai.Project.forId('default');
        this.defaultProjectQueryOrchestratorConfigName = this.defaultProject.queryOrchestratorConfigName;
        this.userSettings = Genai.App.UserSettings.forUser(this.basicUser);

        // Modify active project QO so it is different from the default
        this.experimentalQueryOrchestratorConfigName = 'QueryOrchestrator_experimental';
        this.defaultProject = this.defaultProject
          .withQueryOrchestratorConfigName(this.experimentalQueryOrchestratorConfigName)
          .merge({ mergeInclude: 'queryOrchestratorConfigName' });
      });

      afterAll(function () {
        this.defaultProject = this.defaultProject
          .get()
          .withQueryOrchestratorConfigName(this.defaultProjectQueryOrchestratorConfigName)
          .merge({ mergeInclude: 'queryOrchestratorConfigName' });
      });

      describe('when the active project for the user uses query orchestrator', function () {
        it('returns the config name for the active project', function () {
          var configName = this.getActiveConfigNameAsUser(this.basicUser);
          expect(configName).toEqual(this.experimentalQueryOrchestratorConfigName);
        });
      });

      describe('when the active project for the user does not use query orchestrator', function () {
        beforeAll(function () {
          this.defaultProject = this.defaultProject
            .withQueryOrchestratorConfigName(null)
            .merge({ mergeInclude: 'queryOrchestratorConfigName' });
        });

        it('returns the default config defined in Genai.Agent.QueryOrchestrator.DefaultConfig', function () {
          var configName = this.getActiveConfigNameAsUser(this.basicUser);
          expect(configName).toEqual(this.defaultQueryOrchestratorConfigName);
        });
      });
    });

    describe('when not using GenAI Projects', function () {
      beforeAll(function () {
        Genai.ChatBot.Config.setConfigValue('handlerTypeName', 'Genai.Agent.QueryOrchestrator');
      });

      it('returns the default config defined in Genai.Agent.QueryOrchestrator.DefaultConfig', function () {
        var configName = this.getActiveConfigNameAsUser(this.basicUser);
        expect(configName).toEqual(this.defaultQueryOrchestratorConfigName);
      });
    });
  });
});
