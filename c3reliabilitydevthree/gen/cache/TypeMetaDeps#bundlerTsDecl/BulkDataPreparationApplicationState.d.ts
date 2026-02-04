export interface BulkDataPreparationApplicationState {

  readonly nonOperationalMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;
  withNonOperationalMasks(nonOperationalMasks: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>): BulkDataPreparationApplicationState;

  static readonly nonOperationalMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;

  readonly preNonOperationalMaskPeriod?: Period | null;
  withPreNonOperationalMaskPeriod(preNonOperationalMaskPeriod: IPeriod | null): BulkDataPreparationApplicationState;

  static readonly preNonOperationalMaskPeriod?: Period | null;

  readonly postNonOperationalTrainingMaskPeriod?: Period | null;
  withPostNonOperationalTrainingMaskPeriod(postNonOperationalTrainingMaskPeriod: IPeriod | null): BulkDataPreparationApplicationState;

  static readonly postNonOperationalTrainingMaskPeriod?: Period | null;

  readonly postNonOperationalInferenceMaskPeriod?: Period | null;
  withPostNonOperationalInferenceMaskPeriod(postNonOperationalInferenceMaskPeriod: IPeriod | null): BulkDataPreparationApplicationState;

  static readonly postNonOperationalInferenceMaskPeriod?: Period | null;

  readonly preEventMaskPeriod: Period;
  withPreEventMaskPeriod(preEventMaskPeriod: IPeriod): BulkDataPreparationApplicationState;

  static readonly preEventMaskPeriod: Period;

  readonly postEventMaskPeriod: Period;
  withPostEventMaskPeriod(postEventMaskPeriod: IPeriod): BulkDataPreparationApplicationState;

  static readonly postEventMaskPeriod: Period;

  readonly dateRangeMaskTimeRanges?: C3.Array<TimeRange | null>;
  withDateRangeMaskTimeRanges(dateRangeMaskTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): BulkDataPreparationApplicationState;

  static readonly dateRangeMaskTimeRanges?: C3.Array<TimeRange | null>;

  readonly trainingRuleMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;
  withTrainingRuleMasks(trainingRuleMasks: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>): BulkDataPreparationApplicationState;

  static readonly trainingRuleMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;

  readonly inferenceRuleMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;
  withInferenceRuleMasks(inferenceRuleMasks: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>): BulkDataPreparationApplicationState;

  static readonly inferenceRuleMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;

  readonly nonOperationalMasksExpression?: string | null;
  withNonOperationalMasksExpression(nonOperationalMasksExpression: string | null): BulkDataPreparationApplicationState;

  static readonly nonOperationalMasksExpression?: string | null;

  readonly trainingRuleMasksExpression?: string | null;
  withTrainingRuleMasksExpression(trainingRuleMasksExpression: string | null): BulkDataPreparationApplicationState;

  static readonly trainingRuleMasksExpression?: string | null;

  readonly inferenceRuleMasksExpression?: string | null;
  withInferenceRuleMasksExpression(inferenceRuleMasksExpression: string | null): BulkDataPreparationApplicationState;

  static readonly inferenceRuleMasksExpression?: string | null;

  readonly flatlineThreshold?: number | null;
  withFlatlineThreshold(flatlineThreshold: number | null): BulkDataPreparationApplicationState;

  static readonly flatlineThreshold?: number | null;

  readonly missingDataThreshold?: number | null;
  withMissingDataThreshold(missingDataThreshold: number | null): BulkDataPreparationApplicationState;

  static readonly missingDataThreshold?: number | null;

  readonly windowStart: DateTime;
  withWindowStart(windowStart: DateTime | Date | string): BulkDataPreparationApplicationState;

  static readonly windowStart: DateTime;

  readonly windowEnd: DateTime;
  withWindowEnd(windowEnd: DateTime | Date | string): BulkDataPreparationApplicationState;

  static readonly windowEnd: DateTime;

  readonly trainingPercentage: number;
  withTrainingPercentage(trainingPercentage: number): BulkDataPreparationApplicationState;

  static readonly trainingPercentage: number;

  readonly trainStart?: DateTime | null;
  withTrainStart(trainStart: DateTime | Date | string | null): BulkDataPreparationApplicationState;

  static readonly trainStart?: DateTime | null;

  readonly trainEnd?: DateTime | null;
  withTrainEnd(trainEnd: DateTime | Date | string | null): BulkDataPreparationApplicationState;

  static readonly trainEnd?: DateTime | null;

  readonly validStart?: DateTime | null;
  withValidStart(validStart: DateTime | Date | string | null): BulkDataPreparationApplicationState;

  static readonly validStart?: DateTime | null;

  readonly validEnd?: DateTime | null;
  withValidEnd(validEnd: DateTime | Date | string | null): BulkDataPreparationApplicationState;

  static readonly validEnd?: DateTime | null;

  readonly trainingSubset: string;
  withTrainingSubset(trainingSubset: string): BulkDataPreparationApplicationState;

  static readonly trainingSubset: string;

  readonly interval: string;
  withInterval(interval: string): BulkDataPreparationApplicationState;

  static readonly interval: string;

  readonly numAssets?: number | null;
  withNumAssets(numAssets: number | null): BulkDataPreparationApplicationState;

  static readonly numAssets?: number | null;

  readonly targetAssets?: C3.Array<ReliabilityAsset | null>;
  withTargetAssets(targetAssets: C3.Array<ReliabilityAsset | null> | Array<IReliabilityAsset | null>): BulkDataPreparationApplicationState;

  static readonly targetAssets?: C3.Array<ReliabilityAsset | null>;

  readonly includeSensors?: C3.Array<Sensor | null>;
  withIncludeSensors(includeSensors: C3.Array<Sensor | null> | Array<ISensor | null>): BulkDataPreparationApplicationState;

  static readonly includeSensors?: C3.Array<Sensor | null>;

  readonly excludeSensors?: C3.Array<Sensor | null>;
  withExcludeSensors(excludeSensors: C3.Array<Sensor | null> | Array<ISensor | null>): BulkDataPreparationApplicationState;

  static readonly excludeSensors?: C3.Array<Sensor | null>;

  readonly variance?: number | null;
  withVariance(variance: number | null): BulkDataPreparationApplicationState;

  static readonly variance?: number | null;

  readonly project?: ReliabilityMl.Project | null;
  withProject(project: IReliabilityMl.Project | null): BulkDataPreparationApplicationState;

  static readonly project?: ReliabilityMl.Project | null;

  readonly trainingDatasetTimeRanges?: C3.Array<TimeRange | null>;
  withTrainingDatasetTimeRanges(trainingDatasetTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): BulkDataPreparationApplicationState;

  static readonly trainingDatasetTimeRanges?: C3.Array<TimeRange | null>;

  readonly validateDatasetTimeRanges?: C3.Array<TimeRange | null>;
  withValidateDatasetTimeRanges(validateDatasetTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): BulkDataPreparationApplicationState;

  static readonly validateDatasetTimeRanges?: C3.Array<TimeRange | null>;

  readonly splitByPercentage?: boolean;
  withSplitByPercentage(splitByPercentage: boolean): BulkDataPreparationApplicationState;

  static readonly splitByPercentage?: boolean;

  readonly extraTimeRangeMasks?: C3.Array<TimeRange | null>;
  withExtraTimeRangeMasks(extraTimeRangeMasks: C3.Array<TimeRange | null> | Array<ITimeRange | null>): BulkDataPreparationApplicationState;

  static readonly extraTimeRangeMasks?: C3.Array<TimeRange | null>;

  readonly jobName?: string | null;
  withJobName(jobName: string | null): BulkDataPreparationApplicationState;

  static readonly jobName?: string | null;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BulkDataPreparationApplicationState;

  static readonly meta?: Meta | null;

  readonly id?: string | null;
  withId(id: string | null): BulkDataPreparationApplicationState;

  static readonly id?: string | null;

  readonly name?: string | null;
  withName(name: string | null): BulkDataPreparationApplicationState;

  static readonly name?: string | null;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): BulkDataPreparationApplicationState;

  static readonly dataSpec?: UiSdlNoData | null;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BulkDataPreparationApplicationState;

  static readonly disableDataRequestOnFirstRender?: boolean;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BulkDataPreparationApplicationState;

  static readonly triggersRegistered?: boolean;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BulkDataPreparationApplicationState;

  static readonly wrapWithMetadataId?: boolean;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): BulkDataPreparationApplicationState;

  static readonly REDUX_NAMESPACE?: string | null;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): BulkDataPreparationApplicationState;

  static readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;

  readonly defaultWindow?: Period | null;
  withDefaultWindow(defaultWindow: IPeriod | null): BulkDataPreparationApplicationState;

  static readonly defaultWindow?: Period | null;

  readonly defaultWindowStart?: DateTime | null;
  withDefaultWindowStart(defaultWindowStart: DateTime | Date | string | null): BulkDataPreparationApplicationState;

  static readonly defaultWindowStart?: DateTime | null;

  readonly defaultWindowEnd?: DateTime | null;
  withDefaultWindowEnd(defaultWindowEnd: DateTime | Date | string | null): BulkDataPreparationApplicationState;

  static readonly defaultWindowEnd?: DateTime | null;

  readonly defaultDataInterval?: string | null;
  withDefaultDataInterval(defaultDataInterval: string | null): BulkDataPreparationApplicationState;

  static readonly defaultDataInterval?: string | null;

  readonly defaultTrainingPercentage?: number | null;
  withDefaultTrainingPercentage(defaultTrainingPercentage: number | null): BulkDataPreparationApplicationState;

  static readonly defaultTrainingPercentage?: number | null;

  readonly defaultValidationPercentage?: number | null;
  withDefaultValidationPercentage(defaultValidationPercentage: number | null): BulkDataPreparationApplicationState;

  static readonly defaultValidationPercentage?: number | null;

  readonly defaultFlatlineThreshold?: number | null;
  withDefaultFlatlineThreshold(defaultFlatlineThreshold: number | null): BulkDataPreparationApplicationState;

  static readonly defaultFlatlineThreshold?: number | null;

  readonly defaultMissingDataThreshold?: number | null;
  withDefaultMissingDataThreshold(defaultMissingDataThreshold: number | null): BulkDataPreparationApplicationState;

  static readonly defaultMissingDataThreshold?: number | null;

  readonly defaultTrainingDataset?: number | null;
  withDefaultTrainingDataset(defaultTrainingDataset: number | null): BulkDataPreparationApplicationState;

  static readonly defaultTrainingDataset?: number | null;

  readonly defaultPreEventMaskPeriod?: Period | null;
  withDefaultPreEventMaskPeriod(defaultPreEventMaskPeriod: IPeriod | null): BulkDataPreparationApplicationState;

  static readonly defaultPreEventMaskPeriod?: Period | null;

  readonly defaultPostEventMaskPeriod?: Period | null;
  withDefaultPostEventMaskPeriod(defaultPostEventMaskPeriod: IPeriod | null): BulkDataPreparationApplicationState;

  static readonly defaultPostEventMaskPeriod?: Period | null;

  readonly defaultInterval?: string | null;
  withDefaultInterval(defaultInterval: string | null): BulkDataPreparationApplicationState;

  static readonly defaultInterval?: string | null;

  readonly defaultTrainingSubset: string;
  withDefaultTrainingSubset(defaultTrainingSubset: string): BulkDataPreparationApplicationState;

  static readonly defaultTrainingSubset: string;

  readonly defaultVariance?: number | null;
  withDefaultVariance(defaultVariance: number | null): BulkDataPreparationApplicationState;

  static readonly defaultVariance?: number | null;

  readonly disableInterval?: boolean;
  withDisableInterval(disableInterval: boolean): BulkDataPreparationApplicationState;

  static readonly disableInterval?: boolean;

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): BulkDataPreparationApplicationState;

  static readonly configOverride?: string | null;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): BulkDataPreparationApplicationState;

  static readonly secretOverride?: string | null;

  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): BulkDataPreparationApplicationState;

  static readonly issues?: C3.Array<string | null>;

  readonly dataPreparationJobTimeout?: Duration | null;
  withDataPreparationJobTimeout(dataPreparationJobTimeout: IDuration | null): BulkDataPreparationApplicationState;

  static readonly dataPreparationJobTimeout?: Duration | null;

  readonly isBulk?: boolean;
  withIsBulk(isBulk: boolean): BulkDataPreparationApplicationState;

  static readonly isBulk?: boolean;

  readonly loadingDataPrep?: boolean;
  withLoadingDataPrep(loadingDataPrep: boolean): BulkDataPreparationApplicationState;

  static readonly loadingDataPrep?: boolean;

  readonly numCompletedJobs?: number | null;
  withNumCompletedJobs(numCompletedJobs: number | null): BulkDataPreparationApplicationState;

  static readonly numCompletedJobs?: number | null;
}

