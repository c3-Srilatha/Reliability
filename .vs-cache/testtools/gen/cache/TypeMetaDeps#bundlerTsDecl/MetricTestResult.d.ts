export interface MetricTestResult {

  readonly valid?: boolean;
  withValid(valid: boolean): MetricTestResult;

  readonly reason?: string | null;
  withReason(reason: string | null): MetricTestResult;
}

