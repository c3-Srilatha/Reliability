export interface UiSdlDataFilterUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlDataFilterUpdatePayload;

  readonly spec?: UiSdlTimeseriesLineBarChartFilterSpec | null;
  withSpec(spec: IUiSdlTimeseriesLineBarChartFilterSpec | null): UiSdlDataFilterUpdatePayload;
}

