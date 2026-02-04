export interface UiSdlSidePanelContainerReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSidePanelContainerReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSidePanelContainerReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSidePanelContainerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSidePanelContainerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSidePanelContainerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSidePanelContainerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSidePanelContainerReact;

  readonly sidePanel?: UiSdlAlignedComponentRef<UiSdlSidePanel | null> | null;
  withSidePanel(sidePanel: IUiSdlAlignedComponentRef<UiSdlSidePanel | null> | null): UiSdlSidePanelContainerReact;

  readonly child?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withChild(child: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlSidePanelContainerReact;
}

