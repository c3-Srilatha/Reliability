// TypeScript definitions for the C3 type Timeseries

/**
 * This class defines the methods available for any stream of data that represents a time series.
 * It is designed around normalized data, although not all implementations will provide complete
 * and fast implementations of the normalized semantics.
 *
 * @remarks this represents a value passed to a method that expects an instance of Timeseries
 */
declare interface ITimeseries<E> {

  /**
   * time / meta information about timeseries
   */
  tsInfo?: ITimeseriesInfo | null;

  /**
   * Unit of the data in this timeseries
   *
   * @return The Unit of the data in the timeseries
   */
  unit?: IUnit | null;

  /**
   * Internal representation of data points for this time series
   */
  _data?: C3.Array<E | null> | Array<E | null>;

  /**
   * Internal representation to indicate the cardinality of the Timeseries
   */
  _kind?: string | null;
}

/**
 * This class defines the methods available for any stream of data that represents a time series.
 * It is designed around normalized data, although not all implementations will provide complete
 * and fast implementations of the normalized semantics.
 *
 * @remarks this represents a made instance of Timeseries
 */
declare class Timeseries<E> extends Obj {

  /**
   * time / meta information about timeseries
   */
  readonly tsInfo?: TimeseriesInfo | null;
  withTsInfo(tsInfo: ITimeseriesInfo | null): Timeseries;

  /**
   * Unit of the data in this timeseries
   *
   * @return The Unit of the data in the timeseries
   */
  readonly unit?: Unit | null;
  withUnit(unit: IUnit | null): Timeseries;

  /**
   * Internal representation of data points for this time series
   */
  readonly _data?: C3.Array<E | null>;
  with_data(_data: C3.Array<E | null> | Array<E | null>): Timeseries;

  /**
   * Internal representation to indicate the cardinality of the Timeseries
   */
  readonly _kind?: string | null;
  with_kind(_kind: string | null): Timeseries;

  /**
   * Render timeseries as a chart.
   */
  renderer(): TimeseriesRenderer | null;

  /**
   * Summary of timeseries range.
   *
   * @see #toString
   */
  _repr_(): string | null;

  /**
   * SVG chart.
   */
  _reprHtml_(): string | null;

  /**
   * Build a data grid from the underlying data. If the current value is not appropriate for a grid, null should be
   * returned.
   */
  toDataGrid(spec?: DataGrid.LoadSpec | null): DataGrid | null;

  /**
   * Since there is no good way to pass in the spec when using the automatic visualization, it's possible to statically
   * set the default values in the local (client) environment. This spec will be used for the #_reprHtml method where
   * no spec may be passed.
   */
  static setDefaultSpec(spec?: DataGrid.HtmlSpec | null): void;

  /**
   * Get the default spec for the local (client) environment. Note that there may be a default value with values
   * extracted from the current environment. For example in Jupyter, display settings are taken from the current
   * [pandas](https://pandas.pydata.org/) settings.
   *
   * @see #setDefaultSpec
   */
  static defaultSpec(): DataGrid.HtmlSpec | null;

  /**
   * String-based representation of instance of this type.
   */
  toString(): string | null;

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
  static fromJson(json: any | null): Timeseries<E> | null;

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
  static fromJsonString(json: string | null): Timeseries<E> | null;

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
  static fromXmlString(xml: string | null): Timeseries<E> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Timeseries<E> | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Timeseries<E>;

