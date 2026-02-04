export interface UiSdlBaseDataGridActionButtonStateChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlBaseDataGridActionButtonStateChangeAction;

  readonly payload?: UiSdlBaseDataGridActionButtonStateChangePayload | null;
  withPayload(payload: IUiSdlBaseDataGridActionButtonStateChangePayload | null): UiSdlBaseDataGridActionButtonStateChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlBaseDataGridActionButtonStateChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlBaseDataGridActionButtonStateChangeAction;
}

