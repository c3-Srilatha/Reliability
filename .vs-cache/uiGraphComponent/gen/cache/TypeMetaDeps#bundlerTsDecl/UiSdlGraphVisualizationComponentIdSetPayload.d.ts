export interface UiSdlGraphVisualizationComponentIdSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationComponentIdSetPayload;

  readonly uiSdlGraphVisualizationComponentId?: string | null;
  withUiSdlGraphVisualizationComponentId(uiSdlGraphVisualizationComponentId: string | null): UiSdlGraphVisualizationComponentIdSetPayload;
}

