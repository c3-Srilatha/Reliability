export interface UiSdlSidePanelSection {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSidePanelSection;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSidePanelSection;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSidePanelSection;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSidePanelSection;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSidePanelSection;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSidePanelSection;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSidePanelSection;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlSidePanelSection;

  readonly open?: boolean;
  withOpen(open: boolean): UiSdlSidePanelSection;

  readonly closedIcons?: C3.Array<string | null>;
  withClosedIcons(closedIcons: C3.Array<string | null> | Array<string | null>): UiSdlSidePanelSection;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlSidePanelSection;
}

