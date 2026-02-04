export interface UiSdlContentFrameTopColorSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlContentFrameTopColorSetPayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlContentFrameTopColorSetPayload;
}

