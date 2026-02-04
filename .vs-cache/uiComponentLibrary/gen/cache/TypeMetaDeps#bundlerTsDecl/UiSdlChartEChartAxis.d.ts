export interface UiSdlChartEChartAxis {

  readonly id?: string | null;
  withId(id: string | null): UiSdlChartEChartAxis;

  readonly name?: string | null;
  withName(name: string | null): UiSdlChartEChartAxis;

  readonly axisType?: string | null;
  withAxisType(axisType: string | null): UiSdlChartEChartAxis;

  readonly data?: C3.Array<string | null | DateTime | null | null>;
  withData(data: C3.Array<string | null | DateTime | null | null> | Array<string | null | DateTime | Date | string | null | null>): UiSdlChartEChartAxis;

  readonly axisLabel?: any | null;
  withAxisLabel(axisLabel: any | null): UiSdlChartEChartAxis;

  readonly unit?: string | null;
  withUnit(unit: string | null): UiSdlChartEChartAxis;
}

