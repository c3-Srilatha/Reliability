// TypeScript definitions for the C3 type ModelFeaturesFetchHelper

/**
 * A helper type to fetch all features in the training spec of an {@link MlModel}.
 * Used in grids on model detail pages.
 * For a helper which fetches features for assets, use {@link AssetFeaturesFetchHelper}.
 *
 * See `rel-dev-model-output-features-fetch.c3doc` for more detail about its base type {@link FeatureFetchBase} and its functionality.
 *
 * @remarks this represents a value passed to a method that expects an instance of ModelFeaturesFetchHelper
 */
declare interface IModelFeaturesFetchHelper {

  /**
   * Filler ID for grid purposes. Populated with the feature name that is passed in; in most cases, a
   * {@link Metric#name} which may correspond to a matching {@link ExpectedSensor#id} or {@link Sensor#metricSafeId}.
   * The coresponding metric may or may not exist in metadata. In the case of {@link Sensor}-based metrics,
   * the corresponding metric likely does not.
   */
  id?: string;

  /**
   * {@link Sensor#id}, if applicable.
   */
  sensorId?: string;

  /**
   * {@link Sensor}, if applicable.
   */
  sensorOperationalStatus?: ISensorOperationalStatusTimedValue;

  /**
   * Display name for the feature. Corresponds to {@link Sensor#tag} or {@link Metric#name}.
   */
  name?: string;

  /**
   * Description of the feature. Corresponds to {@link Sensor#description} or {@link Metric#description}.
   */
  description?: string;

  /**
   * The {@link ExpectedSensor#id} corresponding to the feature. Only populated for
   * sensor-based features or for metric-based features which represent (and have the same name as)
   * expected sensors.
   */
  expectedSensor?: string;

  /**
   * Value of the feature. Uses {@link ReliabilityMLConfig#featureValueLookbackHorizon} and
   * {@link ReliabilityMLConfig#featureValueEvalInterval} to determine how far to look back
   * for a feature value and at what interval.
   */
  value?: number;

  /**
   * Unit of the feature. Corresponds to {@link Sensor#unitConstraint} or {@link Metric#unit}
   */
  unit?: IUnit;

  /**
   * Feature contribution value, i.e. how important this feature is at a given time.
   */
  contribution?: number;

  /**
   * Feature reconstruction value, i.e. the predicted value by the model for this feature.
   */
  reconstruction?: number;

  /**
   * Feature contribution value in Percentage to display in UI.
   */
  contributionPercentage?: number;

  /**
   * Current value and unit to display in UI.
   */
  valueWithUnit?: string;

  /**
   * Variance of the feature. Uses {@link ReliabilityMLConfig#featureVarianceLookbackHorizon} and
   * {@link ReliabilityMLConfig#featureVarianceEvalInterval} to determine the time range to
   * calculate variance over.
   */
  variance?: number;

  /**
   * The standard deviation of the feature value. Defined as the square root of the variance field.
   */
  stddev?: number;

  /**
   * The latest {@link SensorHealthAlert} on a {@link Sensor} feature.
   */
  sensorAlert?: ISensorHealthAlert;
}

/**
 * A helper type to fetch all features in the training spec of an {@link MlModel}.
 * Used in grids on model detail pages.
 * For a helper which fetches features for assets, use {@link AssetFeaturesFetchHelper}.
 *
 * See `rel-dev-model-output-features-fetch.c3doc` for more detail about its base type {@link FeatureFetchBase} and its functionality.
 *
 * @remarks this represents a made instance of ModelFeaturesFetchHelper
 */
declare class ModelFeaturesFetchHelper extends Obj  {

  /**
   * Filler ID for grid purposes. Populated with the feature name that is passed in; in most cases, a
   * {@link Metric#name} which may correspond to a matching {@link ExpectedSensor#id} or {@link Sensor#metricSafeId}.
   * The coresponding metric may or may not exist in metadata. In the case of {@link Sensor}-based metrics,
   * the corresponding metric likely does not.
   */
  readonly id?: string;
  withId(id: string | null): ModelFeaturesFetchHelper;

  /**
   * {@link Sensor#id}, if applicable.
   */
  readonly sensorId?: string;
  withSensorId(sensorId: string | null): ModelFeaturesFetchHelper;

  /**
   * {@link Sensor}, if applicable.
   */
  readonly sensorOperationalStatus?: SensorOperationalStatusTimedValue;
  withSensorOperationalStatus(sensorOperationalStatus: ISensorOperationalStatusTimedValue | null): ModelFeaturesFetchHelper;

