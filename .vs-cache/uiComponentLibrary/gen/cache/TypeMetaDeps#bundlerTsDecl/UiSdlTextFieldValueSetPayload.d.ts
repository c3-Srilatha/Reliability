export interface UiSdlTextFieldValueSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTextFieldValueSetPayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlTextFieldValueSetPayload;
}

