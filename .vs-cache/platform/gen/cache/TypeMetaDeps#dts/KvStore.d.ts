// TypeScript definitions for the C3 type KvStore

/**
 * @remarks this represents a value passed to a method that expects an instance of KvStore
 */
declare interface IKvStore<C> {

  /**
   * The unique and required name of this instance.
   */
  name: string;

  /**
   * Name of the default datastore; i.e. in `entity type` does not specify `@db(datastore)` annotation this is the name
   * of the datastore that will be used
   *
   * Note, however it is possible for {@link App} to be configured without _any_ datastore so code should not assume
   * that datastore by name SQL always exists
   */
  SQL?: string | null;

  /**
   * Name of the default Key Value datastore; Types which specify `@db(datastore='kv')` will use the default KvStore.
   * See {@link Ann.Db#datastore}.
   */
  KV?: string | null;

  /**
   * The default kv store name
   */
  DEFAULT_KV_CONFIG?: string | null;

  /**
   * The default column name.
   */
  DEFAULT_COL_NAME?: string | null;
}

/**
 * @remarks this represents a made instance of KvStore
 */
declare class KvStore<C> extends Obj {

  /**
   * The unique and required name of this instance.
   */
  readonly name: string;
  withName(name: string): KvStore;

  /**
   * The unique and required name of this instance.
   */
  static readonly name: string;

  /**
   * Name of the default datastore; i.e. in `entity type` does not specify `@db(datastore)` annotation this is the name
   * of the datastore that will be used
   *
   * Note, however it is possible for {@link App} to be configured without _any_ datastore so code should not assume
   * that datastore by name SQL always exists
   */
  readonly SQL?: string | null;
  withSQL(SQL: string | null): KvStore;

  /**
   * Name of the default datastore; i.e. in `entity type` does not specify `@db(datastore)` annotation this is the name
   * of the datastore that will be used
   *
   * Note, however it is possible for {@link App} to be configured without _any_ datastore so code should not assume
   * that datastore by name SQL always exists
   */
  static readonly SQL?: string | null;

  /**
   * Name of the default Key Value datastore; Types which specify `@db(datastore='kv')` will use the default KvStore.
   * See {@link Ann.Db#datastore}.
   */
  readonly KV?: string | null;
  withKV(KV: string | null): KvStore;

  /**
   * Name of the default Key Value datastore; Types which specify `@db(datastore='kv')` will use the default KvStore.
   * See {@link Ann.Db#datastore}.
   */
  static readonly KV?: string | null;

  /**
   * The default kv store name
   */
  readonly DEFAULT_KV_CONFIG?: string | null;
  withDEFAULT_KV_CONFIG(DEFAULT_KV_CONFIG: string | null): KvStore;

  /**
   * The default kv store name
   */
  static readonly DEFAULT_KV_CONFIG?: string | null;

  /**
   * The default column name.
   */
  readonly DEFAULT_COL_NAME?: string | null;
  withDEFAULT_COL_NAME(DEFAULT_COL_NAME: string | null): KvStore;

  /**
   * The default column name.
   */
  static readonly DEFAULT_COL_NAME?: string | null;

  /**
   * @return the default instance to be used when member functions are called on this type. E.g.
   *         FileSystem.inst() should return a default file system. It is up to implementation to decide if default
   *         instance is a singleton or not.
   */
  static inst(): KvStore<C>;

  /**
   * Serialize the given persistable objs into kv row. Useful for debugging how these objects will be serialized
   * **CAUTION** if the objects are partitionable then they should belong for the same partition key
   * @param objs
   *        Objs that need to be serialized and persisted in the kv store
   * @param serType
   *        Type the persistable objects need to be serialized in. If not specified, it will be the type of objs. Can be used
   *        to serialize objects in a columnar format
   * @return KvRow containing serialized values with the new column name (always creates new column name) as it would be written in the kv row
   */
  serialize(objs: C3.Array<Persistable | null>, serType?: Type | null): KvRow | null;

