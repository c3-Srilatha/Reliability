export interface UiSdlLineBarChartYAxisConfigOverride {

  readonly yAxisTitleLocation?: string | null;
  withYAxisTitleLocation(yAxisTitleLocation: string | null): UiSdlLineBarChartYAxisConfigOverride;

  readonly yAxisTitleRotation?: number | null;
  withYAxisTitleRotation(yAxisTitleRotation: number | null): UiSdlLineBarChartYAxisConfigOverride;

  readonly yAxisTitleGap?: number | null;
  withYAxisTitleGap(yAxisTitleGap: number | null): UiSdlLineBarChartYAxisConfigOverride;
}

