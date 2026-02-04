export interface UiSdlChartSynchronizedModeChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlChartSynchronizedModeChangePayload;

  readonly synchronized?: boolean;
  withSynchronized(synchronized: boolean): UiSdlChartSynchronizedModeChangePayload;
}

