export interface UiSdlFilterStringValidatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlFilterStringValidatePayload;

  readonly filterString?: string | null;
  withFilterString(filterString: string | null): UiSdlFilterStringValidatePayload;
}

