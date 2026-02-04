/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_TestApiDataCluster', function () {
  var filename = 'test_TestApiDataCluster';
  var ctx;
  var cbs;

  it('setup context', function () {
    ctx = TestApi.createContext(filename, null, [AnalyticsQueue]);
  });

  // Test addClusterBoundMeasurementsToSeries
  // TODO: MIG8-3107 Re-enable test case
  it('should add cluster bound measurements to series', function () {
    expect(ctx.numObjects()).toBe(0);

    // `sp = TestApi.upsertEntity(ctx, 'ServicePoint', {});`
    cbs = TestApi.upsertEntity(ctx, 'ClusterBoundSeries', {
      unitConstraint: { id: 'kilowatt_hour' },
    });

    expect(ctx.numObjects()).toBe(1);

    var dates = [
      DateTime.fromString('2017-01-01T00:00:00Z'),
      DateTime.fromString('2017-01-02T00:00:00Z'),
    ];

    // Add test prior to adding cluster bound measurements to series
    TestApi.addClusterBoundMeasurementsToSeries(ctx, cbs.id, dates, 'HOUR', [1, 2, 3], [4, 5, 6]);

    // Added 24 objects, one for each hour in the daterange
    expect(ctx.numObjects()).toBe(25);

    TestApi.addClusterBoundMeasurementsToSeries(ctx, cbs.id, dates, 'DAY', [1, 2, 3], [4, 5, 6]);
    expect(ctx.numObjects()).toBe(26);

    // Make the addClusterBoundMeasurementsToSeries call with an invalid seriesId
    TestApi.addClusterBoundMeasurementsToSeries(ctx, 'badId', dates, 'HOUR', [1, 2, 3], [4, 5, 6]);
    expect(ctx.numObjects()).toBe(26);
  }).pend('MIG8-3107');

  it('teardown', function () {
    TestApi.teardown(ctx);
    expect(ctx.numObjects()).toEqual(0);
  });
});
