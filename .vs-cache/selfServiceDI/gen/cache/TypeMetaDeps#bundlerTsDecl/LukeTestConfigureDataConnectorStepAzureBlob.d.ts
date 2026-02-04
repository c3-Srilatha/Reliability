export interface LukeTestConfigureDataConnectorStepAzureBlob {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly selfServiceDIPage?: LukeTestSelfServiceDIPage | null;
  withSelfServiceDIPage(selfServiceDIPage: ILukeTestSelfServiceDIPage | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly messageBanner?: LukeTestUiSdlMessageContainer | null;
  withMessageBanner(messageBanner: ILukeTestUiSdlMessageContainer | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly connectorJson?: any | null;
  withConnectorJson(connectorJson: any | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly connectorName?: string | null;
  withConnectorName(connectorName: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly connectorDescription?: string | null;
  withConnectorDescription(connectorDescription: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly connectorCategoryTranslationKey?: string | null;
  withConnectorCategoryTranslationKey(connectorCategoryTranslationKey: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly connectorFormConnectorCategorySelector?: string | null;
  withConnectorFormConnectorCategorySelector(connectorFormConnectorCategorySelector: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly informationCardTitleSelector?: string | null;
  withInformationCardTitleSelector(informationCardTitleSelector: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly informationCardSubtitleSelector?: string | null;
  withInformationCardSubtitleSelector(informationCardSubtitleSelector: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly errorInlineNotification?: LukeTestUiSdlInlineNotification | null;
  withErrorInlineNotification(errorInlineNotification: ILukeTestUiSdlInlineNotification | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly form?: LukeTestSelfServiceDIConnectorForm | null;
  withForm(form: ILukeTestSelfServiceDIConnectorForm | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly landingPageConnectorNameAndDescription?: LukeTestUiSdlDefinitionList | null;
  withLandingPageConnectorNameAndDescription(landingPageConnectorNameAndDescription: ILukeTestUiSdlDefinitionList | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly additionalCredentialFormErrors?: C3.Array<any | null>;
  withAdditionalCredentialFormErrors(additionalCredentialFormErrors: C3.Array<any | null> | Array<any | null>): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly connectorFormSuccessCheckSelector?: string | null;
  withConnectorFormSuccessCheckSelector(connectorFormSuccessCheckSelector: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly connectorFormSuccessMessageSelector?: string | null;
  withConnectorFormSuccessMessageSelector(connectorFormSuccessMessageSelector: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly connectorFormLoadingSpinnerSelector?: string | null;
  withConnectorFormLoadingSpinnerSelector(connectorFormLoadingSpinnerSelector: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly searchBarSelector?: string | null;
  withSearchBarSelector(searchBarSelector: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly backConnectorToSelect?: string | null;
  withBackConnectorToSelect(backConnectorToSelect: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly testConnectionSuccessMessage?: string | null;
  withTestConnectionSuccessMessage(testConnectionSuccessMessage: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly missingRequiredFieldsErrorKey?: string | null;
  withMissingRequiredFieldsErrorKey(missingRequiredFieldsErrorKey: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly incorrectRequiredFieldsErrorKey?: string | null;
  withIncorrectRequiredFieldsErrorKey(incorrectRequiredFieldsErrorKey: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly bannerSuccessMessageKey?: string | null;
  withBannerSuccessMessageKey(bannerSuccessMessageKey: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly bucketDropdownInputSelector?: string | null;
  withBucketDropdownInputSelector(bucketDropdownInputSelector: string | null): LukeTestConfigureDataConnectorStepAzureBlob;

  readonly bucketDropdownNewUrlSelector?: string | null;
  withBucketDropdownNewUrlSelector(bucketDropdownNewUrlSelector: string | null): LukeTestConfigureDataConnectorStepAzureBlob;
}

