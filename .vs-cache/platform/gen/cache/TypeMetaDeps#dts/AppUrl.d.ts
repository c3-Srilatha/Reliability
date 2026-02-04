// TypeScript definitions for the C3 type AppUrl

/**
 * Configuration of URL to access a given C3 Application, Environment or Cluster.
 *
 * #env and #app fields determine how final REST endpoint URL is formulated. E.g. assuming configured AppUrl id is
 * `dev.c3.ai` and C3 server version is 8 then REST endpoint to `login` action should be constructed as follows:
 *
 * * if both `env` & `app` fields are empty i.e. if this is a Cluster URL then endpoint should be:
 *     `https://dev.c3.ai/{$target-env}/{$target-app}/api/8/login`
 * * if `app` field is empty i.e. if this is an Environment URL then:
 *     `https://dev.c3.ai/{$target-app}/api/8/login`
 * * if both `env` and `app` field is set i.e. if this is a vanity URL then:
 *     `https://dev.c3.ai/api/8/login`
 *
 * Roles required to upsert and remove Vanity URLs, Env URLs, and Cluster URLs:
 * * Vanity URLs: AppAdmin or higher
 * * Env URLs: EnvAdmin or higher
 * * Cluster URLs: ClusterAdmin
 *
 * @remarks this represents a value passed to a method that expects an instance of AppUrl
 */
declare interface IAppUrl {

  /**
   * The host of a URL (see host field of {@link Url#host}. This is what will be registered as a record in the
   * DNS server in a K8s Environment within a cloud provider.
   */
  id: string;

  configOverride?: string | null;

  secretOverride?: string | null;

  /**
   * Captures any issues that occurred while deserializing from filesystem
   */
  issues?: C3.Array<string | null> | Array<string | null>;

  /**
   * Optional name of the C3 Environment
   */
  env?: string | null;

  /**
   * Optional name of the C3 Application
   */
  app?: string | null;

  /**
   * Scheme of URL, ex. host = 'https'
   * Will be inferred from incoming HTTP Request and should not be configured
   */
  scheme?: string | null;

  /**
   * Port Number of URL, ex. port = 8888.
   * Will be inferred from incoming HTTP Request and should not be configured
   */
  port?: number | null;

  /**
   * Boolean that specifies whether a fetched AppUrl is one that actually exists or one that is returned implicitly
   */
  implicit?: boolean;

  /**
   * Boolean that specifies whether a fetched AppUrl is internal to the Cluster. Internal AppUrls should not be
   * explicitly set into config.
   */
  internal?: boolean;

  /**
   * Optional HttpSecurityConfig can be added to the AppUrl. If set, this object override the global HttpSecurityConfig
   */
  httpSecurityConfigOverride?: IHttpSecurityConfig | null;

  /**
   * The only kind of authentication protocol that should be used for this AppUrl
   */
  authenticationKind?: string | null;

  idpConfig?: IIdpConfig | null;
}

/**
 * Configuration of URL to access a given C3 Application, Environment or Cluster.
 *
 * #env and #app fields determine how final REST endpoint URL is formulated. E.g. assuming configured AppUrl id is
 * `dev.c3.ai` and C3 server version is 8 then REST endpoint to `login` action should be constructed as follows:
 *
 * * if both `env` & `app` fields are empty i.e. if this is a Cluster URL then endpoint should be:
 *     `https://dev.c3.ai/{$target-env}/{$target-app}/api/8/login`
 * * if `app` field is empty i.e. if this is an Environment URL then:
 *     `https://dev.c3.ai/{$target-app}/api/8/login`
 * * if both `env` and `app` field is set i.e. if this is a vanity URL then:
 *     `https://dev.c3.ai/api/8/login`
 *
 * Roles required to upsert and remove Vanity URLs, Env URLs, and Cluster URLs:
 * * Vanity URLs: AppAdmin or higher
 * * Env URLs: EnvAdmin or higher
 * * Cluster URLs: ClusterAdmin
 *
 * @remarks this represents a made instance of AppUrl
 */
