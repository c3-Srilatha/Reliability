export interface MetricProfilerSpec {

  readonly id: string;
  withId(id: string): MetricProfilerSpec;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): MetricProfilerSpec;

  readonly name?: string | null;
  withName(name: string | null): MetricProfilerSpec;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MetricProfilerSpec;

  readonly version?: number | null;
  withVersion(version: number | null): MetricProfilerSpec;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): MetricProfilerSpec;

  readonly srcType?: Type | null;
  withSrcType(srcType: IType | null): MetricProfilerSpec;

  readonly ids?: C3.Array<string | null>;
  withIds(ids: C3.Array<string | null> | Array<string | null>): MetricProfilerSpec;

  readonly expressions?: C3.Array<string | null>;
  withExpressions(expressions: C3.Array<string | null> | Array<string | null>): MetricProfilerSpec;

  readonly interval?: string | null;
  withInterval(interval: string | null): MetricProfilerSpec;

  readonly start?: DateTime | null;
  withStart(start: DateTime | Date | string | null): MetricProfilerSpec;

  readonly end?: DateTime | null;
  withEnd(end: DateTime | Date | string | null): MetricProfilerSpec;

  readonly iterations?: number | null;
  withIterations(iterations: number | null): MetricProfilerSpec;

  readonly numThreads?: number | null;
  withNumThreads(numThreads: number | null): MetricProfilerSpec;

  readonly idsPerThread?: number | null;
  withIdsPerThread(idsPerThread: number | null): MetricProfilerSpec;
}

