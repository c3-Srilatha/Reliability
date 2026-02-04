// TypeScript definitions for the C3 type ValidatedTimeseriesDataPoint

/**
 * This type represents a validated timeseries data point that inherits from {@link IntervalDataPoint}.
 * It is specifically used to perform validation on the start and end fields of timeseries data points.
 * The validation is enforced through the `validateTimeRange` function that checks the validity of the
 * timespan between the start and end timestamps for the data point.
 * This ensures that the times are within acceptable ranges as per business logic.
 *
 * It is recommended to use this type in contexts where time validation is necessary.
 *
 * @remarks this represents a value passed to a method that expects an instance of ValidatedTimeseriesDataPoint
 */
declare interface IValidatedTimeseriesDataPoint<P> {

  /**
   * This field represents the start date of the timeseries data point.
   * It is validated using the {@link validateTimeRange} function to ensure it falls within the
   * allowed time range.
   */
  start: DateTime | Date | string;

  /**
   * outlierCode: 0 or no value -- regular point
   *              1 -- to be ignored when returning results of value outlier analysis
   *              2 -- is an estimated value
   *              3 -- combination of 1 and 2 together
   *
   * enum (0, 1, 2)
   */
  outlierCode?: number;

  /**
   * (Optional) any comments for the data point
   */
  comments?: string;

  /**
   * Denotes if the value is an actual value or an estimated value. default = null (actual value)
   */
  isEstimated?: boolean;

  /**
   * Same data points can have different data version to denote priority. Default behavior in case of overlapping
   * data points is to pick the data point with the highest data version.
   * If data version is not specified, then default (avg) overlap handling is applied to the overalapping data points
   */
  dataVersion?: number;

  /**
   * Customer specific status code for the data point (may be used to denote data quality)
   */
  statusCode?: string;

  /**
   * This field represents the end date of the timeseries data point.
   * It is validated using the {@link validateTimeRange} function to ensure it falls within the
   * allowed time range.
   */
  end: DateTime | Date | string;

  /**
   * Partition key Bin separator used to separate partition key from bin id
   */
  PK_BIN_SEPARATOR?: string;

  parent: P;
}

/**
 * This type represents a validated timeseries data point that inherits from {@link IntervalDataPoint}.
 * It is specifically used to perform validation on the start and end fields of timeseries data points.
 * The validation is enforced through the `validateTimeRange` function that checks the validity of the
 * timespan between the start and end timestamps for the data point.
 * This ensures that the times are within acceptable ranges as per business logic.
 *
 * It is recommended to use this type in contexts where time validation is necessary.
 *
 * @remarks this represents a made instance of ValidatedTimeseriesDataPoint
 */
declare class ValidatedTimeseriesDataPoint<P> extends Obj  {

  /**
   * This field represents the start date of the timeseries data point.
   * It is validated using the {@link validateTimeRange} function to ensure it falls within the
   * allowed time range.
   */
  readonly start: DateTime;
  withStart(start: DateTime | Date | string): ValidatedTimeseriesDataPoint;

  /**
   * outlierCode: 0 or no value -- regular point
   *              1 -- to be ignored when returning results of value outlier analysis
   *              2 -- is an estimated value
   *              3 -- combination of 1 and 2 together
   *
   * enum (0, 1, 2)
   */
  readonly outlierCode?: number;
  withOutlierCode(outlierCode: number | null): ValidatedTimeseriesDataPoint;

  /**
   * (Optional) any comments for the data point
   */
  readonly comments?: string;
  withComments(comments: string | null): ValidatedTimeseriesDataPoint;

  /**
   * Denotes if the value is an actual value or an estimated value. default = null (actual value)
   */
  readonly isEstimated?: boolean;
  withIsEstimated(isEstimated: boolean): ValidatedTimeseriesDataPoint;

  /**
   * Same data points can have different data version to denote priority. Default behavior in case of overlapping
   * data points is to pick the data point with the highest data version.
   * If data version is not specified, then default (avg) overlap handling is applied to the overalapping data points
   */
  readonly dataVersion?: number;
  withDataVersion(dataVersion: number | null): ValidatedTimeseriesDataPoint;

  /**
   * Customer specific status code for the data point (may be used to denote data quality)
   */
  readonly statusCode?: string;
  withStatusCode(statusCode: string | null): ValidatedTimeseriesDataPoint;

  /**
   * This field represents the end date of the timeseries data point.
   * It is validated using the {@link validateTimeRange} function to ensure it falls within the
   * allowed time range.
   */
  readonly end: DateTime;
  withEnd(end: DateTime | Date | string): ValidatedTimeseriesDataPoint;

  /**
   * Partition key Bin separator used to separate partition key from bin id
   */
  readonly PK_BIN_SEPARATOR?: string;
  withPK_BIN_SEPARATOR(PK_BIN_SEPARATOR: string | null): ValidatedTimeseriesDataPoint;

