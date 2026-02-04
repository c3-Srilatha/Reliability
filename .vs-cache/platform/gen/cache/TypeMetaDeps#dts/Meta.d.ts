// TypeScript definitions for the C3 type Meta

/**
 * A collection of system managed fields that are persisted on entity objs.  Also contains fields that are used
 * to control various operations (e.g.{@link Persistable#upsert})
 *
 * @remarks this represents a value passed to a method that expects an instance of Meta
 */
declare interface IMeta {

  /**
   * Unique numeric id for the particular app that owns the data.  All data requests (both input and output)
   * are done in the context of an app and this field is either populated or queried as appropriate for the
   * particular request.
   */
  appCode?: number | null;

  /**
   * Tenant that owns the particular obj.  This is not persisted with each instance.  Instead it is derived via a
   * join from the {@link appCode} field to the app id table.
   */
  env?: string | null;

  /**
   * Tag that owns the particular obj.  This is not persisted with each instance.  Instead it is derived via a join
   * from the {@link appCode} field to the app id table.
   */
  app?: string | null;

  /**
   * Timestamp for when the instance was created.
   */
  created?: DateTime | Date | string | null;

  /**
   * Member id that created the instance.
   *
   * @see Member
   */
  createdBy?: string | null;

  /**
   * Fkey field for createdBy
   */
  createdByUser?: IUser | null;

  /**
   * Timestamp when Obj was updated in source system.
   */
  updated?: DateTime | Date | string | null;

  /**
   * Member id that last updated the instance.
   *
   * @see Member
   */
  updatedBy?: string | null;

  /**
   * Fkey field for updatedBy
   */
  updatedByUser?: IUser | null;

  /**
   * C3 maintained timestamp of the latest update to the row.  This differs from {@link updated} in that represents
   * the externally controllable updated timestamp (e.g. time the data was updated in the source system).
   */
  timestamp?: DateTime | Date | string | null;

  /**
   * Comment that can be associated with the instant.  If version history is enabled, the contents of this field
   * will be copied to to the {@link versionEdits.comment} field for the edit associated with the update.
   */
  comment?: string | null;

  /**
   * Source system where the data was loaded from.  It is only set if the data is provided during data load.
   */
  sourceSystem?: string | null;

  /**
   * Source file where the data was loaded from.  It is only set if the data is provided during data load.
   */
  sourceFile?: string | null;

  /**
   * Id of the {@link Sources} for the Source
   */
  sourcesId?: string | null;

  /**
   * Encoded path of {@link SourceFile}
   */
  sourceFileEncodedPath?: string | null;

  /**
   * Url of the {@link SourceFile}
   */
  sourceFileUrl?: string | null;

  /**
   * Returned type hierarchy for the Obj.  Only returned if meta.typeHierarchy is explicitly present
   * in the include spec (e.g. include = "[this, {meta: [this, typeHierarchy]}]".
   */
  typeHierarchy?: IEntityType | null;

  /**
   * Level of the object in the hierarchy when using hierarchical fetch api.
   */
  level?: number | null;

  /**
   * When set for input objs in a {@link Persistable#update} or {@link Persistable#upsert} operation (or their batch
   * counterparts), causes the instance to be archived if the type is configured to archive removed data.  If the
   * type is not configured to archive removed data, instances with this field set will be ignored.
   *
   * @see Db.archive
   */
  archived?: boolean;

  /**
   * Returned value that indicates that reference object is invalid (i.e. target object does not exist in the data
   * store). Only returned if field is explicitly included in the include spec for a {@link Persistable#fetch}
   * operation.
   *
   * @see FetchSpec
   */
  referenceInvalid?: boolean;

  /**
   * When specified on the first input obj, performs the same function as {@link UpsertSpec#include} w.r.t.
   * specifying what fields will be returned for created/updated Obj instances for {@link Persistable#upsert} and
   * related functions.  Otherwise, when objs are retrieved via {@link Persistable#fetch} or {@link Persistable#get},
   * this will be set with the include spec used to retrieve them.
   */
  include?: string | null;

  /**
   * If specified as true on an obj to call {@link Persistable#get}, then read calcs will be included in the returned
   * obj by default.  If false, they will only be returned if explicitly specified in the `include`
   */
  includeReadCalcs?: boolean;

