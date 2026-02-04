/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const testName = 'test_BaseCodeAnalysis.VersionDiff.Metric.ValueModifierChange';
const metricType = BaseCodeAnalysis.VersionDiff.Metric.ValueModifierChange;
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
    describe('when there are no value modifier changes', function () {
      beforeAll(function () {
        this.typesToGenerate = ['SameStructure', 'SameStructureEnum'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not have internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should have no results', function () {
        expect(this.results.length).toBe(0);
      });
    });

    describe('when value modifiers on base fields change', function () {
      beforeAll(function () {
        this.typesToGenerate = ['ChangeValueModifiers'];
        this.typeMetaChanges = {
          baseCodeAnalyzer: {
            touched: this.typesToGenerate,
            fieldChanges: {
              [this.typesToGenerate[0]]: {
                revised: {
                  renameOriginalOptionalField: {
                    newPkg: 'baseCodeAnalyzer',
                    newType: this.typesToGenerate[0],
                    newField: TH.rename('renameOriginalOptionalField'),
                    isGuessed: true,
                  },
                },
              },
            },
          },
        };

        var sharedInfo = {
          curTypeName: this.typesToGenerate[0],
          changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.CHANGED,
        };
        this.info = [
          {
            ...sharedInfo,
            curFieldName: TH.rename('renameOriginalOptionalField'),
            prevModifier: 'NONE',
            curModifier: ValueModifier.NON_EMPTY,
            subCategory: metricType.CHANGED_FIELD_CODE,
            isBreaking: true,
          },
          {
            ...sharedInfo,
            curFieldName: 'originalNonEmptyField',
            prevModifier: ValueModifier.NON_EMPTY,
            curModifier: 'NONE',
            subCategory: metricType.CHANGED_FIELD_CODE,
            isBreaking: false,
          },
          {
            ...sharedInfo,
            curFieldName: 'originalOptionalReturnFunc',
            prevModifier: 'NONE',
            curModifier: ValueModifier.NON_EMPTY,
            subCategory: metricType.CHANGED_RETURN_CODE,
            isBreaking: true,
          },
          {
            ...sharedInfo,
            curFieldName: 'testFunc',
            curParamName: 'originalNonOptionalParam',
            prevModifier: ValueModifier.NON_OPTIONAL_PARAM,
            curModifier: ValueModifier.NON_EMPTY,
            subCategory: metricType.CHANGED_PARAM_CODE,
            isBreaking: true,
          },
          {
            ...sharedInfo,
            curFieldName: 'testFunc',
            curParamName: 'originalOptionalParam',
            prevModifier: 'NONE',
            curModifier: ValueModifier.PRESERVES_EMPTY,
            subCategory: metricType.CHANGED_PARAM_CODE,
            isBreaking: true,
          },
        ];
      });

      describe('and the major version is the same', function () {
        beforeAll(function () {
          this.resultsSpec = TH.constructResultsSpec({
            prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
            curAppInfoSpec: { version: '2', treatAsVersion: '1.1', typesToGenerate: this.typesToGenerate },
            detectStructuralChangesMode: 'OVERRIDE',
            typeMetaChanges: this.typeMetaChanges,
          });

          this.results = metricType.calculateResults(this.resultsSpec);
        });

        it('should not have internal errors', function () {
          TH.validateNoInternalErrors(this.results);
        });

        it('should have the expected results with warnings', function () {
          var expected = [
            {
              stats: { warningCount: 4, value: 5 },
              codeAnalysisMetricMessages: [
                {
                  // This was a guessed rename, so it should only be a warning.
                  severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                  message: Str.format(
                    template.forId('value-modifier-change-field-breaking').guessedMessage,
                    this.info[0]
                  ),
                  changelogMessage: Str.format(
                    template.forId('value-modifier-change-field-breaking').changelogMessage,
                    this.info[0]
                  ),
                  info: this.info[0],
                  side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                  line: 19,
                  column: 3,
                },
                {
                  changelogMessage: Str.format(
                    template.forId('value-modifier-change-field-safe').changelogMessage,
                    this.info[1]
                  ),
                  info: this.info[1],
                  side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                  line: 24,
                  column: 3,
                },
                {
                  severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                  message: Str.format(
                    template.forId('value-modifier-change-return-breaking').primaryMessage,
                    this.info[2]
                  ),
                  changelogMessage: Str.format(
                    template.forId('value-modifier-change-return-breaking').changelogMessage,
                    this.info[2]
                  ),
                  info: this.info[2],
                  side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                  line: 37,
                  column: 3,
                },
                {
                  severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                  message: Str.format(
                    template.forId('value-modifier-change-param-breaking').primaryMessage,
                    this.info[3]
                  ),
                  changelogMessage: Str.format(
                    template.forId('value-modifier-change-param-breaking').changelogMessage,
                    this.info[3]
                  ),
                  info: this.info[3],
                  side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                  line: 58,
                  column: 5,
                },
                {
                  severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                  message: Str.format(
                    template.forId('value-modifier-change-param-breaking').primaryMessage,
                    this.info[4]
                  ),
                  changelogMessage: Str.format(
                    template.forId('value-modifier-change-param-breaking').changelogMessage,
                    this.info[4]
                  ),
                  info: this.info[4],
                  side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                  line: 59,
                  column: 5,
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
            detectStructuralChangesMode: 'OVERRIDE',
            typeMetaChanges: this.typeMetaChanges,
          });

          this.results = metricType.calculateResults(this.resultsSpec);
        });

        it('should not have internal errors', function () {
          TH.validateNoInternalErrors(this.results);
        });

        it('should have the expected results with no severity', function () {
          var expected = [
            {
              stats: { warningCount: 0, value: 5 },
              codeAnalysisMetricMessages: [
                {
                  // This was a guessed rename, so it should only be a warning.
                  severity: undefined,
                  message: Str.format(
                    template.forId('value-modifier-change-field-breaking').guessedMessage,
                    this.info[0]
                  ),
                  changelogMessage: Str.format(
                    template.forId('value-modifier-change-field-breaking').changelogMessage,
                    this.info[0]
                  ),
                  info: this.info[0],
                  side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                  line: 19,
                  column: 3,
                },
                {
                  changelogMessage: Str.format(
                    template.forId('value-modifier-change-field-safe').changelogMessage,
                    this.info[1]
                  ),
                  info: this.info[1],
                  side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                  line: 24,
                  column: 3,
                },
                {
                  severity: undefined,
                  message: Str.format(
                    template.forId('value-modifier-change-return-breaking').primaryMessage,
                    this.info[2]
                  ),
                  changelogMessage: Str.format(
                    template.forId('value-modifier-change-return-breaking').changelogMessage,
                    this.info[2]
                  ),
                  info: this.info[2],
                  side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                  line: 37,
                  column: 3,
                },
                {
                  severity: undefined,
                  message: Str.format(
                    template.forId('value-modifier-change-param-breaking').primaryMessage,
                    this.info[3]
                  ),
                  changelogMessage: Str.format(
                    template.forId('value-modifier-change-param-breaking').changelogMessage,
                    this.info[3]
                  ),
                  info: this.info[3],
                  side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                  line: 58,
                  column: 5,
                },
                {
                  severity: undefined,
                  message: Str.format(
                    template.forId('value-modifier-change-param-breaking').primaryMessage,
                    this.info[4]
                  ),
                  changelogMessage: Str.format(
                    template.forId('value-modifier-change-param-breaking').changelogMessage,
                    this.info[4]
                  ),
                  info: this.info[4],
                  side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                  line: 59,
                  column: 5,
                },
              ],
            },
          ];

          TH.validateProperties(this.results, expected);
        });
      });
    });

    describe('when value modifiers on inherited fields change', function () {
      beforeAll(function () {
        this.typesToGenerate = ['ChangeValueModifiers', 'ChangeInheritedValueModifiers'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2', treatAsVersion: '1.1', typesToGenerate: this.typesToGenerate },
          detectStructuralChangesMode: 'OVERRIDE',
          typeMetaChanges: {
            baseCodeAnalyzer: {
              touched: this.typesToGenerate,
              fieldChanges: {
                [this.typesToGenerate[0]]: {
                  revised: {
                    renameOriginalOptionalField: {
                      newPkg: 'baseCodeAnalyzer',
                      newType: this.typesToGenerate[0],
                      newField: TH.rename('renameOriginalOptionalField'),
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

      it('should not have internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should only report changes when a modifier is explicitly declared and the resolved modifier changes', function () {
        var info = {
          curTypeName: this.typesToGenerate[1],
          curFieldName: 'changeInheritedField',
          prevModifier: 'NONE',
          curModifier: ValueModifier.NON_EMPTY,
          changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.CHANGED,
          subCategory: metricType.CHANGED_FIELD_CODE,
          isBreaking: true,
        };

        var expected = {
          stats: { warningCount: 1, value: 1 },
          codeAnalysisMetricMessages: [
            {
              severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
              message: Str.format(template.forId('value-modifier-change-field-breaking').primaryMessage, info),
              changelogMessage: Str.format(
                template.forId('value-modifier-change-field-breaking').changelogMessage,
                info
              ),
              info,
              side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
              line: 25,
              column: 3,
            },
          ],
        };

        TH.validateProperties(this.results[0], expected);
      });
    });
  });
});
