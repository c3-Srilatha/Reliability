export interface UiSdlTimeseriesLineBarChartFilterSpec {

  readonly start?: string | null;
  withStart(start: string | null): UiSdlTimeseriesLineBarChartFilterSpec;

  readonly end?: string | null;
  withEnd(end: string | null): UiSdlTimeseriesLineBarChartFilterSpec;

  readonly interval?: string | null;
  withInterval(interval: string | null): UiSdlTimeseriesLineBarChartFilterSpec;
}

