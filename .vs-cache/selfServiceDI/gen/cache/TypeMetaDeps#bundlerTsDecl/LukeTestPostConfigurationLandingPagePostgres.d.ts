export interface LukeTestPostConfigurationLandingPagePostgres {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestPostConfigurationLandingPagePostgres;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestPostConfigurationLandingPagePostgres;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly selfServiceDIPage?: LukeTestSelfServiceDIPage | null;
  withSelfServiceDIPage(selfServiceDIPage: ILukeTestSelfServiceDIPage | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly messageBanner?: LukeTestUiSdlMessageContainer | null;
  withMessageBanner(messageBanner: ILukeTestUiSdlMessageContainer | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly connectorJson?: any | null;
  withConnectorJson(connectorJson: any | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly connectorName?: string | null;
  withConnectorName(connectorName: string | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly connectorDescription?: string | null;
  withConnectorDescription(connectorDescription: string | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly connectorCategoryTranslationKey?: string | null;
  withConnectorCategoryTranslationKey(connectorCategoryTranslationKey: string | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly connectorFormConnectorCategorySelector?: string | null;
  withConnectorFormConnectorCategorySelector(connectorFormConnectorCategorySelector: string | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly informationCardTitleSelector?: string | null;
  withInformationCardTitleSelector(informationCardTitleSelector: string | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly informationCardSubtitleSelector?: string | null;
  withInformationCardSubtitleSelector(informationCardSubtitleSelector: string | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly landingPageConnectorNameAndDescription?: LukeTestUiSdlDefinitionList | null;
  withLandingPageConnectorNameAndDescription(landingPageConnectorNameAndDescription: ILukeTestUiSdlDefinitionList | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly presentationalTreeView?: LukeTestPresentationalTreeView | null;
  withPresentationalTreeView(presentationalTreeView: ILukeTestPresentationalTreeView | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly connectionConfigurationModalSelector?: string | null;
  withConnectionConfigurationModalSelector(connectionConfigurationModalSelector: string | null): LukeTestPostConfigurationLandingPagePostgres;

  readonly connectionConfigurationXSelector?: string | null;
  withConnectionConfigurationXSelector(connectionConfigurationXSelector: string | null): LukeTestPostConfigurationLandingPagePostgres;
}

