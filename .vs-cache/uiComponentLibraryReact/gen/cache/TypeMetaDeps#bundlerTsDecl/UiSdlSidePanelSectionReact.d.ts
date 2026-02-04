export interface UiSdlSidePanelSectionReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSidePanelSectionReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSidePanelSectionReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSidePanelSectionReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSidePanelSectionReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSidePanelSectionReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSidePanelSectionReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSidePanelSectionReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlSidePanelSectionReact;

  readonly open?: boolean;
  withOpen(open: boolean): UiSdlSidePanelSectionReact;

  readonly closedIcons?: C3.Array<string | null>;
  withClosedIcons(closedIcons: C3.Array<string | null> | Array<string | null>): UiSdlSidePanelSectionReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlSidePanelSectionReact;
}

