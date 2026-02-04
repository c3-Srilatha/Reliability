export interface UiSdlTabPanelSearchButtonStateChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTabPanelSearchButtonStateChangePayload;

  readonly loading?: boolean;
  withLoading(loading: boolean): UiSdlTabPanelSearchButtonStateChangePayload;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlTabPanelSearchButtonStateChangePayload;
}