  /**
   * Serialize the given persistable objs into kv row. Useful for debugging how these objects will be serialized
   * **CAUTION** if the objects are partitionable then they should belong for the same partition key
   * @param objs
   *        Objs that need to be serialized and persisted in the kv store
   * @param serType
   *        Type the persistable objects need to be serialized in. If not specified, it will be the type of objs. Can be used
   *        to serialize objects in a columnar format
   * @return KvRow containing serialized values with the new column name (always creates new column name) as it would be written in the kv row
   */
  static serialize(objs: C3.Array<Persistable | null>, serType?: Type | null): KvRow | null;

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
  static fromJson(json: any | null): KvStore<C> | null;

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
  static fromJsonString(json: string | null): KvStore<C> | null;

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
  static fromXmlString(xml: string | null): KvStore<C> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): KvStore<C> | null;

  /**
   * Retrieves raw data from the row corresponding to the given persistable object. Irrespective of the internal representation,
   * this should return what data is stored in each column in a human readable form (deserialized). Useful for debugging
   * @param obj
   *        If persistable object contains only the partition key, then all objs for that partition key will be retrieved.
   *        If persistable object contains id, then KvRow will only contain a single column containing the the object with that id
   * @return cols for the given persistable object in a human readable form. Format <column_name, human readable representation>
   */
  deserialize(obj: Persistable, include?: string | null): KvRow | null;

  /**
   * Retrieves raw data from the row corresponding to the given persistable object. Irrespective of the internal representation,
   * this should return what data is stored in each column in a human readable form (deserialized). Useful for debugging
   * @param obj
   *        If persistable object contains only the partition key, then all objs for that partition key will be retrieved.
   *        If persistable object contains id, then KvRow will only contain a single column containing the the object with that id
   * @return cols for the given persistable object in a human readable form. Format <column_name, human readable representation>
   */
  static deserialize(obj: Persistable, include?: string | null): KvRow | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): KvStore<C>;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  static replaceType(old: Type, new_: Type): KvStore<C>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): KvStore<C>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): KvStore<C>;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): KvStore<C>;

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
  static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): KvStore<C>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<KvStore<C> | null>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<KvStore<C> | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<KvStore<C> | null>;

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
  static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<KvStore<C> | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): KvStore<C>;

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
  static mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): KvStore<C>;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): KvStore<C>;

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
  static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): KvStore<C>;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): KvStore<C>;

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
  static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): KvStore<C>;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): KvStore<C>;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  static validateObj(): KvStore<C>;

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
  withField(field: string, value: any, doNotConvert?: boolean): KvStore<C>;

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
  static withField(field: string, value: any, doNotConvert?: boolean): KvStore<C>;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): KvStore<C>;

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
  static withField(field: FieldType, value: any, doNotConvert?: boolean): KvStore<C>;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): KvStore<C>;

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
  static withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): KvStore<C>;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): KvStore<C>;

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
  static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): KvStore<C>;

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
  withoutFieldAtPath(path: string): KvStore<C>;

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
  static withoutFieldAtPath(path: string): KvStore<C>;

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
  withoutField(field: string | null): KvStore<C>;

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
  static withoutField(field: string | null): KvStore<C>;

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
  withoutField(field: FieldType | null): KvStore<C>;

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
  static withoutField(field: FieldType | null): KvStore<C>;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): KvStore<C>;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  static withoutFields(fields: C3.Array<string | null> | null): KvStore<C>;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): KvStore<C>;

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
  static withoutFieldsByType(fields: C3.Array<FieldType | null> | null): KvStore<C>;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): KvStore<C>;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  static withoutSecretFields(): KvStore<C>;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): KvStore<C>;

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
  static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): KvStore<C>;

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
  defaultField(field: string): KvStore<C>;

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
  static defaultField(field: string): KvStore<C>;

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
  defaultField(field: FieldType): KvStore<C>;

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
  static defaultField(field: FieldType): KvStore<C>;

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
  unsetField(field: string): KvStore<C>;

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
  static unsetField(field: string): KvStore<C>;

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
  unsetField(field: FieldType): KvStore<C>;

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
  static unsetField(field: FieldType): KvStore<C>;

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
  removeField(field: string): KvStore<C>;

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
  static removeField(field: string): KvStore<C>;

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
  removeField(field: FieldType): KvStore<C>;

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
  static removeField(field: FieldType): KvStore<C>;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): KvStore<C>;

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
  static mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): KvStore<C>;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): KvStore<C>;

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
  static mergeObj(other: Obj | null, otherFieldsFilter: Type): KvStore<C>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): KvStore<C>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  static mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): KvStore<C>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): KvStore<C>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  static mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): KvStore<C>;

  mergeJson(json: any | null): KvStore<C>;

  static mergeJson(json: any | null): KvStore<C>;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): KvStore<C>;

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
  static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): KvStore<C>;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): KvStore<C>;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  static sumObj(other: Obj | null, deep?: boolean): KvStore<C>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<KvStore<C> | null>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonArray(): C3.Array<KvStore<C> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<KvStore<C> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<KvStore<C> | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<KvStore<C> | null>;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonSet(): C3.Set<KvStore<C> | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<KvStore<C> | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, KvStore<C> | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, KvStore<C> | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<KvStore<C> | null>;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  static toBuilder(): ObjBuilder<KvStore<C> | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<KvStore<C> | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): KvStore<C>;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): KvStore<C>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): KvStore<C>;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): KvStore<C>;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): KvStore<C>;

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
  static make(fields: any, withDefaults?: boolean): KvStore<C>;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): KvStore<C> | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): KvStore<C>;

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
  afterMake(): KvStore<C>;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static afterMake(): KvStore<C>;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): KvStore<C>;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<KvStore<C>>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): KvStore<C>;

  /**
   * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
   *
   * @param secrets
   *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
   *          fields. Otherwise configuration will not have values for secrets.
   * @return instance of configuration - never `null`.
   */
  config(secrets?: boolean): C;

  /**
   * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
   *
   * @param secrets
   *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
   *          fields. Otherwise configuration will not have values for secrets.
   * @return instance of configuration - never `null`.
   */
  static config(secrets?: boolean): C;

  /**
   * @return configuration key for this instance.
   */
  configKey(): string | null;

  /**
   * @return configuration key for this instance.
   */
  static configKey(): string | null;

  /**
   * @return configuration key for this type assuming it is singleton.
   */
  configSingletonKey(): string | null;

  /**
   * @return configuration key for this type assuming it is singleton.
   */
  static configSingletonKey(): string | null;

  /**
   * @return type configuration for the given {@link Configurable} type.
   * E.g. {@see REST} & {@see RestConfig}
   */
  static typeConfig(): C;

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
  static fromString(s: string | null): KvStore<C> | null;

  /**
   * Note: If the value of the config for a particular name is changed, then we require a node / app restart since looking
   * up the value each time is extremely expensive
   */
  static forName(name: string | null, failIfMissing?: boolean): KvStore<C> | null;

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
  static allCached(doNotProduceAll?: boolean): Stream<KvStore<C> | null>;

  /**
   * @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return existing instances of this type that satisfy filter from data cache.
   */
  static find(filter?: string | null, doNotProduceAll?: boolean): Stream<KvStore<C> | null>;

  /**
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return existing instances of this type that satisfy filter from data cache.
   */
  static findBy(field: string, value: any, doNotProduceAll?: boolean): Stream<KvStore<C> | null>;

  /**
   * @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
   *
   * @see forCacheKey
   * @see getCached
   */
  static findByCacheKey(key: string): KvStore<C> | null;

  /**
   * @return cached instance by the key.
   *
   * @see forCacheKey
   * @see findByCacheKey
   */
  static forCacheKey(key: string | null): KvStore<C> | null;

  /**
   * @return cached instance.
   *
   * @see forCacheKey
   * @see findByCacheKey
   */
  getCached(): KvStore<C> | null;

  /**
   * @return cached instance.
   *
   * @see forCacheKey
   * @see findByCacheKey
   */
  static getCached(): KvStore<C> | null;

  /**
   * @return newly produced cached instance.
   */
  refreshCache(): KvStore<C> | null;

  /**
   * @return newly produced cached instance.
   */
  static refreshCache(): KvStore<C> | null;

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
  static produce(key: string): KvStore<C> | null;

  /**
   * Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
   */
  static produceAll(): C3.Map<string | null, KvStore<C> | null>;

  /**
   * Override for sub-types to produce all values.
   */
  static doProduceAll(): C3.Map<string | null, KvStore<C> | null>;

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
   * If `true` then this data-store can only query the data but not persist / update.
   */
  isReadOnly(): boolean;

  /**
   * If `true` then this data-store can only query the data but not persist / update.
   */
  static isReadOnly(): boolean;

  /**
   * If `true` then database schema for this data-store can not be altered.
   */
  isExternal(): boolean;

  /**
   * If `true` then database schema for this data-store can not be altered.
   */
  static isExternal(): boolean;

  /**
   * If `true` then the datastore's backing cloud service is dedicated to the app.
   */
  isDedicated(): boolean;

  /**
   * If `true` then the datastore's backing cloud service is dedicated to the app.
   */
  static isDedicated(): boolean;

  /**
   * If `true` then every environment should have their own {@link Cassandra.Keyspace}. This has no effect for
   * any database other than Cassandra.
   */
  isPerTenant(): boolean;

  /**
   * If `true` then every environment should have their own {@link Cassandra.Keyspace}. This has no effect for
   * any database other than Cassandra.
   */
  static isPerTenant(): boolean;

  /**
   * @return datastore credentials needed to connect to the back-end.
   */
  credentials(): KvStore.Credentials;

  /**
   * @return datastore credentials needed to connect to the back-end.
   */
  static credentials(): KvStore.Credentials;

  /**
   * Sets credentials configuration for this datastore.
   * @param failIfMissing
   *           If true, throw an error if the credentials miss the required fields
   */
  setCredentials(cred: KvStore.Credentials, override?: string | null, failIfMissing?: boolean): void;

  /**
   * Sets credentials configuration for this datastore.
   * @param failIfMissing
   *           If true, throw an error if the credentials miss the required fields
   */
  static setCredentials(cred: KvStore.Credentials, override?: string | null, failIfMissing?: boolean): void;

  /**
   * Sets credentials configuration for this datastore.
   *
   * @action(authz='always')
   *
   * setCredentials: member function(url: !?string, user: !?string, pwd: !?string, override: string enum ConfigOverride)
   *
   * Sets the external field in the config.
   */
  setExternal(override?: string | null): void;

  /**
   * Sets credentials configuration for this datastore.
   *
   * @action(authz='always')
   *
   * setCredentials: member function(url: !?string, user: !?string, pwd: !?string, override: string enum ConfigOverride)
   *
   * Sets the external field in the config.
   */
  static setExternal(override?: string | null): void;

  /**
   * Sets the perTenant field in the config.
   */
  setPerTenant(): void;

  /**
   * Sets the perTenant field in the config.
   */
  static setPerTenant(): void;

  /**
   * Retrieves in-memory key value store.
   */
  static inMemory(caps?: KvStoreCapabilities | null): InMemoryKvStore;

  /**
   * Get the object by id.
   */
  getObj(tableName: string, id: string, spec?: KvStoreGetSpec | null): Obj | null;

  /**
   * Get the object by id.
   */
  static getObj(tableName: string, id: string, spec?: KvStoreGetSpec | null): Obj | null;

  /**
   * Put the object.
   */
  putObj(tableName: string, obj: Obj): void;

  /**
   * Put the object.
   */
  static putObj(tableName: string, obj: Obj): void;

  /**
   * Get the data
   */
  get(tableName: string, id: string, spec?: KvStoreGetSpec | null): KvRow | null;

  /**
   * Get the data
   */
  static get(tableName: string, id: string, spec?: KvStoreGetSpec | null): KvRow | null;

  /**
   * Get Batch of KvRow. This is helpful when optimizing io from the underlying kv store
   */
  getBatch(tableName: string, ids: C3.Array<string | null>, spec?: KvStoreGetSpec | null): Stream<KvRow | null>;

  /**
   * Get Batch of KvRow. This is helpful when optimizing io from the underlying kv store
   */
  static getBatch(tableName: string, ids: C3.Array<string | null>, spec?: KvStoreGetSpec | null): Stream<KvRow | null>;

  /**
   * Scan data in the kv store
   * prefix-match search on #tableName.
   */
  scan(tableName: string, spec?: KvStoreScanSpec | null): Stream<KvRow | null>;

  /**
   * Scan data in the kv store
   * prefix-match search on #tableName.
   */
  static scan(tableName: string, spec?: KvStoreScanSpec | null): Stream<KvRow | null>;

  /**
   * Gets a stream of all internal partition ids for the table
   * @param tableName
   *            The name of the table to scan
   * @param spec
   *            Optional specifications for the scan. Only offset and limit are supported.
   * @return Stream of names of all internal ids corresponding to the table
   */
  scanPartitionKeys(tableName: string, spec?: KvStoreScanSpec | null): Stream<string | null>;

  /**
   * Gets a stream of all internal partition ids for the table
   * @param tableName
   *            The name of the table to scan
   * @param spec
   *            Optional specifications for the scan. Only offset and limit are supported.
   * @return Stream of names of all internal ids corresponding to the table
   */
  static scanPartitionKeys(tableName: string, spec?: KvStoreScanSpec | null): Stream<string | null>;

  /**
   * Returns a list of column names for the given row. Helpful when debugging. This can also be used to retrieve a list of cols
   * without the actual data for the columns for performance reasons. Override this implementation to push down retrieval
   * of column names to the underlying kv store
   */
  getColumnNames(tableName: string, id: string, limit?: number | null): Stream<string | null>;

  /**
   * Returns a list of column names for the given row. Helpful when debugging. This can also be used to retrieve a list of cols
   * without the actual data for the columns for performance reasons. Override this implementation to push down retrieval
   * of column names to the underlying kv store
   */
  static getColumnNames(tableName: string, id: string, limit?: number | null): Stream<string | null>;

  /**
   * Returns a content pointing to the specified row in the specified table.
   */
  getContent(tableName: string, id: string, columnName: string): KvContent | null;

  /**
   * Returns a content pointing to the specified row in the specified table.
   */
  static getContent(tableName: string, id: string, columnName: string): KvContent | null;

  /**
   * Put data.
   *
   * @param id
   *         Id for the object
   * @param updatedColumns
   *         Columns that need to be updated. Input in the form of either columnName -> values or
   *         namespaced column name in case the concept of grouping column by feature exists in the datastore
   *         for example: in HBase namespaced column name will be column_family:column_name
   *         Data types supported for values are -> String, Boolean, Number, ByteBuffer
   * @param removedColums
   *         Columns that need to be removed. Column names are either the name of the column itself or or
   *         namespaced column name in case the concept of grouping column by feature exists in the datastore
   *         for example: in HBase namespaced column name will be column_family:column_name
   * @param spec
   *         More details about the update operation if any
   *
   * @return if the put operation was successful or not. If the engine was not able to write, it will return false
   */
  put(tableName: string, id: string, updatedColumns?: C3.Map<string | null, any>, removedColumns?: C3.Set<string | null>, spec?: KvStorePutSpec | null): boolean;

  /**
   * Put data.
   *
   * @param id
   *         Id for the object
   * @param updatedColumns
   *         Columns that need to be updated. Input in the form of either columnName -> values or
   *         namespaced column name in case the concept of grouping column by feature exists in the datastore
   *         for example: in HBase namespaced column name will be column_family:column_name
   *         Data types supported for values are -> String, Boolean, Number, ByteBuffer
   * @param removedColums
   *         Columns that need to be removed. Column names are either the name of the column itself or or
   *         namespaced column name in case the concept of grouping column by feature exists in the datastore
   *         for example: in HBase namespaced column name will be column_family:column_name
   * @param spec
   *         More details about the update operation if any
   *
   * @return if the put operation was successful or not. If the engine was not able to write, it will return false
   */
  static put(tableName: string, id: string, updatedColumns?: C3.Map<string | null, any>, removedColumns?: C3.Set<string | null>, spec?: KvStorePutSpec | null): boolean;

  /**
   * Put data in the KvStore. This will not remove any existing columns from the kv row but simply overwrite the columns
   * provided as a part of the KvRow object
   * @param id
   *         Id for the object
   * @param row
   *        KvRow to insert
   * @param spec
   *         More details about the update operation if any
   *
   * @return if the put operation was successful or not. If the engine was not able to write, it will return false
   */
  put(tableName: string, row: KvRow, spec?: KvStorePutSpec | null): boolean;

  /**
   * Put data in the KvStore. This will not remove any existing columns from the kv row but simply overwrite the columns
   * provided as a part of the KvRow object
   * @param id
   *         Id for the object
   * @param row
   *        KvRow to insert
   * @param spec
   *         More details about the update operation if any
   *
   * @return if the put operation was successful or not. If the engine was not able to write, it will return false
   */
  static put(tableName: string, row: KvRow, spec?: KvStorePutSpec | null): boolean;

  /**
   * Put data in multiple rows.
   * data to be put in each row is defined in each element in batch (KvStorePut)
   * @param tableName
   *         Name of the table where data needs to be put
   * @param batch
   *         List of KvStorePut objects. Each KvStorePut object contains the id of the row and the data to be put in that row
   * @param removedRows
   *         List of row ids that need to be removed
   * @param spec
   *         More details about the update operation if any
   */
  putBatch(tableName: string, batch: C3.Array<KvStorePut | null> | null, removedRows?: C3.Set<string | null>, spec?: KvStorePutSpec | null): boolean;

  /**
   * Put data in multiple rows.
   * data to be put in each row is defined in each element in batch (KvStorePut)
   * @param tableName
   *         Name of the table where data needs to be put
   * @param batch
   *         List of KvStorePut objects. Each KvStorePut object contains the id of the row and the data to be put in that row
   * @param removedRows
   *         List of row ids that need to be removed
   * @param spec
   *         More details about the update operation if any
   */
  static putBatch(tableName: string, batch: C3.Array<KvStorePut | null> | null, removedRows?: C3.Set<string | null>, spec?: KvStorePutSpec | null): boolean;

  /**
   * remove columns from the datastore.
   * @param columns
   *         this is a list of column names which can either be column names itself or
   *         namespaced column name in case the concept of grouping column by feature exists in the datastore
   *         for example: in HBase namespaced column name will be column_family:column_name
   */
  removeColumns(table: string, id: string, columns?: C3.Array<string | null>): boolean;

  /**
   * remove columns from the datastore.
   * @param columns
   *         this is a list of column names which can either be column names itself or
   *         namespaced column name in case the concept of grouping column by feature exists in the datastore
   *         for example: in HBase namespaced column name will be column_family:column_name
   */
  static removeColumns(table: string, id: string, columns?: C3.Array<string | null>): boolean;

  /**
   * Remove the object from the store
   */
  remove(tableName: string, id: string): void;

  /**
   * Remove the object from the store
   */
  static remove(tableName: string, id: string): void;

  /**
   * Copies row from srcTableId (srcTableName, srcId) to destTableId (destTableName, destId)
   *
   * @return if the copyRow operation was successful or not. If the engine was not able to write, it will return false
   */
  copyRow(srcTableId: Pair<string | null, string | null>, destTableId: Pair<string | null, string | null>): boolean;

  /**
   * Copies row from srcTableId (srcTableName, srcId) to destTableId (destTableName, destId)
   *
   * @return if the copyRow operation was successful or not. If the engine was not able to write, it will return false
   */
  static copyRow(srcTableId: Pair<string | null, string | null>, destTableId: Pair<string | null, string | null>): boolean;

  /**
   * This is helper function to copy one single source table row to multiple identical new destination table rows of the same content.
   */
  copyRow(srcTableId: Pair<string | null, string | null>, destTableIds?: C3.Array<Pair<string | null, string | null>>): boolean;

  /**
   * This is helper function to copy one single source table row to multiple identical new destination table rows of the same content.
   */
  static copyRow(srcTableId: Pair<string | null, string | null>, destTableIds?: C3.Array<Pair<string | null, string | null>>): boolean;

  /**
   * Copies a batch of rows from the source kvStore table to the destination kvStore table. Each row in the source table
   * and the dest table is determined and found by a pair including the table name and the row Id. This api has a default
   * implementation in KvStore, but may need to be overwritten by special subtypes such as {@KvStore.FileSystem#copyRows}.
   * Note that if some source rows don't exist in kvStore, the `copyRows` will not fail, instead it only copies the existing
   * rows and returns false.
   *
   * @return true if the all the rows are copied successfully, otherwise return false
   */
  copyRows(srcTableIds: C3.Array<Pair<string | null, string | null>>, destTableIds: C3.Array<Pair<string | null, string | null>>): boolean;

  /**
   * Copies a batch of rows from the source kvStore table to the destination kvStore table. Each row in the source table
   * and the dest table is determined and found by a pair including the table name and the row Id. This api has a default
   * implementation in KvStore, but may need to be overwritten by special subtypes such as {@KvStore.FileSystem#copyRows}.
   * Note that if some source rows don't exist in kvStore, the `copyRows` will not fail, instead it only copies the existing
   * rows and returns false.
   *
   * @return true if the all the rows are copied successfully, otherwise return false
   */
  static copyRows(srcTableIds: C3.Array<Pair<string | null, string | null>>, destTableIds: C3.Array<Pair<string | null, string | null>>): boolean;

  /**
   * Remove the rows from the source table as specified by the ids.
   */
  removeBatch(tableName: string, ids: C3.Array<string | null>): void;

  /**
   * Remove the rows from the source table as specified by the ids.
   */
  static removeBatch(tableName: string, ids: C3.Array<string | null>): void;

  /**
   * @return capabilities of this key value store
   */
  capabilities(): KvStoreCapabilities;

  /**
   * @return capabilities of this key value store
   */
  static capabilities(): KvStoreCapabilities;

  /**
   * Synchronize schema for this type
   */
  upsertCollection(tableName: string): void;

  /**
   * Synchronize schema for this type
   */
  static upsertCollection(tableName: string): void;

  /**
   * Remove all entries from the this collection
   */
  clearCollection(tableName: string): void;

  /**
   * Remove all entries from the this collection
   */
  static clearCollection(tableName: string): void;

  /**
   * Delete the table
   */
  deleteCollection(tableName: string, confirm: boolean): void;

  /**
   * Delete the table
   */
  static deleteCollection(tableName: string, confirm: boolean): void;

  /**
   * This private method that accepts an encoded c3id and returns an unencoded C3Id for object
   */
  static fromInternalId(id: string): string | null;

  /**
   * This private method to encoded object Id from unencoded C3 Id
   */
  static toInternalId(id: string): string | null;

  /**
   * This private method to provide partition key prefix for current app
   */
  static partitionKeyPrefix(): string | null;

  /**
   * @return valid c3 instance id from a given unencoded partition key and object key within partition.
   */
  static c3Id(partitionKey?: string | null, key?: string | null): string | null;

  /**
   * @return pair of unencoded partition key and object key within partition from valid c3 instance id.
   */
  static parseC3Id(id?: string | null): Pair<string | null, string | null> | null;

  /**
   * Generate full table name for the given type. This should include column family name along with the keyspace name.
   * E.g. "customer_data.my_table_name" - where `customer_data` is the keyspace name & `my_table_name` is the table name
   * Different kv stores may call different terminology for keyspace & column family name. The above example is for
   * Cassandra kv store. For dynamo db, there is no keyspace name and table name will simply be a unique table name
   * Any kv store specific name constraints can go here.
   * @param typeRef
   *           TypeRef for which table name needs to be generated
   */
  tableName(typeRef: Type): string;

  /**
   * Generate full table name for the given type. This should include column family name along with the keyspace name.
   * E.g. "customer_data.my_table_name" - where `customer_data` is the keyspace name & `my_table_name` is the table name
   * Different kv stores may call different terminology for keyspace & column family name. The above example is for
   * Cassandra kv store. For dynamo db, there is no keyspace name and table name will simply be a unique table name
   * Any kv store specific name constraints can go here.
   * @param typeRef
   *           TypeRef for which table name needs to be generated
   */
  static tableName(typeRef: Type): string;

  /**
   * Generates schema name for the given type. This is typically for {@see Persistable} types where table names are
   * specified via the schema suffix on the type
   */
  static schemaName(typeRef: Type): string;

  /**
   * Retrieve raw row data for the given persistable object. Useful for debugging raw state
   * @param obj
   *        If persistable object contains only the partition key, then the kv row for that partition key will be retrieved.
   *        If persistable object contains id, then KvRow will only contain a single column containing the the object with that id
   * @param include
   *        If specified, will include only the columns on the raw kv row. This should be a comma separated list of string containing exact kv row column names that need to be retrieved e.g. "0,state"
   * @return raw row data for the given obj
   */
  rowData(obj: Persistable, include?: string | null): KvRow | null;

  /**
   * Retrieve raw row data for the given persistable object. Useful for debugging raw state
   * @param obj
   *        If persistable object contains only the partition key, then the kv row for that partition key will be retrieved.
   *        If persistable object contains id, then KvRow will only contain a single column containing the the object with that id
   * @param include
   *        If specified, will include only the columns on the raw kv row. This should be a comma separated list of string containing exact kv row column names that need to be retrieved e.g. "0,state"
   * @return raw row data for the given obj
   */
  static rowData(obj: Persistable, include?: string | null): KvRow | null;

  /**
   * Serialize and put row data in kv row. This will overwrite the existing kv row (if any)
   * **CAUTION** if the objects are partitionable then they should belong for the same partition key
   * @param objs
   *        Objs that need to be serialized and persisted in the kv store
   * @param serType
   *        Type the persistable objects need to be serialized in. If not specified, it will be the type of objs. Can be used
   *        to serialize objects in a columnar format if the
   */
  putRowData(objs: C3.Array<Persistable | null>, serType?: Type | null): void;

  /**
   * Serialize and put row data in kv row. This will overwrite the existing kv row (if any)
   * **CAUTION** if the objects are partitionable then they should belong for the same partition key
   * @param objs
   *        Objs that need to be serialized and persisted in the kv store
   * @param serType
   *        Type the persistable objects need to be serialized in. If not specified, it will be the type of objs. Can be used
   *        to serialize objects in a columnar format if the
   */
  static putRowData(objs: C3.Array<Persistable | null>, serType?: Type | null): void;

  /**
   * @return KvStore instance from the provided config
   */
  static fromConfig(config: KvStoreConfig): KvStore<KvStoreConfig | null> | null;

  /**
   * Ping KvStore instance. Return true if the KvStore instance is available.
   */
  ping(): boolean;

  /**
   * Ping KvStore instance. Return true if the KvStore instance is available.
   */
  static ping(): boolean;

  /**
   * @param kvContentUrl
   *        This url is used to retrieve the kvStore tableName, rowId and columnName for the {@link KvContent} represented by the kvContentUrl. To successfully
   *        return the correct information, the url has to follow the format of **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**.
   * @param failIfInvalid
   *        If set, the api will fail if the input url does not follow the format of **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**, otherwise, return **null**.
   * @return a Tuple containing the tableName, rowId and colName in the same order.
   */
  tableNameRowIdAndCol(kvContentUrl: string, failIfInvalid?: boolean): [tableName: string, rowId: string, colName: string] | null;

  /**
   * @param kvContentUrl
   *        This url is used to retrieve the kvStore tableName, rowId and columnName for the {@link KvContent} represented by the kvContentUrl. To successfully
   *        return the correct information, the url has to follow the format of **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**.
   * @param failIfInvalid
   *        If set, the api will fail if the input url does not follow the format of **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**, otherwise, return **null**.
   * @return a Tuple containing the tableName, rowId and colName in the same order.
   */
  static tableNameRowIdAndCol(kvContentUrl: string, failIfInvalid?: boolean): [tableName: string, rowId: string, colName: string] | null;

  /**
   * Helper function to return the "kvContentUrl" of the KvContent. This "kvContentUrl" has the format **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}** and it is used as the contentLocation
   * of the target KvContent. This "kvContentUrl" can be persisted and used to obtain the right {@link KvStore kvStore}, tableName and rowId of the corresponding {@link KvRow} when needed.
   *
   * @return the "kvContentUrl" of the KvContent with the meta fields equal to the provided {@link KvRowMeta meta-fields}.
   */
  kvContentUrl(store: KvStore<KvStoreConfig | null>, tableName: string, rowId: string, columnName: string): string;

  /**
   * Helper function to return the "kvContentUrl" of the KvContent. This "kvContentUrl" has the format **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}** and it is used as the contentLocation
   * of the target KvContent. This "kvContentUrl" can be persisted and used to obtain the right {@link KvStore kvStore}, tableName and rowId of the corresponding {@link KvRow} when needed.
   *
   * @return the "kvContentUrl" of the KvContent with the meta fields equal to the provided {@link KvRowMeta meta-fields}.
   */
  static kvContentUrl(store: KvStore<KvStoreConfig | null>, tableName: string, rowId: string, columnName: string): string;

  /**
   * @param kvContentUrl
   *        This url is used to get the corresponding KvStore. To successfully return the correct KvStore,
   *        the url has to follow the format of **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**.
   * @param failIfInvalid
   *        If set, the api will fail if the input url does not follow the format of **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**, otherwise, return **null**.
   * @return the correct {@link KvStore} by parsing the {@link #kvContentUrl}.
   */
  storeFromKvUrl(kvContentUrl: string, failIfInvalid?: boolean): KvStore<KvStoreConfig | null>;

  /**
   * @param kvContentUrl
   *        This url is used to get the corresponding KvStore. To successfully return the correct KvStore,
   *        the url has to follow the format of **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**.
   * @param failIfInvalid
   *        If set, the api will fail if the input url does not follow the format of **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**, otherwise, return **null**.
   * @return the correct {@link KvStore} by parsing the {@link #kvContentUrl}.
   */
  static storeFromKvUrl(kvContentUrl: string, failIfInvalid?: boolean): KvStore<KvStoreConfig | null>;

  /**
   * Deletes the contents associated with the given KvContent urls.
   * @param kvContentUrls
   *        The list of KvContent urls for which kvContents will be deleted.
   *        This url is used to get the corresponding KvStore. To successfully return the correct KvStore,
   *        the url has to follow the format of **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**.
   */
  deleteContents(kvContentUrls: C3.Array<string | null> | null): void;

  /**
   * Deletes the contents associated with the given KvContent urls.
   * @param kvContentUrls
   *        The list of KvContent urls for which kvContents will be deleted.
   *        This url is used to get the corresponding KvStore. To successfully return the correct KvStore,
   *        the url has to follow the format of **kv://{kvStoreName}/{tableName}/{rowId}/{columnName}**.
   */
  static deleteContents(kvContentUrls: C3.Array<string | null> | null): void;
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
