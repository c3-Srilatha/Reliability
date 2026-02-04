export interface UiSdlItemDragRemovePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlItemDragRemovePayload;

  readonly sourceData?: any | null;
  withSourceData(sourceData: any | null): UiSdlItemDragRemovePayload;
}

