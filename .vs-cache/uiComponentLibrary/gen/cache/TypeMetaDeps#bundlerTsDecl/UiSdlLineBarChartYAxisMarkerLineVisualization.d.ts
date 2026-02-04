export interface UiSdlLineBarChartYAxisMarkerLineVisualization {

  readonly axisType?: string | null;
  withAxisType(axisType: string | null): UiSdlLineBarChartYAxisMarkerLineVisualization;

  readonly syncWithRelatedSeriesVisibility?: boolean;
  withSyncWithRelatedSeriesVisibility(syncWithRelatedSeriesVisibility: boolean): UiSdlLineBarChartYAxisMarkerLineVisualization;

  readonly markerAxisValue?: number | null;
  withMarkerAxisValue(markerAxisValue: number | null): UiSdlLineBarChartYAxisMarkerLineVisualization;

  readonly markerIdentifier: string;
  withMarkerIdentifier(markerIdentifier: string): UiSdlLineBarChartYAxisMarkerLineVisualization;

  readonly visualizationType?: string | null;
  withVisualizationType(visualizationType: string | null): UiSdlLineBarChartYAxisMarkerLineVisualization;

  readonly lineStyle?: string | null;
  withLineStyle(lineStyle: string | null): UiSdlLineBarChartYAxisMarkerLineVisualization;

  readonly lineWidth?: number | null;
  withLineWidth(lineWidth: number | null): UiSdlLineBarChartYAxisMarkerLineVisualization;

  readonly itemStyle?: string | null;
  withItemStyle(itemStyle: string | null): UiSdlLineBarChartYAxisMarkerLineVisualization;

  readonly smooth?: boolean;
  withSmooth(smooth: boolean): UiSdlLineBarChartYAxisMarkerLineVisualization;
}

