/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

xdescribe('test_EvalMetricBinding', function () {
  var filename = 'test_EvalMetricBinding';
  var ctx;
  var dataCtx;
  var spId;

  it('setup context', function () {
    ctx = TestApi.createContext(filename, null, [AnalyticsQueue]);
    dataCtx = DataApi.createContext(0);
  });

  it('setup', function () {
    var sp = TestApi.upsertEntity(ctx, 'TestMetricEvaluatable', {});
    spId = sp.id;
  });

  it('bindings', function () {
    var start = DateTime.fromString('2015-01-01T00:00:00Z');
    var end = DateTime.fromString('2015-02-01T00:00:00Z');

    var datesA = DataApi.genDateRange(start, end, 'DAY', 1);
    var dataA = DataApi.rndReal(dataCtx, datesA.length, 0, 1);

    var a = Timeseries.fromValues(TimeseriesHeaderInfo.make({ start: start, end: end, interval: 'DAY', missing: undefined }), dataA, undefined);

    var result = TestMetricEvaluatable.evalMetric({
      id: spId,
      expression: 'ASDF',
      interval: 'DAY',
      start: start,
      end: end,
      bindings: {
        ASDF: a,
      },
    });

    expect(result.data().map((d) => d)).toEqual(dataA);
  });

  it('teardown', function () {
    TestApi.teardown(ctx);
    DataApi.destroyContext(dataCtx);
  });
}).pend('MIG8-2935');
