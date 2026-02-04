export interface UiSdlTimeseriesLineBarChartXAxisConfig {

  readonly name?: string | null | UiSdlDynamicValueSpec | null | null;
  withName(name: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTimeseriesLineBarChartXAxisConfig;

  readonly rotate?: number | null;
  withRotate(rotate: number | null): UiSdlTimeseriesLineBarChartXAxisConfig;

  readonly nameGap?: number | null;
  withNameGap(nameGap: number | null): UiSdlTimeseriesLineBarChartXAxisConfig;

  readonly interval?: string | null;
  withInterval(interval: string | null): UiSdlTimeseriesLineBarChartXAxisConfig;

  readonly startDate?: string | null;
  withStartDate(startDate: string | null): UiSdlTimeseriesLineBarChartXAxisConfig;

  readonly endDate?: string | null;
  withEndDate(endDate: string | null): UiSdlTimeseriesLineBarChartXAxisConfig;
}

