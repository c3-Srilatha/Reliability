export interface UiSdlParallelCoordinatesChartSeries {

  readonly groupName?: string | null;
  withGroupName(groupName: string | null): UiSdlParallelCoordinatesChartSeries;

  readonly seriesData?: C3.Array<any>;
  withSeriesData(seriesData: C3.Array<any> | Array<any>): UiSdlParallelCoordinatesChartSeries;

  readonly seriesName?: string | null;
  withSeriesName(seriesName: string | null): UiSdlParallelCoordinatesChartSeries;
}

