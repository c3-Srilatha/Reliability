export interface UiSdlButtonSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlButtonSetPayload;

  readonly value?: boolean;
  withValue(value: boolean): UiSdlButtonSetPayload;
}

