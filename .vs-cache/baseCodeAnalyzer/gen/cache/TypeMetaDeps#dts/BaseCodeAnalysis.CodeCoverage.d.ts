// TypeScript definitions for the C3 type BaseCodeAnalysis.CodeCoverage

/**
 * Type to collect code coverage metadata and summarize code coverage results for observability.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalysis.CodeCoverage
 */
declare namespace BaseCodeAnalysis {
  export interface ICodeCoverage {
  }
}

/**
 * Type to collect code coverage metadata and summarize code coverage results for observability.
 *
 * @remarks this represents a made instance of BaseCodeAnalysis.CodeCoverage
 */
declare namespace BaseCodeAnalysis {
  export class CodeCoverage {

    /**
     * Function to gather metadata information related to code coverage. This includes the following:
     * - The code coverage instrumentation spec to monitor which file paths are being excluded.
     * - The list of files being excluded under those paths.
     *
     * This information is gathered for accountability and observability purposes.
     *
     * @param packageName
     *           The name of the package for which to gather code coverage metadata.
     * @return Coverage metadata information.
     */
    static collectCodeCoverageMetadata(packageName: string): BaseCodeAnalysis.CodeCoverage.Metadata | null;

    /**
     * Function to summarize code coverage results.
     *
     * The code coverage results, as reported by Jarvis, include a json object keyed by the file path of the
     * instrumented file path and the value includes the coverage statistics for lines, branches, functions, and
     * statements that are covered. The results includes files from all packages built in that Jarvis run.
     *
     * Note that we only stores files under 80% coverage to save space.
     *
     * @param codeCoverageResults
     *           The code coverage results as reported by Jarvis. The data type is native to avoid conversion to a
     *           TurboJS object which cannot be used with lodash functions.
     * @return Summarized code coverage results.
     */
    static summarizeCodeCoverageResults(codeCoverageResults?: any): any | null;
  }
}

