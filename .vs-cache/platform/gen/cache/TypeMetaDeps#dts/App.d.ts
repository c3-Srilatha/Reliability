// TypeScript definitions for the C3 type App

/**
 * Represents a C3 Application.
 *
 * @see Cluster
 * @see Env
 *
 * @remarks this represents a value passed to a method that expects an instance of App
 */
declare interface IApp {

  /**
   * Tags that serve as arbitrary metadata attached to the object of a type
   */
  tags?: C3.Map<string | null, any> | {[key: string | null]: any};

  label?: string | null;

  rootPkg?: string | null;

  rootPkgVersion?: string | null;

  /**
   * This defines what pkg contents are available for App and how pkg content can modified. see {@link AppMode} options.
   */
  mode?: string | null;

  /**
   * Id of this application
   * The Application id uniquely identifies the Application within a Cluster.
   * The Application id is composed by concatenating the Cluster ID, the Environment name
   * (which is unique within a Cluster) and the Application name
   * Application id should:
   * 1. Not exceed exceed 63 characters
   * 2. only contain lowercase alphanumeric values or `-`
   * E.g. acme-dev-crm (cluster-env-app)
   */
  id: string;

  /**
   * Metadata of the CloudCluster; when started, started by who, etc
   */
  meta?: ICloudCluster.Meta | null;

  configOverride?: string | null;

  secretOverride?: string | null;

  /**
   * Captures any issues that occurred while deserializing from filesystem
   */
  issues?: C3.Array<string | null> | Array<string | null>;

  /**
   * The Application name is a human readable way to identify an application within an Environment.
   * The name must be unique within the Environment, it is not possible to have two Applications with the same name
   * in the same Environment. Two Applications can have the same name if they belong to different Environments.
   * The Application name is a component of the Application id and may contain only lower case alphanumeric
   * characters ([a-z0-9]+).
   */
  name: string;

  DEV_APP_ROOT_PKG?: string | null;

  /**
   * An integer code of this App that is unique within a Cluster
   */
  code: number;

  /**
   * A list of all the running cloud services endpoints
   */
  cloudServiceUrls?: C3.Array<CloudServiceUrl | null> | Array<ICloudServiceUrl | null>;

  /**
   * Semantic Server Version that was configured for this App
   */
  configuredServerVersion: string;
}

/**
 * Represents a C3 Application.
 *
 * @see Cluster
 * @see Env
 *
 * @remarks this represents a made instance of App
 */
declare class App extends Obj {

  /**
   * Tags that serve as arbitrary metadata attached to the object of a type
   */
  readonly tags?: C3.Map<string | null, any>;
  withTags(tags: C3.Map<string | null, any> | {[key: string | null]: any}): App;

  /**
   * Tags that serve as arbitrary metadata attached to the object of a type
   */
  static readonly tags?: C3.Map<string | null, any>;

  readonly label?: string | null;
  withLabel(label: string | null): App;

  static readonly label?: string | null;

  readonly rootPkg?: string | null;
  withRootPkg(rootPkg: string | null): App;

  static readonly rootPkg?: string | null;

  readonly rootPkgVersion?: string | null;
  withRootPkgVersion(rootPkgVersion: string | null): App;

  static readonly rootPkgVersion?: string | null;

  /**
   * This defines what pkg contents are available for App and how pkg content can modified. see {@link AppMode} options.
   */
  readonly mode?: string | null;
  withMode(mode: string | null): App;

  /**
   * This defines what pkg contents are available for App and how pkg content can modified. see {@link AppMode} options.
   */
  static readonly mode?: string | null;

  /**
   * Id of this application
   * The Application id uniquely identifies the Application within a Cluster.
   * The Application id is composed by concatenating the Cluster ID, the Environment name
   * (which is unique within a Cluster) and the Application name
   * Application id should:
   * 1. Not exceed exceed 63 characters
   * 2. only contain lowercase alphanumeric values or `-`
   * E.g. acme-dev-crm (cluster-env-app)
   */
  readonly id: string;
  withId(id: string): App;

  /**
   * Id of this application
   * The Application id uniquely identifies the Application within a Cluster.
   * The Application id is composed by concatenating the Cluster ID, the Environment name
   * (which is unique within a Cluster) and the Application name
   * Application id should:
   * 1. Not exceed exceed 63 characters
   * 2. only contain lowercase alphanumeric values or `-`
   * E.g. acme-dev-crm (cluster-env-app)
   */
  static readonly id: string;

  /**
   * Metadata of the CloudCluster; when started, started by who, etc
   */
  readonly meta?: CloudCluster.Meta | null;
  withMeta(meta: ICloudCluster.Meta | null): App;

