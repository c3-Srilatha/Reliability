// TypeScript definitions for the C3 type IntervalDataPoint

/**
 * Mixin this type to store raw Timeseries data points which span a time interval
 * (defined start & end date time -> e.g. Billing cycle)
 *
 * This type participates in normalization process (@see normalization.c3doc) which performs data cleansing on these points
 *
 * In order for normalization process to work, there needs to be a 1-1 mapping in between a
 * {@link IntervalDataPoint} type & {@link IntervalDataHeader} type
 *
 * For normalization process, a single IntervalDataPoint type CANNOT map to multiple IntervalDataHeader types
 *
 * You'd also need to create a Timeseries field that needs to be normalized typically denoted with an annotation
 * @ts (@see Ann.Ts)
 *
 * @see normalization#getting-started for an end to end example
 *
 * DO NOT mixin this type if you do not want to participate in the normalization process & use the base types
 * (e.g. IntervalDataPointFields) if you would like to inherit the base fields only
 *
 * In order to represent data that has a happens at a particular instant in time (and no defined interval)
 * @see TimedDataPoint
 *
 * @see normalization#how-it-works
 * @see TimedDataPoint
 * @see IntervalDataHeader
 *
 * @remarks this represents a value passed to a method that expects an instance of IntervalDataPoint
 */
declare interface IIntervalDataPoint<P> {

  /**
   * start date for the data point
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
  outlierCode?: number | null;

  /**
   * (Optional) any comments for the data point
   */
  comments?: string | null;

  /**
   * Denotes if the value is an actual value or an estimated value. default = null (actual value)
   */
  isEstimated?: boolean;

  /**
   * Same data points can have different data version to denote priority. Default behavior in case of overlapping
   * data points is to pick the data point with the highest data version.
   * If data version is not specified, then default (avg) overlap handling is applied to the overalapping data points
   */
  dataVersion?: number | null;

  /**
   * Customer specific status code for the data point (may be used to denote data quality)
   */
  statusCode?: string | null;

  /**
   * end date for the data point (Only applicable for Interval Timeseries)
   */
  end: DateTime | Date | string;

  /**
   * Partition key Bin separator used to separate partition key from bin id
   */
  PK_BIN_SEPARATOR?: string | null;

  parent: P;
}

/**
 * Mixin this type to store raw Timeseries data points which span a time interval
 * (defined start & end date time -> e.g. Billing cycle)
 *
 * This type participates in normalization process (@see normalization.c3doc) which performs data cleansing on these points
 *
 * In order for normalization process to work, there needs to be a 1-1 mapping in between a
 * {@link IntervalDataPoint} type & {@link IntervalDataHeader} type
 *
 * For normalization process, a single IntervalDataPoint type CANNOT map to multiple IntervalDataHeader types
 *
 * You'd also need to create a Timeseries field that needs to be normalized typically denoted with an annotation
 * @ts (@see Ann.Ts)
 *
 * @see normalization#getting-started for an end to end example
 *
 * DO NOT mixin this type if you do not want to participate in the normalization process & use the base types
 * (e.g. IntervalDataPointFields) if you would like to inherit the base fields only
 *
 * In order to represent data that has a happens at a particular instant in time (and no defined interval)
 * @see TimedDataPoint
 *
 * @see normalization#how-it-works
 * @see TimedDataPoint
 * @see IntervalDataHeader
 *
 * @remarks this represents a made instance of IntervalDataPoint
 */
declare class IntervalDataPoint<P> extends Obj {

  /**
   * start date for the data point
   */
  readonly start: DateTime;
  withStart(start: DateTime | Date | string): IntervalDataPoint;

  /**
   * outlierCode: 0 or no value -- regular point
   *              1 -- to be ignored when returning results of value outlier analysis
   *              2 -- is an estimated value
   *              3 -- combination of 1 and 2 together
   *
   * enum (0, 1, 2)
   */
  readonly outlierCode?: number | null;
  withOutlierCode(outlierCode: number | null): IntervalDataPoint;

