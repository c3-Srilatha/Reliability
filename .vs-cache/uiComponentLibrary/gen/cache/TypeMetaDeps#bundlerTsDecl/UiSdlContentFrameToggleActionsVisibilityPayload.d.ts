export interface UiSdlContentFrameToggleActionsVisibilityPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlContentFrameToggleActionsVisibilityPayload;

  readonly actionId?: string | null;
  withActionId(actionId: string | null): UiSdlContentFrameToggleActionsVisibilityPayload;

  readonly toBeRendered?: boolean;
  withToBeRendered(toBeRendered: boolean): UiSdlContentFrameToggleActionsVisibilityPayload;
}

