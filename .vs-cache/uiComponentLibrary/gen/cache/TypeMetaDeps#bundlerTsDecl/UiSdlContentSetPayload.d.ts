export interface UiSdlContentSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlContentSetPayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlContentSetPayload;
}

