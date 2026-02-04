// TypeScript definitions for the C3 type ReliabilityAssetSensorAssociationSpec

/**
 * Type to hold information necessary to run the sensor association part of a
 * {@link ReliabilityAssetSensorAssociationJob}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityAssetSensorAssociationSpec
 */
declare interface IReliabilityAssetSensorAssociationSpec {

  /**
   * A list of {@link ReliabilityAsset}s. This field is not required if {@link ReliabilityAsset#runSensorAssociation}
   * instead of {@link ReliabilityAsset#runSensorAssociationBatch} is used.
   */
  assets: Array_Type<ReliabilityAsset> | Array<IReliabilityAsset>;

  /**
   * A list of {@link Feature}s of the {@link assets}. Provide a list of {@link Feature}s that already exist.
   * If your desired features do not exist and they are just based on the @link ExpectedSensor}s of the
   * {@link assets}, then you can use {@link assetExpectedSensors} to provide a list of {@link ExpectedSensor}s.
   * If your desired features are custom, such as a combination of multiple {@link ExpectedSensor}s, you should create
   * the {@link Feature}s in advance and include them in this field.
   *
   * **NOTE**: Specify either this field or {@link assetExpectedSensors}.
   * If both or neither of them are specified, an error will be raised upon the creation of this Spec.
   */
  assetFeatures?: Array_Type<Feature> | Array<IFeature>;

  /**
   * A list of {@link ExpectedSensor}s as the features of the {@link assets}. The job will check if there are already
   * {@link Feature}s for these {@link ExpectedSensor}s. If a {@link Feature} does not exist for a {@link ExpectedSensor},
   * the job will create it automatically.
   *
   * **NOTE**: Specify either this field or {@link assetFeatures}.
   * If both or neither of them are specified, an error will be raised upon the creation of this Spec.
   */
  assetExpectedSensors?: Array_Type<ExpectedSensor> | Array<IExpectedSensor>;

  /**
   * A {@link Filter} to select all the "external" {@link Sensor}s that will be included for the job. These are the
   * sensors that are currently not instrumented on the {@link assets}.
   */
  externalSensorFilter: IFilter;

  /**
   * The start time for feature evaluation.
   */
  start: DateTime | Date | string;

  /**
   * The end time (exclusive) for feature evaluation.
   */
  end: DateTime | Date | string;

  /**
   * The interval for feature evaluation.
   */
  interval: string;

  /**
   * The confidence level for prep
   */
  confidenceLevel?: number;

  /**
   * The masks for {@link assets}. Provide a list of {@link Feature}s that already exist. An error will
   * be raised if non-existing or invalid {@link Feature}s are provided here.
   */
  assetMasks?: Array_Type<Feature> | Array<IFeature>;

  /**
   * The masks for the external sensor data. Provide a list of {@link Feature}s that already exist. An
   * error will be raised if non-existing or invalid {@link Feature}s are provided here.
   */
  externalSensorMasks?: Array_Type<Feature> | Array<IFeature>;

  /**
   * When attempting to find {@link Sensor}s that influence the operation of
   * a {@link ReliabilityAsset}, this field controls what sort of relationship
   * should be accounted for. For example, if it is known beforehand that there
   * are {@link Sensor}s which measure process variables that *linearly* influence
   * the operation of a {@link ReliabilityAsset}, then this field may be set to
   * `pearson`. If we do not know the exact nature of association, it is safest to
   * use `mutual_info`. `kendall` and `spearman` denote rank based association
   * metrics to associate {@link Sensor}s to {@link ReliabilityAsset}s.
   */
  associationMethod?: string;

  /**
   * If the relationship between certain process variables and the operation of
   * a {@link ReliabilityAsset} is time lagged, i.e., "a pressure increase causes
   * a corresponding temperature increase 20 minutes later", then set this field
   * to `true`. For most use cases, this is best set to `false`.
   */
  useLag?: boolean;

  /**
   * If {@link useLag} = `true`, then this field may be used to inform what the
   * maximum time lag is in the process. Set this to a value that represents
   * the time order of physical processes occurring inside the
   * {@link ReliabilityAsset}. This ensures that spurious associations are avoided.
   */
  maxLagWindow?: number;

  /**
   * If {@link useLag} = `true`, then this field may be used to determine the lag
   * in a robust manner. For every {@link Sensor}, it will take the average across
   * the top `n` time lags that display the most association with the
   * {@link ReliabilityAsset}.
   */
  topN?: number;

