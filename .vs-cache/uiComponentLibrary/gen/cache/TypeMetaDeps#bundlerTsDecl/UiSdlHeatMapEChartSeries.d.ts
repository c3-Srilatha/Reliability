export interface UiSdlHeatMapEChartSeries {

  readonly id?: string | null;
  withId(id: string | null): UiSdlHeatMapEChartSeries;

  readonly name?: string | null;
  withName(name: string | null): UiSdlHeatMapEChartSeries;

  readonly data?: C3.Array<UiSdlHeatMapDataValue | null>;
  withData(data: C3.Array<UiSdlHeatMapDataValue | null> | Array<IUiSdlHeatMapDataValue | null>): UiSdlHeatMapEChartSeries;
}

