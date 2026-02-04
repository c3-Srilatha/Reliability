export interface UiSdlContentFrameTitleSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlContentFrameTitleSetPayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlContentFrameTitleSetPayload;
}

