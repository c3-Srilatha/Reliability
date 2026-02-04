/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const testName = 'test_BaseCodeAnalysis.VersionDiff.Metric.Removal';
const metricType = BaseCodeAnalysis.VersionDiff.Metric.Removal;
const TH = BaseCodeAnalysis.VersionDiff.TestHelper;
const template = BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate;

describe(testName, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(testName);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::calculateResults', function () {
    describe('when there are no changes', function () {
      beforeAll(function () {
        this.typesToGenerate = ['SameStructure'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should return zero results', function () {
        expect(this.results.length).toBe(0);
      });
    });

    describe('when a non-deprecated Type is removed', function () {
      beforeAll(function () {
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: ['RemoveTypeNoDeprecation'] },
          curAppInfoSpec: { version: '2' },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should return warnings for the removed Type', function () {
        var info = [
          {
            prevTypeName: 'RemoveTypeNoDeprecation',
            subCategory: metricType.REMOVED_TYPE_CODE,
            changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.REMOVED,
            isBreaking: true,
          },
        ];

        var expected = [
          {
            stats: { warningCount: 1, value: 1 },
            codeAnalysisMetricMessages: [
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('removed-type-breaking').primaryMessage, info[0]),
                changelogMessage: Str.format(template.forId('removed-type-breaking').changelogMessage, info[0]),
                info: info[0],
                side: BaseCodeAnalysis.Metric.Message.Side.LEFT,
                line: 13,
                column: 1,
              },
            ],
          },
        ];

        TH.validateProperties(this.results, expected);
      });
    });

    describe('when a deprecated Type is removed before its finalVersion', function () {
      beforeAll(function () {
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: ['RemoveTypeWithDeprecation'] },
          curAppInfoSpec: { version: '2' },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should return warnings for the removed Type', function () {
        var info = [
          {
            prevTypeName: 'RemoveTypeWithDeprecation',
            subCategory: metricType.REMOVED_TYPE_CODE,
            changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.REMOVED,
            isBreaking: true,
          },
        ];

        var expected = [
          {
            stats: { warningCount: 1, value: 1 },
            codeAnalysisMetricMessages: [
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('removed-type-breaking').primaryMessage, info[0]),
                changelogMessage: Str.format(template.forId('removed-type-breaking').changelogMessage, info[0]),
                info: info[0],
                side: BaseCodeAnalysis.Metric.Message.Side.LEFT,
                line: 13,
                column: 1,
              },
            ],
          },
        ];

        TH.validateProperties(this.results, expected);
      });
    });

    describe('when a deprecated Type is removed after its finalVersion', function () {
      beforeAll(function () {
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', treatAsVersion: '2', typesToGenerate: ['RemoveTypeWithDeprecation'] },
          curAppInfoSpec: { version: '2', treatAsVersion: '5' },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should return results with no severity', function () {
        var info = [
          {
            prevTypeName: 'RemoveTypeWithDeprecation',
            subCategory: metricType.REMOVED_TYPE_CODE,
            changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.REMOVED,
            isBreaking: false,
          },
        ];

        var expected = [
          {
            stats: { value: 1 },
            codeAnalysisMetricMessages: [
              {
                changelogMessage: Str.format(template.forId('removed-type-safe').changelogMessage, info[0]),
                info: info[0],
                side: BaseCodeAnalysis.Metric.Message.Side.LEFT,
                line: 13,
                column: 1,
              },
            ],
          },
        ];

        TH.validateProperties(this.results, expected);
      });
    });

    describe('when fields are removed', function () {
      beforeAll(function () {
        this.typesToGenerate = ['ChangeRemoveFields'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should return errors for the removed fields', function () {
        var sharedInfo = {
          prevTypeName: this.typesToGenerate[0],
          changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.REMOVED,
        };

        var info = [
          {
            ...sharedInfo,
            prevFieldName: 'removeFieldNoDeprecation',
            subCategory: metricType.REMOVED_FIELD_CODE,
            isBreaking: true,
          },
          {
            ...sharedInfo,
            prevFieldName: 'removeDeprecatedField1',
            subCategory: metricType.REMOVED_FIELD_CODE,
            isBreaking: false,
          },
          {
            ...sharedInfo,
            prevFieldName: 'removeDeprecatedField2',
            subCategory: metricType.REMOVED_FIELD_CODE,
            isBreaking: true,
          },
          {
            ...sharedInfo,
            prevFieldName: 'removeMethodNoDeprecation',
            subCategory: metricType.REMOVED_METHOD_CODE,
            isBreaking: true,
          },
          {
            ...sharedInfo,
            prevFieldName: 'changeRemoveParam',
            prevParamName: 'a',
            subCategory: metricType.REMOVED_PARAM_CODE,
            isBreaking: true,
          },
        ];

        var expected = [
          {
            stats: { warningCount: 4, value: 5 },
            codeAnalysisMetricMessages: [
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('removed-field-breaking').primaryMessage, info[0]),
                changelogMessage: Str.format(template.forId('removed-field-breaking').changelogMessage, info[0]),
                info: info[0],
                side: BaseCodeAnalysis.Metric.Message.Side.LEFT,
                line: 24,
                column: 3,
              },
              {
                changelogMessage: Str.format(template.forId('removed-field-safe').changelogMessage, info[1]),
                info: info[1],
                side: BaseCodeAnalysis.Metric.Message.Side.LEFT,
                line: 29,
                column: 3,
              },
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('removed-field-breaking').primaryMessage, info[2]),
                changelogMessage: Str.format(template.forId('removed-field-breaking').changelogMessage, info[2]),
                info: info[2],
                side: BaseCodeAnalysis.Metric.Message.Side.LEFT,
                line: 35,
                column: 3,
              },
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('removed-method-breaking').primaryMessage, info[3]),
                changelogMessage: Str.format(template.forId('removed-method-breaking').changelogMessage, info[3]),
                info: info[3],
                side: BaseCodeAnalysis.Metric.Message.Side.LEFT,
                line: 41,
                column: 3,
              },
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('removed-param-breaking').primaryMessage, info[4]),
                changelogMessage: Str.format(template.forId('removed-param-breaking').changelogMessage, info[4]),
                info: info[4],
                side: BaseCodeAnalysis.Metric.Message.Side.LEFT,
                line: 49,
                column: 31,
              },
            ],
          },
        ];

        TH.validateProperties(this.results, expected);
      });
    });
  });
});
