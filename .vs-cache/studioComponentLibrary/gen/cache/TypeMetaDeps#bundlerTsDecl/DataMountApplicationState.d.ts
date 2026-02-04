export interface DataMountApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): DataMountApplicationState;

  readonly id?: string | null;
  withId(id: string | null): DataMountApplicationState;

  readonly name?: string | null;
  withName(name: string | null): DataMountApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): DataMountApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): DataMountApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): DataMountApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): DataMountApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): DataMountApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): DataMountApplicationState;

  readonly dataLoadMountPath?: string | null;
  withDataLoadMountPath(dataLoadMountPath: string | null): DataMountApplicationState;
}

