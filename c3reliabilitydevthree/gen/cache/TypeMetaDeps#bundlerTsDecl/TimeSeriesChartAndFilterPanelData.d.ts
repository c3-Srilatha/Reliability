export interface TimeSeriesChartAndFilterPanelData {

  readonly chartConfig?: UiApTimeseriesChartConfig | null;
  withChartConfig(chartConfig: IUiApTimeseriesChartConfig | null): TimeSeriesChartAndFilterPanelData;

  readonly filterPanelSpec?: Spec | null;
  withFilterPanelSpec(filterPanelSpec: ISpec | null): TimeSeriesChartAndFilterPanelData;
}

