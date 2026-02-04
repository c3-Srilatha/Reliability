export interface UiSdlInvalidSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlInvalidSetPayload;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlInvalidSetPayload;
}

