export interface UiSdlSidePanelContainer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSidePanelContainer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSidePanelContainer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSidePanelContainer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSidePanelContainer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSidePanelContainer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSidePanelContainer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSidePanelContainer;

  readonly sidePanel?: UiSdlAlignedComponentRef<UiSdlSidePanel | null> | null;
  withSidePanel(sidePanel: IUiSdlAlignedComponentRef<UiSdlSidePanel | null> | null): UiSdlSidePanelContainer;

  readonly child?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withChild(child: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlSidePanelContainer;
}

