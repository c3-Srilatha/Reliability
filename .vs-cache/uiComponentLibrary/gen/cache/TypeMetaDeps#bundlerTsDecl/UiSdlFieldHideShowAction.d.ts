export interface UiSdlFieldHideShowAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFieldHideShowAction;

  readonly payload?: UiSdlFieldHideShowPayload | null;
  withPayload(payload: IUiSdlFieldHideShowPayload | null): UiSdlFieldHideShowAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFieldHideShowAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFieldHideShowAction;
}

