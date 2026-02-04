// TypeScript definitions for the C3 type ReliabilityDataPreparationUiSettings

/**
 * Type to store UI dataset preparation settings for a run of data prep on a single asset.
 * The settings serve as input arguments to create a {@link ReliabilityMlDatasetPreparationSpec}
 * for a specific asset.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityDataPreparationUiSettings
 */
declare interface IReliabilityDataPreparationUiSettings {

  /**
   * Array of rules indicating the time period when {@link ReliabilityAsset} was non-operational
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  nonOperationalMasks?: Array_Type<ReliabilityDataPreparationRuleMaskSpec> | Array<IReliabilityDataPreparationRuleMaskSpec>;

  /**
   * A {@link Period} of time before each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training.
   */
  preNonOperationalMaskPeriod?: IPeriod;

  /**
   * A {@link Period} of time after each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training. This does not apply to inference.
   */
  postNonOperationalTrainingMaskPeriod?: IPeriod;

  /**
   * A {@link Period} of time after each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training. This does not apply to inference.
   */
  postNonOperationalInferenceMaskPeriod?: IPeriod;

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
  dateRangeMaskTimeRanges?: Array_Type<TimeRange> | Array<ITimeRange>;

  /**
   * Array of rules indicating the time periods to exclude {@link Sensor} data from training data.
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  trainingRuleMasks?: Array_Type<ReliabilityDataPreparationRuleMaskSpec> | Array<IReliabilityDataPreparationRuleMaskSpec>;

  /**
   * Array of rules indicating the time periods to exclude {@link Sensor} data from inference data.
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  inferenceRuleMasks?: Array_Type<ReliabilityDataPreparationRuleMaskSpec> | Array<IReliabilityDataPreparationRuleMaskSpec>;

  /**
   * String of rules indicating the time period when {@link ReliabilityAsset} was non-operational
   */
  nonOperationalMasksExpression?: string;

  /**
   * String of rules indicating the time periods to exclude {@link Sensor} data from training data.
   */
  trainingRuleMasksExpression?: string;

  /**
   * String of rules indicating the time periods to exclude {@link Sensor} data from inference data.
   */
  inferenceRuleMasksExpression?: string;

  /**
   * The flatline sensor data threshold to use for the Data Preparation Job
   */
  flatlineThreshold?: number;

  /**
   * The missing sensor data threshold to use for the Data Preparation Job
   */
  missingDataThreshold?: number;

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
  trainStart?: DateTime | Date | string;

  /**
   * End Date of the dataset used for training.
   */
  trainEnd?: DateTime | Date | string;

  /**
   * Start Date of the dataset used for Validating.
   */
  validStart?: DateTime | Date | string;

  /**
   * End Date of the dataset used for Validating.
   */
  validEnd?: DateTime | Date | string;

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
  numAssets?: number;

  /**
   * The assets that we want to run data preparation on. Used to filter {@link ReliabilityMlDatasetPreparationJob}
   * by asset.
   */
  targetAssets?: Array_Type<ReliabilityAsset> | Array<IReliabilityAsset>;

  /**
   * Sensors to include in the data preparation run.
   * Note: this field is metadata that is set automatically during
   * {@link BulkModelSetupUiSettings#startBulkModelSetup}, not by the user.
   */
  includeSensors?: Array_Type<Sensor> | Array<ISensor>;

  /**
   * Sensors to exclude from the data preparation run.
   * Note: this field is metadata that is set automatically during
   * {@link BulkModelSetupUiSettings#startBulkModelSetup}, not by the user.
   */
  excludeSensors?: Array_Type<Sensor> | Array<ISensor>;

  /**
   * Variance value used to filter {@link SensorDataReport}
   */
  variance?: number;

  /**
   * Stores the id of the {@link MlProject} that the user selected to create the new dataset
   */
  project?: IReliabilityMl.Project;

  /**
   * The date time ranges selected by the user for training
   */
  trainingDatasetTimeRanges?: Array_Type<TimeRange> | Array<ITimeRange>;

  /**
   * The date time ranges selected by the user for validation
   */
  validateDatasetTimeRanges?: Array_Type<TimeRange> | Array<ITimeRange>;

  /**
   * The selected split type, can be either by percentage or by time ranges.
   */
  splitByPercentage?: boolean;

  /**
   * Masks created when {@link ReliabilityDataPreparationUiBaseSettings#splitByPercentage} is
   * set to `false`. This field includes the unselected time ranges, which will be handled as
   * `mask_AdHocTraining` type masks.
   */
  extraTimeRangeMasks?: Array_Type<TimeRange> | Array<ITimeRange>;

