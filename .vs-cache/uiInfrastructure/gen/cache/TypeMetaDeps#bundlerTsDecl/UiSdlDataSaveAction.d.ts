export interface UiSdlDataSaveAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataSaveAction;

  readonly payload?: UiSdlDataSavePayload | null;
  withPayload(payload: IUiSdlDataSavePayload | null): UiSdlDataSaveAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataSaveAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataSaveAction;
}

