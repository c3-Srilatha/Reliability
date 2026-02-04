export interface UiSdlSegmentedButtonValueSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSegmentedButtonValueSetPayload;

  readonly value: string;
  withValue(value: string): UiSdlSegmentedButtonValueSetPayload;
}

