declare namespace Jarvis.Step {
  export interface Result {

    readonly id: string;
    withId(id: string): Jarvis.Step.Result;

    readonly step: Jarvis.Step;
    withStep(step: IJarvis.Step): Jarvis.Step.Result;

    readonly status: string;
    withStatus(status: string): Jarvis.Step.Result;

    readonly error?: string | null;
    withError(error: string | null): Jarvis.Step.Result;

    readonly errorType?: string | null;
    withErrorType(errorType: string | null): Jarvis.Step.Result;
  }
}

