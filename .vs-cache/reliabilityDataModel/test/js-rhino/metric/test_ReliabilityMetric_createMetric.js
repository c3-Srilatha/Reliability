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
  });

  afterAll(function () {
    ReliabilityMetric.removeAll(
      {
        filter: Filter.intersects('id', [
          'CustomTestMetric1',
          'CustomTestMetric2',
          'CustomTestMetric3',
          'CustomTestMetric4',
          'CustomTestMetric5',
        ]),
      },
      true
    );
    TestApi.teardown(this.ctx);
  });

  describe('#createMetric', function () {
    describe('when the metric is created without child metrics', function () {
      beforeAll(function () {
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

        this.result = ReliabilityMetric.createMetric(this.formObject1);
      });

      it('creates new custom metric with correct fields populated.', function () {
        var userId = User.myUser().id;

        // New `ReliabilityMetric` object with given spec will be persisted.
        expect(this.result).not.toBe(null);
        expect(this.result.allowedUser.id).toEqual(userId);
      });
    });

    describe('when the metric is created with child metrics', function () {
      beforeAll(function () {
        this.childMetrics = ReliabilityMetric.fetch({ filter: Filter.eq('id', 'CustomTestMetric1') }).objs;

        this.formObject5 = ReliabilityMetricSpec.make({
          name: 'CustomTestMetric5',
          description: 'User defined test metric',
          permission: ReliabilityMetricPermissionEnum.SHARED,
          expression: 'CustomTestMetric1 + (avg(Pump-123, Pump-456))',
          expandedExpression: '1==1',
          assets: [this.assets[0], this.assets[1]],
          facility: 'RWC',
          lastUpdated: this.now,
        });

        this.result = ReliabilityMetric.createMetric(this.formObject5, this.childMetrics);
      });

      it('creates new custom metric with correct fields populated.', function () {
        expect(this.result).not.toBe(null);
        expect(this.result.allowedUser).toBeUndefined();
      });

      it('updates the child metric permission', function () {
        this.childMetric = ReliabilityMetric.fetch({
          filter: Filter.eq('id', 'CustomTestMetric1'),
          include: 'allowedUser',
        }).objs.first();
        expect(this.childMetric.allowedUser).toBeUndefined();
      });
    });
  });

  describe('#afterCreate', function () {
    describe('when the metric is created with child metrics', function () {
      beforeAll(function () {
        this.formObject2 = ReliabilityMetricSpec.make({
          id: 'CustomTestMetric2',
          createdBy: 'TestUser@c3.ai',
          name: 'CustomTestMetric2',
          description: 'User defined test metric',
          permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
          expression: 'sum(Pump-123, Pump-456)',
          expandedExpression: '1==1',
          assets: [this.assets[0], this.assets[1]],
          facility: 'RWC',
          lastUpdated: this.now.minusDays(10),
        });
        this.formObject3 = ReliabilityMetricSpec.make({
          id: 'CustomTestMetric3',
          createdBy: 'TestUser@c3.ai',
          name: 'CustomTestMetric3',
          description: 'User defined test metric',
          permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
          expression: 'sum(Pump-123, Pump-456)',
          expandedExpression: '1==1',
          assets: [this.assets[0], this.assets[1]],
          facility: 'RWC',
          lastUpdated: this.now.minusDays(5),
        });
        this.formObject4 = ReliabilityMetricSpec.make({
          id: 'CustomTestMetric4',
          createdBy: 'TestUser@c3.ai',
          name: 'CustomTestMetric4',
          description: 'User defined test metric',
          permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
          expression: 'CustomTestMetric2 + CustomTestMetric3 + (avg(Pump-123, Pump-456))',
          expandedExpression: '1==1',
          assets: [this.assets[0], this.assets[1]],
          facility: 'RWC',
          lastUpdated: this.now.minusDays(1),
        });

        ReliabilityMetric.createMetric(this.formObject2);
        ReliabilityMetric.createMetric(this.formObject3);
        ReliabilityMetric.createMetric(this.formObject4);
      });

      it('dependency metrics updated correctly.', function () {
        // Get dependency metrics from the updated metric.
        this.updatedCustomTestMetric2 = ReliabilityMetric.forId(this.formObject2.name).get(
          'this, dependencyMetrics.relatedMetric, lastUpdated'
        );
        this.updatedCustomTestMetric3 = ReliabilityMetric.forId(this.formObject3.name).get(
          'this, dependencyMetrics.relatedMetric, lastUpdated'
        );

        /**
         * Since CustomTestMetric4 is depending on CustomTestMetric2 & CustomTestMetric3,
         * CustomTestMetric4 will be added to CustomTestMetric2 & CustomTestMetric3 dependencyMetrics array.
         */
        expect(this.updatedCustomTestMetric2.dependencyMetrics[0].relatedMetric.id).toEqual(this.formObject4.name);
        expect(this.updatedCustomTestMetric3.dependencyMetrics[0].relatedMetric.id).toEqual(this.formObject4.name);
      });
    });
  });
});
