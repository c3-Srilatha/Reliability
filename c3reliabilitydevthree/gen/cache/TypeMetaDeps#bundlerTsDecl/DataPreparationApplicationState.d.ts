export interface DataPreparationApplicationState {

  readonly defaultWindow?: Period | null;
  withDefaultWindow(defaultWindow: IPeriod | null): DataPreparationApplicationState;

  readonly defaultWindowStart?: DateTime | null;
  withDefaultWindowStart(defaultWindowStart: DateTime | Date | string | null): DataPreparationApplicationState;

  readonly defaultWindowEnd?: DateTime | null;
  withDefaultWindowEnd(defaultWindowEnd: DateTime | Date | string | null): DataPreparationApplicationState;

  readonly defaultDataInterval?: string | null;
  withDefaultDataInterval(defaultDataInterval: string | null): DataPreparationApplicationState;

  readonly defaultTrainingPercentage?: number | null;
  withDefaultTrainingPercentage(defaultTrainingPercentage: number | null): DataPreparationApplicationState;

  readonly defaultValidationPercentage?: number | null;
  withDefaultValidationPercentage(defaultValidationPercentage: number | null): DataPreparationApplicationState;

  readonly defaultFlatlineThreshold?: number | null;
  withDefaultFlatlineThreshold(defaultFlatlineThreshold: number | null): DataPreparationApplicationState;

  readonly defaultMissingDataThreshold?: number | null;
  withDefaultMissingDataThreshold(defaultMissingDataThreshold: number | null): DataPreparationApplicationState;

  readonly defaultTrainingDataset?: number | null;
  withDefaultTrainingDataset(defaultTrainingDataset: number | null): DataPreparationApplicationState;

  readonly defaultPreEventMaskPeriod?: Period | null;
  withDefaultPreEventMaskPeriod(defaultPreEventMaskPeriod: IPeriod | null): DataPreparationApplicationState;

  readonly defaultPostEventMaskPeriod?: Period | null;
  withDefaultPostEventMaskPeriod(defaultPostEventMaskPeriod: IPeriod | null): DataPreparationApplicationState;

  readonly defaultInterval?: string | null;
  withDefaultInterval(defaultInterval: string | null): DataPreparationApplicationState;

  readonly defaultTrainingSubset: string;
  withDefaultTrainingSubset(defaultTrainingSubset: string): DataPreparationApplicationState;

  readonly defaultVariance?: number | null;
  withDefaultVariance(defaultVariance: number | null): DataPreparationApplicationState;

  readonly disableInterval?: boolean;
  withDisableInterval(disableInterval: boolean): DataPreparationApplicationState;

  readonly nonOperationalMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;
  withNonOperationalMasks(nonOperationalMasks: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>): DataPreparationApplicationState;

  readonly preNonOperationalMaskPeriod?: Period | null;
  withPreNonOperationalMaskPeriod(preNonOperationalMaskPeriod: IPeriod | null): DataPreparationApplicationState;

  readonly postNonOperationalTrainingMaskPeriod?: Period | null;
  withPostNonOperationalTrainingMaskPeriod(postNonOperationalTrainingMaskPeriod: IPeriod | null): DataPreparationApplicationState;

  readonly postNonOperationalInferenceMaskPeriod?: Period | null;
  withPostNonOperationalInferenceMaskPeriod(postNonOperationalInferenceMaskPeriod: IPeriod | null): DataPreparationApplicationState;

  readonly preEventMaskPeriod: Period;
  withPreEventMaskPeriod(preEventMaskPeriod: IPeriod): DataPreparationApplicationState;

  readonly postEventMaskPeriod: Period;
  withPostEventMaskPeriod(postEventMaskPeriod: IPeriod): DataPreparationApplicationState;

  readonly dateRangeMaskTimeRanges?: C3.Array<TimeRange | null>;
  withDateRangeMaskTimeRanges(dateRangeMaskTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): DataPreparationApplicationState;

  readonly trainingRuleMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;
  withTrainingRuleMasks(trainingRuleMasks: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>): DataPreparationApplicationState;

  readonly inferenceRuleMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;
  withInferenceRuleMasks(inferenceRuleMasks: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>): DataPreparationApplicationState;

  readonly nonOperationalMasksExpression?: string | null;
  withNonOperationalMasksExpression(nonOperationalMasksExpression: string | null): DataPreparationApplicationState;

  readonly trainingRuleMasksExpression?: string | null;
  withTrainingRuleMasksExpression(trainingRuleMasksExpression: string | null): DataPreparationApplicationState;

  readonly inferenceRuleMasksExpression?: string | null;
  withInferenceRuleMasksExpression(inferenceRuleMasksExpression: string | null): DataPreparationApplicationState;

  readonly flatlineThreshold?: number | null;
  withFlatlineThreshold(flatlineThreshold: number | null): DataPreparationApplicationState;

  readonly missingDataThreshold?: number | null;
  withMissingDataThreshold(missingDataThreshold: number | null): DataPreparationApplicationState;

  readonly windowStart: DateTime;
  withWindowStart(windowStart: DateTime | Date | string): DataPreparationApplicationState;

  readonly windowEnd: DateTime;
  withWindowEnd(windowEnd: DateTime | Date | string): DataPreparationApplicationState;

  readonly trainingPercentage: number;
  withTrainingPercentage(trainingPercentage: number): DataPreparationApplicationState;

  readonly trainStart?: DateTime | null;
  withTrainStart(trainStart: DateTime | Date | string | null): DataPreparationApplicationState;

  readonly trainEnd?: DateTime | null;
  withTrainEnd(trainEnd: DateTime | Date | string | null): DataPreparationApplicationState;

  readonly validStart?: DateTime | null;
  withValidStart(validStart: DateTime | Date | string | null): DataPreparationApplicationState;

  readonly validEnd?: DateTime | null;
  withValidEnd(validEnd: DateTime | Date | string | null): DataPreparationApplicationState;

  readonly trainingSubset: string;
  withTrainingSubset(trainingSubset: string): DataPreparationApplicationState;

  readonly interval: string;
  withInterval(interval: string): DataPreparationApplicationState;

  readonly numAssets?: number | null;
  withNumAssets(numAssets: number | null): DataPreparationApplicationState;

  readonly targetAssets?: C3.Array<ReliabilityAsset | null>;
  withTargetAssets(targetAssets: C3.Array<ReliabilityAsset | null> | Array<IReliabilityAsset | null>): DataPreparationApplicationState;

  readonly includeSensors?: C3.Array<Sensor | null>;
  withIncludeSensors(includeSensors: C3.Array<Sensor | null> | Array<ISensor | null>): DataPreparationApplicationState;

  readonly excludeSensors?: C3.Array<Sensor | null>;
  withExcludeSensors(excludeSensors: C3.Array<Sensor | null> | Array<ISensor | null>): DataPreparationApplicationState;

  readonly variance?: number | null;
  withVariance(variance: number | null): DataPreparationApplicationState;

  readonly project?: ReliabilityMl.Project | null;
  withProject(project: IReliabilityMl.Project | null): DataPreparationApplicationState;

  readonly trainingDatasetTimeRanges?: C3.Array<TimeRange | null>;
  withTrainingDatasetTimeRanges(trainingDatasetTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): DataPreparationApplicationState;

  readonly validateDatasetTimeRanges?: C3.Array<TimeRange | null>;
  withValidateDatasetTimeRanges(validateDatasetTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): DataPreparationApplicationState;

  readonly splitByPercentage?: boolean;
  withSplitByPercentage(splitByPercentage: boolean): DataPreparationApplicationState;

  readonly extraTimeRangeMasks?: C3.Array<TimeRange | null>;
  withExtraTimeRangeMasks(extraTimeRangeMasks: C3.Array<TimeRange | null> | Array<ITimeRange | null>): DataPreparationApplicationState;

  readonly runName?: string | null;
  withRunName(runName: string | null): DataPreparationApplicationState;

  readonly assetId: string;
  withAssetId(assetId: string): DataPreparationApplicationState;

  readonly selectedSensorDataReportsFilter: Filter;
  withSelectedSensorDataReportsFilter(selectedSensorDataReportsFilter: IFilter): DataPreparationApplicationState;

  readonly excludedSensorDataReportsFilter: Filter;
  withExcludedSensorDataReportsFilter(excludedSensorDataReportsFilter: IFilter): DataPreparationApplicationState;

  readonly manuallyExcludedSensors?: C3.Array<string | null>;
  withManuallyExcludedSensors(manuallyExcludedSensors: C3.Array<string | null> | Array<string | null>): DataPreparationApplicationState;

  readonly manuallyIncludedSensors?: C3.Array<string | null>;
  withManuallyIncludedSensors(manuallyIncludedSensors: C3.Array<string | null> | Array<string | null>): DataPreparationApplicationState;

  readonly additionalSensors?: C3.Array<string | null>;
  withAdditionalSensors(additionalSensors: C3.Array<string | null> | Array<string | null>): DataPreparationApplicationState;

  readonly additionalRasrs?: C3.Array<string | null>;
  withAdditionalRasrs(additionalRasrs: C3.Array<string | null> | Array<string | null>): DataPreparationApplicationState;

  readonly numFeatureDataReports?: number | null;
  withNumFeatureDataReports(numFeatureDataReports: number | null): DataPreparationApplicationState;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): DataPreparationApplicationState;

  readonly id?: string | null;
  withId(id: string | null): DataPreparationApplicationState;

  readonly name?: string | null;
  withName(name: string | null): DataPreparationApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): DataPreparationApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): DataPreparationApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): DataPreparationApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): DataPreparationApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): DataPreparationApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): DataPreparationApplicationState;

  readonly previewInterval?: string | null;
  withPreviewInterval(previewInterval: string | null): DataPreparationApplicationState;

  readonly validationPercentage?: number | null;
  withValidationPercentage(validationPercentage: number | null): DataPreparationApplicationState;

  readonly validationSubset?: string | null;
  withValidationSubset(validationSubset: string | null): DataPreparationApplicationState;

  readonly showDataset?: boolean;
  withShowDataset(showDataset: boolean): DataPreparationApplicationState;

  readonly currentlyOpenDataPreparationJob?: ReliabilityMlDatasetPreparationJob | null;
  withCurrentlyOpenDataPreparationJob(currentlyOpenDataPreparationJob: IReliabilityMlDatasetPreparationJob | null): DataPreparationApplicationState;

  readonly enableAddSensorsButton?: boolean;
  withEnableAddSensorsButton(enableAddSensorsButton: boolean): DataPreparationApplicationState;

  readonly redirectTo?: string | null;
  withRedirectTo(redirectTo: string | null): DataPreparationApplicationState;

  readonly showDateLines?: boolean;
  withShowDateLines(showDateLines: boolean): DataPreparationApplicationState;
}

