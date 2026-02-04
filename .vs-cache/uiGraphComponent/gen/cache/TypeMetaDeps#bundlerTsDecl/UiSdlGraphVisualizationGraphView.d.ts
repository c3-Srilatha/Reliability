export interface UiSdlGraphVisualizationGraphView {

  readonly offsetX?: number | null;
  withOffsetX(offsetX: number | null): UiSdlGraphVisualizationGraphView;

  readonly offsetY?: number | null;
  withOffsetY(offsetY: number | null): UiSdlGraphVisualizationGraphView;

  readonly zoom?: number | null;
  withZoom(zoom: number | null): UiSdlGraphVisualizationGraphView;
}

