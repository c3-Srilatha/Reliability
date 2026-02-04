export interface UiSdlEditorReadOnlyUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlEditorReadOnlyUpdatePayload;

  readonly readOnly?: boolean;
  withReadOnly(readOnly: boolean): UiSdlEditorReadOnlyUpdatePayload;
}

