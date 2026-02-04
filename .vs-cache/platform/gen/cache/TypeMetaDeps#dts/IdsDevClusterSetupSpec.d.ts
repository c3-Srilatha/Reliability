// TypeScript definitions for the C3 type IdsDevClusterSetupSpec

/**
 * Spec for deploying IDS to an environment
 *
 * @remarks this represents a value passed to a method that expects an instance of IdsDevClusterSetupSpec
 */
declare interface IIdsDevClusterSetupSpec {

  /**
   * The tenant that the IDS control tag lives in.
   */
  idsControlTenant: string;

  /**
   * IMPORTANT: This is always prod.
   * The tag that the IDS control lives in.
   */
  idsControlTag: string;

  /**
   * The canonical url of the cluster that the IDS control tag lives in.
   */
  idsControlCanonicalUrl?: string | null;

  /**
   * The id of the IDS control tag's c3euser.
   */
  idsC3euserId?: string | null;

  /**
   * The password of the IDS control tag's c3euser.
   */
  idsC3euserPass?: string | null;

  /**
   * The email of the IDS control tag's c3euser.
   */
  idsC3euserEmail?: string | null;

  /**
   * The {@link VanityUrl} to be used for the IDS control tag
   */
  controlVanityUrl?: string | null;

  /**
   * The {@link VanityUrl} of Marketplace (ex. https://repository.c3-e.com)
   */
  marketplaceVanityUrl?: string | null;

  /**
   * The desired {@link PlatformOrganization} name to be used for the IDS control tag
   */
  idsOrgName?: string | null;

  /**
   * The desired id of the {@link User} that will represent the IDS control tag in Marketplace
   */
  idsPmUserId?: string | null;

  /**
   * The desired password for {@link #idsPmUserId}.
   */
  idsPmUserPass?: string | null;

  /**
   * The desired email for {@link #idsPmUserId}.
   */
  idsPmUserEmail?: string | null;

  /**
   * The domain that IDS should use when creating VanityUrls. If this is not supplied,
   * it will fallback on the domain of {@link #controlVanityUrl}.
   */
  idsDesiredVanityUrlDomain?: string | null;

  /**
   * Whether or not artifacts should be obtained through Marketplace packages
   */
  useMarketplace?: boolean;

  /**
   * Whether or not the IDS control tag should trigger builds through C3's Jenkins Apps Pipeline
   */
  useJenkins?: boolean;

  /**
   * The Jenkins instance that should be used to run builds for the IDS control tag
   */
  jenkinsInstance?: string | null;

  /**
   * The url to {@link #jenkinsInstance}
   */
  jenkinsUrl?: string | null;

  /**
   * The authorization to use when triggering builds for {@link #jenkinsUrl}
   */
  jenkinsAuth?: string | null;

  /**
   * What type of cloud storage file system the IDS control tag uses to store build artifacts.
   */
  idsCloudStorageBuildArtifactFsScheme?: string | null;

  /**
   * The {@link FileSystem} mount that should be used to store build artifacts
   */
  idsCloudStorageBuildArtifactMount?: string | null;

  /**
   * Whether or not to use pre-signed urls when deploying using deployment pipelines
   */
  usePresignedUrlInRemoteDeployments?: boolean;

  /**
   * Twilio account configuration.
   * See https://www.twilio.com/docs/sms/api/message-resource#create-a-message-resource for more info.
   */
  twilioSid?: string | null;

  twilioFrom?: string | null;

  twilioToken?: string | null;

  twilioUrl?: string | null;

  /**
   * What setup steps should cause an error to be thrown rather than returned in the final {@link IdsSetupResult}
   */
  criticalFunctions?: C3.Array<string | null> | Array<string | null>;
}

/**
 * Spec for deploying IDS to an environment
 *
 * @remarks this represents a made instance of IdsDevClusterSetupSpec
 */
declare class IdsDevClusterSetupSpec extends Obj {

  /**
   * The tenant that the IDS control tag lives in.
   */
  readonly idsControlTenant: string;
  withIdsControlTenant(idsControlTenant: string): IdsDevClusterSetupSpec;

  /**
   * IMPORTANT: This is always prod.
   * The tag that the IDS control lives in.
   */
  readonly idsControlTag: string;
  withIdsControlTag(idsControlTag: string): IdsDevClusterSetupSpec;

