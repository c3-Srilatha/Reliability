export interface LukeTestPresentationalTreeView {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestPresentationalTreeView;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestPresentationalTreeView;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestPresentationalTreeView;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestPresentationalTreeView;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestPresentationalTreeView;

  readonly selectedSelector?: string | null;
  withSelectedSelector(selectedSelector: string | null): LukeTestPresentationalTreeView;
}

