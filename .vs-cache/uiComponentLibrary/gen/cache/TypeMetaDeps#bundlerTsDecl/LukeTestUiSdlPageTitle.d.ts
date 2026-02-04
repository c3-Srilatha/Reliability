export interface LukeTestUiSdlPageTitle {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlPageTitle;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlPageTitle;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlPageTitle;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlPageTitle;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlPageTitle;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlPageTitle;

  readonly tabSelector?: string | null;
  withTabSelector(tabSelector: string | null): LukeTestUiSdlPageTitle;

  readonly activeTabSelector?: string | null;
  withActiveTabSelector(activeTabSelector: string | null): LukeTestUiSdlPageTitle;

  readonly globalInputFieldSelector?: string | null;
  withGlobalInputFieldSelector(globalInputFieldSelector: string | null): LukeTestUiSdlPageTitle;
}

