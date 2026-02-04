// TypeScript definitions for the C3 type ReliabilityMlMaskPreparationSpec

/**
 * Self sufficient spec object that can be used to generate all the masks necessary for training
 * {@link MlModel}s for any {@link MlProject}s.
 * Most commonly used with {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets} and
 * less commonly, directly, with {@link ReliabilityMlDatasetPreparationHelper#prepareMasks}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityMlMaskPreparationSpec
 */
declare interface IReliabilityMlMaskPreparationSpec {

  /**
   * Most {@link ReliabilityAsset}s are always operational unless they experience
   * planned/unplanned downtimes represented by {@link ReliabilityAssetEvent}s. If the
   * {@link ReliabilityAsset} happens to switch between on/off states, there is usually
   * a {@link Sensor} whose value represents the operational mode of the {@link ReliabilityAsset}.
   * If that is the case, use this field to denote the {@link Feature} that
   * represents if the {@link ReliabilityAsset} is operational or not. If it is NOT operational,
   * the value of this {@link Feature} should be 1, else 0. By default, it is assumed that
   * the {@link ReliabilityAsset} is continuously operating, i.e. the value of this
   * {@link Feature} will always be 0.
   * NOTE: The {@link Feature} MUST be upserted, otherwise an error will be raised by
   * {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets}.
   * NOTE: If this {@link Feature} is provided, then this CANNOT be used in conjunction with
   * the fields `preIsAssetNotOperationalWindow`, `postIsAssetNotOperationalWindowForTraining`
   * and `postIsAssetNotOperationalWindowForInference` to mask periods of time before and after the
   * asset's non-operation. If you want to mask periods before and after the asset's non-operation, then either
   * specify the `isAssetNotOperationalMetricOverride` instead, or provide your own {@link Feature}s to
   * mask periods before and after the asset's non-operation, using the {@link ReliabilityMlMaskPreparationSpec#adHocTrainingMaskFeatureOverride}
   * and {@link ReliabilityMlMaskPreparationSpec#adHocInferenceMaskFeatureOverride}.
   * NOTE: This field, if specified, will take precedence over the `isAssetNotOperationalMetricOverride` and correspondingly, no pre and post non-operation masks will
   * be prepared.
   */
  isAssetNotOperationalFeatureOverride?: IFeature;

  /**
   * This {@link Feature} should be used to mask the period leading up to an asset's non-operational period during {@link MlModel} training.
   */
  preIsAssetNotOperationalFeatureOverride?: IFeature;

  /**
   * This {@link Feature} should be used to mask the period following an asset's non-operational period during {@link MlModel} training.
   */
  postIsAssetNotOperationalForTrainingFeatureOverride?: IFeature;

  /**
   * This {@link Feature} should be used to mask the period following an asset's non-operational period during {@link MlModel} inference.
   */
  postIsAssetNotOperationalForInferenceFeatureOverride?: IFeature;

  /**
   * This is should be a {@link Feature} which represents planned/unplanned downtime
   * events. By default, this will be the {@link Feature} based on the
   * {@link ReliabilityAssetEvent}s associated with the {@link ReliabilityAsset}. However,
   * the user can alter this behavior by defining their own {@link Feature}.
   * NOTE: The {@link Feature} MUST be upserted, otherwise an error will be raised by
   * {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets}.
   */
  assetEventsFeatureOverride?: IFeature;

  /**
   * This represents the window of time leading up to {@link ReliabilityAssetEvent}s. Usually, the
   * {@link ReliabilityAsset} will display signs of degradation in some window of time leading
   * up to an unplanned downtime event. Use this field to describe the number of time steps
   * before a {@link ReliabilityAssetEvent}.
   * The time window defined by the number of time steps (defined in this field)
   * leading up to `assetEvents` will be masked out of {@link MlModel} training.
   * With a default {@link Interval} of `QUARTER_HOUR`, the default value of 288 for this
   * field represents 3 days of pre-event window that is masked.
   */
  preAssetEventsWindow?: number;

  /**
   * This represents the window of time leading up to downtime events. Usually, the
   * {@link ReliabilityAsset} will display signs of degradation in some window of time leading
   * up to an unplanned downtime event. The most common way of representing a pre-event mask is
   * by providing a {@link #preAssetEventsWindow}. However, if it is not as easily defined as
   * providing one number that represents a pre-event anomalous period for ALL events, then
   * users can also provide their own {@link Feature} which represents the same concept.
   * NOTE: The {@link Feature} MUST be upserted, otherwise an error will be raised by
   * {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets}.
   */
  preAssetEventsFeatureOverride?: IFeature;

