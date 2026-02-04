export interface SelfServiceDITableSchemaCacheItem {

  readonly sourceCollectionName?: string | null;
  withSourceCollectionName(sourceCollectionName: string | null): SelfServiceDITableSchemaCacheItem;

  readonly fileNames?: C3.Array<string | null>;
  withFileNames(fileNames: C3.Array<string | null> | Array<string | null>): SelfServiceDITableSchemaCacheItem;

  readonly localSourceCollection?: any | null;
  withLocalSourceCollection(localSourceCollection: any | null): SelfServiceDITableSchemaCacheItem;

  readonly localSource?: TypeMeta | null;
  withLocalSource(localSource: ITypeMeta | null): SelfServiceDITableSchemaCacheItem;

  readonly remoteSource?: TypeMeta | null;
  withRemoteSource(remoteSource: ITypeMeta | null): SelfServiceDITableSchemaCacheItem;

  readonly location?: string | null;
  withLocation(location: string | null): SelfServiceDITableSchemaCacheItem;

  readonly localSourceMismatchAgainstRemote?: C3.Map<string | null, string | null>;
  withLocalSourceMismatchAgainstRemote(localSourceMismatchAgainstRemote: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): SelfServiceDITableSchemaCacheItem;

  readonly schemaTypeMeta?: DataFusionUiTypeMeta | null;
  withSchemaTypeMeta(schemaTypeMeta: IDataFusionUiTypeMeta | null): SelfServiceDITableSchemaCacheItem;

  readonly failedToLoad?: boolean;
  withFailedToLoad(failedToLoad: boolean): SelfServiceDITableSchemaCacheItem;
}

