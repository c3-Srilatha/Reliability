export interface UiSdlAddedDataHandleAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlAddedDataHandleAction;

  readonly payload?: UiSdlAddedDataHandlePayload | null;
  withPayload(payload: IUiSdlAddedDataHandlePayload | null): UiSdlAddedDataHandleAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlAddedDataHandleAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlAddedDataHandleAction;
}

