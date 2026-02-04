export interface UiBundlerStatus {

  readonly started?: DateTime | null;
  withStarted(started: DateTime | Date | string | null): UiBundlerStatus;

  readonly startedby?: string | null;
  withStartedby(startedby: string | null): UiBundlerStatus;

  readonly completed?: DateTime | null;
  withCompleted(completed: DateTime | Date | string | null): UiBundlerStatus;

  readonly status?: string | null;
  withStatus(status: string | null): UiBundlerStatus;

  readonly progress?: string | null;
  withProgress(progress: string | null): UiBundlerStatus;

  readonly info?: string | null;
  withInfo(info: string | null): UiBundlerStatus;

  readonly errors?: C3.Array<JobRunErrorDetail | null>;
  withErrors(errors: C3.Array<JobRunErrorDetail | null> | Array<IJobRunErrorDetail | null>): UiBundlerStatus;

  readonly newBatchSubmitted?: boolean;
  withNewBatchSubmitted(newBatchSubmitted: boolean): UiBundlerStatus;

  readonly bundleStatuses?: C3.Array<BundleStatus | null>;
  withBundleStatuses(bundleStatuses: C3.Array<BundleStatus | null> | Array<IBundleStatus | null>): UiBundlerStatus;

  readonly performanceProfile?: UiBundlerPerformanceProfile | null;
  withPerformanceProfile(performanceProfile: IUiBundlerPerformanceProfile | null): UiBundlerStatus;
}

