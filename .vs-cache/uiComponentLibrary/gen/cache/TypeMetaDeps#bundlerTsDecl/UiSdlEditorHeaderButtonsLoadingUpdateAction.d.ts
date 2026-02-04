export interface UiSdlEditorHeaderButtonsLoadingUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlEditorHeaderButtonsLoadingUpdateAction;

  readonly payload?: UiSdlEditorHeaderButtonsLoadingUpdatePayload | null;
  withPayload(payload: IUiSdlEditorHeaderButtonsLoadingUpdatePayload | null): UiSdlEditorHeaderButtonsLoadingUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlEditorHeaderButtonsLoadingUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlEditorHeaderButtonsLoadingUpdateAction;
}

