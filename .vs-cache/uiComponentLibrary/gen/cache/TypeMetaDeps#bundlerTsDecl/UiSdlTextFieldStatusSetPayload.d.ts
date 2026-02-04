export interface UiSdlTextFieldStatusSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTextFieldStatusSetPayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlTextFieldStatusSetPayload;
}

