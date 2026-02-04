export interface LukeTestSelfServiceDIConfigureDataConnectorStep {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly selfServiceDIPage?: LukeTestSelfServiceDIPage | null;
  withSelfServiceDIPage(selfServiceDIPage: ILukeTestSelfServiceDIPage | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly messageBanner?: LukeTestUiSdlMessageContainer | null;
  withMessageBanner(messageBanner: ILukeTestUiSdlMessageContainer | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly connectorJson?: any | null;
  withConnectorJson(connectorJson: any | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly connectorName?: string | null;
  withConnectorName(connectorName: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly connectorDescription?: string | null;
  withConnectorDescription(connectorDescription: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly connectorCategoryTranslationKey?: string | null;
  withConnectorCategoryTranslationKey(connectorCategoryTranslationKey: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly connectorFormConnectorCategorySelector?: string | null;
  withConnectorFormConnectorCategorySelector(connectorFormConnectorCategorySelector: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly informationCardTitleSelector?: string | null;
  withInformationCardTitleSelector(informationCardTitleSelector: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly informationCardSubtitleSelector?: string | null;
  withInformationCardSubtitleSelector(informationCardSubtitleSelector: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly errorInlineNotification?: LukeTestUiSdlInlineNotification | null;
  withErrorInlineNotification(errorInlineNotification: ILukeTestUiSdlInlineNotification | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly form?: LukeTestSelfServiceDIConnectorForm | null;
  withForm(form: ILukeTestSelfServiceDIConnectorForm | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly landingPageConnectorNameAndDescription?: LukeTestUiSdlDefinitionList | null;
  withLandingPageConnectorNameAndDescription(landingPageConnectorNameAndDescription: ILukeTestUiSdlDefinitionList | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly additionalCredentialFormErrors?: C3.Array<any | null>;
  withAdditionalCredentialFormErrors(additionalCredentialFormErrors: C3.Array<any | null> | Array<any | null>): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly connectorFormSuccessCheckSelector?: string | null;
  withConnectorFormSuccessCheckSelector(connectorFormSuccessCheckSelector: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly connectorFormSuccessMessageSelector?: string | null;
  withConnectorFormSuccessMessageSelector(connectorFormSuccessMessageSelector: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly connectorFormLoadingSpinnerSelector?: string | null;
  withConnectorFormLoadingSpinnerSelector(connectorFormLoadingSpinnerSelector: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly searchBarSelector?: string | null;
  withSearchBarSelector(searchBarSelector: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly backConnectorToSelect?: string | null;
  withBackConnectorToSelect(backConnectorToSelect: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly testConnectionSuccessMessage?: string | null;
  withTestConnectionSuccessMessage(testConnectionSuccessMessage: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly missingRequiredFieldsErrorKey?: string | null;
  withMissingRequiredFieldsErrorKey(missingRequiredFieldsErrorKey: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly incorrectRequiredFieldsErrorKey?: string | null;
  withIncorrectRequiredFieldsErrorKey(incorrectRequiredFieldsErrorKey: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;

  readonly bannerSuccessMessageKey?: string | null;
  withBannerSuccessMessageKey(bannerSuccessMessageKey: string | null): LukeTestSelfServiceDIConfigureDataConnectorStep;
}

