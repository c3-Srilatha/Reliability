export interface UiSdlGraphVisualizationData {

  readonly nodes?: C3.Map<string | null, UiSdlGraphVisualizationDataNode | null>;
  withNodes(nodes: C3.Map<string | null, UiSdlGraphVisualizationDataNode | null> | {[key: string | null]: IUiSdlGraphVisualizationDataNode | null}): UiSdlGraphVisualizationData;

  readonly edges?: C3.Map<string | null, UiSdlGraphVisualizationDataEdge | null>;
  withEdges(edges: C3.Map<string | null, UiSdlGraphVisualizationDataEdge | null> | {[key: string | null]: IUiSdlGraphVisualizationDataEdge | null}): UiSdlGraphVisualizationData;

  readonly view?: UiSdlGraphVisualizationDataGraphView | null;
  withView(view: IUiSdlGraphVisualizationDataGraphView | null): UiSdlGraphVisualizationData;
}

