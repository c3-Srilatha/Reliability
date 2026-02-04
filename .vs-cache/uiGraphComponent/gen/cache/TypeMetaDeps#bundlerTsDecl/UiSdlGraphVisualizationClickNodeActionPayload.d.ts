export interface UiSdlGraphVisualizationClickNodeActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationClickNodeActionPayload;

  readonly nodeId?: string | null;
  withNodeId(nodeId: string | null): UiSdlGraphVisualizationClickNodeActionPayload;
}

