export interface LukeTestSelectDataConnectorStep {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestSelectDataConnectorStep;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestSelectDataConnectorStep;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestSelectDataConnectorStep;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestSelectDataConnectorStep;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestSelectDataConnectorStep;

  readonly errorInlineNotification?: LukeTestUiSdlInlineNotification | null;
  withErrorInlineNotification(errorInlineNotification: ILukeTestUiSdlInlineNotification | null): LukeTestSelectDataConnectorStep;

  readonly selfServiceDIPage?: LukeTestSelfServiceDIPage | null;
  withSelfServiceDIPage(selfServiceDIPage: ILukeTestSelfServiceDIPage | null): LukeTestSelectDataConnectorStep;

  readonly searchBar?: LukeTestUiSdlForm | null;
  withSearchBar(searchBar: ILukeTestUiSdlForm | null): LukeTestSelectDataConnectorStep;

  readonly informationCardList?: LukeTestInformationCardList | null;
  withInformationCardList(informationCardList: ILukeTestInformationCardList | null): LukeTestSelectDataConnectorStep;

  readonly addDataSourceStep?: LukeTestAddDataSourceStep | null;
  withAddDataSourceStep(addDataSourceStep: ILukeTestAddDataSourceStep | null): LukeTestSelectDataConnectorStep;

  readonly clearSearchButtonSelector?: string | null;
  withClearSearchButtonSelector(clearSearchButtonSelector: string | null): LukeTestSelectDataConnectorStep;
}

