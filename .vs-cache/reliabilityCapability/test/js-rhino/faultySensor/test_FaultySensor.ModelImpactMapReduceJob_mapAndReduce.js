/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FaultySensor.ModelImpactMapReduceJob_mapAndReduce';

describe(filename, function () {
  beforeAll(function () {
    // Name is shortened to keep ids of entities short.
    this.ctx = TestApi.createContext('faulty_MapReduceJob');

    // Set log level to ensure it runs the debug log paths and they don't have errors.
    C3.app().setLogLevel(null, Logger.Level.DEBUG, '5m');
    ReliabilityTestData.clearFailedQueueEntries();

    // One asset with all sensors.
    this.assetIds = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAsset', [
      {
        id: 'fakeAssetId0',
      },
      {
        id: 'fakeAssetId1',
      },
    ]);

    this.modelIds = ['model0', 'model1'];

    this.relations = [
      ReliabilityAssetToRiskModelRelation.make({
        from: this.assetIds[0],
        to: this.modelIds[0],
      }),
      ReliabilityAssetToRiskModelRelation.make({
        from: this.assetIds[1],
        to: this.modelIds[1],
      }),
      ReliabilityAssetToRiskModelRelation.make({
        from: this.assetIds[0],
        to: this.modelIds[1],
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

    this.createSpiesForMapFunctions = function (ctx, sourceOfTruthMap, filteredResult) {
      var truthSpy = TestApi.spyOn(ctx, 'FaultySensor.MapReduceMockApis', 'getSourceOfTruthForModelsBatch')
        .returnValue(sourceOfTruthMap)
        .register();
      var filterSpy = TestApi.spyOn(ctx, 'FaultySensor.MapReduceMockApis', 'filterRelationsImpactedBySensorsBatch')
        .returnValue(filteredResult)
        .register();

      return [truthSpy, filterSpy];
    };

    this.mockValidationResult = {
      allRelations: this.relations,
      validRelationIds: [this.relations[0].id],
      errors: null,
    };

    this.createSpiesForReduceFunctions = function (ctx, validationSpec) {
      var validationSpy = TestApi.spyOn(ctx, 'FaultySensor.MapReduceMockApis', 'validateModelCanBeRetrained')
        .returnValue(validationSpec)
        .register();

      return [validationSpy];
    };

    this.unregisterSpies = function (spies) {
      spies.forEach((spy) => {
        spy.unregister();
      });
    };

    this.modelGetMissingSpyResult = ReliabilityRiskMlModel.make({
      id: this.modelIds[0],
    });
    TestApi.spyOn(this.ctx, 'ReliabilityRiskMlModel', 'getMissing')
      .returnValue(this.modelGetMissingSpyResult)
      .register();

    this.impactedSensorsPairType = C3.type('Pair<!ReliabilityAssetToRiskModelRelation, [string]>');

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('map', function () {
    it('should call the actual apis without errors', function () {
      var job = TestApi.upsertEntity(this.ctx, 'FaultySensor.ModelImpactMapReduceJob', {
        updatedSensors: ['sensor1', 'sensor2'],
        multipleAssetRelationsPerModel: false,
      });

      var result = FaultySensor.ModelImpactMapReduceJob.map(1, this.relations.slice(0, 1), job, 1);

      expect(result.size).toEqual(0);
    });

    it('should return the correct result for a single model with one asset', function () {
      var mockSourceOfTruthMap = {
        [this.modelIds[0]]: ReliabilityRiskMlModel.make(this.modelIds[0]),
        [this.modelIds[1]]: ReliabilityRiskMlModel.make(this.modelIds[1]),
      };

      var mockFilteredResult = FaultySensor.ImpactedRelationsBatchResult.make({
        notImpacted: [],
        unverifiable: [],
        impacted: [this.relations[0]],
        impactedSensors: [this.impactedSensorsPairType.of(this.relations[0], ['sensor1'])],
      });

      var spies = this.createSpiesForMapFunctions(this.ctx, mockSourceOfTruthMap, mockFilteredResult);
      TestApi.waitForSetup(this.ctx);

      var job = TestApi.upsertEntity(this.ctx, 'FaultySensor.ModelImpactMapReduceJob', {
        updatedSensors: ['sensor1', 'sensor2'],
        multipleAssetRelationsPerModel: false,
        callMockMapApis: true,
      });

      var result = FaultySensor.ModelImpactMapReduceJob.map(1, this.relations.slice(0, 1), job, 1);

      expect(result.size).toEqual(1);
      expect(result.get(this.modelIds[0])).toEqual(
        jasmine.objectContaining({
          impactedRelations: [this.relations[0]],
          sourceOfTruthModel: ReliabilityRiskMlModel.make(this.modelIds[0]),
        })
      );
      expect(result.get(this.modelIds[0]).sensorToImpactedRelations.get('sensor1')).toEqual([this.relations[0]]);

      this.unregisterSpies(spies);
    });

    it('should support multiple assets per model', function () {
      var mockSourceOfTruthMap = {
        [this.modelIds[0]]: ReliabilityRiskMlModel.make(this.modelIds[1]),
        [this.modelIds[1]]: ReliabilityRiskMlModel.make(this.modelIds[1]),
      };

      var mockFilteredResult = FaultySensor.ImpactedRelationsBatchResult.make({
        notImpacted: [],
        unverifiable: [],
        impacted: [this.relations[0], this.relations[1], this.relations[2]],
        impactedSensors: [
          this.impactedSensorsPairType.of(this.relations[0], ['sensor1']),
          this.impactedSensorsPairType.of(this.relations[1], ['sensor1']),
          this.impactedSensorsPairType.of(this.relations[2], ['sensor2']),
        ],
      });

      var spies = this.createSpiesForMapFunctions(this.ctx, mockSourceOfTruthMap, mockFilteredResult);
      TestApi.waitForSetup(this.ctx);

      var job = TestApi.upsertEntity(this.ctx, 'FaultySensor.ModelImpactMapReduceJob', {
        updatedSensors: ['sensor1', 'sensor2'],
        multipleAssetRelationsPerModel: true,
        callMockMapApis: true,
      });

      var result = FaultySensor.ModelImpactMapReduceJob.map(1, this.relations, job, 1);

      expect(result.size).toEqual(2);
      expect(result.get(this.modelIds[0]).sourceOfTruthModel).toEqual(ReliabilityRiskMlModel.make(this.modelIds[1]));
      expect(result.get(this.modelIds[1])).toEqual(
        jasmine.objectContaining({
          impactedRelations: [this.relations[1], this.relations[2]],
          sourceOfTruthModel: ReliabilityRiskMlModel.make(this.modelIds[1]),
        })
      );
      expect(result.get(this.modelIds[1]).sensorToImpactedRelations.get('sensor1')).toEqual([this.relations[1]]);
      expect(result.get(this.modelIds[1]).sensorToImpactedRelations.get('sensor2')).toEqual([this.relations[2]]);

      this.unregisterSpies(spies);
    });

    it('should pass the correct arguments to the other helper functions', function () {
      var mockSourceOfTruthMap = {
        [this.modelIds[0]]: ReliabilityRiskMlModel.make(this.modelIds[0]),
        [this.modelIds[1]]: ReliabilityRiskMlModel.make(this.modelIds[1]),
      };

      var mockFilteredResult = FaultySensor.ImpactedRelationsBatchResult.make({
        notImpacted: [],
        unverifiable: [],
        impacted: [this.relations[0]],
      });

      var spies = this.createSpiesForMapFunctions(this.ctx, mockSourceOfTruthMap, mockFilteredResult);

      var job = TestApi.upsertEntity(this.ctx, 'FaultySensor.ModelImpactMapReduceJob', {
        updatedSensors: ['sensor1', 'sensor2'],
        multipleAssetRelationsPerModel: true,
        callMockMapApis: true,
      });

      FaultySensor.ModelImpactMapReduceJob.map(1, this.relations.slice(0, 1), job, 1);

      var sourceOfTruthSpy = spies[0];

      var sourceOfTruthCallArgs = sourceOfTruthSpy
        .getActionMock()
        .callHistory()
        .map((hist) => {
          return hist.args;
        });

      expect(sourceOfTruthCallArgs.length).withContext('source of truth args length').toEqual(1);
      expect(
        sourceOfTruthCallArgs[0].models.map((model) => {
          return model.id;
        })
      )
        .withContext('source of truth args')
        .toEqual([this.modelIds[0]]);

      var filterSpy = spies[1];
      var filterCallArgs = filterSpy
        .getActionMock()
        .callHistory()
        .map((hist) => {
          return hist.args;
        });
      expect(filterCallArgs.length).withContext('filter args length').toEqual(1);

      expect(
        filterCallArgs[0].relations.map((relation) => {
          return relation.id;
        })
      )
        .withContext('filter args relation ids')
        .toEqual([this.relations[0].id]);

      expect(filterCallArgs[0].updatedSensors)
        .withContext('filter args sensors')
        .toEqual([Sensor.make('sensor1'), Sensor.make('sensor2')]);

      expect(filterCallArgs[0].modelIdsToSourceOfTruthModels)
        .withContext('filter args source of truth models')
        .toEqual(mockSourceOfTruthMap);

      this.unregisterSpies(spies);
    });
  });

  describe('reduce', function () {
    it('should call the actual apis without errors', function () {
      var job = TestApi.upsertEntity(this.ctx, 'FaultySensor.ModelImpactMapReduceJob', {
        updatedSensors: ['sensor1', 'sensor2'],
        multipleAssetRelationsPerModel: false,
      });

      var result = FaultySensor.ModelImpactMapReduceJob.reduce(
        this.modelIds[0],
        [
          {
            impactedRelations: [this.relations[0]],
            sourceOfTruthModel: ReliabilityRiskMlModel.make(this.modelIds[0]),
          },
        ],
        job
      );

      expect(result.length).toEqual(1);
      expect(result[0].errors).toEqual([
        {
          errorCategory: FaultySensor.ModelRetrainValidationErrorEnum.NO_DATASET_PREP_RUN,
          relationId: this.relations[0].id,
        },
      ]);
    });

    it('should create the correct validation spec with a single intermediate type', function () {
      var spies = this.createSpiesForReduceFunctions(this.ctx, this.mockValidationResult);

      var job = TestApi.upsertEntity(this.ctx, 'FaultySensor.ModelImpactMapReduceJob', {
        updatedSensors: ['sensor1', 'sensor2'],
        multipleAssetRelationsPerModel: false,
        callMockReduceApis: true,
      });

      FaultySensor.ModelImpactMapReduceJob.reduce(
        this.modelIds[0],
        [
          {
            impactedRelations: [this.relations[0]],
            sourceOfTruthModel: ReliabilityRiskMlModel.make(this.modelIds[0]),
          },
        ],
        job
      );

      var validationSpy = spies[0];
      var validationCallArgs = validationSpy
        .getActionMock()
        .callHistory()
        .map((hist) => {
          return hist.args;
        });

      expect(validationCallArgs.length).withContext('validation args length').toEqual(1);
      expect(validationCallArgs[0].validationSpec).toEqual({
        modelId: this.modelIds[0],
        allRelations: [this.relations[0]],
        impactedRelationIds: [this.relations[0].id],
        sourceOfTruthModel: this.modelGetMissingSpyResult,
      });

      this.unregisterSpies(spies);
    });

    it('should create the correct validation spec with multiple intermediate types', function () {
      var spies = this.createSpiesForReduceFunctions(this.ctx, this.mockValidationResult);

      var job = TestApi.upsertEntity(this.ctx, 'FaultySensor.ModelImpactMapReduceJob', {
        updatedSensors: ['sensor1', 'sensor2'],
        multipleAssetRelationsPerModel: true,
        callMockReduceApis: true,
      });

      FaultySensor.ModelImpactMapReduceJob.reduce(
        this.modelIds[1],
        [
          {
            impactedRelations: [this.relations[1]],
            sourceOfTruthModel: ReliabilityRiskMlModel.make(this.modelIds[1]),
          },
          {
            impactedRelations: [this.relations[2]],
            sourceOfTruthModel: ReliabilityRiskMlModel.make(this.modelIds[1]),
          },
        ],
        job
      );

      var validationSpy = spies[0];
      var validationCallArgs = validationSpy
        .getActionMock()
        .callHistory()
        .map((hist) => {
          return hist.args;
        });

      expect(validationCallArgs.length).withContext('validation args length').toEqual(1);
      expect(validationCallArgs[0].validationSpec.allRelations.pluck('id').sorted()).toEqual(
        [this.relations[1].id, this.relations[2].id].sort()
      );

      expect(validationCallArgs[0].validationSpec.impactedRelationIds.sorted()).toEqual(
        [this.relations[1].id, this.relations[2].id].sort()
      );

      this.unregisterSpies(spies);
    });

    it('should fetch all relations if multipleAssetRelationsPerModel is true', function () {
      var spies = this.createSpiesForReduceFunctions(this.ctx, this.mockValidationResult);

      var job = TestApi.upsertEntity(this.ctx, 'FaultySensor.ModelImpactMapReduceJob', {
        updatedSensors: ['sensor1', 'sensor2'],
        multipleAssetRelationsPerModel: true,
        callMockReduceApis: true,
      });

      FaultySensor.ModelImpactMapReduceJob.reduce(
        this.modelIds[1],
        [
          {
            impactedRelations: [this.relations[1]],
            sourceOfTruthModel: ReliabilityRiskMlModel.make(this.modelIds[1]),
          },
        ],
        job
      );

      var validationSpy = spies[0];
      var validationCallArgs = validationSpy
        .getActionMock()
        .callHistory()
        .map((hist) => {
          return hist.args;
        });

      expect(validationCallArgs.length).withContext('validation args length').toEqual(1);

      expect(validationCallArgs[0].validationSpec.allRelations.pluck('id').sorted()).toEqual(
        [this.relations[1].id, this.relations[2].id].sort()
      );

      expect(validationCallArgs[0].validationSpec.impactedRelationIds).toEqual([this.relations[1].id]);
      this.unregisterSpies(spies);
    });
  });

  describe('mapAndReduce', function () {
    it('should work end to end for a single model with one asset', function () {
      var mockSourceOfTruthMap = {
        [this.modelIds[0]]: ReliabilityRiskMlModel.make(this.modelIds[0]),
        [this.modelIds[1]]: ReliabilityRiskMlModel.make(this.modelIds[1]),
      };

      var mockFilteredResult = FaultySensor.ImpactedRelationsBatchResult.make({
        notImpacted: [this.relations[1]],
        unverifiable: [this.relations[2]],
        impacted: [this.relations[0]],
        impactedSensors: [
          this.impactedSensorsPairType.of(this.relations[0], ['sensor1']),
          this.impactedSensorsPairType.of(this.relations[0], ['sensor2']),
        ],
      });

      var mapSpies = this.createSpiesForMapFunctions(this.ctx, mockSourceOfTruthMap, mockFilteredResult);
      var reduceSpies = this.createSpiesForReduceFunctions(this.ctx, this.mockValidationResult);

      var job = TestApi.upsertEntity(this.ctx, 'FaultySensor.ModelImpactMapReduceJob', {
        updatedSensors: ['sensor1', 'sensor2'],
        multipleAssetRelationsPerModel: false,
        callMockMapApis: true,
        callMockReduceApis: true,
      });

      job.start({
        targetType: 'ReliabilityAssetToRiskModelRelation',
        include: 'from.id, to.id',
        filter: '1==1',
        limit: -1,
        batchSize: 10,
        subBatchSize: 10,
      });

      job.waitForCompletion();

      job = job.get('run.results.this');
      results = job.run.results;

      expect(results.length).withContext('result.length').toEqual(1);
      expect(results[0].outKey).toEqual(this.modelIds[0]);
      expect(results[0].outValue.length).withContext('out values length').toEqual(1);

      var output = results[0].outValue[0];
      expect(output.allRelations).withContext('output all relations').toEqual(this.mockValidationResult.allRelations);
      expect(output.validRelationIds)
        .withContext('output valid relation ids')
        .toEqual(this.mockValidationResult.validRelationIds);
      expect(output.errors).withContext('output errors').toEqual([]);
      expect(output.sensorToImpactedRelations.get('sensor1')).toEqual([this.relations[0]]);
      expect(output.sensorToImpactedRelations.get('sensor2')).toEqual([this.relations[0]]);

      this.unregisterSpies(mapSpies);
      this.unregisterSpies(reduceSpies);
    });
  });
});
