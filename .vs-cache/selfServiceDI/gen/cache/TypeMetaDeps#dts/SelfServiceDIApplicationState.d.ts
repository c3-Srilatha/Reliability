// TypeScript definitions for the C3 type SelfServiceDIApplicationState

/**
 * Application state for storing self-service DI related information
 *
 * @remarks this represents a value passed to a method that expects an instance of SelfServiceDIApplicationState
 */
declare interface ISelfServiceDIApplicationState {

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
   * Path to FileSystem.mounts['data-load']. Used when interacting with uploaded files
   * for {@link FileSourceCollection}s
   */
  dataLoadMountPath?: string | null;

  /**
   * Needed to construct a {@link Pkg.Path} will creating external types
   */
  rootPkg?: string | null;

  /**
   * Used to sanitize typeMetas that mix Persistable and ensure selfServiceDI generates valid {@link TypeMetas}
   */
  persistableKeywords?: C3.Array<string | null> | Array<string | null>;

  /**
   * The schema names corresponding to the system columns that cannot be used from {@link Persistable} and {@link Meta}
   * Used to sanitize typeMeta schemaNames and ensure selfServiceDI generates valid {@link TypeMetas}.
   */
  persistableSchemaNames?: C3.Array<string | null> | Array<string | null>;

  /**
   * Used to validate user configured types to ensure there are no collisions with
   * the existing types declared in the current package and it's dependencies e.g. platform types.
   */
  reservedTypeNames?: C3.Set<string | null> | Array<string | null>;

  /**
   * Details about the currently selected source system cache item in the tree view.
   */
  selectedSourceSystemCacheItem?: ISelfServiceDISourceSystemCacheItem | null;

  /**
   * Details about the currently selected source collection cache item in the tree view.
   */
  selectedSourceCollectionCacheItem?: ISelfServiceDISourceCollectionCacheItem | null;

  /**
   * The type metadata for the current selection when previewing a data source in the landing page.
   */
  selectedDataSourcePreviewTypeMeta?: ITypeMeta | null;

  /**
   * The selected data source, currently used for selecting a data source to delete.
   */
  selectedDataSource?: string | null;

  previewSourceDataErrors?: C3.Array<UiSdlInlineNotification | null> | Array<IUiSdlInlineNotification | null>;

  selectedInlineNotification?: IObj | null;

  /**
   * Used by multiple conditional renderers to decide which error inline notification to render
   */
  schemaTabInlineNotification?: IUiSdlInlineNotification | null;

  /**
   * -------------- SHOULD REDIRECT TO SCHEMA TAB --------------
   */
  shouldRedirectToSchemaTab?: boolean;

  /**
   * Details about the currently selected source collection's table schema cache item.
   */
  selectedTableSchemaCacheItem?: ISelfServiceDITableSchemaCacheItem | null;

  /**
   * The Deleted {@link SourceFile}s. Used to filter out the Target Preview Grid for {@link FileSourceCollection}
   * The keys are the sourceCollectionNames and the values are the sourceFileIds that have been deleted from them.
   */
  deletedSourceFiles?: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>};

  /**
   * The expression engine functions available in an application. used for providing suggestion and validating transforms
   */
  expressionEngineFunctions?: any | null;

  /**
   * The current diagram ID
   */
  currentDiagramId?: string | null;

  /**
   * Data connector connection configuration properties and fields to render the connection form for data connectors
   * Stored as map to enable fast lookups while preserving property ordering
   */
  dataConnectorsConnectionConfiguration?: C3.Map<string | null, any | null> | {[key: string | null]: any | null};

  /**
   * File Systems Mounts Options with key as (SelfServiceDI.UI.DataConnector storageKind)
   * value as array of string with corresponding mounts options
   */
  fileSystemsMountsOptions?: C3.Map<string | null, any> | {[key: string | null]: any};

  /**
   * Properties stored with values for Data Connector Config form
   */
  dataConnectorConfigFormData?: C3.Map<string | null, any> | {[key: string | null]: any};
}

