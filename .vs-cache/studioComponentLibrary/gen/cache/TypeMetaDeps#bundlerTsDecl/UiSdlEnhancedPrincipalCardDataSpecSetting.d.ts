export interface UiSdlEnhancedPrincipalCardDataSpecSetting {

  readonly path?: string | null;
  withPath(path: string | null): UiSdlEnhancedPrincipalCardDataSpecSetting;

  readonly graphic?: UiSdlGraphicAvatarDataSpecSetting | null | UiSdlGraphicBadgeDataSpecSetting | null | UiSdlGraphicLogoDataSpecSetting | null | null;
  withGraphic(graphic: IUiSdlGraphicAvatarDataSpecSetting | null | IUiSdlGraphicBadgeDataSpecSetting | null | IUiSdlGraphicLogoDataSpecSetting | null | null): UiSdlEnhancedPrincipalCardDataSpecSetting;

  readonly title?: UiSdlEnhancedCardTitleDataSpecSetting | null;
  withTitle(title: IUiSdlEnhancedCardTitleDataSpecSetting | null): UiSdlEnhancedPrincipalCardDataSpecSetting;

  readonly subtitleOne?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleOne(subtitleOne: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedPrincipalCardDataSpecSetting;

  readonly subtitleTwo?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleTwo(subtitleTwo: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedPrincipalCardDataSpecSetting;

  readonly subtitleThree?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleThree(subtitleThree: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedPrincipalCardDataSpecSetting;

  readonly subtitleFour?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleFour(subtitleFour: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedPrincipalCardDataSpecSetting;

  readonly subtitleFive?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleFive(subtitleFive: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedPrincipalCardDataSpecSetting;

  readonly subtitleSix?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleSix(subtitleSix: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedPrincipalCardDataSpecSetting;

  readonly subtitleSeven?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleSeven(subtitleSeven: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedPrincipalCardDataSpecSetting;

  readonly status?: UiSdlEnhancedCardStatusDataSpecSetting | null;
  withStatus(status: IUiSdlEnhancedCardStatusDataSpecSetting | null): UiSdlEnhancedPrincipalCardDataSpecSetting;

  readonly actionGroup?: UiSdlActionGroupFieldBasedDataSpecSetting | null;
  withActionGroup(actionGroup: IUiSdlActionGroupFieldBasedDataSpecSetting | null): UiSdlEnhancedPrincipalCardDataSpecSetting;

  readonly footer?: UiSdlEnhancedCardFooterFieldBasedDataSpecSetting | null;
  withFooter(footer: IUiSdlEnhancedCardFooterFieldBasedDataSpecSetting | null): UiSdlEnhancedPrincipalCardDataSpecSetting;

  readonly subCardLimit?: UiSdlFieldBasedDataSpecSetting | null;
  withSubCardLimit(subCardLimit: IUiSdlFieldBasedDataSpecSetting | null): UiSdlEnhancedPrincipalCardDataSpecSetting;
}

