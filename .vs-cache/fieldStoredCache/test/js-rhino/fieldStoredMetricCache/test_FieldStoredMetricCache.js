/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FieldStoredMetricCache';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.destinationIds = TestApi.upsertBatchEntity(this.ctx, 'FieldStoredMetricCacheTestDestination', [{}]);

    this.unit = TestApi.upsertBatchEntity(this.ctx, 'Unit', [
      {
        id: 'USD',
        name: 'USD',
        symbol: '$',
      },
    ]);

    this.fieldStoredMetricCaches = TestApi.upsertBatchEntity(this.ctx, 'FieldStoredMetricCache', [
      {
        srcType: 'FieldStoredMetricCacheTestDestination',
        fieldName: 'metric1PastDay',
        metricExpression: 'identity(1)',
        interval: 'HOUR',
        filter: '1==1',
      },
      {
        srcType: 'FieldStoredMetricCacheTestDestination',
        fieldName: 'metric2PastDay',
        metricExpression: 'identity(1)',
        interval: 'HOUR',
        filter: '1==1',
      },
      {
        srcType: 'FieldStoredMetricCacheTestDestination',
        fieldName: 'metric3PastDay',
        metricExpression: 'identity(1)',
        interval: 'HOUR',
        unit: 'USD',
        filter: '1==1',
      },
      {
        srcType: 'FieldStoredMetricCacheTestDestination',
        fieldName: 'randomField',
        metricExpression: 'identity(1)',
        interval: 'HOUR',
        filter: '1==1',
      },
    ]);

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    BatchQueue.clear();
    TestApi.teardown(this.ctx);
  });

  it('should refresh the required fields.', function () {
    var fieldStoredMetricCache = FieldStoredMetricCache.make(this.fieldStoredMetricCaches[0]).get();
    var job = fieldStoredMetricCache.refreshCacheFields();
    job.waitForCompletion();

    var fetchResult = FieldStoredMetricCacheTestDestination.fetch({
      filter: Filter.intersects('id', this.destinationIds),
      include: 'metric1PastDay',
    });

    expect(fetchResult.at('objs.metric1PastDay')).toEqual([1]);
    expect(fetchResult.count).toEqual(1);
  });

  it('should refresh the required fields with a unit.', function () {
    var fieldStoredMetricCache = FieldStoredMetricCache.make(this.fieldStoredMetricCaches[2]).get();
    var job = fieldStoredMetricCache.refreshCacheFields();
    job.waitForCompletion();

    var fetchResult = FieldStoredMetricCacheTestDestination.fetch({
      filter: Filter.intersects('id', this.destinationIds),
      include: 'metric3PastDay.unit, metric3PastDay.value',
    });

    expect(fetchResult.count).toEqual(1);

    var obj = fetchResult.objs[0];
    expect(obj.metric3PastDay.unit.id).toEqual('USD');
    expect(obj.metric3PastDay.value).toEqual(1);
  });

  it('should throw an error if the field does not exist.', function () {
    var fieldStoredMetricCache = FieldStoredMetricCache.make(this.fieldStoredMetricCaches[3]).get();
    expect(function () {
      var job = fieldStoredMetricCache.refreshCacheFields();
      job.waitForCompletion();
    }).toThrowError(/Field randomField does not exist on type FieldStoredMetricCacheTestDestination./);
  });
});
