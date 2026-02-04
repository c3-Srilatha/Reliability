export interface LukeTestPostConfigurationLandingPageAzureBlob {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly selfServiceDIPage?: LukeTestSelfServiceDIPage | null;
  withSelfServiceDIPage(selfServiceDIPage: ILukeTestSelfServiceDIPage | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly messageBanner?: LukeTestUiSdlMessageContainer | null;
  withMessageBanner(messageBanner: ILukeTestUiSdlMessageContainer | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly connectorJson?: any | null;
  withConnectorJson(connectorJson: any | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly connectorName?: string | null;
  withConnectorName(connectorName: string | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly connectorDescription?: string | null;
  withConnectorDescription(connectorDescription: string | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly connectorCategoryTranslationKey?: string | null;
  withConnectorCategoryTranslationKey(connectorCategoryTranslationKey: string | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly connectorFormConnectorCategorySelector?: string | null;
  withConnectorFormConnectorCategorySelector(connectorFormConnectorCategorySelector: string | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly informationCardTitleSelector?: string | null;
  withInformationCardTitleSelector(informationCardTitleSelector: string | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly informationCardSubtitleSelector?: string | null;
  withInformationCardSubtitleSelector(informationCardSubtitleSelector: string | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly landingPageConnectorNameAndDescription?: LukeTestUiSdlDefinitionList | null;
  withLandingPageConnectorNameAndDescription(landingPageConnectorNameAndDescription: ILukeTestUiSdlDefinitionList | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly presentationalTreeView?: LukeTestPresentationalTreeView | null;
  withPresentationalTreeView(presentationalTreeView: ILukeTestPresentationalTreeView | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly connectionConfigurationModalSelector?: string | null;
  withConnectionConfigurationModalSelector(connectionConfigurationModalSelector: string | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly connectionConfigurationXSelector?: string | null;
  withConnectionConfigurationXSelector(connectionConfigurationXSelector: string | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly bucketDetailsHeaders?: C3.Array<string | null>;
  withBucketDetailsHeaders(bucketDetailsHeaders: C3.Array<string | null> | Array<string | null>): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly externalFileEstimateButtonSelector?: string | null;
  withExternalFileEstimateButtonSelector(externalFileEstimateButtonSelector: string | null): LukeTestPostConfigurationLandingPageAzureBlob;

  readonly externalFileConnectionPropertiesButtonSelector?: string | null;
  withExternalFileConnectionPropertiesButtonSelector(externalFileConnectionPropertiesButtonSelector: string | null): LukeTestPostConfigurationLandingPageAzureBlob;
}

