export interface LukeTestPostConfigurationLandingPageExternalFile {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestPostConfigurationLandingPageExternalFile;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestPostConfigurationLandingPageExternalFile;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly selfServiceDIPage?: LukeTestSelfServiceDIPage | null;
  withSelfServiceDIPage(selfServiceDIPage: ILukeTestSelfServiceDIPage | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly messageBanner?: LukeTestUiSdlMessageContainer | null;
  withMessageBanner(messageBanner: ILukeTestUiSdlMessageContainer | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly connectorJson?: any | null;
  withConnectorJson(connectorJson: any | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly connectorName?: string | null;
  withConnectorName(connectorName: string | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly connectorDescription?: string | null;
  withConnectorDescription(connectorDescription: string | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly connectorCategoryTranslationKey?: string | null;
  withConnectorCategoryTranslationKey(connectorCategoryTranslationKey: string | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly connectorFormConnectorCategorySelector?: string | null;
  withConnectorFormConnectorCategorySelector(connectorFormConnectorCategorySelector: string | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly informationCardTitleSelector?: string | null;
  withInformationCardTitleSelector(informationCardTitleSelector: string | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly informationCardSubtitleSelector?: string | null;
  withInformationCardSubtitleSelector(informationCardSubtitleSelector: string | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly landingPageConnectorNameAndDescription?: LukeTestUiSdlDefinitionList | null;
  withLandingPageConnectorNameAndDescription(landingPageConnectorNameAndDescription: ILukeTestUiSdlDefinitionList | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly presentationalTreeView?: LukeTestPresentationalTreeView | null;
  withPresentationalTreeView(presentationalTreeView: ILukeTestPresentationalTreeView | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly connectionConfigurationModalSelector?: string | null;
  withConnectionConfigurationModalSelector(connectionConfigurationModalSelector: string | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly connectionConfigurationXSelector?: string | null;
  withConnectionConfigurationXSelector(connectionConfigurationXSelector: string | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly bucketDetailsHeaders?: C3.Array<string | null>;
  withBucketDetailsHeaders(bucketDetailsHeaders: C3.Array<string | null> | Array<string | null>): LukeTestPostConfigurationLandingPageExternalFile;

  readonly externalFileEstimateButtonSelector?: string | null;
  withExternalFileEstimateButtonSelector(externalFileEstimateButtonSelector: string | null): LukeTestPostConfigurationLandingPageExternalFile;

  readonly externalFileConnectionPropertiesButtonSelector?: string | null;
  withExternalFileConnectionPropertiesButtonSelector(externalFileConnectionPropertiesButtonSelector: string | null): LukeTestPostConfigurationLandingPageExternalFile;
}