  /**
   * The canonical url of the cluster that the IDS control tag lives in.
   */
  readonly idsControlCanonicalUrl?: string | null;
  withIdsControlCanonicalUrl(idsControlCanonicalUrl: string | null): IdsDevClusterSetupSpec;

  /**
   * The id of the IDS control tag's c3euser.
   */
  readonly idsC3euserId?: string | null;
  withIdsC3euserId(idsC3euserId: string | null): IdsDevClusterSetupSpec;

  /**
   * The password of the IDS control tag's c3euser.
   */
  readonly idsC3euserPass?: string | null;
  withIdsC3euserPass(idsC3euserPass: string | null): IdsDevClusterSetupSpec;

  /**
   * The email of the IDS control tag's c3euser.
   */
  readonly idsC3euserEmail?: string | null;
  withIdsC3euserEmail(idsC3euserEmail: string | null): IdsDevClusterSetupSpec;

  /**
   * The {@link VanityUrl} to be used for the IDS control tag
   */
  readonly controlVanityUrl?: string | null;
  withControlVanityUrl(controlVanityUrl: string | null): IdsDevClusterSetupSpec;

  /**
   * The {@link VanityUrl} of Marketplace (ex. https://repository.c3-e.com)
   */
  readonly marketplaceVanityUrl?: string | null;
  withMarketplaceVanityUrl(marketplaceVanityUrl: string | null): IdsDevClusterSetupSpec;

  /**
   * The desired {@link PlatformOrganization} name to be used for the IDS control tag
   */
  readonly idsOrgName?: string | null;
  withIdsOrgName(idsOrgName: string | null): IdsDevClusterSetupSpec;

  /**
   * The desired id of the {@link User} that will represent the IDS control tag in Marketplace
   */
  readonly idsPmUserId?: string | null;
  withIdsPmUserId(idsPmUserId: string | null): IdsDevClusterSetupSpec;

  /**
   * The desired password for {@link #idsPmUserId}.
   */
  readonly idsPmUserPass?: string | null;
  withIdsPmUserPass(idsPmUserPass: string | null): IdsDevClusterSetupSpec;

  /**
   * The desired email for {@link #idsPmUserId}.
   */
  readonly idsPmUserEmail?: string | null;
  withIdsPmUserEmail(idsPmUserEmail: string | null): IdsDevClusterSetupSpec;

  /**
   * The domain that IDS should use when creating VanityUrls. If this is not supplied,
   * it will fallback on the domain of {@link #controlVanityUrl}.
   */
  readonly idsDesiredVanityUrlDomain?: string | null;
  withIdsDesiredVanityUrlDomain(idsDesiredVanityUrlDomain: string | null): IdsDevClusterSetupSpec;

  /**
   * Whether or not artifacts should be obtained through Marketplace packages
   */
  readonly useMarketplace?: boolean;
  withUseMarketplace(useMarketplace: boolean): IdsDevClusterSetupSpec;

  /**
   * Whether or not the IDS control tag should trigger builds through C3's Jenkins Apps Pipeline
   */
  readonly useJenkins?: boolean;
  withUseJenkins(useJenkins: boolean): IdsDevClusterSetupSpec;

  /**
   * The Jenkins instance that should be used to run builds for the IDS control tag
   */
  readonly jenkinsInstance?: string | null;
  withJenkinsInstance(jenkinsInstance: string | null): IdsDevClusterSetupSpec;

  /**
   * The url to {@link #jenkinsInstance}
   */
  readonly jenkinsUrl?: string | null;
  withJenkinsUrl(jenkinsUrl: string | null): IdsDevClusterSetupSpec;

  /**
   * The authorization to use when triggering builds for {@link #jenkinsUrl}
   */
  readonly jenkinsAuth?: string | null;
  withJenkinsAuth(jenkinsAuth: string | null): IdsDevClusterSetupSpec;

  /**
   * What type of cloud storage file system the IDS control tag uses to store build artifacts.
   */
  readonly idsCloudStorageBuildArtifactFsScheme?: string | null;
  withIdsCloudStorageBuildArtifactFsScheme(idsCloudStorageBuildArtifactFsScheme: string | null): IdsDevClusterSetupSpec;

