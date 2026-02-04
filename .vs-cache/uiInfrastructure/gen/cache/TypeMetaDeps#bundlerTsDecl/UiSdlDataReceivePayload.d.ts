export interface UiSdlDataReceivePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlDataReceivePayload;

  readonly response?: any;
  withResponse(response: any): UiSdlDataReceivePayload;
}

