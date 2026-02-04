export interface UiSdlLoadingOnOffButtonAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlLoadingOnOffButtonAction;

  readonly payload?: UiSdlLoadingOnOffButtonPayload | null;
  withPayload(payload: IUiSdlLoadingOnOffButtonPayload | null): UiSdlLoadingOnOffButtonAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlLoadingOnOffButtonAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlLoadingOnOffButtonAction;
}