  /**
   * Display name for the feature. Corresponds to {@link Sensor#tag} or {@link Metric#name}.
   */
  readonly name?: string;
  withName(name: string | null): ModelFeaturesFetchHelper;

  /**
   * Description of the feature. Corresponds to {@link Sensor#description} or {@link Metric#description}.
   */
  readonly description?: string;
  withDescription(description: string | null): ModelFeaturesFetchHelper;

  /**
   * The {@link ExpectedSensor#id} corresponding to the feature. Only populated for
   * sensor-based features or for metric-based features which represent (and have the same name as)
   * expected sensors.
   */
  readonly expectedSensor?: string;
  withExpectedSensor(expectedSensor: string | null): ModelFeaturesFetchHelper;

  /**
   * Value of the feature. Uses {@link ReliabilityMLConfig#featureValueLookbackHorizon} and
   * {@link ReliabilityMLConfig#featureValueEvalInterval} to determine how far to look back
   * for a feature value and at what interval.
   */
  readonly value?: number;
  withValue(value: number | null): ModelFeaturesFetchHelper;

  /**
   * Unit of the feature. Corresponds to {@link Sensor#unitConstraint} or {@link Metric#unit}
   */
  readonly unit?: Unit;
  withUnit(unit: IUnit | null): ModelFeaturesFetchHelper;

  /**
   * Feature contribution value, i.e. how important this feature is at a given time.
   */
  readonly contribution?: number;
  withContribution(contribution: number | null): ModelFeaturesFetchHelper;

  /**
   * Feature reconstruction value, i.e. the predicted value by the model for this feature.
   */
  readonly reconstruction?: number;
  withReconstruction(reconstruction: number | null): ModelFeaturesFetchHelper;

  /**
   * Feature contribution value in Percentage to display in UI.
   */
  readonly contributionPercentage?: number;
  withContributionPercentage(contributionPercentage: number | null): ModelFeaturesFetchHelper;

  /**
   * Current value and unit to display in UI.
   */
  readonly valueWithUnit?: string;
  withValueWithUnit(valueWithUnit: string | null): ModelFeaturesFetchHelper;

  /**
   * Variance of the feature. Uses {@link ReliabilityMLConfig#featureVarianceLookbackHorizon} and
   * {@link ReliabilityMLConfig#featureVarianceEvalInterval} to determine the time range to
   * calculate variance over.
   */
  readonly variance?: number;
  withVariance(variance: number | null): ModelFeaturesFetchHelper;

  /**
   * The standard deviation of the feature value. Defined as the square root of the variance field.
   */
  readonly stddev?: number;
  withStddev(stddev: number | null): ModelFeaturesFetchHelper;

