export interface UiSdlNextPreviousButtonStateUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlNextPreviousButtonStateUpdatePayload;

  readonly disableNextButton?: boolean;
  withDisableNextButton(disableNextButton: boolean): UiSdlNextPreviousButtonStateUpdatePayload;

  readonly disablePreviousButton?: boolean;
  withDisablePreviousButton(disablePreviousButton: boolean): UiSdlNextPreviousButtonStateUpdatePayload;
}

