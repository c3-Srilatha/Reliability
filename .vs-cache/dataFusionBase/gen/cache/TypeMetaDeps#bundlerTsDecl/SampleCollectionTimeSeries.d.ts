export interface SampleCollectionTimeSeries {

  readonly earliest?: DateTime | null;
  withEarliest(earliest: DateTime | Date | string | null): SampleCollectionTimeSeries;

  readonly latest?: DateTime | null;
  withLatest(latest: DateTime | Date | string | null): SampleCollectionTimeSeries;

  readonly earliestTsDp?: C3.Map<string | null, TSDataPoint | null>;
  withEarliestTsDp(earliestTsDp: C3.Map<string | null, TSDataPoint | null> | {[key: string | null]: ITSDataPoint | null}): SampleCollectionTimeSeries;

  readonly latestTsDp?: C3.Map<string | null, TSDataPoint | null>;
  withLatestTsDp(latestTsDp: C3.Map<string | null, TSDataPoint | null> | {[key: string | null]: ITSDataPoint | null}): SampleCollectionTimeSeries;

  readonly interval?: string | null;
  withInterval(interval: string | null): SampleCollectionTimeSeries;

  readonly timeZone?: string | null;
  withTimeZone(timeZone: string | null): SampleCollectionTimeSeries;

  readonly doNotNormalize?: boolean;
  withDoNotNormalize(doNotNormalize: boolean): SampleCollectionTimeSeries;

  readonly data?: C3.Array<SampleIntervalDataPoint | null>;
  withData(data: C3.Array<SampleIntervalDataPoint | null> | Array<ISampleIntervalDataPoint | null>): SampleCollectionTimeSeries;

  readonly interpolator?: string | null;
  withInterpolator(interpolator: string | null): SampleCollectionTimeSeries;

  readonly duplicateHandling?: string | null;
  withDuplicateHandling(duplicateHandling: string | null): SampleCollectionTimeSeries;

  readonly overlapHandling?: string | null;
  withOverlapHandling(overlapHandling: string | null): SampleCollectionTimeSeries;

  readonly bucketInterval?: string | null;
  withBucketInterval(bucketInterval: string | null): SampleCollectionTimeSeries;

  readonly normalizationPartitionStrategy?: NormalizationPartitionStrategy | null;
  withNormalizationPartitionStrategy(normalizationPartitionStrategy: INormalizationPartitionStrategy | null): SampleCollectionTimeSeries;

  readonly id: string;
  withId(id: string): SampleCollectionTimeSeries;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): SampleCollectionTimeSeries;

  readonly name?: string | null;
  withName(name: string | null): SampleCollectionTimeSeries;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SampleCollectionTimeSeries;

  readonly version?: number | null;
  withVersion(version: number | null): SampleCollectionTimeSeries;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): SampleCollectionTimeSeries;

  readonly collection?: any | null;
  withCollection(collection: any | null): SampleCollectionTimeSeries;
}