  /**
   * Metadata of the CloudCluster; when started, started by who, etc
   */
  static readonly meta?: CloudCluster.Meta | null;

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): App;

  static readonly configOverride?: string | null;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): App;

  static readonly secretOverride?: string | null;

  /**
   * Captures any issues that occurred while deserializing from filesystem
   */
  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): App;

  /**
   * Captures any issues that occurred while deserializing from filesystem
   */
  static readonly issues?: C3.Array<string | null>;

  /**
   * The Application name is a human readable way to identify an application within an Environment.
   * The name must be unique within the Environment, it is not possible to have two Applications with the same name
   * in the same Environment. Two Applications can have the same name if they belong to different Environments.
   * The Application name is a component of the Application id and may contain only lower case alphanumeric
   * characters ([a-z0-9]+).
   */
  readonly name: string;
  withName(name: string): App;

  /**
   * The Application name is a human readable way to identify an application within an Environment.
   * The name must be unique within the Environment, it is not possible to have two Applications with the same name
   * in the same Environment. Two Applications can have the same name if they belong to different Environments.
   * The Application name is a component of the Application id and may contain only lower case alphanumeric
   * characters ([a-z0-9]+).
   */
  static readonly name: string;

  readonly DEV_APP_ROOT_PKG?: string | null;
  withDEV_APP_ROOT_PKG(DEV_APP_ROOT_PKG: string | null): App;

  static readonly DEV_APP_ROOT_PKG?: string | null;

  /**
   * An integer code of this App that is unique within a Cluster
   */
  readonly code: number;
  withCode(code: number): App;

  /**
   * An integer code of this App that is unique within a Cluster
   */
  static readonly code: number;

  /**
   * A list of all the running cloud services endpoints
   */
  readonly cloudServiceUrls?: C3.Array<CloudServiceUrl | null>;
  withCloudServiceUrls(cloudServiceUrls: C3.Array<CloudServiceUrl | null> | Array<ICloudServiceUrl | null>): App;

  /**
   * A list of all the running cloud services endpoints
   */
  static readonly cloudServiceUrls?: C3.Array<CloudServiceUrl | null>;

  /**
   * Semantic Server Version that was configured for this App
   */
  readonly configuredServerVersion: string;
  withConfiguredServerVersion(configuredServerVersion: string): App;

  /**
   * Semantic Server Version that was configured for this App
   */
  static readonly configuredServerVersion: string;

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
  static fromJson(json: any | null): App | null;

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
  static fromJsonString(json: string | null): App | null;

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
  static fromXmlString(xml: string | null): App | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): App | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): App;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  static replaceType(old: Type, new_: Type): App;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): App;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): App;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): App;

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
  static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): App;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<App | null>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<App | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<App | null>;

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
  static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<App | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): App;

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
  static mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): App;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): App;

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
  static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): App;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): App;

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
  static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): App;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): App;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  static validateObj(): App;

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
  withField(field: string, value: any, doNotConvert?: boolean): App;

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
  static withField(field: string, value: any, doNotConvert?: boolean): App;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): App;

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
  static withField(field: FieldType, value: any, doNotConvert?: boolean): App;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): App;

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
  static withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): App;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): App;

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
  static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): App;

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
  withoutFieldAtPath(path: string): App;

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
  static withoutFieldAtPath(path: string): App;

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
  withoutField(field: string | null): App;

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
  static withoutField(field: string | null): App;

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
  withoutField(field: FieldType | null): App;

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
  static withoutField(field: FieldType | null): App;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): App;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  static withoutFields(fields: C3.Array<string | null> | null): App;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): App;

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
  static withoutFieldsByType(fields: C3.Array<FieldType | null> | null): App;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): App;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  static withoutSecretFields(): App;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): App;

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
  static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): App;

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
  defaultField(field: string): App;

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
  static defaultField(field: string): App;

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
  defaultField(field: FieldType): App;

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
  static defaultField(field: FieldType): App;

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
  unsetField(field: string): App;

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
  static unsetField(field: string): App;

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
  unsetField(field: FieldType): App;

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
  static unsetField(field: FieldType): App;

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
  removeField(field: string): App;

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
  static removeField(field: string): App;

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
  removeField(field: FieldType): App;

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
  static removeField(field: FieldType): App;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): App;

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
  static mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): App;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): App;

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
  static mergeObj(other: Obj | null, otherFieldsFilter: Type): App;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): App;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  static mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): App;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): App;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  static mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): App;

  mergeJson(json: any | null): App;

  static mergeJson(json: any | null): App;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): App;

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
  static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): App;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): App;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  static sumObj(other: Obj | null, deep?: boolean): App;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<App | null>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonArray(): C3.Array<App | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<App | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<App | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<App | null>;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonSet(): C3.Set<App | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<App | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, App | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, App | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<App | null>;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  static toBuilder(): ObjBuilder<App | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<App | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): App;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): App;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): App;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): App;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): App;

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
  static make(fields: any, withDefaults?: boolean): App;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): App | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): App;

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
  afterMake(): App;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static afterMake(): App;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): App;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<App>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): App;

  /**
   * Adds a tag to this App
   * @param key
   *         key of the tag to add
   * @param value
   *         value of the tag to add
   * @return this App
   */
  addTag(key?: string | null, value?: any): App | null;

  /**
   * Adds a tag to this App
   * @param key
   *         key of the tag to add
   * @param value
   *         value of the tag to add
   * @return this App
   */
  static addTag(key?: string | null, value?: any): App | null;

  /**
   * Removes a tag from this App
   * @param key
   *         key of the tag to remove
   * @return this App
   */
  removeTag(key?: string | null): App | null;

  /**
   * Removes a tag from this App
   * @param key
   *         key of the tag to remove
   * @return this App
   */
  static removeTag(key?: string | null): App | null;

  evalAppMetrics(spec: App.Metric.EvaluatableSpec): EvalMetricsResult | null;

  static evalAppMetrics(spec: App.Metric.EvaluatableSpec): EvalMetricsResult | null;

  /**
   * Evaluates the {@link App.Metric.Container.Summary} with the provided {@link #partialSpec} and returns its results.
   * The summaries are useful if needing to easily bind a description to the output.
   */
  evalAppMetricContainerSummary(summary?: App.Metric.Container.Summary | null, partialSpec?: App.Metric.EvaluatableSpec.Partial | null): App.Metric.Container.Summary.Result | null;

  /**
   * Evaluates the {@link App.Metric.Container.Summary} with the provided {@link #partialSpec} and returns its results.
   * The summaries are useful if needing to easily bind a description to the output.
   */
  static evalAppMetricContainerSummary(summary?: App.Metric.Container.Summary | null, partialSpec?: App.Metric.EvaluatableSpec.Partial | null): App.Metric.Container.Summary.Result | null;

  /**
   * @see #evalAppMetrics
   * Hidden behind cluster admin because it accepts `cluster`, `env`, `app` variables as is and allows
   * for ability to query about any {@link App}. Executes the evaluation inside the calling {@link App}, which
   * may be different than the {@link App} under instrospection.
   */
  static doEvalAppMetrics(spec: App.Metric.EvaluatableSpec): EvalMetricsResult | null;

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
  static fromString(s: string | null): App | null;

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
   * @return application for a given id
   */
  static forId(id: string | null, failIfMissing?: boolean): App | null;

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
   * Represents the state of all individual nodes for all {@link App.NodePool}s in this App, along with the
   * {@link Server#lastMessage} reported by those nodes for why the nodes have reached that state.
   */
  nodeStates(refresh?: boolean, spec?: CloudClusterOpSpec | null): C3.Map<string | null, [state: string, lastMessage: string | null] | null>;

  /**
   * Represents the state of all individual nodes for all {@link App.NodePool}s in this App, along with the
   * {@link Server#lastMessage} reported by those nodes for why the nodes have reached that state.
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
  static allCached(doNotProduceAll?: boolean): Stream<App | null>;

  /**
   * @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return existing instances of this type that satisfy filter from data cache.
   */
  static find(filter?: string | null, doNotProduceAll?: boolean): Stream<App | null>;

  /**
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return existing instances of this type that satisfy filter from data cache.
   */
  static findBy(field: string, value: any, doNotProduceAll?: boolean): Stream<App | null>;

  /**
   * @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
   *
   * @see forCacheKey
   * @see getCached
   */
  static findByCacheKey(key: string): App | null;

  /**
   * Returns cached instance by key, with secrets removed.
   */
  static forCacheKey(key: string | null): App | null;

  /**
   * @return cached instance.
   *
   * @see forCacheKey
   * @see findByCacheKey
   */
  getCached(): App | null;

  /**
   * @return cached instance.
   *
   * @see forCacheKey
   * @see findByCacheKey
   */
  static getCached(): App | null;

  /**
   * @return newly produced cached instance.
   */
  refreshCache(): App | null;

  /**
   * @return newly produced cached instance.
   */
  static refreshCache(): App | null;

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
  static produce(key: string): App | null;

  /**
   * Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
   */
  static produceAll(): C3.Map<string | null, App | null>;

  /**
   * Override for sub-types to produce all values.
   */
  static doProduceAll(): C3.Map<string | null, App | null>;

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
   * Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
   * configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#config instead of this method.
   */
  getConfig(): App;

  /**
   * Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
   * configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#config instead of this method.
   */
  static getConfig(): App;

  /**
   * @return cached config value for the provided field path if set or `null` or error otherwise depending on
   *         `failIfMissing`; note that will not return secret value.
   */
  configValue(path: string, failIfMissing?: boolean): any;

  /**
   * @return cached config value for the provided field path if set or `null` or error otherwise depending on
   *         `failIfMissing`; note that will not return secret value.
   */
  static configValue(path: string, failIfMissing?: boolean): any;

  /**
   * Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
   * is required. For Nameable configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
   */
  getSecret(): App;

  /**
   * Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
   * is required. For Nameable configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
   */
  static getSecret(): App;

  /**
   * @return cached secret value for the provided field path in this Config object or `null` if not set or error
   *         depending on `failIfMissing`.
   */
  secretValue(path: string, failIfMissing?: boolean): any;

  /**
   * @return cached secret value for the provided field path in this Config object or `null` if not set or error
   *         depending on `failIfMissing`.
   */
  static secretValue(path: string, failIfMissing?: boolean): any;

  /**
   * Reads and url decodes the content at the path.
   * Path must represent a string value.
   */
  decodedValue(path: string, failIfMissing?: boolean): string | null;

  /**
   * Reads and url decodes the content at the path.
   * Path must represent a string value.
   */
  static decodedValue(path: string, failIfMissing?: boolean): string | null;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.USER level.
   */
  isUserOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.USER level.
   */
  static isUserOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.APP level.
   */
  isAppOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.APP level.
   */
  static isAppOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
   */
  isClusterOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
   */
  static isClusterOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ENV level.
   */
  isEnvOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ENV level.
   */
  static isEnvOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
   */
  isRootOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
   */
  static isRootOverride(): boolean;

  /**
   * @return `true` if this configuration has not been set and comes from seed / defaults.
   */
  isSeed(): boolean;

  /**
   * @return `true` if this configuration has not been set and comes from seed / defaults.
   */
  static isSeed(): boolean;

  /**
   * @return `true` if provided path is a secret.
   */
  static isSecret(path: string): boolean;

  /**
   *  @return config key for this instance. The config key is a unique identifier for an instance of a config type.
   *  The config key varies based on whether the config is defined with:
   *     1. {@link Ann.Config#subfolder}
   *         In this case, the name of the subfolder will be included.
   *     2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
   *         In this case, the ID of the {@link User} will be included.
   *     3. mixes in {@link Named} or {@link Identified}
   * In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
   * the name of the config subtype will be used.
   *
   *  The config key includes the above three fields delimited by '/':
   *     {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
   *  ```
   *  | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
   *  |-------------------|---------------------|-------------------|-----------------------------|
   *  |       no          |         no          |        no         |           MyConfType        |
   *  |       yes         |         no          |        no         |       myUserId/MyConfType   |
   *  |       no          |         yes         |        no         |             abc             |
   *  |       no          |         no          |        yes        |      folder1/MyConfType     |
   *  |       no          |         yes         |        yes        |          folder1/abc        |
   *  |       yes         |         yes         |        no         |          myUserId/abc       |
   *  |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
   *  |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
   *  ```
   *  Note that the config key is a computed value and is not set-able.
   *  For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
   */
  configKey(): string | null;

  /**
   *  @return config key for this instance. The config key is a unique identifier for an instance of a config type.
   *  The config key varies based on whether the config is defined with:
   *     1. {@link Ann.Config#subfolder}
   *         In this case, the name of the subfolder will be included.
   *     2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
   *         In this case, the ID of the {@link User} will be included.
   *     3. mixes in {@link Named} or {@link Identified}
   * In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
   * the name of the config subtype will be used.
   *
   *  The config key includes the above three fields delimited by '/':
   *     {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
   *  ```
   *  | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
   *  |-------------------|---------------------|-------------------|-----------------------------|
   *  |       no          |         no          |        no         |           MyConfType        |
   *  |       yes         |         no          |        no         |       myUserId/MyConfType   |
   *  |       no          |         yes         |        no         |             abc             |
   *  |       no          |         no          |        yes        |      folder1/MyConfType     |
   *  |       no          |         yes         |        yes        |          folder1/abc        |
   *  |       yes         |         yes         |        no         |          myUserId/abc       |
   *  |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
   *  |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
   *  ```
   *  Note that the config key is a computed value and is not set-able.
   *  For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
   */
  static configKey(): string | null;

  /**
   * @return return cached config instance for provided config key.
   */
  static forConfigKey(configKey: string | null): App | null;

  /**
   * @return stream of all available Config keys for this type; #forConfigKey can be used to look up Config instance.
   */
  static listConfigKeys(): Stream<string | null>;

  /**
   * @param
   *
   * @return stream of all available Config instances for this type.
   */
  static listConfigs(parallel?: boolean, filter?: λPredicate<string> | null): Stream<App | null>;

  /**
   * @return all config template values by override.
   */
  allConfigValueOverrides(path: string): C3.Map<string | null, any | null>;

  /**
   * @return all config template values by override.
   */
  static allConfigValueOverrides(path: string): C3.Map<string | null, any | null>;

  /**
   * @return all config template jsons by override.
   */
  allConfigOverrides(): C3.Map<string | null, any | null>;

  /**
   * @return all config template jsons by override.
   */
  static allConfigOverrides(): C3.Map<string | null, any | null>;

  /**
   * @return all secret template values by override.
   */
  allSecretValueOverrides(path: string): C3.Map<string | null, any | null>;

  /**
   * @return all secret template values by override.
   */
  static allSecretValueOverrides(path: string): C3.Map<string | null, any | null>;

  /**
   * @return all secret templates by override.
   */
  allSecretOverrides(): C3.Map<string | null, any | null>;

  /**
   * @return all secret templates by override.
   */
  static allSecretOverrides(): C3.Map<string | null, any | null>;

  /**
   * Sets configuration field value at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  setConfigValue(path: string, value: any, override?: string | null, embeddedFileName?: string | null): void;

  /**
   * Sets configuration field value at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  static setConfigValue(path: string, value: any, override?: string | null, embeddedFileName?: string | null): void;

  /**
   * Sets multiple field values to those specified in the map. The map keys are the paths.
   * @see setConfigValue
   */
  setConfigValues(from: C3.Map<string, any>, override?: string | null): void;

  /**
   * Sets multiple field values to those specified in the map. The map keys are the paths.
   * @see setConfigValue
   */
  static setConfigValues(from: C3.Map<string, any>, override?: string | null): void;

  /**
   * Sets multiple field values to be the same as the passed instance.
   * @see setConfigValue
   */
  setConfigValues(from: App, override?: string | null): void;

  /**
   * Sets multiple field values to be the same as the passed instance.
   * @see setConfigValue
   */
  static setConfigValues(from: App, override?: string | null): void;

  /**
   * Sets configuration field value template at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  setConfigValueTemplate(path: string, valueTemplate: string | null, override?: string | null): void;

  /**
   * Sets configuration field value template at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  static setConfigValueTemplate(path: string, valueTemplate: string | null, override?: string | null): void;

  /**
   * Adds a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  insertConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string | null): void;

  /**
   * Adds a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static insertConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string | null): void;

  /**
   * Sets a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  setConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string | null): void;

  /**
   * Sets a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static setConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string | null): void;

  /**
   * Adds a single value to a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  addConfigElement(pathToCollectionField: string, value: any, override?: string | null): void;

  /**
   * Adds a single value to a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static addConfigElement(pathToCollectionField: string, value: any, override?: string | null): void;

  /**
   * Sets a key-value pair in specified map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  setConfigMapValue(pathToMapField: string, key: any, value: any, override?: string | null): void;

  /**
   * Sets a key-value pair in specified map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static setConfigMapValue(pathToMapField: string, key: any, value: any, override?: string | null): void;

  /**
   * Removes a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigElementAt(pathToCollectionField: string, index: number, override?: string | null): void;

  /**
   * Removes a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static removeConfigElementAt(pathToCollectionField: string, index: number, override?: string | null): void;

  /**
   * Removes a single value in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigElement(pathToCollectionField: string, value: any, override?: string | null): void;

  /**
   * Removes a single value in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static removeConfigElement(pathToCollectionField: string, value: any, override?: string | null): void;

  /**
   * Removes a single key in a map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigMapKey(pathToMapField: string, key: any, override?: string | null): void;

  /**
   * Removes a single key in a map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static removeConfigMapKey(pathToMapField: string, key: any, override?: string | null): void;

  /**
   * Url encodes the content at the path and returns new config object with the encoded value.
   * Path must represent a string value.
   */
  setEncodedValue(path: string, value: string, override: string): void;

  /**
   * Url encodes the content at the path and returns new config object with the encoded value.
   * Path must represent a string value.
   */
  static setEncodedValue(path: string, value: string, override: string): void;

  /**
   * Sets secret field value or secrets within value at provided path in this Config object.
   * @see clearSecretValue
   */
  setSecretValue(path: string, value: any, override?: string | null): void;

  /**
   * Sets secret field value or secrets within value at provided path in this Config object.
   * @see clearSecretValue
   */
  static setSecretValue(path: string, value: any, override?: string | null): void;

  /**
   * Sets multiple secret field values to those specified in the map. The map keys are the paths.
   * @see setSecretValue
   */
  setSecretValues(from: C3.Map<string, any>, override?: string | null): void;

  /**
   * Sets multiple secret field values to those specified in the map. The map keys are the paths.
   * @see setSecretValue
   */
  static setSecretValues(from: C3.Map<string, any>, override?: string | null): void;

  /**
   * Sets multiple secret field values to be the same as the passed instance.
   * @see setSecretValue
   */
  setSecretValues(from: App, override?: string | null): void;

  /**
   * Sets multiple secret field values to be the same as the passed instance.
   * @see setSecretValue
   */
  static setSecretValues(from: App, override?: string | null): void;

  /**
   * Sets secret field value template at provided path in this Config object.
   * @see clearSecretValue
   */
  setSecretValueTemplate(path: string, value: string | null, override?: string | null): void;

  /**
   * Sets secret field value template at provided path in this Config object.
   * @see clearSecretValue
   */
  static setSecretValueTemplate(path: string, value: string | null, override?: string | null): void;

  /**
   * Clears configuration field value at provided path in this Config object at provided override level. Note will not
   * clear secret value.
   */
  clearConfigValue(path: string, override?: string | null): void;

  /**
   * Clears configuration field value at provided path in this Config object at provided override level. Note will not
   * clear secret value.
   */
  static clearConfigValue(path: string, override?: string | null): void;

  /**
   * Clears secret field value at provided path in this Config object at provided override level.
   */
  clearSecretValue(path: string, override?: string | null): void;

  /**
   * Clears secret field value at provided path in this Config object at provided override level.
   */
  static clearSecretValue(path: string, override?: string | null): void;

  /**
   * Clears configuration field value at provided path in this Config object at all override levels. Note will not
   * clear secret value.
   */
  clearConfigValueAllOverrides(path: string): void;

  /**
   * Clears configuration field value at provided path in this Config object at all override levels. Note will not
   * clear secret value.
   */
  static clearConfigValueAllOverrides(path: string): void;

  /**
   * Clears secret field value at provided path in this Config object at all override levels.
   */
  clearSecretValueAllOverrides(path: string): void;

  /**
   * Clears secret field value at provided path in this Config object at all override levels.
   */
  static clearSecretValueAllOverrides(path: string): void;

  /**
   * @return config or secret value for the provided config key, field path, and override if set
   */
  static rawConfigOrSecretValue(configKey: string, path: string, override?: string | null, failIfMissing?: boolean): any | null;

  /**
   * Sets config or secret value for the provided config key, field path and override.
   */
  static setConfigOrSecretValue(configKey: string, path: string, value?: any, override?: string | null): void;

  /**
   * Sets config and secret value for the provided config key, field path and override. Equivalent to calling both
   * setConfigValue and setSecretValue
   */
  static setConfigAndSecretValue(configKey: string, path: string, value?: any, override?: string | null): void;

  /**
   * Sets config or secret value template for the provided config key, field path and override.
   */
  static setConfigOrSecretValueTemplate(configKey: string, path: string, valueTemplate?: string | null, override?: string | null): void;

  /**
   * @return `true` if this Config type has other sub types.
   */
  static hasSubTypes(): boolean;

  /**
   * @return true if this Config type has Ann.Config#secret annotation on the Config type of child config types
   */
  static hasSecretField(): boolean;

  /**
   * @return `true` if this Config type has only one instance.
   */
  static isSingleInstance(): boolean;

  /**
   * @returns `true` if this Config is user override-able.
   */
  static isUserOverridable(): boolean;

  /**
   * @return default configuration override level
   */
  static dfltOverride(override?: string | null): string;

  /**
   *  Loads config and secret by key if exists, default config, or `null` if `doNotDefaultIfMissing` config annotation is
   * true and config does not exist.
   *  Note that this skips caching and directly fetches config from the config store, and secret from vault.
   */
  static loadConfigAndSecret(configKey: string): App | null;

  /**
   * Loads config override template json if exists or `null`. Will not include secrets.
   * Note that this skips caching and directly fetches config from the config store.
   */
  loadConfigOverride(override: string): any | null;

  /**
   * Loads config override template json if exists or `null`. Will not include secrets.
   * Note that this skips caching and directly fetches config from the config store.
   */
  static loadConfigOverride(override: string): any | null;

  /**
   * Loads secret override template json if exists or `null`. Will not include non secrets.
   * Note that this skips caching and directly fetches secret from the vault.
   */
  loadSecretOverride(override: string): any | null;

  /**
   * Loads secret override template json if exists or `null`. Will not include non secrets.
   * Note that this skips caching and directly fetches secret from the vault.
   */
  static loadSecretOverride(override: string): any | null;

  /**
   * @return file for an embedded config value.
   */
  embeddedFile(embeddedFileName: string, override?: string | null): File;

  /**
   * @return file for an embedded config value.
   */
  static embeddedFile(embeddedFileName: string, override?: string | null): File;

  /**
   * @return config folder name
   */
  static configFolder(): string;

  /**
   * @return config sub folder name for this type
   */
  static configSubFolder(): string;

  /**
   * @return config file encoded path for a given key and potentially user under the config dir for this type.
   */
  static configFileEncodedPath(configKey: string, userOverride?: boolean): string;

  /**
   * @return pair of config and secret files for a given override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  configAndSecretFiles(override: string): Pair<File | null, File | null> | null;

  /**
   * @return pair of config and secret files for a given override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  static configAndSecretFiles(override: string): Pair<File | null, File | null> | null;

  /**
   * @return the config file path for a config instance at a given override;
   */
  configFilePath(override: string): string | null;

  /**
   * @return the config file path for a config instance at a given override;
   */
  static configFilePath(override: string): string | null;

  /**
   * @return the secret file path for a config instance at a given override;
   */
  secretFilePath(override: string): string | null;

  /**
   * @return the secret file path for a config instance at a given override;
   */
  static secretFilePath(override: string): string | null;

  /**
   * @return pair of config and secret files for provided override / appId; note that will always return pair
   *         of Files even if physical file doesn't exist.
   */
  configAndSecretFilePair(override: string, appId: string): Pair<File | null, File | null> | null;

  /**
   * @return pair of config and secret files for provided override / appId; note that will always return pair
   *         of Files even if physical file doesn't exist.
   */
  static configAndSecretFilePair(override: string, appId: string): Pair<File | null, File | null> | null;

  /**
   * @return map of pair of config and secret files by override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  allConfigAndSecretFiles(): C3.Map<string | null, Pair<File | null, File | null> | null>;

  /**
   * @return map of pair of config and secret files by override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  static allConfigAndSecretFiles(): C3.Map<string | null, Pair<File | null, File | null> | null>;

  /**
   * @return pair of config and secret template directories for override
   */
  static configAndSecretDirs(override?: string | null): Pair<File | null, File | null> | null;

  /**
   * @return map of pair of config and secret template directories by override; note that will always return instance of
   *         File even if physical folder doesn't exist.
   */
  static allConfigAndSecretDirs(): C3.Map<string | null, Pair<File | null, File | null> | null>;

  /**
   * @return pair of config and secret Base directories for the given override
   */
  static configAndSecretOverrideBaseDirs(override?: string | null): Pair<File | null, File | null> | null;

  /**
   * @return config key for a given config or secret file. If file is not a valid config or secret then will return
   *         `null` or fail based on `failIfInvalid`
   */
  static configKeyForFile(file: File | null, failIfInvalid?: boolean): string | null;

  /**
   * @return config key for a given config or secret file url. If file is not a valid config or secret then will return
   *         `null` or fail based on `failIfInvalid`
   */
  static configKeyForFileUrl(fileUrl: string | null): string | null;

  /**
   * @return Config sub-type for a config directory name.
   */
  static configTypeForDir(dir: string, failIdInvalid?: boolean): Type | null;

  /**
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
   * #setSecret or #setSecretValue for that.
   */
  setConfig(override?: string | null): void;

  /**
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
   * #setSecret or #setSecretValue for that.
   */
  static setConfig(override?: string | null): void;

  /**
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
   * #setConfigValue or #setConfig for that.
   */
  setSecret(override?: string | null): void;

  /**
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
   * #setConfigValue or #setConfig for that.
   */
  static setSecret(override?: string | null): void;

  /**
   * Executes actions on all config override levels (within a valid range) for a particular instance of config.
   */
  eachOverride(action?: λBiConsumer<Config, string> | null): void;

  /**
   * Executes actions on all config override levels (within a valid range) for a particular instance of config.
   */
  static eachOverride(action?: λBiConsumer<Config, string> | null): void;

  /**
   * Executes actions on all config override levels (within a valid range) for the Type itself (not instance).
   */
  static eachOverrideOnType(action?: λConsumer<string> | null): void;

  /**
   * Minimum configuration override level. Default is {@link ConfigOverride#APP}.
   */
  static minOverride(): string;

  /**
   * Maximum configuration override level. Default is {@link ConfigOverride#ROOT}.
   */
  static maxOverride(): string;

  /**
   * Clears specified configuration override including secrets for this instance.
   *
   * @param override
   *        Specifies the {@link ConfigOverride} level, of this config to clear.
   */
  clearConfigAndSecretOverride(override: string): void;

  /**
   * Clears specified configuration override including secrets for this instance.
   *
   * @param override
   *        Specifies the {@link ConfigOverride} level, of this config to clear.
   */
  static clearConfigAndSecretOverride(override: string): void;

  /**
   * Clears specified configuration including secrets for this instance on all override levels.
   */
  clearConfigAndSecretAllOverrides(): void;

  /**
   * Clears specified configuration including secrets for this instance on all override levels.
   */
  static clearConfigAndSecretAllOverrides(): void;

  /**
   * Clears every config and secret instance for this type and subtypes on all overrides lower than the specified
   * override (that is, Config#clearAllConfigAndSecretOverrides with App override parameter will clear all configs on
   * {@link ConfigOverride#APP} and {@link ConfigOverride#USER} level).
   *
   * @param override
   *        Specifies the {@link ConfigOverride} level of this config to clear. All overrides lower than this override
   *        will also be cleared.
   * @param confirm
   *        Confirmation from user that they understand and confirm deletion of this configuration.
   */
  static clearAllConfigAndSecretOverrides(override: string, confirm?: boolean): void;

  /**
   * returns a list of all field paths that are secret
   */
  static secretFieldPaths(): C3.Array<FieldPath | null>;

  /**
   * @return this config without any secret values.
   */
  removeSecrets(): App | null;

  /**
   * @return this config without any secret values.
   */
  static removeSecrets(): App | null;

  /**
   * @return this config with only secret values.
   */
  removeNonSecrets(): App | null;

  /**
   * @return this config with only secret values.
   */
  static removeNonSecrets(): App | null;

  /**
   * Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
   * validation and setup.
   */
  validate(): App;

  /**
   * Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
   * validation and setup.
   */
  static validate(): App;

  /**
   * @return The cached and merged JSON of all defined configuration templates for this instance, including secrets.
   */
  static rawJson(configKey: string | null): any | null;

  /**
   * @return sets Json template for a specified override.
   */
  static setJson(configKey: string, json: any | null, secret?: boolean, override?: string | null): File;

  /**
   * @return sets Json template field for a specified override.
   */
  static setJsonValue(configKey: string, field: string, json: any | null, override?: string | null): File;

  /**
   * @return sets Json template field for a specified override.
   */
  static setJsonField(configKey: string, field: string, json: any | null, secret?: boolean, override?: string | null): File;

  /**
   * Returns json containing configuration template bindings for a provided config key. Override this method to provide your
   * own list of template bindings
   */
  static templateBindings(configKey: string | null): any | null;

  /**
   * Evaluate a given template by applying the default config bindings.
   * Default config bindings are:
   * 1. owner - owner of the config
   * 2. region - abbreviated region in which the cluster is
   * 3. cluster - current cluster id
   * 4. env - current env id
   * 5. app - current app id
   * 7. user - current user
   * 8. type - type on which this api is called
   * For example, "${owner}--${cluster}-${env}-${app}"
   *
   * @param template
   *            Template string that needs to be evaluated. For example, "${owner}--${cluster}-${env}-${app}-${schemaName}"
   * @param extraBindings
   *            Any additional binding params not included in the default config bindings
   * @return evaluated template
   */
  static evalTemplate(template: string, extraBindings?: C3.Map<string | null, string | null>): string;

  /**
   * Returns count of cached raw Json.
   */
  static rawJsonCacheSize(): number | null;

  /**
   * Returns instance of the cache for this type for raw Json.
   */
  static rawJsonNativeCache(): any;

  /**
   * @return the default instance to be used when member functions are called on this type. E.g.
   *         FileSystem.inst() should return a default file system. It is up to implementation to decide if default
   *         instance is a singleton or not.
   */
  static inst(): App;

  /**
   * Parsed App ID structure
   */
  get appId(): AppId;

  /**
   * Parsed App ID structure
   */
  static get appId(): AppId;

  /**
   * The last user activity on the app
   */
  get lastActivity(): DateTime;

  /**
   * The last user activity on the app
   */
  static get lastActivity(): DateTime;

  /**
   * @return application in default env for a given name or id
   */
  static forName(nameOrId: string, failIfMissing?: boolean): App | null;

  /**
   * Lookup app for the given code
   */
  static forCode(code: number, failIfMissing?: boolean): App | null;

  /**
   * @return true if this app is Env#c3Env
   */
  isC3(): boolean;

  /**
   * @return true if this app is Env#c3Env
   */
  static isC3(): boolean;

  /**
   * @return parent env this app belongs to.
   */
  env(): Env;

  /**
   * @return parent env this app belongs to.
   */
  static env(): Env;

  /**
   * Parent cluster that this app belongs to
   */
  cluster(): Cluster;

  /**
   * Parent cluster that this app belongs to
   */
  static cluster(): Cluster;

  /**
   * C3 Application package
   */
  pkg(): Pkg;

  /**
   * C3 Application package
   */
  static pkg(): Pkg;

  /**
   * Await for App to be ready to accept API calls from internal url.
   * App is considered ready if App.isRegistered, App.isHealthy, and App.seedDataUpdated are all true.
   * Throws an error if App does not become accessible in time.
   *
   * @param spec
   *         Customization for wait logic.
   */
  waitForReadyInternal(spec?: WaitSpec | null): void;

  /**
   * Await for App to be ready to accept API calls from internal url.
   * App is considered ready if App.isRegistered, App.isHealthy, and App.seedDataUpdated are all true.
   * Throws an error if App does not become accessible in time.
   *
   * @param spec
   *         Customization for wait logic.
   */
  static waitForReadyInternal(spec?: WaitSpec | null): void;

  /**
   * Await for App to be ready to accept API calls from external url.
   * App is considered ready if App.isRegistered, App.isHealthy, and App.seedDataUpdated are all true.
   * Throws an error if App does not become accessible in time.
   *
   * @param spec
   *         Customization for wait logic.
   */
  waitForReady(spec?: WaitSpec | null): void;

  /**
   * Await for App to be ready to accept API calls from external url.
   * App is considered ready if App.isRegistered, App.isHealthy, and App.seedDataUpdated are all true.
   * Throws an error if App does not become accessible in time.
   *
   * @param spec
   *         Customization for wait logic.
   */
  static waitForReady(spec?: WaitSpec | null): void;

  /**
   * Await for the App's Nodepools to be ready, ie, {@link App.NodePool#isReady} to return true for all nodepools.
   * Throws an error if the nodepools are not ready in time.
   *
   * @param spec
   *         Customization for wait logic.
   */
  waitForReadyNodePools(spec?: WaitSpec | null, opSpec?: CloudClusterOpSpec | null): void;

  /**
   * Await for the App's Nodepools to be ready, ie, {@link App.NodePool#isReady} to return true for all nodepools.
   * Throws an error if the nodepools are not ready in time.
   *
   * @param spec
   *         Customization for wait logic.
   */
  static waitForReadyNodePools(spec?: WaitSpec | null, opSpec?: CloudClusterOpSpec | null): void;

  /**
   * Await for App to be destroyed.
   * Throws an error if App does not get destroyed in time.
   *
   * @param spec
   *         Customization for wait logic.
   */
  waitForTermination(spec?: WaitSpec | null): void;

  /**
   * Await for App to be destroyed.
   * Throws an error if App does not get destroyed in time.
   *
   * @param spec
   *         Customization for wait logic.
   */
  static waitForTermination(spec?: WaitSpec | null): void;

  /**
   * Ensures that all running nodes for an app are able to access {@link item}
   * and its {@link Metadata#fingerprint}s match.
   * @param spec
   *         Customization for wait logic.
   */
  waitForCacheInvalidation(spec?: WaitSpec | null): void;

  /**
   * Ensures that all running nodes for an app are able to access {@link item}
   * and its {@link Metadata#fingerprint}s match.
   * @param spec
   *         Customization for wait logic.
   */
  static waitForCacheInvalidation(spec?: WaitSpec | null): void;

  /**
   * A convenience function for obtaining a URL that is known to successfully access
   * the given app directly via some {@link AppUrl} for the app.
   * It also handles adding the right suffixes (env/app) and subpath based on the AppUrl used
   *
   * @return default {@link AppUrl}s to the app; note it can be any of Cluster / Env or Vanity URL
   */
  endpoint(encodedSubPath?: string | null): string | null;

  /**
   * A convenience function for obtaining a URL that is known to successfully access
   * the given app directly via some {@link AppUrl} for the app.
   * It also handles adding the right suffixes (env/app) and subpath based on the AppUrl used
   *
   * @return default {@link AppUrl}s to the app; note it can be any of Cluster / Env or Vanity URL
   */
  static endpoint(encodedSubPath?: string | null): string | null;

  /**
   * A higher order function for obtaining an internal facing URL that is used for server-to-server communication in the backend.
   * It also handles adding the right suffixes (env/app) and subpath based on the AppUrl used.
   * These endpoints are not accessible from the external world, for example, internet browsers.
   *
   * @return default {@link AppUrl}s to the app; note it can be any of Cluster / Env or Vanity URL
   */
  internalEndpoint(encodedSubPath?: string | null): string | null;

  /**
   * A higher order function for obtaining an internal facing URL that is used for server-to-server communication in the backend.
   * It also handles adding the right suffixes (env/app) and subpath based on the AppUrl used.
   * These endpoints are not accessible from the external world, for example, internet browsers.
   *
   * @return default {@link AppUrl}s to the app; note it can be any of Cluster / Env or Vanity URL
   */
  static internalEndpoint(encodedSubPath?: string | null): string | null;

  /**
   * Default {@link AppUrl}s to the app; it is recommended to use this AppUrl when reaching out to App - i.e. if code is
   * not in the context of the App [ i.e. `app != C3.app()` ] then code should use `app.url()`; another way of saying
   * the same: avoid use of `C3.app().url()` and prefer `C3.appUrl()` as they may not be the same.
   * NOTE: Use {@link App#endpoint} to obtain an URL for the app.
   * {@link App#url} returns an @{link AppUrl} instance and not an actual URL string.
   *
   * @return default {@link AppUrl}s to the app; note it can be any of Cluster / Env or Vanity URL
   */
  get url(): AppUrl;

  /**
   * Default {@link AppUrl}s to the app; it is recommended to use this AppUrl when reaching out to App - i.e. if code is
   * not in the context of the App [ i.e. `app != C3.app()` ] then code should use `app.url()`; another way of saying
   * the same: avoid use of `C3.app().url()` and prefer `C3.appUrl()` as they may not be the same.
   * NOTE: Use {@link App#endpoint} to obtain an URL for the app.
   * {@link App#url} returns an @{link AppUrl} instance and not an actual URL string.
   *
   * @return default {@link AppUrl}s to the app; note it can be any of Cluster / Env or Vanity URL
   */
  static get url(): AppUrl;

  /**
   * Returns the preferred {@link AppUrl} for the app. Preference is based on the following priority:
   *   1. Vanity URL
   *   2. Env URL
   *   3. Cluster URL
   */
  get preferredAppUrl(): AppUrl;

  /**
   * Returns the preferred {@link AppUrl} for the app. Preference is based on the following priority:
   *   1. Vanity URL
   *   2. Env URL
   *   3. Cluster URL
   */
  static get preferredAppUrl(): AppUrl;

  /**
   * @return all {@link AppUrl}s applicable for this App in a particular order:
   *   1. Vanity URL
   *   2. Env URL
   *   3. Cluster URL
   */
  get urls(): C3.Array<AppUrl | null>;

  /**
   * @return all {@link AppUrl}s applicable for this App in a particular order:
   *   1. Vanity URL
   *   2. Env URL
   *   3. Cluster URL
   */
  static get urls(): C3.Array<AppUrl | null>;

  /**
   * Checks to see if a target App is in the same internal network space as this App. Note this is intended to be a
   * lightweight configuration check rather than a check made via an internal ping. If two Apps are in the same network
   * space, they should be able to communicate via an internal url.
   *
   * @param targetApp
   *         Target App to check if exists in the same internal network space as this App
   * @return true if the target App lies in the same internal network space
   *
   * @see #internalUrl
   */
  canReachInternalUrl(targetApp: App): boolean;

  /**
   * Checks to see if a target App is in the same internal network space as this App. Note this is intended to be a
   * lightweight configuration check rather than a check made via an internal ping. If two Apps are in the same network
   * space, they should be able to communicate via an internal url.
   *
   * @param targetApp
   *         Target App to check if exists in the same internal network space as this App
   * @return true if the target App lies in the same internal network space
   *
   * @see #internalUrl
   */
  static canReachInternalUrl(targetApp: App): boolean;

  /**
   * Returns the internal {@link AppUrl}. This AppUrl should primarily be used for internal c3-server calls.
   * Utilizing an internal url allows the network request stay within the C3 Cluster network without having it
   * be over the internet.
   * NOTE: Use {@link App#internalEndpoint} to obtain an internal facing URL string for server-to-server communication.
   *
   * @return internal {@link AppUrl} for this App if one exists
   */
  get internalUrl(): AppUrl;

  /**
   * Returns the internal {@link AppUrl}. This AppUrl should primarily be used for internal c3-server calls.
   * Utilizing an internal url allows the network request stay within the C3 Cluster network without having it
   * be over the internet.
   * NOTE: Use {@link App#internalEndpoint} to obtain an internal facing URL string for server-to-server communication.
   *
   * @return internal {@link AppUrl} for this App if one exists
   */
  static get internalUrl(): AppUrl;

  /**
   * Returns an external facing {@link AppUrl}.
   *
   * @return external {@link AppUrl} for this App if one exists
   */
  get externalUrl(): AppUrl;

  /**
   * Returns an external facing {@link AppUrl}.
   *
   * @return external {@link AppUrl} for this App if one exists
   */
  static get externalUrl(): AppUrl;

  /**
   * @return all cluster urls in this {@link Cluster};
   *         any {@link Env} and App in this Cluster is accessible via this url
   */
  get clusterUrls(): C3.Array<AppUrl | null>;

  /**
   * @return all cluster urls in this {@link Cluster};
   *         any {@link Env} and App in this Cluster is accessible via this url
   */
  static get clusterUrls(): C3.Array<AppUrl | null>;

  /**
   * @return all environment urls in the {@link Env} this App belongs to;
   *         any {@link App} belonging in this Env is accessible via this url;
   *         the single Env this url is for is accessible via this url;
   */
  get envUrls(): C3.Array<AppUrl | null>;

  /**
   * @return all environment urls in the {@link Env} this App belongs to;
   *         any {@link App} belonging in this Env is accessible via this url;
   *         the single Env this url is for is accessible via this url;
   */
  static get envUrls(): C3.Array<AppUrl | null>;

  /**
   * @return all vanity urls for this App;
   *         the single {@link App} this url is for is accessible via this url
   */
  get vanityUrls(): C3.Array<AppUrl | null>;

  /**
   * @return all vanity urls for this App;
   *         the single {@link App} this url is for is accessible via this url
   */
  static get vanityUrls(): C3.Array<AppUrl | null>;

  /**
   * Apply provided lambda in the context of this App.
   */
  call(action: Lambda<FunctionType | null>): T | null;

  /**
   * Apply provided lambda in the context of this App.
   */
  static call(action: Lambda<FunctionType | null>): T | null;

  /**
   * Apply provided action in the context of this App, using the provided auth.
   */
  callJsonWithAuth(auth: string, type: string, action: string, thisArg?: any | null, args?: any | null, kwargs?: any | null): T | null;

  /**
   * Apply provided action in the context of this App, using the provided auth.
   */
  static callJsonWithAuth(auth: string, type: string, action: string, thisArg?: any | null, args?: any | null, kwargs?: any | null): T | null;

  /**
   * Apply provided action in the context of the current App's Jvm, using the provided auth.
   */
  callJsonWithAuthInLocalJvm(auth: string, type: string, action: string, thisArg?: any | null, args?: any | null, kwargs?: any | null): T | null;

  /**
   * Apply provided action in the context of the current App's Jvm, using the provided auth.
   */
  static callJsonWithAuthInLocalJvm(auth: string, type: string, action: string, thisArg?: any | null, args?: any | null, kwargs?: any | null): T | null;

  /**
   * Runs the given action on all nodes serving this app.
   */
  callInAllNodes(type: string, action: string, thisArg: any | null, args?: any | null, retrySpec?: RetrySpec | null, timeoutSpec?: TimeoutSpec | null): BatchError | null;

  /**
   * Runs the given action on all nodes serving this app.
   */
  static callInAllNodes(type: string, action: string, thisArg: any | null, args?: any | null, retrySpec?: RetrySpec | null, timeoutSpec?: TimeoutSpec | null): BatchError | null;

  /**
   * JSON RPC to an App.
   *
   * @param type
   *         target type
   * @param action
   *         target action
   * @param thisArg
   *         json representing `this` argument to call
   * @param args
   *         json array representing positional arguments
   * @param kwargs
   *         json array representing kwarg arguments, typically a Spec
   * @return json
   */
  callJson(type: string, action: string, thisArg?: any | null, args?: any | null, kwargs?: any | null): any | null;

  /**
   * JSON RPC to an App.
   *
   * @param type
   *         target type
   * @param action
   *         target action
   * @param thisArg
   *         json representing `this` argument to call
   * @param args
   *         json array representing positional arguments
   * @param kwargs
   *         json array representing kwarg arguments, typically a Spec
   * @return json
   */
  static callJson(type: string, action: string, thisArg?: any | null, args?: any | null, kwargs?: any | null): any | null;

  /**
   * Returns the parent app of the current app. The parent app is the app that is one higher level in the cluster
   * hierarchy.
   * For example, envApp env1-c3's parent app will be the cluster app c3-c3. App env1-blue's parent app
   * will be its according envApp, env1-c3. getParentApp of cluster app c3-c3 will return null.
   *
   * @return the App that is one level above it in the cluster hierarchy.
   */
  parentC3App(): App | null;

  /**
   * Returns the parent app of the current app. The parent app is the app that is one higher level in the cluster
   * hierarchy.
   * For example, envApp env1-c3's parent app will be the cluster app c3-c3. App env1-blue's parent app
   * will be its according envApp, env1-c3. getParentApp of cluster app c3-c3 will return null.
   *
   * @return the App that is one level above it in the cluster hierarchy.
   */
  static parentC3App(): App | null;

  /**
   * Allow access for another app to call the current app.
   * Will fail if access already exists. Use {@link App#addRoles} and {@link App#revokeRoles} to modify roles of an existing AppIdentity.
   * @param callerAppId
   *        The caller App, of which the {@link AppIdentity} will be generated for in the current app.
   * @param roles
   *        The roles that the caller app will have.
   * @param overwrite
   *        If true, will overwrite existing AppIdentity for the caller app.
   * @return true if the identity was successfully created, otherwise false along with an error message.
   */
  allowAccess(callerAppId: string, roles?: C3.Array<string | null>, overwrite?: boolean): Pair<boolean, string | null> | null;

  /**
   * Allow access for another app to call the current app.
   * Will fail if access already exists. Use {@link App#addRoles} and {@link App#revokeRoles} to modify roles of an existing AppIdentity.
   * @param callerAppId
   *        The caller App, of which the {@link AppIdentity} will be generated for in the current app.
   * @param roles
   *        The roles that the caller app will have.
   * @param overwrite
   *        If true, will overwrite existing AppIdentity for the caller app.
   * @return true if the identity was successfully created, otherwise false along with an error message.
   */
  static allowAccess(callerAppId: string, roles?: C3.Array<string | null>, overwrite?: boolean): Pair<boolean, string | null> | null;

  /**
   * Allow caller App to access this App with permissions described by provided roles.
   *
   * @param callerAppId
   *        The id of the App that will have access to this app.
   * @param callerAppPublicKey
   *        The public key of the caller App.
   * @param roles
   *        The roles that caller App will have in this App. Note if {@link AppIdentity} exists these roles will be added
   *        to existing ones.
   * @param overwrite
   *        If true, will overwrite existing AppIdentity for the caller app.
   *
   * @see #revokeAccess
   */
  allowAccess(callerAppId: string, callerAppPublicKey: string, roles: C3.Array<string | null>, overwrite?: boolean): void;

  /**
   * Allow caller App to access this App with permissions described by provided roles.
   *
   * @param callerAppId
   *        The id of the App that will have access to this app.
   * @param callerAppPublicKey
   *        The public key of the caller App.
   * @param roles
   *        The roles that caller App will have in this App. Note if {@link AppIdentity} exists these roles will be added
   *        to existing ones.
   * @param overwrite
   *        If true, will overwrite existing AppIdentity for the caller app.
   *
   * @see #revokeAccess
   */
  static allowAccess(callerAppId: string, callerAppPublicKey: string, roles: C3.Array<string | null>, overwrite?: boolean): void;

  /**
   * Caller app {@link AppIdentity} must already exist in this app's config store. Remove it if it exists.
   *
   * @param callerAppId
   *        Id of the app whose {@link AppIdentity} will be removed from the config store of the current app.
   * @return true if the {@link AppIdentity} was successfully removed, otherwise false along with an error message.
   */
  revokeAccess(callerAppId: string): Pair<boolean, string | null> | null;

  /**
   * Caller app {@link AppIdentity} must already exist in this app's config store. Remove it if it exists.
   *
   * @param callerAppId
   *        Id of the app whose {@link AppIdentity} will be removed from the config store of the current app.
   * @return true if the {@link AppIdentity} was successfully removed, otherwise false along with an error message.
   */
  static revokeAccess(callerAppId: string): Pair<boolean, string | null> | null;

  /**
   * Caller app {@link AppIdentity} must already exist in this app's config store. Removes the roles
   * from the specified list of roles of that {@link AppIdentity}.
   *
   * @param callerAppId
   *        Id of the app whose roles will be removed from its {@link AppIdentity} the current app has of it.
   * @param rolesToBeRemoved
   *        The roles that will be removed from the {@link AppIdentity}. If this is null, remove all roles and assign
   *        C3.MemberApp role instead.
   * @return true if the roles were successfully removed, otherwise false along with an error message.
   *         If any role in rolesToBeRemoved does not exist in the {@link AppIdentity}, return false with error message.
   */
  revokeRoles(callerAppId: string, rolesToBeRemoved?: C3.Array<string | null>): Pair<boolean, string | null> | null;

  /**
   * Caller app {@link AppIdentity} must already exist in this app's config store. Removes the roles
   * from the specified list of roles of that {@link AppIdentity}.
   *
   * @param callerAppId
   *        Id of the app whose roles will be removed from its {@link AppIdentity} the current app has of it.
   * @param rolesToBeRemoved
   *        The roles that will be removed from the {@link AppIdentity}. If this is null, remove all roles and assign
   *        C3.MemberApp role instead.
   * @return true if the roles were successfully removed, otherwise false along with an error message.
   *         If any role in rolesToBeRemoved does not exist in the {@link AppIdentity}, return false with error message.
   */
  static revokeRoles(callerAppId: string, rolesToBeRemoved?: C3.Array<string | null>): Pair<boolean, string | null> | null;

  /**
   * Adds the list of roles to the already existing roles in the caller app's {@link AppIdentity}. The caller App must
   * already have an {@link AppIdentity} created on the calling app.
   *
   * @param callerAppId
   *        The id of the app for which roles will be added to.
   * @param roles
   *        The roles that will be added to the caller app's app identity.
   */
  addRoles(callerAppId: string, roles?: C3.Array<string | null>): void;

  /**
   * Adds the list of roles to the already existing roles in the caller app's {@link AppIdentity}. The caller App must
   * already have an {@link AppIdentity} created on the calling app.
   *
   * @param callerAppId
   *        The id of the app for which roles will be added to.
   * @param roles
   *        The roles that will be added to the caller app's app identity.
   */
  static addRoles(callerAppId: string, roles?: C3.Array<string | null>): void;

  /**
   * Returns all the roles in the {@link AppIdentity} assigned to the caller App. The Caller App must already
   * have an {@link AppIdentity} created on the calling app.
   *
   * @param callerAppId
   *        The id of the app for which we get the roles.
   * @return the roles that are assigned to the caller app's {@link AppIdentity}.
   */
  rolesForApp(callerAppId: string): C3.Array<string | null>;

  /**
   * Returns all the roles in the {@link AppIdentity} assigned to the caller App. The Caller App must already
   * have an {@link AppIdentity} created on the calling app.
   *
   * @param callerAppId
   *        The id of the app for which we get the roles.
   * @return the roles that are assigned to the caller app's {@link AppIdentity}.
   */
  static rolesForApp(callerAppId: string): C3.Array<string | null>;

  /**
   * Allow access for service to call the current app.
   * Will fail if user already exists. Use {@link User#addToGroup} and {@link User#removeFromGroup} to modify groups of an existing Service.
   *
   * @param serviceKind
   *        The name of the service ex: AlertManager
   * @param serviceId
   *        The id that the service will have
   * @param groups
   *        The valid applications roles that service will have in this App
   * @param overwrite
   *        If true, will overwrite existing User associated with the Service
   * @return User associated with the Service
   */
  allowAccessToService(serviceId: string, groups?: C3.Array<string | null>, overwrite?: boolean): User;

  /**
   * Allow access for service to call the current app.
   * Will fail if user already exists. Use {@link User#addToGroup} and {@link User#removeFromGroup} to modify groups of an existing Service.
   *
   * @param serviceKind
   *        The name of the service ex: AlertManager
   * @param serviceId
   *        The id that the service will have
   * @param groups
   *        The valid applications roles that service will have in this App
   * @param overwrite
   *        If true, will overwrite existing User associated with the Service
   * @return User associated with the Service
   */
  static allowAccessToService(serviceId: string, groups?: C3.Array<string | null>, overwrite?: boolean): User;

  /**
   * User must already exist in current app's db. Remove it if it exists.
   *
   * @param serviceId
   *        Id of the Service who will be removed from the db of the current app.
   * @return true if the {@link User} was successfully removed, otherwise false
   */
  revokeAccessToService(serviceId: string): boolean;

  /**
   * User must already exist in current app's db. Remove it if it exists.
   *
   * @param serviceId
   *        Id of the Service who will be removed from the db of the current app.
   * @return true if the {@link User} was successfully removed, otherwise false
   */
  static revokeAccessToService(serviceId: string): boolean;

  /**
   * Generate new symmetric (secret) key and asymmetric (public/private) keys for the app.
   *
   * @param refresh
   *        If refresh is true, always generate new keys. If refresh is false and keys already exist, do not generate.
   */
  setupKeys(refresh?: boolean): void;

  /**
   * Generate new symmetric (secret) key and asymmetric (public/private) keys for the app.
   *
   * @param refresh
   *        If refresh is true, always generate new keys. If refresh is false and keys already exist, do not generate.
   */
  static setupKeys(refresh?: boolean): void;

  /**
   * @return The {@link App.PublicKey} of the app.
   */
  publicKey(): App.PublicKey | null;

  /**
   * @return The {@link App.PublicKey} of the app.
   */
  static publicKey(): App.PublicKey | null;

  /**
   * Public key as string for this App; used for allowing access to other Apps
   */
  get publicKeyContent(): string;

  /**
   * Public key as string for this App; used for allowing access to other Apps
   */
  static get publicKeyContent(): string;

  /**
   * Dumps all the active (running or pending) actions for this app (All associated nodes of the app) in the cluster by thread. (C3 actions).
   * By default, {#actionDump} will return root actions sorted by elapsed and id in descending order.
   * @param spec
   *        Specification of what actions or type of actions to retrieve.
   */
  actionDump(spec?: ActionsSpec | null): C3.Array<Action | null>;

  /**
   * Dumps all the active (running or pending) actions for this app (All associated nodes of the app) in the cluster by thread. (C3 actions).
   * By default, {#actionDump} will return root actions sorted by elapsed and id in descending order.
   * @param spec
   *        Specification of what actions or type of actions to retrieve.
   */
  static actionDump(spec?: ActionsSpec | null): C3.Array<Action | null>;

  /**
   * Dumps all the active (running or pending) actions for this app (All associated nodes of the app) in the cluster by thread. (C3 actions).
   * By default, {#actions} will return root actions sorted by elapsed and id in descending order.
   * @param spec
   *        Specification of what actions or type of actions to retrieve.
   */
  actions(spec?: ActionsSpec | null): C3.Array<Action | null>;

  /**
   * Dumps all the active (running or pending) actions for this app (All associated nodes of the app) in the cluster by thread. (C3 actions).
   * By default, {#actions} will return root actions sorted by elapsed and id in descending order.
   * @param spec
   *        Specification of what actions or type of actions to retrieve.
   */
  static actions(spec?: ActionsSpec | null): C3.Array<Action | null>;

  /**
   * Converts provided name to a valid app name.
   */
  static sanitizeName(name: string): string;

  /**
   * Empties all of the caches for this App.
   */
  emptyAllCaches(): void;

  /**
   * Empties all of the caches for this App.
   */
  static emptyAllCaches(): void;

  /**
   * @return AppMembership service for this Application
   */
  membership(): App.Membership;

  /**
   * @return AppMembership service for this Application
   */
  static membership(): App.Membership;

  /**
   * Summary of this {@link App}
   */
  summary(refresh?: boolean): App.Summary;

  /**
   * Summary of this {@link App}
   */
  static summary(refresh?: boolean): App.Summary;

  /**
   * Removes ALL the data for this app including database objects / files and other persisted data but keep configurations
   */
  removeData(confirm?: boolean): boolean;

  /**
   * Removes ALL the data for this app including database objects / files and other persisted data but keep configurations
   */
  static removeData(confirm?: boolean): boolean;

  /**
   * Restart all nodes of this app
   *
   * @param skipSelf
   *        A boolean flag. Set to true to skip restarting self: the node the command runs on.
   * @return {@link BatchError} object with any errors occurred during the restart
   */
  restart(skipSelf?: boolean): BatchError | null;

  /**
   * Restart all nodes of this app
   *
   * @param skipSelf
   *        A boolean flag. Set to true to skip restarting self: the node the command runs on.
   * @return {@link BatchError} object with any errors occurred during the restart
   */
  static restart(skipSelf?: boolean): BatchError | null;

  /**
   * Delete the dataStore resources created for this app. Returns true if it successfully deletes all resources.
   * If not, will log a BatchError with all unsuccessful deletions.
   */
  terminateDatastoreResources(confirm?: boolean): boolean;

  /**
   * Delete the dataStore resources created for this app. Returns true if it successfully deletes all resources.
   * If not, will log a BatchError with all unsuccessful deletions.
   */
  static terminateDatastoreResources(confirm?: boolean): boolean;

  /**
   * Stops cloud services for this given app
   * @param confirm
   *         To be sure confirm that you indeed intend to stop the cloud services
   * @param spec
   *         CloudServiceStopSpec valid for all cloud services being stopped
   * @return whether the cloud services were stopped
   */
  stopCloudServices(confirm?: boolean, spec?: CloudServiceStopSpec | null): boolean;

  /**
   * Stops cloud services for this given app
   * @param confirm
   *         To be sure confirm that you indeed intend to stop the cloud services
   * @param spec
   *         CloudServiceStopSpec valid for all cloud services being stopped
   * @return whether the cloud services were stopped
   */
  static stopCloudServices(confirm?: boolean, spec?: CloudServiceStopSpec | null): boolean;

  /**
   * Terminate cloud services for this given app
   * @param confirm
   *         To be sure confirm that you indeed intend to terminate the cloud services
   * @param spec
   *         CloudServiceStopSpec valid for all cloud services being terminated
   * @return whether the cloud services were terminated
   */
  terminateCloudServices(confirm?: boolean, spec?: CloudServiceStopSpec | null): boolean;

  /**
   * Terminate cloud services for this given app
   * @param confirm
   *         To be sure confirm that you indeed intend to terminate the cloud services
   * @param spec
   *         CloudServiceStopSpec valid for all cloud services being terminated
   * @return whether the cloud services were terminated
   */
  static terminateCloudServices(confirm?: boolean, spec?: CloudServiceStopSpec | null): boolean;

  /**
   * A list of all {@link CloudService}s for this App.
   */
  cloudServices(): C3.Array<CloudService<CloudServiceConfig | null> | null>;

  /**
   * A list of all {@link CloudService}s for this App.
   */
  static cloudServices(): C3.Array<CloudService<CloudServiceConfig | null> | null>;

  /**
   * Sets the {@link AppMode} for the {@link App}
   */
  setMode(appMode: string): void;

  /**
   * Sets the {@link AppMode} for the {@link App}
   */
  static setMode(appMode: string): void;

  /**
   * @return true if the given App's mode is dev or test; false otherwise.
   */
  isTestMode(): boolean;

  /**
   * @return true if the given App's mode is dev or test; false otherwise.
   */
  static isTestMode(): boolean;

  /**
   * @return true if the given App is running in a single node mode
   */
  isSingleNode(): boolean;

  /**
   * @return true if the given App is running in a single node mode
   */
  static isSingleNode(): boolean;

  /**
   * Performs a validation to check if the given App is stored in config.
   * @return true if the given App is registered, false otherwise.
   */
  isRegistered(): boolean;

  /**
   * Performs a validation to check if the given App is stored in config.
   * @return true if the given App is registered, false otherwise.
   */
  static isRegistered(): boolean;

  /**
   * Performs a validation to check if the given App is healthy.
   * This also includes the App needing to be externally accessible by at least one url.
   *
   * @return true if the given App is healthy, false otherwise.
   */
  isHealthy(): boolean;

  /**
   * Performs a validation to check if the given App is healthy.
   * This also includes the App needing to be externally accessible by at least one url.
   *
   * @return true if the given App is healthy, false otherwise.
   */
  static isHealthy(): boolean;

  /**
   * Checks if App is ready to accept API calls at its external URL.
   * App is considered ready if App.isRegistered, AppUrl.isHealthy, and App.seedDataUpdated are all true.
   */
  isReady(): boolean;

  /**
   * Checks if App is ready to accept API calls at its external URL.
   * App is considered ready if App.isRegistered, AppUrl.isHealthy, and App.seedDataUpdated are all true.
   */
  static isReady(): boolean;

  /**
   * Checks if App is ready to accept API calls at its internal URL.
   * App is considered ready if App.isRegistered, AppUrl.isHealthy, and App.seedDataUpdated are all true.
   */
  isReadyInternal(): boolean;

  /**
   * Checks if App is ready to accept API calls at its internal URL.
   * App is considered ready if App.isRegistered, AppUrl.isHealthy, and App.seedDataUpdated are all true.
   */
  static isReadyInternal(): boolean;

  /**
   * @return true if this app is in given Env
   */
  isInEnv(envIdOrName: string | null): boolean;

  /**
   * @return true if this app is in given Env
   */
  static isInEnv(envIdOrName: string | null): boolean;

  /**
   * @return true if this app is in given Cluster
   */
  isInCluster(clusterId: string | null): boolean;

  /**
   * @return true if this app is in given Cluster
   */
  static isInCluster(clusterId: string | null): boolean;

  /**
   * @return available / free running node in this app or `null` or error if none available
   */
  availableNode(failIfNone?: boolean): Server | null;

  /**
   * @return available / free running node in this app or `null` or error if none available
   */
  static availableNode(failIfNone?: boolean): Server | null;

  /**
   * @return available / free running node in this app or `null` or error if none available
   */
  availableNode(nodes: C3.Array<string | null>, failIfNone?: boolean): App.Node | null;

  /**
   * @return available / free running node in this app or `null` or error if none available
   */
  static availableNode(nodes: C3.Array<string | null>, failIfNone?: boolean): App.Node | null;

  /**
   * @return available / free running node in this app or `null` or error if none available
   */
  availableNode(nodes: C3.Array<string | null>, predicate?: any, failIfNone?: boolean): App.Node | null;

  /**
   * @return available / free running node in this app or `null` or error if none available
   */
  static availableNode(nodes: C3.Array<string | null>, predicate?: any, failIfNone?: boolean): App.Node | null;

  /**
   * @return available / free running node with given server role in this app or `null` or error if none available
   */
  availableNodeForRole(role: string, failIfNone?: boolean): Server | null;

  /**
   * @return available / free running node with given server role in this app or `null` or error if none available
   */
  static availableNodeForRole(role: string, failIfNone?: boolean): Server | null;

  /**
   * @return available / free running node with one of server roles in this app or `null` or error if none available;
   *         note that order in the arg is significant
   */
  availableNodeForRoles(role: C3.Array<string | null>, failIfNone?: boolean): Server | null;

  /**
   * @return available / free running node with one of server roles in this app or `null` or error if none available;
   *         note that order in the arg is significant
   */
  static availableNodeForRoles(role: C3.Array<string | null>, failIfNone?: boolean): Server | null;

  /**
   * @return available / free running node in the given node pool in this app or `null` or error if none available
   */
  availableNodeForPool(pool: string, failIfNone?: boolean): Server | null;

  /**
   * @return available / free running node in the given node pool in this app or `null` or error if none available
   */
  static availableNodeForPool(pool: string, failIfNone?: boolean): Server | null;

  /**
   * @return available / free running node in of the node pools in this app or `null` or error if none available;
   *         note that order in the arg is significant
   */
  availableNodeForPools(pools: C3.Array<string | null>, failIfNone?: boolean): Server | null;

  /**
   * @return available / free running node in of the node pools in this app or `null` or error if none available;
   *         note that order in the arg is significant
   */
  static availableNodeForPools(pools: C3.Array<string | null>, failIfNone?: boolean): Server | null;

  /**
   * Fetches specified {@link App.NodePool} for this App if available.
   *
   * @param nodePoolName
   *         Specifies the {@link App.NodePool#name}.
   * @param failIfMissing
   *         Fail if {@link App.NodePool} does not exist for the App.
   * @return {@link App.NodePool} based on the specified name.
   */
  nodePool(nodePoolName?: string | null, failIfMissing?: boolean): App.NodePool | null;

  /**
   * Fetches specified {@link App.NodePool} for this App if available.
   *
   * @param nodePoolName
   *         Specifies the {@link App.NodePool#name}.
   * @param failIfMissing
   *         Fail if {@link App.NodePool} does not exist for the App.
   * @return {@link App.NodePool} based on the specified name.
   */
  static nodePool(nodePoolName?: string | null, failIfMissing?: boolean): App.NodePool | null;

  /**
   * Lists all {@link App.NodePool}s for this App
   * @param refresh
   *         Fetch after refreshing the cache in ClusterCtx
   */
  nodePools(refresh?: boolean): C3.Array<App.NodePool | null>;

  /**
   * Lists all {@link App.NodePool}s for this App
   * @param refresh
   *         Fetch after refreshing the cache in ClusterCtx
   */
  static nodePools(refresh?: boolean): C3.Array<App.NodePool | null>;

  /**
   * Lists all {@link App.NodePool}s that can satisfy a particular {@link HardwareConstraint} for this App.
   */
  nodePoolsForHardwareConstraint(constraint: HardwareConstraint): C3.Array<App.NodePool | null>;

  /**
   * Lists all {@link App.NodePool}s that can satisfy a particular {@link HardwareConstraint} for this App.
   */
  static nodePoolsForHardwareConstraint(constraint: HardwareConstraint): C3.Array<App.NodePool | null>;

  /**
   * Lists all {@link App.NodePool}s having a particular {@link Server.Role} for this App
   */
  nodePoolsForRole(role?: string | null, failIfNone?: boolean): C3.Array<App.NodePool | null>;

  /**
   * Lists all {@link App.NodePool}s having a particular {@link Server.Role} for this App
   */
  static nodePoolsForRole(role?: string | null, failIfNone?: boolean): C3.Array<App.NodePool | null>;

  /**
   * Lists all {@link App.NodePool}s for this App
   */
  nodePoolsByRole(): C3.Map<string | null, C3.Array<App.NodePool | null>>;

  /**
   * Lists all {@link App.NodePool}s for this App
   */
  static nodePoolsByRole(): C3.Map<string | null, C3.Array<App.NodePool | null>>;

  /**
   * @return node in this App with given id
   */
  appNode(nodeId: string | null, failIfMissing?: boolean): App.Node | null;

  /**
   * @return node in this App with given id
   */
  static appNode(nodeId: string | null, failIfMissing?: boolean): App.Node | null;

  /**
   * @return node in this App with given id
   */
  appNode(nodeId: App.Node.Id | null, failIfMissing?: boolean): App.Node | null;

  /**
   * @return node in this App with given id
   */
  static appNode(nodeId: App.Node.Id | null, failIfMissing?: boolean): App.Node | null;

  /**
   * Helper function to configure an existing or new {@link App.NodePool}. This function can be used to configure all
   * aspects of a given node pool.
   *
   * @param name
   *         Specifies the name of the {@link App.NodePool} to configure.
   * @param targetNodeCount
   *         Specifies the {@link App.NodePool#targetNodeCount}.
   * @param minNodeCount
   *         Specifies the {@link App.NodePool#minNodeCount}.
   * @param maxNodeCount
   *         Specifies the {@link App.NodePool#maxNodeCount}.
   * @param hardwareProfile
   *         Specifies the {@link HardwareProfile} that nodes of this {@link App.NodePool} should have.
   * @param roles
   *         Specifies what {@link Server.Role}s that nodes of this {@link App.NodePool} will function as.
   * @param autoScale
   *         Specifies whether auto scaling should be enabled for {@link App.NodePool}.
   *         If not specified then value will be either defaulted to true if a new App.NodePool is being created
   *         or not be updated if App.NodePool already exists.
   *         Note: The {@link App.NodePool.AutoScaleSpec#strategy} will be defaulted to
   *               {@link App.NodePool.AutoScaleStrategy.InvalidationQueues} if App.NodePool is being created
   * @param jvm
   *         Specifies the {@link App.NodePool.JvmSpec#jvmMaxMemoryPct} that C3 server nodes will reserve.
   *         If not specified then value will be either defaulted to 0.7 if a new App.NodePool is being created
   *         or not be updated if App.NodePool already exists.
   * @param membership
   *         Specifies the {@link App.NodePool#membership}.
   *         If not specified then value will be either defaulted to membership of {@link CloudProvider}
   *         if a new App.NodePool is being created or not be updated if App.NodePool already exists.
   * @return {@link App.NodePool} that was configured.
   */
  configureNodePool(name: string, targetNodeCount: number, minNodeCount: number, maxNodeCount: number, hardwareProfile: HardwareProfile, roles: C3.Array<string | null>, autoScale?: boolean | null, jvmMaxMemoryPct?: number | null, membership?: Type | null): App.NodePool;

  /**
   * Helper function to configure an existing or new {@link App.NodePool}. This function can be used to configure all
   * aspects of a given node pool.
   *
   * @param name
   *         Specifies the name of the {@link App.NodePool} to configure.
   * @param targetNodeCount
   *         Specifies the {@link App.NodePool#targetNodeCount}.
   * @param minNodeCount
   *         Specifies the {@link App.NodePool#minNodeCount}.
   * @param maxNodeCount
   *         Specifies the {@link App.NodePool#maxNodeCount}.
   * @param hardwareProfile
   *         Specifies the {@link HardwareProfile} that nodes of this {@link App.NodePool} should have.
   * @param roles
   *         Specifies what {@link Server.Role}s that nodes of this {@link App.NodePool} will function as.
   * @param autoScale
   *         Specifies whether auto scaling should be enabled for {@link App.NodePool}.
   *         If not specified then value will be either defaulted to true if a new App.NodePool is being created
   *         or not be updated if App.NodePool already exists.
   *         Note: The {@link App.NodePool.AutoScaleSpec#strategy} will be defaulted to
   *               {@link App.NodePool.AutoScaleStrategy.InvalidationQueues} if App.NodePool is being created
   * @param jvm
   *         Specifies the {@link App.NodePool.JvmSpec#jvmMaxMemoryPct} that C3 server nodes will reserve.
   *         If not specified then value will be either defaulted to 0.7 if a new App.NodePool is being created
   *         or not be updated if App.NodePool already exists.
   * @param membership
   *         Specifies the {@link App.NodePool#membership}.
   *         If not specified then value will be either defaulted to membership of {@link CloudProvider}
   *         if a new App.NodePool is being created or not be updated if App.NodePool already exists.
   * @return {@link App.NodePool} that was configured.
   */
  static configureNodePool(name: string, targetNodeCount: number, minNodeCount: number, maxNodeCount: number, hardwareProfile: HardwareProfile, roles: C3.Array<string | null>, autoScale?: boolean | null, jvmMaxMemoryPct?: number | null, membership?: Type | null): App.NodePool;

  /**
   * Updates all {@link App.NodePool}s for this app.
   *
   * Note:
   * {@link App#nodePools} is used to discover all node pools belonging to this App while
   * {@link App.NodePool#update} is used to update each discovered node pool.
   * As a result no {@link App.NodePool.Config}s are modified as part of this action.
   *
   * @param spec
   *         Specifies the {@link CloudClusterOpSpec} to be used for updating all node pools.
   *         If {@link CloudClusterOpSpec#doNotRemote} is true, then this action will not be remoted to the {@link App#parentC3App}.
   *         If {@link CloudClusterOpSpec#doNotUseCache} is true, then infra-related config caches will be dropped before critical operations.
   * @return {@link BatchError} if any, where an error is reported on per App.NodePool basis
   */
  updateAllNodePools(spec?: CloudClusterOpSpec | null): BatchError;

  /**
   * Updates all {@link App.NodePool}s for this app.
   *
   * Note:
   * {@link App#nodePools} is used to discover all node pools belonging to this App while
   * {@link App.NodePool#update} is used to update each discovered node pool.
   * As a result no {@link App.NodePool.Config}s are modified as part of this action.
   *
   * @param spec
   *         Specifies the {@link CloudClusterOpSpec} to be used for updating all node pools.
   *         If {@link CloudClusterOpSpec#doNotRemote} is true, then this action will not be remoted to the {@link App#parentC3App}.
   *         If {@link CloudClusterOpSpec#doNotUseCache} is true, then infra-related config caches will be dropped before critical operations.
   * @return {@link BatchError} if any, where an error is reported on per App.NodePool basis
   */
  static updateAllNodePools(spec?: CloudClusterOpSpec | null): BatchError;

  /**
   * Helper function to configure an {@link App.NodePool} that will serve as C3 server task nodes and update nodes for
   * this node pool. This function is meant to configure fields that are most frequently modified for task nodes. This
   * is also the recommended API to reconfigure and update singlenode deployments.
   *
   * @param targetNodeCount
   *         Specifies the {@link App.NodePool#targetNodeCount} for the task node pool. This will be limited within the
   *         boundaries of {@link App.NodePool#minNodeCount} and {@link App.NodePool#maxNodeCount}.
   * @param cpu
   *         Specifies the cpu count that nodes of this {@link App.NodePool} should have.
   * @param memoryMb
   *         Specifies the memoryMb size that nodes of this {@link App.NodePool} should have.
   * @param autoScale
   *         Specifies whether auto scaling should be enabled for {@link App.NodePool}.
   * @return {@link App.NodePool} that was configured and updated.
   */
  updateTaskNodePool(targetNodeCount: number, cpu: number, memoryMb: number, autoScale?: boolean): App.NodePool;

  /**
   * Helper function to configure an {@link App.NodePool} that will serve as C3 server task nodes and update nodes for
   * this node pool. This function is meant to configure fields that are most frequently modified for task nodes. This
   * is also the recommended API to reconfigure and update singlenode deployments.
   *
   * @param targetNodeCount
   *         Specifies the {@link App.NodePool#targetNodeCount} for the task node pool. This will be limited within the
   *         boundaries of {@link App.NodePool#minNodeCount} and {@link App.NodePool#maxNodeCount}.
   * @param cpu
   *         Specifies the cpu count that nodes of this {@link App.NodePool} should have.
   * @param memoryMb
   *         Specifies the memoryMb size that nodes of this {@link App.NodePool} should have.
   * @param autoScale
   *         Specifies whether auto scaling should be enabled for {@link App.NodePool}.
   * @return {@link App.NodePool} that was configured and updated.
   */
  static updateTaskNodePool(targetNodeCount: number, cpu: number, memoryMb: number, autoScale?: boolean): App.NodePool;

  /**
   * Helper function to configure an {@link App.NodePool} that will serve as C3 server leader nodes and update nodes for
   * this node pool. This function is meant to configure fields that are most frequently modified for leader nodes.
   *
   * @param targetNodeCount
   *         Specifies the {@link App.NodePool#targetNodeCount} for the task node pool. This will be limited within the
   *         boundaries of {@link App.NodePool#minNodeCount} and {@link App.NodePool#maxNodeCount}.
   * @param cpu
   *         Specifies the cpu count that nodes of this {@link App.NodePool} should have.
   * @param memoryMb
   *         Specifies the memoryMb size that nodes of this {@link App.NodePool} should have.
   * @return {@link App.NodePool} that was configured and updated.
   */
  updateLeaderNodePool(targetNodeCount: number, cpu: number, memoryMb: number): App.NodePool;

  /**
   * Helper function to configure an {@link App.NodePool} that will serve as C3 server leader nodes and update nodes for
   * this node pool. This function is meant to configure fields that are most frequently modified for leader nodes.
   *
   * @param targetNodeCount
   *         Specifies the {@link App.NodePool#targetNodeCount} for the task node pool. This will be limited within the
   *         boundaries of {@link App.NodePool#minNodeCount} and {@link App.NodePool#maxNodeCount}.
   * @param cpu
   *         Specifies the cpu count that nodes of this {@link App.NodePool} should have.
   * @param memoryMb
   *         Specifies the memoryMb size that nodes of this {@link App.NodePool} should have.
   * @return {@link App.NodePool} that was configured and updated.
   */
  static updateLeaderNodePool(targetNodeCount: number, cpu: number, memoryMb: number): App.NodePool;

  /**
   * Helper function to terminate all {@link App.NodePool}s that are backing C3 server task nodes. Note that this will
   * not terminate singlenode deployments although they essentially serve as a C3 server task node.
   */
  terminateTaskNodePools(): void;

  /**
   * Helper function to terminate all {@link App.NodePool}s that are backing C3 server task nodes. Note that this will
   * not terminate singlenode deployments although they essentially serve as a C3 server task node.
   */
  static terminateTaskNodePools(): void;

  /**
   * Sets app's creator as owner
   */
  setCreatorAsOwner(): void;

  /**
   * Sets app's creator as owner
   */
  static setCreatorAsOwner(): void;

  /**
   * Ensures that all {@link Engine engines} dedicated to this {@link App.Node App node} are running.
   *
   * This method will ensure: All there is and instance of each {@link Engine.Static engines} is running for this app.
   *
   * This method is idempotent.
   *
   * @see #stopEngines
   * @see #Engine.Daemon
   * @see #Engine.Periodic
   */
  startEngines(): void;

  /**
   * Ensures that all {@link Engine engines} dedicated to this {@link App.Node App node} are running.
   *
   * This method will ensure: All there is and instance of each {@link Engine.Static engines} is running for this app.
   *
   * This method is idempotent.
   *
   * @see #stopEngines
   * @see #Engine.Daemon
   * @see #Engine.Periodic
   */
  static startEngines(): void;

  /**
   * Stops ALL {@link Engine.Static static engines}.
   *
   * @see #startEngines
   * @see #Engine.Daemon
   * @see #Engine.Periodic
   */
  stopEngines(): void;

  /**
   * Stops ALL {@link Engine.Static static engines}.
   *
   * @see #startEngines
   * @see #Engine.Daemon
   * @see #Engine.Periodic
   */
  static stopEngines(): void;

  /**
   * Called during app startup to apply any necessary schema upgrades/migrations and upsert any new seed data.  N
   * Note that any failure that occurs in updating the schema will prohibit the app from starting.
   *
   * @param syncSeedData
   *        If true, the seed data will be upserted synchronously (asynchronous by default).
   *
   * @see SchemaUpgrade
   */
  upgradeSchema(syncSeedData?: boolean): void;

  /**
   * Called during app startup to apply any necessary schema upgrades/migrations and upsert any new seed data.  N
   * Note that any failure that occurs in updating the schema will prohibit the app from starting.
   *
   * @param syncSeedData
   *        If true, the seed data will be upserted synchronously (asynchronous by default).
   *
   * @see SchemaUpgrade
   */
  static upgradeSchema(syncSeedData?: boolean): void;

  /**
   * Call to update seed data from rootPkg of this App. {@link Pkg.upsertAllSeed}
   */
  upsertAllSeed(sync?: boolean): void;

  /**
   * Call to update seed data from rootPkg of this App. {@link Pkg.upsertAllSeed}
   */
  static upsertAllSeed(sync?: boolean): void;

  /**
   * @return true, If the app is updated with Seed data of the rootPkg.
   */
  seedDataUpdated(): boolean;

  /**
   * @return true, If the app is updated with Seed data of the rootPkg.
   */
  static seedDataUpdated(): boolean;

  /**
   * Retrieve any critical seed issues in app that are found.
   */
  criticalSeedIssues(): C3.Array<SeedData.Issue | null>;

  /**
   * Retrieve any critical seed issues in app that are found.
   */
  static criticalSeedIssues(): C3.Array<SeedData.Issue | null>;

  /**
   * @return {@link AppToken} for current user to access this app via provided url or default url.
   *    WARNING: If Ctx.isRoot, then will have C3.ClusterAdmin role in the receiver app.
   */
  authn(url?: string | null): string;

  /**
   * @return {@link AppToken} for current user to access this app via provided url or default url.
   *    WARNING: If Ctx.isRoot, then will have C3.ClusterAdmin role in the receiver app.
   */
  static authn(url?: string | null): string;

  /**
   * Resets all configs & secrets for this App at the {@link ConfigOverride#APP} level or lower.
   *
   * @param confirm
   *         Confirmation from user that they understand and confirm deletion of configs and secrets for this App.
   * @return 'true' if deletion was successful
   */
  resetConfig(confirm?: boolean): boolean;

  /**
   * Resets all configs & secrets for this App at the {@link ConfigOverride#APP} level or lower.
   *
   * @param confirm
   *         Confirmation from user that they understand and confirm deletion of configs and secrets for this App.
   * @return 'true' if deletion was successful
   */
  static resetConfig(confirm?: boolean): boolean;

  /**
   * Determines if the user is able to view the app with appId
   */
  static validateId(appId?: string | null): boolean;

  /**
   * Semantic Server Version of this App
   */
  get serverVersion(): string;

  /**
   * Semantic Server Version of this App
   */
  static get serverVersion(): string;

  /**
   * Get the app's rootPkgVersion based on the rootPkg, rootPkgVersion or its env's configuredServerVersion
   */
  static resolveRootPkgVersion(envId?: string | null, rootPkg?: string | null, rootPkgVersion?: string | null): string;

  static resolveServerVersion(envId?: string | null, rootPkg?: string | null, rootPkgVersion?: string | null, requestedServerVersion?: string | null): string;

  /**
   * Checks whether given c3-server version is available to the cluster by utilizing {@link ContainerImage#checkAvailable}
   * under the hood.
   * If {@link Cluster#isLocal} is true, then returns true.
   * If {@link ContainerRegistry#passwordSecret} for "c3" is missing, then returns null.
   * If {@link ContainerRegistry#passwordSecret} is present, then returns result of invoking {@link ContainerImage#checkAvailable}
   */
  static isServerVersionAvailable(serverVersion?: string | null): boolean | null;

  /**
   * List loggers for this App
   * @return a map of server id to a map of logger name to log level
   */
  listLoggers(): C3.Map<string | null, C3.Map<string | null, string>>;

  /**
   * List loggers for this App
   * @return a map of server id to a map of logger name to log level
   */
  static listLoggers(): C3.Map<string | null, C3.Map<string | null, string>>;

  /**
   * Set logLevel for the given logger for this app
   * @param logger
   *        logger name. If not specified the log level for all the registered loggers will be changed
   * @param level
   *        Logger.Level to set
   * @param timeout
   *        the amount of time to wait before reverting back to the original log level
   */
  setLogLevel(logger?: string | null, level: string, timeout?: string | null): void;

  /**
   * Set logLevel for the given logger for this app
   * @param logger
   *        logger name. If not specified the log level for all the registered loggers will be changed
   * @param level
   *        Logger.Level to set
   * @param timeout
   *        the amount of time to wait before reverting back to the original log level
   */
  static setLogLevel(logger?: string | null, level: string, timeout?: string | null): void;

  /**
   * Returns {@link ClusterLogs} for this App
   */
  fetchClusterLogs(): ClusterLogs;

  /**
   * Returns {@link ClusterLogs} for this App
   */
  static fetchClusterLogs(): ClusterLogs;

  /**
   * Triggers rebuild of the current app tag based on provided spec
   *
   * Important: App.rebuild requires a minimum of 2 compute threads to proceed.
   */
  static rebuild(spec: AppRebuildSpec): AppRebuildStatus | null;

  /**
   * Checks the status of the current or last app rebuild - if app was never rebuilt returns null
   */
  static rebuildStatus(detailed?: boolean): AppRebuildStatus | null;

  /**
   * Cancels app rebuild in progress; CAUTION: it does not cancel any individual entity type rebuild
   * actions that are already running
   */
  static cancelRebuild(): AppRebuildStatus | null;

  /**
   * Generates a heap histogram for all nodes of the app and uploads it to the Telemetry FS mount
   * @param include
   *         {@link Java.JmapObjs} supplied as flag to jmap operation
   */
  dumpJvmHeapHistogram(include?: string): void;

  /**
   * Generates a heap histogram for all nodes of the app and uploads it to the Telemetry FS mount
   * @param include
   *         {@link Java.JmapObjs} supplied as flag to jmap operation
   */
  static dumpJvmHeapHistogram(include?: string): void;

  /**
   * Generates a heapDump for all nodes of the app and uploads it to Telemetry FS mount
   * @param include
   *         {@link Java.JmapObjs} supplied as flag to jmap operation
   */
  dumpJvmHeap(include?: string): void;

  /**
   * Generates a heapDump for all nodes of the app and uploads it to Telemetry FS mount
   * @param include
   *         {@link Java.JmapObjs} supplied as flag to jmap operation
   */
  static dumpJvmHeap(include?: string): void;

  /**
   * Fetches and returns {@link CloudResource}s belonging to this {@link App}, but not belonging to the server or the currently active cloud services.
   * @param parentCloudResourceType
   *         Parent C3 Type whose subtypes are listed. It will need to be {@link CloudResource} or any of its subtypes.
   *         If none is provided, then {@link K8sResource}s are returned.
   * @return orphaned {@link CloudResource}s
   */
  orphanResources(parentCloudResourceType?: Type | null): C3.Map<string | null, C3.Array<CloudResource | null>>;

  /**
   * Fetches and returns {@link CloudResource}s belonging to this {@link App}, but not belonging to the server or the currently active cloud services.
   * @param parentCloudResourceType
   *         Parent C3 Type whose subtypes are listed. It will need to be {@link CloudResource} or any of its subtypes.
   *         If none is provided, then {@link K8sResource}s are returned.
   * @return orphaned {@link CloudResource}s
   */
  static orphanResources(parentCloudResourceType?: Type | null): C3.Map<string | null, C3.Array<CloudResource | null>>;

  /**
   * Perform cross app file download. Download the file located at `src` within the (remote) application to the destination `dest`
   * @param src
   *         url of the file to download. It should be accessible from the App instance upon which this method was invoked.
   * @param dest
   *         destination url to download the file to. It should be accessible from the app in which this method was called.
   * @param spec
   *         the {@link FileOperationSpec}. Please set a `retrySpec` with `maxTotalMillis` if uploading a large file
   */
  downloadFile(src: string, dest: string, spec?: FileOperationSpec | null): void;

  /**
   * Perform cross app file download. Download the file located at `src` within the (remote) application to the destination `dest`
   * @param src
   *         url of the file to download. It should be accessible from the App instance upon which this method was invoked.
   * @param dest
   *         destination url to download the file to. It should be accessible from the app in which this method was called.
   * @param spec
   *         the {@link FileOperationSpec}. Please set a `retrySpec` with `maxTotalMillis` if uploading a large file
   */
  static downloadFile(src: string, dest: string, spec?: FileOperationSpec | null): void;

  /**
   * Perform cross app file upload. Upload the file located at `src` to the destination `dest` within the (remote) application
   * @param src
   *         url of the file to download. It should be accessible from the app in which this method was called.
   * @param dest
   *         destination url to upload the file to. It should be accessible from the App instance upon which this method was invoked.
   * @param spec
   *         the {@link FileOperationSpec}. Please set a `retrySpec` with `maxTotalMillis` if uploading a large file
   */
  uploadFile(src: string, dest: string, spec?: FileOperationSpec | null): HttpResponse | null;

  /**
   * Perform cross app file upload. Upload the file located at `src` to the destination `dest` within the (remote) application
   * @param src
   *         url of the file to download. It should be accessible from the app in which this method was called.
   * @param dest
   *         destination url to upload the file to. It should be accessible from the App instance upon which this method was invoked.
   * @param spec
   *         the {@link FileOperationSpec}. Please set a `retrySpec` with `maxTotalMillis` if uploading a large file
   */
  static uploadFile(src: string, dest: string, spec?: FileOperationSpec | null): HttpResponse | null;

  /**
   * @return {@Link Content} of a file from a remote App which is accessible from the app in which this method was called
   * @param url
   *         url of the file on this app
   */
  fileContent(url: string, spec?: FileOperationSpec | null): Content | null;

  /**
   * @return {@Link Content} of a file from a remote App which is accessible from the app in which this method was called
   * @param url
   *         url of the file on this app
   */
  static fileContent(url: string, spec?: FileOperationSpec | null): Content | null;
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

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λPredicate<T> {
  (t: T): boolean
}
