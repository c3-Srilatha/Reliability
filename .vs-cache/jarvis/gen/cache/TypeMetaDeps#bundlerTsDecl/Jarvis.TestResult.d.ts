declare namespace Jarvis {
  export interface TestResult {

    readonly testSuiteResult?: TestSuiteResult | null;
    withTestSuiteResult(testSuiteResult: ITestSuiteResult | null): Jarvis.TestResult;

    readonly status?: string | null;
    withStatus(status: string | null): Jarvis.TestResult;

    readonly retryable?: boolean;
    withRetryable(retryable: boolean): Jarvis.TestResult;
  }
}

