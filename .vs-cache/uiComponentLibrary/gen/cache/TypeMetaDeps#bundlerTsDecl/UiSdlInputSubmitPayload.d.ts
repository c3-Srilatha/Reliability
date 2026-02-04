export interface UiSdlInputSubmitPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlInputSubmitPayload;

  readonly value?: any;
  withValue(value: any): UiSdlInputSubmitPayload;

  readonly onChange?: boolean;
  withOnChange(onChange: boolean): UiSdlInputSubmitPayload;

  readonly autoFill?: boolean;
  withAutoFill(autoFill: boolean): UiSdlInputSubmitPayload;
}

