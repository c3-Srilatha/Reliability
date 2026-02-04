export interface UiSdlUpdateYAxisPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlUpdateYAxisPayload;

  readonly yAxis?: UiSdlLineBarChartYAxisConfig | null | UiSdlHistogramYAxisConfig | null | null;
  withYAxis(yAxis: IUiSdlLineBarChartYAxisConfig | null | IUiSdlHistogramYAxisConfig | null | null): UiSdlUpdateYAxisPayload;
}

