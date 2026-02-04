export interface UiSdlUpdateXAxisPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlUpdateXAxisPayload;

  readonly xAxis?: UiSdlLineBarChartXAxisConfig | null | UiSdlHistogramXAxisConfig | null | null;
  withXAxis(xAxis: IUiSdlLineBarChartXAxisConfig | null | IUiSdlHistogramXAxisConfig | null | null): UiSdlUpdateXAxisPayload;
}

