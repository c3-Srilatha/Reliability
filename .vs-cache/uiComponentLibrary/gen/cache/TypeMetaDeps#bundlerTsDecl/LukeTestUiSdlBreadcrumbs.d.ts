export interface LukeTestUiSdlBreadcrumbs {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlBreadcrumbs;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlBreadcrumbs;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlBreadcrumbs;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlBreadcrumbs;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlBreadcrumbs;

  readonly breadcrumb?: string | null;
  withBreadcrumb(breadcrumb: string | null): LukeTestUiSdlBreadcrumbs;

  readonly activeBreadcrumbEl?: string | null;
  withActiveBreadcrumbEl(activeBreadcrumbEl: string | null): LukeTestUiSdlBreadcrumbs;

  readonly dropdownEl?: string | null;
  withDropdownEl(dropdownEl: string | null): LukeTestUiSdlBreadcrumbs;

  readonly nextButton?: string | null;
  withNextButton(nextButton: string | null): LukeTestUiSdlBreadcrumbs;

  readonly previousButton?: string | null;
  withPreviousButton(previousButton: string | null): LukeTestUiSdlBreadcrumbs;

  readonly redirectBreadcrumbEl?: string | null;
  withRedirectBreadcrumbEl(redirectBreadcrumbEl: string | null): LukeTestUiSdlBreadcrumbs;
}

