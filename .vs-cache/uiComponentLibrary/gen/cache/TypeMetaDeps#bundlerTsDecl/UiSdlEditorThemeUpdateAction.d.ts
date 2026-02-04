export interface UiSdlEditorThemeUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlEditorThemeUpdateAction;

  readonly payload?: UiSdlEditorThemeUpdatePayload | null;
  withPayload(payload: IUiSdlEditorThemeUpdatePayload | null): UiSdlEditorThemeUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlEditorThemeUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlEditorThemeUpdateAction;
}

