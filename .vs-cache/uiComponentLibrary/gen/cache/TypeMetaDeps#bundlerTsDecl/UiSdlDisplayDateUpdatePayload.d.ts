export interface UiSdlDisplayDateUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlDisplayDateUpdatePayload;

  readonly spec?: UiSdlTimeseriesLineBarChartFilterSpec | null;
  withSpec(spec: IUiSdlTimeseriesLineBarChartFilterSpec | null): UiSdlDisplayDateUpdatePayload;
}

