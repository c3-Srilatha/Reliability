// TypeScript definitions for the C3 type BaseCodeAnalyzer.Formatter.CodeAnalysisErrors

/**
 * Formatter to get the components of the static code analysis processed results summary section.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalyzer.Formatter.CodeAnalysisErrors
 */
declare namespace BaseCodeAnalyzer.Formatter {
  export interface ICodeAnalysisErrors {
  }
}

/**
 * Formatter to get the components of the static code analysis processed results summary section.
 *
 * @remarks this represents a made instance of BaseCodeAnalyzer.Formatter.CodeAnalysisErrors
 */
declare namespace BaseCodeAnalyzer.Formatter {
  export class CodeAnalysisErrors {

    /**
     * Helper to get the file-/package-level errors components for the static code analysis error summary content.
     *
     * @param title
     *           The title of the item-level section.
     * @param kind
     *           The item kind.
     * @param results
     *           The file/package-level metric results that errored out during code analysis.
     * @returns the components for the static code analysis results summary section.
     */
    static getHtmlTableForErrors(title?: string, kind?: string, results?: Array_Type<BaseCodeAnalysis.Metric.Result>): string | null;

    /**
     * Helper to get the file-level errors components for the static code analysis error summary content.
     *
     * @param erroredFileMetricResults
     *           The file metric results that errored out during code analysis.
     * @returns the content string for the file-level errors for the static code analysis errors summary content.
     */
    static getHtmlTableForFileErrors(erroredFileMetricResults?: Array_Type<BaseCodeAnalysis.Metric.Result>): string | null;

    /**
     * Helper to get the package-level errors components for the static code analysis error summary content.
     *
     * @param erroredPackageMetricResults
     *           The package metric results that errored out during code analysis.
     * @returns the content string for the package-level errors for the static code analysis errors summary content.
     */
    static getHtmlTableForPackageErrors(erroredPackageMetricResults?: Array_Type<BaseCodeAnalysis.Metric.Result>): string | null;

    /**
     * Helper to get the content components for the static code analysis errors summary section.
     *
     * @param erroredFileMetricResults
     *           The file metric results that errored out during code analysis.
     * @param erroredPackageMetricResults
     *           The package metric results that errored out during code analysis.
     * @returns the content string for the static code analysis errors summary section.
     */
    static getSummaryContent(erroredFileMetricResults?: Array_Type<BaseCodeAnalysis.Metric.Result>, erroredPackageMetricResults?: Array_Type<BaseCodeAnalysis.Metric.Result>): string | null;

    /**
     * Helper to get the components for the static code analysis errors summary section.
     *
     * @param processedResults
     *           The processed code analysis results whose errors to show in the summary message.
     * @returns the components for the static code analysis errors summary section.
     */
    static summarizeResults(processedResults?: Array_Type<BaseCodeAnalysis.Result.Processed>): BaseCodeAnalyzer.Formatter.SummarySection | null;
  }
}

