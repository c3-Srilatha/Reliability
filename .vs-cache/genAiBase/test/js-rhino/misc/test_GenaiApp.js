/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiApp';

// Data model
var c3commonFields = ['name', 'meta', 'version', 'versionEdits', 'typeWithBindings'];
var externalType1Name = 'Genai.TestExternalType1';
var externalType1Fields = ['id', 'latitude', 'longitude', 'population', 'images', 'icon'];
var externalType2Name = 'Genai.TestExternalType2';
var externalType2Fields = ['id', 'firstname', 'middlename', 'lastname', 'gender', 'birthdate', 'ssn', 'salary'];
var fileSourceCollectionType1Name = 'Genai.TestFileSourceCollectionType1';
var fileSourceCollectionType1Fields = [
  'idAlias',
  'petalLengthCm',
  'petalWidthCm',
  'sepalLengthCm',
  'sepalWidthCm',
  'species',
  'encoded',
];

var whiteListedDataModel = {
  [externalType1Name]: {
    fields: externalType1Fields,
  },
  [externalType2Name]: {
    fields: externalType2Fields,
  },
  [fileSourceCollectionType1Name]: {
    fields: fileSourceCollectionType1Fields,
  },
};

describe(filename, function () {
  function deleteSetupCacheDir() {
    C3.FileSystem.fromUrlOrEncodedPath('file:///tmp/Genai.App/SetupCache/').deleteFiles(
      'file:///tmp/Genai.App/SetupCache/',
      true
    );
  }
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.checkIndexZip('alabamaBond-dense');
    this.fuzzyMatcher = Genai.Agent.Tool.Util.StringFuzzyMatcher.inst();
    this.originalDefaultSettings = null;
    try {
      this.originalDefaultSettings = Genai.Project.Settings.getDefaultSettings();
      this.originalDefaultSettings.remove();
    } catch (e) {
      C3.logger(filename).error(e.toString());
    }
    [this.tutorialProject, this.defaultProject] = TestApi.upsertDefaultAndTutorialProjects(this.ctx);
    this.defaultProjectSettings = TestApi.upsertEntity(this.ctx, 'Genai.Project.Settings', {
      id: 'default',
      defaultProject: this.defaultProject,
      tutorialProject: this.tutorialProject,
    }).get('defaultProject.id, tutorialProject.id');

    // Users
    this.adminUser = TestIdp.createTestUsersForGroup('Genai.AdminUser')[0];

    this.basicUser = TestIdp.createTestUsersForGroup('Genai.BasicUser')[0];

    this.syncDataModelAsUser = function (user) {
      return TestRunner.asUser(
        user,
        Lambda.fromJsFunc(function () {
          return Genai.App.syncDataModel();
        }).partiallyCall([])
      );
    };

    this.checkSpiesAndState = function (spies, expectedWhiteListedDataModel) {
      expect(
        spies.spySetState.toHaveBeenCalledWith({
          stateField: 'dataModelState',
          stateValue: Genai.App.State.FieldStatus.SYNCING,
        })
      )
        .withContext('calls #setDataModelState with "SYNCING"')
        .toBeTrue();

      expect(spies.spyGenerateWhiteListedDataModel.toHaveBeenCalled())
        .withContext('calls #generateWhiteListedDataModel')
        .toBeTrue();

      expect(spies.spyFuzzyMatcherUpdateDataModelGraph.toHaveBeenCalled())
        .withContext('updates the data model graph of the string fuzzy matcher')
        .toBeTrue();

      /*
       * Using the call history because "toHaveBeenCalledWith" needs a "toEqual(true)"
       * assertion ("black box" if it fails)
       */
      var fuzzyMatcherDataModel = _.last(
        spies.spyFuzzyMatcherUpdateDataModelGraph.getActionMock().callHistory()
      ).args.get('dataModelGraph');

      expect(spies.spyQOInitialize.getActionMock().callCount()).toEqual(1);

      expect(Genai.App.State.inst().dataModelState)
        .withContext('the final #dataModelState is "SYNCED"')
        .toBe(Genai.App.State.FieldStatus.SYNCED);
    };

    deleteSetupCacheDir();

    this.mockEmptyFetchCount = function (typeName) {
      return TestApi.spyOn(this.ctx, typeName, 'fetchCount')
        .callFake(
          Lambda.fromJsFunc(function (_action, _input) {
            return 0;
          })
        )
        .register();
    };

    this.mockNonEmptyFetchCount = function (typeName) {
      return TestApi.spyOn(this.ctx, typeName, 'fetchCount')
        .callFake(
          Lambda.fromJsFunc(function (_action, _input) {
            return 1;
          })
        )
        .register();
    };

    this.fetchCountExternalType1Spy = this.mockNonEmptyFetchCount(externalType1Name);
    this.fetchCountExternalType2Spy = this.mockNonEmptyFetchCount(externalType2Name);
    this.fetchCountFileSourceCollectionType1Spy = this.mockNonEmptyFetchCount(fileSourceCollectionType1Name);
  });

  afterAll(function () {
    TestIdp.removeUser(this.adminUser);
    TestIdp.removeUser(this.basicUser);
    TestApi.teardown(this.ctx);
    this.fuzzyMatcher.terminate();
    if (this.originalDefaultSettings != null) {
      this.originalDefaultSettings.upsert();
    }
    deleteSetupCacheDir();
  });

  function runAndCheck(testSpies, testSpec, expectCalls, setupConfig) {
    var callCountsBefore = _.mapValues(testSpies, (spy) => {
      return spy.getActionMock().callCount();
    });

    if (setupConfig === 'setupThisNode') {
      Genai.App.setupThisNode(testSpec);
    }

    if (setupConfig === 'setupNodes') {
      Genai.App.setupNodes(['singlenode'], testSpec);
    }

    expect(Genai.App.thisNodeHasBeenSetup(testSpec)).withContext('node should have been setup').toBe(true);
    var callCountsAfter = _.mapValues(testSpies, (spy) => {
      return spy.getActionMock().callCount();
    });
    if (!expectCalls) {
      expect(callCountsAfter).withContext('no calls should have been made').toEqual(callCountsBefore);
    } else {
      if (testSpec.runtimesToInstall) {
        /*
         * Assertion for installRuntime is slightly different because it can be invoked under the hood by other
         * calls and the server code seems to invoke it multiple times per install (it's idempotent )
         */

        // Also, toHaveBeenCalledWith seems very sensitive to format/serialization of inputs...
        var calledRuntimeNames = testSpies.runtimesToInstall
          .getActionMock()
          .callHistory()
          .map((call) => {
            return call.args.runtime.name;
          });
        testSpec.runtimesToInstall.forEach(function (runtimeName) {
          expect(calledRuntimeNames)
            .withContext('installRuntime should have been called with ' + runtimeName)
            .toContain(runtimeName);
        });
      }

      if (testSpec.embedderModelsToInstall) {
        var calledModelNames = testSpies.embedderModelsToInstall
          .getActionMock()
          .callHistory()
          .map((call) => {
            return call.args.embedder.modelName;
          });
        testSpec.embedderModelsToInstall.forEach(function (modelName) {
          expect(calledModelNames)
            .withContext('installRuntime should have been called with ' + modelName)
            .toContain(modelName);
        });
      }

      if (testSpec.retrieverToInitialize) {
        expect(callCountsAfter.retrieverToInitialize)
          .withContext('Expect call count for retrieverToInitialize')
          .toEqual(callCountsBefore.retrieverToInitialize + 1);
      } else {
        expect(callCountsAfter.retrieverToInitialize)
          .withContext('Expect call count for retrieverToInitialize')
          .toEqual(callCountsBefore.retrieverToInitialize);
      }

      if (testSpec.initializeDefaultProjectSettings) {
        expect(callCountsAfter.initializeDefaultProjectSettings)
          .withContext('Expect call count for initializeDefaultProjectSettings')
          .toEqual(callCountsBefore.initializeDefaultProjectSettings + 2); // Tutorial and default
      }

      if (testSpec.setupLambdas) {
        expect(callCountsAfter.setupLambdas)
          .withContext('Expect call count for setupLambdas')
          .toEqual(callCountsBefore.setupLambdas + testSpec.setupLambdas.length);
      }
    }
  }

  // eslint-disable-next-line jasmine/no-describe-variables
  var testSpecs = [
    {
      runtimesToInstall: ['py-query_orchestrator-server-py4j'],
      embedderModelsToInstall: ['mixedbread-ai/mxbai-embed-large-v1'],
      setupLambdas: [Lambda.fromJsSrc("x => Echo.echoAnyJava('foo')")],
      retrieverTypeName: Genai.Retriever.Dense,
    },
    {
      runtimesToInstall: ['py-chunker-server-py4j', 'py-query_orchestrator-server-py4j'],
      retrieverTypeName: Genai.Retriever.Dense,
      retrieverToInitialize: 'alabamaBond-dense',
      initializeDefaultProjectSettings: true,
    },
    {
      retrieverTypeName: Genai.Retriever.Dense,
      retrieverToInitialize: 'alabamaBond-dense',
      initializeDefaultProjectSettings: true,
      setupLambdas: [
        Lambda.fromJsSrc("x => Echo.echoAnyJava('foo')"),
        Lambda.fromJsSrc("x => Echo.echoAnyJava('bar')"),
      ],
    },
  ];

  _.each(testSpecs, function (testSpec, idx) {
    describe('::setupThisNode works for test spec ' + idx, function () {
      beforeEach(function () {
        this.installRuntimeSpy = TestApi.spyOn(this.ctx, 'CondaLibraryManager', 'installRuntime')
          .callThrough() // Since all the runtimes here are already used in genAiBase tests,
          .register(); // This should not incur much overhead or any actual additional install
        this.denseInitializeSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'initialize')
          .callFake(
            Lambda.fromJsFunc(function (_action, _input) {
              return;
            })
          )
          .register();
        this.initializeProjectsSpy = TestApi.spyOn(this.ctx, 'Genai.Project', 'initialize')
          .callFake(
            Lambda.fromJsFunc(function (_action, _input) {
              return;
            })
          )
          .register();
        this.echoAnyJavaSpy = TestApi.spyOn(this.ctx, 'Echo', 'echoAnyJava').callThrough().register();
        this.createEmbedderEngineSpy = TestApi.spyOn(this.ctx, 'GenaiCore.Embedder.Engine', 'createFromEmbedder')
          .callThrough()
          .register();

        this.spies = {
          runtimesToInstall: this.installRuntimeSpy,
          embedderModelsToInstall: this.createEmbedderEngineSpy,
          retrieverToInitialize: this.denseInitializeSpy,
          initializeDefaultProjectSettings: this.initializeProjectsSpy,
          setupLambdas: this.echoAnyJavaSpy,
        };
      });

      afterEach(function () {
        for (var spy in this.spies) {
          this.spies[spy].unregister();
        }
      });

      it('makes expected calls', function () {
        expect(Genai.App.thisNodeHasBeenSetup(testSpec)).toBe(false);
        runAndCheck(this.spies, testSpec, true, 'setupThisNode');
      });

      it('makes no calls once it has been setup', function () {
        expect(Genai.App.thisNodeHasBeenSetup(testSpec)).toBe(true);
        runAndCheck(this.spies, testSpec, false, 'setupThisNode');
      });

      it("calls setup functions again if the 'setup cache' is deleted", function () {
        expect(Genai.App.thisNodeHasBeenSetup(testSpec)).toBe(true);
        deleteSetupCacheDir();
        expect(Genai.App.thisNodeHasBeenSetup(testSpec)).toBe(false);

        runAndCheck(this.spies, testSpec, true, 'setupThisNode');
      });

      afterAll(function () {
        deleteSetupCacheDir();
      });
    });

    describe('::setupNodes works for test spec ' + idx, function () {
      beforeEach(function () {
        this.installRuntimeSpy = TestApi.spyOn(this.ctx, 'CondaLibraryManager', 'installRuntime')
          .callThrough() // Since all the runtimes here are already used in genAiBase tests,
          .register(); // This should not incur much overhead or any actual additional install
        this.denseInitializeSpy = TestApi.spyOn(this.ctx, 'Genai.Retriever.Dense', 'initialize')
          .callFake(
            Lambda.fromJsFunc(function (_action, _input) {
              return;
            })
          )
          .register();
        this.initializeProjectsSpy = TestApi.spyOn(this.ctx, 'Genai.Project', 'initialize')
          .callFake(
            Lambda.fromJsFunc(function (_action, _input) {
              return;
            })
          )
          .register();
        this.echoAnyJavaSpy = TestApi.spyOn(this.ctx, 'Echo', 'echoAnyJava').callThrough().register();
        this.createEmbedderEngineSpy = TestApi.spyOn(this.ctx, 'GenaiCore.Embedder.Engine', 'createFromEmbedder')
          .callThrough()
          .register();

        this.spies = {
          runtimesToInstall: this.installRuntimeSpy,
          embedderModelsToInstall: this.createEmbedderEngineSpy,
          retrieverToInitialize: this.denseInitializeSpy,
          initializeDefaultProjectSettings: this.initializeProjectsSpy,
          setupLambdas: this.echoAnyJavaSpy,
        };
      });

      afterEach(function () {
        for (var spy in this.spies) {
          this.spies[spy].unregister();
        }
      });

      it('makes expected calls', function () {
        expect(Genai.App.thisNodeHasBeenSetup(testSpec)).toBe(false);
        runAndCheck(this.spies, testSpec, true, 'setupNodes');
      });

      it('makes no calls once it has been setup', function () {
        expect(Genai.App.thisNodeHasBeenSetup(testSpec)).toBe(true);
        runAndCheck(this.spies, testSpec, false, 'setupNodes');
      });

      it("calls setup functions again if the 'setup cache' is deleted", function () {
        expect(Genai.App.thisNodeHasBeenSetup(testSpec)).toBe(true);
        deleteSetupCacheDir();
        expect(Genai.App.thisNodeHasBeenSetup(testSpec)).toBe(false);

        runAndCheck(this.spies, testSpec, true, 'setupNodes');
      });

      afterAll(function () {
        deleteSetupCacheDir();
      });
    });
  });

  describe('::handlePkgUpdate', function () {
    beforeAll(function () {
      this.rootPkgName = C3.pkg().name();
      this.externalTypeSameRootPackageFile = 'meta://' + this.rootPkgName + '/src/external/Genai.Foo.c3typ';
      this.externalTypeButDifferentRootPackageFile = 'meta://diff' + this.rootPkgName + '/src/external/Genai.Foo.c3typ';
      this.sourceTypeSameRootPackageFile = 'meta://' + this.rootPkgName + '/src/source/Genai.Foo.c3typ';
      this.nonApplicableTypeSameRootPackageFile = 'meta://' + this.rootPkgName + '/src/misc/Genai.Foo.c3typ';

      this.handlePkgUpdateForFile = function (file) {
        Genai.App.handlePkgUpdate({ targetFile: file });
      };

      this.appState = Genai.App.State.inst();
      this.originalDataModelState = Genai.App.State.inst().dataModelState;
      Genai.App.State.setState('dataModelState', Genai.App.State.FieldStatus.SYNCED);
    });

    afterAll(function () {
      if (this.originalDataModelState) {
        Genai.App.State.setState('dataModelState', this.originalDataModelState);
      }
    });

    describe('when there is a change outside the rootPkg', function () {
      beforeAll(function () {
        this.handlePkgUpdateForFile(this.externalTypeButDifferentRootPackageFile);
      });

      it('the #dataModelState is not updated', function () {
        expect(Genai.App.State.inst().dataModelState).toBe(Genai.App.State.FieldStatus.SYNCED);
      });
    });

    describe('when there is a change inside the rootPkg', function () {
      describe('when the change is in a file that does not apply for the data model', function () {
        beforeAll(function () {
          this.handlePkgUpdateForFile(this.nonApplicableTypeSameRootPackageFile);
        });

        it('the #dataModelState is not updated', function () {
          expect(Genai.App.State.inst().dataModelState).toBe(Genai.App.State.FieldStatus.SYNCED);
        });
      });

      describe('when the change is in an external type', function () {
        beforeAll(function () {
          this.handlePkgUpdateForFile(this.externalTypeSameRootPackageFile);
        });

        it('the #dataModelState is updated to "STALE"', function () {
          expect(Genai.App.State.inst().dataModelState).toBe(Genai.App.State.FieldStatus.STALE);
        });
      });

      describe('when the change is in a source type', function () {
        beforeAll(function () {
          this.handlePkgUpdateForFile(this.sourceTypeSameRootPackageFile);
        });

        it('the #dataModelState is updated to "STALE"', function () {
          expect(Genai.App.State.inst().dataModelState).toBe(Genai.App.State.FieldStatus.STALE);
        });
      });
    });
  });

  describe('::startPkgListener', function () {
    beforeAll(function () {
      this.pkgListenSpy = TestApi.spyOn(this.ctx, 'Pkg', 'listen')
        .callFake(
          Lambda.fromJsFunc(function (_action, _input) {
            return {};
          })
        )
        .register();
      this.handlePkgUpdateSpy = TestApi.spyOn(this.ctx, 'Genai.App', 'handlePkgUpdate')
        .callFake(
          Lambda.fromJsFunc(function (_action, _input) {
            return null;
          })
        )
        .register();

      this.callCountBefore = this.pkgListenSpy.getActionMock().callCount();
      Genai.App.startPkgListener();
      this.callCountAfter = this.pkgListenSpy.getActionMock().callCount();
    });

    afterAll(function () {
      this.handlePkgUpdateSpy.unregister();
      this.pkgListenSpy.unregister();
    });

    it('calls #handlePkgUpdate when a package is updated', function () {
      expect(this.pkgListenSpy.toHaveBeenCalled()).toBeTrue();
      expect(this.callCountAfter - this.callCountBefore).toBe(1);
    });
  });

  describe('::startPkgListener with BasicUser', function () {
    it('should not throw error', function () {
      TestRunner.asUser(
        this.basicUser,
        Lambda.fromJsFunc(function () {
          expect(function () {
            Genai.App.startPkgListener();
          }).not.toThrowError();
        }).partiallyCall([])
      );
    });
  });

  describe('::syncDataModel', function () {
    beforeAll(function () {
      this.whiteListedDataModel = JSON.parse(
        Pkg.file('/genAiBase/test/resource/whitelistedDataModels/windturbine.json').readString()
      ).whiteListedDataModel;

      this.windturbineGraph = Genai.StructuredData.DataModelGraph.make({
        // Cannot use upsertEntity due to removal issues
        id: 'windturbine_test_data_model_graph',
        name: 'windturbine_test_data_model_graph',
        whitelistedDataModel: this.whiteListedDataModel,
      }).merge({ mergeInclude: 'id, name, whitelistedDataModel', returnInclude: 'this' });

      this.spyGenerateWhiteListedDataModel = TestApi.spyOn(this.ctx, 'Genai.App', 'generateWhiteListedDataModel')
        .returnValue(this.whiteListedDataModel)
        .register();

      this.spyQOInitialize = TestApi.spyOn(this.ctx, 'Genai.Agent.QueryOrchestrator', 'initialize')
        .callFake(
          Lambda.fromJsFunc(function (_action, _input) {
            return null;
          })
        )
        .register();

      this.appState = Genai.App.State.inst();
      this.originalDataModelState = Genai.App.State.inst().dataModelState;

      this.spySetState = TestApi.spyOn(this.ctx, 'Genai.App.State', 'setState').callThrough().register();

      this.spyFuzzyMatcherUpdateDataModelGraph = TestApi.spyOn(
        this.ctx,
        'Genai.Agent.Tool.Util.StringFuzzyMatcher',
        'updateDataModelGraph'
      )
        .callFake(
          Lambda.fromJsFunc(function (_action, _input) {
            return null;
          })
        )
        .register();

      this.spyDataModelFetch = TestApi.spyOn(this.ctx, 'Genai.StructuredData.DataModelGraph', 'fetch')
        .returnValue(
          FetchResult.make({
            objs: [this.windturbineGraph],
          })
        )
        .register();

      this.spies = {
        spySetState: this.spySetState,
        spyGenerateWhiteListedDataModel: this.spyGenerateWhiteListedDataModel,
        spyFuzzyMatcherUpdateDataModelGraph: this.spyFuzzyMatcherUpdateDataModelGraph,
        spyDataModelFetch: this.spyDataModelFetch,
        spyQOInitialize: this.spyQOInitialize,
      };

      this.dynamicAgentConfig = Genai.Agent.Dynamic.Config.inst();
      Genai.Agent.Dynamic.Config.inst()
        .withName('yetAnotherAgentCfg')
        .withTestAgentConfigName('yetAnotherTestAgentCfg')
        .setConfig();
      Genai.Agent.Dynamic.Config.inst().withName('yetAnotherTestAgentCfg').setConfig();
      this.yetAnotherAgentConfig = Genai.Agent.Dynamic.Config.forConfigKey('yetAnotherAgentCfg');
      TestApi.upsertEntity(this.ctx, 'Genai.Agent.Dynamic.Persistable', {
        name: 'blabGPT',
        config: this.yetAnotherAgentConfig,
        projects: [this.defaultProject],
      }).get('config');
    });

    afterAll(function () {
      if (this.originalDataModelState) {
        Genai.App.State.setState('dataModelState', this.originalDataModelState);
      }
      for (var spy in this.spies) {
        this.spies[spy].unregister();
      }
      this.dynamicAgentConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
      this.windturbineGraph.remove();
    });

    describe('for all agents associated with the project', function () {
      it('sets "documentation" param in the prompt', function () {
        this.syncDataModelAsUser(this.adminUser);
        this.checkSpiesAndState(this.spies, whiteListedDataModel);
        [
          this.dynamicAgentConfig,
          this.yetAnotherAgentConfig,
          Genai.Agent.Dynamic.Config.forConfigKey(this.dynamicAgentConfig.testAgentConfigName),
          Genai.Agent.Dynamic.Config.forConfigKey(this.yetAnotherAgentConfig.testAgentConfigName),
        ].forEach((config) => {
          var chatManagerSpec = config.getConfig().chatManagerSpec;
          var systemPrompt = chatManagerSpec.systemPrompt;
          expect(systemPrompt?.parameters?.documentation).toContain('gearOilTemperature');

          var forceSolutionPrompt = chatManagerSpec.forceSolutionPrompt;
          expect(forceSolutionPrompt?.parameters?.documentation).toContain('gearOilTemperature');
        });
      });
    });
  });

  describe('::generateWhiteListedDataModel', function () {
    beforeAll(function () {
      this.originalStructuredDataConfig = Genai.StructuredData.Config.inst();
    });

    afterEach(function () {
      this.originalStructuredDataConfig.setConfig();
    });

    describe('when no types are blocked in the structured data config', function () {
      beforeAll(function () {
        Genai.StructuredData.Config.inst().setConfigValue('blockedExternalTypeNames', []);
        Genai.StructuredData.Config.inst().setConfigValue('blockedFileSourceCollectionTypeNames', []);
      });

      it('returns the expected white listed data model', function () {
        expect(JSON.parse(Genai.App.generateWhiteListedDataModel())).toEqual(whiteListedDataModel);
      });

      describe('when some types have no data in the database', function () {
        beforeAll(function () {
          this.fetchCountExternalType1Spy = this.mockEmptyFetchCount(externalType1Name);
        });

        afterAll(function () {
          this.fetchCountExternalType1Spy = this.mockNonEmptyFetchCount(externalType1Name);
        });

        it('they are not included in the white listed data model', function () {
          expect(Genai.App.generateWhiteListedDataModel()).toEqual(_.omit(whiteListedDataModel, externalType1Name));
        });
      });
    });

    describe('when some external types are blocked in the structured data config', function () {
      beforeAll(function () {
        Genai.StructuredData.Config.inst().setConfigValue('blockedExternalTypeNames', [externalType2Name]);
      });

      it('returns the expected white listed data model without the blocked external type', function () {
        expect(Genai.App.generateWhiteListedDataModel()).toEqual(_.omit(whiteListedDataModel, externalType2Name));
      });
    });

    describe('when some file source collection types are blocked in the structured data config', function () {
      beforeAll(function () {
        Genai.StructuredData.Config.inst().setConfigValue('blockedFileSourceCollectionTypeNames', [
          fileSourceCollectionType1Name,
        ]);
      });

      it('returns the expected white listed data model without the blocked file source collection type', function () {
        expect(Genai.App.generateWhiteListedDataModel()).toEqual(
          _.omit(whiteListedDataModel, fileSourceCollectionType1Name)
        );
      });
    });

    describe('when all external types and file source collections are blocked in the structured data config', function () {
      beforeAll(function () {
        Genai.StructuredData.Config.inst().setConfigValue('blockedExternalTypeNames', [
          externalType1Name,
          externalType2Name,
        ]);
        Genai.StructuredData.Config.inst().setConfigValue('blockedFileSourceCollectionTypeNames', [
          fileSourceCollectionType1Name,
        ]);
      });

      it('returns an empty object', function () {
        expect(Genai.App.generateWhiteListedDataModel()).toEqual({});
      });
    });
  });

  describe('::addWhiteListedDataModelEntry', function () {
    beforeAll(function () {
      this.initialWhiteListedDataModel = C3.Map.fromJson({
        [externalType2Name]: {
          fields: externalType2Fields,
        },
      });
    });

    describe('when the type is valid', function () {
      beforeAll(function () {
        this.finalWhiteListedDataModel = Genai.App.addWhiteListedDataModelEntry(
          this.initialWhiteListedDataModel,
          C3.type(externalType1Name)
        );
        this.addedFields = this.finalWhiteListedDataModel.get(externalType1Name).fields;
      });

      it('adds the type fields to the white listed data model', function () {
        expect(this.addedFields).toEqual(externalType1Fields);
      });

      it('does not add  fields that are not explicitly declared in the type', function () {
        expect(_.intersection(this.addedFields, c3commonFields)).toEqual([]);
      });

      it('keeps the entries that were already in the white listed data model', function () {
        expect(this.finalWhiteListedDataModel.keys()).toEqual([externalType2Name, externalType1Name]);
      });
    });

    describe('when the type does not exist', function () {
      beforeAll(function () {
        this.finalWhiteListedDataModel = Genai.App.addWhiteListedDataModelEntry(
          this.initialWhiteListedDataModel,
          C3.type('Genai.NonExistentType')
        );
      });

      it('does not add the type to the white listed data model', function () {
        expect(this.finalWhiteListedDataModel).toEqual(this.initialWhiteListedDataModel);
      });
    });

    describe('when an error is thrown when trying to access the type meta', function () {
      beforeAll(function () {
        this.spyExternalType1Meta = TestApi.spyOn(this.ctx, 'Type', 'meta')
          .callFake(
            Lambda.fromJsFunc(function (_action, _input) {
              throw new Error('Error accessing type meta');
            })
          )
          .register();
        this.finalWhiteListedDataModel = Genai.App.addWhiteListedDataModelEntry(
          this.initialWhiteListedDataModel,
          C3.type(externalType1Name)
        );
      });

      afterAll(function () {
        this.spyExternalType1Meta.unregister();
      });

      it('does not add the type to the white listed data model', function () {
        expect(this.finalWhiteListedDataModel).toEqual(this.initialWhiteListedDataModel);
      });
    });
  });

  describe('::runningNodesForPools', function () {
    it('returns 1 running node', function () {
      var nodePools = ['singlenode'];
      var nodes = Genai.App.runningNodesForPools(nodePools);
      expect(nodes.length).toBe(1);
    });
  });
});
