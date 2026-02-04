export interface UiSdlSidePanel {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSidePanel;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSidePanel;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSidePanel;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSidePanel;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSidePanel;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSidePanel;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSidePanel;

  readonly header?: UiSdlSidePanelHeader | null;
  withHeader(header: IUiSdlSidePanelHeader | null): UiSdlSidePanel;

  readonly footer?: UiSdlComponentRef<UiSdlSidePanelSection | null> | null;
  withFooter(footer: IUiSdlComponentRef<UiSdlSidePanelSection | null> | null): UiSdlSidePanel;

  readonly open?: boolean;
  withOpen(open: boolean): UiSdlSidePanel;

  readonly sections?: C3.Array<UiSdlComponentRef<UiSdlSidePanelSection | null> | null>;
  withSections(sections: C3.Array<UiSdlComponentRef<UiSdlSidePanelSection | null> | null> | Array<IUiSdlComponentRef<UiSdlSidePanelSection | null> | null>): UiSdlSidePanel;

  readonly alignment?: string | null;
  withAlignment(alignment: string | null): UiSdlSidePanel;

  readonly position?: string | null;
  withPosition(position: string | null): UiSdlSidePanel;

  readonly closeBehavior?: string | null;
  withCloseBehavior(closeBehavior: string | null): UiSdlSidePanel;
}

