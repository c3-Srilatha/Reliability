export interface UiSdlSwitchComponentContainer {

  readonly condition?: UiSdlRenderSwitchCondition | null;
  withCondition(condition: IUiSdlRenderSwitchCondition | null): UiSdlSwitchComponentContainer;

  readonly componentsToRender?: C3.Map<any, UiSdlComponentContainer | null>;
  withComponentsToRender(componentsToRender: C3.Map<any, UiSdlComponentContainer | null> | {[key: any]: IUiSdlComponentContainer | null}): UiSdlSwitchComponentContainer;

  readonly fallbackComponent?: UiSdlComponentContainer | null;
  withFallbackComponent(fallbackComponent: IUiSdlComponentContainer | null): UiSdlSwitchComponentContainer;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSwitchComponentContainer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSwitchComponentContainer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSwitchComponentContainer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSwitchComponentContainer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSwitchComponentContainer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSwitchComponentContainer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSwitchComponentContainer;
}

