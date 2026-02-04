/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Ann.MetricCache';

describe(filename, function () {
  describe('getFscAnnotatedTypeFieldPairs', function () {
    it('should return the correct payload for this package', function () {
      var result = FieldStoredMetricCache.getFscAnnotatedTypeFieldPairs();
      var removedMetricField2 = result.findAny(function (pair) {
        return pair.typeRef.name() === 'FieldStoredMetricCacheListenerTestRemoved' && pair.fieldName === 'metricField2';
      });
      expect(result.length).toEqual(4);
      expect(removedMetricField2).toBeDefined();
      expect(removedMetricField2.annotation.metricExpression).toEqual('identity(4)');
      expect(removedMetricField2.annotation.filter).toEqual('1==1');
      expect(removedMetricField2.annotation.disabled).toBeFalse();
    });
  });

  describe('generateSeedDataForAnnotations', function () {
    beforeAll(function () {
      var payload = FieldStoredMetricCache.getFscAnnotatedTypeFieldPairs();
      this.result = FieldStoredMetricCache.generateSeedDataForAnnotations(payload);
      this.removedMetricField2Pair = this.result.findAny(function (pair) {
        return (
          pair.fst.srcType.name() === 'FieldStoredMetricCacheListenerTestRemoved' &&
          pair.fst.fieldName === 'metricField2'
        );
      });

      this.createdMetricField2Pair = this.result.findAny(function (pair) {
        return (
          pair.fst.srcType.name() === 'FieldStoredMetricCacheListenerTestCreated' &&
          pair.fst.fieldName === 'metricField2'
        );
      });
    });

    it('should create the correct total number of pairs', function () {
      expect(this.result.length).toEqual(4);
    });

    it('should return the correct set of FSMC and cron job for FieldStoredMetricCacheListenerTestRemoved#metricField2', function () {
      expect(this.removedMetricField2Pair.fst.metricExpression).toEqual('identity(4)');
      expect(this.removedMetricField2Pair.fst.interval).toEqual('DAY');
      expect(this.removedMetricField2Pair.fst.generatedByAnnotation).toBeTrue();

      expect(this.removedMetricField2Pair.snd).toBeUndefined();
    });

    it('should return the correct set of FSMC and cron job for FieldStoredMetricCacheListenerTestCreated#metricField2', function () {
      expect(this.createdMetricField2Pair.fst.metricExpression).toEqual('identity(2)');
      expect(this.createdMetricField2Pair.fst.interval).toEqual('DAY');
      expect(this.createdMetricField2Pair.fst.generatedByAnnotation).toBeTrue();
      expect(this.createdMetricField2Pair.fst.cronJob.id).toEqual(
        'FieldStoredMetricCache-CronJob-FieldStoredMetricCacheListenerTestCreated-metricField2'
      );

      expect(this.createdMetricField2Pair.snd.id).toEqual(
        'FieldStoredMetricCache-CronJob-FieldStoredMetricCacheListenerTestCreated-metricField2'
      );
    });
  });

  describe('transformListOfPairsToPairOfLists', function () {
    it('should transform for a simple list with on pair', function () {
      var listOfPairs = [
        {
          fst: {
            id: 'id1',
            name: 'name1',
          },
          snd: {
            id: 'id2',
            name: 'name2',
          },
        },
      ];
      var result = FieldStoredMetricCache.transformListOfPairsToPairOfLists(listOfPairs);
      expect(result.fst.length).toEqual(1);
      expect(result.snd.length).toEqual(1);
      expect(result.fst[0].id).toEqual('id1');
      expect(result.snd[0].id).toEqual('id2');
    });

    it('should transform for an empty list', function () {
      var listOfPairs = [];
      var result = FieldStoredMetricCache.transformListOfPairsToPairOfLists(listOfPairs);
      expect(result.fst.length).toEqual(0);
      expect(result.snd.length).toEqual(0);
    });

    it('should transform for a list with two entries and only one cron job', function () {
      var listOfPairs = [
        {
          fst: {
            id: 'id1',
            name: 'name1',
          },
          snd: {
            id: 'id2',
            name: 'name2',
          },
        },
        {
          fst: {
            id: 'id3',
            name: 'name3',
          },
        },
      ];
      var result = FieldStoredMetricCache.transformListOfPairsToPairOfLists(listOfPairs);
      expect(result.fst.length).toEqual(2);
      expect(result.snd.length).toEqual(1);
      expect(result.fst[0].id).toEqual('id1');
      expect(result.fst[1].id).toEqual('id3');
      expect(result.snd[0].id).toEqual('id2');
    });

    it('should transform for a list with two entries and only one field stored metric cache', function () {
      var listOfPairs = [
        {
          fst: {
            id: 'id1',
            name: 'name1',
          },
          snd: {
            id: 'id2',
            name: 'name2',
          },
        },
        {
          snd: {
            id: 'id3',
            name: 'name3',
          },
        },
      ];
      var result = FieldStoredMetricCache.transformListOfPairsToPairOfLists(listOfPairs);
      expect(result.fst.length).toEqual(1);
      expect(result.snd.length).toEqual(2);
      expect(result.fst[0].id).toEqual('id1');
      expect(result.snd[0].id).toEqual('id2');
      expect(result.snd[1].id).toEqual('id3');
    });
  });

  describe('generateSeedDataForAllAnnotations', function () {
    it('should return the correct results for this package', function () {
      var result = FieldStoredMetricCache.generateSeedDataForAllAnnotations();
      var createdMetricField2FSMC = result.fst.findAny(function (fsmc) {
        return fsmc.srcType.name() === 'FieldStoredMetricCacheListenerTestCreated' && fsmc.fieldName === 'metricField2';
      });
      var createdCronJob = result.snd[0];

      expect(result.fst.length).toEqual(4);
      expect(result.snd.length).toEqual(1);

      expect(createdMetricField2FSMC.metricExpression).toEqual('identity(2)');
      expect(createdMetricField2FSMC.cronJob.id).toEqual(
        'FieldStoredMetricCache-CronJob-FieldStoredMetricCacheListenerTestCreated-metricField2'
      );
      expect(createdMetricField2FSMC.generatedByAnnotation).toBeTrue();

      expect(createdCronJob.id).toEqual(
        'FieldStoredMetricCache-CronJob-FieldStoredMetricCacheListenerTestCreated-metricField2'
      );
    });
  });
});
