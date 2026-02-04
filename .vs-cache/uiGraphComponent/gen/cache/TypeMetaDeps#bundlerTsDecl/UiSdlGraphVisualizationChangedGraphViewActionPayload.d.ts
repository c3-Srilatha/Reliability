export interface UiSdlGraphVisualizationChangedGraphViewActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationChangedGraphViewActionPayload;

  readonly view?: UiSdlGraphVisualizationGraphView | null;
  withView(view: IUiSdlGraphVisualizationGraphView | null): UiSdlGraphVisualizationChangedGraphViewActionPayload;
}

