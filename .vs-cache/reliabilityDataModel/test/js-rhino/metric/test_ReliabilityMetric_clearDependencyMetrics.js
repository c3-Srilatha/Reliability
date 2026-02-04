/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ReliabilityMetric_clearDependencyMetrics';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);

    this.now = DateTime.now();

    TestApi.upsertBatchEntity(this.ctx, 'ReliabilityMetric', [
      {
        id: 'Metric1',
        name: 'Metric1',
        description: 'User defined test metric',
        allowedUser: 'TestUser@c3.ai',
        expression: 'sum(Pump-123, Pump-456)',
        expandedExpression: '1==1',
        assets: ['Asset1'],
        facility: 'RWC',
        lastUpdated: this.now.minusDays(5),
      },
      {
        id: 'Metric2',
        name: 'Metric2',
        description: 'User defined test metric',
        allowedUser: 'TestUser@c3.ai',
        expression: 'sum(Pump-123, Pump-456)',
        expandedExpression: '1==1',
        assets: ['Asset1'],
        facility: 'RWC',
        lastUpdated: this.now.minusDays(5),
      },
      {
        id: 'Metric3',
        name: 'Metric3',
        description: 'User defined test metric',
        allowedUser: 'TestUser@c3.ai',
        expression: 'Metric1 + Metric2',
        expandedExpression: '1==1',
        assets: ['Asset1'],
        facility: 'RWC',
        lastUpdated: this.now.minusDays(5),
      },
    ]);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('#clearDependencyMetrics', function () {
    beforeAll(function () {
      this.metric3Obj = ReliabilityMetric.forId('Metric3')?.get(
        'this, permission, dependencyMetrics.relatedMetric, childMetrics.relatedMetric, childMetrics.dependencyMetrics, childMetrics.permission'
      );
      ReliabilityMetric.clearDependencyMetrics(this.metric3Obj);
      this.metric2Obj = ReliabilityMetric.forId('Metric2')?.get('this, dependencyMetrics.relatedMetric');
    });

    it('Removes deleted custom metric from `dependencyMetrics` list of its `childMetrics`.', function () {
      expect(this.metric2Obj.dependencyMetrics.size).toEqual(0);
    });
  });
});
