/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const testName = 'test_BaseCodeAnalysis.VersionDiff.Metric.Deprecation';
const metricType = BaseCodeAnalysis.VersionDiff.Metric.Deprecation;
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
    describe('when there are no deprecations', function () {
      beforeAll(function () {
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: {
            version: '1',
            typesToGenerate: ['SameStructure', 'ChangeAddOptionalFields', 'RemoveTypeNoDeprecation'],
          },
          curAppInfoSpec: {
            version: '2',
            typesToGenerate: ['SameStructure', 'ChangeAddOptionalFields', 'AddType'],
          },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should return zero results', function () {
        expect(this.results.length).toBe(0);
      });
    });

    describe('when Types are deprecated', function () {
      beforeAll(function () {
        this.typesToGenerate = ['RenameTypeWithDeprecation'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should return messages with no severity for the deprecated Type', function () {
        var info = {
          curTypeName: this.typesToGenerate[0],
          finalVersion: '3.0.0',
          details: `Use {@link ${TH.rename(this.typesToGenerate[0])}} instead.`,
          subCategory: metricType.DEPRECATED_TYPE_CODE,
          changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.DEPRECATED,
        };

        var expected = [
          {
            stats: { value: 1 },
            codeAnalysisMetricMessages: [
              {
                changelogMessage: Str.format(template.forId('deprecated-type-safe').changelogMessage, info),
                info,
                line: 13,
                column: 1,
              },
            ],
          },
        ];

        TH.validateProperties(this.results, expected);
      });
    });

    describe('when fields are deprecated', function () {
      beforeAll(function () {
        this.typesToGenerate = ['ChangeRenameFields'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should return messages with no severity for the deprecated fields', function () {
        var info = [
          {
            curTypeName: this.typesToGenerate[0],
            curFieldName: 'renameFieldWithDeprecation',
            finalVersion: '3.0.0',
            details: `Use #${TH.rename('renameFieldWithDeprecation')} instead.`,
            subCategory: metricType.DEPRECATED_FIELD_CODE,
            changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.DEPRECATED,
          },
          {
            curTypeName: this.typesToGenerate[0],
            curFieldName: 'renameFieldIncompleteDeprecation',
            finalVersion: 'Unknown',
            details: '',
            subCategory: metricType.DEPRECATED_FIELD_CODE,
            changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.DEPRECATED,
          },
        ];

        var expected = [
          {
            stats: { value: 2 },
            codeAnalysisMetricMessages: [
              {
                changelogMessage: Str.format(template.forId('deprecated-field-safe').changelogMessage, info[0]),
                info: info[0],
                line: 24,
                column: 3,
              },
              {
                changelogMessage: Str.format(template.forId('deprecated-field-safe').changelogMessage, info[1]),
                info: info[1],
                line: 30,
                column: 3,
              },
            ],
          },
        ];

        TH.validateProperties(this.results, expected);
      });
    });
  });
});