  /**
   * This represents the window of time following the {@link ReliabilityAssetEvent}s. Usually, post a
   * downtime event the {@link ReliabilityAsset} undergoes transient operating modes for some period
   * of time before reaching steady state operations. Use this field to describe the number of time
   * steps post a {@link ReliabilityAssetEvent}.
   * The time window defined by the number of time steps (defined in this field)
   * following the {@link ReliabilityAssetEvent} will be masked out of {@link MlModel} training
   * and inference.
   * With a default {@link Interval} of `QUARTER_HOUR`, the default value of 288 for this
   * field represents 3 days of post-event window that is masked.
   */
  postAssetEventsWindow?: number;

  /**
   * This represents the window of time following downtime events. Usually, post a
   * downtime event the {@link ReliabilityAsset} undergoes transient operating modes for some period
   * of time before reaching steady state operations. The most common way of representing a
   * post-event mask is by providing a {@link postAssetEventsWindow}. However, if it is not as easily
   * defined as providing one number that represents a post-event transient period for ALL events, then
   * users can also provide their own {@link Feature} which represents the same concept.
   * NOTE: The {@link Feature} MUST be upserted, otherwise an error will be raised by
   * {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets}.
   */
  postAssetEventsFeatureOverride?: IFeature;

  /**
   * There may be some periods of time that cannot be described completely by a {@link Feature} based
   * purely on {@link Metric}s. Sometimes, users may identify windows of time that they know represent
   * abnormal operating modes of the {@link ReliabilityAsset}. These should be excluded from
   * {@link MlModel} training. If there are such time ranges identified, either by plotting {@link Sensor}
   * time series data or by other means, define these {@link TimeRange}s in this field. These time ranges
   * will be excluded from {@link MlModel} training.
   * NOTE: Each {@link TimeRange} MUST have both its `start` AND `end` fields defined.
   */
  excludeTimeRanges?: Array_Type<TimeRange> | Array<ITimeRange>;

  /**
   * If set to `true`, the provided {@link #excludeTimeRanges} will also be applied during inference.
   */
  excludeTimeRangesFromInference?: boolean;

  /**
   * Use this field to define the {@link Feature} which represents timestamps to mask out
   * from the {@link MlModel} training. If the value of the {@link Feature} is 1, then that timestamp
   * will be accounted for in training. If it is 0, then that timestamp will be used in training.
   * This is not a required field. However, if this field is defined, then it supersedes any information
   * in {@link ReliabilityMlMaskPreparationSpec#excludeTimeRanges}.
   * NOTE: The {@link Feature} MUST be upserted, otherwise an error will be raised by
   * {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets}.
   */
  adHocTrainingMaskFeatureOverride?: IFeature;

  /**
   * Use this field to define the {@link Feature} which represents when to generate
   * predictions from the {@link MlModel}. If the value of the {@link Feature} is 1, then no predictions
   * will be made for that time. If it is 0, then predictions will be generated.
   * This is not a required field. By default, predictions will be made at all times. However, if there
   * are certain rules for when to generate predictions and when not to, then users are encouraged to define
   * a {@link Feature} according to the rules specified.
   * NOTE: The {@link Feature} MUST be upserted, otherwise an error will be raised by
   * {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets}.
   */
  adHocInferenceMaskFeatureOverride?: IFeature;

  /**
   * Use this field to specify whether to mask out anomalous periods contained in training data,
   * as computed using the {@link algorithmicallyComputedTrainingMaskTechnique}.
   * This is not a required field. By default, data is not masked out using this technique, and anomalous
   * periods are masked out using this technique only if this field is set to true.
   */
  generateAlgorithmicallyComputedTrainingMask?: boolean;

  /**
   * Use this field to specify which technique to use to mask out anomalous periods contained in
   * training data, if {@link generateAlgorithmicallyComputedTrainingMask} is set to true.
   * If {@link algorithmicallyComputedTrainingMaskTechnique} is set to true and a technique is not
   * specified, the code will default to an Isolation Forest based approach to mask out anomalous periods
   * in the training data.
   */
  algorithmicallyComputedTrainingMaskTechnique?: IAlgorithmicallyComputedTrainingMaskTechnique;
}

/**
 * Self sufficient spec object that can be used to generate all the masks necessary for training
 * {@link MlModel}s for any {@link MlProject}s.
 * Most commonly used with {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets} and
 * less commonly, directly, with {@link ReliabilityMlDatasetPreparationHelper#prepareMasks}.
 *
 * @remarks this represents a made instance of ReliabilityMlMaskPreparationSpec
 */
