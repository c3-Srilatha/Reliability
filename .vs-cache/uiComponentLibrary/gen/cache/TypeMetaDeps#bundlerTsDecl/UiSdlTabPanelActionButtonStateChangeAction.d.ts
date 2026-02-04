export interface UiSdlTabPanelActionButtonStateChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTabPanelActionButtonStateChangeAction;

  readonly payload?: UiSdlTabPanelActionButtonStateChangePayload | null;
  withPayload(payload: IUiSdlTabPanelActionButtonStateChangePayload | null): UiSdlTabPanelActionButtonStateChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTabPanelActionButtonStateChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTabPanelActionButtonStateChangeAction;
}

