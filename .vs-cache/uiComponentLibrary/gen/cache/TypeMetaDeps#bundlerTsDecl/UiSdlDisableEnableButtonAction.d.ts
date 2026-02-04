export interface UiSdlDisableEnableButtonAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDisableEnableButtonAction;

  readonly payload?: UiSdlDisableEnableButtonPayload | null;
  withPayload(payload: IUiSdlDisableEnableButtonPayload | null): UiSdlDisableEnableButtonAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDisableEnableButtonAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDisableEnableButtonAction;
}

