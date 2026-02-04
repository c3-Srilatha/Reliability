export interface UiSdlThemeTemplate {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlThemeTemplate;

  readonly id: string;
  withId(id: string): UiSdlThemeTemplate;

  readonly isC3?: boolean;
  withIsC3(isC3: boolean): UiSdlThemeTemplate;

  readonly themeCategory: string;
  withThemeCategory(themeCategory: string): UiSdlThemeTemplate;

  readonly accentColor: string;
  withAccentColor(accentColor: string): UiSdlThemeTemplate;

  readonly accentFontColor: string;
  withAccentFontColor(accentFontColor: string): UiSdlThemeTemplate;

  readonly accentVariantColor: string;
  withAccentVariantColor(accentVariantColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeBlueBackgroundColor: string;
  withAvatarBadgeBlueBackgroundColor(avatarBadgeBlueBackgroundColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeBlueColor: string;
  withAvatarBadgeBlueColor(avatarBadgeBlueColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeChocoBackgroundColor: string;
  withAvatarBadgeChocoBackgroundColor(avatarBadgeChocoBackgroundColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeChocoColor: string;
  withAvatarBadgeChocoColor(avatarBadgeChocoColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeCyanBackgroundColor: string;
  withAvatarBadgeCyanBackgroundColor(avatarBadgeCyanBackgroundColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeCyanColor: string;
  withAvatarBadgeCyanColor(avatarBadgeCyanColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeForestBackgroundColor: string;
  withAvatarBadgeForestBackgroundColor(avatarBadgeForestBackgroundColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeForestColor: string;
  withAvatarBadgeForestColor(avatarBadgeForestColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeGreenBackgroundColor: string;
  withAvatarBadgeGreenBackgroundColor(avatarBadgeGreenBackgroundColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeGreenColor: string;
  withAvatarBadgeGreenColor(avatarBadgeGreenColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeLimeBackgroundColor: string;
  withAvatarBadgeLimeBackgroundColor(avatarBadgeLimeBackgroundColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeLimeColor: string;
  withAvatarBadgeLimeColor(avatarBadgeLimeColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeOliveBackgroundColor: string;
  withAvatarBadgeOliveBackgroundColor(avatarBadgeOliveBackgroundColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeOliveColor: string;
  withAvatarBadgeOliveColor(avatarBadgeOliveColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeOrangeBackgroundColor: string;
  withAvatarBadgeOrangeBackgroundColor(avatarBadgeOrangeBackgroundColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeOrangeColor: string;
  withAvatarBadgeOrangeColor(avatarBadgeOrangeColor: string): UiSdlThemeTemplate;

  readonly avatarBadgePlumBackgroundColor: string;
  withAvatarBadgePlumBackgroundColor(avatarBadgePlumBackgroundColor: string): UiSdlThemeTemplate;

  readonly avatarBadgePlumColor: string;
  withAvatarBadgePlumColor(avatarBadgePlumColor: string): UiSdlThemeTemplate;

  readonly avatarBadgePurpleBackgroundColor: string;
  withAvatarBadgePurpleBackgroundColor(avatarBadgePurpleBackgroundColor: string): UiSdlThemeTemplate;

  readonly avatarBadgePurpleColor: string;
  withAvatarBadgePurpleColor(avatarBadgePurpleColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeRedBackgroundColor: string;
  withAvatarBadgeRedBackgroundColor(avatarBadgeRedBackgroundColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeRedColor: string;
  withAvatarBadgeRedColor(avatarBadgeRedColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeSlateBackgroundColor: string;
  withAvatarBadgeSlateBackgroundColor(avatarBadgeSlateBackgroundColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeSlateColor: string;
  withAvatarBadgeSlateColor(avatarBadgeSlateColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeYellowBackgroundColor: string;
  withAvatarBadgeYellowBackgroundColor(avatarBadgeYellowBackgroundColor: string): UiSdlThemeTemplate;

  readonly avatarBadgeYellowColor: string;
  withAvatarBadgeYellowColor(avatarBadgeYellowColor: string): UiSdlThemeTemplate;

  readonly booleanIconColor: string;
  withBooleanIconColor(booleanIconColor: string): UiSdlThemeTemplate;

  readonly booleanIconTextColor: string;
  withBooleanIconTextColor(booleanIconTextColor: string): UiSdlThemeTemplate;

  readonly borderColor: string;
  withBorderColor(borderColor: string): UiSdlThemeTemplate;

  readonly boxShadow01: string;
  withBoxShadow01(boxShadow01: string): UiSdlThemeTemplate;

  readonly boxShadow02: string;
  withBoxShadow02(boxShadow02: string): UiSdlThemeTemplate;

  readonly boxShadow03: string;
  withBoxShadow03(boxShadow03: string): UiSdlThemeTemplate;

  readonly boxShadow04: string;
  withBoxShadow04(boxShadow04: string): UiSdlThemeTemplate;

  readonly boxShadow05: string;
  withBoxShadow05(boxShadow05: string): UiSdlThemeTemplate;

  readonly boxShadowCardParent: string;
  withBoxShadowCardParent(boxShadowCardParent: string): UiSdlThemeTemplate;

  readonly boxShadowMenu: string;
  withBoxShadowMenu(boxShadowMenu: string): UiSdlThemeTemplate;

  readonly boxZoomIconPath: string;
  withBoxZoomIconPath(boxZoomIconPath: string): UiSdlThemeTemplate;

  readonly boxZoomIconUrl: string;
  withBoxZoomIconUrl(boxZoomIconUrl: string): UiSdlThemeTemplate;

  readonly boxZoomIconColor: string;
  withBoxZoomIconColor(boxZoomIconColor: string): UiSdlThemeTemplate;

  readonly brightnessActionHover: string;
  withBrightnessActionHover(brightnessActionHover: string): UiSdlThemeTemplate;

  readonly brightnessActionHoverInverse: string;
  withBrightnessActionHoverInverse(brightnessActionHoverInverse: string): UiSdlThemeTemplate;

  readonly brightnessActionPressed: string;
  withBrightnessActionPressed(brightnessActionPressed: string): UiSdlThemeTemplate;

  readonly brightnessActionPressedInverse: string;
  withBrightnessActionPressedInverse(brightnessActionPressedInverse: string): UiSdlThemeTemplate;

  readonly buttonControlBorderColor: string;
  withButtonControlBorderColor(buttonControlBorderColor: string): UiSdlThemeTemplate;

  readonly buttonControlFontColor: string;
  withButtonControlFontColor(buttonControlFontColor: string): UiSdlThemeTemplate;

  readonly buttonControlHoverBackgroundColor: string;
  withButtonControlHoverBackgroundColor(buttonControlHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonControlSelectedBackgroundColor: string;
  withButtonControlSelectedBackgroundColor(buttonControlSelectedBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonControlSelectedDisabledBackgroundColor: string;
  withButtonControlSelectedDisabledBackgroundColor(buttonControlSelectedDisabledBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonControlSelectedFontColor: string;
  withButtonControlSelectedFontColor(buttonControlSelectedFontColor: string): UiSdlThemeTemplate;

  readonly buttonControlSelectedHoverBackgroundColor: string;
  withButtonControlSelectedHoverBackgroundColor(buttonControlSelectedHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonDangerPrimaryActiveBackgroundColor: string;
  withButtonDangerPrimaryActiveBackgroundColor(buttonDangerPrimaryActiveBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonDangerPrimaryHoverBackgroundColor: string;
  withButtonDangerPrimaryHoverBackgroundColor(buttonDangerPrimaryHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonDangerSecondaryActiveBackgroundColor: string;
  withButtonDangerSecondaryActiveBackgroundColor(buttonDangerSecondaryActiveBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonDangerSecondaryHoverBackgroundColor: string;
  withButtonDangerSecondaryHoverBackgroundColor(buttonDangerSecondaryHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonDangerTertiaryActiveBackgroundColor: string;
  withButtonDangerTertiaryActiveBackgroundColor(buttonDangerTertiaryActiveBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonDangerTertiaryHoverBackgroundColor: string;
  withButtonDangerTertiaryHoverBackgroundColor(buttonDangerTertiaryHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonIconActiveBackgroundColor: string;
  withButtonIconActiveBackgroundColor(buttonIconActiveBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonIconBackgroundColor: string;
  withButtonIconBackgroundColor(buttonIconBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonIconHoverBackgroundColor: string;
  withButtonIconHoverBackgroundColor(buttonIconHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonIconSelectedActiveBackgroundColor: string;
  withButtonIconSelectedActiveBackgroundColor(buttonIconSelectedActiveBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonIconSelectedBackgroundColor: string;
  withButtonIconSelectedBackgroundColor(buttonIconSelectedBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonIconSelectedForegroundColor: string;
  withButtonIconSelectedForegroundColor(buttonIconSelectedForegroundColor: string): UiSdlThemeTemplate;

  readonly buttonIconSelectedHoverBackgroundColor: string;
  withButtonIconSelectedHoverBackgroundColor(buttonIconSelectedHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonPrimaryActiveBackgroundColor: string;
  withButtonPrimaryActiveBackgroundColor(buttonPrimaryActiveBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonPrimaryHoverBackgroundColor: string;
  withButtonPrimaryHoverBackgroundColor(buttonPrimaryHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonSecondaryActiveBackgroundColor: string;
  withButtonSecondaryActiveBackgroundColor(buttonSecondaryActiveBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonSecondaryHoverBackgroundColor: string;
  withButtonSecondaryHoverBackgroundColor(buttonSecondaryHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonTertiaryActiveBackgroundColor: string;
  withButtonTertiaryActiveBackgroundColor(buttonTertiaryActiveBackgroundColor: string): UiSdlThemeTemplate;

  readonly buttonTertiaryHoverBackgroundColor: string;
  withButtonTertiaryHoverBackgroundColor(buttonTertiaryHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly canvasBackgroundDotColor: string;
  withCanvasBackgroundDotColor(canvasBackgroundDotColor: string): UiSdlThemeTemplate;

  readonly canvasCyanNodeColor: string;
  withCanvasCyanNodeColor(canvasCyanNodeColor: string): UiSdlThemeTemplate;

  readonly canvasForestNodeColor: string;
  withCanvasForestNodeColor(canvasForestNodeColor: string): UiSdlThemeTemplate;

  readonly canvasNodeBorderColor: string;
  withCanvasNodeBorderColor(canvasNodeBorderColor: string): UiSdlThemeTemplate;

  readonly canvasNodeErrorBackgroundColor: string;
  withCanvasNodeErrorBackgroundColor(canvasNodeErrorBackgroundColor: string): UiSdlThemeTemplate;

  readonly canvasNodeWarningBackgroundColor: string;
  withCanvasNodeWarningBackgroundColor(canvasNodeWarningBackgroundColor: string): UiSdlThemeTemplate;

  readonly canvasOrangeIconColor: string;
  withCanvasOrangeIconColor(canvasOrangeIconColor: string): UiSdlThemeTemplate;

  readonly canvasOrangeNodeColor: string;
  withCanvasOrangeNodeColor(canvasOrangeNodeColor: string): UiSdlThemeTemplate;

  readonly canvasPendingNodeBackgroundColor: string;
  withCanvasPendingNodeBackgroundColor(canvasPendingNodeBackgroundColor: string): UiSdlThemeTemplate;

  readonly canvasPendingNodeForegroundColor: string;
  withCanvasPendingNodeForegroundColor(canvasPendingNodeForegroundColor: string): UiSdlThemeTemplate;

  readonly canvasPlumNodeColor: string;
  withCanvasPlumNodeColor(canvasPlumNodeColor: string): UiSdlThemeTemplate;

  readonly canvasPurpleIconColor: string;
  withCanvasPurpleIconColor(canvasPurpleIconColor: string): UiSdlThemeTemplate;

  readonly canvasPurpleNodeColor: string;
  withCanvasPurpleNodeColor(canvasPurpleNodeColor: string): UiSdlThemeTemplate;

  readonly canvasSlateIconColor: string;
  withCanvasSlateIconColor(canvasSlateIconColor: string): UiSdlThemeTemplate;

  readonly canvasSlateNodeColor: string;
  withCanvasSlateNodeColor(canvasSlateNodeColor: string): UiSdlThemeTemplate;

  readonly cardElevation00BackgroundColor: string;
  withCardElevation00BackgroundColor(cardElevation00BackgroundColor: string): UiSdlThemeTemplate;

  readonly cardElevation01BackgroundColor: string;
  withCardElevation01BackgroundColor(cardElevation01BackgroundColor: string): UiSdlThemeTemplate;

  readonly cardElevation02BackgroundColor: string;
  withCardElevation02BackgroundColor(cardElevation02BackgroundColor: string): UiSdlThemeTemplate;

  readonly cardElevation03BackgroundColor: string;
  withCardElevation03BackgroundColor(cardElevation03BackgroundColor: string): UiSdlThemeTemplate;

  readonly cardElevation04BackgroundColor: string;
  withCardElevation04BackgroundColor(cardElevation04BackgroundColor: string): UiSdlThemeTemplate;

  readonly cardElevation06BackgroundColor: string;
  withCardElevation06BackgroundColor(cardElevation06BackgroundColor: string): UiSdlThemeTemplate;

  readonly cardElevation08BackgroundColor: string;
  withCardElevation08BackgroundColor(cardElevation08BackgroundColor: string): UiSdlThemeTemplate;

  readonly cardElevation12BackgroundColor: string;
  withCardElevation12BackgroundColor(cardElevation12BackgroundColor: string): UiSdlThemeTemplate;

  readonly cardElevation16BackgroundColor: string;
  withCardElevation16BackgroundColor(cardElevation16BackgroundColor: string): UiSdlThemeTemplate;

  readonly cardElevation24BackgroundColor: string;
  withCardElevation24BackgroundColor(cardElevation24BackgroundColor: string): UiSdlThemeTemplate;

  readonly chartSeriesTooltipNameFontColor: string;
  withChartSeriesTooltipNameFontColor(chartSeriesTooltipNameFontColor: string): UiSdlThemeTemplate;

  readonly chartSeriesTooltipTitleFontColor: string;
  withChartSeriesTooltipTitleFontColor(chartSeriesTooltipTitleFontColor: string): UiSdlThemeTemplate;

  readonly chartSeriesTooltipValueFontColor: string;
  withChartSeriesTooltipValueFontColor(chartSeriesTooltipValueFontColor: string): UiSdlThemeTemplate;

  readonly checkboxBackgroundColor: string;
  withCheckboxBackgroundColor(checkboxBackgroundColor: string): UiSdlThemeTemplate;

  readonly checkboxColor: string;
  withCheckboxColor(checkboxColor: string): UiSdlThemeTemplate;

  readonly checkboxHoverBackgroundColor: string;
  withCheckboxHoverBackgroundColor(checkboxHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly checkboxHoverColor: string;
  withCheckboxHoverColor(checkboxHoverColor: string): UiSdlThemeTemplate;

  readonly checkboxSelectedDisabledColor: string;
  withCheckboxSelectedDisabledColor(checkboxSelectedDisabledColor: string): UiSdlThemeTemplate;

  readonly checkboxSelectedHoverColor: string;
  withCheckboxSelectedHoverColor(checkboxSelectedHoverColor: string): UiSdlThemeTemplate;

  readonly colorBgAccent: string;
  withColorBgAccent(colorBgAccent: string): UiSdlThemeTemplate;

  readonly colorBgAccentWeak: string;
  withColorBgAccentWeak(colorBgAccentWeak: string): UiSdlThemeTemplate;

  readonly colorBgActionHover: string;
  withColorBgActionHover(colorBgActionHover: string): UiSdlThemeTemplate;

  readonly colorBgActionHoverInverse: string;
  withColorBgActionHoverInverse(colorBgActionHoverInverse: string): UiSdlThemeTemplate;

  readonly colorBgActionPressed: string;
  withColorBgActionPressed(colorBgActionPressed: string): UiSdlThemeTemplate;

  readonly colorBgActionPressedInverse: string;
  withColorBgActionPressedInverse(colorBgActionPressedInverse: string): UiSdlThemeTemplate;

  readonly colorBgAvatarDefault: string;
  withColorBgAvatarDefault(colorBgAvatarDefault: string): UiSdlThemeTemplate;

  readonly colorBgBtnAccentFill: string;
  withColorBgBtnAccentFill(colorBgBtnAccentFill: string): UiSdlThemeTemplate;

  readonly colorBgBtnDangerFill: string;
  withColorBgBtnDangerFill(colorBgBtnDangerFill: string): UiSdlThemeTemplate;

  readonly colorBgBtnPrimaryFill: string;
  withColorBgBtnPrimaryFill(colorBgBtnPrimaryFill: string): UiSdlThemeTemplate;

  readonly colorBgCardChildPrimary: string;
  withColorBgCardChildPrimary(colorBgCardChildPrimary: string): UiSdlThemeTemplate;

  readonly colorBgCardChildSecondary: string;
  withColorBgCardChildSecondary(colorBgCardChildSecondary: string): UiSdlThemeTemplate;

  readonly colorBgCardParent: string;
  withColorBgCardParent(colorBgCardParent: string): UiSdlThemeTemplate;

  readonly colorBgContainer01: string;
  withColorBgContainer01(colorBgContainer01: string): UiSdlThemeTemplate;

  readonly colorBgContainer02: string;
  withColorBgContainer02(colorBgContainer02: string): UiSdlThemeTemplate;

  readonly colorBgDanger: string;
  withColorBgDanger(colorBgDanger: string): UiSdlThemeTemplate;

  readonly colorBgDangerWeak: string;
  withColorBgDangerWeak(colorBgDangerWeak: string): UiSdlThemeTemplate;

  readonly colorBgDataGridHover: string;
  withColorBgDataGridHover(colorBgDataGridHover: string): UiSdlThemeTemplate;

  readonly colorBgDataGridZebraStripe: string;
  withColorBgDataGridZebraStripe(colorBgDataGridZebraStripe: string): UiSdlThemeTemplate;

  readonly colorBgDataZoomSliderFilter: string;
  withColorBgDataZoomSliderFilter(colorBgDataZoomSliderFilter: string): UiSdlThemeTemplate;

  readonly colorBgDataZoomSparkline: string;
  withColorBgDataZoomSparkline(colorBgDataZoomSparkline: string): UiSdlThemeTemplate;

  readonly colorBgDecoOrangeStrong: string;
  withColorBgDecoOrangeStrong(colorBgDecoOrangeStrong: string): UiSdlThemeTemplate;

  readonly colorBgDecoOrange: string;
  withColorBgDecoOrange(colorBgDecoOrange: string): UiSdlThemeTemplate;

  readonly colorBgDecoOrangeWeak: string;
  withColorBgDecoOrangeWeak(colorBgDecoOrangeWeak: string): UiSdlThemeTemplate;

  readonly colorBgDecoOliveStrong: string;
  withColorBgDecoOliveStrong(colorBgDecoOliveStrong: string): UiSdlThemeTemplate;

  readonly colorBgDecoOlive: string;
  withColorBgDecoOlive(colorBgDecoOlive: string): UiSdlThemeTemplate;

  readonly colorBgDecoOliveWeak: string;
  withColorBgDecoOliveWeak(colorBgDecoOliveWeak: string): UiSdlThemeTemplate;

  readonly colorBgDecoLimeStrong: string;
  withColorBgDecoLimeStrong(colorBgDecoLimeStrong: string): UiSdlThemeTemplate;

  readonly colorBgDecoLime: string;
  withColorBgDecoLime(colorBgDecoLime: string): UiSdlThemeTemplate;

  readonly colorBgDecoLimeWeak: string;
  withColorBgDecoLimeWeak(colorBgDecoLimeWeak: string): UiSdlThemeTemplate;

  readonly colorBgDecoForestStrong: string;
  withColorBgDecoForestStrong(colorBgDecoForestStrong: string): UiSdlThemeTemplate;

  readonly colorBgDecoForest: string;
  withColorBgDecoForest(colorBgDecoForest: string): UiSdlThemeTemplate;

  readonly colorBgDecoForestWeak: string;
  withColorBgDecoForestWeak(colorBgDecoForestWeak: string): UiSdlThemeTemplate;

  readonly colorBgDecoCyanStrong: string;
  withColorBgDecoCyanStrong(colorBgDecoCyanStrong: string): UiSdlThemeTemplate;

  readonly colorBgDecoCyan: string;
  withColorBgDecoCyan(colorBgDecoCyan: string): UiSdlThemeTemplate;

  readonly colorBgDecoCyanWeak: string;
  withColorBgDecoCyanWeak(colorBgDecoCyanWeak: string): UiSdlThemeTemplate;

  readonly colorBgDecoSlateStrong: string;
  withColorBgDecoSlateStrong(colorBgDecoSlateStrong: string): UiSdlThemeTemplate;

  readonly colorBgDecoSlate: string;
  withColorBgDecoSlate(colorBgDecoSlate: string): UiSdlThemeTemplate;

  readonly colorBgDecoSlateWeak: string;
  withColorBgDecoSlateWeak(colorBgDecoSlateWeak: string): UiSdlThemeTemplate;

  readonly colorBgDecoPurpleStrong: string;
  withColorBgDecoPurpleStrong(colorBgDecoPurpleStrong: string): UiSdlThemeTemplate;

  readonly colorBgDecoPurple: string;
  withColorBgDecoPurple(colorBgDecoPurple: string): UiSdlThemeTemplate;

  readonly colorBgDecoPurpleWeak: string;
  withColorBgDecoPurpleWeak(colorBgDecoPurpleWeak: string): UiSdlThemeTemplate;

  readonly colorBgDecoPlumStrong: string;
  withColorBgDecoPlumStrong(colorBgDecoPlumStrong: string): UiSdlThemeTemplate;

  readonly colorBgDecoPlum: string;
  withColorBgDecoPlum(colorBgDecoPlum: string): UiSdlThemeTemplate;

  readonly colorBgDecoPlumWeak: string;
  withColorBgDecoPlumWeak(colorBgDecoPlumWeak: string): UiSdlThemeTemplate;

  readonly colorBgDecoChocoStrong: string;
  withColorBgDecoChocoStrong(colorBgDecoChocoStrong: string): UiSdlThemeTemplate;

  readonly colorBgDecoChoco: string;
  withColorBgDecoChoco(colorBgDecoChoco: string): UiSdlThemeTemplate;

  readonly colorBgDecoChocoWeak: string;
  withColorBgDecoChocoWeak(colorBgDecoChocoWeak: string): UiSdlThemeTemplate;

  readonly colorFgInputPlaceholder: string;
  withColorFgInputPlaceholder(colorFgInputPlaceholder: string): UiSdlThemeTemplate;

  readonly colorBorderDataZoomSparkline: string;
  withColorBorderDataZoomSparkline(colorBorderDataZoomSparkline: string): UiSdlThemeTemplate;

  readonly colorBgInlineNotificationError: string;
  withColorBgInlineNotificationError(colorBgInlineNotificationError: string): UiSdlThemeTemplate;

  readonly colorBgInlineNotificationSuccess: string;
  withColorBgInlineNotificationSuccess(colorBgInlineNotificationSuccess: string): UiSdlThemeTemplate;

  readonly colorBgInlineNotificationWarning: string;
  withColorBgInlineNotificationWarning(colorBgInlineNotificationWarning: string): UiSdlThemeTemplate;

  readonly colorBgInputReadonly: string;
  withColorBgInputReadonly(colorBgInputReadonly: string): UiSdlThemeTemplate;

  readonly colorBgMenu: string;
  withColorBgMenu(colorBgMenu: string): UiSdlThemeTemplate;

  readonly colorBgMenuHoverUnselected: string;
  withColorBgMenuHoverUnselected(colorBgMenuHoverUnselected: string): UiSdlThemeTemplate;

  readonly colorBgMenuItemSelected: string;
  withColorBgMenuItemSelected(colorBgMenuItemSelected: string): UiSdlThemeTemplate;

  readonly colorBgPage: string;
  withColorBgPage(colorBgPage: string): UiSdlThemeTemplate;

  readonly colorBgPrimary: string;
  withColorBgPrimary(colorBgPrimary: string): UiSdlThemeTemplate;

  readonly colorBgPrimaryInverse: string;
  withColorBgPrimaryInverse(colorBgPrimaryInverse: string): UiSdlThemeTemplate;

  readonly colorBgContentFrame: string;
  withColorBgContentFrame(colorBgContentFrame: string): UiSdlThemeTemplate;

  readonly colorBgCoreAccentStrong: string;
  withColorBgCoreAccentStrong(colorBgCoreAccentStrong: string): UiSdlThemeTemplate;

  readonly colorBgCoreAccent: string;
  withColorBgCoreAccent(colorBgCoreAccent: string): UiSdlThemeTemplate;

  readonly colorBgCoreAccentWeak: string;
  withColorBgCoreAccentWeak(colorBgCoreAccentWeak: string): UiSdlThemeTemplate;

  readonly colorBgCoreDangerStrong: string;
  withColorBgCoreDangerStrong(colorBgCoreDangerStrong: string): UiSdlThemeTemplate;

  readonly colorBgCoreDanger: string;
  withColorBgCoreDanger(colorBgCoreDanger: string): UiSdlThemeTemplate;

  readonly colorBgCoreDangerWeak: string;
  withColorBgCoreDangerWeak(colorBgCoreDangerWeak: string): UiSdlThemeTemplate;

  readonly colorBgCoreSuccessStrong: string;
  withColorBgCoreSuccessStrong(colorBgCoreSuccessStrong: string): UiSdlThemeTemplate;

  readonly colorBgCoreSuccess: string;
  withColorBgCoreSuccess(colorBgCoreSuccess: string): UiSdlThemeTemplate;

  readonly colorBgCoreSuccessWeak: string;
  withColorBgCoreSuccessWeak(colorBgCoreSuccessWeak: string): UiSdlThemeTemplate;

  readonly colorBgCoreWarningStrong: string;
  withColorBgCoreWarningStrong(colorBgCoreWarningStrong: string): UiSdlThemeTemplate;

  readonly colorBgCoreWarning: string;
  withColorBgCoreWarning(colorBgCoreWarning: string): UiSdlThemeTemplate;

  readonly colorBgCoreWarningWeak: string;
  withColorBgCoreWarningWeak(colorBgCoreWarningWeak: string): UiSdlThemeTemplate;

  readonly colorBgSuccessWeak: string;
  withColorBgSuccessWeak(colorBgSuccessWeak: string): UiSdlThemeTemplate;

  readonly colorBgSideNavPanel: string;
  withColorBgSideNavPanel(colorBgSideNavPanel: string): UiSdlThemeTemplate;

  readonly colorBgSecondary: string;
  withColorBgSecondary(colorBgSecondary: string): UiSdlThemeTemplate;

  readonly colorBgSecondaryInverse: string;
  withColorBgSecondaryInverse(colorBgSecondaryInverse: string): UiSdlThemeTemplate;

  readonly colorBgSegBtnSelected: string;
  withColorBgSegBtnSelected(colorBgSegBtnSelected: string): UiSdlThemeTemplate;

  readonly colorBgSelected: string;
  withColorBgSelected(colorBgSelected: string): UiSdlThemeTemplate;

  readonly colorBgSuccess: string;
  withColorBgSuccess(colorBgSuccess: string): UiSdlThemeTemplate;

  readonly colorBgTertiary: string;
  withColorBgTertiary(colorBgTertiary: string): UiSdlThemeTemplate;

  readonly colorBgTertiaryInverse: string;
  withColorBgTertiaryInverse(colorBgTertiaryInverse: string): UiSdlThemeTemplate;

  readonly colorBgTickMark: string;
  withColorBgTickMark(colorBgTickMark: string): UiSdlThemeTemplate;

  readonly colorBgTrack: string;
  withColorBgTrack(colorBgTrack: string): UiSdlThemeTemplate;

  readonly colorBgWarning: string;
  withColorBgWarning(colorBgWarning: string): UiSdlThemeTemplate;

  readonly colorBgWarningWeak: string;
  withColorBgWarningWeak(colorBgWarningWeak: string): UiSdlThemeTemplate;

  readonly colorBorder: string;
  withColorBorder(colorBorder: string): UiSdlThemeTemplate;

  readonly colorBorderAccent: string;
  withColorBorderAccent(colorBorderAccent: string): UiSdlThemeTemplate;

  readonly colorBorderBtnAccentOutline: string;
  withColorBorderBtnAccentOutline(colorBorderBtnAccentOutline: string): UiSdlThemeTemplate;

  readonly colorBorderBtnDangerOutline: string;
  withColorBorderBtnDangerOutline(colorBorderBtnDangerOutline: string): UiSdlThemeTemplate;

  readonly colorBorderBtnPrimaryOutline: string;
  withColorBorderBtnPrimaryOutline(colorBorderBtnPrimaryOutline: string): UiSdlThemeTemplate;

  readonly colorBorderCardChildPrimary: string;
  withColorBorderCardChildPrimary(colorBorderCardChildPrimary: string): UiSdlThemeTemplate;

  readonly colorBorderCardChildSecondary: string;
  withColorBorderCardChildSecondary(colorBorderCardChildSecondary: string): UiSdlThemeTemplate;

  readonly colorBorderCardParent: string;
  withColorBorderCardParent(colorBorderCardParent: string): UiSdlThemeTemplate;

  readonly colorBorderDanger: string;
  withColorBorderDanger(colorBorderDanger: string): UiSdlThemeTemplate;

  readonly colorBorderInlineNotificationError: string;
  withColorBorderInlineNotificationError(colorBorderInlineNotificationError: string): UiSdlThemeTemplate;

  readonly colorBorderInlineNotificationSuccess: string;
  withColorBorderInlineNotificationSuccess(colorBorderInlineNotificationSuccess: string): UiSdlThemeTemplate;

  readonly colorBorderInlineNotificationWarning: string;
  withColorBorderInlineNotificationWarning(colorBorderInlineNotificationWarning: string): UiSdlThemeTemplate;

  readonly colorBorderMenu: string;
  withColorBorderMenu(colorBorderMenu: string): UiSdlThemeTemplate;

  readonly colorBorderReadonly: string;
  withColorBorderReadonly(colorBorderReadonly: string): UiSdlThemeTemplate;

  readonly colorBorderSegBtn: string;
  withColorBorderSegBtn(colorBorderSegBtn: string): UiSdlThemeTemplate;

  readonly colorBorderStrong: string;
  withColorBorderStrong(colorBorderStrong: string): UiSdlThemeTemplate;

  readonly colorBorderSuccess: string;
  withColorBorderSuccess(colorBorderSuccess: string): UiSdlThemeTemplate;

  readonly colorBorderWarning: string;
  withColorBorderWarning(colorBorderWarning: string): UiSdlThemeTemplate;

  readonly colorBorderWeak: string;
  withColorBorderWeak(colorBorderWeak: string): UiSdlThemeTemplate;

  readonly colorDivider: string;
  withColorDivider(colorDivider: string): UiSdlThemeTemplate;

  readonly colorDividerStrong: string;
  withColorDividerStrong(colorDividerStrong: string): UiSdlThemeTemplate;

  readonly colorDividerWeak: string;
  withColorDividerWeak(colorDividerWeak: string): UiSdlThemeTemplate;

  readonly colorBgCollapsibleNav: string;
  withColorBgCollapsibleNav(colorBgCollapsibleNav: string): UiSdlThemeTemplate;

  readonly colorBgTintTimeBarOverlay: string;
  withColorBgTintTimeBarOverlay(colorBgTintTimeBarOverlay: string): UiSdlThemeTemplate;

  readonly colorBgSankeyLabel: string;
  withColorBgSankeyLabel(colorBgSankeyLabel: string): UiSdlThemeTemplate;

  readonly colorBgSideNav: string;
  withColorBgSideNav(colorBgSideNav: string): UiSdlThemeTemplate;

  readonly colorBgSideNavItemHover: string;
  withColorBgSideNavItemHover(colorBgSideNavItemHover: string): UiSdlThemeTemplate;

  readonly colorBgSideItemHover: string;
  withColorBgSideItemHover(colorBgSideItemHover: string): UiSdlThemeTemplate;

  readonly colorFgSideNavSelected: string;
  withColorFgSideNavSelected(colorFgSideNavSelected: string): UiSdlThemeTemplate;

  readonly colorFgSideNavUnselected: string;
  withColorFgSideNavUnselected(colorFgSideNavUnselected: string): UiSdlThemeTemplate;

  readonly colorBorderSideNavItemIndicator: string;
  withColorBorderSideNavItemIndicator(colorBorderSideNavItemIndicator: string): UiSdlThemeTemplate;

  readonly colorBorderSideNavItemDivider: string;
  withColorBorderSideNavItemDivider(colorBorderSideNavItemDivider: string): UiSdlThemeTemplate;

  readonly colorFgAccent: string;
  withColorFgAccent(colorFgAccent: string): UiSdlThemeTemplate;

  readonly colorFgAccentWeak: string;
  withColorFgAccentWeak(colorFgAccentWeak: string): UiSdlThemeTemplate;

  readonly colorFgAccentStrong: string;
  withColorFgAccentStrong(colorFgAccentStrong: string): UiSdlThemeTemplate;

  readonly colorFgBtnAccent: string;
  withColorFgBtnAccent(colorFgBtnAccent: string): UiSdlThemeTemplate;

  readonly colorFgBtnDanger: string;
  withColorFgBtnDanger(colorFgBtnDanger: string): UiSdlThemeTemplate;

  readonly colorFgBtnPrimary: string;
  withColorFgBtnPrimary(colorFgBtnPrimary: string): UiSdlThemeTemplate;

  readonly colorFgDanger: string;
  withColorFgDanger(colorFgDanger: string): UiSdlThemeTemplate;

  readonly colorFgDangerStrong: string;
  withColorFgDangerStrong(colorFgDangerStrong: string): UiSdlThemeTemplate;

  readonly colorFgDangerWeak: string;
  withColorFgDangerWeak(colorFgDangerWeak: string): UiSdlThemeTemplate;

  readonly colorFgDecoOrangeStrong: string;
  withColorFgDecoOrangeStrong(colorFgDecoOrangeStrong: string): UiSdlThemeTemplate;

  readonly colorFgDecoOrange: string;
  withColorFgDecoOrange(colorFgDecoOrange: string): UiSdlThemeTemplate;

  readonly colorFgDecoOrangeWeak: string;
  withColorFgDecoOrangeWeak(colorFgDecoOrangeWeak: string): UiSdlThemeTemplate;

  readonly colorFgDecoOliveStrong: string;
  withColorFgDecoOliveStrong(colorFgDecoOliveStrong: string): UiSdlThemeTemplate;

  readonly colorFgDecoOlive: string;
  withColorFgDecoOlive(colorFgDecoOlive: string): UiSdlThemeTemplate;

  readonly colorFgDecoOliveWeak: string;
  withColorFgDecoOliveWeak(colorFgDecoOliveWeak: string): UiSdlThemeTemplate;

  readonly colorFgDecoLimeStrong: string;
  withColorFgDecoLimeStrong(colorFgDecoLimeStrong: string): UiSdlThemeTemplate;

  readonly colorFgDecoLime: string;
  withColorFgDecoLime(colorFgDecoLime: string): UiSdlThemeTemplate;

  readonly colorFgDecoLimeWeak: string;
  withColorFgDecoLimeWeak(colorFgDecoLimeWeak: string): UiSdlThemeTemplate;

  readonly colorFgDecoForestStrong: string;
  withColorFgDecoForestStrong(colorFgDecoForestStrong: string): UiSdlThemeTemplate;

  readonly colorFgDecoForest: string;
  withColorFgDecoForest(colorFgDecoForest: string): UiSdlThemeTemplate;

  readonly colorFgDecoForestWeak: string;
  withColorFgDecoForestWeak(colorFgDecoForestWeak: string): UiSdlThemeTemplate;

  readonly colorFgDecoCyanStrong: string;
  withColorFgDecoCyanStrong(colorFgDecoCyanStrong: string): UiSdlThemeTemplate;

  readonly colorFgDecoCyan: string;
  withColorFgDecoCyan(colorFgDecoCyan: string): UiSdlThemeTemplate;

  readonly colorFgDecoCyanWeak: string;
  withColorFgDecoCyanWeak(colorFgDecoCyanWeak: string): UiSdlThemeTemplate;

  readonly colorFgDecoSlateStrong: string;
  withColorFgDecoSlateStrong(colorFgDecoSlateStrong: string): UiSdlThemeTemplate;

  readonly colorFgDecoSlate: string;
  withColorFgDecoSlate(colorFgDecoSlate: string): UiSdlThemeTemplate;

  readonly colorFgDecoSlateWeak: string;
  withColorFgDecoSlateWeak(colorFgDecoSlateWeak: string): UiSdlThemeTemplate;

  readonly colorFgDecoPurpleStrong: string;
  withColorFgDecoPurpleStrong(colorFgDecoPurpleStrong: string): UiSdlThemeTemplate;

  readonly colorFgDecoPurple: string;
  withColorFgDecoPurple(colorFgDecoPurple: string): UiSdlThemeTemplate;

  readonly colorFgDecoPurpleWeak: string;
  withColorFgDecoPurpleWeak(colorFgDecoPurpleWeak: string): UiSdlThemeTemplate;

  readonly colorFgDecoPlumStrong: string;
  withColorFgDecoPlumStrong(colorFgDecoPlumStrong: string): UiSdlThemeTemplate;

  readonly colorFgDecoPlum: string;
  withColorFgDecoPlum(colorFgDecoPlum: string): UiSdlThemeTemplate;

  readonly colorFgDecoPlumWeak: string;
  withColorFgDecoPlumWeak(colorFgDecoPlumWeak: string): UiSdlThemeTemplate;

  readonly colorFgDecoChocoStrong: string;
  withColorFgDecoChocoStrong(colorFgDecoChocoStrong: string): UiSdlThemeTemplate;

  readonly colorFgDecoChoco: string;
  withColorFgDecoChoco(colorFgDecoChoco: string): UiSdlThemeTemplate;

  readonly colorFgDecoChocoWeak: string;
  withColorFgDecoChocoWeak(colorFgDecoChocoWeak: string): UiSdlThemeTemplate;

  readonly colorFgMenuItemSelected: string;
  withColorFgMenuItemSelected(colorFgMenuItemSelected: string): UiSdlThemeTemplate;

  readonly colorFgMenuItemSelectedIndicator: string;
  withColorFgMenuItemSelectedIndicator(colorFgMenuItemSelectedIndicator: string): UiSdlThemeTemplate;

  readonly colorFgMenuItemUnselected: string;
  withColorFgMenuItemUnselected(colorFgMenuItemUnselected: string): UiSdlThemeTemplate;

  readonly colorFgPrimary: string;
  withColorFgPrimary(colorFgPrimary: string): UiSdlThemeTemplate;

  readonly colorFgPrimaryInverse: string;
  withColorFgPrimaryInverse(colorFgPrimaryInverse: string): UiSdlThemeTemplate;

  readonly colorFgReadonly: string;
  withColorFgReadonly(colorFgReadonly: string): UiSdlThemeTemplate;

  readonly colorFgSecondary: string;
  withColorFgSecondary(colorFgSecondary: string): UiSdlThemeTemplate;

  readonly colorFgSecondaryInverse: string;
  withColorFgSecondaryInverse(colorFgSecondaryInverse: string): UiSdlThemeTemplate;

  readonly colorFgSegBtn: string;
  withColorFgSegBtn(colorFgSegBtn: string): UiSdlThemeTemplate;

  readonly colorFgSegBtnSelected: string;
  withColorFgSegBtnSelected(colorFgSegBtnSelected: string): UiSdlThemeTemplate;

  readonly colorFgSuccess: string;
  withColorFgSuccess(colorFgSuccess: string): UiSdlThemeTemplate;

  readonly colorFgSuccessStrong: string;
  withColorFgSuccessStrong(colorFgSuccessStrong: string): UiSdlThemeTemplate;

  readonly colorFgSuccessWeak: string;
  withColorFgSuccessWeak(colorFgSuccessWeak: string): UiSdlThemeTemplate;

  readonly colorFgWarning: string;
  withColorFgWarning(colorFgWarning: string): UiSdlThemeTemplate;

  readonly colorFgWarningStrong: string;
  withColorFgWarningStrong(colorFgWarningStrong: string): UiSdlThemeTemplate;

  readonly colorFgWarningWeak: string;
  withColorFgWarningWeak(colorFgWarningWeak: string): UiSdlThemeTemplate;

  readonly colorFocus: string;
  withColorFocus(colorFocus: string): UiSdlThemeTemplate;

  readonly componentBackgroundColor: string;
  withComponentBackgroundColor(componentBackgroundColor: string): UiSdlThemeTemplate;

  readonly componentBackgroundColorError: string;
  withComponentBackgroundColorError(componentBackgroundColorError: string): UiSdlThemeTemplate;

  readonly componentBackgroundColorSuccess: string;
  withComponentBackgroundColorSuccess(componentBackgroundColorSuccess: string): UiSdlThemeTemplate;

  readonly componentBackgroundColorWarning: string;
  withComponentBackgroundColorWarning(componentBackgroundColorWarning: string): UiSdlThemeTemplate;

  readonly componentBorderColor: string;
  withComponentBorderColor(componentBorderColor: string): UiSdlThemeTemplate;

  readonly componentDividerColor: string;
  withComponentDividerColor(componentDividerColor: string): UiSdlThemeTemplate;

  readonly dangerColor: string;
  withDangerColor(dangerColor: string): UiSdlThemeTemplate;

  readonly dateIconColor: string;
  withDateIconColor(dateIconColor: string): UiSdlThemeTemplate;

  readonly dateIconTextColor: string;
  withDateIconTextColor(dateIconTextColor: string): UiSdlThemeTemplate;

  readonly dropdownDescriptionBackgroundColor: string;
  withDropdownDescriptionBackgroundColor(dropdownDescriptionBackgroundColor: string): UiSdlThemeTemplate;

  readonly dropdownDescriptionColor: string;
  withDropdownDescriptionColor(dropdownDescriptionColor: string): UiSdlThemeTemplate;

  readonly dropdownMessageColor: string;
  withDropdownMessageColor(dropdownMessageColor: string): UiSdlThemeTemplate;

  readonly dropdownOptionDividerColor: string;
  withDropdownOptionDividerColor(dropdownOptionDividerColor: string): UiSdlThemeTemplate;

  readonly dropdownSelectionColor: string;
  withDropdownSelectionColor(dropdownSelectionColor: string): UiSdlThemeTemplate;

  readonly dynamicComponentLoaderBackgroundColor: string;
  withDynamicComponentLoaderBackgroundColor(dynamicComponentLoaderBackgroundColor: string): UiSdlThemeTemplate;

  readonly expressionFocusedInputBackgroundColor: string;
  withExpressionFocusedInputBackgroundColor(expressionFocusedInputBackgroundColor: string): UiSdlThemeTemplate;

  readonly fontColor: string;
  withFontColor(fontColor: string): UiSdlThemeTemplate;

  readonly formFieldBackgroundColor: string;
  withFormFieldBackgroundColor(formFieldBackgroundColor: string): UiSdlThemeTemplate;

  readonly formFieldBackgroundColorDisabled: string;
  withFormFieldBackgroundColorDisabled(formFieldBackgroundColorDisabled: string): UiSdlThemeTemplate;

  readonly formFieldBorderColor: string;
  withFormFieldBorderColor(formFieldBorderColor: string): UiSdlThemeTemplate;

  readonly formFieldBorderColorDisabled: string;
  withFormFieldBorderColorDisabled(formFieldBorderColorDisabled: string): UiSdlThemeTemplate;

  readonly formFieldColorDisabled: string;
  withFormFieldColorDisabled(formFieldColorDisabled: string): UiSdlThemeTemplate;

  readonly formFieldColorHint: string;
  withFormFieldColorHint(formFieldColorHint: string): UiSdlThemeTemplate;

  readonly formFieldErrorBorderColor: string;
  withFormFieldErrorBorderColor(formFieldErrorBorderColor: string): UiSdlThemeTemplate;

  readonly formFieldErrorHoverBorderColor: string;
  withFormFieldErrorHoverBorderColor(formFieldErrorHoverBorderColor: string): UiSdlThemeTemplate;

  readonly formFieldHeaderColorDisabled: string;
  withFormFieldHeaderColorDisabled(formFieldHeaderColorDisabled: string): UiSdlThemeTemplate;

  readonly formFieldHoverBackgroundColor: string;
  withFormFieldHoverBackgroundColor(formFieldHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly formFieldHoverBorderColor: string;
  withFormFieldHoverBorderColor(formFieldHoverBorderColor: string): UiSdlThemeTemplate;

  readonly formFieldLabelErrorColor: string;
  withFormFieldLabelErrorColor(formFieldLabelErrorColor: string): UiSdlThemeTemplate;

  readonly formFieldLabelFocusColor: string;
  withFormFieldLabelFocusColor(formFieldLabelFocusColor: string): UiSdlThemeTemplate;

  readonly formFieldSetLinkHoverColor: string;
  withFormFieldSetLinkHoverColor(formFieldSetLinkHoverColor: string): UiSdlThemeTemplate;

  readonly formFieldVariantBorderColor: string;
  withFormFieldVariantBorderColor(formFieldVariantBorderColor: string): UiSdlThemeTemplate;

  readonly gaugeAxisBarColor: string;
  withGaugeAxisBarColor(gaugeAxisBarColor: string): UiSdlThemeTemplate;

  readonly gaugeFontColor: string;
  withGaugeFontColor(gaugeFontColor: string): UiSdlThemeTemplate;

  readonly gaugeProgressBarDefaultColor: string;
  withGaugeProgressBarDefaultColor(gaugeProgressBarDefaultColor: string): UiSdlThemeTemplate;

  readonly gradientLinearCardParentLeft: string;
  withGradientLinearCardParentLeft(gradientLinearCardParentLeft: string): UiSdlThemeTemplate;

  readonly gradientLinearCardParentRight: string;
  withGradientLinearCardParentRight(gradientLinearCardParentRight: string): UiSdlThemeTemplate;

  readonly gradientLinearCardChildLeft: string;
  withGradientLinearCardChildLeft(gradientLinearCardChildLeft: string): UiSdlThemeTemplate;

  readonly gradientLinearCardChildRight: string;
  withGradientLinearCardChildRight(gradientLinearCardChildRight: string): UiSdlThemeTemplate;

  readonly gradientLinearNav: string;
  withGradientLinearNav(gradientLinearNav: string): UiSdlThemeTemplate;

  readonly graphVisualizationClusterNodeFillColor: string;
  withGraphVisualizationClusterNodeFillColor(graphVisualizationClusterNodeFillColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationClusterNodeOutlineColor: string;
  withGraphVisualizationClusterNodeOutlineColor(graphVisualizationClusterNodeOutlineColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationGlyphFontColor: string;
  withGraphVisualizationGlyphFontColor(graphVisualizationGlyphFontColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationLegendBackgroundColor: string;
  withGraphVisualizationLegendBackgroundColor(graphVisualizationLegendBackgroundColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationLegendViewMoreButtonFontColor: string;
  withGraphVisualizationLegendViewMoreButtonFontColor(graphVisualizationLegendViewMoreButtonFontColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationMapTheme: string;
  withGraphVisualizationMapTheme(graphVisualizationMapTheme: string): UiSdlThemeTemplate;

  readonly graphVisualizationMergedEdgeGlyphBackgroundColor: string;
  withGraphVisualizationMergedEdgeGlyphBackgroundColor(graphVisualizationMergedEdgeGlyphBackgroundColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationNodeDefaultDonutColor: string;
  withGraphVisualizationNodeDefaultDonutColor(graphVisualizationNodeDefaultDonutColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationNodeInfoGlyphBackgroundColor: string;
  withGraphVisualizationNodeInfoGlyphBackgroundColor(graphVisualizationNodeInfoGlyphBackgroundColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationNodeInfoGlyphFontColor: string;
  withGraphVisualizationNodeInfoGlyphFontColor(graphVisualizationNodeInfoGlyphFontColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationPercentageDonutSegmentColor: string;
  withGraphVisualizationPercentageDonutSegmentColor(graphVisualizationPercentageDonutSegmentColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationTimeBarBackgroundColor: string;
  withGraphVisualizationTimeBarBackgroundColor(graphVisualizationTimeBarBackgroundColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationTimeBarColor: string;
  withGraphVisualizationTimeBarColor(graphVisualizationTimeBarColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationTimeBarHoverColor: string;
  withGraphVisualizationTimeBarHoverColor(graphVisualizationTimeBarHoverColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationTimeBarScaleHoverColor: string;
  withGraphVisualizationTimeBarScaleHoverColor(graphVisualizationTimeBarScaleHoverColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationTooltipBackgroundColor: string;
  withGraphVisualizationTooltipBackgroundColor(graphVisualizationTooltipBackgroundColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationTooltipBodyColor: string;
  withGraphVisualizationTooltipBodyColor(graphVisualizationTooltipBodyColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationTooltipSubtitleColor: string;
  withGraphVisualizationTooltipSubtitleColor(graphVisualizationTooltipSubtitleColor: string): UiSdlThemeTemplate;

  readonly graphVisualizationTooltipTitleColor: string;
  withGraphVisualizationTooltipTitleColor(graphVisualizationTooltipTitleColor: string): UiSdlThemeTemplate;

  readonly gridCellColorWheelBackgroundColor: string;
  withGridCellColorWheelBackgroundColor(gridCellColorWheelBackgroundColor: string): UiSdlThemeTemplate;

  readonly gridHeaderFontColor: string;
  withGridHeaderFontColor(gridHeaderFontColor: string): UiSdlThemeTemplate;

  readonly gridHoverBackgroundColor: string;
  withGridHoverBackgroundColor(gridHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly gridMessageBackgroundColor: string;
  withGridMessageBackgroundColor(gridMessageBackgroundColor: string): UiSdlThemeTemplate;

  readonly gridPagerLabelFontColor: string;
  withGridPagerLabelFontColor(gridPagerLabelFontColor: string): UiSdlThemeTemplate;

  readonly gridPagerSizesFontColor: string;
  withGridPagerSizesFontColor(gridPagerSizesFontColor: string): UiSdlThemeTemplate;

  readonly gridSelectedCellBackgroundColor: string;
  withGridSelectedCellBackgroundColor(gridSelectedCellBackgroundColor: string): UiSdlThemeTemplate;

  readonly gridSelectedCellBorderColor: string;
  withGridSelectedCellBorderColor(gridSelectedCellBorderColor: string): UiSdlThemeTemplate;

  readonly gridSelectedFontColor: string;
  withGridSelectedFontColor(gridSelectedFontColor: string): UiSdlThemeTemplate;

  readonly gridSelectedHoverBackgroundColor: string;
  withGridSelectedHoverBackgroundColor(gridSelectedHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly iconGroupColor: string;
  withIconGroupColor(iconGroupColor: string): UiSdlThemeTemplate;

  readonly indicatorBarBackgroundColor: string;
  withIndicatorBarBackgroundColor(indicatorBarBackgroundColor: string): UiSdlThemeTemplate;

  readonly infoColor: string;
  withInfoColor(infoColor: string): UiSdlThemeTemplate;

  readonly invertedComponentBackgroundColor: string;
  withInvertedComponentBackgroundColor(invertedComponentBackgroundColor: string): UiSdlThemeTemplate;

  readonly kanbanBoardBackgroundColumnTitle: string;
  withKanbanBoardBackgroundColumnTitle(kanbanBoardBackgroundColumnTitle: string): UiSdlThemeTemplate;

  readonly kanbanBoardBackgroundItemSlot: string;
  withKanbanBoardBackgroundItemSlot(kanbanBoardBackgroundItemSlot: string): UiSdlThemeTemplate;

  readonly kanbanBoardBackgroundLayout: string;
  withKanbanBoardBackgroundLayout(kanbanBoardBackgroundLayout: string): UiSdlThemeTemplate;

  readonly kanbanBoardBorderTitle: string;
  withKanbanBoardBorderTitle(kanbanBoardBorderTitle: string): UiSdlThemeTemplate;

  readonly kanbanBoardButtonColor: string;
  withKanbanBoardButtonColor(kanbanBoardButtonColor: string): UiSdlThemeTemplate;

  readonly kanbanBoardCardContentColor: string;
  withKanbanBoardCardContentColor(kanbanBoardCardContentColor: string): UiSdlThemeTemplate;

  readonly kanbanBoardCardHeadLineBlockColor: string;
  withKanbanBoardCardHeadLineBlockColor(kanbanBoardCardHeadLineBlockColor: string): UiSdlThemeTemplate;

  readonly kanbanBoardContentBackgroundColor: string;
  withKanbanBoardContentBackgroundColor(kanbanBoardContentBackgroundColor: string): UiSdlThemeTemplate;

  readonly kanbanBoardTextBackgroundCollectionList: string;
  withKanbanBoardTextBackgroundCollectionList(kanbanBoardTextBackgroundCollectionList: string): UiSdlThemeTemplate;

  readonly kanbanBoardTitleColor: string;
  withKanbanBoardTitleColor(kanbanBoardTitleColor: string): UiSdlThemeTemplate;

  readonly kendoAppSurfaceColor?: string | null;
  withKendoAppSurfaceColor(kendoAppSurfaceColor: string | null): UiSdlThemeTemplate;

  readonly kendoOnAppSurfaceColor?: string | null;
  withKendoOnAppSurfaceColor(kendoOnAppSurfaceColor: string | null): UiSdlThemeTemplate;

  readonly kendoSubtleColor?: string | null;
  withKendoSubtleColor(kendoSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoSurfaceColor?: string | null;
  withKendoSurfaceColor(kendoSurfaceColor: string | null): UiSdlThemeTemplate;

  readonly kendoSurfaceAltColor?: string | null;
  withKendoSurfaceAltColor(kendoSurfaceAltColor: string | null): UiSdlThemeTemplate;

  readonly kendoBorderColor?: string | null;
  withKendoBorderColor(kendoBorderColor: string | null): UiSdlThemeTemplate;

  readonly kendoBorderAltColor?: string | null;
  withKendoBorderAltColor(kendoBorderAltColor: string | null): UiSdlThemeTemplate;

  readonly kendoBaseSubtleColor?: string | null;
  withKendoBaseSubtleColor(kendoBaseSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoBaseSubtleHoverColor?: string | null;
  withKendoBaseSubtleHoverColor(kendoBaseSubtleHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoBaseSubtleActiveColor?: string | null;
  withKendoBaseSubtleActiveColor(kendoBaseSubtleActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoBaseColor?: string | null;
  withKendoBaseColor(kendoBaseColor: string | null): UiSdlThemeTemplate;

  readonly kendoBaseHoverColor?: string | null;
  withKendoBaseHoverColor(kendoBaseHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoBaseActiveColor?: string | null;
  withKendoBaseActiveColor(kendoBaseActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoBaseEmphasisColor?: string | null;
  withKendoBaseEmphasisColor(kendoBaseEmphasisColor: string | null): UiSdlThemeTemplate;

  readonly kendoBaseOnSubtleColor?: string | null;
  withKendoBaseOnSubtleColor(kendoBaseOnSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoOnBaseColor?: string | null;
  withKendoOnBaseColor(kendoOnBaseColor: string | null): UiSdlThemeTemplate;

  readonly kendoBaseOnSurfaceColor?: string | null;
  withKendoBaseOnSurfaceColor(kendoBaseOnSurfaceColor: string | null): UiSdlThemeTemplate;

  readonly kendoElevation01?: string | null;
  withKendoElevation01(kendoElevation01: string | null): UiSdlThemeTemplate;

  readonly kendoElevation02?: string | null;
  withKendoElevation02(kendoElevation02: string | null): UiSdlThemeTemplate;

  readonly kendoElevation03?: string | null;
  withKendoElevation03(kendoElevation03: string | null): UiSdlThemeTemplate;

  readonly kendoElevation04?: string | null;
  withKendoElevation04(kendoElevation04: string | null): UiSdlThemeTemplate;

  readonly kendoElevation05?: string | null;
  withKendoElevation05(kendoElevation05: string | null): UiSdlThemeTemplate;

  readonly kendoElevation06?: string | null;
  withKendoElevation06(kendoElevation06: string | null): UiSdlThemeTemplate;

  readonly kendoElevation07?: string | null;
  withKendoElevation07(kendoElevation07: string | null): UiSdlThemeTemplate;

  readonly kendoElevation08?: string | null;
  withKendoElevation08(kendoElevation08: string | null): UiSdlThemeTemplate;

  readonly kendoElevation09?: string | null;
  withKendoElevation09(kendoElevation09: string | null): UiSdlThemeTemplate;

  readonly kendoPrimarySubtleColor?: string | null;
  withKendoPrimarySubtleColor(kendoPrimarySubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoPrimarySubtleHoverColor?: string | null;
  withKendoPrimarySubtleHoverColor(kendoPrimarySubtleHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoPrimarySubtleActiveColor?: string | null;
  withKendoPrimarySubtleActiveColor(kendoPrimarySubtleActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoPrimaryColor?: string | null;
  withKendoPrimaryColor(kendoPrimaryColor: string | null): UiSdlThemeTemplate;

  readonly kendoPrimaryHoverColor?: string | null;
  withKendoPrimaryHoverColor(kendoPrimaryHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoPrimaryActiveColor?: string | null;
  withKendoPrimaryActiveColor(kendoPrimaryActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoPrimaryEmphasisColor?: string | null;
  withKendoPrimaryEmphasisColor(kendoPrimaryEmphasisColor: string | null): UiSdlThemeTemplate;

  readonly kendoPrimaryOnSubtleColor?: string | null;
  withKendoPrimaryOnSubtleColor(kendoPrimaryOnSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoOnPrimaryColor?: string | null;
  withKendoOnPrimaryColor(kendoOnPrimaryColor: string | null): UiSdlThemeTemplate;

  readonly kendoPrimaryOnSurfaceColor?: string | null;
  withKendoPrimaryOnSurfaceColor(kendoPrimaryOnSurfaceColor: string | null): UiSdlThemeTemplate;

  readonly kendoSecondarySubtleColor?: string | null;
  withKendoSecondarySubtleColor(kendoSecondarySubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoSecondarySubtleHoverColor?: string | null;
  withKendoSecondarySubtleHoverColor(kendoSecondarySubtleHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoSecondarySubtleActiveColor?: string | null;
  withKendoSecondarySubtleActiveColor(kendoSecondarySubtleActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoSecondaryColor?: string | null;
  withKendoSecondaryColor(kendoSecondaryColor: string | null): UiSdlThemeTemplate;

  readonly kendoSecondaryHoverColor?: string | null;
  withKendoSecondaryHoverColor(kendoSecondaryHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoSecondaryActiveColor?: string | null;
  withKendoSecondaryActiveColor(kendoSecondaryActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoSecondaryEmphasisColor?: string | null;
  withKendoSecondaryEmphasisColor(kendoSecondaryEmphasisColor: string | null): UiSdlThemeTemplate;

  readonly kendoSecondaryOnSubtleColor?: string | null;
  withKendoSecondaryOnSubtleColor(kendoSecondaryOnSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoOnSecondaryColor?: string | null;
  withKendoOnSecondaryColor(kendoOnSecondaryColor: string | null): UiSdlThemeTemplate;

  readonly kendoSecondaryOnSurfaceColor?: string | null;
  withKendoSecondaryOnSurfaceColor(kendoSecondaryOnSurfaceColor: string | null): UiSdlThemeTemplate;

  readonly kendoTertiarySubtleColor?: string | null;
  withKendoTertiarySubtleColor(kendoTertiarySubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoTertiarySubtleHoverColor?: string | null;
  withKendoTertiarySubtleHoverColor(kendoTertiarySubtleHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoTertiarySubtleActiveColor?: string | null;
  withKendoTertiarySubtleActiveColor(kendoTertiarySubtleActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoTertiaryColor?: string | null;
  withKendoTertiaryColor(kendoTertiaryColor: string | null): UiSdlThemeTemplate;

  readonly kendoTertiaryHoverColor?: string | null;
  withKendoTertiaryHoverColor(kendoTertiaryHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoTertiaryActiveColor?: string | null;
  withKendoTertiaryActiveColor(kendoTertiaryActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoTertiaryEmphasisColor?: string | null;
  withKendoTertiaryEmphasisColor(kendoTertiaryEmphasisColor: string | null): UiSdlThemeTemplate;

  readonly kendoTertiaryOnSubtleColor?: string | null;
  withKendoTertiaryOnSubtleColor(kendoTertiaryOnSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoOnTertiaryColor?: string | null;
  withKendoOnTertiaryColor(kendoOnTertiaryColor: string | null): UiSdlThemeTemplate;

  readonly kendoTertiaryOnSurfaceColor?: string | null;
  withKendoTertiaryOnSurfaceColor(kendoTertiaryOnSurfaceColor: string | null): UiSdlThemeTemplate;

  readonly kendoInfoSubtleColor?: string | null;
  withKendoInfoSubtleColor(kendoInfoSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoInfoSubtleHoverColor?: string | null;
  withKendoInfoSubtleHoverColor(kendoInfoSubtleHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoInfoSubtleActiveColor?: string | null;
  withKendoInfoSubtleActiveColor(kendoInfoSubtleActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoInfoColor?: string | null;
  withKendoInfoColor(kendoInfoColor: string | null): UiSdlThemeTemplate;

  readonly kendoInfoHoverColor?: string | null;
  withKendoInfoHoverColor(kendoInfoHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoInfoActiveColor?: string | null;
  withKendoInfoActiveColor(kendoInfoActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoInfoEmphasisColor?: string | null;
  withKendoInfoEmphasisColor(kendoInfoEmphasisColor: string | null): UiSdlThemeTemplate;

  readonly kendoInfoOnSubtleColor?: string | null;
  withKendoInfoOnSubtleColor(kendoInfoOnSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoOnInfoColor?: string | null;
  withKendoOnInfoColor(kendoOnInfoColor: string | null): UiSdlThemeTemplate;

  readonly kendoInfoOnSurfaceColor?: string | null;
  withKendoInfoOnSurfaceColor(kendoInfoOnSurfaceColor: string | null): UiSdlThemeTemplate;

  readonly kendoSuccessSubtleColor?: string | null;
  withKendoSuccessSubtleColor(kendoSuccessSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoSuccessSubtleHoverColor?: string | null;
  withKendoSuccessSubtleHoverColor(kendoSuccessSubtleHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoSuccessSubtleActiveColor?: string | null;
  withKendoSuccessSubtleActiveColor(kendoSuccessSubtleActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoSuccessColor?: string | null;
  withKendoSuccessColor(kendoSuccessColor: string | null): UiSdlThemeTemplate;

  readonly kendoSuccessHoverColor?: string | null;
  withKendoSuccessHoverColor(kendoSuccessHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoSuccessActiveColor?: string | null;
  withKendoSuccessActiveColor(kendoSuccessActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoSuccessEmphasisColor?: string | null;
  withKendoSuccessEmphasisColor(kendoSuccessEmphasisColor: string | null): UiSdlThemeTemplate;

  readonly kendoSuccessOnSubtleColor?: string | null;
  withKendoSuccessOnSubtleColor(kendoSuccessOnSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoOnSuccessColor?: string | null;
  withKendoOnSuccessColor(kendoOnSuccessColor: string | null): UiSdlThemeTemplate;

  readonly kendoSuccessOnSurfaceColor?: string | null;
  withKendoSuccessOnSurfaceColor(kendoSuccessOnSurfaceColor: string | null): UiSdlThemeTemplate;

  readonly kendoWarningSubtleColor?: string | null;
  withKendoWarningSubtleColor(kendoWarningSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoWarningSubtleHoverColor?: string | null;
  withKendoWarningSubtleHoverColor(kendoWarningSubtleHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoWarningSubtleActiveColor?: string | null;
  withKendoWarningSubtleActiveColor(kendoWarningSubtleActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoWarningColor?: string | null;
  withKendoWarningColor(kendoWarningColor: string | null): UiSdlThemeTemplate;

  readonly kendoWarningHoverColor?: string | null;
  withKendoWarningHoverColor(kendoWarningHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoWarningActiveColor?: string | null;
  withKendoWarningActiveColor(kendoWarningActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoWarningEmphasisColor?: string | null;
  withKendoWarningEmphasisColor(kendoWarningEmphasisColor: string | null): UiSdlThemeTemplate;

  readonly kendoWarningOnSubtleColor?: string | null;
  withKendoWarningOnSubtleColor(kendoWarningOnSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoOnWarningColor?: string | null;
  withKendoOnWarningColor(kendoOnWarningColor: string | null): UiSdlThemeTemplate;

  readonly kendoWarningOnSurfaceColor?: string | null;
  withKendoWarningOnSurfaceColor(kendoWarningOnSurfaceColor: string | null): UiSdlThemeTemplate;

  readonly kendoErrorSubtleColor?: string | null;
  withKendoErrorSubtleColor(kendoErrorSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoErrorSubtleHoverColor?: string | null;
  withKendoErrorSubtleHoverColor(kendoErrorSubtleHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoErrorSubtleActiveColor?: string | null;
  withKendoErrorSubtleActiveColor(kendoErrorSubtleActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoErrorColor?: string | null;
  withKendoErrorColor(kendoErrorColor: string | null): UiSdlThemeTemplate;

  readonly kendoErrorHoverColor?: string | null;
  withKendoErrorHoverColor(kendoErrorHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoErrorActiveColor?: string | null;
  withKendoErrorActiveColor(kendoErrorActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoErrorEmphasisColor?: string | null;
  withKendoErrorEmphasisColor(kendoErrorEmphasisColor: string | null): UiSdlThemeTemplate;

  readonly kendoErrorOnSubtleColor?: string | null;
  withKendoErrorOnSubtleColor(kendoErrorOnSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoOnErrorColor?: string | null;
  withKendoOnErrorColor(kendoOnErrorColor: string | null): UiSdlThemeTemplate;

  readonly kendoErrorOnSurfaceColor?: string | null;
  withKendoErrorOnSurfaceColor(kendoErrorOnSurfaceColor: string | null): UiSdlThemeTemplate;

  readonly kendoLightSubtleColor?: string | null;
  withKendoLightSubtleColor(kendoLightSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoLightSubtleHoverColor?: string | null;
  withKendoLightSubtleHoverColor(kendoLightSubtleHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoLightSubtleActiveColor?: string | null;
  withKendoLightSubtleActiveColor(kendoLightSubtleActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoLightColor?: string | null;
  withKendoLightColor(kendoLightColor: string | null): UiSdlThemeTemplate;

  readonly kendoLightHoverColor?: string | null;
  withKendoLightHoverColor(kendoLightHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoLightActiveColor?: string | null;
  withKendoLightActiveColor(kendoLightActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoLightEmphasisColor?: string | null;
  withKendoLightEmphasisColor(kendoLightEmphasisColor: string | null): UiSdlThemeTemplate;

  readonly kendoLightOnSubtleColor?: string | null;
  withKendoLightOnSubtleColor(kendoLightOnSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoOnLightColor?: string | null;
  withKendoOnLightColor(kendoOnLightColor: string | null): UiSdlThemeTemplate;

  readonly kendoLightOnSurfaceColor?: string | null;
  withKendoLightOnSurfaceColor(kendoLightOnSurfaceColor: string | null): UiSdlThemeTemplate;

  readonly kendoDarkSubtleColor?: string | null;
  withKendoDarkSubtleColor(kendoDarkSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoDarkSubtleHoverColor?: string | null;
  withKendoDarkSubtleHoverColor(kendoDarkSubtleHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoDarkSubtleActiveColor?: string | null;
  withKendoDarkSubtleActiveColor(kendoDarkSubtleActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoDarkColor?: string | null;
  withKendoDarkColor(kendoDarkColor: string | null): UiSdlThemeTemplate;

  readonly kendoDarkHoverColor?: string | null;
  withKendoDarkHoverColor(kendoDarkHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoDarkActiveColor?: string | null;
  withKendoDarkActiveColor(kendoDarkActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoDarkEmphasisColor?: string | null;
  withKendoDarkEmphasisColor(kendoDarkEmphasisColor: string | null): UiSdlThemeTemplate;

  readonly kendoDarkOnSubtleColor?: string | null;
  withKendoDarkOnSubtleColor(kendoDarkOnSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoOnDarkColor?: string | null;
  withKendoOnDarkColor(kendoOnDarkColor: string | null): UiSdlThemeTemplate;

  readonly kendoDarkOnSurfaceColor?: string | null;
  withKendoDarkOnSurfaceColor(kendoDarkOnSurfaceColor: string | null): UiSdlThemeTemplate;

  readonly kendoInverseSubtleColor?: string | null;
  withKendoInverseSubtleColor(kendoInverseSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoInverseSubtleHoverColor?: string | null;
  withKendoInverseSubtleHoverColor(kendoInverseSubtleHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoInverseSubtleActiveColor?: string | null;
  withKendoInverseSubtleActiveColor(kendoInverseSubtleActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoInverseColor?: string | null;
  withKendoInverseColor(kendoInverseColor: string | null): UiSdlThemeTemplate;

  readonly kendoInverseHoverColor?: string | null;
  withKendoInverseHoverColor(kendoInverseHoverColor: string | null): UiSdlThemeTemplate;

  readonly kendoInverseActiveColor?: string | null;
  withKendoInverseActiveColor(kendoInverseActiveColor: string | null): UiSdlThemeTemplate;

  readonly kendoInverseEmphasisColor?: string | null;
  withKendoInverseEmphasisColor(kendoInverseEmphasisColor: string | null): UiSdlThemeTemplate;

  readonly kendoInverseOnSubtleColor?: string | null;
  withKendoInverseOnSubtleColor(kendoInverseOnSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoOnInverseColor?: string | null;
  withKendoOnInverseColor(kendoOnInverseColor: string | null): UiSdlThemeTemplate;

  readonly kendoInverseOnSurfaceColor?: string | null;
  withKendoInverseOnSurfaceColor(kendoInverseOnSurfaceColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesAColor?: string | null;
  withKendoSeriesAColor(kendoSeriesAColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesABoldColor?: string | null;
  withKendoSeriesABoldColor(kendoSeriesABoldColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesABolderColor?: string | null;
  withKendoSeriesABolderColor(kendoSeriesABolderColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesASubtleColor?: string | null;
  withKendoSeriesASubtleColor(kendoSeriesASubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesASubtlerColor?: string | null;
  withKendoSeriesASubtlerColor(kendoSeriesASubtlerColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesBColor?: string | null;
  withKendoSeriesBColor(kendoSeriesBColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesBBoldColor?: string | null;
  withKendoSeriesBBoldColor(kendoSeriesBBoldColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesBBolderColor?: string | null;
  withKendoSeriesBBolderColor(kendoSeriesBBolderColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesBSubtleColor?: string | null;
  withKendoSeriesBSubtleColor(kendoSeriesBSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesBSubtlerColor?: string | null;
  withKendoSeriesBSubtlerColor(kendoSeriesBSubtlerColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesCColor?: string | null;
  withKendoSeriesCColor(kendoSeriesCColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesCBoldColor?: string | null;
  withKendoSeriesCBoldColor(kendoSeriesCBoldColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesCBolderColor?: string | null;
  withKendoSeriesCBolderColor(kendoSeriesCBolderColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesCSubtleColor?: string | null;
  withKendoSeriesCSubtleColor(kendoSeriesCSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesCSubtlerColor?: string | null;
  withKendoSeriesCSubtlerColor(kendoSeriesCSubtlerColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesDColor?: string | null;
  withKendoSeriesDColor(kendoSeriesDColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesDBoldColor?: string | null;
  withKendoSeriesDBoldColor(kendoSeriesDBoldColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesDBolderColor?: string | null;
  withKendoSeriesDBolderColor(kendoSeriesDBolderColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesDSubtleColor?: string | null;
  withKendoSeriesDSubtleColor(kendoSeriesDSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesDSubtlerColor?: string | null;
  withKendoSeriesDSubtlerColor(kendoSeriesDSubtlerColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesEColor?: string | null;
  withKendoSeriesEColor(kendoSeriesEColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesEBoldColor?: string | null;
  withKendoSeriesEBoldColor(kendoSeriesEBoldColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesEBolderColor?: string | null;
  withKendoSeriesEBolderColor(kendoSeriesEBolderColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesESubtleColor?: string | null;
  withKendoSeriesESubtleColor(kendoSeriesESubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesESubtlerColor?: string | null;
  withKendoSeriesESubtlerColor(kendoSeriesESubtlerColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesFColor?: string | null;
  withKendoSeriesFColor(kendoSeriesFColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesFBoldColor?: string | null;
  withKendoSeriesFBoldColor(kendoSeriesFBoldColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesFBolderColor?: string | null;
  withKendoSeriesFBolderColor(kendoSeriesFBolderColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesFSubtleColor?: string | null;
  withKendoSeriesFSubtleColor(kendoSeriesFSubtleColor: string | null): UiSdlThemeTemplate;

  readonly kendoSeriesFSubtlerColor?: string | null;
  withKendoSeriesFSubtlerColor(kendoSeriesFSubtlerColor: string | null): UiSdlThemeTemplate;

  readonly legendBackgroundColor: string;
  withLegendBackgroundColor(legendBackgroundColor: string): UiSdlThemeTemplate;

  readonly legendNameFontColor: string;
  withLegendNameFontColor(legendNameFontColor: string): UiSdlThemeTemplate;

  readonly logoBlueBackgroundColor: string;
  withLogoBlueBackgroundColor(logoBlueBackgroundColor: string): UiSdlThemeTemplate;

  readonly logoChocoBackgroundColor: string;
  withLogoChocoBackgroundColor(logoChocoBackgroundColor: string): UiSdlThemeTemplate;

  readonly logoColor: string;
  withLogoColor(logoColor: string): UiSdlThemeTemplate;

  readonly logoCyanBackgroundColor: string;
  withLogoCyanBackgroundColor(logoCyanBackgroundColor: string): UiSdlThemeTemplate;

  readonly logoForestBackgroundColor: string;
  withLogoForestBackgroundColor(logoForestBackgroundColor: string): UiSdlThemeTemplate;

  readonly logoIconUrl: string;
  withLogoIconUrl(logoIconUrl: string): UiSdlThemeTemplate;

  readonly emptyStateIconUrl: string;
  withEmptyStateIconUrl(emptyStateIconUrl: string): UiSdlThemeTemplate;

  readonly logoLimeBackgroundColor: string;
  withLogoLimeBackgroundColor(logoLimeBackgroundColor: string): UiSdlThemeTemplate;

  readonly logoOliveBackgroundColor: string;
  withLogoOliveBackgroundColor(logoOliveBackgroundColor: string): UiSdlThemeTemplate;

  readonly logoOrangeBackgroundColor: string;
  withLogoOrangeBackgroundColor(logoOrangeBackgroundColor: string): UiSdlThemeTemplate;

  readonly logoPlumBackgroundColor: string;
  withLogoPlumBackgroundColor(logoPlumBackgroundColor: string): UiSdlThemeTemplate;

  readonly logoPurpleBackgroundColor: string;
  withLogoPurpleBackgroundColor(logoPurpleBackgroundColor: string): UiSdlThemeTemplate;

  readonly logoSlateBackgroundColor: string;
  withLogoSlateBackgroundColor(logoSlateBackgroundColor: string): UiSdlThemeTemplate;

  readonly mapMarkerClusterColor: string;
  withMapMarkerClusterColor(mapMarkerClusterColor: string): UiSdlThemeTemplate;

  readonly mapTooltipAdditionalFieldsDescriptionFontColor: string;
  withMapTooltipAdditionalFieldsDescriptionFontColor(mapTooltipAdditionalFieldsDescriptionFontColor: string): UiSdlThemeTemplate;

  readonly mapTooltipAdditionalFieldsHeaderFontColor: string;
  withMapTooltipAdditionalFieldsHeaderFontColor(mapTooltipAdditionalFieldsHeaderFontColor: string): UiSdlThemeTemplate;

  readonly mapTooltipHeaderFontColor: string;
  withMapTooltipHeaderFontColor(mapTooltipHeaderFontColor: string): UiSdlThemeTemplate;

  readonly mapTooltipSubHeaderFontColor: string;
  withMapTooltipSubHeaderFontColor(mapTooltipSubHeaderFontColor: string): UiSdlThemeTemplate;

  readonly menuActiveColor: string;
  withMenuActiveColor(menuActiveColor: string): UiSdlThemeTemplate;

  readonly menuBackgroundActiveColor: string;
  withMenuBackgroundActiveColor(menuBackgroundActiveColor: string): UiSdlThemeTemplate;

  readonly menuBackgroundColor: string;
  withMenuBackgroundColor(menuBackgroundColor: string): UiSdlThemeTemplate;

  readonly menuDividerColor: string;
  withMenuDividerColor(menuDividerColor: string): UiSdlThemeTemplate;

  readonly menuHoverColor: string;
  withMenuHoverColor(menuHoverColor: string): UiSdlThemeTemplate;

  readonly menuItemActiveColor: string;
  withMenuItemActiveColor(menuItemActiveColor: string): UiSdlThemeTemplate;

  readonly menuItemBackgroundColor: string;
  withMenuItemBackgroundColor(menuItemBackgroundColor: string): UiSdlThemeTemplate;

  readonly menuItemBackgroundHoverColor: string;
  withMenuItemBackgroundHoverColor(menuItemBackgroundHoverColor: string): UiSdlThemeTemplate;

  readonly menuItemHoverColor: string;
  withMenuItemHoverColor(menuItemHoverColor: string): UiSdlThemeTemplate;

  readonly menuPrimaryColor: string;
  withMenuPrimaryColor(menuPrimaryColor: string): UiSdlThemeTemplate;

  readonly numberIconColor: string;
  withNumberIconColor(numberIconColor: string): UiSdlThemeTemplate;

  readonly numberIconTextColor: string;
  withNumberIconTextColor(numberIconTextColor: string): UiSdlThemeTemplate;

  readonly objectIconColor: string;
  withObjectIconColor(objectIconColor: string): UiSdlThemeTemplate;

  readonly objectIconTextColor: string;
  withObjectIconTextColor(objectIconTextColor: string): UiSdlThemeTemplate;

  readonly opacity00: string;
  withOpacity00(opacity00: string): UiSdlThemeTemplate;

  readonly opacity05: string;
  withOpacity05(opacity05: string): UiSdlThemeTemplate;

  readonly opacity10: string;
  withOpacity10(opacity10: string): UiSdlThemeTemplate;

  readonly opacity20: string;
  withOpacity20(opacity20: string): UiSdlThemeTemplate;

  readonly opacity30: string;
  withOpacity30(opacity30: string): UiSdlThemeTemplate;

  readonly opacity40: string;
  withOpacity40(opacity40: string): UiSdlThemeTemplate;

  readonly opacity50: string;
  withOpacity50(opacity50: string): UiSdlThemeTemplate;

  readonly opacity60: string;
  withOpacity60(opacity60: string): UiSdlThemeTemplate;

  readonly opacity70: string;
  withOpacity70(opacity70: string): UiSdlThemeTemplate;

  readonly opacity80: string;
  withOpacity80(opacity80: string): UiSdlThemeTemplate;

  readonly opacity90: string;
  withOpacity90(opacity90: string): UiSdlThemeTemplate;

  readonly opacity95: string;
  withOpacity95(opacity95: string): UiSdlThemeTemplate;

  readonly opacity100: string;
  withOpacity100(opacity100: string): UiSdlThemeTemplate;

  readonly opacityDisabled: string;
  withOpacityDisabled(opacityDisabled: string): UiSdlThemeTemplate;

  readonly opacityLoading: string;
  withOpacityLoading(opacityLoading: string): UiSdlThemeTemplate;

  readonly otherIconColor: string;
  withOtherIconColor(otherIconColor: string): UiSdlThemeTemplate;

  readonly otherIconTextColor: string;
  withOtherIconTextColor(otherIconTextColor: string): UiSdlThemeTemplate;

  readonly pageBackgroundColor: string;
  withPageBackgroundColor(pageBackgroundColor: string): UiSdlThemeTemplate;

  readonly pageTitleBoxShadowColor: string;
  withPageTitleBoxShadowColor(pageTitleBoxShadowColor: string): UiSdlThemeTemplate;

  readonly referenceIconColor: string;
  withReferenceIconColor(referenceIconColor: string): UiSdlThemeTemplate;

  readonly referenceIconTextColor: string;
  withReferenceIconTextColor(referenceIconTextColor: string): UiSdlThemeTemplate;

  readonly resetZoomIconPath: string;
  withResetZoomIconPath(resetZoomIconPath: string): UiSdlThemeTemplate;

  readonly resetZoomIconUrl: string;
  withResetZoomIconUrl(resetZoomIconUrl: string): UiSdlThemeTemplate;

  readonly resetZoomIconColor: string;
  withResetZoomIconColor(resetZoomIconColor: string): UiSdlThemeTemplate;

  readonly sankeyChartLabelBackgroundColor: string;
  withSankeyChartLabelBackgroundColor(sankeyChartLabelBackgroundColor: string): UiSdlThemeTemplate;

  readonly scrollbarThumbColor: string;
  withScrollbarThumbColor(scrollbarThumbColor: string): UiSdlThemeTemplate;

  readonly scrollbarTrackColor: string;
  withScrollbarTrackColor(scrollbarTrackColor: string): UiSdlThemeTemplate;

  readonly secondaryFontColor: string;
  withSecondaryFontColor(secondaryFontColor: string): UiSdlThemeTemplate;

  readonly secondaryVariantFontColor: string;
  withSecondaryVariantFontColor(secondaryVariantFontColor: string): UiSdlThemeTemplate;

  readonly selectFieldPillActiveBackgroundColor: string;
  withSelectFieldPillActiveBackgroundColor(selectFieldPillActiveBackgroundColor: string): UiSdlThemeTemplate;

  readonly selectFieldPillHoverBackgroundColor: string;
  withSelectFieldPillHoverBackgroundColor(selectFieldPillHoverBackgroundColor: string): UiSdlThemeTemplate;

  readonly selectFieldPillTextColor: string;
  withSelectFieldPillTextColor(selectFieldPillTextColor: string): UiSdlThemeTemplate;

  readonly selectionBackgroundColor: string;
  withSelectionBackgroundColor(selectionBackgroundColor: string): UiSdlThemeTemplate;

  readonly sidePanelSubtitleColor: string;
  withSidePanelSubtitleColor(sidePanelSubtitleColor: string): UiSdlThemeTemplate;

  readonly stringIconColor: string;
  withStringIconColor(stringIconColor: string): UiSdlThemeTemplate;

  readonly stringIconTextColor: string;
  withStringIconTextColor(stringIconTextColor: string): UiSdlThemeTemplate;

  readonly subMenuItemBackgroundActiveColor: string;
  withSubMenuItemBackgroundActiveColor(subMenuItemBackgroundActiveColor: string): UiSdlThemeTemplate;

  readonly successColor: string;
  withSuccessColor(successColor: string): UiSdlThemeTemplate;

  readonly timeGraphBackgroundColor: string;
  withTimeGraphBackgroundColor(timeGraphBackgroundColor: string): UiSdlThemeTemplate;

  readonly timeGraphDefaultEntityColor: string;
  withTimeGraphDefaultEntityColor(timeGraphDefaultEntityColor: string): UiSdlThemeTemplate;

  readonly timeGraphDefaultLabelColor: string;
  withTimeGraphDefaultLabelColor(timeGraphDefaultLabelColor: string): UiSdlThemeTemplate;

  readonly timeGraphHighlightColor: string;
  withTimeGraphHighlightColor(timeGraphHighlightColor: string): UiSdlThemeTemplate;

  readonly timeGraphScaleBackgroundColor: string;
  withTimeGraphScaleBackgroundColor(timeGraphScaleBackgroundColor: string): UiSdlThemeTemplate;

  readonly timeGraphScaleBorderColor: string;
  withTimeGraphScaleBorderColor(timeGraphScaleBorderColor: string): UiSdlThemeTemplate;

  readonly timeGraphScaleFontColor: string;
  withTimeGraphScaleFontColor(timeGraphScaleFontColor: string): UiSdlThemeTemplate;

  readonly timeGraphScaleFontSize: string;
  withTimeGraphScaleFontSize(timeGraphScaleFontSize: string): UiSdlThemeTemplate;

  readonly timeGraphTooltipBackgroundColor: string;
  withTimeGraphTooltipBackgroundColor(timeGraphTooltipBackgroundColor: string): UiSdlThemeTemplate;

  readonly timeGraphTooltipBodyColor: string;
  withTimeGraphTooltipBodyColor(timeGraphTooltipBodyColor: string): UiSdlThemeTemplate;

  readonly timeGraphTooltipSubtitleColor: string;
  withTimeGraphTooltipSubtitleColor(timeGraphTooltipSubtitleColor: string): UiSdlThemeTemplate;

  readonly timeGraphTooltipTitleColor: string;
  withTimeGraphTooltipTitleColor(timeGraphTooltipTitleColor: string): UiSdlThemeTemplate;

  readonly timeSeriesIconColor: string;
  withTimeSeriesIconColor(timeSeriesIconColor: string): UiSdlThemeTemplate;

  readonly timeSeriesIconTextColor: string;
  withTimeSeriesIconTextColor(timeSeriesIconTextColor: string): UiSdlThemeTemplate;

  readonly toggleSwitchBackgroundColor: string;
  withToggleSwitchBackgroundColor(toggleSwitchBackgroundColor: string): UiSdlThemeTemplate;

  readonly toggleSwitchBorderColor: string;
  withToggleSwitchBorderColor(toggleSwitchBorderColor: string): UiSdlThemeTemplate;

  readonly toggleSwitchCheckedBorderColor: string;
  withToggleSwitchCheckedBorderColor(toggleSwitchCheckedBorderColor: string): UiSdlThemeTemplate;

  readonly toggleSwitchCheckedColor: string;
  withToggleSwitchCheckedColor(toggleSwitchCheckedColor: string): UiSdlThemeTemplate;

  readonly toggleSwitchCheckedDisabledBackgroundColor: string;
  withToggleSwitchCheckedDisabledBackgroundColor(toggleSwitchCheckedDisabledBackgroundColor: string): UiSdlThemeTemplate;

  readonly toggleSwitchCheckedDisabledBorderColor: string;
  withToggleSwitchCheckedDisabledBorderColor(toggleSwitchCheckedDisabledBorderColor: string): UiSdlThemeTemplate;

  readonly toggleSwitchCheckedDisabledColor: string;
  withToggleSwitchCheckedDisabledColor(toggleSwitchCheckedDisabledColor: string): UiSdlThemeTemplate;

  readonly toggleSwitchColor: string;
  withToggleSwitchColor(toggleSwitchColor: string): UiSdlThemeTemplate;

  readonly toggleSwitchDisabledBackgroundColor: string;
  withToggleSwitchDisabledBackgroundColor(toggleSwitchDisabledBackgroundColor: string): UiSdlThemeTemplate;

  readonly toggleSwitchDisabledBorderColor: string;
  withToggleSwitchDisabledBorderColor(toggleSwitchDisabledBorderColor: string): UiSdlThemeTemplate;

  readonly toggleSwitchDisabledColor: string;
  withToggleSwitchDisabledColor(toggleSwitchDisabledColor: string): UiSdlThemeTemplate;

  readonly tooltipBackgroundColor: string;
  withTooltipBackgroundColor(tooltipBackgroundColor: string): UiSdlThemeTemplate;

  readonly warningColor: string;
  withWarningColor(warningColor: string): UiSdlThemeTemplate;

  readonly zebraStripeBackgroundColor: string;
  withZebraStripeBackgroundColor(zebraStripeBackgroundColor: string): UiSdlThemeTemplate;
}

