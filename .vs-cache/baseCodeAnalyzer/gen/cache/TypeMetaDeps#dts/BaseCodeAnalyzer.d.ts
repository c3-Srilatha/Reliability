// TypeScript definitions for the C3 type BaseCodeAnalyzer

/**
 * Bot to post code analysis reports and review comments on a pull request.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalyzer
 */
declare interface IBaseCodeAnalyzer {

  /**
   * Any packages that comprise the C3 AI Platform. Used for filtering in
   * #collectAppInfo with {@link BaseCodeAnalyzer.CollectAppInfoMode#DEEP}.
   */
  PLATFORM_PACKAGES?: Array_Type<string> | Array<string>;

  /**
   * Any packages that comprise the C3 AI UI Framework. Used for filtering in
   * #collectAppInfo with {@link BaseCodeAnalyzer.CollectAppInfoMode#DEEP}.
   */
  UI_PACKAGES?: Array_Type<string> | Array<string>;

  /**
   * Any packages that comprise the C3 AI Base Toolkit. Used for filtering in
   * #collectAppInfo with {@link BaseCodeAnalyzer.CollectAppInfoMode#DEEP}.
   */
  BASE_TOOLKIT_PACKAGES?: Array_Type<string> | Array<string>;
}

/**
 * Bot to post code analysis reports and review comments on a pull request.
 *
 * @remarks this represents a made instance of BaseCodeAnalyzer
 */
declare class BaseCodeAnalyzer {

  /**
   * Any packages that comprise the C3 AI Platform. Used for filtering in
   * #collectAppInfo with {@link BaseCodeAnalyzer.CollectAppInfoMode#DEEP}.
   */
  readonly PLATFORM_PACKAGES?: Array_Type<string>;
  withPLATFORM_PACKAGES(PLATFORM_PACKAGES: Array_Type<string> | Array<string> | null): BaseCodeAnalyzer;

  /**
   * Any packages that comprise the C3 AI UI Framework. Used for filtering in
   * #collectAppInfo with {@link BaseCodeAnalyzer.CollectAppInfoMode#DEEP}.
   */
  readonly UI_PACKAGES?: Array_Type<string>;
  withUI_PACKAGES(UI_PACKAGES: Array_Type<string> | Array<string> | null): BaseCodeAnalyzer;

  /**
   * Any packages that comprise the C3 AI Base Toolkit. Used for filtering in
   * #collectAppInfo with {@link BaseCodeAnalyzer.CollectAppInfoMode#DEEP}.
   */
  readonly BASE_TOOLKIT_PACKAGES?: Array_Type<string>;
  withBASE_TOOLKIT_PACKAGES(BASE_TOOLKIT_PACKAGES: Array_Type<string> | Array<string> | null): BaseCodeAnalyzer;

  /**
   * Helper function to get the source control host provided a minimal {@link BaseCodeAnalyzer.SourceControlGadget.Spec}.
   *
   * @param spec
   *           The source control gadget spec.
   * @returns an updated {@link BaseCodeAnalyzer.SourceControlGadget.Spec} with the sourceControlHost field populated.
   */
  static getSourceControlSpecWithHost(spec: BaseCodeAnalyzer.SourceControlGadget.Spec): BaseCodeAnalyzer.SourceControlGadget.Spec | null;

  /**
   * Helper function to get a {@link BaseCodeAnalyzer.SourceControlGadget} with the variables provided in the spec.
   *
   * @param spec
   *           The source control gadget spec.
   * @returns a {@link BaseCodeAnalyzer.SourceControlGadget} initialized with the variables provided in the spec.
   */
  static getSourceControlGadget(spec: BaseCodeAnalyzer.SourceControlGadget.Spec): BaseCodeAnalyzer.SourceControlGadget<any, any, any> | null;

  /**
   * Extract all files from a ZIP file containing uninstrumented source code.
   *
   * @param uninstrumentedArtifactZip
   *           See {@link BaseCodeAnalyzer.AnalyzeCodeChangesSpec#uninstrumentedArtifactZip}.
   * @returns a map from file extension to a map from file name to the file.
   *          If `uninstrumentedArtifactZip` is null, an empty map is returned.
   */
  static extractUninstrumentedArtifactFiles(uninstrumentedArtifactZip?: File): Map_Type<string, Map_Type<string, File>> | null;

