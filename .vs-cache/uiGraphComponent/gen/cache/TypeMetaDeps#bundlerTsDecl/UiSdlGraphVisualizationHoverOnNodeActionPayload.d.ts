export interface UiSdlGraphVisualizationHoverOnNodeActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationHoverOnNodeActionPayload;

  readonly hoveredNodeId?: string | null;
  withHoveredNodeId(hoveredNodeId: string | null): UiSdlGraphVisualizationHoverOnNodeActionPayload;

  readonly x?: number | null;
  withX(x: number | null): UiSdlGraphVisualizationHoverOnNodeActionPayload;

  readonly y?: number | null;
  withY(y: number | null): UiSdlGraphVisualizationHoverOnNodeActionPayload;

  readonly zoomValue?: number | null;
  withZoomValue(zoomValue: number | null): UiSdlGraphVisualizationHoverOnNodeActionPayload;
}

