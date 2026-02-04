/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

/* Author: Bryan Brady */

describe('test_DataApiDates', function () {
  var filename = 'test_DataApiDates';
  var start = DateTime.fromString('2014-01-01T00:00:00');
  var end = DateTime.fromString('2015-01-01T00:00:00');
  var logger = Logger.for(filename);

  it('Dates are generated correctly', function () {
    var q = DataApi.genDates(start, 2, 'QUARTER_HOUR', 1);
    var h = DataApi.genDates(start, 2, 'HOUR', 1);
    var d = DataApi.genDates(start, 2, 'DAY', 1);
    var m = DataApi.genDates(start, 2, 'MONTH', 1);

    expect(q.length).toEqual(2);
    expect(h.length).toEqual(2);
    expect(m.length).toEqual(2);
    expect(d.length).toEqual(2);

    var diff2Times = function (x) {
      return x[1].millis - x[0].millis;
    };

    expect(diff2Times(q)).toEqual(900000);
    expect(diff2Times(h)).toEqual(3600000);
    expect(diff2Times(d)).toEqual(86400000);
    expect(diff2Times(m)).toEqual(2678400000);
  });

  it('Dates are generated consistently', function () {
    var isTrue = function (x) {
      return x === true;
    };
    var q1 = DataApi.genDateRange(start, end, 'QUARTER_HOUR', 1);
    var h1 = DataApi.genDateRange(start, end, 'HOUR', 1);
    var d1 = DataApi.genDateRange(start, end, 'DAY', 1);
    var m1 = DataApi.genDateRange(start, end, 'MONTH', 1);
    var q2 = DataApi.genDates(start, q1.length, 'QUARTER_HOUR', 1);
    var h2 = DataApi.genDates(start, h1.length, 'HOUR', 1);
    var d2 = DataApi.genDates(start, d1.length, 'DAY', 1);
    var m2 = DataApi.genDates(start, m1.length, 'MONTH', 1);

    var qOK = _.map(q1, function (x, i) {
      return x.millis === q2[i].millis;
    }).every(isTrue);
    var hOK = _.map(h1, function (x, i) {
      return x.millis === h2[i].millis;
    }).every(isTrue);
    var dOK = _.map(d1, function (x, i) {
      return x.millis === d2[i].millis;
    }).every(isTrue);
    var mOK = _.map(m1, function (x, i) {
      return x.millis === m2[i].millis;
    }).every(isTrue);

    expect(qOK).toEqual(true);
    expect(hOK).toEqual(true);
    expect(dOK).toEqual(true);
    expect(mOK).toEqual(true);
  });
});
