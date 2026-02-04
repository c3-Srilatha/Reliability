export interface UiSdlGraphVisualizationZoomControlsReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationZoomControlsReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationZoomControlsReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationZoomControlsReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationZoomControlsReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationZoomControlsReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationZoomControlsReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationZoomControlsReact;

  readonly zoomFitIcon?: string | null;
  withZoomFitIcon(zoomFitIcon: string | null): UiSdlGraphVisualizationZoomControlsReact;

  readonly zoomFitValue?: string | null;
  withZoomFitValue(zoomFitValue: string | null): UiSdlGraphVisualizationZoomControlsReact;

  readonly zoomInIcon?: string | null;
  withZoomInIcon(zoomInIcon: string | null): UiSdlGraphVisualizationZoomControlsReact;

  readonly zoomInValue?: string | null;
  withZoomInValue(zoomInValue: string | null): UiSdlGraphVisualizationZoomControlsReact;

  readonly zoomOutIcon?: string | null;
  withZoomOutIcon(zoomOutIcon: string | null): UiSdlGraphVisualizationZoomControlsReact;

  readonly zoomOutValue?: string | null;
  withZoomOutValue(zoomOutValue: string | null): UiSdlGraphVisualizationZoomControlsReact;
}

