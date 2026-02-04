/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FieldStoredMetricCacheBatchJob';

describe(filename, function () {
  beforeEach(function () {
    this.ctx = TestApi.createContext(filename);
    this.thirtySecondDuration = Duration.fromSeconds(30);

    this.destinationIds = TestApi.upsertBatchEntity(this.ctx, 'FieldStoredMetricCacheTestDestination', [{}, {}]);
    this.cronJobId = 'fakeFieldStoredMetricCacheCronJob';

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
      {
        srcType: 'FieldStoredMetricCacheTestDestination',
        fieldName: 'metric2PastDay',
        metricExpression: 'identity(2)',
        interval: 'HOUR',
        filter: '1==1',
        cronJob: {
          id: this.cronJobId,
        },
        enabled: true,
      },
    ]);

    this.fieldStoredCalcCacheIds = TestApi.upsertBatchEntity(this.ctx, 'FieldStoredCalcCache', [
      {
        srcType: 'FieldStoredCalcCacheTestDestination',
        fieldName: 'field1',
        calcField: 'field1Calc',
        filter: '1==1',
        cronJob: {
          id: 'fakeCronJobId',
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
      var job = FieldStoredMetricCacheBatchJob.startJob({
        fieldStoredCache: this.fieldStoredMetricCaches[0],
        overrideFilterSpec: null,
        batchSize: 10,
      });

      job.waitForCompletion(this.thirtySecondDuration);
    });

    it('should update the metric1PastDay field for all optimizers', function () {
      var fetchResult = FieldStoredMetricCacheTestDestination.fetch({
        filter: Filter.intersects('id', this.destinationIds),
        include: 'metric1PastDay',
      });

      expect(fetchResult.at('objs.metric1PastDay').sorted()).toEqual([1, 1].sort());
      expect(fetchResult.count).toEqual(2);
    });
  });

  describe('test filtered batch job', function () {
    beforeEach(function () {
      var job = FieldStoredMetricCacheBatchJob.startJob({
        fieldStoredCache: this.fieldStoredMetricCaches[1],
        overrideFilterSpec: {
          ids: [this.destinationIds[0]],
        },
        batchSize: 10,
      });

      job.waitForCompletion(this.thirtySecondDuration);
    });

    it('should update the metric2PastDay field for just one optimizer', function () {
      var fetchResult = FieldStoredMetricCacheTestDestination.fetch({
        filter: Filter.intersects('id', this.destinationIds),
        include: 'metric2PastDay',
      });

      expect(fetchResult.at('objs.metric2PastDay')).toEqual([2, null]);
      expect(fetchResult.count).toEqual(2);
    });
  });

  describe('test batch job started from cron job', function () {
    it('should update the metric1PastDay and metric2PastDay fields', function () {
      var job = FieldStoredMetricCacheBatchJob.startJob({
        cronJob: {
          id: this.cronJobId,
        },
        batchSize: 10,
      });

      job.waitForCompletion(this.thirtySecondDuration);

      var fetchResult = FieldStoredMetricCacheTestDestination.fetch({
        include: 'metric1PastDay, metric2PastDay',
      });

      expect(fetchResult.at('objs.metric1PastDay')).toEqual([1, 1]);
      expect(fetchResult.at('objs.metric2PastDay')).toEqual([2, 2]);
      expect(fetchResult.count).toEqual(2);
    });
  });

  // TODO: remove xdescribe when PLAT-68247 is fixed. This bug causes double counting of member function spies.
  xdescribe('test batching evaluations with a specified batch size', function () {
    beforeEach(function () {
      this.scheduleBatchSpy = TestApi.spyOn(this.ctx, 'FieldStoredMetricCacheBatchJob', 'scheduleBatch')
        .callThrough()
        .register();

      var job = FieldStoredMetricCacheBatchJob.startJob({
        fieldStoredCache: this.fieldStoredMetricCaches[0],
        overrideFilterSpec: null,
        batchSize: 1,
      });

      job.waitForCompletion(this.thirtySecondDuration);
    });

    afterEach(function () {
      this.scheduleBatchSpy.unregister();
    });

    it('should update the metric1PastDay field for all optimizers', function () {
      var fetchResult = FieldStoredMetricCacheTestDestination.fetch({
        filter: Filter.intersects('id', this.destinationIds),
        include: 'metric1PastDay',
      });

      var callHistory = this.scheduleBatchSpy.getActionMock().callHistory();

      var historyObjIds = callHistory.map(function (call) {
        return call.args.batch.ids;
      });

      expect(fetchResult.at('objs.metric1PastDay').sorted()).toEqual([1, 1].sort());
      expect(fetchResult.count).toEqual(2);

      expect(this.scheduleBatchSpy.toHaveBeenCalledTimes(2)).withContext('should be called 2 times').toBeTruthy();
      expect(historyObjIds.length).withContext('should have 2 batches').toEqual(2);
      expect(historyObjIds[0].length).withContext('first batch should have 1 id').toEqual(1);
      expect(historyObjIds.flatten().sorted()).toEqual(this.destinationIds.sorted());
    });
  });

  describe('test calling processBatch with a calc field cache instance', function () {
    beforeEach(function () {
      this.getMissingSpy = TestApi.spyOn(this.ctx, 'FieldStoredMetricCache', 'getMissing')
        .returnValue(
          FieldStoredCalcCache.make({
            id: this.fieldStoredCalcCacheIds[0],
            srcType: 'FieldStoredCalcCacheTestDestination',
            fieldName: 'field1',
          })
        )
        .register();
    });

    afterEach(function () {
      this.getMissingSpy.unregister();
    });

    it('should throw an error', function () {
      var invalidCalcCacheId = this.fieldStoredCalcCacheIds[0];
      var errorRegex = new RegExp(
        'FieldStoredMetricCache instance ' + invalidCalcCacheId + ' does not use eval metrics.'
      );

      expect(function () {
        var batch = {
          fieldStoredCache: invalidCalcCacheId,
          ids: this.destinationIds,
        };
        FieldStoredMetricCacheBatchJob.processBatch(batch, null, null);
      }).toThrowError(errorRegex);
    });
  });

  describe('test nothing happens if a job is already running', function () {
    beforeEach(function () {
      var runningStatus = BatchJobStatus.make({
        status: JobStatusEnum.running,
      });
      this.statusSpy = TestApi.spyOn(this.ctx, 'FieldStoredMetricCacheBatchJob', 'status')
        .returnValue(runningStatus)
        .register();

      this.startSpy = TestApi.spyOn(this.ctx, 'FieldStoredMetricCacheBatchJob', 'start').returnValue(null).register();

      this.resultJob = FieldStoredMetricCacheBatchJob.startJob({
        fieldStoredCache: this.fieldStoredMetricCaches[0],
        overrideFilterSpec: null,
        batchSize: 1,
      });
    });

    afterEach(function () {
      this.statusSpy.unregister();
      this.startSpy.unregister();
    });

    it('should not update the field on destination entities', function () {
      var fetchResult = FieldStoredMetricCacheTestDestination.fetch({
        filter: Filter.intersects('id', this.destinationIds),
        include: 'metric1PastDay',
      });

      expect(fetchResult.at('objs.metric1PastDay')).toEqual([null, null]);
      expect(fetchResult.count).toEqual(2);
      expect(this.startSpy.toHaveBeenCalled()).withContext('start not called').toBeFalsy();
      expect(this.statusSpy.toHaveBeenCalled()).withContext('status called').toBeTruthy();
      expect(this.resultJob.id).toBeDefined();
    });
  });
});
