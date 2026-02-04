export interface UiSdlUiDataGridComponentIdSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlUiDataGridComponentIdSetAction;

  readonly payload?: UiSdlUiDataGridComponentIdSetPayload | null;
  withPayload(payload: IUiSdlUiDataGridComponentIdSetPayload | null): UiSdlUiDataGridComponentIdSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlUiDataGridComponentIdSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlUiDataGridComponentIdSetAction;
}

