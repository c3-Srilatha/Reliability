// TypeScript definitions for the C3 type BaseCodeAnalyzer.TestHelper

/**
 * Type to store helper functions to test functionality for {@link BaseCodeAnalyzer}.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalyzer.TestHelper
 */
declare namespace BaseCodeAnalyzer {
  export interface ITestHelper {
  }
}

/**
 * Type to store helper functions to test functionality for {@link BaseCodeAnalyzer}.
 *
 * @remarks this represents a made instance of BaseCodeAnalyzer.TestHelper
 */
declare namespace BaseCodeAnalyzer {
  export class TestHelper {

    /**
     * Function to return a mock compare result for testing {@link BaseCodeAnalyzer#getFileSpecsForPackage}.
     *
     * @param instrumented
     *           Prefix all files with `UNINSTRUMENTED` on the first line to mock an uninstrumented ZIP
     *           file passed to {@link BaseCodeAnalyzer.AnalyzeCodeChangesSpec#uninstrumentedArtifactZip}.
     * @returns the file specs of the mock files created in the 'baseCodeAnalyzerIntegTest' package.
     */
    static getExpectedFileSpecs(uninstrumented?: boolean = 'false'): Array_Type<BaseCodeAnalysis.FileSpec> | null;

    /**
     * Function to return a mock code analysis result for testing {@link BaseCodeAnalyzer#processResultsForCodeChanges}.
     *
     * @returns mock code analysis metric results.
     */
    static getProcessResultsTestMockResults(): Array_Type<BaseCodeAnalysis.Result> | null;

    /**
     * Function to return a mock base branch code analysis results for testing
     * {@link BaseCodeAnalyzer#processResultsForCodeChanges}.
     *
     * @returns mock base branch code analysis results.
     */
    static getProcessResultsTestBaseBranchMockResults(): Array_Type<BaseCodeAnalysis.Result.Processed> | null;

    /**
     * Function to return a mock compare result for testing {@link BaseCodeAnalyzer#processResultsForCodeChanges}.
     *
     * @returns mock file diffs for files.
     */
    static getProcessResultsTestMockFileDiffs(): Map_Type<string, BaseCodeAnalyzer.SourceControlGadget.FileDiff> | null;

    /**
     * Function to return a mock compare result for testing {@link BaseCodeAnalyzer#processResultsForCodeChanges}.
     *
     * @returns expected filtered {@link BaseCodeAnalysis.Metric.Message}s when the mock code analysis
     *          metric results and mock file diffs from #getProcessResultsTestMockResults and #getProcessResultsTestMockFileDiffs
     *          are passed into the {@link BaseCodeAnalyzer#processResultsForCodeChanges} function.
     */
    static getProcessResultsTestExpectedResults(): Array_Type<BaseCodeAnalysis.Result.Processed> | null;

    /**
     * Function to return a mock compare result for testing {@link BaseCodeAnalyzer#notifyPullRequest}.
     *
     * @param withError
     *           Boolean to indicate whether the results should include an message with 'ERROR' severity.
     * @returns mock code analysis metric results for file in the 'baseCodeAnalyzerIntegTest' package.
     */
    static getNotifyPullRequestMockResults(withError?: boolean): Array_Type<BaseCodeAnalysis.Result> | null;

    /**
     * Function to get mock base branch results to be passed into {@link BaseCodeAnalyzer#notifyPullRequest}.
     *
     * @returns the mock processed results from the base branch.
     */
    static getNotifyPullRequestMockBaseBranchResults(): Array_Type<BaseCodeAnalysis.Result.Processed> | null;

    /**
     * Function to return a mock compare result for testing {@link BaseCodeAnalyzer#notifyPullRequest}.
     *
     * @returns mock file diffs for files changed in the 'baseCodeAnalyzerIntegTest' package.
     */
    static getNotifyPullRequestMockFileDiffs(): Map_Type<string, BaseCodeAnalyzer.SourceControlGadget.FileDiff> | null;

    /**
     * Function to return a mock compare result for testing {@link BaseCodeAnalyzer#notifyPullRequest}.
     *
     * @param withError
     *           Boolean to indicate whether the results should include an message with 'ERROR' severity.
     * @returns expected filtered {@link BaseCodeAnalysis.Metric.Message.Processed}s when the mock code analysis metric
     *          results and mock file diffs from {@link #getNotifyPullRequestMockResults} and
     *          {@link getNotifyPullRequestMockFileDiffs} are passed into
     *          the {@link BaseCodeAnalyzer#notifyPullRequest} function.
     */
    static getNotifyPullRequestExpectedComments(withError?: boolean): Array_Type<BaseCodeAnalysis.Metric.Message.Processed> | null;

    /**
     * Function to get the expected processed results returned by {@link BaseCodeAnalyzer#notifyPullRequest}.
     *
     * @param withError
     *           Boolean to indicate whether the results should include an message with 'ERROR' severity.
     * @returns expected processed results.
     */
    static getNotifyPullRequestExpectedResults(withError?: boolean): Array_Type<BaseCodeAnalysis.Result.Processed> | null;
  }
}

