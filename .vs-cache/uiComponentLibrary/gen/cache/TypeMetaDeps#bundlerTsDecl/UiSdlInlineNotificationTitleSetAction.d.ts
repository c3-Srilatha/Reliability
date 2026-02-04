export interface UiSdlInlineNotificationTitleSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInlineNotificationTitleSetAction;

  readonly payload?: UiSdlInlineNotificationTitleSetPayload | null;
  withPayload(payload: IUiSdlInlineNotificationTitleSetPayload | null): UiSdlInlineNotificationTitleSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInlineNotificationTitleSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInlineNotificationTitleSetAction;
}

