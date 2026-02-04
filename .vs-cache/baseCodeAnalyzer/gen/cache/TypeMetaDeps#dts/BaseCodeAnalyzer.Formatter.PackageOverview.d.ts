// TypeScript definitions for the C3 type BaseCodeAnalyzer.Formatter.PackageOverview

/**
 * Formatter to get the components of the missing package overview summary section.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalyzer.Formatter.PackageOverview
 */
declare namespace BaseCodeAnalyzer.Formatter {
  export interface IPackageOverview {
  }
}

/**
 * Formatter to get the components of the missing package overview summary section.
 *
 * @remarks this represents a made instance of BaseCodeAnalyzer.Formatter.PackageOverview
 */
declare namespace BaseCodeAnalyzer.Formatter {
  export class PackageOverview {

    /**
     * Function to get the components of the missing package overview summary section.
     *
     * @param processedResults
     *           The processed code analysis metric results to show in the summary message.
     * @returns the components of the missing package overview summary section.
     */
    static summarizeResults(processedResults?: Array_Type<BaseCodeAnalysis.Result.Processed>): BaseCodeAnalyzer.Formatter.SummarySection | null;
  }
}

