export interface UiSdlGraphVisualizationChangedNodesPositionsActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationChangedNodesPositionsActionPayload;

  readonly nodes?: C3.Map<string | null, UiSdlGraphVisualizationNodePosition | null>;
  withNodes(nodes: C3.Map<string | null, UiSdlGraphVisualizationNodePosition | null> | {[key: string | null]: IUiSdlGraphVisualizationNodePosition | null}): UiSdlGraphVisualizationChangedNodesPositionsActionPayload;
}

