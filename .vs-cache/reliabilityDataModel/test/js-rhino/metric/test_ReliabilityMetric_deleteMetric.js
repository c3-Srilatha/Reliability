/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ReliabilityMetric';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);

    this.now = DateTime.now();

    this.assets = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAsset', [
      {
        name: 'Pump-100',
      },
      {
        name: 'Pump-200',
      },
    ]);

    /**
     * Create metrics for testing using ReliabilityMetric#createMetric, because using this method will create the metric
     * and its dependencies.
     */
    this.formObject1 = ReliabilityMetricSpec.make({
      name: 'CustomTestMetric1',
      description: 'User defined test metric',
      permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
      expression: 'sum(Pump-123, Pump-456)',
      expandedExpression: '1==1',
      assets: [this.assets[0], this.assets[1]],
      facility: 'RWC',
      lastUpdated: this.now,
    });
    this.formObject2 = ReliabilityMetricSpec.make({
      name: 'CustomTestMetric3',
      description: 'User defined test metric',
      permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
      expression: 'sum(Pump-123, Pump-456)',
      expandedExpression: '1==1',
      assets: [this.assets[0], this.assets[1]],
      facility: 'RWC',
      lastUpdated: this.now.minusDays(5),
    });
    this.formObject3 = ReliabilityMetricSpec.make({
      name: 'CustomTestMetric4',
      description: 'Updated User defined test metric 4',
      permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
      expression: 'max(CustomTestMetric3, RelMetric)',
      expandedExpression: '1==1',
      assets: [this.assets[0], this.assets[1]],
      facility: 'RWC',
      lastUpdated: this.now,
    });

    ReliabilityMetric.createMetric(this.formObject1);
    ReliabilityMetric.createMetric(this.formObject2);
    ReliabilityMetric.createMetric(this.formObject3);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('#deleteMetric', function () {
    describe('when it does not receive any metric id', function () {
      beforeAll(function () {
        this.result = ReliabilityMetric.deleteMetric();
      });

      it('returns null', function () {
        expect(this.result).toBe(null);
      });
    });

    describe('when it receives a metric id', function () {
      describe('and the metric does not have any dependency metrics', function () {
        beforeAll(function () {
          ReliabilityMetric.deleteMetric('CustomTestMetric1');

          this.customTestMetricExists = ReliabilityMetric.exists({
            filter: Filter.eq('id', 'CustomTestMetric1'),
          });
        });

        it('deletes the metric', function () {
          expect(this.customTestMetricExists).toEqual(false);
        });
      });

      describe('and the metric has dependency metrics', function () {
        beforeAll(function () {
          ReliabilityMetric.deleteMetric('CustomTestMetric3');

          this.customTestMetric3Exists = ReliabilityMetric.exists({
            filter: Filter.eq('id', 'CustomTestMetric3'),
          });

          this.customTestMetric4Exists = ReliabilityMetric.exists({
            filter: Filter.eq('id', 'CustomTestMetric4'),
          });

          // Checks the existance of 'CustomTestMetric3' in ReliabilityMetricDependencies type.
          this.existsInReliabilityMetricDependencies = ReliabilityMetricDependencies.exists({
            filter: Filter.eq('from.id', 'CustomTestMetric3'),
          });
        });

        it('deletes the metric', function () {
          expect(this.customTestMetric3Exists).toEqual(false);
        });

        it('deletes the dependency metrics', function () {
          expect(this.customTestMetric4Exists).toEqual(false);
          expect(this.existsInReliabilityMetricDependencies).toEqual(false);
        });
      });
    });
  });
});
