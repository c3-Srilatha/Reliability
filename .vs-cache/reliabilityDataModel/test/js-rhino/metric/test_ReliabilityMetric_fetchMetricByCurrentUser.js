/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ReliabilityMetric_fetchMetricByCurrentUser';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    this.now = DateTime.now();

    this.user1 = TestIdp.createUser('user1@c3.ai', 'user1F', 'user1L', 'user1');

    this.metric = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityMetric', [
      {
        id: 'TestMetricA',
        name: 'TestMetricA',
        description: 'Test metric',
        expression: '1==1',
        expandedExpression: '1==1',
        facility: 'RWC',
        lastUpdated: this.now,
      },
      {
        id: 'TestMetricB',
        name: 'TestMetricB',
        description: 'Test metric',
        expression: '1==1',
        expandedExpression: '1==1',
        facility: 'RWC',
        lastUpdated: this.now,
        allowedUser: this.user1,
      },
      {
        id: 'TestMetricC',
        name: 'TestMetricC',
        description: 'Test metric',
        expression: '1==1',
        expandedExpression: '1==1',
        facility: 'RWC',
        lastUpdated: this.now,
        allowedUser: User.myUser(),
      },
    ]);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('#fetchMetricByCurrentUser', function () {
    describe('when we do not pass any spec', function () {
      it('returns all metrics that are allowed for the current user', function () {
        var result = ReliabilityMetric.fetchMetricByCurrentUser();
        expect(result.count).toEqual(2);
      });
    });

    describe('when we pass a filter spec', function () {
      it('returns all metrics that are allowed for the current user and match the filter', function () {
        var result = ReliabilityMetric.fetchMetricByCurrentUser({
          filter: Filter.eq('id', 'TestMetricC'),
        });
        expect(result.count).toEqual(1);
        expect(result.objs[0].toString()).toEqual('TestMetricC');
      });
    });
  });
});
