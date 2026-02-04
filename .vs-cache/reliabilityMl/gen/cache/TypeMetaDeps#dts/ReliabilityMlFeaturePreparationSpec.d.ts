// TypeScript definitions for the C3 type ReliabilityMlFeaturePreparationSpec

/**
 * Used to define how to create {@link Feature}s for {@link MlModel} training and deployment for the
 * any {@link MlProject}s. See {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets}.
 * Both the creation of the {@link Feature}s and the preprocessing of those {@link Feature}s can be dictated
 * by the various fields on this Type.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityMlFeaturePreparationSpec
 */
declare interface IReliabilityMlFeaturePreparationSpec {

  /**
   * The default approach to training {@link MlModel}s beloning to {@link MlProject}  is by using
   * {@link Feature}s that simply extract the {@link Sensor} time series data. Set this
   * field to `true` (default) to use these {@link Feature}s. However, if the user wishes to
   * define their own {@link Feature}s, set this field to `false` and provide your own
   * {@link Feature}s in the {@link overrideFeatures} field.
   */
  createDefaultFeatures?: boolean;

  /**
   * If {@link createDefaultFeatures} is set to `true`, then how to create the default
   * {@link Feature}s based on {@link Sensor} time series data can be controlled by
   * this field. Refer to {@link ReliabilityMlFeatureCreationMethod} for more information.
   * In the most common case, it is suggested to use the default value `BEST`.
   */
  featureCreationMethod?: string;

  /**
   * The {@link Sensor#id} as a string.
   *
   * Upon the creation of {@link Feature}s based on {@link createDefaultFeatures}, there will
   * be a {@link Feature} preprocessing step that occurs in
   * {@link ReliabilityMlDatasetPreparationHelper#prepareCleanedFeatureSet}. As part of the
   * preprocessing step, some {@link Feature}s may be removed from the {@link Feature.Set}
   * because they have more noise than signal. However, if the user has qualitative information
   * about some {@link Sensor}s, which is relevant to modeling the {@link ReliabilityAsset},
   * then they can force the {@link Feature} preprocessing step to compulsorily keep these
   * {@link Sensor}s in the {@link Feature.Set}. For all {@link Sensor}s to compulsorily keep
   * in the final {@link Feature.Set}, provide their `id`s.
   */
  includeSensors?: Array_Type<string> | Array<string>;

  /**
   * The {@link Sensor#id} as a string.
   *
   * If {@link createDefaultFeatures} is set to `true`, {@link Feature}s will be created for all
   * the {@link Sensor}s associated with the {@link ReliabilityAsset}. However, if there are
   * some {@link Sensor}s which provide no qualitative information for the modeling of the
   * {@link ReliabilityAsset}, then the user can stop the creation of {@link Feature}s for these
   * {@link Sensor}s by providing their id's in this field.  This will have no impact on the
   * {@link #additionalRasrs} that are included.
   */
  excludeSensors?: Array_Type<string> | Array<string>;

  /**
   * If {@link createDefaultFeatures} is set to `false`, then the user MUST provide
   * {@link Feature}s that they have defined AND upserted. Once these {@link Feature}s have been
   * defined and upserted, provide the list of those {@link Feature}s in this field. Note that
   * for all the {@link Feature}s provided here, the `name` field should be present in the object.
   */
  overrideFeatures?: Array_Type<Feature> | Array<IFeature>;

  /**
   * A string representation of {@link Feature#name}s. See {@link Feature.Set#features}.
   *
   * Upon the creation an initial {@link Feature.Set}, there will be a {@link Feature} preprocessing
   * step that occurs in  {@link ReliabilityMlDatasetPreparationHelper#prepareCleanedFeatureSet}.
   * As part of the preprocessing step, some {@link Feature}s may be removed from the {@link Feature.Set}
   * because they have more noise than signal. However, if the user has qualitative information
   * about some {@link Feature}s, which is relevant to modeling the {@link ReliabilityAsset},
   * then they can force the {@link Feature} preprocessing step to compulsorily keep these
   * {@link Feature}s in the {@link Feature.Set}. For all {@link Feature}s to compulsorily keep
   * in the final {@link Feature.Set}, provide their `name`s.
   */
  includeFeatures?: Array_Type<string> | Array<string>;

