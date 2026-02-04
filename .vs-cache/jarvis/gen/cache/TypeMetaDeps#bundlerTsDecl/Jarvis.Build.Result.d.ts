declare namespace Jarvis.Build {
  export interface Result {

    readonly id: string;
    withId(id: string): Jarvis.Build.Result;

    readonly sha: string;
    withSha(sha: string): Jarvis.Build.Result;

    readonly status: string;
    withStatus(status: string): Jarvis.Build.Result;

    readonly error?: string | null;
    withError(error: string | null): Jarvis.Build.Result;

    readonly errorType?: string | null;
    withErrorType(errorType: string | null): Jarvis.Build.Result;

    readonly stepResults?: C3.Array<Jarvis.Step.Result | null>;
    withStepResults(stepResults: C3.Array<Jarvis.Step.Result | null> | Array<IJarvis.Step.Result | null>): Jarvis.Build.Result;

    readonly pkgsArtifacts?: C3.Array<Jarvis.Step.PkgArtifactResult | null>;
    withPkgsArtifacts(pkgsArtifacts: C3.Array<Jarvis.Step.PkgArtifactResult | null> | Array<IJarvis.Step.PkgArtifactResult | null>): Jarvis.Build.Result;
  }
}

