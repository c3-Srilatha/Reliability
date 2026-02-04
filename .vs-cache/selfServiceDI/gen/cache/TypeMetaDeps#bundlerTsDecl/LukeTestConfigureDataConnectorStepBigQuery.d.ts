export interface LukeTestConfigureDataConnectorStepBigQuery {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestConfigureDataConnectorStepBigQuery;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestConfigureDataConnectorStepBigQuery;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly selfServiceDIPage?: LukeTestSelfServiceDIPage | null;
  withSelfServiceDIPage(selfServiceDIPage: ILukeTestSelfServiceDIPage | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly messageBanner?: LukeTestUiSdlMessageContainer | null;
  withMessageBanner(messageBanner: ILukeTestUiSdlMessageContainer | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly connectorJson?: any | null;
  withConnectorJson(connectorJson: any | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly connectorName?: string | null;
  withConnectorName(connectorName: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly connectorDescription?: string | null;
  withConnectorDescription(connectorDescription: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly connectorCategoryTranslationKey?: string | null;
  withConnectorCategoryTranslationKey(connectorCategoryTranslationKey: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly connectorFormConnectorCategorySelector?: string | null;
  withConnectorFormConnectorCategorySelector(connectorFormConnectorCategorySelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly informationCardTitleSelector?: string | null;
  withInformationCardTitleSelector(informationCardTitleSelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly informationCardSubtitleSelector?: string | null;
  withInformationCardSubtitleSelector(informationCardSubtitleSelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly errorInlineNotification?: LukeTestUiSdlInlineNotification | null;
  withErrorInlineNotification(errorInlineNotification: ILukeTestUiSdlInlineNotification | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly form?: LukeTestSelfServiceDIConnectorForm | null;
  withForm(form: ILukeTestSelfServiceDIConnectorForm | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly landingPageConnectorNameAndDescription?: LukeTestUiSdlDefinitionList | null;
  withLandingPageConnectorNameAndDescription(landingPageConnectorNameAndDescription: ILukeTestUiSdlDefinitionList | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly additionalCredentialFormErrors?: C3.Array<any | null>;
  withAdditionalCredentialFormErrors(additionalCredentialFormErrors: C3.Array<any | null> | Array<any | null>): LukeTestConfigureDataConnectorStepBigQuery;

  readonly connectorFormSuccessCheckSelector?: string | null;
  withConnectorFormSuccessCheckSelector(connectorFormSuccessCheckSelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly connectorFormSuccessMessageSelector?: string | null;
  withConnectorFormSuccessMessageSelector(connectorFormSuccessMessageSelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly connectorFormLoadingSpinnerSelector?: string | null;
  withConnectorFormLoadingSpinnerSelector(connectorFormLoadingSpinnerSelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly searchBarSelector?: string | null;
  withSearchBarSelector(searchBarSelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly backConnectorToSelect?: string | null;
  withBackConnectorToSelect(backConnectorToSelect: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly testConnectionSuccessMessage?: string | null;
  withTestConnectionSuccessMessage(testConnectionSuccessMessage: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly missingRequiredFieldsErrorKey?: string | null;
  withMissingRequiredFieldsErrorKey(missingRequiredFieldsErrorKey: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly incorrectRequiredFieldsErrorKey?: string | null;
  withIncorrectRequiredFieldsErrorKey(incorrectRequiredFieldsErrorKey: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  readonly bannerSuccessMessageKey?: string | null;
  withBannerSuccessMessageKey(bannerSuccessMessageKey: string | null): LukeTestConfigureDataConnectorStepBigQuery;
}

