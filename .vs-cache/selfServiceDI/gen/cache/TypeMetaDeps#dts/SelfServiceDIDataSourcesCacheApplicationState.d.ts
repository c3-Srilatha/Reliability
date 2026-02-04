// TypeScript definitions for the C3 type SelfServiceDIDataSourcesCacheApplicationState

/**
 * Application state specifically related to the Data Sources cache in the Self Service DI application. This cache is
 * used when rendering the tree list of data sources based on the {@link SourceSystem}s and
 * {@link SourceCollection}s configured for the application.
 *
 * @remarks this represents a value passed to a method that expects an instance of SelfServiceDIDataSourcesCacheApplicationState
 */
declare interface ISelfServiceDIDataSourcesCacheApplicationState {

  /**
   * Various system fields.
   */
  meta?: IMeta | null;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  id?: string | null;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  name?: string | null;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  dataSpec?: IUiSdlNoData | null;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  disableDataRequestOnFirstRender?: boolean;

  /**
   * Whether the effect triggers and epics have been registered
   */
  triggersRegistered?: boolean;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  wrapWithMetadataId?: boolean;

  /**
   * The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
   */
  REDUX_NAMESPACE?: string | null;

  /**
   * Collection of extra async {@link UiSdlEffectTrigger}.
   */
  effectTriggers?: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>;

  /**
   * A map of {@link SourceSystem#name} to cached information about the source system for quick lookup in the UI.
   */
  sourceSystemsCache?: C3.Map<string | null, SelfServiceDISourceSystemCacheItem | null> | {[key: string | null]: ISelfServiceDISourceSystemCacheItem | null};

  /**
   * A map of {@link SourceCollection#name} to cached information about the source collection for quick lookup in the UI.
   */
  sourceCollectionsCache?: C3.Map<string | null, SelfServiceDISourceCollectionCacheItem | null> | {[key: string | null]: ISelfServiceDISourceCollectionCacheItem | null};

  /**
   * The loading state of different parts of the Data Sources cache.
   */
  loadingState?: ISelfServiceDIDataSourcesCacheLoadingState | null;

  /**
   * Stores a map of sourceCollectionName to its table schema information
   */
  tableSchemaCache?: C3.Map<string | null, SelfServiceDITableSchemaCacheItem | null> | {[key: string | null]: ISelfServiceDITableSchemaCacheItem | null};

  /**
   * Indicates that tableSchemaCache has been fetched and stored
   */
  tableSchemaCacheFetched?: boolean;

  /**
   * A map of {@link SourceFile} ids to {@link SelfServiceDISourceFileCacheItem}
   */
  soureFilesCache?: C3.Map<string | null, SelfServiceDISourceFileCacheItem | null> | {[key: string | null]: ISelfServiceDISourceFileCacheItem | null};

  /**
   * A map of source collection names to whether it is the first time loading this source collection
   * This is used in {@link RefreshFileUploadSourceCollectionStatusEpic} to determine
   * whether someone aborted file upload by refreshing the page.
   */
  fileUploadFirstLoadMap?: C3.Map<string | null, boolean> | {[key: string | null]: boolean};

  transformCache?: C3.Map<string | null, Transform | null> | {[key: string | null]: ITransform | null};

  /**
   * Indicates that Transform cache has been fetched and stored
   */
  transformCacheFetched?: boolean;

  /**
   * A map of {@link SourceCollection#name} to cached information about the files properties for quick lookup in the UI.
   */
  filesProperties?: C3.Map<string | null, any | null> | {[key: string | null]: any | null};

  childSourceCollections?: C3.Array<SelfServiceDISourceCollectionCacheItem | null> | Array<ISelfServiceDISourceCollectionCacheItem | null>;

  vectorStoreCache?: C3.Map<string | null, any> | {[key: string | null]: any};

  unstructuredPipelineCache?: C3.Map<string | null, any> | {[key: string | null]: any};

  unstructuredProcessorCache?: C3.Map<string | null, any> | {[key: string | null]: any};

  embedderCache?: C3.Map<string | null, any> | {[key: string | null]: any};
}

/**
 * Application state specifically related to the Data Sources cache in the Self Service DI application. This cache is
 * used when rendering the tree list of data sources based on the {@link SourceSystem}s and
 * {@link SourceCollection}s configured for the application.
 *
 * @remarks this represents a made instance of SelfServiceDIDataSourcesCacheApplicationState
 */
