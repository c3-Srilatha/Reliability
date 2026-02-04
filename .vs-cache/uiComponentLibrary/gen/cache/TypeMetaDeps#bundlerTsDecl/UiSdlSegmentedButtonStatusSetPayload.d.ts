export interface UiSdlSegmentedButtonStatusSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSegmentedButtonStatusSetPayload;

  readonly status: string;
  withStatus(status: string): UiSdlSegmentedButtonStatusSetPayload;
}