  /**
   * Helper function to get {@link BaseCodeAnalysis.FileSpec}s for source files (`.c3typ`, `.js`, `.py`)
   * in a given package.
   *
   * @param packageName
   *           The name of the package from which to get matching file specs.
   * @param uninstrumentedArtifactZip
   *           See {@link BaseCodeAnalyzer.AnalyzeCodeChangesSpec#uninstrumentedArtifactZip}.
   *           If this is provided, the file specs will be extracted from this ZIP file instead of
   *           the deployed package.
   * @returns an array of the {@link BaseCodeAnalysis.FileSpec}s for the `.c3typ`, `.js` or `.py`
   *          files for the current package.
   */
  static getFileSpecsForPackage(packageName: string, uninstrumentedArtifactZip?: File): Array_Type<BaseCodeAnalysis.FileSpec> | null;

  /**
   * Function to get the options parameter to be passed to {@link BaseCodeAnalysis#analyzeCodeWithSpec}.
   * The returned JSON object contains the following fields:
   *
   *   - ticketIds: the list of JIRA ticket ids mentioned in the title of the PR for which this build is being run.
   *
   * @param spec
   *           The spec for the analyze code changes function.
   * @returns a list of JIRA ticket ids mentioned in the PR title.
   */
  static getCodeAnalysisOptions(spec?: BaseCodeAnalyzer.AnalyzeCodeChangesSpec): any | null;

  /**
   * Function to get the custom rc files to be used for code analysis. The returned
   * JSON object contains the following fields:
   *
   *   - `customEslintrc`: The custom eslint rc file to be used for code analysis.
   *   - `customPrettierrc`: The custom prettier rc file to be used for code analysis.
   *   - `customPylintrc`: The custom pylint rc file to be used for code analysis.
   *
   * @param gadget
   *           The source control gadget to be used for extracting the custom rc files.
   * @returns a JSON object containing the custom rc files to be used for code analysis.
   */
  static customRcFiles(gadget?: BaseCodeAnalyzer.SourceControlGadget<any, any, any>): any | null;

  /**
   * Function to initialize the code analysis metadata variables to be used across code analysis steps.
   * This function serves as an optimization to prevent multiple GitHub API calls for running code analysis for
   * different packages.
   *
   * @param spec
   *           The source control gadget spec.
   * @returns the {@link BaseCodeAnalyzer.Metadata} values to use for code analysis.
   */
  static initializeCodeAnalysis(spec: BaseCodeAnalyzer.SourceControlGadget.Spec): BaseCodeAnalyzer.Metadata | null;

  /**
   * Function to perform code analysis on code changes made in the commit sha provided as part of the
   * source control gadget spec. This function also sets a pending commit status for the C3 AI Code Analyzer.
   *
   * @param spec
   *           The spec for the analyze code changes function.
   * @returns an array of the {@link BaseCodeAnalysis.Result}s returned by the code analysis function.
   */
  static analyzeCodeChanges(spec: BaseCodeAnalyzer.AnalyzeCodeChangesSpec): BaseCodeAnalysis.Result | null;

  /**
   * Helper function to handle a one-off metric evaluation for the missing documentation metric to see if the
   * docs have been removed. This edge case is missed in the regular evaluation since
   * the function declaration itself could potentially be unchanged while the docs are incorrectly removed.
   *
   * @param changedFileSpec
   *           The changed file diff spec.
   * @param codeAnalysisMetricMessages
   *           The list of code analysis metric messages to filter over.
   * @returns an array of filtered {@link BaseCodeAnalysis.Metric.Message}s that were raised in an incorrectly
   *          removed documentation scenario.
   */
  static getRemovedDocumentationMessages(changedFileSpec?: BaseCodeAnalyzer.SourceControlGadget.FileDiff, codeAnalysisMetricMessages?: Array_Type<BaseCodeAnalysis.Metric.Message>): Array_Type<BaseCodeAnalysis.Metric.Message> | null;

