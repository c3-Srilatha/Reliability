export interface UiSdlCodeEditorReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCodeEditorReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCodeEditorReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCodeEditorReact;

  readonly dataSpec: UiSdlCodeEditorDataSpec;
  withDataSpec(dataSpec: IUiSdlCodeEditorDataSpec): UiSdlCodeEditorReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCodeEditorReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCodeEditorReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCodeEditorReact;

  readonly textData?: UiSdlCodeEditorData | null;
  withTextData(textData: IUiSdlCodeEditorData | null): UiSdlCodeEditorReact;

  readonly height?: string | null;
  withHeight(height: string | null): UiSdlCodeEditorReact;

  readonly width?: string | null;
  withWidth(width: string | null): UiSdlCodeEditorReact;

  readonly content?: string | null;
  withContent(content: string | null): UiSdlCodeEditorReact;

  readonly editState?: UiSdlCodeEditorEditState | null;
  withEditState(editState: IUiSdlCodeEditorEditState | null): UiSdlCodeEditorReact;

  readonly wrap?: boolean;
  withWrap(wrap: boolean): UiSdlCodeEditorReact;

  readonly theme?: string | null;
  withTheme(theme: string | null): UiSdlCodeEditorReact;

  readonly header?: UiSdlCodeEditorHeader | null;
  withHeader(header: IUiSdlCodeEditorHeader | null): UiSdlCodeEditorReact;

  readonly language?: string | null;
  withLanguage(language: string | null): UiSdlCodeEditorReact;

  readonly saveSpec?: UiSdlCodeEditorSaveSpec | null;
  withSaveSpec(saveSpec: IUiSdlCodeEditorSaveSpec | null): UiSdlCodeEditorReact;
}

