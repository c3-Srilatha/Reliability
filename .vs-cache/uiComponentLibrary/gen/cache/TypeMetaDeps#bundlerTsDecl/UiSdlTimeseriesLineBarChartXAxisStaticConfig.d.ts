export interface UiSdlTimeseriesLineBarChartXAxisStaticConfig {

  readonly name?: string | null | UiSdlDynamicValueSpec | null | null;
  withName(name: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTimeseriesLineBarChartXAxisStaticConfig;

  readonly rotate?: number | null;
  withRotate(rotate: number | null): UiSdlTimeseriesLineBarChartXAxisStaticConfig;

  readonly nameGap?: number | null;
  withNameGap(nameGap: number | null): UiSdlTimeseriesLineBarChartXAxisStaticConfig;

  readonly interval?: string | null;
  withInterval(interval: string | null): UiSdlTimeseriesLineBarChartXAxisStaticConfig;

  readonly startDate?: DateTime | null;
  withStartDate(startDate: DateTime | Date | string | null): UiSdlTimeseriesLineBarChartXAxisStaticConfig;

  readonly endDate?: DateTime | null;
  withEndDate(endDate: DateTime | Date | string | null): UiSdlTimeseriesLineBarChartXAxisStaticConfig;
}

