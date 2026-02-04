export interface TestMetricEvaluatable {

  readonly earliest?: DateTime | null;
  withEarliest(earliest: DateTime | Date | string | null): TestMetricEvaluatable;

  readonly latest?: DateTime | null;
  withLatest(latest: DateTime | Date | string | null): TestMetricEvaluatable;

  readonly earliestTsDp?: C3.Map<string | null, TSDataPoint | null>;
  withEarliestTsDp(earliestTsDp: C3.Map<string | null, TSDataPoint | null> | {[key: string | null]: ITSDataPoint | null}): TestMetricEvaluatable;

  readonly latestTsDp?: C3.Map<string | null, TSDataPoint | null>;
  withLatestTsDp(latestTsDp: C3.Map<string | null, TSDataPoint | null> | {[key: string | null]: ITSDataPoint | null}): TestMetricEvaluatable;

  readonly interval?: string | null;
  withInterval(interval: string | null): TestMetricEvaluatable;

  readonly timeZone?: string | null;
  withTimeZone(timeZone: string | null): TestMetricEvaluatable;

  readonly doNotNormalize?: boolean;
  withDoNotNormalize(doNotNormalize: boolean): TestMetricEvaluatable;

  readonly data?: C3.Array<TestMetricChartData | null>;
  withData(data: C3.Array<TestMetricChartData | null> | Array<ITestMetricChartData | null>): TestMetricEvaluatable;

  readonly interpolator?: string | null;
  withInterpolator(interpolator: string | null): TestMetricEvaluatable;

  readonly duplicateHandling?: string | null;
  withDuplicateHandling(duplicateHandling: string | null): TestMetricEvaluatable;

  readonly overlapHandling?: string | null;
  withOverlapHandling(overlapHandling: string | null): TestMetricEvaluatable;

  readonly bucketInterval?: string | null;
  withBucketInterval(bucketInterval: string | null): TestMetricEvaluatable;

  readonly normalizationPartitionStrategy?: NormalizationPartitionStrategy | null;
  withNormalizationPartitionStrategy(normalizationPartitionStrategy: INormalizationPartitionStrategy | null): TestMetricEvaluatable;

  readonly id: string;
  withId(id: string): TestMetricEvaluatable;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestMetricEvaluatable;

  readonly name?: string | null;
  withName(name: string | null): TestMetricEvaluatable;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestMetricEvaluatable;

  readonly version?: number | null;
  withVersion(version: number | null): TestMetricEvaluatable;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestMetricEvaluatable;
}

