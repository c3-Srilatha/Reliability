export interface UiSdlFilterInputEnableDisablePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlFilterInputEnableDisablePayload;

  readonly field: string;
  withField(field: string): UiSdlFilterInputEnableDisablePayload;
}

