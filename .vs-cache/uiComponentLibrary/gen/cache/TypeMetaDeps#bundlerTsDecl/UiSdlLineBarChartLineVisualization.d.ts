export interface UiSdlLineBarChartLineVisualization {

  readonly visualizationType?: string | null;
  withVisualizationType(visualizationType: string | null): UiSdlLineBarChartLineVisualization;

  readonly lineStyle?: string | null;
  withLineStyle(lineStyle: string | null): UiSdlLineBarChartLineVisualization;

  readonly lineWidth?: number | null;
  withLineWidth(lineWidth: number | null): UiSdlLineBarChartLineVisualization;

  readonly itemStyle?: string | null;
  withItemStyle(itemStyle: string | null): UiSdlLineBarChartLineVisualization;

  readonly smooth?: boolean;
  withSmooth(smooth: boolean): UiSdlLineBarChartLineVisualization;
}

