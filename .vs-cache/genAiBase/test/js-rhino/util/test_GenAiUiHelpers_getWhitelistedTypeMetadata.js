/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenAiUiHelpers_getWhitelistedTypeMetadata';

// TODO re-enable as a genAiSearch test since GenAiUiHelpers is defined in genAiSearch
xdescribe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    Genai.ChatBot.Config.make().getConfig().setConfigValue('handlerTypeName', 'Genai.Agent.QueryOrchestrator');

    this.toolkit = Genai.Agent.Toolkit.forConfigKey('QueryOrchestrator_default');

    this.originalQoConfig = Genai.Agent.Config.forConfigKey('QueryOrchestrator_default');

    var staticPlanner = Genai.Agent.Planner.make({
      plannerType: 'Genai.Agent.StaticPlanner',
      plannerConfigName: 'StaticPlanner_default',
      uiOptions: {
        displayName: '<displayName>',
        displayDescription: '<displayDescription>',
        icon: '<icon>',
      },
    });

    Genai.Agent.Config.forConfigKey('QueryOrchestrator_default')
      .withToolkitName(this.toolkit.name)
      .withPlanners([staticPlanner])
      .setConfig();

    this.dataModelGraph = Genai.StructuredData.DataModelGraph.forName('readiness_test');
    this.whitelistedDataModel = this.dataModelGraph.whitelistedDataModel;

    Genai.Agent.Tool.EvalQuery.forId('EvalQuery_default')
      .config()
      .setConfigValue('dataModelGraph', this.dataModelGraph);
    Genai.Agent.Tool.EvalMetricsQuery.forId('EvalMetricsQuery_default')
      .config()
      .setConfigValue('dataModelGraph', this.dataModelGraph);

    Genai.Agent.Tool.EvalQuery.forId('EvalQuery_default_test')
      .config()
      .setConfigValue('dataModelGraph', Genai.StructuredData.DataModelGraph.forName('readiness_test'));

    this.staticPlannerAgent = Genai.Agent.StaticPlanner.make({ name: 'StaticPlanner_default' });
    this.staticPlannerAgent.config().setConfigValue('tools', []); // No tools to start

    Genai.PyUtil.terminateAllEngines();
    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    Genai.Agent.Tool.EvalQuery.Config.forConfigKey('EvalQuery_default').clearConfigAndSecretOverride(
      ConfigOverride.APP
    );
    Genai.Agent.Tool.EvalQuery.Config.forConfigKey('EvalQuery_default_test').clearConfigAndSecretOverride('APP');
    Genai.Agent.StaticPlanner.Config.forConfigKey('StaticPlanner_default').clearConfigAndSecretOverride('APP');
    this.originalQoConfig.setConfig();
    TestApi.teardown(this.ctx);
  });

  describe('Genai.ConfigUtil', function () {
    describe('#structuredDataWhitelistedTypes', function () {
      it('returns expected whitelisted data model', function () {
        var whitelistedModels = Genai.ConfigUtil.structuredDataWhitelistedTypes();
        expect(whitelistedModels).toEqual([this.whitelistedDataModel, this.whitelistedDataModel]);
      });

      describe('MSS first tool in toolkit', function () {
        beforeAll(function () {
          this.toolkit.withTools(this.toolkit.tools.insertAt(0, { id: 'MultiSourceSynthesizer_default' })).setConfig();
        });

        it('returns expected whitelisted data model', function () {
          var whitelistedModels = Genai.ConfigUtil.structuredDataWhitelistedTypes();
          expect(whitelistedModels).toEqual([this.whitelistedDataModel, this.whitelistedDataModel]);
        });

        afterAll(function () {
          this.toolkit.clearConfigAndSecretOverride(ConfigOverride.APP);
        });
      });

      describe('with tools in the planner', function () {
        beforeAll(function () {
          // Add planner tools
          this.staticPlannerAgent.config().setConfigValue('tools', [
            {
              id: 'FinalAnswerTool_default',
            },
            {
              id: 'MultiSourceSynthesizer_default_test',
            },
          ]);
        });

        afterAll(function () {
          Genai.Agent.StaticPlanner.Config.forConfigKey('StaticPlanner_default').clearConfigAndSecretOverride('APP');
        });

        it('returns expected whitelisted data model', function () {
          var whitelistedModels = Genai.ConfigUtil.structuredDataWhitelistedTypes();

          /*
           * Adding the planner with MultiSourceSynthesizer_default_test adds 'EvalQuery_default_test' to the tools
           * list, so we expect 3 whitelisted data models
           */
          expect(whitelistedModels).toEqual([
            this.whitelistedDataModel,
            this.whitelistedDataModel,
            this.whitelistedDataModel,
          ]);
        });
      });
    });
  });

  describe('GenAiUiHelpers', function () {
    beforeAll(function () {
      this.typeMetas = GenAiUiHelpers.getWhitelistedTypeMetadata();
    });

    it('#getWhitelistedTypeMetadata', function () {
      var typeMetasKeys = [
        'Genai.AircraftComponentCode',
        'Genai.AircraftMeasurement',
        'Genai.AircraftStatus',
        'Genai.AircraftComponentCase',
        'Genai.Airport',
        'Genai.AircraftComponent',
        'Genai.AircraftModel',
        'Genai.AircraftComponentAlert',
        'Genai.Aircraft',
        'Genai.AircraftMeasurementSeries',
      ];
      _.forEach(typeMetasKeys, (typeName) => {
        expect(this.typeMetas[typeName]).toBeDefined();
        expect(this.typeMetas[typeName].numRows).toBeGreaterThan(0);
        expect(this.typeMetas[typeName].typeMeta.declaredFieldTypes.length).toBeGreaterThan(0);
      });
    });

    it('has persistable field id in type Genai.AircraftModel', function () {
      var aircraftModelType = this.typeMetas.Genai.AircraftModel.typeMeta;
      var fields = C3.type('Genai.AircraftModel').meta().fieldTypesByName();
      var idField = _.find(fields, { name: 'id' });
      expect(aircraftModelType.declaredFieldTypes[0].name).toEqual(idField.name);
    });

    it('has valueType field persistable field id for type Genai.AircraftModel', function () {
      var aircraftModelType = this.typeMetas.Genai.AircraftModel.typeMeta;
      var fields = C3.type('Genai.AircraftModel').meta().fieldTypesByName();
      var idField = _.find(fields, { name: 'id' });
      expect(aircraftModelType.declaredFieldTypes[0].valueType).toEqual(idField.valueType());
    });

    describe('with corrupted data model', function () {
      beforeAll(function () {
        this.corruptedWhitelistedDataModel = {
          'Genai.Aircraft': {
            fields: ['isAssignedToPilot', 'isCorrupted'],
          },
        };
        Genai.Agent.Tool.EvalQuery.forId('EvalQuery_default')
          .config()
          .setConfigValue(
            'dataModelGraph',
            Genai.StructuredData.DataModelGraph.forName('readiness_test').withField(
              'whitelistedDataModel',
              this.corruptedWhitelistedDataModel
            )
          );
        Genai.Agent.Tool.EvalMetricsQuery.forId('EvalMetricsQuery_default')
          .config()
          .setConfigValue(
            'dataModelGraph',
            Genai.StructuredData.DataModelGraph.forName('readiness_test').withField(
              'whitelistedDataModel',
              this.corruptedWhitelistedDataModel
            )
          );
        Genai.PyUtil.terminateAllEngines();
      });

      it('throws an error identifying the mismatch', function () {
        expect(() => {
          return GenAiUiHelpers.getWhitelistedTypeMetadata();
        }).toThrowError(/Can not find field: isCorrupted in type: Genai.Aircraft/);
      });
    });
  });
});
