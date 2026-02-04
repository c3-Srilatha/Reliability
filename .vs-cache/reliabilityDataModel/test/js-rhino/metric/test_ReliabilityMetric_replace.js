/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ReliabilityMetric_replace';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('#replaceSensorTag', function () {
    beforeAll(function () {
      this.expression = "sensor('id1') + sensor";
    });

    it('correctly replaces the sensor tag and expands the expression.', function () {
      this.result = ReliabilityMetric.replaceSensorTag(this.expression);
      this.expectedResult = "evalSensorForAnyAsset('id1', $metric.interval, $metric.range) + sensor";
      expect(this.result).toEqual(this.expectedResult);
    });
  });

  describe('#replaceMetricExpandedExpression', function () {
    beforeAll(function () {
      this.expression = "evalSensorForAnyAsset('id1') + A + AB + ABC + A";
      this.metrics = [
        {
          id: 'A',
          expandedExpression: "sensor('id2')",
        },
        {
          id: 'AB',
          expandedExpression: "sensor('id3')",
        },
        {
          id: 'ABC',
          expandedExpression: "sensor('id4')",
        },
      ];
    });

    it('Correctly replaces each metric id with its expanded expression.', function () {
      this.result = ReliabilityMetric.replaceMetricExpandedExpression(this.expression, this.metrics);
      this.expectedResult =
        "evalSensorForAnyAsset('id1') + sensor('id2') + sensor('id3') + sensor('id4') + sensor('id2')";
      expect(this.result).toEqual(this.expectedResult);
    });
  });
});
