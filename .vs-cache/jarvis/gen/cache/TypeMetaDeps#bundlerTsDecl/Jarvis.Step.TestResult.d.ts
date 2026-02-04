declare namespace Jarvis.Step {
  export interface TestResult {

    readonly id: string;
    withId(id: string): Jarvis.Step.TestResult;

    readonly step: Jarvis.Step;
    withStep(step: IJarvis.Step): Jarvis.Step.TestResult;

    readonly status: string;
    withStatus(status: string): Jarvis.Step.TestResult;

    readonly error?: string | null;
    withError(error: string | null): Jarvis.Step.TestResult;

    readonly errorType?: string | null;
    withErrorType(errorType: string | null): Jarvis.Step.TestResult;

    readonly pkgName: string;
    withPkgName(pkgName: string): Jarvis.Step.TestResult;

    readonly actionEngine?: string | null;
    withActionEngine(actionEngine: string | null): Jarvis.Step.TestResult;

    readonly testSuite: string;
    withTestSuite(testSuite: string): Jarvis.Step.TestResult;

    readonly result?: TestSuiteResult | null;
    withResult(result: ITestSuiteResult | null): Jarvis.Step.TestResult;
  }
}

