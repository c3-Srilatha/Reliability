export interface LukeTestSelfServiceDIPage {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestSelfServiceDIPage;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestSelfServiceDIPage;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestSelfServiceDIPage;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestSelfServiceDIPage;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestSelfServiceDIPage;

  readonly pageComponentId?: string | null;
  withPageComponentId(pageComponentId: string | null): LukeTestSelfServiceDIPage;

  readonly username?: string | null;
  withUsername(username: string | null): LukeTestSelfServiceDIPage;

  readonly password?: string | null;
  withPassword(password: string | null): LukeTestSelfServiceDIPage;

  readonly path?: string | null;
  withPath(path: string | null): LukeTestSelfServiceDIPage;

  readonly domain?: string | null;
  withDomain(domain: string | null): LukeTestSelfServiceDIPage;

  readonly baseUrl?: string | null;
  withBaseUrl(baseUrl: string | null): LukeTestSelfServiceDIPage;

  readonly pathParams?: C3.Map<string | null, string | null>;
  withPathParams(pathParams: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): LukeTestSelfServiceDIPage;

  readonly paramsId?: string | null;
  withParamsId(paramsId: string | null): LukeTestSelfServiceDIPage;

  readonly additionalParams?: any | null;
  withAdditionalParams(additionalParams: any | null): LukeTestSelfServiceDIPage;

  readonly fragment?: string | null;
  withFragment(fragment: string | null): LukeTestSelfServiceDIPage;

  readonly title?: string | null;
  withTitle(title: string | null): LukeTestSelfServiceDIPage;

  readonly modalElement?: string | null;
  withModalElement(modalElement: string | null): LukeTestSelfServiceDIPage;

  readonly modalTitleElement?: string | null;
  withModalTitleElement(modalTitleElement: string | null): LukeTestSelfServiceDIPage;

  readonly modalBodyElement?: string | null;
  withModalBodyElement(modalBodyElement: string | null): LukeTestSelfServiceDIPage;

  readonly breadcrumbsEl?: string | null;
  withBreadcrumbsEl(breadcrumbsEl: string | null): LukeTestSelfServiceDIPage;

  readonly sideSubMenuMinimizeButtonEl?: string | null;
  withSideSubMenuMinimizeButtonEl(sideSubMenuMinimizeButtonEl: string | null): LukeTestSelfServiceDIPage;

  readonly sideSubMenuContainerEl?: string | null;
  withSideSubMenuContainerEl(sideSubMenuContainerEl: string | null): LukeTestSelfServiceDIPage;

  readonly sideSubMenuNavContainerEl?: string | null;
  withSideSubMenuNavContainerEl(sideSubMenuNavContainerEl: string | null): LukeTestSelfServiceDIPage;

  readonly dependencyCrumbsEl?: string | null;
  withDependencyCrumbsEl(dependencyCrumbsEl: string | null): LukeTestSelfServiceDIPage;

  readonly sideSubMenuItemEl?: string | null;
  withSideSubMenuItemEl(sideSubMenuItemEl: string | null): LukeTestSelfServiceDIPage;

  readonly sideMenuCollapseButton?: string | null;
  withSideMenuCollapseButton(sideMenuCollapseButton: string | null): LukeTestSelfServiceDIPage;

  readonly pageGroup?: string | null;
  withPageGroup(pageGroup: string | null): LukeTestSelfServiceDIPage;

  readonly externalSourcesSidePanel?: LukeTestUiSdlSidePanel | null;
  withExternalSourcesSidePanel(externalSourcesSidePanel: ILukeTestUiSdlSidePanel | null): LukeTestSelfServiceDIPage;

  readonly connectorForm?: LukeTestSelfServiceDIConnectorForm | null;
  withConnectorForm(connectorForm: ILukeTestSelfServiceDIConnectorForm | null): LukeTestSelfServiceDIPage;

  readonly dataGrid?: LukeTestPreviewSqlTableDataGrid | null;
  withDataGrid(dataGrid: ILukeTestPreviewSqlTableDataGrid | null): LukeTestSelfServiceDIPage;

  readonly tabPanel?: LukeTestSelfServiceDITabPanel | null;
  withTabPanel(tabPanel: ILukeTestSelfServiceDITabPanel | null): LukeTestSelfServiceDIPage;

  readonly externalSourceDetailsCheckboxGrid?: LukeTestExternalSourceDetailsCheckboxGrid | null;
  withExternalSourceDetailsCheckboxGrid(externalSourceDetailsCheckboxGrid: ILukeTestExternalSourceDetailsCheckboxGrid | null): LukeTestSelfServiceDIPage;

  readonly externalSourceDetailsGrid?: LukeTestExternalSourceDetailsGrid | null;
  withExternalSourceDetailsGrid(externalSourceDetailsGrid: ILukeTestExternalSourceDetailsGrid | null): LukeTestSelfServiceDIPage;

  readonly multiStepComponent?: LukeTestMultiStepComponent | null;
  withMultiStepComponent(multiStepComponent: ILukeTestMultiStepComponent | null): LukeTestSelfServiceDIPage;

  readonly presentationalTreeView?: LukeTestPresentationalTreeView | null;
  withPresentationalTreeView(presentationalTreeView: ILukeTestPresentationalTreeView | null): LukeTestSelfServiceDIPage;

  readonly informationCardList?: LukeTestInformationCardList | null;
  withInformationCardList(informationCardList: ILukeTestInformationCardList | null): LukeTestSelfServiceDIPage;

  readonly selectDataConnectorStep?: LukeTestSelectDataConnectorStep | null;
  withSelectDataConnectorStep(selectDataConnectorStep: ILukeTestSelectDataConnectorStep | null): LukeTestSelfServiceDIPage;

  readonly sidePanelTreeviewEmptyStateSelector?: string | null;
  withSidePanelTreeviewEmptyStateSelector(sidePanelTreeviewEmptyStateSelector: string | null): LukeTestSelfServiceDIPage;

  readonly externalSourcesEmptyStateSelector?: string | null;
  withExternalSourcesEmptyStateSelector(externalSourcesEmptyStateSelector: string | null): LukeTestSelfServiceDIPage;

  readonly addDataSourceButtonSelector?: string | null;
  withAddDataSourceButtonSelector(addDataSourceButtonSelector: string | null): LukeTestSelfServiceDIPage;

  readonly fileUploadButtonSelector?: string | null;
  withFileUploadButtonSelector(fileUploadButtonSelector: string | null): LukeTestSelfServiceDIPage;

  readonly fileUpload?: LukeTestUiSdlFileUpload | null;
  withFileUpload(fileUpload: ILukeTestUiSdlFileUpload | null): LukeTestSelfServiceDIPage;
}