declare class SelfServiceDIDataSourcesCacheApplicationState extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
   */
  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Collection of extra async {@link UiSdlEffectTrigger}.
   */
  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * A map of {@link SourceSystem#name} to cached information about the source system for quick lookup in the UI.
   */
  readonly sourceSystemsCache?: C3.Map<string | null, SelfServiceDISourceSystemCacheItem | null>;
  withSourceSystemsCache(sourceSystemsCache: C3.Map<string | null, SelfServiceDISourceSystemCacheItem | null> | {[key: string | null]: ISelfServiceDISourceSystemCacheItem | null}): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * A map of {@link SourceCollection#name} to cached information about the source collection for quick lookup in the UI.
   */
  readonly sourceCollectionsCache?: C3.Map<string | null, SelfServiceDISourceCollectionCacheItem | null>;
  withSourceCollectionsCache(sourceCollectionsCache: C3.Map<string | null, SelfServiceDISourceCollectionCacheItem | null> | {[key: string | null]: ISelfServiceDISourceCollectionCacheItem | null}): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * The loading state of different parts of the Data Sources cache.
   */
  readonly loadingState?: SelfServiceDIDataSourcesCacheLoadingState | null;
  withLoadingState(loadingState: ISelfServiceDIDataSourcesCacheLoadingState | null): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Stores a map of sourceCollectionName to its table schema information
   */
  readonly tableSchemaCache?: C3.Map<string | null, SelfServiceDITableSchemaCacheItem | null>;
  withTableSchemaCache(tableSchemaCache: C3.Map<string | null, SelfServiceDITableSchemaCacheItem | null> | {[key: string | null]: ISelfServiceDITableSchemaCacheItem | null}): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Indicates that tableSchemaCache has been fetched and stored
   */
  readonly tableSchemaCacheFetched?: boolean;
  withTableSchemaCacheFetched(tableSchemaCacheFetched: boolean): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * A map of {@link SourceFile} ids to {@link SelfServiceDISourceFileCacheItem}
   */
  readonly soureFilesCache?: C3.Map<string | null, SelfServiceDISourceFileCacheItem | null>;
  withSoureFilesCache(soureFilesCache: C3.Map<string | null, SelfServiceDISourceFileCacheItem | null> | {[key: string | null]: ISelfServiceDISourceFileCacheItem | null}): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * A map of source collection names to whether it is the first time loading this source collection
   * This is used in {@link RefreshFileUploadSourceCollectionStatusEpic} to determine
   * whether someone aborted file upload by refreshing the page.
   */
  readonly fileUploadFirstLoadMap?: C3.Map<string | null, boolean>;
  withFileUploadFirstLoadMap(fileUploadFirstLoadMap: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): SelfServiceDIDataSourcesCacheApplicationState;

  readonly transformCache?: C3.Map<string | null, Transform | null>;
  withTransformCache(transformCache: C3.Map<string | null, Transform | null> | {[key: string | null]: ITransform | null}): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Indicates that Transform cache has been fetched and stored
   */
  readonly transformCacheFetched?: boolean;
  withTransformCacheFetched(transformCacheFetched: boolean): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * A map of {@link SourceCollection#name} to cached information about the files properties for quick lookup in the UI.
   */
  readonly filesProperties?: C3.Map<string | null, any | null>;
  withFilesProperties(filesProperties: C3.Map<string | null, any | null> | {[key: string | null]: any | null}): SelfServiceDIDataSourcesCacheApplicationState;

  readonly childSourceCollections?: C3.Array<SelfServiceDISourceCollectionCacheItem | null>;
  withChildSourceCollections(childSourceCollections: C3.Array<SelfServiceDISourceCollectionCacheItem | null> | Array<ISelfServiceDISourceCollectionCacheItem | null>): SelfServiceDIDataSourcesCacheApplicationState;

  readonly vectorStoreCache?: C3.Map<string | null, any>;
  withVectorStoreCache(vectorStoreCache: C3.Map<string | null, any> | {[key: string | null]: any}): SelfServiceDIDataSourcesCacheApplicationState;

  readonly unstructuredPipelineCache?: C3.Map<string | null, any>;
  withUnstructuredPipelineCache(unstructuredPipelineCache: C3.Map<string | null, any> | {[key: string | null]: any}): SelfServiceDIDataSourcesCacheApplicationState;

  readonly unstructuredProcessorCache?: C3.Map<string | null, any>;
  withUnstructuredProcessorCache(unstructuredProcessorCache: C3.Map<string | null, any> | {[key: string | null]: any}): SelfServiceDIDataSourcesCacheApplicationState;

  readonly embedderCache?: C3.Map<string | null, any>;
  withEmbedderCache(embedderCache: C3.Map<string | null, any> | {[key: string | null]: any}): SelfServiceDIDataSourcesCacheApplicationState;

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
  static fromJson(json: any | null): SelfServiceDIDataSourcesCacheApplicationState | null;

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
  static fromJsonString(json: string | null): SelfServiceDIDataSourcesCacheApplicationState | null;

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
  static fromXmlString(xml: string | null): SelfServiceDIDataSourcesCacheApplicationState | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): SelfServiceDIDataSourcesCacheApplicationState | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<SelfServiceDIDataSourcesCacheApplicationState | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<SelfServiceDIDataSourcesCacheApplicationState | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): SelfServiceDIDataSourcesCacheApplicationState;

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
  withField(field: string, value: any, doNotConvert?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

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
  withoutFieldAtPath(path: string): SelfServiceDIDataSourcesCacheApplicationState;

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
  withoutField(field: string | null): SelfServiceDIDataSourcesCacheApplicationState;

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
  withoutField(field: FieldType | null): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): SelfServiceDIDataSourcesCacheApplicationState;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): SelfServiceDIDataSourcesCacheApplicationState;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): SelfServiceDIDataSourcesCacheApplicationState;

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
  defaultField(field: string): SelfServiceDIDataSourcesCacheApplicationState;

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
  defaultField(field: FieldType): SelfServiceDIDataSourcesCacheApplicationState;

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
  unsetField(field: string): SelfServiceDIDataSourcesCacheApplicationState;

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
  unsetField(field: FieldType): SelfServiceDIDataSourcesCacheApplicationState;

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
  removeField(field: string): SelfServiceDIDataSourcesCacheApplicationState;

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
  removeField(field: FieldType): SelfServiceDIDataSourcesCacheApplicationState;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): SelfServiceDIDataSourcesCacheApplicationState;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): SelfServiceDIDataSourcesCacheApplicationState;

  mergeJson(json: any | null): SelfServiceDIDataSourcesCacheApplicationState;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<SelfServiceDIDataSourcesCacheApplicationState | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<SelfServiceDIDataSourcesCacheApplicationState | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<SelfServiceDIDataSourcesCacheApplicationState | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<SelfServiceDIDataSourcesCacheApplicationState | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<SelfServiceDIDataSourcesCacheApplicationState | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, SelfServiceDIDataSourcesCacheApplicationState | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, SelfServiceDIDataSourcesCacheApplicationState | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<SelfServiceDIDataSourcesCacheApplicationState | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<SelfServiceDIDataSourcesCacheApplicationState | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

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
  static make(fields: any, withDefaults?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): SelfServiceDIDataSourcesCacheApplicationState | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): SelfServiceDIDataSourcesCacheApplicationState;

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
  afterMake(): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<SelfServiceDIDataSourcesCacheApplicationState>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): SelfServiceDIDataSourcesCacheApplicationState;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<SelfServiceDIDataSourcesCacheApplicationState | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<SelfServiceDIDataSourcesCacheApplicationState | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<SelfServiceDIDataSourcesCacheApplicationState | null>;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow | null>;

  /**
   * Finds rows matching specification and returns them as iterator of Arrow batches.
   *
   * @param spec
   *           Specification of what rows to return.
   * @return Iterator of Arrow batches.
   */
  static scanArrow(spec: ScanArrowSpec): ArrowIterator | null;

  /**
   * Fetched multiple obj instances in multiple locales based on specification.
   *
   * @param spec
   *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
   *        type.
   * @return Requested objs where key of map is locale id
   */
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<SelfServiceDIDataSourcesCacheApplicationState | null> | null>;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec | null): number;

  /**
   * Gets the estimated count of objs that a fetch on the type with the optional filter will return.
   * For non-kv types, The count is obtained from the query explain plan for the fetch.
   * For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
   * other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
   * upper bound for the partition. For more accurate results, perform fillBuckets first.
   *
   * @param spec
   *        Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
   *        explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
   *        fields.
   * @param updateStatistics
   *        If true, the database statistics for all tables involved in the query will be updated prior to obtaining
   *        the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
   *
   * @return The requested estimated count.
   */
  static fetchCountEstimated(spec?: FetchFilterSpec | null, updateStatistics?: boolean): number;

  /**
   * Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
   * a callback function for the given batch.
   *
   * @param spec
   *           Specification of the scan action.
   * @return Statistics of the scan action.
   */
  static scan(spec: ScanSpec): ScanStats | null;

  /**
   * Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
   *
   * @param spec
   *        Spec indicating how the operation should work.
   *
   * IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
   *             rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
   *             cause an issue if the results are blindly used to create filters for fetching batches as the last batch
   *             would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
   *             other would be specified, depending on whether you are interested in controlling the number of batches
   *             or batch size.
   *
   * @return A stream of batch ids based on the input parameters.
   */
  static batchIds(spec?: BatchIdsSpec | null): Stream<string | null>;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec | null): boolean;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(filter: Filter): boolean;

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
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): MetadataDeps<SelfServiceDIDataSourcesCacheApplicationState | null>;

  save(subPath?: string | null, contentType?: string | null): SelfServiceDIDataSourcesCacheApplicationState;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: SelfServiceDIDataSourcesCacheApplicationState | null, spec?: UpsertSpec | null): SelfServiceDIDataSourcesCacheApplicationState | null;

  upsert(srcObj?: SelfServiceDIDataSourcesCacheApplicationState | null, spec?: UpsertSpec | null): SelfServiceDIDataSourcesCacheApplicationState | null;

  /**
   * Retrieves folder that holds metadata.
   */
  static metadataFolder(): string | null;

  /**
   * If this Metadata type has arbitrary folder hierarchy.
   */
  static hasArbitraryFolderHierarchy(): boolean;

  /**
   * If metadata path is valid.
   * @param pkg
   *    name of the package
   * @param filePath
   *    path of metadata json file
   */
  static isValidMetadataJson(pkg: string, filePath: string): boolean;

  /**
   * Optional member function to enable custom validation logic.
   */
  validateMetadata(): ValidateObjResult;

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
  static fromString(s: string | null): SelfServiceDIDataSourcesCacheApplicationState | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): SelfServiceDIDataSourcesCacheApplicationState | null;

  jsonStringify(): string | null;

  static jsonify(value?: any): string | null;

  /**
   * A function to perform the setting and merging of keys and values for the dataSpec
   * and entity data in the react props. Components that need custom merging of multiple or nested datasources
   * should override this function and provide their own custom setting/merging logic.
   *
   * @param componentId
   *           The id of the component on which the function is being called
   * @param dataSpecFieldName
   *           The name of the field which is annotated as a dataSpec
   * @param dataDestinationFieldName
   *           Contains field name to store the returned data
   * @param props
   *           The object that will eventually be delivered to the component as react props
   * @param state
   *           The redux state
   * @returns props after the data has been set/merged
   */
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: SelfServiceDIDataSourcesCacheApplicationState, state: UiSdlReduxState): SelfServiceDIDataSourcesCacheApplicationState | null;

  /**
   * Triggered the first time a component renders. Applications should never
   * trigger this action manually, as it will be triggered internally by the
   * framework. If multiple instances of the same component (i.e. having the
   * same id) are present on a single page, the framework _may_ trigger this
   * action multiple times—at most once per component instance and at least once
   * overall.
   *
   * @param id
   *           The id of the component that is rendered.
   * @returns an `INITIAL_RENDER` action.
   */
  static renderInitialAction(id: string): UiSdlInitialRenderAction;

  /**
   * Triggered the first time a component renders. Component will trigger this action
   * when it registers effect triggers
   * @param id
   *           The id of the component that is rendered.
   * @returns an `REGISTER_TRIGGERS` action.
   */
  static registerTriggersAction(id: string): UiSdlRegisterTriggersAction;

  /**
   * Listens for actions of type `REGISTER_TRIGGERS` and flips a triggersRegistered when effect triggers are registered
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  triggersRegisterEffect(state: UiSdlReduxState, action: UiSdlRegisterTriggersAction): UiSdlReduxState;

  /**
   * Gets the namespace for this state
   * @return the namespace
   */
  static getStateNamespace(): string | null;

  /**
   * Gets the namespace for the initial state
   * @return the namespace
   */
  static getInitialStateNamespace(): string | null;

  /**
   * Gets the entire path to the state
   * @param id
   *           The id of the stateful entity
   * @return an array of the entire path to the state
   */
  static getConfigStatePath(id?: string | null): C3.Array<string | null>;

  /**
   * Gets the enire path to the initial state
   * @param id
   *           The id of the stateful entity
   * @return an array of the entire path to the initial state
   */
  static getInitialConfigStatePath(id?: string | null): C3.Array<string | null>;

  /**
   * Helper method to retrieve config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @returns The config value as UiSdlImmutableJS
   */
  static getConfigFromState(id?: string | null, state?: UiSdlReduxState | null, dataPath?: C3.Array<string | null>): UiSdlImmutableJS<any> | null;

  /**
   * Helper method to retrieve config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @param value The value to set
   * @returns The new state as UiSdlImmutableJS
   */
  static setConfigInState(id?: string | null, state?: UiSdlReduxState | null, dataPath?: C3.Array<string | null>, value?: any): UiSdlImmutableJS<any> | null;

  /**
   * Helper method to retrieve initial config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @returns The config value as UiSdlImmutableJS
   */
  static getInitialConfigFromState(id?: string | null, state?: UiSdlReduxState | null, dataPath?: C3.Array<string | null>): UiSdlImmutableJS<any> | null;

  /**
   * Helper method to retrieve initial config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @param value The value to set
   * @returns The new state as UiSdlImmutableJS
   */
  static setInitialConfigInState(id?: string | null, state?: UiSdlReduxState | null, dataPath?: C3.Array<string | null>, value?: any): UiSdlImmutableJS<any> | null;

  /**
   * Determines whether or not the `UiSdlState` can update state outside of its own state
   * @return true if the `UiSdlState` should not be able to set state outside of its own state
   */
  static isLimitEffectOnState(): boolean;

  /**
   * Retrieves config value from application state.
   *
   * @param stateId
   *           Id of the state.
   * @param state
   *           Redux state.
   * @param dataPath
   *           The path to the config value.
   * @returns Redux state.
   */
  static getConfigFromApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: C3.Array<string | null>): UiSdlReduxState;

  /**
   * Sets config value in application state.
   *
   * @param stateId
   *           Id of the state.
   * @param state
   *           Redux state.
   * @param dataPath
   *           The path to the config value.
   * @param value
   *           The config value to set.
   * @returns Redux state.
   */
  static setConfigInApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: C3.Array<string | null>, value: any): UiSdlReduxState;

  /**
   * Remove config value in the state.
   *
   * @param stateId
   *           Id of the state.
   * @param state
   *           Redux state.
   * @param dataPath
   *           The path to the config value.
   * @returns Redux state.
   */
  static removeConfigInApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: C3.Array<string | null>): UiSdlReduxState;

  /**
   * Triggers when the `UiSdlApplicationState` is initialized.
   *
   * @param stateId
   *            Id of the state.
   * @return a 'APPLICATION_STATE_INITIALIZE' action.
   */
  static initializeApplicationStateAction(stateId: string): UiSdlApplicationStateInitializeAction;

  /**
   * Action to delete data in a certain slice of the application state
   *
   * @param stateId
   *            Id of the state.
   * @param ids
   *            Ids of the objects to be deleted
   * @param dataPath
   *            slice of the application state to put the new object in
   * @return a 'APPLICATION_STATE_DATA_DELETE' action.
   */
  static applicationStateDeleteDataAction(stateId: string, ids?: C3.Array<string | null>, dataPath?: string | null): UiSdlApplicationStateDataDeleteAction;

  /**
   * Action to add data to a certain slice in the application state
   *
   * @param stateId
   *            Id of the state.
   * @param id
   *            Id of the newly added object
   * @param dataPath
   *            slice of the application state to put the new object in
   * @return a 'APPLICATION_STATE_DATA_ADD' action.
   */
  static applicationStateAddDataAction(stateId: string, id?: string | null, dataPath?: string | null): UiSdlApplicationStateDataAddAction;

  /**
   * Action to modify data to a certain slice in the application state
   *
   * @param stateId
   *            Id of the state.
   * @param id
   *            Id of the newly added object
   * @param dataPath
   *            slice of the application state to put the new object in
   * @return a 'APPLICATION_STATE_MODIFY_ADD' action.
   */
  static applicationStateModifyDataAction(stateId: string, id?: string | null, dataPath?: string | null, field?: string | null, newValue?: any): UiSdlApplicationStateDataModifyAction;

  /**
   * Listens to actions of 'APPLICATION_STATE_DATA_DELETE' and delete objects in the application state.
   *
   * @param state
   *            Redux state.
   * @param action
   *            Redux action.
   * @return the new Redux state.
   */
  static applicationStateDataDeleteEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataDeleteAction): UiSdlReduxState;

  /**
   * Listens to actions of 'APPLICATION_STATE_DATA_ADD' and add new data to the specified data path in the payload.
   *
   * @param state
   *            Redux state.
   * @param action
   *            Redux action.
   * @return the new Redux state.
   */
  static applicationStateDataAddEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataAddAction): UiSdlReduxState;

  /**
   * Listens to actions of 'APPLICATION_STATE_DATA_MODIFY' and add new data to the specified data path in the payload.
   *
   * @param state
   *            Redux state.
   * @param action
   *            Redux action.
   * @return the new Redux state.
   */
  static applicationStateDataModifyEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataModifyAction): UiSdlReduxState;

  /**
   * Generates a function that is able to return the application metadata from the redux state.
   * @param applicationId
   *            The application ID to generate a selector for
   * @return a function that can return the metadata for the applicationID when given the redux state
   */
  static generateSelector(applicationId?: string | null): λFunction<UiSdlReduxState | null, UiSdlImmutableJS<UiSdlApplicationState | null> | null> | null;

  /**
   * An action to trigger loading of all {@link SourceSystem}s.
   *
   * @returns a `LOAD_ALL_SOURCE_SYSTEMS` action
   */
  static loadAllSourceSystemsAction(): UiSdlReduxAction<any>;

  /**
   * An action to trigger when all {@link SourceSystem}s have been loaded.
   *
   * @returns a `ALL_SOURCE_SYSTEMS_LOADED` action
   */
  static allSourceSystemsLoadedAction(): UiSdlReduxAction<any>;

  /**
   * A generic action to update the {@link sourceSystemsCache} at a specific path.
   *
   * @param path
   *           An array-ified path to the position in the cache to update. An empty array will update at the top level
   *           of {@link sourceSystemsCache}.
   * @param dataToCache
   *           The data to modify in the cache at the provided path.
   *
   * @returns a `UPDATE_SOURCE_SYSTEMS_CACHE` action
   */
  static updateSourceSystemsCacheAction(path?: C3.Array<string | null>, dataToCache?: any | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `UPDATE_SOURCE_SYSTEMS_CACHE` and updates the {@link sourceSystemsCache} at the
   * provided path.
   */
  static updateSourceSystemsCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieve all {@link SourceSystem}s from `sourceSystemsCache`
   */
  static getAllSourceSystems(state: UiSdlReduxState): C3.Array<SourceSystem<SourceSystem.Config | null, any> | null>;

  /**
   * Retrieve a {@link SelfServiceDISourceSystemCacheItem} from `sourceSystemsCache`
   */
  static getSourceSystemCacheItem(state: UiSdlReduxState, sourceSystemName?: string | null): SelfServiceDISourceSystemCacheItem | null;

  /**
   * Retrieve a {@link SourceSystem} from `sourceSystemsCache`
   */
  static getSourceSystemDetails(state: UiSdlReduxState, sourceSystemName?: string | null): SourceSystem<SourceSystem.Config | null, any> | null;

  /**
   * Retrieve a {@link SelfServiceDISourceSystemCacheItem#sourceSystemConfig} from `sourceSystemsCache`
   */
  static getSourceSystemConfig(state: UiSdlReduxState, sourceSystemName?: string | null): JdbcStoreConfig | null;

  /**
   * Retrieve the storage kind of a {@link SelfServiceDISourceSystemCacheItem} from `sourceSystemsCache`
   */
  static getSourceSystemStorageKind(state: UiSdlReduxState, sourceSystemName?: string | null): string | null;

  /**
   * An action to trigger loading of all {@link SourceCollection}s.
   *
   * @returns a `LOAD_ALL_SOURCE_COLLECTIONS` action
   */
  static loadAllSourceCollectionsAction(): UiSdlReduxAction<any>;

  /**
   * An action to trigger when all {@link SourceCollection}s have been loaded.
   *
   * @returns a `ALL_SOURCE_COLLECTIONS_LOADED` action
   */
  static allSourceCollectionsLoadedAction(): UiSdlReduxAction<any>;

  /**
   * An action to trigger loading of {@link SourceCollection}s only for specific {@link SourceSystem}s.
   *
   * @returns a `REFRESH_SOURCE_COLLECTIONS_FOR_SOURCE_SYSTEMS` action
   */
  static refreshSourceCollectionsForSourceSystemsAction(sourceSystemNames?: C3.Array<string | null>): UiSdlReduxAction<any>;

  /**
   * A generic action to update the {@link sourceCollectionsCache} at a specific path.
   *
   * @param path
   *           An array-ified path to the position in the cache to update. An empty array will update at the top level
   *           of {@link sourceCollectionsCache}.
   * @param dataToCache
   *           The data to modify in the cache at the provided path.
   *
   * @returns a `UPDATE_SOURCE_COLLECTIONS_CACHE` action
   */
  static updateSourceCollectionsCacheAction(path?: C3.Array<string | null>, dataToCache?: any | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `UPDATE_SOURCE_COLLECTIONS_CACHE` and updates the {@link sourceSystemsCache} at the
   * provided path.
   */
  static updateSourceCollectionsCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to remove the {@link SelfServiceDISourceCollectionCacheItem} from {@link #sourceCollectionsCache}.
   *
   * @param sourceCollectionName
   *           Name of the {@link SourceCollection} to be removed.
   *
   * @returns a `REMOVE_SOURCE_COLLECTION_CACHE_ITEM` action
   */
  static removeSourceCollectionCacheItemAction(sourceCollectionName: string): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `REMOVE_SOURCE_COLLECTION_CACHE_ITEM` and removes the {@link SelfServiceDISourceCollectionCacheItem}
   * from {@link #sourceCollectionsCache}.
   */
  static removeSourceCollectionCacheItemReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Returns a map of {@link SelfServiceDISourceCollectionCacheItem} keyed by name
   */
  static getSourceCollectionsCache(state: UiSdlReduxState): C3.Map<string | null, SelfServiceDISourceCollectionCacheItem | null>;

  /**
   * Retrieve all {@link SourceCollection}s from `sourceCollectionsCache`
   */
  static getAllSourceCollections(state: UiSdlReduxState): C3.Array<SourceCollection<SourceCollection.Config | null> | null>;

  /**
   * Retrieve a {@link SourceCollection} from `sourceCollectionsCache`
   */
  static getSourceCollectionDetails(state: UiSdlReduxState, sourceCollectionName?: string | null): SourceCollection<SourceCollection.Config | null> | null;

  /**
   * Retrieve a {@link SelfServiceDISourceCollectionCacheItem} from `sourceCollectionsCache`
   */
  static getSourceCollectionCacheItem(state: UiSdlReduxState, sourceCollectionName?: string | null): SelfServiceDISourceCollectionCacheItem | null;

  /**
   * Retrieve a list of {@link SourceCollection}s from a {@link SourceSystem} in `sourceCollectionsCache`
   */
  static getSourceCollectionsForSourceSystem(state: UiSdlReduxState, sourceSystemName?: string | null): C3.Array<SourceCollection<SourceCollection.Config | null> | null>;

  /**
   * Retrieve a list of {@link SourceCollection}s from a sourceName in `sourceCollectionsCache`
   */
  static getSelectedSourceCollectionsFromSourceName(state: UiSdlReduxState, sourceName?: string | null): C3.Array<SourceCollection<SourceCollection.Config | null> | null>;

  /**
   * An action to trigger loading of all {@link SourceSystem} configurations.
   *
   * @returns a `LOAD_ALL_SOURCE_SYSTEM_CONFIGS` action
   */
  static loadAllSourceSystemConfigsAction(): UiSdlReduxAction<any>;

  /**
   * An action to trigger loading of a specific {@link SourceSystem} configuration.
   *
   * @returns a `LOAD_SOURCE_SYSTEM_CONFIG` action
   */
  static loadSourceSystemConfigAction(sourceSystem?: SelfServiceDIDataSourcesCacheApplicationState | null): UiSdlReduxAction<any>;

  /**
   * An action to update the {@link sourceSystemsCache} at the `{sourceSystemName}.sourceSystemConfig` path for a
   * specific source system.
   *
   * @param sourceSystemName
   *           The source system to update
   * @param configData
   *           The data to modify in the cache for the provided source system.
   *
   * @returns a `CACHE_SOURCE_SYSTEM_CONFIG` action
   */
  static cacheSourceSystemConfigAction(sourceSystemName?: string | null, configData?: any | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `CACHE_SOURCE_SYSTEM_CONFIG` and updates the {@link sourceSystemsCache} at the
   * provided path.
   */
  static cacheSourceSystemConfigReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to ping a {@link SourceSystem} and set the {@link PingResult} in the {@link sourceSystemsCache}.
   *
   * @returns a `REFRESH_SOURCE_SYSTEM_PING_RESULT` action
   */
  static refreshSourceSystemPingResultAction(sourceSystem?: SelfServiceDIDataSourcesCacheApplicationState | null): UiSdlReduxAction<any>;

  /**
   * An action to update the {@link sourceSystemsCache} at the `{sourceSystemName}.pingResult` path for a specific
   * source system.
   *
   * @param sourceSystemName
   *           The source system to update
   * @param pingResult
   *           The data to modify in the cache for the provided source system.
   *
   * @returns a `CACHE_SOURCE_SYSTEM_PING_RESULT` action
   */
  static cacheSourceSystemPingResultAction(sourceSystemName?: string | null, pingResult?: PingResult | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `CACHE_SOURCE_SYSTEM_PING_RESULT` and updates the {@link sourceSystemsCache} at the
   * provided path.
   */
  static cacheSourceSystemPingResultReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * A generic action to update the {@link loadingState} at a specific path.
   *
   * @param path
   *           An array-ified path to the position in the cache to update. An empty array will update at the top level
   *           of {@link loadingState}.
   * @param dataToCache
   *           The data to modify in the cache at the provided path.
   *
   * @returns a `DATA_SOURCES_CACHE_LOADING_CHANGE` action
   */
  static dataSourcesCacheLoadingChangeAction(path?: C3.Array<string | null>, loading?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `DATA_SOURCES_CACHE_LOADING_CHANGE` and updates the {@link loadingState} at the
   * provided path.
   */
  static dataSourcesCacheLoadingChangeReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to update the {@link sourceSystemsCache} at the `{sourceSystemName}.configLoading` path for a specific
   * source system.
   *
   * @param sourceSystemName
   *           The source system to update
   * @param loading
   *           Whether the source system is loading.
   *
   * @returns a `SET_SOURCE_SYSTEM_CONFIG_LOADING` action
   */
  static setSourceSystemConfigLoadingAction(sourceSystemName?: string | null, loading?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SOURCE_SYSTEM_CONFIG_LOADING` and updates the {@link sourceSystemsCache} at the
   * provided path.
   */
  static setSourceSystemConfigLoadingReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to update the {@link sourceSystemsCache} at the `{sourceSystemName}.pingLoading` path for a specific
   * source system.
   *
   * @param sourceSystemName
   *           The source system to update
   * @param loading
   *           Whether the source system is loading.
   *
   * @returns a `SET_SOURCE_SYSTEM_PING_LOADING` action
   */
  static setSourceSystemPingLoadingAction(sourceSystemName?: string | null, loading?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SOURCE_SYSTEM_PING_LOADING` and updates the {@link sourceSystemsCache} at the
   * provided path.
   */
  static setSourceSystemPingLoadingReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to update the {@link sourceSystemsCache} at the `{sourceSystemName}.sourceCollectionsLoading` path for
   * a specific source system.
   *
   * @param sourceSystemName
   *           The source system to update
   * @param loading
   *           Whether the source collections are loading for a specific source system.
   *
   * @returns a `SET_SOURCE_SYSTEM_SOURCE_COLLECTIONS_LOADING` action
   */
  static setSourceSystemSourceCollectionsLoadingAction(sourceSystemName?: string | null, loading?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SOURCE_SYSTEM_SOURCE_COLLECTIONS_LOADING` and updates the
   * {@link sourceSystemsCache} at the `{sourceSystemName}.sourceCollectionsLoading` path.
   */
  static setSourceSystemSourceCollectionsLoadingReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to trigger loading of all table schemas
   *
   * @returns a `REFRESH_ALL_SQL_TABLE_SCHEMA` action
   */
  static refreshTableSchemaForSourceCollectionsAction(sourceCollections?: C3.Array<string | null>): UiSdlReduxAction<any>;

  /**
   * A generic action to update the {@link tableSchemaCache} at a specific path.
   *
   * @param path
   *           An array-ified path to the position in the cache to update. An empty array will update at the top level
   *           of {@link tableSchemaCache}.
   * @param dataToCache
   *           The data to modify in the cache at the provided path.
   *
   * @returns a `UPDATE_TABLE_SCHEMA_CACHE` action
   */
  static updateTableSchemaCacheAction(path?: C3.Array<string | null>, dataToCache?: any | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `UPDATE_TABLE_SCHEMA_CACHE` and updates the {@link tableSchemaCache} at the
   * provided path.
   */
  static updateTableSchemaCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * A generic action to update the {@link tableSchemaCache} at multiple specific paths.
   *
   * @param pathsToCache
   *           An array of objects, each containing a path and dataToCache. Each path is an array-ified path to the
   *           position in the cache to update. An empty array will update at the top level of {@link tableSchemaCache}.
   *           Each dataToCache is the data to modify in the cache at the provided path.
   *
   * @returns a `UPDATE_TABLE_SCHEMAS_CACHE` action
   */
  static updateTableSchemasCacheAction(pathsToCache?: C3.Array<[path: C3.Array<string | null>, dataToCache: any | null] | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `UPDATE_TABLE_SCHEMAS_CACHE` and updates the {@link tableSchemaCache} at the
   * provided paths. For each path in pathsToCache, if dataToCache is undefined, the entry is removed; otherwise,
   * it is set to the provided dataToCache value.
   */
  static updateTableSchemasCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieve the data from the `tableSchemaCache` with the specified path.
   */
  static getTableSchemaCacheItem(state: UiSdlReduxAction<any>, path?: C3.Array<string | null>): any | null;

  /**
   * A generic action to directly set the {@link tableSchemaCache}.
   *
   * @param tableSchema
   *           The data to set `tableSchemaCache`
   *
   * @returns a `SET_TABLE_SCHEMA_CACHE` action
   */
  static setTableSchemaCacheAction(tableSchema?: any | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_TABLE_SCHEMA_CACHE` and sets the {@link tableSchemaCache}
   */
  static setTableSchemaCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieve `tableSchemaCache`
   */
  static getTableSchemaCache(state: UiSdlReduxAction<any>): any | null;

  /**
   * Action to set the `tableSchemaCacheFetched` flag
   */
  static setTableSchemaCacheFetchedAction(fetched?: boolean): UiSdlReduxAction<any>;

  /**
   * Reducer to store `tableSchemaCacheFetched`
   */
  static setTableSchemaCacheFetchedReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Getter for `tableSchemaCacheFetched`
   */
  static getTableSchemaCacheFetched(state: UiSdlReduxState): boolean;

  /**
   * An action to trigger loading of all {@link Persistable} types for all the
   * valid sources in the state. The valid sources are all the sources linked
   * to the {@link FileSourceCollection}s in state.
   *
   * @returns a `LOAD_ALL_TARGET_AND_TRANSFORMS` action
   */
  static loadAllTargetAndTransformsAction(): UiSdlReduxAction<any>;

  /**
   * Returns the {@link TypeMeta} for the source or target depending on the type of
   * {@link SourceCollection} and it's validity.
   * The {@link TypeMeta} is used to generate the preview grid.
   *
   * @param state
   *         The state from which the typeMeta is retrieved.
   * @param sourceCollectionCacheItem
   *         The sourceCollection cache item to return the typeMeta for.
   * @returns TypeMeta
   */
  static getPreviewTypeMeta(state: UiSdlReduxState, sourceCollectionCacheItem?: SelfServiceDISourceCollectionCacheItem | null): TypeMeta | null;

  /**
   * Returns the {@link SelfServiceDITableSchemaCacheItem} for the source or target depending on the type of
   * {@link SourceCollection} and it's validity.
   * The {@link SelfServiceDITableSchemaCacheItem} is used to generate the schema preview tab.
   *
   * @param state
   *         The state from which the tableSchemaCacheItem is retrieved.
   * @param sourceCollectionCacheItem
   *         The sourceCollection cache item to return the tableSchemaCacheItem for.
   * @returns SelfServiceDITableSchemaCacheItem
   */
  static getSchemaTypeMeta(state: UiSdlReduxState, sourceCollectionCacheItem?: SelfServiceDISourceCollectionCacheItem | null): SelfServiceDITableSchemaCacheItem | null;

  /**
   * An action to trigger loading of all {@link SourceCollection}s' additional information.
   *
   * @returns a `LOAD_ALL_SOURCE_COLLECTION_INFO` action
   */
  static loadAllSourceCollectionInfoAction(): UiSdlReduxAction<any>;

  /**
   * An action to trigger loading of all {@link FileSourceCollection}s' additional information.
   *
   * @returns a `LOAD_FILE_SOURCE_COLLECTION_INFO` action
   */
  static loadFileSourceCollectionInfoAction(): UiSdlReduxAction<any>;

  /**
   * An action to trigger refresh of a list {@link SourceCollection}s status based on a {@link SourceSystem}
   *
   * @returns a `REFRESH_SOURCE_COLLECTION_STATUSES_FOR_SOURCE_SYSTEM` action
   */
  static refreshSourceCollectionStatusesForSourceSystemAction(sourceSystemName?: string | null): UiSdlReduxAction<any>;

  /**
   * An action to trigger refresh of a {@link SourceCollection}'s status
   *
   * @returns a `REFRESH_SOURCE_COLLECTION_STATUS` action
   */
  static refreshSourceCollectionStatusAction(sourceCollection?: SourceCollection<SourceCollection.Config | null> | null): UiSdlReduxAction<any>;

  /**
   * An action to trigger refresh of a {@link FileSourceCollection}'s status
   *
   * @returns a `REFRESH_FILE_SOURCE_COLLECTION_STATUS` action
   */
  static refreshFileSourceCollectionStatusAction(sourceCollection?: SourceCollection<SourceCollection.Config | null> | null): UiSdlReduxAction<any>;

  /**
   * A generic action to update the {@link soureFilesCache} at a specific path.
   *
   * @param path
   *           An array-ified path to the position in the cache to update. An empty array will update at the top level
   *           of {@link soureFilesCache}.
   * @param dataToCache
   *           The data to modify in the cache at the provided path.
   *
   * @returns a `UPDATE_SOURCE_FILES_CACHE` action
   */
  static updateSourceFilesCacheAction(path?: C3.Array<string | null>, dataToCache?: any | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `UPDATE_SOURCE_FILES_CACHE` and updates the {@link soureFilesCache} at the
   * provided path.
   */
  static updateSourceFilesCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   *  Action to update the {@link fileUploadFirstLoadMap}
   *
   * @param sourceCollectionName
   *           source collection to be updated
   * @param state
   *           Whether it is the first load of a source collection
   *
   * @returns a `UPDATE_FILE_UPLOAD_FIRST_LOAD_MAP` action
   */
  static updateFileUploadFirstLoadMapAction(sourceCollectionName?: string | null, state?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `UPDATE_FILE_UPLOAD_FIRST_LOAD_MAP` and updates `fileUploadFirstLoadMap`
   */
  static updateFileUploadFirstLoadMapReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieve whether a source collection is on its first load from `fileUploadFirstLoadMap`
   */
  static getFileUploadFirstLoadState(state: UiSdlReduxState, sourceCollectionName?: string | null): string | null;

  /**
   * An action to set the transformCache in state
   */
  static setTransformCacheAction(transformCache?: C3.Map<string | null, Transform | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_TRANSFORM_CACHE` and updates transform in state
   */
  static setTransformCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Action to set the `transformCacheFetched` flag
   */
  static setTransformCacheFetchedAction(fetched?: boolean): UiSdlReduxAction<any>;

  /**
   * Reducer to store `transformCacheFetched`
   */
  static setTransformCacheFetchedReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Getter for `transformCacheFetched`
   */
  static getTransformCacheFetched(state: UiSdlReduxState): boolean;

  /**
   * A generic action to update the {@link filesProperties} at a specific path.
   *
   * @param path
   *           An array-ified path to the position in the cache to update. An empty array will update at the top level
   *           of filesProperties.
   * @param dataToCache
   *           The data to modify in the cache at the provided path.
   *
   * @returns a `UPDATE_FILES_PROPERTIES` action
   */
  static updateFilesPropertiesAction(path?: C3.Array<string | null>, dataToCache?: any | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `UPDATE_FILES_PROPERTIES` and updates the filesProperties at the
   * provided path.
   */
  static updateFilesPropertiesReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to remove the filesProperties.
   *
   * @param file
   *           object of the file to be removed.
   *
   * @returns a `REMOVE_FILES_PROPERTIES` action
   */
  static removeFilesPropertiesAction(file?: any | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `REMOVE_FILES_PROPERTIES` and removes the filesProperties
   */
  static removeFilesPropertiesReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * An action to set the childSourceCollections in state
   */
  static setChildSourceCollectionsAction(childSourceCollections?: C3.Array<SelfServiceDISourceCollectionCacheItem | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_CHILD_SOURCE_COLLECTIONS` and updates childSourceCollections in state
   */
  static setChildSourceCollectionsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Clear the entire app state
   */
  static clearAppStateAction(): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `CLEAR_APP_STATE` and clears the state.
   */
  static clearAppStateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the vectorStoreCache in state
   */
  static setVectorStoreCacheAction(vectorStoreCache?: C3.Map<string | null, any>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_VECTOR_STORE_CACHE` and updates vectorStoreCache in state
   */
  static setVectorStoreCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to trigger loading of all {@link GenaiCore.VectorStore}s
   *
   * @returns a `LOAD_ALL_VECTOR_STORES` action
   */
  static loadAllVectorStoresAction(): UiSdlReduxAction<any>;

  /**
   * An action to set the unstructuredPipelineCache in state
   */
  static setUnstructuredPipelineCacheAction(unstructuredPipelineCache?: C3.Map<string | null, any>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_UNSTRUCTURED_PIPELINE_CACHE` and updates unstructuredPipelineCache in state
   */
  static setUnstructuredPipelineCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieve the unstructured pipeline cache
   */
  static getUnstructuredPipelineCache(state: UiSdlReduxState): any | null;

  /**
   * An action to set the unstructuredProcessorCache in state
   */
  static setUnstructuredProcessorCacheAction(unstructuredProcessorCache?: C3.Map<string | null, any>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_UNSTRUCTURED_PROCESSOR_CACHE` and updates unstructuredProcessorCache in state
   */
  static setUnstructuredProcessorCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieve the unstructured processor cache
   */
  static getUnstructuredProcessorCache(state: UiSdlReduxState): any | null;

  /**
   * An action to set the embedderCache in state
   */
  static setEmbedderCacheAction(embedderCache?: C3.Map<string | null, any>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_EMBEDDER_CACHE` and updates embedderCache in state
   */
  static setEmbedderCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to trigger loading of all {@link any}s
   *
   * @returns a `LOAD_ALL_EMBEDDERS` action
   */
  static loadAllEmbeddersAction(): UiSdlReduxAction<any>;
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