  /**
   * The name to use for the Data Preparation Run
   */
  runName?: string;

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
  manuallyExcludedSensors?: Array_Type<string> | Array<string>;

  /**
   * Array of {@link SensorDataReport#id}s manually included in data preparation.
   */
  manuallyIncludedSensors?: Array_Type<string> | Array<string>;

  /**
   * Array of additional {@link Sensor#id}s that have to be included in the dataset preparation.
   */
  additionalSensors?: Array_Type<string> | Array<string>;

  /**
   * Array of additional {@link ReliabilityAssetSensorRelation#id}s that have to be included in the dataset preparation.
   */
  additionalRasrs?: Array_Type<string> | Array<string>;

  /**
   * Total count of {@link ReliabilityMlDatasetPreparationRun#featureDataReports}
   */
  numFeatureDataReports?: number;
}

/**
 * Type to store UI dataset preparation settings for a run of data prep on a single asset.
 * The settings serve as input arguments to create a {@link ReliabilityMlDatasetPreparationSpec}
 * for a specific asset.
 *
 * @remarks this represents a made instance of ReliabilityDataPreparationUiSettings
 */
declare class ReliabilityDataPreparationUiSettings extends Obj  {

  /**
   * Array of rules indicating the time period when {@link ReliabilityAsset} was non-operational
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  readonly nonOperationalMasks?: Array_Type<ReliabilityDataPreparationRuleMaskSpec>;
  withNonOperationalMasks(nonOperationalMasks: Array_Type<ReliabilityDataPreparationRuleMaskSpec> | Array<IReliabilityDataPreparationRuleMaskSpec> | null): ReliabilityDataPreparationUiSettings;

  /**
   * A {@link Period} of time before each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training.
   */
  readonly preNonOperationalMaskPeriod?: Period;
  withPreNonOperationalMaskPeriod(preNonOperationalMaskPeriod: IPeriod | null): ReliabilityDataPreparationUiSettings;

  /**
   * A {@link Period} of time after each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training. This does not apply to inference.
   */
  readonly postNonOperationalTrainingMaskPeriod?: Period;
  withPostNonOperationalTrainingMaskPeriod(postNonOperationalTrainingMaskPeriod: IPeriod | null): ReliabilityDataPreparationUiSettings;

  /**
   * A {@link Period} of time after each non operational time period (as defined by {@link #nonOperationalMasks})
   * to exclude {@link Sensor} data for training. This does not apply to inference.
   */
  readonly postNonOperationalInferenceMaskPeriod?: Period;
  withPostNonOperationalInferenceMaskPeriod(postNonOperationalInferenceMaskPeriod: IPeriod | null): ReliabilityDataPreparationUiSettings;

  /**
   * A {@link Period} of time before each [event](ReliabilityAssetEvent) to exclude {@link Sensor} data for training.
   */
  readonly preEventMaskPeriod: Period;
  withPreEventMaskPeriod(preEventMaskPeriod: IPeriod): ReliabilityDataPreparationUiSettings;

  /**
   * A {@link Period} of time after each [event](ReliabilityAssetEvent) to exclude {@link Sensor} data for training and inference.
   */
  readonly postEventMaskPeriod: Period;
  withPostEventMaskPeriod(postEventMaskPeriod: IPeriod): ReliabilityDataPreparationUiSettings;

  /**
   * {@link TimeRange}s to exclude {@Sensor} data from training data.
   */
  readonly dateRangeMaskTimeRanges?: Array_Type<TimeRange>;
  withDateRangeMaskTimeRanges(dateRangeMaskTimeRanges: Array_Type<TimeRange> | Array<ITimeRange> | null): ReliabilityDataPreparationUiSettings;

  /**
   * Array of rules indicating the time periods to exclude {@link Sensor} data from training data.
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  readonly trainingRuleMasks?: Array_Type<ReliabilityDataPreparationRuleMaskSpec>;
  withTrainingRuleMasks(trainingRuleMasks: Array_Type<ReliabilityDataPreparationRuleMaskSpec> | Array<IReliabilityDataPreparationRuleMaskSpec> | null): ReliabilityDataPreparationUiSettings;

  /**
   * Array of rules indicating the time periods to exclude {@link Sensor} data from inference data.
   * {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
   */
  readonly inferenceRuleMasks?: Array_Type<ReliabilityDataPreparationRuleMaskSpec>;
  withInferenceRuleMasks(inferenceRuleMasks: Array_Type<ReliabilityDataPreparationRuleMaskSpec> | Array<IReliabilityDataPreparationRuleMaskSpec> | null): ReliabilityDataPreparationUiSettings;

