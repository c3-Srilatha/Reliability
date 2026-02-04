export interface UiSdlCodeEditorEditState {

  readonly readOnly?: boolean;
  withReadOnly(readOnly: boolean): UiSdlCodeEditorEditState;

  readonly disabledButtons?: C3.Array<string | null>;
  withDisabledButtons(disabledButtons: C3.Array<string | null> | Array<string | null>): UiSdlCodeEditorEditState;
}

