export interface UiSdlGraphVisualizationSetTimeBarInRangeItemsActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationSetTimeBarInRangeItemsActionPayload;

  readonly timeBarInRangeItems?: C3.Array<string | null>;
  withTimeBarInRangeItems(timeBarInRangeItems: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationSetTimeBarInRangeItemsActionPayload;
}

