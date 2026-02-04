export interface UiSdlTextareaStatusSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTextareaStatusSetPayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlTextareaStatusSetPayload;
}

