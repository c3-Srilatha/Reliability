export interface UiSdlSetFilterInputPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSetFilterInputPayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlSetFilterInputPayload;
}

