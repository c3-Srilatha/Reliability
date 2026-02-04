export interface UiSdlInlineNotificationButtonClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInlineNotificationButtonClickAction;

  readonly payload?: UiSdlInlineNotificationButtonClickPayload | null;
  withPayload(payload: IUiSdlInlineNotificationButtonClickPayload | null): UiSdlInlineNotificationButtonClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInlineNotificationButtonClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInlineNotificationButtonClickAction;
}

