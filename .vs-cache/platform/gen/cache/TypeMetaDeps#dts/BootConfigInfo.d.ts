// TypeScript definitions for the C3 type BootConfigInfo

/**
 * Details about the boot configuration
 *
 * @remarks this represents a value passed to a method that expects an instance of BootConfigInfo
 */
declare interface IBootConfigInfo {

  /**
   * Config type instance that contains this config child.
   */
  parent?: any;

  /**
   * If true query and use current compute instance's Cloud Identity (e.g. AWS IAM Role).
   */
  useNodeCloudIdentity?: boolean;

  /**
   * Cloud service native Access Key.
   */
  accessKey?: string | null;

  /**
   * Cloud service native secret Key.
   */
  secretKey?: string | null;

  /**
   * Cloud account / subscription id.
   */
  accountId?: string | null;

  /**
   * Cloud account / subscription email.
   */
  accountEmail?: string | null;

  /**
   * Cloud service native identity for managing access to Cloud Resources. It is typically associated with compute
   * instance.
   */
  cloudIdentity?: string | null;

  /**
   * Cloud region for the credentials.
   */
  region?: string | null;

  /**
   * Endpoint for accessing resources (e.g. Kubernetes API server endpoint).
   */
  endpoint?: string | null;

  /**
   * Customized description for the cloud resource credential.
   */
  description?: string | null;

  /**
   * Tls Certificate if this Cloud Resource needs a secure connection
   */
  certificate?: ITlsCertificate | null;

  /**
   * Root folder for the configuration
   */
  root: string;

  /**
   * Owner of this configuration
   */
  owner: string;

  /**
   * Type of ExternalVault (hashicorp, etc)
   * If set, config will be stored in @link{ExternalVault}. If not set, config values will be stored in c3-platform supported
   * config store.
   */
  vaultKind?: string | null;

  /**
   * The URL of the ExternalVault
   */
  url?: string | null;

  /**
   * The namespace of the ExternalVault
   */
  namespace?: string | null;

  /**
   * The method to use to authenticate with Vault.
   */
  authKind?: string | null;

  /**
   * The path for the authentication method.
   * Used for AppRole and Custom authentication
   */
  authPath?: string | null;

  /**
   * The key names need to be flattened, i.e. no directory hierarchy just a top level one
   */
  flatPath?: boolean;

  /**
   * Configured role name for kubernetes authentication
   */
  role?: string | null;

  /**
   * The RoleId for AppRole authentication
   */
  roleId?: string | null;

  /**
   * The SecretId for AppRole authentication
   * Only used in non-k8s deployments
   */
  secretId?: string | null;

  /**
   * The JSON payload used for custom auth
   * Only used in non-k8s deployments
   */
  authPayload?: string | null;

  /**
   * The actual token to authenticate against Vault. Required if token auth is used
   * Only used in non-k8s deployments
   */
  token?: string | null;

  /**
   * Enabled hard delete for the ExternalVault
   */
  hardDeleteEnabled?: boolean;

  /**
   * The path to the root of the migration source
   */
  migrateSourceRoot?: string | null;

  /**
   * The default custom_metadata that will be set for secrets written to Hashicorp Vault
   * ie: "{\"metadata_key\":\"value\"}"
   */
  customMetadata?: string | null;

  /**
   * Indicates whether workload identity should NOT be used for accessing this ConfigStore.
   * When false (default), workload identity is enabled and controls:
   * (1) c3-c3 app using workload identity to access the config store,
   * (2) engine that creates/updates the service account to share credentials with other apps/envs,
   * (3) engine on other apps/envs to fetch credentials from this service account and cache them for config store access.
   */
  doNotUseWorkloadIdentity?: boolean;
}

/**
 * Details about the boot configuration
 *
 * @remarks this represents a made instance of BootConfigInfo
 */
declare class BootConfigInfo extends Obj {

  /**
   * Config type instance that contains this config child.
   */
  readonly parent?: any;
  withParent(parent: any): BootConfigInfo;

  /**
   * If true query and use current compute instance's Cloud Identity (e.g. AWS IAM Role).
   */
  readonly useNodeCloudIdentity?: boolean;
  withUseNodeCloudIdentity(useNodeCloudIdentity: boolean): BootConfigInfo;

  /**
   * Cloud service native Access Key.
   */
  readonly accessKey?: string | null;
  withAccessKey(accessKey: string | null): BootConfigInfo;

