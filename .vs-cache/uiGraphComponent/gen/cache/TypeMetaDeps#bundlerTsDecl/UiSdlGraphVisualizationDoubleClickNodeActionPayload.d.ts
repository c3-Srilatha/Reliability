export interface UiSdlGraphVisualizationDoubleClickNodeActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationDoubleClickNodeActionPayload;

  readonly nodeId?: string | null;
  withNodeId(nodeId: string | null): UiSdlGraphVisualizationDoubleClickNodeActionPayload;
}