declare class ReliabilityMlMaskPreparationSpec extends Obj  {

  /**
   * Most {@link ReliabilityAsset}s are always operational unless they experience
   * planned/unplanned downtimes represented by {@link ReliabilityAssetEvent}s. If the
   * {@link ReliabilityAsset} happens to switch between on/off states, there is usually
   * a {@link Sensor} whose value represents the operational mode of the {@link ReliabilityAsset}.
   * If that is the case, use this field to denote the {@link Feature} that
   * represents if the {@link ReliabilityAsset} is operational or not. If it is NOT operational,
   * the value of this {@link Feature} should be 1, else 0. By default, it is assumed that
   * the {@link ReliabilityAsset} is continuously operating, i.e. the value of this
   * {@link Feature} will always be 0.
   * NOTE: The {@link Feature} MUST be upserted, otherwise an error will be raised by
   * {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets}.
   * NOTE: If this {@link Feature} is provided, then this CANNOT be used in conjunction with
   * the fields `preIsAssetNotOperationalWindow`, `postIsAssetNotOperationalWindowForTraining`
   * and `postIsAssetNotOperationalWindowForInference` to mask periods of time before and after the
   * asset's non-operation. If you want to mask periods before and after the asset's non-operation, then either
   * specify the `isAssetNotOperationalMetricOverride` instead, or provide your own {@link Feature}s to
   * mask periods before and after the asset's non-operation, using the {@link ReliabilityMlMaskPreparationSpec#adHocTrainingMaskFeatureOverride}
   * and {@link ReliabilityMlMaskPreparationSpec#adHocInferenceMaskFeatureOverride}.
   * NOTE: This field, if specified, will take precedence over the `isAssetNotOperationalMetricOverride` and correspondingly, no pre and post non-operation masks will
   * be prepared.
   */
  readonly isAssetNotOperationalFeatureOverride?: Feature;
  withIsAssetNotOperationalFeatureOverride(isAssetNotOperationalFeatureOverride: IFeature | null): ReliabilityMlMaskPreparationSpec;

  /**
   * This {@link Feature} should be used to mask the period leading up to an asset's non-operational period during {@link MlModel} training.
   */
  readonly preIsAssetNotOperationalFeatureOverride?: Feature;
  withPreIsAssetNotOperationalFeatureOverride(preIsAssetNotOperationalFeatureOverride: IFeature | null): ReliabilityMlMaskPreparationSpec;

  /**
   * This {@link Feature} should be used to mask the period following an asset's non-operational period during {@link MlModel} training.
   */
  readonly postIsAssetNotOperationalForTrainingFeatureOverride?: Feature;
  withPostIsAssetNotOperationalForTrainingFeatureOverride(postIsAssetNotOperationalForTrainingFeatureOverride: IFeature | null): ReliabilityMlMaskPreparationSpec;

  /**
   * This {@link Feature} should be used to mask the period following an asset's non-operational period during {@link MlModel} inference.
   */
  readonly postIsAssetNotOperationalForInferenceFeatureOverride?: Feature;
  withPostIsAssetNotOperationalForInferenceFeatureOverride(postIsAssetNotOperationalForInferenceFeatureOverride: IFeature | null): ReliabilityMlMaskPreparationSpec;

  /**
   * This is should be a {@link Feature} which represents planned/unplanned downtime
   * events. By default, this will be the {@link Feature} based on the
   * {@link ReliabilityAssetEvent}s associated with the {@link ReliabilityAsset}. However,
   * the user can alter this behavior by defining their own {@link Feature}.
   * NOTE: The {@link Feature} MUST be upserted, otherwise an error will be raised by
   * {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets}.
   */
  readonly assetEventsFeatureOverride?: Feature;
  withAssetEventsFeatureOverride(assetEventsFeatureOverride: IFeature | null): ReliabilityMlMaskPreparationSpec;

  /**
   * This represents the window of time leading up to {@link ReliabilityAssetEvent}s. Usually, the
   * {@link ReliabilityAsset} will display signs of degradation in some window of time leading
   * up to an unplanned downtime event. Use this field to describe the number of time steps
   * before a {@link ReliabilityAssetEvent}.
   * The time window defined by the number of time steps (defined in this field)
   * leading up to `assetEvents` will be masked out of {@link MlModel} training.
   * With a default {@link Interval} of `QUARTER_HOUR`, the default value of 288 for this
   * field represents 3 days of pre-event window that is masked.
   */
  readonly preAssetEventsWindow?: number;
  withPreAssetEventsWindow(preAssetEventsWindow: number | null): ReliabilityMlMaskPreparationSpec;