declare class AppUrl extends Obj {

  /**
   * The host of a URL (see host field of {@link Url#host}. This is what will be registered as a record in the
   * DNS server in a K8s Environment within a cloud provider.
   */
  readonly id: string;
  withId(id: string): AppUrl;

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): AppUrl;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): AppUrl;

  /**
   * Captures any issues that occurred while deserializing from filesystem
   */
  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): AppUrl;

  /**
   * Optional name of the C3 Environment
   */
  readonly env?: string | null;
  withEnv(env: string | null): AppUrl;

  /**
   * Optional name of the C3 Application
   */
  readonly app?: string | null;
  withApp(app: string | null): AppUrl;

  /**
   * Scheme of URL, ex. host = 'https'
   * Will be inferred from incoming HTTP Request and should not be configured
   */
  readonly scheme?: string | null;
  withScheme(scheme: string | null): AppUrl;

  /**
   * Port Number of URL, ex. port = 8888.
   * Will be inferred from incoming HTTP Request and should not be configured
   */
  readonly port?: number | null;
  withPort(port: number | null): AppUrl;

  /**
   * Boolean that specifies whether a fetched AppUrl is one that actually exists or one that is returned implicitly
   */
  readonly implicit?: boolean;
  withImplicit(implicit: boolean): AppUrl;

  /**
   * Boolean that specifies whether a fetched AppUrl is internal to the Cluster. Internal AppUrls should not be
   * explicitly set into config.
   */
  readonly internal?: boolean;
  withInternal(internal: boolean): AppUrl;

  /**
   * Optional HttpSecurityConfig can be added to the AppUrl. If set, this object override the global HttpSecurityConfig
   */
  readonly httpSecurityConfigOverride?: HttpSecurityConfig | null;
  withHttpSecurityConfigOverride(httpSecurityConfigOverride: IHttpSecurityConfig | null): AppUrl;

  /**
   * The only kind of authentication protocol that should be used for this AppUrl
   */
  readonly authenticationKind?: string | null;
  withAuthenticationKind(authenticationKind: string | null): AppUrl;

  readonly idpConfig?: IdpConfig | null;
  withIdpConfig(idpConfig: IIdpConfig | null): AppUrl;

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
  static fromString(s: string | null): AppUrl | null;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): AppUrl | null;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): AppUrl;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): AppUrl;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): AppUrl;

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
  static make(fields: any, withDefaults?: boolean): AppUrl;

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
  static fromJson(json: any | null): AppUrl | null;

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
  static fromJsonString(json: string | null): AppUrl | null;

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
  static fromXmlString(xml: string | null): AppUrl | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): AppUrl | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): AppUrl;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): AppUrl;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): AppUrl;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<AppUrl | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<AppUrl | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): AppUrl;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): AppUrl;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): AppUrl;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): AppUrl;

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
  withField(field: string, value: any, doNotConvert?: boolean): AppUrl;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): AppUrl;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): AppUrl;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): AppUrl;

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
  withoutFieldAtPath(path: string): AppUrl;

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
  withoutField(field: string | null): AppUrl;

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
  withoutField(field: FieldType | null): AppUrl;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): AppUrl;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): AppUrl;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): AppUrl;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): AppUrl;

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
  defaultField(field: string): AppUrl;

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
  defaultField(field: FieldType): AppUrl;

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
  unsetField(field: string): AppUrl;

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
  unsetField(field: FieldType): AppUrl;

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
  removeField(field: string): AppUrl;

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
  removeField(field: FieldType): AppUrl;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): AppUrl;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): AppUrl;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): AppUrl;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): AppUrl;

  mergeJson(json: any | null): AppUrl;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): AppUrl;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): AppUrl;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<AppUrl | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<AppUrl | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<AppUrl | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<AppUrl | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<AppUrl | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, AppUrl | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, AppUrl | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<AppUrl | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<AppUrl | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): AppUrl;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): AppUrl;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): AppUrl;

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
  afterMake(): AppUrl;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): AppUrl;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<AppUrl>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): AppUrl;

  /**
   * @return key field type.
   */
  static keyFieldType(): FieldType;

  /**
   * @return key field value.
   */
  keyFieldValue(): string | null;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  singletonMap(): C3.Map<string | null, WithKey | null>;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): AppUrl | null;

  /**
   * @return whether the cache already contains this instance
   */
  isCached(): boolean;

  /**
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return stream of all available Cached instances.
   */
  static allCached(doNotProduceAll?: boolean): Stream<AppUrl | null>;

  /**
   * @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return existing instances of this type that satisfy filter from data cache.
   */
  static find(filter?: string | null, doNotProduceAll?: boolean): Stream<AppUrl | null>;

  /**
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return existing instances of this type that satisfy filter from data cache.
   */
  static findBy(field: string, value: any, doNotProduceAll?: boolean): Stream<AppUrl | null>;

  /**
   * @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
   *
   * @see forCacheKey
   * @see getCached
   */
  static findByCacheKey(key: string): AppUrl | null;

  /**
   * Returns cached instance by key, with secrets removed.
   */
  static forCacheKey(key: string | null): AppUrl | null;

  /**
   * @return cached instance.
   *
   * @see forCacheKey
   * @see findByCacheKey
   */
  getCached(): AppUrl | null;

  /**
   * @return newly produced cached instance.
   */
  refreshCache(): AppUrl | null;

  /**
   * @return cache key for this instance.
   */
  cacheKey(): string;

  /**
   * Should produce an entry for the cache key. This method should not be called directly.
   */
  static produce(key: string): AppUrl | null;

  /**
   * Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
   */
  static produceAll(): C3.Map<string | null, AppUrl | null>;

  /**
   * Override for sub-types to produce all values.
   */
  static doProduceAll(): C3.Map<string | null, AppUrl | null>;

  /**
   * Evicts this instance from cache on all nodes of this application.
   */
  evictFromCache(): void;

  /**
   * Evicts this instance from cache of the current node.
   */
  evictFromCacheLocalOnly(): void;

  /**
   * Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
   * Will not trigger any cache invalidation broadcast.
   * see {@link Server#evictFromLocalAppsCaches}
   */
  evictFromCacheLocalOnlyAllApps(): void;

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
  getConfig(): AppUrl;

  /**
   * @return cached config value for the provided field path if set or `null` or error otherwise depending on
   *         `failIfMissing`; note that will not return secret value.
   */
  configValue(path: string, failIfMissing?: boolean): any;

  /**
   * Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
   * is required. For Nameable configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
   */
  getSecret(): AppUrl;

  /**
   * @return cached secret value for the provided field path in this Config object or `null` if not set or error
   *         depending on `failIfMissing`.
   */
  secretValue(path: string, failIfMissing?: boolean): any;

  /**
   * Reads and url decodes the content at the path.
   * Path must represent a string value.
   */
  decodedValue(path: string, failIfMissing?: boolean): string | null;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.USER level.
   */
  isUserOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.APP level.
   */
  isAppOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
   */
  isClusterOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ENV level.
   */
  isEnvOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
   */
  isRootOverride(): boolean;

  /**
   * @return `true` if this configuration has not been set and comes from seed / defaults.
   */
  isSeed(): boolean;

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
   * @return return cached config instance for provided config key.
   */
  static forConfigKey(configKey: string | null): AppUrl | null;

  /**
   * @return stream of all available Config keys for this type; #forConfigKey can be used to look up Config instance.
   */
  static listConfigKeys(): Stream<string | null>;

  /**
   * @param
   *
   * @return stream of all available Config instances for this type.
   */
  static listConfigs(parallel?: boolean, filter?: λPredicate<string> | null): Stream<AppUrl | null>;

  /**
   * @return all config template values by override.
   */
  allConfigValueOverrides(path: string): C3.Map<string | null, any | null>;

  /**
   * @return all config template jsons by override.
   */
  allConfigOverrides(): C3.Map<string | null, any | null>;

  /**
   * @return all secret template values by override.
   */
  allSecretValueOverrides(path: string): C3.Map<string | null, any | null>;

  /**
   * @return all secret templates by override.
   */
  allSecretOverrides(): C3.Map<string | null, any | null>;

  /**
   * Sets configuration field value at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  setConfigValue(path: string, value: any, override?: string | null, embeddedFileName?: string | null): void;

  /**
   * Sets multiple field values to those specified in the map. The map keys are the paths.
   * @see setConfigValue
   */
  setConfigValues(from: C3.Map<string, any>, override?: string | null): void;

  /**
   * Sets multiple field values to be the same as the passed instance.
   * @see setConfigValue
   */
  setConfigValues(from: AppUrl, override?: string | null): void;

  /**
   * Sets configuration field value template at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  setConfigValueTemplate(path: string, valueTemplate: string | null, override?: string | null): void;

  /**
   * Adds a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  insertConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string | null): void;

  /**
   * Sets a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  setConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string | null): void;

  /**
   * Adds a single value to a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  addConfigElement(pathToCollectionField: string, value: any, override?: string | null): void;

  /**
   * Sets a key-value pair in specified map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  setConfigMapValue(pathToMapField: string, key: any, value: any, override?: string | null): void;

  /**
   * Removes a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigElementAt(pathToCollectionField: string, index: number, override?: string | null): void;

  /**
   * Removes a single value in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigElement(pathToCollectionField: string, value: any, override?: string | null): void;

  /**
   * Removes a single key in a map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigMapKey(pathToMapField: string, key: any, override?: string | null): void;

  /**
   * Url encodes the content at the path and returns new config object with the encoded value.
   * Path must represent a string value.
   */
  setEncodedValue(path: string, value: string, override: string): void;

  /**
   * Sets secret field value or secrets within value at provided path in this Config object.
   * @see clearSecretValue
   */
  setSecretValue(path: string, value: any, override?: string | null): void;

  /**
   * Sets multiple secret field values to those specified in the map. The map keys are the paths.
   * @see setSecretValue
   */
  setSecretValues(from: C3.Map<string, any>, override?: string | null): void;

  /**
   * Sets multiple secret field values to be the same as the passed instance.
   * @see setSecretValue
   */
  setSecretValues(from: AppUrl, override?: string | null): void;

  /**
   * Sets secret field value template at provided path in this Config object.
   * @see clearSecretValue
   */
  setSecretValueTemplate(path: string, value: string | null, override?: string | null): void;

  /**
   * Clears configuration field value at provided path in this Config object at provided override level. Note will not
   * clear secret value.
   */
  clearConfigValue(path: string, override?: string | null): void;

  /**
   * Clears secret field value at provided path in this Config object at provided override level.
   */
  clearSecretValue(path: string, override?: string | null): void;

  /**
   * Clears configuration field value at provided path in this Config object at all override levels. Note will not
   * clear secret value.
   */
  clearConfigValueAllOverrides(path: string): void;

  /**
   * Clears secret field value at provided path in this Config object at all override levels.
   */
  clearSecretValueAllOverrides(path: string): void;

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
  static loadConfigAndSecret(configKey: string): AppUrl | null;

  /**
   * Loads config override template json if exists or `null`. Will not include secrets.
   * Note that this skips caching and directly fetches config from the config store.
   */
  loadConfigOverride(override: string): any | null;

  /**
   * Loads secret override template json if exists or `null`. Will not include non secrets.
   * Note that this skips caching and directly fetches secret from the vault.
   */
  loadSecretOverride(override: string): any | null;

  /**
   * @return file for an embedded config value.
   */
  embeddedFile(embeddedFileName: string, override?: string | null): File;

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
   * @return the config file path for a config instance at a given override;
   */
  configFilePath(override: string): string | null;

  /**
   * @return the secret file path for a config instance at a given override;
   */
  secretFilePath(override: string): string | null;

  /**
   * @return pair of config and secret files for provided override / appId; note that will always return pair
   *         of Files even if physical file doesn't exist.
   */
  configAndSecretFilePair(override: string, appId: string): Pair<File | null, File | null> | null;

  /**
   * @return map of pair of config and secret files by override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  allConfigAndSecretFiles(): C3.Map<string | null, Pair<File | null, File | null> | null>;

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
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
   * #setConfigValue or #setConfig for that.
   */
  setSecret(override?: string | null): void;

  /**
   * Executes actions on all config override levels (within a valid range) for a particular instance of config.
   */
  eachOverride(action?: λBiConsumer<Config, string> | null): void;

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
   * Clears specified configuration including secrets for this instance on all override levels.
   */
  clearConfigAndSecretAllOverrides(): void;

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
  removeSecrets(): AppUrl | null;

  /**
   * @return this config with only secret values.
   */
  removeNonSecrets(): AppUrl | null;

  /**
   * Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
   * validation and setup.
   */
  validate(): AppUrl;

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
   * Accessor that returns httpSecurityConfigOverride if set, otherwise returns default/global HttpSecurityConfig
   */
  httpSecurityConfig(): HttpSecurityConfig;

  /**
   * The configuration of the identity provider used for authentication when accessing this AppUrl
   *    that is defined by the authenticationKind. If one is set it will only respect that form of authentication,
   *    otherwise it will check against all possible kinds for the host.
   */
  get configuredIdpConfig(): IdpConfig;

  /**
   * @return Url instance for this App Url; not however it is recommended to use #endpoint method is most cases
   */
  get url(): Url;

  /**
   * Host of URL, ex. host = 'ftp.example.com'.
   */
  get host(): string;

  /**
   * Domain of URL, ex. 'example.com'
   */
  get domainName(): string | null;

  /**
   * @return `true` if this AppUrl is for a specific C3 App
   */
  isVanity(): boolean;

  /**
   * @return `true` if this AppUrl is for a specific C3 Env
   */
  isEnv(): boolean;

  /**
   * @return `true` if this AppUrl is specific to a C3 Cluster
   */
  isCluster(): boolean;

  /**
   * @return `true` if this AppUrl is registered in config
   */
  isConfigured(): boolean;

  /**
   * Checks if this AppUrl can be used to route to and access an {@link App}.
   *
   * @param app
   *         Specification for what App this AppUrl is intended for.
   *         Setting this field will set the corresponding env and app path for this App.
   * @return `true` if pinging via this AppUrl returns HTTP status code 200
   */
  isHealthy(app?: App | null): boolean;

  /**
   * Retrieves the endpoint.
   * @param encodedSubPath
   *         Remainder of path
   * @return endpoint based on this AppUrl and sub-path.
   */
  endpoint(encodedSubPath?: string | null): string;

  /**
   * Retrieves the endpoint path prefix.
   *
   * For Cluster URLs, it will return `env/app`
   * For Environment URLs, it will return `app`
   * For Vanity URLs, it will return an empty string
   * @param endpointUrl
   *         The URL for which to find the endpoint path
   * @return The endpoint path
   */
  static endpointPathPrefix(endpointUrl?: string | null): string;

  /**
   * Produce a URL for specified Application. If this is an Environment URL, then the Environment name must match.
   * If it's a Vanity URL, both the env and app names must match. Otherwise a URL will be produced which may not be
   * valid if the env doesn't exist (Cluster URL) or app is not started (env and Cluster URLs).
   *
   * @param envName
   *         Environment name
   * @param appName
   *         Application name
   * @param encodedSubPath
   *         Remainder of path
   * @return The endpoint based on this AppUrl and sub-path for the specified Application.
   */
  appEndpoint(envName: string, appName: string, encodedSubPath?: string | null): string;

  /**
   * Produce a URL for specified Application. If this is an Environment URL, then the Environment name must match.
   * If it's a Vanity URL, both the env and app names must match. Otherwise a URL will be produced which may not be
   * valid if the env doesn't exist (Cluster URL) or app is not started (env and Cluster URLs).
   *
   * @param app
   *         Application instances
   * @param encodedSubPath
   *         Remainder of path
   * @return endpoint based on this AppUrl and sub-path for the specified Application.
   */
  appEndpoint(app: App, encodedSubPath?: string | null): string;

  /**
   * @param endpoint
   *         The endpoint to get the AppUrl from.
   * @param failIfMissing
   *         Boolean indicating whether the function should fail in case there is no AppUrl for the given endpoint.
   * @return AppUrl identified with provided endpoint's host if it exists.
   */
  static forEndpoint(endpoint: string, failIfMissing?: boolean): AppUrl | null;

  /**
   * @param endpoint
   *         The endpoint to get the AppUrl from.
   * @param failIfMissing
   *         Boolean indicating whether the function should fail in case there is no AppUrl for the given endpoint.
   * @return AppUrl identified with provided endpoint's host if it exists.
   */
  static forEndpoint(endpoint: Url, failIfMissing?: boolean): AppUrl | null;

  /**
   * Performs validation on the AppUrl, upserts the AppUrl at the appropriate override, and registers this AppUrl in the
   * underlying cloud provider's DNS registry. If an AppUrl exists for the given id, then the existing AppUrl will be
   * replaced if the user has the sufficient permissions.
   *
   * This API should be the only way to upsert / configure an AppUrl. Configuring an AppUrl via Config APIs is prone to
   * operator error since there is no field / permission validation.
   */
  upsert(): void;

  /**
   * Removes this AppUrl from the underlying cloud provider's DNS registry and config framework.
   *
   * This API should be the only way to remove an AppUrl. Removing an AppUrl via Config APIs is prone to
   * operator error there is no field / permission validation.
   */
  remove(): void;

  /**
   * Extracts the target {@link Env} and {@link App} using the provided encodedPath and the {@link #app} and
   * {@link #env} fields on the AppUrl.
   * Example:
   * Assume a URL is a Cluster URL, then input '/env1/app1/console/' should produce the Triple <env1 | app1 | /console/>
   *
   * Assume a URL is an Env URL for env2, then input '/app1/console/' should produce the Triple <env2 | app1 | /console/>
   *
   * Assume a URL is an App URL for app1 belonging to env3, then input '/console/' should produce the Triple <env3 | app1 | /console/>
   *
   * @param encodedPath
   *         The path from which to extract the Env, App, and decoded subPath.
   * @return A triple containing: <envName, appName, subPath>.
   */
  extractEnvApp(encodedPath: string | null): Triple<string | null, string | null, string | null>;

  /**
   * Determine if the path has an empty subPath, after the env/app on the AppUrl.
   *
   * For example: for Cluster URL "/c3/zoo/" is root (the subPath would be "/"), but "/c3/zoo/console/index.html" is
   * not (the subPath would be "/console/index.html").
   * @param encodedPath
   *         The path to check.
   * @return `true` if this AppUrl has an empty subPath.
   *
   * @see #extractEnvApp
   */
  isRootPath(encodedPath: string | null): boolean;

  /**
   * Check if we can add this AppUrl to the cloud provider's underlying DNS registry.
   * @return `true` if this AppUrl can be added.
   */
  canRegisterUrl(): boolean;

  /**
   * Get the hosted zone of this AppUrl.
   * @param passIfNotManagedByCloud
   *         When `true` and this AppUrl is not managed by host cloud an exception will not be thrown.
   * @return Hosted zone for this AppUrl's endpoint; by default will throw an exception if not managed by host cloud
   *         provider
   */
  hostedZone(passIfNotManagedByCloud?: boolean): CloudHostedZone | null;
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
