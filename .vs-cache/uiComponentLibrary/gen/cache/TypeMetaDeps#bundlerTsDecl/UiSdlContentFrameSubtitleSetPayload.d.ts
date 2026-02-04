export interface UiSdlContentFrameSubtitleSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlContentFrameSubtitleSetPayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlContentFrameSubtitleSetPayload;
}

