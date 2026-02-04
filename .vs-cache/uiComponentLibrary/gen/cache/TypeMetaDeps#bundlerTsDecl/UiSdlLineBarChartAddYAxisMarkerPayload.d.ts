export interface UiSdlLineBarChartAddYAxisMarkerPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlLineBarChartAddYAxisMarkerPayload;

  readonly markerConfig?: UiSdlLineBarChartYAxisMarkerLineSpec | null;
  withMarkerConfig(markerConfig: IUiSdlLineBarChartYAxisMarkerLineSpec | null): UiSdlLineBarChartAddYAxisMarkerPayload;
}

