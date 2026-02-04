export interface UiSdlGraphVisualizationDataGraphView {

  readonly zoom?: number | null;
  withZoom(zoom: number | null): UiSdlGraphVisualizationDataGraphView;

  readonly offsetX?: number | null;
  withOffsetX(offsetX: number | null): UiSdlGraphVisualizationDataGraphView;

  readonly offsetY?: number | null;
  withOffsetY(offsetY: number | null): UiSdlGraphVisualizationDataGraphView;
}

