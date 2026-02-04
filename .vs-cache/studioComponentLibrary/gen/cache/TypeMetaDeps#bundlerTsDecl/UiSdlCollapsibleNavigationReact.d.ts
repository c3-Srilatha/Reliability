export interface UiSdlCollapsibleNavigationReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCollapsibleNavigationReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCollapsibleNavigationReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCollapsibleNavigationReact;

  readonly dataSpec?: UiSdlCollapsibleNavigationDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCollapsibleNavigationDataSpec | null): UiSdlCollapsibleNavigationReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCollapsibleNavigationReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCollapsibleNavigationReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCollapsibleNavigationReact;

  readonly header?: UiSdlCollapsibleNavigationHeader | null;
  withHeader(header: IUiSdlCollapsibleNavigationHeader | null): UiSdlCollapsibleNavigationReact;

  readonly collapsible?: boolean;
  withCollapsible(collapsible: boolean): UiSdlCollapsibleNavigationReact;

  readonly collapsed?: boolean;
  withCollapsed(collapsed: boolean): UiSdlCollapsibleNavigationReact;

  readonly selectedItemId?: string | null;
  withSelectedItemId(selectedItemId: string | null): UiSdlCollapsibleNavigationReact;

  readonly resizable?: boolean;
  withResizable(resizable: boolean): UiSdlCollapsibleNavigationReact;

  readonly data?: C3.Array<UiSdlCollapsibleNavigationItem | null>;
  withData(data: C3.Array<UiSdlCollapsibleNavigationItem | null> | Array<IUiSdlCollapsibleNavigationItem | null>): UiSdlCollapsibleNavigationReact;

  readonly navItems?: C3.Array<UiSdlCollapsibleNavigationItem | null>;
  withNavItems(navItems: C3.Array<UiSdlCollapsibleNavigationItem | null> | Array<IUiSdlCollapsibleNavigationItem | null>): UiSdlCollapsibleNavigationReact;
}