  /**
   * (Optional) any comments for the data point
   */
  readonly comments?: string | null;
  withComments(comments: string | null): IntervalDataPoint;

  /**
   * Denotes if the value is an actual value or an estimated value. default = null (actual value)
   */
  readonly isEstimated?: boolean;
  withIsEstimated(isEstimated: boolean): IntervalDataPoint;

  /**
   * Same data points can have different data version to denote priority. Default behavior in case of overlapping
   * data points is to pick the data point with the highest data version.
   * If data version is not specified, then default (avg) overlap handling is applied to the overalapping data points
   */
  readonly dataVersion?: number | null;
  withDataVersion(dataVersion: number | null): IntervalDataPoint;

  /**
   * Customer specific status code for the data point (may be used to denote data quality)
   */
  readonly statusCode?: string | null;
  withStatusCode(statusCode: string | null): IntervalDataPoint;

  /**
   * end date for the data point (Only applicable for Interval Timeseries)
   */
  readonly end: DateTime;
  withEnd(end: DateTime | Date | string): IntervalDataPoint;

  /**
   * Partition key Bin separator used to separate partition key from bin id
   */
  readonly PK_BIN_SEPARATOR?: string | null;
  withPK_BIN_SEPARATOR(PK_BIN_SEPARATOR: string | null): IntervalDataPoint;

