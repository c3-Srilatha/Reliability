export interface UiSdlGraphVisualizationZoomConfig {

  readonly minZoom?: number | null;
  withMinZoom(minZoom: number | null): UiSdlGraphVisualizationZoomConfig;

  readonly maxZoom?: number | null;
  withMaxZoom(maxZoom: number | null): UiSdlGraphVisualizationZoomConfig;

  readonly zoomGroupLevel?: number | null;
  withZoomGroupLevel(zoomGroupLevel: number | null): UiSdlGraphVisualizationZoomConfig;
}

