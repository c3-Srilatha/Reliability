export interface UiSdlAxisReorderAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlAxisReorderAction;

  readonly payload?: UiSdlAxisReorderPayload | null;
  withPayload(payload: IUiSdlAxisReorderPayload | null): UiSdlAxisReorderAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlAxisReorderAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlAxisReorderAction;
}

