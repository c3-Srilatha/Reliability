export interface AlertTimeSeriesChartAndFilterPanelData {

  readonly chartConfig?: UiApTimeseriesChartConfig | null;
  withChartConfig(chartConfig: IUiApTimeseriesChartConfig | null): AlertTimeSeriesChartAndFilterPanelData;

  readonly filterPanelSpec?: Spec | null;
  withFilterPanelSpec(filterPanelSpec: ISpec | null): AlertTimeSeriesChartAndFilterPanelData;

  readonly assetId?: string | null;
  withAssetId(assetId: string | null): AlertTimeSeriesChartAndFilterPanelData;

  readonly project?: ReliabilityMl.Project | null;
  withProject(project: IReliabilityMl.Project | null): AlertTimeSeriesChartAndFilterPanelData;
}

