export interface UiSdlInlineNotificationStatusSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInlineNotificationStatusSetAction;

  readonly payload?: UiSdlInlineNotificationStatusSetPayload | null;
  withPayload(payload: IUiSdlInlineNotificationStatusSetPayload | null): UiSdlInlineNotificationStatusSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInlineNotificationStatusSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInlineNotificationStatusSetAction;
}

