export interface UiSdlContentFrameToggleButtonsVisibilityPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlContentFrameToggleButtonsVisibilityPayload;

  readonly buttonId?: string | null;
  withButtonId(buttonId: string | null): UiSdlContentFrameToggleButtonsVisibilityPayload;

  readonly toBeRendered?: boolean;
  withToBeRendered(toBeRendered: boolean): UiSdlContentFrameToggleButtonsVisibilityPayload;
}

