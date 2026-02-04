export interface UiSdlGraphVisualizationSetLayoutActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationSetLayoutActionPayload;

  readonly layout?: UiSdlGraphVisualizationLayout | null;
  withLayout(layout: IUiSdlGraphVisualizationLayout | null): UiSdlGraphVisualizationSetLayoutActionPayload;
}

