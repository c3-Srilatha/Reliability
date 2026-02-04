export interface UiSdlTimeseriesLineBarChartLineVisualization {

  readonly visualizationType?: string | null;
  withVisualizationType(visualizationType: string | null): UiSdlTimeseriesLineBarChartLineVisualization;

  readonly lineStyle?: string | null;
  withLineStyle(lineStyle: string | null): UiSdlTimeseriesLineBarChartLineVisualization;

  readonly lineWidth?: number | null;
  withLineWidth(lineWidth: number | null): UiSdlTimeseriesLineBarChartLineVisualization;

  readonly itemStyle?: string | null;
  withItemStyle(itemStyle: string | null): UiSdlTimeseriesLineBarChartLineVisualization;

  readonly smooth?: boolean;
  withSmooth(smooth: boolean): UiSdlTimeseriesLineBarChartLineVisualization;

  readonly showGradient?: boolean;
  withShowGradient(showGradient: boolean): UiSdlTimeseriesLineBarChartLineVisualization;
}

