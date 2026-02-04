export interface UiSdlUserContextGetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlUserContextGetAction;

  readonly payload?: UiSdlUserContextPayload | null;
  withPayload(payload: IUiSdlUserContextPayload | null): UiSdlUserContextGetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlUserContextGetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlUserContextGetAction;
}

