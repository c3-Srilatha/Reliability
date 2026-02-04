// TypeScript definitions for the C3 type JarvisBaseToolkit.CodeAnalysisSummary

/**
 * The Type that contains utility functions for running code analysis summary Jarvis step.
 *
 * @remarks this represents a value passed to a method that expects an instance of JarvisBaseToolkit.CodeAnalysisSummary
 */
declare namespace JarvisBaseToolkit {
  export interface ICodeAnalysisSummary {
  }
}

/**
 * The Type that contains utility functions for running code analysis summary Jarvis step.
 *
 * @remarks this represents a made instance of JarvisBaseToolkit.CodeAnalysisSummary
 */
declare namespace JarvisBaseToolkit {
  export class CodeAnalysisSummary {

    /**
     * The function to run code analysis summary in the Jarvis build.
     * The step will collect the code analysis results in the Jarvis build and report the result to corresponding GitHub pull request or commit.
     * If the branch is configured to store the code analysis results on C3 AI Code Analytics Dashboard,
     * the code analysis results will be pushed to the code analysis results to the centralized GitHub repo.
     */
    static runStep(step: Jarvis.Step): Jarvis.Step.Result | null;

    /**
     * Function to return the contents of a Jarvis stash for a given step and key as JSON.
     *
     * @param step
     *           The step to get the stash from.
     * @param key
     *           The key of the stash to get contents for.
     * @returns the contents of the stash as a json.
     */
    static jarvisStashFor(step: Jarvis.Step, key: string): any | null;

    /**
     * The helper function to check if the Type of the given source control rest api is GitHubRestApi.
     *
     * @param restApi
     *           The rest api to check
     * @returns true if the given rest api is GitHubRestApi, false otherwise
     */
    static isGitHubRestApi(restApi: SourceControlRestApi<any>): boolean;

    /**
     * The helper function to generate the customization results based on the passed in top-level customer package and
     * the list of customer packages to perform customization analysis on.
     *
     * @param topLevelCustomerPackage
     *           The top-level customer package ultimately deployed to prod
     * @param customerPackages
     *           The list of customer packages to perform customization analysis on
     * @returns an object containing the customization analysis results
     */
    static getCustomizationResults(topLevelCustomerPackage?: string, customerPackages?: Array_Type<string>): any | null;

    /**
     * The helper function to store code analysis summary report in a Jarvis.Report.
     * If the branch is configured to store the code analysis results on C3 AI Code Analytics Dashboard,
     * the code analysis results will be pushed to the code analysis results to the centralized GitHub repo.
     *
     * @param spec
     *           The spec containing information needed to store the code analysis summary report
     */
    static storeCodeAnalysisSummaryReport(spec?: JarvisBaseToolkit.CodeAnalysisSummary.StoreReportSpec): void;

    /**
     * Function to fetch, summarize and merge code coverage summary results into the package-level results.
     * If no code coverage results are found, the function will return the original package-level results.
     *
     * @param buildId
     *           The build ID of the Jarvis build
     * @param codeAnalysisResults
     *           The package-level code analysis results
     * @returns The updated package results with integrated coverage information.
     */
    static mergeCodeCoverageSummary(buildId: string, codeAnalysisResults?: any): any | null;
  }
}

