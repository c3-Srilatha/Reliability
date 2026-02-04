// TypeScript definitions for the C3 type ReliabilityMlModelSchemaUpgrade

/**
 * Schema upgrade for {@link ReliabilityMlModel}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityMlModelSchemaUpgrade
 */
declare interface IReliabilityMlModelSchemaUpgrade {
}

/**
 * Schema upgrade for {@link ReliabilityMlModel}.
 *
 * @remarks this represents a made instance of ReliabilityMlModelSchemaUpgrade
 */
declare class ReliabilityMlModelSchemaUpgrade extends Obj  {

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
  static fromJson(json: any): ReliabilityMlModelSchemaUpgrade | null;

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
  static fromJsonString(json: string): ReliabilityMlModelSchemaUpgrade | null;

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
  static fromXmlString(xml: string): ReliabilityMlModelSchemaUpgrade | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ReliabilityMlModelSchemaUpgrade | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ReliabilityMlModelSchemaUpgrade;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMlModelSchemaUpgrade;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMlModelSchemaUpgrade;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMlModelSchemaUpgrade>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMlModelSchemaUpgrade>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityMlModelSchemaUpgrade;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMlModelSchemaUpgrade;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMlModelSchemaUpgrade;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ReliabilityMlModelSchemaUpgrade;

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
  withField(field: string, value: any, doNotConvert?: boolean): ReliabilityMlModelSchemaUpgrade;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityMlModelSchemaUpgrade;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityMlModelSchemaUpgrade;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityMlModelSchemaUpgrade;

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
  withoutFieldAtPath(path: string): ReliabilityMlModelSchemaUpgrade;

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
  withoutField(field: string): ReliabilityMlModelSchemaUpgrade;

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
  withoutField(field: FieldType): ReliabilityMlModelSchemaUpgrade;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ReliabilityMlModelSchemaUpgrade;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityMlModelSchemaUpgrade;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ReliabilityMlModelSchemaUpgrade;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityMlModelSchemaUpgrade;

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
  defaultField(field: string): ReliabilityMlModelSchemaUpgrade;

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
  defaultField(field: FieldType): ReliabilityMlModelSchemaUpgrade;

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
  unsetField(field: string): ReliabilityMlModelSchemaUpgrade;

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
  unsetField(field: FieldType): ReliabilityMlModelSchemaUpgrade;

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
  removeField(field: string): ReliabilityMlModelSchemaUpgrade;

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
  removeField(field: FieldType): ReliabilityMlModelSchemaUpgrade;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityMlModelSchemaUpgrade;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityMlModelSchemaUpgrade;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityMlModelSchemaUpgrade;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityMlModelSchemaUpgrade;

  mergeJson(json: any): ReliabilityMlModelSchemaUpgrade;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityMlModelSchemaUpgrade;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ReliabilityMlModelSchemaUpgrade;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ReliabilityMlModelSchemaUpgrade>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityMlModelSchemaUpgrade> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ReliabilityMlModelSchemaUpgrade> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ReliabilityMlModelSchemaUpgrade>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ReliabilityMlModelSchemaUpgrade> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ReliabilityMlModelSchemaUpgrade> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityMlModelSchemaUpgrade> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ReliabilityMlModelSchemaUpgrade>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ReliabilityMlModelSchemaUpgrade>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityMlModelSchemaUpgrade;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityMlModelSchemaUpgrade;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityMlModelSchemaUpgrade;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ReliabilityMlModelSchemaUpgrade;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityMlModelSchemaUpgrade;

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
  static make(fields: any, withDefaults?: boolean): ReliabilityMlModelSchemaUpgrade;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityMlModelSchemaUpgrade;

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
  afterMake(): ReliabilityMlModelSchemaUpgrade;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ReliabilityMlModelSchemaUpgrade;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityMlModelSchemaUpgrade> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ReliabilityMlModelSchemaUpgrade;

  /**
   * @return current schema migration version.
   */
  static currentVersion(): number | null;

  /**
   * Resets the current schema migration version.
   *
   * @return the (new) current schema migration version.
   */
  static resetVersion(version?: number): number | null;

  /**
   * Checks if a table exists in the current db/schema.
   *
   * @param tableName
   *           Table name to check.
   *
   * @return true if the table exists.
   */
  static tableExists(tableName: string): boolean;

  /**
   * Checks if a table column exists in the current db/schema.
   *
   * @param tableName
   *           Table name to check.
   * @param colName
   *           Column name to check.
   *
   * @return true if the table column exists.
   */
  static columnExists(tableName: string, colName: string): boolean;

