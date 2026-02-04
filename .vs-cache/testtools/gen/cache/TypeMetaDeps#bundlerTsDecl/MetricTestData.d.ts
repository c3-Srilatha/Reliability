export interface MetricTestData {

  readonly id: string;
  withId(id: string): MetricTestData;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): MetricTestData;

  readonly name?: string | null;
  withName(name: string | null): MetricTestData;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MetricTestData;

  readonly version?: number | null;
  withVersion(version: number | null): MetricTestData;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): MetricTestData;

  readonly sourceType?: Type | null;
  withSourceType(sourceType: IType | null): MetricTestData;

  readonly metric?: string | null;
  withMetric(metric: string | null): MetricTestData;

  readonly evalMetricSpec?: EvalMetricSpec | null;
  withEvalMetricSpec(evalMetricSpec: IEvalMetricSpec | null): MetricTestData;

  readonly truth?: C3.Array<number | null>;
  withTruth(truth: C3.Array<number | null> | Array<number | null>): MetricTestData;
}

