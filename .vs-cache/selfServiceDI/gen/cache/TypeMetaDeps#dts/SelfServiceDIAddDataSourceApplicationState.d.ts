// TypeScript definitions for the C3 type SelfServiceDIAddDataSourceApplicationState

/**
 * Application state for storing information needed in the add / edit data source multistep component flow.
 *
 * @remarks this represents a value passed to a method that expects an instance of SelfServiceDIAddDataSourceApplicationState
 */
declare interface ISelfServiceDIAddDataSourceApplicationState {

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

  editMode?: boolean;

  editSteps?: C3.Array<MultiStepComponentStep | null> | Array<IMultiStepComponentStep | null>;

  selectedCacheItemName?: string | null;

  selectedDataConnector?: ISelfServiceDI.Ui.DataConnector | null;

  /**
   * Stores the transformed data returned from {@link SqlSourceSystem#previewTable}, with keys being the column name,
   * and value being a {@link SelfServiceDICell} storing value and valueType.
   * Example of the data structure:
   *      [
   *         {
   *           TIMESTAMP: {
   *             value: '2000-01-01',
   *             valueType: 'datetime',
   *           },
   *           ID: {
   *             value: 'id1',
   *             valueType: 'str',
   *           },
   *         },
   *         {
   *           TIMESTAMP: {
   *             value: '2000-01-02',
   *             valueType: 'datetime',
   *           },
   *           ID: {
   *             value: 'id2',
   *             valueType: 'str',
   *           },
   *         },
   *       ];
   */
  sqlTablePreviewData?: C3.Array<C3.Map<string | null, SelfServiceDICell | null>> | Array<C3.Map<string | null, SelfServiceDICell | null> | {[key: string | null]: ISelfServiceDICell | null}>;

  /**
   * The inline notification to display errors in `PreviewAndSelectDataStep` and `EditSelectedTableSchemaStep`
   */
  previewRemoteDataError?: IUiSdlInlineNotification | null;

  /**
   * A map of {@link SqlSourceSystem#name} to cached information about the remote connection for quick lookup in the UI.
   * This intentionally lives outside the {@link sourceSystemsCache} because it may include cached information for
   * {@link SqlSourceSystem}s that may not get fully configured by a user. In these cases, the concepts should remain
   * distinct in Redux state.
   */
  sqlConnectionsCache?: C3.Map<string | null, SelfServiceDISqlConnectionCacheItem | null> | {[key: string | null]: ISelfServiceDISqlConnectionCacheItem | null};

  /**
   * The type metadata for the current selection when previewing a remote table.
   */
  remoteDataPreviewTypeMeta?: ITypeMeta | null;

  currentConnectStatus?: IPingResult | null;

  selectedSourceSystemForDataPreview?: ISelfServiceDIAddDataSourceApplicationState | null;

  previewAndSelectDataStepPriorState?: any | null;

  /**
   * Map only for storing remote {@link DataFusionUiTypeMeta} for `EditSelectedTableSchemaStep`, mapping from {@link SourceCollection} name to edited DataFusionUiTypeMeta
   * the map only stores DataFusionUiTypeMeta in intermediate edit state.
   */
  editRemoteTypeMetaCache?: C3.Map<string | null, DataFusionUiTypeMeta | null> | {[key: string | null]: IDataFusionUiTypeMeta | null};

  /**
   * Map only for storing remote {@link TypeMeta} for `EditSelectedTableSchemaStep`, mapping from {@link SourceCollection} name to {@link TypeMeta}.
   * the map only stores the unedited / original TypeMeta.
   */
  remoteTypeMetaCache?: C3.Map<string | null, TypeMeta | null> | {[key: string | null]: ITypeMeta | null};

