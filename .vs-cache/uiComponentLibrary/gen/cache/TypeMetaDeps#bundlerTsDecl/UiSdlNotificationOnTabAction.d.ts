export interface UiSdlNotificationOnTabAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlNotificationOnTabAction;

  readonly payload?: UiSdlNotificationOnTabPayload | null;
  withPayload(payload: IUiSdlNotificationOnTabPayload | null): UiSdlNotificationOnTabAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlNotificationOnTabAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlNotificationOnTabAction;
}

