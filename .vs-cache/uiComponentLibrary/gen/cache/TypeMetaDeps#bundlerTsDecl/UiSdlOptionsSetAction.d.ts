export interface UiSdlOptionsSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlOptionsSetAction;

  readonly payload?: UiSdlOptionsSetPayload | null;
  withPayload(payload: IUiSdlOptionsSetPayload | null): UiSdlOptionsSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlOptionsSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlOptionsSetAction;
}