  /**
   * The selected table names in `PreviewAndSelectDataStep`
   */
  selectedTableNameBySchema?: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>};

  /**
   * A map of files that the user has browsed/dragged into the file uploader in step 2 to their file objs.
   * Note: these files are NOT uploaded until the end of the file upload add data source flow.
   * Example of the json in the map:
   * {
   *  "file": {},
   *  "preview": [
   *     {
   *         "exercise": "Reverse Curl",
   *         "sets": 3,
   *         "reps": 12,
   *         "restTime": 50,
   *         "__parsed_extra": [
   *             13
   *         ]
   *     }
   * ],
   * "errors": [
   *     {
   *         "type": "FieldMismatch",
   *         "code": "TooManyFields",
   *         "message": "Too many fields: expected 4 fields but parsed 5",
   *         "row": 0
   *     }
   * ]
   * }
   */
  queuedFiles?: C3.Map<string | null, any | null> | {[key: string | null]: any | null};

  /**
   * Name of the schema that will be used to generate the {@link Source}.
   * {@link TypeMeta} for this schema will be stored in the {@link SelfServiceDIApplicationState#editTypeMetaCache}.
   */
  sourceName?: string | null;

  /**
   * Name of the schema that will be used to generate the {@link Persistable} types.
   * {@link TypeMeta} for the target will be stored in the {@link SelfServiceDIApplicationState#editTypeMetaCache}.
   */
  targetName?: string | null;

  /**
   * The error to display when issues occur in the select files and create schema step
   */
  selectFilesAndCreateSchemaError?: string | null;

  tableFromFilesFormStatus?: IObj | null;

  /**
   * The selected preview to render in the target preview tab
   */
  selectedFilePreview?: C3.Array<Obj | null> | Array<IObj | null>;

  /**
   * The FileSourceCollection be to upserted in the file upload flow.
   */
  fileUploadSourceCollection?: IFileSourceCollection | null;

  selectedFileNameInFilesGrid?: string | null;

  selectedSourceCollectionConfig?: ISourceCollection.Config | null;

  /**
   * The list of file names in the selected bucket
   */
  selectedBucketFileNames?: C3.Array<string | null> | Array<string | null>;

  /**
   * The selected path in the state
   */
  selectedPathForExternalFileSystem?: string | null;

  /**
   * The error message for selecting a file path
   */
  selectFilePathError?: IUiSdlInlineNotification | null;

  /**
   * The error message for canonical selection in the integrate sources step
   */
  canonicalSelectionError?: IUiSdlInlineNotification | null;

  /**
   * The list of files from the selected URL
   */
  filesFromSelectedUrl?: C3.Array<string | null> | Array<string | null>;

  /**
   * The details of the selected file
   */
  selectedFileDetail?: IObj | null;

  /**
   * A map that holds the SourceToTargetTransforms relevant to the current flow
   *
   * {
   *   transformName: Transform
   * }
   */
  sourceToTargetTransforms?: C3.Map<string | null, Transform | null> | {[key: string | null]: ITransform | null};

  /**
   * The currently selected transform
   */
  selectedSourceToTransformName?: string | null;

  /**
   * The details of the selected file
   */
  selectedPartitionForDataPreview?: IObj | null;

  /**
   * The details of the selected file
   */
  streamsAvailable?: IObj | null;

  /**
   * Stores the transformed data with keys being the column name
   * Example of the data structure:
   * [
   *   {
   *     "shardId": "shardId-000000000000",
   *     "data": {
   *       "user_id": "user_001",
   *       "event_type": "page_view",
   *       "timestamp": "2024-11-12T20:44:19Z",
   *       "page_url": "/home",
   *       "referrer_url": "/login"
   *     },
   *     "approximateTimestamp": "2024-11-12T20:44:19Z",
   *     "sequenceNumber": "49545115243490985018280067714973144582180062593244200961"
   *   },
   *   {
   *     "shardId": "shardId-000000000000",
   *     "data": {
   *       "user_id": "user_002",
   *       "event_type": "click",
   *       "timestamp": "2024-11-12T20:45:10Z",
   *       "page_url": "/products",
   *       "button_id": "buy_now"
   *     },
   *     "approximateTimestamp": "2024-11-12T20:45:10Z",
   *     "sequenceNumber": "49545115243490985018280067714973144582180062593244200962"
   *   }
   * ]
   */
  streamTablePreviewData?: any | null;

  /**
   * The data of the selected shard
   */
  selectedShardRecord?: IObj | null;

  /**
   * The canonicals available to be selected
   */
  canonicalsAvailable?: C3.Array<PresentationalTreeNode | null> | Array<IPresentationalTreeNode | null>;

  sourcesTransformObject?: IObj | null;

  isFirstTimeRenderForTargetPreview?: boolean;

  visitedTressNodesInTargetPreview?: C3.Array<string | null> | Array<string | null>;

  /**
   * Used to toggle the open/close state of the integrate sources side panel for canonicals list
   */
  integrateSourcesSidePanelOpenClose?: boolean;

  /**
   * The search query for an input that utilizes {@link UiSdlSingleSearch#actionableOptionsConfig}.
   * Used for selecting the option to create a new mount in the External File flows
   */
  mountQuery?: string | null;

  /**
   * Used to toggle the integrate sources graph or transformer within the container
   */
  integrateSourcesGraphToTransformer?: boolean;

  /**
   * Stores the value of the type of transform (projection/transformer)
   */
  integrateSourcesTypeOfTransform?: string | null;

  /**
   * Used to toggle the integrate sources graph to selected transformer component or filter component within the container
   */
  selectedNodeFromTheGraph?: string | null;

  /**
   * CDC configuration stored per source collection to support independent configuration for each table.
   * Structure: cdcConfigCache[sourceCollectionName] = { enabled, trackingColumn, schedule }
   */
  cdcConfigCache?: C3.Map<string | null, SelfServiceDICdcConfig | null> | {[key: string | null]: ISelfServiceDICdcConfig | null};

  /**
   * TypeMeta for the filter preview table.
   * Used to generate table columns when previewing filter results.
   * Contains field information (TypeMeta) needed to render the preview table columns.
   */
  transformFilterTypeMeta?: ITypeMeta | null;

  /**
   * Used to toggle the display of the filter preview table
   */
  displayFilterPreviewTable?: boolean;

  /**
   * Cache for storing source fields fetched from the server for filter condition validation.
   * Maps from source name to array of field types (same type as TypeMeta.declaredFieldTypes) to avoid repeated API calls.
   */
  filterConditionSourceFieldsCache?: C3.Map<string | null, C3.Array<DeclaredFieldType | null>> | {[key: string | null]: C3.Array<DeclaredFieldType | null> | Array<IDeclaredFieldType | null>};

  /**
   * Indicates whether the automap operation is currently running
   */
  automapRunning?: boolean;
}

/**
 * Application state for storing information needed in the add / edit data source multistep component flow.
 *
 * @remarks this represents a made instance of SelfServiceDIAddDataSourceApplicationState
 */
