export interface UiSdlFormStatusUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlFormStatusUpdatePayload;

  readonly formStatus?: UiSdlFormStatus | null;
  withFormStatus(formStatus: IUiSdlFormStatus | null): UiSdlFormStatusUpdatePayload;
}

