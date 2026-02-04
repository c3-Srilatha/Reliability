export interface UiSdlSavedSearchRenameAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSavedSearchRenameAction;

  readonly payload?: UiSdlSavedSearchRenamePayload | null;
  withPayload(payload: IUiSdlSavedSearchRenamePayload | null): UiSdlSavedSearchRenameAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSavedSearchRenameAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSavedSearchRenameAction;
}

