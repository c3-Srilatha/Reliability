export interface UiSdlTabPanelSearchButtonStateChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTabPanelSearchButtonStateChangeAction;

  readonly payload?: UiSdlTabPanelSearchButtonStateChangePayload | null;
  withPayload(payload: IUiSdlTabPanelSearchButtonStateChangePayload | null): UiSdlTabPanelSearchButtonStateChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTabPanelSearchButtonStateChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTabPanelSearchButtonStateChangeAction;
}