  /**
   * When objs are retrieved via {@link Persistable#fetch} or {@link Persistable#get}, this will be set with the
   * include spec used to retrieve them.
   */
  fetchInclude?: string | null;

  /**
   * When objs are retrieved via {@link Persistable#fetch} or {@link Persistable#get}, this will be set with the
   * type the operation was called from (which may differ from the type of instance(s) returned as we create
   * instances of the appropriate extendable type for objs fetched through a base type.
   */
  fetchType?: string | null;

  /**
   * Allows for getting a specific version of an Obj (based on its {@link Persistable#version} value} for entity
   * types that have version history enabled.  The requested version  number should be specified in the input Obj
   * instance for the {@link Persistable#get} function.
   *
   * If the value specified is <= 0, it is interpreted as being relative, with "0" being the current version and
   * "-1" being the version immediately before the current version, etc.  If the value is > 0, it is assumed to be
   * the specific version being requested.
   */
  getVersion?: number | null;

  /**
   * Allows for getting an Obj instance as it was for a specific point in time for entity types that have version
   * history enabled.  The requested time should be specified in the input Obj instance for the
   * {@link Persistable#get} function.
   */
  getVersionAsOf?: DateTime | Date | string | null;

  /**
   * Allows for getting an Obj instance in its specific extension type using the {@link Persistable#get} function
   * when that type isn't known.  For example, if this field is set on a FixedAsset instance that happens to be
   * a Facility, then calling FixedAsset.get with that input obj will return a Facility instance with all of the
   * Facility fields populated.
   */
  getSpecific?: boolean;

  /**
   * Allows for getting an Obj instance via the {@link Persistable#get} operation that has been archived for a
   * type that is configured to archive instances rather than deleting them for the {@link Persistable#remove}
   * and related operations.
   */
  getFromArchive?: boolean;

  /**
   * Internally used for system partial updates.  If you need to ask, DON'T USE IT!
   *
   * EditList causes stack overflow
   */
  editList?: IObj | null;

  /**
   * Alternate way of specifying the source obj to {@link Persistable#update} and related functions for partial
   * Obj updates.
   */
  original?: IObj | null;

  /**
   * Disables version checking against user updates during system updates (e.g. stored calc field refresh) when
   * specified on the first input Obj instance for {@link Persistable#upsert} and related functions.  This doesn't
   * totally eliminate version checking.  Instead it does a version check against other system updates, ignoring
   * user updates.
   */
  disableVersionHistory?: boolean;

  /**
   * Performs same function as {@link UpsertSpec#disableAsyncProcessing} when specified on the first input Obj
   * instance for {@link Persistable#upsert} and related functions.
   */
  disableAsyncProcessing?: boolean;

  /**
   * Disables calls to any defined before callback functions (e.g. {@link Persistable#beforeCreate},
   * {@link Persistable#beforeUpdate} and {@link Persistable#beforeRemove})
   * when set on the first input Obj instance of calls to {@link Persistable#upsert} and related functions.
   */
  disableBeforeCallbacks?: boolean;

  /**
   * Disables calls to any defined after callback functions (e.g. {@link Persistable#afterCreate},
   * {@link Persistable#afterUpdate} and {@link Persistable#afterRemove})
   * when set on the first input Obj instance of calls to {@link Persistable#upsert} and related functions.
   */
  disableAfterCallbacks?: boolean;

  /**
   * Only used internally to cause the refresh of calc fields within an Obj instance being created/updated itself.
   * Any calc fields that need to be refreshed in other Obj instances (including in other types) will be handled
   * via the async stored calc refresh mechanism.
   */
  refreshCalcFields?: boolean;

  /**
   * Only used internally to cause the refresh of calc fields within an Obj instance being created/updated itself.
   * Any calc fields that need to be refreshed in other Obj instances (including in other types) will be handled
   * via the async stored calc refresh mechanism.
   */
  calcFieldsToRefresh?: C3.Array<string | null> | Array<string | null>;

  /**
   * Set during import data to identify source location info such as line # in csv file or line / col # in xml file.
   */
  deserSource?: string | null;

