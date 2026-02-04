export interface UiSdlContentFrameIconSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlContentFrameIconSetPayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlContentFrameIconSetPayload;
}

