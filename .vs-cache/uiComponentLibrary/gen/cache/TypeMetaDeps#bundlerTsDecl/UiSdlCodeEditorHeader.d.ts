export interface UiSdlCodeEditorHeader {

  readonly title?: UiSdlCodeEditorDynamicTitle | null | string | null | null;
  withTitle(title: IUiSdlCodeEditorDynamicTitle | null | string | null | null): UiSdlCodeEditorHeader;

  readonly actionButtons?: C3.Array<UiSdlAction | null>;
  withActionButtons(actionButtons: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlCodeEditorHeader;
}

