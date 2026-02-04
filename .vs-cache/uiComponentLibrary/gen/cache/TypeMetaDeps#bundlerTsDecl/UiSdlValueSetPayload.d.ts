export interface UiSdlValueSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlValueSetPayload;

  readonly value?: any;
  withValue(value: any): UiSdlValueSetPayload;
}

