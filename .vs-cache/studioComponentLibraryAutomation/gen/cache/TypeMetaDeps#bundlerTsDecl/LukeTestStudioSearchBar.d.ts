export interface LukeTestStudioSearchBar {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestStudioSearchBar;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestStudioSearchBar;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestStudioSearchBar;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestStudioSearchBar;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestStudioSearchBar;

  readonly inputSelector?: string | null;
  withInputSelector(inputSelector: string | null): LukeTestStudioSearchBar;
}

