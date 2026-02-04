export interface CurrentAppInfoApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): CurrentAppInfoApplicationState;

  readonly id?: string | null;
  withId(id: string | null): CurrentAppInfoApplicationState;

  readonly name?: string | null;
  withName(name: string | null): CurrentAppInfoApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): CurrentAppInfoApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): CurrentAppInfoApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): CurrentAppInfoApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): CurrentAppInfoApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): CurrentAppInfoApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): CurrentAppInfoApplicationState;

  readonly currentAppInfo?: any | null;
  withCurrentAppInfo(currentAppInfo: any | null): CurrentAppInfoApplicationState;

  readonly packageDependencies?: C3.Map<string | null, Pkg | null> | null;
  withPackageDependencies(packageDependencies: IC3.Map<string | null, Pkg | null> | null): CurrentAppInfoApplicationState;
}

