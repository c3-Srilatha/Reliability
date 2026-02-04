export interface LukeTestNodeDiagramLegend {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestNodeDiagramLegend;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestNodeDiagramLegend;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestNodeDiagramLegend;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestNodeDiagramLegend;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestNodeDiagramLegend;

  readonly legendButtonSelector?: string | null;
  withLegendButtonSelector(legendButtonSelector: string | null): LukeTestNodeDiagramLegend;

  readonly legendSelector?: string | null;
  withLegendSelector(legendSelector: string | null): LukeTestNodeDiagramLegend;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestNodeDiagramLegend;

  readonly linesSelector?: string | null;
  withLinesSelector(linesSelector: string | null): LukeTestNodeDiagramLegend;

  readonly nodesSelector?: string | null;
  withNodesSelector(nodesSelector: string | null): LukeTestNodeDiagramLegend;

  readonly itemSelector?: string | null;
  withItemSelector(itemSelector: string | null): LukeTestNodeDiagramLegend;

  readonly lineItemIconSelector?: string | null;
  withLineItemIconSelector(lineItemIconSelector: string | null): LukeTestNodeDiagramLegend;

  readonly nodeItemIconSelector?: string | null;
  withNodeItemIconSelector(nodeItemIconSelector: string | null): LukeTestNodeDiagramLegend;

  readonly textSelector?: string | null;
  withTextSelector(textSelector: string | null): LukeTestNodeDiagramLegend;
}

