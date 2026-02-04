export interface UiBundlerPerformanceProfile {

  readonly id: string;
  withId(id: string): UiBundlerPerformanceProfile;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): UiBundlerPerformanceProfile;

  readonly name?: string | null;
  withName(name: string | null): UiBundlerPerformanceProfile;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiBundlerPerformanceProfile;

  readonly version?: number | null;
  withVersion(version: number | null): UiBundlerPerformanceProfile;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): UiBundlerPerformanceProfile;

  readonly job: UiBundler;
  withJob(job: IUiBundler): UiBundlerPerformanceProfile;

  readonly sharedRuntimeExecutorSetupTime?: number | null;
  withSharedRuntimeExecutorSetupTime(sharedRuntimeExecutorSetupTime: number | null): UiBundlerPerformanceProfile;

  readonly setupWorkingDirTimes?: C3.Array<SetupWorkingDirPerformanceProfile | null>;
  withSetupWorkingDirTimes(setupWorkingDirTimes: C3.Array<SetupWorkingDirPerformanceProfile | null> | Array<ISetupWorkingDirPerformanceProfile | null>): UiBundlerPerformanceProfile;

  readonly totalSetupWorkingDirTime?: number | null;
  withTotalSetupWorkingDirTime(totalSetupWorkingDirTime: number | null): UiBundlerPerformanceProfile;

  readonly bundlingTimes?: C3.Array<WebpackPerformanceProfile | null>;
  withBundlingTimes(bundlingTimes: C3.Array<WebpackPerformanceProfile | null> | Array<IWebpackPerformanceProfile | null>): UiBundlerPerformanceProfile;

  readonly totalBundlerRunTime?: number | null;
  withTotalBundlerRunTime(totalBundlerRunTime: number | null): UiBundlerPerformanceProfile;

  readonly totalBundlingTime?: number | null;
  withTotalBundlingTime(totalBundlingTime: number | null): UiBundlerPerformanceProfile;

  readonly totalWebpackTime?: number | null;
  withTotalWebpackTime(totalWebpackTime: number | null): UiBundlerPerformanceProfile;

  readonly totalFileUploadTime?: number | null;
  withTotalFileUploadTime(totalFileUploadTime: number | null): UiBundlerPerformanceProfile;

  readonly totalWriteContentsTime?: number | null;
  withTotalWriteContentsTime(totalWriteContentsTime: number | null): UiBundlerPerformanceProfile;

  readonly totalFileNumbers?: number | null;
  withTotalFileNumbers(totalFileNumbers: number | null): UiBundlerPerformanceProfile;

  readonly totalFileUploadSize?: number | null;
  withTotalFileUploadSize(totalFileUploadSize: number | null): UiBundlerPerformanceProfile;

  readonly batchProcessingStartTime?: DateTime | null;
  withBatchProcessingStartTime(batchProcessingStartTime: DateTime | Date | string | null): UiBundlerPerformanceProfile;

  readonly batchProcessingEndTime?: DateTime | null;
  withBatchProcessingEndTime(batchProcessingEndTime: DateTime | Date | string | null): UiBundlerPerformanceProfile;

  readonly totalBatchProcessingTime?: number | null;
  withTotalBatchProcessingTime(totalBatchProcessingTime: number | null): UiBundlerPerformanceProfile;

  readonly allCompleteTime?: number | null;
  withAllCompleteTime(allCompleteTime: number | null): UiBundlerPerformanceProfile;

  readonly jobStartTime?: DateTime | null;
  withJobStartTime(jobStartTime: DateTime | Date | string | null): UiBundlerPerformanceProfile;

  readonly jobEndTime?: DateTime | null;
  withJobEndTime(jobEndTime: DateTime | Date | string | null): UiBundlerPerformanceProfile;

  readonly totalTime?: number | null;
  withTotalTime(totalTime: number | null): UiBundlerPerformanceProfile;

  readonly batchNumber?: number | null;
  withBatchNumber(batchNumber: number | null): UiBundlerPerformanceProfile;
}

