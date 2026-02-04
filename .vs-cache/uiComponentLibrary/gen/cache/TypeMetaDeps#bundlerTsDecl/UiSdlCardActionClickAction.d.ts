export interface UiSdlCardActionClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCardActionClickAction;

  readonly payload?: UiSdlCardActionClickPayload | null;
  withPayload(payload: IUiSdlCardActionClickPayload | null): UiSdlCardActionClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCardActionClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCardActionClickAction;
}

