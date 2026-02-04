export interface UiSdlInlineNotificationSubtitleSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInlineNotificationSubtitleSetAction;

  readonly payload?: UiSdlInlineNotificationSubtitleSetPayload | null;
  withPayload(payload: IUiSdlInlineNotificationSubtitleSetPayload | null): UiSdlInlineNotificationSubtitleSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInlineNotificationSubtitleSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInlineNotificationSubtitleSetAction;
}

