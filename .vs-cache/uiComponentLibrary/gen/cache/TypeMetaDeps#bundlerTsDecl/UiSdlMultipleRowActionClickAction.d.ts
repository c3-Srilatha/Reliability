export interface UiSdlMultipleRowActionClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlMultipleRowActionClickAction;

  readonly payload?: UiSdlMultipleRowActionClickPayload | null;
  withPayload(payload: IUiSdlMultipleRowActionClickPayload | null): UiSdlMultipleRowActionClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlMultipleRowActionClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlMultipleRowActionClickAction;
}

