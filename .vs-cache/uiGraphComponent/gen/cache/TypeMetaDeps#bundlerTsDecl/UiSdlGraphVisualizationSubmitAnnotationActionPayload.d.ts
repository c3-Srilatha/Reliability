export interface UiSdlGraphVisualizationSubmitAnnotationActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationSubmitAnnotationActionPayload;

  readonly annotation?: string | null;
  withAnnotation(annotation: string | null): UiSdlGraphVisualizationSubmitAnnotationActionPayload;

  readonly itemId?: string | null;
  withItemId(itemId: string | null): UiSdlGraphVisualizationSubmitAnnotationActionPayload;
}