  /**
   * Preprocessing and "cleaning" the initial {@link Feature.Set} that will be created involves the
   * removal of all {@link Feature}s that are flatlining beyond a certain percentage of the time.
   * If the threshold for flatlining is 20, then all {@link Feature}s that flatline >= 20% of the time
   * will be removed from the {@link Feature.Set}.
   */
  flatliningThreshold?: number;

  /**
   * Flatlining of a {@link Feature} is said to occur if the standard deviation of the {@link Feature}
   * in some window of time is zero. The default window size is assumed to be 6 hours to match the default window
   * size used to calculate {@link SensorDataSummary} entities for UI previews.
   *
   * With a default {@link ReliabilityMlDatasetPreparationSpec#interval} of `QUARTER_HOUR`, this translates to 24
   * time steps. Define the number of time steps based on the {@link Interval} used for preparing the
   * {@link Feature.Set}.
   */
  flatliningTimeSteps?: number;

  /**
   * The {@link ReliabilityAssetSensorRelation}s that are not directly associated with the
   * {@link ReliabilityAsset} but provide valuable information for the modeling of the
   * {@link ReliabilityAsset} can be included in the {@link Feature.Set}. Provide the
   * {@link ReliabilityAssetSensorRelation}s as an array in this field.
   */
  additionalRasrs?: Array_Type<ReliabilityAssetSensorRelation> | Array<IReliabilityAssetSensorRelation>;
}

/**
 * Used to define how to create {@link Feature}s for {@link MlModel} training and deployment for the
 * any {@link MlProject}s. See {@link ReliabilityMlDatasetPreparationHelper#prepareMlDatasets}.
 * Both the creation of the {@link Feature}s and the preprocessing of those {@link Feature}s can be dictated
 * by the various fields on this Type.
 *
 * @remarks this represents a made instance of ReliabilityMlFeaturePreparationSpec
 */
declare class ReliabilityMlFeaturePreparationSpec extends Obj  {

  /**
   * The default approach to training {@link MlModel}s beloning to {@link MlProject}  is by using
   * {@link Feature}s that simply extract the {@link Sensor} time series data. Set this
   * field to `true` (default) to use these {@link Feature}s. However, if the user wishes to
   * define their own {@link Feature}s, set this field to `false` and provide your own
   * {@link Feature}s in the {@link overrideFeatures} field.
   */
  readonly createDefaultFeatures?: boolean;
  withCreateDefaultFeatures(createDefaultFeatures: boolean): ReliabilityMlFeaturePreparationSpec;

  /**
   * If {@link createDefaultFeatures} is set to `true`, then how to create the default
   * {@link Feature}s based on {@link Sensor} time series data can be controlled by
   * this field. Refer to {@link ReliabilityMlFeatureCreationMethod} for more information.
   * In the most common case, it is suggested to use the default value `BEST`.
   */
  readonly featureCreationMethod?: string;
  withFeatureCreationMethod(featureCreationMethod: string | null): ReliabilityMlFeaturePreparationSpec;

