export interface UiSdlErrorReceiveAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlErrorReceiveAction;

  readonly payload?: UiSdlDataReceivePayload | null;
  withPayload(payload: IUiSdlDataReceivePayload | null): UiSdlErrorReceiveAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlErrorReceiveAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlErrorReceiveAction;
}

