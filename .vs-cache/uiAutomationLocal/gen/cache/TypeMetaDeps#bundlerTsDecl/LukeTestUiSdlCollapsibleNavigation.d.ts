export interface LukeTestUiSdlCollapsibleNavigation {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlCollapsibleNavigation;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlCollapsibleNavigation;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlCollapsibleNavigation;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlCollapsibleNavigation;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlCollapsibleNavigation;

  readonly tabNamesSelector?: string | null;
  withTabNamesSelector(tabNamesSelector: string | null): LukeTestUiSdlCollapsibleNavigation;

  readonly navTitleSelector?: string | null;
  withNavTitleSelector(navTitleSelector: string | null): LukeTestUiSdlCollapsibleNavigation;

  readonly navSubtitleSelector?: string | null;
  withNavSubtitleSelector(navSubtitleSelector: string | null): LukeTestUiSdlCollapsibleNavigation;
}

