export interface SelfServiceDISourceSystemCacheItem {

  readonly sourceSystem?: SourceSystem<SourceSystem.Config | null, any> | null;
  withSourceSystem(sourceSystem: ISourceSystem<SourceSystem.Config | null, any> | null): SelfServiceDISourceSystemCacheItem;

  readonly configLoading?: boolean;
  withConfigLoading(configLoading: boolean): SelfServiceDISourceSystemCacheItem;

  readonly pingLoading?: boolean;
  withPingLoading(pingLoading: boolean): SelfServiceDISourceSystemCacheItem;

  readonly sourceCollectionsLoading?: boolean;
  withSourceCollectionsLoading(sourceCollectionsLoading: boolean): SelfServiceDISourceSystemCacheItem;

  readonly sourceSystemConfig?: SourceSystem.Config | null;
  withSourceSystemConfig(sourceSystemConfig: ISourceSystem.Config | null): SelfServiceDISourceSystemCacheItem;

  readonly pingResult?: PingResult | null;
  withPingResult(pingResult: IPingResult | null): SelfServiceDISourceSystemCacheItem;

  readonly credentialsForRootUrlUnavailable?: boolean;
  withCredentialsForRootUrlUnavailable(credentialsForRootUrlUnavailable: boolean): SelfServiceDISourceSystemCacheItem;
}

