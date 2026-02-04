/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

/* Author: Bryan Brady */

var filename = 'test_DataApiPulsePeriodic';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = DataApi.createContext(0);
    this.rndCfg1 = DataRndConfig.make({ mag: 1 });
    this.rndCfg2 = DataRndConfig.make({ lo: 2, hi: 3 });
  });

  it('DataApi pulse works properly', function () {
    var mkPulseCfg = function (x) {
      return DataPulseConfig.make(x);
    };

    var pulseCfg1 = C3.type('Array')
      .ofObj(DataPulseConfig)
      .withAll(
        _.map(
          [
            { value: 10, width: 4, slew: 2 },
            { value: 20, width: 3, slew: 1 },
          ],
          mkPulseCfg
        )
      );

    var pulse = DataApi.pulse(this.ctx, 15, pulseCfg1);
    var pulseRnd = DataApi.pulse(this.ctx, 15, pulseCfg1, this.rndCfg1);
    expect(pulse).toEqual(C3.type('Array').ofDbl(10, 10, 10, 10, 20, 20, 20, 15, 10, 10, 10, 10, 20, 20, 20));
    expect(
      _.every(_.zip(pulse, pulseRnd), function (a) {
        return Math.abs(a[1] - a[0]) <= 1;
      })
    ).toEqual(true);
  });

  it('DataApi periodic works properly', function () {
    var mkPeriodicCfg = function (x) {
      return DataPeriodicConfig.make({ values: C3.type('Array').ofDbl(x) });
    };
    var periodicCfg = C3.type('Array')
      .ofObj(DataPeriodicConfig)
      .withAll(
        _.map(
          [
            [50, 55, 60, 55, 50],
            [50, 60, 70, 60, 50],
          ],
          mkPeriodicCfg
        )
      );

    var periodic = DataApi.periodic(this.ctx, 15, periodicCfg);
    var periodicRnd = DataApi.periodic(this.ctx, 15, periodicCfg, this.rndCfg2);
    expect(periodic).toEqual(C3.type('Array').ofDbl(50, 55, 60, 55, 50, 50, 60, 70, 60, 50, 50, 55, 60, 55, 50));
    expect(
      _.every(_.zip(periodic, periodicRnd), function (a) {
        return Math.abs(a[1] - a[0]) >= 2;
      })
    ).toEqual(true);
    expect(
      _.every(_.zip(periodic, periodicRnd), function (a) {
        return Math.abs(a[1] - a[0]) <= 3;
      })
    ).toEqual(true);
  });

  it('Remove context', function () {
    DataApi.destroyContext(this.ctx);
  });
});
