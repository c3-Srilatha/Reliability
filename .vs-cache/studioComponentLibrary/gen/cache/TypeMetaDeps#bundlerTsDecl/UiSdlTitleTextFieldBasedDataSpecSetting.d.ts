export interface UiSdlTitleTextFieldBasedDataSpecSetting {

  readonly value?: UiSdlFieldBasedDataSpecSetting | null | UiSdlDynamicValueSpec | null | null;
  withValue(value: IUiSdlFieldBasedDataSpecSetting | null | IUiSdlDynamicValueSpec | null | null): UiSdlTitleTextFieldBasedDataSpecSetting;

  readonly fontWeight?: string | null;
  withFontWeight(fontWeight: string | null): UiSdlTitleTextFieldBasedDataSpecSetting;

  readonly truncate?: boolean;
  withTruncate(truncate: boolean): UiSdlTitleTextFieldBasedDataSpecSetting;

  readonly defaultValue?: string | null | UiSdlDynamicValueSpec | null | null;
  withDefaultValue(defaultValue: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTitleTextFieldBasedDataSpecSetting;
}

