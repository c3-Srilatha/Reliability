export interface UiSdlModalContentUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlModalContentUpdatePayload;

  readonly content?: string | null | UiSdlDynamicValueSpec | null | null;
  withContent(content: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlModalContentUpdatePayload;
}

