// TypeScript definitions for the C3 type DataPreparationApplicationState

/**
 * Application state for the data preparation workflow.
 *
 * @remarks this represents a value passed to a method that expects an instance of DataPreparationApplicationState
 */
declare interface IDataPreparationApplicationState {

  /**
   * A {@link Period} to specify the {@link ReliabilityAsset} time window for {@link Sensor} data utilized in the dataset.
   */
  defaultWindow?: IPeriod | null;

  /**
   * Default start {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  defaultWindowStart?: DateTime | Date | string | null;

  /**
   * Default end {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  defaultWindowEnd?: DateTime | Date | string | null;

  /**
   * The default data {@link Interval} to analyze the data of the {@link Sensor}.
   */
  defaultDataInterval?: string | null;

  /**
   * The default training percentage.
   */
  defaultTrainingPercentage?: number | null;

  /**
   * The default validation percentage.
   */
  defaultValidationPercentage?: number | null;

  /**
   * A threshold of {@link Sensor} flatline percentage.
   * The {@link Sensor}s will be excluded by default for the values below the missing data threshold.
   */
  defaultFlatlineThreshold?: number | null;

  /**
   * A threshold of {@link Sensor} missing data percentage.
   * The {@link Sensor}s will be excluded by default for the values below the missing data threshold.
   */
  defaultMissingDataThreshold?: number | null;

  /**
   * The size of dataset for training.
   */
  defaultTrainingDataset?: number | null;

  /**
   * A {@link Period} of time before each event to exclude {@link Sensor} data for training.
   */
  defaultPreEventMaskPeriod?: IPeriod | null;

  /**
   * A {@link Period} of time after each event to exclude {@link Sensor} data for training and inference.
   */
  defaultPostEventMaskPeriod?: IPeriod | null;

  /**
   * A {@link Interval} of time to analize the data of the {@link Sensor}.
   */
  defaultInterval?: string | null;

  /**
   * Defines the partition of the subset on the training step.
   */
  defaultTrainingSubset: string;

  /**
   * Default value for {@link ReliabilityDataPreparationUiBaseSettings#variance}.
   */
  defaultVariance?: number | null;

  /**
   * Whether to disable the data interval input
   */
  disableInterval?: boolean;

  /**
   * Array of rules indicating the time period when {@link ReliabilityAsset} was non-operational
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  nonOperationalMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>;

  /**
   * A {@link Period} of time before each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training.
   */
  preNonOperationalMaskPeriod?: IPeriod | null;

  /**
   * A {@link Period} of time after each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training. This does not apply to inference.
   */
  postNonOperationalTrainingMaskPeriod?: IPeriod | null;

  /**
   * A {@link Period} of time after each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training. This does not apply to inference.
   */
  postNonOperationalInferenceMaskPeriod?: IPeriod | null;

  /**
   * A {@link Period} of time before each [event](ReliabilityAssetEvent) to exclude {@link Sensor} data for training.
   */
  preEventMaskPeriod: IPeriod;

  /**
   * A {@link Period} of time after each [event](ReliabilityAssetEvent) to exclude {@link Sensor} data for training and inference.
   */
  postEventMaskPeriod: IPeriod;

  /**
   * {@link TimeRange}s to exclude {@Sensor} data from training data.
   */
  dateRangeMaskTimeRanges?: C3.Array<TimeRange | null> | Array<ITimeRange | null>;

  /**
   * Array of rules indicating the time periods to exclude {@link Sensor} data from training data.
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  trainingRuleMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>;

  /**
   * Array of rules indicating the time periods to exclude {@link Sensor} data from inference data.
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  inferenceRuleMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>;

  /**
   * String of rules indicating the time period when {@link ReliabilityAsset} was non-operational
   */
  nonOperationalMasksExpression?: string | null;

  /**
   * String of rules indicating the time periods to exclude {@link Sensor} data from training data.
   */
  trainingRuleMasksExpression?: string | null;

  /**
   * String of rules indicating the time periods to exclude {@link Sensor} data from inference data.
   */
  inferenceRuleMasksExpression?: string | null;

  /**
   * The flatline sensor data threshold to use for the Data Preparation Job
   */
  flatlineThreshold?: number | null;

  /**
   * The missing sensor data threshold to use for the Data Preparation Job
   */
  missingDataThreshold?: number | null;

  /**
   * Start {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  windowStart: DateTime | Date | string;

  /**
   * End {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  windowEnd: DateTime | Date | string;

  /**
   * The percentage of the dataset used for training.
   */
  trainingPercentage: number;

  /**
   * Start Date of the dataset used for training.
   */
  trainStart?: DateTime | Date | string | null;

  /**
   * End Date of the dataset used for training.
   */
  trainEnd?: DateTime | Date | string | null;

  /**
   * Start Date of the dataset used for Validating.
   */
  validStart?: DateTime | Date | string | null;

  /**
   * End Date of the dataset used for Validating.
   */
  validEnd?: DateTime | Date | string | null;

  /**
   * The subset of the dataset to use for training.
   */
  trainingSubset: string;

  /**
   * The data {@link Interval} to analyze the data of the {@link Sensor}.
   */
  interval: string;

  /**
   * Metadata indicating the number of {@link ReliabilityAsset}s to run data preparation on.
   * This field is not set by the user.
   */
  numAssets?: number | null;

  /**
   * The assets that we want to run data preparation on. Used to filter {@link ReliabilityMlDatasetPreparationJob}
   * by asset.
   */
  targetAssets?: C3.Array<ReliabilityAsset | null> | Array<IReliabilityAsset | null>;

  /**
   * Sensors to include in the data preparation run.
   * Note: this field is metadata that is set automatically during
   * {@link BulkModelSetupUiSettings#startBulkModelSetup}, not by the user.
   */
  includeSensors?: C3.Array<Sensor | null> | Array<ISensor | null>;

  /**
   * Sensors to exclude from the data preparation run.
   * Note: this field is metadata that is set automatically during
   * {@link BulkModelSetupUiSettings#startBulkModelSetup}, not by the user.
   */
  excludeSensors?: C3.Array<Sensor | null> | Array<ISensor | null>;

  /**
   * Variance value used to filter {@link SensorDataReport}
   */
  variance?: number | null;

  /**
   * Stores the id of the {@link MlProject} that the user selected to create the new dataset
   */
  project?: IReliabilityMl.Project | null;

