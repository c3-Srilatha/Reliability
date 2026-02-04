// TypeScript definitions for the C3 type BaseCodeAnalyzer.Formatter

/**
 * Helper methods for {@link BaseCodeAnalyzer} to format comments being posted on PRs.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalyzer.Formatter
 */
declare namespace BaseCodeAnalyzer {
  export interface IFormatter {

    /**
     * A comment string to be appended to the top of every comment posted by C3 AI Code Analyzer to
     * help differentiate from comments posted by the actual author.
     */
    CODE_ANALYZER_IDENTIFIER?: string;
  }
}

/**
 * Helper methods for {@link BaseCodeAnalyzer} to format comments being posted on PRs.
 *
 * @remarks this represents a made instance of BaseCodeAnalyzer.Formatter
 */
declare namespace BaseCodeAnalyzer {
  export class Formatter {

    /**
     * A comment string to be appended to the top of every comment posted by C3 AI Code Analyzer to
     * help differentiate from comments posted by the actual author.
     */
    readonly CODE_ANALYZER_IDENTIFIER?: string;
    withCODE_ANALYZER_IDENTIFIER(CODE_ANALYZER_IDENTIFIER: string | null): BaseCodeAnalyzer.Formatter;

    /**
     * Helper to mark a message with the {@link #CODE_ANALYZER_IDENTIFIER} at the top of the message.
     *
     * @param message
     *           The message to be market.
     * @returns a message marked with {@link #CODE_ANALYZER_IDENTIFIER}.
     */
    static markMessageWithIdentifier(message: string): string;

    /**
     * Helper to remove indentation from the beginning of the message. Useful
     * for ensure the message template is readable in code but doesn't have
     * undesired indentation.
     *
     * @param message
     *           The message to be de-indented.
     * @returns the de-indented message.
     */
    static removeIndentation(message: string): string;

    /**
     * Helper to format a metric code to be displayed in the comment.
     *
     * @param metricCode
     *           The metric code to format.
     * @return The metric code wrapped in a code span. If there is a [documentation URL](BaseCodeAnalysis.Metric.Meta.Docs#url)
     *         for the metric, the code span will also be a link to the documentation.
     */
    static formatMetricCode(metricCode: string): string;

    /**
     * Helper to format a comment by adding the appropriate icon based on message severity.
     *
     * @param message
     *           The processed metric message to format.
     * @param metricCode
     *           If provided, the [formatted metric code](formatMetricCode) will be included
     *           between the icon and the message.
     * @returns a message formatted to include the appropriate icon based on severity.
     */
    static formatMessageWithSeverity(message?: BaseCodeAnalysis.Metric.Message.Processed, metricCode?: string): string;

    /**
     * Function to get the summary message section to be posted on the PR for which code analysis is being
     * performed.
     *
     * @param summaryMessageSections
     *           The summary sections used to generate the full summary message.
     * @returns the summary message to be posted on the PR.
     */
    static getCodeAnalysisSummaryMessage(summaryMessageSections?: Array_Type<BaseCodeAnalyzer.Formatter.SummarySection>): string;

    /**
     * Function to get the message to be posted in the body of the review comment. Posts information about how many new
     * comments need to be addressed and points to previous comments that are yet to be addressed.
     *
     * @param processedResults
     *           The processed results from which to extract the messages to be posted on the PR as inline comments.
     * @param anchors
     *           The file- and line-level anchors to redirect users to the appropriate diff the review comment.
     * @param newCommentCount
     *           The number of new comments being posted as part of this review.
     * @returns the review comment body to be posted on the PR.
     */
    static getReviewCommentBody(processedResults?: Array_Type<BaseCodeAnalysis.Result.Processed>, anchors?: BaseCodeAnalyzer.SourceControlGadget.Anchors, newCommentCount?: number): string;
  }
}

