export interface UiSdlInlineNotificationSetHiddenAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInlineNotificationSetHiddenAction;

  readonly payload?: UiSdlInlineNotificationHiddenSetPayload | null;
  withPayload(payload: IUiSdlInlineNotificationHiddenSetPayload | null): UiSdlInlineNotificationSetHiddenAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInlineNotificationSetHiddenAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInlineNotificationSetHiddenAction;
}

