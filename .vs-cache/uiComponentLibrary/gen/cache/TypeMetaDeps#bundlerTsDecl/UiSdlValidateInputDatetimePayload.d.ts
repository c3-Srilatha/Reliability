export interface UiSdlValidateInputDatetimePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlValidateInputDatetimePayload;

  readonly inputValue?: string | null;
  withInputValue(inputValue: string | null): UiSdlValidateInputDatetimePayload;
}

