// TypeScript definitions for the C3 type BulkDataPreparationApplicationState

/**
 * Application state that stores all the UI logic for Bulk Data Preparation.
 *
 * @remarks this represents a value passed to a method that expects an instance of BulkDataPreparationApplicationState
 */
declare interface IBulkDataPreparationApplicationState {

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
   * Field name containing the desired name for the {@link ReliabilityMlDatasetPreparationJob}.
   */
  jobName?: string | null;

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

  configOverride?: string | null;

  secretOverride?: string | null;

  /**
   * Captures any issues that occurred while deserializing from filesystem
   */
  issues?: C3.Array<string | null> | Array<string | null>;

  /**
   * Defines the timeout to wait for the data preparation job to complete.
   */
  dataPreparationJobTimeout?: IDuration | null;

  /**
   * If true, indicates we are doing bulk data prep instead of normal data prep. Components should read
   * this field and act accordingly. This field will be set any time the `Reliability.BulkDataPrepModal`
   * is opened/closed.
   */
  isBulk?: boolean;

  /**
   * If true, data prep table action will be set to loading.
   */
  loadingDataPrep?: boolean;

  /**
   * Stores a count of jobs that have finished running. Includes both `completed` and `failed` jobs.
   */
  numCompletedJobs?: number | null;
}

/**
 * Application state that stores all the UI logic for Bulk Data Preparation.
 *
 * @remarks this represents a made instance of BulkDataPreparationApplicationState
 */
declare class BulkDataPreparationApplicationState extends Obj {

  /**
   * Array of rules indicating the time period when {@link ReliabilityAsset} was non-operational
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  readonly nonOperationalMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;
  withNonOperationalMasks(nonOperationalMasks: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>): BulkDataPreparationApplicationState;

  /**
   * Array of rules indicating the time period when {@link ReliabilityAsset} was non-operational
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  static readonly nonOperationalMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;

  /**
   * A {@link Period} of time before each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training.
   */
  readonly preNonOperationalMaskPeriod?: Period | null;
  withPreNonOperationalMaskPeriod(preNonOperationalMaskPeriod: IPeriod | null): BulkDataPreparationApplicationState;

  /**
   * A {@link Period} of time before each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training.
   */
  static readonly preNonOperationalMaskPeriod?: Period | null;

  /**
   * A {@link Period} of time after each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training. This does not apply to inference.
   */
  readonly postNonOperationalTrainingMaskPeriod?: Period | null;
  withPostNonOperationalTrainingMaskPeriod(postNonOperationalTrainingMaskPeriod: IPeriod | null): BulkDataPreparationApplicationState;

  /**
   * A {@link Period} of time after each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training. This does not apply to inference.
   */
  static readonly postNonOperationalTrainingMaskPeriod?: Period | null;

  /**
   * A {@link Period} of time after each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training. This does not apply to inference.
   */
  readonly postNonOperationalInferenceMaskPeriod?: Period | null;
  withPostNonOperationalInferenceMaskPeriod(postNonOperationalInferenceMaskPeriod: IPeriod | null): BulkDataPreparationApplicationState;

  /**
   * A {@link Period} of time after each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training. This does not apply to inference.
   */
  static readonly postNonOperationalInferenceMaskPeriod?: Period | null;

  /**
   * A {@link Period} of time before each [event](ReliabilityAssetEvent) to exclude {@link Sensor} data for training.
   */
  readonly preEventMaskPeriod: Period;
  withPreEventMaskPeriod(preEventMaskPeriod: IPeriod): BulkDataPreparationApplicationState;

  /**
   * A {@link Period} of time before each [event](ReliabilityAssetEvent) to exclude {@link Sensor} data for training.
   */
  static readonly preEventMaskPeriod: Period;

  /**
   * A {@link Period} of time after each [event](ReliabilityAssetEvent) to exclude {@link Sensor} data for training and inference.
   */
  readonly postEventMaskPeriod: Period;
  withPostEventMaskPeriod(postEventMaskPeriod: IPeriod): BulkDataPreparationApplicationState;

  /**
   * A {@link Period} of time after each [event](ReliabilityAssetEvent) to exclude {@link Sensor} data for training and inference.
   */
  static readonly postEventMaskPeriod: Period;

  /**
   * {@link TimeRange}s to exclude {@Sensor} data from training data.
   */
  readonly dateRangeMaskTimeRanges?: C3.Array<TimeRange | null>;
  withDateRangeMaskTimeRanges(dateRangeMaskTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): BulkDataPreparationApplicationState;

  /**
   * {@link TimeRange}s to exclude {@Sensor} data from training data.
   */
  static readonly dateRangeMaskTimeRanges?: C3.Array<TimeRange | null>;

  /**
   * Array of rules indicating the time periods to exclude {@link Sensor} data from training data.
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  readonly trainingRuleMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;
  withTrainingRuleMasks(trainingRuleMasks: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>): BulkDataPreparationApplicationState;

  /**
   * Array of rules indicating the time periods to exclude {@link Sensor} data from training data.
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  static readonly trainingRuleMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;

  /**
   * Array of rules indicating the time periods to exclude {@link Sensor} data from inference data.
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  readonly inferenceRuleMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;
  withInferenceRuleMasks(inferenceRuleMasks: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>): BulkDataPreparationApplicationState;

  /**
   * Array of rules indicating the time periods to exclude {@link Sensor} data from inference data.
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  static readonly inferenceRuleMasks?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;

  /**
   * String of rules indicating the time period when {@link ReliabilityAsset} was non-operational
   */
  readonly nonOperationalMasksExpression?: string | null;
  withNonOperationalMasksExpression(nonOperationalMasksExpression: string | null): BulkDataPreparationApplicationState;

  /**
   * String of rules indicating the time period when {@link ReliabilityAsset} was non-operational
   */
  static readonly nonOperationalMasksExpression?: string | null;

  /**
   * String of rules indicating the time periods to exclude {@link Sensor} data from training data.
   */
  readonly trainingRuleMasksExpression?: string | null;
  withTrainingRuleMasksExpression(trainingRuleMasksExpression: string | null): BulkDataPreparationApplicationState;

  /**
   * String of rules indicating the time periods to exclude {@link Sensor} data from training data.
   */
  static readonly trainingRuleMasksExpression?: string | null;

  /**
   * String of rules indicating the time periods to exclude {@link Sensor} data from inference data.
   */
  readonly inferenceRuleMasksExpression?: string | null;
  withInferenceRuleMasksExpression(inferenceRuleMasksExpression: string | null): BulkDataPreparationApplicationState;

  /**
   * String of rules indicating the time periods to exclude {@link Sensor} data from inference data.
   */
  static readonly inferenceRuleMasksExpression?: string | null;

  /**
   * The flatline sensor data threshold to use for the Data Preparation Job
   */
  readonly flatlineThreshold?: number | null;
  withFlatlineThreshold(flatlineThreshold: number | null): BulkDataPreparationApplicationState;

  /**
   * The flatline sensor data threshold to use for the Data Preparation Job
   */
  static readonly flatlineThreshold?: number | null;

  /**
   * The missing sensor data threshold to use for the Data Preparation Job
   */
  readonly missingDataThreshold?: number | null;
  withMissingDataThreshold(missingDataThreshold: number | null): BulkDataPreparationApplicationState;

  /**
   * The missing sensor data threshold to use for the Data Preparation Job
   */
  static readonly missingDataThreshold?: number | null;

  /**
   * Start {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  readonly windowStart: DateTime;
  withWindowStart(windowStart: DateTime | Date | string): BulkDataPreparationApplicationState;

  /**
   * Start {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  static readonly windowStart: DateTime;

  /**
   * End {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  readonly windowEnd: DateTime;
  withWindowEnd(windowEnd: DateTime | Date | string): BulkDataPreparationApplicationState;

  /**
   * End {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  static readonly windowEnd: DateTime;

  /**
   * The percentage of the dataset used for training.
   */
  readonly trainingPercentage: number;
  withTrainingPercentage(trainingPercentage: number): BulkDataPreparationApplicationState;

  /**
   * The percentage of the dataset used for training.
   */
  static readonly trainingPercentage: number;

  /**
   * Start Date of the dataset used for training.
   */
  readonly trainStart?: DateTime | null;
  withTrainStart(trainStart: DateTime | Date | string | null): BulkDataPreparationApplicationState;

