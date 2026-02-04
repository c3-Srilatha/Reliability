export interface UiSdlTabPanelReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTabPanelReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTabPanelReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTabPanelReact;

  readonly dataSpec?: UiSdlTabPanelDataSpec | null;
  withDataSpec(dataSpec: IUiSdlTabPanelDataSpec | null): UiSdlTabPanelReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTabPanelReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTabPanelReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTabPanelReact;

  readonly texts?: Obj | null;
  withTexts(texts: IObj | null): UiSdlTabPanelReact;

  readonly title?: UiSdlTabPanelDataSpecTextSetting | null;
  withTitle(title: IUiSdlTabPanelDataSpecTextSetting | null): UiSdlTabPanelReact;

  readonly subTitle?: UiSdlTabPanelDataSpecTextSetting | null;
  withSubTitle(subTitle: IUiSdlTabPanelDataSpecTextSetting | null): UiSdlTabPanelReact;

  readonly bodyText?: UiSdlTabPanelDataSpecTextSetting | null;
  withBodyText(bodyText: IUiSdlTabPanelDataSpecTextSetting | null): UiSdlTabPanelReact;

  readonly bodyParagraph?: C3.Array<TabPanelParagraph | null>;
  withBodyParagraph(bodyParagraph: C3.Array<TabPanelParagraph | null> | Array<ITabPanelParagraph | null>): UiSdlTabPanelReact;

  readonly tabBarStyle?: string | null;
  withTabBarStyle(tabBarStyle: string | null): UiSdlTabPanelReact;

  readonly tabComponents: C3.Array<UiSdlTabComponentRef | null>;
  withTabComponents(tabComponents: C3.Array<UiSdlTabComponentRef | null> | Array<IUiSdlTabComponentRef | null>): UiSdlTabPanelReact;

  readonly tileComponents?: C3.Array<UiSdlTileComponentRef | null>;
  withTileComponents(tileComponents: C3.Array<UiSdlTileComponentRef | null> | Array<IUiSdlTileComponentRef | null>): UiSdlTabPanelReact;

  readonly tabs?: C3.Array<any | null>;
  withTabs(tabs: C3.Array<any | null> | Array<any | null>): UiSdlTabPanelReact;

  readonly tabsWithNotification?: C3.Array<string | null>;
  withTabsWithNotification(tabsWithNotification: C3.Array<string | null> | Array<string | null>): UiSdlTabPanelReact;

  readonly tiles?: C3.Array<any | null>;
  withTiles(tiles: C3.Array<any | null> | Array<any | null>): UiSdlTabPanelReact;

  readonly activeTab?: string | null;
  withActiveTab(activeTab: string | null): UiSdlTabPanelReact;

  readonly primaryActionButtonTitle?: string | null;
  withPrimaryActionButtonTitle(primaryActionButtonTitle: string | null): UiSdlTabPanelReact;

  readonly secondaryActionButtonTitle?: string | null;
  withSecondaryActionButtonTitle(secondaryActionButtonTitle: string | null): UiSdlTabPanelReact;

  readonly primaryActionButtonLoading?: boolean;
  withPrimaryActionButtonLoading(primaryActionButtonLoading: boolean): UiSdlTabPanelReact;

  readonly secondaryActionButtonLoading?: boolean;
  withSecondaryActionButtonLoading(secondaryActionButtonLoading: boolean): UiSdlTabPanelReact;

  readonly primaryActionButtonDisabled?: boolean;
  withPrimaryActionButtonDisabled(primaryActionButtonDisabled: boolean): UiSdlTabPanelReact;

  readonly secondaryActionButtonDisabled?: boolean;
  withSecondaryActionButtonDisabled(secondaryActionButtonDisabled: boolean): UiSdlTabPanelReact;

  readonly iconActions?: C3.Array<UiSdlAction | null>;
  withIconActions(iconActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlTabPanelReact;

  readonly tertiaryAction?: boolean;
  withTertiaryAction(tertiaryAction: boolean): UiSdlTabPanelReact;
}

