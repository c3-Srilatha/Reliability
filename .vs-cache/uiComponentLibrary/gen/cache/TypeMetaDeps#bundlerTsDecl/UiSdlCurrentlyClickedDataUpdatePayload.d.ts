export interface UiSdlCurrentlyClickedDataUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlCurrentlyClickedDataUpdatePayload;

  readonly data?: any | null;
  withData(data: any | null): UiSdlCurrentlyClickedDataUpdatePayload;
}

