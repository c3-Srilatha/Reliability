/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FieldStoredCalcCacheBatchJob';

describe(filename, function () {
  beforeEach(function () {
    this.ctx = TestApi.createContext(filename);
    this.thirtySecondDuration = Duration.fromSeconds(30);

    this.destinationIds = TestApi.upsertBatchEntity(this.ctx, 'FieldStoredCalcCacheTestDestination', [
      {
        field1: ['oldValue'],
        field2: 'non null string',
      },
      {},
    ]);

    this.cronJobId = 'fakeFieldStoredCalcCacheCronJob';
    this.fieldStoredCaches = TestApi.upsertBatchEntity(this.ctx, 'FieldStoredCalcCache', [
      {
        srcType: 'FieldStoredCalcCacheTestDestination',
        fieldName: 'field1',
        calcField: 'field1Calc',
        filter: '1==1',
        cronJob: {
          id: this.cronJobId,
        },
        enabled: true,
      },
      {
        srcType: 'FieldStoredCalcCacheTestDestination',
        fieldName: 'field2',
        calcField: 'field2Calc',
        filter: '1==1',
        cronJob: {
          id: this.cronJobId,
        },
        enabled: true,
      },
    ]);

    this.fieldStoredMetricCaches = TestApi.upsertBatchEntity(this.ctx, 'FieldStoredMetricCache', [
      {
        srcType: 'FieldStoredMetricCacheTestDestination',
        fieldName: 'metric1PastDay',
        metricExpression: 'identity(1)',
        interval: 'HOUR',
        filter: '1==1',
        cronJob: {
          id: this.cronJobId,
        },
        enabled: true,
      },
    ]);

    TestApi.waitForSetup(this.ctx);
  });

  afterEach(function () {
    TestApi.teardown(this.ctx);
  });

  describe('test unfiltered batch job', function () {
    beforeEach(function () {
      var job = FieldStoredCalcCacheBatchJob.startJob({
        fieldStoredCache: this.fieldStoredCaches[0],
        overrideFilterSpec: null,
        batchSize: 10,
      });

      job.waitForCompletion(this.thirtySecondDuration);
    });

    it('should update field1 field for all entities', function () {
      var fetchResult = FieldStoredCalcCacheTestDestination.fetch({
        filter: Filter.intersects('id', this.destinationIds),
        include: 'field1',
      });

      expect(fetchResult.count).toEqual(2);
      expect(fetchResult.objs[0].field1).toEqual(['value1', 'value2']);
      expect(fetchResult.objs[1].field1).toEqual(['value1', 'value2']);
    });
  });

  describe('test filtered batch job', function () {
    beforeEach(function () {
      var job = FieldStoredCalcCacheBatchJob.startJob({
        fieldStoredCache: this.fieldStoredCaches[1],
        overrideFilterSpec: {
          ids: [this.destinationIds[1]],
        },
        batchSize: 10,
      });

      job.waitForCompletion(this.thirtySecondDuration);
    });

    it('should update field2 for just one entity', function () {
      var unchangedEntity = FieldStoredCalcCacheTestDestination.make(this.destinationIds[0]).get('field2');
      var changedEntity = FieldStoredCalcCacheTestDestination.make(this.destinationIds[1]).get('field2');

      expect(unchangedEntity.field2).toEqual('non null string');
      expect(changedEntity.field2).not.toBeDefined();
    });
  });

  describe('test batch job started from cron job', function () {
    it('should update the field1 and field2 fields', function () {
      var job = FieldStoredCalcCacheBatchJob.startJob({
        cronJob: {
          id: this.cronJobId,
        },
        batchSize: 10,
      });

      job.waitForCompletion(this.thirtySecondDuration);

      var fetchResult = FieldStoredCalcCacheTestDestination.fetch({
        include: 'field1, field2',
      });

      expect(fetchResult.count).toEqual(2);
      expect(fetchResult.objs[0].field1).toEqual(['value1', 'value2']);
      expect(fetchResult.objs[1].field1).toEqual(['value1', 'value2']);
      expect(fetchResult.objs[0].field2).not.toBeDefined();
      expect(fetchResult.objs[1].field2).not.toBeDefined();
    });
  });

  // TODO: remove xdescribe when PLAT-68247 is fixed. This bug causes double counting of member function spies.
  xdescribe('test batching evaluations with a specified batch size', function () {
    beforeEach(function () {
      this.scheduleBatchSpy = TestApi.spyOn(this.ctx, 'FieldStoredCalcCacheBatchJob', 'scheduleBatch')
        .callThrough()
        .register();

      var job = FieldStoredCalcCacheBatchJob.startJob({
        fieldStoredCache: this.fieldStoredCaches[0],
        overrideFilterSpec: null,
        batchSize: 1,
      });

      job.waitForCompletion(this.thirtySecondDuration);
    });

    afterEach(function () {
      this.scheduleBatchSpy.unregister();
    });

    it('should update field1 field for all entities', function () {
      var fetchResult = FieldStoredCalcCacheTestDestination.fetch({
        filter: Filter.intersects('id', this.destinationIds),
        include: 'field1',
      });

      var callHistory = this.scheduleBatchSpy.getActionMock().callHistory();

      var historyObjIds = callHistory.map(function (call) {
        return call.args.batch.ids;
      });

      expect(fetchResult.count).toEqual(2);
      expect(fetchResult.objs[0].field1).toEqual(['value1', 'value2']);
      expect(fetchResult.objs[1].field1).toEqual(['value1', 'value2']);

      expect(this.scheduleBatchSpy.toHaveBeenCalledTimes(2)).withContext('should be called 2 times').toBeTruthy();
      expect(historyObjIds.length).withContext('should have 2 batches').toEqual(2);
      expect(historyObjIds[0].length).withContext('first batch should have 1 id').toEqual(1);
      expect(historyObjIds.flatten().sorted()).toEqual(this.destinationIds.sorted());
    });
  });

  describe('test calling processBatch with an instance that does not use fetch', function () {
    beforeEach(function () {
      this.usesFetchSpy = TestApi.spyOn(this.ctx, 'FieldStoredCalcCache', 'usesFetch').returnValue(false).register();
    });

    afterEach(function () {
      this.usesFetchSpy.unregister();
    });

    it('should throw an error', function () {
      var invalidCalcCacheId = this.fieldStoredCaches[0];
      var errorRegex = new RegExp('FieldStoredCalcCache instance ' + invalidCalcCacheId + ' does not use fetch.');

      expect(function () {
        var batch = {
          fieldStoredCache: invalidCalcCacheId,
          ids: this.destinationIds,
        };
        FieldStoredCalcCacheBatchJob.processBatch(batch, null, null);
      }).toThrowError(errorRegex);
    });
  });

  describe('test nothing happens if a job is already running', function () {
    beforeEach(function () {
      var runningStatus = BatchJobStatus.make({
        status: JobStatusEnum.running,
      });
      this.statusSpy = TestApi.spyOn(this.ctx, 'FieldStoredCalcCacheBatchJob', 'status')
        .returnValue(runningStatus)
        .register();

      this.startSpy = TestApi.spyOn(this.ctx, 'FieldStoredCalcCacheBatchJob', 'start').returnValue(null).register();

      this.resultJob = FieldStoredCalcCacheBatchJob.startJob({
        fieldStoredCache: this.fieldStoredCaches[0],
        overrideFilterSpec: null,
        batchSize: 1,
      });
    });

    afterEach(function () {
      this.statusSpy.unregister();
      this.startSpy.unregister();
    });

    it('should not update the field on destination entities', function () {
      var fetchResult = FieldStoredCalcCacheTestDestination.fetch({
        filter: Filter.intersects('id', this.destinationIds),
        include: 'field1',
      });

      expect(fetchResult.at('objs.field1')).toEqual([['oldValue'], []]);
      expect(fetchResult.count).toEqual(2);
      expect(this.startSpy.toHaveBeenCalled()).withContext('start not called').toBeFalsy();
      expect(this.statusSpy.toHaveBeenCalled()).withContext('status called').toBeTruthy();
      expect(this.resultJob.id).toBeDefined();
    });
  });
});
