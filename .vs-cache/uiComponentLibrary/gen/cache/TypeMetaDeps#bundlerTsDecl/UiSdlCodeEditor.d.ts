export interface UiSdlCodeEditor {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCodeEditor;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCodeEditor;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCodeEditor;

  readonly dataSpec: UiSdlCodeEditorDataSpec;
  withDataSpec(dataSpec: IUiSdlCodeEditorDataSpec): UiSdlCodeEditor;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCodeEditor;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCodeEditor;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCodeEditor;

  readonly textData?: UiSdlCodeEditorData | null;
  withTextData(textData: IUiSdlCodeEditorData | null): UiSdlCodeEditor;

  readonly height?: string | null;
  withHeight(height: string | null): UiSdlCodeEditor;

  readonly width?: string | null;
  withWidth(width: string | null): UiSdlCodeEditor;

  readonly content?: string | null;
  withContent(content: string | null): UiSdlCodeEditor;

  readonly editState?: UiSdlCodeEditorEditState | null;
  withEditState(editState: IUiSdlCodeEditorEditState | null): UiSdlCodeEditor;

  readonly wrap?: boolean;
  withWrap(wrap: boolean): UiSdlCodeEditor;

  readonly theme?: string | null;
  withTheme(theme: string | null): UiSdlCodeEditor;

  readonly header?: UiSdlCodeEditorHeader | null;
  withHeader(header: IUiSdlCodeEditorHeader | null): UiSdlCodeEditor;

  readonly language?: string | null;
  withLanguage(language: string | null): UiSdlCodeEditor;

  readonly saveSpec?: UiSdlCodeEditorSaveSpec | null;
  withSaveSpec(saveSpec: IUiSdlCodeEditorSaveSpec | null): UiSdlCodeEditor;
}