  /**
   * The {@link Sensor#id} as a string.
   *
   * Upon the creation of {@link Feature}s based on {@link createDefaultFeatures}, there will
   * be a {@link Feature} preprocessing step that occurs in
   * {@link ReliabilityMlDatasetPreparationHelper#prepareCleanedFeatureSet}. As part of the
   * preprocessing step, some {@link Feature}s may be removed from the {@link Feature.Set}
   * because they have more noise than signal. However, if the user has qualitative information
   * about some {@link Sensor}s, which is relevant to modeling the {@link ReliabilityAsset},
   * then they can force the {@link Feature} preprocessing step to compulsorily keep these
   * {@link Sensor}s in the {@link Feature.Set}. For all {@link Sensor}s to compulsorily keep
   * in the final {@link Feature.Set}, provide their `id`s.
   */
  readonly includeSensors?: Array_Type<string>;
  withIncludeSensors(includeSensors: Array_Type<string> | Array<string> | null): ReliabilityMlFeaturePreparationSpec;

  /**
   * The {@link Sensor#id} as a string.
   *
   * If {@link createDefaultFeatures} is set to `true`, {@link Feature}s will be created for all
   * the {@link Sensor}s associated with the {@link ReliabilityAsset}. However, if there are
   * some {@link Sensor}s which provide no qualitative information for the modeling of the
   * {@link ReliabilityAsset}, then the user can stop the creation of {@link Feature}s for these
   * {@link Sensor}s by providing their id's in this field.  This will have no impact on the
   * {@link #additionalRasrs} that are included.
   */
  readonly excludeSensors?: Array_Type<string>;
  withExcludeSensors(excludeSensors: Array_Type<string> | Array<string> | null): ReliabilityMlFeaturePreparationSpec;

  /**
   * If {@link createDefaultFeatures} is set to `false`, then the user MUST provide
   * {@link Feature}s that they have defined AND upserted. Once these {@link Feature}s have been
   * defined and upserted, provide the list of those {@link Feature}s in this field. Note that
   * for all the {@link Feature}s provided here, the `name` field should be present in the object.
   */
  readonly overrideFeatures?: Array_Type<Feature>;
  withOverrideFeatures(overrideFeatures: Array_Type<Feature> | Array<IFeature> | null): ReliabilityMlFeaturePreparationSpec;

  /**
   * A string representation of {@link Feature#name}s. See {@link Feature.Set#features}.
   *
   * Upon the creation an initial {@link Feature.Set}, there will be a {@link Feature} preprocessing
   * step that occurs in  {@link ReliabilityMlDatasetPreparationHelper#prepareCleanedFeatureSet}.
   * As part of the preprocessing step, some {@link Feature}s may be removed from the {@link Feature.Set}
   * because they have more noise than signal. However, if the user has qualitative information
   * about some {@link Feature}s, which is relevant to modeling the {@link ReliabilityAsset},
   * then they can force the {@link Feature} preprocessing step to compulsorily keep these
   * {@link Feature}s in the {@link Feature.Set}. For all {@link Feature}s to compulsorily keep
   * in the final {@link Feature.Set}, provide their `name`s.
   */
  readonly includeFeatures?: Array_Type<string>;
  withIncludeFeatures(includeFeatures: Array_Type<string> | Array<string> | null): ReliabilityMlFeaturePreparationSpec;

  /**
   * Preprocessing and "cleaning" the initial {@link Feature.Set} that will be created involves the
   * removal of all {@link Feature}s that are flatlining beyond a certain percentage of the time.
   * If the threshold for flatlining is 20, then all {@link Feature}s that flatline >= 20% of the time
   * will be removed from the {@link Feature.Set}.
   */
  readonly flatliningThreshold?: number;
  withFlatliningThreshold(flatliningThreshold: number | null): ReliabilityMlFeaturePreparationSpec;

  /**
   * Flatlining of a {@link Feature} is said to occur if the standard deviation of the {@link Feature}
   * in some window of time is zero. The default window size is assumed to be 6 hours to match the default window
   * size used to calculate {@link SensorDataSummary} entities for UI previews.
   *
   * With a default {@link ReliabilityMlDatasetPreparationSpec#interval} of `QUARTER_HOUR`, this translates to 24
   * time steps. Define the number of time steps based on the {@link Interval} used for preparing the
   * {@link Feature.Set}.
   */
  readonly flatliningTimeSteps?: number;
  withFlatliningTimeSteps(flatliningTimeSteps: number | null): ReliabilityMlFeaturePreparationSpec;

