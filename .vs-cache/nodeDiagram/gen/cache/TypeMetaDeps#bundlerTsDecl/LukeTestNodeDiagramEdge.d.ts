export interface LukeTestNodeDiagramEdge {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestNodeDiagramEdge;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestNodeDiagramEdge;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestNodeDiagramEdge;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestNodeDiagramEdge;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestNodeDiagramEdge;

  readonly edgeEl: LukeBrowserWebElement;
  withEdgeEl(edgeEl: ILukeBrowserWebElement): LukeTestNodeDiagramEdge;
}

