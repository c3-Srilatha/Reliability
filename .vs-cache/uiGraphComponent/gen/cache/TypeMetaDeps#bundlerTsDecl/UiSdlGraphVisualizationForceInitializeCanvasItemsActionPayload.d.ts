export interface UiSdlGraphVisualizationForceInitializeCanvasItemsActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationForceInitializeCanvasItemsActionPayload;

  readonly shouldForceInitialization?: boolean;
  withShouldForceInitialization(shouldForceInitialization: boolean): UiSdlGraphVisualizationForceInitializeCanvasItemsActionPayload;
}

