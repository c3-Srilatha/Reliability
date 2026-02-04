export interface UiSdlReadonlySetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlReadonlySetAction;

  readonly payload?: UiSdlReadonlySetPayload | null;
  withPayload(payload: IUiSdlReadonlySetPayload | null): UiSdlReadonlySetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlReadonlySetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlReadonlySetAction;
}

