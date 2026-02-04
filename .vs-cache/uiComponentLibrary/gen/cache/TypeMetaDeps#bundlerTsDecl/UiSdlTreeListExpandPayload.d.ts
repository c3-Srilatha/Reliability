export interface UiSdlTreeListExpandPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTreeListExpandPayload;

  readonly clickedDataItem?: any | null;
  withClickedDataItem(clickedDataItem: any | null): UiSdlTreeListExpandPayload;
}

