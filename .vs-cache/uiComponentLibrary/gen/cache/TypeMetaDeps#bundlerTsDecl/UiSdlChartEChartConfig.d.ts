export interface UiSdlChartEChartConfig {

  readonly xAxes?: C3.Array<UiSdlChartEChartAxis | null>;
  withXAxes(xAxes: C3.Array<UiSdlChartEChartAxis | null> | Array<IUiSdlChartEChartAxis | null>): UiSdlChartEChartConfig;

  readonly yAxes?: C3.Array<UiSdlChartEChartAxis | null>;
  withYAxes(yAxes: C3.Array<UiSdlChartEChartAxis | null> | Array<IUiSdlChartEChartAxis | null>): UiSdlChartEChartConfig;

  readonly grid?: C3.Array<UiSdlChartEChartsGrid | null>;
  withGrid(grid: C3.Array<UiSdlChartEChartsGrid | null> | Array<IUiSdlChartEChartsGrid | null>): UiSdlChartEChartConfig;

  readonly series?: C3.Array<UiSdlChartEChartSeries | null>;
  withSeries(series: C3.Array<UiSdlChartEChartSeries | null> | Array<IUiSdlChartEChartSeries | null>): UiSdlChartEChartConfig;

  readonly missing?: C3.Array<C3.Array<number | null | number | null | null>>;
  withMissing(missing: C3.Array<C3.Array<number | null | number | null | null>> | Array<C3.Array<number | null | number | null | null> | Array<number | null | number | null | null>>): UiSdlChartEChartConfig;
}

