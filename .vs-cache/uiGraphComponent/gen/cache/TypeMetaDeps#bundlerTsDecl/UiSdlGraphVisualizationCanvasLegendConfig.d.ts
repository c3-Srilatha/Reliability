export interface UiSdlGraphVisualizationCanvasLegendConfig {

  readonly maxLegendItems?: number | null;
  withMaxLegendItems(maxLegendItems: number | null): UiSdlGraphVisualizationCanvasLegendConfig;

  readonly icon?: string | null;
  withIcon(icon: string | null): UiSdlGraphVisualizationCanvasLegendConfig;
}

