export interface UiSdlDataGridUnmountedAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataGridUnmountedAction;

  readonly payload?: UiSdlComponentActionPayload | null;
  withPayload(payload: IUiSdlComponentActionPayload | null): UiSdlDataGridUnmountedAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataGridUnmountedAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataGridUnmountedAction;
}

