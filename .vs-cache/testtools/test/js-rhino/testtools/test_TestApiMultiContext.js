/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_TestApiMultiContext', function () {
  var filename = 'test_TestApiMultiContext';
  var ctx1;
  var ctx2;
  var ctx3;
  var ctx4;
  var numTR;
  var numMPS;
  var totalTR;
  var totalMPS;

  function empty(n) {
    return Repeat.call(function () {
      return {};
    }).times(n).collect();
  }

  function c3Count(type, filter) {
    var count = 0;
    var countProj = type
      .evaluate({ projection: 'count(id)', filter: filter, limit: -1 })
      .tuples.at(0)
      .cells.at(0);
    if (countProj) {
      count = countProj.number;
    }
    return count;
  }

  /*
   * Deliberately NOT using jasmine.setupGuard since we only
   * care if the objects are being created, which is synchronous
   */
  it('setup context', function () {
    ctx1 = TestApi.createContext(filename + '_context1', null, [
      AnalyticsQueue,
    ]);
    ctx2 = TestApi.createContext(filename + '_context2', null, [
      AnalyticsQueue,
    ]);
    ctx3 = TestApi.createContext(filename + '_context3', null, [
      AnalyticsQueue,
    ]);
    ctx4 = TestApi.createContext(filename + '_context4', null, [
      AnalyticsQueue,
    ]);
  });

  it('setup', function () {
    numTR = 3;
    numMPS = 5;
    totalTR = c3Count(TSPerfTestResult);
    totalMPS = c3Count(MetricProfilerSpec);

    TestApi.upsertBatchEntity(ctx1, 'TSPerfTestResult', empty(numTR));
    TestApi.upsertBatchEntity(ctx2, 'TSPerfTestResult', empty(numTR));
    TestApi.upsertBatchEntity(ctx3, 'TSPerfTestResult', empty(numTR));
    TestApi.upsertBatchEntity(ctx4, 'TSPerfTestResult', empty(numTR));

    TestApi.upsertBatchEntity(ctx1, 'MetricProfilerSpec', empty(numMPS));
    TestApi.upsertBatchEntity(ctx2, 'MetricProfilerSpec', empty(numMPS));
    TestApi.upsertBatchEntity(ctx3, 'MetricProfilerSpec', empty(numMPS));
    TestApi.upsertBatchEntity(ctx4, 'MetricProfilerSpec', empty(numMPS));

    TestApi.waitForSetup(ctx1, null, 1, 120);
    TestApi.waitForSetup(ctx2, null, 1, 120);
    TestApi.waitForSetup(ctx3, null, 1, 120);
    TestApi.waitForSetup(ctx4, null, 1, 120);
  });

  it('setup should define variables', function () {
    expect(ctx1).toBeDefined();
    expect(ctx2).toBeDefined();
    expect(ctx3).toBeDefined();
    expect(ctx4).toBeDefined();
  });

  it('contexts should never have the same base uuid', function () {
    expect(ctx1.contextID()).not.toEqual(ctx2.contextID());
    expect(ctx1.contextID()).not.toEqual(ctx3.contextID());
    expect(ctx1.contextID()).not.toEqual(ctx4.contextID());
    expect(ctx2.contextID()).not.toEqual(ctx3.contextID());
    expect(ctx2.contextID()).not.toEqual(ctx4.contextID());
    expect(ctx3.contextID()).not.toEqual(ctx4.contextID());
  });

  it('contexts should behave the same when creating objects', function () {
    expect(ctx1.numObjects()).toEqual(numTR + numMPS);
    expect(ctx2.numObjects()).toEqual(numTR + numMPS);
    expect(ctx3.numObjects()).toEqual(numTR + numMPS);
    expect(ctx4.numObjects()).toEqual(numTR + numMPS);
    expect(c3Count(TSPerfTestResult)).toEqual(4 * numTR + totalTR);
    expect(c3Count(MetricProfilerSpec)).toEqual(4 * numMPS + totalMPS);
  });

  it('TestApi can create objects in batch mode', function () {
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx1.contextID() + "')",
    }).count).toEqual(numTR);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx2.contextID() + "')",
    }).count).toEqual(numTR);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx3.contextID() + "')",
    }).count).toEqual(numTR);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx4.contextID() + "')",
    }).count).toEqual(numTR);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx1.contextID() + "')",
    }).count).toEqual(numMPS);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx2.contextID() + "')",
    }).count).toEqual(numMPS);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx3.contextID() + "')",
    }).count).toEqual(numMPS);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx4.contextID() + "')",
    }).count).toEqual(numMPS);
  });

  it("TestApi contexts don't teardown one another", function () {
    TestApi.teardown(ctx1);
    TestApi.waitForSetup(ctx1, null, 1, 30);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx1.contextID() + "')",
    }).count).toEqual(0);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx2.contextID() + "')",
    }).count).toEqual(numTR);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx3.contextID() + "')",
    }).count).toEqual(numTR);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx4.contextID() + "')",
    }).count).toEqual(numTR);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx1.contextID() + "')",
    }).count).toEqual(0);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx2.contextID() + "')",
    }).count).toEqual(numMPS);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx3.contextID() + "')",
    }).count).toEqual(numMPS);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx4.contextID() + "')",
    }).count).toEqual(numMPS);
  });

  it('TestApi removeAllEntitiesOfType only remove entites of the right type and in the proper context.', function () {
    TestApi.removeAllEntitiesOfType(ctx2, 'TSPerfTestResult');
    TestApi.removeAllEntitiesOfType(ctx3, 'MetricProfilerSpec');
    TestApi.waitForSetup(ctx2, null, 1, 60);
    TestApi.waitForSetup(ctx3, null, 1, 60);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx1.contextID() + "')",
    }).count).toEqual(0);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx2.contextID() + "')",
    }).count).toEqual(0);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx3.contextID() + "')",
    }).count).toEqual(numTR);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx4.contextID() + "')",
    }).count).toEqual(numTR);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx1.contextID() + "')",
    }).count).toEqual(0);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx2.contextID() + "')",
    }).count).toEqual(numMPS);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx3.contextID() + "')",
    }).count).toEqual(0);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx4.contextID() + "')",
    }).count).toEqual(numMPS);
  });

  it('teardown', function () {
    TestApi.teardown(ctx2);
    TestApi.teardown(ctx3);
    TestApi.teardown(ctx4);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx1.contextID() + "')",
    }).count).toEqual(0);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx2.contextID() + "')",
    }).count).toEqual(0);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx3.contextID() + "')",
    }).count).toEqual(0);
    expect(TSPerfTestResult.fetch({
      filter: "startsWith(id, '" + ctx4.contextID() + "')",
    }).count).toEqual(0);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx1.contextID() + "')",
    }).count).toEqual(0);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx2.contextID() + "')",
    }).count).toEqual(0);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx3.contextID() + "')",
    }).count).toEqual(0);
    expect(MetricProfilerSpec.fetch({
      filter: "startsWith(id, '" + ctx4.contextID() + "')",
    }).count).toEqual(0);
    expect(c3Count(TSPerfTestResult)).toEqual(totalTR);
    expect(c3Count(MetricProfilerSpec)).toEqual(totalMPS);
  });
});
