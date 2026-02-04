declare namespace Jarvis {
  export interface Lambda {

    readonly id: string;
    withId(id: string): Jarvis.Lambda;

    readonly name: string;
    withName(name: string): Jarvis.Lambda;

    readonly value?: λFunction<Jarvis.Step | null, Jarvis.Step.Result | null> | null;
    withValue(value: λFunction<Jarvis.Step | null, IJarvis.Step.Result | null> | null): Jarvis.Lambda;

    readonly buildId?: string | null;
    withBuildId(buildId: string | null): Jarvis.Lambda;

    readonly hookStep?: string | null;
    withHookStep(hookStep: string | null): Jarvis.Lambda;

    readonly hookStrategy?: string | null;
    withHookStrategy(hookStrategy: string | null): Jarvis.Lambda;

    readonly packageName?: string | null;
    withPackageName(packageName: string | null): Jarvis.Lambda;

    readonly packageVersion?: string | null;
    withPackageVersion(packageVersion: string | null): Jarvis.Lambda;
  }
}


interface λFunction<T, R> {
  (t: T): R
}