  /**
   * The {@link FileSystem} mount that should be used to store build artifacts
   */
  readonly idsCloudStorageBuildArtifactMount?: string | null;
  withIdsCloudStorageBuildArtifactMount(idsCloudStorageBuildArtifactMount: string | null): IdsDevClusterSetupSpec;

  /**
   * Whether or not to use pre-signed urls when deploying using deployment pipelines
   */
  readonly usePresignedUrlInRemoteDeployments?: boolean;
  withUsePresignedUrlInRemoteDeployments(usePresignedUrlInRemoteDeployments: boolean): IdsDevClusterSetupSpec;

  /**
   * Twilio account configuration.
   * See https://www.twilio.com/docs/sms/api/message-resource#create-a-message-resource for more info.
   */
  readonly twilioSid?: string | null;
  withTwilioSid(twilioSid: string | null): IdsDevClusterSetupSpec;

  readonly twilioFrom?: string | null;
  withTwilioFrom(twilioFrom: string | null): IdsDevClusterSetupSpec;

  readonly twilioToken?: string | null;
  withTwilioToken(twilioToken: string | null): IdsDevClusterSetupSpec;

  readonly twilioUrl?: string | null;
  withTwilioUrl(twilioUrl: string | null): IdsDevClusterSetupSpec;

  /**
   * What setup steps should cause an error to be thrown rather than returned in the final {@link IdsSetupResult}
   */
  readonly criticalFunctions?: C3.Array<string | null>;
  withCriticalFunctions(criticalFunctions: C3.Array<string | null> | Array<string | null>): IdsDevClusterSetupSpec;

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
  static fromJson(json: any | null): IdsDevClusterSetupSpec | null;

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
  static fromJsonString(json: string | null): IdsDevClusterSetupSpec | null;

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
  static fromXmlString(xml: string | null): IdsDevClusterSetupSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): IdsDevClusterSetupSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): IdsDevClusterSetupSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): IdsDevClusterSetupSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): IdsDevClusterSetupSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<IdsDevClusterSetupSpec | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<IdsDevClusterSetupSpec | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): IdsDevClusterSetupSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): IdsDevClusterSetupSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): IdsDevClusterSetupSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): IdsDevClusterSetupSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): IdsDevClusterSetupSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): IdsDevClusterSetupSpec;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): IdsDevClusterSetupSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): IdsDevClusterSetupSpec;

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
  withoutFieldAtPath(path: string): IdsDevClusterSetupSpec;

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
  withoutField(field: string | null): IdsDevClusterSetupSpec;

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
  withoutField(field: FieldType | null): IdsDevClusterSetupSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): IdsDevClusterSetupSpec;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): IdsDevClusterSetupSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): IdsDevClusterSetupSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): IdsDevClusterSetupSpec;

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
  defaultField(field: string): IdsDevClusterSetupSpec;

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
  defaultField(field: FieldType): IdsDevClusterSetupSpec;

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
  unsetField(field: string): IdsDevClusterSetupSpec;

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
  unsetField(field: FieldType): IdsDevClusterSetupSpec;

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
  removeField(field: string): IdsDevClusterSetupSpec;

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
  removeField(field: FieldType): IdsDevClusterSetupSpec;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): IdsDevClusterSetupSpec;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): IdsDevClusterSetupSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): IdsDevClusterSetupSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): IdsDevClusterSetupSpec;

  mergeJson(json: any | null): IdsDevClusterSetupSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): IdsDevClusterSetupSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): IdsDevClusterSetupSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<IdsDevClusterSetupSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<IdsDevClusterSetupSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<IdsDevClusterSetupSpec | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<IdsDevClusterSetupSpec | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<IdsDevClusterSetupSpec | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, IdsDevClusterSetupSpec | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, IdsDevClusterSetupSpec | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<IdsDevClusterSetupSpec | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<IdsDevClusterSetupSpec | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): IdsDevClusterSetupSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): IdsDevClusterSetupSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): IdsDevClusterSetupSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): IdsDevClusterSetupSpec;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): IdsDevClusterSetupSpec;

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
  static make(fields: any, withDefaults?: boolean): IdsDevClusterSetupSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): IdsDevClusterSetupSpec;

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
  afterMake(): IdsDevClusterSetupSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): IdsDevClusterSetupSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<IdsDevClusterSetupSpec>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): IdsDevClusterSetupSpec;
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
