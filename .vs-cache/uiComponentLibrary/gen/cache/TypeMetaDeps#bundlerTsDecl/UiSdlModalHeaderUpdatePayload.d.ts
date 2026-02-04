export interface UiSdlModalHeaderUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlModalHeaderUpdatePayload;

  readonly header?: string | null;
  withHeader(header: string | null): UiSdlModalHeaderUpdatePayload;
}

