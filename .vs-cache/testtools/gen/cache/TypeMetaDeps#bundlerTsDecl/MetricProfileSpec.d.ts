export interface MetricProfileSpec {

  readonly id: string;
  withId(id: string): MetricProfileSpec;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): MetricProfileSpec;

  readonly name?: string | null;
  withName(name: string | null): MetricProfileSpec;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MetricProfileSpec;

  readonly version?: number | null;
  withVersion(version: number | null): MetricProfileSpec;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): MetricProfileSpec;

  readonly parent?: MetricProfilerSpec | null;
  withParent(parent: IMetricProfilerSpec | null): MetricProfileSpec;

  readonly srcType?: Type | null;
  withSrcType(srcType: IType | null): MetricProfileSpec;

  readonly ids?: C3.Array<string | null>;
  withIds(ids: C3.Array<string | null> | Array<string | null>): MetricProfileSpec;

  readonly expressions?: C3.Array<string | null>;
  withExpressions(expressions: C3.Array<string | null> | Array<string | null>): MetricProfileSpec;

  readonly interval?: string | null;
  withInterval(interval: string | null): MetricProfileSpec;

  readonly start?: DateTime | null;
  withStart(start: DateTime | Date | string | null): MetricProfileSpec;

  readonly end?: DateTime | null;
  withEnd(end: DateTime | Date | string | null): MetricProfileSpec;

  readonly iterations?: number | null;
  withIterations(iterations: number | null): MetricProfileSpec;
}

