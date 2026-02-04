export interface UiSdlDataReceiveAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataReceiveAction;

  readonly payload?: UiSdlDataReceivePayload | null;
  withPayload(payload: IUiSdlDataReceivePayload | null): UiSdlDataReceiveAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataReceiveAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataReceiveAction;
}

