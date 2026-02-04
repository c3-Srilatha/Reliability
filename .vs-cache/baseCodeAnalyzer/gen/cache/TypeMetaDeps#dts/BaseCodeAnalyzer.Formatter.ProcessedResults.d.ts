// TypeScript definitions for the C3 type BaseCodeAnalyzer.Formatter.ProcessedResults

/**
 * Formatter to get the components of the static code analysis processed results summary section.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalyzer.Formatter.ProcessedResults
 */
declare namespace BaseCodeAnalyzer.Formatter {
  export interface IProcessedResults {
  }
}

/**
 * Formatter to get the components of the static code analysis processed results summary section.
 *
 * @remarks this represents a made instance of BaseCodeAnalyzer.Formatter.ProcessedResults
 */
declare namespace BaseCodeAnalyzer.Formatter {
  export class ProcessedResults {

    /**
     * Helper to get a HTML table rows for a list of changes by severity for a metric.
     *
     * @param changedSeverities
     *           The objects representing changed severities.
     * @returns an HTML string with the changed metric values grouped by severity and packaged into HTML rows.
     */
    static getHtmlTableRowForMetric(changedSeverities?: Array_Type<any>): string;

    /**
     * Helper to get changed package metric results information into a human-readable format that can be
     * presented through a HTML table.
     *
     * @param processedResults
     *           The processed code analysis metric results.
     * @returns an object representing the formatted information.
     */
    static getPackageResultContentInfo(processedResults?: Array_Type<BaseCodeAnalysis.Result.Processed>): any;

    /**
     * Helper to get the message to show when a package no metric results.
     *
     * @returns the message to show when a package has no metric results.
     */
    static getNoPackageResultsMessage(): string;

    /**
     * Helper to get the message to show when a package no metric results.
     *
     * @param packageResultContentInfo
     *           The processed code analysis metric results to show in the summary message.
     * @returns the title to be shown in the package results section.
     */
    static getPackageResultTitle(packageResultContentInfo?: any): string;

    /**
     * Helper to get metadata about the change in a result's [stats](BaseCodeAnalysis.Metric.Result.Processed#stats).
     *
     * @param processedResult
     *           The processed code analysis metric results to show in the summary message.
     * @param fieldName
     *           Either `errorCount` or `warningCount`.
     * @returns the title to be shown in the package results section.
     */
    static getChangedPkgMetricResultInfo(processedResult?: BaseCodeAnalysis.Metric.Result.Processed, fieldName?: string): any;

    /**
     * Helper to get the components for the static code analysis results summary section.
     *
     * @param processedResults
     *           The processed code analysis metric results to show in the summary message.
     * @returns the components for the static code analysis results summary section.
     */
    static summarizeResults(processedResults?: Array_Type<BaseCodeAnalysis.Result.Processed>): BaseCodeAnalyzer.Formatter.SummarySection | null;
  }
}

