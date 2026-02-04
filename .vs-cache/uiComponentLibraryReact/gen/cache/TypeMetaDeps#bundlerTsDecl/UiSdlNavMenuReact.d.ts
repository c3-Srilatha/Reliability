export interface UiSdlNavMenuReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlNavMenuReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlNavMenuReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlNavMenuReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlNavMenuReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlNavMenuReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlNavMenuReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlNavMenuReact;

  readonly showMainMenuItemLabelInTooltip?: boolean;
  withShowMainMenuItemLabelInTooltip(showMainMenuItemLabelInTooltip: boolean): UiSdlNavMenuReact;

  readonly logoImageUrl?: string | null;
  withLogoImageUrl(logoImageUrl: string | null): UiSdlNavMenuReact;

  readonly itemSections: C3.Array<UiSdlNavMenuSection | null>;
  withItemSections(itemSections: C3.Array<UiSdlNavMenuSection | null> | Array<IUiSdlNavMenuSection | null>): UiSdlNavMenuReact;

  readonly footer?: UiSdlNavMenuSection | null;
  withFooter(footer: IUiSdlNavMenuSection | null): UiSdlNavMenuReact;

  readonly subMenuCollapsed?: boolean;
  withSubMenuCollapsed(subMenuCollapsed: boolean): UiSdlNavMenuReact;

  readonly hoveredNavMenuItemId?: string | null;
  withHoveredNavMenuItemId(hoveredNavMenuItemId: string | null): UiSdlNavMenuReact;
}

