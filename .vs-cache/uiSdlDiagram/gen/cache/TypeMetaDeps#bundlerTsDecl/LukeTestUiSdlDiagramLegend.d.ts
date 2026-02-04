export interface LukeTestUiSdlDiagramLegend {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlDiagramLegend;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlDiagramLegend;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlDiagramLegend;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlDiagramLegend;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlDiagramLegend;

  readonly legendButtonSelector?: string | null;
  withLegendButtonSelector(legendButtonSelector: string | null): LukeTestUiSdlDiagramLegend;

  readonly legendSelector?: string | null;
  withLegendSelector(legendSelector: string | null): LukeTestUiSdlDiagramLegend;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlDiagramLegend;

  readonly linesSelector?: string | null;
  withLinesSelector(linesSelector: string | null): LukeTestUiSdlDiagramLegend;

  readonly nodesSelector?: string | null;
  withNodesSelector(nodesSelector: string | null): LukeTestUiSdlDiagramLegend;

  readonly itemSelector?: string | null;
  withItemSelector(itemSelector: string | null): LukeTestUiSdlDiagramLegend;

  readonly lineItemIconSelector?: string | null;
  withLineItemIconSelector(lineItemIconSelector: string | null): LukeTestUiSdlDiagramLegend;

  readonly nodeItemIconSelector?: string | null;
  withNodeItemIconSelector(nodeItemIconSelector: string | null): LukeTestUiSdlDiagramLegend;

  readonly textSelector?: string | null;
  withTextSelector(textSelector: string | null): LukeTestUiSdlDiagramLegend;
}

