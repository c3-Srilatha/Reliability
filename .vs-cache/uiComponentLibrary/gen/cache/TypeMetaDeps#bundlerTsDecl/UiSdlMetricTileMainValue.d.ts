export interface UiSdlMetricTileMainValue {

  readonly xAxes?: C3.Array<UiSdlChartEChartAxis | null>;
  withXAxes(xAxes: C3.Array<UiSdlChartEChartAxis | null> | Array<IUiSdlChartEChartAxis | null>): UiSdlMetricTileMainValue;

  readonly yAxes?: C3.Array<UiSdlChartEChartAxis | null>;
  withYAxes(yAxes: C3.Array<UiSdlChartEChartAxis | null> | Array<IUiSdlChartEChartAxis | null>): UiSdlMetricTileMainValue;

  readonly grid?: C3.Array<UiSdlChartEChartsGrid | null>;
  withGrid(grid: C3.Array<UiSdlChartEChartsGrid | null> | Array<IUiSdlChartEChartsGrid | null>): UiSdlMetricTileMainValue;

  readonly series?: C3.Array<UiSdlChartEChartSeries | null>;
  withSeries(series: C3.Array<UiSdlChartEChartSeries | null> | Array<IUiSdlChartEChartSeries | null>): UiSdlMetricTileMainValue;

  readonly missing?: C3.Array<C3.Array<number | null | number | null | null>>;
  withMissing(missing: C3.Array<C3.Array<number | null | number | null | null>> | Array<C3.Array<number | null | number | null | null> | Array<number | null | number | null | null>>): UiSdlMetricTileMainValue;

  readonly singleValue?: number | null;
  withSingleValue(singleValue: number | null): UiSdlMetricTileMainValue;
}