  /**
   * String of rules indicating the time period when {@link ReliabilityAsset} was non-operational
   */
  readonly nonOperationalMasksExpression?: string;
  withNonOperationalMasksExpression(nonOperationalMasksExpression: string | null): ReliabilityDataPreparationUiSettings;

  /**
   * String of rules indicating the time periods to exclude {@link Sensor} data from training data.
   */
  readonly trainingRuleMasksExpression?: string;
  withTrainingRuleMasksExpression(trainingRuleMasksExpression: string | null): ReliabilityDataPreparationUiSettings;

  /**
   * String of rules indicating the time periods to exclude {@link Sensor} data from inference data.
   */
  readonly inferenceRuleMasksExpression?: string;
  withInferenceRuleMasksExpression(inferenceRuleMasksExpression: string | null): ReliabilityDataPreparationUiSettings;

  /**
   * The flatline sensor data threshold to use for the Data Preparation Job
   */
  readonly flatlineThreshold?: number;
  withFlatlineThreshold(flatlineThreshold: number | null): ReliabilityDataPreparationUiSettings;

  /**
   * The missing sensor data threshold to use for the Data Preparation Job
   */
  readonly missingDataThreshold?: number;
  withMissingDataThreshold(missingDataThreshold: number | null): ReliabilityDataPreparationUiSettings;

  /**
   * Start {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  readonly windowStart: DateTime;
  withWindowStart(windowStart: DateTime | Date | string): ReliabilityDataPreparationUiSettings;

  /**
   * End {@link datetime} of window for {@link Sensor} data utilized in the dataset.
   */
  readonly windowEnd: DateTime;
  withWindowEnd(windowEnd: DateTime | Date | string): ReliabilityDataPreparationUiSettings;

  /**
   * The percentage of the dataset used for training.
   */
  readonly trainingPercentage: number;
  withTrainingPercentage(trainingPercentage: number): ReliabilityDataPreparationUiSettings;

  /**
   * Start Date of the dataset used for training.
   */
  readonly trainStart?: DateTime;
  withTrainStart(trainStart: DateTime | Date | string | null): ReliabilityDataPreparationUiSettings;

  /**
   * End Date of the dataset used for training.
   */
  readonly trainEnd?: DateTime;
  withTrainEnd(trainEnd: DateTime | Date | string | null): ReliabilityDataPreparationUiSettings;

  /**
   * Start Date of the dataset used for Validating.
   */
  readonly validStart?: DateTime;
  withValidStart(validStart: DateTime | Date | string | null): ReliabilityDataPreparationUiSettings;

  /**
   * End Date of the dataset used for Validating.
   */
  readonly validEnd?: DateTime;
  withValidEnd(validEnd: DateTime | Date | string | null): ReliabilityDataPreparationUiSettings;

  /**
   * The subset of the dataset to use for training.
   */
  readonly trainingSubset: string;
  withTrainingSubset(trainingSubset: string): ReliabilityDataPreparationUiSettings;

  /**
   * The data {@link Interval} to analyze the data of the {@link Sensor}.
   */
  readonly interval: string;
  withInterval(interval: string): ReliabilityDataPreparationUiSettings;

  /**
   * Metadata indicating the number of {@link ReliabilityAsset}s to run data preparation on.
   * This field is not set by the user.
   */
  readonly numAssets?: number;
  withNumAssets(numAssets: number | null): ReliabilityDataPreparationUiSettings;

  /**
   * The assets that we want to run data preparation on. Used to filter {@link ReliabilityMlDatasetPreparationJob}
   * by asset.
   */
  readonly targetAssets?: Array_Type<ReliabilityAsset>;
  withTargetAssets(targetAssets: Array_Type<ReliabilityAsset> | Array<IReliabilityAsset> | null): ReliabilityDataPreparationUiSettings;

  /**
   * Sensors to include in the data preparation run.
   * Note: this field is metadata that is set automatically during
   * {@link BulkModelSetupUiSettings#startBulkModelSetup}, not by the user.
   */
  readonly includeSensors?: Array_Type<Sensor>;
  withIncludeSensors(includeSensors: Array_Type<Sensor> | Array<ISensor> | null): ReliabilityDataPreparationUiSettings;

  /**
   * Sensors to exclude from the data preparation run.
   * Note: this field is metadata that is set automatically during
   * {@link BulkModelSetupUiSettings#startBulkModelSetup}, not by the user.
   */
  readonly excludeSensors?: Array_Type<Sensor>;
  withExcludeSensors(excludeSensors: Array_Type<Sensor> | Array<ISensor> | null): ReliabilityDataPreparationUiSettings;

