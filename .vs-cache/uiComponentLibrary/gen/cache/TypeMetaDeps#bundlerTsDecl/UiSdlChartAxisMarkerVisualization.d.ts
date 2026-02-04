export interface UiSdlChartAxisMarkerVisualization {

  readonly axisType: string;
  withAxisType(axisType: string): UiSdlChartAxisMarkerVisualization;

  readonly syncWithRelatedSeriesVisibility?: boolean;
  withSyncWithRelatedSeriesVisibility(syncWithRelatedSeriesVisibility: boolean): UiSdlChartAxisMarkerVisualization;
}

