export interface UiSdlRowAddedPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlRowAddedPayload;

  readonly row?: any | null;
  withRow(row: any | null): UiSdlRowAddedPayload;
}

