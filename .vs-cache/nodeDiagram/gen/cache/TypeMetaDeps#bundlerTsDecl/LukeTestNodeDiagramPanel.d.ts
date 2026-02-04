export interface LukeTestNodeDiagramPanel {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestNodeDiagramPanel;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestNodeDiagramPanel;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestNodeDiagramPanel;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestNodeDiagramPanel;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestNodeDiagramPanel;
}

