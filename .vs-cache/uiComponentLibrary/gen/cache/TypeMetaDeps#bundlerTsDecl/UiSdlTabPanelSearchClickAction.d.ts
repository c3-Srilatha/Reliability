export interface UiSdlTabPanelSearchClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTabPanelSearchClickAction;

  readonly payload?: UiSdlTabPanelSearchClickPayload | null;
  withPayload(payload: IUiSdlTabPanelSearchClickPayload | null): UiSdlTabPanelSearchClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTabPanelSearchClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTabPanelSearchClickAction;
}

