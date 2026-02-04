/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

// TODO: MIG8-2683 Re-enable test
xdescribe('test_testMetricData', function () {
  var filename = 'test_testMetricData';
  var ctx;
  var cm;

  it('setup context', function () {
    ctx = TestApi.createContext(filename, null, [AnalyticsQueue]);
  });

  // TODO: PLAT-37760 Remove this whole block
  // it('seed data placeholder', function () {
  //   Logger.for('MIG8').warn("testatasdta")
  //   TestApi.upsertBatchEntity(ctx, 'TestMetricData', [{
  //     "id" : "testData1_pred",
  //     "metricId" : "TestMetric1",
  //     "metricName" : "TestMetric1",
  //     "isPredefined" : true,
  //     "name" : "Sample Test Data 1",
  //     "previewImg" : "https://placeholdit.imgix.net/~text?txtsize=32&bg=888%26text%3Ditem%25201%2522&txt=Item+1",
  //     "data" : [ 1, 2, 3, 4, 5, 5, 4, 3, 2, 1 ],
  //     "missing" : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  //   }, {
  //     "id" : "TestData1",
  //     "metricId" : "TestMetric1",
  //     "metricName" : "TestMetric1",
  //     "data" : [ 7.8, 0, 0, 6.8, 7.7 ],
  //     "missing" : [ 0, 1, 1, 0, 0 ]
  //   }, {
  //     "id" : "testdata2_pred",
  //     "metricId" : "TestMetric1",
  //     "metricName" : "TestMetric1",
  //     "isPredefined" : true,
  //     "name" : "Sample Test Data 2",
  //     "previewImg" : "https://placeholdit.imgix.net/~text?txtsize=32&bg=888%26text%3Ditem%25201%2522&txt=Item+2",
  //     "data" : [ 5, 4, 3, 2, 1, 1, 2, 3, 4, 5 ],
  //     "missing" : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  //   }, {
  //     "id" : "TestData2",
  //     "metricId" : "TestMetric2",
  //     "metricName" : "TestMetric2",
  //     "data" : [ 0, 0, 0, 0, 0 ],
  //     "missing" : [ 1, 1, 1, 1, 1 ]
  //   }]);
  //   Logger.for('MIG8').warn("hello")
  //   // TODO: PLAT-37760 Re-enable first time run
  //   TestApi.upsertEntity(ctx, 'CompoundMetric', {
  //     "id" : "TestCompoundMetric",
  //     "name" : "TestCompoundMetric",
  //     "expression" : "TestSimpleMetricOne + TestSimpleMetricTwo"
  //   });
  // })

  it('setup', function () {
    // Get the test compound metric created from seed data
    cm = CompoundMetric.forId('TestCompoundMetric');
    expect(ctx.numObjects()).not.toBeNull();

    // Create test data
    var testData1 = TestApi.upsertEntity(ctx, 'TestMetricData', {
      metricId: 'TestSimpleMetricOne_TestMetricEvaluatable',
      metricName: 'TestSimpleMetricOne',
      data: C3.type('Array').ofDbl(1, 0, 0, 1, 1),
      missing: C3.type('Array').ofByte(0, 0, 100, 0, 0),
    });

    var testData2 = TestApi.upsertEntity(ctx, 'TestMetricData', {
      metricId: 'TestSimpleMetricTwo_TestMetricEvaluatable',
      metricName: 'TestSimpleMetricTwo',
      data: C3.type('Array').ofDbl(2, 0, 0, 2, 2),
      missing: C3.type('Array').ofByte(0, 0, 100, 0, 0),
    });

    // Create a test scenario
    TestApi.upsertEntity(ctx, 'TestScenario', {
      metric: cm,
      name: 'A test case',
      description: 'Test TestCompoundMetric',
      datetimes: C3.type('Array').ofDateTime(
        DateTime.fromString('2011-01-01T00:00:00Z'),
        DateTime.fromString('2011-01-02T00:00:00Z'),
        DateTime.fromString('2011-01-03T00:00:00Z'),
        DateTime.fromString('2011-01-04T00:00:00Z'),
        DateTime.fromString('2011-01-05T00:00:00Z'),
      ),
      testData: C3.type('Array').ofObj(TestMetricData, testData1, testData2),
      interval: 'HOUR',
      sourceType: TestMetricEvaluatable,
    });
    TestApi.waitForSetup(ctx, null, 1, 30);
  });

  it('Test TestMetricData generated from SeedData', function () {
    var testData = TestMetricData.forId('TestData1');
    expect(testData.data[0]).toEqual(7.8);
    expect(Number(testData.missing[2])).toEqual(1);
  });

  it('Test TestScenario', function () {
    // Fetch the test scenario based on the compound metric id
    var testScenario = TestScenario.fetch({
      filter: Filter.eq('metric.id', cm.id),
      include: 'testData.metricId, testData.data, testData.missing, datetimes',
    }).objs[0];
    expect(testScenario.testData.length).toEqual(2);

    // Identify each testData
    var testData1;
    var testData2;
    _.each(testScenario.testData, function (testData) {
      if (testData.metricId === 'TestSimpleMetricOne_TestMetricEvaluatable') {
        testData1 = testData;
      } else {
        testData2 = testData;
      }
    });

    expect(testScenario.datetimes.length).toEqual(5);
    expect(testScenario.datetimes[0].toString()).toEqual('2011-01-01T00:00:00Z');

    expect(testData1.data[0]).toEqual(1);
    expect(Number(testData1.missing[2])).toEqual(100);

    expect(testData2.data[0]).toEqual(2);
    expect(Number(testData2.missing[2])).toEqual(100);
  });

  it('teardown', function () {
    TestApi.teardown(ctx);
  });
}).pend('PLAT-37760');
