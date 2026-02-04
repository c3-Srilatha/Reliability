declare namespace Jarvis {
  export interface Step {

    readonly id: string;
    withId(id: string): Jarvis.Step;

    readonly name?: string | null;
    withName(name: string | null): Jarvis.Step;

    readonly state?: string | null;
    withState(state: string | null): Jarvis.Step;

    readonly stateHistory?: C3.Array<Jarvis.State.Detail | null>;
    withStateHistory(stateHistory: C3.Array<Jarvis.State.Detail | null> | Array<IJarvis.State.Detail | null>): Jarvis.Step;

    readonly jarvisBuild: Jarvis.Build;
    withJarvisBuild(jarvisBuild: IJarvis.Build): Jarvis.Step;

    readonly input?: C3.Map<string | null, any | null>;
    withInput(input: C3.Map<string | null, any | null> | {[key: string | null]: any | null}): Jarvis.Step;

    readonly executor?: string | null;
    withExecutor(executor: string | null): Jarvis.Step;

    readonly actionId?: string | null;
    withActionId(actionId: string | null): Jarvis.Step;

    readonly serverId?: string | null;
    withServerId(serverId: string | null): Jarvis.Step;

    readonly next?: Jarvis.Step | null;
    withNext(next: IJarvis.Step | null): Jarvis.Step;

    readonly continueOnUpstreamFailure?: boolean;
    withContinueOnUpstreamFailure(continueOnUpstreamFailure: boolean): Jarvis.Step;

    readonly action?: λFunction<Jarvis.Step, Jarvis.Step.Result | null> | null;
    withAction(action: λFunction<Jarvis.Step, IJarvis.Step.Result | null> | null): Jarvis.Step;

    readonly retryOf?: Jarvis.Step | null;
    withRetryOf(retryOf: IJarvis.Step | null): Jarvis.Step;

    readonly retryCount?: number | null;
    withRetryCount(retryCount: number | null): Jarvis.Step;

    readonly maxRetries?: number | null;
    withMaxRetries(maxRetries: number | null): Jarvis.Step;

    readonly serverVersion?: string | null;
    withServerVersion(serverVersion: string | null): Jarvis.Step;

    readonly startEnvSpec?: string | null;
    withStartEnvSpec(startEnvSpec: string | null): Jarvis.Step;

    readonly timeout?: string | null;
    withTimeout(timeout: string | null): Jarvis.Step;

    readonly lambda?: Jarvis.Lambda | null;
    withLambda(lambda: IJarvis.Lambda | null): Jarvis.Step;
  }
}


interface λFunction<T, R> {
  (t: T): R
}
