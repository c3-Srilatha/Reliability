export interface LukeTestSelfServiceDIConnector {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestSelfServiceDIConnector;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestSelfServiceDIConnector;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestSelfServiceDIConnector;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestSelfServiceDIConnector;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestSelfServiceDIConnector;

  readonly selfServiceDIPage?: LukeTestSelfServiceDIPage | null;
  withSelfServiceDIPage(selfServiceDIPage: ILukeTestSelfServiceDIPage | null): LukeTestSelfServiceDIConnector;

  readonly messageBanner?: LukeTestUiSdlMessageContainer | null;
  withMessageBanner(messageBanner: ILukeTestUiSdlMessageContainer | null): LukeTestSelfServiceDIConnector;

  readonly connectorJson?: any | null;
  withConnectorJson(connectorJson: any | null): LukeTestSelfServiceDIConnector;

  readonly connectorName?: string | null;
  withConnectorName(connectorName: string | null): LukeTestSelfServiceDIConnector;

  readonly connectorDescription?: string | null;
  withConnectorDescription(connectorDescription: string | null): LukeTestSelfServiceDIConnector;

  readonly connectorCategoryTranslationKey?: string | null;
  withConnectorCategoryTranslationKey(connectorCategoryTranslationKey: string | null): LukeTestSelfServiceDIConnector;

  readonly connectorFormConnectorCategorySelector?: string | null;
  withConnectorFormConnectorCategorySelector(connectorFormConnectorCategorySelector: string | null): LukeTestSelfServiceDIConnector;

  readonly informationCardTitleSelector?: string | null;
  withInformationCardTitleSelector(informationCardTitleSelector: string | null): LukeTestSelfServiceDIConnector;

  readonly informationCardSubtitleSelector?: string | null;
  withInformationCardSubtitleSelector(informationCardSubtitleSelector: string | null): LukeTestSelfServiceDIConnector;
}

