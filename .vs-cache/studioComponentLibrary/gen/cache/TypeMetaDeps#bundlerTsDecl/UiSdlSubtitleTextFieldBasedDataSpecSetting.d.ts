export interface UiSdlSubtitleTextFieldBasedDataSpecSetting {

  readonly value?: UiSdlFieldBasedDataSpecSetting | null | UiSdlDynamicValueSpec | null | null;
  withValue(value: IUiSdlFieldBasedDataSpecSetting | null | IUiSdlDynamicValueSpec | null | null): UiSdlSubtitleTextFieldBasedDataSpecSetting;

  readonly fontWeight?: string | null;
  withFontWeight(fontWeight: string | null): UiSdlSubtitleTextFieldBasedDataSpecSetting;

  readonly truncate?: boolean;
  withTruncate(truncate: boolean): UiSdlSubtitleTextFieldBasedDataSpecSetting;

  readonly defaultValue?: string | null | UiSdlDynamicValueSpec | null | null;
  withDefaultValue(defaultValue: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlSubtitleTextFieldBasedDataSpecSetting;

  readonly secondary?: boolean;
  withSecondary(secondary: boolean): UiSdlSubtitleTextFieldBasedDataSpecSetting;
}

