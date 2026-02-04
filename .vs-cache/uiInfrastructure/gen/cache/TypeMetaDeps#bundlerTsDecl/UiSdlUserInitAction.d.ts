export interface UiSdlUserInitAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlUserInitAction;

  readonly payload?: UiSdlUserInitPayload | null;
  withPayload(payload: IUiSdlUserInitPayload | null): UiSdlUserInitAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlUserInitAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlUserInitAction;
}

