/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FeatureFetchBase';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();

    this.asset = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      name: 'Rel Subsystem',
    });

    this.tag1 = TestApi.upsertEntity(this.ctx, 'Sensor', { id: 'sensor1' });
    this.tag2 = TestApi.upsertEntity(this.ctx, 'Sensor', { id: 'sensor2' });
    this.tag3 = TestApi.upsertEntity(this.ctx, 'Sensor', {
      id: 'sensor3',
      tag: 'ABC123',
      description: 'Sensor 3 description',
    });
    this.tag4 = TestApi.upsertEntity(this.ctx, 'Sensor', {
      id: 'sensor4',
      tag: 'DEF456',
      description: 'Sensor 4 description',
    });

    TestApi.upsertEntity(this.ctx, 'ExpectedSensor', {
      id: 'ExpectedSensor1',
      name: 'ExpectedSensor1',
      unit: 'fake_unit',
    });

    TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAssetSensorRelation', [
      {
        from: this.asset,
        to: this.tag1,
      },
      {
        from: this.asset,
        to: this.tag2,
      },
      {
        from: this.asset,
        to: this.tag3,
        expectedSensor: 'ExpectedSensor1',
      },
      {
        from: this.asset,
        to: this.tag4,
      },
    ]);

    this.pointPhysicalMeasurementSeries = TestApi.upsertBatchEntity(this.ctx, 'PointPhysicalMeasurementSeries', [
      {
        unitConstraint: 'fake_unit',
        asset: this.tag1.id,
        treatment: 'previous',
      },
      {
        unitConstraint: 'fake_unit',
        asset: this.tag2.id,
        treatment: 'previous',
      },
      {
        unitConstraint: 'fake_unit',
        asset: this.tag3.id,
        treatment: 'previous',
      },
    ]);

    this.now = DateTime.nowWithMillis().withoutZone();
    TestApi.upsertBatchEntity(this.ctx, 'PointMeasurement', [
      {
        parent: this.pointPhysicalMeasurementSeries[0],
        quantity: {
          value: 0,
        },
        start: this.now.plusHours(-6),
      },
      {
        parent: this.pointPhysicalMeasurementSeries[0],
        quantity: {
          value: 0,
        },
        start: this.now.plusHours(-5),
      },
      {
        parent: this.pointPhysicalMeasurementSeries[0],
        quantity: {
          value: 1,
        },
        start: this.now.plusHours(-4),
      },
      {
        parent: this.pointPhysicalMeasurementSeries[0],
        quantity: {
          value: 1,
        },
        start: this.now.plusHours(-3),
      },
      {
        parent: this.pointPhysicalMeasurementSeries[0],
        quantity: {
          value: 3,
        },
        start: this.now.plusHours(-2),
      },
      {
        parent: this.pointPhysicalMeasurementSeries[0],
        quantity: {
          value: 5,
        },
        start: this.now.plusHours(-1),
      },
      {
        parent: this.pointPhysicalMeasurementSeries[0],
        quantity: {
          value: 5,
        },
        start: this.now,
      },
      {
        parent: this.pointPhysicalMeasurementSeries[1],
        quantity: {
          value: 1,
        },
        start: this.now.plusHours(-4),
      },
      {
        parent: this.pointPhysicalMeasurementSeries[1],
        quantity: {
          value: 2,
        },
        start: this.now.plusHours(-3),
      },
      {
        parent: this.pointPhysicalMeasurementSeries[1],
        quantity: {
          value: 3,
        },
        start: this.now.plusHours(-2),
      },
      {
        parent: this.pointPhysicalMeasurementSeries[1],
        quantity: {
          value: 4,
        },
        start: this.now.plusHours(-1),
      },
      {
        parent: this.pointPhysicalMeasurementSeries[1],
        quantity: {
          value: 5,
        },
        start: this.now,
      },
      {
        parent: this.pointPhysicalMeasurementSeries[2],
        quantity: {
          value: 1,
        },
        start: this.now.plusHours(-4),
      },
      {
        parent: this.pointPhysicalMeasurementSeries[2],
        quantity: {
          value: 1,
        },
        start: this.now.plusHours(-3),
      },
      {
        parent: this.pointPhysicalMeasurementSeries[2],
        quantity: {
          value: 1,
        },
        start: this.now.plusHours(-2),
      },
      {
        parent: this.pointPhysicalMeasurementSeries[2],
        quantity: {
          value: 1,
        },
        start: this.now.plusHours(-1),
      },
      {
        parent: this.pointPhysicalMeasurementSeries[2],
        quantity: {
          value: 11,
        },
        start: this.now,
      },
    ]);

    ReliabilityMLConfig.inst().setConfigValue('featureVarianceLookbackHorizon', 5);

    this.features = ['MetricFeature1', 'TestExpectedSensor'];
    this.model = ReliabilityTestData.createReliabilityRiskModels(
      Filter.eq('id', this.asset.id),
      MlModel.Route.Status.Label.CANDIDATE,
      this.features
    ).get(this.asset.id);

    this.tag3MetricSafeId = this.tag3.get('metricSafeId').metricSafeId;
    this.tag4MetricSafeId = this.tag4.get('metricSafeId').metricSafeId;

    this.validationRelation = TestApi.upsertEntity(this.ctx, 'ReliabilityAssetToRiskModelValidationRelation', {
      from: this.asset,
      to: this.model,
    });

    this.validationContributionHeader = TestApi.upsertEntity(
      this.ctx,
      'ReliabilityRiskScoreMlValidationContributionHeader',
      {
        parent: this.validationRelation,
        name:
          ReliabilityMLConfig.configValue('sensorFeatureNamePrefix') +
          this.tag3MetricSafeId +
          ReliabilityMLOutputConfig.configValue('residualColumnNameSuffix'),
      }
    );

    this.validationContribution = TestApi.upsertEntity(this.ctx, 'ReliabilityRiskScoreMlValidationContribution', {
      parent: this.validationContributionHeader,
      contribution: 1,
      start: DateTime.fromString('2022-01-01'),
    });

    this.validationContribution = this.validationContribution.get();

    ReliabilityRiskScoreMlValidationContributionHeader.normalizeTimeseries(this.validationContributionHeader);

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    ReliabilityMLConfig.inst().clearConfigAndSecretOverride('APP');
    TestApi.teardown(this.ctx);
  });

  describe('fetchFeatures', function () {
    beforeAll(function () {
      this.emptyResult = FeatureFetchBase.fetchFeatures(
        FeatureFetchBaseSpec.make({
          featureNames: [],
          assetId: this.asset.id,
          fetchSpec: FetchSpec.make({}, true),
        })
      );

      this.result1 = FeatureFetchBase.fetchFeatures(
        FeatureFetchBaseSpec.make({
          featureNames: [this.tag3MetricSafeId],
          assetId: this.asset.id,
          fetchSpec: FetchSpec.make(
            {
              include: 'value, variance, contribution, expectedSensor',
              filter: 'exists(value)',
            },
            true
          ),
        })
      );

      this.result2 = FeatureFetchBase.fetchFeatures(
        FeatureFetchBaseSpec.make({
          featureNames: ['MetricFeature1', 'MetricFeature2'],
          assetId: this.asset.id,
          fetchSpec: FetchSpec.make(
            {
              include: 'value, variance, contribution',
              order: 'ascending(name)',
            },
            true
          ),
        })
      );

      this.result3 = FeatureFetchBase.fetchFeatures(
        FeatureFetchBaseSpec.make({
          featureNames: ['MetricFeature1', 'MetricFeature2', this.tag3MetricSafeId, 'QuantityTest'],
          assetId: this.asset.id,
          fetchSpec: FetchSpec.make(
            {
              include: 'value, variance, contribution',
              order: 'descending(name)',
            },
            true
          ),
        })
      );

      this.result4 = FeatureFetchBase.fetchFeatures(
        FeatureFetchBaseSpec.make({
          featureNames: [this.tag3MetricSafeId],
          assetId: this.asset.id,
          fetchSpec: FetchSpec.make(
            {
              include: 'value',
            },
            true
          ),
        })
      );

      this.result5 = FeatureFetchBase.fetchFeatures(
        FeatureFetchBaseSpec.make({
          featureNames: ['MetricFeature1'],
          assetId: this.asset.id,
          fetchSpec: FetchSpec.make(
            {
              include: 'value, variance, contribution',
              asOf: this.now.plusHours(-2),
            },
            true
          ),
        })
      );

      this.result6 = FeatureFetchBase.fetchFeatures(
        FeatureFetchBaseSpec.make({
          featureNames: ['MetricFeature1', 'MetricFeature2', this.tag3MetricSafeId, 'QuantityTest'],
          assetId: this.asset.id,
          fetchSpec: FetchSpec.make(
            {
              limit: 2,
              offset: 1,
              order: 'ascending(name)',
            },
            true
          ),
        })
      );

      this.result7 = FeatureFetchBase.fetchFeatures(
        FeatureFetchBaseSpec.make({
          featureNames: ['ExpectedSensor1'],
          assetId: this.asset.id,
          fetchSpec: FetchSpec.make(
            {
              include: 'value, variance, contribution',
            },
            true
          ),
        })
      );

      this.result8 = FeatureFetchBase.fetchFeatures(
        FeatureFetchBaseSpec.make({
          featureNames: ['ExpectedSensor1'],
          assetId: this.asset.id,
          fetchSpec: FetchSpec.make(
            {
              include: 'name,value,variance,contribution',
              filter: 'intersects(name,["ABC123"])',
              limit: 10,
              offset: 0,
            },
            true
          ),
        })
      );

      this.result9 = FeatureFetchBase.fetchFeatures(
        FeatureFetchBaseSpec.make({
          featureNames: ['MetricFeature1', 'MetricFeature2', this.tag3MetricSafeId, 'QuantityTest'],
          assetId: this.asset.id,
          fetchSpec: FetchSpec.make(
            {
              limit: -1,
              offset: 1,
              order: 'ascending(name)',
            },
            true
          ),
        })
      );

      this.result10 = FeatureFetchBase.fetchFeatures(
        FeatureFetchBaseSpec.make({
          featureNames: [ReliabilityMLConfig.configValue('sensorFeatureNamePrefix') + this.tag3MetricSafeId],
          assetId: this.asset.id,
          modelId: this.model.id,
          isValidation: true,
          fetchSpec: FetchSpec.make(
            {
              include: 'value, variance, contribution, expectedSensor',
              asOf: this.validationContribution.start.plusMinutes(1),
            },
            true
          ),
        })
      );

      this.result11 = FeatureFetchBase.fetchFeatures(
        FeatureFetchBaseSpec.make({
          featureNames: [
            ReliabilityMLConfig.configValue('sensorFeatureNamePrefix') + this.tag3MetricSafeId,
            ReliabilityMLConfig.configValue('sensorFeatureNamePrefix') + this.tag4MetricSafeId,
          ],
          assetId: this.asset.id,
          modelId: this.model.id,
          isValidation: true,
          fetchSpec: FetchSpec.make(
            {
              include: 'value, variance',
              order: 'ascending(contribution)',
            },
            true
          ),
        })
      );
    });

    it('handles empty features list correctly', function () {
      expect(this.emptyResult.objs).toEqual([]);
      expect(this.emptyResult.count).toEqual(0);
      expect(this.emptyResult.hasMore).toEqual(false);
    });

    it('populates count and hasMore correctly', function () {
      expect(this.result1.count).toEqual(1);
      expect(this.result2.count).toEqual(2);
      expect(this.result1.objs.length).toEqual(1);
      expect(this.result2.objs.length).toEqual(2);
      expect(this.result1.hasMore).toEqual(false);
      expect(this.result2.hasMore).toEqual(false);
    });

    it('fetches sensor-based features', function () {
      var feature = this.result1.objs[0];
      expect(feature.id).toEqual(this.tag3MetricSafeId);
      expect(feature.name).toEqual('ABC123');
      expect(feature.description).toEqual('Sensor 3 description');
      expect(feature.value).toEqual(11);
      expect(feature.variance).toEqual(20);
      expect(feature.stddev).toBeCloseTo(Math.sqrt(20), 2);
      expect(feature.expectedSensor).toEqual('ExpectedSensor1');
    });

    it('fetches expected sensor-based features', function () {
      var feature = this.result7.objs[0];
      expect(feature.id).toEqual('ExpectedSensor1');
      expect(feature.name).toEqual('ABC123');
      expect(feature.description).toEqual('Sensor 3 description');
      expect(feature.value).toEqual(11);
      expect(feature.variance).toEqual(20);
      expect(feature.stddev).toBeCloseTo(Math.sqrt(20), 2);
    });

    it('fetches metric-based features', function () {
      var feature = this.result2.objs[0];
      expect(feature.id).toBeDefined();
      expect(feature.name).toEqual('MetricFeature1');
      expect(feature.value).toEqual(5);
      expect(feature.variance).toEqual(4);
      expect(feature.stddev).toBeCloseTo(2, 2);
      expect(feature.unit.name).toEqual('inch of water');
      expect(feature.unit.symbol).toEqual('in');
    });

    it('orders results properly in descending order', function () {
      var features = this.result3.at('objs.name');
      expect(features).toEqual(['QuantityTest', 'MetricFeature2', 'MetricFeature1', 'ABC123']);
    });

    it('excludes expensive fields which are not included', function () {
      var feature = this.result4.objs[0];
      expect(feature.variance).toBeUndefined();
      expect(feature.contribution).toBeUndefined();
      expect(feature.expectedSensor).toBeUndefined();
    });

    it('respects asOf field', function () {
      var feature = this.result5.objs[0];
      expect(feature.value).toEqual(3);
      expect(feature.variance).toEqual(1.5);
    });

    it('limits and offsets results properly', function () {
      var features = this.result6.at('objs.name');
      expect(features).toEqual(['MetricFeature1', 'MetricFeature2']);
    });

    it('respects offset when limit is -1', function () {
      var features = this.result9.at('objs.name');
      expect(features).toEqual(['MetricFeature1', 'MetricFeature2', 'QuantityTest']);
    });

    it('respects filter field in spec', function () {
      var filteredFeature = this.result8.objs[0];
      expect(filteredFeature.name).toEqual('ABC123');
      expect(filteredFeature.value).toEqual(11);
      expect(this.result8.count).toEqual(1);
      expect(this.result8.hasMore).toEqual(false);
    });

    it('fetches feature contribution for model validation', function () {
      expect(this.result10.objs[0].contributionPercentage).toEqual(this.validationContribution.contribution * 100);
    });

    it('includes contribution when mentioned only in order', function () {
      expect(this.result11.objs[0].contribution).toEqual(1);
    });
  });

  describe('testing the Config Value', function () {
    beforeAll(function () {
      ReliabilityUIConfig.inst().setConfigValue('featureFetchBaseLimit', -10);
    });

    it('should throw an error', function () {
      expect(function () {
        this.resultError = FeatureFetchBase.fetchFeatures(
          FeatureFetchBaseSpec.make({
            featureNames: ['MetricFeature1', 'MetricFeature2'],
            assetId: this.asset.id,
            include: 'value, variance, contribution',
            order: 'ascending(name)',
          })
        );
      }).toThrowError();
    });

    afterAll(function () {
      ReliabilityUIConfig.inst().setConfigValue('featureFetchBaseLimit', 2000);
    });
  });

  describe('fetchFeatures with reconstructions', function () {
    beforeAll(function () {
      this.newModel = ReliabilityMlModel.make(this.model.id)
        .get()
        .withoutId()
        .withField('project', MlProject.make('reliabilityRiskWithResidualDiagnostics'))
        .create();

      this.featureName = ReliabilityMLConfig.configValue('sensorFeatureNamePrefix') + this.tag3MetricSafeId;

      this.timedDataQuerySpy = TestApi.spyOn(this.ctx, 'ReliabilityModelOutputsTimedDataQuery', 'execute')
        .returnValue({
          [this.featureName + '_reconstruction']: Timeseries.make({
            tsInfo: {
              interval: 'DAY',
              start: this.now.toDateMidnight().plusDays(-1),
              end: this.now.toDateMidnight().plusDays(1),
            },
            _data: [0.5, 0.5],
            _kind: Timeseries.TimeseriesKind.REGULAR,
          }),
        })
        .register();

      this.result = FeatureFetchBase.fetchFeatures(
        FeatureFetchBaseSpec.make({
          featureNames: [this.featureName],
          assetId: this.asset.id,
          modelId: this.newModel.id,
          isValidation: false,
          fetchSpec: FetchSpec.make(
            {
              include: 'reconstruction',
            },
            true
          ),
        })
      );
    });

    afterAll(function () {
      this.newModel.remove();
      this.timedDataQuerySpy.unregister();
    });

    it('should fetch and attach reconstructions', function () {
      expect(this.result.objs[0].reconstruction).toBe(0.5);
    });
  });
});
