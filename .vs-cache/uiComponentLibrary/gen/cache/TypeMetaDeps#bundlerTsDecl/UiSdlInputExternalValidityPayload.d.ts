export interface UiSdlInputExternalValidityPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlInputExternalValidityPayload;

  readonly field: string;
  withField(field: string): UiSdlInputExternalValidityPayload;

  readonly value?: any;
  withValue(value: any): UiSdlInputExternalValidityPayload;
}