  at(index: number): E | null;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Timeseries<E>;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Timeseries<E>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Timeseries<E> | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Timeseries<E> | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Timeseries<E>;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Timeseries<E>;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Timeseries<E>;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Timeseries<E>;

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
  withField(field: string, value: any, doNotConvert?: boolean): Timeseries<E>;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): Timeseries<E>;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Timeseries<E>;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Timeseries<E>;

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
  withoutFieldAtPath(path: string): Timeseries<E>;

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
  withoutField(field: string | null): Timeseries<E>;

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
  withoutField(field: FieldType | null): Timeseries<E>;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Timeseries<E>;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Timeseries<E>;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Timeseries<E>;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Timeseries<E>;

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
  defaultField(field: string): Timeseries<E>;

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
  defaultField(field: FieldType): Timeseries<E>;

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
  unsetField(field: string): Timeseries<E>;

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
  unsetField(field: FieldType): Timeseries<E>;

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
  removeField(field: string): Timeseries<E>;

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
  removeField(field: FieldType): Timeseries<E>;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Timeseries<E>;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Timeseries<E>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Timeseries<E>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Timeseries<E>;

  mergeJson(json: any | null): Timeseries<E>;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Timeseries<E>;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Timeseries<E>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Timeseries<E> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Timeseries<E> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Timeseries<E> | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Timeseries<E> | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Timeseries<E> | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Timeseries<E> | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Timeseries<E> | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Timeseries<E> | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Timeseries<E> | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Timeseries<E>;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Timeseries<E>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Timeseries<E>;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Timeseries<E>;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Timeseries<E>;

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
  static make(fields: any, withDefaults?: boolean): Timeseries<E>;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Timeseries<E>;

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
  afterMake(): Timeseries<E>;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Timeseries<E>;

  /**
   * Returns instance of Data from current Timeseries instance
   */
  toData(): Data | null;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Timeseries<E>>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Timeseries<E>;

  /**
   * The number of data points in this time series
   */
  size(): number;

  start(): DateTime;

  end(): DateTime;

  sourceInfo(): TimeseriesSourceInfo | null;

  /**
   * Returns the value at the provided index from the data
   */
  valueAt(index: number): E | null;

  /**
   * Returns the timestamp for the provided index relative to the data of the timeseries
   */
  timestampAt(index: number): DateTime;

  /**
   * @return return value type for data points.
   */
  dataPointType(): ValueType | null;

  /**
   * @inheritDoc
   * NOTE: only to be used when accessing data within a for loop for which we don't want to check isEmpty, isIdentity
   * or regular every time
   */
  expandedData(): C3.Array<E | null>;

  /**
   * @inheritDoc
   * NOTE: only to be used when accessing data within a for loop for which we don't want to check isEmpty, isIdentity
   * or regular every time
   */
  doubleData(): C3.Array<number | null>;

  /**
   * @return dates for points of timeseries.
   */
  dates(): C3.Array<DateTime | null>;

  /**
   *  Convert timeseries to a period up / down specified by aggregation function
   *  If the input period is an existing {@link Interval}, return {@link Timeseries}
   *
   * For aggregation, all the data points in the period will be aggregated with the agg functions specified,
   * but for disaggregation, **the values are prorated depending on the data points in the interval** (in the below examples its the days in the interval)
   * ```js
   * ti = TimeInfo.from(DateTime.fromString("2023-04-01"), DateTime.fromString("2023-07-01"), Interval.DAY, TimeZone.NONE)
   * let arr = new Array(91);
   * arr.fill(1, 0, 30);
   * arr.fill(2, 30, 60);
   * arr.fill(3, 60, 91);
   * ts = Timeseries.fromValues(ti, arr).toDoubleTimeseries();
   * ts.toInterval('MONTH', 'SUM').toPeriod('W@2','SUM'))
   * ```
   *
   *  ```
   *  ----------------------------
   *     timestamp   |    value
   *     2023-03-28  |    3
   *     2023-04-04  |    7
   *         *       |    *
   *         *       |    *
   *     2023-04-25  |    8.03226
   *         *       |    *
   *         *       |    *
   *     2023-06-27  |    12
   *  ----------------------------
   *  ```
   * In the above example, the first data point will be for 2023-03-28, with value 3 as we only have 3 days of this week in the first month (30/30 * 3) = 3.
   * Week starting from 2023-04-25 has 6 days in the first month and 1 day in the next month, where the values are prorated depending on the days in the interval. (30/30 * 6) + (63/31 * 1) = 8.03226.
   * Week starting from 2023-06-27 only has 4 days in the interval with 4*(90/30) = 12
   *
   *  @param period Period to which timeseries has to be converted
   *  @param AggOp one of SUM|AVG|MIN|MAX|MEAN|PREVIOUS
   *  @return {@link Timeseries.Raw} or {@link Timeseries} up/down converted to specified period using specified AggOp
   */
  toPeriod(period: string, aggOp: string): TimeseriesBase<any, TimeseriesBase.Info | null> | null;

  iter(): Iterator<E> | null;

  _iter_(): any;

  _length_(): number;

  /**
   * Computes emptiness based on both gaps and unavailable information.
   *
   * @return true if its an empty timeseries.
   */
  isEmpty(): boolean;

  collect(limit?: number | null): C3.Array<E | null>;

  collectArrays(limit?: number | null): C3.Array<C3.Array<T | null>>;

  /**
   * @return timeseries with values absoluted (sign dropped)
   */
  abs(): Timeseries<E>;

  aggImplementation(spec: AggSpec | null, op: string): R | null;

  aggImplementation(spec: AggSpec | null, aggregator: λBiFunction<R | null, E | null, R | null>): R | null;

  aggImplementation(spec: AggSpec | null, folder: λBiFunction<T | null, E | null, T | null>, aggregator: λBiFunction<R | null, T | null, R | null>): R | null;

  sumDbl(): number;

  sumDiff(absoluteValues?: boolean): number;

  cusum(threshold?: number | null, drift?: number | null): C3.Array<number | null>;

  normalize(): Timeseries<E> | null;

  pluck(fieldPath: string | null, vtOverride?: ValueType | null): Timeseries<T> | null;

  first(): E | null;

  first(n: number): Timeseries<E> | null;

  first(test: λPredicate<E | null>): E | null;

  firstNotNull(): E | null;

  firstNotNull(mapper: λFunction<E | null, T | null>): T | null;

  firstNotEmpty(): E;

  firstNotEmpty(mapper: λFunction<E | null, T | null>): T;

  last(): E | null;

  last(n: number): Timeseries<E> | null;

  last(test: λPredicate<E | null>): E | null;

  lastNotNull(): E | null;

  lastNotNull(mapper: λFunction<E | null, T | null>): T | null;

  lastNotEmpty(): E;

  lastNotEmpty(mapper: λFunction<E | null, T | null>): T;

  minImplementation(spec?: AggSpec | null): E | null;

  minImplementation(comparator: λBiFunction<E | null, E | null, number | null>): E | null;

  minBy(value: λFunction<E | null, any>): E | null;

  maxImplementation(spec?: AggSpec | null): E | null;

  maxImplementation(comparator: λBiFunction<E | null, E | null, number | null>): E | null;

  maxBy(value: λFunction<E | null, any>): E | null;

  /**
   * Total number of points between start and end
   *
   * @return The number of points in the timeseries
   */
  count(spec?: AggSpec | null): R | null;

  sumImplementation(spec?: AggSpec | null): R | null;

  allImplementation(spec?: AggSpec | null): R | null;

  prod(spec?: AggSpec | null): R | null;

  avg(): R | null;

  /**
   * Average of all the values per grain of the input timeseries including the current timeseries
   *
   * @param timeseries All the timeseries that need to be added to the current timeseries
   * @return The handle to a Timeseries<E> which is an addition of all the input timeseries
   */
  avg(timeseries: C3.Array<Timeseries<E> | null> | null): Timeseries<E>;

  avg(timeseries: Timeseries<E> | null): Timeseries<E>;

  avgDbl(): number;

  median(): R | null;

  medianDbl(): number;

  percentile(percentile: number): R | null;

  percentileDbl(percentile: number): number;

  stddev(): R | null;

  stddevDbl(): number;

  variance(): R | null;

  varianceDbl(): number;

  aggDbl(aggFunc: string, percentile?: number | null): number;

  round(decimals?: number | null): Timeseries<E> | null;

  /**
   * CEIL -> Round towards positive infinity
   * FLOOR -> Round towards negative infinity
   *
   *
   * @param roundingFunction CEIL,FLOOR
   * @return timeseries with values rounded based on specified parameter
   */
  round(roundFunction?: string | null, scale?: number | null): Timeseries<E>;

  invert(): Timeseries<E> | null;

  only(failIfNotSingleton?: boolean): E | null;

  contains(element: any): boolean;

  containsAll(...elements: E | null[]): boolean;

  containsAll(c: Collection<E> | null): boolean;

  containsAll(predicate: λPredicate<E | null>): boolean;

  containsAny(predicate: λPredicate<E | null>): boolean;

  findAny(predicate: λPredicate<E | null>): E | null;

  findAny(fields: C3.Map<string | null, any> | null): E | null;

  anyNotNull(): E | null;

  anyNotNull(mapper: λFunction<E | null, T | null>): T | null;

  anyNotEmpty(): E;

  anyNotEmpty(mapper: λFunction<E | null, T | null>): T;

  each(action: λConsumer<E | null>): void;

  eachWhile(action: λPredicate<E | null>): boolean;

  mapToSame(mapper: λFunction<E | null, E | null>): Timeseries<E> | null;

  map(mapper: λFunction<E | null, T | null>): Timeseries<T> | null;

  mapToStr(mapper: λFunction<E | null, string | null>): Timeseries<string | null> | null;

  mapTo(elementType: ValueType, mapper: λFunction<E | null, T | null>): Timeseries<T> | null;

  flatMapToSame(mapper: λFunction<E | null, CollectionStdLib<E> | null>): Timeseries<E> | null;

  flatMap(mapper: λFunction<E | null, CollectionStdLib<T> | null>): Timeseries<T> | null;

  flatMapTo(elementType: ValueType, mapper: λFunction<E | null, CollectionStdLib<T> | null>): Timeseries<T> | null;

  flatMapRecursive(toInters: λFunction<E | null, CollectionStdLib<I> | null>, fromInter: λFunction<I | null, E | null>): Timeseries<E> | null;

  fold(folder: λBiFunction<E | null, T | null, T | null>): T | null;

  fold(initial: T | null, folder: λBiFunction<E | null, T | null, T | null>): T | null;

  compact(): Timeseries<E> | null;

  unique(): Timeseries<E> | null;

  uniqueBy(key?: λFunction<E | null, any> | null): Timeseries<E> | null;

  filter(predicate: λPredicate<E | null>): Timeseries<E> | null;

  filter(filter: string | null): Timeseries<E> | null;

  filter(fields: C3.Map<string | null, any> | null): Timeseries<E> | null;

  fillMissingBy(method?: string | null, spec?: FillMissingSpec | null): Timeseries<E> | null;

  /**
   * @param value
   *        value to be used for filling in missing values (gap or unavailable).
   * @param spec
   *        see {@link FillMissingSpec} for available specifications
   * @return timeseries that has missing values (gap or unavailable) filled with the specified value (scaled based on
   *         gap or unavailable percentage). resultant timeseries is fully available.
   */
  fillMissing(value: any, spec?: FillMissingSpec | null): Timeseries<E> | null;

  fieldValueType(field: string): ValueType | null;

  reject(predicate: λPredicate<E | null>): Timeseries<E> | null;

  include(include: string | null): Timeseries<E> | null;

  include(positions: Collection<number | null>): Timeseries<E> | null;

  exclude(exclude: string | null): Timeseries<E> | null;

  replaceByPredicate(e: E | null, predicate: λPredicate<E | null>): Timeseries<E> | null;

  sorted(descending?: boolean): Timeseries<E> | null;

  sorted(comparator: λBiFunction<E | null, E | null, number | null>): Timeseries<E> | null;

  sorted(descending: boolean, comparator: λBiFunction<E | null, E | null, number | null>): Timeseries<E> | null;

  sorted(order: string | null): Timeseries<E> | null;

  sortedBy(key: λFunction<E | null, any>): Timeseries<E> | null;

  sortedBy(descending: boolean, key: λFunction<E | null, any>): Timeseries<E> | null;

  sortedIndex(element: E, value: λFunction<E | null, any>): number;

  sortedIndex(element: E, fieldName: string): number;

  batch(batchSize?: number | null): Stream<Timeseries<E> | null>;

  partition(partitioner: λPredicate<E | null>): C3.Map<boolean, C3.Array<E | null>>;

  countBy(key: λFunction<E | null, string | null>): C3.Map<string | null, number | null>;

  countBy(keyType: ValueType, key: λFunction<E | null, T | null>): C3.Map<T | null, number | null>;

  every(predicate: λPredicate<E | null>): boolean;

  elementCartesianProduct(): C3.Array<C3.Array<T | null>>;

  flatten(shallow?: boolean): Timeseries<T> | null;

  flatten(depth: number, include?: string | null): Timeseries<T> | null;

  sample(spec?: SampleSpec | null): Timeseries<E> | null;

  slice(fromPos: number, toPos?: number | null, stride?: number | null): Timeseries<E> | null;

  slice(positions: Collection<number | null> | null): Timeseries<E> | null;

  /**
   * Chops timeseries based on a time range.
   * @param start
   *           slice start
   * @param end
   *           slice end
   * @return sliced timeseries based on specified start and end
   */
  slice(slicedStart: DateTime, slicedEnd: DateTime): Timeseries<E>;

  sliceByKey(keys: Collection<any> | null): Timeseries<E> | null;

  sliceByKey(secondaryIndex: string, keys: Collection<any> | null): Timeseries<E> | null;

  summarize(spec?: DigestSpec | null): Digest<any, Digest | null, DigestBuilder | null>;

  downsample(spec: DownsampleSpec): Timeseries<E> | null;

  /**
   * Generate a linear regression of the time series using Ordinary Least Squares. If there are too few points,
   * the return value is null; otherwise it is an object with the intercept (α) and slope (β) as well as other
   * meta-information. Note that the _x_ observations are the indexes into the time series, so are independent of the
   * interval. Missing points are ignored.
   *
   * @see https://en.wikipedia.org/wiki/Ordinary_least_squares
   */
  leastSquares(): LeastSquaresResult | null;

  rollingDiff(stride?: number | null): Timeseries<E> | null;

  /**
   * Returns a timeseries where every value is computed by taking the difference between current and previous point.
   *
   * It has 1 optional argument : resetDropThreshold ==> If the difference ends up being negative (its a drop) and the absolute magnitude of drop is greater than or equal to resetDropThreshold,
   * the value for that point is not the diff but the value itself.
   *
   * For the second example, if resetDropThreshold is 10000 and we had 10003 followed by 1, the value will be 1 and not -10002. If we had 10003 followed by 4,
   * the value will be -9999.
   *
   * Example: `rollingDiff(sum(normalized.data.quantity))`, `rollingDiff(sum(normalized.data.quantity), 10000)`
   *
   * @param timeseries
   *        timeseries input
   * @param resetDropThreshold
   *        resetDropThreshold when specified, if absolute difference between current and previous point drops below this parameter's value,
   *        set new value to current point,else set it to difference between current and previous point
   * @param rollOverThreshold
   *        by default it is false, If true, value after drop is roll over distance from previous point.
   *        If false, value after drop is the point's value.
   * @return timeseries which represents rolling diff of this timeseries based on above parameters.
   */
  rollingDiff(resetDropThreshold?: number | null, rollOverThreshold?: boolean): Timeseries<E>;

  pctChange(stride?: number | null): Timeseries<E> | null;

  unaryOp(op: string): Timeseries<E> | null;

  shape(): C3.Array<number | null>;

  toObj(): Obj | null;

  fetch(spec?: FetchSpec | null): Timeseries<E> | null;

  largest(n: number, comparator?: λBiFunction<E | null, E | null, number | null> | null, keep?: string | null): C3.Array<E | null>;

  histogram(spec?: HistogramSpec | null): Histogram<any, any, HistogramBuilder | null>;

  neg(): Timeseries<E> | null;

  approxMostFrequent(spec?: CountMinSketchSpec | null): C3.Map<string | null, number | null>;

  timeseries(spec?: DataTimeseriesSpec | null): Timeseries<R> | null;

  timeseries(tsFieldSpec: C3.Map<string | null, TimeseriesFieldSpec | null>, spec?: TimeseriesSpec | null): Timeseries<R> | null;

  elementType(): ValueType;

  stream(): Stream<E | null>;

  /**
   * @return available / not available boolean value for every point
   *         <p>
   *         available = not(missing)
   */
  available(): C3.Array<boolean>;

  /**
   * @return unavailability time ranges of timeseries.
   */
  missingRanges(): C3.Array<TimeRange | null>;

  /**
   * Within the time range of this timeseries, it returns the earliest date for which data is available.
   *
   * @return earliest date (within this series) for which data is available.
   */
  earliestAvailable(): DateTime | null;

  /**
   * Within the time range of this timeseries, it returns the latest date beyond which data is unavailable.
   *
   * @return latest date (within this series) beyond which data is unavailable.
   */
  latestAvailable(): DateTime | null;

  /**
   * Computes percentage of missing data using "missing" information.
   *
   * @return double 0 <= x <= 100
   */
  percentMissing(): number;

  /**
   * @return true if timeseries is fully available.
   */
  isFullyAvailable(): boolean;

  /**
   * @return true if timeseries if fully missing
   */
  isFullyMissing(): boolean;

  /**
   * @return Time information
   */
  timeInfo(): TimeInfo;

  /**
   * Shifts the timeseries in the time domain to specified start. This shifts start, end, gapRanges, estimateRanges and
   * unavailableRanges.
   *
   * @param start
   *        datetime to which timeseries has to be shifted.
   */
  shift(start?: DateTime | null): Timeseries<E>;

  /**
   * @return new timeseries info with provided availability.
   */
  withAvailability(missing?: C3.Array<boolean>): Timeseries<E>;

  /**
   * Only return the minimum number of data points to represent this timeseries. If the time series is an identity
   * time series, this will return 1 object in the array. If it is an empty time series, this will return 0 elements
   * else if it is a regular time series, this will return the same no of points as {@link Timeseries.data} function
   * The responsibility of handling emptiness and single valued behavior is on the user of this function.
   *
   * If you want the array to contain as many elements as in between start & end at normalized interval use #expandedData
   *
   * @see expandedData
   */
  data(): C3.Array<E | null>;

  /**
   * Only return the minimum number of data points to represent this timeseries. If the time series is an identity
   * time series, this will return 1 object in the array. If it is an empty time series, this will return 0 elements
   * else if it is a regular time series, this will return the same no of points as {@link Timeseries.data} function
   * The responsibility of handling emptiness and single valued behavior is on the user of this function.
   *
   * If you want the array to contain as many elements as in between start & end at normalized interval use #expandedData
   *
   * @see expandedData
   */
  optimizedData(): C3.Array<E | null>;

  /**
   * Calculated value for each data point indicating if the data point is missing or available
   *
   * @return The array of booleans for each data point indicating if the data point is missing or available
   * Will return null if no values are missing to optimize for memory. @see safeMissing for expanded non null array
   */
  missing(): C3.Array<boolean>;

  /**
   * Non null missing array
   * @see missing
   */
  safeMissing(): C3.Array<boolean>;

  /**
   * Addition of all the values per grain of the input timeseries with the current timeseries
   *
   * @param timeseries All the timeseries that need to be added to the current timeseries
   * @return The handle to a Timeseries<E> which is an addition of all the input timeseries
   */
  sum(timeseries: C3.Array<Timeseries<E> | null> | null): Timeseries<E>;

  /**
   * Minimum of all the values per grain of the input timeseries including the current timeseries
   *
   * @param timeseries All the timeseries that we need to compute the minimum for
   * @return The handle to a Timeseries<E> which is has the minimum value per grain against current / input timeseries
   */
  min(timeseries: C3.Array<Timeseries<E> | null> | null): Timeseries<E>;

  min(timeseries: Timeseries<E> | null): Timeseries<E>;

  min(spec?: AggSpec | null): E | null;

  min(comparator: λBiFunction<E | null, E | null, number | null>): E | null;

  /**
   * Maximum of all the values per grain of the input timeseries including the current timeseries
   *
   * @param timeseries All the timeseries that we need to compute the maximum for
   * @return The handle to a Timeseries<E> which is has the maximum value per grain against current / input timeseries
   */
  max(timeseries: C3.Array<Timeseries<E> | null> | null): Timeseries<E>;

  max(timeseries: Timeseries<E> | null): Timeseries<E>;

  max(spec?: AggSpec | null): E | null;

  max(comparator: λBiFunction<E | null, E | null, number | null>): E | null;

  /**
   * AND all the timeseries
   * @param timeseries Timeserieses to be and'ed
   * @return point-wise boolean AND of all input timeseries
   */
  and(timeseries: C3.Array<Timeseries<E> | null> | null): Timeseries<E>;

  and(timeseries: Timeseries<E> | null): Timeseries<E>;

  /**
   * OR all the timeseries
   * @param timeseries Timeserieses to be or'ed
   * @return point-wise boolean OR of all input timeseries
   */
  or(timeseries: C3.Array<Timeseries<E> | null> | null): Timeseries<E>;

  or(timeseries: Timeseries<E> | null): Timeseries<E>;

  /**
   * Convert the timeseries to the desired unit
   *
   * @param unitId Id of unit to which conversion is desired
   * @return timeseries converted to unitId
   */
  convertToUnit(unitId: string): Timeseries<E>;

  /**
   * Cast the timeseries to the desired unit without changing magnitude
   *
   * @param unitId Id of unit to which timeseries has to be casted
   * @return timeseries casted to unitId (no change in magnitude)
   */
  treatAsUnit(unitId: string): Timeseries<E>;

  /**
   * Convert timeseries to an interval up / down specified by aggregation function
   *
   * @param interval Interval to which timeseries has to be converted
   * @param AggOp one of SUM|AVG|MIN|MAX|MEAN|PREVIOUS
   * @return timeseries up/down converted to specified interval using specified AggOp
   */
  toInterval(interval: string, aggOp: string): Timeseries<E>;

  /**
   * Aggregate all values of a timeseries into scalar
   *
   * @param AggOp one of SUM|AVG|MIN|MAX
   * @param prorate default false. scale value if prorate is true.
   * @return identity timeseries (scalar value obtained by aggregating all points of timeseries)
   */
  aggregate(aggOp: string, prorate?: boolean): Timeseries<E>;

  /**
   * Point-wise addition of the two timeseries
   *
   * @param timeseries input timeseries
   * @return timeseries whose values are point-wise addition of input with self
   */
  add(timeseries: Timeseries<E>): Timeseries<E>;

  /**
   * Point-wise subtraction of the two timeseries
   *
   * @param timeseries input timeseries
   * @return timeseries whose values are point-wise subtraction of input with self
   */
  subtract(timeseries: Timeseries<E>): Timeseries<E>;

  /**
   * Point-wise multiplication of the two timeseries
   *
   * @param timeseries input timeseries
   * @return timeseries whose values are point-wise multiplication of input with self
   */
  multiply(timeseries: Timeseries<E>): Timeseries<E>;

  /**
   * Point-wise division of the two timeseries
   *
   * @param timeseries input timeseries
   * @return timeseries whose values are point-wise division of input with self
   */
  divide(timeseries: Timeseries<E>): Timeseries<E>;

  /**
   * Point-wise raise to the power of value from the input.timeseries data points. If input is:
   * 1) a timeseries, then each point from the timeseries will be used with the current timeseries instance.
   * 2) a number, then the same will be used with the current timeseries instance.
   */
  pow(other: Timeseries<E> | null | number | null): Timeseries<E>;

  /**
   * Point-wise negation of the timeseries
   *
   * @return timeseries whose values are point-wise negated
   */
  negate(): Timeseries<E>;

  /**
   * All parameters except the first are optional.
   * One amongst parameters 'resetOnTimeseries' and 'resetOnValue' can be provided at any given point
   *
   * @param AggOp
   *          Aggregation function to be applied when rolling. one of SUM|AVG|MIN|MAX
   * @param resetOnTimeseries
   *          Timeseries to be used as resetting trigger (reset if point's value is true (not-zero))
   * @param resetOnValue
   *          Reset rolling value on seeing a point whose value is equal to this parameter
   * @param resetToTs
   *          Timeseries to be used to use as the reset value when reset occurs
   * @param resetToValue
   *          When resetting, reset to this parameter's value, if specified
   * @param resetAfter
   *          Reset rolling value after every N points where N is this parameter
   * @param resetDropThreshold
   *        resetDropThreshold when specified, if absolute difference between current and previous point drops below this parameter's value,
   *        set new value to current point,else set it to difference between current and previous point
   * @param rollOverThreshold
   *        by default it is false, If true, value after drop is roll over distance from previous point.
   *        If false, value after drop is the point's value.
   * @return timeseries which represents rolling aggregation of this timeseries based on above parameters
   */
  rolling(aggOp: string, resetOnTimeseries?: Timeseries<E> | null, resetOnValue?: number | null, resetToTs?: Timeseries<E> | null, resetToValue?: number | null, resetAfter?: number | null, resetDropThreshold?: number | null, rollOverThreshold?: boolean): Timeseries<E>;

  /**
   * @param AggOp
   *          Aggregation function to be applied when rolling. one of SUM|AVG|MIN|MAX|DIFF
   * @param windowSpec
   *         {@link WindowSpec} used to create window
   * @return timeseries which represents rolling aggregation of this timeseries based on above parameters
   */
  rolling(aggOp: string, windowSpec: WindowSpec): Timeseries<E>;

  /**
   * Records the first step of selecting the window of a rolling (a.k.a. moving) window operation in an intermediate
   * structure that can perform further operations on the values in the window.  Each element field is operated on
   * independently of the other fields, rather than operating on each element as a whole (equivalent to calculating
   * on each column in a 2D table independently when there are multiple columns).
   *
   * For a general description and examples of what are rolling window operations, see
   * [pandas.DataFrame.rolling](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.rolling.html)
   * which is very similar to this method.
   *
   * @param data
   *           Input data.
   * @param window
   *           Size of the moving window.  An integer represents a fixed number of non-missing values in the window,
   *           while a {@link Period} represents the time period of each window, and is only valid for datetime-like
   *           indices.
   * @param minValues
   *           Minimum number of non-missing values in a window required for the final result of an
   *           operation on the returned {@link CollectionRolling} to have a value for the window.
   *           Otherwise, the final result for the window is null or NaN.  "Non-missing value" here refer to an
   *           individual element field, not the entire element.
   *           When `window` is a {@link Period}, the default value of this parameter is 1.  Otherwise, this parameter
   *           defaults to the size of the window.
   * @param on
   *           The name of a datetime-like element field (equivalent to datetime-like column on a 2D table) on which to
   *           calculate the rolling window, rather than the index.  If this is not the name of a datetime-like element
   *           field (e.g. an integer element field), this method argument will be ignored.
   * @return an intermediate structure that records the rolling operation, for performing subsequent actions.
   */
  rolling(window: number | null | Period | null | WindowSpec | null, minValues?: number | null, spec?: DataTimeseriesSpec | null): CollectionRolling<E> | null;

  /**
   * Returns a timeseries/collection where the value of every data point is computed by aggregating every "step'th"
   * point in the window starting at "offset" and spanning "span" data points.
   *
   * Example: `rolling(AVG, sum(normalized.data.quantity), -20, 21, 3)`
   *
   * @param agg
   *           Name of the aggregation function.
   * @param data
   *           Input data.
   * @param offset
   *           Start point in the window.
   * @param span
   *           Number of points to span from the offset.
   * @param step
   *           Step of the window.
   * @return a timeseries/collection where the value of every data point is computed by aggregating every "step'th"
   *         point in the window starting at "offset" and spanning "span" data points.
   */
  rolling(agg: string, offset: number, span: number, step?: number | null): Timeseries<E> | null;

  /**
   * Is a timeseries whose values are missing percentages for every point
   *
   * @return timeseries whose values are missing percentage for every point
   */
  missingTimeseries(): Timeseries<number | null>;

  /**
   * @param timeComponent one of YEAR,MONTH,DAY,HOUR,MINUTE,SECOND,DAYOFYEAR,DAYOFWEEK
   * @return timeseries whose values are specified timeComponent of point's datetime
   */
  timeComponent(timeComponent: string): Timeseries<number | null>;

  /**
   * Computes the specified statistic across all available points in timeseries
   *
   * @param statsFunction SUM,MEAN,MIN,MAX,MEDIAN,VARIANCE,STDDEV,PERCENTILE
   * @param n optional input for PERCENTILE calculation
   * @return computed statistic value
   */
  stat(statsFunction: string, n?: number | null): Timeseries<any>;

  /**
   * Equality Comparisons. We follow these rules :
   * NaN operator X = X operator NaN = FALSE
   * Inf operator X = X operator Inf = FALSE
   *
   *
   * @param ts input timeseries with which comparison is desired
   * @param equalityOperator EQ,NE,GT,GTE,LT,LTE
   * @return timeseries whose values are point-wise equality operator comparison between self and input
   */
  equality(ts: Timeseries<E>, equalityOperator: string): Timeseries<E> | null;

  /**
   * @return timeseries whose values are 0(false) if the value is unavailable, 1(true) otherwise
   */
  exists(): Timeseries<number | null>;

  /**
   * @return timeseries with values square rooted
   */
  sqrt(): Timeseries<E>;

  /**
   * @return timeseries with values cube rooted
   */
  cubeRoot(): Timeseries<E>;

  /**
   * Computes nth root
   * n = 1 is same as self
   * n = 2 is same as sqrt
   * n = 3 is same as cuberoot
   *
   *
   * @param n desired root value
   * @return timeseries with values n'th rooted
   * @throws Exception if n == 0
   */
  nthRoot(n: number): Timeseries<E>;

  /**
   * @return timeseries with values natural(Base E) log'ed
   */
  log(): Timeseries<E>;

  /**
   * @return timeseries with values Base 10 log'ed
   */
  log10(): Timeseries<E>;

  /**
   * @return timeseries with new values being 'e to the power old-value'.
   */
  exp(): Timeseries<E>;

  /**
   * @param  input timeseries of angle values in radians
   * @return timeseries with trigonometric sine function applied to input values
   */
  sin(): Timeseries<E>;

  /**
   * @param  input timeseries of angle values in radians
   * @return timeseries with trigonometric cosine function applied to input values
   */
  cos(): Timeseries<E>;

  /**
   * @param  input timeseries of angle values in radians
   * @return timeseries with trigonometric tangent function applied to input values
   */
  tan(): Timeseries<E>;

  /**
   * @param  input timeseries of angle values in radians
   * @return timeseries with trigonometric arc sine function applied to input values
   */
  asin(): Timeseries<E>;

  /**
   * @param  input timeseries of angle values in radians
   * @return timeseries with trigonometric arc cosine function applied to input values
   */
  acos(): Timeseries<E>;

  /**
   * @param  input timeseries of angle values in radians
   * @return timeseries with trigonometric arc tangent function applied to input values
   */
  atan(): Timeseries<E>;

  /**
   * @param  input timeseries of angle values in radians
   * @return timeseries with values converted to an approximately equivalent angle measured in degrees
   */
  toDegrees(): Timeseries<E>;

  /**
   * @param  input timeseries of angle values in degrees
   * @return timeseries with values converted to an approximately equivalent angle measured in radians
   */
  toRadians(): Timeseries<E>;

  /**
   * @param start timeseries start
   * @param end timeseries end
   * @param grain timeseries grain
   *
   * @return timeseries whose values are start timestamps of grain-aligned
   * points within specified range. It always produces dates in TimeZone NONE
   */
  static startTimeseries(start: DateTime, end: DateTime, interval: string): Timeseries<E>;

  /**
   * @param start timeseries start
   * @param end timeseries end
   * @param grain timeseries grain
   *
   * @return timeseries whose values are end timestamps of grain-aligned
   * points within specified range. It always produces dates in TimeZone NONE
   */
  static endTimeseries(start: DateTime, end: DateTime, interval: string): Timeseries<E>;

  /**
   * Converts the list of objects into a timeseries
   * @param objs
   *            The list of objects to be used to create a timeseries as a stream
   * @param tsSpec
   *            This contains the fields & time range required to take decisions while converting the objects to a timeseries
   * @return a normalized timeseries from the given list of objects
   */
  static fromObjStream(objs: Stream<Obj | null> | null, spec: EvalTimeseriesSpec): Timeseries<any>;

  /**
   * If no min and max values are specified, it first finds min and max of the timeseries.
   * It then scales every value to a number between 0 and 1 proportionally based on min and max values.
   *
   * newValue = (oldValue - min) / (max - min)
   *
   * If a data point is completely missing (fully gap, fully unavailable, or part gap part unavailable), we
   * do not use him for calculations. Their scaled value is always 0.
   *
   * @param obj Handle to the timeseries
   * @param min optional min value to be used
   * @param max optional max value to be used
   *
   * @return timeseries with values between 0 and 1
   */
  scaleMinMax(min?: number | null, max?: number | null): Timeseries<E>;

  /**
   * It first finds mean and stddev of the timeseries. Assuming normal distribution,
   * it then scales every value to its normal value based on mean and stddev values.
   *
   * newValue = (oldValue - mean) / stddev
   *
   * If a data point is completely missing (fully gap, fully unavailable, or part gap part unavailable), we
   * do not use him for calculations. Their scaled value is always 'mean'.
   *
   * @param obj Handle to the timeseries
   *
   * @return timeseries with values normally distributed based on mean and stddev
   */
  scaleStandard(): Timeseries<E>;

  /**
   * For each interval, it linearly interpolates value of timeseries 'obj' towards value of timeseries 'to'
   * based on value of timeseries 'scale'
   *
   * newValue = (1-scale) * oldValue + scale * to
   *
   * If a data point is completely missing (fully gap, fully unavailable, or part gap part unavailable), we
   * do not use him for calculations. Their scaled value is always 'oldValue'.
   *
   * @param obj timeseries to be lerped
   * @param to  timeseries towards which we lerp
   * @param scale timeseries representing scale (values have to be between 0 and 1)
   *
   * @return timeseries with values linearly interpolated
   */
  lerp(to: Timeseries<any>, scale: Timeseries<any>): Timeseries<any>;

  /**
   * Extends and or chops timeseries based on specified parameters.
   *
   * @param start
   *        extension start
   * @param end
   *        extension end
   * @return extended and or chopped timeseries based on specified start and end
   */
  extendAndOrChop(start: DateTime, end: DateTime): Timeseries<E>;

  /**
   * Convert the given timeseries into a specific zone.
   * @param timeZone
   *            Desired time zone {@see TimeZone}
   * @return series converted in the desired time zone. Note, the number of data points returned per day (at interval finer
   * than day) may vary depending on day light saving changes. The expectation is for the user to ensure
   * in their expressions that other series (if any) are also in the same time zone while doing time series math
   */
  convertToTimeZone(timeZone: TimeZone): Timeseries<E>;

  /**
   * Assume timeseries to have a particular zone. This api will just replace the zone of the current time series to the
   * desired zone
   * @param timeZone
   *            Desired time zone {@see TimeZone}
   * @return series in the desired time zone. Note this will just change the time zone of the source time series and
   * will not perform any additional checks on the day light savings to adjust the number of data points
   */
  treatAsTimeZone(timeZone: TimeZone): Timeseries<E>;

  /**
   * Chops timeseries based on chunker timeseries, sections obj into sections where chunker is truthy
   */
  chunk(chunker: Timeseries<number | null>): C3.Array<Timeseries<E> | null>;

  /**
   * Concat two timeseries
   */
  static concat(fst: Timeseries, othr: Timeseries): Timeseries;

  /**
   * @param tsArray
   *        timeseries to be aggregated
   * @param statName
   *        name of the stat to be computed
   * @param n
   *        input for percentile calculation only, ignored for other stats
   * @return point-wise 'statName' calculation of all input timeseries
   */
  static rollup(tsArry: C3.Array<Timeseries | null>, statName?: string | null, n?: number | null): Timeseries<any>;

  /**
   * Function to interpolate data within the given timeseries. We support various forms of interpolation techniques
   * viz.
   * 1. ZERO - interpolate 0 values in place of data / gaps/ missing/ unavailable - DEFAULT
   * 2. LINEAR - linearly interpolate values in place of data / gaps/ missing/ unavailable
   * 3. PREVIOUS - interpolate immediate previous value that is not 0 (data) / not a gap (GAPS) / not unavailable
   * (UNAVAILABLE) / available (MISSING)
   * 4. NEXT - interpolate immediate next value that is not 0 (data) / not a gap (GAPS) / not unavailable (UNAVAILABLE)
   * / available (MISSING)
   * Please note : Values are only interpolated if the interval is a complete gap / complete unavailable/ complete
   * missing / or value 0
   * If they are partially available, values will not be interpolated for those intervals
   * Interpolation can be performed on
   * 1. MISSING - only interpolates values that are missing
   * 2. DATA - only interpolates values where the value of the interval is 0
   *
   * @param interpolatorType
   *        The kind of interpolation technique to apply. Should be one of LINEAR/ ZERO/ PREVIOUS/
   *        NEXT
   * @param performOn
   *        the kind of data interpolation should be applied on. Should be one of DATA/MISSING
   * @return a timeseries where required values are interpolated according to interpolator type specified
   */
  interpolate(interpolatorType: string, performOn: string): Timeseries<number | null>;

  /**
   * Analyze the time series to detect positive and negative changes using CUSUM (Cumulative Sum). This method uses the
   * availability for the the weight (ω). Missing points are ignored.
   *
   * Sn+1 = max(0, Sn + xn ωn)
   *
   * Here _xn_ is the difference between two successive timeseries values and _ωn_ is the availability of the point
   * in [0..1]. E.g. the deltas are scaled by how confidently the value is known.
   *
   * @param threshold CUSUM _threshold_ parameter (must be positive)
   * @return dates in time series identified as changes
   * @see https://en.wikipedia.org/wiki/CUSUM
   */
  cusumDates(threshold?: number | null): C3.Array<DateTime | null>;

  /**
   * Convert, if possible to a double timeseries otherwise throws exception
   */
  toDoubleTimeseries(): Timeseries<number | null> | null;

  /**
   * @return true if its an identity timeseries.
   */
  isIdentity(): boolean;

  /**
   * @return value if this is an identity timeseries.
   */
  identityValue(): E | null;

  /**
   * @return if current timeseries can be converted to double timeseries
   */
  isConvertibleToDoubleTimeseries(): boolean;

  /**
   * @return timeseries whose values are availability percentage for every point (computed using unavailableRanges and
   *         gapRanges).
   *         <p>
   *         available = ( 1 - unavailable - gap )
   */
  availableTimeseries(): Timeseries<number | null>;

  /**
   * @return new timeseries with provided time zone
   */
  withTimeZone(timeZone?: TimeZone | null): Timeseries<E>;

  /**
   * @return new timeseries with provided time info.
   *         Note: If time info is changed incompatible to the original length of the time series an error will be
   *         generated
   */
  withTimeInfo(timeInfo: TimeInfo): Timeseries<E>;

  /**
   * @param other
   *        input timeseries
   * @return timeseries whose values are point-wise remainder from division of input with self
   */
  modulo(other: Timeseries<E>): Timeseries<E>;

  /**
   * if a point is 0 (false), resultant point will be 1 (true)
   * if a point is non-zero (true), resultant point will be 0 (false)
   *
   * @return timeseries with values point-wise not'ted
   */
  not(): Timeseries<number | null>;

  /**
   * Applies ternary operator point-wise.
   * <p>
   * <li>If a point is true, its new value is 'trueValue'.
   * <li>If a point is false, its new value is 'falseValue'.
   *
   * @param trueValue
   *        new value for a point if its true.
   * @param falseValue
   *        new value for a point if its false.
   * @return timeseries of param's data-type.
   */
  ternary(trueValue: any, falseValue: any): Timeseries<any>;

  /**
   * Based on the specified period and operator, a new timeseries is returned whose points are obtained by applying the
   * period to the interval of every point. The application of the period is governed by the operator.
   * <p>
   * Formula : (point's interval) operator (period)
   * <p>
   * Example : a yearly point divided by a period of one day would yield 365 for non-leap years (2010-01-01T00:00:00 to
   * 2011-01-01T00:00:00) / P1D = 365.
   * <p>
   * If operator is ADD or SUBTRACT, return type is DateTimeTimeseries.
   * <p>
   * If operator is MULTIPLY, DIVIDE or MODULO, return type is DoubleTimeseries.
   *
   * @param period
   *        input Period.
   * @param operator
   *        mathematical operator to be applied. Supported values are ADD,SUBTRACT,MULTIPLY,DIVIDE,MODULO.
   * @return
   */
  applyPeriod(period: Period, operator: string): Timeseries<any>;

  /**
   * @return a boolean timeseries indicating if the value is infinity or nan
   */
  isInfinityOrNaN(): Timeseries<number | null>;

  /**
   * Extends timeseries based on specified parameters.
   *
   * @param start
   *        extension start
   * @param end
   *        extension end
   * @return extended timeseries based on specified start and end
   */
  extend(start: DateTime, end: DateTime): Timeseries<E>;

  /**
   * Slices the time series only to the available range from the beginning and the end
   *
   * @return sliced time series based on availability
   */
  slicedAvailableTimeseries(): Timeseries<E>;

  /**
   * Returns a time series with the missing information as returned by the missing timeseries. The data part of input timeseries remains the same
   *
   * Example:
   *
   * TS.data:
   *
   * ```
   *    1       2       3       4
   * |-------|-------|-------|------|
   * t1      t2      t3      t4     t5
   * ```
   *
   * TS.missing:
   *
   * ```
   *   false   false   false   false
   * |-------|-------|-------|-------|
   * t1      t2      t3      t4      t5
   * ```
   *
   * `withMissing(TS, missing(TS)/2)`:
   *
   * ```
   *     1       2       3       4
   * |-------|-------|-------|-------|
   * t1      t2      t3      t4      t5
   * ```
   *
   * The above `withMissing(TS, missing(TS)/2)` is calculated as follows:
   * ```
   *     0       25      5       10
   * |-------|-------|-------|-------|
   * t1      t2      t3      t4      t5
   *
   * @param timeseries
   *        input time series
   * @param missing
   *        value to be used for missing values (usually Timeseries or identity double value)
   * @return A time series that has missing values filled with the missing Timeseries
   */
  withMissing(missing?: any): Timeseries<E>;

  /**
   * For each point in TS, if percent missing satisfies the specified equality operator condition based on specified
   * percent value, it makes that point fully missing.
   *
   * @param equality
   *        Operator to be applied. Permissible values are ED,NQ,LT,LTE,GT,GTE.
   * @param percent
   *        percent value (0 <= value <= 100).
   * @return new timeseries with skipped (fully not available) data points.
   */
  skipIfMissing(equality?: string | null, percent: number): Timeseries<E>;

  /**
   * For each point in TS, get its integer representation and obtain the "bitIndex" parameter value.
   *
   * @param bitIndex
   *        bit index (starting with 0 and increasing towards MSB).
   * @return timeseries of bit (0 or 1).
   */
  bit(bitIndex: number): Timeseries<number | null>;

  /**
   * @param weatherTimeseries
   *        The weather timeseries that should be used to remove the weather component from input timeseries.
   * @param heatingCoolingCoeffs
   *        The heating and cooling coefficients calculated as a part of model generation for the input timeseries.
   * @param gapThreshold
   *        Is used to return the input timeseries if the gaps are greater than this threshold.
   * @return a timeseries whose values are weather normalized
   */
  weatherIndependentTimeseries(weatherTimeseries: Timeseries<any>, heatingCoolingCoeffs?: C3.Array<number | null>, gapThreshold?: number | null): Timeseries<any>;

  static window(agg: string, ts?: λFunction<TimeInfo, Timeseries<any>> | null, offset?: number | null, span?: number | null, step?: number | null, timeInfo?: TimeInfo | null): Timeseries<any>;

  static operationalWindow(agg: string, dataTs?: λFunction<TimeInfo, Timeseries<any>> | null, operationalTs?: λFunction<TimeInfo, Timeseries<any>> | null, operationalOffset?: number | null, operationalSpace?: number | null, timeInfo?: TimeInfo | null): Timeseries<any>;

  /**
   * API to evaluate a timeseries with custom time info
   *
   * @param agg
   *        Aggregation function to be used in order to aggregate / dis aggregate resultant data in original period
   * @param overrideInterval
   *        Overridden interval for evaluating ts
   * @param ts
   *        Timeseries to be evaluated
   * @param overrideStart
   *        Overridden start date for evaluating ts
   * @param overrideEnd
   *        Overridden end date for evaluating ts
   * @param queryTimeInfo
   *        Original info to which the result will be converted
   * @return TS aggregated / disaggregated to the queryTimeInfo after evaluating it at overriden period
   */
  static eval(agg: string, interval: string, ts?: λFunction<TimeInfo, Timeseries<any>> | null, start?: any, end?: any, timeInfo?: TimeInfo | null): Timeseries<any>;

  /**
   * Generates a sine wave timeseries using following formula:
   * <p>
   * y(t) = amplitude * sin(2 * PI * frequency * t + phase )
   *
   * @param timeInfo
   *        timeseries time info.
   * @param waveStart
   *        timestamp of the wave start i.r. where it is at first 0 value.
   * @param amplitude
   *        peak deviation of the value from zero.
   * @param frequency
   *        in oscillations (cycles) per second.
   * @param phase
   *        (in radians) where in its cycle the oscillation is at t = 0.
   * @return timeseries representing a sine wave.
   */
  static sineWave(timeInfo: TimeInfo, waveStart?: DateTime | null, amplitude?: number | null, frequency?: number | null, phase?: number | null): Timeseries<any>;

  /**
   * Generates a square wave timeseries using specified start and end
   * Grain is determined based on specified timeComponent
   * A point's value is 1 if that point's datetime falls within the specified range, 0 otherwise
   * Here are the supported timeComponent values with allowed values for pulseStart and pulseEnd :
   * HOUR - 0 to 23
   * DAYOFWEEK - 1 to 7
   * DAYOFYEAR - 1 to 365/366
   *
   * @param start
   *        timeseries start
   * @param end
   *        timeseries end
   * @param timeComponent
   *        timeComponent value to be used for determining grain of result timeseries
   * @param timeZone
   *        timeZone of result timeseries
   * @param pulseStart
   *        index inclusive
   * @param pulseEnd
   *        index exclusive
   * @return timeseries representing a square pulse signal based on above parameters
   */
  static squareWave(timeInfo: TimeInfo, timeComponent: string, pulseStart: number, pulseEnd: number): Timeseries<any>;

  /**
   * @return total number of available points in every interval in the timeseries
   */
  countTimeseries(): Timeseries<number | null>;

  /**
   * Generates a timeseries with random values using specified start and end
   *
   * @param timeInfo
   *        the time info of the timeseries (start, end, interval, timezone)
   * @param origin
   *        the lower bound for random value (inclusive)
   * @param bound
   *        the upper bound for random value (exclusive)
   * @return timeseries with values uniformly distributed between the lower and upper limits.
   */
  static randomTimeseries(timeInfo: TimeInfo, origin: number, bound: number): Timeseries<any>;

  /**
   * Generates a timeseries with random values using specified start and end
   *
   * @param timeInfo
   *        the time info of the timeseries (start, end, interval, timezone)
   * @param spec
   *        random options
   * @return timeseries with values generated as per the spec
   */
  static randomTimeseries(timeInfo: TimeInfo, spec?: Timeseries.RandomSpec | null): Timeseries<any>;

  /**
   * The function will generate a Timeseries recursively, using a minimum of 2
   * double arrays and initial values(s). The data points in the series is
   * generate as x_(n) = Array1[n] + Array2[n] * x_(n-1) + Array3[n] * x_(n-2)
   * + ... . The first point generated will be x_(0), and it requires the
   * initial values x_(-1), x_(-2), ... .";
   *
   * @param timeInfo
   *        the time info for the timeseries
   * @param initialValues
   * @param doubleArray
   * @return
   */
  static linearRecurrenceTimeseries(ti?: TimeInfo | null, initialValues?: C3.Array<number | null>, doubleArray?: C3.Array<C3.Array<number | null>>): Timeseries<any>;

  /**
   * @param xLat
   *        representing xLat co-ordinates
   * @param xLong
   *        representing xLong co-ordinates
   * @param yLat
   *        representing yLat co-ordinates
   * @param yLong
   *        representing yLong co-ordinates
   * @return
   */
  static haversineDistance(xLat?: Timeseries<any> | null, xLong?: Timeseries<any> | null, yLat?: Timeseries<any> | null, yLong?: Timeseries<any> | null): Timeseries<any>;

  /**
   * Compute correlation between two time series
   *
   * @param kind
   *        Kind of correlation desired {@see CorrelationKind}
   * @param y
   *        Timeseries against which correlation needs to be computed
   * @return correlation coefficient between two time series
   */
  correlation(kind: string, ts: Timeseries<any>): Timeseries<any>;

  /**
   * A Pearson correlation is a number between -1 and 1 that indicates the extent to which two variables are linearly
   * related.
   * The Pearson correlation is also known as the “product moment correlation coefficient” (PMCC) or simply
   * “correlation”.
   *
   * @param ts
   *        Timeseries against which correlation needs to be computed
   * @return the pearson correlation (identity) in between the given and the input ts
   */
  pearsonCorrelation(ts: Timeseries<any>): Timeseries<any>;

  /**
   * Function to registerReadInterpolator, specifically, for data that is monotonically increasing.
   * (e.g.register reads)
   * Values will be interpolated based on values of the next non-zero data point.
   * Zero values before the first non zero data point will all be kept as 0s. Similarly points after the last non-zero
   * data points will be kept as 0s.
   * Example:
   * (10)                                      x      x
   * (3)                  x
   * (2)    x
   * |------|------|------|------|------|------|------|------|
   * 0      1      2      3      4      5      6      7      8
   *
   * results in:
   *
   * 0d    0.5d   0.5d   7/3d   7/3d   7/3d    0d     0d     0d
   * |------|------|------|------|------|------|------|------|
   * 0      1      2      3      4      5      6      7      8
   *
   * @param ts
   *        input timeseries on which rolling diff needs to be applied
   * @param resetValue
   *        reset drop threshold value based on the operation above.
   *        e.g. reset the value to current value when
   *        1. PERCENT value of drop is 5%
   *        2. value of drop is Greater than Equal to (GTE) 0
   *        3. value of drop is Greater than (GT) 0
   * @param resetOper
   *        reset operation to be applied on the value. Should be one of PERCENT / GTE, GT
   * @param rolloverMax
   *        max value allowed for the timeseries after which it rolls over. The following formula will be used
   *        when a rollover after this value happens:
   *        nextValue = (rolloverMax - currentValue) + nextValue
   * @return a timeseries which has values interpolated for monotonically increasing timeseries
   */
  registerReadInterpolator(resetOper?: string | null, resetThreshold?: number | null, rolloverMax?: number | null): Timeseries<any>;

  /**
   * Compute a single representative truth value based on data
   * If all data values are falsy, result is false
   * If all data values are truthy, result is true
   * Else result is null
   */
  truthValue(): C3.Array<boolean>;

  /**
   * @param resetTimeseries
   *        Reset timeseries for flushing the value of running sum. If set, from that point onwards the running sum
   *        will be reset to 0
   * @param width
   *        No of intervals before gamma = decay
   * @param decay
   *        After width interval the reduction in value will be decay
   * @return a timeseries where each value is computed as the exponential decay at that point
   */
  exponentialDecay(reset?: Timeseries<any> | null, width?: number | null, decay?: number | null): Timeseries<any>;

  /**
   * @param width
   *        No of intervals before gamma = decay
   * @return a timeseries where each value is computed as the linear decay at that point
   */
  linearDecay(width: number): Timeseries<any>;

  /**
   * Function to remove outliers from the given timeseries
   * By applying a moving median window and a moving median absolute deviation we define moving upper and lower
   * outlier bounds outside of which we consider data points to be outliers that need to be cleaned.
   * Default for span is 30 and threshold is 3
   * Logic: TS > window(‘MEDIAN’, TS, -span, span, 1) - threshold * 1.48 * window(‘MEDIAN’, abs(TS - window(‘MEDIAN’,
   * TS, -span, span, 1)), -span, span, 1) ? (TS < window(‘MEDIAN’, TS, -span, span, 1) + threshold*1.48 *
   * window(‘MEDIAN’, abs(TS - window(‘MEDIAN’, TS, -span, span, 1)), -span, span, 1) ? TS : 0) : 0
   *
   * @param ts
   *        Input timeseries on which outliers needs to be removed
   * @param span
   *        No of intervals for moving window
   * @param threshold
   *        for standard deviation
   * @return Outlier removed timeseries
   */
  removeOutliers(span?: number | null, threshold?: number | null): Timeseries<any>;

  /**
   * @return the earliest AVAILABLE data. This means that if some part at the beginning of the series is missing
   *         then we return the first value from the beginning where missing value is non 1.
   */
  earliestAvailableValue(): Timeseries<any>;

  /**
   * @return the latest AVAILABLE data. This means that if some part at the end of the series is missing
   *         then we return the first value from the end where missing value is non 1.
   */
  latestAvailableValue(): Timeseries<any>;

  /**
   * @param timeserieses
   *        The array of timeseries that need to be stitched
   * @param timeInfo
   *        Time info for the new stitched timeseries
   * @return stitched timeseries
   */
  static stitch(timeserieses?: C3.Array<Timeseries<any> | null>, timeInfo?: TimeInfo | null): Timeseries<any>;

  /**
   * API to create a timeseries with unavailable of a given percentage with a specified value and unit
   *
   * @param ti
   *        Time information about the timeseries to be created
   * @param missingPercent
   *        Percentage of missing desired in the result, value between 0 & 100
   * @param dataValue
   *        Value of the data point while keeping gaps - Values will be same in all intervals
   * @param dataUnitId
   *        Unit for the values
   * @return Timeseries with the above mentioned specs
   */
  static makeMissing(ti?: TimeInfo | null, missingPercent: number, value: number, unit?: Unit | null): Timeseries<any>;

  /**
   * @return default unavailable value
   */
  getDefaultUnavailableValue(): any;

  /**
   * API to provide a view on top of the timeseries. This does not create a new timeseries structure but just provides
   * a thin view on top of the original timeseries.
   *
   * @param slicedStart
   *        Start date of the view (should be more than or equal to start)
   * @param slicedEnd
   *        End date of the view (should be less than or equal to end)
   * @return a view of the timeseries
   */
  view(slicedStart: DateTime, slicedEnd: DateTime): Timeseries<E>;

  /**
   * Compare two timeseries and output the field that is different. Returns null if all values are the same
   */
  compare(other: Timeseries<E>): string | null;

  /**
   * Produce an ASCII chart of the timeseries with the specified overall height, width corresponding to the number
   * of X values and with the specified events marked on the X axis.
   */
  asciiChart(height: number, events?: C3.Array<DateTime | null>): string | null;

  /**
   * Generates timeseries from specified value(s). Think of it as a packaging method i.e. Constructors
   * Values generated as a result of this method will be normalized values i.e. length of the values array should match
   * the length of the Timeseries as computed by the input TimeInfo
   *
   * @param timeInfo
   *        time information for a timeseries.
   * @param value
   *        optional value.
   * @return timeseries based on input value.
   */
  static fromValues(tsInfo: TimeseriesInfo, values?: Collection<any> | null, unit?: Unit | null): Timeseries<any>;

  static fromValues(timeInfo: TimeInfo, values?: Collection<any> | null, unit?: Unit | null, missing?: Collection<boolean> | null): Timeseries<any>;

  static fromValue(timeInfo: TimeInfo, value?: any, unit?: Unit | null): Timeseries<any>;

  /**
   * Returns a Timeseries with TimeInfo constructed via {@link TimeInfo#fromValueCount} based on just the input values
   * passed in. For Timeseries<double>, input values containing null will automatically be converted to values with missing
   * for downstream computation
   *
   * E.g.
   * ```js
   *  Let's assume today (now) is 2020-10-10T14:23:12
   *  Timeseries.fromValues([1,2,null,5])
   * =>  {"_data":[1,2,0,5], "tsInfo": { start:"2010-10-06", end:"2010-10-10", interval:"DAY", missing: [false,false,true,false]} }
   * ```
   */
  static fromCollection(values?: Collection<any> | null, spec?: TimeseriesFromCollectionSpec | null): Timeseries<any>;

  /**
   * Constructs a dynamic type by converting numeric fields into Timeseries fields and preserving the date time field
   * on which Timeseries is constructed. If startField is null, then no date time fields are available on the resultant Type
   * If input type is {@link Partitionable} then the partition key field will also be present as a part of the result
   * type
   *
   * E.g. Timeseries.toDynType(AnimalHealthReading, "start")
   * ```type
   *   @db(partitionkeyField="parent")
   *   type AnimalHealthReading mixes Partitionable<string> {
   *     start: datetime
   *     heartRate: double
   *     wbcCount: int
   *     parent: string
   *   }
   *
   * //=> Resultant type:
   *  @db(partitionkeyField="parent")
   *  type Obj_<DynamicTypeSuffix> mixes Partitionable<string> {
   *     start: datetime
   *     heartRate: Timeseries<double>
   *     wbcCount: Timeseries<double>
   *     parent: string
   *  }
   * ```
   */
  static typeToTsDynType(type: Type, startField?: string | null, groupField?: string | null): Type;

  /**
   * Constructs a flattened type from the existing dynamic type by converting Timeseries fields into numeric fields
   * preserving the date time field on which Timesries was constructed. Only numeric fields will be returned if no
   * datetime fields are available on the dynamic Timeseries type.
   * If input type is {@link Partitionable} then the partition key field will also be present as a part of the result
   * type
   */
  static tsDynTypeToType(dynType: Type): Type;

  /**
   * Converts the input indexed by partitionKey & field name to rows of dynamic Timeseries type @see tsDynTypeToType
   *
   * If partition key index is null, then it is assumed that the dynTsType is not {@link Partitionable} and the resultant
   * object will not contain the field
   *
   * E.g.
   * ```js
   * dynTsType=
   *  @db(partitionkeyField="parent")
   *  type Obj_<DynamicTypeSuffix> mixes Partitionable<string> {
   *     start: datetime
   *     heartRate: Timeseries<double>
   *     wbcCount: Timeseries<double>
   *     parent: string
   *  }
   *
   * rows = <partition_key1, <heartRate, {_data:[1,2,3], tsInfo: {start:"2010-01-01", end:"2010-01-03", interval:"DAY"}}>>
   *
   * Timeseries.toTsFieldObjs(dynTsType, rows)
   * =>
   * [{ "parent": "partition_key1", heartRate: {_data:[1,2,3], tsInfo: {start:"2010-01-01", end:"2010-01-03", interval:"DAY"} }]
   */
  static tsFieldObjs(dynTsType: Type, rows?: C3.Map<any, C3.Map<string | null, Timeseries<any> | null>>): C3.Array<Obj | null>;

  /**
   * Converts the input objs with Timeseries fields to rows of dynamic type. If input objs are not objs with Timeseries
   * fields, the same Array will be returned
   *
   * If partition key index is null, then it is assumed that the dynTsType is not {@link Partitionable} and the resultant
   * object will not contain the field
   *
   * User can also provide the targetType, if they already have that information. In absence of it, a dynamic type using
   * {@link #tsDynTypeToType} will be created and used.
   * E.g.
   * ```js
   * type=
   *  @db(partitionkeyField="parent")
   *  type Obj_<DynamicTypeSuffix> mixes Partitionable<string> {
   *     start: datetime
   *     heartRate: double
   *     wbcCount: double
   *     parent: string
   *  }
   *
   * rows = { parent: "partition_key1", "heartRate" : {_data:[1,2,3], tsInfo: {start:"2010-01-01", end:"2010-01-03", interval:"DAY"} }
   *
   * Timeseries.objsFromTsFields(rows)
   * =>
   * [{ "parent": "partition_key1", heartRate: 1, start:"2010-01-01" },
   *  { "parent": "partition_key1", heartRate: 2, start:"2010-01-02" },
   *  { "parent": "partition_key1", heartRate: 3, start:"2010-01-03" }]
   */
  static objsFromTsFields(rows?: C3.Array<Obj | null>, spec?: ObjsFromTsSpec | null): C3.Array<Obj | null>;

  /**
   * Converts the `numeric` columns on the given Collection into Timeseries columns. Currently non-numeric columns will be dropped from the
   * result
   *
   * Note: here the data is already assumed to be grouped by Timeseries headers (if there are no header fields, it is
   * assumed that the entire Collection is for the same Timeseries)
   *
   * E.g.
   * ```js
   * col = [{ "a" : 0.9, "b" : 1, "c": "foo", "d": "2010-01-01", "e": true  },
   *        { "a" : 1.1, "b" : 2, "c": "bar", "d": "2010-01-02", "e": false  },
   *        { "a" : 2.1, "b" : 3, "c": "foo", "d": "2010-01-03", "e": false  }]
   *
   * // fromTsFieldSpec using a period of 1 month on field "d" as the date index of the resulting Timeseries
   * r = Timeseries.fromTsFieldSpec(col, {"a": { aggFunc: "SUM" }, "b": { aggFunc: "AVG" }}, { startExpr:"d", interval:"DAY"})
   * => [{ "a": {"_data":[0.9,1.1,2.1], "tsInfo": { start:"2010-01-01", end:"2010-01-03", interval:"DAY"} },
   *       "b": {"_data":[1,2,3], "tsInfo": { start:"2010-01-01", end:"2010-01-03", interval:"DAY"} }]
   *
   * @param data
   *            Input Collection from which Timeseries needs to be constructed
   * @param tsFieldSpec
   *            Timeseries field spec for individual fields indicating how to construct the Timeseries
   *            E.g. {"a": { aggFunc: "SUM" }}
   * @param spec
   *            Timeseries spec determining the time range / date time index common across all ts fields
   * @return structure where only numeric columns are converted to Timeseries
   */
  static tsFieldsFromSpec(data?: Collection<any> | null, tsFieldSpec?: C3.Map<string | null, TimeseriesFieldSpec | null>, spec?: TimeseriesSpecBase | null): C3.Map<string | null, Timeseries<any> | null>;

  /**
   * Generates mask Timeseries from the input Timeseries. If keep is set to true, then mask Timeseries will
   * be inverse of the dates / time range passed in the filter. Useful for asOf handling in which case you want to keep
   * the values in the range
   */
  convertToMask(keep?: boolean): Timeseries<number>;

  /**
   * Apply mask and return Data.Column with timestamp and values
   * @param cols
   *            Columns to return in the result
   * @param mask
   *            Filter to apply Timeseries -> this should be
   *            Anything that is in this date range will be masked out (removed) from the end result
   * @return apply filtering and return the columns
   */
  applyMask(cols: C3.Array<string | null>, mask: Timeseries<number>): C3.Array<Data.Column | null>;

  all(spec?: AggSpec | null): R | null;

  agg(aggFunc: string, percentile?: number | null): E | null;

  agg(spec: AggSpec | null, aggregator: λBiFunction<R | null, E | null, R | null>): R | null;

  agg(spec: AggSpec | null, op: string): R | null;

  agg(spec: AggSpec | null, folder: λBiFunction<T | null, E | null, T | null>, aggregator: λBiFunction<R | null, T | null, R | null>): R | null;

  interval(): string;

  timeZone(): TimeZone | null;

  /**
   * Returns a new Timeseries type bound to the given value type
   */
  static typeOf(vt?: ValueType | null): Type;

  eq(other: any): Timeseries<R> | null;

  gt(other: any): Timeseries<R> | null;

  ge(other: any): Timeseries<R> | null;

  lt(other: any): Timeseries<R> | null;

  le(other: any): Timeseries<R> | null;

  ne(other: any): Timeseries<R> | null;
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

interface λPredicate<T> {
  (t: T): boolean
}
