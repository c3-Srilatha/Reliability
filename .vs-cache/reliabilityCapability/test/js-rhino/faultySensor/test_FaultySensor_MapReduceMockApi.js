/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FaultySensor_MapReduceMockApi.js';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);

    // Set log level to ensure it runs the debug log paths and they don't have errors.
    C3.app().setLogLevel(null, Logger.Level.DEBUG, '5m');
    ReliabilityTestData.clearFailedQueueEntries();

    this.assetIds = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAsset', [{}, {}]);

    this.sensors = TestApi.upsertBatchEntity(this.ctx, 'Sensor', [
      { name: filename + '_sensor_1' },
      { name: filename + '_sensor_2' },
      { name: filename + '_sensor_3' },
      { name: filename + '_sensor_4a' },
      { name: filename + '_sensor_4b' },
      { name: filename + '_sensor_5b' },
    ]);

    this.modelIds = ['model0', 'model1'];
    this.model = C3.Array.ofStr(ReliabilityMlModel.make(this.modelIds[0])).toSet();

    this.relations = [
      ReliabilityAssetToRiskModelRelation.make({
        from: this.assetIds[0],
        to: this.modelIds[0],
      }),
    ].map((relation) => {
      return relation
        .withId(Uuid.create())
        .withRoute('fakeRoute')
        .withStatus(
          MlModel.Route.Status.make({
            label: MlModel.Route.Status.Label.CHALLENGER,
          })
        );
    });

    TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAssetToRiskModelRelation', this.relations);

    this.riskModel = ReliabilityRiskMlModel.make({
      id: this.modelIds[1],
    });

    this.sourceOfTruthModel = this.riskModel;

    this.validationSpec = {
      modelId: this.modelIds[0],
      impactedRelationIds: [this.relations[0].id],
      allRelations: [this.relations],
      sourceOfTruthModel: this.sourceOfTruthModel,
    };

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    ReliabilityAssetToRiskModelRelation.removeAll({ filter: Filter.intersects('id', this.relations) }, true);
  });

  describe('#getSourceOfTruthForModelsBatch', function () {
    it('throws error', function () {
      expect(function () {
        FaultySensor.MapReduceMockApis.getSourceOfTruthForModelsBatch(this.model);
      }).toThrowError(/Mock apis should not be called./);
    });
  });

  describe('#filterRelationsImpactedBySensorsBatch', function () {
    it('throws error', function () {
      expect(function () {
        FaultySensor.MapReduceMockApis.filterRelationsImpactedBySensorsBatch([this.relations], { id: null }, [
          'sensor1',
        ]);
      }).toThrowError(/Mock apis should not be called./);
    });
  });

  describe('#validateModelCanBeRetrained', function () {
    it('throws error', function () {
      expect(function () {
        FaultySensor.MapReduceMockApis.validateModelCanBeRetrained(this.validationSpec);
      }).toThrowError(/Mock apis should not be called./);
    });
  });
});
