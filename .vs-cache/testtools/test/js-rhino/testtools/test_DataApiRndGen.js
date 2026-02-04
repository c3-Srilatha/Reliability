/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

/* Author: Bryan Brady */

var filename = 'test_DataApiRndGen';

describe(filename, function () {
  beforeAll(function () {
    this.dataCtx = DataApi.createContext(0);
    this.bools = DataApi.rndBool(this.dataCtx, 100);
    this.ints = DataApi.rndInt(this.dataCtx, 200, 0, 10);
    this.dbls = DataApi.rndReal(this.dataCtx, 300, 0, 5);
  });

  it('DataApi can generates the correct amount of data', function () {
    expect(this.bools.length).toEqual(100);
    expect(this.ints.length).toEqual(200);
    expect(this.dbls.length).toEqual(300);
  });

  it('DataApi generates values in the appropriate range', function () {
    var isTrue = function (x) {
      return x === true;
    };
    var intCheck = function (i) {
      return i >= 0 && 10 >= i;
    };
    var dblCheck = function (i) {
      return i >= 0 && 5 >= i;
    };
    var intRes = this.ints.map(intCheck);
    var dblRes = this.dbls.map(dblCheck);
    expect(intRes.every(isTrue)).toEqual(true);
    expect(dblRes.every(isTrue)).toEqual(true);
  });

  it('DataApi adds the requested amount of randomness', function () {
    var rndMagCfg = DataRndConfig.make({ mag: 2 });
    var rndHiLoCfg = DataRndConfig.make({ lo: 3, hi: 5 });
    var intMagRnd = DataApi.addRandomness(this.dataCtx, this.dbls, rndMagCfg);
    var intHiLoRnd = DataApi.addRandomness(this.dataCtx, this.dbls, rndHiLoCfg);
    var dbls = this.dbls;
    var i = 0;
    var magCheck = function (x) {
      return Math.abs(x - dbls[i++]) <= rndMagCfg.mag;
    };
    var j = 0;
    var hiloCheck = function (x) {
      var diff = Math.abs(x - dbls[j++]);
      return diff <= rndHiLoCfg.hi && diff >= rndHiLoCfg.lo;
    };
    expect(intMagRnd.every(magCheck)).toEqual(true);
    expect(intHiLoRnd.every(hiloCheck)).toEqual(true);
  });

  it('teardown', function () {
    DataApi.destroyContext(this.dataCtx);
  });
});
