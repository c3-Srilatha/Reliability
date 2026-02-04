export interface UiSdlTabPanelPrimaryButtonContentChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTabPanelPrimaryButtonContentChangeAction;

  readonly payload?: UiSdlTabPanelPrimaryButtonContentChangePayload | null;
  withPayload(payload: IUiSdlTabPanelPrimaryButtonContentChangePayload | null): UiSdlTabPanelPrimaryButtonContentChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTabPanelPrimaryButtonContentChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTabPanelPrimaryButtonContentChangeAction;
}

