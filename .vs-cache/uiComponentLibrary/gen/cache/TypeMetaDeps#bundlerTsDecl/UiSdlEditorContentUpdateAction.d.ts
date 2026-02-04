export interface UiSdlEditorContentUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlEditorContentUpdateAction;

  readonly payload?: UiSdlEditorContentUpdatePayload | null;
  withPayload(payload: IUiSdlEditorContentUpdatePayload | null): UiSdlEditorContentUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlEditorContentUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlEditorContentUpdateAction;
}

