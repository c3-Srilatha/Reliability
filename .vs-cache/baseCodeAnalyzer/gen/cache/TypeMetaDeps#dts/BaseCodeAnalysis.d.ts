// TypeScript definitions for the C3 type BaseCodeAnalysis

/**
 * C3 Type for running code analysis on a code base.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalysis
 */
declare interface IBaseCodeAnalysis {
}

/**
 * C3 Type for running code analysis on a code base.
 *
 * @remarks this represents a made instance of BaseCodeAnalysis
 */
declare class BaseCodeAnalysis {

  /**
   * Function to aggregate all the file-level code analysis results into package-level code analysis results.
   *
   * @param packageName
   *           The name of the package to be analyzed.
   * @param fileCodeAnalysisResults
   *           The file-level code analysis results.
   * @returns An array of the aggregated package-level {@link BaseCodeAnalysis.Result}s.
   */
  static aggregateFileResults(packageName: string, fileCodeAnalysisResults?: Array_Type<BaseCodeAnalysis.Metric.Result>): Array_Type<BaseCodeAnalysis.Metric.Result> | null;

  /**
   * Function to apply the provided {@link BaseCodeAnalysis.Config} to all [file metric results](BaseCodeAnalysis.Result#fileMetricResults).
   * Any [config overrides](BaseCodeAnalysis.Config#overrides) will be applied based on
   * [itemName](BaseCodeAnalysis.Metric.Result#itemName).
   *
   * @param result
   *           The result to apply the config to, usually produced by #analyzeCodeWithSpec.
   *           This function reads from {@link BaseCodeAnalysis.Result#codeAnalysisConfig}.
   * @return The result with updated [fileMetricResults](BaseCodeAnalysis.Result#fileMetricResults)
   *         and aggregated [packageMetricResults](BaseCodeAnalysis.Result#packageMetricResults)
   *         based on the provided config.
   */
  static applyConfigToResult(result: BaseCodeAnalysis.Result): BaseCodeAnalysis.Result;

  /**
   * Helper function to parse the {@link BaseCodeAnalysis.Metric.Directive}s from the provided {@link BaseCodeAnalysis.FileSpec}s.
   *
   * @param fileSpecs
   *           The file specs to parse for directives.
   * @returns A map of [package path](BaseCodeAnalysis.FileSpec#filePkgPathUrl) to
   *          the directives parsed from that file spec.
   */
  static parseMetricDirectivesFromFileSpecs(fileSpecs?: Array_Type<BaseCodeAnalysis.FileSpec>): Map_Type<string, Array_Type<BaseCodeAnalysis.Metric.Directive>> | null;

  /**
   * Helper function to update the given {@link BaseCodeAnalysis.Metric.Result} based on the
   * provided {@link BaseCodeAnalysis.Metric.Directive}s.
   *
   * @param metricMessages
   *           The array of {@link BaseCodeAnalysis.Metric.Message}s to be updated.
   * @param metricCode
   *           The metric code that the messages are associated with.
   * @param directives
   *           The {@link BaseCodeAnalysis.Metric.Directive}s to be applied to the metric messages.
   * @returns The updated metric result.
   */
  static applyDirectivesToMetricResult(metricMessages?: Array_Type<any> | Array_Type<BaseCodeAnalysis.Metric.Message>, metricCode?: string, directives?: Array_Type<BaseCodeAnalysis.Metric.Directive>): any | null;

  /**
   * Calls child actions to generate file-level code _quality_ analysis results for the provided
   * files. All {@link BaseCodeAnalysis.Metric}s are checked.
   *
   * @param spec
   *           Options for what files to analyze and how to do so.
   * @returns A single {@link BaseCodeAnalysis.Result} for the package.
   *
   * @see analyzeCodeWithSpec
   */
  static analyzeCodeQuality(spec?: BaseCodeAnalysis.AnalyzeCodeQualitySpec): BaseCodeAnalysis.Result | null;

  /**
   * Calls child actions to generate file-level code analysis for the provided files. If any
   * [file specs](BaseCodeAnalysis.AnalyzeCodeSpec#fileSpecs) are provided, all {@link BaseCodeAnalysis.Metric}s
   * are checked. If [prevAppInfo](BaseCodeAnalysis.AnalyzeCodeSpec#prevAppInfo) and
   * [curAppInfo](BaseCodeAnalysis.AnalyzeCodeSpec#curAppInfo) are provided, all {@link BaseCodeAnalysis.VersionDiff.Metric}s
   * are checked.
   *
   * @param spec
   *           Options for what files to analyze and how to do so.
   * @returns A single {@link BaseCodeAnalysis.Result} for the package.
   */
  static analyzeCodeWithSpec(spec?: BaseCodeAnalysis.AnalyzeCodeSpec): BaseCodeAnalysis.Result | null;

  /**
   * Function to analyze the current package.
   * This function is useful for running code analysis on the current package on-demand.
   * Only code _quality_ can be analyzed with this helper function. To compare versions of
   * packages through the {@link BaseCodeAnalysis.VersionDiff.Metric}s, use #analyzeCodeWithSpec.
   *
   * @returns The {@link BaseCodeAnalysis.Result} for the current package.
   */
  static analyzeCurrentPackage(): BaseCodeAnalysis.Result | null;

  /**
   * Function to analyze the package with the provided name.
   * This function is useful for running code analysis on a specific package on-demand.
   * Only code _quality_ can be analyzed with this helper function. To compare versions of
   * packages through the {@link BaseCodeAnalysis.VersionDiff.Metric}s, use #analyzeCodeWithSpec.
   *
   * @param packageName
   *           The name of the package to be analyzed.
   * @returns The {@link BaseCodeAnalysis.Result} for the package with the provided name.
   */
  static analyzePackage(packageName: string): BaseCodeAnalysis.Result | null;
}

