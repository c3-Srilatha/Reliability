export interface UiSdlGraphVisualizationSetSelectedItemsActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationSetSelectedItemsActionPayload;

  readonly selectedItemIds?: C3.Array<string | null>;
  withSelectedItemIds(selectedItemIds: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationSetSelectedItemsActionPayload;
}

