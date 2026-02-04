export interface LukeTestUiSdlSearch {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlSearch;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlSearch;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlSearch;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlSearch;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlSearch;

  readonly searchResultSelector?: string | null;
  withSearchResultSelector(searchResultSelector: string | null): LukeTestUiSdlSearch;

  readonly inputField?: string | null;
  withInputField(inputField: string | null): LukeTestUiSdlSearch;
}

