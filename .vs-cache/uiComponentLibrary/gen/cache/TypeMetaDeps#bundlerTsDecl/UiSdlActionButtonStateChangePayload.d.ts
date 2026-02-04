export interface UiSdlActionButtonStateChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlActionButtonStateChangePayload;

  readonly buttonType: string;
  withButtonType(buttonType: string): UiSdlActionButtonStateChangePayload;

  readonly loading?: boolean;
  withLoading(loading: boolean): UiSdlActionButtonStateChangePayload;

  readonly disable?: boolean;
  withDisable(disable: boolean): UiSdlActionButtonStateChangePayload;
}

