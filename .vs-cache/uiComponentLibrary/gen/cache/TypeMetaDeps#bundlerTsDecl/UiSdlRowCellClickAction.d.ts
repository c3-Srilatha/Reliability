export interface UiSdlRowCellClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlRowCellClickAction;

  readonly payload?: UiSdlRowCellClickPayload | null;
  withPayload(payload: IUiSdlRowCellClickPayload | null): UiSdlRowCellClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlRowCellClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlRowCellClickAction;
}

