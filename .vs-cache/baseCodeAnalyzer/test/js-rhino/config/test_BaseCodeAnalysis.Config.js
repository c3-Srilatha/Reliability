/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const testName = 'test_BaseCodeAnalysis.Config';

describe(testName, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(testName);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::resolveConfigForFile', function () {
    describe('when there are no overrides', function () {
      beforeAll(function () {
        this.config = BaseCodeAnalysis.Config.make({
          metricConfigs: {
            [BaseCodeAnalysis.Metric.BaseCode.BROKEN_DOCUMENTATION_LINKS]: {
              maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
            },
            [BaseCodeAnalysis.Metric.Code.PSR_REMOVE_ALL]: {
              maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.ERROR,
            },
          },
          versionDiffMetricConfigs: {
            [BaseCodeAnalysis.VersionDiff.Metric.Code.REMOVAL]: {
              maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.ERROR,
              suppressPrivate: true,
            },
          },
        });

        this.resolvedConfig = this.config.resolveConfigForFile('meta://baseCodeAnalyzer/src/SomeType.js');
      });

      it('returns the config for any file path', function () {
        expect(this.resolvedConfig).toEqual(this.config);
      });
    });

    describe('when there are overrides', function () {
      beforeAll(function () {
        this.config = BaseCodeAnalysis.Config.make({
          metricConfigs: {
            [BaseCodeAnalysis.Metric.BaseCode.BROKEN_DOCUMENTATION_LINKS]: {
              maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
            },
            [BaseCodeAnalysis.Metric.Code.PSR_REMOVE_ALL]: {
              maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.ERROR,
              additionalConfigs: {
                key1: 'value1',
                key2: 'value2',
              },
            },
          },
          versionDiffMetricConfigs: {
            [BaseCodeAnalysis.VersionDiff.Metric.Code.REMOVAL]: {
              maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.ERROR,
              suppressPrivate: true,
            },
          },
          overrides: [
            {
              files: ['baseCodeAnalyzer/test/**/*.{js,c3typ}'],
              metricConfigs: {
                [BaseCodeAnalysis.Metric.BaseCode.PSR_REMOVE_ALL]: {
                  maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                  additionalConfigs: {
                    key1: 'overrideValue1',
                  },
                },
                [BaseCodeAnalysis.Metric.BaseCode.ESLINT]: {
                  maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                },
              },
              versionDiffMetricConfigs: {
                [BaseCodeAnalysis.VersionDiff.Metric.Code.REMOVAL]: {
                  maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                  suppressPrivate: false,
                },
              },
            },
            {
              files: ['test_SomeType.js'],
              metricConfigs: {
                [BaseCodeAnalysis.Metric.Code.PSR_REMOVE_ALL]: {
                  maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.SUGGESTION,
                },
              },
            },
          ],
        });
      });

      describe('and the file path does not match the override', function () {
        beforeAll(function () {
          this.resolvedConfig = this.config.resolveConfigForFile('meta://baseCodeAnalyzer/src/SomeType.js');
        });

        it('returns the config without the override applied', function () {
          expect(this.resolvedConfig).toEqual(this.config.withoutOverrides());
        });
      });

      describe('and the file path matches the override', function () {
        beforeAll(function () {
          this.resolvedConfig = this.config.resolveConfigForFile(
            'meta://baseCodeAnalyzer/test/js-rhino/test_BaseCodeAnalysis.Config.js'
          );
        });

        it('returns the config with the override applied', function () {
          BaseCodeAnalysis.TestHelper.validateProperties(this.resolvedConfig, {
            metricConfigs: {
              [BaseCodeAnalysis.Metric.BaseCode.BROKEN_DOCUMENTATION_LINKS]: {
                maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
              },
              [BaseCodeAnalysis.Metric.Code.PSR_REMOVE_ALL]: {
                maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                additionalConfigs: {
                  key1: 'overrideValue1',
                  key2: 'value2',
                },
              },
              [BaseCodeAnalysis.Metric.BaseCode.ESLINT]: {
                maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
              },
            },
            versionDiffMetricConfigs: {
              [BaseCodeAnalysis.VersionDiff.Metric.Code.REMOVAL]: {
                maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                suppressPrivate: false,
              },
            },
          });
        });
      });

      describe('and the file path matches multiple overrides', function () {
        beforeAll(function () {
          this.resolvedConfig = this.config.resolveConfigForFile(
            'meta://baseCodeAnalyzer/test/js-rhino/test_SomeType.js'
          );
        });

        it('returns the config with all matching overrides applies in the correct order', function () {
          BaseCodeAnalysis.TestHelper.validateProperties(this.resolvedConfig, {
            metricConfigs: {
              [BaseCodeAnalysis.Metric.BaseCode.BROKEN_DOCUMENTATION_LINKS]: {
                maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
              },
              [BaseCodeAnalysis.Metric.Code.PSR_REMOVE_ALL]: {
                maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.SUGGESTION,
                additionalConfigs: {
                  key1: 'overrideValue1',
                  key2: 'value2',
                },
              },
              [BaseCodeAnalysis.Metric.BaseCode.ESLINT]: {
                maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
              },
            },
            versionDiffMetricConfigs: {
              [BaseCodeAnalysis.VersionDiff.Metric.Code.REMOVAL]: {
                maxSeverity: BaseCodeAnalysis.Metric.Message.Severity.WARNING,
                suppressPrivate: false,
              },
            },
          });
        });
      });
    });
  });
});