  /**
   * Cloud service native secret Key.
   */
  readonly secretKey?: string | null;
  withSecretKey(secretKey: string | null): BootConfigInfo;

  /**
   * Cloud account / subscription id.
   */
  readonly accountId?: string | null;
  withAccountId(accountId: string | null): BootConfigInfo;

  /**
   * Cloud account / subscription email.
   */
  readonly accountEmail?: string | null;
  withAccountEmail(accountEmail: string | null): BootConfigInfo;

  /**
   * Cloud service native identity for managing access to Cloud Resources. It is typically associated with compute
   * instance.
   */
  readonly cloudIdentity?: string | null;
  withCloudIdentity(cloudIdentity: string | null): BootConfigInfo;

  /**
   * Cloud region for the credentials.
   */
  readonly region?: string | null;
  withRegion(region: string | null): BootConfigInfo;

  /**
   * Endpoint for accessing resources (e.g. Kubernetes API server endpoint).
   */
  readonly endpoint?: string | null;
  withEndpoint(endpoint: string | null): BootConfigInfo;

  /**
   * Customized description for the cloud resource credential.
   */
  readonly description?: string | null;
  withDescription(description: string | null): BootConfigInfo;

  /**
   * Tls Certificate if this Cloud Resource needs a secure connection
   */
  readonly certificate?: TlsCertificate | null;
  withCertificate(certificate: ITlsCertificate | null): BootConfigInfo;

  /**
   * Root folder for the configuration
   */
  readonly root: string;
  withRoot(root: string): BootConfigInfo;

  /**
   * Owner of this configuration
   */
  readonly owner: string;
  withOwner(owner: string): BootConfigInfo;

  /**
   * Type of ExternalVault (hashicorp, etc)
   * If set, config will be stored in @link{ExternalVault}. If not set, config values will be stored in c3-platform supported
   * config store.
   */
  readonly vaultKind?: string | null;
  withVaultKind(vaultKind: string | null): BootConfigInfo;

  /**
   * The URL of the ExternalVault
   */
  readonly url?: string | null;
  withUrl(url: string | null): BootConfigInfo;

  /**
   * The namespace of the ExternalVault
   */
  readonly namespace?: string | null;
  withNamespace(namespace: string | null): BootConfigInfo;

  /**
   * The method to use to authenticate with Vault.
   */
  readonly authKind?: string | null;
  withAuthKind(authKind: string | null): BootConfigInfo;

  /**
   * The path for the authentication method.
   * Used for AppRole and Custom authentication
   */
  readonly authPath?: string | null;
  withAuthPath(authPath: string | null): BootConfigInfo;

  /**
   * The key names need to be flattened, i.e. no directory hierarchy just a top level one
   */
  readonly flatPath?: boolean;
  withFlatPath(flatPath: boolean): BootConfigInfo;

  /**
   * Configured role name for kubernetes authentication
   */
  readonly role?: string | null;
  withRole(role: string | null): BootConfigInfo;

  /**
   * The RoleId for AppRole authentication
   */
  readonly roleId?: string | null;
  withRoleId(roleId: string | null): BootConfigInfo;

  /**
   * The SecretId for AppRole authentication
   * Only used in non-k8s deployments
   */
  readonly secretId?: string | null;
  withSecretId(secretId: string | null): BootConfigInfo;

  /**
   * The JSON payload used for custom auth
   * Only used in non-k8s deployments
   */
  readonly authPayload?: string | null;
  withAuthPayload(authPayload: string | null): BootConfigInfo;

  /**
   * The actual token to authenticate against Vault. Required if token auth is used
   * Only used in non-k8s deployments
   */
  readonly token?: string | null;
  withToken(token: string | null): BootConfigInfo;

  /**
   * Enabled hard delete for the ExternalVault
   */
  readonly hardDeleteEnabled?: boolean;
  withHardDeleteEnabled(hardDeleteEnabled: boolean): BootConfigInfo;

  /**
   * The path to the root of the migration source
   */
  readonly migrateSourceRoot?: string | null;
  withMigrateSourceRoot(migrateSourceRoot: string | null): BootConfigInfo;

  /**
   * The default custom_metadata that will be set for secrets written to Hashicorp Vault
   * ie: "{\"metadata_key\":\"value\"}"
   */
  readonly customMetadata?: string | null;
  withCustomMetadata(customMetadata: string | null): BootConfigInfo;

