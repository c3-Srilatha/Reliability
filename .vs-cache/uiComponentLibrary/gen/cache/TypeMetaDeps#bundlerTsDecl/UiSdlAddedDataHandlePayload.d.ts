export interface UiSdlAddedDataHandlePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlAddedDataHandlePayload;

  readonly dataId?: string | null;
  withDataId(dataId: string | null): UiSdlAddedDataHandlePayload;
}

