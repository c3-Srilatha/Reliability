export interface UiSdlValueSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlValueSetAction;

  readonly payload?: UiSdlValueSetPayload | null;
  withPayload(payload: IUiSdlValueSetPayload | null): UiSdlValueSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlValueSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlValueSetAction;
}

