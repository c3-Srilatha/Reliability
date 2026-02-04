export interface UiSdlLineBarChartYAxisMarkerRangeShadingVisualization {

  readonly axisType?: string | null;
  withAxisType(axisType: string | null): UiSdlLineBarChartYAxisMarkerRangeShadingVisualization;

  readonly syncWithRelatedSeriesVisibility?: boolean;
  withSyncWithRelatedSeriesVisibility(syncWithRelatedSeriesVisibility: boolean): UiSdlLineBarChartYAxisMarkerRangeShadingVisualization;

  readonly markerAxisValue?: UiSdlChartAxisMarkersRangeValue<number | null> | null;
  withMarkerAxisValue(markerAxisValue: IUiSdlChartAxisMarkersRangeValue<number | null> | null): UiSdlLineBarChartYAxisMarkerRangeShadingVisualization;

  readonly markerIdentifier: string;
  withMarkerIdentifier(markerIdentifier: string): UiSdlLineBarChartYAxisMarkerRangeShadingVisualization;

  readonly visualizationType: string;
  withVisualizationType(visualizationType: string): UiSdlLineBarChartYAxisMarkerRangeShadingVisualization;

  readonly opacity?: number | null;
  withOpacity(opacity: number | null): UiSdlLineBarChartYAxisMarkerRangeShadingVisualization;

  readonly highlightOpacity?: number | null;
  withHighlightOpacity(highlightOpacity: number | null): UiSdlLineBarChartYAxisMarkerRangeShadingVisualization;
}

