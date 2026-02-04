export interface UiSdlCategoricalLineBarChartLineVisualization {

  readonly visualizationType?: string | null;
  withVisualizationType(visualizationType: string | null): UiSdlCategoricalLineBarChartLineVisualization;

  readonly lineStyle?: string | null;
  withLineStyle(lineStyle: string | null): UiSdlCategoricalLineBarChartLineVisualization;

  readonly lineWidth?: number | null;
  withLineWidth(lineWidth: number | null): UiSdlCategoricalLineBarChartLineVisualization;

  readonly itemStyle?: string | null;
  withItemStyle(itemStyle: string | null): UiSdlCategoricalLineBarChartLineVisualization;

  readonly smooth?: boolean;
  withSmooth(smooth: boolean): UiSdlCategoricalLineBarChartLineVisualization;
}

