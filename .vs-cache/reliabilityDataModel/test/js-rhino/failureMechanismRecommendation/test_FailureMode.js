/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FailureMode';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);

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

    this.failureModeLineItem = TestApi.upsertBatchEntity(this.ctx, 'FailureModeLineItem', [
      {
        name: 'FMLI-01-Test',
        exceptions: 'Decreasing',
        sensorThreshold: 0.1,
        failureMode: 'FM-01-Test',
        expectedSensor: this.expectedSensors[0],
      },
      {
        name: 'FMLI-02-Test',
        exceptions: 'Decreasing',
        sensorThreshold: 0.5,
        failureMode: 'FM-01-Test',
        expectedSensor: this.expectedSensors[1],
      },
      {
        name: 'FMLI-03-Test',
        exceptions: 'Decreasing',
        sensorThreshold: 0.7,
        failureMode: 'FM-01-Test',
        expectedSensor: this.expectedSensors[0],
      },
      {
        name: 'FMLI-04-Test',
        exceptions: 'Decreasing',
        sensorThreshold: 0.6,
        failureMode: 'FM-02-Test',
        expectedSensor: this.expectedSensors[1],
      },
    ]);

    this.failureModeRecommendation = TestApi.upsertBatchEntity(this.ctx, 'FailureModeRecommendation', [
      {
        id: 'failure_mode_1',
        recommendation: 'recommendationOne',
      },
      {
        id: 'failure_mode_2',
        recommendation: 'recommendationTwo',
      },
      {
        id: 'failure_mode_3',
        recommendation: 'recommendationThree',
        failureMode: 'FM-01-Test',
      },
      {
        id: 'failure_mode_4',
        recommendation: 'recommendationFour',
        failureMode: 'FM-02-Test',
      },
    ]);
    FailureMode.refreshCalcFields({ sync: true });
  });

  describe('recommendations field', function () {
    beforeAll(function () {
      this.fmrCount1 = FailureModeRecommendation.fetchCount({
        filter: Filter.intersects('failureMode', 'FM-01-Test'),
      });
      this.fmrCount2 = FailureModeRecommendation.fetchCount({
        filter: Filter.intersects('failureMode', 'FM-02-Test'),
      });
    });

    describe('when a FailureMode has direcly associated FailureModeRecommendations', function () {
      it('concatenates correctly with no directly associated FailureModeRecommendations for Failure Mode 1', function () {
        var fm1 = FailureMode.forId('FM-01-Test').get('recommendations').recommendations.length;
        expect(this.fmrCount1).toEqual(fm1);
      });

      it('concatenates correctly with no directly associated FailureModeRecommendations for Failure Mode 2', function () {
        var fm2 = FailureMode.forId('FM-02-Test').get('recommendations').recommendations.length;
        expect(this.fmrCount2).toEqual(fm2);
      });
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    FailureMode.removeAll({ filter: Filter.intersects('name', ['Failure Mode 1', 'Failure Mode 2']) }, true);
    FailureModeLineItem.removeAll(
      { filter: Filter.intersects('name', ['FMLI-01-Test', 'FMLI-02-Test', 'FMLI-03-Test', 'FMLI-04-Test']) },
      true
    );
    FailureModeRecommendation.removeAll(
      { filter: Filter.intersects('id', ['failure_mode_1', 'failure_mode_2', 'failure_mode_3', 'failure_mode_4']) },
      true
    );
    FailureModeLibrary.removeAll(
      {
        filter: Filter.intersects('name', 'FML-01-Test'),
      },
      true
    );
  });
});
