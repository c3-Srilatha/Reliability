export interface UiSdlBaseDataGridChangeCancelAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlBaseDataGridChangeCancelAction;

  readonly payload?: UiSdlBaseDataGridChangeCancelPayload | null;
  withPayload(payload: IUiSdlBaseDataGridChangeCancelPayload | null): UiSdlBaseDataGridChangeCancelAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlBaseDataGridChangeCancelAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlBaseDataGridChangeCancelAction;
}

