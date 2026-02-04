export interface SelfServiceDIDataSourcesCacheLoadingState {

  readonly allSourceSystems?: boolean;
  withAllSourceSystems(allSourceSystems: boolean): SelfServiceDIDataSourcesCacheLoadingState;

  readonly allSourceCollections?: boolean;
  withAllSourceCollections(allSourceCollections: boolean): SelfServiceDIDataSourcesCacheLoadingState;
}

