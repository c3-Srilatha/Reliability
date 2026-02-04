export interface UiSdlSwitchRenderer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSwitchRenderer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSwitchRenderer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSwitchRenderer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSwitchRenderer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSwitchRenderer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSwitchRenderer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSwitchRenderer;

  readonly condition?: UiSdlRenderSwitchCondition | null;
  withCondition(condition: IUiSdlRenderSwitchCondition | null): UiSdlSwitchRenderer;

  readonly componentsToRender?: C3.Map<any, UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withComponentsToRender(componentsToRender: C3.Map<any, UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | {[key: any]: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null}): UiSdlSwitchRenderer;

  readonly fallbackComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withFallbackComponent(fallbackComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlSwitchRenderer;
}

