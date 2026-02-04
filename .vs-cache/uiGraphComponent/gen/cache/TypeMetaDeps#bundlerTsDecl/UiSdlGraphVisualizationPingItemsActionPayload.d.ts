export interface UiSdlGraphVisualizationPingItemsActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationPingItemsActionPayload;

  readonly pingItemIds?: C3.Array<string | null>;
  withPingItemIds(pingItemIds: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationPingItemsActionPayload;
}

