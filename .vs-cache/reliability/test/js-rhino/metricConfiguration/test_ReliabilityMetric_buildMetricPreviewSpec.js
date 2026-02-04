/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ReliabilityMetric_buildMetricPreviewSpec';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);

    this.now = DateTime.now();

    this.facility = TestApi.upsertEntity(this.ctx, 'Facility', {
      id: 'TestFacility1',
    });

    this.asset = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAsset', [
      {
        id: 'TestAsset1',
      },
      {
        id: 'TestAsset2',
      },
      {
        id: 'TestAsset3',
      },
    ]);

    TestApi.upsertEntity(this.ctx, 'FacilityReliabilityAssetHierarchicalRelation', {
      from: this.facility.id,
      to: this.asset[0],
    });

    this.sensor = TestApi.upsertBatchEntity(this.ctx, 'Sensor', [
      {
        id: 'idSensor1',
        name: 'sensor1',
      },
      {
        id: 'idSensor2',
        name: 'sensor2',
      },
    ]);

    TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAssetSensorRelation', [
      {
        from: this.asset[0],
        to: this.sensor[0],
        id: 'TestAsset1_idSensor1',
      },
      {
        from: this.asset[0],
        to: this.sensor[1],
        id: 'TestAsset1_idSensor2',
      },
    ]);

    this.metric = TestApi.upsertEntity(this.ctx, 'ReliabilityMetric', {
      id: 'TestMetricA',
      name: 'TestMetricA',
      description: 'Test metric',
      expression: "sensor('idSensor2')",
      expandedExpression: "evalSensorForAnyAsset('idSensor2', $metric.interval, $metric.range)",
      facility: 'RWC',
      lastUpdated: this.now,
      assets: [this.asset[1], this.asset[2]],
    });

    ReliabilityAsset.refreshCalcFields({ sync: true });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('#buildMetricPreviewSpec', function () {
    describe('when the metric contains both sensor and metrics', function () {
      beforeAll(function () {
        this.expression = "sensor('idSensor1') + TestMetricA";
        this.result = ReliabilityMetric.buildMetricPreviewSpec(this.expression);
      });

      it('returns the correct new metric.', function () {
        this.expectedExpression =
          "evalSensorForAnyAsset('idSensor1', $metric.interval, $metric.range) + evalSensorForAnyAsset('idSensor2', $metric.interval, $metric.range)";
        expect(this.result.newMetricExpression).toEqual(this.expectedExpression);
      });

      it('returns the correct metric dependencies.', function () {
        expect(this.result.dependencyMetrics.length).toEqual(1);
        expect(this.result.dependencyMetrics[0]).toEqual(
          jasmine.objectContaining({
            id: 'TestMetricA',
            expandedExpression: "evalSensorForAnyAsset('idSensor2', $metric.interval, $metric.range)",
          })
        );
      });

      it('returns the correct sensor dependencies.', function () {
        expect(this.result.dependencySensors.length).toEqual(1);
        expect(this.result.dependencySensors[0]).toEqual(
          jasmine.objectContaining({
            id: 'idSensor1',
          })
        );
      });

      it('returns the correct asset dependencies.', function () {
        expect(this.result.relatedAssetIds.length).toEqual(3);
        expect(this.result.relatedAssetIds).toEqual(
          jasmine.arrayContaining(['TestAsset1', 'TestAsset2', 'TestAsset3'])
        );
      });
    });

    describe('when the metric contains only sensors', function () {
      beforeAll(function () {
        this.expression = "sensor('idSensor1')";
        this.result = ReliabilityMetric.buildMetricPreviewSpec(this.expression);
      });

      it('returns the correct new metric.', function () {
        this.expectedExpression = "evalSensorForAnyAsset('idSensor1', $metric.interval, $metric.range)";
        expect(this.result.newMetricExpression).toEqual(this.expectedExpression);
      });

      it('returns the correct metric dependencies.', function () {
        expect(this.result.dependencyMetrics.length).toEqual(0);
      });

      it('returns the correct sensor dependencies.', function () {
        expect(this.result.dependencySensors.length).toEqual(1);
        expect(this.result.dependencySensors[0]).toEqual(
          jasmine.objectContaining({
            id: 'idSensor1',
          })
        );
      });

      it('returns the correct asset dependencies.', function () {
        expect(this.result.relatedAssetIds.length).toEqual(1);
        expect(this.result.relatedAssetIds).toEqual(jasmine.arrayContaining(['TestAsset1']));
      });
    });

    describe('when the metric contains only metrics', function () {
      beforeAll(function () {
        this.expression = 'TestMetricA';
        this.result = ReliabilityMetric.buildMetricPreviewSpec(this.expression);
      });

      it('returns the correct new metric.', function () {
        this.expectedExpression = "evalSensorForAnyAsset('idSensor2', $metric.interval, $metric.range)";
        expect(this.result.newMetricExpression).toEqual(this.expectedExpression);
      });

      it('returns the correct metric dependencies.', function () {
        expect(this.result.dependencyMetrics.length).toEqual(1);
        expect(this.result.dependencyMetrics[0]).toEqual(
          jasmine.objectContaining({
            id: 'TestMetricA',
            expandedExpression: "evalSensorForAnyAsset('idSensor2', $metric.interval, $metric.range)",
          })
        );
      });

      it('returns the correct sensor dependencies.', function () {
        expect(this.result.dependencySensors.length).toEqual(0);
      });

      it('returns the correct asset dependencies.', function () {
        expect(this.result.relatedAssetIds.length).toEqual(2);
        expect(this.result.relatedAssetIds).toEqual(jasmine.arrayContaining(['TestAsset2', 'TestAsset3']));
      });
    });

    describe('when the metric does not contains sensors or metrics', function () {
      beforeAll(function () {
        this.expression = 'identity(1)';
        this.result = ReliabilityMetric.buildMetricPreviewSpec(this.expression);
      });

      it('returns the correct new metric.', function () {
        this.expectedExpression = 'identity(1)';
        expect(this.result.newMetricExpression).toEqual(this.expectedExpression);
      });

      it('returns the correct metric dependencies.', function () {
        expect(this.result.dependencyMetrics.length).toEqual(0);
      });

      it('returns the correct sensor dependencies.', function () {
        expect(this.result.dependencySensors.length).toEqual(0);
      });

      it('returns the correct asset dependencies.', function () {
        expect(this.result.relatedAssetIds.length).toEqual(0);
      });
    });
  });
});
