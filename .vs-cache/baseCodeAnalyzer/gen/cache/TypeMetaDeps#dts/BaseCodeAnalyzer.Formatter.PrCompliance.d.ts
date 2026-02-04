// TypeScript definitions for the C3 type BaseCodeAnalyzer.Formatter.PrCompliance

/**
 * Formatter to get the components of the PR compliance summary section.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalyzer.Formatter.PrCompliance
 */
declare namespace BaseCodeAnalyzer.Formatter {
  export interface IPrCompliance {
  }
}

/**
 * Formatter to get the components of the PR compliance summary section.
 *
 * @remarks this represents a made instance of BaseCodeAnalyzer.Formatter.PrCompliance
 */
declare namespace BaseCodeAnalyzer.Formatter {
  export class PrCompliance {

    /**
     * Helper to get the title of the PR compliance check summary segment.
     *
     * @param prComplianceResults
     *           The PR compliance check results.
     * @returns the title of the PR compliance check summary segment.
     */
    static getTitle(prComplianceResults?: Array_Type<BaseCodeAnalyzer.PrCompliance.Result>): string;

    /**
     * Helper to get the string content of the PR compliance check summary segment.
     *
     * @param prComplianceResults
     *           The PR compliance check results.
     * @returns the string content of the PR compliance check summary segment.
     */
    static getContent(prComplianceResults?: Array_Type<BaseCodeAnalyzer.PrCompliance.Result>): string;

    /**
     * Helper to get the package results section of the summary message.
     *
     * @param prComplianceResults
     *           The PR compliance check results.
     * @returns the components for the PR guideline compliance summary section.
     */
    static summarizeResults(prComplianceResults?: Array_Type<BaseCodeAnalyzer.PrCompliance.Result>): BaseCodeAnalyzer.Formatter.SummarySection;
  }
}