  /**
   * Upon calling {@link ReliabilityAsset#runSensorAssociationBatch}, a {@link Feature.Set}
   * will be created for the {@link ReliabilityAsset}s. This {@link Feature.Set} will be
   * used in the {@link ReliabilityAssetSensorAssociationJob#map} function.
   *
   * **NOTE** : DO NOT POPULATE THIS FIELD MANUALLY.
   */
  assetFeatureSet?: IFeature.Set;

  /**
   * Upon calling {@link ReliabilityAsset#runSensorAssociationBatch}, a {@link Feature.Set}
   * will be created for the external {@link Sensor}s. This {@link Feature.Set} will be
   * used in the {@link ReliabilityAssetSensorAssociationJob#map} function.
   *
   * **NOTE**: DO NOT POPULATE THIS FIELD MANUALLY.
   */
  sensorFeatureSet?: IFeature.Set;

  /**
   * The maximum percentage difference between two data points for them to be considered the same value.
   * This field is used in conjunction with the {@link #minSimilarityPercentage} to identify external
   * correlated sensors that are identical to the target {@link #assetExpectedSensors}. A {@link Sensor}
   * is considered a candidate sensor for downstream modeling tasks only if it is NOT identical
   * to the target {@link #assetExpectedSensors}.
   * Two values are considered identical only if they have an absolute percentage difference lesser than 0.5%.
   */
  maxPercentageDifference?: number;

  /**
   * The minimum percentage of data that needs to be identical between an external correlated {@link Sensor}
   * and the {@link #assetExpectedSensors} for them to be considered identical.
   * By default, at least 50% of the data must be similar, as defined by {@link #maxPercentageDifference}, in
   * order for the sensor and the target {@link #assetExpectedSensors} to be considered identical.
   */
  minSimilarityPercentage?: number;

  /**
   * The minimum percentage of data for which an external {@link Sensor} must be available in order for it
   * to be considered a candidate {@link Sensor} for downstream modeling tasks.
   * By default, an {@link Sensor} must be available for at least 25% of the timestamps (after applying the
   * {@link #assetMasks} and {@link #externalSensorMasks}), for the sensor to be available, and hence a candidate
   * sensor.
   */
  minAvailability?: number;

  /**
   * Boolean flag whether the extreme value exclusion mask is disabled for the given
   * {@link ReliabilityAssetSensorAssociationSpec#assetExpectedSensors}.
   * This extreme value exclusion mask is always applied by default.
   */
  extremeValueExclusionDisabled?: boolean;

  /**
   * Upper and lower bound for the Extreme Value exclusion.
   */
  extremeValueBounds?: IPair<number, number>;

  /**
   * Boolean flag for whether the Short time period exclusion logic is enabled.
   */
  stpExclusionEnabled?: boolean;

  /**
   * The number of days to use for Short time period exclusion.
   */
  stpExclusionPeriodCount?: number;

  /**
   * Boolean flag for whether the Almost Constant Periods exclusion mask is enabled.
   */
  almostConstantExclusionEnabled?: boolean;

  /**
   * Min duration (in minutes) parameter for the almost constant period exclusion.
   */
  almostConstantExclusionMinDuration?: number;

  /**
   * Abs Change parameter for the almost constant period exclusion.
   */
  almostConstantExclusionAbsChange?: number;

  /**
   * Boolean flag for whether the manual mode exclusion metrics should be disabled.
   * The Manual Mode mask should always be applied by default.
   */
  manualModeDisabled?: boolean;

  /**
   * Boolean flag for whether the Fast Transient Filter Exclusion should be enabled.
   */
  fTFExclusionEnabled?: boolean;

  /**
   * The lag (in minutes) to be used for the Fast Transient Filter Exclusion Metric.
   */
  fTFExclusionLag?: number;

  /**
   * The delay (in minutes) to be used for the Fast Transient Filter Exclusion Metric.
   */
  fTFExclusionDelay?: number;

  /**
   * The threshold to be used for the Fast Transient Filter Exclusion Metric.
   */
  fTFExclusionThreshold?: number;
}

/**
 * Type to hold information necessary to run the sensor association part of a
 * {@link ReliabilityAssetSensorAssociationJob}.
 *
 * @remarks this represents a made instance of ReliabilityAssetSensorAssociationSpec
 */
declare class ReliabilityAssetSensorAssociationSpec extends Obj  {

  /**
   * A list of {@link ReliabilityAsset}s. This field is not required if {@link ReliabilityAsset#runSensorAssociation}
   * instead of {@link ReliabilityAsset#runSensorAssociationBatch} is used.
   */
  readonly assets: Array_Type<ReliabilityAsset>;
  withAssets(assets: Array_Type<ReliabilityAsset> | Array<IReliabilityAsset>): ReliabilityAssetSensorAssociationSpec;

