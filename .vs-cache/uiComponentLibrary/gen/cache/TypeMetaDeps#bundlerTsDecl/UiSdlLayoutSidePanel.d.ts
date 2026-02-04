export interface UiSdlLayoutSidePanel {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlLayoutSidePanel;

  readonly id?: string | null;
  withId(id: string | null): UiSdlLayoutSidePanel;

  readonly name?: string | null;
  withName(name: string | null): UiSdlLayoutSidePanel;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlLayoutSidePanel;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlLayoutSidePanel;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlLayoutSidePanel;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlLayoutSidePanel;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlLayoutSidePanel;

  readonly dragAndDropEnabled?: boolean;
  withDragAndDropEnabled(dragAndDropEnabled: boolean): UiSdlLayoutSidePanel;

  readonly leftSidePanel?: UiSdlComponentRef<UiSdlFilterPanel | null> | null;
  withLeftSidePanel(leftSidePanel: IUiSdlComponentRef<UiSdlFilterPanel | null> | null): UiSdlLayoutSidePanel;

  readonly rightSidePanel?: UiSdlComponentRef<UiSdlFilterPanel | null> | null;
  withRightSidePanel(rightSidePanel: IUiSdlComponentRef<UiSdlFilterPanel | null> | null): UiSdlLayoutSidePanel;
}