  readonly parent: P;
  withParent(parent: P): IntervalDataPoint;

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
  static fromJson(json: any | null): IntervalDataPoint<P> | null;

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
  static fromJsonString(json: string | null): IntervalDataPoint<P> | null;

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
  static fromXmlString(xml: string | null): IntervalDataPoint<P> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): IntervalDataPoint<P> | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): IntervalDataPoint<P>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): IntervalDataPoint<P>;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): IntervalDataPoint<P>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<IntervalDataPoint<P> | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<IntervalDataPoint<P> | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): IntervalDataPoint<P>;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): IntervalDataPoint<P>;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): IntervalDataPoint<P>;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): IntervalDataPoint<P>;

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
  withField(field: string, value: any, doNotConvert?: boolean): IntervalDataPoint<P>;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): IntervalDataPoint<P>;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): IntervalDataPoint<P>;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): IntervalDataPoint<P>;

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
  withoutFieldAtPath(path: string): IntervalDataPoint<P>;

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
  withoutField(field: string | null): IntervalDataPoint<P>;

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
  withoutField(field: FieldType | null): IntervalDataPoint<P>;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): IntervalDataPoint<P>;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): IntervalDataPoint<P>;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): IntervalDataPoint<P>;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): IntervalDataPoint<P>;

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
  defaultField(field: string): IntervalDataPoint<P>;

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
  defaultField(field: FieldType): IntervalDataPoint<P>;

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
  unsetField(field: string): IntervalDataPoint<P>;

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
  unsetField(field: FieldType): IntervalDataPoint<P>;

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
  removeField(field: string): IntervalDataPoint<P>;

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
  removeField(field: FieldType): IntervalDataPoint<P>;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): IntervalDataPoint<P>;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): IntervalDataPoint<P>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): IntervalDataPoint<P>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): IntervalDataPoint<P>;

  mergeJson(json: any | null): IntervalDataPoint<P>;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): IntervalDataPoint<P>;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): IntervalDataPoint<P>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<IntervalDataPoint<P> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<IntervalDataPoint<P> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<IntervalDataPoint<P> | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<IntervalDataPoint<P> | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<IntervalDataPoint<P> | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, IntervalDataPoint<P> | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, IntervalDataPoint<P> | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<IntervalDataPoint<P> | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<IntervalDataPoint<P> | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): IntervalDataPoint<P>;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): IntervalDataPoint<P>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): IntervalDataPoint<P>;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): IntervalDataPoint<P>;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): IntervalDataPoint<P>;

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
  static make(fields: any, withDefaults?: boolean): IntervalDataPoint<P>;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): IntervalDataPoint<P>;

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
  afterMake(): IntervalDataPoint<P>;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): IntervalDataPoint<P>;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<IntervalDataPoint<P>>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): IntervalDataPoint<P>;

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
  static partitionKeyFromInstAsString(o?: Obj | null, failIfMissing?: boolean): string | null;

  /**
   * Extract the partition key + bin info from the given object and convert it to a string (E.g. if the partition key results in a reference object,
   * it will return the id field of that object. All other value types will be attempted to be converted to string
   * This will also look at {@link Ann.Db#partitionKeyBin} and append it to the partition key
   */
  static partitionKeyWithBinFromInst(o?: Obj | null): string;

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
  static partition(objs?: Stream<IntervalDataPoint<P> | null>, spec?: PartitionBucketStrategy | null): C3.Map<string | null, KvDataPartition | null>;

  /**
   * Obtain stream of {@link Partitionable} objects from the various partitions
   * @param partitions
   *            Partitions that need to be converted to stream<Partitionable>
   * @return stream of partitionable objects from the given partitions
   */
  static fromPartitions(partitions?: Stream<KvDataPartition | null>): Stream<IntervalDataPoint<P> | null>;

  /**
   * Compaction is the process of graduating hot buckets to the cold ones if it satisfies the criteria given by the spec.
   * Hot buckets typically live in {@link KvStore} & cold buckets would live in cheaper stores (but not limited to) e.g.
   * {@link FileSystem}
   * This api compacts the given partition only based on the spec.
   * {@see DataPartition#compact}
   */
  compact(spec?: PartitionBucketStrategy | null): void;

  /**
   * Compaction is the process of graduating hot buckets to the cold ones if it satisfies the criteria given by the spec.
   * Hot buckets typically live in {@link KvStore} & cold buckets would live in cheaper stores (but not limited to) e.g.
   * {@link FileSystem}
   * This api compacts the given partition only based on the spec.
   * {@see DataPartition#compact}
   */
  static compactFromInst(o: Obj, spec?: PartitionBucketStrategy | null): void;

  /**
   * FillBuckets is the process of packing and bucketing of raw persisted data into existing hot buckets.
   * If there are both hot and cold buckets, the given objs will only be bucketed in the hot buckets and cold buckets
   * will be left untouched during this operation
   * This api fills buckets for the given partition only based on the spec
   * {@see DataPartition#fillBuckets}
   */
  fillBuckets(spec?: PartitionBucketStrategy | null): void;

  /**
   * FillBuckets is the process of packing and bucketing of raw persisted data into existing hot buckets.
   * If there are both hot and cold buckets, the given objs will only be bucketed in the hot buckets and cold buckets
   * will be left untouched during this operation
   * This api fills buckets for the given partition only based on the spec
   * {@see DataPartition#fillBuckets}
   */
  static fillBucketsFromInst(o: Obj, spec?: PartitionBucketStrategy | null): void;

  /**
   * End point where cold data gets persisted
   * @param unencodedPartitionKey
   *        Unencoded Partition key for which the end point is desired
   * @return the end point where the cold data will be persisted
   */
  static coldDataEndpoint(unencodedPartitionKey?: string | null): string;

  /**
   * Trigger c3 packing synchronously and probabilistically. Packing started through this method will always
   * pack incrementally and skip throwing any errors.
   *
   * @return pair where fst is true if packing completed successfully and snd true if there was a cassandra error
   */
  static syncPackPartition(t?: Type | null, unencodedPartitionKey?: string | null, bs?: PartitionBucketStrategy | null, compact?: boolean): Pair<boolean, boolean> | null;

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
  static migrateColdData(type: string, partitionKey: string, spec?: MigrateColdDataSpec | null): void;

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
  static migrateV7RowBatch(v8TableNamee: string, v7TableName: string, v7Endpoint: string, authToken: string, partitionKeys: C3.Array<string | null>): C3.Array<string | null>;
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
