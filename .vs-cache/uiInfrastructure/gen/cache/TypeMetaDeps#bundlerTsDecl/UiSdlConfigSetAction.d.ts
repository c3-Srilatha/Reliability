export interface UiSdlConfigSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlConfigSetAction;

  readonly payload?: UiSdlConfigSetPayload | null;
  withPayload(payload: IUiSdlConfigSetPayload | null): UiSdlConfigSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlConfigSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlConfigSetAction;
}

