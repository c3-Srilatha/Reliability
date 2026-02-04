export interface UiSdlGraphVisualizationZoomControls {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationZoomControls;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationZoomControls;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationZoomControls;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationZoomControls;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationZoomControls;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationZoomControls;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationZoomControls;

  readonly zoomFitIcon?: string | null;
  withZoomFitIcon(zoomFitIcon: string | null): UiSdlGraphVisualizationZoomControls;

  readonly zoomFitValue?: string | null;
  withZoomFitValue(zoomFitValue: string | null): UiSdlGraphVisualizationZoomControls;

  readonly zoomInIcon?: string | null;
  withZoomInIcon(zoomInIcon: string | null): UiSdlGraphVisualizationZoomControls;

  readonly zoomInValue?: string | null;
  withZoomInValue(zoomInValue: string | null): UiSdlGraphVisualizationZoomControls;

  readonly zoomOutIcon?: string | null;
  withZoomOutIcon(zoomOutIcon: string | null): UiSdlGraphVisualizationZoomControls;

  readonly zoomOutValue?: string | null;
  withZoomOutValue(zoomOutValue: string | null): UiSdlGraphVisualizationZoomControls;
}