  /**
   * Internally set to indicate that the kind field on the input value to get is the real value (i.e. not the value
   * from the initializer.  This avoids unnecessary calls to get within getSpecific get request.
   */
  kindFieldValid?: boolean;
}

/**
 * A collection of system managed fields that are persisted on entity objs.  Also contains fields that are used
 * to control various operations (e.g.{@link Persistable#upsert})
 *
 * @remarks this represents a made instance of Meta
 */
declare class Meta extends Obj {

  /**
   * Unique numeric id for the particular app that owns the data.  All data requests (both input and output)
   * are done in the context of an app and this field is either populated or queried as appropriate for the
   * particular request.
   */
  readonly appCode?: number | null;
  withAppCode(appCode: number | null): Meta;

  /**
   * Tenant that owns the particular obj.  This is not persisted with each instance.  Instead it is derived via a
   * join from the {@link appCode} field to the app id table.
   */
  readonly env?: string | null;
  withEnv(env: string | null): Meta;

  /**
   * Tag that owns the particular obj.  This is not persisted with each instance.  Instead it is derived via a join
   * from the {@link appCode} field to the app id table.
   */
  readonly app?: string | null;
  withApp(app: string | null): Meta;

  /**
   * Timestamp for when the instance was created.
   */
  readonly created?: DateTime | null;
  withCreated(created: DateTime | Date | string | null): Meta;

  /**
   * Member id that created the instance.
   *
   * @see Member
   */
  readonly createdBy?: string | null;
  withCreatedBy(createdBy: string | null): Meta;

  /**
   * Fkey field for createdBy
   */
  readonly createdByUser?: User | null;
  withCreatedByUser(createdByUser: IUser | null): Meta;

  /**
   * Timestamp when Obj was updated in source system.
   */
  readonly updated?: DateTime | null;
  withUpdated(updated: DateTime | Date | string | null): Meta;

  /**
   * Member id that last updated the instance.
   *
   * @see Member
   */
  readonly updatedBy?: string | null;
  withUpdatedBy(updatedBy: string | null): Meta;

  /**
   * Fkey field for updatedBy
   */
  readonly updatedByUser?: User | null;
  withUpdatedByUser(updatedByUser: IUser | null): Meta;

  /**
   * C3 maintained timestamp of the latest update to the row.  This differs from {@link updated} in that represents
   * the externally controllable updated timestamp (e.g. time the data was updated in the source system).
   */
  readonly timestamp?: DateTime | null;
  withTimestamp(timestamp: DateTime | Date | string | null): Meta;

  /**
   * Comment that can be associated with the instant.  If version history is enabled, the contents of this field
   * will be copied to to the {@link versionEdits.comment} field for the edit associated with the update.
   */
  readonly comment?: string | null;
  withComment(comment: string | null): Meta;

  /**
   * Source system where the data was loaded from.  It is only set if the data is provided during data load.
   */
  readonly sourceSystem?: string | null;
  withSourceSystem(sourceSystem: string | null): Meta;

  /**
   * Source file where the data was loaded from.  It is only set if the data is provided during data load.
   */
  readonly sourceFile?: string | null;
  withSourceFile(sourceFile: string | null): Meta;

  /**
   * Id of the {@link Sources} for the Source
   */
  readonly sourcesId?: string | null;
  withSourcesId(sourcesId: string | null): Meta;

  /**
   * Encoded path of {@link SourceFile}
   */
  readonly sourceFileEncodedPath?: string | null;
  withSourceFileEncodedPath(sourceFileEncodedPath: string | null): Meta;

  /**
   * Url of the {@link SourceFile}
   */
  readonly sourceFileUrl?: string | null;
  withSourceFileUrl(sourceFileUrl: string | null): Meta;

  /**
   * Returned type hierarchy for the Obj.  Only returned if meta.typeHierarchy is explicitly present
   * in the include spec (e.g. include = "[this, {meta: [this, typeHierarchy]}]".
   */
  readonly typeHierarchy?: EntityType | null;
  withTypeHierarchy(typeHierarchy: IEntityType | null): Meta;

  /**
   * Level of the object in the hierarchy when using hierarchical fetch api.
   */
  readonly level?: number | null;
  withLevel(level: number | null): Meta;