  /**
   * The date time ranges selected by the user for training
   */
  trainingDatasetTimeRanges?: C3.Array<TimeRange | null> | Array<ITimeRange | null>;

  /**
   * The date time ranges selected by the user for validation
   */
  validateDatasetTimeRanges?: C3.Array<TimeRange | null> | Array<ITimeRange | null>;

  /**
   * The selected split type, can be either by percentage or by time ranges.
   */
  splitByPercentage?: boolean;

  /**
   * Masks created when {@link ReliabilityDataPreparationUiBaseSettings#splitByPercentage} is
   * set to `false`. This field includes the unselected time ranges, which will be handled as
   * `mask_AdHocTraining` type masks.
   */
  extraTimeRangeMasks?: C3.Array<TimeRange | null> | Array<ITimeRange | null>;

  /**
   * The name to use for the Data Preparation Run
   */
  runName?: string | null;

  /**
   * The {@link ReliabilityAsset} id to run data prep on.
   */
  assetId: string;

  /**
   * The filter that represents all the selected sensor data reports.
   */
  selectedSensorDataReportsFilter: IFilter;

  /**
   * The filter that represents all the excluded sensor data reports.
   */
  excludedSensorDataReportsFilter: IFilter;

  /**
   * Array of {@link SensorDataReport#id}s manually excluded in data preparation.
   */
  manuallyExcludedSensors?: C3.Array<string | null> | Array<string | null>;

  /**
   * Array of {@link SensorDataReport#id}s manually included in data preparation.
   */
  manuallyIncludedSensors?: C3.Array<string | null> | Array<string | null>;

  /**
   * Array of additional {@link Sensor#id}s that have to be included in the dataset preparation.
   */
  additionalSensors?: C3.Array<string | null> | Array<string | null>;

  /**
   * Array of additional {@link ReliabilityAssetSensorRelation#id}s that have to be included in the dataset preparation.
   */
  additionalRasrs?: C3.Array<string | null> | Array<string | null>;

  /**
   * Total count of {@link ReliabilityMlDatasetPreparationRun#featureDataReports}
   */
  numFeatureDataReports?: number | null;

  /**
   * Various system fields.
   */
  meta?: IMeta | null;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  id?: string | null;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  name?: string | null;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  dataSpec?: IUiSdlNoData | null;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  disableDataRequestOnFirstRender?: boolean;

  /**
   * Whether the effect triggers and epics have been registered
   */
  triggersRegistered?: boolean;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  wrapWithMetadataId?: boolean;

  /**
   * The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
   */
  REDUX_NAMESPACE?: string | null;

  /**
   * Collection of extra async {@link UiSdlEffectTrigger}.
   */
  effectTriggers?: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>;

  /**
   * The {@link Interval} to display in the dataset preview.
   */
  previewInterval?: string | null;

  /**
   * The percentage of the dataset used for validation.
   */
  validationPercentage?: number | null;

  /**
   * The subset of the dataset to use for validation.
   */
  validationSubset?: string | null;

  /**
   * Boolean flag indicating whether a dataset should be shown.
   * Only used to prevent double data request on dataset page.
   */
  showDataset?: boolean;

  /**
   * The currently open dataset preparation job in the Data Preparation Grid on the Model Management, Jobs Page
   */
  currentlyOpenDataPreparationJob?: IReliabilityMlDatasetPreparationJob | null;

  /**
   * Boolean flag indicating whether to enable/disable 'Add Sensors' button
   * during time window and sensor selection step during Dataset Preparation for single {@link ReliabilityAsset}.
   */
  enableAddSensorsButton?: boolean;

  /**
   * Stores where the user should be redirected to if they hit "exit anyway" in the exit modal
   */
  redirectTo?: string | null;

  /**
   * Flag indicating whether to show the date lines in the dataset preview chart.
   */
  showDateLines?: boolean;
}

/**
 * Application state for the data preparation workflow.
 *
 * @remarks this represents a made instance of DataPreparationApplicationState
 */
declare class DataPreparationApplicationState extends Obj {

  /**
   * A {@link Period} to specify the {@link ReliabilityAsset} time window for {@link Sensor} data utilized in the dataset.
   */
  readonly defaultWindow?: Period | null;
  withDefaultWindow(defaultWindow: IPeriod | null): DataPreparationApplicationState;

  /**
   * Default start {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  readonly defaultWindowStart?: DateTime | null;
  withDefaultWindowStart(defaultWindowStart: DateTime | Date | string | null): DataPreparationApplicationState;

  /**
   * Default end {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  readonly defaultWindowEnd?: DateTime | null;
  withDefaultWindowEnd(defaultWindowEnd: DateTime | Date | string | null): DataPreparationApplicationState;

  /**
   * The default data {@link Interval} to analyze the data of the {@link Sensor}.
   */
  readonly defaultDataInterval?: string | null;
  withDefaultDataInterval(defaultDataInterval: string | null): DataPreparationApplicationState;

  /**
   * The default training percentage.
   */
  readonly defaultTrainingPercentage?: number | null;
  withDefaultTrainingPercentage(defaultTrainingPercentage: number | null): DataPreparationApplicationState;

  /**
   * The default validation percentage.
   */
  readonly defaultValidationPercentage?: number | null;
  withDefaultValidationPercentage(defaultValidationPercentage: number | null): DataPreparationApplicationState;

  /**
   * A threshold of {@link Sensor} flatline percentage.
   * The {@link Sensor}s will be excluded by default for the values below the missing data threshold.
   */
  readonly defaultFlatlineThreshold?: number | null;
  withDefaultFlatlineThreshold(defaultFlatlineThreshold: number | null): DataPreparationApplicationState;

  /**
   * A threshold of {@link Sensor} missing data percentage.
   * The {@link Sensor}s will be excluded by default for the values below the missing data threshold.
   */
  readonly defaultMissingDataThreshold?: number | null;
  withDefaultMissingDataThreshold(defaultMissingDataThreshold: number | null): DataPreparationApplicationState;

  /**
   * The size of dataset for training.
   */
  readonly defaultTrainingDataset?: number | null;
  withDefaultTrainingDataset(defaultTrainingDataset: number | null): DataPreparationApplicationState;

  /**
   * A {@link Period} of time before each event to exclude {@link Sensor} data for training.
   */
  readonly defaultPreEventMaskPeriod?: Period | null;
  withDefaultPreEventMaskPeriod(defaultPreEventMaskPeriod: IPeriod | null): DataPreparationApplicationState;

