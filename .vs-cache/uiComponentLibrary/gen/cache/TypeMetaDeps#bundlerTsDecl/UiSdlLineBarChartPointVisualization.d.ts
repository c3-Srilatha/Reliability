export interface UiSdlLineBarChartPointVisualization {

  readonly visualizationType?: string | null;
  withVisualizationType(visualizationType: string | null): UiSdlLineBarChartPointVisualization;

  readonly itemStyle?: string | null;
  withItemStyle(itemStyle: string | null): UiSdlLineBarChartPointVisualization;
}