  /**
   * When set for input objs in a {@link Persistable#update} or {@link Persistable#upsert} operation (or their batch
   * counterparts), causes the instance to be archived if the type is configured to archive removed data.  If the
   * type is not configured to archive removed data, instances with this field set will be ignored.
   *
   * @see Db.archive
   */
  readonly archived?: boolean;
  withArchived(archived: boolean): Meta;

  /**
   * Returned value that indicates that reference object is invalid (i.e. target object does not exist in the data
   * store). Only returned if field is explicitly included in the include spec for a {@link Persistable#fetch}
   * operation.
   *
   * @see FetchSpec
   */
  readonly referenceInvalid?: boolean;
  withReferenceInvalid(referenceInvalid: boolean): Meta;

  /**
   * When specified on the first input obj, performs the same function as {@link UpsertSpec#include} w.r.t.
   * specifying what fields will be returned for created/updated Obj instances for {@link Persistable#upsert} and
   * related functions.  Otherwise, when objs are retrieved via {@link Persistable#fetch} or {@link Persistable#get},
   * this will be set with the include spec used to retrieve them.
   */
  readonly include?: string | null;
  withInclude(include: string | null): Meta;

  /**
   * If specified as true on an obj to call {@link Persistable#get}, then read calcs will be included in the returned
   * obj by default.  If false, they will only be returned if explicitly specified in the `include`
   */
  readonly includeReadCalcs?: boolean;
  withIncludeReadCalcs(includeReadCalcs: boolean): Meta;

  /**
   * When objs are retrieved via {@link Persistable#fetch} or {@link Persistable#get}, this will be set with the
   * include spec used to retrieve them.
   */
  readonly fetchInclude?: string | null;
  withFetchInclude(fetchInclude: string | null): Meta;

  /**
   * When objs are retrieved via {@link Persistable#fetch} or {@link Persistable#get}, this will be set with the
   * type the operation was called from (which may differ from the type of instance(s) returned as we create
   * instances of the appropriate extendable type for objs fetched through a base type.
   */
  readonly fetchType?: string | null;
  withFetchType(fetchType: string | null): Meta;

  /**
   * Allows for getting a specific version of an Obj (based on its {@link Persistable#version} value} for entity
   * types that have version history enabled.  The requested version  number should be specified in the input Obj
   * instance for the {@link Persistable#get} function.
   *
   * If the value specified is <= 0, it is interpreted as being relative, with "0" being the current version and
   * "-1" being the version immediately before the current version, etc.  If the value is > 0, it is assumed to be
   * the specific version being requested.
   */
  readonly getVersion?: number | null;
  withGetVersion(getVersion: number | null): Meta;

  /**
   * Allows for getting an Obj instance as it was for a specific point in time for entity types that have version
   * history enabled.  The requested time should be specified in the input Obj instance for the
   * {@link Persistable#get} function.
   */
  readonly getVersionAsOf?: DateTime | null;
  withGetVersionAsOf(getVersionAsOf: DateTime | Date | string | null): Meta;

  /**
   * Allows for getting an Obj instance in its specific extension type using the {@link Persistable#get} function
   * when that type isn't known.  For example, if this field is set on a FixedAsset instance that happens to be
   * a Facility, then calling FixedAsset.get with that input obj will return a Facility instance with all of the
   * Facility fields populated.
   */
  readonly getSpecific?: boolean;
  withGetSpecific(getSpecific: boolean): Meta;

  /**
   * Allows for getting an Obj instance via the {@link Persistable#get} operation that has been archived for a
   * type that is configured to archive instances rather than deleting them for the {@link Persistable#remove}
   * and related operations.
   */
  readonly getFromArchive?: boolean;
  withGetFromArchive(getFromArchive: boolean): Meta;

  /**
   * Internally used for system partial updates.  If you need to ask, DON'T USE IT!
   *
   * EditList causes stack overflow
   */
  readonly editList?: Obj | null;
  withEditList(editList: IObj | null): Meta;

  /**
   * Alternate way of specifying the source obj to {@link Persistable#update} and related functions for partial
   * Obj updates.
   */
  readonly original?: Obj | null;
  withOriginal(original: IObj | null): Meta;