  readonly parent: P;
  withParent(parent: P): ValidatedTimeseriesDataPoint;

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
  static fromJson(json: any): ValidatedTimeseriesDataPoint<P> | null;

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
  static fromJsonString(json: string): ValidatedTimeseriesDataPoint<P> | null;

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
  static fromXmlString(xml: string): ValidatedTimeseriesDataPoint<P> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ValidatedTimeseriesDataPoint<P> | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ValidatedTimeseriesDataPoint<P>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ValidatedTimeseriesDataPoint<P>;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ValidatedTimeseriesDataPoint<P>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ValidatedTimeseriesDataPoint<P>>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ValidatedTimeseriesDataPoint<P>>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ValidatedTimeseriesDataPoint<P>;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ValidatedTimeseriesDataPoint<P>;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ValidatedTimeseriesDataPoint<P>;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ValidatedTimeseriesDataPoint<P>;

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
  withField(field: string, value: any, doNotConvert?: boolean): ValidatedTimeseriesDataPoint<P>;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ValidatedTimeseriesDataPoint<P>;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ValidatedTimeseriesDataPoint<P>;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ValidatedTimeseriesDataPoint<P>;

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
  withoutFieldAtPath(path: string): ValidatedTimeseriesDataPoint<P>;

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
  withoutField(field: string): ValidatedTimeseriesDataPoint<P>;

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
  withoutField(field: FieldType): ValidatedTimeseriesDataPoint<P>;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ValidatedTimeseriesDataPoint<P>;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): ValidatedTimeseriesDataPoint<P>;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ValidatedTimeseriesDataPoint<P>;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ValidatedTimeseriesDataPoint<P>;

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
  defaultField(field: string): ValidatedTimeseriesDataPoint<P>;

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
  defaultField(field: FieldType): ValidatedTimeseriesDataPoint<P>;

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
  unsetField(field: string): ValidatedTimeseriesDataPoint<P>;

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
  unsetField(field: FieldType): ValidatedTimeseriesDataPoint<P>;

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
  removeField(field: string): ValidatedTimeseriesDataPoint<P>;

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
  removeField(field: FieldType): ValidatedTimeseriesDataPoint<P>;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ValidatedTimeseriesDataPoint<P>;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): ValidatedTimeseriesDataPoint<P>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ValidatedTimeseriesDataPoint<P>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ValidatedTimeseriesDataPoint<P>;

  mergeJson(json: any): ValidatedTimeseriesDataPoint<P>;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ValidatedTimeseriesDataPoint<P>;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ValidatedTimeseriesDataPoint<P>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ValidatedTimeseriesDataPoint<P>>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ValidatedTimeseriesDataPoint<P>> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ValidatedTimeseriesDataPoint<P>> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ValidatedTimeseriesDataPoint<P>>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ValidatedTimeseriesDataPoint<P>> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ValidatedTimeseriesDataPoint<P>> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ValidatedTimeseriesDataPoint<P>> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ValidatedTimeseriesDataPoint<P>>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ValidatedTimeseriesDataPoint<P>>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ValidatedTimeseriesDataPoint<P>;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ValidatedTimeseriesDataPoint<P>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ValidatedTimeseriesDataPoint<P>;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ValidatedTimeseriesDataPoint<P>;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ValidatedTimeseriesDataPoint<P>;

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
  static make(fields: any, withDefaults?: boolean): ValidatedTimeseriesDataPoint<P>;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ValidatedTimeseriesDataPoint<P>;

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
  afterMake(): ValidatedTimeseriesDataPoint<P>;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ValidatedTimeseriesDataPoint<P>;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ValidatedTimeseriesDataPoint<P>> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ValidatedTimeseriesDataPoint<P>;

  /**
   * Extract the partition key from the given obj
   */
  partitionKey(failIfMissing?: boolean): P | null;

  /**
   * @return compiled partition key bin expression for binning within a partition for {@link Partitionable} type
   * Type is passed in so that not all Persistable or external types need to mixes Partitionable
   */
  static compiledPartitionKeyBin(type: Type): Expr.Compiled<any, any>;

  /**
   * Extract the partition key from the given object and convert it to a string (E.g. if the partition key results in a reference object,
   * it will return the id field of that object. All other value types will be attempted to be converted to string
   */
  partitionKeyAsString(failIfMissing?: boolean): string | null;

  /**
   * Extract the partition key from the given object and convert it to a string (E.g. if the partition key results in a reference object,
   * it will return the id field of that object. All other value types will be attempted to be converted to string
   */
  static partitionKeyFromInstAsString(o?: Obj, failIfMissing?: boolean): string | null;

  /**
   * Extract the partition key + bin info from the given object and convert it to a string (E.g. if the partition key results in a reference object,
   * it will return the id field of that object. All other value types will be attempted to be converted to string
   * This will also look at {@link Ann.Db#partitionKeyBin} and append it to the partition key
   */
  static partitionKeyWithBinFromInst(o?: Obj): string;

  /**
   * Returns the partition key value type as per field defined on @db(partitionKeyField)
   */
  static partitionKeyType(): ValueType;

  /**
   * Returns the partition key field type as per field defined on @db(partitionKeyField)
   */
  static partitionKeyFieldType(): FieldType;

  /**
   * Return partitions as a map grouped by {@link partitionKey}
   * @param objs
   *        Stream of partitionable objects that need to be grouped by partition key & persistence order
   * @return map where key is partitionKey -> DataPartition
   */
  static partition(objs?: Stream<ValidatedTimeseriesDataPoint<P>>, spec?: PartitionBucketStrategy): Map_Type<string, KvDataPartition> | null;

  /**
   * Obtain stream of {@link Partitionable} objects from the various partitions
   * @param partitions
   *            Partitions that need to be converted to stream<Partitionable>
   * @return stream of partitionable objects from the given partitions
   */
  static fromPartitions(partitions?: Stream<KvDataPartition>): Stream<ValidatedTimeseriesDataPoint<P>> | null;

  /**
   * Compaction is the process of graduating hot buckets to the cold ones if it satisfies the criteria given by the spec.
   * Hot buckets typically live in {@link KvStore} & cold buckets would live in cheaper stores (but not limited to) e.g.
   * {@link FileSystem}
   * This api compacts the given partition only based on the spec.
   * {@see DataPartition#compact}
   */
  compact(spec?: PartitionBucketStrategy): void;

  /**
   * Compaction is the process of graduating hot buckets to the cold ones if it satisfies the criteria given by the spec.
   * Hot buckets typically live in {@link KvStore} & cold buckets would live in cheaper stores (but not limited to) e.g.
   * {@link FileSystem}
   * This api compacts the given partition only based on the spec.
   * {@see DataPartition#compact}
   */
  static compactFromInst(o: Obj, spec?: PartitionBucketStrategy): void;

  /**
   * FillBuckets is the process of packing and bucketing of raw persisted data into existing hot buckets.
   * If there are both hot and cold buckets, the given objs will only be bucketed in the hot buckets and cold buckets
   * will be left untouched during this operation
   * This api fills buckets for the given partition only based on the spec
   * {@see DataPartition#fillBuckets}
   */
  fillBuckets(spec?: PartitionBucketStrategy): void;

  /**
   * FillBuckets is the process of packing and bucketing of raw persisted data into existing hot buckets.
   * If there are both hot and cold buckets, the given objs will only be bucketed in the hot buckets and cold buckets
   * will be left untouched during this operation
   * This api fills buckets for the given partition only based on the spec
   * {@see DataPartition#fillBuckets}
   */
  static fillBucketsFromInst(o: Obj, spec?: PartitionBucketStrategy): void;

  /**
   * End point where cold data gets persisted
   * @param unencodedPartitionKey
   *        Unencoded Partition key for which the end point is desired
   * @return the end point where the cold data will be persisted
   */
  static coldDataEndpoint(unencodedPartitionKey?: string): string;

  /**
   * Trigger c3 packing synchronously.
   *
   * @return pair where fst is true if packing completed successfully and snd true if there was a cassandra error
   */
  static syncPackPartition(t?: Type, unencodedPartitionKey?: string, bs?: PartitionBucketStrategy, compact?: boolean): Pair<boolean, boolean> | null;

  /**
   * Updates the stored cold data endpoint for all buckets for a row
   *
   * @param typeName - the name of the type
   * @param tableName - the name of the table, including the keyspace name
   * @param coldEndpoint - the new cold data endpoint for the type
   * @param rowId - the unencoded id of the row
   */
  static updateColdDataEndpoint(typeName: string, tableName: string, coldEndpoint: string, rowId: string): void;

  /**
   * Moves the cold data files for all rows for a type and updates the stored cold data endpoints
   *
   * @param type - the type of the row
   * @param partitionKey - the unencoded partition key of the row
   */
  static migrateColdData(type: string, partitionKey: string, spec?: MigrateColdDataSpec): void;

  /**
   * Moves a batch of V7 rows to V8, as is
   * Returns a list of ids corresponding to any failed rows
   *
   * @param v8TableName - the name of the V8 table, including the keyspace name
   * @param v7TableName - the name of the V7 table, including the keyspace name
   * @param v7Endpoint - the endpoint of the V7 application
   * @param authToken - the auth token for the V7 application
   * @param partitionKeys - the unencoded partition keys for the rows to be migrated
   */
  static migrateV7RowBatch(v8TableNamee: string, v7TableName: string, v7Endpoint: string, authToken: string, partitionKeys: Array_Type<string>): Array_Type<string> | null;

  /**
   * A function to validate the time range between the start and end dates for a timeseries data point.
   *
   * @param point The instance of {@link ValidatedTimeseriesDataPoint} being validated.
   * @returns A {@link ValidationStatus} object indicating the success or failure of the validation.
   * The result will include a status (success, error, warning) and an optional error message.
   */
  static validateTimeRange(point?: ValidatedTimeseriesDataPoint<P>): ValidationStatus | null;
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
