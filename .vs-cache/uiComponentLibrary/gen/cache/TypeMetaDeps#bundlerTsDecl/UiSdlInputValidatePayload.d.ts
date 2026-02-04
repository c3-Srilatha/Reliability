export interface UiSdlInputValidatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlInputValidatePayload;

  readonly field?: string | null;
  withField(field: string | null): UiSdlInputValidatePayload;

  readonly value?: any;
  withValue(value: any): UiSdlInputValidatePayload;
}

