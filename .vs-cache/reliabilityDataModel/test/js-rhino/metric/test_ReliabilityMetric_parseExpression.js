/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ReliabilityMetric_parseExpression';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
  });

  describe('#parseExpression', function () {
    describe('when the expression has just custom metrics', function () {
      beforeAll(function () {
        this.result = ReliabilityMetric.parseExpression('CustomMetric1 + CustomMetric2');
      });

      it('parses expression correctly, and gets all its components', function () {
        this.result = ReliabilityMetric.parseExpression('CustomMetric1 + CustomMetric2');

        expect(this.result[0]).toEqual('CustomMetric1');
        expect(this.result[1]).toEqual('CustomMetric2');
      });
    });

    describe('when the expression has just sensors', function () {
      beforeAll(function () {
        this.result = ReliabilityMetric.parseExpression("sensor('1___43AI201___1.PV') + sensor('1___43AI201___2')");
      });

      it('parses expression correctly, and gets all its components.', function () {
        expect(this.result[0]).toEqual('sensor');
        expect(this.result[1]).toEqual('1___43AI201___1.PV');
        expect(this.result[3]).toEqual('1___43AI201___2');
      });
    });

    describe('when the expression has metric functions, sensors, & custom metric', function () {
      beforeAll(function () {
        this.result = ReliabilityMetric.parseExpression(
          "avg(sensor('1___43AI201___1.PV'), sensor('1___43AI202___1.PV')) + Custom1 - sensor('1___43AI202___1.PV')"
        );
      });

      it('parses expression correctly, and gets all its components.', function () {
        expect(this.result[0]).toEqual('avg');
        expect(this.result[1]).toEqual('sensor');
        expect(this.result[2]).toEqual('1___43AI201___1.PV');
        expect(this.result[5]).toEqual('Custom1');
      });
    });
  });
});
