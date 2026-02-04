/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const testName = 'test_BaseCodeAnalysis.VersionDiff.Metric.SchemaChange';
const metricType = BaseCodeAnalysis.VersionDiff.Metric.SchemaChange;
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
        this.typesToGenerate = ['SameEntityDeclaredSchema'];
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

    describe('when schema changes are backward compatible', function () {
      beforeAll(function () {
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: {
            version: '1',
            typesToGenerate: ['SameEntityDeclaredSchema', 'RenameEntitySameDeclaredSchema'],
          },
          curAppInfoSpec: {
            version: '2',
            typesToGenerate: [
              'SameEntityDeclaredSchema',
              'RenameEntitySameDeclaredSchema',
              'AddEntityDeclaredSchema',
              'AddEntityNoDeclaredSchema',
            ],
          },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should return zero results', function () {
        expect(this.results.length).toBe(0);
      });
    });

    describe('when a declared schema name has changed', function () {
      beforeAll(function () {
        this.typesToGenerate = [
          'ChangeEntityAddDeclaredSchema',
          'ChangeEntityDeclaredSchema',
          'RenameEntityChangeDeclaredSchema',
        ];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
          detectStructuralChangesMode: 'OVERRIDE',
          typeMetaChanges: {
            baseCodeAnalyzer: {
              touched: this.typesToGenerate,
              revised: {
                [this.typesToGenerate[2]]: {
                  newPkg: 'baseCodeAnalyzer',
                  newType: TH.rename(this.typesToGenerate[2]),
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

      it('should return warnings for the schema name changes', function () {
        var info = [
          {
            prevSchemaName: undefined,
            curSchemaName: TH.schemaName(this.typesToGenerate[0]),
          },
          {
            prevSchemaName: TH.schemaName(this.typesToGenerate[1]),
            curSchemaName: TH.rename(TH.schemaName(this.typesToGenerate[1])),
          },
          {
            prevSchemaName: TH.schemaName(this.typesToGenerate[2]),
            curSchemaName: TH.rename(TH.schemaName(this.typesToGenerate[2])),
          },
        ];

        var expected = [
          {
            stats: { warningCount: 1, value: 1 },
            codeAnalysisMetricMessages: [
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('explicit-table-rename-schema-name').primaryMessage, info[0]),
                info: info[0],
                side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                line: 14,
                column: 1,
              },
            ],
          },
          {
            stats: { warningCount: 1, value: 1 },
            codeAnalysisMetricMessages: [
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('explicit-table-rename-schema-name').primaryMessage, info[1]),
                info: info[1],
                side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                line: 13,
                column: 1,
              },
            ],
          },
          {
            stats: { warningCount: 1, value: 1 },
            codeAnalysisMetricMessages: [
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('explicit-table-rename-schema-name').guessedMessage, info[2]),
                info: info[2],
                side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                line: 13,
                column: 1,
              },
            ],
          },
        ];

        TH.validateProperties(this.results, expected);
      });
    });

    describe('when a declared type key has changed', function () {
      beforeAll(function () {
        this.typesToGenerate = ['ChangeEntityDeclaredTypeKey', 'RenameEntityChangeDeclaredTypeKey'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
          detectStructuralChangesMode: 'OVERRIDE',
          typeMetaChanges: {
            baseCodeAnalyzer: {
              touched: this.typesToGenerate,
              revised: {
                [this.typesToGenerate[1]]: {
                  newPkg: 'baseCodeAnalyzer',
                  newType: TH.rename(this.typesToGenerate[1]),
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

      it('should return warnings for the type key changes', function () {
        var info = [
          {
            prevTypeKey: TH.schemaName(this.typesToGenerate[0]),
            curTypeKey: TH.rename(TH.schemaName(this.typesToGenerate[0])),
          },
          {
            prevTypeKey: TH.schemaName(this.typesToGenerate[1]),
            curTypeKey: TH.rename(TH.schemaName(this.typesToGenerate[1])),
          },
        ];

        var expected = [
          {
            stats: { warningCount: 1, value: 1 },
            codeAnalysisMetricMessages: [
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('explicit-table-rename-type-key').primaryMessage, info[0]),
                info: info[0],
                side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                line: 13,
                column: 1,
              },
            ],
          },
          {
            stats: { warningCount: 1, value: 1 },
            codeAnalysisMetricMessages: [
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('explicit-table-rename-type-key').guessedMessage, info[1]),
                info: info[1],
                side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                line: 13,
                column: 1,
              },
            ],
          },
        ];

        TH.validateProperties(this.results, expected);
      });
    });

    describe('when a renamed Type implicitly changes the schema name', function () {
      beforeAll(function () {
        this.typesToGenerate = ['RenameEntityNoDeclaredSchema'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should return warnings for the renamed Type', function () {
        var info = [
          {
            prevTypeName: this.typesToGenerate[0],
            curTypeName: TH.rename(this.typesToGenerate[0]),
          },
        ];

        var expected = [
          {
            stats: { warningCount: 1, value: 1 },
            codeAnalysisMetricMessages: [
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('implicit-table-rename-schema-name').primaryMessage, info[0]),
                info: info[0],
                side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                line: 13,
                column: 1,
              },
            ],
          },
        ];

        TH.validateProperties(this.results, expected);
      });
    });

    describe('when a persistable Type is removed', function () {
      beforeAll(function () {
        this.typesToGenerate = ['RemoveEntityDeclaredSchema', 'RemoveEntityNoDeclaredSchema'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2' },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should return warnings for the removed Type', function () {
        var info = [{ prevTypeName: this.typesToGenerate[0] }, { prevTypeName: this.typesToGenerate[1] }];

        var expected = [
          {
            stats: { warningCount: 1, value: 1 },
            codeAnalysisMetricMessages: [
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('table-removal').primaryMessage, info[0]),
                info: info[0],
                side: BaseCodeAnalysis.Metric.Message.Side.LEFT,
                line: 13,
                column: 1,
              },
            ],
          },
          {
            stats: { warningCount: 1, value: 1 },
            codeAnalysisMetricMessages: [
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('table-removal').primaryMessage, info[1]),
                info: info[1],
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

    describe("when a field's schema name / schema suffix has changed", function () {
      beforeAll(function () {
        this.typesToGenerate = ['ChangeEntityAndFieldDeclaredSchema'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should return warnings for the Type and field schema changes', function () {
        var info = [
          {
            prevSchemaName: TH.schemaName(this.typesToGenerate[0]),
            curSchemaName: TH.rename(TH.schemaName(this.typesToGenerate[0])),
          },
          {
            prevSchemaName: TH.schemaName('changeSchemaName'),
            curSchemaName: TH.rename(TH.schemaName('changeSchemaName')),
          },
          {
            prevSchemaSuffix: TH.schemaName('changeSchemaSuffix'),
            curSchemaSuffix: TH.rename(TH.schemaName('changeSchemaSuffix')),
          },
        ];

        var expected = [
          {
            stats: { warningCount: 3, value: 3 },
            codeAnalysisMetricMessages: [
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('explicit-table-rename-schema-name').primaryMessage, info[0]),
                info: info[0],
                side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                line: 13,
                column: 1,
              },
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('explicit-column-rename-schema-name').primaryMessage, info[1]),
                info: info[1],
                side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                line: 18,
                column: 3,
              },
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('explicit-column-rename-schema-suffix').primaryMessage, info[2]),
                info: info[2],
                side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                line: 28,
                column: 3,
              },
            ],
          },
        ];

        TH.validateProperties(this.results, expected);
      });
    });

    describe('when a field is renamed or removed', function () {
      beforeAll(function () {
        this.typesToGenerate = ['ChangeEntityRenameFieldRemoveFieldDeclaredSchema'];
        this.resultsSpec = TH.constructResultsSpec({
          prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
          curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
        });

        this.results = metricType.calculateResults(this.resultsSpec);
      });

      it('should not contain internal errors', function () {
        TH.validateNoInternalErrors(this.results);
      });

      it('should return warnings for the renamed and removed fields', function () {
        var info = [
          { prevFieldName: 'removePersistableField' },
          {
            prevSchemaName: TH.schemaName('renameFieldChangeDeclaredSchema'),
            curSchemaName: TH.rename(TH.schemaName('renameFieldChangeDeclaredSchema')),
          },
          {
            prevFieldName: 'renameFieldNoDeclaredSchema',
            curFieldName: TH.rename('renameFieldNoDeclaredSchema'),
          },
        ];

        var expected = [
          {
            stats: { warningCount: 3, value: 3 },
            codeAnalysisMetricMessages: [
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('column-removal').primaryMessage, info[0]),
                info: info[0],
                side: BaseCodeAnalysis.Metric.Message.Side.LEFT,
                line: 34,
                column: 3,
              },
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('explicit-column-rename-schema-name').primaryMessage, info[1]),
                info: info[1],
                side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                line: 36,
                column: 3,
              },
              {
                severity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                message: Str.format(template.forId('implicit-column-rename-schema-name').primaryMessage, info[2]),
                info: info[2],
                side: BaseCodeAnalysis.Metric.Message.Side.RIGHT,
                line: 47,
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
