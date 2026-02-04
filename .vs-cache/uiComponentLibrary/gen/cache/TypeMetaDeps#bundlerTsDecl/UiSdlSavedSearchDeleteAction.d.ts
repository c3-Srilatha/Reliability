export interface UiSdlSavedSearchDeleteAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSavedSearchDeleteAction;

  readonly payload?: UiSdlSavedSearchDeletePayload | null;
  withPayload(payload: IUiSdlSavedSearchDeletePayload | null): UiSdlSavedSearchDeleteAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSavedSearchDeleteAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSavedSearchDeleteAction;
}

