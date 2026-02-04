export interface UiSdlPageTitleActionClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlPageTitleActionClickAction;

  readonly payload?: UiSdlPageTitleActionClickPayload | null;
  withPayload(payload: IUiSdlPageTitleActionClickPayload | null): UiSdlPageTitleActionClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlPageTitleActionClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlPageTitleActionClickAction;
}

