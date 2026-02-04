export interface UiSdlGraphVisualizationHoverOnMergedEdgeActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationHoverOnMergedEdgeActionPayload;

  readonly hoveredEdgeIds?: C3.Array<string | null>;
  withHoveredEdgeIds(hoveredEdgeIds: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationHoverOnMergedEdgeActionPayload;
}

