export interface UiSdlApplicationStateDataDeleteAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlApplicationStateDataDeleteAction;

  readonly payload?: UiSdlApplicationStateDataDeletePayload | null;
  withPayload(payload: IUiSdlApplicationStateDataDeletePayload | null): UiSdlApplicationStateDataDeleteAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlApplicationStateDataDeleteAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlApplicationStateDataDeleteAction;
}

