export interface UiSdlCodeEditorData {

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlCodeEditorData;

  readonly content?: string | null;
  withContent(content: string | null): UiSdlCodeEditorData;
}

