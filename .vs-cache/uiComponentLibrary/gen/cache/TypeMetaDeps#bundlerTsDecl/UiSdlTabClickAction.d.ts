export interface UiSdlTabClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTabClickAction;

  readonly payload?: UiSdlTabClickPayload | null;
  withPayload(payload: IUiSdlTabClickPayload | null): UiSdlTabClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTabClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTabClickAction;
}