  /**
   * The latest {@link SensorHealthAlert} on a {@link Sensor} feature.
   */
  readonly sensorAlert?: SensorHealthAlert;
  withSensorAlert(sensorAlert: ISensorHealthAlert | null): ModelFeaturesFetchHelper;

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
  static fromJson(json: any): ModelFeaturesFetchHelper | null;

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
  static fromJsonString(json: string): ModelFeaturesFetchHelper | null;

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
  static fromXmlString(xml: string): ModelFeaturesFetchHelper | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ModelFeaturesFetchHelper | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ModelFeaturesFetchHelper;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ModelFeaturesFetchHelper;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ModelFeaturesFetchHelper;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ModelFeaturesFetchHelper>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ModelFeaturesFetchHelper>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ModelFeaturesFetchHelper;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ModelFeaturesFetchHelper;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ModelFeaturesFetchHelper;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ModelFeaturesFetchHelper;

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
  withField(field: string, value: any, doNotConvert?: boolean): ModelFeaturesFetchHelper;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ModelFeaturesFetchHelper;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ModelFeaturesFetchHelper;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ModelFeaturesFetchHelper;

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
  withoutFieldAtPath(path: string): ModelFeaturesFetchHelper;

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
  withoutField(field: string): ModelFeaturesFetchHelper;

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
  withoutField(field: FieldType): ModelFeaturesFetchHelper;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ModelFeaturesFetchHelper;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): ModelFeaturesFetchHelper;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ModelFeaturesFetchHelper;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ModelFeaturesFetchHelper;

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
  defaultField(field: string): ModelFeaturesFetchHelper;

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
  defaultField(field: FieldType): ModelFeaturesFetchHelper;

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
  unsetField(field: string): ModelFeaturesFetchHelper;

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
  unsetField(field: FieldType): ModelFeaturesFetchHelper;

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
  removeField(field: string): ModelFeaturesFetchHelper;

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
  removeField(field: FieldType): ModelFeaturesFetchHelper;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ModelFeaturesFetchHelper;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): ModelFeaturesFetchHelper;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ModelFeaturesFetchHelper;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ModelFeaturesFetchHelper;

  mergeJson(json: any): ModelFeaturesFetchHelper;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ModelFeaturesFetchHelper;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ModelFeaturesFetchHelper;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ModelFeaturesFetchHelper>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ModelFeaturesFetchHelper> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ModelFeaturesFetchHelper> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ModelFeaturesFetchHelper>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ModelFeaturesFetchHelper> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ModelFeaturesFetchHelper> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ModelFeaturesFetchHelper> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ModelFeaturesFetchHelper>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ModelFeaturesFetchHelper>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ModelFeaturesFetchHelper;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ModelFeaturesFetchHelper;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ModelFeaturesFetchHelper;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ModelFeaturesFetchHelper;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ModelFeaturesFetchHelper;

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
  static make(fields: any, withDefaults?: boolean): ModelFeaturesFetchHelper;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ModelFeaturesFetchHelper;

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
  afterMake(): ModelFeaturesFetchHelper;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ModelFeaturesFetchHelper;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ModelFeaturesFetchHelper> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ModelFeaturesFetchHelper;

  /**
   * The main function to use to fetch ML features and their attributes.
   * @param spec
   *           A {@link FeatureFetchBaseSpec} that specifies the context and parameters for fetching features.
   *           The `filter` field does nothing.
   *           The `include` field must be populated for the `value`, `contribution`, `variance` and
   *           `stddev` fields to be in the result.
   *           The `order` field can be used for any of the fields on this type. Must specify
   *           ascending(...) or descending(...).
   *           The `asOf` field can be used to get the `value`, `contribution`, and `variance` at a specific time.
   *           The `limit` and `offset` fields are respected.
   * @return A {@link FetchResultWithTotalCount} containing the fetched features and total count.
   */
  static fetchFeatures(spec?: FeatureFetchBaseSpec): FetchResultWithTotalCount<FeatureFetchBase> | null;

  /**
   * Gets all the features for the given `featureNames`, `assetId`, `modelId`, and whether or not this
   * is for model validation or not.
   *
   * Then, populates these features with the fields on `spec.include`, partially using the `contributionMap` if it is
   * provided. These fields are populate at the time of `spec.timestamp`. If no `spec.include` is provided,
   * the following fields are queried: `id`, `sensorId`, `name`, `description`, `unit`, `sensorOperationalStatus`.
   *
   * @param spec
   *        See {@link FeatureFetchBaseGetFeaturesSpec} for details.
   * @return An array of {@link FeatureFetchBase} objects with populated fields.
   */
  static getAllFeatures(spec?: FeatureFetchBaseGetFeaturesSpec): Array_Type<FeatureFetchBase> | null;

  /**
   * A function to apply a {@link FetchSpec} to a list of features. Used by {@link FeatureFetchBase#fetchFeatures}.
   * Specifically, the `filter`, `order`, `limit`, and `offset` fields are respected. Expects the fields to be filtered
   * and ordered on to be present in `features`.
   *
   * @param spec
   *           The {@link FetchSpec} to apply to the features.
   * @param features
   *           The features to apply the {@link FetchSpec} to.
   * @return A {@link FetchResultWithTotalCount} containing the filtered and ordered features.
   */
  static applyFetchSpec(spec?: FetchSpec, features?: Array_Type<FeatureFetchBase>): FetchResultWithTotalCount<FeatureFetchBase> | null;

  /**
   * Helper function to apply sort order to FetchSpec. Only called if spec.order exists
   *
   * @param spec
   *           The {@link FetchSpec} to apply the features.
   * @param features
   *           The features to apply the {@link FetchSpec} to.
   * @return An array of {@link FeatureFetchBase} objects sorted according to the spec.
   */
  static applyOrderSpec(spec?: FetchSpec, features?: Array_Type<FeatureFetchBase>): Array_Type<FeatureFetchBase> | null;

  /**
   * Helper function to apply filter to FetchSpec. Only called if spec.filter exists
   *
   * @param spec
   *           The {@link FetchSpec} to apply the features.
   * @param features
   *           The features to apply the {@link FetchSpec} to.
   * @return An array of {@link FeatureFetchBase} objects filtered according to the spec.
   */
  static applyFilterSpec(spec?: FetchSpec, features?: Array_Type<FeatureFetchBase>): Array_Type<FeatureFetchBase> | null;

  /**
   * A function to fetch sensor-based features. Used by {@link FeatureFetchBase#fetchFeatures}.
   * assetId argument must be provided if expectedSensor field is included.
   * @param featureNames
   *           Array of feature names to fetch.
   * @param assetId
   *           The ID of the asset to fetch features for.
   * @param modelId
   *           The ID of the model to fetch features for.
   * @param include
   *           Comma-separated string of fields to include in the result.
   * @param asOf
   *           The timestamp to fetch features as of.
   * @param useExpectedSensorId
   *           Whether to use expected sensor ID for filtering.
   * @return An array of {@link FeatureFetchBase} objects representing sensor-based features.
   */
  static fetchSensorFeatures(featureNames?: Array_Type<string>, assetId?: string, modelId?: string, include?: string, asOf?: DateTime, useExpectedSensorId?: boolean): Array_Type<FeatureFetchBase> | null;

  /**
   * A function to fetch expected sensor-based features. Used by {@link FeatureFetchBase#fetchFeatures}.
   * Simple wrapper around {@link FeatureFetchBase#fetchSensorFeatures}.
   * @param featureNames
   *           Array of feature names to fetch.
   * @param assetId
   *           The ID of the asset to fetch features for.
   * @param modelId
   *           The ID of the model to fetch features for.
   * @param include
   *           Comma-separated string of fields to include in the result.
   * @param asOf
   *           The timestamp to fetch features as of.
   * @return An array of {@link FeatureFetchBase} objects representing expected sensor-based features.
   */
  static fetchExpectedSensorFeatures(featureNames?: Array_Type<string>, assetId: string, modelId?: string, include?: string, asOf?: DateTime): Array_Type<FeatureFetchBase> | null;

  /**
   * A function to fetch metric-based features. Used by {@link FeatureFetchBase#fetchFeatures}.
   * @param featureNames
   *           Array of feature names to fetch.
   * @param assetId
   *           The ID of the asset to fetch features for.
   * @param modelId
   *           The ID of the model to fetch features for.
   * @param include
   *           Comma-separated string of fields to include in the result.
   * @param asOf
   *           The timestamp to fetch features as of.
   * @return An array of {@link FeatureFetchBase} objects representing metric-based features.
   */
  static fetchEvalMetricsFeatures(featureNames?: Array_Type<string>, assetId: string, modelId?: string, include?: string, asOf?: DateTime): Array_Type<FeatureFetchBase> | null;

  /**
   * A function to get the latest value (as of some datetime) for a metric. Used by {@link FeatureFetchBase#fetchEvalMetricsFeatures}.
   * @param featureNames
   *           Array of feature names to get values for.
   * @param assetId
   *           The ID of the asset to get values for.
   * @param asOf
   *           The timestamp to get values as of.
   * @return A map from feature name to its latest value.
   */
  static getEvalMetricsFeatureValues(featureNames: Array_Type<string>, assetId: string, asOf?: DateTime): Map_Type<string, number> | null;

  /**
   * A function to get the variance (over some horizon/interval) for a metric. Used by {@link FeatureFetchBase#fetchEvalMetricsFeatures}.
   * @param featureNames
   *           Array of feature names to get variances for.
   * @param assetId
   *           The ID of the asset to get variances for.
   * @param asOf
   *           The timestamp to get variances as of.
   * @param horizon
   *           The time horizon to calculate variance over.
   * @param interval
   *           The time interval to use for variance calculation.
   * @return A map from feature name to its variance value.
   */
  static getEvalMetricsFeatureVariances(featureNames: Array_Type<string>, assetId: string, asOf?: DateTime, horizon?: number, interval?: string): Map_Type<string, number> | null;

  /**
   * A function to add attributes to a list of objects according to a map of values. Used by {@link FeatureFetchBase#fetchSensorFeatures} and {@link FeatureFetchBase#fetchEvalMetricsFeatures}.
   * @param attributeName
   *           The name of the attribute to add.
   * @param attributeValues
   *           A map from object key to attribute value.
   * @param objects
   *           The list of objects to add attributes to.
   * @param objectKey
   *           The field name to use as the key for looking up attribute values.
   * @return The updated list of objects with attributes added.
   */
  static addAttributeToObject(attributeName: string, attributeValues?: Map_Type<string, any>, objects?: Array_Type<FeatureFetchBase>, objectKey?: string = '\'id\''): Array_Type<FeatureFetchBase> | null;

  /**
   * A function that takes in a list of {@link Sensor}s and a timestamp and returns the latest {@link SensorHealthAlert} information within a month prior
   * of the provided timestamp for each sensor.
   * @param sensors
   *           The list of sensors to get health alerts for.
   * @param timestamp
   *           The timestamp to get health alerts as of.
   * @return A JSON object containing sensor health alert information.
   */
  static getSensorHealthAlerts(sensors?: Array_Type<Sensor>, timestamp?: DateTime): any | null;

  /**
   * In order to sort the result, the fields to be ordered on must also be fetched.
   * This function handles adding the such fields to the `spec.include` field and returns the updated `spec.
   * @param spec
   *           The {@link FetchSpec} to update with order fields.
   * @return The updated {@link FetchSpec} with order fields added to include.
   */
  static addOrderFieldsToIncludeStr(spec: FetchSpec): FetchSpec;

  /**
   * A fetch for features of an asset. Supports features which are metrics without bindings as
   * well as features which correspond to {@link Sensor} quantities (supported through bindings
   * with key `seriesName`). Wrapper for {@link FeatureFetchBase#fetchFeatures}.
   * @param spec
   *         Passed directly as {@link FeatureFetchBase#fetchFeatures} spec argument.
   * @param modelId
   *         The ID of the {@link MlModel} we want features for. If no id is provided,
   *         an empty {@link FetchResult} is returned.
   * @param assetId
   *         The ID of the {@link ReliabilityAsset} the model is used for.
   * @param isValidation
   *        When set to `true`, the feature contribution values are obtained using {@link ReliabilityRiskScoreMlValidationContributionHeader}.
   *        Otherwise, feature contribution values are obtained using {@link ReliabilityRiskScoreMlContributionHeader}.
   * @return FetchResultWithTotalCount<FeatureFetchBase>
   */
  static fetchFeaturesForModel(spec?: FetchSpec, modelId?: string, assetId?: string, isValidation?: boolean): FetchResultWithTotalCount<FeatureFetchBase> | null;

  /**
   * A fetch for the related {@link ReliabilityAssetSensorRelation}s of a {@link MlModel},
   * which links a {@link ReliabilityAsset} to {@link Sensor}s not presented as features on this model,
   * but used as features to train other models on this {@link ReliabilityAsset}.
   * @param spec
   *         Passed directly as {@link ReliabilityAssetSensorRelation#fetch} spec argument.
   * @param modelId
   *         The ID of the {@link MlModel} we want features for. If no id is provided,
   *         an empty {@link FetchResult} is returned.
   * @param assetId
   *         The ID of the {@link ReliabilityAsset} the model is used for.
   * @return FetchResult<ReliabilityAssetSensorRelation>
   */
  static fetchRelatedSensorRelationsForModel(spec?: FetchSpec, modelId?: string, assetId?: string): FetchResult<ReliabilityAssetSensorRelation> | null;

  /**
   * Gets the feature names to pass into {@link FeatureFetchBase#fetchFeatures}. As implemented in
   * base, looks at the model's associated {@link MLDataSourceSpec}, returns all its `features`
   * (as long as it is in the asset's {@link AssetClass} along with any bindings with the key
   * `seriesName`.
   */
  static getFeatureNamesForModel(modelId: string): Array_Type<string> | null;

  /**
   * Constructs a map of metric names for each of the given feature names.
   * This method returns a map of feature names to their corresponding metric names.
   *
   * @param featureNames - A list of feature names for which metric names are required.
   * @returns A map where the keys are feature names and the values are their corresponding metric names.
   */
  static getMetricNamesFromFeatureNames(featureNames: Array_Type<string>): Map_Type<string, string> | null;

  /**
   * Gets the sensors corresponding to the given feature names used in models.
   * This function is intended to map feature names (such as sensor metrics) to actual sensor objects. It can be overridden
   * for custom model creation.
   *
   * @param featureNames - A list of feature names to look up.
   * @param asset - The reliability asset to which the sensors are associated.
   * @returns A map where the keys are feature names and the values are sensor objects.
   */
  static getSensorsFromFeatureNames(featureNames: Array_Type<string>, asset: ReliabilityAsset): Map_Type<string, Sensor> | null;

  /**
   * Gets the {@link ReliabilityAsset} for a given {@link ReliabilityMlModel}.
   * This method was previously named `getAssetIdFromPredictionConfigurationId`. It retrieves the asset
   * associated with a given machine learning model for reliability risk prediction.
   *
   * @param model - The reliability machine learning model.
   * @returns The associated reliability asset for the given model.
   */
  static getAssetFromReliabilityMlModel(model: ReliabilityMlModel): ReliabilityAsset | null;
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
