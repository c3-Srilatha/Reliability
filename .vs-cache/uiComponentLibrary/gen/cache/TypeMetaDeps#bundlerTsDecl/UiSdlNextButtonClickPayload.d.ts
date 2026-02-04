export interface UiSdlNextButtonClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlNextButtonClickPayload;

  readonly event?: any;
  withEvent(event: any): UiSdlNextButtonClickPayload;
}

