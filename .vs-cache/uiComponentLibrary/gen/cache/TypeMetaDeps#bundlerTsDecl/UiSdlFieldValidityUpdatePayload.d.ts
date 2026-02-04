export interface UiSdlFieldValidityUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlFieldValidityUpdatePayload;

  readonly field: string;
  withField(field: string): UiSdlFieldValidityUpdatePayload;

  readonly valid?: boolean;
  withValid(valid: boolean): UiSdlFieldValidityUpdatePayload;
}

