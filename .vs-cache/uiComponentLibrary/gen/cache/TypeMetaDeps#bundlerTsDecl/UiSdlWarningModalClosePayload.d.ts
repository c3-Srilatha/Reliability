export interface UiSdlWarningModalClosePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlWarningModalClosePayload;

  readonly warningModalId?: string | null;
  withWarningModalId(warningModalId: string | null): UiSdlWarningModalClosePayload;
}

