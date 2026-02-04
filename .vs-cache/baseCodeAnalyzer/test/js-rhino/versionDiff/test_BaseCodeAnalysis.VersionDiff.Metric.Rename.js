/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const testName = 'test_BaseCodeAnalysis.VersionDiff.Metric.Rename';
const metricType = BaseCodeAnalysis.VersionDiff.Metric.Rename;
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
    describe('when there are no renames', function () {
      beforeAll(function () {
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: ['SameStructure', 'RemoveTypeNoDeprecation'] },
          curAppInfoSpec: { version: '2', typesToGenerate: ['SameStructure', 'AddType'] },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should return zero results', function () {
        expect(this.results.length).toBe(0);
      });
    });

    describe('when Types are renamed', function () {
      describe('without deprecation', function () {
        beforeAll(function () {
          this.typesToGenerate = ['RenameTypeNoDeprecation'];
          this.resultsSpec = TH.constructResultsSpec({
            prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
            curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
            detectStructuralChangesMode: 'OVERRIDE',
            typeMetaChanges: {
              baseCodeAnalyzer: {
                touched: this.typesToGenerate,
                revised: {
                  [this.typesToGenerate[0]]: {
                    newPkg: 'baseCodeAnalyzer',
                    newType: TH.rename(this.typesToGenerate[0]),
                    isGuessed: true,
                  },
                },
              },
            },
          });

          this.results = metricType.calculateResults(this.resultsSpec);
        });

        it('should not contain internal errors', function () {
          TH.validateNoInternalErrors(this.results);
        });

        it('should return a warning message', function () {
          var info = {
            prevTypeName: this.typesToGenerate[0],
            curTypeName: TH.rename(this.typesToGenerate[0]),
            subCategory: metricType.RENAMED_TYPE_CODE,
            changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.ADDED,
            isBreaking: true,
          };

          var expected = [
            {
              stats: { warningCount: 1 },
              codeAnalysisMetricMessages: [
                {
                  severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                  message: Str.format(template.forId('renamed-type-breaking').guessedMessage, info),
                  changelogMessage: Str.format(template.forId('renamed-type-breaking').changelogMessage, info),
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

      describe('with deprecation', function () {
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

        it('should return a message with no severity for a renamed Type that was deprecated', function () {
          var info = {
            prevTypeName: this.typesToGenerate[0],
            curTypeName: TH.rename(this.typesToGenerate[0]),
            subCategory: metricType.RENAMED_TYPE_CODE,
            changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.ADDED,
            isBreaking: false,
          };

          var expected = [
            {
              stats: { value: 1 },
              codeAnalysisMetricMessages: [
                {
                  changelogMessage: Str.format(template.forId('renamed-type-safe').changelogMessage, info),
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
    });

    describe('when fields are renamed', function () {
      beforeAll(function () {
        this.typesToGenerate = ['ChangeRenameFields'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
          detectStructuralChangesMode: 'OVERRIDE',
          typeMetaChanges: {
            baseCodeAnalyzer: {
              touched: this.typesToGenerate,
              fieldChanges: {
                [this.typesToGenerate[0]]: {
                  revised: {
                    renameFieldWithDeprecation: {
                      newPkg: 'baseCodeAnalyzer',
                      newType: this.typesToGenerate[0],
                      newField: TH.rename('renameFieldWithDeprecation'),
                      isDeprecated: true,
                      deprecationFinalVersion: '3.0.0',
                      deprecationDetails: `Use #${TH.rename('renameFieldWithDeprecation')} instead.`,
                    },
                    renameFieldIncompleteDeprecation: {
                      newPkg: 'baseCodeAnalyzer',
                      newType: this.typesToGenerate[0],
                      newField: TH.rename('renameFieldIncompleteDeprecation'),
                      isGuessed: true,
                      isDeprecated: true,
                    },
                    renameFieldNoDeprecation: {
                      newPkg: 'baseCodeAnalyzer',
                      newType: this.typesToGenerate[0],
                      newField: TH.rename('renameFieldNoDeprecation'),
                      isGuessed: true,
                    },
                  },
                },
              },
            },
          },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should return results with the correct stats for the renamed fields', function () {
        var expected = [{ stats: { warningCount: 1, value: 3 } }];
        expect(this.results[0].codeAnalysisMetricMessages.length).toBe(3);
        TH.validateProperties(this.results, expected);
      });

      it('should return messages with no severity for renamed fields that were deprecated', function () {
        var sharedInfo = {
          prevTypeName: this.typesToGenerate[0],
          curTypeName: this.typesToGenerate[0],
          subCategory: metricType.RENAMED_FIELD_CODE,
          changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.ADDED,
          isBreaking: false,
        };

        var info = [
          {
            ...sharedInfo,
            prevFieldName: 'renameFieldWithDeprecation',
            curFieldName: TH.rename('renameFieldWithDeprecation'),
          },
          {
            ...sharedInfo,
            prevFieldName: 'renameFieldIncompleteDeprecation',
            curFieldName: TH.rename('renameFieldIncompleteDeprecation'),
          },
        ];

        var expected = [
          {
            changelogMessage: Str.format(template.forId('renamed-field-safe').changelogMessage, info[0]),
            info: info[0],
            line: 31,
            column: 3,
          },
          {
            changelogMessage: Str.format(template.forId('renamed-field-safe').changelogMessage, info[1]),
            info: info[1],
            line: 43,
            column: 3,
          },
        ];

        TH.validateProperties(this.results[0].codeAnalysisMetricMessages[0], expected[0]);
        TH.validateProperties(this.results[0].codeAnalysisMetricMessages[1], expected[1]);
      });

      it('should return a warning message for a renamed field without deprecation', function () {
        var info = {
          prevTypeName: this.typesToGenerate[0],
          prevFieldName: 'renameFieldNoDeprecation',
          curTypeName: this.typesToGenerate[0],
          curFieldName: TH.rename('renameFieldNoDeprecation'),
          subCategory: metricType.RENAMED_FIELD_CODE,
          changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.ADDED,
          isBreaking: true,
        };

        var expected = {
          severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
          message: Str.format(template.forId('renamed-field-breaking').guessedMessage, info),
          changelogMessage: Str.format(template.forId('renamed-field-breaking').changelogMessage, info),
          info,
          line: 48,
          column: 3,
        };

        TH.validateProperties(this.results[0].codeAnalysisMetricMessages[2], expected);
      });
    });
  });
});
