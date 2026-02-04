export interface UiSdlGraphVisualizationMergedEdgeConfig {

  readonly showCountGlyphOnMergedEdges?: boolean;
  withShowCountGlyphOnMergedEdges(showCountGlyphOnMergedEdges: boolean): UiSdlGraphVisualizationMergedEdgeConfig;

  readonly countGlyphSize?: number | null;
  withCountGlyphSize(countGlyphSize: number | null): UiSdlGraphVisualizationMergedEdgeConfig;

  readonly flow?: boolean;
  withFlow(flow: boolean): UiSdlGraphVisualizationMergedEdgeConfig;

  readonly flowVelocity?: number | null;
  withFlowVelocity(flowVelocity: number | null): UiSdlGraphVisualizationMergedEdgeConfig;
}

