export interface UiSdlAxisInvertAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlAxisInvertAction;

  readonly payload?: UiSdlAxisInvertPayload | null;
  withPayload(payload: IUiSdlAxisInvertPayload | null): UiSdlAxisInvertAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlAxisInvertAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlAxisInvertAction;
}