declare class SelfServiceDIAddDataSourceApplicationState extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
   */
  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Collection of extra async {@link UiSdlEffectTrigger}.
   */
  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): SelfServiceDIAddDataSourceApplicationState;

  readonly editMode?: boolean;
  withEditMode(editMode: boolean): SelfServiceDIAddDataSourceApplicationState;

  readonly editSteps?: C3.Array<MultiStepComponentStep | null>;
  withEditSteps(editSteps: C3.Array<MultiStepComponentStep | null> | Array<IMultiStepComponentStep | null>): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedCacheItemName?: string | null;
  withSelectedCacheItemName(selectedCacheItemName: string | null): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedDataConnector?: SelfServiceDI.Ui.DataConnector | null;
  withSelectedDataConnector(selectedDataConnector: ISelfServiceDI.Ui.DataConnector | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Stores the transformed data returned from {@link SqlSourceSystem#previewTable}, with keys being the column name,
   * and value being a {@link SelfServiceDICell} storing value and valueType.
   * Example of the data structure:
   *      [
   *         {
   *           TIMESTAMP: {
   *             value: '2000-01-01',
   *             valueType: 'datetime',
   *           },
   *           ID: {
   *             value: 'id1',
   *             valueType: 'str',
   *           },
   *         },
   *         {
   *           TIMESTAMP: {
   *             value: '2000-01-02',
   *             valueType: 'datetime',
   *           },
   *           ID: {
   *             value: 'id2',
   *             valueType: 'str',
   *           },
   *         },
   *       ];
   */
  readonly sqlTablePreviewData?: C3.Array<C3.Map<string | null, SelfServiceDICell | null>>;
  withSqlTablePreviewData(sqlTablePreviewData: C3.Array<C3.Map<string | null, SelfServiceDICell | null>> | Array<C3.Map<string | null, SelfServiceDICell | null> | {[key: string | null]: ISelfServiceDICell | null}>): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The inline notification to display errors in `PreviewAndSelectDataStep` and `EditSelectedTableSchemaStep`
   */
  readonly previewRemoteDataError?: UiSdlInlineNotification | null;
  withPreviewRemoteDataError(previewRemoteDataError: IUiSdlInlineNotification | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * A map of {@link SqlSourceSystem#name} to cached information about the remote connection for quick lookup in the UI.
   * This intentionally lives outside the {@link sourceSystemsCache} because it may include cached information for
   * {@link SqlSourceSystem}s that may not get fully configured by a user. In these cases, the concepts should remain
   * distinct in Redux state.
   */
  readonly sqlConnectionsCache?: C3.Map<string | null, SelfServiceDISqlConnectionCacheItem | null>;
  withSqlConnectionsCache(sqlConnectionsCache: C3.Map<string | null, SelfServiceDISqlConnectionCacheItem | null> | {[key: string | null]: ISelfServiceDISqlConnectionCacheItem | null}): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The type metadata for the current selection when previewing a remote table.
   */
  readonly remoteDataPreviewTypeMeta?: TypeMeta | null;
  withRemoteDataPreviewTypeMeta(remoteDataPreviewTypeMeta: ITypeMeta | null): SelfServiceDIAddDataSourceApplicationState;

  readonly currentConnectStatus?: PingResult | null;
  withCurrentConnectStatus(currentConnectStatus: IPingResult | null): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedSourceSystemForDataPreview?: SelfServiceDIAddDataSourceApplicationState | null;
  withSelectedSourceSystemForDataPreview(selectedSourceSystemForDataPreview: ISelfServiceDIAddDataSourceApplicationState | null): SelfServiceDIAddDataSourceApplicationState;

  readonly previewAndSelectDataStepPriorState?: any | null;
  withPreviewAndSelectDataStepPriorState(previewAndSelectDataStepPriorState: any | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Map only for storing remote {@link DataFusionUiTypeMeta} for `EditSelectedTableSchemaStep`, mapping from {@link SourceCollection} name to edited DataFusionUiTypeMeta
   * the map only stores DataFusionUiTypeMeta in intermediate edit state.
   */
  readonly editRemoteTypeMetaCache?: C3.Map<string | null, DataFusionUiTypeMeta | null>;
  withEditRemoteTypeMetaCache(editRemoteTypeMetaCache: C3.Map<string | null, DataFusionUiTypeMeta | null> | {[key: string | null]: IDataFusionUiTypeMeta | null}): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Map only for storing remote {@link TypeMeta} for `EditSelectedTableSchemaStep`, mapping from {@link SourceCollection} name to {@link TypeMeta}.
   * the map only stores the unedited / original TypeMeta.
   */
  readonly remoteTypeMetaCache?: C3.Map<string | null, TypeMeta | null>;
  withRemoteTypeMetaCache(remoteTypeMetaCache: C3.Map<string | null, TypeMeta | null> | {[key: string | null]: ITypeMeta | null}): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The selected table names in `PreviewAndSelectDataStep`
   */
  readonly selectedTableNameBySchema?: C3.Map<string | null, C3.Array<string | null>>;
  withSelectedTableNameBySchema(selectedTableNameBySchema: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): SelfServiceDIAddDataSourceApplicationState;

  /**
   * A map of files that the user has browsed/dragged into the file uploader in step 2 to their file objs.
   * Note: these files are NOT uploaded until the end of the file upload add data source flow.
   * Example of the json in the map:
   * {
   *  "file": {},
   *  "preview": [
   *     {
   *         "exercise": "Reverse Curl",
   *         "sets": 3,
   *         "reps": 12,
   *         "restTime": 50,
   *         "__parsed_extra": [
   *             13
   *         ]
   *     }
   * ],
   * "errors": [
   *     {
   *         "type": "FieldMismatch",
   *         "code": "TooManyFields",
   *         "message": "Too many fields: expected 4 fields but parsed 5",
   *         "row": 0
   *     }
   * ]
   * }
   */
  readonly queuedFiles?: C3.Map<string | null, any | null>;
  withQueuedFiles(queuedFiles: C3.Map<string | null, any | null> | {[key: string | null]: any | null}): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Name of the schema that will be used to generate the {@link Source}.
   * {@link TypeMeta} for this schema will be stored in the {@link SelfServiceDIApplicationState#editTypeMetaCache}.
   */
  readonly sourceName?: string | null;
  withSourceName(sourceName: string | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Name of the schema that will be used to generate the {@link Persistable} types.
   * {@link TypeMeta} for the target will be stored in the {@link SelfServiceDIApplicationState#editTypeMetaCache}.
   */
  readonly targetName?: string | null;
  withTargetName(targetName: string | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The error to display when issues occur in the select files and create schema step
   */
  readonly selectFilesAndCreateSchemaError?: string | null;
  withSelectFilesAndCreateSchemaError(selectFilesAndCreateSchemaError: string | null): SelfServiceDIAddDataSourceApplicationState;

  readonly tableFromFilesFormStatus?: Obj | null;
  withTableFromFilesFormStatus(tableFromFilesFormStatus: IObj | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The selected preview to render in the target preview tab
   */
  readonly selectedFilePreview?: C3.Array<Obj | null>;
  withSelectedFilePreview(selectedFilePreview: C3.Array<Obj | null> | Array<IObj | null>): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The FileSourceCollection be to upserted in the file upload flow.
   */
  readonly fileUploadSourceCollection?: FileSourceCollection | null;
  withFileUploadSourceCollection(fileUploadSourceCollection: IFileSourceCollection | null): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedFileNameInFilesGrid?: string | null;
  withSelectedFileNameInFilesGrid(selectedFileNameInFilesGrid: string | null): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedSourceCollectionConfig?: SourceCollection.Config | null;
  withSelectedSourceCollectionConfig(selectedSourceCollectionConfig: ISourceCollection.Config | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The list of file names in the selected bucket
   */
  readonly selectedBucketFileNames?: C3.Array<string | null>;
  withSelectedBucketFileNames(selectedBucketFileNames: C3.Array<string | null> | Array<string | null>): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The selected path in the state
   */
  readonly selectedPathForExternalFileSystem?: string | null;
  withSelectedPathForExternalFileSystem(selectedPathForExternalFileSystem: string | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The error message for selecting a file path
   */
  readonly selectFilePathError?: UiSdlInlineNotification | null;
  withSelectFilePathError(selectFilePathError: IUiSdlInlineNotification | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The error message for canonical selection in the integrate sources step
   */
  readonly canonicalSelectionError?: UiSdlInlineNotification | null;
  withCanonicalSelectionError(canonicalSelectionError: IUiSdlInlineNotification | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The list of files from the selected URL
   */
  readonly filesFromSelectedUrl?: C3.Array<string | null>;
  withFilesFromSelectedUrl(filesFromSelectedUrl: C3.Array<string | null> | Array<string | null>): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The details of the selected file
   */
  readonly selectedFileDetail?: Obj | null;
  withSelectedFileDetail(selectedFileDetail: IObj | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * A map that holds the SourceToTargetTransforms relevant to the current flow
   *
   * {
   *   transformName: Transform
   * }
   */
  readonly sourceToTargetTransforms?: C3.Map<string | null, Transform | null>;
  withSourceToTargetTransforms(sourceToTargetTransforms: C3.Map<string | null, Transform | null> | {[key: string | null]: ITransform | null}): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The currently selected transform
   */
  readonly selectedSourceToTransformName?: string | null;
  withSelectedSourceToTransformName(selectedSourceToTransformName: string | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The details of the selected file
   */
  readonly selectedPartitionForDataPreview?: Obj | null;
  withSelectedPartitionForDataPreview(selectedPartitionForDataPreview: IObj | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The details of the selected file
   */
  readonly streamsAvailable?: Obj | null;
  withStreamsAvailable(streamsAvailable: IObj | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Stores the transformed data with keys being the column name
   * Example of the data structure:
   * [
   *   {
   *     "shardId": "shardId-000000000000",
   *     "data": {
   *       "user_id": "user_001",
   *       "event_type": "page_view",
   *       "timestamp": "2024-11-12T20:44:19Z",
   *       "page_url": "/home",
   *       "referrer_url": "/login"
   *     },
   *     "approximateTimestamp": "2024-11-12T20:44:19Z",
   *     "sequenceNumber": "49545115243490985018280067714973144582180062593244200961"
   *   },
   *   {
   *     "shardId": "shardId-000000000000",
   *     "data": {
   *       "user_id": "user_002",
   *       "event_type": "click",
   *       "timestamp": "2024-11-12T20:45:10Z",
   *       "page_url": "/products",
   *       "button_id": "buy_now"
   *     },
   *     "approximateTimestamp": "2024-11-12T20:45:10Z",
   *     "sequenceNumber": "49545115243490985018280067714973144582180062593244200962"
   *   }
   * ]
   */
  readonly streamTablePreviewData?: any | null;
  withStreamTablePreviewData(streamTablePreviewData: any | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The data of the selected shard
   */
  readonly selectedShardRecord?: Obj | null;
  withSelectedShardRecord(selectedShardRecord: IObj | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The canonicals available to be selected
   */
  readonly canonicalsAvailable?: C3.Array<PresentationalTreeNode | null>;
  withCanonicalsAvailable(canonicalsAvailable: C3.Array<PresentationalTreeNode | null> | Array<IPresentationalTreeNode | null>): SelfServiceDIAddDataSourceApplicationState;

  readonly sourcesTransformObject?: Obj | null;
  withSourcesTransformObject(sourcesTransformObject: IObj | null): SelfServiceDIAddDataSourceApplicationState;

  readonly isFirstTimeRenderForTargetPreview?: boolean;
  withIsFirstTimeRenderForTargetPreview(isFirstTimeRenderForTargetPreview: boolean): SelfServiceDIAddDataSourceApplicationState;

  readonly visitedTressNodesInTargetPreview?: C3.Array<string | null>;
  withVisitedTressNodesInTargetPreview(visitedTressNodesInTargetPreview: C3.Array<string | null> | Array<string | null>): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Used to toggle the open/close state of the integrate sources side panel for canonicals list
   */
  readonly integrateSourcesSidePanelOpenClose?: boolean;
  withIntegrateSourcesSidePanelOpenClose(integrateSourcesSidePanelOpenClose: boolean): SelfServiceDIAddDataSourceApplicationState;

  /**
   * The search query for an input that utilizes {@link UiSdlSingleSearch#actionableOptionsConfig}.
   * Used for selecting the option to create a new mount in the External File flows
   */
  readonly mountQuery?: string | null;
  withMountQuery(mountQuery: string | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Used to toggle the integrate sources graph or transformer within the container
   */
  readonly integrateSourcesGraphToTransformer?: boolean;
  withIntegrateSourcesGraphToTransformer(integrateSourcesGraphToTransformer: boolean): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Stores the value of the type of transform (projection/transformer)
   */
  readonly integrateSourcesTypeOfTransform?: string | null;
  withIntegrateSourcesTypeOfTransform(integrateSourcesTypeOfTransform: string | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Used to toggle the integrate sources graph to selected transformer component or filter component within the container
   */
  readonly selectedNodeFromTheGraph?: string | null;
  withSelectedNodeFromTheGraph(selectedNodeFromTheGraph: string | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * CDC configuration stored per source collection to support independent configuration for each table.
   * Structure: cdcConfigCache[sourceCollectionName] = { enabled, trackingColumn, schedule }
   */
  readonly cdcConfigCache?: C3.Map<string | null, SelfServiceDICdcConfig | null>;
  withCdcConfigCache(cdcConfigCache: C3.Map<string | null, SelfServiceDICdcConfig | null> | {[key: string | null]: ISelfServiceDICdcConfig | null}): SelfServiceDIAddDataSourceApplicationState;

  /**
   * TypeMeta for the filter preview table.
   * Used to generate table columns when previewing filter results.
   * Contains field information (TypeMeta) needed to render the preview table columns.
   */
  readonly transformFilterTypeMeta?: TypeMeta | null;
  withTransformFilterTypeMeta(transformFilterTypeMeta: ITypeMeta | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Used to toggle the display of the filter preview table
   */
  readonly displayFilterPreviewTable?: boolean;
  withDisplayFilterPreviewTable(displayFilterPreviewTable: boolean): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Cache for storing source fields fetched from the server for filter condition validation.
   * Maps from source name to array of field types (same type as TypeMeta.declaredFieldTypes) to avoid repeated API calls.
   */
  readonly filterConditionSourceFieldsCache?: C3.Map<string | null, C3.Array<DeclaredFieldType | null>>;
  withFilterConditionSourceFieldsCache(filterConditionSourceFieldsCache: C3.Map<string | null, C3.Array<DeclaredFieldType | null>> | {[key: string | null]: C3.Array<DeclaredFieldType | null> | Array<IDeclaredFieldType | null>}): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Indicates whether the automap operation is currently running
   */
  readonly automapRunning?: boolean;
  withAutomapRunning(automapRunning: boolean): SelfServiceDIAddDataSourceApplicationState;

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
  static fromJson(json: any | null): SelfServiceDIAddDataSourceApplicationState | null;

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
  static fromJsonString(json: string | null): SelfServiceDIAddDataSourceApplicationState | null;

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
  static fromXmlString(xml: string | null): SelfServiceDIAddDataSourceApplicationState | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): SelfServiceDIAddDataSourceApplicationState | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): SelfServiceDIAddDataSourceApplicationState;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<SelfServiceDIAddDataSourceApplicationState | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<SelfServiceDIAddDataSourceApplicationState | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): SelfServiceDIAddDataSourceApplicationState;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): SelfServiceDIAddDataSourceApplicationState;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): SelfServiceDIAddDataSourceApplicationState;

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
  withField(field: string, value: any, doNotConvert?: boolean): SelfServiceDIAddDataSourceApplicationState;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): SelfServiceDIAddDataSourceApplicationState;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): SelfServiceDIAddDataSourceApplicationState;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): SelfServiceDIAddDataSourceApplicationState;

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
  withoutFieldAtPath(path: string): SelfServiceDIAddDataSourceApplicationState;

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
  withoutField(field: string | null): SelfServiceDIAddDataSourceApplicationState;

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
  withoutField(field: FieldType | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): SelfServiceDIAddDataSourceApplicationState;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): SelfServiceDIAddDataSourceApplicationState;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): SelfServiceDIAddDataSourceApplicationState;

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
  defaultField(field: string): SelfServiceDIAddDataSourceApplicationState;

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
  defaultField(field: FieldType): SelfServiceDIAddDataSourceApplicationState;

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
  unsetField(field: string): SelfServiceDIAddDataSourceApplicationState;

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
  unsetField(field: FieldType): SelfServiceDIAddDataSourceApplicationState;

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
  removeField(field: string): SelfServiceDIAddDataSourceApplicationState;

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
  removeField(field: FieldType): SelfServiceDIAddDataSourceApplicationState;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): SelfServiceDIAddDataSourceApplicationState;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): SelfServiceDIAddDataSourceApplicationState;

  mergeJson(json: any | null): SelfServiceDIAddDataSourceApplicationState;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<SelfServiceDIAddDataSourceApplicationState | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<SelfServiceDIAddDataSourceApplicationState | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<SelfServiceDIAddDataSourceApplicationState | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<SelfServiceDIAddDataSourceApplicationState | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<SelfServiceDIAddDataSourceApplicationState | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, SelfServiceDIAddDataSourceApplicationState | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, SelfServiceDIAddDataSourceApplicationState | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<SelfServiceDIAddDataSourceApplicationState | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<SelfServiceDIAddDataSourceApplicationState | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): SelfServiceDIAddDataSourceApplicationState;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): SelfServiceDIAddDataSourceApplicationState;

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
  static make(fields: any, withDefaults?: boolean): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): SelfServiceDIAddDataSourceApplicationState | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): SelfServiceDIAddDataSourceApplicationState;

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
  afterMake(): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<SelfServiceDIAddDataSourceApplicationState>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): SelfServiceDIAddDataSourceApplicationState;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<SelfServiceDIAddDataSourceApplicationState | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<SelfServiceDIAddDataSourceApplicationState | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<SelfServiceDIAddDataSourceApplicationState | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<SelfServiceDIAddDataSourceApplicationState | null> | null>;

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
  dependencies(): MetadataDeps<SelfServiceDIAddDataSourceApplicationState | null>;

  save(subPath?: string | null, contentType?: string | null): SelfServiceDIAddDataSourceApplicationState;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: SelfServiceDIAddDataSourceApplicationState | null, spec?: UpsertSpec | null): SelfServiceDIAddDataSourceApplicationState | null;

  upsert(srcObj?: SelfServiceDIAddDataSourceApplicationState | null, spec?: UpsertSpec | null): SelfServiceDIAddDataSourceApplicationState | null;

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
  static fromString(s: string | null): SelfServiceDIAddDataSourceApplicationState | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): SelfServiceDIAddDataSourceApplicationState | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: SelfServiceDIAddDataSourceApplicationState, state: UiSdlReduxState): SelfServiceDIAddDataSourceApplicationState | null;

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
   * An action set the edit mode of the application
   */
  static setEditModeAction(editMode?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_EDIT_MODE` and sets the editMode in state.
   */
  static setEditModeReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the {@link #editMode} from the state.
   */
  static getEditMode(state: UiSdlReduxState): boolean;

  /**
   * An action to set the `editSteps` to render in edit mode
   */
  static setEditStepsAction(editSteps?: C3.Array<MultiStepComponentStep | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_EDIT_STEPS` and sets the `editSteps` in state
   */
  static setEditStepsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  static getEditSteps(state: UiSdlReduxState): C3.Array<MultiStepComponentStep | null>;

  /**
   * An action set selectedCacheItemName
   */
  static setSelectedCacheItemNameAction(selectedCacheItemName?: string | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_CACHE_ITEM` and sets `selectedCacheItemName` in the state.
   */
  static setSelectedCacheItemNameReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the {@link selectedCacheItemName} from the state.
   *
   * @param state - The current Redux state
   * @returns The name of the currently selected cache item, or undefined if none is selected
   */
  static getSelectedCacheItemName(state: UiSdlReduxState): string | null;

  /**
   * Returns the {@link selectedDataConnector} from the state.
   */
  static getSelectedDataConnector(state: UiSdlReduxState): SelfServiceDI.Ui.DataConnector | null;

  /**
   * An action to action to update the database title in the first step when it is selected
   */
  static setSelectedDataConnectorAction(selectedDataConnector?: string | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_DATA_CONNECTOR` and sets database title in the state.
   */
  static setSelectedDataConnectorReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Clear the entire app state
   */
  static clearAppStateAction(clearEditModeFields: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `CLEAR_APP_STATE` and clears the state.
   */
  static clearAppStateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the `sqlTablePreviewData`
   */
  static setSqlTablePreviewDataAction(previewData?: C3.Array<C3.Map<string | null, SelfServiceDICell | null>>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SQL_TABLE_PREVIEW_DATA` and sets the `sqlTablePreviewData` in state.
   */
  static setSqlTablePreviewDataReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the `previewRemoteDataError`
   */
  static setPreviewRemoteDataErrorAction(error?: UiSdlInlineNotification | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_PREVIEW_REMOTE_DATA_ERROR` and sets the `previewRemoteDataError` in state.
   */
  static setPreviewRemoteDataErrorReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to update the {@link sqlConnectionsCache} at the `{sourceSystemName}.tableNamesLoading` path for a
   * specific {@link SqlSourceSystem}.
   */
  static setSqlTableNamesLoadingAction(sourceSystemName?: string | null, loading?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SQL_TABLE_NAMES_LOADING` and updates the {@link sqlConnectionsCache}
   * at the provided path.
   */
  static setSqlTableNamesLoadingReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to update the {@link sqlConnectionsCache} at the `tableNamesBySchema.{sourceSystemName}` path for a
   * specific {@link SqlSourceSystem}.
   */
  static setSqlTableNamesBySchemaAction(sourceSystemName?: string | null, tableNamesBySchema?: C3.Map<string | null, C3.Array<string | null>>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SQL_TABLE_NAMES_BY_SCHEMA` and updates the {@link sqlConnectionsCache} at the
   * `tableNamesBySchema.{sourceSystemName}` path.
   */
  static setSqlTableNamesBySchemaReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the `remoteDataPreviewTypeMeta`
   */
  static setRemoteDataPreviewTypeMetaAction(typeMeta?: TypeMeta | null): UiSdlReduxAction<any>;

  /**
   * Sets the `remoteDataPreviewTypeMeta`
   */
  static setRemoteDataPreviewTypeMetaReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieves `remoteDataPreviewTypeMeta`
   */
  static getRemoteDataPreviewTypeMeta(state: UiSdlReduxState): TypeMeta | null;

  /**
   * An action to set the currentConnectStatus in state
   */
  static setCurrentConnectStatusAction(pingResult?: PingResult | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_CURRENT_CONNECT_STATUS` and sets in the state.
   */
  static setCurrentConnectStatusReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to load the remote data for a {@link SourceSystem}.
   */
  static loadRemoteDataPreviewTreeListAction(treeViewComponentId?: string | null, sourceSystem?: SourceSystem<SourceSystem.Config | null, any> | null): UiSdlReduxAction<any>;

  /**
   * An action to remove stale metadata from a {@link SourceSystem}. This will trigger
   * {@link SelfServiceDIRemoveStaleSourceMetadataEpic}.
   *
   * @param sourceSystem
   *           The source system to remove stale metadata from
   * @param tableNamesToKeep
   *           The table names that should be used to determine which metadata is stale. Any associated
   *           {@link SourceCollection}s where the {@link SourceCollection.source} type's schema does not match one of
   *           these table names will be removed. Similarly, those source types will also be removed.
   * @param refreshCache
   *           Whether the sourceSystem already exists and we need to refresh and update the cache
   * @param teardown
   *           Whether this action is called from a teardown (hitting cancel or close)
   */
  static removeStaleSourceMetadataAction(sourceSystem?: SourceSystem<SourceSystem.Config | null, any> | null, tableNamesToKeep?: C3.Array<string | null>, refreshCache?: boolean, teardown?: boolean): UiSdlReduxAction<any>;

  /**
   * Returns the {@link selectedSourceSystemForDataPreview} from the state.
   */
  static getSelectedSourceSystemForDataPreview(state: UiSdlReduxState): SelfServiceDIAddDataSourceApplicationState | null;

  /**
   * An action set the {@link selectedSourceSystemForDataPreview}
   */
  static setSelectedSourceSystemForDataPreviewAction(sourceSystem?: SelfServiceDIAddDataSourceApplicationState | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_SOURCE_SYSTEM_FOR_DATA_PREVIEW` and sets the
   * {@link selectedSourceSystemForDataPreview} in state.
   */
  static setSelectedSourceSystemForDataPreviewReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the {@link previewAndSelectDataStepPriorState}.
   */
  static setPreviewAndSelectDataStepPriorStateAction(priorState?: any | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_PREVIEW_AND_SELECT_DATA_STEP_PRIOR_STATE` and sets the
   * {@link selectedSourceSystemForDataPreview} in state.
   */
  static setPreviewAndSelectDataStepPriorStateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieves the data from `editRemoteTypeMetaCache` at the given path.
   */
  static getEditRemoteTypeMetaFromCache(state: UiSdlReduxState, path?: C3.Array<string | null>): DataFusionUiTypeMeta | null;

  /**
   * An action to update a {@link DataFusionUiTypeMeta} in `editRemoteTypeMetaCache` based on the path provided.
   */
  static updateEditRemoteTypeMetaCacheAction(path?: C3.Array<string | null>, dataToCache?: any | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `UPDATE_EDIT_REMOTE_TYPE_META_CACHE` and set a new key value pair in
   * `editRemoteTypeMetaCache`.
   */
  static updateEditRemoteTypeMetaCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieve the names of all the {@link SourceCollection} currently in the `editRemoteTypeMetaCache`.
   */
  static getSourceCollectionNameInEditRemoteTypeMetaCache(state: UiSdlReduxState): C3.Array<string | null>;

  /**
   * Retrieves the data from `remoteTypeMetaCache` at the given path.
   */
  static getRemoteTypeMetaFromCache(state: UiSdlReduxState, path?: C3.Array<string | null>): TypeMeta | null;

  /**
   * An action to update a {@link TypeMeta} in `remoteTypeMetaCache` at the given path.
   */
  static updateRemoteTypeMetaCacheAction(path?: C3.Array<string | null>, dataToCache?: any | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `UPDATE_REMOTE_TYPE_META_CACHE` and set a new key value pair in `remoteTypeMetaCache`.
   */
  static updateRemoteTypeMetaCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set `selectedTableNameBySchema`.
   */
  static setSelectedSqlTableNameBySchemaAction(tableNameBySchema?: C3.Map<string | null, C3.Array<string | null>>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_SQL_TABLE_NAME_BY_SCHEMA` and sets `selectedTableNameBySchema`.
   */
  static setSelectedSqlTableNameBySchemaReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieve `selectedTableNameBySchema`.
   */
  static getSelectedTableNameBySchema(state: UiSdlReduxState): C3.Map<string | null, C3.Array<string | null>>;

  /**
   * An action to set queuedFiles in state
   */
  static queuedFilesUpdateAction(files?: C3.Map<string | null, any | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `QUEUED_FILES_UPDATE` and updates queuedFiles in state
   */
  static queueFilesUpdateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieves the queued files from state
   */
  static getQueuedFiles(state: UiSdlReduxState): C3.Map<string | null, any | null>;

  /**
   * An action to remove queuedFiles from state
   */
  static queuedFilesRemoveAction(fileNames?: C3.Array<string | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `QUEUED_FILES_REMOVE` and updates queuedFiles in state
   */
  static queueFilesRemoveReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to clear queuedFiles from state
   */
  static queuedFilesClearAction(): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `QUEUED_FILES_CLEAR` and clears queuedFiles from state
   */
  static queueFilesClearReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the schema name in state
   */
  static setSchemaNameAction(schemaName?: string | null, schemaType?: string | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SCHEMA_NAME` and sets the schema name in state
   */
  static setSchemaNameReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieves the schema name from state based on the schema type
   */
  static getSchemaName(state: UiSdlReduxState, schemaType?: string | null): string | null;

  /**
   * An action to set errors for the select files and schema step in state
   */
  static setSelectFilesAndCreateSchemaErrorAction(error?: string | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECT_FILES_AND_CREATE_SCHEMA_ERROR` and sets the error in state
   */
  static setSelectFilesAndCreateSchemaErrorReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the tableFromFilesFormStatus in state
   */
  static setCreateTableFromFilesFormStatusAction(formStatus?: any | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_CREATE_TABLE_FORM_FILES_FORM_STATUS` and sets in the state.
   */
  static setCreateTableFromFilesFormStatusReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the selectedFilePreview in state.
   */
  static setSelectedFilePreviewAction(selectedFilePreview?: C3.Array<Obj | null>): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `SET_SELECTED_FILE_PREVIEW` and sets selectedFilePreview in state.
   */
  static setSelectedFilePreviewReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the fileUploadSourceCollection in state.
   */
  static setFileUploadSourceCollectionAction(sourceCollection?: FileSourceCollection | null): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `SET_FILE_UPLOAD_SOURCE_COLLECTION` and sets fileUploadSourceCollection in state.
   */
  static setFileUploadSourceCollectionReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieves `fileUploadSourceCollection`
   */
  static getFileUploadSourceCollection(state: UiSdlReduxState): FileSourceCollection | null;

  /**
   * An action to set the selectedFileNameInFilesGrid in state
   */
  static selectedFileNameInFilesGridAction(fileName?: string | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_FILE_NAME_IN_FILES_GRID` and updates selectedFileNameInFilesGrid in state
   */
  static selectedFileNameInFilesGridReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the selectedSourceCollectionConfig in state
   */
  static setSelectedSourceCollectionConfigAction(selectedSourceCollectionConfig?: SourceCollection.Config | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_SOURCE_COLLECTION_CONFIG` and updates selectedSourceCollectionConfig in state
   */
  static setSelectedSourceCollectionConfigReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the selectedBucketFileNames in state
   */
  static setSelectedBucketFileNamesAction(selectedBucketFileNames?: C3.Array<string | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_BUCKET_FILE_NAMES` and updates the bucket list files in state
   */
  static setSelectedBucketFileNamesReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the selectedPathForExternalFileSystem in state
   */
  static setSelectedPathForExternalFileSystemAction(selectedPathForExternalFileSystem?: string | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_PATH_FOR_EXTERNAL_FILE_SYSTEM` and updates the selected path in state
   */
  static setSelectedPathForExternalFileSystemReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the {@link #selectedPathForExternalFileSystem} from the state.
   */
  static getSelectedPathForExternalFileSystem(state: UiSdlReduxState): string | null;

  /**
   * An action to set the selectFilePathError in state
   */
  static setSelectFilePathErrorAction(selectFilePathError?: UiSdlInlineNotification | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECT_FILE_PATH_ERROR` and updates the error message in state
   */
  static setSelectFilePathErrorReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the canonicalSelectionError in state
   */
  static setCanonicalSelectionErrorAction(canonicalSelectionError?: UiSdlInlineNotification | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_CANONICAL_SELECTION_ERROR` and updates the error message in state
   */
  static setCanonicalSelectionErrorReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the filesFromSelectedUrl in state
   */
  static setFilesFromSelectedUrlAction(filesFromSelectedUrl?: C3.Array<string | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_FILES_FROM_SELECTED_URL` and updates the list of files in state
   */
  static setFilesFromSelectedUrlReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the selectedFileDetail in state
   */
  static setSelectedFileDetailAction(selectedFileDetail?: Obj | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_FILE_DETAIL` and updates the selected file detail in state
   */
  static setSelectedFileDetailReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the transforms in state
   */
  static setSourceToTargetTransformsAction(sourceToTargetTransforms?: C3.Map<string | null, Transform | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SOURCE_TO_TARGET_TRANSFORMS` and sets transforms in state, overwriting any previous state
   */
  static setSourceToTargetTransformsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Adds a given transfrom to the current obj
   */
  static updateSourceToTargetTransformsAction(sourceToTargetTransform?: Transform | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `UPDATE_SOURCE_TO_TARGET_TRANSFORMS` and updates transform in state
   */
  static updateSourceToTargetTransformsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the {@link SelfServiceDIAddDataSourceApplicationState#sourceToTargetTransforms} from the state.
   */
  static getSourceToTargetTransforms(state: UiSdlReduxState): C3.Map<string | null, Transform | null>;

  /**
   * Returns the reqeusted sourceToTargetTransforms from the state.
   */
  static getSourceToTargetTransform(state: UiSdlReduxState, transformName?: string | null): Transform | null;

  /**
   * An action to set the selected transform in state
   */
  static setSelectedSourceToTransformNameAction(selectedSourceToTransformName?: string | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_SOURCE_TO_TARGET_TRANSFORM_NAME` and sets th transform in state
   */
  static setSelectedSourceToTransformNameReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the {@link selectedSourceToTransformName} from the state.
   */
  static getSelectedSourceToTransformName(state: UiSdlReduxState): string | null;

  /**
   * helper function that returns the selected SourceToTransform object from the state.
   */
  static getSelectedSourceToTransformObject(state: UiSdlReduxState): Transform | null;

  /**
   * An action to set the selectedFileDetail in state
   */
  static setSelectedPartitionForDataPreviewAction(selectedPartitionForDataPreview?: Obj | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_PARTITION_FOR_DATA_PREVIEW` and updates the selected shard in state
   */
  static setSelectedPartitionForDataPreviewReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the {@link selectedPartitionForDataPreview} from the state.
   */
  static getSelectedPartitionForDataPreview(state: UiSdlReduxState): Obj | null;

  /**
   * An action to set the selectedFileDetail in state
   */
  static setStreamsAvailableAction(streamsAvailable?: Obj | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_STREAMS_AVAILABLE` and updates the streams in state
   */
  static setstreamsAvailableReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the `streamTablePreviewData`
   */
  static setStreamTablePreviewDataAction(previewData?: any | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_STREAM_TABLE_PREVIEW_DATA` and sets the `streamTablePreviewData` in state.
   */
  static setStreamTablePreviewDataReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the {@link streamTablePreviewData} from the state.
   */
  static getStreamTablePreviewData(state: UiSdlReduxState): Obj | null;

  /**
   * An action to set the selected shard data in state
   */
  static setSelectedShardRecordAction(selectedShardRecord?: Obj | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_SHARD_RECORD` and updates the selected shard in state
   */
  static setSelectedShardRecordReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the {@link selectedShardRecord} from the state.
   */
  static getSelectedShardRecord(state: UiSdlReduxState): Obj | null;

  /**
   * An action to set the canonicalsAvailable in state
   */
  static setCanonicalsAvailableAction(canonicalsAvailable?: Obj | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_CANONICALS_AVAILABLE` and updates the streams in state
   */
  static setCanonicalsAvailableReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the transform in state
   */
  static setSourcesTransformObjectAction(sourcesTransformObject?: Obj | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SOURCES_TRANSFORM_OBJECT` and updates transform in state
   */
  static setSourcesTransformObjectReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the first time render for target preview in state
   */
  static setIsFirstTimeRenderForTargetPreviewAction(isFirstTimeRenderForTargetPreview?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_IS_FIRST_TIME_RENDER_FOR_TARGET_PREVIEW` and updates the state
   */
  static setIsFirstTimeRenderForTargetPreviewReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the visited tree nodes in target preview in state
   */
  static setVisitedTressNodesInTargetPreviewAction(visitedTressNodesInTargetPreview?: C3.Array<string | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_VISITED_TRESS_NODES_IN_TARGET_PREVIEW` and updates the state
   */
  static setVisitedTressNodesInTargetPreviewReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the integrateSourcesSidePanelOpenClose in state.
   */
  static setIntegrateSourcesSidePanelOpenCloseAction(integrateSourcesSidePanelOpenClose?: boolean): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `SET_INTEGRATE_SOURCES_SIDE_PANEL` and sets integrateSourcesSidePanelOpenClose in state.
   */
  static setIntegrateSourcesSidePanelOpenCloseReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the `mountQuery` in state.
   */
  static setMountQueryAction(query?: string | null): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `SET_MOUNT_QUERY` and sets mountQuery in state.
   */
  static setMountQueryReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieves `mountQuery`
   */
  static getMountQuery(state: UiSdlReduxState): string | null;

  /**
   * An action to set the integrateSourcesGraphToTransformer in state.
   */
  static setIntegrateSourcesGraphToTransformerAction(integrateSourcesGraphToTransformer?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_INTEGRATE_SOURCES_GRAPH_TO_TRANSFORMER` and sets integrateSourcesGraphToTransformer in state.
   */
  static setIntegrateSourcesGraphToTransformerReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the integrateSourcesTypeOfTransform in state.
   */
  static setIntegrateSourcesTypeOfTransformAction(integrateSourcesTypeOfTransform?: string | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_INTEGRATE_SOURCES_TYPE_OF_TRANSFORM` and sets integrateSourcesTypeOfTransform in state.
   */
  static setIntegrateSourcesTypeOfTransformReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the {@link #integrateSourcesTypeOfTransform} from the state.
   */
  static getTypeOfTransform(state: UiSdlReduxState): string | null;

  /**
   * An action to set the selectedNodeFromTheGraph in state.
   */
  static setSelectedNodeFromTheGraphAction(selectedNodeFromTheGraph?: string | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_SELECTED_NODE_FROM_THE_GRAPH` and sets selectedNodeFromTheGraph in state.
   */
  static setSelectedNodeFromTheGraphReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the CDC config for a specific source collection
   */
  static setCdcConfigForSourceCollectionAction(sourceCollectionName?: string | null, cdcConfig?: SelfServiceDICdcConfig | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_CDC_CONFIG_FOR_SOURCE_COLLECTION` and sets cdcConfig for a specific source collection
   */
  static setCdcConfigForSourceCollectionReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the CDC configuration for a specific source collection from the state
   */
  static getCdcConfigForSourceCollection(state: UiSdlReduxState, sourceCollectionName?: string | null): any | null;

  /**
   * Returns all CDC configurations from the state
   */
  static getAllCdcConfigs(state: UiSdlReduxState): C3.Map<string | null, SelfServiceDICdcConfig | null>;

  /**
   * An action to clear all CDC configuration cache
   */
  static clearCdcConfigCacheAction(): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `CLEAR_CDC_CONFIG_CACHE` and clears all CDC configuration cache
   */
  static clearCdcConfigCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the `transformFilterTypeMeta` in state
   */
  static setTransformFilterTypeMetaAction(canonicalDetails?: TypeMeta | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_TRANSFORM_FILTER_TYPE_META` and sets `transformFilterTypeMeta` in state
   */
  static setTransformFilterTypeMetaReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Retrieves the `transformFilterTypeMeta` from state
   */
  static getTransformFilterTypeMeta(state: UiSdlReduxState): TypeMeta | null;

  /**
   * An action to clear the `transformFilterTypeMeta` from state
   */
  static clearTransformFilterTypeMetaAction(): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `CLEAR_TRANSFORM_FILTER_TYPE_META` and clears `transformFilterTypeMeta` from state
   */
  static clearTransformFilterTypeMetaReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the displayFilterPreviewTable in state.
   */
  static setDisplayFilterPreviewTableAction(displayFilterPreviewTable?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_DISPLAY_FILTER_PREVIEW_TABLE` and sets displayFilterPreviewTable in state.
   */
  static setDisplayFilterPreviewTableReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the {@link displayFilterPreviewTable} from the state.
   */
  static getDisplayFilterPreviewTable(state: UiSdlReduxState): boolean;

  /**
   * Retrieves the source fields from `filterConditionSourceFieldsCache` for the given source name.
   * Returns the same type as TypeMeta.declaredFieldTypes.
   */
  static getFilterConditionSourceFieldsCache(state: UiSdlReduxState, sourceName?: string | null): C3.Array<DeclaredFieldType | null>;

  /**
   * An action to set the source fields in `filterConditionSourceFieldsCache` for a specific source name.
   * The sourceFields should be of the same type as TypeMeta.declaredFieldTypes.
   */
  static setFilterConditionSourceFieldsCacheAction(sourceName?: string | null, sourceFields?: C3.Array<DeclaredFieldType | null>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_FILTER_CONDITION_SOURCE_FIELDS_CACHE` and sets the source fields in
   * `filterConditionSourceFieldsCache`.
   */
  static setFilterConditionSourceFieldsCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the automapRunning state
   */
  static setAutomapRunningAction(automapRunning?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_AUTOMAP_RUNNING` and sets automapRunning in state
   */
  static setAutomapRunningReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;
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
