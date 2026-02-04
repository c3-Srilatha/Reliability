export interface UiSdlAppInitAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlAppInitAction;

  readonly payload?: UiSdlAppInitPayload | null;
  withPayload(payload: IUiSdlAppInitPayload | null): UiSdlAppInitAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlAppInitAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlAppInitAction;
}

