export interface UiSdlCollapsibleNavigation {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCollapsibleNavigation;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCollapsibleNavigation;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCollapsibleNavigation;

  readonly dataSpec?: UiSdlCollapsibleNavigationDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCollapsibleNavigationDataSpec | null): UiSdlCollapsibleNavigation;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCollapsibleNavigation;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCollapsibleNavigation;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCollapsibleNavigation;

  readonly header?: UiSdlCollapsibleNavigationHeader | null;
  withHeader(header: IUiSdlCollapsibleNavigationHeader | null): UiSdlCollapsibleNavigation;

  readonly collapsible?: boolean;
  withCollapsible(collapsible: boolean): UiSdlCollapsibleNavigation;

  readonly collapsed?: boolean;
  withCollapsed(collapsed: boolean): UiSdlCollapsibleNavigation;

  readonly selectedItemId?: string | null;
  withSelectedItemId(selectedItemId: string | null): UiSdlCollapsibleNavigation;

  readonly resizable?: boolean;
  withResizable(resizable: boolean): UiSdlCollapsibleNavigation;

  readonly data?: C3.Array<UiSdlCollapsibleNavigationItem | null>;
  withData(data: C3.Array<UiSdlCollapsibleNavigationItem | null> | Array<IUiSdlCollapsibleNavigationItem | null>): UiSdlCollapsibleNavigation;

  readonly navItems?: C3.Array<UiSdlCollapsibleNavigationItem | null>;
  withNavItems(navItems: C3.Array<UiSdlCollapsibleNavigationItem | null> | Array<IUiSdlCollapsibleNavigationItem | null>): UiSdlCollapsibleNavigation;
}

