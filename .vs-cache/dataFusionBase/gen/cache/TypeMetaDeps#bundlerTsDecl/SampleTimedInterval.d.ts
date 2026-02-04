export interface SampleTimedInterval<F, T> {

  readonly start?: DateTime | null;
  withStart(start: DateTime | Date | string | null): SampleTimedInterval;

  readonly end?: DateTime | null;
  withEnd(end: DateTime | Date | string | null): SampleTimedInterval;

  readonly id: string;
  withId(id: string): SampleTimedInterval;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): SampleTimedInterval;

  readonly name?: string | null;
  withName(name: string | null): SampleTimedInterval;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SampleTimedInterval;

  readonly version?: number | null;
  withVersion(version: number | null): SampleTimedInterval;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): SampleTimedInterval;

  readonly from?: F | null;
  withFrom(from: F | null): SampleTimedInterval;

  readonly to?: T | null;
  withTo(to: T | null): SampleTimedInterval;
}

