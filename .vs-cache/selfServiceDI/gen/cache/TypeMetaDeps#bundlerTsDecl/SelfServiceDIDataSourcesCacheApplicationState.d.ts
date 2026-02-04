export interface SelfServiceDIDataSourcesCacheApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDIDataSourcesCacheApplicationState;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDIDataSourcesCacheApplicationState;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDIDataSourcesCacheApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDIDataSourcesCacheApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDIDataSourcesCacheApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDIDataSourcesCacheApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDIDataSourcesCacheApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): SelfServiceDIDataSourcesCacheApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): SelfServiceDIDataSourcesCacheApplicationState;

  readonly sourceSystemsCache?: C3.Map<string | null, SelfServiceDISourceSystemCacheItem | null>;
  withSourceSystemsCache(sourceSystemsCache: C3.Map<string | null, SelfServiceDISourceSystemCacheItem | null> | {[key: string | null]: ISelfServiceDISourceSystemCacheItem | null}): SelfServiceDIDataSourcesCacheApplicationState;

  readonly sourceCollectionsCache?: C3.Map<string | null, SelfServiceDISourceCollectionCacheItem | null>;
  withSourceCollectionsCache(sourceCollectionsCache: C3.Map<string | null, SelfServiceDISourceCollectionCacheItem | null> | {[key: string | null]: ISelfServiceDISourceCollectionCacheItem | null}): SelfServiceDIDataSourcesCacheApplicationState;

  readonly loadingState?: SelfServiceDIDataSourcesCacheLoadingState | null;
  withLoadingState(loadingState: ISelfServiceDIDataSourcesCacheLoadingState | null): SelfServiceDIDataSourcesCacheApplicationState;

  readonly tableSchemaCache?: C3.Map<string | null, SelfServiceDITableSchemaCacheItem | null>;
  withTableSchemaCache(tableSchemaCache: C3.Map<string | null, SelfServiceDITableSchemaCacheItem | null> | {[key: string | null]: ISelfServiceDITableSchemaCacheItem | null}): SelfServiceDIDataSourcesCacheApplicationState;

  readonly tableSchemaCacheFetched?: boolean;
  withTableSchemaCacheFetched(tableSchemaCacheFetched: boolean): SelfServiceDIDataSourcesCacheApplicationState;

  readonly soureFilesCache?: C3.Map<string | null, SelfServiceDISourceFileCacheItem | null>;
  withSoureFilesCache(soureFilesCache: C3.Map<string | null, SelfServiceDISourceFileCacheItem | null> | {[key: string | null]: ISelfServiceDISourceFileCacheItem | null}): SelfServiceDIDataSourcesCacheApplicationState;

  readonly fileUploadFirstLoadMap?: C3.Map<string | null, boolean>;
  withFileUploadFirstLoadMap(fileUploadFirstLoadMap: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): SelfServiceDIDataSourcesCacheApplicationState;

  readonly transformCache?: C3.Map<string | null, Transform | null>;
  withTransformCache(transformCache: C3.Map<string | null, Transform | null> | {[key: string | null]: ITransform | null}): SelfServiceDIDataSourcesCacheApplicationState;

  readonly transformCacheFetched?: boolean;
  withTransformCacheFetched(transformCacheFetched: boolean): SelfServiceDIDataSourcesCacheApplicationState;

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
}

