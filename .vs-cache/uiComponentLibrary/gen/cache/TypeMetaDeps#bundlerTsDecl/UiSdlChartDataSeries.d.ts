export interface UiSdlChartDataSeries {

  readonly id?: string | null;
  withId(id: string | null): UiSdlChartDataSeries;

  readonly values?: C3.Array<number | null>;
  withValues(values: C3.Array<number | null> | Array<number | null>): UiSdlChartDataSeries;

  readonly name?: string | null;
  withName(name: string | null): UiSdlChartDataSeries;

  readonly unit?: Unit | null;
  withUnit(unit: IUnit | null): UiSdlChartDataSeries;
}

