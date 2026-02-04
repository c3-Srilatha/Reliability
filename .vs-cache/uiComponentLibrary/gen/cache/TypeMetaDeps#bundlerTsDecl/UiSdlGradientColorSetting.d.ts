export interface UiSdlGradientColorSetting {

  readonly gradient?: string | null;
  withGradient(gradient: string | null): UiSdlGradientColorSetting;

  readonly weightedMethodConfig?: UiSdlGradientColorSettingWeightedMethod | null;
  withWeightedMethodConfig(weightedMethodConfig: IUiSdlGradientColorSettingWeightedMethod | null): UiSdlGradientColorSetting;

  readonly numberOfColors?: number | null;
  withNumberOfColors(numberOfColors: number | null): UiSdlGradientColorSetting;
}

