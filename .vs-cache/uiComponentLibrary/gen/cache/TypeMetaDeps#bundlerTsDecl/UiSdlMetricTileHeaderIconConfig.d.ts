export interface UiSdlMetricTileHeaderIconConfig {

  readonly icon?: string | null;
  withIcon(icon: string | null): UiSdlMetricTileHeaderIconConfig;

  readonly tooltipText?: string | null;
  withTooltipText(tooltipText: string | null): UiSdlMetricTileHeaderIconConfig;
}