  /**
   * Start Date of the dataset used for training.
   */
  static readonly trainStart?: DateTime | null;

  /**
   * End Date of the dataset used for training.
   */
  readonly trainEnd?: DateTime | null;
  withTrainEnd(trainEnd: DateTime | Date | string | null): BulkDataPreparationApplicationState;

  /**
   * End Date of the dataset used for training.
   */
  static readonly trainEnd?: DateTime | null;

  /**
   * Start Date of the dataset used for Validating.
   */
  readonly validStart?: DateTime | null;
  withValidStart(validStart: DateTime | Date | string | null): BulkDataPreparationApplicationState;

  /**
   * Start Date of the dataset used for Validating.
   */
  static readonly validStart?: DateTime | null;

  /**
   * End Date of the dataset used for Validating.
   */
  readonly validEnd?: DateTime | null;
  withValidEnd(validEnd: DateTime | Date | string | null): BulkDataPreparationApplicationState;

  /**
   * End Date of the dataset used for Validating.
   */
  static readonly validEnd?: DateTime | null;

  /**
   * The subset of the dataset to use for training.
   */
  readonly trainingSubset: string;
  withTrainingSubset(trainingSubset: string): BulkDataPreparationApplicationState;

  /**
   * The subset of the dataset to use for training.
   */
  static readonly trainingSubset: string;

  /**
   * The data {@link Interval} to analyze the data of the {@link Sensor}.
   */
  readonly interval: string;
  withInterval(interval: string): BulkDataPreparationApplicationState;

  /**
   * The data {@link Interval} to analyze the data of the {@link Sensor}.
   */
  static readonly interval: string;

  /**
   * Metadata indicating the number of {@link ReliabilityAsset}s to run data preparation on.
   * This field is not set by the user.
   */
  readonly numAssets?: number | null;
  withNumAssets(numAssets: number | null): BulkDataPreparationApplicationState;

  /**
   * Metadata indicating the number of {@link ReliabilityAsset}s to run data preparation on.
   * This field is not set by the user.
   */
  static readonly numAssets?: number | null;

  /**
   * The assets that we want to run data preparation on. Used to filter {@link ReliabilityMlDatasetPreparationJob}
   * by asset.
   */
  readonly targetAssets?: C3.Array<ReliabilityAsset | null>;
  withTargetAssets(targetAssets: C3.Array<ReliabilityAsset | null> | Array<IReliabilityAsset | null>): BulkDataPreparationApplicationState;

  /**
   * The assets that we want to run data preparation on. Used to filter {@link ReliabilityMlDatasetPreparationJob}
   * by asset.
   */
  static readonly targetAssets?: C3.Array<ReliabilityAsset | null>;

  /**
   * Sensors to include in the data preparation run.
   * Note: this field is metadata that is set automatically during
   * {@link BulkModelSetupUiSettings#startBulkModelSetup}, not by the user.
   */
  readonly includeSensors?: C3.Array<Sensor | null>;
  withIncludeSensors(includeSensors: C3.Array<Sensor | null> | Array<ISensor | null>): BulkDataPreparationApplicationState;

  /**
   * Sensors to include in the data preparation run.
   * Note: this field is metadata that is set automatically during
   * {@link BulkModelSetupUiSettings#startBulkModelSetup}, not by the user.
   */
  static readonly includeSensors?: C3.Array<Sensor | null>;

  /**
   * Sensors to exclude from the data preparation run.
   * Note: this field is metadata that is set automatically during
   * {@link BulkModelSetupUiSettings#startBulkModelSetup}, not by the user.
   */
  readonly excludeSensors?: C3.Array<Sensor | null>;
  withExcludeSensors(excludeSensors: C3.Array<Sensor | null> | Array<ISensor | null>): BulkDataPreparationApplicationState;

  /**
   * Sensors to exclude from the data preparation run.
   * Note: this field is metadata that is set automatically during
   * {@link BulkModelSetupUiSettings#startBulkModelSetup}, not by the user.
   */
  static readonly excludeSensors?: C3.Array<Sensor | null>;

  /**
   * Variance value used to filter {@link SensorDataReport}
   */
  readonly variance?: number | null;
  withVariance(variance: number | null): BulkDataPreparationApplicationState;

  /**
   * Variance value used to filter {@link SensorDataReport}
   */
  static readonly variance?: number | null;

  /**
   * Stores the id of the {@link MlProject} that the user selected to create the new dataset
   */
  readonly project?: ReliabilityMl.Project | null;
  withProject(project: IReliabilityMl.Project | null): BulkDataPreparationApplicationState;

  /**
   * Stores the id of the {@link MlProject} that the user selected to create the new dataset
   */
  static readonly project?: ReliabilityMl.Project | null;

  /**
   * The date time ranges selected by the user for training
   */
  readonly trainingDatasetTimeRanges?: C3.Array<TimeRange | null>;
  withTrainingDatasetTimeRanges(trainingDatasetTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): BulkDataPreparationApplicationState;

  /**
   * The date time ranges selected by the user for training
   */
  static readonly trainingDatasetTimeRanges?: C3.Array<TimeRange | null>;

  /**
   * The date time ranges selected by the user for validation
   */
  readonly validateDatasetTimeRanges?: C3.Array<TimeRange | null>;
  withValidateDatasetTimeRanges(validateDatasetTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): BulkDataPreparationApplicationState;

  /**
   * The date time ranges selected by the user for validation
   */
  static readonly validateDatasetTimeRanges?: C3.Array<TimeRange | null>;

  /**
   * The selected split type, can be either by percentage or by time ranges.
   */
  readonly splitByPercentage?: boolean;
  withSplitByPercentage(splitByPercentage: boolean): BulkDataPreparationApplicationState;

  /**
   * The selected split type, can be either by percentage or by time ranges.
   */
  static readonly splitByPercentage?: boolean;

  /**
   * Masks created when {@link ReliabilityDataPreparationUiBaseSettings#splitByPercentage} is
   * set to `false`. This field includes the unselected time ranges, which will be handled as
   * `mask_AdHocTraining` type masks.
   */
  readonly extraTimeRangeMasks?: C3.Array<TimeRange | null>;
  withExtraTimeRangeMasks(extraTimeRangeMasks: C3.Array<TimeRange | null> | Array<ITimeRange | null>): BulkDataPreparationApplicationState;

  /**
   * Masks created when {@link ReliabilityDataPreparationUiBaseSettings#splitByPercentage} is
   * set to `false`. This field includes the unselected time ranges, which will be handled as
   * `mask_AdHocTraining` type masks.
   */
  static readonly extraTimeRangeMasks?: C3.Array<TimeRange | null>;

  /**
   * Field name containing the desired name for the {@link ReliabilityMlDatasetPreparationJob}.
   */
  readonly jobName?: string | null;
  withJobName(jobName: string | null): BulkDataPreparationApplicationState;

  /**
   * Field name containing the desired name for the {@link ReliabilityMlDatasetPreparationJob}.
   */
  static readonly jobName?: string | null;

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BulkDataPreparationApplicationState;

