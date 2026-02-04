export interface UiSdlThemeIdSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlThemeIdSetAction;

  readonly payload?: UiSdlThemeIdSetPayload | null;
  withPayload(payload: IUiSdlThemeIdSetPayload | null): UiSdlThemeIdSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlThemeIdSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlThemeIdSetAction;
}

