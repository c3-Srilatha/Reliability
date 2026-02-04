export interface UiSdlLayoutSidePanelReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlLayoutSidePanelReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlLayoutSidePanelReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlLayoutSidePanelReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlLayoutSidePanelReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlLayoutSidePanelReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlLayoutSidePanelReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlLayoutSidePanelReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlLayoutSidePanelReact;

  readonly dragAndDropEnabled?: boolean;
  withDragAndDropEnabled(dragAndDropEnabled: boolean): UiSdlLayoutSidePanelReact;

  readonly leftSidePanel?: UiSdlComponentRef<UiSdlFilterPanel | null> | null;
  withLeftSidePanel(leftSidePanel: IUiSdlComponentRef<UiSdlFilterPanel | null> | null): UiSdlLayoutSidePanelReact;

  readonly rightSidePanel?: UiSdlComponentRef<UiSdlFilterPanel | null> | null;
  withRightSidePanel(rightSidePanel: IUiSdlComponentRef<UiSdlFilterPanel | null> | null): UiSdlLayoutSidePanelReact;
}

