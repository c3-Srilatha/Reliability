export interface UiSdlChangeInputPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlChangeInputPayload;

  readonly value?: any;
  withValue(value: any): UiSdlChangeInputPayload;
}

