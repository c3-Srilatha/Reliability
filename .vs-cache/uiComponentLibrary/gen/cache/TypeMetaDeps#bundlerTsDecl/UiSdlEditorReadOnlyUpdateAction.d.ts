export interface UiSdlEditorReadOnlyUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlEditorReadOnlyUpdateAction;

  readonly payload?: UiSdlEditorReadOnlyUpdatePayload | null;
  withPayload(payload: IUiSdlEditorReadOnlyUpdatePayload | null): UiSdlEditorReadOnlyUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlEditorReadOnlyUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlEditorReadOnlyUpdateAction;
}

