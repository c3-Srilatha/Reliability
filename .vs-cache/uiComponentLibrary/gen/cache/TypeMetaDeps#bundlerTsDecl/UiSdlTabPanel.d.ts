export interface UiSdlTabPanel {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTabPanel;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTabPanel;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTabPanel;

  readonly dataSpec?: UiSdlTabPanelDataSpec | null;
  withDataSpec(dataSpec: IUiSdlTabPanelDataSpec | null): UiSdlTabPanel;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTabPanel;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTabPanel;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTabPanel;

  readonly texts?: Obj | null;
  withTexts(texts: IObj | null): UiSdlTabPanel;

  readonly title?: UiSdlTabPanelDataSpecTextSetting | null;
  withTitle(title: IUiSdlTabPanelDataSpecTextSetting | null): UiSdlTabPanel;

  readonly subTitle?: UiSdlTabPanelDataSpecTextSetting | null;
  withSubTitle(subTitle: IUiSdlTabPanelDataSpecTextSetting | null): UiSdlTabPanel;

  readonly bodyText?: UiSdlTabPanelDataSpecTextSetting | null;
  withBodyText(bodyText: IUiSdlTabPanelDataSpecTextSetting | null): UiSdlTabPanel;

  readonly bodyParagraph?: C3.Array<TabPanelParagraph | null>;
  withBodyParagraph(bodyParagraph: C3.Array<TabPanelParagraph | null> | Array<ITabPanelParagraph | null>): UiSdlTabPanel;

  readonly tabBarStyle?: string | null;
  withTabBarStyle(tabBarStyle: string | null): UiSdlTabPanel;

  readonly tabComponents: C3.Array<UiSdlTabComponentRef | null>;
  withTabComponents(tabComponents: C3.Array<UiSdlTabComponentRef | null> | Array<IUiSdlTabComponentRef | null>): UiSdlTabPanel;

  readonly tileComponents?: C3.Array<UiSdlTileComponentRef | null>;
  withTileComponents(tileComponents: C3.Array<UiSdlTileComponentRef | null> | Array<IUiSdlTileComponentRef | null>): UiSdlTabPanel;

  readonly tabs?: C3.Array<any | null>;
  withTabs(tabs: C3.Array<any | null> | Array<any | null>): UiSdlTabPanel;

  readonly tabsWithNotification?: C3.Array<string | null>;
  withTabsWithNotification(tabsWithNotification: C3.Array<string | null> | Array<string | null>): UiSdlTabPanel;

  readonly tiles?: C3.Array<any | null>;
  withTiles(tiles: C3.Array<any | null> | Array<any | null>): UiSdlTabPanel;

  readonly activeTab?: string | null;
  withActiveTab(activeTab: string | null): UiSdlTabPanel;

  readonly primaryActionButtonTitle?: string | null;
  withPrimaryActionButtonTitle(primaryActionButtonTitle: string | null): UiSdlTabPanel;

  readonly secondaryActionButtonTitle?: string | null;
  withSecondaryActionButtonTitle(secondaryActionButtonTitle: string | null): UiSdlTabPanel;

  readonly primaryActionButtonLoading?: boolean;
  withPrimaryActionButtonLoading(primaryActionButtonLoading: boolean): UiSdlTabPanel;

  readonly secondaryActionButtonLoading?: boolean;
  withSecondaryActionButtonLoading(secondaryActionButtonLoading: boolean): UiSdlTabPanel;

  readonly primaryActionButtonDisabled?: boolean;
  withPrimaryActionButtonDisabled(primaryActionButtonDisabled: boolean): UiSdlTabPanel;

  readonly secondaryActionButtonDisabled?: boolean;
  withSecondaryActionButtonDisabled(secondaryActionButtonDisabled: boolean): UiSdlTabPanel;

  readonly iconActions?: C3.Array<UiSdlAction | null>;
  withIconActions(iconActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlTabPanel;

  readonly tertiaryAction?: boolean;
  withTertiaryAction(tertiaryAction: boolean): UiSdlTabPanel;
}

