export interface UiSdlEnhancedCardSubtitleDataSpecSetting {

  readonly link?: UiSdlLinkFieldBasedDataSpecSetting | null;
  withLink(link: IUiSdlLinkFieldBasedDataSpecSetting | null): UiSdlEnhancedCardSubtitleDataSpecSetting;

  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): UiSdlEnhancedCardSubtitleDataSpecSetting;

  readonly text: UiSdlTitleTextFieldBasedDataSpecSetting;
  withText(text: IUiSdlTitleTextFieldBasedDataSpecSetting): UiSdlEnhancedCardSubtitleDataSpecSetting;

  readonly icon?: UiSdlFieldBasedDataSpecSetting | null;
  withIcon(icon: IUiSdlFieldBasedDataSpecSetting | null): UiSdlEnhancedCardSubtitleDataSpecSetting;

  readonly primaryText?: UiSdlSubtitleTextFieldBasedDataSpecSetting | null;
  withPrimaryText(primaryText: IUiSdlSubtitleTextFieldBasedDataSpecSetting | null): UiSdlEnhancedCardSubtitleDataSpecSetting;

  readonly secondaryText?: UiSdlSubtitleTextFieldBasedDataSpecSetting | null;
  withSecondaryText(secondaryText: IUiSdlSubtitleTextFieldBasedDataSpecSetting | null): UiSdlEnhancedCardSubtitleDataSpecSetting;

  readonly iconMap?: C3.Map<string | null, string | null>;
  withIconMap(iconMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlEnhancedCardSubtitleDataSpecSetting;

  readonly iconColorMap?: C3.Map<string | null, string | null>;
  withIconColorMap(iconColorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlEnhancedCardSubtitleDataSpecSetting;

  readonly borderBottom?: boolean;
  withBorderBottom(borderBottom: boolean): UiSdlEnhancedCardSubtitleDataSpecSetting;
}

