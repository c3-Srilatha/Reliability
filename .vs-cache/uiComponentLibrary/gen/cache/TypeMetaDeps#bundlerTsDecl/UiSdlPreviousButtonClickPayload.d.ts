export interface UiSdlPreviousButtonClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlPreviousButtonClickPayload;

  readonly event?: any;
  withEvent(event: any): UiSdlPreviousButtonClickPayload;
}

