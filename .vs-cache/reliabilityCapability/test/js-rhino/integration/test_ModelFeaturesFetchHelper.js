/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ModelFeaturesFetchHelper';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();

    this.assetClass = TestApi.upsertEntity(this.ctx, 'AssetClass', {
      name: 'Test Template',
      expectedSensors: ['TestExpectedSensor', 'MetricFeature1'],
    });

    this.asset = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      name: 'Rel Subsystem 1 Test',
      id: 'su1',
      assetClass: this.assetClass,
    });

    this.sensor = TestApi.upsertBatchEntity(this.ctx, 'Sensor', [
      {
        id: 'Pressure',
        name: 'tag 1',
        tag: 'Pressure',
      },
      {
        id: 'sensor1',
        name: 'tag 2',
        tag: 'CDEFG',
      },
      {
        id: 'Feature1',
        name: 'Feature1',
        metricSafeId: 'Feature1',
      },
      {
        id: 'Feature2',
        metricSafeId: 'Feature2',
        name: 'Feature2',
      },
    ]);

    this.expectedSensor = TestApi.upsertEntity(this.ctx, 'ExpectedSensor', {
      id: 'TestExpectedSensor',
      name: 'TestExpectedSensor',
      unit: 'kilowatt hour',
    });

    TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAssetSensorRelation', [
      {
        from: this.asset.id,
        to: 'Pressure',
        expectedSensor: this.expectedSensor,
      },
      {
        from: this.asset.id,
        to: 'Feature1',
        expectedSensor: this.expectedSensor,
      },
      {
        from: this.asset.id,
        to: 'Feature2',
        expectedSensor: this.expectedSensor,
      },
    ]);

    this.sensorsFetch = Sensor.fetch({ filter: Filter.intersects('id', this.sensor) }).objs;
    this.metricNames = this.sensorsFetch.pluck('metricSafeId');

    this.now = DateTime.fromString('2019-01-30');

    TestApi.upsertEntity(this.ctx, 'PointPhysicalMeasurementSeries', {
      id: 't1',
      name: 'tag 1',
      unitConstraint: { id: 'kilowatt_hour' },
      asset: 'Pressure',
    });

    TestApi.upsertBatchEntity(this.ctx, 'PointMeasurement', [
      {
        parent: 't1',
        start: this.now.plusHours(-2),
        quantity: { value: 69 },
      },
      {
        parent: 't1',
        start: this.now.plusHours(-1),
        quantity: { value: 138 },
      },
      {
        parent: 't1',
        start: this.now,
        quantity: { value: 207 },
      },
    ]);

    // Create project and pipeline
    this.project = TestApi.upsertEntity(this.ctx, 'MlProject', {
      subjectType: 'ReliabilityAsset',
    });

    this.pipeline = ReliabilityTestData.createDummyReliabilityMlPipeline();

    this.dummyRoute = TestApi.upsertEntity(this.ctx, 'MlModel.Route', {
      model: 'dummy',
    });

    this.features = ['MetricFeature1', 'TestExpectedSensor'];
    this.featureSet = Feature.Set.make({
      name: 'dummyFS' + DateTime.now().millis,
      features: this.features,
      subjectType: ReliabilityAsset,
    }).create();

    this.model = TestApi.upsertEntity(this.ctx, 'ReliabilityMlModel', {
      project: this.project,
      pipeline: this.pipeline,
      xFeatures: { features: this.featureSet },
      yFeatures: { target: this.featureSet },
    });

    this.modelRelation = TestApi.upsertEntity(this.ctx, 'ReliabilityAssetToModelRelation', {
      to: this.model,
      from: this.asset,
      route: this.dummyRoute,
      status: { label: 'CHAMPION' },
    });

    this.features2 = ['TestExpectedSensor', 'Feature1'];
    this.featureSet2 = Feature.Set.make({
      name: 'dummyFS2' + DateTime.now().millis,
      features: this.features2,
      subjectType: ReliabilityAsset,
    }).create();

    this.model2 = TestApi.upsertEntity(this.ctx, 'ReliabilityMlModel', {
      project: this.project,
      pipeline: this.pipeline,
      xFeatures: { features: this.featureSet2 },
      yFeatures: { target: this.featureSet2 },
    });

    this.modelRelation2 = TestApi.upsertEntity(this.ctx, 'ReliabilityAssetToModelRelation', {
      to: this.model2,
      from: this.asset,
      route: this.dummyRoute,
      status: { label: 'CHAMPION' },
    });

    this.features3 = ['TestExpectedSensor', 'Feature2'];
    this.featureSet3 = Feature.Set.make({
      name: 'dummyFS3' + DateTime.now().millis,
      features: this.features3,
      subjectType: ReliabilityAsset,
    }).create();

    this.model3 = TestApi.upsertEntity(this.ctx, 'ReliabilityMlModel', {
      project: this.project,
      pipeline: this.pipeline,
      xFeatures: { features: this.featureSet3 },
      yFeatures: { target: this.featureSet3 },
    });

    this.modelRelation3 = TestApi.upsertEntity(this.ctx, 'ReliabilityAssetToModelRelation', {
      to: this.model3,
      from: this.asset,
      route: this.dummyRoute,
      status: { label: 'CHAMPION' },
    });

    TestApi.waitForSetup(this.ctx, null, 1, 240);

    this.fetchResult = ModelFeaturesFetchHelper.fetchFeaturesForModel(
      {
        include: 'variance',
        order: 'descending(name)',
        asOf: this.now,
      },
      this.model.id,
      this.asset.id
    );

    this.fetchRelatedResult = ModelFeaturesFetchHelper.fetchRelatedSensorRelationsForModel(
      {
        include: 'to.name',
      },
      this.model.id
    );
  });

  afterAll(function () {
    ReliabilityTestData.removeMdfConcepts();
    TestApi.teardown(this.ctx);
  });

  it('gets the right feature names for the model', function () {
    var featureNames = ModelFeaturesFetchHelper.getFeatureNamesForModel(this.model.id);
    featureNames = featureNames.sorted();
    expect(featureNames).toEqual(['MetricFeature1', 'TestExpectedSensor']);
  });

  it('returns the correct related features', function () {
    expect(this.fetchRelatedResult.count).toEqual(3);
    expect(this.fetchRelatedResult.objs[0].to.name).toEqual('Feature1');
    expect(this.fetchRelatedResult.objs[1].to.name).toEqual('Feature2');
  });

  it('returns the correct number of results', function () {
    expect(this.fetchResult.count).toEqual(4);
    expect(this.fetchResult.objs.length).toEqual(4);
    expect(this.fetchResult.totalCount).toEqual(4);
  });

  it('returns the correct order of results', function () {
    expect(this.fetchResult.at('objs.name')).toEqual(['Pressure', 'MetricFeature1', 'Feature2', 'Feature1']);
  });

  it('returns the correct sensor-based entry', function () {
    var result = this.fetchResult.objs[0];
    expect(result.id).toBeDefined();
    expect(result.name).toEqual('Pressure');
    expect(result.unit.name).toEqual('kilowatt hour');
    expect(result.unit.symbol).toEqual('kWh');
    expect(result.variance).toEqual(4761);
  });

  it('returns the correct metric-based entry', function () {
    var result = this.fetchResult.objs[1];
    expect(result.id).toEqual('MetricFeature1');
    expect(result.unit.name).toEqual('inch of water');
    expect(result.unit.symbol).toEqual('in');
  });

  describe('with FetchSpec#limit', function () {
    beforeAll(function () {
      this.fetchResult = ModelFeaturesFetchHelper.fetchFeaturesForModel(
        {
          limit: 1,
          asOf: this.now,
        },
        this.model.id,
        this.asset.id
      );
    });

    it('returns the correct number of results', function () {
      expect(this.fetchResult.count).toEqual(1);
      expect(this.fetchResult.objs.length).toEqual(1);
      expect(this.fetchResult.totalCount).toEqual(4);
    });
  });

  describe('with no modelId', function () {
    beforeAll(function () {
      this.result = ModelFeaturesFetchHelper.fetchFeaturesForModel({});
    });

    it('returns empty FetchResult', function () {
      expect(this.result).toEqual(
        jasmine.objectContaining({
          count: 0,
          hasMore: false,
          objs: [],
        })
      );
    });
  });

  it('fetches feature contributions for model validation', function () {
    this.fetchResult = ModelFeaturesFetchHelper.fetchFeaturesForModel(
      {
        include: 'variance',
        order: 'descending(name)',
        asOf: this.now,
      },
      this.model.id,
      this.asset.id,
      true
    );
    expect(this.fetchResult.objs[0].name).toEqual('Pressure');
    expect(this.fetchResult.objs[1].name).toEqual('MetricFeature1');
  });

  describe('#getSensorsFromFeatureNames', function () {
    beforeAll(function () {
      this.fakeMetric = ['NonExistentMetricSafeId'];
      this.fetchSensorsResult = ModelFeaturesFetchHelper.getSensorsFromFeatureNames(this.metricNames, this.asset);
      this.fetchNonExistingMetricResult = ModelFeaturesFetchHelper.getSensorsFromFeatureNames(
        this.fakeMetric,
        this.asset
      );
      this.fetchEmptyArrayResult = ModelFeaturesFetchHelper.getSensorsFromFeatureNames([], this.asset);
    });

    describe('when the sensor is related to an asset', function () {
      it('returns the sensor', function () {
        expect(this.fetchSensorsResult.Feature1.id).toEqual(this.sensor[2]);
      });
    });

    describe('when the sensor is not related to an asset', function () {
      it('returns the sensor', function () {
        expect(this.fetchSensorsResult.Feature2.id).toEqual(this.sensor[3]);
      });
    });

    describe('when the sensor metric does not exist', function () {
      it('returns a null value', function () {
        expect(this.fetchNonExistingMetricResult.NonExistentMetricSafeId).toBeNull();
      });
    });

    describe('when given an empty array as argument', function () {
      it('returns empty object', function () {
        expect(this.fetchEmptyArrayResult).toEqual({});
      });
    });
  });

  describe('#getMetricNamesFromFeatureNames', function () {
    beforeAll(function () {
      this.testMetricMap = ModelFeaturesFetchHelper.getMetricNamesFromFeatureNames([
        'Feature_Sensor1_FIVE_MINUTE',
        'Feature_Sensor2_MINUTE',
        'PlainFeatureName',
      ]);
      this.emptyMetricMap = ModelFeaturesFetchHelper.getMetricNamesFromFeatureNames([]);
    });

    it('converts feature names to metric names correctly', function () {
      expect(this.testMetricMap.Feature_Sensor1_FIVE_MINUTE).toEqual('Sensor1');
      expect(this.testMetricMap.Feature_Sensor2_MINUTE).toEqual('Sensor2');
      expect(this.testMetricMap.PlainFeatureName).toEqual('PlainFeatureName');
    });

    it('handles empty feature names array', function () {
      expect(Object.keys(this.emptyMetricMap).length).toEqual(0);
    });
  });

  describe('#getAssetFromReliabilityMlModel', function () {
    beforeAll(function () {
      this.assetFromModel = ModelFeaturesFetchHelper.getAssetFromReliabilityMlModel(this.model);
    });

    it('returns the correct asset for the provided model', function () {
      expect(this.assetFromModel.id).toEqual(this.asset.id);
    });
  });
});