  /**
   * Disables version checking against user updates during system updates (e.g. stored calc field refresh) when
   * specified on the first input Obj instance for {@link Persistable#upsert} and related functions.  This doesn't
   * totally eliminate version checking.  Instead it does a version check against other system updates, ignoring
   * user updates.
   */
  readonly disableVersionHistory?: boolean;
  withDisableVersionHistory(disableVersionHistory: boolean): Meta;

  /**
   * Performs same function as {@link UpsertSpec#disableAsyncProcessing} when specified on the first input Obj
   * instance for {@link Persistable#upsert} and related functions.
   */
  readonly disableAsyncProcessing?: boolean;
  withDisableAsyncProcessing(disableAsyncProcessing: boolean): Meta;

  /**
   * Disables calls to any defined before callback functions (e.g. {@link Persistable#beforeCreate},
   * {@link Persistable#beforeUpdate} and {@link Persistable#beforeRemove})
   * when set on the first input Obj instance of calls to {@link Persistable#upsert} and related functions.
   */
  readonly disableBeforeCallbacks?: boolean;
  withDisableBeforeCallbacks(disableBeforeCallbacks: boolean): Meta;

  /**
   * Disables calls to any defined after callback functions (e.g. {@link Persistable#afterCreate},
   * {@link Persistable#afterUpdate} and {@link Persistable#afterRemove})
   * when set on the first input Obj instance of calls to {@link Persistable#upsert} and related functions.
   */
  readonly disableAfterCallbacks?: boolean;
  withDisableAfterCallbacks(disableAfterCallbacks: boolean): Meta;

  /**
   * Only used internally to cause the refresh of calc fields within an Obj instance being created/updated itself.
   * Any calc fields that need to be refreshed in other Obj instances (including in other types) will be handled
   * via the async stored calc refresh mechanism.
   */
  readonly refreshCalcFields?: boolean;
  withRefreshCalcFields(refreshCalcFields: boolean): Meta;

  /**
   * Only used internally to cause the refresh of calc fields within an Obj instance being created/updated itself.
   * Any calc fields that need to be refreshed in other Obj instances (including in other types) will be handled
   * via the async stored calc refresh mechanism.
   */
  readonly calcFieldsToRefresh?: C3.Array<string | null>;
  withCalcFieldsToRefresh(calcFieldsToRefresh: C3.Array<string | null> | Array<string | null>): Meta;

  /**
   * Set during import data to identify source location info such as line # in csv file or line / col # in xml file.
   */
  readonly deserSource?: string | null;
  withDeserSource(deserSource: string | null): Meta;

  /**
   * Internally set to indicate that the kind field on the input value to get is the real value (i.e. not the value
   * from the initializer.  This avoids unnecessary calls to get within getSpecific get request.
   */
  readonly kindFieldValid?: boolean;
  withKindFieldValid(kindFieldValid: boolean): Meta;

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
  static fromJson(json: any | null): Meta | null;

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
  static fromJsonString(json: string | null): Meta | null;

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
  static fromXmlString(xml: string | null): Meta | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Meta | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Meta;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Meta;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Meta;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Meta | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Meta | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Meta;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Meta;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Meta;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Meta;

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
  withField(field: string, value: any, doNotConvert?: boolean): Meta;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): Meta;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Meta;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Meta;

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
  withoutFieldAtPath(path: string): Meta;

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
  withoutField(field: string | null): Meta;

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
  withoutField(field: FieldType | null): Meta;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Meta;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Meta;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Meta;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Meta;

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
  defaultField(field: string): Meta;

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
  defaultField(field: FieldType): Meta;

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
  unsetField(field: string): Meta;

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
  unsetField(field: FieldType): Meta;

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
  removeField(field: string): Meta;

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
  removeField(field: FieldType): Meta;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Meta;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Meta;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Meta;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Meta;

  mergeJson(json: any | null): Meta;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Meta;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Meta;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Meta | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Meta | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Meta | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Meta | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Meta | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Meta | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Meta | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Meta | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Meta | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Meta;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Meta;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Meta;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Meta;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Meta;

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
  static make(fields: any, withDefaults?: boolean): Meta;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Meta;

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
  afterMake(): Meta;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Meta;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Meta>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Meta;

  /**
   * Returns the appId of the meta: cluster-env-app
   */
  get appId(): string | null;
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
