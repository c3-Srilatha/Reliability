export interface UiSdlGraphVisualizationHoverOnEdgeActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationHoverOnEdgeActionPayload;

  readonly hoveredEdgeId?: string | null;
  withHoveredEdgeId(hoveredEdgeId: string | null): UiSdlGraphVisualizationHoverOnEdgeActionPayload;

  readonly x?: number | null;
  withX(x: number | null): UiSdlGraphVisualizationHoverOnEdgeActionPayload;

  readonly y?: number | null;
  withY(y: number | null): UiSdlGraphVisualizationHoverOnEdgeActionPayload;
}

