/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_testGenerator', function () {
  var filename = 'test_testGenerator';

  describe('expectation generation', function () {
    it('generates a basic expectation', function () {
      var expectation = TestGenerator.generateMetricExpectation('test metric 1');
      var expected = 'it("test metric 1", function() {\n' + '});';

      expect(expectation).toEqual(expected);
    });

    it('generates an expectation with an eval', function () {
      var expectation = TestGenerator.generateMetricExpectation('test metric 1', 'Metric', 'Organization', 'test');
      var expected = 'it("test metric 1", function() {\n' +
        '  var result = Organization.evalMetric({\n' +
        '    id:"test",\n' +
        '    expression:"Metric"\n' +
        '  });\n' +
        '});';

      expect(expectation).toEqual(expected);
    });

    it('generates an expectation with times', function () {
      var expectation = TestGenerator.generateMetricExpectation('test metric 1', 'Metric', 'Organization', 'test', 'DAY', '2010-01-01T00:00:00Z', '2010-01-02T00:00:00Z');
      var expected = 'it("test metric 1", function() {\n' +
        '  var result = Organization.evalMetric({\n' +
        '    id:"test",\n' +
        '    expression:"Metric",\n' +
        '    interval:"DAY",\n' +
        '    start:DateTime.deserialize("2010-01-01T00:00:00Z"),\n' +
        '    end:DateTime.deserialize("2010-01-02T00:00:00Z")\n' +
        '  });\n' +
        '});';

      expect(expectation).toEqual(expected);
    });

    it('generates an expectation with result checking', function () {
      var expectation = TestGenerator.generateMetricExpectation('test metric 1', 'Metric', 'Organization', 'test', 'DAY', '2010-01-01T00:00:00Z', '2010-01-02T00:00:00Z', C3.type('Array').ofDbl(0, 1, 2));
      var expected = 'it("test metric 1", function() {\n' +
        '  var result = Organization.evalMetric({\n' +
        '    id:"test",\n' +
        '    expression:"Metric",\n' +
        '    interval:"DAY",\n' +
        '    start:DateTime.deserialize("2010-01-01T00:00:00Z"),\n' +
        '    end:DateTime.deserialize("2010-01-02T00:00:00Z")\n' +
        '  });\n' +
        '  expect(result.data()).toEqual([0,1,2]);\n' +
        '});';

      expect(expectation).toEqual(expected);
    });

    it('generates an expectation with bindings', function () {
      var bindings = C3.type('Map').ofStrToAny();
      bindings = bindings.with('M1', {
        start: DateTime.fromString('2010-01-01T00:00:00Z'),
        end: DateTime.fromString('2010-01-02T00:00:00Z'),
        interval: 'DAY',
        data: [1.0],
      });

      var expectation = TestGenerator.generateMetricExpectation('test metric 1', 'Metric', 'Organization', 'test', 'DAY', '2010-01-01T00:00:00Z', '2010-01-02T00:00:00Z', C3.type('Array').ofDbl(0, 1, 2), bindings);
      var expected = 'it("test metric 1", function() {\n' +
        '  var bindings = NormTimeseriesDoubleSpec.map();' +
        '  bindings.set("M1", Timeseries.makeNorm({"start":DateTime.deserialize("2010-01-01T00:00:00.000Z"), "end":DateTime.deserialize("2010-01-02T00:00:00.000Z"), "interval": "DAY", "data": [1]});\n' +
        '  var result = Organization.evalMetric({\n' +
        '    id:"test",\n' +
        '    expression:"Metric",\n' +
        '    interval:"DAY",\n' +
        '    start:DateTime.deserialize("2010-01-01T00:00:00Z"),\n' +
        '    end:DateTime.deserialize("2010-01-02T00:00:00Z"),\n' +
        '    bindings:bindings\n' +
        '  });\n' +
        '  expect(result.data()).toEqual([0,1,2]);\n' +
        '});';

      expect(expectation).toEqual(expected);
    });

    it('generates an expectation with longer bindings', function () {
      var bindings = C3.type('Map').ofStrToAny();
      bindings = bindings.with('M1', {
        start: DateTime.fromString('2010-01-01T00:00:00Z'),
        end: DateTime.fromString('2010-01-02T00:00:00Z'),
        interval: 'DAY',
        data: [2.0, 3.0],
      });

      var expectation = TestGenerator.generateMetricExpectation('test metric 1', 'Metric', 'Organization', 'test', 'DAY', '2010-01-01T00:00:00Z', '2010-01-02T00:00:00Z', C3.type('Array').ofDbl(0, 1, 2), bindings);
      var expected = 'it("test metric 1", function() {\n' +
        '  var bindings = NormTimeseriesDoubleSpec.map();' +
        '  bindings.set("M1", Timeseries.makeNorm({"start":DateTime.deserialize("2010-01-01T00:00:00.000Z"), "end":DateTime.deserialize("2010-01-02T00:00:00.000Z"), "interval": "DAY", "data": [2, 3]});\n' +
        '  var result = Organization.evalMetric({\n' +
        '    id:"test",\n' +
        '    expression:"Metric",\n' +
        '    interval:"DAY",\n' +
        '    start:DateTime.deserialize("2010-01-01T00:00:00Z"),\n' +
        '    end:DateTime.deserialize("2010-01-02T00:00:00Z"),\n' +
        '    bindings:bindings\n' +
        '  });\n' +
        '  expect(result.data()).toEqual([0,1,2]);\n' +
        '});';

      expect(expectation).toEqual(expected);
    });
  });

  describe('describe generation', function () {
    it('works', function () {
      var expectation = TestGenerator.generateDescribe('HI', C3.Array.ofStr(['one', 'two']));

      var expected = 'describe("HI", function() {\n' + '  one\n' + '  two\n' + '});';

      expect(expected).toEqual(expectation);
    });
  });
});
