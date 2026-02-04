/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FaultySensorModelImpactMapReduceJob_filterRelationsImpactedBySensorsBatch';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    // Track the creation of these types for manual removal.
    this.createdFeatureSets = [];
    this.createdRuns = [];
    this.createdModels = [];

    // Set log level to ensure it runs the debug log paths and they don't have errors.
    C3.app().setLogLevel(null, Logger.Level.DEBUG, '5m');
    ReliabilityTestData.clearFailedQueueEntries();

    this.sensorIds = TestApi.upsertBatchEntity(this.ctx, 'Sensor', [
      {
        id: 'sensor1',
        operationalStatus: {
          status: SensorOperationalStatusEnum.FAULTY,
        },
      },
      {
        id: 'sensor2',
        operationalStatus: {
          status: SensorOperationalStatusEnum.FAULTY,
        },
      },
      {
        id: 'sensor3',
        operationalStatus: {
          status: SensorOperationalStatusEnum.FAULTY,
        },
      },
      {
        id: 'sensor4',
        operationalStatus: {
          status: SensorOperationalStatusEnum.OPERATIONAL,
        },
      },
      {
        id: 'sensor5',
        operationalStatus: {
          status: SensorOperationalStatusEnum.OPERATIONAL,
        },
      },
    ]);

    this.faultySensorIds = this.sensorIds.slice(0, 3);
    this.operationalSensorIds = this.sensorIds.slice(3);

    // Each sensor has it's own expected sensor
    var expectedSensors = this.sensorIds.map(function (sensorId) {
      return ExpectedSensor.make({
        id: 'expected-' + sensorId,
        unit: 'fakeUnit',
      });
    });
    var expectedSensorIds = TestApi.upsertBatchEntity(this.ctx, 'ExpectedSensor', expectedSensors);
    this.faultyExpectedSensorIds = expectedSensorIds.slice(0, 3);

    // One asset with all sensors.
    var assetIds = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAsset', [
      {
        id: 'fakeAssetId',
      },
    ]);

    // Each sensor has a relation to the asset.
    var assetSensorRelations = this.sensorIds.map(function (sensorId, idx) {
      return ReliabilityAssetSensorRelation.make({
        id: 'relation' + idx,
        from: assetIds[0],
        to: sensorId,
        expectedSensor: expectedSensorIds[idx],
      });
    });
    this.assetSensorRelations = TestApi.upsertBatchEntity(
      this.ctx,
      'ReliabilityAssetSensorRelation',
      assetSensorRelations
    );

    this.metricUsingSensor1 = SimpleMetric.make({
      id: 'metricUsingSensor1_ReliabilityAsset',
      name: 'metricUsingSensor1',
      srcType: 'ReliabilityAsset',
      path: 'sensorRelations.(to.metricSafeId == "S_sensor1").to.pointSeries',
      expression: 'avg(avg(normalized.data.quantity))',
    });

    this.metricNotUsingAnySensors = SimpleMetric.make({
      id: 'metricNotUsingAnySensors_ReliabilityAsset',
      name: 'metricNotUsingAnySensors',
      srcType: 'ReliabilityAsset',
      path: 'randomPath',
      expression: 'avg(avg(normalized.data.quantity))',
    });

    this.expectedSensorMetric = SimpleMetric.make({
      id: 'expectedSensorMetric_ReliabilityAsset',
      name: 'expectedSensorMetric',
      srcType: 'ReliabilityAsset',
      path: 'sensorRelations.(expectedSensor.id == "expected-sensor1").to.pointSeries',
      expression: 'avg(avg(normalized.data.quantity))',
    });

    this.metricUsingSensorId = CompoundMetric.make({
      id: 'metricUsingSensorId_ReliabilityAsset',
      name: 'metricUsingSensorId',
      expression: 'sensor("sensor1") > 50',
    });

    // A metric with the same name, but doesn't reference the sensor id.
    this.edgeCaseMetricWithSameName = SimpleMetric.make({
      id: this.metricUsingSensor1.name + '_Sensor',
      name: this.metricUsingSensor1.name,
      srcType: 'Sensor',
      path: 'randomPath',
      expression: 'avg(avg(normalized.data.quantity))',
    });

    this.featureUsingSensor1 = Feature.fromMetric(
      ReliabilityAsset,
      this.metricUsingSensor1,
      'MONTH',
      'featureUsingSensor1'
    );

    this.featureNotUsingAnySensors = Feature.fromMetric(
      ReliabilityAsset,
      this.metricNotUsingAnySensors,
      'MONTH',
      'featureNotUsingAnySensors'
    );

    this.featureUsingExpectedSensor = Feature.fromMetric(
      ReliabilityAsset,
      this.expectedSensorMetric,
      'MONTH',
      'featureUsingExpectedSensor'
    );

    this.featureUsingSensorId = Feature.fromMetric(
      ReliabilityAsset,
      this.metricUsingSensorId,
      'MONTH',
      'featureUsingSensorId'
    );

    this.edgeCaseFeatureWithSameName = Feature.fromMetric(
      Sensor,
      this.edgeCaseMetricWithSameName,
      'MONTH',
      'featureUsingSensor1'
    );

    this.mockLambda = Lambda.fromPySrc('def mockLambda(subject, spec, feature): return None');

    this.edgeCaseFeatureNoMetric = Feature.fromEvalSpec(
      ReliabilityAsset,
      {
        filter: '1==1',
        projection: 'id',
      },
      'edgeCaseFeatureNoMetric'
    );

    TestApi.upsertBatchEntity(this.ctx, 'Feature', [
      this.featureUsingSensor1,
      this.featureNotUsingAnySensors,
      this.featureUsingExpectedSensor,
      this.edgeCaseFeatureWithSameName,
      this.edgeCaseFeatureNoMetric,
      this.featureUsingSensorId,
    ]);

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    ReliabilityRiskMlModel.removeBatch(this.createdModels || []);
    ReliabilityMlDatasetPreparationRun.removeBatch(this.createdRuns || []);
    Feature.Set.removeBatch(this.createdFeatureSets || []);
    ReliabilityAssetToRiskModelRelation.removeAll(
      {
        filter: Filter.eq('from', 'fakeAssetId'),
      },
      true
    );
    TestApi.teardown(this.ctx);
  });

  describe('validateModelCanBeRetrained', function () {
    beforeAll(function () {
      // Variable for use in helper functions.
      var createdFeatureSets = this.createdFeatureSets;
      var createdRuns = this.createdRuns;
      var cratedModels = this.createdModels;

      /**
       * Update datasetPrepRun on the model to have a new mask dataset.
       * @param {ReliabilityRiskMlModel} model - the model to update.
       * @param {Feature.Set[]} maskFeatureSets - Array of feature sets to add to the mask dataset.
       */
      this.updateModelDatasetPrepRunWithNewMask = function (model, maskFeatureSets) {
        var datasetPreparationRun = model.get('datasetPreparationRun').datasetPreparationRun;
        var updatedDataset = {};
        maskFeatureSets.forEach(function (featureSet) {
          updatedDataset[Uuid.create()] = featureSet;
        });
        datasetPreparationRun.withMaskDatasets(updatedDataset).merge();
      };

      /**
       * @param {string[]} features - An array of features names to add to the feature set.
       * @param {string} name - The name of the feature set.
       * @returns {Feature.Set} - The created feature set.
       */
      var createFeatureSetForFeatures = function (features, name) {
        var makeNameSafe = function (name) {
          return 'F_' + name.replace(/[^a-zA-Z0-9]/g, '_');
        };
        var safeName = makeNameSafe(name);
        var id = 'ReliabilityAsset#' + safeName;
        var featureSet = Feature.Set.make()
          .withId(id)
          .withFeatures(features)
          .withName(safeName)
          .withSubjectType(ReliabilityAsset);
        featureSet.create();
        createdFeatureSets.push(featureSet);
        return featureSet;
      };

      /**
       * @param {Feature.Set[]} featureSets - An array of feature sets.
       * @returns {map<string, Feature.Set>} - The created mask dataset.
       */
      var createMaskDatasetWithFeatureSets = function (featureSets) {
        var outMap = {};
        featureSets.forEach(function (featureSet) {
          outMap[Uuid.create()] = featureSet;
        });
        return outMap;
      };

      /**
       * @param {ReliabilityMlDatasetPreparationRun} run - The dataset preparation run to associate with the model.
       * @returns {ReliabilityRiskMlModel} - The created model.
       */
      var createRiskMlModelWithDatasetPrepRun = function (run) {
        var tempModel = ReliabilityRiskMlModel.createModel(
          seededProject,
          dummyPipeline,
          { features: fs },
          { target: fs }
        );
        tempModel.remove();
        var outputModel = tempModel.withId(Uuid.create()).withDatasetPreparationRun(run).create();
        cratedModels.push(outputModel);
        return outputModel;
      };

      var seededProject = MlProject.make('reliabilityRisk');
      var dummyPipeline = ReliabilityTestData.createDummyReliabilityRiskPipeline();
      var fs = TestApi.upsertEntity(this.ctx, 'Feature.Set', {
        id: 'ReliabilityAsset#' + filename,
        name: filename,
        features: ['dummy'],
        subjectType: ReliabilityAsset,
      }).get();

      /**
       * Create and persist feature set for features
       * Create instance of mask dataset with feature sets
       * Create and persist run with include/exclude sensors and mask dataset
       * Create and persist model with run and mask dataset
       * Create and persist relation between asset and model
       * @param {string} assetId - The id of the asset to associate with the model.
       * @param {string[]} runIncludeSensor - The sensor ids to include in the run.
       * @param {string[]} runExcludeSensor - The sensor ids to exclude in the run.
       * @param {string[][]} maskFeatureArrays - Each array will become a Feature.Set with the features in the array.
       * @returns {object} - The created model and relation.
       */
      this.generateTestModelAndRelation = function (assetId, runIncludeSensor, runExcludeSensor, maskFeatureArrays) {
        var maskFeatureSets = maskFeatureArrays.map(function (features) {
          return createFeatureSetForFeatures(features, Uuid.create());
        });
        var maskDataset = createMaskDatasetWithFeatureSets(maskFeatureSets);

        var run = ReliabilityMlDatasetPreparationRun.make()
          .withDefaults()
          .withId(Uuid.create())
          .withParent(assetId)
          .withTimestamp('2020-01-01')
          .withIncludeSensors(runIncludeSensor)
          .withExcludeSensors(runExcludeSensor)
          .withMaskDatasets(maskDataset);
        run.create();
        createdRuns.push(run);

        var model = createRiskMlModelWithDatasetPrepRun(run).get();

        var relation = ReliabilityAssetToRiskModelRelation.make({
          from: assetId,
          to: model.id,
          route: 'fakeRoute',
          status: MlModel.Route.Status.make({
            label: MlModel.Route.Status.Label.CHALLENGER,
          }),
        })
          .create()
          .get('from.id, to.id');

        return {
          model: model,
          relation: relation,
        };
      };

      this.modelInclude = 'datasetPreparationRun.this';

      TestApi.waitForSetup(this.ctx);
    });

    describe('masks', function () {
      it('should throw an error if the mask uses a faulty sensor', function () {
        var inputObj = this.generateTestModelAndRelation(
          'fakeAssetId',
          this.operationalSensorIds,
          this.faultySensorIds,
          [['featureUsingSensor1']]
        );

        var result = FaultySensor.ModelImpactMapReduceJob.validateModelCanBeRetrained({
          modelId: inputObj.model.id,
          allRelations: [inputObj.relation],
          impactedRelationIds: [inputObj.relation.id],
          sourceOfTruthModel: inputObj.model.getMissing({ include: this.modelInclude }),
        });

        expect(result.allRelations).withContext('allRelations').toEqual([inputObj.relation]);
        expect(result.validRelationIds).withContext('validRelationIds').toEqual([]);
        expect(result.errors.length).toEqual(1);
        expect(result.errors[0].errorCategory).toEqual(
          FaultySensor.ModelRetrainValidationErrorEnum.MASK_USES_FAULTY_SENSOR
        );
        inputObj.model.remove();
      });

      it('should be successful if the mask does not use a faulty sensor', function () {
        var inputObj = this.generateTestModelAndRelation(
          'fakeAssetId',
          this.operationalSensorIds,
          this.faultySensorIds,
          [['featureNotUsingAnySensors']]
        );

        var result = FaultySensor.ModelImpactMapReduceJob.validateModelCanBeRetrained({
          modelId: inputObj.model.id,
          allRelations: [inputObj.relation],
          impactedRelationIds: [inputObj.relation.id],
          sourceOfTruthModel: inputObj.model.getMissing({ include: this.modelInclude }),
        });

        expect(result.allRelations).withContext('allRelations').toEqual([inputObj.relation]);
        expect(result.validRelationIds).withContext('validRelationIds').toEqual([inputObj.relation.id]);
        expect(result.errors.length).toEqual(0);
      });

      it('should catch when the mask is using an expected sensor id', function () {
        var inputObj = this.generateTestModelAndRelation(
          'fakeAssetId',
          this.operationalSensorIds,
          this.faultySensorIds,
          [['featureUsingExpectedSensor']]
        );

        var result = FaultySensor.ModelImpactMapReduceJob.validateModelCanBeRetrained({
          modelId: inputObj.model.id,
          allRelations: [inputObj.relation],
          impactedRelationIds: [inputObj.relation.id],
          sourceOfTruthModel: inputObj.model.getMissing({ include: this.modelInclude }),
        });

        expect(result.allRelations).withContext('allRelations').toEqual([inputObj.relation]);
        expect(result.validRelationIds).withContext('validRelationIds').toEqual([]);
        expect(result.errors.length).toEqual(1);
        expect(result.errors[0].errorCategory).toEqual(
          FaultySensor.ModelRetrainValidationErrorEnum.MASK_USES_FAULTY_SENSOR
        );
      });

      it('should catch when the mask uses the sensor id expression engine function', function () {
        var inputObj = this.generateTestModelAndRelation(
          'fakeAssetId',
          this.operationalSensorIds,
          this.faultySensorIds,
          [['featureUsingSensorId']]
        );

        var result = FaultySensor.ModelImpactMapReduceJob.validateModelCanBeRetrained({
          modelId: inputObj.model.id,
          allRelations: [inputObj.relation],
          impactedRelationIds: [inputObj.relation.id],
          sourceOfTruthModel: inputObj.model.getMissing({ include: this.modelInclude }),
        });

        expect(result.allRelations).withContext('allRelations').toEqual([inputObj.relation]);
        expect(result.validRelationIds).withContext('validRelationIds').toEqual([]);
        expect(result.errors.length).toEqual(1);
        expect(result.errors[0].errorCategory).toEqual(
          FaultySensor.ModelRetrainValidationErrorEnum.MASK_USES_FAULTY_SENSOR
        );
      });

      it('should throw an error if the mask is using a feature not based on a metric.', function () {
        var inputObj = this.generateTestModelAndRelation(
          'fakeAssetId',
          this.operationalSensorIds,
          this.faultySensorIds,
          [['edgeCaseFeatureNoMetric']]
        );

        var result = FaultySensor.ModelImpactMapReduceJob.validateModelCanBeRetrained({
          modelId: inputObj.model.id,
          allRelations: [inputObj.relation],
          impactedRelationIds: [inputObj.relation.id],
          sourceOfTruthModel: inputObj.model.getMissing({ include: this.modelInclude }),
        });

        expect(result.allRelations).withContext('allRelations').toEqual([inputObj.relation]);
        expect(result.validRelationIds).withContext('validRelationIds').toEqual([]);
        expect(result.errors.length).toEqual(1);
        expect(result.errors[0].errorCategory).toEqual(
          FaultySensor.ModelRetrainValidationErrorEnum.NON_METRIC_BACKED_MASK
        );
      });

      it('should throw an error if the mask is using a lambda feature set.', function () {
        var fakeColumns = {
          subject: 'string',
          timestamp: 'datetime',
        };
        var lambdaFeatureSet = Feature.Set.make({
          id: 'ReliabilityAsset#testLambdaFeatureSet',
          name: 'testLambdaFeatureSet',
          subjectType: ReliabilityAsset,
          src: this.mockLambda,
          columns: fakeColumns,
        }).create();
        this.createdFeatureSets.push(lambdaFeatureSet);

        var inputObj = this.generateTestModelAndRelation(
          'fakeAssetId',
          this.operationalSensorIds,
          this.faultySensorIds,
          [lambdaFeatureSet]
        );

        this.updateModelDatasetPrepRunWithNewMask(inputObj.model.get(this.modelInclude), [lambdaFeatureSet]);

        var result = FaultySensor.ModelImpactMapReduceJob.validateModelCanBeRetrained({
          modelId: inputObj.model.id,
          allRelations: [inputObj.relation],
          impactedRelationIds: [inputObj.relation.id],
          sourceOfTruthModel: inputObj.model.getMissing({ include: this.modelInclude }),
        });

        expect(result.allRelations).withContext('allRelations').toEqual([inputObj.relation]);
        expect(result.validRelationIds).withContext('validRelationIds').toEqual([]);
        expect(result.errors.length).toEqual(1);
        expect(result.errors[0].errorCategory).toEqual(FaultySensor.ModelRetrainValidationErrorEnum.LAMBDA_MASK);
      });

      it('should throw an exception if the feature is not persisted.', function () {
        var featureNotPersisted = Feature.fromMetric(
          ReliabilityAsset,
          this.metricUsingSensor1,
          'MONTH',
          'featureNotPersisted'
        );

        var inputObj = this.generateTestModelAndRelation(
          'fakeAssetId',
          this.operationalSensorIds,
          this.faultySensorIds,
          [['featureNotPersisted']]
        );

        var modelInclude = this.modelInclude;
        expect(function () {
          FaultySensor.ModelImpactMapReduceJob.validateModelCanBeRetrained({
            modelId: inputObj.model.id,
            allRelations: [inputObj.relation],
            impactedRelationIds: [inputObj.relation.id],
            sourceOfTruthModel: inputObj.model.getMissing({ include: modelInclude }),
          });
        }).toThrowError(/run with id .* has mask features with names .*, but some are not persisted./);
      });

      it('should throw an exception if the feature set is not persisted.', function () {
        var featureNotPersisted = Feature.fromMetric(
          ReliabilityAsset,
          this.metricUsingSensor1,
          'MONTH',
          'featureNotPersisted'
        );

        var featureSetNotPersisted = Feature.Set.make({
          id: 'ReliabilityAsset#featureSetNotPersisted',
          name: 'featureSetNotPersisted',
          subjectType: ReliabilityAsset,
          features: [featureNotPersisted],
        });

        var inputObj = this.generateTestModelAndRelation(
          'fakeAssetId',
          this.operationalSensorIds,
          this.faultySensorIds,
          []
        );

        this.updateModelDatasetPrepRunWithNewMask(inputObj.model.get(this.modelInclude), [featureSetNotPersisted]);

        var modelInclude = this.modelInclude;
        expect(function () {
          FaultySensor.ModelImpactMapReduceJob.validateModelCanBeRetrained({
            modelId: inputObj.model.id,
            allRelations: [inputObj.relation],
            impactedRelationIds: [inputObj.relation.id],
            sourceOfTruthModel: inputObj.model.getMissing({ include: modelInclude }),
          });
        }).toThrowError(/run with id .* has mask feature sets with ids .*, but some are not persisted./);
      });
    });

    describe('non-mask features', function () {
      it('should catch when there will only be a single feature left', function () {
        var inputObj = this.generateTestModelAndRelation(
          'fakeAssetId',
          this.faultySensorIds.with(this.operationalSensorIds[0]),
          [],
          []
        );

        var result = FaultySensor.ModelImpactMapReduceJob.validateModelCanBeRetrained({
          modelId: inputObj.model.id,
          allRelations: [inputObj.relation],
          impactedRelationIds: [inputObj.relation.id],
          sourceOfTruthModel: inputObj.model.getMissing({ include: this.modelInclude }),
        });

        expect(result.allRelations).withContext('allRelations').toEqual([inputObj.relation]);
        expect(result.validRelationIds).withContext('validRelationIds').toEqual([]);
        expect(result.errors.length).toEqual(1);
        expect(result.errors[0].errorCategory).toEqual(FaultySensor.ModelRetrainValidationErrorEnum.SINGLE_FEATURE);
      });

      it('should catch when there will be no features left', function () {
        var inputObj = this.generateTestModelAndRelation('fakeAssetId', this.faultySensorIds, [], []);

        var result = FaultySensor.ModelImpactMapReduceJob.validateModelCanBeRetrained({
          modelId: inputObj.model.id,
          allRelations: [inputObj.relation],
          impactedRelationIds: [inputObj.relation.id],
          sourceOfTruthModel: inputObj.model.getMissing({ include: this.modelInclude }),
        });

        expect(result.allRelations).withContext('allRelations').toEqual([inputObj.relation]);
        expect(result.validRelationIds).withContext('validRelationIds').toEqual([]);
        expect(result.errors.length).toEqual(1);
        expect(result.errors[0].errorCategory).toEqual(FaultySensor.ModelRetrainValidationErrorEnum.NO_FEATURES);
      });

      it('should validate it is ok if there are still enough sensors after faulty ones are removed.', function () {
        var inputObj = this.generateTestModelAndRelation(
          'fakeAssetId',
          this.faultySensorIds.withAll(this.operationalSensorIds),
          [],
          []
        );

        var result = FaultySensor.ModelImpactMapReduceJob.validateModelCanBeRetrained({
          modelId: inputObj.model.id,
          allRelations: [inputObj.relation],
          impactedRelationIds: [inputObj.relation.id],
          sourceOfTruthModel: inputObj.model.getMissing({ include: this.modelInclude }),
        });

        expect(result.allRelations).withContext('allRelations').toEqual([inputObj.relation]);
        expect(result.validRelationIds).withContext('validRelationIds').toEqual([inputObj.relation.id]);
        expect(result.errors.length).toEqual(0);
      });
    });
  });

  describe('_are_sensor_ids_used_in_metric_str', function () {
    it('should check for double quotes', function () {
      var result = FaultySensor.ModelImpactMapReduceJob._are_sensor_ids_used_in_metric_str('metric("sensor1")', [
        'sensor1',
      ]);
      expect(result).toBe('sensor1');
    });

    it('should check for single quotes', function () {
      var result = FaultySensor.ModelImpactMapReduceJob._are_sensor_ids_used_in_metric_str("metric('sensor1')", [
        'sensor1',
      ]);
      expect(result).toBe('sensor1');
    });

    it('should return None if there is no match', function () {
      var result = FaultySensor.ModelImpactMapReduceJob._are_sensor_ids_used_in_metric_str('metric("sensor1")', [
        'sensor2',
      ]);
      expect(result).toBe(null);
    });

    it('should handle ids that are prefixes', function () {
      var result = FaultySensor.ModelImpactMapReduceJob._are_sensor_ids_used_in_metric_str('metric("sensor1")', [
        'sensor',
      ]);
      expect(result).toBe(null);
    });

    it('should handle empty arrays', function () {
      var result = FaultySensor.ModelImpactMapReduceJob._are_sensor_ids_used_in_metric_str('metric("sensor1")', []);
      expect(result).toBe(null);
    });

    it('should handle legacy metric definitions for metrics before 8.4.1', function () {
      // Taken from ReliabilityAssetSensorRelation.py `_create_expected_sensor_feature`
      var expectedSensorId = 'expectedSensor1';
      var expectedMetricPre84 = {
        name: expectedSensorId,
        srcType: ReliabilityAsset,
        id: expectedSensorId + '_ReliabilityAsset',
        path: "sensorRelations.(expectedSensor.id == '" + expectedSensorId + "').to.pointSeries",
        expression: 'avg(avg(normalized.data.quantity))',
      };

      // Taken from ReliabilityAssetSensorRelation.py `_create_metric_safe_sensor_feature`
      var metricSafeId = 'metricSafe1';
      var metricSafePre84 = {
        name: metricSafeId,
        srcType: ReliabilityAsset,
        id: metricSafeId + '_ReliabilityAsset',
        path: "sensorRelations.(to.metricSafeId == '" + metricSafeId + "').to.pointSeries",
      };

      expect(
        FaultySensor.ModelImpactMapReduceJob._are_sensor_ids_used_in_metric_str(expectedMetricPre84.path, [
          expectedSensorId,
        ])
      )
        .withContext('expected - true')
        .toBe(expectedSensorId);

      expect(
        FaultySensor.ModelImpactMapReduceJob._are_sensor_ids_used_in_metric_str(expectedMetricPre84.path, [
          'expectedSensor2',
        ])
      )
        .withContext('expected - false')
        .toBe(null);

      expect(
        FaultySensor.ModelImpactMapReduceJob._are_sensor_ids_used_in_metric_str(metricSafePre84.path, [metricSafeId])
      )
        .withContext('metricSafe - true')
        .toBe(metricSafeId);

      expect(
        FaultySensor.ModelImpactMapReduceJob._are_sensor_ids_used_in_metric_str(metricSafePre84.path, ['metricSafe2'])
      )
        .withContext('metricSafe - false')
        .toBe(null);
    });

    it('should handle metric definitions for metrics after 8.4.1', function () {
      // Taken from ReliabilityAssetSensorRelation.py `_create_expected_sensor_feature`
      var expectedSensorId = 'expectedSensor1';
      var sensorId = 'sensor1';

      // Taken from ReliabilityDataPreparationUiMaskSettings.py `createRuleMask`
      var expectedSensorExpression = 'expectedSensor("' + expectedSensorId + '")';
      var sensorExpression = 'sensor("' + sensorId + '")';

      expect(
        FaultySensor.ModelImpactMapReduceJob._are_sensor_ids_used_in_metric_str(expectedSensorExpression, [
          expectedSensorId,
        ])
      )
        .withContext('expected - true')
        .toBe(expectedSensorId);

      expect(
        FaultySensor.ModelImpactMapReduceJob._are_sensor_ids_used_in_metric_str(expectedSensorExpression, [
          'expectedSensor2',
        ])
      )
        .withContext('expected - false')
        .toBe(null);

      expect(FaultySensor.ModelImpactMapReduceJob._are_sensor_ids_used_in_metric_str(sensorExpression, [sensorId]))
        .withContext('sensor - true')
        .toBe(sensorId);

      expect(FaultySensor.ModelImpactMapReduceJob._are_sensor_ids_used_in_metric_str(sensorExpression, ['sensor2']))
        .withContext('sensor - false')
        .toBe(null);
    });
  });

  describe('_get_faulty_sensor_ids', function () {
    it('should return all faulty sensor ids', function () {
      var result = FaultySensor.ModelImpactMapReduceJob._get_faulty_sensor_ids('fakeAssetId');
      var resultSensorIds = result[0];
      var resultMetricSafeIds = result[1];
      var resultExpectedSensorIds = result[2];

      var actualMetricSafeIds = Sensor.fetch({
        filter: Filter.intersects('id', resultMetricSafeIds),
        include: 'metricSafeId',
      }).objs.pluck('metricSafeId');

      expect(resultSensorIds).withContext('resultSensorIds').toEqual(jasmine.arrayContaining(this.faultySensorIds));
      expect(resultMetricSafeIds)
        .withContext('resultMetricSafeIds')
        .toEqual(jasmine.arrayContaining(actualMetricSafeIds));
      expect(resultExpectedSensorIds)
        .withContext('resultExpectedSensorIds')
        .toEqual(jasmine.arrayContaining(this.faultyExpectedSensorIds));
    });

    it('should throw an error if there are too many faulty sensors', function () {
      expect(function () {
        FaultySensor.ModelImpactMapReduceJob._get_faulty_sensor_ids('fakeAssetId', 2);
      }).toThrowError(
        /Asset has too many faulty sensors to handle. The maximum faulty sensors for a single asset is 2./
      );
    });
  });
});
