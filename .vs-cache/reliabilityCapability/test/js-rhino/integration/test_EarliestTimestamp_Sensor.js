/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_EarliestTimestamp_Sensor';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();

    this.tag = TestApi.upsertEntity(this.ctx, 'Sensor');

    this.pointPhysicalMeasurementSeries1 = TestApi.upsertEntity(this.ctx, 'PointPhysicalMeasurementSeries', {
      unitConstraint: 'fake_unit',
      asset: this.tag.id,
      treatment: 'previous',
    });

    this.physicalMeasurementSeries = TestApi.upsertEntity(this.ctx, 'PhysicalMeasurementSeries', {
      unitConstraint: 'fake_unit',
      asset: this.tag.id,
      treatment: 'previous',
    });

    this.pointPhysicalMeasurementSeries2 = TestApi.upsertEntity(this.ctx, 'PointPhysicalMeasurementSeries', {
      unitConstraint: 'fake_unit',
      asset: this.tag.id,
      treatment: 'previous',
    });

    TestApi.upsertBatchEntity(this.ctx, 'PointMeasurement', [
      {
        parent: this.pointPhysicalMeasurementSeries1.id,
        quantity: {
          value: 1,
        },
        start: '2019-01-05',
      },
      {
        parent: this.pointPhysicalMeasurementSeries1.id,
        quantity: {
          value: 2,
        },
        start: '2019-01-08',
      },
    ]);

    TestApi.upsertBatchEntity(this.ctx, 'Measurement', [
      {
        parent: this.physicalMeasurementSeries.id,
        start: '2019-01-11',
        end: '2019-01-12',
        quantity: {
          value: 3,
        },
      },
      {
        parent: this.physicalMeasurementSeries.id,
        start: '2019-01-12',
        end: '2019-01-14',
        quantity: {
          value: 5,
        },
      },
    ]);

    TestApi.upsertBatchEntity(this.ctx, 'PointMeasurement', [
      {
        parent: this.pointPhysicalMeasurementSeries2.id,
        quantity: {
          value: 6,
        },
        start: '2019-01-16T18:00:00.000Z',
      },
      {
        parent: this.pointPhysicalMeasurementSeries2.id,
        quantity: {
          value: 7,
        },
        start: '2019-01-18',
      },
    ]);

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  it('evalMetric on a missing day', function () {
    var result = Sensor.evalMetric({
      id: this.tag.id,
      expression: 'EarliestTimestamp',
      start: '2021-01-15',
      end: '2021-01-20',
      interval: 'DAY',
    });

    expect(result.data()[0].format('yyyy-MM-dd')).toEqual('2019-01-05');
  });
});
