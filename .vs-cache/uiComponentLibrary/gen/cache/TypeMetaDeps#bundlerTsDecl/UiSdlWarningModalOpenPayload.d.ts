export interface UiSdlWarningModalOpenPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlWarningModalOpenPayload;

  readonly warningModalId?: string | null;
  withWarningModalId(warningModalId: string | null): UiSdlWarningModalOpenPayload;
}

