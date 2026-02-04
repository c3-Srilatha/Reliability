// TypeScript definitions for the C3 type Cluster

/**
 * Represents C3 Cluster.
 *
 * C3 Cluster consistent of Environments that can be running same or a different [ but compatible ] server software.
 *
 * @see Env
 * @see App
 * @see Server
 *
 * @remarks this represents a value passed to a method that expects an instance of Cluster
 */
declare interface ICluster {

  /**
   * id of this cluster
   */
  id: string;

  /**
   * Metadata of the CloudCluster; when started, started by who, etc
   */
  meta?: ICloudCluster.Meta | null;

  /**
   * Name of the very special Env for this cluster
   *
   * @see #c3Env
   */
  C3_ENV_NAME?: string | null;

  /**
   * Reserved name for a special Cluster for local C3 deployment
   */
  LOCAL_CLUSTER_ID?: string | null;

  /**
   * Reserved name for a special Cluster for C3 CLI
   */
  CLI_CLUSTER_ID?: string | null;

  /**
   * Reserved name for a special Cluster for testing
   */
  TEST_CLUSTER_ID?: string | null;

  /**
   * If true then this cluster will only have a single node that will serve requests and execute jobs for every Env and
   * App in this Cluster
   */
  singleNode?: boolean;
}

/**
 * Represents C3 Cluster.
 *
 * C3 Cluster consistent of Environments that can be running same or a different [ but compatible ] server software.
 *
 * @see Env
 * @see App
 * @see Server
 *
 * @remarks this represents a made instance of Cluster
 */
declare class Cluster extends Obj {

  /**
   * id of this cluster
   */
  readonly id: string;
  withId(id: string): Cluster;

  /**
   * id of this cluster
   */
  static readonly id: string;

  /**
   * Metadata of the CloudCluster; when started, started by who, etc
   */
  readonly meta?: CloudCluster.Meta | null;
  withMeta(meta: ICloudCluster.Meta | null): Cluster;

  /**
   * Metadata of the CloudCluster; when started, started by who, etc
   */
  static readonly meta?: CloudCluster.Meta | null;

  /**
   * Name of the very special Env for this cluster
   *
   * @see #c3Env
   */
  readonly C3_ENV_NAME?: string | null;
  withC3_ENV_NAME(C3_ENV_NAME: string | null): Cluster;

  /**
   * Name of the very special Env for this cluster
   *
   * @see #c3Env
   */
  static readonly C3_ENV_NAME?: string | null;

  /**
   * Reserved name for a special Cluster for local C3 deployment
   */
  readonly LOCAL_CLUSTER_ID?: string | null;
  withLOCAL_CLUSTER_ID(LOCAL_CLUSTER_ID: string | null): Cluster;

  /**
   * Reserved name for a special Cluster for local C3 deployment
   */
  static readonly LOCAL_CLUSTER_ID?: string | null;

  /**
   * Reserved name for a special Cluster for C3 CLI
   */
  readonly CLI_CLUSTER_ID?: string | null;
  withCLI_CLUSTER_ID(CLI_CLUSTER_ID: string | null): Cluster;

  /**
   * Reserved name for a special Cluster for C3 CLI
   */
  static readonly CLI_CLUSTER_ID?: string | null;

  /**
   * Reserved name for a special Cluster for testing
   */
  readonly TEST_CLUSTER_ID?: string | null;
  withTEST_CLUSTER_ID(TEST_CLUSTER_ID: string | null): Cluster;

  /**
   * Reserved name for a special Cluster for testing
   */
  static readonly TEST_CLUSTER_ID?: string | null;

  /**
   * If true then this cluster will only have a single node that will serve requests and execute jobs for every Env and
   * App in this Cluster
   */
  readonly singleNode?: boolean;
  withSingleNode(singleNode: boolean): Cluster;

