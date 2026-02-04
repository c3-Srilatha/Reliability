export interface UiSdlEnhancedSubCardDataSpecSetting {

  readonly path?: string | null;
  withPath(path: string | null): UiSdlEnhancedSubCardDataSpecSetting;

  readonly graphic?: UiSdlGraphicAvatarDataSpecSetting | null | UiSdlGraphicBadgeDataSpecSetting | null | UiSdlGraphicLogoDataSpecSetting | null | null;
  withGraphic(graphic: IUiSdlGraphicAvatarDataSpecSetting | null | IUiSdlGraphicBadgeDataSpecSetting | null | IUiSdlGraphicLogoDataSpecSetting | null | null): UiSdlEnhancedSubCardDataSpecSetting;

  readonly title?: UiSdlEnhancedCardTitleDataSpecSetting | null;
  withTitle(title: IUiSdlEnhancedCardTitleDataSpecSetting | null): UiSdlEnhancedSubCardDataSpecSetting;

  readonly subtitleOne?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleOne(subtitleOne: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedSubCardDataSpecSetting;

  readonly subtitleTwo?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleTwo(subtitleTwo: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedSubCardDataSpecSetting;

  readonly subtitleThree?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleThree(subtitleThree: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedSubCardDataSpecSetting;

  readonly subtitleFour?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleFour(subtitleFour: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedSubCardDataSpecSetting;

  readonly subtitleFive?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleFive(subtitleFive: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedSubCardDataSpecSetting;

  readonly subtitleSix?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleSix(subtitleSix: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedSubCardDataSpecSetting;

  readonly subtitleSeven?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleSeven(subtitleSeven: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedSubCardDataSpecSetting;

  readonly status?: UiSdlEnhancedCardStatusDataSpecSetting | null;
  withStatus(status: IUiSdlEnhancedCardStatusDataSpecSetting | null): UiSdlEnhancedSubCardDataSpecSetting;

  readonly actionGroup?: UiSdlActionGroupFieldBasedDataSpecSetting | null;
  withActionGroup(actionGroup: IUiSdlActionGroupFieldBasedDataSpecSetting | null): UiSdlEnhancedSubCardDataSpecSetting;
}

