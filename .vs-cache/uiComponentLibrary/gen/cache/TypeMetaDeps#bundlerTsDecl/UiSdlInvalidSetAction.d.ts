export interface UiSdlInvalidSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInvalidSetAction;

  readonly payload?: UiSdlInvalidSetPayload | null;
  withPayload(payload: IUiSdlInvalidSetPayload | null): UiSdlInvalidSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInvalidSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInvalidSetAction;
}

