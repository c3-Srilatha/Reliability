// TypeScript definitions for the C3 type Saml

/**
 * This type is used to parse and generate Saml artifacts
 *
 * @remarks this represents a value passed to a method that expects an instance of Saml
 */
declare interface ISaml {
}

/**
 * This type is used to parse and generate Saml artifacts
 *
 * @remarks this represents a made instance of Saml
 */
declare class Saml extends Obj {

  /**
   * Optional handler of all HTTP requests under `@restful(endpoint)` prefix from one and only sub type of Restful
   */
  static handle(httpPath: string, req: HttpRequest): HttpResponse | null;

  /**
   * Find restful type and potentially method responsible for handling HTTP request with provided path or `null`
   */
  static targetFor(httpPath: string): Pair<Type | null, MethodType | null> | null;

  /**
   * While handling a RESTful request, the incoming HTTP request can be accessed. This works even for types that do not
   * mixin **Restful**, but just use {@link Ann.Restful @restful} annotations.
   */
  static currentRequest(): HttpRequest | null;

  /**
   * Get the origin URL for this endpoint. This only works for RESTful endpoints that mixin **Restful**.
   *
   * @see endpointOrigin
   */
  origin(): string | null;

  /**
   * Get the origin URL for an endpoint. This is useful for types that do not mixin **Restful**, but just use
   * {@link Ann.Restful @restful} annotations.
   */
  static endpointOrigin(endpoint: string): string | null;

  /**
   * Authenticates the user using Authorization header that is sent to the endpoint.
   *
   * @return - Response with status code 200 and the session token set in the Set-Cookie header. Status code 401 otherwise.
   */
  static login(): HttpResponse | null;

  /**
   * Handler of all HTTP requests that require authentication.
   */
  static handleRequest(req?: HttpRequest | null): AuthenticateResult | null;

  /**
   * Authenticates the authorization data supplied via HttpRequest {@link HttpRequest}.
   *
   * @param req
   *          HttpRequest
   * @return - User if authentication is successful, HttpResponse otherwise
   */
  static authenticate(req: HttpRequest): AuthenticateResult;

  static authenticate(spec: AuthenticationSpec): AuthenticateResult;

  /**
   * Authenticate user supplied authentication data.
   */
  static authenticate(authenticationData: string, req?: HttpRequest | null): AuthenticateResult;

  static logout(req?: HttpRequest | null): HttpResponse | null;

  /**
   * Generate a C3 Action Authentication Token ({@link action-auth-token.c3doc.md Action Authentication and Propagation}).
   *
   * @return The action authentication token.
   */
  static generateActionAuthToken(): string;

  /**
   * Generate c3 key auth token with given username and user's private key
   *
   * @param username
   *          user identifier
   * @param privateKey
   *          private key of the user
   *
   * @return a c3 key auth token
   */
  static generateC3KeyAuthToken(username: string, privateKey: string): string;

  /**
   * Generate basic auth token with given username and password.
   *
   * @param username
   *          user identifier.
   * @param password
   *          user password.
   *
   * @return a basic auth token generated with given username and password.
   */
  static generateBasicAuthToken(username: string, password: string): string;

  /**
   * Parse a basic token
   *
   * @param token
   *            token to be parsed.
   *
   * @return a user & password from auth token
   */
  static parseBasicAuthToken(token: string): StrPair | null;

  /**
   * Determines if the provided request is the first login or not
   */
  static firstLogin(req?: HttpRequest | null): boolean;

  /**
   * Returns whether authentication is required to access the given endpoint
   *
   * @param req
   *            HttpRequest
   *
   * @return a boolean representing whether anonymous access is allowed
   */
  static isAnonymousAccessAllowed(req: HttpRequest): boolean;

  /**
   * Returns the IdpConfig associated with the given host.
   * @param host
   *           host for which IdpConfig is configured for
   *
   * @return the IdpConfig configured for the host. If it does not exist, returns null.
   */
  static idpConfig(host: string, failIfMissing?: boolean): IdpConfig | null;

  /**
   * Returns whether basic auth is used for authentication.
   *
   * @return a boolean representing whether this {@link App} use basic auth.
   */
  static isIdpConfiguredForUrl(url: Url): boolean;

  /**
   * Prepare auth denied response
   * @param req
   *            HttpRequest that was used to login
   */
  static denyUser(req: HttpRequest): AuthenticateResult;

  /**
   * Creates an 401 Unauthorized HttpResponse with the given headers.
   */
  static unauthorized(req: HttpRequest | null, headers?: C3.Map<string | null, C3.Array<string | null>>): AuthenticateResult;

  /**
   * The authentication result with no-content
   */
  static noContent(req: HttpRequest | null): AuthenticateResult;

  /**
   * The authentication result for a given user
   */
  static result(user: User, req: HttpRequest | null, resp?: HttpResponse | null): AuthenticateResult;

