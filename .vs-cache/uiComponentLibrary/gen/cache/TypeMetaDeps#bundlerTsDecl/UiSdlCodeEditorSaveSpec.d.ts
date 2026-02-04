export interface UiSdlCodeEditorSaveSpec {

  readonly actionName: string;
  withActionName(actionName: string): UiSdlCodeEditorSaveSpec;

  readonly actionParamName: string;
  withActionParamName(actionParamName: string): UiSdlCodeEditorSaveSpec;

  readonly typeName: string;
  withTypeName(typeName: string): UiSdlCodeEditorSaveSpec;
}

