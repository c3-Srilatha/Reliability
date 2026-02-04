export interface UiSdlActiveTabSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlActiveTabSetAction;

  readonly payload?: UiSdlActiveTabSetPayload | null;
  withPayload(payload: IUiSdlActiveTabSetPayload | null): UiSdlActiveTabSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlActiveTabSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlActiveTabSetAction;
}

