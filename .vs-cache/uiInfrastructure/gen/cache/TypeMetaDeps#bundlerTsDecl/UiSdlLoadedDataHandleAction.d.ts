export interface UiSdlLoadedDataHandleAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlLoadedDataHandleAction;

  readonly payload?: UiSdlLoadedDataHandlePayload | null;
  withPayload(payload: IUiSdlLoadedDataHandlePayload | null): UiSdlLoadedDataHandleAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlLoadedDataHandleAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlLoadedDataHandleAction;
}

