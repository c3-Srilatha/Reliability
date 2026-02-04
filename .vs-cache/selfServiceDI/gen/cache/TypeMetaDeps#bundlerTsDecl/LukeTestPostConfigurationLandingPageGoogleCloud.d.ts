export interface LukeTestPostConfigurationLandingPageGoogleCloud {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly selfServiceDIPage?: LukeTestSelfServiceDIPage | null;
  withSelfServiceDIPage(selfServiceDIPage: ILukeTestSelfServiceDIPage | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly messageBanner?: LukeTestUiSdlMessageContainer | null;
  withMessageBanner(messageBanner: ILukeTestUiSdlMessageContainer | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly connectorJson?: any | null;
  withConnectorJson(connectorJson: any | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly connectorName?: string | null;
  withConnectorName(connectorName: string | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly connectorDescription?: string | null;
  withConnectorDescription(connectorDescription: string | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly connectorCategoryTranslationKey?: string | null;
  withConnectorCategoryTranslationKey(connectorCategoryTranslationKey: string | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly connectorFormConnectorCategorySelector?: string | null;
  withConnectorFormConnectorCategorySelector(connectorFormConnectorCategorySelector: string | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly informationCardTitleSelector?: string | null;
  withInformationCardTitleSelector(informationCardTitleSelector: string | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly informationCardSubtitleSelector?: string | null;
  withInformationCardSubtitleSelector(informationCardSubtitleSelector: string | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly landingPageConnectorNameAndDescription?: LukeTestUiSdlDefinitionList | null;
  withLandingPageConnectorNameAndDescription(landingPageConnectorNameAndDescription: ILukeTestUiSdlDefinitionList | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly presentationalTreeView?: LukeTestPresentationalTreeView | null;
  withPresentationalTreeView(presentationalTreeView: ILukeTestPresentationalTreeView | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly connectionConfigurationModalSelector?: string | null;
  withConnectionConfigurationModalSelector(connectionConfigurationModalSelector: string | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly connectionConfigurationXSelector?: string | null;
  withConnectionConfigurationXSelector(connectionConfigurationXSelector: string | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly bucketDetailsHeaders?: C3.Array<string | null>;
  withBucketDetailsHeaders(bucketDetailsHeaders: C3.Array<string | null> | Array<string | null>): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly externalFileEstimateButtonSelector?: string | null;
  withExternalFileEstimateButtonSelector(externalFileEstimateButtonSelector: string | null): LukeTestPostConfigurationLandingPageGoogleCloud;

  readonly externalFileConnectionPropertiesButtonSelector?: string | null;
  withExternalFileConnectionPropertiesButtonSelector(externalFileConnectionPropertiesButtonSelector: string | null): LukeTestPostConfigurationLandingPageGoogleCloud;
}

