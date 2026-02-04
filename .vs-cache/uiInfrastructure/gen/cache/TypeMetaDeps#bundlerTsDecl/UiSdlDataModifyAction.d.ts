export interface UiSdlDataModifyAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataModifyAction;

  readonly payload?: UiSdlDataModifyPayload | null;
  withPayload(payload: IUiSdlDataModifyPayload | null): UiSdlDataModifyAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataModifyAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataModifyAction;
}

