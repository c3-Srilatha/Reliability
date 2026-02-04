export interface UiSdlEnhancedCardTitleDataSpecSetting {

  readonly link?: UiSdlLinkFieldBasedDataSpecSetting | null;
  withLink(link: IUiSdlLinkFieldBasedDataSpecSetting | null): UiSdlEnhancedCardTitleDataSpecSetting;

  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): UiSdlEnhancedCardTitleDataSpecSetting;

  readonly text: UiSdlTitleTextFieldBasedDataSpecSetting;
  withText(text: IUiSdlTitleTextFieldBasedDataSpecSetting): UiSdlEnhancedCardTitleDataSpecSetting;
}

