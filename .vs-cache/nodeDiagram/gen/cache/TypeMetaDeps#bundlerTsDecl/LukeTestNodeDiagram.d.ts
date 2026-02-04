export interface LukeTestNodeDiagram {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestNodeDiagram;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestNodeDiagram;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestNodeDiagram;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestNodeDiagram;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestNodeDiagram;

  readonly diagramPanels?: C3.Array<LukeTestNodeDiagramPanel | null>;
  withDiagramPanels(diagramPanels: C3.Array<LukeTestNodeDiagramPanel | null> | Array<ILukeTestNodeDiagramPanel | null>): LukeTestNodeDiagram;

  readonly canvasSelector?: string | null;
  withCanvasSelector(canvasSelector: string | null): LukeTestNodeDiagram;

  readonly viewportSelector?: string | null;
  withViewportSelector(viewportSelector: string | null): LukeTestNodeDiagram;
}

