declare namespace Jarvis {
  export interface Build {

    readonly id: string;
    withId(id: string): Jarvis.Build;

    readonly state: string;
    withState(state: string): Jarvis.Build;

    readonly stateHistory?: C3.Array<Jarvis.State.Detail | null>;
    withStateHistory(stateHistory: C3.Array<Jarvis.State.Detail | null> | Array<IJarvis.State.Detail | null>): Jarvis.Build;

    readonly expiresAt?: DateTime | null;
    withExpiresAt(expiresAt: DateTime | Date | string | null): Jarvis.Build;

    readonly keepForever?: boolean;
    withKeepForever(keepForever: boolean): Jarvis.Build;

    readonly repositoryUrl: string;
    withRepositoryUrl(repositoryUrl: string): Jarvis.Build;

    readonly branch: string;
    withBranch(branch: string): Jarvis.Build;

    readonly branchUrl?: string | null;
    withBranchUrl(branchUrl: string | null): Jarvis.Build;

    readonly sha: string;
    withSha(sha: string): Jarvis.Build;

    readonly shaUrl?: string | null;
    withShaUrl(shaUrl: string | null): Jarvis.Build;

    readonly prUrl?: string | null;
    withPrUrl(prUrl: string | null): Jarvis.Build;

    readonly packagesPath?: string | null;
    withPackagesPath(packagesPath: string | null): Jarvis.Build;

    readonly preReleaseTag?: string | null;
    withPreReleaseTag(preReleaseTag: string | null): Jarvis.Build;

    readonly jarvisFilePath?: string | null;
    withJarvisFilePath(jarvisFilePath: string | null): Jarvis.Build;

    readonly firstStepName?: string | null;
    withFirstStepName(firstStepName: string | null): Jarvis.Build;

    readonly changes?: C3.Array<SourceControlFileDiff | null>;
    withChanges(changes: C3.Array<SourceControlFileDiff | null> | Array<ISourceControlFileDiff | null>): Jarvis.Build;

    readonly result?: Jarvis.Build.Result | null;
    withResult(result: IJarvis.Build.Result | null): Jarvis.Build;

    readonly buildNumber?: number | null;
    withBuildNumber(buildNumber: number | null): Jarvis.Build;
  }
}

