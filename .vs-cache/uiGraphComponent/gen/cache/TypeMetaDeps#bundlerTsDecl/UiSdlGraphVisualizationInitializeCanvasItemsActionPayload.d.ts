export interface UiSdlGraphVisualizationInitializeCanvasItemsActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationInitializeCanvasItemsActionPayload;

  readonly items?: C3.Array<UiSdlGraphVisualizationDataItem | null>;
  withItems(items: C3.Array<UiSdlGraphVisualizationDataItem | null> | Array<IUiSdlGraphVisualizationDataItem | null>): UiSdlGraphVisualizationInitializeCanvasItemsActionPayload;
}

