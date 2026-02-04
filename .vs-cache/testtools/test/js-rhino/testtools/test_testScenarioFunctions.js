/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

xdescribe('test_testScenarioFunctions', function () {
  var filename = 'test_testScenarioFunctions';
  var cmId = 'TestCompoundMetric';
  var ts;
  var datetimes;
  var testMetricDataIds;
  var typeRef = 'ServicePoint';

  it('setup', function () {
    datetimes = C3.type('Array').ofDateTime(
      DateTime.fromString('2011-01-01T00:00:00Z'),
      DateTime.fromString('2011-01-02T00:00:00Z'),
      DateTime.fromString('2011-01-03T00:00:00Z'),
      DateTime.fromString('2011-01-04T00:00:00Z'),
      DateTime.fromString('2011-01-05T00:00:00Z')
    );
  });

  it('Test create test scenario', function () {
    /*
     * Child metrics are jsons, so that the front end can pass them to the API
     * Data is required, while gaps and unavailable are optional
     */
    var childMetrics = [
      {
        metricId: 'Child1',
        metricName: 'Child1',
        data: [3.5, 6.7, 5.8, 2.2, 7.9],
      },
      {
        metricId: 'Child2',
        metricName: 'Child2',
        data: [3.5, 0, 5.8, 2.2, 7.9],
        missing: [0, 100, 0, 0, 0],
      },
      {
        metricId: 'Child3',
        metricName: 'Child3',
        data: [3.5, 0, 5.8, 0, 7.9],
        missing: [0, 0, 0, 0, 0],
      },
    ];
    ts = TestScenario.saveTest(cmId, 'test scenario1', datetimes, 'DAY', typeRef, C3.type('Array').ofAny().withAll(childMetrics));

    var testScenario = TestScenario.fetch({
      filter: Filter.eq('id', ts.id),
      include: 'testData.metricName, testData.metricId, testData.missing, testData.data',
    }).objs[0];

    expect(testScenario.testData[0].metricName).toEqual('Child1');
    expect(testScenario.testData[0].data[0]).toEqual(3.5);
    expect(Number(testScenario.testData[0].missing[3])).toEqual(0);

    expect(testScenario.testData[1].metricName).toEqual('Child2');
    expect(testScenario.testData[1].data[1]).toEqual(0);
    expect(Number(testScenario.testData[1].missing[1])).toEqual(100);

    expect(testScenario.testData[2].metricName).toEqual('Child3');
    expect(Number(testScenario.testData[2].missing[3])).toEqual(0);
  });

  it('Test update test scenario with more child metrics', function () {
    var childMetrics = [
      {
        metricId: 'Child1',
        metricName: 'Child1',
        data: [5, 6.7, 5.8, 2.2, 7.9],
      },
      {
        metricId: 'Child2',
        metricName: 'Child2',
        data: [7, 0, 5.8, 2.2, 7.9],
        missing: [0, 100, 0, 0, 0],
      },
      {
        metricId: 'Child3',
        metricName: 'Child3',
        data: [3.5, 0, 5.8, 0, 7.9],
        missing: [0, 0, 0, 0, 0],
      },
      {
        metricId: 'Child4',
        metricName: 'Child4',
        data: [6.6, 0, 5.8, 0, 7.9],
        missing: [0, 0, 0, 100, 0],
      },
    ];

    TestScenario.saveTest(cmId, 'test scenario1', datetimes, 'DAY', typeRef, C3.type('Array').ofAny().withAll(childMetrics), ts.id);

    var testScenario = TestScenario.fetch({
      filter: Filter.eq('id', ts.id),
      include: 'testData.metricName, testData.metricId, testData.missing, testData.data, testData.unavailable',
    }).objs[0];

    expect(testScenario.testData.length).toEqual(4);

    expect(testScenario.testData[3].metricName).toEqual('Child4');
    expect(testScenario.testData[3].data[0]).toEqual(6.6);
    expect(Number(testScenario.testData[3].missing[3])).toEqual(100);
  });

  it('Test update test scenario with fewer child metrics', function () {
    var childMetrics = [
      {
        metricId: 'Child1',
        metricName: 'Child1',
        data: [5, 6.7, 5.8, 2.2, 7.9],
      },
      {
        metricId: 'Child2',
        metricName: 'Child2',
        data: [7, 0, 5.8, 2.2, 7.9],
        missing: [0, 100, 0, 0, 0],
      },
    ];

    TestScenario.saveTest(cmId, 'test scenario1', datetimes, 'DAY', typeRef, C3.type('Array').ofAny().withAll(childMetrics), ts.id);

    var testScenario = TestScenario.fetch({
      filter: Filter.eq('id', ts.id),
      include: 'testData.metricName, testData.metricId, testData.missing, testData.id, testData.data',
    }).objs[0];

    testMetricDataIds = _.map(testScenario.testData, function (testMetricData) {
      return testMetricData.id;
    });

    expect(testScenario.testData.length).toEqual(2);

    expect(testScenario.testData[0].metricName).toEqual('Child1');
    expect(testScenario.testData[0].data[0]).toEqual(5);
    expect(Number(testScenario.testData[0].missing[3])).toEqual(0);

    expect(testScenario.testData[1].metricName).toEqual('Child2');
    expect(testScenario.testData[1].data[0]).toEqual(7);
    expect(Number(testScenario.testData[1].missing[1])).toEqual(100);
  });

  it('test deletetest function', function () {
    expect(TestScenario.deleteTest(ts.id)).toBeTruthy();
    expect(TestScenario.make(ts.id).get()).toBeNull();
    expect(TestMetricData.fetch({
      filter: Filter.intersects('id', testMetricDataIds),
    }).count).toEqual(0);
  });
});
