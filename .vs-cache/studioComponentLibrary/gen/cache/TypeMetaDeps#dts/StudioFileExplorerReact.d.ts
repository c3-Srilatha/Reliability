// TypeScript definitions for the C3 type StudioFileExplorerReact

/**
 * A react wrapper for {@Link FileExplorer}
 *
 * @remarks this represents a value passed to a method that expects an instance of StudioFileExplorerReact
 */
declare interface IStudioFileExplorerReact {

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
   * Absolute path of the current parent directory
   * the file explorer is in
   */
  currentRoot?: string | IUiSdlDynamicValueSpec | null | null;

  /**
   * The 'type' of the FileSystem the {@Link FileExplorer} is exploring.
   * e.g. 'C3FileSystem', 'S3FileSystem'
   */
  fileSysType: string;

  /**
   * Custom actions users can configure in the
   * context menu for their own use case.
   */
  customMenuActions?: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>;

  /**
   * Custom filter to determine what actions are shown based on the node and all available actions.
   */
  actionFilterer?: IStudioFileExplorerBaseActionFilterer | null;

  /**
   * Whether to enable selection and which mode it should be in
   * none - no selection by default
   * single - select one path, selecting one will deselect the other
   * multi - select multiple paths
   */
  selectionMode?: string | null;

  /**
   * Which file kinds can we select, (e.g folders, .csv, etc)
   * Clicking on a file kind that's not in the array will not select that path
   */
  selectionKinds?: C3.Array<string | null> | Array<string | null>;

  /**
   * The height of the File Explorer in px
   */
  height?: number | null;

  /**
   * The width of the File Explorer in px
   */
  width?: number | null;

  /**
   * Size of each node in file explorer
   */
  nodeSize?: number | null;

  /**
   * Whether we are loading file information on the current root.
   */
  loading?: boolean;

  /**
   * A map of file paths to whether they are selected
   */
  selectedPaths?: C3.Map<string | null, boolean> | {[key: string | null]: boolean};

  /**
   * A map of file paths to the corresponding {@Link FileExplorerFileInfo}
   */
  allFiles?: C3.Map<string | null, FileExplorerFileInfo | null> | {[key: string | null]: IFileExplorerFileInfo | null};

  /**
   * A map of folder's to its open state
   */
  expandedFolders?: C3.Map<string | null, boolean> | {[key: string | null]: boolean};

  /**
   * A map of folder's to its expanding state
   */
  expandingFolders?: C3.Map<string | null, boolean> | {[key: string | null]: boolean};

  /**
   * Represents emptyState component when there is no data in file explorer present.
   */
  emptyState?: IUiSdlComponentRef<UiSdlComponent | null> | null;

  /**
   * The Url of the given root mount that the {@Link FileExplorer}
   * is based on/currently exploring under.
   * e.g. 'c3fs:///', 's3://c3--local/c3/scl/fs/'
   * Note: For external FS, both values will be the same
   */
  rootMountUrl?: string | null;

  /**
   * Alternative root mount Url. This value is non-trivial only if
   * the {@Link FileExplorer} is based on a local FS
   * e.g. 'file:///usr/local/share/c3/fs/dflt/c3/scl/' as opposed to c3fs:///
   */
  alternativeRootMountUrl?: string | null;

  /**
   * The content of the currently displayed file
   */
  displayedFileContent?: string | null;

  /**
   * The list of error messages when there is error in epics call
   */
  errorMessages?: C3.Array<string | null> | Array<string | null>;

  /**
   * Indicates whether the file explorer is in read-only mode.
   * When true, the file explorer does not allow any visibleFileActions.
   */
  readOnlyMode?: boolean;

  /**
   * Indicates whether the directory can be expanded to show its contents.
   * When true, the directory can be expanded.
   */
  expandable?: boolean;

  /**
   * Indicates whether the directory can be explored.
   * When true, the  directory can be navigated or opened.
   */
  explorable?: boolean;

  /**
   * Indicates whether the name will be full path or just relative path
   */
  useFullPathForName?: boolean;

