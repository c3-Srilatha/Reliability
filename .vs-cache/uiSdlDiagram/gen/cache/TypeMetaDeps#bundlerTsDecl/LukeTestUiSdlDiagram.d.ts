export interface LukeTestUiSdlDiagram {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlDiagram;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlDiagram;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlDiagram;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlDiagram;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlDiagram;

  readonly diagramLegend?: LukeTestUiSdlDiagramLegend | null;
  withDiagramLegend(diagramLegend: ILukeTestUiSdlDiagramLegend | null): LukeTestUiSdlDiagram;

  readonly diagramToolbar?: LukeTestUiSdlDiagramToolbar | null;
  withDiagramToolbar(diagramToolbar: ILukeTestUiSdlDiagramToolbar | null): LukeTestUiSdlDiagram;

  readonly diagramContainerSelector?: string | null;
  withDiagramContainerSelector(diagramContainerSelector: string | null): LukeTestUiSdlDiagram;

  readonly nodesByType?: C3.Map<string | null, Type | null>;
  withNodesByType(nodesByType: C3.Map<string | null, Type | null> | {[key: string | null]: IType | null}): LukeTestUiSdlDiagram;

  readonly showAllNodesButtonSelector?: string | null;
  withShowAllNodesButtonSelector(showAllNodesButtonSelector: string | null): LukeTestUiSdlDiagram;
}