  /**
   * Variance value used to filter {@link SensorDataReport}
   */
  readonly variance?: number;
  withVariance(variance: number | null): ReliabilityDataPreparationUiSettings;

  /**
   * Stores the id of the {@link MlProject} that the user selected to create the new dataset
   */
  readonly project?: ReliabilityMl.Project;
  withProject(project: IReliabilityMl.Project | null): ReliabilityDataPreparationUiSettings;

  /**
   * The date time ranges selected by the user for training
   */
  readonly trainingDatasetTimeRanges?: Array_Type<TimeRange>;
  withTrainingDatasetTimeRanges(trainingDatasetTimeRanges: Array_Type<TimeRange> | Array<ITimeRange> | null): ReliabilityDataPreparationUiSettings;

  /**
   * The date time ranges selected by the user for validation
   */
  readonly validateDatasetTimeRanges?: Array_Type<TimeRange>;
  withValidateDatasetTimeRanges(validateDatasetTimeRanges: Array_Type<TimeRange> | Array<ITimeRange> | null): ReliabilityDataPreparationUiSettings;

  /**
   * The selected split type, can be either by percentage or by time ranges.
   */
  readonly splitByPercentage?: boolean;
  withSplitByPercentage(splitByPercentage: boolean): ReliabilityDataPreparationUiSettings;

  /**
   * Masks created when {@link ReliabilityDataPreparationUiBaseSettings#splitByPercentage} is
   * set to `false`. This field includes the unselected time ranges, which will be handled as
   * `mask_AdHocTraining` type masks.
   */
  readonly extraTimeRangeMasks?: Array_Type<TimeRange>;
  withExtraTimeRangeMasks(extraTimeRangeMasks: Array_Type<TimeRange> | Array<ITimeRange> | null): ReliabilityDataPreparationUiSettings;

  /**
   * The name to use for the Data Preparation Run
   */
  readonly runName?: string;
  withRunName(runName: string | null): ReliabilityDataPreparationUiSettings;

  /**
   * The {@link ReliabilityAsset} id to run data prep on.
   */
  readonly assetId: string;
  withAssetId(assetId: string): ReliabilityDataPreparationUiSettings;

  /**
   * The filter that represents all the selected sensor data reports.
   */
  readonly selectedSensorDataReportsFilter: Filter;
  withSelectedSensorDataReportsFilter(selectedSensorDataReportsFilter: IFilter): ReliabilityDataPreparationUiSettings;

  /**
   * The filter that represents all the excluded sensor data reports.
   */
  readonly excludedSensorDataReportsFilter: Filter;
  withExcludedSensorDataReportsFilter(excludedSensorDataReportsFilter: IFilter): ReliabilityDataPreparationUiSettings;

  /**
   * Array of {@link SensorDataReport#id}s manually excluded in data preparation.
   */
  readonly manuallyExcludedSensors?: Array_Type<string>;
  withManuallyExcludedSensors(manuallyExcludedSensors: Array_Type<string> | Array<string> | null): ReliabilityDataPreparationUiSettings;

  /**
   * Array of {@link SensorDataReport#id}s manually included in data preparation.
   */
  readonly manuallyIncludedSensors?: Array_Type<string>;
  withManuallyIncludedSensors(manuallyIncludedSensors: Array_Type<string> | Array<string> | null): ReliabilityDataPreparationUiSettings;

  /**
   * Array of additional {@link Sensor#id}s that have to be included in the dataset preparation.
   */
  readonly additionalSensors?: Array_Type<string>;
  withAdditionalSensors(additionalSensors: Array_Type<string> | Array<string> | null): ReliabilityDataPreparationUiSettings;

  /**
   * Array of additional {@link ReliabilityAssetSensorRelation#id}s that have to be included in the dataset preparation.
   */
  readonly additionalRasrs?: Array_Type<string>;
  withAdditionalRasrs(additionalRasrs: Array_Type<string> | Array<string> | null): ReliabilityDataPreparationUiSettings;