  /**
   * Various system fields.
   */
  static readonly meta?: Meta | null;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): BulkDataPreparationApplicationState;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  static readonly id?: string | null;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): BulkDataPreparationApplicationState;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  static readonly name?: string | null;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): BulkDataPreparationApplicationState;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  static readonly dataSpec?: UiSdlNoData | null;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BulkDataPreparationApplicationState;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  static readonly disableDataRequestOnFirstRender?: boolean;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BulkDataPreparationApplicationState;

  /**
   * Whether the effect triggers and epics have been registered
   */
  static readonly triggersRegistered?: boolean;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BulkDataPreparationApplicationState;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  static readonly wrapWithMetadataId?: boolean;

  /**
   * The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
   */
  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): BulkDataPreparationApplicationState;

  /**
   * The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
   */
  static readonly REDUX_NAMESPACE?: string | null;

  /**
   * Collection of extra async {@link UiSdlEffectTrigger}.
   */
  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): BulkDataPreparationApplicationState;

  /**
   * Collection of extra async {@link UiSdlEffectTrigger}.
   */
  static readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;

  /**
   * A {@link Period} to specify the {@link ReliabilityAsset} time window for {@link Sensor} data utilized in the dataset.
   */
  readonly defaultWindow?: Period | null;
  withDefaultWindow(defaultWindow: IPeriod | null): BulkDataPreparationApplicationState;

  /**
   * A {@link Period} to specify the {@link ReliabilityAsset} time window for {@link Sensor} data utilized in the dataset.
   */
  static readonly defaultWindow?: Period | null;

  /**
   * Default start {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  readonly defaultWindowStart?: DateTime | null;
  withDefaultWindowStart(defaultWindowStart: DateTime | Date | string | null): BulkDataPreparationApplicationState;

  /**
   * Default start {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  static readonly defaultWindowStart?: DateTime | null;

  /**
   * Default end {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  readonly defaultWindowEnd?: DateTime | null;
  withDefaultWindowEnd(defaultWindowEnd: DateTime | Date | string | null): BulkDataPreparationApplicationState;

  /**
   * Default end {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  static readonly defaultWindowEnd?: DateTime | null;

  /**
   * The default data {@link Interval} to analyze the data of the {@link Sensor}.
   */
  readonly defaultDataInterval?: string | null;
  withDefaultDataInterval(defaultDataInterval: string | null): BulkDataPreparationApplicationState;

  /**
   * The default data {@link Interval} to analyze the data of the {@link Sensor}.
   */
  static readonly defaultDataInterval?: string | null;

  /**
   * The default training percentage.
   */
  readonly defaultTrainingPercentage?: number | null;
  withDefaultTrainingPercentage(defaultTrainingPercentage: number | null): BulkDataPreparationApplicationState;

  /**
   * The default training percentage.
   */
  static readonly defaultTrainingPercentage?: number | null;

  /**
   * The default validation percentage.
   */
  readonly defaultValidationPercentage?: number | null;
  withDefaultValidationPercentage(defaultValidationPercentage: number | null): BulkDataPreparationApplicationState;

  /**
   * The default validation percentage.
   */
  static readonly defaultValidationPercentage?: number | null;

  /**
   * A threshold of {@link Sensor} flatline percentage.
   * The {@link Sensor}s will be excluded by default for the values below the missing data threshold.
   */
  readonly defaultFlatlineThreshold?: number | null;
  withDefaultFlatlineThreshold(defaultFlatlineThreshold: number | null): BulkDataPreparationApplicationState;

  /**
   * A threshold of {@link Sensor} flatline percentage.
   * The {@link Sensor}s will be excluded by default for the values below the missing data threshold.
   */
  static readonly defaultFlatlineThreshold?: number | null;

  /**
   * A threshold of {@link Sensor} missing data percentage.
   * The {@link Sensor}s will be excluded by default for the values below the missing data threshold.
   */
  readonly defaultMissingDataThreshold?: number | null;
  withDefaultMissingDataThreshold(defaultMissingDataThreshold: number | null): BulkDataPreparationApplicationState;

  /**
   * A threshold of {@link Sensor} missing data percentage.
   * The {@link Sensor}s will be excluded by default for the values below the missing data threshold.
   */
  static readonly defaultMissingDataThreshold?: number | null;

  /**
   * The size of dataset for training.
   */
  readonly defaultTrainingDataset?: number | null;
  withDefaultTrainingDataset(defaultTrainingDataset: number | null): BulkDataPreparationApplicationState;

  /**
   * The size of dataset for training.
   */
  static readonly defaultTrainingDataset?: number | null;

  /**
   * A {@link Period} of time before each event to exclude {@link Sensor} data for training.
   */
  readonly defaultPreEventMaskPeriod?: Period | null;
  withDefaultPreEventMaskPeriod(defaultPreEventMaskPeriod: IPeriod | null): BulkDataPreparationApplicationState;

  /**
   * A {@link Period} of time before each event to exclude {@link Sensor} data for training.
   */
  static readonly defaultPreEventMaskPeriod?: Period | null;

  /**
   * A {@link Period} of time after each event to exclude {@link Sensor} data for training and inference.
   */
  readonly defaultPostEventMaskPeriod?: Period | null;
  withDefaultPostEventMaskPeriod(defaultPostEventMaskPeriod: IPeriod | null): BulkDataPreparationApplicationState;

  /**
   * A {@link Period} of time after each event to exclude {@link Sensor} data for training and inference.
   */
  static readonly defaultPostEventMaskPeriod?: Period | null;

  /**
   * A {@link Interval} of time to analize the data of the {@link Sensor}.
   */
  readonly defaultInterval?: string | null;
  withDefaultInterval(defaultInterval: string | null): BulkDataPreparationApplicationState;

  /**
   * A {@link Interval} of time to analize the data of the {@link Sensor}.
   */
  static readonly defaultInterval?: string | null;

  /**
   * Defines the partition of the subset on the training step.
   */
  readonly defaultTrainingSubset: string;
  withDefaultTrainingSubset(defaultTrainingSubset: string): BulkDataPreparationApplicationState;

  /**
   * Defines the partition of the subset on the training step.
   */
  static readonly defaultTrainingSubset: string;

  /**
   * Default value for {@link ReliabilityDataPreparationUiBaseSettings#variance}.
   */
  readonly defaultVariance?: number | null;
  withDefaultVariance(defaultVariance: number | null): BulkDataPreparationApplicationState;

  /**
   * Default value for {@link ReliabilityDataPreparationUiBaseSettings#variance}.
   */
  static readonly defaultVariance?: number | null;

  /**
   * Whether to disable the data interval input
   */
  readonly disableInterval?: boolean;
  withDisableInterval(disableInterval: boolean): BulkDataPreparationApplicationState;

  /**
   * Whether to disable the data interval input
   */
  static readonly disableInterval?: boolean;

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): BulkDataPreparationApplicationState;

  static readonly configOverride?: string | null;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): BulkDataPreparationApplicationState;

  static readonly secretOverride?: string | null;

  /**
   * Captures any issues that occurred while deserializing from filesystem
   */
  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): BulkDataPreparationApplicationState;

  /**
   * Captures any issues that occurred while deserializing from filesystem
   */
  static readonly issues?: C3.Array<string | null>;

  /**
   * Defines the timeout to wait for the data preparation job to complete.
   */
  readonly dataPreparationJobTimeout?: Duration | null;
  withDataPreparationJobTimeout(dataPreparationJobTimeout: IDuration | null): BulkDataPreparationApplicationState;

  /**
   * Defines the timeout to wait for the data preparation job to complete.
   */
  static readonly dataPreparationJobTimeout?: Duration | null;

  /**
   * If true, indicates we are doing bulk data prep instead of normal data prep. Components should read
   * this field and act accordingly. This field will be set any time the `Reliability.BulkDataPrepModal`
   * is opened/closed.
   */
  readonly isBulk?: boolean;
  withIsBulk(isBulk: boolean): BulkDataPreparationApplicationState;

  /**
   * If true, indicates we are doing bulk data prep instead of normal data prep. Components should read
   * this field and act accordingly. This field will be set any time the `Reliability.BulkDataPrepModal`
   * is opened/closed.
   */
  static readonly isBulk?: boolean;

  /**
   * If true, data prep table action will be set to loading.
   */
  readonly loadingDataPrep?: boolean;
  withLoadingDataPrep(loadingDataPrep: boolean): BulkDataPreparationApplicationState;

  /**
   * If true, data prep table action will be set to loading.
   */
  static readonly loadingDataPrep?: boolean;

  /**
   * Stores a count of jobs that have finished running. Includes both `completed` and `failed` jobs.
   */
  readonly numCompletedJobs?: number | null;
  withNumCompletedJobs(numCompletedJobs: number | null): BulkDataPreparationApplicationState;

  /**
   * Stores a count of jobs that have finished running. Includes both `completed` and `failed` jobs.
   */
  static readonly numCompletedJobs?: number | null;

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
  static fromJson(json: any | null): BulkDataPreparationApplicationState | null;

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
  static fromJsonString(json: string | null): BulkDataPreparationApplicationState | null;

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
  static fromXmlString(xml: string | null): BulkDataPreparationApplicationState | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): BulkDataPreparationApplicationState | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): BulkDataPreparationApplicationState;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  static replaceType(old: Type, new_: Type): BulkDataPreparationApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): BulkDataPreparationApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): BulkDataPreparationApplicationState;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): BulkDataPreparationApplicationState;

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
  static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): BulkDataPreparationApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<BulkDataPreparationApplicationState | null>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<BulkDataPreparationApplicationState | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<BulkDataPreparationApplicationState | null>;

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
  static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<BulkDataPreparationApplicationState | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): BulkDataPreparationApplicationState;

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
  static mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): BulkDataPreparationApplicationState;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BulkDataPreparationApplicationState;

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
  static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BulkDataPreparationApplicationState;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BulkDataPreparationApplicationState;

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
  static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BulkDataPreparationApplicationState;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): BulkDataPreparationApplicationState;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  static validateObj(): BulkDataPreparationApplicationState;

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
  withField(field: string, value: any, doNotConvert?: boolean): BulkDataPreparationApplicationState;

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
  static withField(field: string, value: any, doNotConvert?: boolean): BulkDataPreparationApplicationState;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): BulkDataPreparationApplicationState;

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
  static withField(field: FieldType, value: any, doNotConvert?: boolean): BulkDataPreparationApplicationState;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): BulkDataPreparationApplicationState;

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
  static withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): BulkDataPreparationApplicationState;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): BulkDataPreparationApplicationState;

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
  static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): BulkDataPreparationApplicationState;

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
  withoutFieldAtPath(path: string): BulkDataPreparationApplicationState;

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
  static withoutFieldAtPath(path: string): BulkDataPreparationApplicationState;

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
  withoutField(field: string | null): BulkDataPreparationApplicationState;

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
  static withoutField(field: string | null): BulkDataPreparationApplicationState;

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
  withoutField(field: FieldType | null): BulkDataPreparationApplicationState;

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
  static withoutField(field: FieldType | null): BulkDataPreparationApplicationState;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): BulkDataPreparationApplicationState;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  static withoutFields(fields: C3.Array<string | null> | null): BulkDataPreparationApplicationState;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): BulkDataPreparationApplicationState;

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
  static withoutFieldsByType(fields: C3.Array<FieldType | null> | null): BulkDataPreparationApplicationState;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): BulkDataPreparationApplicationState;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  static withoutSecretFields(): BulkDataPreparationApplicationState;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): BulkDataPreparationApplicationState;

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
  static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): BulkDataPreparationApplicationState;

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
  defaultField(field: string): BulkDataPreparationApplicationState;

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
  static defaultField(field: string): BulkDataPreparationApplicationState;

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
  defaultField(field: FieldType): BulkDataPreparationApplicationState;

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
  static defaultField(field: FieldType): BulkDataPreparationApplicationState;

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
  unsetField(field: string): BulkDataPreparationApplicationState;

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
  static unsetField(field: string): BulkDataPreparationApplicationState;

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
  unsetField(field: FieldType): BulkDataPreparationApplicationState;

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
  static unsetField(field: FieldType): BulkDataPreparationApplicationState;

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
  removeField(field: string): BulkDataPreparationApplicationState;

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
  static removeField(field: string): BulkDataPreparationApplicationState;

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
  removeField(field: FieldType): BulkDataPreparationApplicationState;

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
  static removeField(field: FieldType): BulkDataPreparationApplicationState;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): BulkDataPreparationApplicationState;

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
  static mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): BulkDataPreparationApplicationState;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): BulkDataPreparationApplicationState;

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
  static mergeObj(other: Obj | null, otherFieldsFilter: Type): BulkDataPreparationApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): BulkDataPreparationApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  static mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): BulkDataPreparationApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): BulkDataPreparationApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  static mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): BulkDataPreparationApplicationState;

  mergeJson(json: any | null): BulkDataPreparationApplicationState;

  static mergeJson(json: any | null): BulkDataPreparationApplicationState;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): BulkDataPreparationApplicationState;

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
  static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): BulkDataPreparationApplicationState;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): BulkDataPreparationApplicationState;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  static sumObj(other: Obj | null, deep?: boolean): BulkDataPreparationApplicationState;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<BulkDataPreparationApplicationState | null>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonArray(): C3.Array<BulkDataPreparationApplicationState | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<BulkDataPreparationApplicationState | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<BulkDataPreparationApplicationState | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<BulkDataPreparationApplicationState | null>;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonSet(): C3.Set<BulkDataPreparationApplicationState | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<BulkDataPreparationApplicationState | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, BulkDataPreparationApplicationState | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, BulkDataPreparationApplicationState | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<BulkDataPreparationApplicationState | null>;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  static toBuilder(): ObjBuilder<BulkDataPreparationApplicationState | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<BulkDataPreparationApplicationState | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): BulkDataPreparationApplicationState;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): BulkDataPreparationApplicationState;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): BulkDataPreparationApplicationState;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): BulkDataPreparationApplicationState;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): BulkDataPreparationApplicationState;

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
  static make(fields: any, withDefaults?: boolean): BulkDataPreparationApplicationState;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): BulkDataPreparationApplicationState | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): BulkDataPreparationApplicationState;

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
  afterMake(): BulkDataPreparationApplicationState;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static afterMake(): BulkDataPreparationApplicationState;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): BulkDataPreparationApplicationState;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<BulkDataPreparationApplicationState>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): BulkDataPreparationApplicationState;

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
  static createMaskOverrides(interval?: string | null, returnMetricExpressions?: boolean): C3.Map<string | null, Feature | null> | C3.Map<string | null, string | null> | null;

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
  static makeBaseSpec(includedSensorIds?: C3.Array<string | null>, excludedSensorIds?: C3.Array<string | null>, additionalRasrs?: C3.Array<ReliabilityAssetSensorRelation | null>): ReliabilityMlDatasetPreparationSpec;

  /**
   * Converts these settings to a {@link ReliabilityMlDatasetPreparationSpec}
   * for use in running data preparation.
   * @return A {@link ReliabilityMlDatasetPreparationSpec} object.
   */
  toSpec(): ReliabilityMlDatasetPreparationSpec;

  /**
   * Converts these settings to a {@link ReliabilityMlDatasetPreparationSpec}
   * for use in running data preparation.
   * @return A {@link ReliabilityMlDatasetPreparationSpec} object.
   */
  static toSpec(): ReliabilityMlDatasetPreparationSpec;

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
  static generateEventMaskPeriod(interval: string, assetEventsWindow: number): Period;

  /**
   * Generates the time ranges not covered by the given training and validation ranges
   * within the overall time range.
   * @return An array of {@link TimeRange} objects representing unselected time ranges.
   */
  getUnselectedTimeRanges(): C3.Array<TimeRange | null>;

  /**
   * Generates the time ranges not covered by the given training and validation ranges
   * within the overall time range.
   * @return An array of {@link TimeRange} objects representing unselected time ranges.
   */
  static getUnselectedTimeRanges(): C3.Array<TimeRange | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<BulkDataPreparationApplicationState | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<BulkDataPreparationApplicationState | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<BulkDataPreparationApplicationState | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<BulkDataPreparationApplicationState | null> | null>;

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
   * @return key field value.
   */
  static keyFieldValue(): string | null;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  singletonMap(): C3.Map<string | null, WithKey | null>;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  static singletonMap(): C3.Map<string | null, WithKey | null>;

  /**
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): MetadataDeps<BulkDataPreparationApplicationState | null>;

  /**
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  static dependencies(): MetadataDeps<BulkDataPreparationApplicationState | null>;

  save(subPath?: string | null, contentType?: string | null): BulkDataPreparationApplicationState;

  static save(subPath?: string | null, contentType?: string | null): BulkDataPreparationApplicationState;

  remove(spec?: UpsertSpec | null): boolean;

  static remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  static removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: BulkDataPreparationApplicationState | null, spec?: UpsertSpec | null): BulkDataPreparationApplicationState | null;

  static update(srcObj?: BulkDataPreparationApplicationState | null, spec?: UpsertSpec | null): BulkDataPreparationApplicationState | null;

  upsert(srcObj?: BulkDataPreparationApplicationState | null, spec?: UpsertSpec | null): BulkDataPreparationApplicationState | null;

  static upsert(srcObj?: BulkDataPreparationApplicationState | null, spec?: UpsertSpec | null): BulkDataPreparationApplicationState | null;

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
   * Optional member function to enable custom validation logic.
   */
  static validateMetadata(): ValidateObjResult;

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
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  static toString(): string | null;

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
  static fromString(s: string | null): BulkDataPreparationApplicationState | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): BulkDataPreparationApplicationState | null;

  jsonStringify(): string | null;

  static jsonStringify(): string | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: BulkDataPreparationApplicationState, state: UiSdlReduxState): BulkDataPreparationApplicationState | null;

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
   * Listens for actions of type `REGISTER_TRIGGERS` and flips a triggersRegistered when effect triggers are registered
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static triggersRegisterEffect(state: UiSdlReduxState, action: UiSdlRegisterTriggersAction): UiSdlReduxState;

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
   * An action to change a field in the application state.
   *
   * @param appStateId
   *        The ID of the app state to change.
   * @param field
   *        The field in application state to be updated.
   * @param value
   *        The value to update the state field with. Takes precedence over the path param.
   * @param path
   *        The path in the action payload to get the value to update the state field with.
   * @return A Redux action of type `SET_FIELD`.
   */
  static setFieldAction(appStateId: string, field: string, value?: string | null, path?: string | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_FIELD` and stores selected value in application state.
   *
   * @param state
   *        The current Redux state.
   * @param action
   *        The Redux action that triggered this reducer.
   * @return A new Redux state.
   */
  static setFieldReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets multiple fields of the application state.
   *
   * @param appStateId
   *        The ID of the app state to change.
   * @param fieldToValueMap
   *        Map of key `field` in app state to value to set this `field`.
   * @param fieldToPathMap
   *        Map of key `field` to value `path`. `path` is the path in the action payload
   *        to get the value to set `field` to.
   * @return A Redux action of type `SET_MULTIPLE_FIELDS`.
   */
  static setMultipleFieldsAction(appStateId: string, fieldToValueMap?: C3.Map<string | null, any>, fieldToPathMap?: C3.Map<string | null, string | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_MULTIPLE_FIELDS` and updates application state accordingly.
   *
   * @param state
   *        The current Redux state.
   * @param action
   *        The Redux action that triggered this reducer.
   * @return A new Redux state.
   */
  static setMultipleFieldsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to clear application state.
   *
   * @param appStateId
   *        The ID of the app state to change.
   * @param keepFields
   *        The fields to keep in the application state.
   * @return A Redux action of type `CLEAR_STATE`.
   */
  static clearStateAction(appStateId: string, keepFields?: C3.Array<string | null>): UiSdlReduxAction<any>;

  /**
   * Clears application state completely.
   *
   * @param state
   *        The current Redux state.
   * @param action
   *        The Redux action that triggered this reducer.
   * @return A new Redux state.
   */
  static clearStateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * @return the one and only instance to be used when member functions are called on this type.
   */
  static inst(): BulkDataPreparationApplicationState;

  /**
   * @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
   */
  static cachedInst(): BulkDataPreparationApplicationState | null;

  /**
   * @return whether the cache already contains this instance
   */
  isCached(): boolean;

  /**
   * @return whether the cache already contains this instance
   */
  static isCached(): boolean;

  /**
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return stream of all available Cached instances.
   */
  static allCached(doNotProduceAll?: boolean): Stream<BulkDataPreparationApplicationState | null>;

  /**
   * @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return existing instances of this type that satisfy filter from data cache.
   */
  static find(filter?: string | null, doNotProduceAll?: boolean): Stream<BulkDataPreparationApplicationState | null>;

  /**
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return existing instances of this type that satisfy filter from data cache.
   */
  static findBy(field: string, value: any, doNotProduceAll?: boolean): Stream<BulkDataPreparationApplicationState | null>;

  /**
   * @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
   *
   * @see forCacheKey
   * @see getCached
   */
  static findByCacheKey(key: string): BulkDataPreparationApplicationState | null;

  /**
   * Returns cached instance by key, with secrets removed.
   */
  static forCacheKey(key: string | null): BulkDataPreparationApplicationState | null;

  /**
   * @return cached instance.
   *
   * @see forCacheKey
   * @see findByCacheKey
   */
  getCached(): BulkDataPreparationApplicationState | null;

  /**
   * @return cached instance.
   *
   * @see forCacheKey
   * @see findByCacheKey
   */
  static getCached(): BulkDataPreparationApplicationState | null;

  /**
   * @return newly produced cached instance.
   */
  refreshCache(): BulkDataPreparationApplicationState | null;

  /**
   * @return newly produced cached instance.
   */
  static refreshCache(): BulkDataPreparationApplicationState | null;

  /**
   * @return cache key for this instance.
   */
  cacheKey(): string;

  /**
   * @return cache key for this instance.
   */
  static cacheKey(): string;

  /**
   * Should produce an entry for the cache key. This method should not be called directly.
   */
  static produce(key: string): BulkDataPreparationApplicationState | null;

  /**
   * Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
   */
  static produceAll(): C3.Map<string | null, BulkDataPreparationApplicationState | null>;

  /**
   * Override for sub-types to produce all values.
   */
  static doProduceAll(): C3.Map<string | null, BulkDataPreparationApplicationState | null>;

  /**
   * Evicts this instance from cache on all nodes of this application.
   */
  evictFromCache(): void;

  /**
   * Evicts this instance from cache on all nodes of this application.
   */
  static evictFromCache(): void;

  /**
   * Evicts this instance from cache of the current node.
   */
  evictFromCacheLocalOnly(): void;

  /**
   * Evicts this instance from cache of the current node.
   */
  static evictFromCacheLocalOnly(): void;

  /**
   * Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
   * Will not trigger any cache invalidation broadcast.
   * see {@link Server#evictFromLocalAppsCaches}
   */
  evictFromCacheLocalOnlyAllApps(): void;

  /**
   * Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
   * Will not trigger any cache invalidation broadcast.
   * see {@link Server#evictFromLocalAppsCaches}
   */
  static evictFromCacheLocalOnlyAllApps(): void;

  /**
   * Clears the data cache for this type on all nodes of this application.
   */
  static clearCache(): void;

  /**
   * Clears the data cache for this type on the current node. Will not trigger any cache invalidation broadcast.
   */
  static clearCacheLocalOnly(): void;

  /**
   * Clears the data cache for this type on the current node for all local apps (c3-c3, env-c3, env-app) that live in the current node.
   * Will not trigger any cache invalidation broadcast.
   * see {@link Server#clearLocalAppsCaches}
   */
  static clearCacheLocalOnlyAllApps(): void;

  /**
   * Returns count of cached instances.
   */
  static cacheSize(): number | null;

  /**
   * Returns instance of the cache for this type.
   */
  static nativeCache(): any;

  /**
   * Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
   * configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#config instead of this method.
   */
  getConfig(): BulkDataPreparationApplicationState;

  /**
   * Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
   * configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#config instead of this method.
   */
  static getConfig(): BulkDataPreparationApplicationState;

  /**
   * @return cached config value for the provided field path if set or `null` or error otherwise depending on
   *         `failIfMissing`; note that will not return secret value.
   */
  configValue(path: string, failIfMissing?: boolean): any;

  /**
   * @return cached config value for the provided field path if set or `null` or error otherwise depending on
   *         `failIfMissing`; note that will not return secret value.
   */
  static configValue(path: string, failIfMissing?: boolean): any;

  /**
   * Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
   * is required. For Nameable configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
   */
  getSecret(): BulkDataPreparationApplicationState;

  /**
   * Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
   * is required. For Nameable configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
   */
  static getSecret(): BulkDataPreparationApplicationState;

  /**
   * @return cached secret value for the provided field path in this Config object or `null` if not set or error
   *         depending on `failIfMissing`.
   */
  secretValue(path: string, failIfMissing?: boolean): any;

  /**
   * @return cached secret value for the provided field path in this Config object or `null` if not set or error
   *         depending on `failIfMissing`.
   */
  static secretValue(path: string, failIfMissing?: boolean): any;

  /**
   * Reads and url decodes the content at the path.
   * Path must represent a string value.
   */
  decodedValue(path: string, failIfMissing?: boolean): string | null;

  /**
   * Reads and url decodes the content at the path.
   * Path must represent a string value.
   */
  static decodedValue(path: string, failIfMissing?: boolean): string | null;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.USER level.
   */
  isUserOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.USER level.
   */
  static isUserOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.APP level.
   */
  isAppOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.APP level.
   */
  static isAppOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
   */
  isClusterOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
   */
  static isClusterOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ENV level.
   */
  isEnvOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ENV level.
   */
  static isEnvOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
   */
  isRootOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
   */
  static isRootOverride(): boolean;

  /**
   * @return `true` if this configuration has not been set and comes from seed / defaults.
   */
  isSeed(): boolean;

  /**
   * @return `true` if this configuration has not been set and comes from seed / defaults.
   */
  static isSeed(): boolean;

  /**
   * @return `true` if provided path is a secret.
   */
  static isSecret(path: string): boolean;

  /**
   *  @return config key for this instance. The config key is a unique identifier for an instance of a config type.
   *  The config key varies based on whether the config is defined with:
   *     1. {@link Ann.Config#subfolder}
   *         In this case, the name of the subfolder will be included.
   *     2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
   *         In this case, the ID of the {@link User} will be included.
   *     3. mixes in {@link Named} or {@link Identified}
   * In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
   * the name of the config subtype will be used.
   *
   *  The config key includes the above three fields delimited by '/':
   *     {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
   *  ```
   *  | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
   *  |-------------------|---------------------|-------------------|-----------------------------|
   *  |       no          |         no          |        no         |           MyConfType        |
   *  |       yes         |         no          |        no         |       myUserId/MyConfType   |
   *  |       no          |         yes         |        no         |             abc             |
   *  |       no          |         no          |        yes        |      folder1/MyConfType     |
   *  |       no          |         yes         |        yes        |          folder1/abc        |
   *  |       yes         |         yes         |        no         |          myUserId/abc       |
   *  |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
   *  |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
   *  ```
   *  Note that the config key is a computed value and is not set-able.
   *  For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
   */
  configKey(): string | null;

  /**
   *  @return config key for this instance. The config key is a unique identifier for an instance of a config type.
   *  The config key varies based on whether the config is defined with:
   *     1. {@link Ann.Config#subfolder}
   *         In this case, the name of the subfolder will be included.
   *     2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
   *         In this case, the ID of the {@link User} will be included.
   *     3. mixes in {@link Named} or {@link Identified}
   * In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
   * the name of the config subtype will be used.
   *
   *  The config key includes the above three fields delimited by '/':
   *     {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
   *  ```
   *  | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
   *  |-------------------|---------------------|-------------------|-----------------------------|
   *  |       no          |         no          |        no         |           MyConfType        |
   *  |       yes         |         no          |        no         |       myUserId/MyConfType   |
   *  |       no          |         yes         |        no         |             abc             |
   *  |       no          |         no          |        yes        |      folder1/MyConfType     |
   *  |       no          |         yes         |        yes        |          folder1/abc        |
   *  |       yes         |         yes         |        no         |          myUserId/abc       |
   *  |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
   *  |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
   *  ```
   *  Note that the config key is a computed value and is not set-able.
   *  For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
   */
  static configKey(): string | null;

  /**
   * @return return cached config instance for provided config key.
   */
  static forConfigKey(configKey: string | null): BulkDataPreparationApplicationState | null;

  /**
   * @return stream of all available Config keys for this type; #forConfigKey can be used to look up Config instance.
   */
  static listConfigKeys(): Stream<string | null>;

  /**
   * @param
   *
   * @return stream of all available Config instances for this type.
   */
  static listConfigs(parallel?: boolean, filter?: λPredicate<string> | null): Stream<BulkDataPreparationApplicationState | null>;

  /**
   * @return all config template values by override.
   */
  allConfigValueOverrides(path: string): C3.Map<string | null, any | null>;

  /**
   * @return all config template values by override.
   */
  static allConfigValueOverrides(path: string): C3.Map<string | null, any | null>;

  /**
   * @return all config template jsons by override.
   */
  allConfigOverrides(): C3.Map<string | null, any | null>;

  /**
   * @return all config template jsons by override.
   */
  static allConfigOverrides(): C3.Map<string | null, any | null>;

  /**
   * @return all secret template values by override.
   */
  allSecretValueOverrides(path: string): C3.Map<string | null, any | null>;

  /**
   * @return all secret template values by override.
   */
  static allSecretValueOverrides(path: string): C3.Map<string | null, any | null>;

  /**
   * @return all secret templates by override.
   */
  allSecretOverrides(): C3.Map<string | null, any | null>;

  /**
   * @return all secret templates by override.
   */
  static allSecretOverrides(): C3.Map<string | null, any | null>;

  /**
   * Sets configuration field value at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  setConfigValue(path: string, value: any, override?: string | null, embeddedFileName?: string | null): void;

  /**
   * Sets configuration field value at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  static setConfigValue(path: string, value: any, override?: string | null, embeddedFileName?: string | null): void;

  /**
   * Sets multiple field values to those specified in the map. The map keys are the paths.
   * @see setConfigValue
   */
  setConfigValues(from: C3.Map<string, any>, override?: string | null): void;

  /**
   * Sets multiple field values to those specified in the map. The map keys are the paths.
   * @see setConfigValue
   */
  static setConfigValues(from: C3.Map<string, any>, override?: string | null): void;

  /**
   * Sets multiple field values to be the same as the passed instance.
   * @see setConfigValue
   */
  setConfigValues(from: BulkDataPreparationApplicationState, override?: string | null): void;

  /**
   * Sets multiple field values to be the same as the passed instance.
   * @see setConfigValue
   */
  static setConfigValues(from: BulkDataPreparationApplicationState, override?: string | null): void;

  /**
   * Sets configuration field value template at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  setConfigValueTemplate(path: string, valueTemplate: string | null, override?: string | null): void;

  /**
   * Sets configuration field value template at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  static setConfigValueTemplate(path: string, valueTemplate: string | null, override?: string | null): void;

  /**
   * Adds a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  insertConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string | null): void;

  /**
   * Adds a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static insertConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string | null): void;

  /**
   * Sets a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  setConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string | null): void;

  /**
   * Sets a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static setConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string | null): void;

  /**
   * Adds a single value to a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  addConfigElement(pathToCollectionField: string, value: any, override?: string | null): void;

  /**
   * Adds a single value to a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static addConfigElement(pathToCollectionField: string, value: any, override?: string | null): void;

  /**
   * Sets a key-value pair in specified map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  setConfigMapValue(pathToMapField: string, key: any, value: any, override?: string | null): void;

  /**
   * Sets a key-value pair in specified map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static setConfigMapValue(pathToMapField: string, key: any, value: any, override?: string | null): void;

  /**
   * Removes a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigElementAt(pathToCollectionField: string, index: number, override?: string | null): void;

  /**
   * Removes a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static removeConfigElementAt(pathToCollectionField: string, index: number, override?: string | null): void;

  /**
   * Removes a single value in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigElement(pathToCollectionField: string, value: any, override?: string | null): void;

  /**
   * Removes a single value in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static removeConfigElement(pathToCollectionField: string, value: any, override?: string | null): void;

  /**
   * Removes a single key in a map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigMapKey(pathToMapField: string, key: any, override?: string | null): void;

  /**
   * Removes a single key in a map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static removeConfigMapKey(pathToMapField: string, key: any, override?: string | null): void;

  /**
   * Url encodes the content at the path and returns new config object with the encoded value.
   * Path must represent a string value.
   */
  setEncodedValue(path: string, value: string, override: string): void;

  /**
   * Url encodes the content at the path and returns new config object with the encoded value.
   * Path must represent a string value.
   */
  static setEncodedValue(path: string, value: string, override: string): void;

  /**
   * Sets secret field value or secrets within value at provided path in this Config object.
   * @see clearSecretValue
   */
  setSecretValue(path: string, value: any, override?: string | null): void;

  /**
   * Sets secret field value or secrets within value at provided path in this Config object.
   * @see clearSecretValue
   */
  static setSecretValue(path: string, value: any, override?: string | null): void;

  /**
   * Sets multiple secret field values to those specified in the map. The map keys are the paths.
   * @see setSecretValue
   */
  setSecretValues(from: C3.Map<string, any>, override?: string | null): void;

  /**
   * Sets multiple secret field values to those specified in the map. The map keys are the paths.
   * @see setSecretValue
   */
  static setSecretValues(from: C3.Map<string, any>, override?: string | null): void;

  /**
   * Sets multiple secret field values to be the same as the passed instance.
   * @see setSecretValue
   */
  setSecretValues(from: BulkDataPreparationApplicationState, override?: string | null): void;

  /**
   * Sets multiple secret field values to be the same as the passed instance.
   * @see setSecretValue
   */
  static setSecretValues(from: BulkDataPreparationApplicationState, override?: string | null): void;

  /**
   * Sets secret field value template at provided path in this Config object.
   * @see clearSecretValue
   */
  setSecretValueTemplate(path: string, value: string | null, override?: string | null): void;

  /**
   * Sets secret field value template at provided path in this Config object.
   * @see clearSecretValue
   */
  static setSecretValueTemplate(path: string, value: string | null, override?: string | null): void;

  /**
   * Clears configuration field value at provided path in this Config object at provided override level. Note will not
   * clear secret value.
   */
  clearConfigValue(path: string, override?: string | null): void;

  /**
   * Clears configuration field value at provided path in this Config object at provided override level. Note will not
   * clear secret value.
   */
  static clearConfigValue(path: string, override?: string | null): void;

  /**
   * Clears secret field value at provided path in this Config object at provided override level.
   */
  clearSecretValue(path: string, override?: string | null): void;

  /**
   * Clears secret field value at provided path in this Config object at provided override level.
   */
  static clearSecretValue(path: string, override?: string | null): void;

  /**
   * Clears configuration field value at provided path in this Config object at all override levels. Note will not
   * clear secret value.
   */
  clearConfigValueAllOverrides(path: string): void;

  /**
   * Clears configuration field value at provided path in this Config object at all override levels. Note will not
   * clear secret value.
   */
  static clearConfigValueAllOverrides(path: string): void;

  /**
   * Clears secret field value at provided path in this Config object at all override levels.
   */
  clearSecretValueAllOverrides(path: string): void;

  /**
   * Clears secret field value at provided path in this Config object at all override levels.
   */
  static clearSecretValueAllOverrides(path: string): void;

  /**
   * @return config or secret value for the provided config key, field path, and override if set
   */
  static rawConfigOrSecretValue(configKey: string, path: string, override?: string | null, failIfMissing?: boolean): any | null;

  /**
   * Sets config or secret value for the provided config key, field path and override.
   */
  static setConfigOrSecretValue(configKey: string, path: string, value?: any, override?: string | null): void;

  /**
   * Sets config and secret value for the provided config key, field path and override. Equivalent to calling both
   * setConfigValue and setSecretValue
   */
  static setConfigAndSecretValue(configKey: string, path: string, value?: any, override?: string | null): void;

  /**
   * Sets config or secret value template for the provided config key, field path and override.
   */
  static setConfigOrSecretValueTemplate(configKey: string, path: string, valueTemplate?: string | null, override?: string | null): void;

  /**
   * @return `true` if this Config type has other sub types.
   */
  static hasSubTypes(): boolean;

  /**
   * @return true if this Config type has Ann.Config#secret annotation on the Config type of child config types
   */
  static hasSecretField(): boolean;

  /**
   * @return `true` if this Config type has only one instance.
   */
  static isSingleInstance(): boolean;

  /**
   * @returns `true` if this Config is user override-able.
   */
  static isUserOverridable(): boolean;

  /**
   * @return default configuration override level
   */
  static dfltOverride(override?: string | null): string;

  /**
   *  Loads config and secret by key if exists, default config, or `null` if `doNotDefaultIfMissing` config annotation is
   * true and config does not exist.
   *  Note that this skips caching and directly fetches config from the config store, and secret from vault.
   */
  static loadConfigAndSecret(configKey: string): BulkDataPreparationApplicationState | null;

  /**
   * Loads config override template json if exists or `null`. Will not include secrets.
   * Note that this skips caching and directly fetches config from the config store.
   */
  loadConfigOverride(override: string): any | null;

  /**
   * Loads config override template json if exists or `null`. Will not include secrets.
   * Note that this skips caching and directly fetches config from the config store.
   */
  static loadConfigOverride(override: string): any | null;

  /**
   * Loads secret override template json if exists or `null`. Will not include non secrets.
   * Note that this skips caching and directly fetches secret from the vault.
   */
  loadSecretOverride(override: string): any | null;

  /**
   * Loads secret override template json if exists or `null`. Will not include non secrets.
   * Note that this skips caching and directly fetches secret from the vault.
   */
  static loadSecretOverride(override: string): any | null;

  /**
   * @return file for an embedded config value.
   */
  embeddedFile(embeddedFileName: string, override?: string | null): File;

  /**
   * @return file for an embedded config value.
   */
  static embeddedFile(embeddedFileName: string, override?: string | null): File;

  /**
   * @return config folder name
   */
  static configFolder(): string;

  /**
   * @return config sub folder name for this type
   */
  static configSubFolder(): string;

  /**
   * @return config file encoded path for a given key and potentially user under the config dir for this type.
   */
  static configFileEncodedPath(configKey: string, userOverride?: boolean): string;

  /**
   * @return pair of config and secret files for a given override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  configAndSecretFiles(override: string): Pair<File | null, File | null> | null;

  /**
   * @return pair of config and secret files for a given override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  static configAndSecretFiles(override: string): Pair<File | null, File | null> | null;

  /**
   * @return the config file path for a config instance at a given override;
   */
  configFilePath(override: string): string | null;

  /**
   * @return the config file path for a config instance at a given override;
   */
  static configFilePath(override: string): string | null;

  /**
   * @return the secret file path for a config instance at a given override;
   */
  secretFilePath(override: string): string | null;

  /**
   * @return the secret file path for a config instance at a given override;
   */
  static secretFilePath(override: string): string | null;

  /**
   * @return pair of config and secret files for provided override / appId; note that will always return pair
   *         of Files even if physical file doesn't exist.
   */
  configAndSecretFilePair(override: string, appId: string): Pair<File | null, File | null> | null;

  /**
   * @return pair of config and secret files for provided override / appId; note that will always return pair
   *         of Files even if physical file doesn't exist.
   */
  static configAndSecretFilePair(override: string, appId: string): Pair<File | null, File | null> | null;

  /**
   * @return map of pair of config and secret files by override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  allConfigAndSecretFiles(): C3.Map<string | null, Pair<File | null, File | null> | null>;

  /**
   * @return map of pair of config and secret files by override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  static allConfigAndSecretFiles(): C3.Map<string | null, Pair<File | null, File | null> | null>;

  /**
   * @return pair of config and secret template directories for override
   */
  static configAndSecretDirs(override?: string | null): Pair<File | null, File | null> | null;

  /**
   * @return map of pair of config and secret template directories by override; note that will always return instance of
   *         File even if physical folder doesn't exist.
   */
  static allConfigAndSecretDirs(): C3.Map<string | null, Pair<File | null, File | null> | null>;

  /**
   * @return pair of config and secret Base directories for the given override
   */
  static configAndSecretOverrideBaseDirs(override?: string | null): Pair<File | null, File | null> | null;

  /**
   * @return config key for a given config or secret file. If file is not a valid config or secret then will return
   *         `null` or fail based on `failIfInvalid`
   */
  static configKeyForFile(file: File | null, failIfInvalid?: boolean): string | null;

  /**
   * @return config key for a given config or secret file url. If file is not a valid config or secret then will return
   *         `null` or fail based on `failIfInvalid`
   */
  static configKeyForFileUrl(fileUrl: string | null): string | null;

  /**
   * @return Config sub-type for a config directory name.
   */
  static configTypeForDir(dir: string, failIdInvalid?: boolean): Type | null;

  /**
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
   * #setSecret or #setSecretValue for that.
   */
  setConfig(override?: string | null): void;

  /**
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
   * #setSecret or #setSecretValue for that.
   */
  static setConfig(override?: string | null): void;

  /**
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
   * #setConfigValue or #setConfig for that.
   */
  setSecret(override?: string | null): void;

  /**
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
   * #setConfigValue or #setConfig for that.
   */
  static setSecret(override?: string | null): void;

  /**
   * Executes actions on all config override levels (within a valid range) for a particular instance of config.
   */
  eachOverride(action?: λBiConsumer<Config, string> | null): void;

  /**
   * Executes actions on all config override levels (within a valid range) for a particular instance of config.
   */
  static eachOverride(action?: λBiConsumer<Config, string> | null): void;

  /**
   * Executes actions on all config override levels (within a valid range) for the Type itself (not instance).
   */
  static eachOverrideOnType(action?: λConsumer<string> | null): void;

  /**
   * Minimum configuration override level. Default is {@link ConfigOverride#APP}.
   */
  static minOverride(): string;

  /**
   * Maximum configuration override level. Default is {@link ConfigOverride#ROOT}.
   */
  static maxOverride(): string;

  /**
   * Clears specified configuration override including secrets for this instance.
   *
   * @param override
   *        Specifies the {@link ConfigOverride} level, of this config to clear.
   */
  clearConfigAndSecretOverride(override: string): void;

  /**
   * Clears specified configuration override including secrets for this instance.
   *
   * @param override
   *        Specifies the {@link ConfigOverride} level, of this config to clear.
   */
  static clearConfigAndSecretOverride(override: string): void;

  /**
   * Clears specified configuration including secrets for this instance on all override levels.
   */
  clearConfigAndSecretAllOverrides(): void;

  /**
   * Clears specified configuration including secrets for this instance on all override levels.
   */
  static clearConfigAndSecretAllOverrides(): void;

  /**
   * Clears every config and secret instance for this type and subtypes on all overrides lower than the specified
   * override (that is, Config#clearAllConfigAndSecretOverrides with App override parameter will clear all configs on
   * {@link ConfigOverride#APP} and {@link ConfigOverride#USER} level).
   *
   * @param override
   *        Specifies the {@link ConfigOverride} level of this config to clear. All overrides lower than this override
   *        will also be cleared.
   * @param confirm
   *        Confirmation from user that they understand and confirm deletion of this configuration.
   */
  static clearAllConfigAndSecretOverrides(override: string, confirm?: boolean): void;

  /**
   * returns a list of all field paths that are secret
   */
  static secretFieldPaths(): C3.Array<FieldPath | null>;

  /**
   * @return this config without any secret values.
   */
  removeSecrets(): BulkDataPreparationApplicationState | null;

  /**
   * @return this config without any secret values.
   */
  static removeSecrets(): BulkDataPreparationApplicationState | null;

  /**
   * @return this config with only secret values.
   */
  removeNonSecrets(): BulkDataPreparationApplicationState | null;

  /**
   * @return this config with only secret values.
   */
  static removeNonSecrets(): BulkDataPreparationApplicationState | null;

  /**
   * Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
   * validation and setup.
   */
  validate(): BulkDataPreparationApplicationState;

  /**
   * Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
   * validation and setup.
   */
  static validate(): BulkDataPreparationApplicationState;

  /**
   * @return The cached and merged JSON of all defined configuration templates for this instance, including secrets.
   */
  static rawJson(configKey: string | null): any | null;

  /**
   * @return sets Json template for a specified override.
   */
  static setJson(configKey: string, json: any | null, secret?: boolean, override?: string | null): File;

  /**
   * @return sets Json template field for a specified override.
   */
  static setJsonValue(configKey: string, field: string, json: any | null, override?: string | null): File;

  /**
   * @return sets Json template field for a specified override.
   */
  static setJsonField(configKey: string, field: string, json: any | null, secret?: boolean, override?: string | null): File;

  /**
   * Returns json containing configuration template bindings for a provided config key. Override this method to provide your
   * own list of template bindings
   */
  static templateBindings(configKey: string | null): any | null;

  /**
   * Evaluate a given template by applying the default config bindings.
   * Default config bindings are:
   * 1. owner - owner of the config
   * 2. region - abbreviated region in which the cluster is
   * 3. cluster - current cluster id
   * 4. env - current env id
   * 5. app - current app id
   * 7. user - current user
   * 8. type - type on which this api is called
   * For example, "${owner}--${cluster}-${env}-${app}"
   *
   * @param template
   *            Template string that needs to be evaluated. For example, "${owner}--${cluster}-${env}-${app}-${schemaName}"
   * @param extraBindings
   *            Any additional binding params not included in the default config bindings
   * @return evaluated template
   */
  static evalTemplate(template: string, extraBindings?: C3.Map<string | null, string | null>): string;

  /**
   * Returns count of cached raw Json.
   */
  static rawJsonCacheSize(): number | null;

  /**
   * Returns instance of the cache for this type for raw Json.
   */
  static rawJsonNativeCache(): any;

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
   * Returns an action that updates the status of the bulk data prep progress indicator.
   *
   * @param stateId
   *        The ID of this application state.
   * @param shouldGoNext
   *        When `false`, this indicates that the action is for the previous step, while `true`
   *        indicates that the action is for the next step.
   * @return A Redux action to change the step
   */
  static changeStepAction(stateId: string, shouldGoNext: boolean): UiSdlReduxAction<any>;

  /**
   * When the `CHANGE_STEP` action is triggered, this epic updates the bulk data prep progress indicator
   * based on the current step.
   *
   * @param actionStream
   *           The observable stream of UI SDL actions
   * @param stateStream
   *           The observable stream of UI SDL states
   * @return An observable stream of UI SDL actions
   */
  static changeStepEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * An action to check if the user confirmed exit from the bulk data preparation workflow.
   *
   * @return A Redux action to close modals on exit
   */
  static closeModalsOnExitAction(): UiSdlReduxAction<any>;

  /**
   * An epic to check if the user confirmed exit from the bulk data preparation worflow.
   * If so, close the bulk data preparation modal. Otherwise, keep it opened.
   *
   * @param actionStream
   *           The observable stream of UI SDL actions
   * @param stateStream
   *           The observable stream of UI SDL states
   * @return An observable stream of UI SDL actions
   */
  static closeModalsOnExitEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * An action to indicate leaving the bulk data prep workflow.
   *
   * @return A Redux action to exit the UI workflow
   */
  static exitUiWorkflowAction(): UiSdlReduxAction<any>;

  /**
   * Closes the bulk data prep modal, the associated confirmation modal, and clears application state, except for
   * the `numCompletedJobs` field, which needs to be used outside the modal.
   *
   * @param actionStream
   *           The observable stream of UI SDL actions
   * @param stateStream
   *           The observable stream of UI SDL states
   * @return An observable stream of UI SDL actions
   */
  static exitUiWorkflow(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Returns an action that shows a banner and updates {@link #numCompletedJobs} if the number of `completed`
   * and `failed` {@link ReliabilityMlDatasetPreparationJob}s has changed.
   *
   * @param suppressBanner
   *            If true, the banner will not be shown.
   * @return A Redux action of type `CHECK_JOB_STATUS`.
   */
  static checkJobStatusAction(suppressBanner?: boolean): UiSdlReduxAction<any>;

  /**
   * Updates {@link #numCompletedJobs} if the number of `completed` and `failed`
   * {@link ReliabilityMlDatasetPreparationJob}s has changed.
   *
   * @param actionStream
   *           The observable stream of UI SDL actions
   * @param stateStream
   *           The observable stream of UI SDL states
   * @return An observable stream of UI SDL actions
   */
  static checkJobStatusEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Requests data for nested grids on Dataset Preparation Jobs Grid by embedding
   * parent grid ids into nested grid data requests.
   *
   * @param actionStream
   *           The observable stream of UI SDL actions
   * @param stateStream
   *           The observable stream of UI SDL states
   * @return redux actions of type `DATA_REQUEST` on each of the nested grids.
   */
  static refreshNestedGridEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * An action to start data preparation
   *
   * @param checkForDataValidation
   *            If set to true, the last data validation run status is checked for
   *            selected {@link ReliabilityAsset}s.
   *
   * @return a Redux action of type `START_UI_WORKFLOW`.
   */
  static startUiWorkflowAction(checkForDataValidation?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `START_UI_WORKFLOW`:
   * 1- Sets {@link #loadingDataPrep} to true
   * 2- Stores values from {@link DatasetPreparationSettingsConfig} into this state
   * 3- Opens corresponding modal
   * 4- Sets {@link #loadingDataPrep} to false
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @return An Observable action stream.
   */
  static startUiWorkflowEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * An action to begin bulk data preparation
   *
   * @return a Redux action of type `START_DATA_PREP`.
   */
  static startDataPrepAction(): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `START_DATA_PREP` to begin bulk data preparation,
   * exits the UI workflow, calls {@link #checkJobStatusAction} with param suppressBanner=true,
   * redirects to Jobs pages and shows a banner
   *
   * @param actionStream
   *           The observable stream of UI SDL actions
   * @param stateStream
   *           The observable stream of UI SDL states
   * @return An observable stream of UI SDL actions
   */
  static startDataPrepEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λConsumer<T> {
  (t: T): void
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λPredicate<T> {
  (t: T): boolean
}
