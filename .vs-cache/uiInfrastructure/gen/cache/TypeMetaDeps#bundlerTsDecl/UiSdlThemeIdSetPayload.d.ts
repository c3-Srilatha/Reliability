export interface UiSdlThemeIdSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlThemeIdSetPayload;

  readonly themeId: string;
  withThemeId(themeId: string): UiSdlThemeIdSetPayload;
}