  /**
   * The {@link ReliabilityAssetSensorRelation}s that are not directly associated with the
   * {@link ReliabilityAsset} but provide valuable information for the modeling of the
   * {@link ReliabilityAsset} can be included in the {@link Feature.Set}. Provide the
   * {@link ReliabilityAssetSensorRelation}s as an array in this field.
   */
  readonly additionalRasrs?: Array_Type<ReliabilityAssetSensorRelation>;
  withAdditionalRasrs(additionalRasrs: Array_Type<ReliabilityAssetSensorRelation> | Array<IReliabilityAssetSensorRelation> | null): ReliabilityMlFeaturePreparationSpec;

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
  static fromJson(json: any): ReliabilityMlFeaturePreparationSpec | null;

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
  static fromJsonString(json: string): ReliabilityMlFeaturePreparationSpec | null;

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
  static fromXmlString(xml: string): ReliabilityMlFeaturePreparationSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ReliabilityMlFeaturePreparationSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ReliabilityMlFeaturePreparationSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMlFeaturePreparationSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMlFeaturePreparationSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMlFeaturePreparationSpec>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMlFeaturePreparationSpec>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityMlFeaturePreparationSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMlFeaturePreparationSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMlFeaturePreparationSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ReliabilityMlFeaturePreparationSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): ReliabilityMlFeaturePreparationSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityMlFeaturePreparationSpec;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityMlFeaturePreparationSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityMlFeaturePreparationSpec;

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
  withoutFieldAtPath(path: string): ReliabilityMlFeaturePreparationSpec;

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
  withoutField(field: string): ReliabilityMlFeaturePreparationSpec;

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
  withoutField(field: FieldType): ReliabilityMlFeaturePreparationSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ReliabilityMlFeaturePreparationSpec;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityMlFeaturePreparationSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ReliabilityMlFeaturePreparationSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityMlFeaturePreparationSpec;

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
  defaultField(field: string): ReliabilityMlFeaturePreparationSpec;

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
  defaultField(field: FieldType): ReliabilityMlFeaturePreparationSpec;

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
  unsetField(field: string): ReliabilityMlFeaturePreparationSpec;

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
  unsetField(field: FieldType): ReliabilityMlFeaturePreparationSpec;

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
  removeField(field: string): ReliabilityMlFeaturePreparationSpec;

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
  removeField(field: FieldType): ReliabilityMlFeaturePreparationSpec;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityMlFeaturePreparationSpec;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityMlFeaturePreparationSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityMlFeaturePreparationSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityMlFeaturePreparationSpec;

  mergeJson(json: any): ReliabilityMlFeaturePreparationSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityMlFeaturePreparationSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ReliabilityMlFeaturePreparationSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ReliabilityMlFeaturePreparationSpec>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityMlFeaturePreparationSpec> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ReliabilityMlFeaturePreparationSpec> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ReliabilityMlFeaturePreparationSpec>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ReliabilityMlFeaturePreparationSpec> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ReliabilityMlFeaturePreparationSpec> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityMlFeaturePreparationSpec> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ReliabilityMlFeaturePreparationSpec>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ReliabilityMlFeaturePreparationSpec>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityMlFeaturePreparationSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityMlFeaturePreparationSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityMlFeaturePreparationSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ReliabilityMlFeaturePreparationSpec;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityMlFeaturePreparationSpec;

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
  static make(fields: any, withDefaults?: boolean): ReliabilityMlFeaturePreparationSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityMlFeaturePreparationSpec;

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
  afterMake(): ReliabilityMlFeaturePreparationSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ReliabilityMlFeaturePreparationSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityMlFeaturePreparationSpec> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ReliabilityMlFeaturePreparationSpec;
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
