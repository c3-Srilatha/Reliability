export interface UiSdlInputEnableDisablePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlInputEnableDisablePayload;

  readonly field: string;
  withField(field: string): UiSdlInputEnableDisablePayload;
}

