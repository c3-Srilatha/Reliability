/*
 * Copyright 2009-2023 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_UiTypeSystemCallProfiler', function () {
  /**
   * TODO: PLAT-49848 enable test and update expectation.
   */
  xit('has minimal overhead when dispatching an action', function () {
    const withoutDispatch = UiTypeSystemCallProfiler.benchmarkWithoutDispatch();
    const withDispatch = UiTypeSystemCallProfiler.benchmarkWithDispatch();

    const avgCallTimeWithoutDispatch = withoutDispatch.testRunTime / withoutDispatch.testRunCount;
    const avgCallTimeWithDispatch = withDispatch.testRunTime / withDispatch.testRunCount;

    expect(avgCallTimeWithDispatch / avgCallTimeWithoutDispatch).toBeLessThanOrEqual(2);
  });
});