  /**
   * If true then this cluster will only have a single node that will serve requests and execute jobs for every Env and
   * App in this Cluster
   */
  static readonly singleNode?: boolean;

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
  static fromString(s: string | null): Cluster | null;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): Cluster | null;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Cluster;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Cluster;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Cluster;

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
  static make(fields: any, withDefaults?: boolean): Cluster;

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
  static fromJson(json: any | null): Cluster | null;

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
  static fromJsonString(json: string | null): Cluster | null;

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
  static fromXmlString(xml: string | null): Cluster | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Cluster | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Cluster;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  static replaceType(old: Type, new_: Type): Cluster;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Cluster;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Cluster;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Cluster;

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
  static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Cluster;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Cluster | null>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Cluster | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Cluster | null>;

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
  static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Cluster | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Cluster;

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
  static mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Cluster;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Cluster;

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
  static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Cluster;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Cluster;

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
  static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Cluster;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Cluster;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  static validateObj(): Cluster;

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
  withField(field: string, value: any, doNotConvert?: boolean): Cluster;

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
  static withField(field: string, value: any, doNotConvert?: boolean): Cluster;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): Cluster;

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
  static withField(field: FieldType, value: any, doNotConvert?: boolean): Cluster;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Cluster;

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
  static withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Cluster;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Cluster;

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
  static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Cluster;

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
  withoutFieldAtPath(path: string): Cluster;

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
  static withoutFieldAtPath(path: string): Cluster;

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
  withoutField(field: string | null): Cluster;

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
  static withoutField(field: string | null): Cluster;

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
  withoutField(field: FieldType | null): Cluster;

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
  static withoutField(field: FieldType | null): Cluster;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Cluster;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  static withoutFields(fields: C3.Array<string | null> | null): Cluster;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Cluster;

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
  static withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Cluster;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Cluster;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  static withoutSecretFields(): Cluster;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Cluster;

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
  static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Cluster;

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
  defaultField(field: string): Cluster;

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
  static defaultField(field: string): Cluster;

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
  defaultField(field: FieldType): Cluster;

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
  static defaultField(field: FieldType): Cluster;

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
  unsetField(field: string): Cluster;

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
  static unsetField(field: string): Cluster;

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
  unsetField(field: FieldType): Cluster;

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
  static unsetField(field: FieldType): Cluster;

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
  removeField(field: string): Cluster;

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
  static removeField(field: string): Cluster;

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
  removeField(field: FieldType): Cluster;

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
  static removeField(field: FieldType): Cluster;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Cluster;

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
  static mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Cluster;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Cluster;

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
  static mergeObj(other: Obj | null, otherFieldsFilter: Type): Cluster;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Cluster;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  static mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Cluster;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Cluster;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  static mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Cluster;

  mergeJson(json: any | null): Cluster;

  static mergeJson(json: any | null): Cluster;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Cluster;

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
  static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Cluster;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Cluster;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  static sumObj(other: Obj | null, deep?: boolean): Cluster;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Cluster | null>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonArray(): C3.Array<Cluster | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Cluster | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Cluster | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Cluster | null>;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonSet(): C3.Set<Cluster | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Cluster | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Cluster | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Cluster | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Cluster | null>;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  static toBuilder(): ObjBuilder<Cluster | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Cluster | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Cluster;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Cluster;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Cluster;

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
  afterMake(): Cluster;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static afterMake(): Cluster;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Cluster;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Cluster>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Cluster;

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
   * @return cluster for a given id
   */
  static forId(id: string | null, failIfMissing?: boolean): Cluster | null;

  /**
   * @return current state of this cluster
   */
  state(): string;

  /**
   * @return current state of this cluster
   */
  static state(): string;

  /**
   * @return nodes comprising this cluster; if `refresh` parameter is set then ensures that cluster membership is
   *         up to date.
   */
  nodes(refresh?: boolean, spec?: CloudClusterOpSpec | null): C3.Array<Server | null>;

  /**
   * @return nodes comprising this cluster; if `refresh` parameter is set then ensures that cluster membership is
   *         up to date.
   */
  static nodes(refresh?: boolean, spec?: CloudClusterOpSpec | null): C3.Array<Server | null>;

  /**
   * @return specified node belonging to this cluster. If `failIfMissing` is true and node does not exist, throw an error.
   */
  node(nodeId: string, failIfMissing?: boolean): Server;

  /**
   * @return specified node belonging to this cluster. If `failIfMissing` is true and node does not exist, throw an error.
   */
  static node(nodeId: string, failIfMissing?: boolean): Server;

  /**
   * Represents the state of all individual nodes in this cloud cluster and the last known message reported by those
   * nodes for why the nodes have reached that state.
   *
   * @param refresh
   *         If `refresh` parameter is true, ensure the state of all nodes are up to date.
   * @return mapping of all nodes to their corresponding state
   */
  nodeStates(refresh?: boolean, spec?: CloudClusterOpSpec | null): C3.Map<string | null, [state: string, lastMessage: string | null] | null>;

  /**
   * Represents the state of all individual nodes in this cloud cluster and the last known message reported by those
   * nodes for why the nodes have reached that state.
   *
   * @param refresh
   *         If `refresh` parameter is true, ensure the state of all nodes are up to date.
   * @return mapping of all nodes to their corresponding state
   */
  static nodeStates(refresh?: boolean, spec?: CloudClusterOpSpec | null): C3.Map<string | null, [state: string, lastMessage: string | null] | null>;

  /**
   * Function to execute logic on all nodes in this cluster.
   *
   * @param action
   *         Lambda expression used to execute logic on each {@link CloudCluster.Node}
   * @return map of node id to action result for that node
   */
  mapNodeToAny(action: λFunction<Server | null, T | null>): C3.Map<string | null, T | null>;

  /**
   * Function to execute logic on all nodes in this cluster.
   *
   * @param action
   *         Lambda expression used to execute logic on each {@link CloudCluster.Node}
   * @return map of node id to action result for that node
   */
  static mapNodeToAny(action: λFunction<Server | null, T | null>): C3.Map<string | null, T | null>;

  /**
   * @return the default instance to be used when member functions are called on this type. E.g.
   *         FileSystem.inst() should return a default file system. It is up to implementation to decide if default
   *         instance is a singleton or not.
   */
  static inst(): Cluster;

  /**
   * @return all C3 envs that this cluster consists of; if `refresh` parameter is set then ensures that cluster
   *         membership is up to date, otherwise last known state is returned.
   */
  envs(refresh?: boolean): C3.Array<Env | null>;

  /**
   * @return all C3 envs that this cluster consists of; if `refresh` parameter is set then ensures that cluster
   *         membership is up to date, otherwise last known state is returned.
   */
  static envs(refresh?: boolean): C3.Array<Env | null>;

  /**
   * Broadcasts the given action (from the current App context) to all nodes in the given Cluster.
   */
  callInAllEnvs(type: string, action: string, thisArg: any | null, args?: any | null, retrySpec?: RetrySpec | null, timeoutSpec?: TimeoutSpec | null): BatchError | null;

  /**
   * Broadcasts the given action (from the current App context) to all nodes in the given Cluster.
   */
  static callInAllEnvs(type: string, action: string, thisArg: any | null, args?: any | null, retrySpec?: RetrySpec | null, timeoutSpec?: TimeoutSpec | null): BatchError | null;

  /**
   * @return C3 env for a given name or id; on cache-miss refreshes membership and tries again
   */
  env(envNameOrId: string | null, failIfMissing?: boolean): Env | null;

  /**
   * @return C3 env for a given name or id; on cache-miss refreshes membership and tries again
   */
  static env(envNameOrId: string | null, failIfMissing?: boolean): Env | null;

  /**
   * @return all apps in all environments that this cluster is serving
   */
  apps(refresh?: boolean): C3.Array<App | null>;

  /**
   * @return all apps in all environments that this cluster is serving
   */
  static apps(refresh?: boolean): C3.Array<App | null>;

  /**
   * A very special env in this cluster that is providing management APIs and load balancing requests to other envs etc.
   */
  get c3Env(): Env;

  /**
   * A very special env in this cluster that is providing management APIs and load balancing requests to other envs etc.
   */
  static get c3Env(): Env;

  /**
   * A very special app in this cluster that is providing management APIs and load balancing requests to other envs etc.
   */
  get c3App(): App;

  /**
   * A very special app in this cluster that is providing management APIs and load balancing requests to other envs etc.
   */
  static get c3App(): App;

  /**
   * @return default / first cluster aka canonical AppUrl for this cluster; any environment and app in this cluster is
   *         accessible via this url
   */
  get url(): AppUrl;

  /**
   * @return default / first cluster aka canonical AppUrl for this cluster; any environment and app in this cluster is
   *         accessible via this url
   */
  static get url(): AppUrl;

  /**
   * @return all {@link AppUrl}s under this Cluster
   */
  get urls(): C3.Array<AppUrl | null>;

  /**
   * @return all {@link AppUrl}s under this Cluster
   */
  static get urls(): C3.Array<AppUrl | null>;

  /**
   * @return all cluster urls in this Cluster;
   *         any {@link Env} and {@link App} in the cluster is accessible via this url
   */
  get clusterUrls(): C3.Array<AppUrl | null>;

  /**
   * @return all cluster urls in this Cluster;
   *         any {@link Env} and {@link App} in the cluster is accessible via this url
   */
  static get clusterUrls(): C3.Array<AppUrl | null>;

  /**
   * @return all environment urls in this Cluster;
   *         any {@link App} belonging to the respective {@link Env} this url is for is accessible via this url;
   *         the single Env this url is for is accessible via this url;
   */
  get envUrls(): C3.Array<AppUrl | null>;

  /**
   * @return all environment urls in this Cluster;
   *         any {@link App} belonging to the respective {@link Env} this url is for is accessible via this url;
   *         the single Env this url is for is accessible via this url;
   */
  static get envUrls(): C3.Array<AppUrl | null>;

  /**
   * @return all vanity urls in this Cluster;
   *         the single {@link App} this url is for is accessible via this url
   */
  get vanityUrls(): C3.Array<AppUrl | null>;

  /**
   * @return all vanity urls in this Cluster;
   *         the single {@link App} this url is for is accessible via this url
   */
  static get vanityUrls(): C3.Array<AppUrl | null>;

  /**
   * Summary of this {@link Cluster}
   */
  summary(spec?: Cluster.SummarySpec | null): Cluster.Summary | null;

  /**
   * Summary of this {@link Cluster}
   */
  static summary(spec?: Cluster.SummarySpec | null): Cluster.Summary | null;

  /**
   * @return true if this Cluster is a local C3 deployment
   */
  isLocal(): boolean;

  /**
   * @return true if this Cluster is a local C3 deployment
   */
  static isLocal(): boolean;

  /**
   * @return true if this Cluster is for C3 CLIs
   */
  isCli(): boolean;

  /**
   * @return true if this Cluster is for C3 CLIs
   */
  static isCli(): boolean;

  /**
   * @return true if this Cluster is for testing
   */
  isTest(): boolean;

  /**
   * @return true if this Cluster is for testing
   */
  static isTest(): boolean;

  /**
   * @return true if it is a local cluster configured with access to a K8s control plane that
   * can be used for a {@link CloudService}
   */
  isLocalK8s(): boolean;

  /**
   * @return true if it is a local cluster configured with access to a K8s control plane that
   * can be used for a {@link CloudService}
   */
  static isLocalK8s(): boolean;

  /**
   * Create the Env instance if it does not exist
   *
   * @param spec
   *           Specifications for an Env.
   * @return created or restarted Env instance
   *
   * @see Cluster.StartEnvSpec#minimalInfra
   * @see Cluster.StartEnvSpec#singleNode
   */
  startEnv(spec: Cluster.StartEnvSpec): Env;

  /**
   * Create the Env instance if it does not exist
   *
   * @param spec
   *           Specifications for an Env.
   * @return created or restarted Env instance
   *
   * @see Cluster.StartEnvSpec#minimalInfra
   * @see Cluster.StartEnvSpec#singleNode
   */
  static startEnv(spec: Cluster.StartEnvSpec): Env;

  /**
   * Stop Environment by shutting down underlying infrastructure to bare minimum with expectation that on call to
   * #startEnv Environment can be brought back to fully operation state.
   *
   * @param env
   *         Env to be stopped.
   * @return updated Env state
   */
  stopEnv(env: Env): Env;

  /**
   * Stop Environment by shutting down underlying infrastructure to bare minimum with expectation that on call to
   * #startEnv Environment can be brought back to fully operation state.
   *
   * @param env
   *         Env to be stopped.
   * @return updated Env state
   */
  static stopEnv(env: Env): Env;

  /**
   * Stop Environment by shutting down underlying infrastructure to bare minimum with expectation that on call to
   * #startEnv Environment can be brought back to fully operation state.
   *
   * @param envId
   *         Id of the Env to be stopped.
   * @return updated Env state
   */
  stopEnvById(envId: string): Env;

  /**
   * Stop Environment by shutting down underlying infrastructure to bare minimum with expectation that on call to
   * #startEnv Environment can be brought back to fully operation state.
   *
   * @param envId
   *         Id of the Env to be stopped.
   * @return updated Env state
   */
  static stopEnvById(envId: string): Env;

  /**
   * Restarts the environment if it exists and brings it into an operational state as defined by spec.
   *
   * @param env
   *         Env to be restarted.
   * @return updated Env state
   */
  resumeEnv(env: Env): Env;

  /**
   * Restarts the environment if it exists and brings it into an operational state as defined by spec.
   *
   * @param env
   *         Env to be restarted.
   * @return updated Env state
   */
  static resumeEnv(env: Env): Env;

  /**
   * Restarts the environment if it exists and brings it into an operational state as defined by spec.
   *
   * @param envId
   *         Id of the Env to be restarted.
   * @return updated Env state
   */
  resumeEnvById(envId: string): Env;

  /**
   * Restarts the environment if it exists and brings it into an operational state as defined by spec.
   *
   * @param envId
   *         Id of the Env to be restarted.
   * @return updated Env state
   */
  static resumeEnvById(envId: string): Env;

  /**
   * Hibernates the whole cluster except the {@link env}s and {@link app}s present in the exclusion list.
   * The call can only be made from the c3 {@link env}'s c3 {@link app}
   *
   * @return {@link BatchError} object with any errors that may have occurred
   */
  stop(): BatchError;

  /**
   * Hibernates the whole cluster except the {@link env}s and {@link app}s present in the exclusion list.
   * The call can only be made from the c3 {@link env}'s c3 {@link app}
   *
   * @return {@link BatchError} object with any errors that may have occurred
   */
  static stop(): BatchError;

  /**
   * Wakes up all the hibernated {@link env}s and {@link app}s except those present in the exclusion list.
   * The call can only be made from the c3 {@link env}'s c3 {@link app}
   *
   * @return {@link BatchError} object with any errors that may have occurred
   */
  resume(): BatchError;

  /**
   * Wakes up all the hibernated {@link env}s and {@link app}s except those present in the exclusion list.
   * The call can only be made from the c3 {@link env}'s c3 {@link app}
   *
   * @return {@link BatchError} object with any errors that may have occurred
   */
  static resume(): BatchError;

  /**
   * Abort and terminate Environment.
   *
   * @param env
   *         Env to be terminated.
   * @param confirm
   *         Confirmation from user that they understand and confirm deletion of this Env and all of its Apps.
   * @return updated Env state
   */
  terminateEnv(env: Env, confirm?: boolean): Env;

  /**
   * Abort and terminate Environment.
   *
   * @param env
   *         Env to be terminated.
   * @param confirm
   *         Confirmation from user that they understand and confirm deletion of this Env and all of its Apps.
   * @return updated Env state
   */
  static terminateEnv(env: Env, confirm?: boolean): Env;

  /**
   * Abort and terminate Environment.
   *
   * @param envId
   *         Id of the Env to be terminated.
   * @param confirm
   *         Confirmation from user that they understand and confirm deletion of this Env and all of its Apps.
   * @return updated Env state
   */
  terminateEnvById(envId: string, confirm?: boolean): Env;

  /**
   * Abort and terminate Environment.
   *
   * @param envId
   *         Id of the Env to be terminated.
   * @param confirm
   *         Confirmation from user that they understand and confirm deletion of this Env and all of its Apps.
   * @return updated Env state
   */
  static terminateEnvById(envId: string, confirm?: boolean): Env;

  /**
   * Forcefully Abort and terminate Env and delete all the app's data on a best effort basis
   *
   * @param env
   *         Env to be force terminated.
   * @param confirm
   *         Confirmation from user that they understand and confirm force deletion of this Env and all of its Apps.
   * @return {@link BatchError} object with any errors that may have occurred
   */
  forceTerminateEnv(env: Env, confirm?: boolean): BatchError | null;

  /**
   * Forcefully Abort and terminate Env and delete all the app's data on a best effort basis
   *
   * @param env
   *         Env to be force terminated.
   * @param confirm
   *         Confirmation from user that they understand and confirm force deletion of this Env and all of its Apps.
   * @return {@link BatchError} object with any errors that may have occurred
   */
  static forceTerminateEnv(env: Env, confirm?: boolean): BatchError | null;

  /**
   * Forcefully Abort and terminate Env and delete all the app's data on a best effort basis
   *
   * @param envId
   *         Id of the Env to be force terminated.
   * @param confirm
   *         Confirmation from user that they understand and confirm force deletion of this Env and all of its Apps.
   * @return {@link BatchError} object with any errors that may have occurred
   */
  forceTerminateEnvById(envId: string, confirm?: boolean): BatchError | null;

  /**
   * Forcefully Abort and terminate Env and delete all the app's data on a best effort basis
   *
   * @param envId
   *         Id of the Env to be force terminated.
   * @param confirm
   *         Confirmation from user that they understand and confirm force deletion of this Env and all of its Apps.
   * @return {@link BatchError} object with any errors that may have occurred
   */
  static forceTerminateEnvById(envId: string, confirm?: boolean): BatchError | null;

  /**
   * Resets all configs & secrets for the specified env at the {@link ConfigOverride#ENV} level or lower.
   *
   * @param envId
   *         The env ID for which to reset configs
   * @param confirm
   *         Confirmation from user that they understand and confirm deletion of configs and secrets.
   * @return 'true' if deletion was successful
   */
  static clearAllEnvAppAndUserConfig(envId: string, confirm?: boolean): boolean;

  /**
   * Clears config keys for an env.
   */
  static clearEnvConfigKey(envId: string): void;

  /**
   * Restart all envs in this Cluster
   *
   * @param skipSelf
   *        A boolean flag. Set to true to skip restarting self: the node the command runs on.
   * @return {@link BatchError} object with any errors occurred during the restart
   */
  restartEnvs(skipSelf?: boolean): BatchError | null;

  /**
   * Restart all envs in this Cluster
   *
   * @param skipSelf
   *        A boolean flag. Set to true to skip restarting self: the node the command runs on.
   * @return {@link BatchError} object with any errors occurred during the restart
   */
  static restartEnvs(skipSelf?: boolean): BatchError | null;

  /**
   * @return cloud provider this cluster is running in
   */
  get cloudProvider(): CloudProvider;

  /**
   * @return cloud provider this cluster is running in
   */
  static get cloudProvider(): CloudProvider;

  /**
   * @return Cluster.Membership service for this Cluster
   */
  membership(): Cluster.Membership;

  /**
   * @return Cluster.Membership service for this Cluster
   */
  static membership(): Cluster.Membership;

  /**
   * Fetches and returns {@link CloudResource}s belonging to this {@link Cluster}, but not belonging to any currently running {@link App} within it.
   * @param parentCloudResourceType
   *         Parent C3 Type whose subtypes are listed. It will need to be {@link CloudResource} or any of its subtypes.
   *         If none is provided, then {@link K8sResource}s are returned.
   * @param externalResources
   *         If true, then {@link CloudResource}s that do not have the base {@link CloudTagKey.CLUSTER},
   *         {@link CloudTagKey.ENV_ID} and {@link CloudTagKey.APP_ID} tags are also taken into consideration.
   * @return orphaned {@link CloudResource}s
   */
  orphanResources(parentCloudResourceType?: Type | null, externalResources?: boolean): C3.Map<string | null, C3.Array<CloudResource | null>>;

  /**
   * Fetches and returns {@link CloudResource}s belonging to this {@link Cluster}, but not belonging to any currently running {@link App} within it.
   * @param parentCloudResourceType
   *         Parent C3 Type whose subtypes are listed. It will need to be {@link CloudResource} or any of its subtypes.
   *         If none is provided, then {@link K8sResource}s are returned.
   * @param externalResources
   *         If true, then {@link CloudResource}s that do not have the base {@link CloudTagKey.CLUSTER},
   *         {@link CloudTagKey.ENV_ID} and {@link CloudTagKey.APP_ID} tags are also taken into consideration.
   * @return orphaned {@link CloudResource}s
   */
  static orphanResources(parentCloudResourceType?: Type | null, externalResources?: boolean): C3.Map<string | null, C3.Array<CloudResource | null>>;
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
