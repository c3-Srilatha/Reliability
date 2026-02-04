export interface UiSdlChartEChartSeries {

  readonly id?: string | null;
  withId(id: string | null): UiSdlChartEChartSeries;

  readonly name?: string | null;
  withName(name: string | null): UiSdlChartEChartSeries;

  readonly yAxisIndex?: number | null;
  withYAxisIndex(yAxisIndex: number | null): UiSdlChartEChartSeries;

  readonly data?: C3.Array<C3.Array<string | null | DateTime | null | number | null | null>>;
  withData(data: C3.Array<C3.Array<string | null | DateTime | null | number | null | null>> | Array<C3.Array<string | null | DateTime | null | number | null | null> | Array<string | null | DateTime | Date | string | null | number | null | null>>): UiSdlChartEChartSeries;
}

