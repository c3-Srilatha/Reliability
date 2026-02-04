export interface UiSdlApplicationStateDataAddAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlApplicationStateDataAddAction;

  readonly payload?: UiSdlApplicationStateDataAddPayload | null;
  withPayload(payload: IUiSdlApplicationStateDataAddPayload | null): UiSdlApplicationStateDataAddAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlApplicationStateDataAddAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlApplicationStateDataAddAction;
}