  /**
   * A {@link Period} of time after each event to exclude {@link Sensor} data for training and inference.
   */
  readonly defaultPostEventMaskPeriod?: Period | null;
  withDefaultPostEventMaskPeriod(defaultPostEventMaskPeriod: IPeriod | null): DataPreparationApplicationState;

  /**
   * A {@link Interval} of time to analize the data of the {@link Sensor}.
   */
  readonly defaultInterval?: string | null;
  withDefaultInterval(defaultInterval: string | null): DataPreparationApplicationState;

  /**
   * Defines the partition of the subset on the training step.
   */
  readonly defaultTrainingSubset: string;
  withDefaultTrainingSubset(defaultTrainingSubset: string): DataPreparationApplicationState;

  /**
   * Default value for {@link ReliabilityDataPreparationUiBaseSettings#variance}.
   */
  readonly defaultVariance?: number | null;
  withDefaultVariance(defaultVariance: number | null): DataPreparationApplicationState;

  /**
   * Whether to disable the data interval input
   */
  readonly disableInterval?: boolean;
  withDisableInterval(disableInterval: boolean): DataPreparationApplicationState;

  /**
   * Array of rules indicating the time period when {@link ReliabilityAsset} was non-operational
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  readonly nonOperationalMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;
  withNonOperationalMasks(nonOperationalMasks: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>): DataPreparationApplicationState;

  /**
   * A {@link Period} of time before each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training.
   */
  readonly preNonOperationalMaskPeriod?: Period | null;
  withPreNonOperationalMaskPeriod(preNonOperationalMaskPeriod: IPeriod | null): DataPreparationApplicationState;

  /**
   * A {@link Period} of time after each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training. This does not apply to inference.
   */
  readonly postNonOperationalTrainingMaskPeriod?: Period | null;
  withPostNonOperationalTrainingMaskPeriod(postNonOperationalTrainingMaskPeriod: IPeriod | null): DataPreparationApplicationState;

  /**
   * A {@link Period} of time after each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training. This does not apply to inference.
   */
  readonly postNonOperationalInferenceMaskPeriod?: Period | null;
  withPostNonOperationalInferenceMaskPeriod(postNonOperationalInferenceMaskPeriod: IPeriod | null): DataPreparationApplicationState;

  /**
   * A {@link Period} of time before each [event](ReliabilityAssetEvent) to exclude {@link Sensor} data for training.
   */
  readonly preEventMaskPeriod: Period;
  withPreEventMaskPeriod(preEventMaskPeriod: IPeriod): DataPreparationApplicationState;

  /**
   * A {@link Period} of time after each [event](ReliabilityAssetEvent) to exclude {@link Sensor} data for training and inference.
   */
  readonly postEventMaskPeriod: Period;
  withPostEventMaskPeriod(postEventMaskPeriod: IPeriod): DataPreparationApplicationState;

  /**
   * {@link TimeRange}s to exclude {@Sensor} data from training data.
   */
  readonly dateRangeMaskTimeRanges?: C3.Array<TimeRange | null>;
  withDateRangeMaskTimeRanges(dateRangeMaskTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): DataPreparationApplicationState;

  /**
   * Array of rules indicating the time periods to exclude {@link Sensor} data from training data.
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  readonly trainingRuleMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;
  withTrainingRuleMasks(trainingRuleMasks: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>): DataPreparationApplicationState;

  /**
   * Array of rules indicating the time periods to exclude {@link Sensor} data from inference data.
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  readonly inferenceRuleMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;
  withInferenceRuleMasks(inferenceRuleMasks: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>): DataPreparationApplicationState;

  /**
   * String of rules indicating the time period when {@link ReliabilityAsset} was non-operational
   */
  readonly nonOperationalMasksExpression?: string | null;
  withNonOperationalMasksExpression(nonOperationalMasksExpression: string | null): DataPreparationApplicationState;

  /**
   * String of rules indicating the time periods to exclude {@link Sensor} data from training data.
   */
  readonly trainingRuleMasksExpression?: string | null;
  withTrainingRuleMasksExpression(trainingRuleMasksExpression: string | null): DataPreparationApplicationState;

  /**
   * String of rules indicating the time periods to exclude {@link Sensor} data from inference data.
   */
  readonly inferenceRuleMasksExpression?: string | null;
  withInferenceRuleMasksExpression(inferenceRuleMasksExpression: string | null): DataPreparationApplicationState;

  /**
   * The flatline sensor data threshold to use for the Data Preparation Job
   */
  readonly flatlineThreshold?: number | null;
  withFlatlineThreshold(flatlineThreshold: number | null): DataPreparationApplicationState;

  /**
   * The missing sensor data threshold to use for the Data Preparation Job
   */
  readonly missingDataThreshold?: number | null;
  withMissingDataThreshold(missingDataThreshold: number | null): DataPreparationApplicationState;

  /**
   * Start {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  readonly windowStart: DateTime;
  withWindowStart(windowStart: DateTime | Date | string): DataPreparationApplicationState;

  /**
   * End {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  readonly windowEnd: DateTime;
  withWindowEnd(windowEnd: DateTime | Date | string): DataPreparationApplicationState;

  /**
   * The percentage of the dataset used for training.
   */
  readonly trainingPercentage: number;
  withTrainingPercentage(trainingPercentage: number): DataPreparationApplicationState;

  /**
   * Start Date of the dataset used for training.
   */
  readonly trainStart?: DateTime | null;
  withTrainStart(trainStart: DateTime | Date | string | null): DataPreparationApplicationState;

  /**
   * End Date of the dataset used for training.
   */
  readonly trainEnd?: DateTime | null;
  withTrainEnd(trainEnd: DateTime | Date | string | null): DataPreparationApplicationState;

  /**
   * Start Date of the dataset used for Validating.
   */
  readonly validStart?: DateTime | null;
  withValidStart(validStart: DateTime | Date | string | null): DataPreparationApplicationState;

  /**
   * End Date of the dataset used for Validating.
   */
  readonly validEnd?: DateTime | null;
  withValidEnd(validEnd: DateTime | Date | string | null): DataPreparationApplicationState;

  /**
   * The subset of the dataset to use for training.
   */
  readonly trainingSubset: string;
  withTrainingSubset(trainingSubset: string): DataPreparationApplicationState;

