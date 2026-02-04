export interface LukeTestConfigureDataConnectorStepPostgres {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestConfigureDataConnectorStepPostgres;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestConfigureDataConnectorStepPostgres;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly selfServiceDIPage?: LukeTestSelfServiceDIPage | null;
  withSelfServiceDIPage(selfServiceDIPage: ILukeTestSelfServiceDIPage | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly messageBanner?: LukeTestUiSdlMessageContainer | null;
  withMessageBanner(messageBanner: ILukeTestUiSdlMessageContainer | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly connectorJson?: any | null;
  withConnectorJson(connectorJson: any | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly connectorName?: string | null;
  withConnectorName(connectorName: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly connectorDescription?: string | null;
  withConnectorDescription(connectorDescription: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly connectorCategoryTranslationKey?: string | null;
  withConnectorCategoryTranslationKey(connectorCategoryTranslationKey: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly connectorFormConnectorCategorySelector?: string | null;
  withConnectorFormConnectorCategorySelector(connectorFormConnectorCategorySelector: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly informationCardTitleSelector?: string | null;
  withInformationCardTitleSelector(informationCardTitleSelector: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly informationCardSubtitleSelector?: string | null;
  withInformationCardSubtitleSelector(informationCardSubtitleSelector: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly errorInlineNotification?: LukeTestUiSdlInlineNotification | null;
  withErrorInlineNotification(errorInlineNotification: ILukeTestUiSdlInlineNotification | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly form?: LukeTestSelfServiceDIConnectorForm | null;
  withForm(form: ILukeTestSelfServiceDIConnectorForm | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly landingPageConnectorNameAndDescription?: LukeTestUiSdlDefinitionList | null;
  withLandingPageConnectorNameAndDescription(landingPageConnectorNameAndDescription: ILukeTestUiSdlDefinitionList | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly additionalCredentialFormErrors?: C3.Array<any | null>;
  withAdditionalCredentialFormErrors(additionalCredentialFormErrors: C3.Array<any | null> | Array<any | null>): LukeTestConfigureDataConnectorStepPostgres;

  readonly connectorFormSuccessCheckSelector?: string | null;
  withConnectorFormSuccessCheckSelector(connectorFormSuccessCheckSelector: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly connectorFormSuccessMessageSelector?: string | null;
  withConnectorFormSuccessMessageSelector(connectorFormSuccessMessageSelector: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly connectorFormLoadingSpinnerSelector?: string | null;
  withConnectorFormLoadingSpinnerSelector(connectorFormLoadingSpinnerSelector: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly searchBarSelector?: string | null;
  withSearchBarSelector(searchBarSelector: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly backConnectorToSelect?: string | null;
  withBackConnectorToSelect(backConnectorToSelect: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly testConnectionSuccessMessage?: string | null;
  withTestConnectionSuccessMessage(testConnectionSuccessMessage: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly missingRequiredFieldsErrorKey?: string | null;
  withMissingRequiredFieldsErrorKey(missingRequiredFieldsErrorKey: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly incorrectRequiredFieldsErrorKey?: string | null;
  withIncorrectRequiredFieldsErrorKey(incorrectRequiredFieldsErrorKey: string | null): LukeTestConfigureDataConnectorStepPostgres;

  readonly bannerSuccessMessageKey?: string | null;
  withBannerSuccessMessageKey(bannerSuccessMessageKey: string | null): LukeTestConfigureDataConnectorStepPostgres;
}

