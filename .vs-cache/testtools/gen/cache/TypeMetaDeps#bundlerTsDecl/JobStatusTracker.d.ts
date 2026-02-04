export interface JobStatusTracker {

  readonly id: string;
  withId(id: string): JobStatusTracker;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): JobStatusTracker;

  readonly name?: string | null;
  withName(name: string | null): JobStatusTracker;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): JobStatusTracker;

  readonly version?: number | null;
  withVersion(version: number | null): JobStatusTracker;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): JobStatusTracker;

  readonly active?: boolean;
  withActive(active: boolean): JobStatusTracker;

  readonly duration?: number | null;
  withDuration(duration: number | null): JobStatusTracker;

  readonly reports?: C3.Array<JobStatusReport | null>;
  withReports(reports: C3.Array<JobStatusReport | null> | Array<IJobStatusReport | null>): JobStatusTracker;

  readonly jobIds?: C3.Array<string | null>;
  withJobIds(jobIds: C3.Array<string | null> | Array<string | null>): JobStatusTracker;
}

