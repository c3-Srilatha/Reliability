export interface LighthouseResultsAudit {

  readonly id?: string | null;
  withId(id: string | null): LighthouseResultsAudit;

  readonly title?: string | null;
  withTitle(title: string | null): LighthouseResultsAudit;

  readonly description?: string | null;
  withDescription(description: string | null): LighthouseResultsAudit;

  readonly explanation?: string | null;
  withExplanation(explanation: string | null): LighthouseResultsAudit;

  readonly warnings?: C3.Array<string | null>;
  withWarnings(warnings: C3.Array<string | null> | Array<string | null>): LighthouseResultsAudit;

  readonly errorMessage?: string | null;
  withErrorMessage(errorMessage: string | null): LighthouseResultsAudit;

  readonly numericValue?: number | null;
  withNumericValue(numericValue: number | null): LighthouseResultsAudit;

  readonly numericUnit?: string | null;
  withNumericUnit(numericUnit: string | null): LighthouseResultsAudit;

  readonly displayValue?: string | null;
  withDisplayValue(displayValue: string | null): LighthouseResultsAudit;

  readonly score?: number | null;
  withScore(score: number | null): LighthouseResultsAudit;

  readonly scoreDisplayMode?: string | null;
  withScoreDisplayMode(scoreDisplayMode: string | null): LighthouseResultsAudit;

  readonly details?: any | null;
  withDetails(details: any | null): LighthouseResultsAudit;
}

