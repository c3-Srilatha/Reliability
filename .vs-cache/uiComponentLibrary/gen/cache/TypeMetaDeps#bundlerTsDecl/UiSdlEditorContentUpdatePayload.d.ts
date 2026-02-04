export interface UiSdlEditorContentUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlEditorContentUpdatePayload;

  readonly newContent?: string | null;
  withNewContent(newContent: string | null): UiSdlEditorContentUpdatePayload;
}

