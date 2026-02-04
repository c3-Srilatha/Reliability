/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Ann.MetricCache';

describe(filename, function () {
  describe('generateFieldStoredMetricCache', function () {
    it('should return for an actual annotation.', function () {
      var annotation = FieldStoredMetricCacheListenerTestCreated.meta()
        .fieldTypesByName()
        .metricField2.annotation('metricCache');
      var resultFSMC = annotation.generateFieldStoredMetricCache(
        FieldStoredMetricCacheListenerTestCreated,
        'metricField2'
      ).fst;
      expect(annotation).toBeDefined();

      expect(resultFSMC.fieldName).toEqual('metricField2');
      expect(resultFSMC.srcType).toEqual('FieldStoredMetricCacheListenerTestCreated');
      expect(resultFSMC.name).toEqual('FieldStoredMetricCacheListenerTestCreated - metricField2');
      expect(resultFSMC.description).toEqual(
        "Evaluation of a metric for FieldStoredMetricCacheListenerTestCreated's metricField2 field"
      );
      expect(resultFSMC.metricExpression).toEqual('identity(2)');
      expect(resultFSMC.interval).toEqual('DAY');
      expect(resultFSMC.cronJob.id).toEqual(
        'FieldStoredMetricCache-CronJob-FieldStoredMetricCacheListenerTestCreated-metricField2'
      );
      expect(resultFSMC.filter).toEqual(Filter.lit('nonMetricField > 10'));
      expect(resultFSMC.enabled).withContext('enabled').toEqual(true);
      expect(resultFSMC.generatedByAnnotation).withContext('generatedByAnnotation').toEqual(true);
    });

    it('should return with minimum fields.', function () {
      var annotation = Ann.MetricCache.make({
        metricExpression: 'identity(3)',
        interval: 'DAY',
      });
      var result = annotation.generateFieldStoredMetricCache(FieldStoredMetricCacheListenerTestCreated, 'fakeField');
      var resultFSMC = result.fst;
      var resultCronJob = result.snd;

      expect(resultFSMC.fieldName).toEqual('fakeField');
      expect(resultFSMC.srcType).toEqual('FieldStoredMetricCacheListenerTestCreated');
      expect(resultFSMC.metricExpression).toEqual('identity(3)');
      expect(resultFSMC.interval).toEqual('DAY');
      expect(resultFSMC.cronJob).toBeUndefined();
      expect(resultFSMC.filter).toEqual(Filter.lit('1==1'));
      expect(resultFSMC.enabled).withContext('enabled').toEqual(true);
      expect(resultFSMC.generatedByAnnotation).withContext('generatedByAnnotation').toEqual(true);

      expect(resultCronJob).toBeUndefined();
    });

    it('should return with maximum fields.', function () {
      var annotation = Ann.MetricCache.make({
        metricExpression: 'identity(3)',
        interval: 'MONTH',
        cronExpression: '0 0 0 * * ?',
        filter: 'anotherField > 10',
        disabled: true,
      });
      var result = annotation.generateFieldStoredMetricCache(FieldStoredMetricCacheListenerTestCreated, 'fakeField');
      var resultFSMC = result.fst;
      var resultCronJob = result.snd;

      expect(resultFSMC.fieldName).toEqual('fakeField');
      expect(resultFSMC.srcType).toEqual('FieldStoredMetricCacheListenerTestCreated');
      expect(resultFSMC.metricExpression).toEqual('identity(3)');
      expect(resultFSMC.interval).toEqual('MONTH');
      expect(resultFSMC.cronJob.id).toEqual(
        'FieldStoredMetricCache-CronJob-FieldStoredMetricCacheListenerTestCreated-fakeField'
      );
      expect(resultFSMC.filter).toEqual(Filter.lit('anotherField > 10'));
      expect(resultFSMC.enabled).withContext('enabled').toEqual(false);
      expect(resultFSMC.generatedByAnnotation).withContext('generatedByAnnotation').toEqual(true);

      expect(resultCronJob.id).toEqual(
        'FieldStoredMetricCache-CronJob-FieldStoredMetricCacheListenerTestCreated-fakeField'
      );
      expect(resultCronJob.scheduleDef.cronExpression).toEqual('0 0 0 * * ?');
      expect(resultCronJob.inputs.cronJob.id).toEqual(
        'FieldStoredMetricCache-CronJob-FieldStoredMetricCacheListenerTestCreated-fakeField'
      );
      expect(resultCronJob.action).toEqual(
        jasmine.objectContaining({
          actionName: 'startJob',
          typeName: 'FieldStoredMetricCacheBatchJob',
        })
      );
    });

    it('should return with a cron job with no id.', function () {
      var annotation = Ann.MetricCache.make({
        metricExpression: 'identity(5)',
        interval: 'DAY',
        cronExpression: '0 0 0 * * ?',
      });
      var result = annotation.generateFieldStoredMetricCache(FieldStoredMetricCacheListenerTestCreated, 'fakeField');
      var resultFSMC = result.fst;
      var resultCronJob = result.snd;

      expect(resultFSMC.fieldName).toEqual('fakeField');
      expect(resultFSMC.srcType).toEqual('FieldStoredMetricCacheListenerTestCreated');
      expect(resultFSMC.cronJob.id).toEqual(
        'FieldStoredMetricCache-CronJob-FieldStoredMetricCacheListenerTestCreated-fakeField'
      );

      expect(resultCronJob.id).toEqual(
        'FieldStoredMetricCache-CronJob-FieldStoredMetricCacheListenerTestCreated-fakeField'
      );
      expect(resultCronJob.scheduleDef.cronExpression).toEqual('0 0 0 * * ?');
    });

    /*
     * Using a valid annotation, create a FieldStoredMetricCache and CronJob.
     * Then trigger the cron job for the FieldStoredMetricCache and check the output.
     */
    describe('end-to-end test', function () {
      function triggerCronJob(cronJobId) {
        var cronJob = CronJob.make(cronJobId).get('action, inputs');
        if (cronJob === null) {
          throw new Error(
            'Invalid cron job with id: ' +
              cronJobId +
              '. You will only need to run EmTest.refreshFieldStoredMetricCaches() after fixing the id.'
          );
        }

        return C3.type(cronJob.action.typeName)[cronJob.action.actionName](cronJob.inputs);
      }

      beforeAll(function () {
        this.ctx = TestApi.createContext(filename);

        var annotation = FieldStoredMetricCacheListenerTestCreated.meta()
          .fieldTypesByName()
          .metricField2.annotation('metricCache');
        var result = annotation.generateFieldStoredMetricCache(
          FieldStoredMetricCacheListenerTestCreated,
          'metricField2'
        );
        var resultFSMC = result.fst;
        var resultCronJob = result.snd;

        TestApi.upsertEntity(this.ctx, 'FieldStoredMetricCache', resultFSMC);
        TestApi.upsertEntity(this.ctx, 'CronJob', resultCronJob);

        this.entityIds = TestApi.upsertBatchEntity(this.ctx, 'FieldStoredMetricCacheListenerTestCreated', [
          {
            nonMetricField: 1,
            metricField2: 1,
          },
          {
            nonMetricField: 15,
            metricField2: 1,
          },
        ]);

        TestApi.waitForSetup(this.ctx);

        var resultingBatchJob = triggerCronJob(resultCronJob.id);
        resultingBatchJob.waitForCompletion(Duration.fromSeconds(30));
      });

      afterAll(function () {
        TestApi.teardown(this.ctx);
      });

      it('should have updated the metricField2 field', function () {
        var unchangedEntity = FieldStoredMetricCacheListenerTestCreated.make(this.entityIds[0]).get();
        var updatedEntity = FieldStoredMetricCacheListenerTestCreated.make(this.entityIds[1]).get();
        expect(unchangedEntity.metricField2).toEqual(1);
        expect(updatedEntity.metricField2).toEqual(2);
      });
    });
  });
});
