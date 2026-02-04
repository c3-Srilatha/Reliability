export interface UiSdlNavMenu {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlNavMenu;

  readonly id?: string | null;
  withId(id: string | null): UiSdlNavMenu;

  readonly name?: string | null;
  withName(name: string | null): UiSdlNavMenu;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlNavMenu;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlNavMenu;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlNavMenu;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlNavMenu;

  readonly showMainMenuItemLabelInTooltip?: boolean;
  withShowMainMenuItemLabelInTooltip(showMainMenuItemLabelInTooltip: boolean): UiSdlNavMenu;

  readonly logoImageUrl?: string | null;
  withLogoImageUrl(logoImageUrl: string | null): UiSdlNavMenu;

  readonly itemSections: C3.Array<UiSdlNavMenuSection | null>;
  withItemSections(itemSections: C3.Array<UiSdlNavMenuSection | null> | Array<IUiSdlNavMenuSection | null>): UiSdlNavMenu;

  readonly footer?: UiSdlNavMenuSection | null;
  withFooter(footer: IUiSdlNavMenuSection | null): UiSdlNavMenu;

  readonly subMenuCollapsed?: boolean;
  withSubMenuCollapsed(subMenuCollapsed: boolean): UiSdlNavMenu;

  readonly hoveredNavMenuItemId?: string | null;
  withHoveredNavMenuItemId(hoveredNavMenuItemId: string | null): UiSdlNavMenu;
}

