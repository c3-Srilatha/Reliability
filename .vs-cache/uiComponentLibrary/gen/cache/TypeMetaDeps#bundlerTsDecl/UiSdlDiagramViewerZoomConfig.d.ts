export interface UiSdlDiagramViewerZoomConfig {

  readonly startingZoom?: number | null;
  withStartingZoom(startingZoom: number | null): UiSdlDiagramViewerZoomConfig;

  readonly maxZoom?: number | null;
  withMaxZoom(maxZoom: number | null): UiSdlDiagramViewerZoomConfig;

  readonly minZoom?: number | null;
  withMinZoom(minZoom: number | null): UiSdlDiagramViewerZoomConfig;

  readonly zoomMultiplier?: number | null;
  withZoomMultiplier(zoomMultiplier: number | null): UiSdlDiagramViewerZoomConfig;
}

