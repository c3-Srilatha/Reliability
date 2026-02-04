/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FailureModeLineItem_fetchWithActiveStatus';

describe(filename, function () {
  describe('#fetchWithActiveStatus', function () {
    beforeAll(function () {
      this.ctx = TestApi.createContext(filename);

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
          expectedSensor: this.otherSensors[0],
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

      this.failureModeLineItems = FailureModeLineItem.fetch({
        filter: Filter.intersects('id', this.failureModeLineItems),
        include: 'id, name, exceptions, sensorThreshold, failureMode, expectedSensor',
      }).objs;

      this.spec = {
        filter: Filter.intersects('id', this.failureModeLineItems),
        include: 'id, name, exceptions, sensorThreshold, failureMode, expectedSensor',
      };
    });

    afterAll(function () {
      TestApi.teardown(this.ctx);
    });

    describe('When no expected sensors are given', function () {
      it('returns the failure mode line items with no modifications', function () {
        this.result = FailureModeLineItem.fetchWithActiveStatus(this.spec, []);
        expect(this.result.objs.length).toEqual(4);
        expect(this.result.objs).toEqual(this.failureModeLineItems);
      });
    });

    describe('When expected sensors are given', function () {
      it('returns fetchResult with failure mode line items with active status', function () {
        this.result = FailureModeLineItem.fetchWithActiveStatus(this.spec, this.expectedSensors);
        expect(this.result.objs.length).toEqual(4);
        expect(this.result.objs[0].isActive).toBeTrue();
        expect(this.result.objs[1].isActive).toBeTrue();
        expect(this.result.objs[2].isActive).toBeFalse();
        expect(this.result.objs[3].isActive).toBeFalse();
      });
    });
  });
});
