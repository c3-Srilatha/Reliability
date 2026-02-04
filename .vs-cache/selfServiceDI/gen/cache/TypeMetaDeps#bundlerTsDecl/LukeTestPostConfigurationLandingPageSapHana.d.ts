export interface LukeTestPostConfigurationLandingPageSapHana {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestPostConfigurationLandingPageSapHana;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestPostConfigurationLandingPageSapHana;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly selfServiceDIPage?: LukeTestSelfServiceDIPage | null;
  withSelfServiceDIPage(selfServiceDIPage: ILukeTestSelfServiceDIPage | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly messageBanner?: LukeTestUiSdlMessageContainer | null;
  withMessageBanner(messageBanner: ILukeTestUiSdlMessageContainer | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly connectorJson?: any | null;
  withConnectorJson(connectorJson: any | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly connectorName?: string | null;
  withConnectorName(connectorName: string | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly connectorDescription?: string | null;
  withConnectorDescription(connectorDescription: string | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly connectorCategoryTranslationKey?: string | null;
  withConnectorCategoryTranslationKey(connectorCategoryTranslationKey: string | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly connectorFormConnectorCategorySelector?: string | null;
  withConnectorFormConnectorCategorySelector(connectorFormConnectorCategorySelector: string | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly informationCardTitleSelector?: string | null;
  withInformationCardTitleSelector(informationCardTitleSelector: string | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly informationCardSubtitleSelector?: string | null;
  withInformationCardSubtitleSelector(informationCardSubtitleSelector: string | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly landingPageConnectorNameAndDescription?: LukeTestUiSdlDefinitionList | null;
  withLandingPageConnectorNameAndDescription(landingPageConnectorNameAndDescription: ILukeTestUiSdlDefinitionList | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly presentationalTreeView?: LukeTestPresentationalTreeView | null;
  withPresentationalTreeView(presentationalTreeView: ILukeTestPresentationalTreeView | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly connectionConfigurationModalSelector?: string | null;
  withConnectionConfigurationModalSelector(connectionConfigurationModalSelector: string | null): LukeTestPostConfigurationLandingPageSapHana;

  readonly connectionConfigurationXSelector?: string | null;
  withConnectionConfigurationXSelector(connectionConfigurationXSelector: string | null): LukeTestPostConfigurationLandingPageSapHana;
}