  /**
   * Add a new, empty varchar column to a database table.
   *
   * @param tableName
   *           Table name to which the column will be added.
   * @param colName
   *           Name of the column to create.
   * @param length
   *           column length. Default is default string field length (e.g. 512)
   * @param onlyIfMissing
   *           if true, the column will only be created if it doesn't already exist.
   */
  static addVarcharColumn(tableName: string, colName: string, length?: number = '512', onlyIfMissing?: boolean = 'false'): void;

  /**
   * Add a new, empty clob column to a database table.
   *
   * @param tableName
   *           Table name to which the column will be added.
   * @param colName
   *           Name of the column to create.
   * @param onlyIfMissing
   *           if true, the column will only be created if it doesn't already exist.
   */
  static addClobColumn(tableName: string, colName: string, onlyIfMissing?: boolean): void;

  /**
   * Converts a varchar column to a clob column.  If the column doesn't exist or has a type other than varchar, an
   * error is returned.  If the column exists and is already a clob, no changes are made.
   *
   * @param tableName
   *           Table name of the column being converted.
   * @param colName
   *           Column name being converted.
   */
  static convertColumnToClob(tableName: string, colName: string): void;

  /**
   * Add a new, empty numeric column to a database table.
   *
   * @param tableName
   *           Table name to which the column will be added.
   * @param colName
   *           Name of the column to create.
   * @param scale
   *           column scale.
   * @param precision
   *           column precision. Default is 0 (e.g. integer)
   * @param onlyIfMissing
   *           if true, the column will only be created if it doesn't already exist.
   */
  static addNumericColumn(tableName: string, colName: string, scale: number, precision?: number = '0', onlyIfMissing?: boolean = 'false'): void;

  /**
   * Add a new, empty timestamp column to a database table.
   *
   * @param tableName
   *           Table name to which the column will be added.
   * @param colName
   *           Name of the column to create.
   * @param onlyIfMissing
   *           if true, the column will only be created if it doesn't already exist.
   */
  static addTimestampColumn(tableName: string, colName: string, onlyIfMissing?: boolean): void;

  /**
   * Add a new, empty xml column to a database table.
   *
   * @param tableName
   *           Table name to which the column will be added.
   * @param colName
   *           Name of the column to create.
   * @param onlyIfMissing
   *           if true, the column will only be created if it doesn't already exist.
   */
  static addXmlColumn(tableName: string, colName: string, onlyIfMissing?: boolean): void;

  /**
   * Drop a column from a database.
   *
   * @param tableName
   *           Table name from which the column will be dropped.
   * @param colName
   *           Name of the column to drop.
   */
  static dropColumn(tableName: string, colName: string): void;

  /**
   * Rename a column in a database table.
   *
   * @param tableName
   *           Table name to which the column will be added.
   * @param colName
   *           Name of the column to rename.
   * @param newColName
   *           New name for the column.
   */
  static renameColumn(tableName: string, colName: string, newColName: string): void;

  /**
   * Merge data from old column to new column and drops the old column if both the columns exist. If the new column
   * doesn't exist, renames the old column to the new column name. If the old column doesn't exist it is no-op.
   *
   * @param tableName
   *           Table name for which the column will be merged.
   * @param colName
   *           Column to move from (old column name)
   * @param newColName
   *           Column to move to (new column name)
   */
  static mergeColumn(tableName: string, colName: string, newColName: string): void;

  /**
   * Deletes rows from a table.  Only rows from the current app will be deleted.  If the table doesn't exist
   * no error is thrown.
   *
   * @param tableName
   *           Table name to delete the rows from.
   * @param sqlCondition
   *           Optional condition to apply to specify which rows to delete.
   *
   * @return the number of deleted rows.
   */
  static deleteTableRows(tableName: string, sqlCondition?: string): number;

  /**
   * Returns a list of ids for a table for batches where the result[i] is the starting id for batch 'i + 1'.
   *
   * @param tableName
   *           Table name to get batch ids for.
   * @param suggestedNumBatches
   *           Suggested number of batches to return ids for.  If {@link batchSize} is specified, then the number
   *           of ids returned will be exactly this number - 1 if there is enough data.  If there is not enough data, then fewer
   *           batches may be returned.  If {@link batchSize} is not specified, then this may return slightly more than this number - 1
   *           batches if the data can't be partitioned into exactly that number of batches and maintain the batch size.
   * @param batchSize
   *           The fixed number of rows to be included in each batch.
   * @param filter
   *           Filter expression to apply to qualify matching rows.  This must be a valid SQL WHERE clause snippet.
   *
   * @return a list of batch ids based on the input parameters.
   */
  static batchIds(tableName: string, suggestedNumBatches?: number, batchSize?: number, filter?: string): Array_Type<string> | null;

