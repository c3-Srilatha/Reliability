export interface UiSdlGraphVisualizationMapZoomConfig {

  readonly minZoom?: number | null;
  withMinZoom(minZoom: number | null): UiSdlGraphVisualizationMapZoomConfig;

  readonly maxZoom?: number | null;
  withMaxZoom(maxZoom: number | null): UiSdlGraphVisualizationMapZoomConfig;

  readonly zoomGroupLevel?: number | null;
  withZoomGroupLevel(zoomGroupLevel: number | null): UiSdlGraphVisualizationMapZoomConfig;
}

