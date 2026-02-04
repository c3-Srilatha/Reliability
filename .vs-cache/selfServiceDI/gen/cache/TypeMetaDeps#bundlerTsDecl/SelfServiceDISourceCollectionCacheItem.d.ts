export interface SelfServiceDISourceCollectionCacheItem {

  readonly sourceCollection?: SourceCollection<SourceCollection.Config | null> | null;
  withSourceCollection(sourceCollection: ISourceCollection<SourceCollection.Config | null> | null): SelfServiceDISourceCollectionCacheItem;

  readonly tableExistResult?: any | null;
  withTableExistResult(tableExistResult: any | null): SelfServiceDISourceCollectionCacheItem;

  readonly target?: string | null;
  withTarget(target: string | null): SelfServiceDISourceCollectionCacheItem;

  readonly status?: string | null;
  withStatus(status: string | null): SelfServiceDISourceCollectionCacheItem;

  readonly config?: SourceCollection.Config | null;
  withConfig(config: ISourceCollection.Config | null): SelfServiceDISourceCollectionCacheItem;

  readonly dataIssue?: C3.Array<DataIssue.SourceCollection | null>;
  withDataIssue(dataIssue: C3.Array<DataIssue.SourceCollection | null> | Array<IDataIssue.SourceCollection | null>): SelfServiceDISourceCollectionCacheItem;

  readonly cdcConfig?: SelfServiceDICdcConfig | null;
  withCdcConfig(cdcConfig: ISelfServiceDICdcConfig | null): SelfServiceDISourceCollectionCacheItem;
}

