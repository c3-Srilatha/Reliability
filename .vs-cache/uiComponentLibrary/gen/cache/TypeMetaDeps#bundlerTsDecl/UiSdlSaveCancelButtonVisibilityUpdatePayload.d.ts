export interface UiSdlSaveCancelButtonVisibilityUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSaveCancelButtonVisibilityUpdatePayload;

  readonly visible?: boolean;
  withVisible(visible: boolean): UiSdlSaveCancelButtonVisibilityUpdatePayload;
}

