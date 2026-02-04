export interface LukeTestUserManagementPage {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUserManagementPage;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUserManagementPage;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUserManagementPage;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUserManagementPage;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUserManagementPage;

  readonly pageComponentId?: string | null;
  withPageComponentId(pageComponentId: string | null): LukeTestUserManagementPage;

  readonly username?: string | null;
  withUsername(username: string | null): LukeTestUserManagementPage;

  readonly password?: string | null;
  withPassword(password: string | null): LukeTestUserManagementPage;

  readonly path?: string | null;
  withPath(path: string | null): LukeTestUserManagementPage;

  readonly domain?: string | null;
  withDomain(domain: string | null): LukeTestUserManagementPage;

  readonly baseUrl?: string | null;
  withBaseUrl(baseUrl: string | null): LukeTestUserManagementPage;

  readonly pathParams?: C3.Map<string | null, string | null>;
  withPathParams(pathParams: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): LukeTestUserManagementPage;

  readonly paramsId?: string | null;
  withParamsId(paramsId: string | null): LukeTestUserManagementPage;

  readonly additionalParams?: any | null;
  withAdditionalParams(additionalParams: any | null): LukeTestUserManagementPage;

  readonly fragment?: string | null;
  withFragment(fragment: string | null): LukeTestUserManagementPage;

  readonly title?: string | null;
  withTitle(title: string | null): LukeTestUserManagementPage;

  readonly modalElement?: string | null;
  withModalElement(modalElement: string | null): LukeTestUserManagementPage;

  readonly modalTitleElement?: string | null;
  withModalTitleElement(modalTitleElement: string | null): LukeTestUserManagementPage;

  readonly modalBodyElement?: string | null;
  withModalBodyElement(modalBodyElement: string | null): LukeTestUserManagementPage;

  readonly breadcrumbsEl?: string | null;
  withBreadcrumbsEl(breadcrumbsEl: string | null): LukeTestUserManagementPage;

  readonly sideSubMenuMinimizeButtonEl?: string | null;
  withSideSubMenuMinimizeButtonEl(sideSubMenuMinimizeButtonEl: string | null): LukeTestUserManagementPage;

  readonly sideSubMenuContainerEl?: string | null;
  withSideSubMenuContainerEl(sideSubMenuContainerEl: string | null): LukeTestUserManagementPage;

  readonly sideSubMenuNavContainerEl?: string | null;
  withSideSubMenuNavContainerEl(sideSubMenuNavContainerEl: string | null): LukeTestUserManagementPage;

  readonly dependencyCrumbsEl?: string | null;
  withDependencyCrumbsEl(dependencyCrumbsEl: string | null): LukeTestUserManagementPage;

  readonly sideSubMenuItemEl?: string | null;
  withSideSubMenuItemEl(sideSubMenuItemEl: string | null): LukeTestUserManagementPage;

  readonly sideMenuCollapseButton?: string | null;
  withSideMenuCollapseButton(sideMenuCollapseButton: string | null): LukeTestUserManagementPage;

  readonly pageGroup?: string | null;
  withPageGroup(pageGroup: string | null): LukeTestUserManagementPage;

  readonly tabPanel?: LukeTestUiSdlTabPanel | null;
  withTabPanel(tabPanel: ILukeTestUiSdlTabPanel | null): LukeTestUserManagementPage;

  readonly tabPanelGrid?: LukeTestUiSdlDataGrid | null;
  withTabPanelGrid(tabPanelGrid: ILukeTestUiSdlDataGrid | null): LukeTestUserManagementPage;

  readonly modal?: LukeTestUiSdlModal | null;
  withModal(modal: ILukeTestUiSdlModal | null): LukeTestUserManagementPage;

  readonly modalTabPanel?: LukeTestUiSdlTabPanel | null;
  withModalTabPanel(modalTabPanel: ILukeTestUiSdlTabPanel | null): LukeTestUserManagementPage;

  readonly modalGrid?: LukeTestUiSdlDataGrid | null;
  withModalGrid(modalGrid: ILukeTestUiSdlDataGrid | null): LukeTestUserManagementPage;

  readonly banner?: LukeTestUiSdlMessageContainer | null;
  withBanner(banner: ILukeTestUiSdlMessageContainer | null): LukeTestUserManagementPage;

  readonly bannerInModal?: LukeTestUiSdlMessageContainer | null;
  withBannerInModal(bannerInModal: ILukeTestUiSdlMessageContainer | null): LukeTestUserManagementPage;

  readonly formInModal?: LukeTestUiSdlForm | null;
  withFormInModal(formInModal: ILukeTestUiSdlForm | null): LukeTestUserManagementPage;

  readonly formInModalStatus?: LukeTestComponent | null;
  withFormInModalStatus(formInModalStatus: ILukeTestComponent | null): LukeTestUserManagementPage;

  readonly addUserModal?: LukeTestUserManagementAddUsersModal | null;
  withAddUserModal(addUserModal: ILukeTestUserManagementAddUsersModal | null): LukeTestUserManagementPage;

  readonly editUserModal?: LukeTestUserManagementEditUsersModal | null;
  withEditUserModal(editUserModal: ILukeTestUserManagementEditUsersModal | null): LukeTestUserManagementPage;
}

