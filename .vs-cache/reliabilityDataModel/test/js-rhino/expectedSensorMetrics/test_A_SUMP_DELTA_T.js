/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_A_SUMP_DELTA_T';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, null, [AnalyticsQueue]);
    ReliabilityTestData.clearFailedQueueEntries();

    this.start = DateTime.nowWithMillis().withoutZone().toDateMidnight().withDate(2020, 1, 1);
    this.end = DateTime.nowWithMillis().withoutZone().toDateMidnight().withDate(2020, 1, 5);

    this.system = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      id: 'system1',
      name: 'Aeroderivative Gas Turbine',
      description: 'Aeroderivative Gas Turbine',
    });

    this.expectedSensorName = 'SUMP_A_SCAVENGE_TEMP_1';
    this.expectedSensorName2 = 'GG_LUBE_OIL_SUPPLY_TEMP_1';
    this.expectedUnit = 'degrees_fahrenheit';
    this.customerUnit = 'degrees_celsius';

    this.subsystem = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      id: 'subsystem1',
      name: 'Gas Generator',
      description: 'Gas Generator',
    });

    this.systemSubsystemRelation = TestApi.upsertEntity(this.ctx, 'ReliabilityAssetHierarchicalRelation', {
      id: 'system1_subsystem1',
      from: this.system.id,
      to: this.subsystem.id,
      relationship: 'general',
    });

    this.expectedSensors = TestApi.upsertBatchEntity(this.ctx, 'ExpectedSensor', [
      {
        id: this.expectedSensorName,
        name: this.expectedSensorName,
        unit: this.expectedUnit,
      },
      {
        id: this.expectedSensorName2,
        name: this.expectedSensorName2,
        unit: this.expectedUnit,
      },
    ]);

    this.sensors = TestApi.upsertBatchEntity(this.ctx, 'Sensor', [
      {
        id: 'sensor1',
        name: this.expectedSensorName,
      },
      {
        id: 'sensor2',
        name: this.expectedSensorName2,
      },
    ]);

    this.assetSensorRelations = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAssetSensorRelation', [
      {
        id: 'subsystem1_sensor1',
        from: this.subsystem.id,
        to: this.sensors[0],
        expectedSensor: this.expectedSensorName,
      },
      {
        id: 'subsystem1_sensor2',
        from: this.subsystem.id,
        to: this.sensors[1],
        expectedSensor: this.expectedSensorName2,
      },
    ]);

    this.physicalMeasurementSeries = TestApi.upsertBatchEntity(this.ctx, 'PhysicalMeasurementSeries', [
      {
        id: 'measurementSeries1',
        asset: this.sensors[0],
        unitConstraint: { id: this.customerUnit },
      },
      {
        id: 'measurementSeries2',
        asset: this.sensors[1],
        unitConstraint: { id: this.customerUnit },
      },
    ]);

    this.measurementObjs = [];
    for (var date = this.start; date < this.end; date = date.plusDays(1)) {
      var next = date.plusDays(1);

      var measurement1 = {
        parent: this.physicalMeasurementSeries[0],
        quantity: {
          value: 100,
          unit: { id: this.customerUnit },
        },
        start: date,
        end: next,
      };

      this.measurementObjs.push(measurement1);

      var measurement2 = {
        parent: this.physicalMeasurementSeries[1],
        quantity: {
          value: 0,
          unit: { id: this.customerUnit },
        },
        start: date,
        end: next,
      };

      this.measurementObjs.push(measurement2);
    }

    TestApi.upsertBatchEntity(this.ctx, 'Measurement', this.measurementObjs);

    TestApi.waitForSetup(this.ctx, null, 1, 60);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  it('correct evalMetric for A_SUMP_DELTA_T', function () {
    var result = ReliabilityAsset.evalMetric({
      id: this.subsystem.id,
      expression: 'A_Sump_Delta_T',
      interval: 'DAY',
      start: '2020-01-01',
      end: '2020-01-05',
    });

    expect(result.data()).toEqual([180]);
    expect(result.unit.id).toEqual(this.expectedUnit);
  });
});
