export interface UiSdlSearchTabPanelReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSearchTabPanelReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSearchTabPanelReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSearchTabPanelReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlSearchTabPanelReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSearchTabPanelReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSearchTabPanelReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSearchTabPanelReact;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlSearchTabPanelReact;

  readonly searchPlaceholderText?: string | null;
  withSearchPlaceholderText(searchPlaceholderText: string | null): UiSdlSearchTabPanelReact;

  readonly searchLoading?: boolean;
  withSearchLoading(searchLoading: boolean): UiSdlSearchTabPanelReact;

  readonly searchDisabled?: boolean;
  withSearchDisabled(searchDisabled: boolean): UiSdlSearchTabPanelReact;

  readonly searchTerm?: string | null | UiSdlDynamicValueSpec | null | null;
  withSearchTerm(searchTerm: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlSearchTabPanelReact;

  readonly tabComponents: C3.Array<UiSdlTabComponentRef | null>;
  withTabComponents(tabComponents: C3.Array<UiSdlTabComponentRef | null> | Array<IUiSdlTabComponentRef | null>): UiSdlSearchTabPanelReact;

  readonly tabsWithNotification?: C3.Array<string | null>;
  withTabsWithNotification(tabsWithNotification: C3.Array<string | null> | Array<string | null>): UiSdlSearchTabPanelReact;

  readonly activeTab?: string | null;
  withActiveTab(activeTab: string | null): UiSdlSearchTabPanelReact;
}

