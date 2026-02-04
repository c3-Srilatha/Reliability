export interface UiSdlMetricTileDataCollection {

  readonly historicSparkline?: UiSdlChartEChartConfig | null;
  withHistoricSparkline(historicSparkline: IUiSdlChartEChartConfig | null): UiSdlMetricTileDataCollection;

  readonly forecastSparkline?: UiSdlChartEChartConfig | null;
  withForecastSparkline(forecastSparkline: IUiSdlChartEChartConfig | null): UiSdlMetricTileDataCollection;

  readonly planSparkline?: UiSdlChartEChartConfig | null;
  withPlanSparkline(planSparkline: IUiSdlChartEChartConfig | null): UiSdlMetricTileDataCollection;

  readonly mainValue?: UiSdlMetricTileMainValue | null;
  withMainValue(mainValue: IUiSdlMetricTileMainValue | null): UiSdlMetricTileDataCollection;
}