/**
 * Application state for storing self-service DI related information
 *
 * @remarks this represents a made instance of SelfServiceDIApplicationState
 */
declare class SelfServiceDIApplicationState extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDIApplicationState;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): SelfServiceDIApplicationState;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): SelfServiceDIApplicationState;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDIApplicationState;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDIApplicationState;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDIApplicationState;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDIApplicationState;

  /**
   * The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
   */
  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): SelfServiceDIApplicationState;

  /**
   * Collection of extra async {@link UiSdlEffectTrigger}.
   */
  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): SelfServiceDIApplicationState;

  /**
   * Path to FileSystem.mounts['data-load']. Used when interacting with uploaded files
   * for {@link FileSourceCollection}s
   */
  readonly dataLoadMountPath?: string | null;
  withDataLoadMountPath(dataLoadMountPath: string | null): SelfServiceDIApplicationState;

  /**
   * Needed to construct a {@link Pkg.Path} will creating external types
   */
  readonly rootPkg?: string | null;
  withRootPkg(rootPkg: string | null): SelfServiceDIApplicationState;

  /**
   * Used to sanitize typeMetas that mix Persistable and ensure selfServiceDI generates valid {@link TypeMetas}
   */
  readonly persistableKeywords?: C3.Array<string | null>;
  withPersistableKeywords(persistableKeywords: C3.Array<string | null> | Array<string | null>): SelfServiceDIApplicationState;

  /**
   * The schema names corresponding to the system columns that cannot be used from {@link Persistable} and {@link Meta}
   * Used to sanitize typeMeta schemaNames and ensure selfServiceDI generates valid {@link TypeMetas}.
   */
  readonly persistableSchemaNames?: C3.Array<string | null>;
  withPersistableSchemaNames(persistableSchemaNames: C3.Array<string | null> | Array<string | null>): SelfServiceDIApplicationState;

  /**
   * Used to validate user configured types to ensure there are no collisions with
   * the existing types declared in the current package and it's dependencies e.g. platform types.
   */
  readonly reservedTypeNames?: C3.Set<string | null>;
  withReservedTypeNames(reservedTypeNames: C3.Set<string | null> | Array<string | null>): SelfServiceDIApplicationState;

  /**
   * Details about the currently selected source system cache item in the tree view.
   */
  readonly selectedSourceSystemCacheItem?: SelfServiceDISourceSystemCacheItem | null;
  withSelectedSourceSystemCacheItem(selectedSourceSystemCacheItem: ISelfServiceDISourceSystemCacheItem | null): SelfServiceDIApplicationState;

  /**
   * Details about the currently selected source collection cache item in the tree view.
   */
  readonly selectedSourceCollectionCacheItem?: SelfServiceDISourceCollectionCacheItem | null;
  withSelectedSourceCollectionCacheItem(selectedSourceCollectionCacheItem: ISelfServiceDISourceCollectionCacheItem | null): SelfServiceDIApplicationState;

  /**
   * The type metadata for the current selection when previewing a data source in the landing page.
   */
  readonly selectedDataSourcePreviewTypeMeta?: TypeMeta | null;
  withSelectedDataSourcePreviewTypeMeta(selectedDataSourcePreviewTypeMeta: ITypeMeta | null): SelfServiceDIApplicationState;

  /**
   * The selected data source, currently used for selecting a data source to delete.
   */
  readonly selectedDataSource?: string | null;
  withSelectedDataSource(selectedDataSource: string | null): SelfServiceDIApplicationState;

  readonly previewSourceDataErrors?: C3.Array<UiSdlInlineNotification | null>;
  withPreviewSourceDataErrors(previewSourceDataErrors: C3.Array<UiSdlInlineNotification | null> | Array<IUiSdlInlineNotification | null>): SelfServiceDIApplicationState;

  readonly selectedInlineNotification?: Obj | null;
  withSelectedInlineNotification(selectedInlineNotification: IObj | null): SelfServiceDIApplicationState;

  /**
   * Used by multiple conditional renderers to decide which error inline notification to render
   */
  readonly schemaTabInlineNotification?: UiSdlInlineNotification | null;
  withSchemaTabInlineNotification(schemaTabInlineNotification: IUiSdlInlineNotification | null): SelfServiceDIApplicationState;

  /**
   * -------------- SHOULD REDIRECT TO SCHEMA TAB --------------
   */
  readonly shouldRedirectToSchemaTab?: boolean;
  withShouldRedirectToSchemaTab(shouldRedirectToSchemaTab: boolean): SelfServiceDIApplicationState;

  /**
   * Details about the currently selected source collection's table schema cache item.
   */
  readonly selectedTableSchemaCacheItem?: SelfServiceDITableSchemaCacheItem | null;
  withSelectedTableSchemaCacheItem(selectedTableSchemaCacheItem: ISelfServiceDITableSchemaCacheItem | null): SelfServiceDIApplicationState;

  /**
   * The Deleted {@link SourceFile}s. Used to filter out the Target Preview Grid for {@link FileSourceCollection}
   * The keys are the sourceCollectionNames and the values are the sourceFileIds that have been deleted from them.
   */
  readonly deletedSourceFiles?: C3.Map<string | null, C3.Array<string | null>>;
  withDeletedSourceFiles(deletedSourceFiles: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): SelfServiceDIApplicationState;

  /**
   * The expression engine functions available in an application. used for providing suggestion and validating transforms
   */
  readonly expressionEngineFunctions?: any | null;
  withExpressionEngineFunctions(expressionEngineFunctions: any | null): SelfServiceDIApplicationState;

  /**
   * The current diagram ID
   */
  readonly currentDiagramId?: string | null;
  withCurrentDiagramId(currentDiagramId: string | null): SelfServiceDIApplicationState;

  /**
   * Data connector connection configuration properties and fields to render the connection form for data connectors
   * Stored as map to enable fast lookups while preserving property ordering
   */
  readonly dataConnectorsConnectionConfiguration?: C3.Map<string | null, any | null>;
  withDataConnectorsConnectionConfiguration(dataConnectorsConnectionConfiguration: C3.Map<string | null, any | null> | {[key: string | null]: any | null}): SelfServiceDIApplicationState;

  /**
   * File Systems Mounts Options with key as (SelfServiceDI.UI.DataConnector storageKind)
   * value as array of string with corresponding mounts options
   */
  readonly fileSystemsMountsOptions?: C3.Map<string | null, any>;
  withFileSystemsMountsOptions(fileSystemsMountsOptions: C3.Map<string | null, any> | {[key: string | null]: any}): SelfServiceDIApplicationState;

  /**
   * Properties stored with values for Data Connector Config form
   */
  readonly dataConnectorConfigFormData?: C3.Map<string | null, any>;
  withDataConnectorConfigFormData(dataConnectorConfigFormData: C3.Map<string | null, any> | {[key: string | null]: any}): SelfServiceDIApplicationState;

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
  static fromJson(json: any | null): SelfServiceDIApplicationState | null;

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
  static fromJsonString(json: string | null): SelfServiceDIApplicationState | null;

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
  static fromXmlString(xml: string | null): SelfServiceDIApplicationState | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): SelfServiceDIApplicationState | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): SelfServiceDIApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): SelfServiceDIApplicationState;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): SelfServiceDIApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<SelfServiceDIApplicationState | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<SelfServiceDIApplicationState | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): SelfServiceDIApplicationState;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): SelfServiceDIApplicationState;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): SelfServiceDIApplicationState;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): SelfServiceDIApplicationState;

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
  withField(field: string, value: any, doNotConvert?: boolean): SelfServiceDIApplicationState;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): SelfServiceDIApplicationState;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): SelfServiceDIApplicationState;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): SelfServiceDIApplicationState;

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
  withoutFieldAtPath(path: string): SelfServiceDIApplicationState;

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
  withoutField(field: string | null): SelfServiceDIApplicationState;

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
  withoutField(field: FieldType | null): SelfServiceDIApplicationState;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): SelfServiceDIApplicationState;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): SelfServiceDIApplicationState;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): SelfServiceDIApplicationState;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): SelfServiceDIApplicationState;

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
  defaultField(field: string): SelfServiceDIApplicationState;

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
  defaultField(field: FieldType): SelfServiceDIApplicationState;

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
  unsetField(field: string): SelfServiceDIApplicationState;

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
  unsetField(field: FieldType): SelfServiceDIApplicationState;

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
  removeField(field: string): SelfServiceDIApplicationState;

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
  removeField(field: FieldType): SelfServiceDIApplicationState;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): SelfServiceDIApplicationState;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): SelfServiceDIApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): SelfServiceDIApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): SelfServiceDIApplicationState;

  mergeJson(json: any | null): SelfServiceDIApplicationState;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): SelfServiceDIApplicationState;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): SelfServiceDIApplicationState;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<SelfServiceDIApplicationState | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<SelfServiceDIApplicationState | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<SelfServiceDIApplicationState | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<SelfServiceDIApplicationState | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<SelfServiceDIApplicationState | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, SelfServiceDIApplicationState | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, SelfServiceDIApplicationState | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<SelfServiceDIApplicationState | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<SelfServiceDIApplicationState | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): SelfServiceDIApplicationState;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): SelfServiceDIApplicationState;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): SelfServiceDIApplicationState;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): SelfServiceDIApplicationState;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): SelfServiceDIApplicationState;

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
  static make(fields: any, withDefaults?: boolean): SelfServiceDIApplicationState;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): SelfServiceDIApplicationState | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): SelfServiceDIApplicationState;

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
  afterMake(): SelfServiceDIApplicationState;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): SelfServiceDIApplicationState;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<SelfServiceDIApplicationState>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): SelfServiceDIApplicationState;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<SelfServiceDIApplicationState | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<SelfServiceDIApplicationState | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<SelfServiceDIApplicationState | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<SelfServiceDIApplicationState | null> | null>;

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
  dependencies(): MetadataDeps<SelfServiceDIApplicationState | null>;

  save(subPath?: string | null, contentType?: string | null): SelfServiceDIApplicationState;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: SelfServiceDIApplicationState | null, spec?: UpsertSpec | null): SelfServiceDIApplicationState | null;

  upsert(srcObj?: SelfServiceDIApplicationState | null, spec?: UpsertSpec | null): SelfServiceDIApplicationState | null;

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
  static fromString(s: string | null): SelfServiceDIApplicationState | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): SelfServiceDIApplicationState | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: SelfServiceDIApplicationState, state: UiSdlReduxState): SelfServiceDIApplicationState | null;

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
   * An action to set the dataLoadMountPath in state.
   */
  static setDataLoadMountPathAction(dataLoadMountPath?: string | null): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `SET_DATA_LOAD_MOUNT_PATH` and sets dataLoadMountPath in state.
   */
  static setDataLoadMountPathReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieves the dataLoadMountPath from state
   */
  static getDataLoadMountPath(state: UiSdlReduxState): string | null;

  /**
   * Action to set the `rootPkg`
   */
  static setRootPkgAction(rootPkg?: string | null): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `SET_ROOT_PKG`
   */
  static setRootPkgReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Action to set the `persistableKeywords`, The fields and methods of {@link Persistable}
   */
  static setPersistableKeywordsAction(persistableKeywords?: C3.Array<string | null>): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `SET_PERSISTABLE_KEYWORDS`
   */
  static setPersistableKeywordsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieves `persistableKeywords` from state
   */
  static getPersistableKeywords(state: UiSdlReduxState): C3.Array<string | null>;

  /**
   * Action to set the `persistableSchemaNames`
   */
  static setPersistableSchemaNamesAction(persistableSchemaNames?: C3.Array<string | null>): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `SET_PERSISTABLE_SCHEMA_NAMES` and sets `persistableSchemaNames` in state
   */
  static setPersistableSchemaNamesReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieves `persistableSchemaNames` from state
   */
  static getPersistableSchemaNames(state: UiSdlReduxState): C3.Array<string | null>;

  /**
   * Action to set the `reservedTypeNames`
   */
  static setReservedTypeNamesAction(typeNames?: C3.Set<string | null>): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `SET_RESERVED_TYPE_NAMES` and sets `reservedTypeNames` in state
   */
  static setReservedTypeNamesReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieves `reservedTypeNames`, which are the type names for the entire pkg.
   */
  static getReservedTypeNames(state: UiSdlReduxState): C3.Set<string | null>;

  /**
   * An action to set the {@link selectedSourceSystemCacheItem}
   */
  static setSelectedSourceSystemCacheItemAction(sourceSystemCacheItem?: SelfServiceDISourceSystemCacheItem | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_SOURCE_SYSTEM_CACHE_ITEM` and sets {@link selectedSourceSystemCacheItem} in state.
   */
  static setSelectedSourceSystemCacheItemReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the {@link selectedSourceSystemCacheItem} from the state.
   */
  static getSelectedSourceSystemCacheItem(state: UiSdlReduxState): SelfServiceDISourceSystemCacheItem | null;

  /**
   * An action to set the {@link selectedSourceCollectionCacheItem}
   */
  static setSelectedSourceCollectionCacheItemAction(sourceCollectionCacheItem?: SelfServiceDISourceCollectionCacheItem | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_SOURCE_COLLECTION_CACHE_ITEM` and sets {@link selectedSourceCollectionCacheItem} in state.
   */
  static setSelectedSourceCollectionCacheItemReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the {@link selectedSourceCollectionCacheItem} from the state.
   */
  static getSelectedSourceCollectionCacheItem(state: UiSdlReduxState): SelfServiceDISourceCollectionCacheItem | null;

  /**
   * Returns the {@link selectedSourceCollection} from the state.
   */
  static getSelectedSourceCollection(state: UiSdlReduxState): SourceCollection<SourceCollection.Config | null> | null;

  /**
   * An action to set the `selectedDataSourcePreviewTypeMeta`
   */
  static setSelectedDataSourcePreviewTypeMetaAction(typeMeta?: TypeMeta | null): UiSdlReduxAction<any>;

  /**
   * Sets the `selectedDataSourcePreviewTypeMeta`
   */
  static setSelectedDataSourcePreviewTypeMetaReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieves the `selectedDataSourcePreviewTypeMeta`
   */
  static getSelectedDataSourcePreviewTypeMeta(state: UiSdlReduxState): TypeMeta | null;

  /**
   * An action to set `selectedDataSource`
   */
  static setSelectedDataSourceAction(selectedDataSource?: string | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_DATA_SOURCE`
   */
  static setSelectedDataSourceReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the current errors that may occur when a user is previewing remote data.
   */
  static setPreviewSourceDataErrorsAction(errors?: C3.Array<UiSdlInlineNotification | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_PREVIEW_SOURCE_DATA_ERRORS` and sets the previewSourceDataErrors in state.
   */
  static setPreviewSourceDataErrorsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action set selectedInlineNotification, the object of id and the linkText
   */
  static setSelectedInlineNotificationAction(selectedInlineNotification?: Obj | null): UiSdlReduxAction<any>;

  /**
   * An action to set `schemaTabInlineNotification`
   */
  static setSchemaTabInlineNotificationAction(component?: UiSdlInlineNotification | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SCHEMA_TAB_INLINE_NOTIFICATION` and sets `schemaTabInlineNotification`
   */
  static setSchemaTabInlineNotificationReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set `shouldRedirectToSchemaTab`. Used by the preview tab during initial render. See {@link RedirectToSchemaEditTabEpic}
   */
  static setShouldRedirectToSchemaTabAction(shouldRedirect?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SHOULD_REDIRECT_TO_SCHEMA_TAB` and sets `shouldRedirectToSchemaTab`
   */
  static setShouldRedirectToSchemaTabReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieves `shouldRedirectToSchemaTab`
   */
  static getShouldRedirectToSchemaTab(state: UiSdlReduxState): boolean;

  /**
   * An action to set the {@link selectedTableSchemaCacheItem}
   */
  static setSelectedTableSchemaCacheItemAction(tableSchemaCacheItem?: SelfServiceDITableSchemaCacheItem | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_TABLE_SCHEMA_CACHE_ITEM` and sets {@link selectedTableSchemaCacheItem} in state.
   */
  static setSelectedTableSchemaCacheItemReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the {@link selectedTableSchemaCacheItem} from the state.
   */
  static getSelectedTableSchemaCacheItem(state: UiSdlReduxState): any | null;

  /**
   * An action to set `deletedSourceFiles`
   */
  static setDeletedSourceFilesAction(deletedSourceFiles?: C3.Map<string | null, C3.Array<string | null>>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_DELETED_SOURCE_FILES` and sets `deletedSourceFiles`
   */
  static setDeletedSourceFilesReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Action to fetch all the expression engine functions from the {@link TypeMeta}'s
   */
  static fetchExpressionEngineFunctionsAction(): UiSdlReduxAction<any> | null;

  /**
   * Action to set the available expression engine functions in state
   */
  static setExpressionEngineFunctionsAction(): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `SET_EXPRESSION_ENGINE_FUNCTIONS`
   */
  static setExpressionEngineFunctionsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the available `expressionEngineFunctions` from state
   */
  static getExpressionEngineFunctions(state: UiSdlReduxState): any | null;

  static loadExpressionEngineFunctionsEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Clear the entire app state
   */
  static clearAppStateAction(): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `CLEAR_APP_STATE` and clears the state.
   */
  static clearAppStateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the current diagram ID in state
   */
  static setCurrentDiagramIdAction(diagramId?: string | null): UiSdlReduxAction<any>;

  /**
   * Listens for action of type `SET_CURRENT_DIAGRAM_ID` and sets the diagramId in state.
   */
  static setCurrentDiagramIdReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the currentDiagramId from the state.
   */
  static getCurrentDiagramId(state: UiSdlReduxState): string | null;

  /**
   * Action to set the `dataConnectorsConnectionConfiguration`
   */
  static setDataConnectorsConnectionConfigurationAction(dataConnectorsConnectionConfiguration?: C3.Map<string | null, any | null>): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `SET_DATA_CONNECTORS_CONNECTION_CONFIGURATION`
   */
  static setDataConnectorsConnectionConfigurationReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the data connectors configuration from the state.
   */
  static getDataConnectorsConnectionConfiguration(state: UiSdlReduxState): C3.Map<string | null, any | null>;

  /**
   * Action to set the `fileSystemsMountsOptions`
   */
  static setFileSystemsMountsOptionsAction(fileSystemsMountsOptions?: C3.Map<string | null, any>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_FILE_SYSTEMS_MOUNTS_OPTIONS`
   */
  static setFileSystemsMountsOptionsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns fileSystemsMountsOptions from state.
   */
  static getFileSystemsMountsOptions(state: UiSdlReduxState): C3.Map<string | null, any>;

  /**
   * Action to set the `dataConnectorConfigFormData`
   */
  static setDataConnectorFormDataAction(dataConnectorConfigFormData?: C3.Map<string | null, any>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_DATA_CONNECTOR_FORM_DATA`
   */
  static setDataConnectorFormDataReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns dataConnectorConfigFormData from state.
   */
  static getDataConnectorFormData(state: UiSdlReduxState): C3.Map<string | null, any>;
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
