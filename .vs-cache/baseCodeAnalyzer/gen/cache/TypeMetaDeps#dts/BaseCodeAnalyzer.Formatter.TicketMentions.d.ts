// TypeScript definitions for the C3 type BaseCodeAnalyzer.Formatter.TicketMentions

/**
 * Formatter to get the components of the ticket mentions summary section.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalyzer.Formatter.TicketMentions
 */
declare namespace BaseCodeAnalyzer.Formatter {
  export interface ITicketMentions {
  }
}

/**
 * Formatter to get the components of the ticket mentions summary section.
 *
 * @remarks this represents a made instance of BaseCodeAnalyzer.Formatter.TicketMentions
 */
declare namespace BaseCodeAnalyzer.Formatter {
  export class TicketMentions {

    /**
     * Helper to get the ticket mentions section of the summary message.
     *
     * @param processedResults
     *           The processed code analysis metric results to show in the summary message.
     * @param gadget
     *           The source control gadget to get the file- and line- anchors from.
     * @returns the components for the ticket mentions summary section.
     */
    static summarizeResults(processedResults?: Array_Type<BaseCodeAnalysis.Result.Processed>, gadget?: BaseCodeAnalyzer.GitHubGadget): BaseCodeAnalyzer.Formatter.SummarySection | null;
  }
}

