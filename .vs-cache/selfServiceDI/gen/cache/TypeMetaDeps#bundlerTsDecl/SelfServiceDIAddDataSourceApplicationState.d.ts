export interface SelfServiceDIAddDataSourceApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDIAddDataSourceApplicationState;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDIAddDataSourceApplicationState;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDIAddDataSourceApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDIAddDataSourceApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDIAddDataSourceApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDIAddDataSourceApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDIAddDataSourceApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): SelfServiceDIAddDataSourceApplicationState;

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

  readonly sqlTablePreviewData?: C3.Array<C3.Map<string | null, SelfServiceDICell | null>>;
  withSqlTablePreviewData(sqlTablePreviewData: C3.Array<C3.Map<string | null, SelfServiceDICell | null>> | Array<C3.Map<string | null, SelfServiceDICell | null> | {[key: string | null]: ISelfServiceDICell | null}>): SelfServiceDIAddDataSourceApplicationState;

  readonly previewRemoteDataError?: UiSdlInlineNotification | null;
  withPreviewRemoteDataError(previewRemoteDataError: IUiSdlInlineNotification | null): SelfServiceDIAddDataSourceApplicationState;

  readonly sqlConnectionsCache?: C3.Map<string | null, SelfServiceDISqlConnectionCacheItem | null>;
  withSqlConnectionsCache(sqlConnectionsCache: C3.Map<string | null, SelfServiceDISqlConnectionCacheItem | null> | {[key: string | null]: ISelfServiceDISqlConnectionCacheItem | null}): SelfServiceDIAddDataSourceApplicationState;

  readonly remoteDataPreviewTypeMeta?: TypeMeta | null;
  withRemoteDataPreviewTypeMeta(remoteDataPreviewTypeMeta: ITypeMeta | null): SelfServiceDIAddDataSourceApplicationState;

  readonly currentConnectStatus?: PingResult | null;
  withCurrentConnectStatus(currentConnectStatus: IPingResult | null): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedSourceSystemForDataPreview?: SelfServiceDIAddDataSourceApplicationState | null;
  withSelectedSourceSystemForDataPreview(selectedSourceSystemForDataPreview: ISelfServiceDIAddDataSourceApplicationState | null): SelfServiceDIAddDataSourceApplicationState;

  readonly previewAndSelectDataStepPriorState?: any | null;
  withPreviewAndSelectDataStepPriorState(previewAndSelectDataStepPriorState: any | null): SelfServiceDIAddDataSourceApplicationState;

  readonly editRemoteTypeMetaCache?: C3.Map<string | null, DataFusionUiTypeMeta | null>;
  withEditRemoteTypeMetaCache(editRemoteTypeMetaCache: C3.Map<string | null, DataFusionUiTypeMeta | null> | {[key: string | null]: IDataFusionUiTypeMeta | null}): SelfServiceDIAddDataSourceApplicationState;

  readonly remoteTypeMetaCache?: C3.Map<string | null, TypeMeta | null>;
  withRemoteTypeMetaCache(remoteTypeMetaCache: C3.Map<string | null, TypeMeta | null> | {[key: string | null]: ITypeMeta | null}): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedTableNameBySchema?: C3.Map<string | null, C3.Array<string | null>>;
  withSelectedTableNameBySchema(selectedTableNameBySchema: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): SelfServiceDIAddDataSourceApplicationState;

  readonly queuedFiles?: C3.Map<string | null, any | null>;
  withQueuedFiles(queuedFiles: C3.Map<string | null, any | null> | {[key: string | null]: any | null}): SelfServiceDIAddDataSourceApplicationState;

  readonly sourceName?: string | null;
  withSourceName(sourceName: string | null): SelfServiceDIAddDataSourceApplicationState;

  readonly targetName?: string | null;
  withTargetName(targetName: string | null): SelfServiceDIAddDataSourceApplicationState;

  readonly selectFilesAndCreateSchemaError?: string | null;
  withSelectFilesAndCreateSchemaError(selectFilesAndCreateSchemaError: string | null): SelfServiceDIAddDataSourceApplicationState;

  readonly tableFromFilesFormStatus?: Obj | null;
  withTableFromFilesFormStatus(tableFromFilesFormStatus: IObj | null): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedFilePreview?: C3.Array<Obj | null>;
  withSelectedFilePreview(selectedFilePreview: C3.Array<Obj | null> | Array<IObj | null>): SelfServiceDIAddDataSourceApplicationState;

  readonly fileUploadSourceCollection?: FileSourceCollection | null;
  withFileUploadSourceCollection(fileUploadSourceCollection: IFileSourceCollection | null): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedFileNameInFilesGrid?: string | null;
  withSelectedFileNameInFilesGrid(selectedFileNameInFilesGrid: string | null): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedSourceCollectionConfig?: SourceCollection.Config | null;
  withSelectedSourceCollectionConfig(selectedSourceCollectionConfig: ISourceCollection.Config | null): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedBucketFileNames?: C3.Array<string | null>;
  withSelectedBucketFileNames(selectedBucketFileNames: C3.Array<string | null> | Array<string | null>): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedPathForExternalFileSystem?: string | null;
  withSelectedPathForExternalFileSystem(selectedPathForExternalFileSystem: string | null): SelfServiceDIAddDataSourceApplicationState;

  readonly selectFilePathError?: UiSdlInlineNotification | null;
  withSelectFilePathError(selectFilePathError: IUiSdlInlineNotification | null): SelfServiceDIAddDataSourceApplicationState;

  readonly canonicalSelectionError?: UiSdlInlineNotification | null;
  withCanonicalSelectionError(canonicalSelectionError: IUiSdlInlineNotification | null): SelfServiceDIAddDataSourceApplicationState;

  readonly filesFromSelectedUrl?: C3.Array<string | null>;
  withFilesFromSelectedUrl(filesFromSelectedUrl: C3.Array<string | null> | Array<string | null>): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedFileDetail?: Obj | null;
  withSelectedFileDetail(selectedFileDetail: IObj | null): SelfServiceDIAddDataSourceApplicationState;

  readonly sourceToTargetTransforms?: C3.Map<string | null, Transform | null>;
  withSourceToTargetTransforms(sourceToTargetTransforms: C3.Map<string | null, Transform | null> | {[key: string | null]: ITransform | null}): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedSourceToTransformName?: string | null;
  withSelectedSourceToTransformName(selectedSourceToTransformName: string | null): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedPartitionForDataPreview?: Obj | null;
  withSelectedPartitionForDataPreview(selectedPartitionForDataPreview: IObj | null): SelfServiceDIAddDataSourceApplicationState;

  readonly streamsAvailable?: Obj | null;
  withStreamsAvailable(streamsAvailable: IObj | null): SelfServiceDIAddDataSourceApplicationState;

  readonly streamTablePreviewData?: any | null;
  withStreamTablePreviewData(streamTablePreviewData: any | null): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedShardRecord?: Obj | null;
  withSelectedShardRecord(selectedShardRecord: IObj | null): SelfServiceDIAddDataSourceApplicationState;

  readonly canonicalsAvailable?: C3.Array<PresentationalTreeNode | null>;
  withCanonicalsAvailable(canonicalsAvailable: C3.Array<PresentationalTreeNode | null> | Array<IPresentationalTreeNode | null>): SelfServiceDIAddDataSourceApplicationState;

  readonly sourcesTransformObject?: Obj | null;
  withSourcesTransformObject(sourcesTransformObject: IObj | null): SelfServiceDIAddDataSourceApplicationState;

  readonly isFirstTimeRenderForTargetPreview?: boolean;
  withIsFirstTimeRenderForTargetPreview(isFirstTimeRenderForTargetPreview: boolean): SelfServiceDIAddDataSourceApplicationState;

  readonly visitedTressNodesInTargetPreview?: C3.Array<string | null>;
  withVisitedTressNodesInTargetPreview(visitedTressNodesInTargetPreview: C3.Array<string | null> | Array<string | null>): SelfServiceDIAddDataSourceApplicationState;

  readonly integrateSourcesSidePanelOpenClose?: boolean;
  withIntegrateSourcesSidePanelOpenClose(integrateSourcesSidePanelOpenClose: boolean): SelfServiceDIAddDataSourceApplicationState;

  readonly mountQuery?: string | null;
  withMountQuery(mountQuery: string | null): SelfServiceDIAddDataSourceApplicationState;

  readonly integrateSourcesGraphToTransformer?: boolean;
  withIntegrateSourcesGraphToTransformer(integrateSourcesGraphToTransformer: boolean): SelfServiceDIAddDataSourceApplicationState;

  readonly integrateSourcesTypeOfTransform?: string | null;
  withIntegrateSourcesTypeOfTransform(integrateSourcesTypeOfTransform: string | null): SelfServiceDIAddDataSourceApplicationState;

  readonly selectedNodeFromTheGraph?: string | null;
  withSelectedNodeFromTheGraph(selectedNodeFromTheGraph: string | null): SelfServiceDIAddDataSourceApplicationState;

  readonly cdcConfigCache?: C3.Map<string | null, SelfServiceDICdcConfig | null>;
  withCdcConfigCache(cdcConfigCache: C3.Map<string | null, SelfServiceDICdcConfig | null> | {[key: string | null]: ISelfServiceDICdcConfig | null}): SelfServiceDIAddDataSourceApplicationState;

  readonly transformFilterTypeMeta?: TypeMeta | null;
  withTransformFilterTypeMeta(transformFilterTypeMeta: ITypeMeta | null): SelfServiceDIAddDataSourceApplicationState;

  readonly displayFilterPreviewTable?: boolean;
  withDisplayFilterPreviewTable(displayFilterPreviewTable: boolean): SelfServiceDIAddDataSourceApplicationState;

  readonly filterConditionSourceFieldsCache?: C3.Map<string | null, C3.Array<DeclaredFieldType | null>>;
  withFilterConditionSourceFieldsCache(filterConditionSourceFieldsCache: C3.Map<string | null, C3.Array<DeclaredFieldType | null>> | {[key: string | null]: C3.Array<DeclaredFieldType | null> | Array<IDeclaredFieldType | null>}): SelfServiceDIAddDataSourceApplicationState;

  readonly automapRunning?: boolean;
  withAutomapRunning(automapRunning: boolean): SelfServiceDIAddDataSourceApplicationState;
}

