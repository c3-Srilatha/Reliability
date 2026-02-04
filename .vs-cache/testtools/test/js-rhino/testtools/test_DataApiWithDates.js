/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_DataApiWithDates', function () {
  beforeAll(function () {
    this.start = DateTime.fromString('2014-01-01T00:00:00');
    this.end = DateTime.fromString('2015-01-01T00:00:00');
  });

  it('Dates are generated correctly', function () {
    var q = DataApi.genDates(this.start, 2, 'QUARTER_HOUR', 1);
    var h = DataApi.genDates(this.start, 2, 'HOUR', 1);
    var d = DataApi.genDates(this.start, 2, 'DAY', 1);
    var m = DataApi.genDates(this.start, 2, 'MONTH', 1);

    expect(q.length).toEqual(2);
    expect(h.length).toEqual(2);
    expect(m.length).toEqual(2);
    expect(d.length).toEqual(2);

    /**
     * @param {DateTime[]} x
     */
    var diff2Times = function (x) {
      return x[1].millis - x[0].millis;
    };

    expect(diff2Times(q)).toEqual(900000);
    expect(diff2Times(h)).toEqual(3600000);
    expect(diff2Times(d)).toEqual(86400000);
    expect(diff2Times(m)).toEqual(2678400000);
  });

  it('Dates are generated consistently', function () {
    /**
     * @param {DateTime[]} a
     * @param {DateTime[]} b
     */
    var allMatch = function (a, b) {
      for (var i = 0; i < a.length; i++) {
        if (a[i].millis !== b[i].millis) {
          return false;
        }
      }
      return true;
    };

    var q1 = DataApi.genDateRange(this.start, this.end, 'QUARTER_HOUR', 1);
    var h1 = DataApi.genDateRange(this.start, this.end, 'HOUR', 1);
    var d1 = DataApi.genDateRange(this.start, this.end, 'DAY', 1);
    var m1 = DataApi.genDateRange(this.start, this.end, 'MONTH', 1);
    var q2 = DataApi.genDates(this.start, q1.length, 'QUARTER_HOUR', 1);
    var h2 = DataApi.genDates(this.start, h1.length, 'HOUR', 1);
    var d2 = DataApi.genDates(this.start, d1.length, 'DAY', 1);
    var m2 = DataApi.genDates(this.start, m1.length, 'MONTH', 1);

    expect(allMatch(q1, q2)).toEqual(true);
    expect(allMatch(h1, h2)).toEqual(true);
    expect(allMatch(d1, d2)).toEqual(true);
    expect(allMatch(m1, m2)).toEqual(true);
  });
});
