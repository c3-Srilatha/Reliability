export interface UiSdlContentFrameToggleInputsVisibilityPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlContentFrameToggleInputsVisibilityPayload;

  readonly inputId?: string | null;
  withInputId(inputId: string | null): UiSdlContentFrameToggleInputsVisibilityPayload;

  readonly toBeRendered?: boolean;
  withToBeRendered(toBeRendered: boolean): UiSdlContentFrameToggleInputsVisibilityPayload;
}