  /**
   * Helper function to filter down the {@link BaseCodeAnalysis.Metric.Message}s down to only the ones applicable
   * to lines changes in the PR for which code analysis is being run.
   *
   * @param fileMetricResults
   *           A flattened list of all {@link BaseCodeAnalysis.Metric.Result}s generated for all files for all packages
   *           built in the CI/CD run.
   * @param baseBranchFileMetricResults
   *           The latest file metric results for files from the base branch.
   * @param fileDiffs
   *           A map from the filepath of modified file to its {@link BaseCodeAnalyzer.SourceControlGadget.FileDiff fileDiff}.
   *           The filepath in map key corresponds to the path of the file in the server's filesystem - not the path in the
   *           source control repository.
   * @returns an array of the {@link BaseCodeAnalysis.Metric.Result.Processed}s corresponding to the changes made in the build
   *         for which code analysis is being run.
   */
  static processFileMetricResults(fileMetricResults?: Array_Type<BaseCodeAnalysis.Metric.Result>, baseBranchFileMetricResults?: Array_Type<BaseCodeAnalysis.Metric.Result>, fileDiffs?: Map_Type<string, BaseCodeAnalyzer.SourceControlGadget.FileDiff>): Array_Type<BaseCodeAnalysis.Metric.Result.Processed> | null;

  /**
   * Helper function to filter down the {@link BaseCodeAnalysis.Metric.Message}s down to only the ones applicable
   * to lines changes in the PR for which code analysis is being run.
   *
   * @param packageMetricResults
   *           The unprocessed package-level metric results.
   * @param baseBranchPackageMetricResults
   *           The latest package metric results from the base branch.
   * @param processedFileMetricResults
   *           The processed file metric results - this is used to get the file-level delta stats.
   * @returns a list of {@link BaseCodeAnalysis.Metric.Result.Processed}s for the provided package.
   */
  static processPackageMetricResults(packageMetricResults?: Array_Type<BaseCodeAnalysis.Metric.Result>, baseBranchPackageMetricResults?: Array_Type<BaseCodeAnalysis.Metric.Result.Processed>, processedFileMetricResults?: Array_Type<BaseCodeAnalysis.Metric.Result.Processed>): Array_Type<BaseCodeAnalysis.Metric.Result.Processed> | null;

  /**
   * Helper function to filter down the {@link BaseCodeAnalysis.Ast.Error}s down to only the ones applicable
   * to the files changed in the PR for which code analysis is being run.
   *
   * @param gadget
   *           The source control gadget to be used for getting encoded anchors.
   *           This is one of the implemented types of the abstract {@link BaseCodeAnalyzer.SourceControlGadget} type.
   * @param invalidAstErrors
   *           The invalid AST errors raised during the base code analysis run.
   * @param fileDiffs
   *           A map from the filepath of modified file to it's {@link BaseCodeAnalyzer.SourceControlGadget.FileDiff fileDiff}.
   *           The filepath in map key corresponds to the path of the file in the server's filesystem - not the path in the
   *           source control repository.
   * @returns an array of the {@link BaseCodeAnalysis.Ast.Error.Processed}s corresponding to the changes made in the build
   *          for which code analysis is being run.
   */
  static processInvalidAstErrors(gadget?: BaseCodeAnalyzer.GitHubGadget, invalidAstErrors?: Array_Type<BaseCodeAnalysis.Ast.Error>, fileDiffs?: Map_Type<string, BaseCodeAnalyzer.SourceControlGadget.FileDiff>): Array_Type<BaseCodeAnalysis.Ast.Error.Processed> | null;

