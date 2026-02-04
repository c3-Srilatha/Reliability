export interface UiSdlChartData {

  readonly interval?: string | null;
  withInterval(interval: string | null): UiSdlChartData;

  readonly labels?: C3.Array<string | null | DateTime | null | null>;
  withLabels(labels: C3.Array<string | null | DateTime | null | null> | Array<string | null | DateTime | Date | string | null | null>): UiSdlChartData;

  readonly series?: C3.Array<UiSdlChartDataSeries | null>;
  withSeries(series: C3.Array<UiSdlChartDataSeries | null> | Array<IUiSdlChartDataSeries | null>): UiSdlChartData;

  readonly xAxisType?: string | null;
  withXAxisType(xAxisType: string | null): UiSdlChartData;

  readonly missing?: C3.Array<C3.Array<number | null | number | null | null>>;
  withMissing(missing: C3.Array<C3.Array<number | null | number | null | null>> | Array<C3.Array<number | null | number | null | null> | Array<number | null | number | null | null>>): UiSdlChartData;
}

