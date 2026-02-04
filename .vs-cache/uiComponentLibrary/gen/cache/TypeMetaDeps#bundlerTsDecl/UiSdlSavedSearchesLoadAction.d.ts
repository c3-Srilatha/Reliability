export interface UiSdlSavedSearchesLoadAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSavedSearchesLoadAction;

  readonly payload?: UiSdlSavedSearchesLoadPayload | null;
  withPayload(payload: IUiSdlSavedSearchesLoadPayload | null): UiSdlSavedSearchesLoadAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSavedSearchesLoadAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSavedSearchesLoadAction;
}

