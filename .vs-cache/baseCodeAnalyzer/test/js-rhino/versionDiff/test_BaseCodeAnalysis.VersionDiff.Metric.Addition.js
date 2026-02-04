/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const testName = 'test_BaseCodeAnalysis.VersionDiff.Metric.Addition';
const metricType = BaseCodeAnalysis.VersionDiff.Metric.Addition;
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
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: ['SameStructure'] },
          curAppInfoSpec: { version: '2', typesToGenerate: ['SameStructure'] },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should return zero results', function () {
        expect(this.results.length).toBe(0);
      });
    });

    describe('when a Type is added', function () {
      beforeAll(function () {
        this.curTypesToGenerate = ['AddType'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1' },
          curAppInfoSpec: { version: '2', typesToGenerate: this.curTypesToGenerate },
        });
        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should return results with no severity', function () {
        var info = [
          {
            curTypeName: this.curTypesToGenerate[0],
            subCategory: metricType.ADDED_TYPE_CODE,
            changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.ADDED,
          },
        ];

        var expected = [
          {
            stats: { value: 1 },
            codeAnalysisMetricMessages: [
              {
                changelogMessage: Str.format(template.forId('added-type-safe').changelogMessage, info[0]),
                info: info[0],
                line: 13,
                column: 1,
              },
            ],
          },
        ];

        TH.validateProperties(this.results, expected);
      });
    });

    describe('when optional fields are added', function () {
      beforeAll(function () {
        this.typesToGenerate = ['ChangeAddOptionalFields'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should return results with no severity', function () {
        var sharedInfo = {
          curTypeName: this.typesToGenerate[0],
          changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.ADDED,
          isBreaking: false,
        };

        var info = [
          {
            ...sharedInfo,
            curFieldName: 'addOptionalField1',
            subCategory: metricType.ADDED_FIELD_CODE,
          },
          {
            ...sharedInfo,
            curFieldName: 'addOptionalField2',
            subCategory: metricType.ADDED_FIELD_CODE,
          },
          {
            ...sharedInfo,
            curFieldName: 'addOptionalFieldWithDefault',
            subCategory: metricType.ADDED_FIELD_CODE,
          },
          {
            ...sharedInfo,
            curFieldName: 'addRequiredFieldWithDefault',
            subCategory: metricType.ADDED_FIELD_CODE,
          },
          {
            ...sharedInfo,
            curFieldName: 'addOptionalMethod1',
            subCategory: metricType.ADDED_METHOD_CODE,
          },
          {
            ...sharedInfo,
            curFieldName: 'addOptionalParam',
            curParamName: 'a',
            subCategory: metricType.ADDED_PARAM_CODE,
          },
        ];

        var expected = [
          {
            stats: { value: 6 },
            codeAnalysisMetricMessages: [
              {
                changelogMessage: Str.format(template.forId('added-field-safe').changelogMessage, info[0]),
                info: info[0],
                line: 18,
                column: 3,
              },
              {
                changelogMessage: Str.format(template.forId('added-field-safe').changelogMessage, info[1]),
                info: info[1],
                line: 23,
                column: 3,
              },
              {
                changelogMessage: Str.format(template.forId('added-field-safe').changelogMessage, info[2]),
                info: info[2],
                line: 28,
                column: 3,
              },
              {
                changelogMessage: Str.format(template.forId('added-field-safe').changelogMessage, info[3]),
                info: info[3],
                line: 34,
                column: 3,
              },
              {
                changelogMessage: Str.format(template.forId('added-method-safe').changelogMessage, info[4]),
                info: info[4],
                line: 47,
                column: 3,
              },
              {
                changelogMessage: Str.format(template.forId('added-param-safe').changelogMessage, info[5]),
                info: info[5],
                line: 55,
                column: 30,
              },
            ],
          },
        ];

        TH.validateProperties(this.results, expected);
      });
    });

    describe('when required fields are added', function () {
      beforeAll(function () {
        this.typesToGenerate = ['ChangeAddRequiredFields'];

        var sharedInfo = {
          curTypeName: this.typesToGenerate[0],
          changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.ADDED,
          isBreaking: true,
        };
        this.info = [
          {
            ...sharedInfo,
            curFieldName: 'addRequiredField1',
            subCategory: metricType.ADDED_FIELD_CODE,
          },
          {
            ...sharedInfo,
            curFieldName: 'addRequiredField2',
            subCategory: metricType.ADDED_FIELD_CODE,
          },
          {
            ...sharedInfo,
            curFieldName: 'addRequiredParam',
            curParamName: 'a',
            subCategory: metricType.ADDED_PARAM_CODE,
          },
        ];
      });

      describe('and the major version is the same', function () {
        beforeAll(function () {
          this.resultsSpec = TH.constructResultsSpec({
            prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
            curAppInfoSpec: { version: '2', treatAsVersion: '1.1', typesToGenerate: this.typesToGenerate },
          });

          this.results = metricType.calculateResults(this.resultsSpec);
        });

        it('should not contain internal errors', function () {
          TH.validateNoInternalErrors(this.results);
        });

        it('should return warnings for the added fields', function () {
          var expected = [
            {
              stats: { warningCount: 3, value: 3 },
              codeAnalysisMetricMessages: [
                {
                  severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                  message: Str.format(template.forId('added-field-breaking').primaryMessage, this.info[0]),
                  changelogMessage: Str.format(template.forId('added-field-breaking').changelogMessage, this.info[0]),
                  info: this.info[0],
                  line: 18,
                  column: 3,
                },
                {
                  severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                  message: Str.format(template.forId('added-field-breaking').primaryMessage, this.info[1]),
                  changelogMessage: Str.format(template.forId('added-field-breaking').changelogMessage, this.info[1]),
                  info: this.info[1],
                  line: 23,
                  column: 3,
                },
                {
                  severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                  message: Str.format(template.forId('added-param-breaking').primaryMessage, this.info[2]),
                  changelogMessage: Str.format(template.forId('added-param-breaking').changelogMessage, this.info[2]),
                  info: this.info[2],
                  line: 31,
                  column: 30,
                },
              ],
            },
          ];

          TH.validateProperties(this.results, expected);
        });
      });

      describe('and the major version has bumped', function () {
        beforeAll(function () {
          this.resultsSpec = TH.constructResultsSpec({
            prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
            curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
          });

          this.results = metricType.calculateResults(this.resultsSpec);
        });

        it('should not contain internal errors', function () {
          TH.validateNoInternalErrors(this.results);
        });

        it('should return messages with no severity for the added fields', function () {
          var expected = [
            {
              stats: { warningCount: 0, value: 3 },
              codeAnalysisMetricMessages: [
                {
                  severity: undefined,
                  message: Str.format(template.forId('added-field-breaking').primaryMessage, this.info[0]),
                  changelogMessage: Str.format(template.forId('added-field-breaking').changelogMessage, this.info[0]),
                  info: this.info[0],
                  line: 18,
                  column: 3,
                },
                {
                  severity: undefined,
                  message: Str.format(template.forId('added-field-breaking').primaryMessage, this.info[1]),
                  changelogMessage: Str.format(template.forId('added-field-breaking').changelogMessage, this.info[1]),
                  info: this.info[1],
                  line: 23,
                  column: 3,
                },
                {
                  severity: undefined,
                  message: Str.format(template.forId('added-param-breaking').primaryMessage, this.info[2]),
                  changelogMessage: Str.format(template.forId('added-param-breaking').changelogMessage, this.info[2]),
                  info: this.info[2],
                  line: 31,
                  column: 30,
                },
              ],
            },
          ];

          TH.validateProperties(this.results, expected);
        });
      });
    });

    describe('when inherited field declarations are added', function () {
      beforeAll(function () {
        this.typesToGenerate = ['ChangeAddOptionalFields', 'ChangeAddInheritedFields'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2', treatAsVersion: '1.1', typesToGenerate: this.typesToGenerate },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should have the correct stats', function () {
        TH.validateProperties(this.results[0].stats, { warningCount: 1, value: 2 });
      });

      it('should report added methods even when the declaration is inherited', function () {
        var info = {
          curTypeName: this.typesToGenerate[1],
          curFieldName: 'addOptionalMethod1',
          changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.ADDED,
          subCategory: metricType.ADDED_METHOD_CODE,
        };

        var expected = {
          changelogMessage: Str.format(template.forId('added-method-safe').changelogMessage, info),
          info,
          line: 49,
          column: 3,
        };

        TH.validateProperties(this.results[0].codeAnalysisMetricMessages[1], expected);
      });

      it('should return warnings only if inherited declarations tighten requirement', function () {
        var info = {
          curTypeName: this.typesToGenerate[1],
          curFieldName: 'addOptionalField2',
          changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.ADDED,
          subCategory: metricType.ADDED_FIELD_CODE,
          isBreaking: true,
        };

        var expected = {
          severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
          message: Str.format(template.forId('added-field-breaking').primaryMessage, info),
          changelogMessage: Str.format(template.forId('added-field-breaking').changelogMessage, info),
          info,
          line: 25,
          column: 3,
        };

        TH.validateProperties(this.results[0].codeAnalysisMetricMessages[0], expected);
      });
    });
  });
});
