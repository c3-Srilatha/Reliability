export interface LukeTestNodeDiagramToolbar {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestNodeDiagramToolbar;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestNodeDiagramToolbar;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestNodeDiagramToolbar;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestNodeDiagramToolbar;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestNodeDiagramToolbar;

  readonly toolbarSelector?: string | null;
  withToolbarSelector(toolbarSelector: string | null): LukeTestNodeDiagramToolbar;

  readonly toolbarItemSelector?: string | null;
  withToolbarItemSelector(toolbarItemSelector: string | null): LukeTestNodeDiagramToolbar;
}

