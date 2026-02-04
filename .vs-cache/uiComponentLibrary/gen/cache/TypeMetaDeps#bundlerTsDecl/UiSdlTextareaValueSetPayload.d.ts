export interface UiSdlTextareaValueSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTextareaValueSetPayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlTextareaValueSetPayload;
}

