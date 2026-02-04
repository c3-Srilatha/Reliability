export interface UiSdlFieldSetLinkClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFieldSetLinkClickAction;

  readonly payload?: UiSdlFieldSetLinkClickPayload | null;
  withPayload(payload: IUiSdlFieldSetLinkClickPayload | null): UiSdlFieldSetLinkClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFieldSetLinkClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFieldSetLinkClickAction;
}

