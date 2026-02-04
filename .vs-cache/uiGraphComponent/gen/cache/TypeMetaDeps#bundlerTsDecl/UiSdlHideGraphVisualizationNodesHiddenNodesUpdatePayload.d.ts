export interface UiSdlHideGraphVisualizationNodesHiddenNodesUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlHideGraphVisualizationNodesHiddenNodesUpdatePayload;

  readonly nodeIds: C3.Array<string | null>;
  withNodeIds(nodeIds: C3.Array<string | null> | Array<string | null>): UiSdlHideGraphVisualizationNodesHiddenNodesUpdatePayload;
}

