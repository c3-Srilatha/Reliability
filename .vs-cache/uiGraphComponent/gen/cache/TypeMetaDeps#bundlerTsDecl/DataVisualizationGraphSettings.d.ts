export interface DataVisualizationGraphSettings {

  readonly graphCacheKeyFieldPath?: string | null;
  withGraphCacheKeyFieldPath(graphCacheKeyFieldPath: string | null): DataVisualizationGraphSettings;

  static readonly graphCacheKeyFieldPath?: string | null;
}

