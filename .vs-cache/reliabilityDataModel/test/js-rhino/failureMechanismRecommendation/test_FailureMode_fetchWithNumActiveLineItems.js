/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FailureMode_fetchWithNumActiveLineItems';

describe(filename, function () {
  describe('#fetchWithNumActiveLineItems', function () {
    beforeAll(function () {
      this.ctx = TestApi.createContext(filename);

      this.failureModeLibrary = TestApi.upsertEntity(this.ctx, 'FailureModeLibrary', {
        id: 'FML-01-Test',
        name: 'Failure Mode Library 1',
      });

      this.failureModes = TestApi.upsertBatchEntity(this.ctx, 'FailureMode', [
        {
          id: 'FM-01-Test',
          name: 'Failure Mode 1',
          failureModeLibrary: 'FML-01-Test',
        },
        {
          id: 'FM-02-Test',
          name: 'Failure Mode 2',
          failureModeLibrary: 'FML-01-Test',
        },
      ]);

      this.expectedSensors = TestApi.upsertBatchEntity(this.ctx, 'ExpectedSensor', [
        {
          id: 'expectedSensor1Id',
          name: 'expectedSensor1',
          unit: 'fake_unit',
        },
        {
          id: 'expectedSensor2Id',
          name: 'expectedSensor2',
          unit: 'fake_unit',
        },
      ]);

      this.otherSensors = TestApi.upsertBatchEntity(this.ctx, 'ExpectedSensor', [
        {
          id: 'expectedSensor3Id',
          name: 'expectedSensor3',
          unit: 'fake_unit',
        },
        {
          id: 'expectedSensor4Id',
          name: 'expectedSensor4',
          unit: 'fake_unit',
        },
      ]);

      this.failureModeLineItems = TestApi.upsertBatchEntity(this.ctx, 'FailureModeLineItem', [
        {
          id: 'FMLI1',
          name: 'FMLI-01-Test',
          exceptions: 'Decreasing',
          sensorThreshold: 0.1,
          failureMode: 'FM-01-Test',
          expectedSensor: this.expectedSensors[0],
        },
        {
          id: 'FMLI2',
          name: 'FMLI-02-Test',
          exceptions: 'Decreasing',
          sensorThreshold: 0.5,
          failureMode: 'FM-01-Test',
          expectedSensor: this.expectedSensors[1],
        },
        {
          id: 'FMLI3',
          name: 'FMLI-03-Test',
          exceptions: 'Decreasing',
          sensorThreshold: 0.7,
          failureMode: 'FM-01-Test',
          expectedSensor: this.expectedSensors[0],
        },
        {
          id: 'FMLI4',
          name: 'FMLI-04-Test',
          exceptions: 'Decreasing',
          sensorThreshold: 0.6,
          failureMode: 'FM-02-Test',
          expectedSensor: this.otherSensors[1],
        },
      ]);

      this.spec = {
        include: 'id, name, failureModeLibrary',
      };
    });

    afterAll(function () {
      TestApi.teardown(this.ctx);
    });

    describe('When no expected sensors are given', function () {
      it('returns the failure modes with no modifications', function () {
        this.result = FailureMode.fetchWithNumActiveLineItems(this.spec, []);
        expect(this.result.objs.length).toEqual(2);
        expect(this.result.objs[0].toString()).toEqual(this.failureModes[0]);
        expect(this.result.objs[1].toString()).toEqual(this.failureModes[1]);
      });
    });

    describe('When expected sensors are given', function () {
      it('returns the failure modes with the correct number of active line items', function () {
        this.result = FailureMode.fetchWithNumActiveLineItems(this.spec, this.expectedSensors);
        expect(this.result.objs.length).toEqual(2);
        expect(this.result.objs[0].id.toString()).toEqual(this.failureModes[0]);
        expect(this.result.objs[0].numActiveLineItems).toEqual(3);
        expect(this.result.objs[0].isActive).toBeTrue();
        expect(this.result.objs[1].id.toString()).toEqual(this.failureModes[1]);
        expect(this.result.objs[1].numActiveLineItems).toEqual(0);
        expect(this.result.objs[1].isActive).toBeFalse();
      });
    });
  });
});
