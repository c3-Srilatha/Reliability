export interface UiSdlSwitchRendererReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSwitchRendererReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSwitchRendererReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSwitchRendererReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSwitchRendererReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSwitchRendererReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSwitchRendererReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSwitchRendererReact;

  readonly condition?: UiSdlRenderSwitchCondition | null;
  withCondition(condition: IUiSdlRenderSwitchCondition | null): UiSdlSwitchRendererReact;

  readonly componentsToRender?: C3.Map<any, UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withComponentsToRender(componentsToRender: C3.Map<any, UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | {[key: any]: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null}): UiSdlSwitchRendererReact;

  readonly fallbackComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withFallbackComponent(fallbackComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlSwitchRendererReact;
}

