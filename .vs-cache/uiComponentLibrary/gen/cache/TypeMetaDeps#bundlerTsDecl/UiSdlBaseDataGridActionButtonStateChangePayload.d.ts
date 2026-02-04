export interface UiSdlBaseDataGridActionButtonStateChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlBaseDataGridActionButtonStateChangePayload;

  readonly buttonType: string;
  withButtonType(buttonType: string): UiSdlBaseDataGridActionButtonStateChangePayload;

  readonly loading?: boolean;
  withLoading(loading: boolean): UiSdlBaseDataGridActionButtonStateChangePayload;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlBaseDataGridActionButtonStateChangePayload;
}

