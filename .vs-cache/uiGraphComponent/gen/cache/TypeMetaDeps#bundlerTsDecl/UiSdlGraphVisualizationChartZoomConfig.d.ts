export interface UiSdlGraphVisualizationChartZoomConfig {

  readonly minZoom?: number | null;
  withMinZoom(minZoom: number | null): UiSdlGraphVisualizationChartZoomConfig;

  readonly maxZoom?: number | null;
  withMaxZoom(maxZoom: number | null): UiSdlGraphVisualizationChartZoomConfig;

  readonly zoomGroupLevel?: number | null;
  withZoomGroupLevel(zoomGroupLevel: number | null): UiSdlGraphVisualizationChartZoomConfig;
}

