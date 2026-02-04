export interface UiSdlSavedSearchSubmitAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSavedSearchSubmitAction;

  readonly payload?: UiSdlSavedSearchSubmitPayload | null;
  withPayload(payload: IUiSdlSavedSearchSubmitPayload | null): UiSdlSavedSearchSubmitAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSavedSearchSubmitAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSavedSearchSubmitAction;
}

