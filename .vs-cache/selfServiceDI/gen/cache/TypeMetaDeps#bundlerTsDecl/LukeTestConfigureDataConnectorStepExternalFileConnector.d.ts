export interface LukeTestConfigureDataConnectorStepExternalFileConnector {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly selfServiceDIPage?: LukeTestSelfServiceDIPage | null;
  withSelfServiceDIPage(selfServiceDIPage: ILukeTestSelfServiceDIPage | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly messageBanner?: LukeTestUiSdlMessageContainer | null;
  withMessageBanner(messageBanner: ILukeTestUiSdlMessageContainer | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly connectorJson?: any | null;
  withConnectorJson(connectorJson: any | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly connectorName?: string | null;
  withConnectorName(connectorName: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly connectorDescription?: string | null;
  withConnectorDescription(connectorDescription: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly connectorCategoryTranslationKey?: string | null;
  withConnectorCategoryTranslationKey(connectorCategoryTranslationKey: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly connectorFormConnectorCategorySelector?: string | null;
  withConnectorFormConnectorCategorySelector(connectorFormConnectorCategorySelector: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly informationCardTitleSelector?: string | null;
  withInformationCardTitleSelector(informationCardTitleSelector: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly informationCardSubtitleSelector?: string | null;
  withInformationCardSubtitleSelector(informationCardSubtitleSelector: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly errorInlineNotification?: LukeTestUiSdlInlineNotification | null;
  withErrorInlineNotification(errorInlineNotification: ILukeTestUiSdlInlineNotification | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly form?: LukeTestSelfServiceDIConnectorForm | null;
  withForm(form: ILukeTestSelfServiceDIConnectorForm | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly landingPageConnectorNameAndDescription?: LukeTestUiSdlDefinitionList | null;
  withLandingPageConnectorNameAndDescription(landingPageConnectorNameAndDescription: ILukeTestUiSdlDefinitionList | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly additionalCredentialFormErrors?: C3.Array<any | null>;
  withAdditionalCredentialFormErrors(additionalCredentialFormErrors: C3.Array<any | null> | Array<any | null>): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly connectorFormSuccessCheckSelector?: string | null;
  withConnectorFormSuccessCheckSelector(connectorFormSuccessCheckSelector: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly connectorFormSuccessMessageSelector?: string | null;
  withConnectorFormSuccessMessageSelector(connectorFormSuccessMessageSelector: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly connectorFormLoadingSpinnerSelector?: string | null;
  withConnectorFormLoadingSpinnerSelector(connectorFormLoadingSpinnerSelector: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly searchBarSelector?: string | null;
  withSearchBarSelector(searchBarSelector: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly backConnectorToSelect?: string | null;
  withBackConnectorToSelect(backConnectorToSelect: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly testConnectionSuccessMessage?: string | null;
  withTestConnectionSuccessMessage(testConnectionSuccessMessage: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly missingRequiredFieldsErrorKey?: string | null;
  withMissingRequiredFieldsErrorKey(missingRequiredFieldsErrorKey: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly incorrectRequiredFieldsErrorKey?: string | null;
  withIncorrectRequiredFieldsErrorKey(incorrectRequiredFieldsErrorKey: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly bannerSuccessMessageKey?: string | null;
  withBannerSuccessMessageKey(bannerSuccessMessageKey: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly bucketDropdownInputSelector?: string | null;
  withBucketDropdownInputSelector(bucketDropdownInputSelector: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;

  readonly bucketDropdownNewUrlSelector?: string | null;
  withBucketDropdownNewUrlSelector(bucketDropdownNewUrlSelector: string | null): LukeTestConfigureDataConnectorStepExternalFileConnector;
}

