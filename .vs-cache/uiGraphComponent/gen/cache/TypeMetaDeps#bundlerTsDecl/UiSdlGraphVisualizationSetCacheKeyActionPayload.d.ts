export interface UiSdlGraphVisualizationSetCacheKeyActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationSetCacheKeyActionPayload;

  readonly cacheKey?: string | null;
  withCacheKey(cacheKey: string | null): UiSdlGraphVisualizationSetCacheKeyActionPayload;
}

