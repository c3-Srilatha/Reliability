export interface UiSdlTableActionClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTableActionClickAction;

  readonly payload?: UiSdlTableActionClickPayload | null;
  withPayload(payload: IUiSdlTableActionClickPayload | null): UiSdlTableActionClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTableActionClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTableActionClickAction;
}

