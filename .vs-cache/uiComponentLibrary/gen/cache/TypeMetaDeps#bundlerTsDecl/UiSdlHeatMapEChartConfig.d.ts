export interface UiSdlHeatMapEChartConfig {

  readonly xLabels?: C3.Array<string | null>;
  withXLabels(xLabels: C3.Array<string | null> | Array<string | null>): UiSdlHeatMapEChartConfig;

  readonly yLabels?: C3.Array<string | null>;
  withYLabels(yLabels: C3.Array<string | null> | Array<string | null>): UiSdlHeatMapEChartConfig;

  readonly series?: UiSdlHeatMapEChartSeries | null;
  withSeries(series: IUiSdlHeatMapEChartSeries | null): UiSdlHeatMapEChartConfig;

  readonly missing?: C3.Array<number | null | number | null | null>;
  withMissing(missing: C3.Array<number | null | number | null | null> | Array<number | null | number | null | null>): UiSdlHeatMapEChartConfig;
}

