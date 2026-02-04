export interface UiSdlItemDragPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlItemDragPayload;

  readonly sourceData?: any | null;
  withSourceData(sourceData: any | null): UiSdlItemDragPayload;
}