  /**
   * This represents the window of time leading up to downtime events. Usually, the
   * {@link ReliabilityAsset} will display signs of degradation in some window of time leading
   * up to an unplanned downtime event. The most common way of representing a pre-event mask is
   * by providing a {@link #preAssetEventsWindow}. However, if it is not as easily defined as
   * providing one number that represents a pre-event anomalous period for ALL events, then
   * users can also provide their own {@link Feature} which represents the same concept.
   * NOTE: The {@link Feature} MUST be upserted, otherwise an error will be raised by
   * {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets}.
   */
  readonly preAssetEventsFeatureOverride?: Feature;
  withPreAssetEventsFeatureOverride(preAssetEventsFeatureOverride: IFeature | null): ReliabilityMlMaskPreparationSpec;

  /**
   * This represents the window of time following the {@link ReliabilityAssetEvent}s. Usually, post a
   * downtime event the {@link ReliabilityAsset} undergoes transient operating modes for some period
   * of time before reaching steady state operations. Use this field to describe the number of time
   * steps post a {@link ReliabilityAssetEvent}.
   * The time window defined by the number of time steps (defined in this field)
   * following the {@link ReliabilityAssetEvent} will be masked out of {@link MlModel} training
   * and inference.
   * With a default {@link Interval} of `QUARTER_HOUR`, the default value of 288 for this
   * field represents 3 days of post-event window that is masked.
   */
  readonly postAssetEventsWindow?: number;
  withPostAssetEventsWindow(postAssetEventsWindow: number | null): ReliabilityMlMaskPreparationSpec;

  /**
   * This represents the window of time following downtime events. Usually, post a
   * downtime event the {@link ReliabilityAsset} undergoes transient operating modes for some period
   * of time before reaching steady state operations. The most common way of representing a
   * post-event mask is by providing a {@link postAssetEventsWindow}. However, if it is not as easily
   * defined as providing one number that represents a post-event transient period for ALL events, then
   * users can also provide their own {@link Feature} which represents the same concept.
   * NOTE: The {@link Feature} MUST be upserted, otherwise an error will be raised by
   * {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets}.
   */
  readonly postAssetEventsFeatureOverride?: Feature;
  withPostAssetEventsFeatureOverride(postAssetEventsFeatureOverride: IFeature | null): ReliabilityMlMaskPreparationSpec;

  /**
   * There may be some periods of time that cannot be described completely by a {@link Feature} based
   * purely on {@link Metric}s. Sometimes, users may identify windows of time that they know represent
   * abnormal operating modes of the {@link ReliabilityAsset}. These should be excluded from
   * {@link MlModel} training. If there are such time ranges identified, either by plotting {@link Sensor}
   * time series data or by other means, define these {@link TimeRange}s in this field. These time ranges
   * will be excluded from {@link MlModel} training.
   * NOTE: Each {@link TimeRange} MUST have both its `start` AND `end` fields defined.
   */
  readonly excludeTimeRanges?: Array_Type<TimeRange>;
  withExcludeTimeRanges(excludeTimeRanges: Array_Type<TimeRange> | Array<ITimeRange> | null): ReliabilityMlMaskPreparationSpec;

  /**
   * If set to `true`, the provided {@link #excludeTimeRanges} will also be applied during inference.
   */
  readonly excludeTimeRangesFromInference?: boolean;
  withExcludeTimeRangesFromInference(excludeTimeRangesFromInference: boolean): ReliabilityMlMaskPreparationSpec;

  /**
   * Use this field to define the {@link Feature} which represents timestamps to mask out
   * from the {@link MlModel} training. If the value of the {@link Feature} is 1, then that timestamp
   * will be accounted for in training. If it is 0, then that timestamp will be used in training.
   * This is not a required field. However, if this field is defined, then it supersedes any information
   * in {@link ReliabilityMlMaskPreparationSpec#excludeTimeRanges}.
   * NOTE: The {@link Feature} MUST be upserted, otherwise an error will be raised by
   * {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets}.
   */
  readonly adHocTrainingMaskFeatureOverride?: Feature;
  withAdHocTrainingMaskFeatureOverride(adHocTrainingMaskFeatureOverride: IFeature | null): ReliabilityMlMaskPreparationSpec;

  /**
   * Use this field to define the {@link Feature} which represents when to generate
   * predictions from the {@link MlModel}. If the value of the {@link Feature} is 1, then no predictions
   * will be made for that time. If it is 0, then predictions will be generated.
   * This is not a required field. By default, predictions will be made at all times. However, if there
   * are certain rules for when to generate predictions and when not to, then users are encouraged to define
   * a {@link Feature} according to the rules specified.
   * NOTE: The {@link Feature} MUST be upserted, otherwise an error will be raised by
   * {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets}.
   */
  readonly adHocInferenceMaskFeatureOverride?: Feature;
  withAdHocInferenceMaskFeatureOverride(adHocInferenceMaskFeatureOverride: IFeature | null): ReliabilityMlMaskPreparationSpec;

