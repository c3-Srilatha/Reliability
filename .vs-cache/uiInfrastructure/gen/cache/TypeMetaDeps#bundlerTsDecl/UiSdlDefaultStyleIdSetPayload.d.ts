export interface UiSdlDefaultStyleIdSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlDefaultStyleIdSetPayload;

  readonly themeId: string;
  withThemeId(themeId: string): UiSdlDefaultStyleIdSetPayload;

  readonly densityId: string;
  withDensityId(densityId: string): UiSdlDefaultStyleIdSetPayload;
}

