export interface UiSdlLineBarChartXAxisMarkerRangeShadingVisualization {

  readonly visualizationType?: string | null;
  withVisualizationType(visualizationType: string | null): UiSdlLineBarChartXAxisMarkerRangeShadingVisualization;

  readonly lineStyle?: string | null;
  withLineStyle(lineStyle: string | null): UiSdlLineBarChartXAxisMarkerRangeShadingVisualization;

  readonly lineWidth?: number | null;
  withLineWidth(lineWidth: number | null): UiSdlLineBarChartXAxisMarkerRangeShadingVisualization;

  readonly itemStyle?: string | null;
  withItemStyle(itemStyle: string | null): UiSdlLineBarChartXAxisMarkerRangeShadingVisualization;

  readonly smooth?: boolean;
  withSmooth(smooth: boolean): UiSdlLineBarChartXAxisMarkerRangeShadingVisualization;

  readonly showGradient?: boolean;
  withShowGradient(showGradient: boolean): UiSdlLineBarChartXAxisMarkerRangeShadingVisualization;

  readonly axisType?: string | null;
  withAxisType(axisType: string | null): UiSdlLineBarChartXAxisMarkerRangeShadingVisualization;

  readonly syncWithRelatedSeriesVisibility?: boolean;
  withSyncWithRelatedSeriesVisibility(syncWithRelatedSeriesVisibility: boolean): UiSdlLineBarChartXAxisMarkerRangeShadingVisualization;

  readonly markerAxisValue?: C3.Array<UiSdlChartAxisMarkersRangeValue<DateTime | null> | null>;
  withMarkerAxisValue(markerAxisValue: C3.Array<UiSdlChartAxisMarkersRangeValue<DateTime | null> | null> | Array<IUiSdlChartAxisMarkersRangeValue<DateTime | null> | null>): UiSdlLineBarChartXAxisMarkerRangeShadingVisualization;

  readonly markerIdentifier: string;
  withMarkerIdentifier(markerIdentifier: string): UiSdlLineBarChartXAxisMarkerRangeShadingVisualization;
}