  /**
   * Use this field to specify whether to mask out anomalous periods contained in training data,
   * as computed using the {@link algorithmicallyComputedTrainingMaskTechnique}.
   * This is not a required field. By default, data is not masked out using this technique, and anomalous
   * periods are masked out using this technique only if this field is set to true.
   */
  readonly generateAlgorithmicallyComputedTrainingMask?: boolean;
  withGenerateAlgorithmicallyComputedTrainingMask(generateAlgorithmicallyComputedTrainingMask: boolean): ReliabilityMlMaskPreparationSpec;

  /**
   * Use this field to specify which technique to use to mask out anomalous periods contained in
   * training data, if {@link generateAlgorithmicallyComputedTrainingMask} is set to true.
   * If {@link algorithmicallyComputedTrainingMaskTechnique} is set to true and a technique is not
   * specified, the code will default to an Isolation Forest based approach to mask out anomalous periods
   * in the training data.
   */
  readonly algorithmicallyComputedTrainingMaskTechnique?: AlgorithmicallyComputedTrainingMaskTechnique;
  withAlgorithmicallyComputedTrainingMaskTechnique(algorithmicallyComputedTrainingMaskTechnique: IAlgorithmicallyComputedTrainingMaskTechnique | null): ReliabilityMlMaskPreparationSpec;

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
  static fromJson(json: any): ReliabilityMlMaskPreparationSpec | null;

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
  static fromJsonString(json: string): ReliabilityMlMaskPreparationSpec | null;

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
  static fromXmlString(xml: string): ReliabilityMlMaskPreparationSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ReliabilityMlMaskPreparationSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ReliabilityMlMaskPreparationSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMlMaskPreparationSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMlMaskPreparationSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMlMaskPreparationSpec>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMlMaskPreparationSpec>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityMlMaskPreparationSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMlMaskPreparationSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMlMaskPreparationSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ReliabilityMlMaskPreparationSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): ReliabilityMlMaskPreparationSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityMlMaskPreparationSpec;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityMlMaskPreparationSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityMlMaskPreparationSpec;

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
  withoutFieldAtPath(path: string): ReliabilityMlMaskPreparationSpec;

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
  withoutField(field: string): ReliabilityMlMaskPreparationSpec;

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
  withoutField(field: FieldType): ReliabilityMlMaskPreparationSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ReliabilityMlMaskPreparationSpec;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityMlMaskPreparationSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ReliabilityMlMaskPreparationSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityMlMaskPreparationSpec;

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
  defaultField(field: string): ReliabilityMlMaskPreparationSpec;

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
  defaultField(field: FieldType): ReliabilityMlMaskPreparationSpec;

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
  unsetField(field: string): ReliabilityMlMaskPreparationSpec;

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
  unsetField(field: FieldType): ReliabilityMlMaskPreparationSpec;

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
  removeField(field: string): ReliabilityMlMaskPreparationSpec;

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
  removeField(field: FieldType): ReliabilityMlMaskPreparationSpec;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityMlMaskPreparationSpec;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityMlMaskPreparationSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityMlMaskPreparationSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityMlMaskPreparationSpec;

  mergeJson(json: any): ReliabilityMlMaskPreparationSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityMlMaskPreparationSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ReliabilityMlMaskPreparationSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ReliabilityMlMaskPreparationSpec>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityMlMaskPreparationSpec> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ReliabilityMlMaskPreparationSpec> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ReliabilityMlMaskPreparationSpec>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ReliabilityMlMaskPreparationSpec> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ReliabilityMlMaskPreparationSpec> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityMlMaskPreparationSpec> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ReliabilityMlMaskPreparationSpec>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ReliabilityMlMaskPreparationSpec>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityMlMaskPreparationSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityMlMaskPreparationSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityMlMaskPreparationSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ReliabilityMlMaskPreparationSpec;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityMlMaskPreparationSpec;

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
  static make(fields: any, withDefaults?: boolean): ReliabilityMlMaskPreparationSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityMlMaskPreparationSpec;

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
  afterMake(): ReliabilityMlMaskPreparationSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ReliabilityMlMaskPreparationSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityMlMaskPreparationSpec> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ReliabilityMlMaskPreparationSpec;
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
