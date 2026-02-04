/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const testName = 'test_BaseCodeAnalysis.VersionDiff_compareVersions';

describe(testName, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(testName);

    this.packageName = 'baseCodeAnalyzer';
    this.typesToGenerate = ['ChangeValueModifiers', 'ChangeInheritedValueModifiers'];
    this.resultsSpec = BaseCodeAnalysis.VersionDiff.TestHelper.constructResultsSpec({
      prevAppInfoSpec: { version: '1', typesToGenerate: this.typesToGenerate },
      curAppInfoSpec: { version: '2', typesToGenerate: this.typesToGenerate },
    });
    this.resolvedVersions = _.omit(
      _.transform(
        C3.pkg().resolvedVersions(),
        (acc, resolvedVersion) => {
          var [pkgName, version] = resolvedVersion.split(':');
          acc[pkgName] = version;
        },
        {}
      ),
      this.packageName
    );

    this.subTypeNamesSpy = TestApi.spyOn(this.ctx, 'TypeMeta', 'subTypeNames')
      .returnValue([
        'BaseCodeAnalysis.VersionDiff.Metric.ValueModifierChange',
        'BaseCodeAnalysis.VersionDiff.Metric.Removal',
      ])
      .register();

    this.mockValueModifierChangeResults = [
      BaseCodeAnalysis.Metric.Result.make({
        metricCode: BaseCodeAnalysis.VersionDiff.Metric.Code.VALUE_MODIFIER_CHANGE,
        itemName: `meta://${this.packageName}/test/src/helpers/versionDiff/testTypes/valueTypeChange/${this.typesToGenerate[0]}.c3typ`,
        kind: BaseCodeAnalysis.Result.Kind.FILE,
        codeAnalysisMetricMessages: [
          {
            severity: BaseCodeAnalysis.Metric.Message.Severity.ERROR,
            line: 9,
            column: 3,
            message: 'This is an error message.',
            info: {
              curTypeName: 'ChangeValueModifiers',
              curFieldName: 'field1',
              prevModifier: 'NONE',
              curModifier: ValueModifier.NON_EMPTY,
              isBreaking: true,
              changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.CHANGED,
              isBeta: true,
              isPrivate: false,
              isUi: false,
              isTest: false,
            },
          },
          {
            severity: BaseCodeAnalysis.Metric.Message.Severity.ERROR,
            line: 10,
            column: 3,
            message: 'This is an error message.',
            info: {
              curTypeName: 'ChangeValueModifiers',
              curFieldName: 'field2',
              prevModifier: 'NONE',
              curModifier: ValueModifier.NON_EMPTY,
              isBreaking: true,
              changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.CHANGED,
              isBeta: false,
              isPrivate: true,
              isUi: false,
              isTest: false,
            },
          },
          {
            severity: BaseCodeAnalysis.Metric.Message.Severity.ERROR,
            line: 11,
            column: 3,
            message: 'This is an error message.',
            info: {
              curTypeName: 'ChangeValueModifiers',
              curFieldName: 'field3',
              prevModifier: 'NONE',
              curModifier: ValueModifier.NON_EMPTY,
              isBreaking: true,
              changeKind: BaseCodeAnalysis.VersionDiff.ChangeKind.CHANGED,
              isBeta: false,
              isPrivate: false,
              isUi: false,
              isTest: false,
            },
          },
        ],
        stats: { errorCount: 3, warningCount: 0, suggestionCount: 0, value: 3 },
      }),
      BaseCodeAnalysis.Metric.Result.make({
        metricCode: BaseCodeAnalysis.VersionDiff.Metric.Code.VALUE_MODIFIER_CHANGE,
        itemName: `meta://${this.packageName}/test/src/helpers/versionDiff/testTypes/valueTypeChange/${this.typesToGenerate[1]}.c3typ`,
        kind: BaseCodeAnalysis.Result.Kind.FILE,
        stats: { errorCount: 0, warningCount: 0, suggestionCount: 0, value: 0 },
        internalErrorMessage: 'This file has some error.',
      }),
    ];
    this.valueModifierChangeSpy = TestApi.spyOn(
      this.ctx,
      'BaseCodeAnalysis.VersionDiff.Metric.ValueModifierChange',
      'calculateResults'
    )
      .returnValue(this.mockValueModifierChangeResults)
      .register();
    this.removalSpy = TestApi.spyOn(this.ctx, 'BaseCodeAnalysis.VersionDiff.Metric.Removal', 'calculateResults')
      .callFake(
        Lambda.fromJsFunc((_action, _input) => {
          throw new Error('Internal server error!');
        })
      )
      .register();
  });

  afterAll(function () {
    this.subTypeNamesSpy.unregister();
    this.valueModifierChangeSpy.unregister();
    this.removalSpy.unregister();
    TestApi.teardown(this.ctx);
  });

  describe('when no options are specified', function () {
    beforeAll(function () {
      this.results = BaseCodeAnalysis.VersionDiff.compareVersions({
        prevAppInfo: this.resultsSpec.prevAppInfo,
        curAppInfo: this.resultsSpec.curAppInfo,
      });

      this.expectedResults = [
        BaseCodeAnalysis.Result.make({
          packageName: this.packageName,
          semanticVersion: '2.0.0',
          previousSemanticVersion: '1.0.0',
          dependencyVersions: this.resolvedVersions,
          previousDependencyVersions: this.resolvedVersions,
          fileMetricResults: [
            {
              metricCode: BaseCodeAnalysis.VersionDiff.Metric.Code.VALUE_MODIFIER_CHANGE,
              itemName: `meta://${this.packageName}/test/src/helpers/versionDiff/testTypes/valueTypeChange/${this.typesToGenerate[0]}.c3typ`,
              kind: BaseCodeAnalysis.Result.Kind.FILE,
              stats: {
                errorCount: 3,
                warningCount: 0,
                suggestionCount: 0,
                value: 3,
              },
            },
          ],
          packageMetricResults: [
            {
              metricCode: BaseCodeAnalysis.VersionDiff.Metric.Code.VALUE_MODIFIER_CHANGE,
              itemName: this.packageName,
              kind: BaseCodeAnalysis.Result.Kind.PACKAGE,
              stats: {
                errorCount: 3,
                warningCount: 0,
                suggestionCount: 0,
                value: 3,
              },
            },
          ],
          erroredFileMetricResults: [
            {
              metricCode: BaseCodeAnalysis.VersionDiff.Metric.Code.VALUE_MODIFIER_CHANGE,
              itemName: `meta://${this.packageName}/test/src/helpers/versionDiff/testTypes/valueTypeChange/${this.typesToGenerate[1]}.c3typ`,
              kind: BaseCodeAnalysis.Result.Kind.FILE,
              stats: {
                errorCount: 0,
                warningCount: 0,
                suggestionCount: 0,
                value: 0,
              },
              internalErrorMessage: 'This file has some error.',
            },
          ],
          erroredPackageMetricResults: [
            {
              metricCode: BaseCodeAnalysis.VersionDiff.Metric.Code.REMOVAL,
              itemName: this.packageName,
              kind: BaseCodeAnalysis.Result.Kind.PACKAGE,
              stats: { errorCount: 0 },
            },
          ],
        }),
      ];
    });

    it('returns the correct results', function () {
      BaseCodeAnalysis.VersionDiff.TestHelper.validateProperties(this.results, this.expectedResults);
    });

    describe('and the app info is compressed', function () {
      beforeAll(function () {
        var prevAppInfo = TmpFileSystem.createTmpFile({ ttl: 60 * 5 })
          .writeString(this.resultsSpec.prevAppInfo.toTypedJsonString())
          .zip({ deleteOriginal: true });
        var curAppInfo = TmpFileSystem.createTmpFile({ ttl: 60 * 5 })
          .writeString(this.resultsSpec.curAppInfo.toTypedJsonString())
          .zip({ deleteOriginal: true });

        this.results = BaseCodeAnalysis.VersionDiff.compareVersions({ prevAppInfo, curAppInfo });
      });

      it('returns the correct results', function () {
        BaseCodeAnalysis.VersionDiff.TestHelper.validateProperties(this.results, this.expectedResults);
      });
    });
  });
});
