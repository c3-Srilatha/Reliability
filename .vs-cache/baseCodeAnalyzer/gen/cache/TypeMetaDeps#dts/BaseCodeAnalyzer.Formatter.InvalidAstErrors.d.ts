// TypeScript definitions for the C3 type BaseCodeAnalyzer.Formatter.InvalidAstErrors

/**
 * Formatter to get the components of the invalid AST errors summary section.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalyzer.Formatter.InvalidAstErrors
 */
declare namespace BaseCodeAnalyzer.Formatter {
  export interface IInvalidAstErrors {
  }
}

/**
 * Formatter to get the components of the invalid AST errors summary section.
 *
 * @remarks this represents a made instance of BaseCodeAnalyzer.Formatter.InvalidAstErrors
 */
declare namespace BaseCodeAnalyzer.Formatter {
  export class InvalidAstErrors {

    /**
     * Helper to get the invalid AST errors section of the summary message.
     *
     * @param processedResults
     *           The processed code analysis metric results to show in the summary message.
     * @returns the components for the invalid AST errors summary section.
     */
    static summarizeResults(processedResults?: Array_Type<BaseCodeAnalysis.Result.Processed>): BaseCodeAnalyzer.Formatter.SummarySection | null;
  }
}

