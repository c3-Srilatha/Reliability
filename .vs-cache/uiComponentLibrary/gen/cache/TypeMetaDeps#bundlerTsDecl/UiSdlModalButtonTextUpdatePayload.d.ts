export interface UiSdlModalButtonTextUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlModalButtonTextUpdatePayload;

  readonly buttonType?: string | null;
  withButtonType(buttonType: string | null): UiSdlModalButtonTextUpdatePayload;

  readonly buttonText?: string | null;
  withButtonText(buttonText: string | null): UiSdlModalButtonTextUpdatePayload;
}