  /**
   * The data {@link Interval} to analyze the data of the {@link Sensor}.
   */
  readonly interval: string;
  withInterval(interval: string): DataPreparationApplicationState;

  /**
   * Metadata indicating the number of {@link ReliabilityAsset}s to run data preparation on.
   * This field is not set by the user.
   */
  readonly numAssets?: number | null;
  withNumAssets(numAssets: number | null): DataPreparationApplicationState;

  /**
   * The assets that we want to run data preparation on. Used to filter {@link ReliabilityMlDatasetPreparationJob}
   * by asset.
   */
  readonly targetAssets?: C3.Array<ReliabilityAsset | null>;
  withTargetAssets(targetAssets: C3.Array<ReliabilityAsset | null> | Array<IReliabilityAsset | null>): DataPreparationApplicationState;

  /**
   * Sensors to include in the data preparation run.
   * Note: this field is metadata that is set automatically during
   * {@link BulkModelSetupUiSettings#startBulkModelSetup}, not by the user.
   */
  readonly includeSensors?: C3.Array<Sensor | null>;
  withIncludeSensors(includeSensors: C3.Array<Sensor | null> | Array<ISensor | null>): DataPreparationApplicationState;

  /**
   * Sensors to exclude from the data preparation run.
   * Note: this field is metadata that is set automatically during
   * {@link BulkModelSetupUiSettings#startBulkModelSetup}, not by the user.
   */
  readonly excludeSensors?: C3.Array<Sensor | null>;
  withExcludeSensors(excludeSensors: C3.Array<Sensor | null> | Array<ISensor | null>): DataPreparationApplicationState;

  /**
   * Variance value used to filter {@link SensorDataReport}
   */
  readonly variance?: number | null;
  withVariance(variance: number | null): DataPreparationApplicationState;

  /**
   * Stores the id of the {@link MlProject} that the user selected to create the new dataset
   */
  readonly project?: ReliabilityMl.Project | null;
  withProject(project: IReliabilityMl.Project | null): DataPreparationApplicationState;

  /**
   * The date time ranges selected by the user for training
   */
  readonly trainingDatasetTimeRanges?: C3.Array<TimeRange | null>;
  withTrainingDatasetTimeRanges(trainingDatasetTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): DataPreparationApplicationState;

  /**
   * The date time ranges selected by the user for validation
   */
  readonly validateDatasetTimeRanges?: C3.Array<TimeRange | null>;
  withValidateDatasetTimeRanges(validateDatasetTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): DataPreparationApplicationState;

  /**
   * The selected split type, can be either by percentage or by time ranges.
   */
  readonly splitByPercentage?: boolean;
  withSplitByPercentage(splitByPercentage: boolean): DataPreparationApplicationState;

  /**
   * Masks created when {@link ReliabilityDataPreparationUiBaseSettings#splitByPercentage} is
   * set to `false`. This field includes the unselected time ranges, which will be handled as
   * `mask_AdHocTraining` type masks.
   */
  readonly extraTimeRangeMasks?: C3.Array<TimeRange | null>;
  withExtraTimeRangeMasks(extraTimeRangeMasks: C3.Array<TimeRange | null> | Array<ITimeRange | null>): DataPreparationApplicationState;

  /**
   * The name to use for the Data Preparation Run
   */
  readonly runName?: string | null;
  withRunName(runName: string | null): DataPreparationApplicationState;

  /**
   * The {@link ReliabilityAsset} id to run data prep on.
   */
  readonly assetId: string;
  withAssetId(assetId: string): DataPreparationApplicationState;

  /**
   * The filter that represents all the selected sensor data reports.
   */
  readonly selectedSensorDataReportsFilter: Filter;
  withSelectedSensorDataReportsFilter(selectedSensorDataReportsFilter: IFilter): DataPreparationApplicationState;

  /**
   * The filter that represents all the excluded sensor data reports.
   */
  readonly excludedSensorDataReportsFilter: Filter;
  withExcludedSensorDataReportsFilter(excludedSensorDataReportsFilter: IFilter): DataPreparationApplicationState;

  /**
   * Array of {@link SensorDataReport#id}s manually excluded in data preparation.
   */
  readonly manuallyExcludedSensors?: C3.Array<string | null>;
  withManuallyExcludedSensors(manuallyExcludedSensors: C3.Array<string | null> | Array<string | null>): DataPreparationApplicationState;

  /**
   * Array of {@link SensorDataReport#id}s manually included in data preparation.
   */
  readonly manuallyIncludedSensors?: C3.Array<string | null>;
  withManuallyIncludedSensors(manuallyIncludedSensors: C3.Array<string | null> | Array<string | null>): DataPreparationApplicationState;

  /**
   * Array of additional {@link Sensor#id}s that have to be included in the dataset preparation.
   */
  readonly additionalSensors?: C3.Array<string | null>;
  withAdditionalSensors(additionalSensors: C3.Array<string | null> | Array<string | null>): DataPreparationApplicationState;

  /**
   * Array of additional {@link ReliabilityAssetSensorRelation#id}s that have to be included in the dataset preparation.
   */
  readonly additionalRasrs?: C3.Array<string | null>;
  withAdditionalRasrs(additionalRasrs: C3.Array<string | null> | Array<string | null>): DataPreparationApplicationState;

