/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ReliabilityMetric_fetchDependentMetrics';

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

    this.formObject2 = ReliabilityMetricSpec.make({
      id: 'CustomTestMetric2',
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

  afterAll(function () {
    ReliabilityMetric.removeAll(
      {
        filter: Filter.intersects('id', [
          'CustomTestMetric1',
          'CustomTestMetric2',
          'CustomTestMetric3',
          'CustomTestMetric4',
        ]),
      },
      true
    );
    TestApi.teardown(this.ctx);
  });

  describe('#fetchChildMetrics', function () {
    it('Returns correct fetch result of child metrics without limit and offset.', function () {
      this.spec = FetchSpec.make({
        include: 'name, description, expression, assetsDisplayStr, permission, lastUpdated',
      });
      this.result = ReliabilityMetric.fetchChildMetrics('CustomTestMetric2 + CustomTestMetric4', this.spec);

      expect(this.result.count).toEqual(3);
      expect(this.result.totalCount).toEqual(3);
      expect(this.result.objs[0].id).toEqual('CustomTestMetric2');
    });

    it('Returns correct fetch result of child metrics with limit and offset.', function () {
      this.spec = FetchSpec.make({
        include: 'name, description, expression, assetsDisplayStr, permission, lastUpdated',
        limit: 1,
        offset: 0,
      });
      this.result = ReliabilityMetric.fetchChildMetrics('CustomTestMetric2 + CustomTestMetric4', this.spec);

      expect(this.result.count).toEqual(1);
      expect(this.result.totalCount).toEqual(3);
      expect(this.result.objs[0].id).toEqual('CustomTestMetric2');
    });

    it('Returns correct fetch result of dependent metrics with limit, offset, and filter.', function () {
      this.spec = FetchSpec.make({
        include: 'name, description, expression, assetsDisplayStr, permission, lastUpdated',
        limit: 1,
        offset: 0,
        filter: Filter.lit(
          '(contains(lowerCase(string(name)), "relbase") || contains(lowerCase(string(assetsDisplayStr)), "relbase"))'
        ),
      });
      this.result = ReliabilityMetric.fetchChildMetrics('CustomTestMetric2', this.spec);

      expect(this.result.count).toEqual(1);
      expect(this.result.totalCount).toEqual(1);
    });
  });
});
