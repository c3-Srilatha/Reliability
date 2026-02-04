export interface AiVisionMissilesPositionDataHeader {

  readonly earliest?: DateTime | null;
  withEarliest(earliest: DateTime | Date | string | null): AiVisionMissilesPositionDataHeader;

  readonly latest?: DateTime | null;
  withLatest(latest: DateTime | Date | string | null): AiVisionMissilesPositionDataHeader;

  readonly earliestTsDp?: C3.Map<string | null, TSDataPoint | null>;
  withEarliestTsDp(earliestTsDp: C3.Map<string | null, TSDataPoint | null> | {[key: string | null]: ITSDataPoint | null}): AiVisionMissilesPositionDataHeader;

  readonly latestTsDp?: C3.Map<string | null, TSDataPoint | null>;
  withLatestTsDp(latestTsDp: C3.Map<string | null, TSDataPoint | null> | {[key: string | null]: ITSDataPoint | null}): AiVisionMissilesPositionDataHeader;

  readonly interval?: string | null;
  withInterval(interval: string | null): AiVisionMissilesPositionDataHeader;

  readonly timeZone?: string | null;
  withTimeZone(timeZone: string | null): AiVisionMissilesPositionDataHeader;

  readonly doNotNormalize?: boolean;
  withDoNotNormalize(doNotNormalize: boolean): AiVisionMissilesPositionDataHeader;

  readonly data?: C3.Array<AiVisionMissilesPositionDataPoint | null>;
  withData(data: C3.Array<AiVisionMissilesPositionDataPoint | null> | Array<IAiVisionMissilesPositionDataPoint | null>): AiVisionMissilesPositionDataHeader;

  readonly interpolator?: string | null;
  withInterpolator(interpolator: string | null): AiVisionMissilesPositionDataHeader;

  readonly duplicateHandling?: string | null;
  withDuplicateHandling(duplicateHandling: string | null): AiVisionMissilesPositionDataHeader;

  readonly overlapHandling?: string | null;
  withOverlapHandling(overlapHandling: string | null): AiVisionMissilesPositionDataHeader;

  readonly bucketInterval?: string | null;
  withBucketInterval(bucketInterval: string | null): AiVisionMissilesPositionDataHeader;

  readonly normalizationPartitionStrategy?: NormalizationPartitionStrategy | null;
  withNormalizationPartitionStrategy(normalizationPartitionStrategy: INormalizationPartitionStrategy | null): AiVisionMissilesPositionDataHeader;

  readonly extrapolate?: boolean;
  withExtrapolate(extrapolate: boolean): AiVisionMissilesPositionDataHeader;

  readonly id: string;
  withId(id: string): AiVisionMissilesPositionDataHeader;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): AiVisionMissilesPositionDataHeader;

  readonly name?: string | null;
  withName(name: string | null): AiVisionMissilesPositionDataHeader;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): AiVisionMissilesPositionDataHeader;

  readonly version?: number | null;
  withVersion(version: number | null): AiVisionMissilesPositionDataHeader;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): AiVisionMissilesPositionDataHeader;

  readonly treatment?: string | null;
  withTreatment(treatment: string | null): AiVisionMissilesPositionDataHeader;

  readonly missileLaunch?: AiVisionMissileLaunch | null;
  withMissileLaunch(missileLaunch: IAiVisionMissileLaunch | null): AiVisionMissilesPositionDataHeader;
}

