export interface UiSdlEditorHeaderActionClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlEditorHeaderActionClickAction;

  readonly payload?: UiSdlEditorHeaderActionClickPayload | null;
  withPayload(payload: IUiSdlEditorHeaderActionClickPayload | null): UiSdlEditorHeaderActionClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlEditorHeaderActionClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlEditorHeaderActionClickAction;
}

