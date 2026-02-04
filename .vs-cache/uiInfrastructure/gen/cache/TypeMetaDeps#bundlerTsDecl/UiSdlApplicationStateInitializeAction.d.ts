export interface UiSdlApplicationStateInitializeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlApplicationStateInitializeAction;

  readonly payload?: UiSdlApplicationStateInitializePayload | null;
  withPayload(payload: IUiSdlApplicationStateInitializePayload | null): UiSdlApplicationStateInitializeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlApplicationStateInitializeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlApplicationStateInitializeAction;
}