  /**
   * Indicates whether workload identity should NOT be used for accessing this ConfigStore.
   * When false (default), workload identity is enabled and controls:
   * (1) c3-c3 app using workload identity to access the config store,
   * (2) engine that creates/updates the service account to share credentials with other apps/envs,
   * (3) engine on other apps/envs to fetch credentials from this service account and cache them for config store access.
   */
  readonly doNotUseWorkloadIdentity?: boolean;
  withDoNotUseWorkloadIdentity(doNotUseWorkloadIdentity: boolean): BootConfigInfo;

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
  static fromJson(json: any | null): BootConfigInfo | null;

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
  static fromJsonString(json: string | null): BootConfigInfo | null;

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
  static fromXmlString(xml: string | null): BootConfigInfo | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): BootConfigInfo | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): BootConfigInfo;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): BootConfigInfo;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): BootConfigInfo;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<BootConfigInfo | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<BootConfigInfo | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): BootConfigInfo;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BootConfigInfo;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BootConfigInfo;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): BootConfigInfo;

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
  withField(field: string, value: any, doNotConvert?: boolean): BootConfigInfo;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): BootConfigInfo;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): BootConfigInfo;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): BootConfigInfo;

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
  withoutFieldAtPath(path: string): BootConfigInfo;

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
  withoutField(field: string | null): BootConfigInfo;

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
  withoutField(field: FieldType | null): BootConfigInfo;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): BootConfigInfo;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): BootConfigInfo;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): BootConfigInfo;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): BootConfigInfo;

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
  defaultField(field: string): BootConfigInfo;

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
  defaultField(field: FieldType): BootConfigInfo;

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
  unsetField(field: string): BootConfigInfo;

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
  unsetField(field: FieldType): BootConfigInfo;

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
  removeField(field: string): BootConfigInfo;

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
  removeField(field: FieldType): BootConfigInfo;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): BootConfigInfo;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): BootConfigInfo;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): BootConfigInfo;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): BootConfigInfo;

  mergeJson(json: any | null): BootConfigInfo;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): BootConfigInfo;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): BootConfigInfo;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<BootConfigInfo | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<BootConfigInfo | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<BootConfigInfo | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<BootConfigInfo | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<BootConfigInfo | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, BootConfigInfo | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, BootConfigInfo | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<BootConfigInfo | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<BootConfigInfo | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): BootConfigInfo;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): BootConfigInfo;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): BootConfigInfo;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): BootConfigInfo;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): BootConfigInfo;

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
  static make(fields: any, withDefaults?: boolean): BootConfigInfo;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): BootConfigInfo;

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
  afterMake(): BootConfigInfo;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): BootConfigInfo;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<BootConfigInfo>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): BootConfigInfo;

  /**
   * @return this child config without any secret values.
   */
  removeSecrets(): BootConfigInfo | null;

  /**
   * @return this child config with only secret values.
   */
  removeNonSecrets(): BootConfigInfo | null;

  /**
   * @return true if this ConfigChild type has Ann.Config#secret annotation
   */
  static hasSecretField(): boolean;

  /**
   * @return the id of the {@link CloudAccount} associated with this credential.
   */
  safeAccountId(): string | null;

  /**
   * @return the {@link CloudAccount} associated with this credential.
   */
  account(): CloudAccount;

  /**
   * Creates instance of CloudCredentials from Cloud Identity and optional region override.
   */
  static fromCloudIdentity(cloudIdentity: string, region?: string | null): BootConfigInfo;

  /**
   * Creates instance of CloudCredentials from Access and Secret Keys and optional region override.
   */
  static fromAccessKey(accessKey: string, secretKey?: string | null, region?: string | null): BootConfigInfo;

  /**
   * Creates instance of CloudCredentials from cloud region.
   */
  static fromRegion(region: string): BootConfigInfo;

  /**
   * @return string representation of credentials to be used in APIs; note that this method may reveal secret key.
   */
  authToken(): string | null;

  /**
   * @return string representation of the credentials. Note this method SHOULD NOT reveal secret.
   */
  toString(): string | null;

  /**
   * Check to see if all necessary fields for cloud provider credentials have been properly configured.
   * Note this does not mean the credentials are guaranteed to be valid.
   *
   * @return true if credentials have been properly configured
   */
  configured(): boolean;

  /**
   * Determines if the input host is the root host i.e. the passed in host is the same as {@link #root} field.
   * @param host
   *        host address being checked E.g. file:///usr/local/share/c3/server/config
   * @return true if passed in host address matches {@link BootConfigInfo#root}
   */
  isRootHost(host: string): boolean;
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
