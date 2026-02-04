/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_PhysicalAssetEventCategoryRelation';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();

    this.today = DateTime.nowWithMillis();
    TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      id: 'subsystem1',
      name: 'Subsystem Test',
    });

    TestApi.upsertBatchEntity(this.ctx, 'EventCategory', [
      { id: 'eventCategory1', name: 'Event 1' },
      { id: 'eventCategory2', name: 'Event 2' },
      { id: 'eventCategory3', name: 'Event 3' },
    ]);
    TestApi.upsertBatchEntity(this.ctx, 'PhysicalAssetEventCategoryRelation', [
      { id: 'physicalAssetEventCategoryRelation1', to: 'eventCategory1', from: 'subsystem1' },
      { id: 'physicalAssetEventCategoryRelation2', to: 'eventCategory2', from: 'subsystem1' },
      { id: 'physicalAssetEventCategoryRelation3', to: 'eventCategory3', from: 'subsystem1' },
    ]);

    TestApi.upsertBatchEntity(this.ctx, 'ProbabilisticForecastResult', [
      {
        id: 'probabilisticForecastResult1',
        threshold: 0.1,
        thresholdName: 'threshold1',
        physicalAssetEventCategoryRelation: 'physicalAssetEventCategoryRelation1',
      },
      {
        id: 'probabilisticForecastResult2',
        threshold: 0.2,
        thresholdName: 'threshold2',
        physicalAssetEventCategoryRelation: 'physicalAssetEventCategoryRelation2',
      },
      {
        id: 'probabilisticForecastResult3',
        threshold: 0.3,
        thresholdName: 'threshold3',
        physicalAssetEventCategoryRelation: 'physicalAssetEventCategoryRelation3',
      },
    ]);

    TestApi.upsertBatchEntity(this.ctx, 'ProbabilisticForecastMeasurement', [
      {
        parent: 'probabilisticForecastResult1',
        timestamp: this.today.plusDays(1),
        value: 0.01,
        upperBound: 0.02,
        lowerBound: 0.001,
      },
      {
        parent: 'probabilisticForecastResult1',
        timestamp: this.today.plusDays(2),
        value: 0.02,
        upperBound: 0.04,
        lowerBound: 0.002,
      },
      {
        parent: 'probabilisticForecastResult1',
        timestamp: this.today.plusDays(3),
        value: 0.03,
        upperBound: 0.06,
        lowerBound: 0.003,
      },
    ]);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  it('evaluate ProbabilisticForecastMeasurementValue metric in day interval', function () {
    var id = 'physicalAssetEventCategoryRelation1';
    var result = PhysicalAssetEventCategoryRelation.evalMetric({
      id: id,
      expression: 'ProbabilisticForecastMeasurementValue',
      start: this.today,
      end: this.today.plusDays(3),
      interval: 'DAY',
    }).data();
    expect(result).toEqual([0, 0.01, 0.02, 0.03]);
  });

  it('evaluate ProbabilisticForecastMeasurementUpperBound metric in day interval', function () {
    var id = 'physicalAssetEventCategoryRelation1';
    var result = PhysicalAssetEventCategoryRelation.evalMetric({
      id: id,
      expression: 'ProbabilisticForecastMeasurementUpperBound',
      start: this.today,
      end: this.today.plusDays(3),
      interval: 'DAY',
    }).data();
    expect(result).toEqual([0, 0.02, 0.04, 0.06]);
  });

  it('evaluate ProbabilisticForecastMeasurementLowerBound metric in day interval', function () {
    var id = 'physicalAssetEventCategoryRelation1';
    var result = PhysicalAssetEventCategoryRelation.evalMetric({
      id: id,
      expression: 'ProbabilisticForecastMeasurementLowerBound',
      start: this.today,
      end: this.today.plusDays(3),
      interval: 'DAY',
    }).data();
    expect(result).toEqual([0, 0.001, 0.002, 0.003]);
  });

  it('evaluate Threshold metric in day interval', function () {
    var id = 'physicalAssetEventCategoryRelation1';
    var result = PhysicalAssetEventCategoryRelation.evalMetric({
      id: id,
      expression: 'Threshold',
      start: this.today,
      end: this.today.plusDays(3),
      interval: 'DAY',
    }).expandedData();
    expect(result).toEqual([0.1, 0.1, 0.1, 0.1]);
  });
});