  /**
   * Total count of {@link ReliabilityMlDatasetPreparationRun#featureDataReports}
   */
  readonly numFeatureDataReports?: number | null;
  withNumFeatureDataReports(numFeatureDataReports: number | null): DataPreparationApplicationState;

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): DataPreparationApplicationState;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): DataPreparationApplicationState;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): DataPreparationApplicationState;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): DataPreparationApplicationState;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): DataPreparationApplicationState;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): DataPreparationApplicationState;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): DataPreparationApplicationState;

  /**
   * The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
   */
  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): DataPreparationApplicationState;

  /**
   * Collection of extra async {@link UiSdlEffectTrigger}.
   */
  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): DataPreparationApplicationState;

  /**
   * The {@link Interval} to display in the dataset preview.
   */
  readonly previewInterval?: string | null;
  withPreviewInterval(previewInterval: string | null): DataPreparationApplicationState;

  /**
   * The percentage of the dataset used for validation.
   */
  readonly validationPercentage?: number | null;
  withValidationPercentage(validationPercentage: number | null): DataPreparationApplicationState;

  /**
   * The subset of the dataset to use for validation.
   */
  readonly validationSubset?: string | null;
  withValidationSubset(validationSubset: string | null): DataPreparationApplicationState;

  /**
   * Boolean flag indicating whether a dataset should be shown.
   * Only used to prevent double data request on dataset page.
   */
  readonly showDataset?: boolean;
  withShowDataset(showDataset: boolean): DataPreparationApplicationState;

  /**
   * The currently open dataset preparation job in the Data Preparation Grid on the Model Management, Jobs Page
   */
  readonly currentlyOpenDataPreparationJob?: ReliabilityMlDatasetPreparationJob | null;
  withCurrentlyOpenDataPreparationJob(currentlyOpenDataPreparationJob: IReliabilityMlDatasetPreparationJob | null): DataPreparationApplicationState;

  /**
   * Boolean flag indicating whether to enable/disable 'Add Sensors' button
   * during time window and sensor selection step during Dataset Preparation for single {@link ReliabilityAsset}.
   */
  readonly enableAddSensorsButton?: boolean;
  withEnableAddSensorsButton(enableAddSensorsButton: boolean): DataPreparationApplicationState;

  /**
   * Stores where the user should be redirected to if they hit "exit anyway" in the exit modal
   */
  readonly redirectTo?: string | null;
  withRedirectTo(redirectTo: string | null): DataPreparationApplicationState;

  /**
   * Flag indicating whether to show the date lines in the dataset preview chart.
   */
  readonly showDateLines?: boolean;
  withShowDateLines(showDateLines: boolean): DataPreparationApplicationState;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJson
   */
  static fromJson(json: any | null): DataPreparationApplicationState | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJsonString
   */
  static fromJsonString(json: string | null): DataPreparationApplicationState | null;

  /**
   * Load the XML-based representation and reconstruct the corresponding object.
   *
   * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
   * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
   * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
   * will return an instance of the correct type.
   *
   * @see #toXmlString
   */
  static fromXmlString(xml: string | null): DataPreparationApplicationState | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): DataPreparationApplicationState | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): DataPreparationApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): DataPreparationApplicationState;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): DataPreparationApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<DataPreparationApplicationState | null>;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * asynchronous `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<DataPreparationApplicationState | null>;

  /**
   * Result of this function call is a copy of current instance with specified field value replaced based on result of
   * the `mapper` invocation.
   * @param field
   *           field being mapped
   * @param includeEmpty
   *           if set, invokes mapper for fields with empty value
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): DataPreparationApplicationState;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): DataPreparationApplicationState;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param mapper
   *           function to be executed for each pair of field type and Obj instance for producing new reference value
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): DataPreparationApplicationState;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): DataPreparationApplicationState;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           name of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: string, value: any, doNotConvert?: boolean): DataPreparationApplicationState;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: FieldType, value: any, doNotConvert?: boolean): DataPreparationApplicationState;

  /**
   * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
   * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
   *
   * @param fields
   *           map of field names/values
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @return new Obj
   */
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): DataPreparationApplicationState;

  /**
   * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
   * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
   *
   * Immutable objects may return the same instance if the field being set does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path to set value at
   * @param value
   *           value to set
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @param doNotCreateIfMissing
   *           true indicates that any empty reference along the path will not set the value
   * @return new Obj
   */
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): DataPreparationApplicationState;

  /**
   * Builds a new Obj without the specified path field.
   *
   * Immutable objects may return the same instance if the field being removed does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path for field to remove
   * @return new Obj
   *
   * @see #withFieldAtPath
   * @see #withoutField
   */
  withoutFieldAtPath(path: string): DataPreparationApplicationState;

  /**
   * Builds a new Obj, removing the field with the provided name.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: string | null): DataPreparationApplicationState;

  /**
   * Builds a new Obj, removing the field with the provided field type.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: FieldType | null): DataPreparationApplicationState;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): DataPreparationApplicationState;

  /**
   * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
   * exact same type as the type of the obj to respect the "ordinal" of the field type
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           field types to remove
   * @return new Obj with removed fields
   */
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): DataPreparationApplicationState;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): DataPreparationApplicationState;

  /**
   * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
   * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
   * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
   * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
   * fields that have already been set.
   *
   * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
   * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
   *
   * @param includeEmptyRefsWithDefaults
   *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
   * @param defaultFields
   *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
   *           array will be ignored.
   * @return new Obj
   *
   * @see #defaultField
   * @see FieldType#defaultValueConst
   * @see FieldType#defaultValue
   */
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): DataPreparationApplicationState;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         name of the field to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: string): DataPreparationApplicationState;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         field type to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: FieldType): DataPreparationApplicationState;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         name of the field to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: string): DataPreparationApplicationState;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         field type to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: FieldType): DataPreparationApplicationState;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         name of the field to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: string): DataPreparationApplicationState;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         field type to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: FieldType): DataPreparationApplicationState;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
   *
   * @param other
   *           object
   * @param fieldPathMergeSpec
   *           mapping of fields of the object to the respective merge annotations
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): DataPreparationApplicationState;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence.
   *
   * @param other
   *           object
   * @param otherFieldsFilter
   *           only fields of otherFieldsFilter type from other are merged into this obj.
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, otherFieldsFilter: Type): DataPreparationApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): DataPreparationApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): DataPreparationApplicationState;

  mergeJson(json: any | null): DataPreparationApplicationState;

  /**
   * Merge the obj references within the current obj
   * @param deep
   *        If set, traverses the reference fields within the obj as well for a deep merge
   * @param objKey
   *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
   * @param filter
   *        Field paths that need to be filtered from this merge
   * @return Obj with child references merged
   */
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): DataPreparationApplicationState;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): DataPreparationApplicationState;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<DataPreparationApplicationState | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<DataPreparationApplicationState | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<DataPreparationApplicationState | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<DataPreparationApplicationState | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<DataPreparationApplicationState | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, DataPreparationApplicationState | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, DataPreparationApplicationState | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<DataPreparationApplicationState | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<DataPreparationApplicationState | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): DataPreparationApplicationState;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): DataPreparationApplicationState;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): DataPreparationApplicationState;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): DataPreparationApplicationState;

  /**
   * Construct an instance from provided fields
   * @param fields
   *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
   *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
   *            to Panda.make()
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
   *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
   *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
   *
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): DataPreparationApplicationState;

  /**
   * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
   *
   * ```js
   * User.make({
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   *
   * Obj.make({
   *   type: 'User',
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   * ```
   *
   * ```py
   * c3.User.make({
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.Obj.make({
   *   "type": 'User',
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.User(email='joe@smith.com', realName='Joe Smith')
   *
   * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
   * ```
   *
   * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
   * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
   * such as {@link Ann.Ser} do not apply.
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: any, withDefaults?: boolean): DataPreparationApplicationState;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): DataPreparationApplicationState | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): DataPreparationApplicationState;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: C3.Map<FieldType | null, any> | null): C3.Map<FieldType | null, any>;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): DataPreparationApplicationState;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): DataPreparationApplicationState;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<DataPreparationApplicationState>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): DataPreparationApplicationState;

  /**
   * Creates mask overrides based on this {@link ReliabilityDataPreparationUiMaskSettings}.
   * These are meant to be passed directly into {@link ReliabilityMlMaskPreparationSpec}. Each override is created
   * as a {@link Feature}, and returned as a map of override feature field to the corresponding {@link Feature}.
   *
   * @param interval
   *           Interval in which the underlying {@link Feature} should evaluate on. Should match the dataset's interval.
   * @param returnMetricExpressions
   *           If true, returns the metric expressions of the mask overrides.
   *           If false, returns the created Features.
   * @return A map of override feature field to either Feature objects or metric expression strings.
   */
  createMaskOverrides(interval?: string | null, returnMetricExpressions?: boolean): C3.Map<string | null, Feature | null> | C3.Map<string | null, string | null> | null;

  /**
   * Transform an array of {@link ReliabilityDataPreparationRuleMaskSpec} to a {@link Feature} that is 1 if any of the
   * rule critera are met, 0 otherwise.
   *
   * @param spec
   *           Represents the masks that will be converted into a Feature
   * @param returnMetricExpression
   *           If true, returns the metric expression that represents the given rule masks.
   *           If false, returns the created Feature.
   * @return Either a Feature object or a metric expression string.
   */
  static createRuleMask(spec?: ReliabilityDataPreparationUiCreateRuleMaskSpec | null, returnMetricExpression?: boolean): Feature | null | string | null | null;

  /**
   * Based on the given {@link ReliabilityDataPreparationRuleMaskSpec}, creates a metric expression that represents
   * all of the given rule masks. This can be used to create a metric/feature that returns 1 if any rule's criteria
   * is met. Does not take pre/post mask periods into account.
   *
   * @param masks
   *           Represents the masks that will be converted into a metric expression
   * @return A metric expression string representing the rule masks.
   */
  static createBasicRuleMaskMetricExpression(masks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>): string | null;

  /**
   * Creates a {@link ReliabilityMlDatasetPreparationSpec}
   * based on the fields from {@link ReliabilityDataPreparationUiBaseSettings}
   * @param includedSensorIds
   *           The ids of the sensors to include in the dataset
   * @param excludedSensorIds
   *           The ids of the sensors to exclude in the dataset
   * @param additionalRasrs
   *           Additional reliability asset sensor relations to include.
   * @return A spec that can be used to start a {@link ReliabilityMlDatasetPreparationJob}
   */
  makeBaseSpec(includedSensorIds?: C3.Array<string | null>, excludedSensorIds?: C3.Array<string | null>, additionalRasrs?: C3.Array<ReliabilityAssetSensorRelation | null>): ReliabilityMlDatasetPreparationSpec;

  /**
   * Converts these settings to a {@link ReliabilityMlDatasetPreparationSpec}
   * for use in running data preparation.
   * @return A {@link ReliabilityMlDatasetPreparationSpec} object.
   */
  toSpec(): ReliabilityMlDatasetPreparationSpec;

  /**
   * Transform an array of {@link ReliabilityDataPreparationRuleMaskSpec} to a {@link Feature}
   * @param masks
   *           Represents the masks that will be converted into a Feature
   * @param interval
   *           Interval in which the Feature is created.
   * @return A {@link Feature} object created from the masks.
   */
  static createRuleMaskFeatures(masks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>, interval?: string | null): Feature | null;

  /**
   * Returns the number of intervals (rounded to the nearest integer) which fit in the given period.
   * Returns null if one or more params missing.
   * @param period
   *           The period to convert to interval count.
   * @param interval
   *           The interval to use for calculation.
   * @return The number of intervals that fit in the period, or null if parameters are missing.
   */
  static convertPeriodToIntervalCount(period?: Period | null, interval?: string | null): number | null;

  /**
   * Generates a {@link Period} instance from a given {@link Interval} and assetEventsWindow.
   * If the {@link Interval} is not a standard {@link TemporalUnit}, it is converted to seconds, because {@link Period} instances
   * only support {@link TemporalUnit} values as the unit. The total duration in seconds is then used to create the {@link Period}.
   * If the {@link Interval} is a valid {@link TemporalUnit}, it's used directly as the unit of the {@link Period}.
   *
   * @param interval
   *           Represents the base time {@link Interval} used to define the length of the {@link Period}.
   * @param assetEventsWindow
   *           Represents the window of time associated with {@link ReliabilityAssetEvent}s.
   * @return A {@link Period} using the {@link Interval interval} and assetEventsWindow if the {@link Interval interval} is a
   *         valid {@link TemporalUnit}, or based on its duration in seconds otherwise.
   */
  generateEventMaskPeriod(interval: string, assetEventsWindow: number): Period;

  /**
   * Generates the time ranges not covered by the given training and validation ranges
   * within the overall time range.
   * @return An array of {@link TimeRange} objects representing unselected time ranges.
   */
  getUnselectedTimeRanges(): C3.Array<TimeRange | null>;

  /**
   * Starts a {@link ReliabilityMlDatasetPreparationJob} from these settings.
   */
  startJob(): ReliabilityMlDatasetPreparationJob;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<DataPreparationApplicationState | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<DataPreparationApplicationState | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<DataPreparationApplicationState | null>;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow | null>;

  /**
   * Finds rows matching specification and returns them as iterator of Arrow batches.
   *
   * @param spec
   *           Specification of what rows to return.
   * @return Iterator of Arrow batches.
   */
  static scanArrow(spec: ScanArrowSpec): ArrowIterator | null;

  /**
   * Fetched multiple obj instances in multiple locales based on specification.
   *
   * @param spec
   *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
   *        type.
   * @return Requested objs where key of map is locale id
   */
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<DataPreparationApplicationState | null> | null>;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec | null): number;

  /**
   * Gets the estimated count of objs that a fetch on the type with the optional filter will return.
   * For non-kv types, The count is obtained from the query explain plan for the fetch.
   * For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
   * other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
   * upper bound for the partition. For more accurate results, perform fillBuckets first.
   *
   * @param spec
   *        Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
   *        explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
   *        fields.
   * @param updateStatistics
   *        If true, the database statistics for all tables involved in the query will be updated prior to obtaining
   *        the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
   *
   * @return The requested estimated count.
   */
  static fetchCountEstimated(spec?: FetchFilterSpec | null, updateStatistics?: boolean): number;

  /**
   * Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
   * a callback function for the given batch.
   *
   * @param spec
   *           Specification of the scan action.
   * @return Statistics of the scan action.
   */
  static scan(spec: ScanSpec): ScanStats | null;

  /**
   * Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
   *
   * @param spec
   *        Spec indicating how the operation should work.
   *
   * IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
   *             rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
   *             cause an issue if the results are blindly used to create filters for fetching batches as the last batch
   *             would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
   *             other would be specified, depending on whether you are interested in controlling the number of batches
   *             or batch size.
   *
   * @return A stream of batch ids based on the input parameters.
   */
  static batchIds(spec?: BatchIdsSpec | null): Stream<string | null>;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec | null): boolean;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(filter: Filter): boolean;

  /**
   * @return key field type.
   */
  static keyFieldType(): FieldType;

  /**
   * @return key field value.
   */
  keyFieldValue(): string | null;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  singletonMap(): C3.Map<string | null, WithKey | null>;

  /**
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): MetadataDeps<DataPreparationApplicationState | null>;

  save(subPath?: string | null, contentType?: string | null): DataPreparationApplicationState;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: DataPreparationApplicationState | null, spec?: UpsertSpec | null): DataPreparationApplicationState | null;

  upsert(srcObj?: DataPreparationApplicationState | null, spec?: UpsertSpec | null): DataPreparationApplicationState | null;

  /**
   * Retrieves folder that holds metadata.
   */
  static metadataFolder(): string | null;

  /**
   * If this Metadata type has arbitrary folder hierarchy.
   */
  static hasArbitraryFolderHierarchy(): boolean;

  /**
   * If metadata path is valid.
   * @param pkg
   *    name of the package
   * @param filePath
   *    path of metadata json file
   */
  static isValidMetadataJson(pkg: string, filePath: string): boolean;

  /**
   * Optional member function to enable custom validation logic.
   */
  validateMetadata(): ValidateObjResult;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
   * provide deserialization.
   *
   * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
   * of called-on type, but perhaps not the same type.
   *
   * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
   *
   * @see #toString
   */
  static fromString(s: string | null): DataPreparationApplicationState | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): DataPreparationApplicationState | null;

  jsonStringify(): string | null;

  static jsonify(value?: any): string | null;

  /**
   * A function to perform the setting and merging of keys and values for the dataSpec
   * and entity data in the react props. Components that need custom merging of multiple or nested datasources
   * should override this function and provide their own custom setting/merging logic.
   *
   * @param componentId
   *           The id of the component on which the function is being called
   * @param dataSpecFieldName
   *           The name of the field which is annotated as a dataSpec
   * @param dataDestinationFieldName
   *           Contains field name to store the returned data
   * @param props
   *           The object that will eventually be delivered to the component as react props
   * @param state
   *           The redux state
   * @returns props after the data has been set/merged
   */
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: DataPreparationApplicationState, state: UiSdlReduxState): DataPreparationApplicationState | null;

  /**
   * Triggered the first time a component renders. Applications should never
   * trigger this action manually, as it will be triggered internally by the
   * framework. If multiple instances of the same component (i.e. having the
   * same id) are present on a single page, the framework _may_ trigger this
   * action multiple times—at most once per component instance and at least once
   * overall.
   *
   * @param id
   *           The id of the component that is rendered.
   * @returns an `INITIAL_RENDER` action.
   */
  static renderInitialAction(id: string): UiSdlInitialRenderAction;

  /**
   * Triggered the first time a component renders. Component will trigger this action
   * when it registers effect triggers
   * @param id
   *           The id of the component that is rendered.
   * @returns an `REGISTER_TRIGGERS` action.
   */
  static registerTriggersAction(id: string): UiSdlRegisterTriggersAction;

  /**
   * Listens for actions of type `REGISTER_TRIGGERS` and flips a triggersRegistered when effect triggers are registered
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  triggersRegisterEffect(state: UiSdlReduxState, action: UiSdlRegisterTriggersAction): UiSdlReduxState;

  /**
   * Gets the namespace for this state
   * @return the namespace
   */
  static getStateNamespace(): string | null;

  /**
   * Gets the namespace for the initial state
   * @return the namespace
   */
  static getInitialStateNamespace(): string | null;

  /**
   * Gets the entire path to the state
   * @param id
   *           The id of the stateful entity
   * @return an array of the entire path to the state
   */
  static getConfigStatePath(id?: string | null): C3.Array<string | null>;

  /**
   * Gets the enire path to the initial state
   * @param id
   *           The id of the stateful entity
   * @return an array of the entire path to the initial state
   */
  static getInitialConfigStatePath(id?: string | null): C3.Array<string | null>;

  /**
   * Helper method to retrieve config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @returns The config value as UiSdlImmutableJS
   */
  static getConfigFromState(id?: string | null, state?: UiSdlReduxState | null, dataPath?: C3.Array<string | null>): UiSdlImmutableJS<any> | null;

  /**
   * Helper method to retrieve config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @param value The value to set
   * @returns The new state as UiSdlImmutableJS
   */
  static setConfigInState(id?: string | null, state?: UiSdlReduxState | null, dataPath?: C3.Array<string | null>, value?: any): UiSdlImmutableJS<any> | null;

  /**
   * Helper method to retrieve initial config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @returns The config value as UiSdlImmutableJS
   */
  static getInitialConfigFromState(id?: string | null, state?: UiSdlReduxState | null, dataPath?: C3.Array<string | null>): UiSdlImmutableJS<any> | null;

  /**
   * Helper method to retrieve initial config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @param value The value to set
   * @returns The new state as UiSdlImmutableJS
   */
  static setInitialConfigInState(id?: string | null, state?: UiSdlReduxState | null, dataPath?: C3.Array<string | null>, value?: any): UiSdlImmutableJS<any> | null;

  /**
   * Determines whether or not the `UiSdlState` can update state outside of its own state
   * @return true if the `UiSdlState` should not be able to set state outside of its own state
   */
  static isLimitEffectOnState(): boolean;

  /**
   * Retrieves config value from application state.
   *
   * @param stateId
   *           Id of the state.
   * @param state
   *           Redux state.
   * @param dataPath
   *           The path to the config value.
   * @returns Redux state.
   */
  static getConfigFromApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: C3.Array<string | null>): UiSdlReduxState;

  /**
   * Sets config value in application state.
   *
   * @param stateId
   *           Id of the state.
   * @param state
   *           Redux state.
   * @param dataPath
   *           The path to the config value.
   * @param value
   *           The config value to set.
   * @returns Redux state.
   */
  static setConfigInApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: C3.Array<string | null>, value: any): UiSdlReduxState;

  /**
   * Remove config value in the state.
   *
   * @param stateId
   *           Id of the state.
   * @param state
   *           Redux state.
   * @param dataPath
   *           The path to the config value.
   * @returns Redux state.
   */
  static removeConfigInApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: C3.Array<string | null>): UiSdlReduxState;

  /**
   * Triggers when the `UiSdlApplicationState` is initialized.
   *
   * @param stateId
   *            Id of the state.
   * @return a 'APPLICATION_STATE_INITIALIZE' action.
   */
  static initializeApplicationStateAction(stateId: string): UiSdlApplicationStateInitializeAction;

  /**
   * Action to delete data in a certain slice of the application state
   *
   * @param stateId
   *            Id of the state.
   * @param ids
   *            Ids of the objects to be deleted
   * @param dataPath
   *            slice of the application state to put the new object in
   * @return a 'APPLICATION_STATE_DATA_DELETE' action.
   */
  static applicationStateDeleteDataAction(stateId: string, ids?: C3.Array<string | null>, dataPath?: string | null): UiSdlApplicationStateDataDeleteAction;

  /**
   * Action to add data to a certain slice in the application state
   *
   * @param stateId
   *            Id of the state.
   * @param id
   *            Id of the newly added object
   * @param dataPath
   *            slice of the application state to put the new object in
   * @return a 'APPLICATION_STATE_DATA_ADD' action.
   */
  static applicationStateAddDataAction(stateId: string, id?: string | null, dataPath?: string | null): UiSdlApplicationStateDataAddAction;

  /**
   * Action to modify data to a certain slice in the application state
   *
   * @param stateId
   *            Id of the state.
   * @param id
   *            Id of the newly added object
   * @param dataPath
   *            slice of the application state to put the new object in
   * @return a 'APPLICATION_STATE_MODIFY_ADD' action.
   */
  static applicationStateModifyDataAction(stateId: string, id?: string | null, dataPath?: string | null, field?: string | null, newValue?: any): UiSdlApplicationStateDataModifyAction;

  /**
   * Listens to actions of 'APPLICATION_STATE_DATA_DELETE' and delete objects in the application state.
   *
   * @param state
   *            Redux state.
   * @param action
   *            Redux action.
   * @return the new Redux state.
   */
  static applicationStateDataDeleteEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataDeleteAction): UiSdlReduxState;

  /**
   * Listens to actions of 'APPLICATION_STATE_DATA_ADD' and add new data to the specified data path in the payload.
   *
   * @param state
   *            Redux state.
   * @param action
   *            Redux action.
   * @return the new Redux state.
   */
  static applicationStateDataAddEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataAddAction): UiSdlReduxState;

  /**
   * Listens to actions of 'APPLICATION_STATE_DATA_MODIFY' and add new data to the specified data path in the payload.
   *
   * @param state
   *            Redux state.
   * @param action
   *            Redux action.
   * @return the new Redux state.
   */
  static applicationStateDataModifyEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataModifyAction): UiSdlReduxState;

  /**
   * Generates a function that is able to return the application metadata from the redux state.
   * @param applicationId
   *            The application ID to generate a selector for
   * @return a function that can return the metadata for the applicationID when given the redux state
   */
  static generateSelector(applicationId?: string | null): λFunction<UiSdlReduxState | null, UiSdlImmutableJS<UiSdlApplicationState | null> | null> | null;

  /**
   * An action to remove a component's state by it's ID.
   *
   * @param componentId
   *        The id of the component, whose state needs to removed.
   * @param stateId
   *        The id of the state to be removed.
   *
   * @returns a Redux action of type `REMOVE_COMPONENT_STATE`.
   */
  static removeComponentStateAction(stateId: string, componentId: string): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `REMOVE_COMPONENT_STATE` and
   * removes state of the componentId passed in action's payload.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static removeComponentStateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Function for clearing the state of components based on an array of Ids.
   */
  static clearComponentState(componentsToClear: any): any;

  /**
   * Function for clearing the data of components based on an array of Ids
   */
  static clearComponentData(componentsToClear: any): any;

  /**
   * An action to change a field in this state.
   *
   * @param field
   *            The field in application state to be updated.
   * @param path
   *            The path the value to update the state field with (optional).
   * @param value
   *            The value to update the state field with. This is optional since you can also include a path to the value instead.
   * @returns a Redux action of type `SET_FIELD`.
   */
  static setFieldAction(field: string, value?: string | null, path?: string | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_FIELD` and store selected value in application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static setFieldReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to merge selected dataset preparation settings.
   *
   * @param dataPreparationSettings
   *            A {@link ReliabilityDataPreparationUiSettings} to update the application state with.
   * @returns a Redux action of type `MERGE_DATA_PREP_SETTINGS`.
   */
  static mergeDataPreparationSettingsAction(dataPreparationSettings: ReliabilityDataPreparationUiSettings): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `MERGE_DATA_PREP_SETTINGS` and merge dataset preparation settings in application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static mergeMultipleDataPreparationStateFields(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to clear application state.
   *
   * @returns a Redux action of type `CLEAR_STATE`.
   */
  static clearStateAction(): UiSdlReduxAction<any>;

  /**
   * Clears application state completely.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static clearStateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Reducer that loads test data into state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static loadTestData(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
