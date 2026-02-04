export interface UiSdlEnhancedCardDataSpecSetting {

  readonly path?: string | null;
  withPath(path: string | null): UiSdlEnhancedCardDataSpecSetting;

  readonly graphic?: UiSdlGraphicAvatarDataSpecSetting | null | UiSdlGraphicBadgeDataSpecSetting | null | UiSdlGraphicLogoDataSpecSetting | null | null;
  withGraphic(graphic: IUiSdlGraphicAvatarDataSpecSetting | null | IUiSdlGraphicBadgeDataSpecSetting | null | IUiSdlGraphicLogoDataSpecSetting | null | null): UiSdlEnhancedCardDataSpecSetting;

  readonly title?: UiSdlEnhancedCardTitleDataSpecSetting | null;
  withTitle(title: IUiSdlEnhancedCardTitleDataSpecSetting | null): UiSdlEnhancedCardDataSpecSetting;

  readonly subtitleOne?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleOne(subtitleOne: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedCardDataSpecSetting;

  readonly subtitleTwo?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleTwo(subtitleTwo: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedCardDataSpecSetting;

  readonly subtitleThree?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleThree(subtitleThree: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedCardDataSpecSetting;

  readonly subtitleFour?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleFour(subtitleFour: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedCardDataSpecSetting;

  readonly subtitleFive?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleFive(subtitleFive: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedCardDataSpecSetting;

  readonly subtitleSix?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleSix(subtitleSix: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedCardDataSpecSetting;

  readonly subtitleSeven?: UiSdlEnhancedCardSubtitleDataSpecSetting | null;
  withSubtitleSeven(subtitleSeven: IUiSdlEnhancedCardSubtitleDataSpecSetting | null): UiSdlEnhancedCardDataSpecSetting;

  readonly status?: UiSdlEnhancedCardStatusDataSpecSetting | null;
  withStatus(status: IUiSdlEnhancedCardStatusDataSpecSetting | null): UiSdlEnhancedCardDataSpecSetting;

  readonly actionGroup?: UiSdlActionGroupFieldBasedDataSpecSetting | null;
  withActionGroup(actionGroup: IUiSdlActionGroupFieldBasedDataSpecSetting | null): UiSdlEnhancedCardDataSpecSetting;
}