  /**
   * Helper function to process metric results to extract the difference in metric values and filter down to only the
   * messages applicable to changes made in the build for which code analysis is being run.
   *
   * @param gadget
   *           The source control gadget to be used for getting encoded anchors.
   *           This is one of the implemented types of the abstract {@link BaseCodeAnalyzer.SourceControlGadget} type.
   * @param results
   *           A list of {@link BaseCodeAnalysis.Result}s to be processed.
   * @param baseBranchResults
   *           The latest processed {@link BaseCodeAnalysis.Result.Processed results}s of the base branch.
   * @param fileDiffs
   *           A map from the filepath of modified file to it's {@link BaseCodeAnalyzer.SourceControlGadget.FileDiff fileDiff}.
   *           The filepath in map key corresponds to the path of the file in the server's filesystem - not the path in the
   *           source control repository.
   * @param modifiedPackages
   *           A map of the packages modified in this PR. Package-level metric results are only generated for packages that were
   *           modified in this PR.
   * @returns an array of the processed {@link BaseCodeAnalysis.Result}s.
   */
  static processResultsForCodeChanges(gadget?: BaseCodeAnalyzer.GitHubGadget, results?: Array_Type<BaseCodeAnalysis.Result>, baseBranchResults?: Array_Type<BaseCodeAnalysis.Result.Processed>, fileDiffs?: Map_Type<string, BaseCodeAnalyzer.SourceControlGadget.FileDiff>, modifiedPackages?: Map_Type<string, string>): Array_Type<BaseCodeAnalysis.Result.Processed> | null;

  /**
   * The helper function to apply {@link BaseCodeAnalysis.Metric.Directive}s and configs associated with the given {@link BaseCodeAnalysis.Result} to the result.
   *
   * @param codeAnalysisResult
   *           The code analysis result to apply the configurations to.
   * @return The code analysis result with the configurations applied.
   */
  static applyConfigAndDirectives(codeAnalysisResult?: BaseCodeAnalysis.Result): BaseCodeAnalysis.Result | null;

  /**
   * Function to notify the pull request of the code analysis results.
   * This function also sets a success/failure commit status for the C3 AI Code Analyzer based on the outcome
   * of the code analysis.
   *
   * @param spec
   *           The spec for the notify pull request function.
   * @returns an array of the processed {@link BaseCodeAnalysis.Result}s.
   */
  static notifyPullRequest(spec: BaseCodeAnalyzer.NotifyPullRequestSpec): Array_Type<BaseCodeAnalysis.Result.Processed> | null;

  /**
   * Function to to get a trimmed version of the base code analyzer results to minimize storage size when
   * being stored for audit.
   *
   * @param results
   *           The results to push to the centralized repository.
   * @returns the trimmed code analysis results.
   */
  static getTrimmedAuditResults(results?: Array_Type<BaseCodeAnalysis.Result.Processed>): any | null;

  /**
   * Helper function to push processed results to a centralized repository for analysis.
   * Should take in the response from #getTrimmedAuditResults.
   *
   * @param gadget
   *           The source control gadget to use for storing processed results.
   * @param results
   *           The results to push to the centralized repository.
   * @param codeAnalysisStepsWithDuration
   *           The code analysis step duration results to store for performance regression analysis.
   */
  static storeProcessedResults(gadget: BaseCodeAnalyzer.GitHubGadget, results?: Array_Type<any>, codeAnalysisStepsWithDuration?: any): void;

  /**
   * Helper function to push processed results to a centralized repository for analysis.
   *
   * @param spec
   *           The spec that contains the information to be pushed to the centralized repository.
   */
  static storeProcessedResultsWithSpec(spec: BaseCodeAnalyzer.StoreProcessedResultsSpec): void;

  /**
   * Function to notify the non-PR commit of the code analysis results.
   *
   * @param gadget
   *           The source control gadget to use for notifying the commit.
   */
  static notifyNonPullRequestCommit(gadget: BaseCodeAnalyzer.GitHubGadget): void;

  /**
   * Get the names of all packages for which information should be collected through #collectAppInfo.
   *
   * @param spec
   *           Package names are determined by `spec.mode` and `spec.pkgNames`. All other fields
   *           are ignored by this function.
   * @return All packages for which information should be collected.
   */
  static getPkgNamesToCollect(spec?: BaseCodeAnalyzer.CollectAppInfoSpec): Set_Type<string> | null;

