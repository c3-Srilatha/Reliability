/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ReliabilityMetric_validateMetricExpression';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);

    this.now = DateTime.now();

    this.facility = TestApi.upsertEntity(this.ctx, 'Facility', {
      id: 'TestFacility1',
    });

    this.asset = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      id: 'TestAsset1',
    });

    TestApi.upsertEntity(this.ctx, 'FacilityReliabilityAssetHierarchicalRelation', {
      from: this.facility.id,
      to: this.asset.id,
    });

    this.sensor = TestApi.upsertBatchEntity(this.ctx, 'Sensor', [
      {
        id: 'idSensor1',
        name: 'sensor1',
      },
      {
        id: 'idSensor2',
        name: 'sensor2',
      },
    ]);

    TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAssetSensorRelation', [
      {
        from: this.asset.id,
        to: this.sensor[0],
        id: 'TestAsset1_idSensor1',
      },
      {
        from: this.asset.id,
        to: this.sensor[1],
        id: 'TestAsset1_idSensor2',
      },
    ]);

    this.metric = TestApi.upsertEntity(this.ctx, 'ReliabilityMetric', {
      id: 'TestMetricA',
      name: 'TestMetricA',
      description: 'Test metric',
      expression: "sensor('idSensor2')",
      expandedExpression: "evalSensorForAnyAsset('idSensor2', $metric.interval, $metric.range)",
      facility: 'RWC',
      lastUpdated: this.now,
    });

    ReliabilityAsset.refreshCalcFields({ sync: true });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('#validateMetricExpression', function () {
    describe('for syntax errors', function () {
      describe('when you have an extra operator at the end of the expression', function () {
        beforeAll(function () {
          this.expression = "sensor('idSensor1') + TestMetricA +";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.unexpectedEndFile.text');
        });
      });

      describe('when you have an extra "," at the end of the expression', function () {
        beforeAll(function () {
          this.expression = "sensor('idSensor1') + TestMetricA +";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.unexpectedEndFile.text');
        });
      });

      describe('when you have an extra closing parenthesis ")"', function () {
        beforeAll(function () {
          this.expression = "sensor('idSensor1') + TestMetricA )";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.missingBeforeStatement.text');
        });
      });

      describe('when you have an extra closing brackets "]" ', function () {
        beforeAll(function () {
          this.expression = "sensor('idSensor1') + TestMetricA ]";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.missingBeforeStatement.text');
        });
      });

      describe('when you have an extra closing braces "}" ', function () {
        beforeAll(function () {
          this.expression = "sensor('idSensor1') + TestMetricA }";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.unexpectedSyntaxError.text');
        });
      });

      describe('when you have opened but not closed all parenthesis, but the parenthesis is next to the sensor statement', function () {
        beforeAll(function () {
          this.expression = "sensor('idSensor1' + TestMetricA";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.missingParenthetical.text');
        });
      });

      describe('when you have opened but not closed all parenthesis, but the parenthesis is next to the metric statement', function () {
        beforeAll(function () {
          this.expression = "sensor('idSensor1') + (TestMetricA";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.missingParenthetical.text');
        });
      });

      describe('when you have opened but not closed all brackets, but the brackets is next to the sensor statement', function () {
        beforeAll(function () {
          this.expression = "sensor['idSensor1' + TestMetricA";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.missingBrackets.text');
        });
      });

      describe('when you have opened but not closed all brackets, but the brackets is next to the metric statement', function () {
        beforeAll(function () {
          this.expression = "sensor('idSensor1') + [TestMetricA";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.missingBrackets.text');
        });
      });

      describe('when you have opened but not closed all braces, but the braces is next to the sensor statement', function () {
        beforeAll(function () {
          this.expression = "sensor{'idSensor1' + TestMetricA";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.missingBeforeStatement.text');
        });
      });

      describe('when you have opened but not closed all braces, but the braces is next to the metric statement', function () {
        beforeAll(function () {
          this.expression = "sensor('idSensor1') + {TestMetricA";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.missingBraces.text');
        });
      });

      describe('when you use an illegal character inside the expression  (for example "#")', function () {
        beforeAll(function () {
          this.expression = "sensor('idSensor1') + TestMetricA #";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.illegalCharacters.text');
        });
      });

      describe('when you use a weird point in some random place', function () {
        beforeAll(function () {
          this.expression = "sensor('idSensor1') + TestMetricA .";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.MissingNameAfterOperator.text');
        });
      });
    });

    describe('for expression errors', function () {
      describe('when you use a metric that does not exist', function () {
        beforeAll(function () {
          this.expression = "sensor('idSensor1') + TestMetricB";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.unrecognizedIdentifier.text');
        });
      });

      describe('when you use a sensor that does not exist', function () {
        beforeAll(function () {
          this.expression = "sensor('idSensor3')";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.unrecognizedIdentifier.text');
        });
      });

      describe('when you send the sensor statement without the sensor id', function () {
        beforeAll(function () {
          this.expression = "sensor('')";
          this.result = ReliabilityMetric.validateMetricExpression(this.expression);
        });

        it('should return a translation key that represents the error', function () {
          expect(this.result).toEqual('ReliabilityMetricError.unrecognizedError.text');
        });
      });
    });
  });
});
