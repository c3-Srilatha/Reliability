export interface JobStatusReport {

  readonly id: string;
  withId(id: string): JobStatusReport;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): JobStatusReport;

  readonly name?: string | null;
  withName(name: string | null): JobStatusReport;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): JobStatusReport;

  readonly version?: number | null;
  withVersion(version: number | null): JobStatusReport;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): JobStatusReport;

  readonly job: any;
  withJob(job: any): JobStatusReport;

  readonly jobStatus?: string | null;
  withJobStatus(jobStatus: string | null): JobStatusReport;

  readonly tracker: JobStatusTracker;
  withTracker(tracker: IJobStatusTracker): JobStatusReport;

  readonly duration?: number | null;
  withDuration(duration: number | null): JobStatusReport;
}