  /**
   * A list of {@link Feature}s of the {@link assets}. Provide a list of {@link Feature}s that already exist.
   * If your desired features do not exist and they are just based on the @link ExpectedSensor}s of the
   * {@link assets}, then you can use {@link assetExpectedSensors} to provide a list of {@link ExpectedSensor}s.
   * If your desired features are custom, such as a combination of multiple {@link ExpectedSensor}s, you should create
   * the {@link Feature}s in advance and include them in this field.
   *
   * **NOTE**: Specify either this field or {@link assetExpectedSensors}.
   * If both or neither of them are specified, an error will be raised upon the creation of this Spec.
   */
  readonly assetFeatures?: Array_Type<Feature>;
  withAssetFeatures(assetFeatures: Array_Type<Feature> | Array<IFeature> | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * A list of {@link ExpectedSensor}s as the features of the {@link assets}. The job will check if there are already
   * {@link Feature}s for these {@link ExpectedSensor}s. If a {@link Feature} does not exist for a {@link ExpectedSensor},
   * the job will create it automatically.
   *
   * **NOTE**: Specify either this field or {@link assetFeatures}.
   * If both or neither of them are specified, an error will be raised upon the creation of this Spec.
   */
  readonly assetExpectedSensors?: Array_Type<ExpectedSensor>;
  withAssetExpectedSensors(assetExpectedSensors: Array_Type<ExpectedSensor> | Array<IExpectedSensor> | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * A {@link Filter} to select all the "external" {@link Sensor}s that will be included for the job. These are the
   * sensors that are currently not instrumented on the {@link assets}.
   */
  readonly externalSensorFilter: Filter;
  withExternalSensorFilter(externalSensorFilter: IFilter): ReliabilityAssetSensorAssociationSpec;

  /**
   * The start time for feature evaluation.
   */
  readonly start: DateTime;
  withStart(start: DateTime | Date | string): ReliabilityAssetSensorAssociationSpec;

  /**
   * The end time (exclusive) for feature evaluation.
   */
  readonly end: DateTime;
  withEnd(end: DateTime | Date | string): ReliabilityAssetSensorAssociationSpec;

  /**
   * The interval for feature evaluation.
   */
  readonly interval: string;
  withInterval(interval: string): ReliabilityAssetSensorAssociationSpec;

  /**
   * The confidence level for prep
   */
  readonly confidenceLevel?: number;
  withConfidenceLevel(confidenceLevel: number | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * The masks for {@link assets}. Provide a list of {@link Feature}s that already exist. An error will
   * be raised if non-existing or invalid {@link Feature}s are provided here.
   */
  readonly assetMasks?: Array_Type<Feature>;
  withAssetMasks(assetMasks: Array_Type<Feature> | Array<IFeature> | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * The masks for the external sensor data. Provide a list of {@link Feature}s that already exist. An
   * error will be raised if non-existing or invalid {@link Feature}s are provided here.
   */
  readonly externalSensorMasks?: Array_Type<Feature>;
  withExternalSensorMasks(externalSensorMasks: Array_Type<Feature> | Array<IFeature> | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * When attempting to find {@link Sensor}s that influence the operation of
   * a {@link ReliabilityAsset}, this field controls what sort of relationship
   * should be accounted for. For example, if it is known beforehand that there
   * are {@link Sensor}s which measure process variables that *linearly* influence
   * the operation of a {@link ReliabilityAsset}, then this field may be set to
   * `pearson`. If we do not know the exact nature of association, it is safest to
   * use `mutual_info`. `kendall` and `spearman` denote rank based association
   * metrics to associate {@link Sensor}s to {@link ReliabilityAsset}s.
   */
  readonly associationMethod?: string;
  withAssociationMethod(associationMethod: string | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * If the relationship between certain process variables and the operation of
   * a {@link ReliabilityAsset} is time lagged, i.e., "a pressure increase causes
   * a corresponding temperature increase 20 minutes later", then set this field
   * to `true`. For most use cases, this is best set to `false`.
   */
  readonly useLag?: boolean;
  withUseLag(useLag: boolean): ReliabilityAssetSensorAssociationSpec;

  /**
   * If {@link useLag} = `true`, then this field may be used to inform what the
   * maximum time lag is in the process. Set this to a value that represents
   * the time order of physical processes occurring inside the
   * {@link ReliabilityAsset}. This ensures that spurious associations are avoided.
   */
  readonly maxLagWindow?: number;
  withMaxLagWindow(maxLagWindow: number | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * If {@link useLag} = `true`, then this field may be used to determine the lag
   * in a robust manner. For every {@link Sensor}, it will take the average across
   * the top `n` time lags that display the most association with the
   * {@link ReliabilityAsset}.
   */
  readonly topN?: number;
  withTopN(topN: number | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * Upon calling {@link ReliabilityAsset#runSensorAssociationBatch}, a {@link Feature.Set}
   * will be created for the {@link ReliabilityAsset}s. This {@link Feature.Set} will be
   * used in the {@link ReliabilityAssetSensorAssociationJob#map} function.
   *
   * **NOTE** : DO NOT POPULATE THIS FIELD MANUALLY.
   */
  readonly assetFeatureSet?: Feature.Set;
  withAssetFeatureSet(assetFeatureSet: IFeature.Set | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * Upon calling {@link ReliabilityAsset#runSensorAssociationBatch}, a {@link Feature.Set}
   * will be created for the external {@link Sensor}s. This {@link Feature.Set} will be
   * used in the {@link ReliabilityAssetSensorAssociationJob#map} function.
   *
   * **NOTE**: DO NOT POPULATE THIS FIELD MANUALLY.
   */
  readonly sensorFeatureSet?: Feature.Set;
  withSensorFeatureSet(sensorFeatureSet: IFeature.Set | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * The maximum percentage difference between two data points for them to be considered the same value.
   * This field is used in conjunction with the {@link #minSimilarityPercentage} to identify external
   * correlated sensors that are identical to the target {@link #assetExpectedSensors}. A {@link Sensor}
   * is considered a candidate sensor for downstream modeling tasks only if it is NOT identical
   * to the target {@link #assetExpectedSensors}.
   * Two values are considered identical only if they have an absolute percentage difference lesser than 0.5%.
   */
  readonly maxPercentageDifference?: number;
  withMaxPercentageDifference(maxPercentageDifference: number | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * The minimum percentage of data that needs to be identical between an external correlated {@link Sensor}
   * and the {@link #assetExpectedSensors} for them to be considered identical.
   * By default, at least 50% of the data must be similar, as defined by {@link #maxPercentageDifference}, in
   * order for the sensor and the target {@link #assetExpectedSensors} to be considered identical.
   */
  readonly minSimilarityPercentage?: number;
  withMinSimilarityPercentage(minSimilarityPercentage: number | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * The minimum percentage of data for which an external {@link Sensor} must be available in order for it
   * to be considered a candidate {@link Sensor} for downstream modeling tasks.
   * By default, an {@link Sensor} must be available for at least 25% of the timestamps (after applying the
   * {@link #assetMasks} and {@link #externalSensorMasks}), for the sensor to be available, and hence a candidate
   * sensor.
   */
  readonly minAvailability?: number;
  withMinAvailability(minAvailability: number | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * Boolean flag whether the extreme value exclusion mask is disabled for the given
   * {@link ReliabilityAssetSensorAssociationSpec#assetExpectedSensors}.
   * This extreme value exclusion mask is always applied by default.
   */
  readonly extremeValueExclusionDisabled?: boolean;
  withExtremeValueExclusionDisabled(extremeValueExclusionDisabled: boolean): ReliabilityAssetSensorAssociationSpec;

  /**
   * Upper and lower bound for the Extreme Value exclusion.
   */
  readonly extremeValueBounds?: Pair<number, number>;
  withExtremeValueBounds(extremeValueBounds: IPair<number, number> | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * Boolean flag for whether the Short time period exclusion logic is enabled.
   */
  readonly stpExclusionEnabled?: boolean;
  withStpExclusionEnabled(stpExclusionEnabled: boolean): ReliabilityAssetSensorAssociationSpec;

  /**
   * The number of days to use for Short time period exclusion.
   */
  readonly stpExclusionPeriodCount?: number;
  withStpExclusionPeriodCount(stpExclusionPeriodCount: number | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * Boolean flag for whether the Almost Constant Periods exclusion mask is enabled.
   */
  readonly almostConstantExclusionEnabled?: boolean;
  withAlmostConstantExclusionEnabled(almostConstantExclusionEnabled: boolean): ReliabilityAssetSensorAssociationSpec;

  /**
   * Min duration (in minutes) parameter for the almost constant period exclusion.
   */
  readonly almostConstantExclusionMinDuration?: number;
  withAlmostConstantExclusionMinDuration(almostConstantExclusionMinDuration: number | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * Abs Change parameter for the almost constant period exclusion.
   */
  readonly almostConstantExclusionAbsChange?: number;
  withAlmostConstantExclusionAbsChange(almostConstantExclusionAbsChange: number | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * Boolean flag for whether the manual mode exclusion metrics should be disabled.
   * The Manual Mode mask should always be applied by default.
   */
  readonly manualModeDisabled?: boolean;
  withManualModeDisabled(manualModeDisabled: boolean): ReliabilityAssetSensorAssociationSpec;

  /**
   * Boolean flag for whether the Fast Transient Filter Exclusion should be enabled.
   */
  readonly fTFExclusionEnabled?: boolean;
  withFTFExclusionEnabled(fTFExclusionEnabled: boolean): ReliabilityAssetSensorAssociationSpec;

  /**
   * The lag (in minutes) to be used for the Fast Transient Filter Exclusion Metric.
   */
  readonly fTFExclusionLag?: number;
  withFTFExclusionLag(fTFExclusionLag: number | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * The delay (in minutes) to be used for the Fast Transient Filter Exclusion Metric.
   */
  readonly fTFExclusionDelay?: number;
  withFTFExclusionDelay(fTFExclusionDelay: number | null): ReliabilityAssetSensorAssociationSpec;

  /**
   * The threshold to be used for the Fast Transient Filter Exclusion Metric.
   */
  readonly fTFExclusionThreshold?: number;
  withFTFExclusionThreshold(fTFExclusionThreshold: number | null): ReliabilityAssetSensorAssociationSpec;

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
  static fromJson(json: any): ReliabilityAssetSensorAssociationSpec | null;

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
  static fromJsonString(json: string): ReliabilityAssetSensorAssociationSpec | null;

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
  static fromXmlString(xml: string): ReliabilityAssetSensorAssociationSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ReliabilityAssetSensorAssociationSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ReliabilityAssetSensorAssociationSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityAssetSensorAssociationSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityAssetSensorAssociationSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityAssetSensorAssociationSpec>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityAssetSensorAssociationSpec>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityAssetSensorAssociationSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityAssetSensorAssociationSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityAssetSensorAssociationSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ReliabilityAssetSensorAssociationSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): ReliabilityAssetSensorAssociationSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityAssetSensorAssociationSpec;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityAssetSensorAssociationSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityAssetSensorAssociationSpec;

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
  withoutFieldAtPath(path: string): ReliabilityAssetSensorAssociationSpec;

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
  withoutField(field: string): ReliabilityAssetSensorAssociationSpec;

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
  withoutField(field: FieldType): ReliabilityAssetSensorAssociationSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ReliabilityAssetSensorAssociationSpec;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityAssetSensorAssociationSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ReliabilityAssetSensorAssociationSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityAssetSensorAssociationSpec;

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
  defaultField(field: string): ReliabilityAssetSensorAssociationSpec;

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
  defaultField(field: FieldType): ReliabilityAssetSensorAssociationSpec;

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
  unsetField(field: string): ReliabilityAssetSensorAssociationSpec;

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
  unsetField(field: FieldType): ReliabilityAssetSensorAssociationSpec;

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
  removeField(field: string): ReliabilityAssetSensorAssociationSpec;

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
  removeField(field: FieldType): ReliabilityAssetSensorAssociationSpec;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityAssetSensorAssociationSpec;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityAssetSensorAssociationSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityAssetSensorAssociationSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityAssetSensorAssociationSpec;

  mergeJson(json: any): ReliabilityAssetSensorAssociationSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityAssetSensorAssociationSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ReliabilityAssetSensorAssociationSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ReliabilityAssetSensorAssociationSpec>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityAssetSensorAssociationSpec> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ReliabilityAssetSensorAssociationSpec> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ReliabilityAssetSensorAssociationSpec>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ReliabilityAssetSensorAssociationSpec> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ReliabilityAssetSensorAssociationSpec> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityAssetSensorAssociationSpec> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ReliabilityAssetSensorAssociationSpec>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ReliabilityAssetSensorAssociationSpec>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityAssetSensorAssociationSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityAssetSensorAssociationSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityAssetSensorAssociationSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ReliabilityAssetSensorAssociationSpec;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityAssetSensorAssociationSpec;

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
  static make(fields: any, withDefaults?: boolean): ReliabilityAssetSensorAssociationSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityAssetSensorAssociationSpec;

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
  afterMake(): ReliabilityAssetSensorAssociationSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ReliabilityAssetSensorAssociationSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityAssetSensorAssociationSpec> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ReliabilityAssetSensorAssociationSpec;

  /**
   * Generates a string metric expression representing the `mask_IsAssetNotOperational` mask.
   */
  buildExclusionMetrics(): string | null;

  /**
   * Create mask feature to be used for the {@link ReliabilityAssetSensorAssociationSpec#assetExpectedSensors}
   * for the {@link ReliabilityAssetSensorAssociationJob}.
   */
  createExclusionMaskFeature(): Feature | null;
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
