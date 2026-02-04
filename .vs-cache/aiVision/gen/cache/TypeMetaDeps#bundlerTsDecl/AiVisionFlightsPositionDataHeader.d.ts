export interface AiVisionFlightsPositionDataHeader {

  readonly earliest?: DateTime | null;
  withEarliest(earliest: DateTime | Date | string | null): AiVisionFlightsPositionDataHeader;

  readonly latest?: DateTime | null;
  withLatest(latest: DateTime | Date | string | null): AiVisionFlightsPositionDataHeader;

  readonly earliestTsDp?: C3.Map<string | null, TSDataPoint | null>;
  withEarliestTsDp(earliestTsDp: C3.Map<string | null, TSDataPoint | null> | {[key: string | null]: ITSDataPoint | null}): AiVisionFlightsPositionDataHeader;

  readonly latestTsDp?: C3.Map<string | null, TSDataPoint | null>;
  withLatestTsDp(latestTsDp: C3.Map<string | null, TSDataPoint | null> | {[key: string | null]: ITSDataPoint | null}): AiVisionFlightsPositionDataHeader;

  readonly interval?: string | null;
  withInterval(interval: string | null): AiVisionFlightsPositionDataHeader;

  readonly timeZone?: string | null;
  withTimeZone(timeZone: string | null): AiVisionFlightsPositionDataHeader;

  readonly doNotNormalize?: boolean;
  withDoNotNormalize(doNotNormalize: boolean): AiVisionFlightsPositionDataHeader;

  readonly data?: C3.Array<AiVisionFlightsPositionDataPoint | null>;
  withData(data: C3.Array<AiVisionFlightsPositionDataPoint | null> | Array<IAiVisionFlightsPositionDataPoint | null>): AiVisionFlightsPositionDataHeader;

  readonly interpolator?: string | null;
  withInterpolator(interpolator: string | null): AiVisionFlightsPositionDataHeader;

  readonly duplicateHandling?: string | null;
  withDuplicateHandling(duplicateHandling: string | null): AiVisionFlightsPositionDataHeader;

  readonly overlapHandling?: string | null;
  withOverlapHandling(overlapHandling: string | null): AiVisionFlightsPositionDataHeader;

  readonly bucketInterval?: string | null;
  withBucketInterval(bucketInterval: string | null): AiVisionFlightsPositionDataHeader;

  readonly normalizationPartitionStrategy?: NormalizationPartitionStrategy | null;
  withNormalizationPartitionStrategy(normalizationPartitionStrategy: INormalizationPartitionStrategy | null): AiVisionFlightsPositionDataHeader;

  readonly extrapolate?: boolean;
  withExtrapolate(extrapolate: boolean): AiVisionFlightsPositionDataHeader;

  readonly id: string;
  withId(id: string): AiVisionFlightsPositionDataHeader;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): AiVisionFlightsPositionDataHeader;

  readonly name?: string | null;
  withName(name: string | null): AiVisionFlightsPositionDataHeader;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): AiVisionFlightsPositionDataHeader;

  readonly version?: number | null;
  withVersion(version: number | null): AiVisionFlightsPositionDataHeader;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): AiVisionFlightsPositionDataHeader;

  readonly treatment?: string | null;
  withTreatment(treatment: string | null): AiVisionFlightsPositionDataHeader;

  readonly flight?: AiVisionFlight | null;
  withFlight(flight: IAiVisionFlight | null): AiVisionFlightsPositionDataHeader;
}

