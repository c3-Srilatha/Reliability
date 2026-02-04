declare namespace Jarvis.Step {
  export interface PkgArtifactResult {

    readonly id: string;
    withId(id: string): Jarvis.Step.PkgArtifactResult;

    readonly step: Jarvis.Step;
    withStep(step: IJarvis.Step): Jarvis.Step.PkgArtifactResult;

    readonly status: string;
    withStatus(status: string): Jarvis.Step.PkgArtifactResult;

    readonly error?: string | null;
    withError(error: string | null): Jarvis.Step.PkgArtifactResult;

    readonly errorType?: string | null;
    withErrorType(errorType: string | null): Jarvis.Step.PkgArtifactResult;

    readonly pkg?: string | null;
    withPkg(pkg: string | null): Jarvis.Step.PkgArtifactResult;

    readonly semanticVersion?: string | null;
    withSemanticVersion(semanticVersion: string | null): Jarvis.Step.PkgArtifactResult;
  }
}

