/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FailureModeLibrary';

describe('test_FailureModeLibrary', function () {
  beforeAll(function () {
    C3.pkg().upsertAllSeed();

    this.ctx = TestApi.createContext('test_FailureModeLibrary');

    this.fmlb = TestApi.upsertEntity(this.ctx, 'FailureModeLibrary', {
      id: 'test_fmlb1',
    });

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

    this.failureModes = TestApi.upsertBatchEntity(this.ctx, 'FailureMode', [
      { name: 'fm1' },
      { name: 'fm2', failureModeLibrary: this.fmlb },
    ]);

    this.fmli = TestApi.upsertBatchEntity(this.ctx, 'FailureModeLineItem', [
      {
        expectedSensor: this.expectedSensors[0],
        diagnostic: { id: 'Increasing' },
        sensorThreshold: 0.1,
        failureMode: this.failureModes[0],
      },
      {
        expectedSensor: this.expectedSensors[0],
        diagnostic: { id: 'Decreasing' },
        sensorThreshold: 0.1,
        failureMode: this.failureModes[0],
      },
      {
        expectedSensor: this.expectedSensors[1],
        diagnostic: { id: 'Decreasing' },
        sensorThreshold: 0.1,
        failureMode: this.failureModes[1],
      },
    ]);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('evaluateFailureModeRecommendation', function () {
    beforeAll(function () {
      this.results = FailureModeLibrary.evaluateFailureModeRecommendation(
        FailureModeRecommendationEvaluationSensorDataSpec.myArrayType().makeArray([
          FailureModeRecommendationEvaluationSensorDataSpec.make({
            data: [-0.1, -0.2, -0.2], // Triggers this.fmli[1]
            expectedSensor: this.expectedSensors[0],
          }),
          FailureModeRecommendationEvaluationSensorDataSpec.make({
            data: [0.1, 0.2, 0.3], // Doesn't trigger anything
            expectedSensor: this.expectedSensors[1],
          }),
          FailureModeRecommendationEvaluationSensorDataSpec.make({
            data: [-0.1, -0.2, -0.2], // Triggers this.fmli[2]
            expectedSensor: this.expectedSensors[1],
          }),
        ]),
        FailureModeEvaluationMode.RESIDUAL_BASED
      );
    });

    it('creates the correct recommendations', function () {
      expect(this.results.length).toEqual(2);
      expect(this.results).toEqual(
        jasmine.arrayContaining([
          jasmine.objectContaining({
            id: this.fmli[1],
          }),
          jasmine.objectContaining({
            id: this.fmli[2],
          }),
        ])
      );
    });
  });

  describe('evaluateFailureModeRecommendation with failure mode library passed', function () {
    beforeAll(function () {
      this.results = FailureModeLibrary.evaluateFailureModeRecommendation(
        [
          FailureModeRecommendationEvaluationSensorDataSpec.make({
            data: [-0.1, -0.2, -0.2], // Doesn't trigger this.fmli[1]
            expectedSensor: this.expectedSensors[0],
          }),
          FailureModeRecommendationEvaluationSensorDataSpec.make({
            data: [0.1, 0.2, 0.3], // Doesn't trigger anything
            expectedSensor: this.expectedSensors[1],
          }),
          FailureModeRecommendationEvaluationSensorDataSpec.make({
            data: [-0.1, -0.2, -0.2], // Triggers this.fmli[2] because of failure mode library.
            expectedSensor: this.expectedSensors[1],
          }),
        ],
        FailureModeEvaluationMode.RESIDUAL_BASED,
        this.fmlb
      );
    });

    it('creates the correct recommendations', function () {
      expect(this.results.length).toEqual(1);
      expect(this.results[0].id).toEqual(this.fmli[2]);
    });
  });
});
