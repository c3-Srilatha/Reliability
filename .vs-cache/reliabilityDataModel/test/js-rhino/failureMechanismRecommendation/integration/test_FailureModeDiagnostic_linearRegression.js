/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FailureModeDiagnostic_linearRegression';

describe(filename, function () {
  it('straight line 1', function () {
    var result = FailureModeDiagnostic.linearRegression([0, 100]);
    expect(result).toEqual(
      jasmine.objectContaining({
        fst: 100,
        snd: 0,
      })
    );
  });

  it('straight line 2', function () {
    var result = FailureModeDiagnostic.linearRegression([10, 100]);
    expect(result).toEqual(
      jasmine.objectContaining({
        fst: 90,
        snd: 10,
      })
    );
  });

  it('non-straight line', function () {
    var result = FailureModeDiagnostic.linearRegression([10, -10, 10, -10, 10]);
    expect(result).toEqual(
      jasmine.objectContaining({
        fst: 0,
        snd: 2,
      })
    );
  });
});
