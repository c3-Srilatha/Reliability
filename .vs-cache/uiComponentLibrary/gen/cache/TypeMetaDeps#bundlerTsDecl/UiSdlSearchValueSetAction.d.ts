export interface UiSdlSearchValueSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSearchValueSetAction;

  readonly payload?: UiSdlSearchValueSetPayload | null;
  withPayload(payload: IUiSdlSearchValueSetPayload | null): UiSdlSearchValueSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSearchValueSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSearchValueSetAction;
}

