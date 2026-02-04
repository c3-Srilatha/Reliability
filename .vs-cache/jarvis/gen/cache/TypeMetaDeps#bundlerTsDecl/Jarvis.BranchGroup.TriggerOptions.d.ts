declare namespace Jarvis.BranchGroup {
  export interface TriggerOptions {

    readonly frequency?: string | null;
    withFrequency(frequency: string | null): Jarvis.BranchGroup.TriggerOptions;

    readonly onlyTriggerBuildsManually?: boolean;
    withOnlyTriggerBuildsManually(onlyTriggerBuildsManually: boolean): Jarvis.BranchGroup.TriggerOptions;

    readonly buildWithNoPr?: boolean;
    withBuildWithNoPr(buildWithNoPr: boolean): Jarvis.BranchGroup.TriggerOptions;

    readonly triggerIfNoDiffWithPrevious?: boolean;
    withTriggerIfNoDiffWithPrevious(triggerIfNoDiffWithPrevious: boolean): Jarvis.BranchGroup.TriggerOptions;

    readonly dataDuration?: string | null;
    withDataDuration(dataDuration: string | null): Jarvis.BranchGroup.TriggerOptions;

    readonly keepForever?: boolean;
    withKeepForever(keepForever: boolean): Jarvis.BranchGroup.TriggerOptions;

    readonly maxBuildRetention?: number | null;
    withMaxBuildRetention(maxBuildRetention: number | null): Jarvis.BranchGroup.TriggerOptions;

    readonly shaAgeThreshold?: string | null;
    withShaAgeThreshold(shaAgeThreshold: string | null): Jarvis.BranchGroup.TriggerOptions;

    readonly maxConcurrentBuilds?: number | null;
    withMaxConcurrentBuilds(maxConcurrentBuilds: number | null): Jarvis.BranchGroup.TriggerOptions;

    readonly serverVersion?: string | null;
    withServerVersion(serverVersion: string | null): Jarvis.BranchGroup.TriggerOptions;

    readonly preReleaseTag?: string | null;
    withPreReleaseTag(preReleaseTag: string | null): Jarvis.BranchGroup.TriggerOptions;

    readonly firstStepName?: string | null;
    withFirstStepName(firstStepName: string | null): Jarvis.BranchGroup.TriggerOptions;

    readonly enableJsServerCoverage?: boolean;
    withEnableJsServerCoverage(enableJsServerCoverage: boolean): Jarvis.BranchGroup.TriggerOptions;

    readonly enableC3UiCoverage?: boolean;
    withEnableC3UiCoverage(enableC3UiCoverage: boolean): Jarvis.BranchGroup.TriggerOptions;

    readonly enablePythonCoverage?: boolean;
    withEnablePythonCoverage(enablePythonCoverage: boolean): Jarvis.BranchGroup.TriggerOptions;

    readonly enableJepCoverage?: boolean;
    withEnableJepCoverage(enableJepCoverage: boolean): Jarvis.BranchGroup.TriggerOptions;
  }
}

