export interface UiSdlEditorThemeUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlEditorThemeUpdatePayload;

  readonly theme?: string | null;
  withTheme(theme: string | null): UiSdlEditorThemeUpdatePayload;
}