  /**
   * Total count of {@link ReliabilityMlDatasetPreparationRun#featureDataReports}
   */
  readonly numFeatureDataReports?: number;
  withNumFeatureDataReports(numFeatureDataReports: number | null): ReliabilityDataPreparationUiSettings;

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
  static fromJson(json: any): ReliabilityDataPreparationUiSettings | null;

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
  static fromJsonString(json: string): ReliabilityDataPreparationUiSettings | null;

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
  static fromXmlString(xml: string): ReliabilityDataPreparationUiSettings | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ReliabilityDataPreparationUiSettings | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ReliabilityDataPreparationUiSettings;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityDataPreparationUiSettings;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityDataPreparationUiSettings;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityDataPreparationUiSettings>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityDataPreparationUiSettings>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityDataPreparationUiSettings;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityDataPreparationUiSettings;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityDataPreparationUiSettings;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ReliabilityDataPreparationUiSettings;

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
  withField(field: string, value: any, doNotConvert?: boolean): ReliabilityDataPreparationUiSettings;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityDataPreparationUiSettings;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityDataPreparationUiSettings;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityDataPreparationUiSettings;

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
  withoutFieldAtPath(path: string): ReliabilityDataPreparationUiSettings;

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
  withoutField(field: string): ReliabilityDataPreparationUiSettings;

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
  withoutField(field: FieldType): ReliabilityDataPreparationUiSettings;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ReliabilityDataPreparationUiSettings;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityDataPreparationUiSettings;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ReliabilityDataPreparationUiSettings;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityDataPreparationUiSettings;

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
  defaultField(field: string): ReliabilityDataPreparationUiSettings;

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
  defaultField(field: FieldType): ReliabilityDataPreparationUiSettings;

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
  unsetField(field: string): ReliabilityDataPreparationUiSettings;

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
  unsetField(field: FieldType): ReliabilityDataPreparationUiSettings;

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
  removeField(field: string): ReliabilityDataPreparationUiSettings;

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
  removeField(field: FieldType): ReliabilityDataPreparationUiSettings;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityDataPreparationUiSettings;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityDataPreparationUiSettings;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityDataPreparationUiSettings;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityDataPreparationUiSettings;

  mergeJson(json: any): ReliabilityDataPreparationUiSettings;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityDataPreparationUiSettings;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ReliabilityDataPreparationUiSettings;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ReliabilityDataPreparationUiSettings>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityDataPreparationUiSettings> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ReliabilityDataPreparationUiSettings> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ReliabilityDataPreparationUiSettings>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ReliabilityDataPreparationUiSettings> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ReliabilityDataPreparationUiSettings> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityDataPreparationUiSettings> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ReliabilityDataPreparationUiSettings>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ReliabilityDataPreparationUiSettings>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityDataPreparationUiSettings;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityDataPreparationUiSettings;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityDataPreparationUiSettings;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ReliabilityDataPreparationUiSettings;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityDataPreparationUiSettings;

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
  static make(fields: any, withDefaults?: boolean): ReliabilityDataPreparationUiSettings;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityDataPreparationUiSettings;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): ReliabilityDataPreparationUiSettings;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ReliabilityDataPreparationUiSettings;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityDataPreparationUiSettings> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ReliabilityDataPreparationUiSettings;

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
  createMaskOverrides(interval?: string, returnMetricExpressions?: boolean): Map_Type<string, Feature> | Map_Type<string, string> | null;

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
  static createRuleMask(spec?: ReliabilityDataPreparationUiCreateRuleMaskSpec, returnMetricExpression?: boolean): Feature | string | null;

  /**
   * Based on the given {@link ReliabilityDataPreparationRuleMaskSpec}, creates a metric expression that represents
   * all of the given rule masks. This can be used to create a metric/feature that returns 1 if any rule's criteria
   * is met. Does not take pre/post mask periods into account.
   *
   * @param masks
   *           Represents the masks that will be converted into a metric expression
   * @return A metric expression string representing the rule masks.
   */
  static createBasicRuleMaskMetricExpression(masks?: Array_Type<ReliabilityDataPreparationRuleMaskSpec>): string | null;

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
  makeBaseSpec(includedSensorIds?: Array_Type<string>, excludedSensorIds?: Array_Type<string>, additionalRasrs?: Array_Type<ReliabilityAssetSensorRelation>): ReliabilityMlDatasetPreparationSpec;

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
  static createRuleMaskFeatures(masks?: Array_Type<ReliabilityDataPreparationRuleMaskSpec>, interval?: string): Feature | null;

  /**
   * Returns the number of intervals (rounded to the nearest integer) which fit in the given period.
   * Returns null if one or more params missing.
   * @param period
   *           The period to convert to interval count.
   * @param interval
   *           The interval to use for calculation.
   * @return The number of intervals that fit in the period, or null if parameters are missing.
   */
  static convertPeriodToIntervalCount(period?: Period, interval?: string): number | null;

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
  getUnselectedTimeRanges(): Array_Type<TimeRange> | null;

  /**
   * Starts a {@link ReliabilityMlDatasetPreparationJob} from these settings.
   */
  startJob(): ReliabilityMlDatasetPreparationJob;
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
