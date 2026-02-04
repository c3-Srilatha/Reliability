export interface UiSdlStyleConfig {

  readonly parent?: UiSdlConfig | null;
  withParent(parent: IUiSdlConfig | null): UiSdlStyleConfig;

  readonly theme?: UiSdlThemeTemplate | null;
  withTheme(theme: IUiSdlThemeTemplate | null): UiSdlStyleConfig;

  readonly density?: UiSdlDensityTemplate | null;
  withDensity(density: IUiSdlDensityTemplate | null): UiSdlStyleConfig;

  readonly namespace?: string | null;
  withNamespace(namespace: string | null): UiSdlStyleConfig;

  readonly useDefaultButtonStyle?: boolean;
  withUseDefaultButtonStyle(useDefaultButtonStyle: boolean): UiSdlStyleConfig;
}

