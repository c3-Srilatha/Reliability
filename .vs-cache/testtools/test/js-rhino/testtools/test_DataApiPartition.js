/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

/* Author: Bryan Brady */

var filename = 'test_DataApiPartition';

describe(filename, function () {
  var seed1 = 0;
  var dataCtx1;

  it('partitionIntRange works properly with an interval == 1', function () {
    var partitionInt;
    var i;
    var numPartitions = 3;
    var interval = 1;
    var startInt = 0;
    var endInt = 100;

    dataCtx1 = DataApi.createContext(seed1);
    partitionInt = DataApi.partitionDecimalRange(dataCtx1, startInt, endInt, numPartitions, interval);
    partitionInt = partitionInt.map(function (pair) {
      return [pair.first, pair.second];
    });
    for (i = 0; i < numPartitions - 1; i++) {
      expect(partitionInt.get(i)[1] + interval).toEqual(partitionInt.at(i + 1)[0]);
    }
    expect(partitionInt.length).toBe(numPartitions);
    expect(partitionInt.get(0)[0]).toBe(startInt);
    expect(partitionInt.get(numPartitions-1)[1]).toBe(endInt);
    //expect(partitionInt).toEqual(C3.type('Array').ofAny([0, 1], [2, 38], [39, 100]));

    partitionInt = DataApi.partitionDecimalRange(dataCtx1, startInt, endInt, numPartitions, interval);
    partitionInt = partitionInt.map(function (pair) {
      return [pair.first, pair.second];
    });
    for (i = 0; i < numPartitions - 1; i++) {
      expect(partitionInt.get(i)[1] + interval).toEqual(partitionInt.at(i + 1)[0]);
    }
    expect(partitionInt.length).toBe(numPartitions);
    expect(partitionInt.get(0)[0]).toBe(startInt);
    expect(partitionInt.get(numPartitions-1)[1]).toBe(endInt);
    //expect(partitionInt).toEqual(C3.type('Array').ofAny([0, 10], [11, 48], [49, 100]));
    DataApi.destroyContext(dataCtx1);
  });

  it('partitionIntRange works properly with an interval > 1', function () {
    var partitionInt;
    var interval = 3;
    var numPartitions = 3;
    var startInt = 0;
    var endInt = 1000;
    dataCtx1 = DataApi.createContext(seed1);
    partitionInt = DataApi.partitionDecimalRange(dataCtx1, startInt, endInt, numPartitions, interval);
    partitionInt = partitionInt.map(function (pair) {
      return [pair.first, pair.second];
    });
    for (var i = 0; i < numPartitions - 1; i++) {
      expect(partitionInt.get(i)[1] + interval).toEqual(partitionInt.at(i + 1)[0]);
    }
    expect(partitionInt.length).toBe(numPartitions);
    expect(partitionInt.get(0)[0]).toBe(startInt);
    expect(partitionInt.get(numPartitions-1)[1]).toBe(endInt);
    //expect(partitionInt.toArray()).toEqual([[0, 1], [4, 387], [390, 1000]]);
    DataApi.destroyContext(dataCtx1);
  });

  it('partitionDateRange works properly', function () {
    var partitionDate;
    var numPartitions = 4;
    var startDate = DateTime.fromString('2015-01-01T00:00:00Z');
    var endDate = DateTime.fromString('2015-01-10T00:00:00Z');

    dataCtx1 = DataApi.createContext(seed1);
    partitionDate = DataApi.partitionDateRange(dataCtx1, startDate, endDate, numPartitions, 1000);
    partitionDate = partitionDate.map(function (range) {
      return [range.start.millis, range.end.millis];
    });
    expect(partitionDate.length).toEqual(numPartitions);
    DataApi.destroyContext(dataCtx1);
  });

  it('getDecimalsInRange generates decimals in the proper range and order', function () {
    dataCtx1 = DataApi.createContext(seed1);
    var numbers = DataApi.getDecimalsInRange(dataCtx1, 0, 100, 10);
    expect(numbers.length).toBe(10);
    expect(numbers.every((n) => n > 0)).toBeTruthy();
    expect(numbers.every((n) => n < 100)).toBeTruthy();
    expect(numbers.sorted()).toEqual(numbers);
    //expect(numbers).toEqual([1, 11, 21, 32, 41, 54, 61, 64, 74, 85]);
    DataApi.destroyContext(dataCtx1);
  });

  it('getDatesInRange generates Dates in the proper range and order', function () {
    var startDate = DateTime.fromString('2015-01-01T00:00:00Z');
    var endDate = DateTime.fromString('2016-01-01T00:00:00Z');
    dataCtx1 = DataApi.createContext(seed1);
    var dates = DataApi.getDatesInRange(dataCtx1, startDate, endDate, 10);
    dates = dates.map(function (x) {
      return x.millis;
    });
    expect(dates.length).toEqual(10);
    DataApi.destroyContext(dataCtx1);
  });

  it('DataApi can destroy contexts', function () {
    DataApi.destroyContext(dataCtx1);
  });
});
