/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_AssetFeaturesFetchHelper';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();

    this.assetClass = TestApi.upsertEntity(this.ctx, 'AssetClass', {
      name: 'Test Template',
      expectedSensors: ['Pressure', 'Temperature', 'Vibration', 'MetricFeature1'],
    });

    this.subsystem = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      name: 'Rel Subsystem 1 Test',
      id: 'su1',
      assetClass: this.assetClass,
    });

    this.model = ReliabilityTestData.createReliabilityRiskModels(
      Filter.eq('id', this.subsystem.id).toString(),
      MlModel.Route.Status.Label.CHAMPION,
      ['test_feature1', 'RiskScore', 'QuantityTest']
    )[this.subsystem.id];
    this.modelRelation = ReliabilityAssetToRiskModelRelation.fetch({
      filter: Filter.eq('to.id', this.model.id)
        .and()
        .eq('status.label', MlModel.Route.Status.Label.CHAMPION)
        .toString(),
    }).objs[0];
    TestApi.waitForSetup(this.ctx);

    var sensors = TestApi.upsertBatchEntity(this.ctx, 'Sensor', [
      {
        id: 'Pressure',
        name: 'tag 1',
        tag: 'Pressure',
      },
      {
        id: 'Temperature',
        name: 'tag 2',
        tag: 'Temperature',
      },
      {
        id: 'Vibration',
        name: 'tag 3',
        tag: 'Vibration',
      },
      {
        id: 'sensor1',
        name: 'tag 4',
        tag: 'BCDEF',
      },
    ]);

    var ppms = TestApi.upsertBatchEntity(this.ctx, 'PointPhysicalMeasurementSeries', [
      {
        id: 't1',
        name: 'tag 1',
        unitConstraint: { id: 'kilowatt_hour' },
        asset: sensors[0],
      },
      {
        id: 't2',
        name: 'tag 2',
        unitConstraint: { id: 'kilowatt_hour' },
        asset: sensors[1],
      },
      {
        id: 't3',
        name: 'tag 3',
        unitConstraint: { id: 'kilowatt_hour' },
        asset: sensors[2],
      },
      {
        name: 'tag 4',
        unitConstraint: { id: 'inch_of_water' },
        asset: sensors[3],
      },
    ]);

    this.now = DateTime.fromString('2019-01-30');
    TestApi.upsertBatchEntity(this.ctx, 'PointMeasurement', [
      {
        parent: 't1',
        start: DateTime.now(),
        quantity: { value: 345 },
      },
      {
        parent: 't2',
        start: DateTime.now(),
        quantity: { value: 345 },
      },
      {
        parent: 't3',
        start: DateTime.now(),
        quantity: { value: 345 },
      },
      {
        parent: ppms[3],
        start: this.now.plusHours(-2),
        quantity: { value: 345 },
      },
      {
        parent: ppms[3],
        start: this.now.plusHours(-1),
        quantity: { value: 690 },
      },
      {
        parent: ppms[3],
        start: this.now,
        quantity: { value: 1035 },
      },
    ]);

    TestApi.upsertBatchEntity(this.ctx, 'ExpectedSensor', [
      {
        id: 'Pressure',
        name: 'Pressure',
        unit: 'fake_unit',
      },
      {
        id: 'Temperature',
        name: 'Temperature',
        unit: 'fake_unit',
      },
      {
        id: 'Vibration',
        name: 'Vibration',
        unit: 'fake_unit',
      },
    ]);

    TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAssetSensorRelation', [
      {
        id: 'rel1',
        from: 'su1',
        to: sensors[0],
        start: '2019-01-04',
        end: '2019-01-10',
        expectedSensor: 'Pressure',
      },
      {
        id: 'rel2',
        from: 'su1',
        to: sensors[1],
        start: '2019-01-04',
        end: '2019-01-10',
        expectedSensor: 'Temperature',
      },
      {
        id: 'rel3',
        from: 'su1',
        to: sensors[2],
        start: '2019-01-04',
        end: '2019-01-10',
        expectedSensor: 'Vibration',
      },
      {
        id: 'rel33',
        from: 'su1',
        to: sensors[2],
        start: '2019-01-04',
        end: '2019-01-10',
        expectedSensor: 'Vibration',
      },
      {
        from: 'su1',
        to: sensors[3],
      },
    ]);

    var contributionHeaderMapper = ReliabilityMLOutputConfig.inst().configValue('columnsToContributionTimeseries');
    this.contributionHeaders = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityRiskScoreMlContributionHeader', [
      {
        name: MlProject.ReliabilityRisk.getSeriesName(contributionHeaderMapper, 'Pressure'),
        parent: this.modelRelation,
      },
      {
        name: MlProject.ReliabilityRisk.getSeriesName(contributionHeaderMapper, 'Temperature'),
        parent: this.modelRelation,
      },
      {
        name: MlProject.ReliabilityRisk.getSeriesName(contributionHeaderMapper, 'Vibration'),
        parent: this.modelRelation,
      },
      {
        name: MlProject.ReliabilityRisk.getSeriesName(contributionHeaderMapper, 'MetricFeature1'),
        parent: this.modelRelation,
      },
    ]);
    TestApi.upsertBatchEntity(this.ctx, 'ReliabilityRiskScoreMlContribution', [
      {
        parent: this.contributionHeaders[0],
        contribution: 0.3,
        start: '2018-01-01',
      },
      {
        parent: this.contributionHeaders[1],
        contribution: 0.3,
        start: '2018-01-01',
      },
      {
        parent: this.contributionHeaders[2],
        contribution: 0.5,
        start: '2018-01-01',
      },
      {
        parent: this.contributionHeaders[3],
        contribution: 0.4,
        start: '2018-01-01',
      },
      {
        parent: this.contributionHeaders[0],
        contribution: 0.6,
        start: '2020-01-01',
      },
      {
        parent: this.contributionHeaders[1],
        contribution: 0.7,
        start: '2020-01-01',
      },
      {
        parent: this.contributionHeaders[2],
        contribution: 0.8,
        start: '2020-01-01',
      },
      {
        parent: this.contributionHeaders[3],
        contribution: 0.9,
        start: '2020-01-01',
      },
    ]);

    ReliabilityAssetToRiskModelRelation.mergeAll({
      start: DateTime.fromString('2017-12-30'),
    });
    ReliabilityRiskScoreMlContributionHeader.fetch().objs.each(function (header) {
      ReliabilityRiskScoreMlContributionHeader.normalizeTimeseries(header);
    });
    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    ReliabilityMLConfig.inst().clearConfigAndSecretOverride('APP');
    ReliabilityTestData.removeMdfConcepts();
    TestApi.teardown(this.ctx);
  });

  it('gets the correct feature names for the asset', function () {
    var featureNames = AssetFeaturesFetchHelper.getFeatureNamesForAsset('su1');
    expect(featureNames).toEqual(['Pressure', 'Temperature', 'Vibration', 'MetricFeature1']);
  });

  describe('returns the correct entry', function () {
    it('before CHART_CLICK action', function () {
      var fetchResult = AssetFeaturesFetchHelper.fetchFeaturesForAsset(
        {
          include: 'contribution, name',
          order: 'ascending(contribution)',
        },
        'su1'
      );
      expect(fetchResult.objs[0].name).toEqual('Pressure');
      expect(fetchResult.objs[0].contribution).toBeCloseTo(0.2);
    });

    it('when ordering on a field with string values', function () {
      var fetchResult = AssetFeaturesFetchHelper.fetchFeaturesForAsset(
        {
          include: 'contribution, name',
          order: 'ascending(name)',
        },
        'su1'
      );
      expect(fetchResult.objs[0].name).toEqual('MetricFeature1');
      expect(fetchResult.objs[0].contribution).toBeCloseTo(0.3);
    });
  });

  it('returns the correct entry after CHART_CLICK action', function () {
    var fetchResult = AssetFeaturesFetchHelper.fetchFeaturesForAsset(
      {
        include: 'contribution, name',
        order: 'descending(contribution)',
        asOf: '2018-05-01',
      },
      'su1'
    );
    expect(fetchResult.objs[0].name).toEqual('Vibration');
    expect(fetchResult.objs[0].contribution).toBeCloseTo(0.33);
  });

  it('returns 2 if limit of 2 is passed in', function () {
    var fetchResult = AssetFeaturesFetchHelper.fetchFeaturesForAsset({ limit: 2 }, 'su1').objs;
    expect(fetchResult.length).toBe(2);
  });

  it('returns 5 if limit of 5 is passed in with offset 2', function () {
    var fetchResult = AssetFeaturesFetchHelper.fetchFeaturesForAsset({ limit: 1, offset: 2 }, 'su1').objs;
    var limitFetchResult = AssetFeaturesFetchHelper.fetchFeaturesForAsset({ limit: 10 }, 'su1').objs;
    expect(fetchResult[0].id).toEqual(limitFetchResult[2].id);
  });

  it('handles metric-based features', function () {
    var fetchResult = AssetFeaturesFetchHelper.fetchFeaturesForAsset(
      {
        include: 'name, unit, contribution, value',
        order: 'ascending(name)',
      },
      'su1'
    );
    expect(fetchResult.objs[0].name).toEqual('MetricFeature1');
  });

  it('calculates variance of features correctly', function () {
    var fetchResult = AssetFeaturesFetchHelper.fetchFeaturesForAsset(
      {
        include: 'variance',
        order: 'ascending(name)',
        asOf: this.now,
      },
      'su1'
    );
    expect(fetchResult.objs[0].variance).toEqual(119025);
  });

  describe('Test fetchFeaturesForAssetModelConfig', function () {
    it('returns correct value when selectionFilter is true with no filtering elements', function () {
      var fetchResult = AssetFeaturesFetchHelper.fetchFeaturesForAssetModelConfig(
        {
          filter: 'intersects(name, [""])',
        },
        'su1',
        true
      );
      expect(fetchResult.count).toEqual(0);
      expect(fetchResult.objs.length).toEqual(0);
      expect(fetchResult.totalCount).toEqual(0);
    });

    it('returns correct value when selectionFilter is true with some filtering elements', function () {
      var fetchResult = AssetFeaturesFetchHelper.fetchFeaturesForAssetModelConfig(
        {
          filter: 'intersects(name, ["Temperature", "Pressure"])',
        },
        'su1',
        true
      );

      expect(fetchResult.count).toEqual(2);
      expect(fetchResult.objs.length).toEqual(2);
      expect(fetchResult.totalCount).toEqual(2);
      var resultIds = fetchResult.objs.map(function (obj) {
        return obj.id;
      });
      expect(resultIds).toContain('Temperature');
      expect(resultIds).toContain('Pressure');
    });

    it('returns correct value when selectionFilter is false with no filtering elements', function () {
      var fetchResult = AssetFeaturesFetchHelper.fetchFeaturesForAssetModelConfig(
        {
          filter: 'intersects(name, [""])',
        },
        'su1',
        false
      );
      expect(fetchResult.count).toEqual(4);
      expect(fetchResult.objs.length).toEqual(4);
      expect(fetchResult.totalCount).toEqual(4);
      var resultIds = fetchResult.objs.map(function (obj) {
        return obj.id;
      });
      expect(resultIds).toContain('Temperature');
      expect(resultIds).toContain('Pressure');
      expect(resultIds).toContain('Vibration');
      expect(resultIds).toContain('MetricFeature1');
    });

    it('returns correct value when selectionFilter is false with some filtering elements', function () {
      var fetchResult = AssetFeaturesFetchHelper.fetchFeaturesForAssetModelConfig(
        {
          filter: 'intersects(name, ["Temperature"])',
        },
        'su1',
        false
      );
      expect(fetchResult.count).toEqual(3);
      expect(fetchResult.objs.length).toEqual(3);
      expect(fetchResult.totalCount).toEqual(3);
      var resultIds = fetchResult.objs.map(function (obj) {
        return obj.id;
      });
      expect(resultIds).toContain('Pressure');
      expect(resultIds).toContain('Vibration');
      expect(resultIds).toContain('MetricFeature1');
    });

    it('returns correct value when selectionFilter is false with all filtering elements', function () {
      var fetchResult = AssetFeaturesFetchHelper.fetchFeaturesForAssetModelConfig(
        {
          filter: 'intersects(name, ["Temperature", "Pressure", "Vibration", "MetricFeature1"])',
        },
        'su1',
        false
      );
      expect(fetchResult.count).toEqual(0);
      expect(fetchResult.objs.length).toEqual(0);
      expect(fetchResult.totalCount).toEqual(0);
    });
  });
});
