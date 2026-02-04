export interface UiSdlDataTypeUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlDataTypeUpdatePayload;

  readonly newType: string;
  withNewType(newType: string): UiSdlDataTypeUpdatePayload;
}

