/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

// TODO: PLAT-43178 Re-enable test
xdescribe('test_generateExpectationData', function () {
  var filename = 'test_generateExpectationData';

  it('gets results for a simple expression', function () {
    var childMetrics = C3.type('Array').ofAny(
      { name: 'A', data: [1, 2, 3], missing: [100, 100, 100] },
      { name: 'B', data: [4, 5, 6], missing: [0, 100, 0] },
      { name: 'C', data: [7, 8, 9] },
    );
    var result = TestGenerator.generateExpectationData('TestMetricEvaluatable', 'A + B - C', '2014-01-01', '2014-01-04', 'DAY', childMetrics);
    expect(result.data()).toEqual(C3.type('Array').ofDbl(-2, -1, 0));
    expect(Number(result.missing()[0])).toBeFalsy();
    expect(result.missing()[1]).toBeTruthy();
    expect(Number(result.missing()[2])).toBeFalsy();
  });

  it('gets results for a window() expression', function () {
    var childMetrics = C3.type('Array').ofAny().with(
      {
        name: 'A',
        data: [3, 3, 5, 4, 4, 3, 5],
      }
    );
    var result = TestGenerator.generateExpectationData('TestMetricEvaluatable', "window('SUM', A, -3, 3)", '2014-01-01', '2014-01-08', 'DAY', childMetrics);
    expect(result.data()).toEqual(C3.type('Array').ofDbl(0, 3, 6, 11, 12, 13, 11));
  }).pend('PLAT-38184');
}).pend('PLAT-43178');
