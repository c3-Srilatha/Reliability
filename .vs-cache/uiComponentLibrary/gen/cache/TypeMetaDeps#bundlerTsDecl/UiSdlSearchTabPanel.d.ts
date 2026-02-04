export interface UiSdlSearchTabPanel {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSearchTabPanel;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSearchTabPanel;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSearchTabPanel;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlSearchTabPanel;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSearchTabPanel;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSearchTabPanel;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSearchTabPanel;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlSearchTabPanel;

  readonly searchPlaceholderText?: string | null;
  withSearchPlaceholderText(searchPlaceholderText: string | null): UiSdlSearchTabPanel;

  readonly searchLoading?: boolean;
  withSearchLoading(searchLoading: boolean): UiSdlSearchTabPanel;

  readonly searchDisabled?: boolean;
  withSearchDisabled(searchDisabled: boolean): UiSdlSearchTabPanel;

  readonly searchTerm?: string | null | UiSdlDynamicValueSpec | null | null;
  withSearchTerm(searchTerm: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlSearchTabPanel;

  readonly tabComponents: C3.Array<UiSdlTabComponentRef | null>;
  withTabComponents(tabComponents: C3.Array<UiSdlTabComponentRef | null> | Array<IUiSdlTabComponentRef | null>): UiSdlSearchTabPanel;

  readonly tabsWithNotification?: C3.Array<string | null>;
  withTabsWithNotification(tabsWithNotification: C3.Array<string | null> | Array<string | null>): UiSdlSearchTabPanel;

  readonly activeTab?: string | null;
  withActiveTab(activeTab: string | null): UiSdlSearchTabPanel;
}

