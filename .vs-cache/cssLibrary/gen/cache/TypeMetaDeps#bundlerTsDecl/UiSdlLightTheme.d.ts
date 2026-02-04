export interface UiSdlLightTheme {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlLightTheme;

  readonly id: string;
  withId(id: string): UiSdlLightTheme;

  readonly isC3?: boolean;
  withIsC3(isC3: boolean): UiSdlLightTheme;

  readonly themeCategory: string;
  withThemeCategory(themeCategory: string): UiSdlLightTheme;

  readonly accentColor: string;
  withAccentColor(accentColor: string): UiSdlLightTheme;

  readonly accentFontColor: string;
  withAccentFontColor(accentFontColor: string): UiSdlLightTheme;

  readonly accentVariantColor: string;
  withAccentVariantColor(accentVariantColor: string): UiSdlLightTheme;

  readonly avatarBadgeBlueBackgroundColor: string;
  withAvatarBadgeBlueBackgroundColor(avatarBadgeBlueBackgroundColor: string): UiSdlLightTheme;

  readonly avatarBadgeBlueColor: string;
  withAvatarBadgeBlueColor(avatarBadgeBlueColor: string): UiSdlLightTheme;

  readonly avatarBadgeChocoBackgroundColor: string;
  withAvatarBadgeChocoBackgroundColor(avatarBadgeChocoBackgroundColor: string): UiSdlLightTheme;

  readonly avatarBadgeChocoColor: string;
  withAvatarBadgeChocoColor(avatarBadgeChocoColor: string): UiSdlLightTheme;

  readonly avatarBadgeCyanBackgroundColor: string;
  withAvatarBadgeCyanBackgroundColor(avatarBadgeCyanBackgroundColor: string): UiSdlLightTheme;

  readonly avatarBadgeCyanColor: string;
  withAvatarBadgeCyanColor(avatarBadgeCyanColor: string): UiSdlLightTheme;

  readonly avatarBadgeForestBackgroundColor: string;
  withAvatarBadgeForestBackgroundColor(avatarBadgeForestBackgroundColor: string): UiSdlLightTheme;

  readonly avatarBadgeForestColor: string;
  withAvatarBadgeForestColor(avatarBadgeForestColor: string): UiSdlLightTheme;

  readonly avatarBadgeGreenBackgroundColor: string;
  withAvatarBadgeGreenBackgroundColor(avatarBadgeGreenBackgroundColor: string): UiSdlLightTheme;

  readonly avatarBadgeGreenColor: string;
  withAvatarBadgeGreenColor(avatarBadgeGreenColor: string): UiSdlLightTheme;

  readonly avatarBadgeLimeBackgroundColor: string;
  withAvatarBadgeLimeBackgroundColor(avatarBadgeLimeBackgroundColor: string): UiSdlLightTheme;

  readonly avatarBadgeLimeColor: string;
  withAvatarBadgeLimeColor(avatarBadgeLimeColor: string): UiSdlLightTheme;

  readonly avatarBadgeOliveBackgroundColor: string;
  withAvatarBadgeOliveBackgroundColor(avatarBadgeOliveBackgroundColor: string): UiSdlLightTheme;

  readonly avatarBadgeOliveColor: string;
  withAvatarBadgeOliveColor(avatarBadgeOliveColor: string): UiSdlLightTheme;

  readonly avatarBadgeOrangeBackgroundColor: string;
  withAvatarBadgeOrangeBackgroundColor(avatarBadgeOrangeBackgroundColor: string): UiSdlLightTheme;

  readonly avatarBadgeOrangeColor: string;
  withAvatarBadgeOrangeColor(avatarBadgeOrangeColor: string): UiSdlLightTheme;

  readonly avatarBadgePlumBackgroundColor: string;
  withAvatarBadgePlumBackgroundColor(avatarBadgePlumBackgroundColor: string): UiSdlLightTheme;

  readonly avatarBadgePlumColor: string;
  withAvatarBadgePlumColor(avatarBadgePlumColor: string): UiSdlLightTheme;

  readonly avatarBadgePurpleBackgroundColor: string;
  withAvatarBadgePurpleBackgroundColor(avatarBadgePurpleBackgroundColor: string): UiSdlLightTheme;

  readonly avatarBadgePurpleColor: string;
  withAvatarBadgePurpleColor(avatarBadgePurpleColor: string): UiSdlLightTheme;

  readonly avatarBadgeRedBackgroundColor: string;
  withAvatarBadgeRedBackgroundColor(avatarBadgeRedBackgroundColor: string): UiSdlLightTheme;

  readonly avatarBadgeRedColor: string;
  withAvatarBadgeRedColor(avatarBadgeRedColor: string): UiSdlLightTheme;

  readonly avatarBadgeSlateBackgroundColor: string;
  withAvatarBadgeSlateBackgroundColor(avatarBadgeSlateBackgroundColor: string): UiSdlLightTheme;

  readonly avatarBadgeSlateColor: string;
  withAvatarBadgeSlateColor(avatarBadgeSlateColor: string): UiSdlLightTheme;

  readonly avatarBadgeYellowBackgroundColor: string;
  withAvatarBadgeYellowBackgroundColor(avatarBadgeYellowBackgroundColor: string): UiSdlLightTheme;

  readonly avatarBadgeYellowColor: string;
  withAvatarBadgeYellowColor(avatarBadgeYellowColor: string): UiSdlLightTheme;

  readonly booleanIconColor: string;
  withBooleanIconColor(booleanIconColor: string): UiSdlLightTheme;

  readonly booleanIconTextColor: string;
  withBooleanIconTextColor(booleanIconTextColor: string): UiSdlLightTheme;

  readonly borderColor: string;
  withBorderColor(borderColor: string): UiSdlLightTheme;

  readonly boxShadow01: string;
  withBoxShadow01(boxShadow01: string): UiSdlLightTheme;

  readonly boxShadow02: string;
  withBoxShadow02(boxShadow02: string): UiSdlLightTheme;

  readonly boxShadow03: string;
  withBoxShadow03(boxShadow03: string): UiSdlLightTheme;

  readonly boxShadow04: string;
  withBoxShadow04(boxShadow04: string): UiSdlLightTheme;

  readonly boxShadow05: string;
  withBoxShadow05(boxShadow05: string): UiSdlLightTheme;

  readonly boxShadowCardParent: string;
  withBoxShadowCardParent(boxShadowCardParent: string): UiSdlLightTheme;

  readonly boxShadowMenu: string;
  withBoxShadowMenu(boxShadowMenu: string): UiSdlLightTheme;

  readonly boxZoomIconPath: string;
  withBoxZoomIconPath(boxZoomIconPath: string): UiSdlLightTheme;

  readonly boxZoomIconUrl: string;
  withBoxZoomIconUrl(boxZoomIconUrl: string): UiSdlLightTheme;

  readonly boxZoomIconColor: string;
  withBoxZoomIconColor(boxZoomIconColor: string): UiSdlLightTheme;

  readonly brightnessActionHover: string;
  withBrightnessActionHover(brightnessActionHover: string): UiSdlLightTheme;

  readonly brightnessActionHoverInverse: string;
  withBrightnessActionHoverInverse(brightnessActionHoverInverse: string): UiSdlLightTheme;

  readonly brightnessActionPressed: string;
  withBrightnessActionPressed(brightnessActionPressed: string): UiSdlLightTheme;

  readonly brightnessActionPressedInverse: string;
  withBrightnessActionPressedInverse(brightnessActionPressedInverse: string): UiSdlLightTheme;

  readonly buttonControlBorderColor: string;
  withButtonControlBorderColor(buttonControlBorderColor: string): UiSdlLightTheme;

  readonly buttonControlFontColor: string;
  withButtonControlFontColor(buttonControlFontColor: string): UiSdlLightTheme;

  readonly buttonControlHoverBackgroundColor: string;
  withButtonControlHoverBackgroundColor(buttonControlHoverBackgroundColor: string): UiSdlLightTheme;

  readonly buttonControlSelectedBackgroundColor: string;
  withButtonControlSelectedBackgroundColor(buttonControlSelectedBackgroundColor: string): UiSdlLightTheme;

  readonly buttonControlSelectedDisabledBackgroundColor: string;
  withButtonControlSelectedDisabledBackgroundColor(buttonControlSelectedDisabledBackgroundColor: string): UiSdlLightTheme;

  readonly buttonControlSelectedFontColor: string;
  withButtonControlSelectedFontColor(buttonControlSelectedFontColor: string): UiSdlLightTheme;

  readonly buttonControlSelectedHoverBackgroundColor: string;
  withButtonControlSelectedHoverBackgroundColor(buttonControlSelectedHoverBackgroundColor: string): UiSdlLightTheme;

  readonly buttonDangerPrimaryActiveBackgroundColor: string;
  withButtonDangerPrimaryActiveBackgroundColor(buttonDangerPrimaryActiveBackgroundColor: string): UiSdlLightTheme;

  readonly buttonDangerPrimaryHoverBackgroundColor: string;
  withButtonDangerPrimaryHoverBackgroundColor(buttonDangerPrimaryHoverBackgroundColor: string): UiSdlLightTheme;

  readonly buttonDangerSecondaryActiveBackgroundColor: string;
  withButtonDangerSecondaryActiveBackgroundColor(buttonDangerSecondaryActiveBackgroundColor: string): UiSdlLightTheme;

  readonly buttonDangerSecondaryHoverBackgroundColor: string;
  withButtonDangerSecondaryHoverBackgroundColor(buttonDangerSecondaryHoverBackgroundColor: string): UiSdlLightTheme;

  readonly buttonDangerTertiaryActiveBackgroundColor: string;
  withButtonDangerTertiaryActiveBackgroundColor(buttonDangerTertiaryActiveBackgroundColor: string): UiSdlLightTheme;

  readonly buttonDangerTertiaryHoverBackgroundColor: string;
  withButtonDangerTertiaryHoverBackgroundColor(buttonDangerTertiaryHoverBackgroundColor: string): UiSdlLightTheme;

  readonly buttonIconActiveBackgroundColor: string;
  withButtonIconActiveBackgroundColor(buttonIconActiveBackgroundColor: string): UiSdlLightTheme;

  readonly buttonIconBackgroundColor: string;
  withButtonIconBackgroundColor(buttonIconBackgroundColor: string): UiSdlLightTheme;

  readonly buttonIconHoverBackgroundColor: string;
  withButtonIconHoverBackgroundColor(buttonIconHoverBackgroundColor: string): UiSdlLightTheme;

  readonly buttonIconSelectedActiveBackgroundColor: string;
  withButtonIconSelectedActiveBackgroundColor(buttonIconSelectedActiveBackgroundColor: string): UiSdlLightTheme;

  readonly buttonIconSelectedBackgroundColor: string;
  withButtonIconSelectedBackgroundColor(buttonIconSelectedBackgroundColor: string): UiSdlLightTheme;

  readonly buttonIconSelectedForegroundColor: string;
  withButtonIconSelectedForegroundColor(buttonIconSelectedForegroundColor: string): UiSdlLightTheme;

  readonly buttonIconSelectedHoverBackgroundColor: string;
  withButtonIconSelectedHoverBackgroundColor(buttonIconSelectedHoverBackgroundColor: string): UiSdlLightTheme;

  readonly buttonPrimaryActiveBackgroundColor: string;
  withButtonPrimaryActiveBackgroundColor(buttonPrimaryActiveBackgroundColor: string): UiSdlLightTheme;

  readonly buttonPrimaryHoverBackgroundColor: string;
  withButtonPrimaryHoverBackgroundColor(buttonPrimaryHoverBackgroundColor: string): UiSdlLightTheme;

  readonly buttonSecondaryActiveBackgroundColor: string;
  withButtonSecondaryActiveBackgroundColor(buttonSecondaryActiveBackgroundColor: string): UiSdlLightTheme;

  readonly buttonSecondaryHoverBackgroundColor: string;
  withButtonSecondaryHoverBackgroundColor(buttonSecondaryHoverBackgroundColor: string): UiSdlLightTheme;

  readonly buttonTertiaryActiveBackgroundColor: string;
  withButtonTertiaryActiveBackgroundColor(buttonTertiaryActiveBackgroundColor: string): UiSdlLightTheme;

  readonly buttonTertiaryHoverBackgroundColor: string;
  withButtonTertiaryHoverBackgroundColor(buttonTertiaryHoverBackgroundColor: string): UiSdlLightTheme;

  readonly canvasBackgroundDotColor: string;
  withCanvasBackgroundDotColor(canvasBackgroundDotColor: string): UiSdlLightTheme;

  readonly canvasCyanNodeColor: string;
  withCanvasCyanNodeColor(canvasCyanNodeColor: string): UiSdlLightTheme;

  readonly canvasForestNodeColor: string;
  withCanvasForestNodeColor(canvasForestNodeColor: string): UiSdlLightTheme;

  readonly canvasNodeBorderColor: string;
  withCanvasNodeBorderColor(canvasNodeBorderColor: string): UiSdlLightTheme;

  readonly canvasNodeErrorBackgroundColor: string;
  withCanvasNodeErrorBackgroundColor(canvasNodeErrorBackgroundColor: string): UiSdlLightTheme;

  readonly canvasNodeWarningBackgroundColor: string;
  withCanvasNodeWarningBackgroundColor(canvasNodeWarningBackgroundColor: string): UiSdlLightTheme;

  readonly canvasOrangeIconColor: string;
  withCanvasOrangeIconColor(canvasOrangeIconColor: string): UiSdlLightTheme;

  readonly canvasOrangeNodeColor: string;
  withCanvasOrangeNodeColor(canvasOrangeNodeColor: string): UiSdlLightTheme;

  readonly canvasPendingNodeBackgroundColor: string;
  withCanvasPendingNodeBackgroundColor(canvasPendingNodeBackgroundColor: string): UiSdlLightTheme;

  readonly canvasPendingNodeForegroundColor: string;
  withCanvasPendingNodeForegroundColor(canvasPendingNodeForegroundColor: string): UiSdlLightTheme;

  readonly canvasPlumNodeColor: string;
  withCanvasPlumNodeColor(canvasPlumNodeColor: string): UiSdlLightTheme;

  readonly canvasPurpleIconColor: string;
  withCanvasPurpleIconColor(canvasPurpleIconColor: string): UiSdlLightTheme;

  readonly canvasPurpleNodeColor: string;
  withCanvasPurpleNodeColor(canvasPurpleNodeColor: string): UiSdlLightTheme;

  readonly canvasSlateIconColor: string;
  withCanvasSlateIconColor(canvasSlateIconColor: string): UiSdlLightTheme;

  readonly canvasSlateNodeColor: string;
  withCanvasSlateNodeColor(canvasSlateNodeColor: string): UiSdlLightTheme;

  readonly cardElevation00BackgroundColor: string;
  withCardElevation00BackgroundColor(cardElevation00BackgroundColor: string): UiSdlLightTheme;

  readonly cardElevation01BackgroundColor: string;
  withCardElevation01BackgroundColor(cardElevation01BackgroundColor: string): UiSdlLightTheme;

  readonly cardElevation02BackgroundColor: string;
  withCardElevation02BackgroundColor(cardElevation02BackgroundColor: string): UiSdlLightTheme;

  readonly cardElevation03BackgroundColor: string;
  withCardElevation03BackgroundColor(cardElevation03BackgroundColor: string): UiSdlLightTheme;

  readonly cardElevation04BackgroundColor: string;
  withCardElevation04BackgroundColor(cardElevation04BackgroundColor: string): UiSdlLightTheme;

  readonly cardElevation06BackgroundColor: string;
  withCardElevation06BackgroundColor(cardElevation06BackgroundColor: string): UiSdlLightTheme;

  readonly cardElevation08BackgroundColor: string;
  withCardElevation08BackgroundColor(cardElevation08BackgroundColor: string): UiSdlLightTheme;

  readonly cardElevation12BackgroundColor: string;
  withCardElevation12BackgroundColor(cardElevation12BackgroundColor: string): UiSdlLightTheme;

  readonly cardElevation16BackgroundColor: string;
  withCardElevation16BackgroundColor(cardElevation16BackgroundColor: string): UiSdlLightTheme;

  readonly cardElevation24BackgroundColor: string;
  withCardElevation24BackgroundColor(cardElevation24BackgroundColor: string): UiSdlLightTheme;

  readonly chartSeriesTooltipNameFontColor: string;
  withChartSeriesTooltipNameFontColor(chartSeriesTooltipNameFontColor: string): UiSdlLightTheme;

  readonly chartSeriesTooltipTitleFontColor: string;
  withChartSeriesTooltipTitleFontColor(chartSeriesTooltipTitleFontColor: string): UiSdlLightTheme;

  readonly chartSeriesTooltipValueFontColor: string;
  withChartSeriesTooltipValueFontColor(chartSeriesTooltipValueFontColor: string): UiSdlLightTheme;

  readonly checkboxBackgroundColor: string;
  withCheckboxBackgroundColor(checkboxBackgroundColor: string): UiSdlLightTheme;

  readonly checkboxColor: string;
  withCheckboxColor(checkboxColor: string): UiSdlLightTheme;

  readonly checkboxHoverBackgroundColor: string;
  withCheckboxHoverBackgroundColor(checkboxHoverBackgroundColor: string): UiSdlLightTheme;

  readonly checkboxHoverColor: string;
  withCheckboxHoverColor(checkboxHoverColor: string): UiSdlLightTheme;

  readonly checkboxSelectedDisabledColor: string;
  withCheckboxSelectedDisabledColor(checkboxSelectedDisabledColor: string): UiSdlLightTheme;

  readonly checkboxSelectedHoverColor: string;
  withCheckboxSelectedHoverColor(checkboxSelectedHoverColor: string): UiSdlLightTheme;

  readonly colorBgAccent: string;
  withColorBgAccent(colorBgAccent: string): UiSdlLightTheme;

  readonly colorBgAccentWeak: string;
  withColorBgAccentWeak(colorBgAccentWeak: string): UiSdlLightTheme;

  readonly colorBgActionHover: string;
  withColorBgActionHover(colorBgActionHover: string): UiSdlLightTheme;

  readonly colorBgActionHoverInverse: string;
  withColorBgActionHoverInverse(colorBgActionHoverInverse: string): UiSdlLightTheme;

  readonly colorBgActionPressed: string;
  withColorBgActionPressed(colorBgActionPressed: string): UiSdlLightTheme;

  readonly colorBgActionPressedInverse: string;
  withColorBgActionPressedInverse(colorBgActionPressedInverse: string): UiSdlLightTheme;

  readonly colorBgAvatarDefault: string;
  withColorBgAvatarDefault(colorBgAvatarDefault: string): UiSdlLightTheme;

  readonly colorBgBtnAccentFill: string;
  withColorBgBtnAccentFill(colorBgBtnAccentFill: string): UiSdlLightTheme;

  readonly colorBgBtnDangerFill: string;
  withColorBgBtnDangerFill(colorBgBtnDangerFill: string): UiSdlLightTheme;

  readonly colorBgBtnPrimaryFill: string;
  withColorBgBtnPrimaryFill(colorBgBtnPrimaryFill: string): UiSdlLightTheme;

  readonly colorBgCardChildPrimary: string;
  withColorBgCardChildPrimary(colorBgCardChildPrimary: string): UiSdlLightTheme;

  readonly colorBgCardChildSecondary: string;
  withColorBgCardChildSecondary(colorBgCardChildSecondary: string): UiSdlLightTheme;

  readonly colorBgCardParent: string;
  withColorBgCardParent(colorBgCardParent: string): UiSdlLightTheme;

  readonly colorBgContainer01: string;
  withColorBgContainer01(colorBgContainer01: string): UiSdlLightTheme;

  readonly colorBgContainer02: string;
  withColorBgContainer02(colorBgContainer02: string): UiSdlLightTheme;

  readonly colorBgDanger: string;
  withColorBgDanger(colorBgDanger: string): UiSdlLightTheme;

  readonly colorBgDangerWeak: string;
  withColorBgDangerWeak(colorBgDangerWeak: string): UiSdlLightTheme;

  readonly colorBgDataGridHover: string;
  withColorBgDataGridHover(colorBgDataGridHover: string): UiSdlLightTheme;

  readonly colorBgDataGridZebraStripe: string;
  withColorBgDataGridZebraStripe(colorBgDataGridZebraStripe: string): UiSdlLightTheme;

  readonly colorBgDataZoomSliderFilter: string;
  withColorBgDataZoomSliderFilter(colorBgDataZoomSliderFilter: string): UiSdlLightTheme;

  readonly colorBgDataZoomSparkline: string;
  withColorBgDataZoomSparkline(colorBgDataZoomSparkline: string): UiSdlLightTheme;

  readonly colorBgDecoOrangeStrong: string;
  withColorBgDecoOrangeStrong(colorBgDecoOrangeStrong: string): UiSdlLightTheme;

  readonly colorBgDecoOrange: string;
  withColorBgDecoOrange(colorBgDecoOrange: string): UiSdlLightTheme;

  readonly colorBgDecoOrangeWeak: string;
  withColorBgDecoOrangeWeak(colorBgDecoOrangeWeak: string): UiSdlLightTheme;

  readonly colorBgDecoOliveStrong: string;
  withColorBgDecoOliveStrong(colorBgDecoOliveStrong: string): UiSdlLightTheme;

  readonly colorBgDecoOlive: string;
  withColorBgDecoOlive(colorBgDecoOlive: string): UiSdlLightTheme;

  readonly colorBgDecoOliveWeak: string;
  withColorBgDecoOliveWeak(colorBgDecoOliveWeak: string): UiSdlLightTheme;

  readonly colorBgDecoLimeStrong: string;
  withColorBgDecoLimeStrong(colorBgDecoLimeStrong: string): UiSdlLightTheme;

  readonly colorBgDecoLime: string;
  withColorBgDecoLime(colorBgDecoLime: string): UiSdlLightTheme;

  readonly colorBgDecoLimeWeak: string;
  withColorBgDecoLimeWeak(colorBgDecoLimeWeak: string): UiSdlLightTheme;

  readonly colorBgDecoForestStrong: string;
  withColorBgDecoForestStrong(colorBgDecoForestStrong: string): UiSdlLightTheme;

  readonly colorBgDecoForest: string;
  withColorBgDecoForest(colorBgDecoForest: string): UiSdlLightTheme;

  readonly colorBgDecoForestWeak: string;
  withColorBgDecoForestWeak(colorBgDecoForestWeak: string): UiSdlLightTheme;

  readonly colorBgDecoCyanStrong: string;
  withColorBgDecoCyanStrong(colorBgDecoCyanStrong: string): UiSdlLightTheme;

  readonly colorBgDecoCyan: string;
  withColorBgDecoCyan(colorBgDecoCyan: string): UiSdlLightTheme;

  readonly colorBgDecoCyanWeak: string;
  withColorBgDecoCyanWeak(colorBgDecoCyanWeak: string): UiSdlLightTheme;

  readonly colorBgDecoSlateStrong: string;
  withColorBgDecoSlateStrong(colorBgDecoSlateStrong: string): UiSdlLightTheme;

  readonly colorBgDecoSlate: string;
  withColorBgDecoSlate(colorBgDecoSlate: string): UiSdlLightTheme;

  readonly colorBgDecoSlateWeak: string;
  withColorBgDecoSlateWeak(colorBgDecoSlateWeak: string): UiSdlLightTheme;

  readonly colorBgDecoPurpleStrong: string;
  withColorBgDecoPurpleStrong(colorBgDecoPurpleStrong: string): UiSdlLightTheme;

  readonly colorBgDecoPurple: string;
  withColorBgDecoPurple(colorBgDecoPurple: string): UiSdlLightTheme;

  readonly colorBgDecoPurpleWeak: string;
  withColorBgDecoPurpleWeak(colorBgDecoPurpleWeak: string): UiSdlLightTheme;

  readonly colorBgDecoPlumStrong: string;
  withColorBgDecoPlumStrong(colorBgDecoPlumStrong: string): UiSdlLightTheme;

  readonly colorBgDecoPlum: string;
  withColorBgDecoPlum(colorBgDecoPlum: string): UiSdlLightTheme;

  readonly colorBgDecoPlumWeak: string;
  withColorBgDecoPlumWeak(colorBgDecoPlumWeak: string): UiSdlLightTheme;

  readonly colorBgDecoChocoStrong: string;
  withColorBgDecoChocoStrong(colorBgDecoChocoStrong: string): UiSdlLightTheme;

  readonly colorBgDecoChoco: string;
  withColorBgDecoChoco(colorBgDecoChoco: string): UiSdlLightTheme;

  readonly colorBgDecoChocoWeak: string;
  withColorBgDecoChocoWeak(colorBgDecoChocoWeak: string): UiSdlLightTheme;

  readonly colorFgInputPlaceholder: string;
  withColorFgInputPlaceholder(colorFgInputPlaceholder: string): UiSdlLightTheme;

  readonly colorBorderDataZoomSparkline: string;
  withColorBorderDataZoomSparkline(colorBorderDataZoomSparkline: string): UiSdlLightTheme;

  readonly colorBgInlineNotificationError: string;
  withColorBgInlineNotificationError(colorBgInlineNotificationError: string): UiSdlLightTheme;

  readonly colorBgInlineNotificationSuccess: string;
  withColorBgInlineNotificationSuccess(colorBgInlineNotificationSuccess: string): UiSdlLightTheme;

  readonly colorBgInlineNotificationWarning: string;
  withColorBgInlineNotificationWarning(colorBgInlineNotificationWarning: string): UiSdlLightTheme;

  readonly colorBgInputReadonly: string;
  withColorBgInputReadonly(colorBgInputReadonly: string): UiSdlLightTheme;

  readonly colorBgMenu: string;
  withColorBgMenu(colorBgMenu: string): UiSdlLightTheme;

  readonly colorBgMenuHoverUnselected: string;
  withColorBgMenuHoverUnselected(colorBgMenuHoverUnselected: string): UiSdlLightTheme;

  readonly colorBgMenuItemSelected: string;
  withColorBgMenuItemSelected(colorBgMenuItemSelected: string): UiSdlLightTheme;

  readonly colorBgPage: string;
  withColorBgPage(colorBgPage: string): UiSdlLightTheme;

  readonly colorBgPrimary: string;
  withColorBgPrimary(colorBgPrimary: string): UiSdlLightTheme;

  readonly colorBgPrimaryInverse: string;
  withColorBgPrimaryInverse(colorBgPrimaryInverse: string): UiSdlLightTheme;

  readonly colorBgContentFrame: string;
  withColorBgContentFrame(colorBgContentFrame: string): UiSdlLightTheme;

  readonly colorBgCoreAccentStrong: string;
  withColorBgCoreAccentStrong(colorBgCoreAccentStrong: string): UiSdlLightTheme;

  readonly colorBgCoreAccent: string;
  withColorBgCoreAccent(colorBgCoreAccent: string): UiSdlLightTheme;

  readonly colorBgCoreAccentWeak: string;
  withColorBgCoreAccentWeak(colorBgCoreAccentWeak: string): UiSdlLightTheme;

  readonly colorBgCoreDangerStrong: string;
  withColorBgCoreDangerStrong(colorBgCoreDangerStrong: string): UiSdlLightTheme;

  readonly colorBgCoreDanger: string;
  withColorBgCoreDanger(colorBgCoreDanger: string): UiSdlLightTheme;

  readonly colorBgCoreDangerWeak: string;
  withColorBgCoreDangerWeak(colorBgCoreDangerWeak: string): UiSdlLightTheme;

  readonly colorBgCoreSuccessStrong: string;
  withColorBgCoreSuccessStrong(colorBgCoreSuccessStrong: string): UiSdlLightTheme;

  readonly colorBgCoreSuccess: string;
  withColorBgCoreSuccess(colorBgCoreSuccess: string): UiSdlLightTheme;

  readonly colorBgCoreSuccessWeak: string;
  withColorBgCoreSuccessWeak(colorBgCoreSuccessWeak: string): UiSdlLightTheme;

  readonly colorBgCoreWarningStrong: string;
  withColorBgCoreWarningStrong(colorBgCoreWarningStrong: string): UiSdlLightTheme;

  readonly colorBgCoreWarning: string;
  withColorBgCoreWarning(colorBgCoreWarning: string): UiSdlLightTheme;

  readonly colorBgCoreWarningWeak: string;
  withColorBgCoreWarningWeak(colorBgCoreWarningWeak: string): UiSdlLightTheme;

  readonly colorBgSuccessWeak: string;
  withColorBgSuccessWeak(colorBgSuccessWeak: string): UiSdlLightTheme;

  readonly colorBgSideNavPanel: string;
  withColorBgSideNavPanel(colorBgSideNavPanel: string): UiSdlLightTheme;

  readonly colorBgSecondary: string;
  withColorBgSecondary(colorBgSecondary: string): UiSdlLightTheme;

  readonly colorBgSecondaryInverse: string;
  withColorBgSecondaryInverse(colorBgSecondaryInverse: string): UiSdlLightTheme;

  readonly colorBgSegBtnSelected: string;
  withColorBgSegBtnSelected(colorBgSegBtnSelected: string): UiSdlLightTheme;

  readonly colorBgSelected: string;
  withColorBgSelected(colorBgSelected: string): UiSdlLightTheme;

  readonly colorBgSuccess: string;
  withColorBgSuccess(colorBgSuccess: string): UiSdlLightTheme;

  readonly colorBgTertiary: string;
  withColorBgTertiary(colorBgTertiary: string): UiSdlLightTheme;

  readonly colorBgTertiaryInverse: string;
  withColorBgTertiaryInverse(colorBgTertiaryInverse: string): UiSdlLightTheme;

  readonly colorBgTickMark: string;
  withColorBgTickMark(colorBgTickMark: string): UiSdlLightTheme;

  readonly colorBgTrack: string;
  withColorBgTrack(colorBgTrack: string): UiSdlLightTheme;

  readonly colorBgWarning: string;
  withColorBgWarning(colorBgWarning: string): UiSdlLightTheme;

  readonly colorBgWarningWeak: string;
  withColorBgWarningWeak(colorBgWarningWeak: string): UiSdlLightTheme;

  readonly colorBorder: string;
  withColorBorder(colorBorder: string): UiSdlLightTheme;

  readonly colorBorderAccent: string;
  withColorBorderAccent(colorBorderAccent: string): UiSdlLightTheme;

  readonly colorBorderBtnAccentOutline: string;
  withColorBorderBtnAccentOutline(colorBorderBtnAccentOutline: string): UiSdlLightTheme;

  readonly colorBorderBtnDangerOutline: string;
  withColorBorderBtnDangerOutline(colorBorderBtnDangerOutline: string): UiSdlLightTheme;

  readonly colorBorderBtnPrimaryOutline: string;
  withColorBorderBtnPrimaryOutline(colorBorderBtnPrimaryOutline: string): UiSdlLightTheme;

  readonly colorBorderCardChildPrimary: string;
  withColorBorderCardChildPrimary(colorBorderCardChildPrimary: string): UiSdlLightTheme;

  readonly colorBorderCardChildSecondary: string;
  withColorBorderCardChildSecondary(colorBorderCardChildSecondary: string): UiSdlLightTheme;

  readonly colorBorderCardParent: string;
  withColorBorderCardParent(colorBorderCardParent: string): UiSdlLightTheme;

  readonly colorBorderDanger: string;
  withColorBorderDanger(colorBorderDanger: string): UiSdlLightTheme;

  readonly colorBorderInlineNotificationError: string;
  withColorBorderInlineNotificationError(colorBorderInlineNotificationError: string): UiSdlLightTheme;

  readonly colorBorderInlineNotificationSuccess: string;
  withColorBorderInlineNotificationSuccess(colorBorderInlineNotificationSuccess: string): UiSdlLightTheme;

  readonly colorBorderInlineNotificationWarning: string;
  withColorBorderInlineNotificationWarning(colorBorderInlineNotificationWarning: string): UiSdlLightTheme;

  readonly colorBorderMenu: string;
  withColorBorderMenu(colorBorderMenu: string): UiSdlLightTheme;

  readonly colorBorderReadonly: string;
  withColorBorderReadonly(colorBorderReadonly: string): UiSdlLightTheme;

  readonly colorBorderSegBtn: string;
  withColorBorderSegBtn(colorBorderSegBtn: string): UiSdlLightTheme;

  readonly colorBorderStrong: string;
  withColorBorderStrong(colorBorderStrong: string): UiSdlLightTheme;

  readonly colorBorderSuccess: string;
  withColorBorderSuccess(colorBorderSuccess: string): UiSdlLightTheme;

  readonly colorBorderWarning: string;
  withColorBorderWarning(colorBorderWarning: string): UiSdlLightTheme;

  readonly colorBorderWeak: string;
  withColorBorderWeak(colorBorderWeak: string): UiSdlLightTheme;

  readonly colorDivider: string;
  withColorDivider(colorDivider: string): UiSdlLightTheme;

  readonly colorDividerStrong: string;
  withColorDividerStrong(colorDividerStrong: string): UiSdlLightTheme;

  readonly colorDividerWeak: string;
  withColorDividerWeak(colorDividerWeak: string): UiSdlLightTheme;

  readonly colorBgCollapsibleNav: string;
  withColorBgCollapsibleNav(colorBgCollapsibleNav: string): UiSdlLightTheme;

  readonly colorBgTintTimeBarOverlay: string;
  withColorBgTintTimeBarOverlay(colorBgTintTimeBarOverlay: string): UiSdlLightTheme;

  readonly colorBgSankeyLabel: string;
  withColorBgSankeyLabel(colorBgSankeyLabel: string): UiSdlLightTheme;

  readonly colorBgSideNav: string;
  withColorBgSideNav(colorBgSideNav: string): UiSdlLightTheme;

  readonly colorBgSideNavItemHover: string;
  withColorBgSideNavItemHover(colorBgSideNavItemHover: string): UiSdlLightTheme;

  readonly colorBgSideItemHover: string;
  withColorBgSideItemHover(colorBgSideItemHover: string): UiSdlLightTheme;

  readonly colorFgSideNavSelected: string;
  withColorFgSideNavSelected(colorFgSideNavSelected: string): UiSdlLightTheme;

  readonly colorFgSideNavUnselected: string;
  withColorFgSideNavUnselected(colorFgSideNavUnselected: string): UiSdlLightTheme;

  readonly colorBorderSideNavItemIndicator: string;
  withColorBorderSideNavItemIndicator(colorBorderSideNavItemIndicator: string): UiSdlLightTheme;

  readonly colorBorderSideNavItemDivider: string;
  withColorBorderSideNavItemDivider(colorBorderSideNavItemDivider: string): UiSdlLightTheme;

  readonly colorFgAccent: string;
  withColorFgAccent(colorFgAccent: string): UiSdlLightTheme;

  readonly colorFgAccentWeak: string;
  withColorFgAccentWeak(colorFgAccentWeak: string): UiSdlLightTheme;

  readonly colorFgAccentStrong: string;
  withColorFgAccentStrong(colorFgAccentStrong: string): UiSdlLightTheme;

  readonly colorFgBtnAccent: string;
  withColorFgBtnAccent(colorFgBtnAccent: string): UiSdlLightTheme;

  readonly colorFgBtnDanger: string;
  withColorFgBtnDanger(colorFgBtnDanger: string): UiSdlLightTheme;

  readonly colorFgBtnPrimary: string;
  withColorFgBtnPrimary(colorFgBtnPrimary: string): UiSdlLightTheme;

  readonly colorFgDanger: string;
  withColorFgDanger(colorFgDanger: string): UiSdlLightTheme;

  readonly colorFgDangerStrong: string;
  withColorFgDangerStrong(colorFgDangerStrong: string): UiSdlLightTheme;

  readonly colorFgDangerWeak: string;
  withColorFgDangerWeak(colorFgDangerWeak: string): UiSdlLightTheme;

  readonly colorFgDecoOrangeStrong: string;
  withColorFgDecoOrangeStrong(colorFgDecoOrangeStrong: string): UiSdlLightTheme;

  readonly colorFgDecoOrange: string;
  withColorFgDecoOrange(colorFgDecoOrange: string): UiSdlLightTheme;

  readonly colorFgDecoOrangeWeak: string;
  withColorFgDecoOrangeWeak(colorFgDecoOrangeWeak: string): UiSdlLightTheme;

  readonly colorFgDecoOliveStrong: string;
  withColorFgDecoOliveStrong(colorFgDecoOliveStrong: string): UiSdlLightTheme;

  readonly colorFgDecoOlive: string;
  withColorFgDecoOlive(colorFgDecoOlive: string): UiSdlLightTheme;

  readonly colorFgDecoOliveWeak: string;
  withColorFgDecoOliveWeak(colorFgDecoOliveWeak: string): UiSdlLightTheme;

  readonly colorFgDecoLimeStrong: string;
  withColorFgDecoLimeStrong(colorFgDecoLimeStrong: string): UiSdlLightTheme;

  readonly colorFgDecoLime: string;
  withColorFgDecoLime(colorFgDecoLime: string): UiSdlLightTheme;

  readonly colorFgDecoLimeWeak: string;
  withColorFgDecoLimeWeak(colorFgDecoLimeWeak: string): UiSdlLightTheme;

  readonly colorFgDecoForestStrong: string;
  withColorFgDecoForestStrong(colorFgDecoForestStrong: string): UiSdlLightTheme;

  readonly colorFgDecoForest: string;
  withColorFgDecoForest(colorFgDecoForest: string): UiSdlLightTheme;

  readonly colorFgDecoForestWeak: string;
  withColorFgDecoForestWeak(colorFgDecoForestWeak: string): UiSdlLightTheme;

  readonly colorFgDecoCyanStrong: string;
  withColorFgDecoCyanStrong(colorFgDecoCyanStrong: string): UiSdlLightTheme;

  readonly colorFgDecoCyan: string;
  withColorFgDecoCyan(colorFgDecoCyan: string): UiSdlLightTheme;

  readonly colorFgDecoCyanWeak: string;
  withColorFgDecoCyanWeak(colorFgDecoCyanWeak: string): UiSdlLightTheme;

  readonly colorFgDecoSlateStrong: string;
  withColorFgDecoSlateStrong(colorFgDecoSlateStrong: string): UiSdlLightTheme;

  readonly colorFgDecoSlate: string;
  withColorFgDecoSlate(colorFgDecoSlate: string): UiSdlLightTheme;

  readonly colorFgDecoSlateWeak: string;
  withColorFgDecoSlateWeak(colorFgDecoSlateWeak: string): UiSdlLightTheme;

  readonly colorFgDecoPurpleStrong: string;
  withColorFgDecoPurpleStrong(colorFgDecoPurpleStrong: string): UiSdlLightTheme;

  readonly colorFgDecoPurple: string;
  withColorFgDecoPurple(colorFgDecoPurple: string): UiSdlLightTheme;

  readonly colorFgDecoPurpleWeak: string;
  withColorFgDecoPurpleWeak(colorFgDecoPurpleWeak: string): UiSdlLightTheme;

  readonly colorFgDecoPlumStrong: string;
  withColorFgDecoPlumStrong(colorFgDecoPlumStrong: string): UiSdlLightTheme;

  readonly colorFgDecoPlum: string;
  withColorFgDecoPlum(colorFgDecoPlum: string): UiSdlLightTheme;

  readonly colorFgDecoPlumWeak: string;
  withColorFgDecoPlumWeak(colorFgDecoPlumWeak: string): UiSdlLightTheme;

  readonly colorFgDecoChocoStrong: string;
  withColorFgDecoChocoStrong(colorFgDecoChocoStrong: string): UiSdlLightTheme;

  readonly colorFgDecoChoco: string;
  withColorFgDecoChoco(colorFgDecoChoco: string): UiSdlLightTheme;

  readonly colorFgDecoChocoWeak: string;
  withColorFgDecoChocoWeak(colorFgDecoChocoWeak: string): UiSdlLightTheme;

  readonly colorFgMenuItemSelected: string;
  withColorFgMenuItemSelected(colorFgMenuItemSelected: string): UiSdlLightTheme;

  readonly colorFgMenuItemSelectedIndicator: string;
  withColorFgMenuItemSelectedIndicator(colorFgMenuItemSelectedIndicator: string): UiSdlLightTheme;

  readonly colorFgMenuItemUnselected: string;
  withColorFgMenuItemUnselected(colorFgMenuItemUnselected: string): UiSdlLightTheme;

  readonly colorFgPrimary: string;
  withColorFgPrimary(colorFgPrimary: string): UiSdlLightTheme;

  readonly colorFgPrimaryInverse: string;
  withColorFgPrimaryInverse(colorFgPrimaryInverse: string): UiSdlLightTheme;

  readonly colorFgReadonly: string;
  withColorFgReadonly(colorFgReadonly: string): UiSdlLightTheme;

  readonly colorFgSecondary: string;
  withColorFgSecondary(colorFgSecondary: string): UiSdlLightTheme;

  readonly colorFgSecondaryInverse: string;
  withColorFgSecondaryInverse(colorFgSecondaryInverse: string): UiSdlLightTheme;

  readonly colorFgSegBtn: string;
  withColorFgSegBtn(colorFgSegBtn: string): UiSdlLightTheme;

  readonly colorFgSegBtnSelected: string;
  withColorFgSegBtnSelected(colorFgSegBtnSelected: string): UiSdlLightTheme;

  readonly colorFgSuccess: string;
  withColorFgSuccess(colorFgSuccess: string): UiSdlLightTheme;

  readonly colorFgSuccessStrong: string;
  withColorFgSuccessStrong(colorFgSuccessStrong: string): UiSdlLightTheme;

  readonly colorFgSuccessWeak: string;
  withColorFgSuccessWeak(colorFgSuccessWeak: string): UiSdlLightTheme;

  readonly colorFgWarning: string;
  withColorFgWarning(colorFgWarning: string): UiSdlLightTheme;

  readonly colorFgWarningStrong: string;
  withColorFgWarningStrong(colorFgWarningStrong: string): UiSdlLightTheme;

  readonly colorFgWarningWeak: string;
  withColorFgWarningWeak(colorFgWarningWeak: string): UiSdlLightTheme;

  readonly colorFocus: string;
  withColorFocus(colorFocus: string): UiSdlLightTheme;

  readonly componentBackgroundColor: string;
  withComponentBackgroundColor(componentBackgroundColor: string): UiSdlLightTheme;

  readonly componentBackgroundColorError: string;
  withComponentBackgroundColorError(componentBackgroundColorError: string): UiSdlLightTheme;

  readonly componentBackgroundColorSuccess: string;
  withComponentBackgroundColorSuccess(componentBackgroundColorSuccess: string): UiSdlLightTheme;

  readonly componentBackgroundColorWarning: string;
  withComponentBackgroundColorWarning(componentBackgroundColorWarning: string): UiSdlLightTheme;

  readonly componentBorderColor: string;
  withComponentBorderColor(componentBorderColor: string): UiSdlLightTheme;

  readonly componentDividerColor: string;
  withComponentDividerColor(componentDividerColor: string): UiSdlLightTheme;

  readonly dangerColor: string;
  withDangerColor(dangerColor: string): UiSdlLightTheme;

  readonly dateIconColor: string;
  withDateIconColor(dateIconColor: string): UiSdlLightTheme;

  readonly dateIconTextColor: string;
  withDateIconTextColor(dateIconTextColor: string): UiSdlLightTheme;

  readonly dropdownDescriptionBackgroundColor: string;
  withDropdownDescriptionBackgroundColor(dropdownDescriptionBackgroundColor: string): UiSdlLightTheme;

  readonly dropdownDescriptionColor: string;
  withDropdownDescriptionColor(dropdownDescriptionColor: string): UiSdlLightTheme;

  readonly dropdownMessageColor: string;
  withDropdownMessageColor(dropdownMessageColor: string): UiSdlLightTheme;

  readonly dropdownOptionDividerColor: string;
  withDropdownOptionDividerColor(dropdownOptionDividerColor: string): UiSdlLightTheme;

  readonly dropdownSelectionColor: string;
  withDropdownSelectionColor(dropdownSelectionColor: string): UiSdlLightTheme;

  readonly dynamicComponentLoaderBackgroundColor: string;
  withDynamicComponentLoaderBackgroundColor(dynamicComponentLoaderBackgroundColor: string): UiSdlLightTheme;

  readonly expressionFocusedInputBackgroundColor: string;
  withExpressionFocusedInputBackgroundColor(expressionFocusedInputBackgroundColor: string): UiSdlLightTheme;

  readonly fontColor: string;
  withFontColor(fontColor: string): UiSdlLightTheme;

  readonly formFieldBackgroundColor: string;
  withFormFieldBackgroundColor(formFieldBackgroundColor: string): UiSdlLightTheme;

  readonly formFieldBackgroundColorDisabled: string;
  withFormFieldBackgroundColorDisabled(formFieldBackgroundColorDisabled: string): UiSdlLightTheme;

  readonly formFieldBorderColor: string;
  withFormFieldBorderColor(formFieldBorderColor: string): UiSdlLightTheme;

  readonly formFieldBorderColorDisabled: string;
  withFormFieldBorderColorDisabled(formFieldBorderColorDisabled: string): UiSdlLightTheme;

  readonly formFieldColorDisabled: string;
  withFormFieldColorDisabled(formFieldColorDisabled: string): UiSdlLightTheme;

  readonly formFieldColorHint: string;
  withFormFieldColorHint(formFieldColorHint: string): UiSdlLightTheme;

  readonly formFieldErrorBorderColor: string;
  withFormFieldErrorBorderColor(formFieldErrorBorderColor: string): UiSdlLightTheme;

  readonly formFieldErrorHoverBorderColor: string;
  withFormFieldErrorHoverBorderColor(formFieldErrorHoverBorderColor: string): UiSdlLightTheme;

  readonly formFieldHeaderColorDisabled: string;
  withFormFieldHeaderColorDisabled(formFieldHeaderColorDisabled: string): UiSdlLightTheme;

  readonly formFieldHoverBackgroundColor: string;
  withFormFieldHoverBackgroundColor(formFieldHoverBackgroundColor: string): UiSdlLightTheme;

  readonly formFieldHoverBorderColor: string;
  withFormFieldHoverBorderColor(formFieldHoverBorderColor: string): UiSdlLightTheme;

  readonly formFieldLabelErrorColor: string;
  withFormFieldLabelErrorColor(formFieldLabelErrorColor: string): UiSdlLightTheme;

  readonly formFieldLabelFocusColor: string;
  withFormFieldLabelFocusColor(formFieldLabelFocusColor: string): UiSdlLightTheme;

  readonly formFieldSetLinkHoverColor: string;
  withFormFieldSetLinkHoverColor(formFieldSetLinkHoverColor: string): UiSdlLightTheme;

  readonly formFieldVariantBorderColor: string;
  withFormFieldVariantBorderColor(formFieldVariantBorderColor: string): UiSdlLightTheme;

  readonly gaugeAxisBarColor: string;
  withGaugeAxisBarColor(gaugeAxisBarColor: string): UiSdlLightTheme;

  readonly gaugeFontColor: string;
  withGaugeFontColor(gaugeFontColor: string): UiSdlLightTheme;

  readonly gaugeProgressBarDefaultColor: string;
  withGaugeProgressBarDefaultColor(gaugeProgressBarDefaultColor: string): UiSdlLightTheme;

  readonly gradientLinearCardParentLeft: string;
  withGradientLinearCardParentLeft(gradientLinearCardParentLeft: string): UiSdlLightTheme;

  readonly gradientLinearCardParentRight: string;
  withGradientLinearCardParentRight(gradientLinearCardParentRight: string): UiSdlLightTheme;

  readonly gradientLinearCardChildLeft: string;
  withGradientLinearCardChildLeft(gradientLinearCardChildLeft: string): UiSdlLightTheme;

  readonly gradientLinearCardChildRight: string;
  withGradientLinearCardChildRight(gradientLinearCardChildRight: string): UiSdlLightTheme;

  readonly gradientLinearNav: string;
  withGradientLinearNav(gradientLinearNav: string): UiSdlLightTheme;

  readonly graphVisualizationClusterNodeFillColor: string;
  withGraphVisualizationClusterNodeFillColor(graphVisualizationClusterNodeFillColor: string): UiSdlLightTheme;

  readonly graphVisualizationClusterNodeOutlineColor: string;
  withGraphVisualizationClusterNodeOutlineColor(graphVisualizationClusterNodeOutlineColor: string): UiSdlLightTheme;

  readonly graphVisualizationGlyphFontColor: string;
  withGraphVisualizationGlyphFontColor(graphVisualizationGlyphFontColor: string): UiSdlLightTheme;

  readonly graphVisualizationLegendBackgroundColor: string;
  withGraphVisualizationLegendBackgroundColor(graphVisualizationLegendBackgroundColor: string): UiSdlLightTheme;

  readonly graphVisualizationLegendViewMoreButtonFontColor: string;
  withGraphVisualizationLegendViewMoreButtonFontColor(graphVisualizationLegendViewMoreButtonFontColor: string): UiSdlLightTheme;

  readonly graphVisualizationMapTheme: string;
  withGraphVisualizationMapTheme(graphVisualizationMapTheme: string): UiSdlLightTheme;

  readonly graphVisualizationMergedEdgeGlyphBackgroundColor: string;
  withGraphVisualizationMergedEdgeGlyphBackgroundColor(graphVisualizationMergedEdgeGlyphBackgroundColor: string): UiSdlLightTheme;

  readonly graphVisualizationNodeDefaultDonutColor: string;
  withGraphVisualizationNodeDefaultDonutColor(graphVisualizationNodeDefaultDonutColor: string): UiSdlLightTheme;

  readonly graphVisualizationNodeInfoGlyphBackgroundColor: string;
  withGraphVisualizationNodeInfoGlyphBackgroundColor(graphVisualizationNodeInfoGlyphBackgroundColor: string): UiSdlLightTheme;

  readonly graphVisualizationNodeInfoGlyphFontColor: string;
  withGraphVisualizationNodeInfoGlyphFontColor(graphVisualizationNodeInfoGlyphFontColor: string): UiSdlLightTheme;

  readonly graphVisualizationPercentageDonutSegmentColor: string;
  withGraphVisualizationPercentageDonutSegmentColor(graphVisualizationPercentageDonutSegmentColor: string): UiSdlLightTheme;

  readonly graphVisualizationTimeBarBackgroundColor: string;
  withGraphVisualizationTimeBarBackgroundColor(graphVisualizationTimeBarBackgroundColor: string): UiSdlLightTheme;

  readonly graphVisualizationTimeBarColor: string;
  withGraphVisualizationTimeBarColor(graphVisualizationTimeBarColor: string): UiSdlLightTheme;

  readonly graphVisualizationTimeBarHoverColor: string;
  withGraphVisualizationTimeBarHoverColor(graphVisualizationTimeBarHoverColor: string): UiSdlLightTheme;

  readonly graphVisualizationTimeBarScaleHoverColor: string;
  withGraphVisualizationTimeBarScaleHoverColor(graphVisualizationTimeBarScaleHoverColor: string): UiSdlLightTheme;

  readonly graphVisualizationTooltipBackgroundColor: string;
  withGraphVisualizationTooltipBackgroundColor(graphVisualizationTooltipBackgroundColor: string): UiSdlLightTheme;

  readonly graphVisualizationTooltipBodyColor: string;
  withGraphVisualizationTooltipBodyColor(graphVisualizationTooltipBodyColor: string): UiSdlLightTheme;

  readonly graphVisualizationTooltipSubtitleColor: string;
  withGraphVisualizationTooltipSubtitleColor(graphVisualizationTooltipSubtitleColor: string): UiSdlLightTheme;

  readonly graphVisualizationTooltipTitleColor: string;
  withGraphVisualizationTooltipTitleColor(graphVisualizationTooltipTitleColor: string): UiSdlLightTheme;

  readonly gridCellColorWheelBackgroundColor: string;
  withGridCellColorWheelBackgroundColor(gridCellColorWheelBackgroundColor: string): UiSdlLightTheme;

  readonly gridHeaderFontColor: string;
  withGridHeaderFontColor(gridHeaderFontColor: string): UiSdlLightTheme;

  readonly gridHoverBackgroundColor: string;
  withGridHoverBackgroundColor(gridHoverBackgroundColor: string): UiSdlLightTheme;

  readonly gridMessageBackgroundColor: string;
  withGridMessageBackgroundColor(gridMessageBackgroundColor: string): UiSdlLightTheme;

  readonly gridPagerLabelFontColor: string;
  withGridPagerLabelFontColor(gridPagerLabelFontColor: string): UiSdlLightTheme;

  readonly gridPagerSizesFontColor: string;
  withGridPagerSizesFontColor(gridPagerSizesFontColor: string): UiSdlLightTheme;

  readonly gridSelectedCellBackgroundColor: string;
  withGridSelectedCellBackgroundColor(gridSelectedCellBackgroundColor: string): UiSdlLightTheme;

  readonly gridSelectedCellBorderColor: string;
  withGridSelectedCellBorderColor(gridSelectedCellBorderColor: string): UiSdlLightTheme;

  readonly gridSelectedFontColor: string;
  withGridSelectedFontColor(gridSelectedFontColor: string): UiSdlLightTheme;

  readonly gridSelectedHoverBackgroundColor: string;
  withGridSelectedHoverBackgroundColor(gridSelectedHoverBackgroundColor: string): UiSdlLightTheme;

  readonly iconGroupColor: string;
  withIconGroupColor(iconGroupColor: string): UiSdlLightTheme;

  readonly indicatorBarBackgroundColor: string;
  withIndicatorBarBackgroundColor(indicatorBarBackgroundColor: string): UiSdlLightTheme;

  readonly infoColor: string;
  withInfoColor(infoColor: string): UiSdlLightTheme;

  readonly invertedComponentBackgroundColor: string;
  withInvertedComponentBackgroundColor(invertedComponentBackgroundColor: string): UiSdlLightTheme;

  readonly kanbanBoardBackgroundColumnTitle: string;
  withKanbanBoardBackgroundColumnTitle(kanbanBoardBackgroundColumnTitle: string): UiSdlLightTheme;

  readonly kanbanBoardBackgroundItemSlot: string;
  withKanbanBoardBackgroundItemSlot(kanbanBoardBackgroundItemSlot: string): UiSdlLightTheme;

  readonly kanbanBoardBackgroundLayout: string;
  withKanbanBoardBackgroundLayout(kanbanBoardBackgroundLayout: string): UiSdlLightTheme;

  readonly kanbanBoardBorderTitle: string;
  withKanbanBoardBorderTitle(kanbanBoardBorderTitle: string): UiSdlLightTheme;

  readonly kanbanBoardButtonColor: string;
  withKanbanBoardButtonColor(kanbanBoardButtonColor: string): UiSdlLightTheme;

  readonly kanbanBoardCardContentColor: string;
  withKanbanBoardCardContentColor(kanbanBoardCardContentColor: string): UiSdlLightTheme;

  readonly kanbanBoardCardHeadLineBlockColor: string;
  withKanbanBoardCardHeadLineBlockColor(kanbanBoardCardHeadLineBlockColor: string): UiSdlLightTheme;

  readonly kanbanBoardContentBackgroundColor: string;
  withKanbanBoardContentBackgroundColor(kanbanBoardContentBackgroundColor: string): UiSdlLightTheme;

  readonly kanbanBoardTextBackgroundCollectionList: string;
  withKanbanBoardTextBackgroundCollectionList(kanbanBoardTextBackgroundCollectionList: string): UiSdlLightTheme;

  readonly kanbanBoardTitleColor: string;
  withKanbanBoardTitleColor(kanbanBoardTitleColor: string): UiSdlLightTheme;

  readonly kendoAppSurfaceColor?: string | null;
  withKendoAppSurfaceColor(kendoAppSurfaceColor: string | null): UiSdlLightTheme;

  readonly kendoOnAppSurfaceColor?: string | null;
  withKendoOnAppSurfaceColor(kendoOnAppSurfaceColor: string | null): UiSdlLightTheme;

  readonly kendoSubtleColor?: string | null;
  withKendoSubtleColor(kendoSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoSurfaceColor?: string | null;
  withKendoSurfaceColor(kendoSurfaceColor: string | null): UiSdlLightTheme;

  readonly kendoSurfaceAltColor?: string | null;
  withKendoSurfaceAltColor(kendoSurfaceAltColor: string | null): UiSdlLightTheme;

  readonly kendoBorderColor?: string | null;
  withKendoBorderColor(kendoBorderColor: string | null): UiSdlLightTheme;

  readonly kendoBorderAltColor?: string | null;
  withKendoBorderAltColor(kendoBorderAltColor: string | null): UiSdlLightTheme;

  readonly kendoBaseSubtleColor?: string | null;
  withKendoBaseSubtleColor(kendoBaseSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoBaseSubtleHoverColor?: string | null;
  withKendoBaseSubtleHoverColor(kendoBaseSubtleHoverColor: string | null): UiSdlLightTheme;

  readonly kendoBaseSubtleActiveColor?: string | null;
  withKendoBaseSubtleActiveColor(kendoBaseSubtleActiveColor: string | null): UiSdlLightTheme;

  readonly kendoBaseColor?: string | null;
  withKendoBaseColor(kendoBaseColor: string | null): UiSdlLightTheme;

  readonly kendoBaseHoverColor?: string | null;
  withKendoBaseHoverColor(kendoBaseHoverColor: string | null): UiSdlLightTheme;

  readonly kendoBaseActiveColor?: string | null;
  withKendoBaseActiveColor(kendoBaseActiveColor: string | null): UiSdlLightTheme;

  readonly kendoBaseEmphasisColor?: string | null;
  withKendoBaseEmphasisColor(kendoBaseEmphasisColor: string | null): UiSdlLightTheme;

  readonly kendoBaseOnSubtleColor?: string | null;
  withKendoBaseOnSubtleColor(kendoBaseOnSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoOnBaseColor?: string | null;
  withKendoOnBaseColor(kendoOnBaseColor: string | null): UiSdlLightTheme;

  readonly kendoBaseOnSurfaceColor?: string | null;
  withKendoBaseOnSurfaceColor(kendoBaseOnSurfaceColor: string | null): UiSdlLightTheme;

  readonly kendoElevation01?: string | null;
  withKendoElevation01(kendoElevation01: string | null): UiSdlLightTheme;

  readonly kendoElevation02?: string | null;
  withKendoElevation02(kendoElevation02: string | null): UiSdlLightTheme;

  readonly kendoElevation03?: string | null;
  withKendoElevation03(kendoElevation03: string | null): UiSdlLightTheme;

  readonly kendoElevation04?: string | null;
  withKendoElevation04(kendoElevation04: string | null): UiSdlLightTheme;

  readonly kendoElevation05?: string | null;
  withKendoElevation05(kendoElevation05: string | null): UiSdlLightTheme;

  readonly kendoElevation06?: string | null;
  withKendoElevation06(kendoElevation06: string | null): UiSdlLightTheme;

  readonly kendoElevation07?: string | null;
  withKendoElevation07(kendoElevation07: string | null): UiSdlLightTheme;

  readonly kendoElevation08?: string | null;
  withKendoElevation08(kendoElevation08: string | null): UiSdlLightTheme;

  readonly kendoElevation09?: string | null;
  withKendoElevation09(kendoElevation09: string | null): UiSdlLightTheme;

  readonly kendoPrimarySubtleColor?: string | null;
  withKendoPrimarySubtleColor(kendoPrimarySubtleColor: string | null): UiSdlLightTheme;

  readonly kendoPrimarySubtleHoverColor?: string | null;
  withKendoPrimarySubtleHoverColor(kendoPrimarySubtleHoverColor: string | null): UiSdlLightTheme;

  readonly kendoPrimarySubtleActiveColor?: string | null;
  withKendoPrimarySubtleActiveColor(kendoPrimarySubtleActiveColor: string | null): UiSdlLightTheme;

  readonly kendoPrimaryColor?: string | null;
  withKendoPrimaryColor(kendoPrimaryColor: string | null): UiSdlLightTheme;

  readonly kendoPrimaryHoverColor?: string | null;
  withKendoPrimaryHoverColor(kendoPrimaryHoverColor: string | null): UiSdlLightTheme;

  readonly kendoPrimaryActiveColor?: string | null;
  withKendoPrimaryActiveColor(kendoPrimaryActiveColor: string | null): UiSdlLightTheme;

  readonly kendoPrimaryEmphasisColor?: string | null;
  withKendoPrimaryEmphasisColor(kendoPrimaryEmphasisColor: string | null): UiSdlLightTheme;

  readonly kendoPrimaryOnSubtleColor?: string | null;
  withKendoPrimaryOnSubtleColor(kendoPrimaryOnSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoOnPrimaryColor?: string | null;
  withKendoOnPrimaryColor(kendoOnPrimaryColor: string | null): UiSdlLightTheme;

  readonly kendoPrimaryOnSurfaceColor?: string | null;
  withKendoPrimaryOnSurfaceColor(kendoPrimaryOnSurfaceColor: string | null): UiSdlLightTheme;

  readonly kendoSecondarySubtleColor?: string | null;
  withKendoSecondarySubtleColor(kendoSecondarySubtleColor: string | null): UiSdlLightTheme;

  readonly kendoSecondarySubtleHoverColor?: string | null;
  withKendoSecondarySubtleHoverColor(kendoSecondarySubtleHoverColor: string | null): UiSdlLightTheme;

  readonly kendoSecondarySubtleActiveColor?: string | null;
  withKendoSecondarySubtleActiveColor(kendoSecondarySubtleActiveColor: string | null): UiSdlLightTheme;

  readonly kendoSecondaryColor?: string | null;
  withKendoSecondaryColor(kendoSecondaryColor: string | null): UiSdlLightTheme;

  readonly kendoSecondaryHoverColor?: string | null;
  withKendoSecondaryHoverColor(kendoSecondaryHoverColor: string | null): UiSdlLightTheme;

  readonly kendoSecondaryActiveColor?: string | null;
  withKendoSecondaryActiveColor(kendoSecondaryActiveColor: string | null): UiSdlLightTheme;

  readonly kendoSecondaryEmphasisColor?: string | null;
  withKendoSecondaryEmphasisColor(kendoSecondaryEmphasisColor: string | null): UiSdlLightTheme;

  readonly kendoSecondaryOnSubtleColor?: string | null;
  withKendoSecondaryOnSubtleColor(kendoSecondaryOnSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoOnSecondaryColor?: string | null;
  withKendoOnSecondaryColor(kendoOnSecondaryColor: string | null): UiSdlLightTheme;

  readonly kendoSecondaryOnSurfaceColor?: string | null;
  withKendoSecondaryOnSurfaceColor(kendoSecondaryOnSurfaceColor: string | null): UiSdlLightTheme;

  readonly kendoTertiarySubtleColor?: string | null;
  withKendoTertiarySubtleColor(kendoTertiarySubtleColor: string | null): UiSdlLightTheme;

  readonly kendoTertiarySubtleHoverColor?: string | null;
  withKendoTertiarySubtleHoverColor(kendoTertiarySubtleHoverColor: string | null): UiSdlLightTheme;

  readonly kendoTertiarySubtleActiveColor?: string | null;
  withKendoTertiarySubtleActiveColor(kendoTertiarySubtleActiveColor: string | null): UiSdlLightTheme;

  readonly kendoTertiaryColor?: string | null;
  withKendoTertiaryColor(kendoTertiaryColor: string | null): UiSdlLightTheme;

  readonly kendoTertiaryHoverColor?: string | null;
  withKendoTertiaryHoverColor(kendoTertiaryHoverColor: string | null): UiSdlLightTheme;

  readonly kendoTertiaryActiveColor?: string | null;
  withKendoTertiaryActiveColor(kendoTertiaryActiveColor: string | null): UiSdlLightTheme;

  readonly kendoTertiaryEmphasisColor?: string | null;
  withKendoTertiaryEmphasisColor(kendoTertiaryEmphasisColor: string | null): UiSdlLightTheme;

  readonly kendoTertiaryOnSubtleColor?: string | null;
  withKendoTertiaryOnSubtleColor(kendoTertiaryOnSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoOnTertiaryColor?: string | null;
  withKendoOnTertiaryColor(kendoOnTertiaryColor: string | null): UiSdlLightTheme;

  readonly kendoTertiaryOnSurfaceColor?: string | null;
  withKendoTertiaryOnSurfaceColor(kendoTertiaryOnSurfaceColor: string | null): UiSdlLightTheme;

  readonly kendoInfoSubtleColor?: string | null;
  withKendoInfoSubtleColor(kendoInfoSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoInfoSubtleHoverColor?: string | null;
  withKendoInfoSubtleHoverColor(kendoInfoSubtleHoverColor: string | null): UiSdlLightTheme;

  readonly kendoInfoSubtleActiveColor?: string | null;
  withKendoInfoSubtleActiveColor(kendoInfoSubtleActiveColor: string | null): UiSdlLightTheme;

  readonly kendoInfoColor?: string | null;
  withKendoInfoColor(kendoInfoColor: string | null): UiSdlLightTheme;

  readonly kendoInfoHoverColor?: string | null;
  withKendoInfoHoverColor(kendoInfoHoverColor: string | null): UiSdlLightTheme;

  readonly kendoInfoActiveColor?: string | null;
  withKendoInfoActiveColor(kendoInfoActiveColor: string | null): UiSdlLightTheme;

  readonly kendoInfoEmphasisColor?: string | null;
  withKendoInfoEmphasisColor(kendoInfoEmphasisColor: string | null): UiSdlLightTheme;

  readonly kendoInfoOnSubtleColor?: string | null;
  withKendoInfoOnSubtleColor(kendoInfoOnSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoOnInfoColor?: string | null;
  withKendoOnInfoColor(kendoOnInfoColor: string | null): UiSdlLightTheme;

  readonly kendoInfoOnSurfaceColor?: string | null;
  withKendoInfoOnSurfaceColor(kendoInfoOnSurfaceColor: string | null): UiSdlLightTheme;

  readonly kendoSuccessSubtleColor?: string | null;
  withKendoSuccessSubtleColor(kendoSuccessSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoSuccessSubtleHoverColor?: string | null;
  withKendoSuccessSubtleHoverColor(kendoSuccessSubtleHoverColor: string | null): UiSdlLightTheme;

  readonly kendoSuccessSubtleActiveColor?: string | null;
  withKendoSuccessSubtleActiveColor(kendoSuccessSubtleActiveColor: string | null): UiSdlLightTheme;

  readonly kendoSuccessColor?: string | null;
  withKendoSuccessColor(kendoSuccessColor: string | null): UiSdlLightTheme;

  readonly kendoSuccessHoverColor?: string | null;
  withKendoSuccessHoverColor(kendoSuccessHoverColor: string | null): UiSdlLightTheme;

  readonly kendoSuccessActiveColor?: string | null;
  withKendoSuccessActiveColor(kendoSuccessActiveColor: string | null): UiSdlLightTheme;

  readonly kendoSuccessEmphasisColor?: string | null;
  withKendoSuccessEmphasisColor(kendoSuccessEmphasisColor: string | null): UiSdlLightTheme;

  readonly kendoSuccessOnSubtleColor?: string | null;
  withKendoSuccessOnSubtleColor(kendoSuccessOnSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoOnSuccessColor?: string | null;
  withKendoOnSuccessColor(kendoOnSuccessColor: string | null): UiSdlLightTheme;

  readonly kendoSuccessOnSurfaceColor?: string | null;
  withKendoSuccessOnSurfaceColor(kendoSuccessOnSurfaceColor: string | null): UiSdlLightTheme;

  readonly kendoWarningSubtleColor?: string | null;
  withKendoWarningSubtleColor(kendoWarningSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoWarningSubtleHoverColor?: string | null;
  withKendoWarningSubtleHoverColor(kendoWarningSubtleHoverColor: string | null): UiSdlLightTheme;

  readonly kendoWarningSubtleActiveColor?: string | null;
  withKendoWarningSubtleActiveColor(kendoWarningSubtleActiveColor: string | null): UiSdlLightTheme;

  readonly kendoWarningColor?: string | null;
  withKendoWarningColor(kendoWarningColor: string | null): UiSdlLightTheme;

  readonly kendoWarningHoverColor?: string | null;
  withKendoWarningHoverColor(kendoWarningHoverColor: string | null): UiSdlLightTheme;

  readonly kendoWarningActiveColor?: string | null;
  withKendoWarningActiveColor(kendoWarningActiveColor: string | null): UiSdlLightTheme;

  readonly kendoWarningEmphasisColor?: string | null;
  withKendoWarningEmphasisColor(kendoWarningEmphasisColor: string | null): UiSdlLightTheme;

  readonly kendoWarningOnSubtleColor?: string | null;
  withKendoWarningOnSubtleColor(kendoWarningOnSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoOnWarningColor?: string | null;
  withKendoOnWarningColor(kendoOnWarningColor: string | null): UiSdlLightTheme;

  readonly kendoWarningOnSurfaceColor?: string | null;
  withKendoWarningOnSurfaceColor(kendoWarningOnSurfaceColor: string | null): UiSdlLightTheme;

  readonly kendoErrorSubtleColor?: string | null;
  withKendoErrorSubtleColor(kendoErrorSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoErrorSubtleHoverColor?: string | null;
  withKendoErrorSubtleHoverColor(kendoErrorSubtleHoverColor: string | null): UiSdlLightTheme;

  readonly kendoErrorSubtleActiveColor?: string | null;
  withKendoErrorSubtleActiveColor(kendoErrorSubtleActiveColor: string | null): UiSdlLightTheme;

  readonly kendoErrorColor?: string | null;
  withKendoErrorColor(kendoErrorColor: string | null): UiSdlLightTheme;

  readonly kendoErrorHoverColor?: string | null;
  withKendoErrorHoverColor(kendoErrorHoverColor: string | null): UiSdlLightTheme;

  readonly kendoErrorActiveColor?: string | null;
  withKendoErrorActiveColor(kendoErrorActiveColor: string | null): UiSdlLightTheme;

  readonly kendoErrorEmphasisColor?: string | null;
  withKendoErrorEmphasisColor(kendoErrorEmphasisColor: string | null): UiSdlLightTheme;

  readonly kendoErrorOnSubtleColor?: string | null;
  withKendoErrorOnSubtleColor(kendoErrorOnSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoOnErrorColor?: string | null;
  withKendoOnErrorColor(kendoOnErrorColor: string | null): UiSdlLightTheme;

  readonly kendoErrorOnSurfaceColor?: string | null;
  withKendoErrorOnSurfaceColor(kendoErrorOnSurfaceColor: string | null): UiSdlLightTheme;

  readonly kendoLightSubtleColor?: string | null;
  withKendoLightSubtleColor(kendoLightSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoLightSubtleHoverColor?: string | null;
  withKendoLightSubtleHoverColor(kendoLightSubtleHoverColor: string | null): UiSdlLightTheme;

  readonly kendoLightSubtleActiveColor?: string | null;
  withKendoLightSubtleActiveColor(kendoLightSubtleActiveColor: string | null): UiSdlLightTheme;

  readonly kendoLightColor?: string | null;
  withKendoLightColor(kendoLightColor: string | null): UiSdlLightTheme;

  readonly kendoLightHoverColor?: string | null;
  withKendoLightHoverColor(kendoLightHoverColor: string | null): UiSdlLightTheme;

  readonly kendoLightActiveColor?: string | null;
  withKendoLightActiveColor(kendoLightActiveColor: string | null): UiSdlLightTheme;

  readonly kendoLightEmphasisColor?: string | null;
  withKendoLightEmphasisColor(kendoLightEmphasisColor: string | null): UiSdlLightTheme;

  readonly kendoLightOnSubtleColor?: string | null;
  withKendoLightOnSubtleColor(kendoLightOnSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoOnLightColor?: string | null;
  withKendoOnLightColor(kendoOnLightColor: string | null): UiSdlLightTheme;

  readonly kendoLightOnSurfaceColor?: string | null;
  withKendoLightOnSurfaceColor(kendoLightOnSurfaceColor: string | null): UiSdlLightTheme;

  readonly kendoDarkSubtleColor?: string | null;
  withKendoDarkSubtleColor(kendoDarkSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoDarkSubtleHoverColor?: string | null;
  withKendoDarkSubtleHoverColor(kendoDarkSubtleHoverColor: string | null): UiSdlLightTheme;

  readonly kendoDarkSubtleActiveColor?: string | null;
  withKendoDarkSubtleActiveColor(kendoDarkSubtleActiveColor: string | null): UiSdlLightTheme;

  readonly kendoDarkColor?: string | null;
  withKendoDarkColor(kendoDarkColor: string | null): UiSdlLightTheme;

  readonly kendoDarkHoverColor?: string | null;
  withKendoDarkHoverColor(kendoDarkHoverColor: string | null): UiSdlLightTheme;

  readonly kendoDarkActiveColor?: string | null;
  withKendoDarkActiveColor(kendoDarkActiveColor: string | null): UiSdlLightTheme;

  readonly kendoDarkEmphasisColor?: string | null;
  withKendoDarkEmphasisColor(kendoDarkEmphasisColor: string | null): UiSdlLightTheme;

  readonly kendoDarkOnSubtleColor?: string | null;
  withKendoDarkOnSubtleColor(kendoDarkOnSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoOnDarkColor?: string | null;
  withKendoOnDarkColor(kendoOnDarkColor: string | null): UiSdlLightTheme;

  readonly kendoDarkOnSurfaceColor?: string | null;
  withKendoDarkOnSurfaceColor(kendoDarkOnSurfaceColor: string | null): UiSdlLightTheme;

  readonly kendoInverseSubtleColor?: string | null;
  withKendoInverseSubtleColor(kendoInverseSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoInverseSubtleHoverColor?: string | null;
  withKendoInverseSubtleHoverColor(kendoInverseSubtleHoverColor: string | null): UiSdlLightTheme;

  readonly kendoInverseSubtleActiveColor?: string | null;
  withKendoInverseSubtleActiveColor(kendoInverseSubtleActiveColor: string | null): UiSdlLightTheme;

  readonly kendoInverseColor?: string | null;
  withKendoInverseColor(kendoInverseColor: string | null): UiSdlLightTheme;

  readonly kendoInverseHoverColor?: string | null;
  withKendoInverseHoverColor(kendoInverseHoverColor: string | null): UiSdlLightTheme;

  readonly kendoInverseActiveColor?: string | null;
  withKendoInverseActiveColor(kendoInverseActiveColor: string | null): UiSdlLightTheme;

  readonly kendoInverseEmphasisColor?: string | null;
  withKendoInverseEmphasisColor(kendoInverseEmphasisColor: string | null): UiSdlLightTheme;

  readonly kendoInverseOnSubtleColor?: string | null;
  withKendoInverseOnSubtleColor(kendoInverseOnSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoOnInverseColor?: string | null;
  withKendoOnInverseColor(kendoOnInverseColor: string | null): UiSdlLightTheme;

  readonly kendoInverseOnSurfaceColor?: string | null;
  withKendoInverseOnSurfaceColor(kendoInverseOnSurfaceColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesAColor?: string | null;
  withKendoSeriesAColor(kendoSeriesAColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesABoldColor?: string | null;
  withKendoSeriesABoldColor(kendoSeriesABoldColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesABolderColor?: string | null;
  withKendoSeriesABolderColor(kendoSeriesABolderColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesASubtleColor?: string | null;
  withKendoSeriesASubtleColor(kendoSeriesASubtleColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesASubtlerColor?: string | null;
  withKendoSeriesASubtlerColor(kendoSeriesASubtlerColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesBColor?: string | null;
  withKendoSeriesBColor(kendoSeriesBColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesBBoldColor?: string | null;
  withKendoSeriesBBoldColor(kendoSeriesBBoldColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesBBolderColor?: string | null;
  withKendoSeriesBBolderColor(kendoSeriesBBolderColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesBSubtleColor?: string | null;
  withKendoSeriesBSubtleColor(kendoSeriesBSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesBSubtlerColor?: string | null;
  withKendoSeriesBSubtlerColor(kendoSeriesBSubtlerColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesCColor?: string | null;
  withKendoSeriesCColor(kendoSeriesCColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesCBoldColor?: string | null;
  withKendoSeriesCBoldColor(kendoSeriesCBoldColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesCBolderColor?: string | null;
  withKendoSeriesCBolderColor(kendoSeriesCBolderColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesCSubtleColor?: string | null;
  withKendoSeriesCSubtleColor(kendoSeriesCSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesCSubtlerColor?: string | null;
  withKendoSeriesCSubtlerColor(kendoSeriesCSubtlerColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesDColor?: string | null;
  withKendoSeriesDColor(kendoSeriesDColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesDBoldColor?: string | null;
  withKendoSeriesDBoldColor(kendoSeriesDBoldColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesDBolderColor?: string | null;
  withKendoSeriesDBolderColor(kendoSeriesDBolderColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesDSubtleColor?: string | null;
  withKendoSeriesDSubtleColor(kendoSeriesDSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesDSubtlerColor?: string | null;
  withKendoSeriesDSubtlerColor(kendoSeriesDSubtlerColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesEColor?: string | null;
  withKendoSeriesEColor(kendoSeriesEColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesEBoldColor?: string | null;
  withKendoSeriesEBoldColor(kendoSeriesEBoldColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesEBolderColor?: string | null;
  withKendoSeriesEBolderColor(kendoSeriesEBolderColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesESubtleColor?: string | null;
  withKendoSeriesESubtleColor(kendoSeriesESubtleColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesESubtlerColor?: string | null;
  withKendoSeriesESubtlerColor(kendoSeriesESubtlerColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesFColor?: string | null;
  withKendoSeriesFColor(kendoSeriesFColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesFBoldColor?: string | null;
  withKendoSeriesFBoldColor(kendoSeriesFBoldColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesFBolderColor?: string | null;
  withKendoSeriesFBolderColor(kendoSeriesFBolderColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesFSubtleColor?: string | null;
  withKendoSeriesFSubtleColor(kendoSeriesFSubtleColor: string | null): UiSdlLightTheme;

  readonly kendoSeriesFSubtlerColor?: string | null;
  withKendoSeriesFSubtlerColor(kendoSeriesFSubtlerColor: string | null): UiSdlLightTheme;

  readonly legendBackgroundColor: string;
  withLegendBackgroundColor(legendBackgroundColor: string): UiSdlLightTheme;

  readonly legendNameFontColor: string;
  withLegendNameFontColor(legendNameFontColor: string): UiSdlLightTheme;

  readonly logoBlueBackgroundColor: string;
  withLogoBlueBackgroundColor(logoBlueBackgroundColor: string): UiSdlLightTheme;

  readonly logoChocoBackgroundColor: string;
  withLogoChocoBackgroundColor(logoChocoBackgroundColor: string): UiSdlLightTheme;

  readonly logoColor: string;
  withLogoColor(logoColor: string): UiSdlLightTheme;

  readonly logoCyanBackgroundColor: string;
  withLogoCyanBackgroundColor(logoCyanBackgroundColor: string): UiSdlLightTheme;

  readonly logoForestBackgroundColor: string;
  withLogoForestBackgroundColor(logoForestBackgroundColor: string): UiSdlLightTheme;

  readonly logoIconUrl: string;
  withLogoIconUrl(logoIconUrl: string): UiSdlLightTheme;

  readonly emptyStateIconUrl: string;
  withEmptyStateIconUrl(emptyStateIconUrl: string): UiSdlLightTheme;

  readonly logoLimeBackgroundColor: string;
  withLogoLimeBackgroundColor(logoLimeBackgroundColor: string): UiSdlLightTheme;

  readonly logoOliveBackgroundColor: string;
  withLogoOliveBackgroundColor(logoOliveBackgroundColor: string): UiSdlLightTheme;

  readonly logoOrangeBackgroundColor: string;
  withLogoOrangeBackgroundColor(logoOrangeBackgroundColor: string): UiSdlLightTheme;

  readonly logoPlumBackgroundColor: string;
  withLogoPlumBackgroundColor(logoPlumBackgroundColor: string): UiSdlLightTheme;

  readonly logoPurpleBackgroundColor: string;
  withLogoPurpleBackgroundColor(logoPurpleBackgroundColor: string): UiSdlLightTheme;

  readonly logoSlateBackgroundColor: string;
  withLogoSlateBackgroundColor(logoSlateBackgroundColor: string): UiSdlLightTheme;

  readonly mapMarkerClusterColor: string;
  withMapMarkerClusterColor(mapMarkerClusterColor: string): UiSdlLightTheme;

  readonly mapTooltipAdditionalFieldsDescriptionFontColor: string;
  withMapTooltipAdditionalFieldsDescriptionFontColor(mapTooltipAdditionalFieldsDescriptionFontColor: string): UiSdlLightTheme;

  readonly mapTooltipAdditionalFieldsHeaderFontColor: string;
  withMapTooltipAdditionalFieldsHeaderFontColor(mapTooltipAdditionalFieldsHeaderFontColor: string): UiSdlLightTheme;

  readonly mapTooltipHeaderFontColor: string;
  withMapTooltipHeaderFontColor(mapTooltipHeaderFontColor: string): UiSdlLightTheme;

  readonly mapTooltipSubHeaderFontColor: string;
  withMapTooltipSubHeaderFontColor(mapTooltipSubHeaderFontColor: string): UiSdlLightTheme;

  readonly menuActiveColor: string;
  withMenuActiveColor(menuActiveColor: string): UiSdlLightTheme;

  readonly menuBackgroundActiveColor: string;
  withMenuBackgroundActiveColor(menuBackgroundActiveColor: string): UiSdlLightTheme;

  readonly menuBackgroundColor: string;
  withMenuBackgroundColor(menuBackgroundColor: string): UiSdlLightTheme;

  readonly menuDividerColor: string;
  withMenuDividerColor(menuDividerColor: string): UiSdlLightTheme;

  readonly menuHoverColor: string;
  withMenuHoverColor(menuHoverColor: string): UiSdlLightTheme;

  readonly menuItemActiveColor: string;
  withMenuItemActiveColor(menuItemActiveColor: string): UiSdlLightTheme;

  readonly menuItemBackgroundColor: string;
  withMenuItemBackgroundColor(menuItemBackgroundColor: string): UiSdlLightTheme;

  readonly menuItemBackgroundHoverColor: string;
  withMenuItemBackgroundHoverColor(menuItemBackgroundHoverColor: string): UiSdlLightTheme;

  readonly menuItemHoverColor: string;
  withMenuItemHoverColor(menuItemHoverColor: string): UiSdlLightTheme;

  readonly menuPrimaryColor: string;
  withMenuPrimaryColor(menuPrimaryColor: string): UiSdlLightTheme;

  readonly numberIconColor: string;
  withNumberIconColor(numberIconColor: string): UiSdlLightTheme;

  readonly numberIconTextColor: string;
  withNumberIconTextColor(numberIconTextColor: string): UiSdlLightTheme;

  readonly objectIconColor: string;
  withObjectIconColor(objectIconColor: string): UiSdlLightTheme;

  readonly objectIconTextColor: string;
  withObjectIconTextColor(objectIconTextColor: string): UiSdlLightTheme;

  readonly opacity00: string;
  withOpacity00(opacity00: string): UiSdlLightTheme;

  readonly opacity05: string;
  withOpacity05(opacity05: string): UiSdlLightTheme;

  readonly opacity10: string;
  withOpacity10(opacity10: string): UiSdlLightTheme;

  readonly opacity20: string;
  withOpacity20(opacity20: string): UiSdlLightTheme;

  readonly opacity30: string;
  withOpacity30(opacity30: string): UiSdlLightTheme;

  readonly opacity40: string;
  withOpacity40(opacity40: string): UiSdlLightTheme;

  readonly opacity50: string;
  withOpacity50(opacity50: string): UiSdlLightTheme;

  readonly opacity60: string;
  withOpacity60(opacity60: string): UiSdlLightTheme;

  readonly opacity70: string;
  withOpacity70(opacity70: string): UiSdlLightTheme;

  readonly opacity80: string;
  withOpacity80(opacity80: string): UiSdlLightTheme;

  readonly opacity90: string;
  withOpacity90(opacity90: string): UiSdlLightTheme;

  readonly opacity95: string;
  withOpacity95(opacity95: string): UiSdlLightTheme;

  readonly opacity100: string;
  withOpacity100(opacity100: string): UiSdlLightTheme;

  readonly opacityDisabled: string;
  withOpacityDisabled(opacityDisabled: string): UiSdlLightTheme;

  readonly opacityLoading: string;
  withOpacityLoading(opacityLoading: string): UiSdlLightTheme;

  readonly otherIconColor: string;
  withOtherIconColor(otherIconColor: string): UiSdlLightTheme;

  readonly otherIconTextColor: string;
  withOtherIconTextColor(otherIconTextColor: string): UiSdlLightTheme;

  readonly pageBackgroundColor: string;
  withPageBackgroundColor(pageBackgroundColor: string): UiSdlLightTheme;

  readonly pageTitleBoxShadowColor: string;
  withPageTitleBoxShadowColor(pageTitleBoxShadowColor: string): UiSdlLightTheme;

  readonly referenceIconColor: string;
  withReferenceIconColor(referenceIconColor: string): UiSdlLightTheme;

  readonly referenceIconTextColor: string;
  withReferenceIconTextColor(referenceIconTextColor: string): UiSdlLightTheme;

  readonly resetZoomIconPath: string;
  withResetZoomIconPath(resetZoomIconPath: string): UiSdlLightTheme;

  readonly resetZoomIconUrl: string;
  withResetZoomIconUrl(resetZoomIconUrl: string): UiSdlLightTheme;

  readonly resetZoomIconColor: string;
  withResetZoomIconColor(resetZoomIconColor: string): UiSdlLightTheme;

  readonly sankeyChartLabelBackgroundColor: string;
  withSankeyChartLabelBackgroundColor(sankeyChartLabelBackgroundColor: string): UiSdlLightTheme;

  readonly scrollbarThumbColor: string;
  withScrollbarThumbColor(scrollbarThumbColor: string): UiSdlLightTheme;

  readonly scrollbarTrackColor: string;
  withScrollbarTrackColor(scrollbarTrackColor: string): UiSdlLightTheme;

  readonly secondaryFontColor: string;
  withSecondaryFontColor(secondaryFontColor: string): UiSdlLightTheme;

  readonly secondaryVariantFontColor: string;
  withSecondaryVariantFontColor(secondaryVariantFontColor: string): UiSdlLightTheme;

  readonly selectFieldPillActiveBackgroundColor: string;
  withSelectFieldPillActiveBackgroundColor(selectFieldPillActiveBackgroundColor: string): UiSdlLightTheme;

  readonly selectFieldPillHoverBackgroundColor: string;
  withSelectFieldPillHoverBackgroundColor(selectFieldPillHoverBackgroundColor: string): UiSdlLightTheme;

  readonly selectFieldPillTextColor: string;
  withSelectFieldPillTextColor(selectFieldPillTextColor: string): UiSdlLightTheme;

  readonly selectionBackgroundColor: string;
  withSelectionBackgroundColor(selectionBackgroundColor: string): UiSdlLightTheme;

  readonly sidePanelSubtitleColor: string;
  withSidePanelSubtitleColor(sidePanelSubtitleColor: string): UiSdlLightTheme;

  readonly stringIconColor: string;
  withStringIconColor(stringIconColor: string): UiSdlLightTheme;

  readonly stringIconTextColor: string;
  withStringIconTextColor(stringIconTextColor: string): UiSdlLightTheme;

  readonly subMenuItemBackgroundActiveColor: string;
  withSubMenuItemBackgroundActiveColor(subMenuItemBackgroundActiveColor: string): UiSdlLightTheme;

  readonly successColor: string;
  withSuccessColor(successColor: string): UiSdlLightTheme;

  readonly timeGraphBackgroundColor: string;
  withTimeGraphBackgroundColor(timeGraphBackgroundColor: string): UiSdlLightTheme;

  readonly timeGraphDefaultEntityColor: string;
  withTimeGraphDefaultEntityColor(timeGraphDefaultEntityColor: string): UiSdlLightTheme;

  readonly timeGraphDefaultLabelColor: string;
  withTimeGraphDefaultLabelColor(timeGraphDefaultLabelColor: string): UiSdlLightTheme;

  readonly timeGraphHighlightColor: string;
  withTimeGraphHighlightColor(timeGraphHighlightColor: string): UiSdlLightTheme;

  readonly timeGraphScaleBackgroundColor: string;
  withTimeGraphScaleBackgroundColor(timeGraphScaleBackgroundColor: string): UiSdlLightTheme;

  readonly timeGraphScaleBorderColor: string;
  withTimeGraphScaleBorderColor(timeGraphScaleBorderColor: string): UiSdlLightTheme;

  readonly timeGraphScaleFontColor: string;
  withTimeGraphScaleFontColor(timeGraphScaleFontColor: string): UiSdlLightTheme;

  readonly timeGraphScaleFontSize: string;
  withTimeGraphScaleFontSize(timeGraphScaleFontSize: string): UiSdlLightTheme;

  readonly timeGraphTooltipBackgroundColor: string;
  withTimeGraphTooltipBackgroundColor(timeGraphTooltipBackgroundColor: string): UiSdlLightTheme;

  readonly timeGraphTooltipBodyColor: string;
  withTimeGraphTooltipBodyColor(timeGraphTooltipBodyColor: string): UiSdlLightTheme;

  readonly timeGraphTooltipSubtitleColor: string;
  withTimeGraphTooltipSubtitleColor(timeGraphTooltipSubtitleColor: string): UiSdlLightTheme;

  readonly timeGraphTooltipTitleColor: string;
  withTimeGraphTooltipTitleColor(timeGraphTooltipTitleColor: string): UiSdlLightTheme;

  readonly timeSeriesIconColor: string;
  withTimeSeriesIconColor(timeSeriesIconColor: string): UiSdlLightTheme;

  readonly timeSeriesIconTextColor: string;
  withTimeSeriesIconTextColor(timeSeriesIconTextColor: string): UiSdlLightTheme;

  readonly toggleSwitchBackgroundColor: string;
  withToggleSwitchBackgroundColor(toggleSwitchBackgroundColor: string): UiSdlLightTheme;

  readonly toggleSwitchBorderColor: string;
  withToggleSwitchBorderColor(toggleSwitchBorderColor: string): UiSdlLightTheme;

  readonly toggleSwitchCheckedBorderColor: string;
  withToggleSwitchCheckedBorderColor(toggleSwitchCheckedBorderColor: string): UiSdlLightTheme;

  readonly toggleSwitchCheckedColor: string;
  withToggleSwitchCheckedColor(toggleSwitchCheckedColor: string): UiSdlLightTheme;

  readonly toggleSwitchCheckedDisabledBackgroundColor: string;
  withToggleSwitchCheckedDisabledBackgroundColor(toggleSwitchCheckedDisabledBackgroundColor: string): UiSdlLightTheme;

  readonly toggleSwitchCheckedDisabledBorderColor: string;
  withToggleSwitchCheckedDisabledBorderColor(toggleSwitchCheckedDisabledBorderColor: string): UiSdlLightTheme;

  readonly toggleSwitchCheckedDisabledColor: string;
  withToggleSwitchCheckedDisabledColor(toggleSwitchCheckedDisabledColor: string): UiSdlLightTheme;

  readonly toggleSwitchColor: string;
  withToggleSwitchColor(toggleSwitchColor: string): UiSdlLightTheme;

  readonly toggleSwitchDisabledBackgroundColor: string;
  withToggleSwitchDisabledBackgroundColor(toggleSwitchDisabledBackgroundColor: string): UiSdlLightTheme;

  readonly toggleSwitchDisabledBorderColor: string;
  withToggleSwitchDisabledBorderColor(toggleSwitchDisabledBorderColor: string): UiSdlLightTheme;

  readonly toggleSwitchDisabledColor: string;
  withToggleSwitchDisabledColor(toggleSwitchDisabledColor: string): UiSdlLightTheme;

  readonly tooltipBackgroundColor: string;
  withTooltipBackgroundColor(tooltipBackgroundColor: string): UiSdlLightTheme;

  readonly warningColor: string;
  withWarningColor(warningColor: string): UiSdlLightTheme;

  readonly zebraStripeBackgroundColor: string;
  withZebraStripeBackgroundColor(zebraStripeBackgroundColor: string): UiSdlLightTheme;
}

