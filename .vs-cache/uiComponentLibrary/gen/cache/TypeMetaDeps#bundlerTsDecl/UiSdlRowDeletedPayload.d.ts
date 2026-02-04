export interface UiSdlRowDeletedPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlRowDeletedPayload;

  readonly row?: any | null;
  withRow(row: any | null): UiSdlRowDeletedPayload;
}

