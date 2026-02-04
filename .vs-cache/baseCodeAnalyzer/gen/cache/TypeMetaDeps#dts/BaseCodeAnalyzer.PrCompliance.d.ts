// TypeScript definitions for the C3 type BaseCodeAnalyzer.PrCompliance

/**
 * Type for analyzing PR compliance with c3 guidelines.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalyzer.PrCompliance
 */
declare namespace BaseCodeAnalyzer {
  export interface IPrCompliance {
  }
}

/**
 * Type for analyzing PR compliance with c3 guidelines.
 *
 * @remarks this represents a made instance of BaseCodeAnalyzer.PrCompliance
 */
declare namespace BaseCodeAnalyzer {
  export class PrCompliance {

    /**
     * Helper function to extract the JIRA ticket IDs from the PR title.
     *
     * @param gadget
     *           Source control gadget to get extract the ticket IDs from.
     * @return A list of ticket IDs mentioned in the PR title.
     */
    static getCurrentPrTickets(gadget?: BaseCodeAnalyzer.SourceControlGadget<any, any, any>): Array_Type<string>;

    /**
     * Function to check if a provided pull request title is compliant with c3 guidelines.
     * See PR title guidelines [here](https://github.com/c3-e/c3guidelines/blob/master/guidelines/pull-request/guidelines.md#title).
     *
     * @param pullRequestTitle
     *           The pull request title to check.
     * @return Whether the title is compliant with c3 standards.
     */
    static isPrTitleCompliant(pullRequestTitle?: string): boolean;

    /**
     * Helper to check for PR title compliance.
     *
     * @param gadget
     *           Source control gadget to be used for checking PR title compliance check.
     * @return The compliance result for the PR title.
     */
    static checkPrTitleCompliance(gadget?: BaseCodeAnalyzer.SourceControlGadget<any, any, any>): BaseCodeAnalyzer.PrCompliance.Result | null;

    /**
     * Function to check for PR guideline compliance.
     *
     * @param gadget
     *           Source control gadget to be used for checking PR compliance.
     * @return The compliance results for the PR.
     */
    static checkGuidelineCompliance(gadget?: BaseCodeAnalyzer.SourceControlGadget<any, any, any>): Array_Type<BaseCodeAnalyzer.PrCompliance.Result> | null;
  }
}