  /**
   * Properly logs authentication information for all subtypes
   */
  static logAuthenticationInformation(logger: Logger, loggerLevel: string, msg: string): void;

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
  static fromJson(json: any | null): Saml | null;

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
  static fromJsonString(json: string | null): Saml | null;

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
  static fromXmlString(xml: string | null): Saml | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Saml | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Saml;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Saml;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Saml;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Saml | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Saml | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Saml;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Saml;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Saml;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Saml;

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
  withField(field: string, value: any, doNotConvert?: boolean): Saml;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): Saml;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Saml;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Saml;

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
  withoutFieldAtPath(path: string): Saml;

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
  withoutField(field: string | null): Saml;

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
  withoutField(field: FieldType | null): Saml;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Saml;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Saml;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Saml;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Saml;

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
  defaultField(field: string): Saml;

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
  defaultField(field: FieldType): Saml;

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
  unsetField(field: string): Saml;

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
  unsetField(field: FieldType): Saml;

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
  removeField(field: string): Saml;

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
  removeField(field: FieldType): Saml;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Saml;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Saml;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Saml;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Saml;

  mergeJson(json: any | null): Saml;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Saml;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Saml;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Saml | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Saml | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Saml | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Saml | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Saml | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Saml | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Saml | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Saml | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Saml | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Saml;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Saml;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Saml;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Saml;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Saml;

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
  static make(fields: any, withDefaults?: boolean): Saml;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Saml;

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
  afterMake(): Saml;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Saml;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Saml>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Saml;

  /**
   * This function is used to generate a Saml single sign-on SP descriptor that can be used by our customers to configure
   * their Identity Provider to implement IdP-initiated SAML SSO flow.
   *
   * @param spec
   *           {@link SpSsoDescriptorSpec spec} for SpSsoDescriptor
   * @return string
   *           The Saml EntityDescriptor xml as a string.
   *           Example: Saml.generateSpSsoDescriptor(SpSsoDescriptorSpec.make({'acsUrl': '127.0.0.1/saml/login',
   *                                                                           'wantAssertionsEncrypted': true}));
   */
  static generateSpSsoDescriptor(spec?: SpSsoDescriptorSpec | null): string | null;

  /**
   * Given a Saml EntityDescriptor, generate all the C3 Saml artifacts to support IDP initiated Saml SSO. Basically
   * generates {@link VanityUrl}, {@link SAMLProfile}, {@link SAMLSettings},{@link Idp} and {@link IdpCertificate}.
   *
   * To use local files,
   *           descriptorFile = File.make("file:///<file_path>");
   *
   * To use S3 files,
   *           descriptorFile = File.make("s3://<file_path>");
   *
   *
   * @param descriptorFile
   *           C3 File that contains the Saml EntityDescriptor
   * @param vanityUrl
   *           This is the vanityUrl that will be bound to the corresponding Saml artifacts.
   * @param env
   *           Env the vanityUrl will be bound to.
   * @param app
   *           App the vanityUrl will be bound to.
   * @param hasExternalDns
   *           Set if you want to skip creation of dns entry on dns not managed by underlying cloud services. {@see VanityUrl#hasExternalDns}
   */
  static generateIdpSsoArtifacts(descriptorFile: File, vanityUrl: string, env: string, app: string, hasExternalDns?: boolean, override?: string | null): void;

  static generateIdpSsoArtifacts(descriptorFile: string, vanityUrl: string, env: string, app: string, hasExternalDns?: boolean, override?: string | null): void;

  /**
   * Given a Saml EntityDescriptor, generate all the C3 Saml artifacts to support SP initiated Saml SSO. Basically
   * generates {@link SAMLProfile}, {@link SAMLSettings},{@link Idp}, {@link IdpCertificate}, {@link Sp},
   * or {@link VanityUrl} if the given fully qualified domain name is a vanityUrl
   *
   * To use local files,
   *           descriptorFile = File.make("file:///<file_path>");
   *
   * To use S3 files,
   *           descriptorFile = File.make("s3://<file_path>");
   *
   *
   * @param descriptorFile
   *           C3 File that contains the Saml EntityDescriptor
   * @param acsUrl
   *           Assertion Consumer Service endpoint url
   * @param fqdn
   *           This is the fully qualified domain name {@see AppUrl#id} that will be bound to the corresponding Saml artifacts.
   * @param env
   *           Env the fully qualified domain name will be bound to.
   * @param app
   *           App the fully qualified domain name will be bound to.
   * @param compressRequest
   *           If true, compress the SAMLRequest to IdP
   * @param hasExternalDns
   *           Set if you want to skip creation of dns entry on dns not managed by underlying cloud services. {@see VanityUrl#hasExternalDns}
   */
  static generateSpSsoArtifacts(descriptorFile: File, acsUrl: string, fqdn: string, env: string, app: string, compressRequest?: boolean, hasExternalDns?: boolean, override?: string | null): void;

  static generateSpSsoArtifacts(descriptorFile: string, acsUrl: string, fqdn: string, env: string, app: string, compressRequest?: boolean, hasExternalDns?: boolean, override?: string | null): void;

  /**
   * Cleanup all the Saml artifacts associated with the fully qualified domain name: {@link SAMLProfile},
   * {@link SAMLSettings}, {@link Idp}, {@link IdpCertificate}, {@link Sp}, {@link AutoCreateUser}.
   *
   * @param fqdn
   *           Determines which fully qualified domain name to cleanup.
   */
  static cleanUpArtifacts(fqdn: string): void;

  /**
   * Similar to #generateIdpSsoArtifacts but the descriptor is read from a string instead of a File.
   */
  static generateIdpSsoArtifactsFromDescString(desc: string, fqdn: string, env: string, app: string, hasExternalDns?: boolean, override?: string | null): void;

  /**
   * When generating {@link SamlProfile} and {@link SamlServiceProvider} to enable SSO by calling {@link Saml.generateIdpSsoArtifacts},
   * the picked {@link CryptoKeyPair} to decrypt an encrypted Saml response is the default one whose id is exactly same as the
   * argument fqdn passed in the function {@link Saml.generateIdpSsoArtifacts}.
   *
   * This {@link Saml.updateSpKeyPair} function is used to pick up different {@link CryptoKeyPair cryptoKeyPair} with
   * the id as passed in argument when decrypting an encrypted SAML response.
   *
   * @param fqdn
   *           Saml fully qualified domain name that jit user creation will be enabled for.
   *
   * @param keyPairId
   *            The id of new {@link CryptoKeyPair CryptoKeyPair} will be used.
   */
  static updateSpKeyPair(fqdn: string, keyPairId: string, override?: string | null): void;

  /**
   * Builds request that will be redirected to idp
   *
   * @param  privateKey
   *             private key used for signature and signing
   * @param  publicKey
   *             public key used for signature and signing
   * @param  profile
   *             SamlIdpConfig with valid saml information
   * @param  relayState
   *             redirect location based off of original request
   */
  static buildSAMLAuthnRequest(privateKey: any, publicKey: any, profile: SamlIdpConfig, relayState: string): string | null;

  /**
   * Builds request that will be redirected to idp
   *
   * @param  profile
   *             SamlIdpConfig with valid saml information
   * @param  nameId
   * @param  sessionIndex
   */
  static buildSAMLLogoutRequest(profile: SamlIdpConfig, nameId: string, sessionIndex: string): string | null;

  /**
   * Builds response for logout
   *
   * @param  issuer
   *             which idp this logout response is from
   * @param  destination
   *             location for where the user should be sent
   * @param  requestId
   * @param  sessionIndex
   * @param  statusCodeUri
   *             status code if successful or not
   */
  static buildSAMLLogoutResponse(issuer: string, destination: string, requestId: string, sessionIndex: string, statusCodeUri: string): string | null;

  /**
   * Saml-initiated logout
   *
   * @param  request
   *           HttpRequest
   * @param  samlRequest
   */
  static doLogout(request: HttpRequest, samlRequest: string): HttpResponse | null;

  /**
   * Parses response received from idp
   *
   * @param  SAMLResponse
   *             response that needs to be parsed
   * @param  isCompressed
   *             indicator for whether response is compressed or not
   */
  static parseSAMLResponse(SAMLResponse: string, isCompressed: boolean): any;

  /**
   * Extracts assertions from SAMLResponse
   *
   * @param  response
   *             saml response that contains the assertions
   * @param  keyId
   *             id for {@link CryptoPrivateKey}
   */
  static extractAssertionFromSAMLResponse(response: any, keyId?: string | null): any;

  /**
   * Extracts encrypted assertions from SAMLResponse
   *
   * @param  response
   *             saml response that contains the assertions
   * @param  keyId
   *             id for {@link CryptoPrivateKey}
   */
  static extractEncryptedAssertionFromSAMLResponse(response: any, keyId?: string | null): any;

  /**
   * Extract the SAML assertion information of interest from the SubjectStatement elements
   *
   * @param Assertion
   *           saml assertion data
   */
  static getSamlAssertionAttributes(Assertion: any): C3.Map<string | null, C3.Array<SamlAssertionAttribute | null>>;

  /**
   * Ensures there are no comments in the assertion data
   *
   * @param children
   *           1 specific saml assertion data
   * @param attributeName
   *           name of the specific saml assertion data
   */
  static assertNoComment(children: any, attributeName?: string | null): void;

  /**
   * Returns the {@link AppId} for the target app stored in the provided state token
   * @param relayState
   *      The relay state
   * @param host
   *      The host for which the IdpConfig is configured for
   */
  static appFromRelayState(relayState: string, host: string): string | null;

  /**
   * Construct an http response that will redirect the client to their target app login endpoint.
   * @param app
   *      The app to redirect to
   * @param host
   *      The host for which the IdpConfig is configured for
   * @param data
   *      The data to be passed to the target app
   * @param req
   *      The request that initiated the authentication flow
   */
  static redirectToTargetApp(app: string, host: string, data: string, req: HttpRequest): HttpResponse | null;
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
