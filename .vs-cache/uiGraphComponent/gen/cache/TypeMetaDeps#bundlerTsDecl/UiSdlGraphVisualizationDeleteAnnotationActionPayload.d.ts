export interface UiSdlGraphVisualizationDeleteAnnotationActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationDeleteAnnotationActionPayload;

  readonly itemId?: string | null;
  withItemId(itemId: string | null): UiSdlGraphVisualizationDeleteAnnotationActionPayload;
}

