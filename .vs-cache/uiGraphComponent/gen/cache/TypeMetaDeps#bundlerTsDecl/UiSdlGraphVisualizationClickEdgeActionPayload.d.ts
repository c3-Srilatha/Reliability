export interface UiSdlGraphVisualizationClickEdgeActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationClickEdgeActionPayload;

  readonly edgeId?: string | null;
  withEdgeId(edgeId: string | null): UiSdlGraphVisualizationClickEdgeActionPayload;
}

