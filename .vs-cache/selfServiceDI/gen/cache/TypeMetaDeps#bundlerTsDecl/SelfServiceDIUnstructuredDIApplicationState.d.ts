export interface SelfServiceDIUnstructuredDIApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDIUnstructuredDIApplicationState;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDIUnstructuredDIApplicationState;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDIUnstructuredDIApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDIUnstructuredDIApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDIUnstructuredDIApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDIUnstructuredDIApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDIUnstructuredDIApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): SelfServiceDIUnstructuredDIApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): SelfServiceDIUnstructuredDIApplicationState;

  readonly selectedNodeId?: string | null;
  withSelectedNodeId(selectedNodeId: string | null): SelfServiceDIUnstructuredDIApplicationState;

  readonly selectedConfiguredConnector?: any | null;
  withSelectedConfiguredConnector(selectedConfiguredConnector: any | null): SelfServiceDIUnstructuredDIApplicationState;

  readonly taggingCategoriesCache?: C3.Map<string | null, any>;
  withTaggingCategoriesCache(taggingCategoriesCache: C3.Map<string | null, any> | {[key: string | null]: any}): SelfServiceDIUnstructuredDIApplicationState;

  readonly completionClientsCache?: C3.Map<string | null, any>;
  withCompletionClientsCache(completionClientsCache: C3.Map<string | null, any> | {[key: string | null]: any}): SelfServiceDIUnstructuredDIApplicationState;
}

