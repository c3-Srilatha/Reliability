export interface UiSdlBeforeRequestDataPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlBeforeRequestDataPayload;

  readonly clickedDataItem?: any | null;
  withClickedDataItem(clickedDataItem: any | null): UiSdlBeforeRequestDataPayload;
}

