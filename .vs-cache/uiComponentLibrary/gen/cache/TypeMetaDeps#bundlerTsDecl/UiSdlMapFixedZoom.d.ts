export interface UiSdlMapFixedZoom {

  readonly fixedZoomLevel?: number | null;
  withFixedZoomLevel(fixedZoomLevel: number | null): UiSdlMapFixedZoom;
}

