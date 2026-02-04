export interface UiSdlEditorHeaderButtonsLoadingUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlEditorHeaderButtonsLoadingUpdatePayload;

  readonly loadingButtons?: C3.Array<string | null>;
  withLoadingButtons(loadingButtons: C3.Array<string | null> | Array<string | null>): UiSdlEditorHeaderButtonsLoadingUpdatePayload;

  readonly nonLoadingButtons?: C3.Array<string | null>;
  withNonLoadingButtons(nonLoadingButtons: C3.Array<string | null> | Array<string | null>): UiSdlEditorHeaderButtonsLoadingUpdatePayload;
}

