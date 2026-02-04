/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_TestApiInvalidationQueueError', function () {
  var filename = 'test_TestApiInvalidationQueueError';
  var ctx;

  it('should detect an unrecoverable error in the InvalidationQueue', function () {
    ctx = TestApi.createContext('test_TestApiInvalidationQueueError_1', null, [
      AnalyticsQueue,
    ]);
    try {
      var paf = {
        target: TestMetricData,
        funktion: 'populateAcl',
        appliedArgs: {},
      };
      ActionQueue.submitAction(paf.target, paf.funktion, ActionQueueContext.make({ arguments: paf.appliedArgs }), true, '');
      Thread.sleep(5000); // Wait to ensure action enters ActionQueue
      expect(function () {
        TestApi.waitForSetup(ctx, null, 1, 10);
      }).toThrow();
      expect(ActionQueue.count().failed).toEqual(0);
      expect(ctx.isSetupOK()).toBe(false);
    } finally {
      // Remove the failure from the ActionQueue before tearing down, so the invalidation queue error is not reported
      ActionQueue.clear({ status: 'failed' });
      TestApi.teardown(ctx);
    }
  });

  it('should not fail on queue errors', function () {
    ctx = TestApi.createContext('test_TestApiInvalidationQueueError_2', null, [
      AnalyticsQueue,
    ]);
    ctx.setFailOnQueueErrors(false);
    var paf = {
      target: TestMetricData,
      funktion: 'populateAcl',
      appliedArgs: {},
    };
    ActionQueue.submitAction(paf.target, paf.funktion, ActionQueueContext.make({ arguments: paf.appliedArgs }), true, '');
    Thread.sleep(5000); // Wait to ensure action enters ActionQueue
    TestApi.waitForSetup(ctx, null, 1, 10);
    expect(ActionQueue.count().failed).toEqual(0);
    expect(ctx.isSetupOK()).toBe(true);

    TestApi.teardown(ctx);
  });
});
