/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FieldStoredCalcCache';

describe(filename, function () {
  beforeEach(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);

    this.destinationIds = TestApi.upsertBatchEntity(this.ctx, 'FieldStoredCalcCacheTestDestination', [
      {
        field1: ['oldValue'],
        field2: 'non null string',
      },
      {},
    ]);

    this.fieldStoredCaches = TestApi.upsertBatchEntity(this.ctx, 'FieldStoredCalcCache', [
      {
        srcType: 'FieldStoredCalcCacheTestDestination',
        fieldName: 'field1',
        calcField: 'field1Calc',
        filter: '1==1',
      },
      {
        srcType: 'FieldStoredCalcCacheTestDestination',
        fieldName: 'field2',
        calcField: 'field2Calc',
        filter: '1==1',
      },
    ]);

    TestApi.waitForSetup(this.ctx);
  });

  afterEach(function () {
    TestApi.teardown(this.ctx);
  });

  it('should store a fetch result.', function () {
    var originalFetchResult = FieldStoredCalcCacheTestDestination.fetch({
      filter: '1==1',
      include: 'field1Calc',
    });

    FieldStoredCalcCache.make(this.fieldStoredCaches[0]).get().storeFetchResult(originalFetchResult);

    var updatedFetchResult = FieldStoredCalcCacheTestDestination.fetch({
      filter: '1==1',
      include: 'field1',
    });

    expect(updatedFetchResult.count).toEqual(2);
    expect(updatedFetchResult.objs[0].field1).toEqual(['value1', 'value2']);
    expect(updatedFetchResult.objs[1].field1).toEqual(['value1', 'value2']);
  });

  it('should do nothing with an empty fetch result.', function () {
    var originalFetchResult = FieldStoredCalcCacheTestDestination.fetch({
      filter: '1==2',
      include: 'field1Calc',
    });

    FieldStoredCalcCache.make(this.fieldStoredCaches[0]).get().storeFetchResult(originalFetchResult);

    var updatedFetchResult = FieldStoredCalcCacheTestDestination.fetch({
      filter: '1==1',
      include: 'field1',
    });

    expect(updatedFetchResult.count).toEqual(2);
    expect(updatedFetchResult.objs[0].field1).toEqual(['oldValue']);
    expect(updatedFetchResult.objs[1].field1).toEqual([]);
  });

  it('should store null values if they were fetched from a calc field', function () {
    var originalFetchResult = FieldStoredCalcCacheTestDestination.fetch({
      filter: '1==1',
      include: 'field2Calc',
    });

    FieldStoredCalcCache.make(this.fieldStoredCaches[1]).get().storeFetchResult(originalFetchResult);

    var updatedFetchResult = FieldStoredCalcCacheTestDestination.fetch({
      filter: '1==1',
      include: 'field2',
    });

    expect(updatedFetchResult.count).toEqual(2);
    expect(updatedFetchResult.objs[0].field2).not.toBeDefined();
    expect(updatedFetchResult.objs[1].field2).not.toBeDefined();
  });

  it('should refresh the required fields with a batch job.', function () {
    var fieldStoredCalcCache = FieldStoredCalcCache.make(this.fieldStoredCaches[0]).get();
    var job = fieldStoredCalcCache.refreshCacheFields();
    job.waitForCompletion();

    var updatedFetchResult = FieldStoredCalcCacheTestDestination.fetch({
      include: 'field1',
    });

    expect(updatedFetchResult.count).toEqual(2);
    expect(updatedFetchResult.objs[0].field1).toEqual(['value1', 'value2']);
    expect(updatedFetchResult.objs[1].field1).toEqual(['value1', 'value2']);
  });
});
