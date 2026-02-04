export interface LukeTestUiSdlTreeList {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlTreeList;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlTreeList;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlTreeList;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlTreeList;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlTreeList;

  readonly itemSelector?: string | null;
  withItemSelector(itemSelector: string | null): LukeTestUiSdlTreeList;

  readonly searchBoxSelector?: string | null;
  withSearchBoxSelector(searchBoxSelector: string | null): LukeTestUiSdlTreeList;
}

