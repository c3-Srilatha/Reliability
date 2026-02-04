/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

xdescribe('test_MetricTestData', function () {
  var filename = 'test_MetricTestData';
  var ctx;
  var emperorPenguin;
  var emperorPenguinData;

  it('setup context', function () {
    ctx = TestApi.createContext(filename, null, [AnalyticsQueue]);
    Logger.for("test_MetricTestData").warn("setup context")
  });

  it('setup', function () {
    TestApi.upsertEntity(ctx, 'TestMetricEvaluatable', {
      id: 'Emperor Penguin',
    });
    emperorPenguin = TestMetricEvaluatable.fetch().at('objs[0]');
    expect(emperorPenguin).toBeDefined();
    TestApi.waitForSetup(ctx, null, 1, 60);
    Logger.for("test_MetricTestData").warn("setup")
  });

  it('extracts a MetricTestData object', function () {
    emperorPenguinData = MetricTestData.extractTestData('TestCompoundMetric', emperorPenguin, {
      expression: 'TestCompoundMetric',
      start: DateTime.fromString('2010-10-10T00:00:00Z'),
      end: DateTime.fromString('2010-10-12T00:00:00Z'),
      interval: 'DAY',
    });
    Logger.for("test_MetricTestData").warn("extractTestData done")

    // `console.log(emperorPenguinData);`
    expect(emperorPenguinData.sourceType.name()).toBe('TestMetricEvaluatable');
    expect(emperorPenguinData.truth).toEqual([3, 3]);
    expect(emperorPenguinData.metric).toBe('TestCompoundMetric');
    expect(emperorPenguinData.evalMetricSpec.interval).toBe('DAY');
  });

  it('calls TestApi.validateMetricTestData using filter options', function () {
    // Filter by metric name
    var invalidFilter = TestApi.validateMetricTestData([
      'Emperor penguin chicks are cuter than king penguin chicks, but all penguins should still be respected',
    ]);
    expect(invalidFilter).toBe(-1);

    // Filter by "startsWith" string
    var validFilter = TestApi.validateMetricTestData(undefined, 'TestCompoundMetric');

    // `console.log(validFilter);`
    expect(validFilter).toEqual(1);

    // Filter by "nameIncludes" string
    TestApi.validateMetricTestData(undefined, undefined, 'stCompoundMet');
    expect(validFilter).toEqual(1);
  });

  it('TestApi.validateMetricTestData returns 0 if validation fails', function () {
    MetricTestData.make({
      id: emperorPenguinData.id,
      truth: [-1000, -1000000],
    }).merge();
    TestApi.waitForSetup(ctx, null, 1, 60);
    var failed = TestApi.validateMetricTestData(['TestCompoundMetric']);
    expect(failed).toEqual(0);
  });

  it('teardown', function () {
    TestMetricEvaluatable.removeAll("id=='Emperor Penguin'");
    MetricTestData.removeAll("metric=='TestCompoundMetric'");
    TestApi.teardown(ctx);
  });
}).pend('PLAT-38184');