  /**
   * The list of child file infos for a folder
   * This is used to check if the clicked folder has children
   */
  fileChildrenInfos?: C3.Array<FileExplorerFileInfo | null> | Array<IFileExplorerFileInfo | null>;

  /**
   * The current file type filters to apply when listing files
   */
  fileTypeFilters?: C3.Array<string | null> | Array<string | null>;

  /**
   * If autonomous, then studioFileExplorer automatically handles
   * currentRoot and rootMount handling.
   * This is disabled if you're using the fileExplorer to simply render a list.
   */
  autonomous?: boolean;
}

/**
 * A react wrapper for {@Link FileExplorer}
 *
 * @remarks this represents a made instance of StudioFileExplorerReact
 */
declare class StudioFileExplorerReact extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioFileExplorerReact;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): StudioFileExplorerReact;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): StudioFileExplorerReact;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioFileExplorerReact;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioFileExplorerReact;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioFileExplorerReact;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioFileExplorerReact;

  /**
   * Absolute path of the current parent directory
   * the file explorer is in
   */
  readonly currentRoot?: string | UiSdlDynamicValueSpec | null | null;
  withCurrentRoot(currentRoot: string | IUiSdlDynamicValueSpec | null | null): StudioFileExplorerReact;

  /**
   * The 'type' of the FileSystem the {@Link FileExplorer} is exploring.
   * e.g. 'C3FileSystem', 'S3FileSystem'
   */
  readonly fileSysType: string;
  withFileSysType(fileSysType: string): StudioFileExplorerReact;

  /**
   * Custom actions users can configure in the
   * context menu for their own use case.
   */
  readonly customMenuActions?: C3.Array<UiSdlAction | null>;
  withCustomMenuActions(customMenuActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): StudioFileExplorerReact;

  /**
   * Custom filter to determine what actions are shown based on the node and all available actions.
   */
  readonly actionFilterer?: StudioFileExplorerBaseActionFilterer | null;
  withActionFilterer(actionFilterer: IStudioFileExplorerBaseActionFilterer | null): StudioFileExplorerReact;

  /**
   * Whether to enable selection and which mode it should be in
   * none - no selection by default
   * single - select one path, selecting one will deselect the other
   * multi - select multiple paths
   */
  readonly selectionMode?: string | null;
  withSelectionMode(selectionMode: string | null): StudioFileExplorerReact;

  /**
   * Which file kinds can we select, (e.g folders, .csv, etc)
   * Clicking on a file kind that's not in the array will not select that path
   */
  readonly selectionKinds?: C3.Array<string | null>;
  withSelectionKinds(selectionKinds: C3.Array<string | null> | Array<string | null>): StudioFileExplorerReact;

  /**
   * The height of the File Explorer in px
   */
  readonly height?: number | null;
  withHeight(height: number | null): StudioFileExplorerReact;

  /**
   * The width of the File Explorer in px
   */
  readonly width?: number | null;
  withWidth(width: number | null): StudioFileExplorerReact;

  /**
   * Size of each node in file explorer
   */
  readonly nodeSize?: number | null;
  withNodeSize(nodeSize: number | null): StudioFileExplorerReact;

  /**
   * Whether we are loading file information on the current root.
   */
  readonly loading?: boolean;
  withLoading(loading: boolean): StudioFileExplorerReact;

  /**
   * A map of file paths to whether they are selected
   */
  readonly selectedPaths?: C3.Map<string | null, boolean>;
  withSelectedPaths(selectedPaths: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): StudioFileExplorerReact;

  /**
   * A map of file paths to the corresponding {@Link FileExplorerFileInfo}
   */
  readonly allFiles?: C3.Map<string | null, FileExplorerFileInfo | null>;
  withAllFiles(allFiles: C3.Map<string | null, FileExplorerFileInfo | null> | {[key: string | null]: IFileExplorerFileInfo | null}): StudioFileExplorerReact;

  /**
   * A map of folder's to its open state
   */
  readonly expandedFolders?: C3.Map<string | null, boolean>;
  withExpandedFolders(expandedFolders: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): StudioFileExplorerReact;

  /**
   * A map of folder's to its expanding state
   */
  readonly expandingFolders?: C3.Map<string | null, boolean>;
  withExpandingFolders(expandingFolders: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): StudioFileExplorerReact;

  /**
   * Represents emptyState component when there is no data in file explorer present.
   */
  readonly emptyState?: UiSdlComponentRef<UiSdlComponent | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlComponent | null> | null): StudioFileExplorerReact;

  /**
   * The Url of the given root mount that the {@Link FileExplorer}
   * is based on/currently exploring under.
   * e.g. 'c3fs:///', 's3://c3--local/c3/scl/fs/'
   * Note: For external FS, both values will be the same
   */
  readonly rootMountUrl?: string | null;
  withRootMountUrl(rootMountUrl: string | null): StudioFileExplorerReact;

  /**
   * Alternative root mount Url. This value is non-trivial only if
   * the {@Link FileExplorer} is based on a local FS
   * e.g. 'file:///usr/local/share/c3/fs/dflt/c3/scl/' as opposed to c3fs:///
   */
  readonly alternativeRootMountUrl?: string | null;
  withAlternativeRootMountUrl(alternativeRootMountUrl: string | null): StudioFileExplorerReact;

  /**
   * The content of the currently displayed file
   */
  readonly displayedFileContent?: string | null;
  withDisplayedFileContent(displayedFileContent: string | null): StudioFileExplorerReact;

  /**
   * The list of error messages when there is error in epics call
   */
  readonly errorMessages?: C3.Array<string | null>;
  withErrorMessages(errorMessages: C3.Array<string | null> | Array<string | null>): StudioFileExplorerReact;

  /**
   * Indicates whether the file explorer is in read-only mode.
   * When true, the file explorer does not allow any visibleFileActions.
   */
  readonly readOnlyMode?: boolean;
  withReadOnlyMode(readOnlyMode: boolean): StudioFileExplorerReact;

  /**
   * Indicates whether the directory can be expanded to show its contents.
   * When true, the directory can be expanded.
   */
  readonly expandable?: boolean;
  withExpandable(expandable: boolean): StudioFileExplorerReact;

  /**
   * Indicates whether the directory can be explored.
   * When true, the  directory can be navigated or opened.
   */
  readonly explorable?: boolean;
  withExplorable(explorable: boolean): StudioFileExplorerReact;

  /**
   * Indicates whether the name will be full path or just relative path
   */
  readonly useFullPathForName?: boolean;
  withUseFullPathForName(useFullPathForName: boolean): StudioFileExplorerReact;

  /**
   * The list of child file infos for a folder
   * This is used to check if the clicked folder has children
   */
  readonly fileChildrenInfos?: C3.Array<FileExplorerFileInfo | null>;
  withFileChildrenInfos(fileChildrenInfos: C3.Array<FileExplorerFileInfo | null> | Array<IFileExplorerFileInfo | null>): StudioFileExplorerReact;

  /**
   * The current file type filters to apply when listing files
   */
  readonly fileTypeFilters?: C3.Array<string | null>;
  withFileTypeFilters(fileTypeFilters: C3.Array<string | null> | Array<string | null>): StudioFileExplorerReact;

  /**
   * If autonomous, then studioFileExplorer automatically handles
   * currentRoot and rootMount handling.
   * This is disabled if you're using the fileExplorer to simply render a list.
   */
  readonly autonomous?: boolean;
  withAutonomous(autonomous: boolean): StudioFileExplorerReact;

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
  static fromJson(json: any | null): StudioFileExplorerReact | null;

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
  static fromJsonString(json: string | null): StudioFileExplorerReact | null;

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
  static fromXmlString(xml: string | null): StudioFileExplorerReact | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): StudioFileExplorerReact | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): StudioFileExplorerReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): StudioFileExplorerReact;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): StudioFileExplorerReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<StudioFileExplorerReact | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<StudioFileExplorerReact | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): StudioFileExplorerReact;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): StudioFileExplorerReact;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): StudioFileExplorerReact;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): StudioFileExplorerReact;

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
  withField(field: string, value: any, doNotConvert?: boolean): StudioFileExplorerReact;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): StudioFileExplorerReact;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): StudioFileExplorerReact;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): StudioFileExplorerReact;

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
  withoutFieldAtPath(path: string): StudioFileExplorerReact;

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
  withoutField(field: string | null): StudioFileExplorerReact;

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
  withoutField(field: FieldType | null): StudioFileExplorerReact;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): StudioFileExplorerReact;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): StudioFileExplorerReact;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): StudioFileExplorerReact;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): StudioFileExplorerReact;

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
  defaultField(field: string): StudioFileExplorerReact;

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
  defaultField(field: FieldType): StudioFileExplorerReact;

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
  unsetField(field: string): StudioFileExplorerReact;

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
  unsetField(field: FieldType): StudioFileExplorerReact;

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
  removeField(field: string): StudioFileExplorerReact;

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
  removeField(field: FieldType): StudioFileExplorerReact;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): StudioFileExplorerReact;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): StudioFileExplorerReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): StudioFileExplorerReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): StudioFileExplorerReact;

  mergeJson(json: any | null): StudioFileExplorerReact;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): StudioFileExplorerReact;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): StudioFileExplorerReact;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<StudioFileExplorerReact | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<StudioFileExplorerReact | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<StudioFileExplorerReact | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<StudioFileExplorerReact | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<StudioFileExplorerReact | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, StudioFileExplorerReact | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, StudioFileExplorerReact | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<StudioFileExplorerReact | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<StudioFileExplorerReact | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): StudioFileExplorerReact;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): StudioFileExplorerReact;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): StudioFileExplorerReact;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): StudioFileExplorerReact;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): StudioFileExplorerReact;

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
  static make(fields: any, withDefaults?: boolean): StudioFileExplorerReact;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): StudioFileExplorerReact | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): StudioFileExplorerReact;

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
  afterMake(): StudioFileExplorerReact;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): StudioFileExplorerReact;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<StudioFileExplorerReact>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): StudioFileExplorerReact;

  /**
   * Produce the complete TSX file, including the declaration of the interface for the "props" based on the data
   * fields defined on the component type. This interface is always named with the type name plus "Props" and appended
   * to the existing source file.
   */
  static tsx(): string | null;

  /**
   * Produce the "props" interface for an arbitrary type. This will produce a TypeScript interface declaration that
   * includes all the data fields of the specified type, and the public data fields of types it mixes in. The details
   * can be controlled through the spec argument, but the defaults are what gets used by #tsx.
   *
   * @param type the type to examine
   * @param spec options for interface generation
   * @return TypeScript interface declaration
   */
  static buildProps(type: Type, spec?: ReactComponentPropsSpec | null): string | null;

  /**
   * The React component's tsx file path from root folder "/ui". i.e 'common/UiImg.tsx'
   */
  static tsxPath(): string | null;

  /**
   * If it has been imported, returns the imported module to render the UiComponent - the module at the tsxPath()
   */
  static importedModule(): any;

  /**
   * The render function must be implemented as the function the TSX implementation exports.
   */
  static render(props?: StudioFileExplorerReact | null): void;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<StudioFileExplorerReact | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<StudioFileExplorerReact | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<StudioFileExplorerReact | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<StudioFileExplorerReact | null> | null>;

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
  dependencies(): MetadataDeps<StudioFileExplorerReact | null>;

  save(subPath?: string | null, contentType?: string | null): StudioFileExplorerReact;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: StudioFileExplorerReact | null, spec?: UpsertSpec | null): StudioFileExplorerReact | null;

  upsert(srcObj?: StudioFileExplorerReact | null, spec?: UpsertSpec | null): StudioFileExplorerReact | null;

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
  static fromString(s: string | null): StudioFileExplorerReact | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): StudioFileExplorerReact | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: StudioFileExplorerReact, state: UiSdlReduxState): StudioFileExplorerReact | null;

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
   * Creates an action when a folder is double clicked.
   *
   * @params folderPath   The folder path (URL string) that was double clicked
   *         componentId  The ID of the File Explorer component sending out this action
   */
  static doubleClickFolderAction(componentId?: string | null, folderPath: string): UiSdlReduxAction<any> | null;

  /**
   * Creates an action to set the `currentRoot` state of {@Link FileExplorer}
   *
   * @params folderPath   The folder path (URL string) to set the currentRoot to
   *         componentId  The ID of the File Explorer component whose currentRoot is being changed
   */
  static setCurrentRootAction(componentId?: string | null, folderPath: string): UiSdlReduxAction<any> | null;

  /**
   * Updates the `currentRoot` state
   *
   * @params action The setCurrentRootAction
   *         state  The Redux state
   */
  static setCurrentRootReducer(state: UiSdlReduxState, action: UiSdlAction): UiSdlReduxState;

  /**
   * Creates an action to update the `allFiles` state of {@Link FileExplorer}
   *
   * @params newFileInfoList The list of files and folders to be updated/created in allFiles
   *         componentId  The ID of the FileExplorer component of which we want to update the allFiles of
   */
  static updateAllFilesAction(componentId?: string | null, newFileInfoList?: C3.Array<FileExplorerFileInfo | null>): UiSdlReduxAction<any> | null;

  /**
   * Updates the `allFiles` state
   *
   * @params state  The Redux state
   *         action The updateAllFilesAction
   */
  static updateAllFilesReducer(state: UiSdlReduxState, action: UiSdlAction): UiSdlReduxState;

  /**
   * Creates an action to get the path of the root mount from the
   * given filePath
   *
   * @params componentId The ID of the File Explorer component
   *         rootPath    The path of the specified file/folder
   */
  static getRootMountAction(componentId?: string | null, rootPath: string): UiSdlReduxAction<any> | null;

  /**
   * Creates an action to set the rootPrefix field
   *
   * @params componentId   The ID of the File Explorer component
   *         rootMount     The Url of the root mount.
   *         altRootMount  Alternative Url of rootMount. (optional)
   */
  static setRootMountAction(componentId?: string | null, rootMount?: string | null, altRootMount?: string | null): UiSdlReduxAction<any> | null;

  /**
   * Sets the rootPrefix field
   *
   * @params state The Redux state
   *         action The setRootPrefixAction
   */
  static setRootMountReducer(state: UiSdlReduxState, action: UiSdlAction): UiSdlReduxState;

  /**
   * Creates an action that corresponds to clicking on a custom action configured
   * by the user. Users are responsible for ultimately handling the logic for
   * the actions that they configured.
   *
   * @params componentId  The ID of the File Explorer component
   *         actionSuffix The action suffix of the selected custom action
   *         fileData     The path of the file/folder that the current context menu is based on
   */
  static triggerCustomMenuAction(componentId?: string | null, actionSuffix?: string | null, fileData?: any | null): UiSdlReduxAction<any> | null;

  /**
   * Creates an action that corresponds to one of the built-in actions in
   * the context menu.
   * Note: This action doesn't directly change the allFiles state.
   *
   * @params componentId The ID of the File Explorer
   *         fileAction  The type of file action. One of the following:
   *                     'move', 'copy', 'delete'
   *         fileArgs    The json object containing the relevant file arguments for the
   *                     specified file action. For example, 'delete' will only contain a file
   *                     path while 'move' will contain a source and destination path.
   */
  static triggerMenuAction(componentId?: string | null, fileAction?: string | null, fileArgs?: any | null): UiSdlReduxAction<any> | null;

  /**
   * Creates an action to delete a file/folder
   *
   * @params componentId The ID of the File Explorer Component
   *         srcPath     The path of the file/folder to delete
   */
  static deleteFileAction(componentId?: string | null, srcPath?: string | null): UiSdlReduxAction<any> | null;

  /**
   * Deletes the file/folder from allFiles
   */
  static deleteFileReducer(state: UiSdlReduxState, action: UiSdlAction): UiSdlReduxState;

  /**
   * Creates an action to copy a file
   *
   * @params componentId The ID of the File Explorer Component
   *         srcPath     The path of the file/folder to copy
   *         destPath    The intended destination path of the copied file/folder
   *         isDir       Whether the given srcPath is a folder path
   *         overwrite   Whether to overwrite file/folder(s) with the same name in the destination
   */
  static copyFileAction(componentId?: string | null, srcPath?: string | null, destPath?: string | null, isDir?: boolean, overwrite?: boolean): UiSdlReduxAction<any> | null;

  /**
   * Creates an action to a move a file/folder
   *
   * @params componentId The ID of the File Explorer component
   *         srcPath     The path of the file/folder to move
   *         destPath    The intended destination path of the file/folder
   *         isDir       Whether the given srcPath is a folder path
   *         overwrite   Whether to overwrite file/folder(s) with the same in the destination
   */
  static moveFileAction(componentId?: string | null, srcPath?: string | null, destPath?: string | null, isDir?: boolean, overwrite?: boolean): UiSdlReduxAction<any> | null;

  /**
   * Creates an action to read a File's content
   */
  static readFileAction(componentId?: string | null, filePath?: string | null, fileKind?: string | null): UiSdlReduxAction<any>;

  /**
   * Creates an action to display the read file's content in state
   */
  static displayFileAction(componentId?: string | null, content?: string | null): UiSdlReduxAction<any>;

  /**
   * Stores the read file's content in state to display
   */
  static displayFileReducer(state: UiSdlReduxState, action: UiSdlAction): UiSdlReduxState;

  /**
   * Creates an action to set the FileSystem type
   */
  static setFileSystemTypeAction(componentId?: string | null, type?: string | null): UiSdlReduxAction<any> | null;

  /**
   * Sets the FileSystem type in fileSysType field
   */
  static setFileSystemTypeReducer(state: UiSdlReduxState, action: UiSdlAction): UiSdlReduxState;

  /**
   * Creates an action to fetch the direct children of a given folder path
   *
   * @params componentId The ID of the {@Link StudioFileExplorer} component
   *         folderPath  The folder path of which we want to fetch its children
   */
  static fetchChildrenAction(componentId?: string | null, folderPath?: string | null): UiSdlReduxAction<any> | null;

  /**
   * Creates an action to expand a folder
   *
   * @params componentId The ID of the {@Link StudioFileExplorer} component
   *         folderPath  The path of the folder we want to expand/collapse
   *         expand      To expand or collapse
   *         reset       Whether to reset the entire expanded folders cache
   */
  static expandFoldersAction(componentId?: string | null, folderPaths?: C3.Array<string | null>, expand?: boolean, reset?: boolean): UiSdlReduxAction<any> | null;

  /**
   * Sets the folder(s) open state to either expanded or collapse
   */
  static expandFoldersReducer(state: UiSdlReduxState, action: UiSdlAction): UiSdlReduxState;

  /**
   * Creates an action to initiate expanding of a folder
   *
   * @params componentId The ID of the {@Link StudioFileExplorer} component
   *         folderPath  The path of the folder we want to initiate expanding/loading
   *         expanding      whether the folder is expanding
   */
  static expandingFoldersAction(componentId?: string | null, folderPaths?: C3.Array<string | null>, expanding?: boolean): UiSdlReduxAction<any> | null;

  /**
   * Sets the folder(s) expanding state to true or false
   */
  static expandingFoldersReducer(state: UiSdlReduxState, action: UiSdlAction): UiSdlReduxState;

  /**
   * And epic to expand a folder
   */
  static expandFoldersEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Helper method to acquire the value of the allFiles state
   * from the Redux state
   *
   * @params componentId The ID of the component of which we want the allFiles state from
   *         state       The Redux state
   */
  static getAllFiles(componentId?: string | null, state?: UiSdlReduxState | null): C3.Map<string | null, FileExplorerFileInfo | null>;

  /**
   * Helper method to acquire the value of the currentRoot state
   * from the Redux state
   *
   * @params componentId The ID of the component of which we want the currentRoot state from
   *         state       The Redux state
   */
  static getCurrentRoot(componentId?: string | null, state?: UiSdlReduxState | null): string | null;

  /**
   * An epic to retrieve the direct children of a given
   * folder path from the backend.
   *
   * @params actionStream The stream of actions this epic listens to
   *         stateStream  The corresponding current Redux state of each action in the stream
   */
  static listDirectChildrenEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * An epic to retrieve the corresponding file path of the given root mount
   *
   * @params actionStream The stream of actions this epic listens to
   *         stateStream  The corresponding current Redux state of each action in the stream
   */
  static getRootMountEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * An epic to perform a specific file operation on the backend.
   */
  static fileOperationEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * An epic to read/write a File's content
   */
  static readFileEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Creates an action to load the file explorer component.
   *
   * @params componentId The ID of the {@Link StudioFileExplorer} component
   *         loading whether we want the component to be loading or not
   */
  static setLoadingAction(componentId?: string | null, loading?: boolean): UiSdlReduxAction<any>;

  /**
   * Sets the loading state of the component to true or false.
   */
  static setLoadingReducer(state: UiSdlReduxState, action: UiSdlAction): UiSdlReduxState;

  /**
   *  Creates an action to select a file path
   *
   *  @params componentId The ID of the {@Link StudioFileExplorer} component
   *          filePath - path of the file/folder to select
   *          select - whether to select or deselect path
   * selectedMode - which mode of selection are we in
   */
  static setSelectedFilePathAction(componentId?: string | null, filePath?: string | null, select?: boolean, selectionMode?: string | null): UiSdlReduxAction<any>;

  /**
   * Set the correct selection in state.
   */
  static setSelectedFilePathReducer(state: UiSdlReduxState, action: UiSdlAction): UiSdlReduxState;

  /**
   * Creates an action to set error messages for a component
   *
   * @param componentId The ID of the {@Link StudioFileExplorer} component
   * @param errorMessages A list of error messages to set
   */
  static setErrorMessagesAction(componentId?: string | null, errorMessages?: C3.Array<string | null>): UiSdlReduxAction<any>;

  /**
   * Set the errorMessages in state.
   */
  static setErrorMessagesReducer(state: UiSdlReduxState, action: UiSdlAction): UiSdlReduxState;

  /**
   * Creates an action to set child file infos for a folder
   *
   * @param componentId The ID of the {@Link StudioFileExplorer} component
   * @param fileChildrenInfos A list of child file infos to set
   */
  static setFileChildrenInfosAction(componentId?: string | null, fileChildrenInfos?: C3.Array<FileExplorerFileInfo | null>): UiSdlReduxAction<any>;

  /**
   * Set the child file infos in state.
   */
  static setFileChildrenInfosReducer(state: UiSdlReduxState, action: UiSdlAction): UiSdlReduxState;

  /**
   * Creates an action to clear the component's state
   *
   * @param componentId The ID of the {@Link StudioFileExplorer} component
   */
  static clearStateAction(componentId?: string | null): UiSdlReduxAction<any>;

  /**
   * Clears the component's state
   */
  static clearStateReducer(state: UiSdlReduxState, action: UiSdlAction): UiSdlReduxState;

  /**
   * Creates an action to set the file type filters
   */
  static setFileTypeFiltersAction(componentId?: string | null, fileTypeFilters?: C3.Array<string | null>): UiSdlReduxAction<any> | null;

  /**
   * Sets the file type filters in state
   */
  static setFileTypeFiltersReducer(state: UiSdlReduxState, action: UiSdlAction): UiSdlReduxState;

  /**
   * An epic that re-triggers listDirectChildren when the file type filters change
   */
  static setFileTypeFiltersEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;
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
