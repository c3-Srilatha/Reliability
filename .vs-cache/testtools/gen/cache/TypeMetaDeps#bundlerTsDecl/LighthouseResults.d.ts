export interface LighthouseResults {

  readonly lhr?: LighthouseResultObject | null;
  withLhr(lhr: ILighthouseResultObject | null): LighthouseResults;

  readonly artifacts?: any | null;
  withArtifacts(artifacts: any | null): LighthouseResults;

  readonly report?: string | null;
  withReport(report: string | null): LighthouseResults;

  readonly errorMessage?: string | null;
  withErrorMessage(errorMessage: string | null): LighthouseResults;
}

