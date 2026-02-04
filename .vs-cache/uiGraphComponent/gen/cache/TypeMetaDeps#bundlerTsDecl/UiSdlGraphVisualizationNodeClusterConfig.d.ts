export interface UiSdlGraphVisualizationNodeClusterConfig {

  readonly clusterNodes?: boolean;
  withClusterNodes(clusterNodes: boolean): UiSdlGraphVisualizationNodeClusterConfig;

  readonly showClusterCount?: boolean;
  withShowClusterCount(showClusterCount: boolean): UiSdlGraphVisualizationNodeClusterConfig;

  readonly radius?: number | null;
  withRadius(radius: number | null): UiSdlGraphVisualizationNodeClusterConfig;

  readonly minNodes?: number | null;
  withMinNodes(minNodes: number | null): UiSdlGraphVisualizationNodeClusterConfig;

  readonly clusterSize?: number | null;
  withClusterSize(clusterSize: number | null): UiSdlGraphVisualizationNodeClusterConfig;

  readonly clusterDonutConfig?: UiSdlGraphVisualizationNodeClusterDonutConfig | null;
  withClusterDonutConfig(clusterDonutConfig: IUiSdlGraphVisualizationNodeClusterDonutConfig | null): UiSdlGraphVisualizationNodeClusterConfig;
}

