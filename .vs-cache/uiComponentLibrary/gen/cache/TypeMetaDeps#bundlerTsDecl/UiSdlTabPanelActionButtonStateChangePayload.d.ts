export interface UiSdlTabPanelActionButtonStateChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTabPanelActionButtonStateChangePayload;

  readonly buttonType: string;
  withButtonType(buttonType: string): UiSdlTabPanelActionButtonStateChangePayload;

  readonly loading?: boolean;
  withLoading(loading: boolean): UiSdlTabPanelActionButtonStateChangePayload;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlTabPanelActionButtonStateChangePayload;
}

