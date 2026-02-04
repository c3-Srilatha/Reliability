/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FailureModeDiagnostic';

describe(filename, function () {
  describe('High/Increasing', function () {
    beforeAll(function () {
      C3.pkg().upsertAllSeed();

      this.lambda = FailureModeDiagnostic.make({ id: 'Increasing' }, true).get('lambda').lambda;
    });

    it('sensor based - meet diagnostic', function () {
      expect(this.lambda.call([1, 2, 3], 0.5, FailureModeEvaluationMode.SENSOR_BASED)).toEqual(true);
    });

    it('sensor based - does not meet diagnostic', function () {
      expect(this.lambda.call([1, 2, 3], 1, FailureModeEvaluationMode.SENSOR_BASED)).toEqual(false);
    });

    it('sensor based - not enough data', function () {
      expect(this.lambda.call([], 1, FailureModeEvaluationMode.SENSOR_BASED)).toEqual(false);
      expect(this.lambda.call([2], 1, FailureModeEvaluationMode.SENSOR_BASED)).toEqual(false);
    });

    it('residual based - meet diagnostic', function () {
      expect(this.lambda.call([1, 2, 3], 0.5, FailureModeEvaluationMode.RESIDUAL_BASED)).toEqual(true);
    });

    it('residual based - does not meet diagnostic', function () {
      expect(this.lambda.call([1, 2, 3], 2, FailureModeEvaluationMode.RESIDUAL_BASED)).toEqual(false);
    });

    it('residual based - not enough data', function () {
      expect(this.lambda.call([], 1, FailureModeEvaluationMode.RESIDUAL_BASED)).toEqual(false);
      expect(this.lambda.call([2], 1, FailureModeEvaluationMode.RESIDUAL_BASED)).toEqual(false);
    });
  });

  describe('Low/Decreasing', function () {
    beforeAll(function () {
      this.lambda = FailureModeDiagnostic.make({ id: 'Decreasing' }, true).get('lambda').lambda;
    });

    it('sensor based - meet diagnostic', function () {
      expect(this.lambda.call([1, 0, -1], 0.5, FailureModeEvaluationMode.SENSOR_BASED)).toEqual(true);
    });

    it('sensor based - does not meet diagnostic', function () {
      expect(this.lambda.call([1, 0, -1], 1, FailureModeEvaluationMode.SENSOR_BASED)).toEqual(false);
    });

    it('sensor based - not enough data', function () {
      expect(this.lambda.call([], 1, FailureModeEvaluationMode.SENSOR_BASED)).toEqual(false);
      expect(this.lambda.call([2], 1, FailureModeEvaluationMode.SENSOR_BASED)).toEqual(false);
    });

    it('residual based - meet diagnostic', function () {
      expect(this.lambda.call([-1, -2, -3], 0.5, FailureModeEvaluationMode.RESIDUAL_BASED)).toEqual(true);
    });

    it('residual based - does not meet diagnostic', function () {
      expect(this.lambda.call([-1, -2, -3], 2, FailureModeEvaluationMode.RESIDUAL_BASED)).toEqual(false);
    });

    it('residual based - not enough data', function () {
      expect(this.lambda.call([], 1, FailureModeEvaluationMode.RESIDUAL_BASED)).toEqual(false);
      expect(this.lambda.call([2], 1, FailureModeEvaluationMode.RESIDUAL_BASED)).toEqual(false);
    });
  });
});