  /**
   * Completely removes any existing schema for the type (e.g. tables/indexes) and calls upsertCollection to recreate
   * the new schema matching the type. This may only be called on types that contain data only from the requesting app
   * or for types that mixin Metadata.
   *
   * IMPORTANT - Note that ALL EXISTING DATA WILL BE LOST.  For extended types, all data/schema in the base type and all
   *             extended types will be removed and only the schema for the specific named type will be recreated.  In a
   *             multi-app environment, all data for all apps will be removed from the type.  Since this is not the
   *             "recommended" scenario, an extra provisioning of the Metadata will need to be performed after the last
   *             app is upgraded.
   *
   * @param typeName
   *           Name of type to reset schema for.
   */
  static resetSchema(typeName: string): void;

  /**
   * Inserts a new base type to an existing extension type hierarchy.  This will copy all data for all tables/columns
   * in the new schema from the corresponding tables/columns in the old schema.  It will also prepend the typeIdents
   * for all rows with the type key for the new base type and refresh metric dependencies for all metrics for all
   * types that extend the new base type.
   *
   * IMPORTANT - Please note the following limitations/restrictions.
   *   1. The old base type must be the true base type of the old hierarchy (e.g. it had no base type itself to start
   *      with.
   *   2. It is assumed that the old base type had a type key.  If any row is found to not start with the old type's
   *      type key, the action will fail.
   *
   * @param oldBaseTypeName
   *          The old base type name.
   * @param oldRootTableName
   *          The root table name for the old base type.  If the table does not exist, the operation will succeed but
   *          without doing anything.  If the table can not be found in the C3_2_TYPE_TABLE table or is not associated
   *          with the old base type, an exception will be thrown.  The old table name must also not be the same as
   *          the table name for the new base type.
   * @param oldTypeKey
   *          The type key for the original base type.  Validation will be done to ensure that all rows typeIdents
   *          start with the old type key.
   * @param newBaseTypeName
   *          The name of the new base type of the hierarchy.  Validation will be performed that the type is
   *          extendable and it has an extension type matching the old base type.
   * @param removeOldData
   *          True if data should be removed from the old tables upon insertion into the new tables.  This should only
   *          be true if the existing data is not needed for any other upgrade steps.
   */
  static insertNewBaseType(oldBaseTypeName: string, oldRootTableName: string, oldTypeKey: string, newBaseTypeName: string, removeOldData?: boolean): void;

  /**
   * Call this function to copy data from and old schema to a new type when the old type is moved to a different
   * extendable type hierarchy.
   *
   * IMPORTANT - Please note the following limitations/restrictions.
   *   1. This currently only supports copying the root table.  If the need arises, support will be expanded to
   *      include child tables (e.g. arrays/maps).
   *   2. If an id already exists in the target type for data being copied, those rows will be ignored.
   *   3. This currently ignores unique indexes (other than the primary key (e.g. id)).  As such, duplicates w.r.t.
   *      existing entries in the type hierarchy may be created and future duplicates may not be detected.  If
   *      there are unique indexes involved in either the old type or the type hierarchy being merged into,
   *      DO NOT USE THIS FUNCTION.  Instead, talk to the platform team (e.g. TomR) to explore alternatives.
   *   4. This function is synchronous.  If the number of entries being copied is large (e.g. several hundred
   *      thousand, please ask the platform team (e.g. TomR) to add support for asynchronous batch processing.
   *
   * @param oldRootSchemaName
   *        Schema name for the old root type.  Note that this is the schema name defined on the old root type
   *        and NOT the table name.
   * @param type
   *        Extendable type to copy to.  If the type is not an extendable type, an error will be thrown.
   * @param oldRootTypeKey
   *        The type key that was specified on the old root type for the schema.  Note that this is critical to
   *        properly set the new typeIdents.  As such, you must specify the parameter, even if it is null.
   * @param spec
   *        Use to specify various parameters that control the operation of this function.
   */
  static copyFromOldSchemaToExtendableType(oldRootSchemaName: string, type: Type, oldRootTypeKey: string, spec?: CopyFromOldSchemaToExtendableTypeSpec): void;

  /**
   * Updates the typeIdent field for the root table and all child tables after an extended type is moved to
   * a different place in the extended type hierarchy.
   *
   * IMPORTANT - Please note the following limitations/restrictions.
   *   1. This function assumes that there were no changes to type keys for the type being moved or any types
   *      that extend it.
   *   2. This function is not intended to be used when types that extend the type being moved are independently
   *      moved in the hierarchy.
   *   3. This function is synchronous.  If the number of entries being copied is large (e.g. several hundred
   *      thousand, please ask the platform team (e.g. TomR) to add support for asynchronous batch processing.
   *
   * @param movedType
   *        Type that was moved.
   * @param oldBaseType
   *        The original base type for 'movedType' prior to being moved.
   */
  static moveExtendedType(movedType: Type, oldBaseType: Type): void;

