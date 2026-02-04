export interface LukeTestAutomationPage {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestAutomationPage;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestAutomationPage;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestAutomationPage;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestAutomationPage;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestAutomationPage;

  readonly pageComponentId?: string | null;
  withPageComponentId(pageComponentId: string | null): LukeTestAutomationPage;

  readonly username?: string | null;
  withUsername(username: string | null): LukeTestAutomationPage;

  readonly password?: string | null;
  withPassword(password: string | null): LukeTestAutomationPage;

  readonly path?: string | null;
  withPath(path: string | null): LukeTestAutomationPage;

  readonly domain?: string | null;
  withDomain(domain: string | null): LukeTestAutomationPage;

  readonly baseUrl?: string | null;
  withBaseUrl(baseUrl: string | null): LukeTestAutomationPage;

  readonly pathParams?: C3.Map<string | null, string | null>;
  withPathParams(pathParams: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): LukeTestAutomationPage;

  readonly paramsId?: string | null;
  withParamsId(paramsId: string | null): LukeTestAutomationPage;

  readonly additionalParams?: any | null;
  withAdditionalParams(additionalParams: any | null): LukeTestAutomationPage;

  readonly fragment?: string | null;
  withFragment(fragment: string | null): LukeTestAutomationPage;

  readonly title?: string | null;
  withTitle(title: string | null): LukeTestAutomationPage;

  readonly modalElement?: string | null;
  withModalElement(modalElement: string | null): LukeTestAutomationPage;

  readonly modalTitleElement?: string | null;
  withModalTitleElement(modalTitleElement: string | null): LukeTestAutomationPage;

  readonly modalBodyElement?: string | null;
  withModalBodyElement(modalBodyElement: string | null): LukeTestAutomationPage;

  readonly breadcrumbsEl?: string | null;
  withBreadcrumbsEl(breadcrumbsEl: string | null): LukeTestAutomationPage;

  readonly sideSubMenuMinimizeButtonEl?: string | null;
  withSideSubMenuMinimizeButtonEl(sideSubMenuMinimizeButtonEl: string | null): LukeTestAutomationPage;

  readonly sideSubMenuContainerEl?: string | null;
  withSideSubMenuContainerEl(sideSubMenuContainerEl: string | null): LukeTestAutomationPage;

  readonly sideSubMenuNavContainerEl?: string | null;
  withSideSubMenuNavContainerEl(sideSubMenuNavContainerEl: string | null): LukeTestAutomationPage;

  readonly dependencyCrumbsEl?: string | null;
  withDependencyCrumbsEl(dependencyCrumbsEl: string | null): LukeTestAutomationPage;

  readonly sideSubMenuItemEl?: string | null;
  withSideSubMenuItemEl(sideSubMenuItemEl: string | null): LukeTestAutomationPage;

  readonly sideMenuCollapseButton?: string | null;
  withSideMenuCollapseButton(sideMenuCollapseButton: string | null): LukeTestAutomationPage;

  readonly pageGroup?: string | null;
  withPageGroup(pageGroup: string | null): LukeTestAutomationPage;
}

