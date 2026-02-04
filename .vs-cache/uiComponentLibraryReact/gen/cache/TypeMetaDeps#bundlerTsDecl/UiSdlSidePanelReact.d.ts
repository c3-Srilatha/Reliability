export interface UiSdlSidePanelReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSidePanelReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSidePanelReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSidePanelReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSidePanelReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSidePanelReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSidePanelReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSidePanelReact;

  readonly header?: UiSdlSidePanelHeader | null;
  withHeader(header: IUiSdlSidePanelHeader | null): UiSdlSidePanelReact;

  readonly footer?: UiSdlComponentRef<UiSdlSidePanelSection | null> | null;
  withFooter(footer: IUiSdlComponentRef<UiSdlSidePanelSection | null> | null): UiSdlSidePanelReact;

  readonly open?: boolean;
  withOpen(open: boolean): UiSdlSidePanelReact;

  readonly sections?: C3.Array<UiSdlComponentRef<UiSdlSidePanelSection | null> | null>;
  withSections(sections: C3.Array<UiSdlComponentRef<UiSdlSidePanelSection | null> | null> | Array<IUiSdlComponentRef<UiSdlSidePanelSection | null> | null>): UiSdlSidePanelReact;

  readonly alignment?: string | null;
  withAlignment(alignment: string | null): UiSdlSidePanelReact;

  readonly position?: string | null;
  withPosition(position: string | null): UiSdlSidePanelReact;

  readonly closeBehavior?: string | null;
  withCloseBehavior(closeBehavior: string | null): UiSdlSidePanelReact;
}