  /**
   * @param rootPkgName
   *           The name of the root package to start collecting dependency information from.
   *           Defaults to the root package of the current application.
   * @param resolvedVersionsMap
   *           Packages written to the {@link Pkg.Store} instead of read from
   *           {@link ArtifactHub} will only have the `{major}.{minor}.{patch}`
   *           version, not the full {@link SemanticVersion}.
   *
   *           When this method is being run through a [Release Management](Jarvis) pipeline,
   *           we'll have access to the full semantic version for all packages written to the
   *           {@link Pkg.Store}. A map of {@link Pkg#name} to their full semantic versions
   *           can be provided through this field to ensure that the most accurate version for
   *           each package is collected.
   * @return A map of {@link Pkg#name} to {@link BaseCodeAnalysis.PkgDependencyInfo} for all
   *         dependency packages (including the root package) of the current application.
   */
  static collectPkgDependencyInfos(rootPkgName?: string, resolvedVersionsMap?: Map_Type<string, string>): Map_Type<string, BaseCodeAnalysis.PkgDependencyInfo>;

  /**
   * Helper function to populate {@link BaseCodeAnalysis.TypeInfo#resolvedInheritedFields}.
   *
   * @param typeMeta
   *           The {@link TypeMeta} instance to collect resolved inherited fields for.
   * @return A map of field name to resolved {@link DeclaredFieldType}s for all inherited fields.
   */
  static collectResolvedInheritedFields(typeMeta: TypeMeta): Map_Type<string, Array_Type<DeclaredFieldType>> | null;

  /**
   * Helper function to collect additional information that isn't stored directly on {@link TypeMeta}
   * instances such as Type dependencies (forward and backward).
   *
   * @param typeMetas
   *           A map of Type name to {@link TypeMeta}, usually retrieved through #collectAppInfo.
   * @return A map of Type name to a Type info instance with additional information populated.
   */
  static collectTypeInfos(typeMetas?: Map_Type<string, TypeMeta>): Map_Type<string, BaseCodeAnalysis.TypeInfo> | null;

  /**
   * Function to collect necessary information for performing cross-version analysis on C3 packages.
   * Currently collects:
   *
   *   - All {@link TypeMeta} within an {@link App}s packages, organized by {@link Pkg#name},
   *     [version](SemanticVersion), and Type name.
   *
   * The {@link App} must be in [DEV](AppMode#DEV) or [TEST](AppMode#TEST) mode to use this function.
   *
   * @param spec
   *           Configurations for where to collect package information from and which information
   *           to collect.
   * @return All collected information for the packages specified in `spec`.
   *
   * @see collectAppInfoAndZip
   */
  static collectAppInfo(spec?: BaseCodeAnalyzer.CollectAppInfoSpec): BaseCodeAnalysis.AppInfo;

  /**
   * Wrapper for #collectAppInfo followed by {@link BaseCodeAnalysis.AppInfo#toFile}.
   *
   * @param spec
   *           Configurations for where to collect app information from and which information
   *           to collect.
   * @return A temporary `.zip` file containing the compressed result of #collectAppInfo.
   *         This file is automatically deleted 2 hours after creation.
   */
  static collectAppInfoAndZip(spec?: BaseCodeAnalyzer.CollectAppInfoSpec): File;

  /**
   * Wrapper for #collectAppInfoAndZip that stores the compressed `.zip` file in a
   * centralized repository.
   *
   * @param spec
   *           Configurations for where to collect app information from and which information
   *           to collect.
   * @return An object containing the status and app information (if applicable).
   */
  static collectAppInfoAndStore(spec?: BaseCodeAnalyzer.CollectAppInfoAndStoreSpec): BaseCodeAnalyzer.CollectAppInfoAndStoreResult;

  /**
   * Function to fetch existing {@link BaseCodeAnalysis.AppInfo} for a particular
   * package / [version](SemanticVersion). This function will first attempt to retrieve
   * a local copy from {@link ArtifactHub}. If that's not found, it will attempt to
   * retrieve a remove copy from the centralized code analytics repository. Otherwise,
   * it will return null.
   *
   * @param spec
   *           Configurations for what app information to collect.
   * @return A `.zip` file with the collected app information.
   */
  static fetchAppInfo(spec: BaseCodeAnalyzer.FetchAppInfoSpec): File | null;
}

