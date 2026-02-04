export interface UiSdlGraphVisualizationPingConfig {

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphVisualizationPingConfig;

  readonly haloRadius?: number | null;
  withHaloRadius(haloRadius: number | null): UiSdlGraphVisualizationPingConfig;

  readonly haloWidth?: number | null;
  withHaloWidth(haloWidth: number | null): UiSdlGraphVisualizationPingConfig;

  readonly linkWidth?: number | null;
  withLinkWidth(linkWidth: number | null): UiSdlGraphVisualizationPingConfig;

  readonly repeat?: number | null;
  withRepeat(repeat: number | null): UiSdlGraphVisualizationPingConfig;

  readonly time?: number | null;
  withTime(time: number | null): UiSdlGraphVisualizationPingConfig;
}

