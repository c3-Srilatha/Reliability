/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiAgentDynamicPersistable';

describe(filename, function () {
  beforeAll(function () {
    TestApi.ensureDefaultProjectExists();
    TestApi.setOpenAiApiKey();
    TestApi.setAwsBedrockKeys();

    // Ensure that, if another test failed to clean up, the LLM mocking is disabled
    this.origMockLlmConfig = Genai.Llm.MockLlmConfig.inst().getConfig();
    this.origMockLlmConfig.setConfigValue('mode', 'off');

    this.ctx = TestApi.createContext(filename);
    this.projects = TestApi.upsertBatchEntity(this.ctx, 'Genai.Project', [
      {
        id: 'test-project-1',
        name: 'test-project-1',
        queryOrchestratorConfigName: 'test-config1',
        chunkerConfig: 'default',
      },
      {
        id: 'test-project-2',
        name: 'test-project-2',
        queryOrchestratorConfigName: 'test-config2',
        chunkerConfig: 'default',
      },
    ]);

    TestApi.upsertEntity(this.ctx, 'Genai.Project.Settings', {
      id: 'default',
      defaultProject: this.projects[0],
    }).get();

    this.adminUser = TestIdp.createTestUsersForGroup('Genai.AdminUser')[0];
    this.userSettings = Genai.App.UserSettings.forUser(this.adminUser).setActiveProject(this.projects[0]);

    TestApi.upsertBatchEntity(this.ctx, 'Genai.Agent.Dynamic.Persistable', [
      {
        name: 'DynamicToolName1',
        config: Genai.Agent.Dynamic.make({ name: 'DynamicAgent_default' }).config(),
      },
      {
        name: 'DynamicToolName2',
        config: Genai.Agent.Dynamic.make({ name: 'DynamicAgent_default' }).config(),
      },
      {
        name: 'DynamicToolName3',
        config: Genai.Agent.Dynamic.make({ name: 'DynamicAgent_default' }).config(),
        projects: [this.projects[0]],
      },
      {
        name: 'DynamicToolName4',
        config: Genai.Agent.Dynamic.make({ name: 'DynamicAgent_default' }).config(),
        projects: [this.projects[1]],
      },
    ]);

    this.testToolBobsAge = TestApi.upsertEntity(this.ctx, 'Genai.Agent.Dynamic.Tool', {
      id: 'test_tool_bobs_age',
      name: 'test_tool_bobs_age',
      description: 'A tool used for testing, multiplies two numbers and assigns it to bobs age',
      descriptionForLlm: 'A tool used for testing, multiplies two numbers and assigns it to bobs age',
      pySrc: C3.File.make({ url: 'meta://genAiBase/test/resource/Genai.Agent.Dynamic/test_tool_bobs_age.py' }),
    }).get();
  });

  afterAll(function () {
    this.origMockLlmConfig.setConfigValue('mode', this.origMockLlmConfig.mode);
    TestIdp.removeUser(this.adminUser);
    var filter = Filter.contains('name', 'DynamicToolName').or().eq('name', 'MyNewAgent');
    Genai.Agent.Dynamic.Persistable.removeAll({ filter: filter }, true);
    Genai.Agent.Dynamic.Tool.removeAll({ filter: 'id == "test_tool_bobs_age"' }, true);
    Genai.Project.removeAll({ filter: 'name == "test-project-1" || name == "test-project-2"' }, true);
    TestApi.teardown(this.ctx);
  });

  describe('with no projects', function () {
    beforeAll(function () {
      this.totalCount = Genai.Agent.Dynamic.Persistable.fetchCount();
    });

    describe('fetchCountForUser', function () {
      it('with no spec returns the count of all entities', function () {
        var count = Genai.Agent.Dynamic.Persistable.fetchCountForUser();
        expect(count).toEqual(this.totalCount);
      });

      it('with a filter spec returns only the count of filtered entities', function () {
        var count = Genai.Agent.Dynamic.Persistable.fetchCountForUser({ filter: 'name == "DynamicToolName1"' });
        expect(count).toEqual(1);
      });
    });

    describe('fetch for user', function () {
      it('with no spec returns all entities', function () {
        var count = Genai.Agent.Dynamic.Persistable.fetchForUser().objs.size;
        expect(count).toEqual(this.totalCount);
      });

      it('with a filter spec returns only the correctly filtered entities', function () {
        var count = Genai.Agent.Dynamic.Persistable.fetchForUser({ filter: 'name == "DynamicToolName1"' }).objs.size;
        expect(count).toEqual(1);
      });
    });
  });

  describe('with a project', function () {
    describe('fetchCountForUser', function () {
      it('with no spec returns only the count of entities for the the users project', function () {
        var count = TestRunner.asUser(
          this.adminUser,
          Lambda.fromJsFunc(function () {
            return Genai.Agent.Dynamic.Persistable.fetchCountForUser();
          })
        );
        expect(count).toEqual(1);
      });

      it('with a spec returns the count of entities for the users project with filter applied', function () {
        var count = TestRunner.asUser(
          this.adminUser,
          Lambda.fromJsFunc(function () {
            return Genai.Agent.Dynamic.Persistable.fetchCountForUser({ filter: "name == 'FakeToolName'" });
          })
        );
        expect(count).toEqual(0);
      });
    });

    describe('fetchForUser', function () {
      it('with no spec returns only the entities for the the users project', function () {
        var res = TestRunner.asUser(
          this.adminUser,
          Lambda.fromJsFunc(function () {
            return Genai.Agent.Dynamic.Persistable.fetchForUser();
          })
        ).objs;
        expect(res.size).toEqual(1);
        expect(res[0].name).toEqual('DynamicToolName3');
      });

      it('with a spec returns the entities for the users project with filter applied', function () {
        var res = TestRunner.asUser(
          this.adminUser,
          Lambda.fromJsFunc(function () {
            return Genai.Agent.Dynamic.Persistable.fetchForUser({ filter: "name == 'FakeToolName'" });
          })
        ).objs;
        expect(res.size).toEqual(0);
      });
    });
  });

  describe('::save function correctly handles agent persistence', function () {
    beforeAll(function () {
      Genai.App.UserSettings.forUser(this.adminUser).setActiveProject('default');
      this.saveAgentAsUser = function (user, saveSpec) {
        return TestRunner.asUser(
          user,
          Lambda.fromJsFunc(function (saveSpec) {
            return Genai.Agent.Dynamic.Persistable.save(saveSpec);
          }).partiallyCall([saveSpec])
        ).getMissing({
          include: 'name, uiOptions, promptParamValues, config',
        });
      };

      this.query = 'What is your name?';

      this.agentName = 'MyNewAgent';
      this.uiOptions = {
        icon: 'globe',
        displayName: 'Test Agent',
      };
      this.promptParamValues = C3.Map.ofStrToStr('instructions', 'When asked about your name, always say it is Mario');
      this.llmClientConfigName = 'claude_3.5_sonnet';
      this.spec = Genai.Agent.Persistable.SaveSpec.make({
        id: undefined,
        initializationSpec: {
          name: this.agentName,
          llmConfigName: this.llmClientConfigName,
          maxSeconds: 100,
        },
        uiOptions: this.uiOptions,
        promptParamValues: this.promptParamValues,
        tools: [this.testToolBobsAge.id],
        llmClientConfigName: this.llmClientConfigName,
      });

      Genai.Agent.QueryOrchestrator.stopAllHandlers();
      this.savedAgent = this.saveAgentAsUser(this.adminUser, this.spec);
      TestApi.waitForSetup(this.ctx, null, 1, 120);
    });

    afterAll(function () {
      this.savedAgent.remove();
    });

    describe('when saving a new agent', function () {
      it('saves the instance name', function () {
        expect(this.savedAgent.name).toEqual(this.agentName);
      });

      it('saves the UI options', function () {
        expect(this.savedAgent.uiOptions).toEqual(this.uiOptions);
      });

      it('saves the prompt param values', function () {
        expect(this.savedAgent.promptParamValues).toEqual(this.promptParamValues);
      });

      it('links the agent to the default project', function () {
        var project = this.savedAgent.get('projects').projects.first();
        expect(project.id).toEqual('default');
      });

      describe('the config parameters', function () {
        beforeAll(function () {
          this.config = this.savedAgent.config.getConfig();
          this.baseConfigName = Genai.Agent.Dynamic.Config.inst().testAgentConfigName;
          this.baseConfig = Genai.Agent.Dynamic.Config.forConfigKey(this.baseConfigName).getConfig();
        });

        it('saves the config with the correct name', function () {
          expect(this.config.name).toEqual(this.agentName);
        });

        it('update the overwritten default config parameters', function () {
          expect(this.config.maxSeconds).toEqual(100);
        });

        it('keeps the non overwritten default config parameters', function () {
          expect(this.config.chatManagerSpec.systemPrompt.rawTemplate).toEqual(
            this.baseConfig.chatManagerSpec.systemPrompt.rawTemplate
          );
          expect(this.config.testAgentConfigName).toEqual(this.baseConfig.testAgentConfigName);
        });

        it('saves the config with the correct tools', function () {
          var toolkit = this.config.toolkit;
          expect(toolkit.id).not.toEqual(this.baseConfig.toolkit.id);
          expect(toolkit.tools.size).toEqual(1);
          expect(toolkit.tools.first().id).toEqual(this.testToolBobsAge.id);
        });

        it('generates a unique toolkit ID when creating a new agent', function () {
          var toolkit = this.config.toolkit.get('id, name');
          expect(toolkit.id).toEqual('Genai.Agent.Dynamic.Persistable-MyNewAgent-saved');
          expect(toolkit.name).toEqual('Genai.Agent.Dynamic.Persistable-MyNewAgent-saved');
        });

        it('saves the config with the correct llm client config', function () {
          expect(this.config.llmConfigName).toEqual(this.llmClientConfigName);
        });
      });

      describe('the initialization logic', function () {
        beforeAll(function () {
          /*
           * Stop all handlers to ensure the agent is re-initialized
           * On the UI, admin will restart search engine, which triggers this API
           */
          Genai.Agent.QueryOrchestrator.terminate();
          Genai.Agent.QueryOrchestrator.stopAllHandlers();
          Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_dynamicAgent').initialize(true);
        });

        it('loads the agent into the orchestrator so it can be used to answer queries', function () {
          this.executeSpec = Genai.Query.ExecuteSpec.make({ agent: this.savedAgent });
          var queryResult = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
            searchQuery: Genai.Query.fromString(this.query).withExecuteSpec(this.executeSpec),
          });

          queryResult = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_dynamicAgent')
            .query(queryResult)
            .getMissing({ include: 'answer' });
          expect(queryResult.answer)
            .withContext('Engine Log: ' + queryResult.get('engineLog').engineLog)
            .toContain('Mario');
        });
      });
    });

    describe('when updating an existing agent', function () {
      beforeAll(function () {
        this.saveSpec = Genai.Agent.Persistable.SaveSpec.make({
          id: this.savedAgent.id,
          uiOptions: {
            icon: 'globe',
            displayName: 'Test Agent 2',
          },
          promptParamValues: C3.Map.ofStrToStr('instructions', 'When asked about your name, always say it is Luigi'),
          initializationSpec: {
            name: this.agentName,
          },
        });

        this.updatedInstance = this.saveAgentAsUser(this.adminUser, this.saveSpec);
        TestApi.waitForSetup(this.ctx, null, 1, 120);
        this.updatedConfig = this.updatedInstance.config.getConfig();
      });

      it('keeps the agent name', function () {
        expect(this.updatedInstance.name).toEqual(this.savedAgent.name);
      });

      it('updates the agent with the values from the save spec', function () {
        expect(this.updatedInstance.uiOptions).toEqual(this.saveSpec.uiOptions);
        expect(this.updatedInstance.promptParamValues).toEqual(this.saveSpec.promptParamValues);
      });

      it('keeps the values that are not overwritten by the save spec', function () {
        expect(this.updatedConfig.maxSeconds).toEqual(this.savedAgent.config.getConfig().maxSeconds);
        expect(this.updatedConfig.toolkit).toEqual(this.savedAgent.config.getConfig().toolkit);
        expect(this.updatedConfig.chatManagerSpec).toEqual(this.savedAgent.config.getConfig().chatManagerSpec);
        expect(this.updatedConfig.testAgentConfigName).toEqual(this.savedAgent.config.getConfig().testAgentConfigName);
      });

      describe('the initialization logic', function () {
        beforeAll(function () {
          /*
           * Stop all handlers to ensure the agent is re-initialized
           * On the UI, admin will restart search engine, which triggers this API
           */
          Genai.Agent.QueryOrchestrator.terminate();
          Genai.Agent.QueryOrchestrator.stopAllHandlers();
          Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_dynamicAgent').initialize(true);
        });

        it('loads the agent into the orchestrator so it can be used to answer queries', function () {
          this.executeSpec = Genai.Query.ExecuteSpec.make({ agent: this.updatedInstance });
          var queryResult = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
            searchQuery: Genai.Query.fromString(this.query).withExecuteSpec(this.executeSpec),
          });

          queryResult = Genai.Agent.QueryOrchestrator.forConfigKey('QueryOrchestrator_dynamicAgent')
            .query(queryResult)
            .getMissing({ include: 'answer' });
          expect(queryResult.answer)
            .withContext('Engine Log: ' + queryResult.get('engineLog').engineLog)
            .toContain('Luigi');
        });
      });
    });

    it('throws an error if spec name is missing', function () {
      expect(function () {
        Genai.Agent.Dynamic.Persistable.save({});
      }).toThrowError();
    });

    it('throws an error if the agent already exists', function () {
      var saveSpec = Genai.Agent.Persistable.SaveSpec.make({
        id: undefined,
        uiOptions: {
          icon: 'globe',
          displayName: 'Test Agent 2',
        },
        promptParamValues: C3.Map.ofStrToStr('instructions', 'When asked about your name, always say it is Luigi'),
        initializationSpec: {
          name: this.agentName,
        },
      });

      expect(function () {
        Genai.Agent.Dynamic.Persistable.save(saveSpec);
      }).toThrowError();
    });

    it('throws an error if an agent with the same name already exists', function () {
      expect(function () {
        Genai.Agent.Dynamic.Persistable.save({ name: this.dateString });
      }).toThrowError();
    });

    describe('when there is NOT an active project (using query orchestrator handler)', function () {
      beforeAll(function () {
        this.originalChatBotConfig = Genai.ChatBot.Config.getConfig();
        Genai.ChatBot.Config.setConfigValue('handlerTypeName', 'Genai.Agent.QueryOrchestrator');
        this.userSettings.remove();
        this.saveSpecNoProjects = Genai.Agent.Persistable.SaveSpec.make({
          id: this.savedAgent.id,
          uiOptions: {
            icon: 'globe',
            displayName: 'Test Agent 3',
          },
          promptParamValues: C3.Map.ofStrToStr('instructions', 'When asked about your name, always say it is Luigi'),
          initializationSpec: {
            name: this.agentName,
          },
        });

        this.savedAgentNoProjects = this.saveAgentAsUser(this.adminUser, this.saveSpecNoProjects);
      });

      afterAll(function () {
        this.originalChatBotConfig.setConfig();
        this.userSettings = Genai.App.UserSettings.forUser(this.adminUser).setActiveProject(this.projects[0]);
      });

      it('links the agent to the default project', function () {
        expect(this.savedAgentNoProjects.get('projects').projects[0].id).toEqual('default');
      });
    });

    describe('when the saved name is different from the config name', function () {
      beforeAll(function () {
        this.dynamicAgent = Genai.Agent.Dynamic.Persistable.forId('default');
        this.dynamicAgentToolkit = this.dynamicAgent.config.getConfig().toolkit.get('this');
        this.saveSpec = Genai.Agent.Persistable.SaveSpec.make({
          id: this.dynamicAgent.id,
          initializationSpec: {
            name: 'Dynamic Agent',
            llmConfigName: 'gpt_4o',
          },
          uiOptions: {
            displayName: 'Dynamic Agent',
            displayDescription: 'C3 GenAI will refine its plan iteratively based on observations.',
            icon: 'sparkles',
          },
          promptParamValues: {},
          tools: [
            'execute_retrieval_spec',
            'fuzzy_match_string_values',
            'rag_unified',
            'unstructured_data_question_answering',
          ],
        });

        this.configCountBeforeSave = Genai.Agent.Dynamic.Config.listConfigKeys().collect();
        this.updatedInstance = this.saveAgentAsUser(this.adminUser, this.saveSpec);
        TestApi.waitForSetup(this.ctx, null, 1, 120);
        this.configCountAfterSave = Genai.Agent.Dynamic.Config.listConfigKeys().collect();
      });

      it('does not create a new config', function () {
        expect(this.configCountAfterSave.size).toEqual(this.configCountBeforeSave.size);
      });

      it('saves the agent with the correct toolkit', function () {
        var toolkit = this.updatedInstance.config.getConfig().toolkit.get('this');
        expect(toolkit.id).withContext('incorrect toolkit id').toEqual(this.dynamicAgentToolkit.id);
        expect(toolkit.name).withContext('incorrect toolkit name').toEqual(this.dynamicAgentToolkit.name);
      });
    });
  });

  describe('setActiveOrInactive', function () {
    beforeAll(function () {
      this.dynamicAgent = TestApi.upsertEntity(this.ctx, 'Genai.Agent.Dynamic.Persistable', {
        name: 'testAgent',
        config: Genai.Agent.Dynamic.make({ name: 'DynamicAgent_default' }).config(),
        inactive: true,
      });
    });

    afterAll(function () {
      this.dynamicAgent.remove();
    });

    describe('when setting active to false', function () {
      it('deactivates the agent', function () {
        this.dynamicAgent.setActiveOrInactive(false);
        this.result = this.dynamicAgent.get('inactive');
        expect(this.result.inactive).toBe(true);
      });
    });

    describe('when setting active to true', function () {
      it('activates the agent', function () {
        this.dynamicAgent.setActiveOrInactive(true);
        this.result = this.dynamicAgent.get('inactive');
        expect(this.result.inactive).toBe(false);
      });
    });
  });

  describe('::queryFromTestCase', function () {
    beforeAll(function () {
      this.testAgentCfg = Genai.Agent.Dynamic.Config.forConfigKey('DynamicAgent_test').getConfig();
      this.initialMaxSteps = this.testAgentCfg.maxSteps;

      this.specFields = Genai.Agent.Dynamic.InitializationSpec.specFromConfig(this.testAgentCfg);
      this.baseTestSpec = Genai.Agent.Dynamic.TestSpec.make(this.specFields);

      this.dynamicAgentPersistable = Genai.Agent.Dynamic.Persistable.forId('default');
    });

    afterAll(function () {
      this.testAgentCfg.clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    describe('.withChatManagerSpec', function () {
      beforeAll(function () {
        this.testAgentCfg.setConfigValue('maxSteps', 1);

        this.chatManagerSpec = this.baseTestSpec.chatManagerSpec.withSystemPrompt(
          'You are an AI that {{instructions}}'
        );
        this.instructions = "always responds with 'Yes, the answer is unequivocally 99.'";
        this.promptParamValues = C3.Map.ofStrToStr('instructions', this.instructions);
        this.testSpec = this.baseTestSpec
          .withChatManagerSpec(this.chatManagerSpec)
          .withPromptParamValues(this.promptParamValues);

        this.inProgressQueryResult = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
          searchQuery: Genai.Query.fromString(
            'What is Bobs age given inputs 8 and 9? Do not answer directly, use the tools provided. Also make sure to stop generation after each tag to allow for potential user feedback.'
          ),
        }).get();
      });

      afterAll(function () {
        this.testAgentCfg.setConfigValue('maxSteps', this.initialMaxSteps);
      });

      it('uses the specified system prompt', function () {
        this.inProgressQueryResult = this.dynamicAgentPersistable
          .queryFromTestCase(this.testSpec, this.inProgressQueryResult)
          .get('failed, engineLog');
        expect(this.inProgressQueryResult.failed)
          .withContext('engineLog:' + this.inProgressQueryResult.engineLog)
          .toBeFalsy();
        var plan = this.inProgressQueryResult.get('plan.this').plan;
        var step = plan.get('steps.this').steps.first();
        expect(step.logs.filled_prompt.system)
          .withContext('engineLog:' + this.inProgressQueryResult.engineLog)
          .toContain('99');
      });
    });

    describe('.withToolkit', function () {
      beforeAll(function () {
        this.testSpec = this.baseTestSpec.withTools([this.testToolBobsAge]);

        this.inProgressQueryResult = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
          searchQuery: Genai.Query.fromString(
            'What is Bobs age given inputs 8 and 9? Do not answer directly, use the tools provided. Also make sure to stop generation after each tag to allow for potential user feedback.'
          ),
        }).get();
      });

      it('uses the specified tool', function () {
        this.inProgressQueryResult = this.dynamicAgentPersistable
          .queryFromTestCase(this.testSpec, this.inProgressQueryResult)
          .get('failed, engineLog, answer');
        expect(this.inProgressQueryResult.failed)
          .withContext('engineLog:' + this.inProgressQueryResult.engineLog)
          .toBeFalsy();
        TestApi.checkStringMatches(this.inProgressQueryResult.answer, ['72', 'seventy two', 'seventy-two'], false);
      });
    });

    describe('.withLlmClientConfigName', function () {
      beforeAll(function () {
        this.testSpec = this.baseTestSpec.withLlmClientConfigName('blab_gpt');

        this.inProgressQueryResult = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
          searchQuery: Genai.Query.fromString(
            'What is Bobs age given inputs 8 and 9? Do not answer directly, use the tools provided. Also make sure to stop generation after each tag to allow for potential user feedback.'
          ),
        }).get();
      });

      it('uses the specified llm client config', function () {
        this.inProgressQueryResult = this.dynamicAgentPersistable
          .queryFromTestCase(this.testSpec, this.inProgressQueryResult)
          .get('failed, engineLog');
        expect(this.inProgressQueryResult.failed).toBeTruthy();
        TestApi.checkStringMatches(
          this.inProgressQueryResult.engineLog,
          ['GenaiCore.Llm.Completion.Client not found for config key'],
          false
        );
      });
    });
  });

  describe('the test agent config', function () {
    beforeAll(function () {
      this.defaultConfig = Genai.Agent.Dynamic.Config.inst();
      this.defaultConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
      this.defaultConfig = this.defaultConfig.getConfig();
      this.testAgentConfigName = this.defaultConfig.testAgentConfigName;
      this.testAgentConfig = Genai.Agent.Dynamic.Config.forConfigKey(this.testAgentConfigName);
      this.testAgentConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
      this.testAgentConfig = this.testAgentConfig.getConfig();
      this.defaultConfigJson = this.defaultConfig.toJson();
      this.defaultConfigKeys = Object.keys(this.defaultConfigJson);
      this.testAgentConfigJson = this.testAgentConfig.toJson();
      this.testAgentConfigKeys = Object.keys(this.testAgentConfigJson);
      this.ignoredFields = ['name', 'testAgentConfigName', 'configOverride'];
    });

    it('has the same number of fields as the default config', function () {
      expect(_.difference(this.defaultConfigKeys, this.ignoredFields).length).toEqual(
        _.difference(this.testAgentConfigKeys, this.ignoredFields).length
      );
    });

    it('matches the default agent config', function () {
      for (let key of this.defaultConfigKeys) {
        if (this.ignoredFields.indexOf(key) === -1) {
          var testValue = this.testAgentConfigJson[key];
          var defaultValue = this.defaultConfigJson[key];

          if (this.defaultConfigJson[key].id) {
            defaultValue = defaultValue.id;
            testValue = testValue.id;
          } else if (key === 'chatManagerSpec') {
            defaultValue = defaultValue.systemPrompt.rawTemplate + defaultValue.forceSolutionPrompt.rawTemplate;
            testValue = testValue.systemPrompt.rawTemplate + testValue.forceSolutionPrompt.rawTemplate;
          }

          expect(defaultValue)
            .withContext(
              'the field "' +
                key +
                '" from the default config does not match the test agent config. \n Default Value: ' +
                this.defaultConfigJson[key] +
                '\n' +
                'Test Agent Value: ' +
                this.testAgentConfigJson[key]
            )
            .toEqual(testValue);
        }
      }
    });
  });

  describe('::initialize', function () {
    beforeAll(function () {
      TestApi.ensureDefaultProjectExists();
      this.dynamicAgentPersistable = Genai.Agent.Dynamic.Persistable.forId('default');
      this.dynamicAgent = Genai.Agent.Dynamic.make({
        name: this.dynamicAgentPersistable.config.name,
      });
    });

    describe('when there are no prompt param values set', function () {
      it('initializes the agent without erroring', function () {
        expect(
          function () {
            this.dynamicAgentPersistable.initialize(true);
          }.bind(this)
        ).not.toThrow();
      });
    });

    describe('when there are prompt param values set', function () {
      beforeAll(function () {
        this.originalPromptParamValues = this.dynamicAgentPersistable.get('promptParamValues').promptParamValues;
        this.instructions = 'Always say hi!';
        this.newPromptParamValues = C3.Map.ofStrToStr('instructions', this.instructions);

        this.dynamicAgentPersistable = this.dynamicAgentPersistable
          .withPromptParamValues(this.newPromptParamValues)
          .merge({ mergeInclude: 'promptParamValues', returnInclude: 'promptParamValues, config' });

        this.dynamicAgentPersistable.initialize(true);
      });

      afterAll(function () {
        this.dynamicAgentPersistable
          .withPromptParamValues(this.originalPromptParamValues)
          .merge({ mergeInclude: 'promptParamValues' });
      });

      it('initializes the agent and sets the prompt param values in the system prompt', function () {
        var chatManagerSpec = this.dynamicAgentPersistable.config.getConfig().chatManagerSpec;
        var systemPrompt = chatManagerSpec.systemPrompt.toString();
        expect(systemPrompt).toContain(this.newPromptParamValues.instructions);
      });
    });
  });

  describe('::fetchFormData', function () {
    beforeAll(function () {
      this.fetchFormDataAsUser = function (user, agentId) {
        return TestRunner.asUser(
          user,
          Lambda.fromJsFunc(function (agentId) {
            return Genai.Agent.Dynamic.Persistable.fetchFormData(agentId);
          }).partiallyCall([agentId])
        );
      };
    });

    describe('when the agent exists', function () {
      beforeAll(function () {
        this.agentId = 'default';
        this.agent = this.fetchFormDataAsUser(this.adminUser, this.agentId);
      });

      it('returns the agent with the correct name', function () {
        expect(this.agent.name).toEqual('Dynamic Agent');
      });

      it('returns the agent with the correct config', function () {
        expect(this.agent.config.name).toEqual('DynamicAgent_default');
      });

      describe('the UI options', function () {
        describe('when the description is a system translation', function () {
          it('translates the description', function () {
            expect(this.agent.uiOptions.displayDescription).toEqual(
              'C3 GenAI will refine its plan iteratively based on observations.'
            );
          });
        });

        describe('when the description is not a system translation', function () {
          beforeAll(function () {
            this.originalUiOptions = this.agent.uiOptions;
            this.newDescription = 'Test description';
            Genai.Agent.Persistable.forId(this.agentId)
              .withUiOptions(Object.assign({}, this.originalUiOptions, { displayDescription: this.newDescription }))
              .merge({ mergeInclude: 'uiOptions' });

            this.agent = this.fetchFormDataAsUser(this.adminUser, this.agentId);
          });

          afterAll(function () {
            Genai.Agent.Persistable.forId(this.agentId)
              .withUiOptions(this.originalUiOptions)
              .merge({ mergeInclude: 'uiOptions' });
          });

          it('returns the raw description', function () {
            expect(this.agent.uiOptions.displayDescription).toEqual(this.newDescription);
          });
        });
      });

      describe('the prompt param values', function () {
        beforeAll(function () {
          this.originalPromptParamValues = this.agent.promptParamValues;
          this.instructions = 'Always say hi!';
          this.newPromptParamValues = C3.Map.ofStrToStr('instructions', this.instructions);

          Genai.Agent.Persistable.forId(this.agentId)
            .withPromptParamValues(this.newPromptParamValues)
            .merge({ mergeInclude: 'promptParamValues' });

          this.agent = this.fetchFormDataAsUser(this.adminUser, this.agentId);
        });

        afterAll(function () {
          Genai.Agent.Persistable.forId(this.agentId)
            .withPromptParamValues(this.originalPromptParamValues)
            .merge({ mergeInclude: 'promptParamValues' });
        });

        it('returns the prompt param values', function () {
          expect(this.agent.promptParamValues.instructions).toEqual(this.instructions);
        });
      });
    });

    describe('when the agent does NOT exist', function () {
      beforeAll(function () {
        this.agentId = 'nonExistentAgentId';
        this.agent = this.fetchFormDataAsUser(this.adminUser, this.agentId);
      });

      it('returns an empty object, allowing the UI to reset the form gracefully', function () {
        expect(this.agent).toEqual({});
      });
    });
  });
});
