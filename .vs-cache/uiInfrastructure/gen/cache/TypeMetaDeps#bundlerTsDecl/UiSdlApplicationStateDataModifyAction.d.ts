export interface UiSdlApplicationStateDataModifyAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlApplicationStateDataModifyAction;

  readonly payload?: UiSdlApplicationStateDataModifyPayload | null;
  withPayload(payload: IUiSdlApplicationStateDataModifyPayload | null): UiSdlApplicationStateDataModifyAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlApplicationStateDataModifyAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlApplicationStateDataModifyAction;
}

