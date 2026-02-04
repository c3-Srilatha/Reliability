export interface LukeTestUiSdlNavMenu {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlNavMenu;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlNavMenu;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlNavMenu;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlNavMenu;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlNavMenu;

  readonly pageComponentId?: string | null;
  withPageComponentId(pageComponentId: string | null): LukeTestUiSdlNavMenu;

  readonly username?: string | null;
  withUsername(username: string | null): LukeTestUiSdlNavMenu;

  readonly password?: string | null;
  withPassword(password: string | null): LukeTestUiSdlNavMenu;

  readonly path?: string | null;
  withPath(path: string | null): LukeTestUiSdlNavMenu;

  readonly domain?: string | null;
  withDomain(domain: string | null): LukeTestUiSdlNavMenu;

  readonly baseUrl?: string | null;
  withBaseUrl(baseUrl: string | null): LukeTestUiSdlNavMenu;

  readonly pathParams?: C3.Map<string | null, string | null>;
  withPathParams(pathParams: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): LukeTestUiSdlNavMenu;

  readonly paramsId?: string | null;
  withParamsId(paramsId: string | null): LukeTestUiSdlNavMenu;

  readonly additionalParams?: any | null;
  withAdditionalParams(additionalParams: any | null): LukeTestUiSdlNavMenu;

  readonly fragment?: string | null;
  withFragment(fragment: string | null): LukeTestUiSdlNavMenu;

  readonly title?: string | null;
  withTitle(title: string | null): LukeTestUiSdlNavMenu;

  readonly modalElement?: string | null;
  withModalElement(modalElement: string | null): LukeTestUiSdlNavMenu;

  readonly modalTitleElement?: string | null;
  withModalTitleElement(modalTitleElement: string | null): LukeTestUiSdlNavMenu;

  readonly modalBodyElement?: string | null;
  withModalBodyElement(modalBodyElement: string | null): LukeTestUiSdlNavMenu;

  readonly breadcrumbsEl?: string | null;
  withBreadcrumbsEl(breadcrumbsEl: string | null): LukeTestUiSdlNavMenu;

  readonly sideSubMenuMinimizeButtonEl?: string | null;
  withSideSubMenuMinimizeButtonEl(sideSubMenuMinimizeButtonEl: string | null): LukeTestUiSdlNavMenu;

  readonly sideSubMenuContainerEl?: string | null;
  withSideSubMenuContainerEl(sideSubMenuContainerEl: string | null): LukeTestUiSdlNavMenu;

  readonly sideSubMenuNavContainerEl?: string | null;
  withSideSubMenuNavContainerEl(sideSubMenuNavContainerEl: string | null): LukeTestUiSdlNavMenu;

  readonly dependencyCrumbsEl?: string | null;
  withDependencyCrumbsEl(dependencyCrumbsEl: string | null): LukeTestUiSdlNavMenu;

  readonly sideSubMenuItemEl?: string | null;
  withSideSubMenuItemEl(sideSubMenuItemEl: string | null): LukeTestUiSdlNavMenu;

  readonly sideMenuCollapseButton?: string | null;
  withSideMenuCollapseButton(sideMenuCollapseButton: string | null): LukeTestUiSdlNavMenu;

  readonly pageGroup?: string | null;
  withPageGroup(pageGroup: string | null): LukeTestUiSdlNavMenu;

  readonly mainMenuSelector?: string | null;
  withMainMenuSelector(mainMenuSelector: string | null): LukeTestUiSdlNavMenu;

  readonly subMenuSelector?: string | null;
  withSubMenuSelector(subMenuSelector: string | null): LukeTestUiSdlNavMenu;

  readonly footerMenuSelector?: string | null;
  withFooterMenuSelector(footerMenuSelector: string | null): LukeTestUiSdlNavMenu;

  readonly hoverMenuSelector?: string | null;
  withHoverMenuSelector(hoverMenuSelector: string | null): LukeTestUiSdlNavMenu;

  readonly sectionTitleSelector?: string | null;
  withSectionTitleSelector(sectionTitleSelector: string | null): LukeTestUiSdlNavMenu;

  readonly menuItemSelector?: string | null;
  withMenuItemSelector(menuItemSelector: string | null): LukeTestUiSdlNavMenu;

  readonly activeItemSelector?: string | null;
  withActiveItemSelector(activeItemSelector: string | null): LukeTestUiSdlNavMenu;

  readonly subMenuCollapseButtonSelector?: string | null;
  withSubMenuCollapseButtonSelector(subMenuCollapseButtonSelector: string | null): LukeTestUiSdlNavMenu;
}

