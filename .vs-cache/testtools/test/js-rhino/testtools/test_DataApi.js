/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_DataApi';
describe(filename, function () {
  var ctx;

  it('setup ctx', function () {
    ctx = DataApi.createContext(5);
  });

  it('should have the context defined with next value', function () {
    expect(DataApiContext.make(ctx.id).get().next).toEqual(6);
  });

  it('test rndBigInt function', function () {
    var values = DataApi.rndBigInt(ctx, 5, 10, 20);
    values.each(function (val) {
      expect(val).toBeLessThan(21);
      expect(val).toBeGreaterThan(9);
    });
  });

  it('test rndReal function', function () {
    var values = DataApi.rndReal(ctx, 5, 10, 20);
    values.each(function (val) {
      expect(val).toBeLessThan(21);
      expect(val).toBeGreaterThan(9);
    });
  });

  it('test rndInt function', function () {
    var values = DataApi.rndInt(ctx, 5, 10, 20);
    values.each(function (val) {
      expect(val).toBeLessThan(21);
      expect(val).toBeGreaterThan(9);
    });
  });

  it('test pulse function', function () {
    var values = DataApi.pulse(ctx, 10, C3.type('Array').ofObj(DataPulseConfig,
      DataPulseConfig.make({ value: 10, width: 3, slew: 1 }),
      DataPulseConfig.make({ value: 20, width: 3, slew: 4 }),
    ));
    var expected = C3.type('Array').ofDbl(10, 10, 10, 12.5, 15, 17.5, 20, 20, 20, 10);
    expect(values).toEqual(expected);
  });

  it('test periodic function', function () {
    var values = DataApi.periodic(ctx, 10, C3.type('Array').ofObj(DataPeriodicConfig,
      DataPeriodicConfig.make({ values: [1, 2, 3] }),
      DataPeriodicConfig.make({ values: [4, 5, 6] }),
    ));
    var expected = C3.type('Array').ofDbl(1, 2, 3, 4, 5, 6, 1, 2, 3, 4);
    expect(values).toEqual(expected);
  });

  it('remove ctx', function () {
    DataApi.destroyContext(ctx);
  });
});