  /**
   * Migrates all fields with a {@link Duration} value type from the old serialized string representation (in the "_S"
   * suffixed column) to the native DB INTERVAL value (in the "_IDS" column) for the specified type and all types that
   * extend it.  Note that this should be called on the base type of an extended type hierarchy to avoid having to call
   * multiple times for each extension type.
   *
   * @param type
   *        Type to migrate the duration values for
   */
  static migrateDurationFields(type: Type): void;

  /**
   * Migrates a field with a {@link Duration} value type from the old serialized string representation (in the "_S"
   * suffixed column) to the native DB INTERVAL value (in the "_IDS" column).
   *
   * @param type
   *        Type to migrate the duration values for
   * @param fieldPath
   *        Field path in the type to migrate.  Note that if the field path is invalid, an error will be thrown.
   *        However, if the field path isn't a duration field, or doesn't otherwise need migration, no error will be
   *        thrown.
   */
  static migrateDurationField(type: Type, fieldPath: string): void;

  /**
   * Migrates all fields with a vector value type from the "_V" suffixed column to the "_VT<dimension>"
   * (to add support for updating the dimension on the vector field) for the specified type and all types that
   * extend it.  Note that this should be called on the base type of an extended type hierarchy to avoid having to call
   * multiple times for each extension type.
   *
   * @param type
   *        Type to migrate the vector values for
   */
  static migrateVectorFields(type: Type): void;

  /**
   * Updates all references to an id in a type that has changed.
   *
   * @param type
   *           type that had ids changed.
   * @param valueMapping
   *           Map of old ids to new id values.
   */
  static updateReferences(type: Type, valueMapping: Map_Type<string, string>): void;

  /**
   * Updates the ids of the specified type based on a mapping from old ids to new ids.  Includes updating the
   * ids in the root obj and all child table, as well as any references to the old ids in other types.
   *
   * Note that the references are updated prior to updating the ids to facility idempotency in migration.
   *
   * @param type
   *           Type to update the ids for.
   * @param valueMapping
   *           Map of old ids to new id values.
   * @param ignoreIfAlreadyExists
   *           If true, the update will be skipped for any ids where the target id already exists.  Otherwise an
   *           error will be thrown on any conflict
   */
  static updateIds(type: Type, valueMapping: Map_Type<string, string>, ignoreIfAlreadyExists?: boolean): void;

  /**
   * Can be called during schema migration while provisioning to schedule a batch job that will be started at the
   * end of provisioning after the workers have been notified and had a chance to pick up the newly provisioned
   * app.
   *
   * @param job
   *        The job to schedule.  The job must have already been persisted.
   * @param options
   *        Options to run the job with.
   */
  static scheduleBatchJob(job: BatchJob<any, any, any>, options?: any): void;

  /**
   * Can be called during schema migration while provisioning to schedule a mapReduce job that will be started at
   * the end of provisioning after the workers have been notified and had a chance to pick up the newly provisioned
   * app.
   *
   * @param job
   *        The job to schedule.  The job must have already been persisted.
   * @param options
   *        Options to run the job with.
   */
  static scheduleMapReduce(job: MapReduce<any, any, any, any>, options?: MapReduceOptions): void;

  /**
   * Can be called during schema migration while provisioning to schedule a workflow that will be started at
   * the end of provisioning after the workers have been notified and had a chance to pick up the newly provisioned
   * app.
   *
   * @param workflow
   *        The workflow to schedule.  The workflow must have already been persisted.
   * @param options
   *        Options to run the workflow with.
   */
  static scheduleWorkflow(workflow: Workflow, options?: any): void;

  /**
   * Gets the migration functions for a migration type in the order that then need to be applied.  Also performs
   * validation that the migration functions conform to the rules.
   *
   * @param type
   *        Migration type to get the migration functions for
   *
   * @return the upgrade functions for an upgrade type in the order that the need to be applied.
   */
  static migrations(): Array_Type<string> | null;

  /**
   * Applies the necessary migrations (in the correct order) for the migration type.  Also updates the
   * SchemaMigrationVersion type as migrations are completed.
   */
  static applyMigrations(): void;

  /**
   * Migrate the schema of {@link ReliabilityMlModel} to version 1.
   */
  static migrateReliabilityMlModel_1(): void;
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
