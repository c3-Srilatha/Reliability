/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_HOT_OUT_TEMP_1';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, null, [AnalyticsQueue]);
    ReliabilityTestData.clearFailedQueueEntries();

    this.start = DateTime.nowWithMillis().withoutZone().toDateMidnight().withDate(2020, 1, 1);
    this.end = DateTime.nowWithMillis().withoutZone().toDateMidnight().withDate(2020, 1, 5);

    this.system = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      id: 'system1',
      name: 'Recycle Gas Compressor Package',
      description: 'Recycle Gas Compressor Package',
    });

    this.expectedSensorName = 'HOT_OUT_TEMP_1';
    this.expectedUnit = 'degrees_fahrenheit';
    this.customerUnit = 'degrees_celsius';

    this.subsystem = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      id: 'subsystem1',
      name: 'Interstage Cooler',
      description: 'Interstage Cooler',
    });

    this.systemSubsystemRelation = TestApi.upsertEntity(this.ctx, 'ReliabilityAssetHierarchicalRelation', {
      id: 'system1_subsystem1',
      from: this.system.id,
      to: this.subsystem.id,
      relationship: 'general',
    });

    this.expectedSensor = TestApi.upsertEntity(this.ctx, 'ExpectedSensor', {
      id: this.expectedSensorName,
      name: this.expectedSensorName,
      unit: this.expectedUnit,
    });

    this.sensor = TestApi.upsertEntity(this.ctx, 'Sensor', {
      id: 'sensor1',
      name: this.expectedSensorName,
    });

    this.assetSensorRelation = TestApi.upsertEntity(this.ctx, 'ReliabilityAssetSensorRelation', {
      id: 'subsystem1_sensor1',
      from: this.subsystem.id,
      to: this.sensor.id,
      expectedSensor: this.expectedSensorName,
    });

    this.physicalMeasurementSeries = TestApi.upsertEntity(this.ctx, 'PhysicalMeasurementSeries', {
      id: 'measurementSeries1',
      asset: this.sensor.id,
      unitConstraint: { id: this.customerUnit },
    });

    this.measurementObjs = [];
    for (var date = this.start; date < this.end; date = date.plusDays(1)) {
      var next = date.plusDays(1);

      var measurement = {
        parent: this.physicalMeasurementSeries.id,
        quantity: {
          value: 100,
          unit: { id: this.customerUnit },
        },
        start: date,
        end: next,
      };

      this.measurementObjs.push(measurement);
    }

    TestApi.upsertBatchEntity(this.ctx, 'Measurement', this.measurementObjs);

    TestApi.waitForSetup(this.ctx, null, 1, 60);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  it('correct evalMetric for HOT_OUT_TEMP_1', function () {
    var result = ReliabilityAsset.evalMetric({
      id: this.subsystem.id,
      expression: this.expectedSensorName,
      interval: 'DAY',
      start: '2020-01-01',
      end: '2020-01-05',
    });

    expect(result.data()).toEqual([212]);
    expect(result.unit.id).toEqual(this.expectedUnit);
  });
});
