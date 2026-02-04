export interface UiSdlInputChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlInputChangePayload;

  readonly field?: string | null;
  withField(field: string | null): UiSdlInputChangePayload;

  readonly value?: any;
  withValue(value: any): UiSdlInputChangePayload;

  readonly inputHasChanged?: boolean;
  withInputHasChanged(inputHasChanged: boolean): UiSdlInputChangePayload;
}

