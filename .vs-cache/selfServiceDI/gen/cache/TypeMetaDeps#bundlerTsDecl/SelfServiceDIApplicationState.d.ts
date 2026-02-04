export interface SelfServiceDIApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDIApplicationState;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDIApplicationState;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDIApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDIApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDIApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDIApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDIApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): SelfServiceDIApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): SelfServiceDIApplicationState;

  readonly dataLoadMountPath?: string | null;
  withDataLoadMountPath(dataLoadMountPath: string | null): SelfServiceDIApplicationState;

  readonly rootPkg?: string | null;
  withRootPkg(rootPkg: string | null): SelfServiceDIApplicationState;

  readonly persistableKeywords?: C3.Array<string | null>;
  withPersistableKeywords(persistableKeywords: C3.Array<string | null> | Array<string | null>): SelfServiceDIApplicationState;

  readonly persistableSchemaNames?: C3.Array<string | null>;
  withPersistableSchemaNames(persistableSchemaNames: C3.Array<string | null> | Array<string | null>): SelfServiceDIApplicationState;

  readonly reservedTypeNames?: C3.Set<string | null>;
  withReservedTypeNames(reservedTypeNames: C3.Set<string | null> | Array<string | null>): SelfServiceDIApplicationState;

  readonly selectedSourceSystemCacheItem?: SelfServiceDISourceSystemCacheItem | null;
  withSelectedSourceSystemCacheItem(selectedSourceSystemCacheItem: ISelfServiceDISourceSystemCacheItem | null): SelfServiceDIApplicationState;

  readonly selectedSourceCollectionCacheItem?: SelfServiceDISourceCollectionCacheItem | null;
  withSelectedSourceCollectionCacheItem(selectedSourceCollectionCacheItem: ISelfServiceDISourceCollectionCacheItem | null): SelfServiceDIApplicationState;

  readonly selectedDataSourcePreviewTypeMeta?: TypeMeta | null;
  withSelectedDataSourcePreviewTypeMeta(selectedDataSourcePreviewTypeMeta: ITypeMeta | null): SelfServiceDIApplicationState;

  readonly selectedDataSource?: string | null;
  withSelectedDataSource(selectedDataSource: string | null): SelfServiceDIApplicationState;

  readonly previewSourceDataErrors?: C3.Array<UiSdlInlineNotification | null>;
  withPreviewSourceDataErrors(previewSourceDataErrors: C3.Array<UiSdlInlineNotification | null> | Array<IUiSdlInlineNotification | null>): SelfServiceDIApplicationState;

  readonly selectedInlineNotification?: Obj | null;
  withSelectedInlineNotification(selectedInlineNotification: IObj | null): SelfServiceDIApplicationState;

  readonly schemaTabInlineNotification?: UiSdlInlineNotification | null;
  withSchemaTabInlineNotification(schemaTabInlineNotification: IUiSdlInlineNotification | null): SelfServiceDIApplicationState;

  readonly shouldRedirectToSchemaTab?: boolean;
  withShouldRedirectToSchemaTab(shouldRedirectToSchemaTab: boolean): SelfServiceDIApplicationState;

  readonly selectedTableSchemaCacheItem?: SelfServiceDITableSchemaCacheItem | null;
  withSelectedTableSchemaCacheItem(selectedTableSchemaCacheItem: ISelfServiceDITableSchemaCacheItem | null): SelfServiceDIApplicationState;

  readonly deletedSourceFiles?: C3.Map<string | null, C3.Array<string | null>>;
  withDeletedSourceFiles(deletedSourceFiles: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): SelfServiceDIApplicationState;

  readonly expressionEngineFunctions?: any | null;
  withExpressionEngineFunctions(expressionEngineFunctions: any | null): SelfServiceDIApplicationState;

  readonly currentDiagramId?: string | null;
  withCurrentDiagramId(currentDiagramId: string | null): SelfServiceDIApplicationState;

  readonly dataConnectorsConnectionConfiguration?: C3.Map<string | null, any | null>;
  withDataConnectorsConnectionConfiguration(dataConnectorsConnectionConfiguration: C3.Map<string | null, any | null> | {[key: string | null]: any | null}): SelfServiceDIApplicationState;

  readonly fileSystemsMountsOptions?: C3.Map<string | null, any>;
  withFileSystemsMountsOptions(fileSystemsMountsOptions: C3.Map<string | null, any> | {[key: string | null]: any}): SelfServiceDIApplicationState;

  readonly dataConnectorConfigFormData?: C3.Map<string | null, any>;
  withDataConnectorConfigFormData(dataConnectorConfigFormData: C3.Map<string | null, any> | {[key: string | null]: any}): SelfServiceDIApplicationState;
}

