// TypeScript definitions for the C3 type UiSdlDarkTheme

/**
 * UiSdlDarkTheme type mixes UiSdlThemeTemplate and embeds the C3DefaultTheme theme values.
 * Users can remix this type in their package and override/add variables.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlDarkTheme
 */
declare interface IUiSdlDarkTheme {

  /**
   * Various system fields.
   */
  meta?: IMeta | null;

  /**
   * The unique and required id of this instance.
   */
  id: string;

  /**
   * Whether this is a C3 type theme template.
   */
  isC3?: boolean;

  /**
   * Whether this is a Light or a Dark Theme.
   */
  themeCategory: string;

  /**
   * accentColor
   */
  accentColor: string;

  /**
   * accentFontColor
   */
  accentFontColor: string;

  /**
   * accentVariantColor
   */
  accentVariantColor: string;

  /**
   * avatarBadgeBlueBackgroundColor
   */
  avatarBadgeBlueBackgroundColor: string;

  /**
   * avatarBadgeBlueColor
   */
  avatarBadgeBlueColor: string;

  /**
   * avatarBadgeChocoBackgroundColor
   */
  avatarBadgeChocoBackgroundColor: string;

  /**
   * avatarBadgeChocoColor
   */
  avatarBadgeChocoColor: string;

  /**
   * avatarBadgeCyanBackgroundColor
   */
  avatarBadgeCyanBackgroundColor: string;

  /**
   * avatarBadgeCyanColor
   */
  avatarBadgeCyanColor: string;

  /**
   * avatarBadgeForestBackgroundColor
   */
  avatarBadgeForestBackgroundColor: string;

  /**
   * avatarBadgeForestColor
   */
  avatarBadgeForestColor: string;

  /**
   * avatarBadgeGreenBackgroundColor
   */
  avatarBadgeGreenBackgroundColor: string;

  /**
   * avatarBadgeGreenColor
   */
  avatarBadgeGreenColor: string;

  /**
   * avatarBadgeLimeBackgroundColor
   */
  avatarBadgeLimeBackgroundColor: string;

  /**
   * avatarBadgeLimeColor
   */
  avatarBadgeLimeColor: string;

  /**
   * avatarBadgeOliveBackgroundColor
   */
  avatarBadgeOliveBackgroundColor: string;

  /**
   * avatarBadgeOliveColor
   */
  avatarBadgeOliveColor: string;

  /**
   * avatarBadgeOrangeBackgroundColor
   */
  avatarBadgeOrangeBackgroundColor: string;

  /**
   * avatarBadgeOrangeColor
   */
  avatarBadgeOrangeColor: string;

  /**
   * avatarBadgePlumBackgroundColor
   */
  avatarBadgePlumBackgroundColor: string;

  /**
   * avatarBadgePlumColor
   */
  avatarBadgePlumColor: string;

  /**
   * avatarBadgePurpleBackgroundColor
   */
  avatarBadgePurpleBackgroundColor: string;

  /**
   * avatarBadgePurpleColor
   */
  avatarBadgePurpleColor: string;

  /**
   * avatarBadgeRedBackgroundColor
   */
  avatarBadgeRedBackgroundColor: string;

  /**
   * avatarBadgeRedColor
   */
  avatarBadgeRedColor: string;

  /**
   * avatarBadgeSlateBackgroundColor
   */
  avatarBadgeSlateBackgroundColor: string;

  /**
   * avatarBadgeSlateColor
   */
  avatarBadgeSlateColor: string;

  /**
   * avatarBadgeYellowBackgroundColor
   */
  avatarBadgeYellowBackgroundColor: string;

  /**
   * avatarBadgeYellowColor
   */
  avatarBadgeYellowColor: string;

  /**
   * booleanIconColor
   */
  booleanIconColor: string;

  /**
   * booleanIconTextColor
   */
  booleanIconTextColor: string;

  /**
   * borderColor
   */
  borderColor: string;

  /**
   * boxShadow01
   */
  boxShadow01: string;

  /**
   * boxShadow02
   */
  boxShadow02: string;

  /**
   * boxShadow03
   */
  boxShadow03: string;

  /**
   * boxShadow04
   */
  boxShadow04: string;

  /**
   * boxShadow05
   */
  boxShadow05: string;

  /**
   * boxShadowCardParent
   */
  boxShadowCardParent: string;

  /**
   * boxShadowMenu
   */
  boxShadowMenu: string;

  /**
   * boxZoomIconPath
   */
  boxZoomIconPath: string;

  /**
   * boxZoomIconUrl
   */
  boxZoomIconUrl: string;

  /**
   * boxZoomIconColor
   */
  boxZoomIconColor: string;

  /**
   * brightnessActionHover
   */
  brightnessActionHover: string;

  /**
   * brightnessActionHoverInverse
   */
  brightnessActionHoverInverse: string;

  /**
   * brightnessActionPressed
   */
  brightnessActionPressed: string;

  /**
   * brightnessActionPressedInverse
   */
  brightnessActionPressedInverse: string;

  /**
   * buttonControlBorderColor
   */
  buttonControlBorderColor: string;

  /**
   * buttonControlFontColor
   */
  buttonControlFontColor: string;

  /**
   * buttonControlHoverBackgroundColor
   */
  buttonControlHoverBackgroundColor: string;

  /**
   * buttonControlSelectedBackgroundColor
   */
  buttonControlSelectedBackgroundColor: string;

  /**
   * buttonControlSelectedDisabledBackgroundColor
   */
  buttonControlSelectedDisabledBackgroundColor: string;

  /**
   * buttonControlSelectedFontColor
   */
  buttonControlSelectedFontColor: string;

  /**
   * buttonControlSelectedHoverBackgroundColor
   */
  buttonControlSelectedHoverBackgroundColor: string;

  /**
   * buttonDangerPrimaryActiveBackgroundColor
   */
  buttonDangerPrimaryActiveBackgroundColor: string;

  /**
   * buttonDangerPrimaryHoverBackgroundColor
   */
  buttonDangerPrimaryHoverBackgroundColor: string;

  /**
   * buttonDangerSecondaryActiveBackgroundColor
   */
  buttonDangerSecondaryActiveBackgroundColor: string;

  /**
   * buttonDangerSecondaryHoverBackgroundColor
   */
  buttonDangerSecondaryHoverBackgroundColor: string;

  /**
   * buttonDangerTertiaryActiveBackgroundColor
   */
  buttonDangerTertiaryActiveBackgroundColor: string;

  /**
   * buttonDangerTertiaryHoverBackgroundColor
   */
  buttonDangerTertiaryHoverBackgroundColor: string;

  /**
   * buttonIconActiveBackgroundColor
   */
  buttonIconActiveBackgroundColor: string;

  /**
   * buttonIconBackgroundColor
   */
  buttonIconBackgroundColor: string;

  /**
   * buttonIconHoverBackgroundColor
   */
  buttonIconHoverBackgroundColor: string;

  /**
   * buttonIconSelectedActiveBackgroundColor
   */
  buttonIconSelectedActiveBackgroundColor: string;

  /**
   * buttonIconSelectedBackgroundColor
   */
  buttonIconSelectedBackgroundColor: string;

  /**
   * buttonIconSelectedForegroundColor
   */
  buttonIconSelectedForegroundColor: string;

  /**
   * buttonIconSelectedHoverBackgroundColor
   */
  buttonIconSelectedHoverBackgroundColor: string;

  /**
   * buttonPrimaryActiveBackgroundColor
   */
  buttonPrimaryActiveBackgroundColor: string;

  /**
   * buttonPrimaryHoverBackgroundColor
   */
  buttonPrimaryHoverBackgroundColor: string;

  /**
   * buttonSecondaryActiveBackgroundColor
   */
  buttonSecondaryActiveBackgroundColor: string;

  /**
   * buttonSecondaryHoverBackgroundColor
   */
  buttonSecondaryHoverBackgroundColor: string;

  /**
   * buttonTertiaryActiveBackgroundColor
   */
  buttonTertiaryActiveBackgroundColor: string;

  /**
   * buttonTertiaryHoverBackgroundColor
   */
  buttonTertiaryHoverBackgroundColor: string;

  /**
   * canvasBackgroundDotColor
   */
  canvasBackgroundDotColor: string;

  /**
   * canvasCyanNodeColor
   */
  canvasCyanNodeColor: string;

  /**
   * canvasForestNodeColor
   */
  canvasForestNodeColor: string;

  /**
   * canvasNodeBorderColor
   */
  canvasNodeBorderColor: string;

  /**
   * canvasNodeErrorBackgroundColor
   */
  canvasNodeErrorBackgroundColor: string;

  /**
   * canvasNodeWarningBackgroundColor
   */
  canvasNodeWarningBackgroundColor: string;

  /**
   * canvasOrangeIconColor
   */
  canvasOrangeIconColor: string;

  /**
   * canvasOrangeNodeColor
   */
  canvasOrangeNodeColor: string;

  /**
   * canvasPendingNodeBackgroundColor
   */
  canvasPendingNodeBackgroundColor: string;

  /**
   * canvasPendingNodeForegroundColor
   */
  canvasPendingNodeForegroundColor: string;

  /**
   * canvasPlumNodeColor
   */
  canvasPlumNodeColor: string;

  /**
   * canvasPurpleIconColor
   */
  canvasPurpleIconColor: string;

  /**
   * canvasPurpleNodeColor
   */
  canvasPurpleNodeColor: string;

  /**
   * canvasSlateIconColor
   */
  canvasSlateIconColor: string;

  /**
   * canvasSlateNodeColor
   */
  canvasSlateNodeColor: string;

  /**
   * cardElevation00BackgroundColor
   */
  cardElevation00BackgroundColor: string;

  /**
   * cardElevation01BackgroundColor
   */
  cardElevation01BackgroundColor: string;

  /**
   * cardElevation02BackgroundColor
   */
  cardElevation02BackgroundColor: string;

  /**
   * cardElevation03BackgroundColor
   */
  cardElevation03BackgroundColor: string;

  /**
   * cardElevation04BackgroundColor
   */
  cardElevation04BackgroundColor: string;

  /**
   * cardElevation06BackgroundColor
   */
  cardElevation06BackgroundColor: string;

  /**
   * cardElevation08BackgroundColor
   */
  cardElevation08BackgroundColor: string;

  /**
   * cardElevation12BackgroundColor
   */
  cardElevation12BackgroundColor: string;

  /**
   * cardElevation16BackgroundColor
   */
  cardElevation16BackgroundColor: string;

  /**
   * cardElevation24BackgroundColor
   */
  cardElevation24BackgroundColor: string;

  /**
   * chartSeriesTooltipNameFontColor
   */
  chartSeriesTooltipNameFontColor: string;

  /**
   * chartSeriesTooltipTitleFontColor
   */
  chartSeriesTooltipTitleFontColor: string;

  /**
   * chartSeriesTooltipValueFontColor
   */
  chartSeriesTooltipValueFontColor: string;

  /**
   * checkboxBackgroundColor
   */
  checkboxBackgroundColor: string;

  /**
   * checkboxColor
   */
  checkboxColor: string;

  /**
   * checkboxHoverBackgroundColor
   */
  checkboxHoverBackgroundColor: string;

  /**
   * checkboxHoverColor
   */
  checkboxHoverColor: string;

  /**
   * checkboxSelectedDisabledColor
   */
  checkboxSelectedDisabledColor: string;

  /**
   * checkboxSelectedHoverColor
   */
  checkboxSelectedHoverColor: string;

  /**
   * colorBgAccent
   */
  colorBgAccent: string;

  /**
   * colorBgAccentWeak
   */
  colorBgAccentWeak: string;

  /**
   * colorBgActionHover
   */
  colorBgActionHover: string;

  /**
   * colorBgActionHoverInverse
   */
  colorBgActionHoverInverse: string;

  /**
   * colorBgActionPressed
   */
  colorBgActionPressed: string;

  /**
   * colorBgActionPressedInverse
   */
  colorBgActionPressedInverse: string;

  /**
   * colorBgAvatarDefault
   */
  colorBgAvatarDefault: string;

  /**
   * colorBgBtnAccentFill
   */
  colorBgBtnAccentFill: string;

  /**
   * colorBgBtnDangerFill
   */
  colorBgBtnDangerFill: string;

  /**
   * colorBgBtnPrimaryFill
   */
  colorBgBtnPrimaryFill: string;

  /**
   * colorBgCardChildPrimary
   */
  colorBgCardChildPrimary: string;

  /**
   * colorBgCardChildSecondary
   */
  colorBgCardChildSecondary: string;

  /**
   * colorBgCardParent
   */
  colorBgCardParent: string;

  /**
   * colorBgContainer01
   */
  colorBgContainer01: string;

  /**
   * colorBgContainer02
   */
  colorBgContainer02: string;

  /**
   * colorBgDanger
   */
  colorBgDanger: string;

  /**
   * colorBgDangerWeak
   */
  colorBgDangerWeak: string;

  /**
   * colorBgDataGridHover
   */
  colorBgDataGridHover: string;

  /**
   * colorBgDataGridZebraStripe
   */
  colorBgDataGridZebraStripe: string;

  /**
   * colorBgDataZoomSliderFilter
   */
  colorBgDataZoomSliderFilter: string;

  /**
   * colorBgDataZoomSparkline
   */
  colorBgDataZoomSparkline: string;

  /**
   * colorBgDecoOrangeStrong
   */
  colorBgDecoOrangeStrong: string;

  /**
   * colorBgDecoOrange
   */
  colorBgDecoOrange: string;

  /**
   * colorBgDecoOrangeWeak
   */
  colorBgDecoOrangeWeak: string;

  /**
   * colorBgDecoOliveStrong
   */
  colorBgDecoOliveStrong: string;

  /**
   * colorBgDecoOlive
   */
  colorBgDecoOlive: string;

  /**
   * colorBgDecoOliveWeak
   */
  colorBgDecoOliveWeak: string;

  /**
   * colorBgDecoLimeStrong
   */
  colorBgDecoLimeStrong: string;

  /**
   * colorBgDecoLime
   */
  colorBgDecoLime: string;

  /**
   * colorBgDecoLimeWeak
   */
  colorBgDecoLimeWeak: string;

  /**
   * colorBgDecoForestStrong
   */
  colorBgDecoForestStrong: string;

  /**
   * colorBgDecoForest
   */
  colorBgDecoForest: string;

  /**
   * colorBgDecoForestWeak
   */
  colorBgDecoForestWeak: string;

  /**
   * colorBgDecoCyanStrong
   */
  colorBgDecoCyanStrong: string;

  /**
   * colorBgDecoCyan
   */
  colorBgDecoCyan: string;

  /**
   * colorBgDecoCyanWeak
   */
  colorBgDecoCyanWeak: string;

  /**
   * colorBgDecoSlateStrong
   */
  colorBgDecoSlateStrong: string;

  /**
   * colorBgDecoSlate
   */
  colorBgDecoSlate: string;

  /**
   * colorBgDecoSlateWeak
   */
  colorBgDecoSlateWeak: string;

  /**
   * colorBgDecoPurpleStrong
   */
  colorBgDecoPurpleStrong: string;

  /**
   * colorBgDecoPurple
   */
  colorBgDecoPurple: string;

  /**
   * colorBgDecoPurpleWeak
   */
  colorBgDecoPurpleWeak: string;

  /**
   * colorBgDecoPlumStrong
   */
  colorBgDecoPlumStrong: string;

  /**
   * colorBgDecoPlum
   */
  colorBgDecoPlum: string;

  /**
   * colorBgDecoPlumWeak
   */
  colorBgDecoPlumWeak: string;

  /**
   * colorBgDecoChocoStrong
   */
  colorBgDecoChocoStrong: string;

  /**
   * colorBgDecoChoco
   */
  colorBgDecoChoco: string;

  /**
   * colorBgDecoChocoWeak
   */
  colorBgDecoChocoWeak: string;

  /**
   * colorFgInputPlaceholder
   */
  colorFgInputPlaceholder: string;

  /**
   * colorBorderDataZoomSparkline
   */
  colorBorderDataZoomSparkline: string;

  /**
   * colorBgInlineNotificationError
   */
  colorBgInlineNotificationError: string;

  /**
   * colorBgInlineNotificationSuccess
   */
  colorBgInlineNotificationSuccess: string;

  /**
   * colorBgInlineNotificationWarning
   */
  colorBgInlineNotificationWarning: string;

  /**
   * colorBgInputReadonly
   */
  colorBgInputReadonly: string;

  /**
   * colorBgMenu
   */
  colorBgMenu: string;

  /**
   * colorBgMenuHoverUnselected
   */
  colorBgMenuHoverUnselected: string;

  /**
   * colorBgMenuItemSelected
   */
  colorBgMenuItemSelected: string;

  /**
   * colorBgPage
   */
  colorBgPage: string;

  /**
   * colorBgPrimary
   */
  colorBgPrimary: string;

  /**
   * colorBgPrimaryInverse
   */
  colorBgPrimaryInverse: string;

  /**
   * colorBgContentFrame
   */
  colorBgContentFrame: string;

  /**
   * colorBgCoreAccentStrong
   */
  colorBgCoreAccentStrong: string;

  /**
   * colorBgCoreAccent
   */
  colorBgCoreAccent: string;

  /**
   * colorBgCoreAccentWeak
   */
  colorBgCoreAccentWeak: string;

  /**
   * colorBgCoreDangerStrong
   */
  colorBgCoreDangerStrong: string;

  /**
   * colorBgCoreDanger
   */
  colorBgCoreDanger: string;

  /**
   * colorBgCoreDangerWeak
   */
  colorBgCoreDangerWeak: string;

  /**
   * colorBgCoreSuccessStrong
   */
  colorBgCoreSuccessStrong: string;

  /**
   * colorBgCoreSuccess
   */
  colorBgCoreSuccess: string;

  /**
   * colorBgCoreSuccessWeak
   */
  colorBgCoreSuccessWeak: string;

  /**
   * colorBgCoreWarningStrong
   */
  colorBgCoreWarningStrong: string;

  /**
   * colorBgCoreWarning
   */
  colorBgCoreWarning: string;

  /**
   * colorBgCoreWarningWeak
   */
  colorBgCoreWarningWeak: string;

  /**
   * colorBgSuccessWeak
   */
  colorBgSuccessWeak: string;

  /**
   * colorBgSideNavPanel
   */
  colorBgSideNavPanel: string;

  /**
   * colorBgSecondary
   */
  colorBgSecondary: string;

  /**
   * colorBgSecondaryInverse
   */
  colorBgSecondaryInverse: string;

  /**
   * colorBgSegBtnSelected
   */
  colorBgSegBtnSelected: string;

  /**
   * colorBgSelected
   */
  colorBgSelected: string;

  /**
   * colorBgSuccess
   */
  colorBgSuccess: string;

  /**
   * colorBgTertiary
   */
  colorBgTertiary: string;

  /**
   * colorBgTertiaryInverse
   */
  colorBgTertiaryInverse: string;

  /**
   * colorBgTickMark
   */
  colorBgTickMark: string;

  /**
   * colorBgTrack
   */
  colorBgTrack: string;

  /**
   * colorBgWarning
   */
  colorBgWarning: string;

  /**
   * colorBgWarningWeak
   */
  colorBgWarningWeak: string;

  /**
   * colorBorder
   */
  colorBorder: string;

  /**
   * colorBorderAccent
   */
  colorBorderAccent: string;

  /**
   * colorBorderBtnAccentOutline
   */
  colorBorderBtnAccentOutline: string;

  /**
   * colorBorderBtnDangerOutline
   */
  colorBorderBtnDangerOutline: string;

  /**
   * colorBorderBtnPrimaryOutline
   */
  colorBorderBtnPrimaryOutline: string;

  /**
   * colorBorderCardChildPrimary
   */
  colorBorderCardChildPrimary: string;

  /**
   * colorBorderCardChildSecondary
   */
  colorBorderCardChildSecondary: string;

  /**
   * colorBorderCardParent
   */
  colorBorderCardParent: string;

  /**
   * colorBorderDanger
   */
  colorBorderDanger: string;

  /**
   * colorBorderInlineNotificationError
   */
  colorBorderInlineNotificationError: string;

  /**
   * colorBorderInlineNotificationSuccess
   */
  colorBorderInlineNotificationSuccess: string;

  /**
   * colorBorderInlineNotificationWarning
   */
  colorBorderInlineNotificationWarning: string;

  /**
   * colorBorderMenu
   */
  colorBorderMenu: string;

  /**
   * colorBorderReadonly
   */
  colorBorderReadonly: string;

  /**
   * colorBorderSegBtn
   */
  colorBorderSegBtn: string;

  /**
   * colorBorderStrong
   */
  colorBorderStrong: string;

  /**
   * colorBorderSuccess
   */
  colorBorderSuccess: string;

  /**
   * colorBorderWarning
   */
  colorBorderWarning: string;

  /**
   * colorBorderWeak
   */
  colorBorderWeak: string;

  /**
   * colorDivider
   */
  colorDivider: string;

  /**
   * colorDividerStrong
   */
  colorDividerStrong: string;

  /**
   * colorDividerWeak
   */
  colorDividerWeak: string;

  /**
   * colorBgCollapsibleNav
   */
  colorBgCollapsibleNav: string;

  /**
   * colorBgTintTimeBarOverlay
   */
  colorBgTintTimeBarOverlay: string;

  /**
   * colorBgSankeyLabel
   */
  colorBgSankeyLabel: string;

  /**
   * colorBgSideNav
   */
  colorBgSideNav: string;

  /**
   * colorBgSideNavItemHover
   */
  colorBgSideNavItemHover: string;

  /**
   * colorBgSideItemHover
   */
  colorBgSideItemHover: string;

  /**
   * colorFgSideNavSelected
   */
  colorFgSideNavSelected: string;

  /**
   * colorFgSideNavUnselected
   */
  colorFgSideNavUnselected: string;

  /**
   * colorBorderSideNavItemIndicator
   */
  colorBorderSideNavItemIndicator: string;

  /**
   * colorBorderSideNavItemDivider
   */
  colorBorderSideNavItemDivider: string;

  /**
   * colorFgAccent
   */
  colorFgAccent: string;

  /**
   * colorFgAccentWeak
   */
  colorFgAccentWeak: string;

  /**
   * colorFgAccentStrong
   */
  colorFgAccentStrong: string;

  /**
   * colorFgBtnAccent
   */
  colorFgBtnAccent: string;

  /**
   * colorFgBtnDanger
   */
  colorFgBtnDanger: string;

  /**
   * colorFgBtnPrimary
   */
  colorFgBtnPrimary: string;

  /**
   * colorFgDanger
   */
  colorFgDanger: string;

  /**
   * colorFgDangerStrong
   */
  colorFgDangerStrong: string;

  /**
   * colorFgDangerWeak
   */
  colorFgDangerWeak: string;

  /**
   * colorFgDecoOrangeStrong
   */
  colorFgDecoOrangeStrong: string;

  /**
   * colorFgDecoOrange
   */
  colorFgDecoOrange: string;

  /**
   * colorFgDecoOrangeWeak
   */
  colorFgDecoOrangeWeak: string;

  /**
   * colorFgDecoOliveStrong
   */
  colorFgDecoOliveStrong: string;

  /**
   * colorFgDecoOlive
   */
  colorFgDecoOlive: string;

  /**
   * colorFgDecoOliveWeak
   */
  colorFgDecoOliveWeak: string;

  /**
   * colorFgDecoLimeStrong
   */
  colorFgDecoLimeStrong: string;

  /**
   * colorFgDecoLime
   */
  colorFgDecoLime: string;

  /**
   * colorFgDecoLimeWeak
   */
  colorFgDecoLimeWeak: string;

  /**
   * colorFgDecoForestStrong
   */
  colorFgDecoForestStrong: string;

  /**
   * colorFgDecoForest
   */
  colorFgDecoForest: string;

  /**
   * colorFgDecoForestWeak
   */
  colorFgDecoForestWeak: string;

  /**
   * colorFgDecoCyanStrong
   */
  colorFgDecoCyanStrong: string;

  /**
   * colorFgDecoCyan
   */
  colorFgDecoCyan: string;

  /**
   * colorFgDecoCyanWeak
   */
  colorFgDecoCyanWeak: string;

  /**
   * colorFgDecoSlateStrong
   */
  colorFgDecoSlateStrong: string;

  /**
   * colorFgDecoSlate
   */
  colorFgDecoSlate: string;

  /**
   * colorFgDecoSlateWeak
   */
  colorFgDecoSlateWeak: string;

  /**
   * colorFgDecoPurpleStrong
   */
  colorFgDecoPurpleStrong: string;

  /**
   * colorFgDecoPurple
   */
  colorFgDecoPurple: string;

  /**
   * colorFgDecoPurpleWeak
   */
  colorFgDecoPurpleWeak: string;

  /**
   * colorFgDecoPlumStrong
   */
  colorFgDecoPlumStrong: string;

  /**
   * colorFgDecoPlum
   */
  colorFgDecoPlum: string;

  /**
   * colorFgDecoPlumWeak
   */
  colorFgDecoPlumWeak: string;

  /**
   * colorFgDecoChocoStrong
   */
  colorFgDecoChocoStrong: string;

  /**
   * colorFgDecoChoco
   */
  colorFgDecoChoco: string;

  /**
   * colorFgDecoChocoWeak
   */
  colorFgDecoChocoWeak: string;

  /**
   * colorFgMenuItemSelected
   */
  colorFgMenuItemSelected: string;

  /**
   * colorFgMenuItemSelectedIndicator
   */
  colorFgMenuItemSelectedIndicator: string;

  /**
   * colorFgMenuItemUnselected
   */
  colorFgMenuItemUnselected: string;

  /**
   * colorFgPrimary
   */
  colorFgPrimary: string;

  /**
   * colorFgPrimaryInverse
   */
  colorFgPrimaryInverse: string;

  /**
   * colorFgReadonly
   */
  colorFgReadonly: string;

  /**
   * colorFgSecondary
   */
  colorFgSecondary: string;

  /**
   * colorFgSecondaryInverse
   */
  colorFgSecondaryInverse: string;

  /**
   * colorFgSegBtn
   */
  colorFgSegBtn: string;

  /**
   * colorFgSegBtnSelected
   */
  colorFgSegBtnSelected: string;

  /**
   * colorFgSuccess
   */
  colorFgSuccess: string;

  /**
   * colorFgSuccessStrong
   */
  colorFgSuccessStrong: string;

  /**
   * colorFgSuccessWeak
   */
  colorFgSuccessWeak: string;

  /**
   * colorFgWarning
   */
  colorFgWarning: string;

  /**
   * colorFgWarningStrong
   */
  colorFgWarningStrong: string;

  /**
   * colorFgWarningWeak
   */
  colorFgWarningWeak: string;

  /**
   * colorFocus
   */
  colorFocus: string;

  /**
   * componentBackgroundColor
   */
  componentBackgroundColor: string;

  /**
   * componentBackgroundColorError
   */
  componentBackgroundColorError: string;

  /**
   * componentBackgroundColorSuccess
   */
  componentBackgroundColorSuccess: string;

  /**
   * componentBackgroundColorWarning
   */
  componentBackgroundColorWarning: string;

  /**
   * componentBorderColor
   */
  componentBorderColor: string;

  /**
   * componentDividerColor
   */
  componentDividerColor: string;

  /**
   * dangerColor
   */
  dangerColor: string;

  /**
   * dateIconColor
   */
  dateIconColor: string;

  /**
   * dateIconTextColor
   */
  dateIconTextColor: string;

  /**
   * dropdownDescriptionBackgroundColor
   */
  dropdownDescriptionBackgroundColor: string;

  /**
   * dropdownDescriptionColor
   */
  dropdownDescriptionColor: string;

  /**
   * dropdownMessageColor
   */
  dropdownMessageColor: string;

  /**
   * dropdownOptionDividerColor
   */
  dropdownOptionDividerColor: string;

  /**
   * dropdownSelectionColor
   */
  dropdownSelectionColor: string;

  /**
   * dynamicComponentLoaderBackgroundColor
   */
  dynamicComponentLoaderBackgroundColor: string;

  /**
   * expressionFocusedInputBackgroundColor
   */
  expressionFocusedInputBackgroundColor: string;

  /**
   * fontColor
   */
  fontColor: string;

  /**
   * formFieldBackgroundColor
   */
  formFieldBackgroundColor: string;

  /**
   * formFieldBackgroundColorDisabled
   */
  formFieldBackgroundColorDisabled: string;

  /**
   * formFieldBorderColor
   */
  formFieldBorderColor: string;

  /**
   * formFieldBorderColorDisabled
   */
  formFieldBorderColorDisabled: string;

  /**
   * formFieldColorDisabled
   */
  formFieldColorDisabled: string;

  /**
   * formFieldColorHint
   */
  formFieldColorHint: string;

  /**
   * formFieldErrorBorderColor
   */
  formFieldErrorBorderColor: string;

  /**
   * formFieldErrorHoverBorderColor
   */
  formFieldErrorHoverBorderColor: string;

  /**
   * formFieldHeaderColorDisabled
   */
  formFieldHeaderColorDisabled: string;

  /**
   * formFieldHoverBackgroundColor
   */
  formFieldHoverBackgroundColor: string;

  /**
   * formFieldHoverBorderColor
   */
  formFieldHoverBorderColor: string;

  /**
   * formFieldLabelErrorColor
   */
  formFieldLabelErrorColor: string;

  /**
   * formFieldLabelFocusColor
   */
  formFieldLabelFocusColor: string;

  /**
   * formFieldSetLinkHoverColor
   */
  formFieldSetLinkHoverColor: string;

  /**
   * formFieldVariantBorderColor
   */
  formFieldVariantBorderColor: string;

  /**
   * gaugeAxisBarColor
   */
  gaugeAxisBarColor: string;

  /**
   * gaugeFontColor
   */
  gaugeFontColor: string;

  /**
   * gaugeProgressBarDefaultColor
   */
  gaugeProgressBarDefaultColor: string;

  /**
   * gradientLinearCardParentLeft
   */
  gradientLinearCardParentLeft: string;

  /**
   * gradientLinearCardParentRight
   */
  gradientLinearCardParentRight: string;

  /**
   * gradientLinearCardChildLeft
   */
  gradientLinearCardChildLeft: string;

  /**
   * gradientLinearCardChildRight
   */
  gradientLinearCardChildRight: string;

  /**
   * gradientLinearNav
   */
  gradientLinearNav: string;

  /**
   * graphVisualizationClusterNodeFillColor
   */
  graphVisualizationClusterNodeFillColor: string;

  /**
   * graphVisualizationClusterNodeOutlineColor
   */
  graphVisualizationClusterNodeOutlineColor: string;

  /**
   * graphVisualizationGlyphFontColor
   */
  graphVisualizationGlyphFontColor: string;

  /**
   * graphVisualizationLegendBackgroundColor
   */
  graphVisualizationLegendBackgroundColor: string;

  /**
   * graphVisualizationLegendViewMoreButtonFontColor
   */
  graphVisualizationLegendViewMoreButtonFontColor: string;

  /**
   * graphVisualizationMapTheme
   */
  graphVisualizationMapTheme: string;

  /**
   * graphVisualizationMergedEdgeGlyphBackgroundColor
   */
  graphVisualizationMergedEdgeGlyphBackgroundColor: string;

  /**
   * graphVisualizationNodeDefaultDonutColor
   */
  graphVisualizationNodeDefaultDonutColor: string;

  /**
   * graphVisualizationNodeInfoGlyphBackgroundColor
   */
  graphVisualizationNodeInfoGlyphBackgroundColor: string;

  /**
   * graphVisualizationNodeInfoGlyphFontColor
   */
  graphVisualizationNodeInfoGlyphFontColor: string;

  /**
   * graphVisualizationPercentageDonutSegmentColor
   */
  graphVisualizationPercentageDonutSegmentColor: string;

  /**
   * graphVisualizationTimeBarBackgroundColor
   */
  graphVisualizationTimeBarBackgroundColor: string;

  /**
   * graphVisualizationTimeBarColor
   */
  graphVisualizationTimeBarColor: string;

  /**
   * graphVisualizationTimeBarHoverColor
   */
  graphVisualizationTimeBarHoverColor: string;

  /**
   * graphVisualizationTimeBarScaleHoverColor
   */
  graphVisualizationTimeBarScaleHoverColor: string;

  /**
   * graphVisualizationTooltipBackgroundColor
   */
  graphVisualizationTooltipBackgroundColor: string;

  /**
   * graphVisualizationTooltipBodyColor
   */
  graphVisualizationTooltipBodyColor: string;

  /**
   * graphVisualizationTooltipSubtitleColor
   */
  graphVisualizationTooltipSubtitleColor: string;

  /**
   * graphVisualizationTooltipTitleColor
   */
  graphVisualizationTooltipTitleColor: string;

  /**
   * gridCellColorWheelBackgroundColor
   */
  gridCellColorWheelBackgroundColor: string;

  /**
   * gridHeaderFontColor
   */
  gridHeaderFontColor: string;

  /**
   * gridHoverBackgroundColor
   */
  gridHoverBackgroundColor: string;

  /**
   * gridMessageBackgroundColor
   */
  gridMessageBackgroundColor: string;

  /**
   * gridPagerLabelFontColor
   */
  gridPagerLabelFontColor: string;

  /**
   * gridPagerSizesFontColor
   */
  gridPagerSizesFontColor: string;

  /**
   * gridSelectedCellBackgroundColor
   */
  gridSelectedCellBackgroundColor: string;

  /**
   * gridSelectedCellBorderColor
   */
  gridSelectedCellBorderColor: string;

  /**
   * gridSelectedFontColor
   */
  gridSelectedFontColor: string;

  /**
   * gridSelectedHoverBackgroundColor
   */
  gridSelectedHoverBackgroundColor: string;

  /**
   * iconGroupColor
   */
  iconGroupColor: string;

  /**
   * indicatorBarBackgroundColor
   */
  indicatorBarBackgroundColor: string;

  /**
   * infoColor
   */
  infoColor: string;

  /**
   * invertedComponentBackgroundColor
   */
  invertedComponentBackgroundColor: string;

  /**
   * kanbanBoardBackgroundColumnTitle
   */
  kanbanBoardBackgroundColumnTitle: string;

  /**
   * kanbanBoardBackgroundItemSlot
   */
  kanbanBoardBackgroundItemSlot: string;

  /**
   * kanbanBoardBackgroundLayout
   */
  kanbanBoardBackgroundLayout: string;

  /**
   * kanbanBoardBorderTitle
   */
  kanbanBoardBorderTitle: string;

  /**
   * kanbanBoardButtonColor
   */
  kanbanBoardButtonColor: string;

  /**
   * kanbanBoardCardContentColor
   */
  kanbanBoardCardContentColor: string;

  /**
   * kanbanBoardCardHeadLineBlockColor
   */
  kanbanBoardCardHeadLineBlockColor: string;

  /**
   * kanbanBoardContentBackgroundColor
   */
  kanbanBoardContentBackgroundColor: string;

  /**
   * kanbanBoardTextBackgroundCollectionList
   */
  kanbanBoardTextBackgroundCollectionList: string;

  /**
   * kanbanBoardTitleColor
   */
  kanbanBoardTitleColor: string;

  /**
   * kendoAppSurfaceColor
   */
  kendoAppSurfaceColor?: string | null;

  /**
   * kendoOnAppSurfaceColor
   */
  kendoOnAppSurfaceColor?: string | null;

  /**
   * kendoSubtleColor
   */
  kendoSubtleColor?: string | null;

  /**
   * kendoSurfaceColor
   */
  kendoSurfaceColor?: string | null;

  /**
   * kendoSurfaceAltColor
   */
  kendoSurfaceAltColor?: string | null;

  /**
   * kendoBorderColor
   */
  kendoBorderColor?: string | null;

  /**
   * kendoBorderAltColor
   */
  kendoBorderAltColor?: string | null;

  /**
   * kendoBaseSubtleColor
   */
  kendoBaseSubtleColor?: string | null;

  /**
   * kendoBaseSubtleHoverColor
   */
  kendoBaseSubtleHoverColor?: string | null;

  /**
   * kendoBaseSubtleActiveColor
   */
  kendoBaseSubtleActiveColor?: string | null;

  /**
   * kendoBaseColor
   */
  kendoBaseColor?: string | null;

  /**
   * kendoBaseHoverColor
   */
  kendoBaseHoverColor?: string | null;

  /**
   * kendoBaseActiveColor
   */
  kendoBaseActiveColor?: string | null;

  /**
   * kendoBaseEmphasisColor
   */
  kendoBaseEmphasisColor?: string | null;

  /**
   * kendoBaseOnSubtleColor
   */
  kendoBaseOnSubtleColor?: string | null;

  /**
   * kendoOnBaseColor
   */
  kendoOnBaseColor?: string | null;

  /**
   * kendoBaseOnSurfaceColor
   */
  kendoBaseOnSurfaceColor?: string | null;

  /**
   * kendoElevation01
   */
  kendoElevation01?: string | null;

  /**
   * kendoElevation02
   */
  kendoElevation02?: string | null;

  /**
   * kendoElevation03
   */
  kendoElevation03?: string | null;

  /**
   * kendoElevation04
   */
  kendoElevation04?: string | null;

  /**
   * kendoElevation05
   */
  kendoElevation05?: string | null;

  /**
   * kendoElevation06
   */
  kendoElevation06?: string | null;

  /**
   * kendoElevation07
   */
  kendoElevation07?: string | null;

  /**
   * kendoElevation08
   */
  kendoElevation08?: string | null;

  /**
   * kendoElevation09
   */
  kendoElevation09?: string | null;

  /**
   * kendoPrimarySubtleColor
   */
  kendoPrimarySubtleColor?: string | null;

  /**
   * kendoPrimarySubtleHoverColor
   */
  kendoPrimarySubtleHoverColor?: string | null;

  /**
   * kendoPrimarySubtleActiveColor
   */
  kendoPrimarySubtleActiveColor?: string | null;

  /**
   * kendoPrimaryColor
   */
  kendoPrimaryColor?: string | null;

  /**
   * kendoPrimaryHoverColor
   */
  kendoPrimaryHoverColor?: string | null;

  /**
   * kendoPrimaryActiveColor
   */
  kendoPrimaryActiveColor?: string | null;

  /**
   * kendoPrimaryEmphasisColor
   */
  kendoPrimaryEmphasisColor?: string | null;

  /**
   * kendoPrimaryOnSubtleColor
   */
  kendoPrimaryOnSubtleColor?: string | null;

  /**
   * kendoOnPrimaryColor
   */
  kendoOnPrimaryColor?: string | null;

  /**
   * kendoPrimaryOnSurfaceColor
   */
  kendoPrimaryOnSurfaceColor?: string | null;

  /**
   * kendoSecondarySubtleColor
   */
  kendoSecondarySubtleColor?: string | null;

  /**
   * kendoSecondarySubtleHoverColor
   */
  kendoSecondarySubtleHoverColor?: string | null;

  /**
   * kendoSecondarySubtleActiveColor
   */
  kendoSecondarySubtleActiveColor?: string | null;

  /**
   * kendoSecondaryColor
   */
  kendoSecondaryColor?: string | null;

  /**
   * kendoSecondaryHoverColor
   */
  kendoSecondaryHoverColor?: string | null;

  /**
   * kendoSecondaryActiveColor
   */
  kendoSecondaryActiveColor?: string | null;

  /**
   * kendoSecondaryEmphasisColor
   */
  kendoSecondaryEmphasisColor?: string | null;

  /**
   * kendoSecondaryOnSubtleColor
   */
  kendoSecondaryOnSubtleColor?: string | null;

  /**
   * kendoOnSecondaryColor
   */
  kendoOnSecondaryColor?: string | null;

  /**
   * kendoSecondaryOnSurfaceColor
   */
  kendoSecondaryOnSurfaceColor?: string | null;

  /**
   * kendoTertiarySubtleColor
   */
  kendoTertiarySubtleColor?: string | null;

  /**
   * kendoTertiarySubtleHoverColor
   */
  kendoTertiarySubtleHoverColor?: string | null;

  /**
   * kendoTertiarySubtleActiveColor
   */
  kendoTertiarySubtleActiveColor?: string | null;

  /**
   * kendoTertiaryColor
   */
  kendoTertiaryColor?: string | null;

  /**
   * kendoTertiaryHoverColor
   */
  kendoTertiaryHoverColor?: string | null;

  /**
   * kendoTertiaryActiveColor
   */
  kendoTertiaryActiveColor?: string | null;

  /**
   * kendoTertiaryEmphasisColor
   */
  kendoTertiaryEmphasisColor?: string | null;

  /**
   * kendoTertiaryOnSubtleColor
   */
  kendoTertiaryOnSubtleColor?: string | null;

  /**
   * kendoOnTertiaryColor
   */
  kendoOnTertiaryColor?: string | null;

  /**
   * kendoTertiaryOnSurfaceColor
   */
  kendoTertiaryOnSurfaceColor?: string | null;

  /**
   * kendoInfoSubtleColor
   */
  kendoInfoSubtleColor?: string | null;

  /**
   * kendoInfoSubtleHoverColor
   */
  kendoInfoSubtleHoverColor?: string | null;

  /**
   * kendoInfoSubtleActiveColor
   */
  kendoInfoSubtleActiveColor?: string | null;

  /**
   * kendoInfoColor
   */
  kendoInfoColor?: string | null;

  /**
   * kendoInfoHoverColor
   */
  kendoInfoHoverColor?: string | null;

  /**
   * kendoInfoActiveColor
   */
  kendoInfoActiveColor?: string | null;

  /**
   * kendoInfoEmphasisColor
   */
  kendoInfoEmphasisColor?: string | null;

  /**
   * kendoInfoOnSubtleColor
   */
  kendoInfoOnSubtleColor?: string | null;

  /**
   * kendoOnInfoColor
   */
  kendoOnInfoColor?: string | null;

  /**
   * kendoInfoOnSurfaceColor
   */
  kendoInfoOnSurfaceColor?: string | null;

  /**
   * kendoSuccessSubtleColor
   */
  kendoSuccessSubtleColor?: string | null;

  /**
   * kendoSuccessSubtleHoverColor
   */
  kendoSuccessSubtleHoverColor?: string | null;

  /**
   * kendoSuccessSubtleActiveColor
   */
  kendoSuccessSubtleActiveColor?: string | null;

  /**
   * kendoSuccessColor
   */
  kendoSuccessColor?: string | null;

  /**
   * kendoSuccessHoverColor
   */
  kendoSuccessHoverColor?: string | null;

  /**
   * kendoSuccessActiveColor
   */
  kendoSuccessActiveColor?: string | null;

  /**
   * kendoSuccessEmphasisColor
   */
  kendoSuccessEmphasisColor?: string | null;

  /**
   * kendoSuccessOnSubtleColor
   */
  kendoSuccessOnSubtleColor?: string | null;

  /**
   * kendoOnSuccessColor
   */
  kendoOnSuccessColor?: string | null;

  /**
   * kendoSuccessOnSurfaceColor
   */
  kendoSuccessOnSurfaceColor?: string | null;

  /**
   * kendoWarningSubtleColor
   */
  kendoWarningSubtleColor?: string | null;

  /**
   * kendoWarningSubtleHoverColor
   */
  kendoWarningSubtleHoverColor?: string | null;

  /**
   * kendoWarningSubtleActiveColor
   */
  kendoWarningSubtleActiveColor?: string | null;

  /**
   * kendoWarningColor
   */
  kendoWarningColor?: string | null;

  /**
   * kendoWarningHoverColor
   */
  kendoWarningHoverColor?: string | null;

  /**
   * kendoWarningActiveColor
   */
  kendoWarningActiveColor?: string | null;

  /**
   * kendoWarningEmphasisColor
   */
  kendoWarningEmphasisColor?: string | null;

  /**
   * kendoWarningOnSubtleColor
   */
  kendoWarningOnSubtleColor?: string | null;

  /**
   * kendoOnWarningColor
   */
  kendoOnWarningColor?: string | null;

  /**
   * kendoWarningOnSurfaceColor
   */
  kendoWarningOnSurfaceColor?: string | null;

  /**
   * kendoErrorSubtleColor
   */
  kendoErrorSubtleColor?: string | null;

  /**
   * kendoErrorSubtleHoverColor
   */
  kendoErrorSubtleHoverColor?: string | null;

  /**
   * kendoErrorSubtleActiveColor
   */
  kendoErrorSubtleActiveColor?: string | null;

  /**
   * kendoErrorColor
   */
  kendoErrorColor?: string | null;

  /**
   * kendoErrorHoverColor
   */
  kendoErrorHoverColor?: string | null;

  /**
   * kendoErrorActiveColor
   */
  kendoErrorActiveColor?: string | null;

  /**
   * kendoErrorEmphasisColor
   */
  kendoErrorEmphasisColor?: string | null;

  /**
   * kendoErrorOnSubtleColor
   */
  kendoErrorOnSubtleColor?: string | null;

  /**
   * kendoOnErrorColor
   */
  kendoOnErrorColor?: string | null;

  /**
   * kendoErrorOnSurfaceColor
   */
  kendoErrorOnSurfaceColor?: string | null;

  /**
   * kendoLightSubtleColor
   */
  kendoLightSubtleColor?: string | null;

  /**
   * kendoLightSubtleHoverColor
   */
  kendoLightSubtleHoverColor?: string | null;

  /**
   * kendoLightSubtleActiveColor
   */
  kendoLightSubtleActiveColor?: string | null;

  /**
   * kendoLightColor
   */
  kendoLightColor?: string | null;

  /**
   * kendoLightHoverColor
   */
  kendoLightHoverColor?: string | null;

  /**
   * kendoLightActiveColor
   */
  kendoLightActiveColor?: string | null;

  /**
   * kendoLightEmphasisColor
   */
  kendoLightEmphasisColor?: string | null;

  /**
   * kendoLightOnSubtleColor
   */
  kendoLightOnSubtleColor?: string | null;

  /**
   * kendoOnLightColor
   */
  kendoOnLightColor?: string | null;

  /**
   * kendoLightOnSurfaceColor
   */
  kendoLightOnSurfaceColor?: string | null;

  /**
   * kendoDarkSubtleColor
   */
  kendoDarkSubtleColor?: string | null;

  /**
   * kendoDarkSubtleHoverColor
   */
  kendoDarkSubtleHoverColor?: string | null;

  /**
   * kendoDarkSubtleActiveColor
   */
  kendoDarkSubtleActiveColor?: string | null;

  /**
   * kendoDarkColor
   */
  kendoDarkColor?: string | null;

  /**
   * kendoDarkHoverColor
   */
  kendoDarkHoverColor?: string | null;

  /**
   * kendoDarkActiveColor
   */
  kendoDarkActiveColor?: string | null;

  /**
   * kendoDarkEmphasisColor
   */
  kendoDarkEmphasisColor?: string | null;

  /**
   * kendoDarkOnSubtleColor
   */
  kendoDarkOnSubtleColor?: string | null;

  /**
   * kendoOnDarkColor
   */
  kendoOnDarkColor?: string | null;

  /**
   * kendoDarkOnSurfaceColor
   */
  kendoDarkOnSurfaceColor?: string | null;

  /**
   * kendoInverseSubtleColor
   */
  kendoInverseSubtleColor?: string | null;

  /**
   * kendoInverseSubtleHoverColor
   */
  kendoInverseSubtleHoverColor?: string | null;

  /**
   * kendoInverseSubtleActiveColor
   */
  kendoInverseSubtleActiveColor?: string | null;

  /**
   * kendoInverseColor
   */
  kendoInverseColor?: string | null;

  /**
   * kendoInverseHoverColor
   */
  kendoInverseHoverColor?: string | null;

  /**
   * kendoInverseActiveColor
   */
  kendoInverseActiveColor?: string | null;

  /**
   * kendoInverseEmphasisColor
   */
  kendoInverseEmphasisColor?: string | null;

  /**
   * kendoInverseOnSubtleColor
   */
  kendoInverseOnSubtleColor?: string | null;

  /**
   * kendoOnInverseColor
   */
  kendoOnInverseColor?: string | null;

  /**
   * kendoInverseOnSurfaceColor
   */
  kendoInverseOnSurfaceColor?: string | null;

  /**
   * kendoSeriesAColor
   */
  kendoSeriesAColor?: string | null;

  /**
   * kendoSeriesABoldColor
   */
  kendoSeriesABoldColor?: string | null;

  /**
   * kendoSeriesABolderColor
   */
  kendoSeriesABolderColor?: string | null;

  /**
   * kendoSeriesASubtleColor
   */
  kendoSeriesASubtleColor?: string | null;

  /**
   * kendoSeriesASubtlerColor
   */
  kendoSeriesASubtlerColor?: string | null;

  /**
   * kendoSeriesBColor
   */
  kendoSeriesBColor?: string | null;

  /**
   * kendoSeriesBBoldColor
   */
  kendoSeriesBBoldColor?: string | null;

  /**
   * kendoSeriesBBolderColor
   */
  kendoSeriesBBolderColor?: string | null;

  /**
   * kendoSeriesBSubtleColor
   */
  kendoSeriesBSubtleColor?: string | null;

  /**
   * kendoSeriesBSubtlerColor
   */
  kendoSeriesBSubtlerColor?: string | null;

  /**
   * kendoSeriesCColor
   */
  kendoSeriesCColor?: string | null;

  /**
   * kendoSeriesCBoldColor
   */
  kendoSeriesCBoldColor?: string | null;

  /**
   * kendoSeriesCBolderColor
   */
  kendoSeriesCBolderColor?: string | null;

  /**
   * kendoSeriesCSubtleColor
   */
  kendoSeriesCSubtleColor?: string | null;

  /**
   * kendoSeriesCSubtlerColor
   */
  kendoSeriesCSubtlerColor?: string | null;

  /**
   * kendoSeriesDColor
   */
  kendoSeriesDColor?: string | null;

  /**
   * kendoSeriesDBoldColor
   */
  kendoSeriesDBoldColor?: string | null;

  /**
   * kendoSeriesDBolderColor
   */
  kendoSeriesDBolderColor?: string | null;

  /**
   * kendoSeriesDSubtleColor
   */
  kendoSeriesDSubtleColor?: string | null;

  /**
   * kendoSeriesDSubtlerColor
   */
  kendoSeriesDSubtlerColor?: string | null;

  /**
   * kendoSeriesEColor
   */
  kendoSeriesEColor?: string | null;

  /**
   * kendoSeriesEBoldColor
   */
  kendoSeriesEBoldColor?: string | null;

  /**
   * kendoSeriesEBolderColor
   */
  kendoSeriesEBolderColor?: string | null;

  /**
   * kendoSeriesESubtleColor
   */
  kendoSeriesESubtleColor?: string | null;

  /**
   * kendoSeriesESubtlerColor
   */
  kendoSeriesESubtlerColor?: string | null;

  /**
   * kendoSeriesFColor
   */
  kendoSeriesFColor?: string | null;

  /**
   * kendoSeriesFBoldColor
   */
  kendoSeriesFBoldColor?: string | null;

  /**
   * kendoSeriesFBolderColor
   */
  kendoSeriesFBolderColor?: string | null;

  /**
   * kendoSeriesFSubtleColor
   */
  kendoSeriesFSubtleColor?: string | null;

  /**
   * kendoSeriesFSubtlerColor
   */
  kendoSeriesFSubtlerColor?: string | null;

  /**
   * legendBackgroundColor
   */
  legendBackgroundColor: string;

  /**
   * legendNameFontColor
   */
  legendNameFontColor: string;

  /**
   * logoBlueBackgroundColor
   */
  logoBlueBackgroundColor: string;

  /**
   * logoChocoBackgroundColor
   */
  logoChocoBackgroundColor: string;

  /**
   * logoColor
   */
  logoColor: string;

  /**
   * logoCyanBackgroundColor
   */
  logoCyanBackgroundColor: string;

  /**
   * logoForestBackgroundColor
   */
  logoForestBackgroundColor: string;

  /**
   * logoIconUrl
   */
  logoIconUrl: string;

  /**
   * emptyStateIconUrl
   */
  emptyStateIconUrl: string;

  /**
   * logoLimeBackgroundColor
   */
  logoLimeBackgroundColor: string;

  /**
   * logoOliveBackgroundColor
   */
  logoOliveBackgroundColor: string;

  /**
   * logoOrangeBackgroundColor
   */
  logoOrangeBackgroundColor: string;

  /**
   * logoPlumBackgroundColor
   */
  logoPlumBackgroundColor: string;

  /**
   * logoPurpleBackgroundColor
   */
  logoPurpleBackgroundColor: string;

  /**
   * logoSlateBackgroundColor
   */
  logoSlateBackgroundColor: string;

  /**
   * mapMarkerClusterColor
   */
  mapMarkerClusterColor: string;

  /**
   * mapTooltipAdditionalFieldsDescriptionFontColor
   */
  mapTooltipAdditionalFieldsDescriptionFontColor: string;

  /**
   * mapTooltipAdditionalFieldsHeaderFontColor
   */
  mapTooltipAdditionalFieldsHeaderFontColor: string;

  /**
   * mapTooltipHeaderFontColor
   */
  mapTooltipHeaderFontColor: string;

  /**
   * mapTooltipSubHeaderFontColor
   */
  mapTooltipSubHeaderFontColor: string;

  /**
   * menuActiveColor
   */
  menuActiveColor: string;

  /**
   * menuBackgroundActiveColor
   */
  menuBackgroundActiveColor: string;

  /**
   * menuBackgroundColor
   */
  menuBackgroundColor: string;

  /**
   * menuDividerColor
   */
  menuDividerColor: string;

  /**
   * menuHoverColor
   */
  menuHoverColor: string;

  /**
   * menuItemActiveColor
   */
  menuItemActiveColor: string;

  /**
   * menuItemBackgroundColor
   */
  menuItemBackgroundColor: string;

  /**
   * menuItemBackgroundHoverColor
   */
  menuItemBackgroundHoverColor: string;

  /**
   * menuItemHoverColor
   */
  menuItemHoverColor: string;

  /**
   * menuPrimaryColor
   */
  menuPrimaryColor: string;

  /**
   * numberIconColor
   */
  numberIconColor: string;

  /**
   * numberIconTextColor
   */
  numberIconTextColor: string;

  /**
   * objectIconColor
   */
  objectIconColor: string;

  /**
   * objectIconTextColor
   */
  objectIconTextColor: string;

  /**
   * opacity00
   */
  opacity00: string;

  /**
   * opacity05
   */
  opacity05: string;

  /**
   * opacity10
   */
  opacity10: string;

  /**
   * opacity20
   */
  opacity20: string;

  /**
   * opacity30
   */
  opacity30: string;

  /**
   * opacity40
   */
  opacity40: string;

  /**
   * opacity50
   */
  opacity50: string;

  /**
   * opacity60
   */
  opacity60: string;

  /**
   * opacity70
   */
  opacity70: string;

  /**
   * opacity80
   */
  opacity80: string;

  /**
   * opacity90
   */
  opacity90: string;

  /**
   * opacity95
   */
  opacity95: string;

  /**
   * opacity100
   */
  opacity100: string;

  /**
   * opacityDisabled
   */
  opacityDisabled: string;

  /**
   * opacityLoading
   */
  opacityLoading: string;

  /**
   * otherIconColor
   */
  otherIconColor: string;

  /**
   * otherIconTextColor
   */
  otherIconTextColor: string;

  /**
   * pageBackgroundColor
   */
  pageBackgroundColor: string;

  /**
   * pageTitleBoxShadowColor
   */
  pageTitleBoxShadowColor: string;

  /**
   * referenceIconColor
   */
  referenceIconColor: string;

  /**
   * referenceIconTextColor
   */
  referenceIconTextColor: string;

  /**
   * resetZoomIconPath
   */
  resetZoomIconPath: string;

  /**
   * resetZoomIconUrl
   */
  resetZoomIconUrl: string;

  /**
   * resetZoomIconColor
   */
  resetZoomIconColor: string;

  /**
   * sankeyChartLabelBackgroundColor
   */
  sankeyChartLabelBackgroundColor: string;

  /**
   * scrollbarThumbColor
   */
  scrollbarThumbColor: string;

  /**
   * scrollbarTrackColor
   */
  scrollbarTrackColor: string;

  /**
   * secondaryFontColor
   */
  secondaryFontColor: string;

  /**
   * secondaryVariantFontColor
   */
  secondaryVariantFontColor: string;

  /**
   * selectFieldPillActiveBackgroundColor
   */
  selectFieldPillActiveBackgroundColor: string;

  /**
   * selectFieldPillHoverBackgroundColor
   */
  selectFieldPillHoverBackgroundColor: string;

  /**
   * selectFieldPillTextColor
   */
  selectFieldPillTextColor: string;

  /**
   * selectionBackgroundColor
   */
  selectionBackgroundColor: string;

  /**
   * sidePanelSubtitleColor
   */
  sidePanelSubtitleColor: string;

  /**
   * stringIconColor
   */
  stringIconColor: string;

  /**
   * stringIconTextColor
   */
  stringIconTextColor: string;

  /**
   * subMenuItemBackgroundActiveColor
   */
  subMenuItemBackgroundActiveColor: string;

  /**
   * successColor
   */
  successColor: string;

  /**
   * timeGraphBackgroundColor
   */
  timeGraphBackgroundColor: string;

  /**
   * timeGraphDefaultEntityColor
   */
  timeGraphDefaultEntityColor: string;

  /**
   * timeGraphDefaultLabelColor
   */
  timeGraphDefaultLabelColor: string;

  /**
   * timeGraphHighlightColor
   */
  timeGraphHighlightColor: string;

  /**
   * timeGraphScaleBackgroundColor
   */
  timeGraphScaleBackgroundColor: string;

  /**
   * timeGraphScaleBorderColor
   */
  timeGraphScaleBorderColor: string;

  /**
   * timeGraphScaleFontColor
   */
  timeGraphScaleFontColor: string;

  /**
   * timeGraphScaleFontSize
   */
  timeGraphScaleFontSize: string;

  /**
   * timeGraphTooltipBackgroundColor
   */
  timeGraphTooltipBackgroundColor: string;

  /**
   * timeGraphTooltipBodyColor
   */
  timeGraphTooltipBodyColor: string;

  /**
   * timeGraphTooltipSubtitleColor
   */
  timeGraphTooltipSubtitleColor: string;

  /**
   * timeGraphTooltipTitleColor
   */
  timeGraphTooltipTitleColor: string;

  /**
   * timeSeriesIconColor
   */
  timeSeriesIconColor: string;

  /**
   * timeSeriesIconTextColor
   */
  timeSeriesIconTextColor: string;

  /**
   * toggleSwitchBackgroundColor
   */
  toggleSwitchBackgroundColor: string;

  /**
   * toggleSwitchBorderColor
   */
  toggleSwitchBorderColor: string;

  /**
   * toggleSwitchCheckedBorderColor
   */
  toggleSwitchCheckedBorderColor: string;

  /**
   * toggleSwitchCheckedColor
   */
  toggleSwitchCheckedColor: string;

  /**
   * toggleSwitchCheckedDisabledBackgroundColor
   */
  toggleSwitchCheckedDisabledBackgroundColor: string;

  /**
   * toggleSwitchCheckedDisabledBorderColor
   */
  toggleSwitchCheckedDisabledBorderColor: string;

  /**
   * toggleSwitchCheckedDisabledColor
   */
  toggleSwitchCheckedDisabledColor: string;

  /**
   * toggleSwitchColor
   */
  toggleSwitchColor: string;

  /**
   * toggleSwitchDisabledBackgroundColor
   */
  toggleSwitchDisabledBackgroundColor: string;

  /**
   * toggleSwitchDisabledBorderColor
   */
  toggleSwitchDisabledBorderColor: string;

  /**
   * toggleSwitchDisabledColor
   */
  toggleSwitchDisabledColor: string;

  /**
   * tooltipBackgroundColor
   */
  tooltipBackgroundColor: string;

  /**
   * warningColor
   */
  warningColor: string;

  /**
   * zebraStripeBackgroundColor
   */
  zebraStripeBackgroundColor: string;
}

/**
 * UiSdlDarkTheme type mixes UiSdlThemeTemplate and embeds the C3DefaultTheme theme values.
 * Users can remix this type in their package and override/add variables.
 *
 * @remarks this represents a made instance of UiSdlDarkTheme
 */
declare class UiSdlDarkTheme extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDarkTheme;

  /**
   * The unique and required id of this instance.
   */
  readonly id: string;
  withId(id: string): UiSdlDarkTheme;

  /**
   * Whether this is a C3 type theme template.
   */
  readonly isC3?: boolean;
  withIsC3(isC3: boolean): UiSdlDarkTheme;

  /**
   * Whether this is a Light or a Dark Theme.
   */
  readonly themeCategory: string;
  withThemeCategory(themeCategory: string): UiSdlDarkTheme;

  /**
   * accentColor
   */
  readonly accentColor: string;
  withAccentColor(accentColor: string): UiSdlDarkTheme;

  /**
   * accentFontColor
   */
  readonly accentFontColor: string;
  withAccentFontColor(accentFontColor: string): UiSdlDarkTheme;

  /**
   * accentVariantColor
   */
  readonly accentVariantColor: string;
  withAccentVariantColor(accentVariantColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeBlueBackgroundColor
   */
  readonly avatarBadgeBlueBackgroundColor: string;
  withAvatarBadgeBlueBackgroundColor(avatarBadgeBlueBackgroundColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeBlueColor
   */
  readonly avatarBadgeBlueColor: string;
  withAvatarBadgeBlueColor(avatarBadgeBlueColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeChocoBackgroundColor
   */
  readonly avatarBadgeChocoBackgroundColor: string;
  withAvatarBadgeChocoBackgroundColor(avatarBadgeChocoBackgroundColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeChocoColor
   */
  readonly avatarBadgeChocoColor: string;
  withAvatarBadgeChocoColor(avatarBadgeChocoColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeCyanBackgroundColor
   */
  readonly avatarBadgeCyanBackgroundColor: string;
  withAvatarBadgeCyanBackgroundColor(avatarBadgeCyanBackgroundColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeCyanColor
   */
  readonly avatarBadgeCyanColor: string;
  withAvatarBadgeCyanColor(avatarBadgeCyanColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeForestBackgroundColor
   */
  readonly avatarBadgeForestBackgroundColor: string;
  withAvatarBadgeForestBackgroundColor(avatarBadgeForestBackgroundColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeForestColor
   */
  readonly avatarBadgeForestColor: string;
  withAvatarBadgeForestColor(avatarBadgeForestColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeGreenBackgroundColor
   */
  readonly avatarBadgeGreenBackgroundColor: string;
  withAvatarBadgeGreenBackgroundColor(avatarBadgeGreenBackgroundColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeGreenColor
   */
  readonly avatarBadgeGreenColor: string;
  withAvatarBadgeGreenColor(avatarBadgeGreenColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeLimeBackgroundColor
   */
  readonly avatarBadgeLimeBackgroundColor: string;
  withAvatarBadgeLimeBackgroundColor(avatarBadgeLimeBackgroundColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeLimeColor
   */
  readonly avatarBadgeLimeColor: string;
  withAvatarBadgeLimeColor(avatarBadgeLimeColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeOliveBackgroundColor
   */
  readonly avatarBadgeOliveBackgroundColor: string;
  withAvatarBadgeOliveBackgroundColor(avatarBadgeOliveBackgroundColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeOliveColor
   */
  readonly avatarBadgeOliveColor: string;
  withAvatarBadgeOliveColor(avatarBadgeOliveColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeOrangeBackgroundColor
   */
  readonly avatarBadgeOrangeBackgroundColor: string;
  withAvatarBadgeOrangeBackgroundColor(avatarBadgeOrangeBackgroundColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeOrangeColor
   */
  readonly avatarBadgeOrangeColor: string;
  withAvatarBadgeOrangeColor(avatarBadgeOrangeColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgePlumBackgroundColor
   */
  readonly avatarBadgePlumBackgroundColor: string;
  withAvatarBadgePlumBackgroundColor(avatarBadgePlumBackgroundColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgePlumColor
   */
  readonly avatarBadgePlumColor: string;
  withAvatarBadgePlumColor(avatarBadgePlumColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgePurpleBackgroundColor
   */
  readonly avatarBadgePurpleBackgroundColor: string;
  withAvatarBadgePurpleBackgroundColor(avatarBadgePurpleBackgroundColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgePurpleColor
   */
  readonly avatarBadgePurpleColor: string;
  withAvatarBadgePurpleColor(avatarBadgePurpleColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeRedBackgroundColor
   */
  readonly avatarBadgeRedBackgroundColor: string;
  withAvatarBadgeRedBackgroundColor(avatarBadgeRedBackgroundColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeRedColor
   */
  readonly avatarBadgeRedColor: string;
  withAvatarBadgeRedColor(avatarBadgeRedColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeSlateBackgroundColor
   */
  readonly avatarBadgeSlateBackgroundColor: string;
  withAvatarBadgeSlateBackgroundColor(avatarBadgeSlateBackgroundColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeSlateColor
   */
  readonly avatarBadgeSlateColor: string;
  withAvatarBadgeSlateColor(avatarBadgeSlateColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeYellowBackgroundColor
   */
  readonly avatarBadgeYellowBackgroundColor: string;
  withAvatarBadgeYellowBackgroundColor(avatarBadgeYellowBackgroundColor: string): UiSdlDarkTheme;

  /**
   * avatarBadgeYellowColor
   */
  readonly avatarBadgeYellowColor: string;
  withAvatarBadgeYellowColor(avatarBadgeYellowColor: string): UiSdlDarkTheme;

  /**
   * booleanIconColor
   */
  readonly booleanIconColor: string;
  withBooleanIconColor(booleanIconColor: string): UiSdlDarkTheme;

  /**
   * booleanIconTextColor
   */
  readonly booleanIconTextColor: string;
  withBooleanIconTextColor(booleanIconTextColor: string): UiSdlDarkTheme;

  /**
   * borderColor
   */
  readonly borderColor: string;
  withBorderColor(borderColor: string): UiSdlDarkTheme;

  /**
   * boxShadow01
   */
  readonly boxShadow01: string;
  withBoxShadow01(boxShadow01: string): UiSdlDarkTheme;

  /**
   * boxShadow02
   */
  readonly boxShadow02: string;
  withBoxShadow02(boxShadow02: string): UiSdlDarkTheme;

  /**
   * boxShadow03
   */
  readonly boxShadow03: string;
  withBoxShadow03(boxShadow03: string): UiSdlDarkTheme;

  /**
   * boxShadow04
   */
  readonly boxShadow04: string;
  withBoxShadow04(boxShadow04: string): UiSdlDarkTheme;

  /**
   * boxShadow05
   */
  readonly boxShadow05: string;
  withBoxShadow05(boxShadow05: string): UiSdlDarkTheme;

  /**
   * boxShadowCardParent
   */
  readonly boxShadowCardParent: string;
  withBoxShadowCardParent(boxShadowCardParent: string): UiSdlDarkTheme;

  /**
   * boxShadowMenu
   */
  readonly boxShadowMenu: string;
  withBoxShadowMenu(boxShadowMenu: string): UiSdlDarkTheme;

  /**
   * boxZoomIconPath
   */
  readonly boxZoomIconPath: string;
  withBoxZoomIconPath(boxZoomIconPath: string): UiSdlDarkTheme;

  /**
   * boxZoomIconUrl
   */
  readonly boxZoomIconUrl: string;
  withBoxZoomIconUrl(boxZoomIconUrl: string): UiSdlDarkTheme;

  /**
   * boxZoomIconColor
   */
  readonly boxZoomIconColor: string;
  withBoxZoomIconColor(boxZoomIconColor: string): UiSdlDarkTheme;

  /**
   * brightnessActionHover
   */
  readonly brightnessActionHover: string;
  withBrightnessActionHover(brightnessActionHover: string): UiSdlDarkTheme;

  /**
   * brightnessActionHoverInverse
   */
  readonly brightnessActionHoverInverse: string;
  withBrightnessActionHoverInverse(brightnessActionHoverInverse: string): UiSdlDarkTheme;

  /**
   * brightnessActionPressed
   */
  readonly brightnessActionPressed: string;
  withBrightnessActionPressed(brightnessActionPressed: string): UiSdlDarkTheme;

  /**
   * brightnessActionPressedInverse
   */
  readonly brightnessActionPressedInverse: string;
  withBrightnessActionPressedInverse(brightnessActionPressedInverse: string): UiSdlDarkTheme;

  /**
   * buttonControlBorderColor
   */
  readonly buttonControlBorderColor: string;
  withButtonControlBorderColor(buttonControlBorderColor: string): UiSdlDarkTheme;

  /**
   * buttonControlFontColor
   */
  readonly buttonControlFontColor: string;
  withButtonControlFontColor(buttonControlFontColor: string): UiSdlDarkTheme;

  /**
   * buttonControlHoverBackgroundColor
   */
  readonly buttonControlHoverBackgroundColor: string;
  withButtonControlHoverBackgroundColor(buttonControlHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonControlSelectedBackgroundColor
   */
  readonly buttonControlSelectedBackgroundColor: string;
  withButtonControlSelectedBackgroundColor(buttonControlSelectedBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonControlSelectedDisabledBackgroundColor
   */
  readonly buttonControlSelectedDisabledBackgroundColor: string;
  withButtonControlSelectedDisabledBackgroundColor(buttonControlSelectedDisabledBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonControlSelectedFontColor
   */
  readonly buttonControlSelectedFontColor: string;
  withButtonControlSelectedFontColor(buttonControlSelectedFontColor: string): UiSdlDarkTheme;

  /**
   * buttonControlSelectedHoverBackgroundColor
   */
  readonly buttonControlSelectedHoverBackgroundColor: string;
  withButtonControlSelectedHoverBackgroundColor(buttonControlSelectedHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonDangerPrimaryActiveBackgroundColor
   */
  readonly buttonDangerPrimaryActiveBackgroundColor: string;
  withButtonDangerPrimaryActiveBackgroundColor(buttonDangerPrimaryActiveBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonDangerPrimaryHoverBackgroundColor
   */
  readonly buttonDangerPrimaryHoverBackgroundColor: string;
  withButtonDangerPrimaryHoverBackgroundColor(buttonDangerPrimaryHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonDangerSecondaryActiveBackgroundColor
   */
  readonly buttonDangerSecondaryActiveBackgroundColor: string;
  withButtonDangerSecondaryActiveBackgroundColor(buttonDangerSecondaryActiveBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonDangerSecondaryHoverBackgroundColor
   */
  readonly buttonDangerSecondaryHoverBackgroundColor: string;
  withButtonDangerSecondaryHoverBackgroundColor(buttonDangerSecondaryHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonDangerTertiaryActiveBackgroundColor
   */
  readonly buttonDangerTertiaryActiveBackgroundColor: string;
  withButtonDangerTertiaryActiveBackgroundColor(buttonDangerTertiaryActiveBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonDangerTertiaryHoverBackgroundColor
   */
  readonly buttonDangerTertiaryHoverBackgroundColor: string;
  withButtonDangerTertiaryHoverBackgroundColor(buttonDangerTertiaryHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonIconActiveBackgroundColor
   */
  readonly buttonIconActiveBackgroundColor: string;
  withButtonIconActiveBackgroundColor(buttonIconActiveBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonIconBackgroundColor
   */
  readonly buttonIconBackgroundColor: string;
  withButtonIconBackgroundColor(buttonIconBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonIconHoverBackgroundColor
   */
  readonly buttonIconHoverBackgroundColor: string;
  withButtonIconHoverBackgroundColor(buttonIconHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonIconSelectedActiveBackgroundColor
   */
  readonly buttonIconSelectedActiveBackgroundColor: string;
  withButtonIconSelectedActiveBackgroundColor(buttonIconSelectedActiveBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonIconSelectedBackgroundColor
   */
  readonly buttonIconSelectedBackgroundColor: string;
  withButtonIconSelectedBackgroundColor(buttonIconSelectedBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonIconSelectedForegroundColor
   */
  readonly buttonIconSelectedForegroundColor: string;
  withButtonIconSelectedForegroundColor(buttonIconSelectedForegroundColor: string): UiSdlDarkTheme;

  /**
   * buttonIconSelectedHoverBackgroundColor
   */
  readonly buttonIconSelectedHoverBackgroundColor: string;
  withButtonIconSelectedHoverBackgroundColor(buttonIconSelectedHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonPrimaryActiveBackgroundColor
   */
  readonly buttonPrimaryActiveBackgroundColor: string;
  withButtonPrimaryActiveBackgroundColor(buttonPrimaryActiveBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonPrimaryHoverBackgroundColor
   */
  readonly buttonPrimaryHoverBackgroundColor: string;
  withButtonPrimaryHoverBackgroundColor(buttonPrimaryHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonSecondaryActiveBackgroundColor
   */
  readonly buttonSecondaryActiveBackgroundColor: string;
  withButtonSecondaryActiveBackgroundColor(buttonSecondaryActiveBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonSecondaryHoverBackgroundColor
   */
  readonly buttonSecondaryHoverBackgroundColor: string;
  withButtonSecondaryHoverBackgroundColor(buttonSecondaryHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonTertiaryActiveBackgroundColor
   */
  readonly buttonTertiaryActiveBackgroundColor: string;
  withButtonTertiaryActiveBackgroundColor(buttonTertiaryActiveBackgroundColor: string): UiSdlDarkTheme;

  /**
   * buttonTertiaryHoverBackgroundColor
   */
  readonly buttonTertiaryHoverBackgroundColor: string;
  withButtonTertiaryHoverBackgroundColor(buttonTertiaryHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * canvasBackgroundDotColor
   */
  readonly canvasBackgroundDotColor: string;
  withCanvasBackgroundDotColor(canvasBackgroundDotColor: string): UiSdlDarkTheme;

  /**
   * canvasCyanNodeColor
   */
  readonly canvasCyanNodeColor: string;
  withCanvasCyanNodeColor(canvasCyanNodeColor: string): UiSdlDarkTheme;

  /**
   * canvasForestNodeColor
   */
  readonly canvasForestNodeColor: string;
  withCanvasForestNodeColor(canvasForestNodeColor: string): UiSdlDarkTheme;

  /**
   * canvasNodeBorderColor
   */
  readonly canvasNodeBorderColor: string;
  withCanvasNodeBorderColor(canvasNodeBorderColor: string): UiSdlDarkTheme;

  /**
   * canvasNodeErrorBackgroundColor
   */
  readonly canvasNodeErrorBackgroundColor: string;
  withCanvasNodeErrorBackgroundColor(canvasNodeErrorBackgroundColor: string): UiSdlDarkTheme;

  /**
   * canvasNodeWarningBackgroundColor
   */
  readonly canvasNodeWarningBackgroundColor: string;
  withCanvasNodeWarningBackgroundColor(canvasNodeWarningBackgroundColor: string): UiSdlDarkTheme;

  /**
   * canvasOrangeIconColor
   */
  readonly canvasOrangeIconColor: string;
  withCanvasOrangeIconColor(canvasOrangeIconColor: string): UiSdlDarkTheme;

  /**
   * canvasOrangeNodeColor
   */
  readonly canvasOrangeNodeColor: string;
  withCanvasOrangeNodeColor(canvasOrangeNodeColor: string): UiSdlDarkTheme;

  /**
   * canvasPendingNodeBackgroundColor
   */
  readonly canvasPendingNodeBackgroundColor: string;
  withCanvasPendingNodeBackgroundColor(canvasPendingNodeBackgroundColor: string): UiSdlDarkTheme;

  /**
   * canvasPendingNodeForegroundColor
   */
  readonly canvasPendingNodeForegroundColor: string;
  withCanvasPendingNodeForegroundColor(canvasPendingNodeForegroundColor: string): UiSdlDarkTheme;

  /**
   * canvasPlumNodeColor
   */
  readonly canvasPlumNodeColor: string;
  withCanvasPlumNodeColor(canvasPlumNodeColor: string): UiSdlDarkTheme;

  /**
   * canvasPurpleIconColor
   */
  readonly canvasPurpleIconColor: string;
  withCanvasPurpleIconColor(canvasPurpleIconColor: string): UiSdlDarkTheme;

  /**
   * canvasPurpleNodeColor
   */
  readonly canvasPurpleNodeColor: string;
  withCanvasPurpleNodeColor(canvasPurpleNodeColor: string): UiSdlDarkTheme;

  /**
   * canvasSlateIconColor
   */
  readonly canvasSlateIconColor: string;
  withCanvasSlateIconColor(canvasSlateIconColor: string): UiSdlDarkTheme;

  /**
   * canvasSlateNodeColor
   */
  readonly canvasSlateNodeColor: string;
  withCanvasSlateNodeColor(canvasSlateNodeColor: string): UiSdlDarkTheme;

  /**
   * cardElevation00BackgroundColor
   */
  readonly cardElevation00BackgroundColor: string;
  withCardElevation00BackgroundColor(cardElevation00BackgroundColor: string): UiSdlDarkTheme;

  /**
   * cardElevation01BackgroundColor
   */
  readonly cardElevation01BackgroundColor: string;
  withCardElevation01BackgroundColor(cardElevation01BackgroundColor: string): UiSdlDarkTheme;

  /**
   * cardElevation02BackgroundColor
   */
  readonly cardElevation02BackgroundColor: string;
  withCardElevation02BackgroundColor(cardElevation02BackgroundColor: string): UiSdlDarkTheme;

  /**
   * cardElevation03BackgroundColor
   */
  readonly cardElevation03BackgroundColor: string;
  withCardElevation03BackgroundColor(cardElevation03BackgroundColor: string): UiSdlDarkTheme;

  /**
   * cardElevation04BackgroundColor
   */
  readonly cardElevation04BackgroundColor: string;
  withCardElevation04BackgroundColor(cardElevation04BackgroundColor: string): UiSdlDarkTheme;

  /**
   * cardElevation06BackgroundColor
   */
  readonly cardElevation06BackgroundColor: string;
  withCardElevation06BackgroundColor(cardElevation06BackgroundColor: string): UiSdlDarkTheme;

  /**
   * cardElevation08BackgroundColor
   */
  readonly cardElevation08BackgroundColor: string;
  withCardElevation08BackgroundColor(cardElevation08BackgroundColor: string): UiSdlDarkTheme;

  /**
   * cardElevation12BackgroundColor
   */
  readonly cardElevation12BackgroundColor: string;
  withCardElevation12BackgroundColor(cardElevation12BackgroundColor: string): UiSdlDarkTheme;

  /**
   * cardElevation16BackgroundColor
   */
  readonly cardElevation16BackgroundColor: string;
  withCardElevation16BackgroundColor(cardElevation16BackgroundColor: string): UiSdlDarkTheme;

  /**
   * cardElevation24BackgroundColor
   */
  readonly cardElevation24BackgroundColor: string;
  withCardElevation24BackgroundColor(cardElevation24BackgroundColor: string): UiSdlDarkTheme;

  /**
   * chartSeriesTooltipNameFontColor
   */
  readonly chartSeriesTooltipNameFontColor: string;
  withChartSeriesTooltipNameFontColor(chartSeriesTooltipNameFontColor: string): UiSdlDarkTheme;

  /**
   * chartSeriesTooltipTitleFontColor
   */
  readonly chartSeriesTooltipTitleFontColor: string;
  withChartSeriesTooltipTitleFontColor(chartSeriesTooltipTitleFontColor: string): UiSdlDarkTheme;

  /**
   * chartSeriesTooltipValueFontColor
   */
  readonly chartSeriesTooltipValueFontColor: string;
  withChartSeriesTooltipValueFontColor(chartSeriesTooltipValueFontColor: string): UiSdlDarkTheme;

  /**
   * checkboxBackgroundColor
   */
  readonly checkboxBackgroundColor: string;
  withCheckboxBackgroundColor(checkboxBackgroundColor: string): UiSdlDarkTheme;

  /**
   * checkboxColor
   */
  readonly checkboxColor: string;
  withCheckboxColor(checkboxColor: string): UiSdlDarkTheme;

  /**
   * checkboxHoverBackgroundColor
   */
  readonly checkboxHoverBackgroundColor: string;
  withCheckboxHoverBackgroundColor(checkboxHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * checkboxHoverColor
   */
  readonly checkboxHoverColor: string;
  withCheckboxHoverColor(checkboxHoverColor: string): UiSdlDarkTheme;

  /**
   * checkboxSelectedDisabledColor
   */
  readonly checkboxSelectedDisabledColor: string;
  withCheckboxSelectedDisabledColor(checkboxSelectedDisabledColor: string): UiSdlDarkTheme;

  /**
   * checkboxSelectedHoverColor
   */
  readonly checkboxSelectedHoverColor: string;
  withCheckboxSelectedHoverColor(checkboxSelectedHoverColor: string): UiSdlDarkTheme;

  /**
   * colorBgAccent
   */
  readonly colorBgAccent: string;
  withColorBgAccent(colorBgAccent: string): UiSdlDarkTheme;

  /**
   * colorBgAccentWeak
   */
  readonly colorBgAccentWeak: string;
  withColorBgAccentWeak(colorBgAccentWeak: string): UiSdlDarkTheme;

  /**
   * colorBgActionHover
   */
  readonly colorBgActionHover: string;
  withColorBgActionHover(colorBgActionHover: string): UiSdlDarkTheme;

  /**
   * colorBgActionHoverInverse
   */
  readonly colorBgActionHoverInverse: string;
  withColorBgActionHoverInverse(colorBgActionHoverInverse: string): UiSdlDarkTheme;

  /**
   * colorBgActionPressed
   */
  readonly colorBgActionPressed: string;
  withColorBgActionPressed(colorBgActionPressed: string): UiSdlDarkTheme;

  /**
   * colorBgActionPressedInverse
   */
  readonly colorBgActionPressedInverse: string;
  withColorBgActionPressedInverse(colorBgActionPressedInverse: string): UiSdlDarkTheme;

  /**
   * colorBgAvatarDefault
   */
  readonly colorBgAvatarDefault: string;
  withColorBgAvatarDefault(colorBgAvatarDefault: string): UiSdlDarkTheme;

  /**
   * colorBgBtnAccentFill
   */
  readonly colorBgBtnAccentFill: string;
  withColorBgBtnAccentFill(colorBgBtnAccentFill: string): UiSdlDarkTheme;

  /**
   * colorBgBtnDangerFill
   */
  readonly colorBgBtnDangerFill: string;
  withColorBgBtnDangerFill(colorBgBtnDangerFill: string): UiSdlDarkTheme;

  /**
   * colorBgBtnPrimaryFill
   */
  readonly colorBgBtnPrimaryFill: string;
  withColorBgBtnPrimaryFill(colorBgBtnPrimaryFill: string): UiSdlDarkTheme;

  /**
   * colorBgCardChildPrimary
   */
  readonly colorBgCardChildPrimary: string;
  withColorBgCardChildPrimary(colorBgCardChildPrimary: string): UiSdlDarkTheme;

  /**
   * colorBgCardChildSecondary
   */
  readonly colorBgCardChildSecondary: string;
  withColorBgCardChildSecondary(colorBgCardChildSecondary: string): UiSdlDarkTheme;

  /**
   * colorBgCardParent
   */
  readonly colorBgCardParent: string;
  withColorBgCardParent(colorBgCardParent: string): UiSdlDarkTheme;

  /**
   * colorBgContainer01
   */
  readonly colorBgContainer01: string;
  withColorBgContainer01(colorBgContainer01: string): UiSdlDarkTheme;

  /**
   * colorBgContainer02
   */
  readonly colorBgContainer02: string;
  withColorBgContainer02(colorBgContainer02: string): UiSdlDarkTheme;

  /**
   * colorBgDanger
   */
  readonly colorBgDanger: string;
  withColorBgDanger(colorBgDanger: string): UiSdlDarkTheme;

  /**
   * colorBgDangerWeak
   */
  readonly colorBgDangerWeak: string;
  withColorBgDangerWeak(colorBgDangerWeak: string): UiSdlDarkTheme;

  /**
   * colorBgDataGridHover
   */
  readonly colorBgDataGridHover: string;
  withColorBgDataGridHover(colorBgDataGridHover: string): UiSdlDarkTheme;

  /**
   * colorBgDataGridZebraStripe
   */
  readonly colorBgDataGridZebraStripe: string;
  withColorBgDataGridZebraStripe(colorBgDataGridZebraStripe: string): UiSdlDarkTheme;

  /**
   * colorBgDataZoomSliderFilter
   */
  readonly colorBgDataZoomSliderFilter: string;
  withColorBgDataZoomSliderFilter(colorBgDataZoomSliderFilter: string): UiSdlDarkTheme;

  /**
   * colorBgDataZoomSparkline
   */
  readonly colorBgDataZoomSparkline: string;
  withColorBgDataZoomSparkline(colorBgDataZoomSparkline: string): UiSdlDarkTheme;

  /**
   * colorBgDecoOrangeStrong
   */
  readonly colorBgDecoOrangeStrong: string;
  withColorBgDecoOrangeStrong(colorBgDecoOrangeStrong: string): UiSdlDarkTheme;

  /**
   * colorBgDecoOrange
   */
  readonly colorBgDecoOrange: string;
  withColorBgDecoOrange(colorBgDecoOrange: string): UiSdlDarkTheme;

  /**
   * colorBgDecoOrangeWeak
   */
  readonly colorBgDecoOrangeWeak: string;
  withColorBgDecoOrangeWeak(colorBgDecoOrangeWeak: string): UiSdlDarkTheme;

  /**
   * colorBgDecoOliveStrong
   */
  readonly colorBgDecoOliveStrong: string;
  withColorBgDecoOliveStrong(colorBgDecoOliveStrong: string): UiSdlDarkTheme;

  /**
   * colorBgDecoOlive
   */
  readonly colorBgDecoOlive: string;
  withColorBgDecoOlive(colorBgDecoOlive: string): UiSdlDarkTheme;

  /**
   * colorBgDecoOliveWeak
   */
  readonly colorBgDecoOliveWeak: string;
  withColorBgDecoOliveWeak(colorBgDecoOliveWeak: string): UiSdlDarkTheme;

  /**
   * colorBgDecoLimeStrong
   */
  readonly colorBgDecoLimeStrong: string;
  withColorBgDecoLimeStrong(colorBgDecoLimeStrong: string): UiSdlDarkTheme;

  /**
   * colorBgDecoLime
   */
  readonly colorBgDecoLime: string;
  withColorBgDecoLime(colorBgDecoLime: string): UiSdlDarkTheme;

  /**
   * colorBgDecoLimeWeak
   */
  readonly colorBgDecoLimeWeak: string;
  withColorBgDecoLimeWeak(colorBgDecoLimeWeak: string): UiSdlDarkTheme;

  /**
   * colorBgDecoForestStrong
   */
  readonly colorBgDecoForestStrong: string;
  withColorBgDecoForestStrong(colorBgDecoForestStrong: string): UiSdlDarkTheme;

  /**
   * colorBgDecoForest
   */
  readonly colorBgDecoForest: string;
  withColorBgDecoForest(colorBgDecoForest: string): UiSdlDarkTheme;

  /**
   * colorBgDecoForestWeak
   */
  readonly colorBgDecoForestWeak: string;
  withColorBgDecoForestWeak(colorBgDecoForestWeak: string): UiSdlDarkTheme;

  /**
   * colorBgDecoCyanStrong
   */
  readonly colorBgDecoCyanStrong: string;
  withColorBgDecoCyanStrong(colorBgDecoCyanStrong: string): UiSdlDarkTheme;

  /**
   * colorBgDecoCyan
   */
  readonly colorBgDecoCyan: string;
  withColorBgDecoCyan(colorBgDecoCyan: string): UiSdlDarkTheme;

  /**
   * colorBgDecoCyanWeak
   */
  readonly colorBgDecoCyanWeak: string;
  withColorBgDecoCyanWeak(colorBgDecoCyanWeak: string): UiSdlDarkTheme;

  /**
   * colorBgDecoSlateStrong
   */
  readonly colorBgDecoSlateStrong: string;
  withColorBgDecoSlateStrong(colorBgDecoSlateStrong: string): UiSdlDarkTheme;

  /**
   * colorBgDecoSlate
   */
  readonly colorBgDecoSlate: string;
  withColorBgDecoSlate(colorBgDecoSlate: string): UiSdlDarkTheme;

  /**
   * colorBgDecoSlateWeak
   */
  readonly colorBgDecoSlateWeak: string;
  withColorBgDecoSlateWeak(colorBgDecoSlateWeak: string): UiSdlDarkTheme;

  /**
   * colorBgDecoPurpleStrong
   */
  readonly colorBgDecoPurpleStrong: string;
  withColorBgDecoPurpleStrong(colorBgDecoPurpleStrong: string): UiSdlDarkTheme;

  /**
   * colorBgDecoPurple
   */
  readonly colorBgDecoPurple: string;
  withColorBgDecoPurple(colorBgDecoPurple: string): UiSdlDarkTheme;

  /**
   * colorBgDecoPurpleWeak
   */
  readonly colorBgDecoPurpleWeak: string;
  withColorBgDecoPurpleWeak(colorBgDecoPurpleWeak: string): UiSdlDarkTheme;

  /**
   * colorBgDecoPlumStrong
   */
  readonly colorBgDecoPlumStrong: string;
  withColorBgDecoPlumStrong(colorBgDecoPlumStrong: string): UiSdlDarkTheme;

  /**
   * colorBgDecoPlum
   */
  readonly colorBgDecoPlum: string;
  withColorBgDecoPlum(colorBgDecoPlum: string): UiSdlDarkTheme;

  /**
   * colorBgDecoPlumWeak
   */
  readonly colorBgDecoPlumWeak: string;
  withColorBgDecoPlumWeak(colorBgDecoPlumWeak: string): UiSdlDarkTheme;

  /**
   * colorBgDecoChocoStrong
   */
  readonly colorBgDecoChocoStrong: string;
  withColorBgDecoChocoStrong(colorBgDecoChocoStrong: string): UiSdlDarkTheme;

  /**
   * colorBgDecoChoco
   */
  readonly colorBgDecoChoco: string;
  withColorBgDecoChoco(colorBgDecoChoco: string): UiSdlDarkTheme;

  /**
   * colorBgDecoChocoWeak
   */
  readonly colorBgDecoChocoWeak: string;
  withColorBgDecoChocoWeak(colorBgDecoChocoWeak: string): UiSdlDarkTheme;

  /**
   * colorFgInputPlaceholder
   */
  readonly colorFgInputPlaceholder: string;
  withColorFgInputPlaceholder(colorFgInputPlaceholder: string): UiSdlDarkTheme;

  /**
   * colorBorderDataZoomSparkline
   */
  readonly colorBorderDataZoomSparkline: string;
  withColorBorderDataZoomSparkline(colorBorderDataZoomSparkline: string): UiSdlDarkTheme;

  /**
   * colorBgInlineNotificationError
   */
  readonly colorBgInlineNotificationError: string;
  withColorBgInlineNotificationError(colorBgInlineNotificationError: string): UiSdlDarkTheme;

  /**
   * colorBgInlineNotificationSuccess
   */
  readonly colorBgInlineNotificationSuccess: string;
  withColorBgInlineNotificationSuccess(colorBgInlineNotificationSuccess: string): UiSdlDarkTheme;

  /**
   * colorBgInlineNotificationWarning
   */
  readonly colorBgInlineNotificationWarning: string;
  withColorBgInlineNotificationWarning(colorBgInlineNotificationWarning: string): UiSdlDarkTheme;

  /**
   * colorBgInputReadonly
   */
  readonly colorBgInputReadonly: string;
  withColorBgInputReadonly(colorBgInputReadonly: string): UiSdlDarkTheme;

  /**
   * colorBgMenu
   */
  readonly colorBgMenu: string;
  withColorBgMenu(colorBgMenu: string): UiSdlDarkTheme;

  /**
   * colorBgMenuHoverUnselected
   */
  readonly colorBgMenuHoverUnselected: string;
  withColorBgMenuHoverUnselected(colorBgMenuHoverUnselected: string): UiSdlDarkTheme;

  /**
   * colorBgMenuItemSelected
   */
  readonly colorBgMenuItemSelected: string;
  withColorBgMenuItemSelected(colorBgMenuItemSelected: string): UiSdlDarkTheme;

  /**
   * colorBgPage
   */
  readonly colorBgPage: string;
  withColorBgPage(colorBgPage: string): UiSdlDarkTheme;

  /**
   * colorBgPrimary
   */
  readonly colorBgPrimary: string;
  withColorBgPrimary(colorBgPrimary: string): UiSdlDarkTheme;

  /**
   * colorBgPrimaryInverse
   */
  readonly colorBgPrimaryInverse: string;
  withColorBgPrimaryInverse(colorBgPrimaryInverse: string): UiSdlDarkTheme;

  /**
   * colorBgContentFrame
   */
  readonly colorBgContentFrame: string;
  withColorBgContentFrame(colorBgContentFrame: string): UiSdlDarkTheme;

  /**
   * colorBgCoreAccentStrong
   */
  readonly colorBgCoreAccentStrong: string;
  withColorBgCoreAccentStrong(colorBgCoreAccentStrong: string): UiSdlDarkTheme;

  /**
   * colorBgCoreAccent
   */
  readonly colorBgCoreAccent: string;
  withColorBgCoreAccent(colorBgCoreAccent: string): UiSdlDarkTheme;

  /**
   * colorBgCoreAccentWeak
   */
  readonly colorBgCoreAccentWeak: string;
  withColorBgCoreAccentWeak(colorBgCoreAccentWeak: string): UiSdlDarkTheme;

  /**
   * colorBgCoreDangerStrong
   */
  readonly colorBgCoreDangerStrong: string;
  withColorBgCoreDangerStrong(colorBgCoreDangerStrong: string): UiSdlDarkTheme;

  /**
   * colorBgCoreDanger
   */
  readonly colorBgCoreDanger: string;
  withColorBgCoreDanger(colorBgCoreDanger: string): UiSdlDarkTheme;

  /**
   * colorBgCoreDangerWeak
   */
  readonly colorBgCoreDangerWeak: string;
  withColorBgCoreDangerWeak(colorBgCoreDangerWeak: string): UiSdlDarkTheme;

  /**
   * colorBgCoreSuccessStrong
   */
  readonly colorBgCoreSuccessStrong: string;
  withColorBgCoreSuccessStrong(colorBgCoreSuccessStrong: string): UiSdlDarkTheme;

  /**
   * colorBgCoreSuccess
   */
  readonly colorBgCoreSuccess: string;
  withColorBgCoreSuccess(colorBgCoreSuccess: string): UiSdlDarkTheme;

  /**
   * colorBgCoreSuccessWeak
   */
  readonly colorBgCoreSuccessWeak: string;
  withColorBgCoreSuccessWeak(colorBgCoreSuccessWeak: string): UiSdlDarkTheme;

  /**
   * colorBgCoreWarningStrong
   */
  readonly colorBgCoreWarningStrong: string;
  withColorBgCoreWarningStrong(colorBgCoreWarningStrong: string): UiSdlDarkTheme;

  /**
   * colorBgCoreWarning
   */
  readonly colorBgCoreWarning: string;
  withColorBgCoreWarning(colorBgCoreWarning: string): UiSdlDarkTheme;

  /**
   * colorBgCoreWarningWeak
   */
  readonly colorBgCoreWarningWeak: string;
  withColorBgCoreWarningWeak(colorBgCoreWarningWeak: string): UiSdlDarkTheme;

  /**
   * colorBgSuccessWeak
   */
  readonly colorBgSuccessWeak: string;
  withColorBgSuccessWeak(colorBgSuccessWeak: string): UiSdlDarkTheme;

  /**
   * colorBgSideNavPanel
   */
  readonly colorBgSideNavPanel: string;
  withColorBgSideNavPanel(colorBgSideNavPanel: string): UiSdlDarkTheme;

  /**
   * colorBgSecondary
   */
  readonly colorBgSecondary: string;
  withColorBgSecondary(colorBgSecondary: string): UiSdlDarkTheme;

  /**
   * colorBgSecondaryInverse
   */
  readonly colorBgSecondaryInverse: string;
  withColorBgSecondaryInverse(colorBgSecondaryInverse: string): UiSdlDarkTheme;

  /**
   * colorBgSegBtnSelected
   */
  readonly colorBgSegBtnSelected: string;
  withColorBgSegBtnSelected(colorBgSegBtnSelected: string): UiSdlDarkTheme;

  /**
   * colorBgSelected
   */
  readonly colorBgSelected: string;
  withColorBgSelected(colorBgSelected: string): UiSdlDarkTheme;

  /**
   * colorBgSuccess
   */
  readonly colorBgSuccess: string;
  withColorBgSuccess(colorBgSuccess: string): UiSdlDarkTheme;

  /**
   * colorBgTertiary
   */
  readonly colorBgTertiary: string;
  withColorBgTertiary(colorBgTertiary: string): UiSdlDarkTheme;

  /**
   * colorBgTertiaryInverse
   */
  readonly colorBgTertiaryInverse: string;
  withColorBgTertiaryInverse(colorBgTertiaryInverse: string): UiSdlDarkTheme;

  /**
   * colorBgTickMark
   */
  readonly colorBgTickMark: string;
  withColorBgTickMark(colorBgTickMark: string): UiSdlDarkTheme;

  /**
   * colorBgTrack
   */
  readonly colorBgTrack: string;
  withColorBgTrack(colorBgTrack: string): UiSdlDarkTheme;

  /**
   * colorBgWarning
   */
  readonly colorBgWarning: string;
  withColorBgWarning(colorBgWarning: string): UiSdlDarkTheme;

  /**
   * colorBgWarningWeak
   */
  readonly colorBgWarningWeak: string;
  withColorBgWarningWeak(colorBgWarningWeak: string): UiSdlDarkTheme;

  /**
   * colorBorder
   */
  readonly colorBorder: string;
  withColorBorder(colorBorder: string): UiSdlDarkTheme;

  /**
   * colorBorderAccent
   */
  readonly colorBorderAccent: string;
  withColorBorderAccent(colorBorderAccent: string): UiSdlDarkTheme;

  /**
   * colorBorderBtnAccentOutline
   */
  readonly colorBorderBtnAccentOutline: string;
  withColorBorderBtnAccentOutline(colorBorderBtnAccentOutline: string): UiSdlDarkTheme;

  /**
   * colorBorderBtnDangerOutline
   */
  readonly colorBorderBtnDangerOutline: string;
  withColorBorderBtnDangerOutline(colorBorderBtnDangerOutline: string): UiSdlDarkTheme;

  /**
   * colorBorderBtnPrimaryOutline
   */
  readonly colorBorderBtnPrimaryOutline: string;
  withColorBorderBtnPrimaryOutline(colorBorderBtnPrimaryOutline: string): UiSdlDarkTheme;

  /**
   * colorBorderCardChildPrimary
   */
  readonly colorBorderCardChildPrimary: string;
  withColorBorderCardChildPrimary(colorBorderCardChildPrimary: string): UiSdlDarkTheme;

  /**
   * colorBorderCardChildSecondary
   */
  readonly colorBorderCardChildSecondary: string;
  withColorBorderCardChildSecondary(colorBorderCardChildSecondary: string): UiSdlDarkTheme;

  /**
   * colorBorderCardParent
   */
  readonly colorBorderCardParent: string;
  withColorBorderCardParent(colorBorderCardParent: string): UiSdlDarkTheme;

  /**
   * colorBorderDanger
   */
  readonly colorBorderDanger: string;
  withColorBorderDanger(colorBorderDanger: string): UiSdlDarkTheme;

  /**
   * colorBorderInlineNotificationError
   */
  readonly colorBorderInlineNotificationError: string;
  withColorBorderInlineNotificationError(colorBorderInlineNotificationError: string): UiSdlDarkTheme;

  /**
   * colorBorderInlineNotificationSuccess
   */
  readonly colorBorderInlineNotificationSuccess: string;
  withColorBorderInlineNotificationSuccess(colorBorderInlineNotificationSuccess: string): UiSdlDarkTheme;

  /**
   * colorBorderInlineNotificationWarning
   */
  readonly colorBorderInlineNotificationWarning: string;
  withColorBorderInlineNotificationWarning(colorBorderInlineNotificationWarning: string): UiSdlDarkTheme;

  /**
   * colorBorderMenu
   */
  readonly colorBorderMenu: string;
  withColorBorderMenu(colorBorderMenu: string): UiSdlDarkTheme;

  /**
   * colorBorderReadonly
   */
  readonly colorBorderReadonly: string;
  withColorBorderReadonly(colorBorderReadonly: string): UiSdlDarkTheme;

  /**
   * colorBorderSegBtn
   */
  readonly colorBorderSegBtn: string;
  withColorBorderSegBtn(colorBorderSegBtn: string): UiSdlDarkTheme;

  /**
   * colorBorderStrong
   */
  readonly colorBorderStrong: string;
  withColorBorderStrong(colorBorderStrong: string): UiSdlDarkTheme;

  /**
   * colorBorderSuccess
   */
  readonly colorBorderSuccess: string;
  withColorBorderSuccess(colorBorderSuccess: string): UiSdlDarkTheme;

  /**
   * colorBorderWarning
   */
  readonly colorBorderWarning: string;
  withColorBorderWarning(colorBorderWarning: string): UiSdlDarkTheme;

  /**
   * colorBorderWeak
   */
  readonly colorBorderWeak: string;
  withColorBorderWeak(colorBorderWeak: string): UiSdlDarkTheme;

  /**
   * colorDivider
   */
  readonly colorDivider: string;
  withColorDivider(colorDivider: string): UiSdlDarkTheme;

  /**
   * colorDividerStrong
   */
  readonly colorDividerStrong: string;
  withColorDividerStrong(colorDividerStrong: string): UiSdlDarkTheme;

  /**
   * colorDividerWeak
   */
  readonly colorDividerWeak: string;
  withColorDividerWeak(colorDividerWeak: string): UiSdlDarkTheme;

  /**
   * colorBgCollapsibleNav
   */
  readonly colorBgCollapsibleNav: string;
  withColorBgCollapsibleNav(colorBgCollapsibleNav: string): UiSdlDarkTheme;

  /**
   * colorBgTintTimeBarOverlay
   */
  readonly colorBgTintTimeBarOverlay: string;
  withColorBgTintTimeBarOverlay(colorBgTintTimeBarOverlay: string): UiSdlDarkTheme;

  /**
   * colorBgSankeyLabel
   */
  readonly colorBgSankeyLabel: string;
  withColorBgSankeyLabel(colorBgSankeyLabel: string): UiSdlDarkTheme;

  /**
   * colorBgSideNav
   */
  readonly colorBgSideNav: string;
  withColorBgSideNav(colorBgSideNav: string): UiSdlDarkTheme;

  /**
   * colorBgSideNavItemHover
   */
  readonly colorBgSideNavItemHover: string;
  withColorBgSideNavItemHover(colorBgSideNavItemHover: string): UiSdlDarkTheme;

  /**
   * colorBgSideItemHover
   */
  readonly colorBgSideItemHover: string;
  withColorBgSideItemHover(colorBgSideItemHover: string): UiSdlDarkTheme;

  /**
   * colorFgSideNavSelected
   */
  readonly colorFgSideNavSelected: string;
  withColorFgSideNavSelected(colorFgSideNavSelected: string): UiSdlDarkTheme;

  /**
   * colorFgSideNavUnselected
   */
  readonly colorFgSideNavUnselected: string;
  withColorFgSideNavUnselected(colorFgSideNavUnselected: string): UiSdlDarkTheme;

  /**
   * colorBorderSideNavItemIndicator
   */
  readonly colorBorderSideNavItemIndicator: string;
  withColorBorderSideNavItemIndicator(colorBorderSideNavItemIndicator: string): UiSdlDarkTheme;

  /**
   * colorBorderSideNavItemDivider
   */
  readonly colorBorderSideNavItemDivider: string;
  withColorBorderSideNavItemDivider(colorBorderSideNavItemDivider: string): UiSdlDarkTheme;

  /**
   * colorFgAccent
   */
  readonly colorFgAccent: string;
  withColorFgAccent(colorFgAccent: string): UiSdlDarkTheme;

  /**
   * colorFgAccentWeak
   */
  readonly colorFgAccentWeak: string;
  withColorFgAccentWeak(colorFgAccentWeak: string): UiSdlDarkTheme;

  /**
   * colorFgAccentStrong
   */
  readonly colorFgAccentStrong: string;
  withColorFgAccentStrong(colorFgAccentStrong: string): UiSdlDarkTheme;

  /**
   * colorFgBtnAccent
   */
  readonly colorFgBtnAccent: string;
  withColorFgBtnAccent(colorFgBtnAccent: string): UiSdlDarkTheme;

  /**
   * colorFgBtnDanger
   */
  readonly colorFgBtnDanger: string;
  withColorFgBtnDanger(colorFgBtnDanger: string): UiSdlDarkTheme;

  /**
   * colorFgBtnPrimary
   */
  readonly colorFgBtnPrimary: string;
  withColorFgBtnPrimary(colorFgBtnPrimary: string): UiSdlDarkTheme;

  /**
   * colorFgDanger
   */
  readonly colorFgDanger: string;
  withColorFgDanger(colorFgDanger: string): UiSdlDarkTheme;

  /**
   * colorFgDangerStrong
   */
  readonly colorFgDangerStrong: string;
  withColorFgDangerStrong(colorFgDangerStrong: string): UiSdlDarkTheme;

  /**
   * colorFgDangerWeak
   */
  readonly colorFgDangerWeak: string;
  withColorFgDangerWeak(colorFgDangerWeak: string): UiSdlDarkTheme;

  /**
   * colorFgDecoOrangeStrong
   */
  readonly colorFgDecoOrangeStrong: string;
  withColorFgDecoOrangeStrong(colorFgDecoOrangeStrong: string): UiSdlDarkTheme;

  /**
   * colorFgDecoOrange
   */
  readonly colorFgDecoOrange: string;
  withColorFgDecoOrange(colorFgDecoOrange: string): UiSdlDarkTheme;

  /**
   * colorFgDecoOrangeWeak
   */
  readonly colorFgDecoOrangeWeak: string;
  withColorFgDecoOrangeWeak(colorFgDecoOrangeWeak: string): UiSdlDarkTheme;

  /**
   * colorFgDecoOliveStrong
   */
  readonly colorFgDecoOliveStrong: string;
  withColorFgDecoOliveStrong(colorFgDecoOliveStrong: string): UiSdlDarkTheme;

  /**
   * colorFgDecoOlive
   */
  readonly colorFgDecoOlive: string;
  withColorFgDecoOlive(colorFgDecoOlive: string): UiSdlDarkTheme;

  /**
   * colorFgDecoOliveWeak
   */
  readonly colorFgDecoOliveWeak: string;
  withColorFgDecoOliveWeak(colorFgDecoOliveWeak: string): UiSdlDarkTheme;

  /**
   * colorFgDecoLimeStrong
   */
  readonly colorFgDecoLimeStrong: string;
  withColorFgDecoLimeStrong(colorFgDecoLimeStrong: string): UiSdlDarkTheme;

  /**
   * colorFgDecoLime
   */
  readonly colorFgDecoLime: string;
  withColorFgDecoLime(colorFgDecoLime: string): UiSdlDarkTheme;

  /**
   * colorFgDecoLimeWeak
   */
  readonly colorFgDecoLimeWeak: string;
  withColorFgDecoLimeWeak(colorFgDecoLimeWeak: string): UiSdlDarkTheme;

  /**
   * colorFgDecoForestStrong
   */
  readonly colorFgDecoForestStrong: string;
  withColorFgDecoForestStrong(colorFgDecoForestStrong: string): UiSdlDarkTheme;

  /**
   * colorFgDecoForest
   */
  readonly colorFgDecoForest: string;
  withColorFgDecoForest(colorFgDecoForest: string): UiSdlDarkTheme;

  /**
   * colorFgDecoForestWeak
   */
  readonly colorFgDecoForestWeak: string;
  withColorFgDecoForestWeak(colorFgDecoForestWeak: string): UiSdlDarkTheme;

  /**
   * colorFgDecoCyanStrong
   */
  readonly colorFgDecoCyanStrong: string;
  withColorFgDecoCyanStrong(colorFgDecoCyanStrong: string): UiSdlDarkTheme;

  /**
   * colorFgDecoCyan
   */
  readonly colorFgDecoCyan: string;
  withColorFgDecoCyan(colorFgDecoCyan: string): UiSdlDarkTheme;

  /**
   * colorFgDecoCyanWeak
   */
  readonly colorFgDecoCyanWeak: string;
  withColorFgDecoCyanWeak(colorFgDecoCyanWeak: string): UiSdlDarkTheme;

  /**
   * colorFgDecoSlateStrong
   */
  readonly colorFgDecoSlateStrong: string;
  withColorFgDecoSlateStrong(colorFgDecoSlateStrong: string): UiSdlDarkTheme;

  /**
   * colorFgDecoSlate
   */
  readonly colorFgDecoSlate: string;
  withColorFgDecoSlate(colorFgDecoSlate: string): UiSdlDarkTheme;

  /**
   * colorFgDecoSlateWeak
   */
  readonly colorFgDecoSlateWeak: string;
  withColorFgDecoSlateWeak(colorFgDecoSlateWeak: string): UiSdlDarkTheme;

  /**
   * colorFgDecoPurpleStrong
   */
  readonly colorFgDecoPurpleStrong: string;
  withColorFgDecoPurpleStrong(colorFgDecoPurpleStrong: string): UiSdlDarkTheme;

  /**
   * colorFgDecoPurple
   */
  readonly colorFgDecoPurple: string;
  withColorFgDecoPurple(colorFgDecoPurple: string): UiSdlDarkTheme;

  /**
   * colorFgDecoPurpleWeak
   */
  readonly colorFgDecoPurpleWeak: string;
  withColorFgDecoPurpleWeak(colorFgDecoPurpleWeak: string): UiSdlDarkTheme;

  /**
   * colorFgDecoPlumStrong
   */
  readonly colorFgDecoPlumStrong: string;
  withColorFgDecoPlumStrong(colorFgDecoPlumStrong: string): UiSdlDarkTheme;

  /**
   * colorFgDecoPlum
   */
  readonly colorFgDecoPlum: string;
  withColorFgDecoPlum(colorFgDecoPlum: string): UiSdlDarkTheme;

  /**
   * colorFgDecoPlumWeak
   */
  readonly colorFgDecoPlumWeak: string;
  withColorFgDecoPlumWeak(colorFgDecoPlumWeak: string): UiSdlDarkTheme;

  /**
   * colorFgDecoChocoStrong
   */
  readonly colorFgDecoChocoStrong: string;
  withColorFgDecoChocoStrong(colorFgDecoChocoStrong: string): UiSdlDarkTheme;

  /**
   * colorFgDecoChoco
   */
  readonly colorFgDecoChoco: string;
  withColorFgDecoChoco(colorFgDecoChoco: string): UiSdlDarkTheme;

  /**
   * colorFgDecoChocoWeak
   */
  readonly colorFgDecoChocoWeak: string;
  withColorFgDecoChocoWeak(colorFgDecoChocoWeak: string): UiSdlDarkTheme;

  /**
   * colorFgMenuItemSelected
   */
  readonly colorFgMenuItemSelected: string;
  withColorFgMenuItemSelected(colorFgMenuItemSelected: string): UiSdlDarkTheme;

  /**
   * colorFgMenuItemSelectedIndicator
   */
  readonly colorFgMenuItemSelectedIndicator: string;
  withColorFgMenuItemSelectedIndicator(colorFgMenuItemSelectedIndicator: string): UiSdlDarkTheme;

  /**
   * colorFgMenuItemUnselected
   */
  readonly colorFgMenuItemUnselected: string;
  withColorFgMenuItemUnselected(colorFgMenuItemUnselected: string): UiSdlDarkTheme;

  /**
   * colorFgPrimary
   */
  readonly colorFgPrimary: string;
  withColorFgPrimary(colorFgPrimary: string): UiSdlDarkTheme;

  /**
   * colorFgPrimaryInverse
   */
  readonly colorFgPrimaryInverse: string;
  withColorFgPrimaryInverse(colorFgPrimaryInverse: string): UiSdlDarkTheme;

  /**
   * colorFgReadonly
   */
  readonly colorFgReadonly: string;
  withColorFgReadonly(colorFgReadonly: string): UiSdlDarkTheme;

  /**
   * colorFgSecondary
   */
  readonly colorFgSecondary: string;
  withColorFgSecondary(colorFgSecondary: string): UiSdlDarkTheme;

  /**
   * colorFgSecondaryInverse
   */
  readonly colorFgSecondaryInverse: string;
  withColorFgSecondaryInverse(colorFgSecondaryInverse: string): UiSdlDarkTheme;

  /**
   * colorFgSegBtn
   */
  readonly colorFgSegBtn: string;
  withColorFgSegBtn(colorFgSegBtn: string): UiSdlDarkTheme;

  /**
   * colorFgSegBtnSelected
   */
  readonly colorFgSegBtnSelected: string;
  withColorFgSegBtnSelected(colorFgSegBtnSelected: string): UiSdlDarkTheme;

  /**
   * colorFgSuccess
   */
  readonly colorFgSuccess: string;
  withColorFgSuccess(colorFgSuccess: string): UiSdlDarkTheme;

  /**
   * colorFgSuccessStrong
   */
  readonly colorFgSuccessStrong: string;
  withColorFgSuccessStrong(colorFgSuccessStrong: string): UiSdlDarkTheme;

  /**
   * colorFgSuccessWeak
   */
  readonly colorFgSuccessWeak: string;
  withColorFgSuccessWeak(colorFgSuccessWeak: string): UiSdlDarkTheme;

  /**
   * colorFgWarning
   */
  readonly colorFgWarning: string;
  withColorFgWarning(colorFgWarning: string): UiSdlDarkTheme;

  /**
   * colorFgWarningStrong
   */
  readonly colorFgWarningStrong: string;
  withColorFgWarningStrong(colorFgWarningStrong: string): UiSdlDarkTheme;

  /**
   * colorFgWarningWeak
   */
  readonly colorFgWarningWeak: string;
  withColorFgWarningWeak(colorFgWarningWeak: string): UiSdlDarkTheme;

  /**
   * colorFocus
   */
  readonly colorFocus: string;
  withColorFocus(colorFocus: string): UiSdlDarkTheme;

  /**
   * componentBackgroundColor
   */
  readonly componentBackgroundColor: string;
  withComponentBackgroundColor(componentBackgroundColor: string): UiSdlDarkTheme;

  /**
   * componentBackgroundColorError
   */
  readonly componentBackgroundColorError: string;
  withComponentBackgroundColorError(componentBackgroundColorError: string): UiSdlDarkTheme;

  /**
   * componentBackgroundColorSuccess
   */
  readonly componentBackgroundColorSuccess: string;
  withComponentBackgroundColorSuccess(componentBackgroundColorSuccess: string): UiSdlDarkTheme;

  /**
   * componentBackgroundColorWarning
   */
  readonly componentBackgroundColorWarning: string;
  withComponentBackgroundColorWarning(componentBackgroundColorWarning: string): UiSdlDarkTheme;

  /**
   * componentBorderColor
   */
  readonly componentBorderColor: string;
  withComponentBorderColor(componentBorderColor: string): UiSdlDarkTheme;

  /**
   * componentDividerColor
   */
  readonly componentDividerColor: string;
  withComponentDividerColor(componentDividerColor: string): UiSdlDarkTheme;

  /**
   * dangerColor
   */
  readonly dangerColor: string;
  withDangerColor(dangerColor: string): UiSdlDarkTheme;

  /**
   * dateIconColor
   */
  readonly dateIconColor: string;
  withDateIconColor(dateIconColor: string): UiSdlDarkTheme;

  /**
   * dateIconTextColor
   */
  readonly dateIconTextColor: string;
  withDateIconTextColor(dateIconTextColor: string): UiSdlDarkTheme;

  /**
   * dropdownDescriptionBackgroundColor
   */
  readonly dropdownDescriptionBackgroundColor: string;
  withDropdownDescriptionBackgroundColor(dropdownDescriptionBackgroundColor: string): UiSdlDarkTheme;

  /**
   * dropdownDescriptionColor
   */
  readonly dropdownDescriptionColor: string;
  withDropdownDescriptionColor(dropdownDescriptionColor: string): UiSdlDarkTheme;

  /**
   * dropdownMessageColor
   */
  readonly dropdownMessageColor: string;
  withDropdownMessageColor(dropdownMessageColor: string): UiSdlDarkTheme;

  /**
   * dropdownOptionDividerColor
   */
  readonly dropdownOptionDividerColor: string;
  withDropdownOptionDividerColor(dropdownOptionDividerColor: string): UiSdlDarkTheme;

  /**
   * dropdownSelectionColor
   */
  readonly dropdownSelectionColor: string;
  withDropdownSelectionColor(dropdownSelectionColor: string): UiSdlDarkTheme;

  /**
   * dynamicComponentLoaderBackgroundColor
   */
  readonly dynamicComponentLoaderBackgroundColor: string;
  withDynamicComponentLoaderBackgroundColor(dynamicComponentLoaderBackgroundColor: string): UiSdlDarkTheme;

  /**
   * expressionFocusedInputBackgroundColor
   */
  readonly expressionFocusedInputBackgroundColor: string;
  withExpressionFocusedInputBackgroundColor(expressionFocusedInputBackgroundColor: string): UiSdlDarkTheme;

  /**
   * fontColor
   */
  readonly fontColor: string;
  withFontColor(fontColor: string): UiSdlDarkTheme;

  /**
   * formFieldBackgroundColor
   */
  readonly formFieldBackgroundColor: string;
  withFormFieldBackgroundColor(formFieldBackgroundColor: string): UiSdlDarkTheme;

  /**
   * formFieldBackgroundColorDisabled
   */
  readonly formFieldBackgroundColorDisabled: string;
  withFormFieldBackgroundColorDisabled(formFieldBackgroundColorDisabled: string): UiSdlDarkTheme;

  /**
   * formFieldBorderColor
   */
  readonly formFieldBorderColor: string;
  withFormFieldBorderColor(formFieldBorderColor: string): UiSdlDarkTheme;

  /**
   * formFieldBorderColorDisabled
   */
  readonly formFieldBorderColorDisabled: string;
  withFormFieldBorderColorDisabled(formFieldBorderColorDisabled: string): UiSdlDarkTheme;

  /**
   * formFieldColorDisabled
   */
  readonly formFieldColorDisabled: string;
  withFormFieldColorDisabled(formFieldColorDisabled: string): UiSdlDarkTheme;

  /**
   * formFieldColorHint
   */
  readonly formFieldColorHint: string;
  withFormFieldColorHint(formFieldColorHint: string): UiSdlDarkTheme;

  /**
   * formFieldErrorBorderColor
   */
  readonly formFieldErrorBorderColor: string;
  withFormFieldErrorBorderColor(formFieldErrorBorderColor: string): UiSdlDarkTheme;

  /**
   * formFieldErrorHoverBorderColor
   */
  readonly formFieldErrorHoverBorderColor: string;
  withFormFieldErrorHoverBorderColor(formFieldErrorHoverBorderColor: string): UiSdlDarkTheme;

  /**
   * formFieldHeaderColorDisabled
   */
  readonly formFieldHeaderColorDisabled: string;
  withFormFieldHeaderColorDisabled(formFieldHeaderColorDisabled: string): UiSdlDarkTheme;

  /**
   * formFieldHoverBackgroundColor
   */
  readonly formFieldHoverBackgroundColor: string;
  withFormFieldHoverBackgroundColor(formFieldHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * formFieldHoverBorderColor
   */
  readonly formFieldHoverBorderColor: string;
  withFormFieldHoverBorderColor(formFieldHoverBorderColor: string): UiSdlDarkTheme;

  /**
   * formFieldLabelErrorColor
   */
  readonly formFieldLabelErrorColor: string;
  withFormFieldLabelErrorColor(formFieldLabelErrorColor: string): UiSdlDarkTheme;

  /**
   * formFieldLabelFocusColor
   */
  readonly formFieldLabelFocusColor: string;
  withFormFieldLabelFocusColor(formFieldLabelFocusColor: string): UiSdlDarkTheme;

  /**
   * formFieldSetLinkHoverColor
   */
  readonly formFieldSetLinkHoverColor: string;
  withFormFieldSetLinkHoverColor(formFieldSetLinkHoverColor: string): UiSdlDarkTheme;

  /**
   * formFieldVariantBorderColor
   */
  readonly formFieldVariantBorderColor: string;
  withFormFieldVariantBorderColor(formFieldVariantBorderColor: string): UiSdlDarkTheme;

  /**
   * gaugeAxisBarColor
   */
  readonly gaugeAxisBarColor: string;
  withGaugeAxisBarColor(gaugeAxisBarColor: string): UiSdlDarkTheme;

  /**
   * gaugeFontColor
   */
  readonly gaugeFontColor: string;
  withGaugeFontColor(gaugeFontColor: string): UiSdlDarkTheme;

  /**
   * gaugeProgressBarDefaultColor
   */
  readonly gaugeProgressBarDefaultColor: string;
  withGaugeProgressBarDefaultColor(gaugeProgressBarDefaultColor: string): UiSdlDarkTheme;

  /**
   * gradientLinearCardParentLeft
   */
  readonly gradientLinearCardParentLeft: string;
  withGradientLinearCardParentLeft(gradientLinearCardParentLeft: string): UiSdlDarkTheme;

  /**
   * gradientLinearCardParentRight
   */
  readonly gradientLinearCardParentRight: string;
  withGradientLinearCardParentRight(gradientLinearCardParentRight: string): UiSdlDarkTheme;

  /**
   * gradientLinearCardChildLeft
   */
  readonly gradientLinearCardChildLeft: string;
  withGradientLinearCardChildLeft(gradientLinearCardChildLeft: string): UiSdlDarkTheme;

  /**
   * gradientLinearCardChildRight
   */
  readonly gradientLinearCardChildRight: string;
  withGradientLinearCardChildRight(gradientLinearCardChildRight: string): UiSdlDarkTheme;

  /**
   * gradientLinearNav
   */
  readonly gradientLinearNav: string;
  withGradientLinearNav(gradientLinearNav: string): UiSdlDarkTheme;

  /**
   * graphVisualizationClusterNodeFillColor
   */
  readonly graphVisualizationClusterNodeFillColor: string;
  withGraphVisualizationClusterNodeFillColor(graphVisualizationClusterNodeFillColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationClusterNodeOutlineColor
   */
  readonly graphVisualizationClusterNodeOutlineColor: string;
  withGraphVisualizationClusterNodeOutlineColor(graphVisualizationClusterNodeOutlineColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationGlyphFontColor
   */
  readonly graphVisualizationGlyphFontColor: string;
  withGraphVisualizationGlyphFontColor(graphVisualizationGlyphFontColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationLegendBackgroundColor
   */
  readonly graphVisualizationLegendBackgroundColor: string;
  withGraphVisualizationLegendBackgroundColor(graphVisualizationLegendBackgroundColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationLegendViewMoreButtonFontColor
   */
  readonly graphVisualizationLegendViewMoreButtonFontColor: string;
  withGraphVisualizationLegendViewMoreButtonFontColor(graphVisualizationLegendViewMoreButtonFontColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationMapTheme
   */
  readonly graphVisualizationMapTheme: string;
  withGraphVisualizationMapTheme(graphVisualizationMapTheme: string): UiSdlDarkTheme;

  /**
   * graphVisualizationMergedEdgeGlyphBackgroundColor
   */
  readonly graphVisualizationMergedEdgeGlyphBackgroundColor: string;
  withGraphVisualizationMergedEdgeGlyphBackgroundColor(graphVisualizationMergedEdgeGlyphBackgroundColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationNodeDefaultDonutColor
   */
  readonly graphVisualizationNodeDefaultDonutColor: string;
  withGraphVisualizationNodeDefaultDonutColor(graphVisualizationNodeDefaultDonutColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationNodeInfoGlyphBackgroundColor
   */
  readonly graphVisualizationNodeInfoGlyphBackgroundColor: string;
  withGraphVisualizationNodeInfoGlyphBackgroundColor(graphVisualizationNodeInfoGlyphBackgroundColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationNodeInfoGlyphFontColor
   */
  readonly graphVisualizationNodeInfoGlyphFontColor: string;
  withGraphVisualizationNodeInfoGlyphFontColor(graphVisualizationNodeInfoGlyphFontColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationPercentageDonutSegmentColor
   */
  readonly graphVisualizationPercentageDonutSegmentColor: string;
  withGraphVisualizationPercentageDonutSegmentColor(graphVisualizationPercentageDonutSegmentColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationTimeBarBackgroundColor
   */
  readonly graphVisualizationTimeBarBackgroundColor: string;
  withGraphVisualizationTimeBarBackgroundColor(graphVisualizationTimeBarBackgroundColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationTimeBarColor
   */
  readonly graphVisualizationTimeBarColor: string;
  withGraphVisualizationTimeBarColor(graphVisualizationTimeBarColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationTimeBarHoverColor
   */
  readonly graphVisualizationTimeBarHoverColor: string;
  withGraphVisualizationTimeBarHoverColor(graphVisualizationTimeBarHoverColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationTimeBarScaleHoverColor
   */
  readonly graphVisualizationTimeBarScaleHoverColor: string;
  withGraphVisualizationTimeBarScaleHoverColor(graphVisualizationTimeBarScaleHoverColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationTooltipBackgroundColor
   */
  readonly graphVisualizationTooltipBackgroundColor: string;
  withGraphVisualizationTooltipBackgroundColor(graphVisualizationTooltipBackgroundColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationTooltipBodyColor
   */
  readonly graphVisualizationTooltipBodyColor: string;
  withGraphVisualizationTooltipBodyColor(graphVisualizationTooltipBodyColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationTooltipSubtitleColor
   */
  readonly graphVisualizationTooltipSubtitleColor: string;
  withGraphVisualizationTooltipSubtitleColor(graphVisualizationTooltipSubtitleColor: string): UiSdlDarkTheme;

  /**
   * graphVisualizationTooltipTitleColor
   */
  readonly graphVisualizationTooltipTitleColor: string;
  withGraphVisualizationTooltipTitleColor(graphVisualizationTooltipTitleColor: string): UiSdlDarkTheme;

  /**
   * gridCellColorWheelBackgroundColor
   */
  readonly gridCellColorWheelBackgroundColor: string;
  withGridCellColorWheelBackgroundColor(gridCellColorWheelBackgroundColor: string): UiSdlDarkTheme;

  /**
   * gridHeaderFontColor
   */
  readonly gridHeaderFontColor: string;
  withGridHeaderFontColor(gridHeaderFontColor: string): UiSdlDarkTheme;

  /**
   * gridHoverBackgroundColor
   */
  readonly gridHoverBackgroundColor: string;
  withGridHoverBackgroundColor(gridHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * gridMessageBackgroundColor
   */
  readonly gridMessageBackgroundColor: string;
  withGridMessageBackgroundColor(gridMessageBackgroundColor: string): UiSdlDarkTheme;

  /**
   * gridPagerLabelFontColor
   */
  readonly gridPagerLabelFontColor: string;
  withGridPagerLabelFontColor(gridPagerLabelFontColor: string): UiSdlDarkTheme;

  /**
   * gridPagerSizesFontColor
   */
  readonly gridPagerSizesFontColor: string;
  withGridPagerSizesFontColor(gridPagerSizesFontColor: string): UiSdlDarkTheme;

  /**
   * gridSelectedCellBackgroundColor
   */
  readonly gridSelectedCellBackgroundColor: string;
  withGridSelectedCellBackgroundColor(gridSelectedCellBackgroundColor: string): UiSdlDarkTheme;

  /**
   * gridSelectedCellBorderColor
   */
  readonly gridSelectedCellBorderColor: string;
  withGridSelectedCellBorderColor(gridSelectedCellBorderColor: string): UiSdlDarkTheme;

  /**
   * gridSelectedFontColor
   */
  readonly gridSelectedFontColor: string;
  withGridSelectedFontColor(gridSelectedFontColor: string): UiSdlDarkTheme;

  /**
   * gridSelectedHoverBackgroundColor
   */
  readonly gridSelectedHoverBackgroundColor: string;
  withGridSelectedHoverBackgroundColor(gridSelectedHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * iconGroupColor
   */
  readonly iconGroupColor: string;
  withIconGroupColor(iconGroupColor: string): UiSdlDarkTheme;

  /**
   * indicatorBarBackgroundColor
   */
  readonly indicatorBarBackgroundColor: string;
  withIndicatorBarBackgroundColor(indicatorBarBackgroundColor: string): UiSdlDarkTheme;

  /**
   * infoColor
   */
  readonly infoColor: string;
  withInfoColor(infoColor: string): UiSdlDarkTheme;

  /**
   * invertedComponentBackgroundColor
   */
  readonly invertedComponentBackgroundColor: string;
  withInvertedComponentBackgroundColor(invertedComponentBackgroundColor: string): UiSdlDarkTheme;

  /**
   * kanbanBoardBackgroundColumnTitle
   */
  readonly kanbanBoardBackgroundColumnTitle: string;
  withKanbanBoardBackgroundColumnTitle(kanbanBoardBackgroundColumnTitle: string): UiSdlDarkTheme;

  /**
   * kanbanBoardBackgroundItemSlot
   */
  readonly kanbanBoardBackgroundItemSlot: string;
  withKanbanBoardBackgroundItemSlot(kanbanBoardBackgroundItemSlot: string): UiSdlDarkTheme;

  /**
   * kanbanBoardBackgroundLayout
   */
  readonly kanbanBoardBackgroundLayout: string;
  withKanbanBoardBackgroundLayout(kanbanBoardBackgroundLayout: string): UiSdlDarkTheme;

  /**
   * kanbanBoardBorderTitle
   */
  readonly kanbanBoardBorderTitle: string;
  withKanbanBoardBorderTitle(kanbanBoardBorderTitle: string): UiSdlDarkTheme;

  /**
   * kanbanBoardButtonColor
   */
  readonly kanbanBoardButtonColor: string;
  withKanbanBoardButtonColor(kanbanBoardButtonColor: string): UiSdlDarkTheme;

  /**
   * kanbanBoardCardContentColor
   */
  readonly kanbanBoardCardContentColor: string;
  withKanbanBoardCardContentColor(kanbanBoardCardContentColor: string): UiSdlDarkTheme;

  /**
   * kanbanBoardCardHeadLineBlockColor
   */
  readonly kanbanBoardCardHeadLineBlockColor: string;
  withKanbanBoardCardHeadLineBlockColor(kanbanBoardCardHeadLineBlockColor: string): UiSdlDarkTheme;

  /**
   * kanbanBoardContentBackgroundColor
   */
  readonly kanbanBoardContentBackgroundColor: string;
  withKanbanBoardContentBackgroundColor(kanbanBoardContentBackgroundColor: string): UiSdlDarkTheme;

  /**
   * kanbanBoardTextBackgroundCollectionList
   */
  readonly kanbanBoardTextBackgroundCollectionList: string;
  withKanbanBoardTextBackgroundCollectionList(kanbanBoardTextBackgroundCollectionList: string): UiSdlDarkTheme;

  /**
   * kanbanBoardTitleColor
   */
  readonly kanbanBoardTitleColor: string;
  withKanbanBoardTitleColor(kanbanBoardTitleColor: string): UiSdlDarkTheme;

  /**
   * kendoAppSurfaceColor
   */
  readonly kendoAppSurfaceColor?: string | null;
  withKendoAppSurfaceColor(kendoAppSurfaceColor: string | null): UiSdlDarkTheme;

  /**
   * kendoOnAppSurfaceColor
   */
  readonly kendoOnAppSurfaceColor?: string | null;
  withKendoOnAppSurfaceColor(kendoOnAppSurfaceColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSubtleColor
   */
  readonly kendoSubtleColor?: string | null;
  withKendoSubtleColor(kendoSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSurfaceColor
   */
  readonly kendoSurfaceColor?: string | null;
  withKendoSurfaceColor(kendoSurfaceColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSurfaceAltColor
   */
  readonly kendoSurfaceAltColor?: string | null;
  withKendoSurfaceAltColor(kendoSurfaceAltColor: string | null): UiSdlDarkTheme;

  /**
   * kendoBorderColor
   */
  readonly kendoBorderColor?: string | null;
  withKendoBorderColor(kendoBorderColor: string | null): UiSdlDarkTheme;

  /**
   * kendoBorderAltColor
   */
  readonly kendoBorderAltColor?: string | null;
  withKendoBorderAltColor(kendoBorderAltColor: string | null): UiSdlDarkTheme;

  /**
   * kendoBaseSubtleColor
   */
  readonly kendoBaseSubtleColor?: string | null;
  withKendoBaseSubtleColor(kendoBaseSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoBaseSubtleHoverColor
   */
  readonly kendoBaseSubtleHoverColor?: string | null;
  withKendoBaseSubtleHoverColor(kendoBaseSubtleHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoBaseSubtleActiveColor
   */
  readonly kendoBaseSubtleActiveColor?: string | null;
  withKendoBaseSubtleActiveColor(kendoBaseSubtleActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoBaseColor
   */
  readonly kendoBaseColor?: string | null;
  withKendoBaseColor(kendoBaseColor: string | null): UiSdlDarkTheme;

  /**
   * kendoBaseHoverColor
   */
  readonly kendoBaseHoverColor?: string | null;
  withKendoBaseHoverColor(kendoBaseHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoBaseActiveColor
   */
  readonly kendoBaseActiveColor?: string | null;
  withKendoBaseActiveColor(kendoBaseActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoBaseEmphasisColor
   */
  readonly kendoBaseEmphasisColor?: string | null;
  withKendoBaseEmphasisColor(kendoBaseEmphasisColor: string | null): UiSdlDarkTheme;

  /**
   * kendoBaseOnSubtleColor
   */
  readonly kendoBaseOnSubtleColor?: string | null;
  withKendoBaseOnSubtleColor(kendoBaseOnSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoOnBaseColor
   */
  readonly kendoOnBaseColor?: string | null;
  withKendoOnBaseColor(kendoOnBaseColor: string | null): UiSdlDarkTheme;

  /**
   * kendoBaseOnSurfaceColor
   */
  readonly kendoBaseOnSurfaceColor?: string | null;
  withKendoBaseOnSurfaceColor(kendoBaseOnSurfaceColor: string | null): UiSdlDarkTheme;

  /**
   * kendoElevation01
   */
  readonly kendoElevation01?: string | null;
  withKendoElevation01(kendoElevation01: string | null): UiSdlDarkTheme;

  /**
   * kendoElevation02
   */
  readonly kendoElevation02?: string | null;
  withKendoElevation02(kendoElevation02: string | null): UiSdlDarkTheme;

  /**
   * kendoElevation03
   */
  readonly kendoElevation03?: string | null;
  withKendoElevation03(kendoElevation03: string | null): UiSdlDarkTheme;

  /**
   * kendoElevation04
   */
  readonly kendoElevation04?: string | null;
  withKendoElevation04(kendoElevation04: string | null): UiSdlDarkTheme;

  /**
   * kendoElevation05
   */
  readonly kendoElevation05?: string | null;
  withKendoElevation05(kendoElevation05: string | null): UiSdlDarkTheme;

  /**
   * kendoElevation06
   */
  readonly kendoElevation06?: string | null;
  withKendoElevation06(kendoElevation06: string | null): UiSdlDarkTheme;

  /**
   * kendoElevation07
   */
  readonly kendoElevation07?: string | null;
  withKendoElevation07(kendoElevation07: string | null): UiSdlDarkTheme;

  /**
   * kendoElevation08
   */
  readonly kendoElevation08?: string | null;
  withKendoElevation08(kendoElevation08: string | null): UiSdlDarkTheme;

  /**
   * kendoElevation09
   */
  readonly kendoElevation09?: string | null;
  withKendoElevation09(kendoElevation09: string | null): UiSdlDarkTheme;

  /**
   * kendoPrimarySubtleColor
   */
  readonly kendoPrimarySubtleColor?: string | null;
  withKendoPrimarySubtleColor(kendoPrimarySubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoPrimarySubtleHoverColor
   */
  readonly kendoPrimarySubtleHoverColor?: string | null;
  withKendoPrimarySubtleHoverColor(kendoPrimarySubtleHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoPrimarySubtleActiveColor
   */
  readonly kendoPrimarySubtleActiveColor?: string | null;
  withKendoPrimarySubtleActiveColor(kendoPrimarySubtleActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoPrimaryColor
   */
  readonly kendoPrimaryColor?: string | null;
  withKendoPrimaryColor(kendoPrimaryColor: string | null): UiSdlDarkTheme;

  /**
   * kendoPrimaryHoverColor
   */
  readonly kendoPrimaryHoverColor?: string | null;
  withKendoPrimaryHoverColor(kendoPrimaryHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoPrimaryActiveColor
   */
  readonly kendoPrimaryActiveColor?: string | null;
  withKendoPrimaryActiveColor(kendoPrimaryActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoPrimaryEmphasisColor
   */
  readonly kendoPrimaryEmphasisColor?: string | null;
  withKendoPrimaryEmphasisColor(kendoPrimaryEmphasisColor: string | null): UiSdlDarkTheme;

  /**
   * kendoPrimaryOnSubtleColor
   */
  readonly kendoPrimaryOnSubtleColor?: string | null;
  withKendoPrimaryOnSubtleColor(kendoPrimaryOnSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoOnPrimaryColor
   */
  readonly kendoOnPrimaryColor?: string | null;
  withKendoOnPrimaryColor(kendoOnPrimaryColor: string | null): UiSdlDarkTheme;

  /**
   * kendoPrimaryOnSurfaceColor
   */
  readonly kendoPrimaryOnSurfaceColor?: string | null;
  withKendoPrimaryOnSurfaceColor(kendoPrimaryOnSurfaceColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSecondarySubtleColor
   */
  readonly kendoSecondarySubtleColor?: string | null;
  withKendoSecondarySubtleColor(kendoSecondarySubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSecondarySubtleHoverColor
   */
  readonly kendoSecondarySubtleHoverColor?: string | null;
  withKendoSecondarySubtleHoverColor(kendoSecondarySubtleHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSecondarySubtleActiveColor
   */
  readonly kendoSecondarySubtleActiveColor?: string | null;
  withKendoSecondarySubtleActiveColor(kendoSecondarySubtleActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSecondaryColor
   */
  readonly kendoSecondaryColor?: string | null;
  withKendoSecondaryColor(kendoSecondaryColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSecondaryHoverColor
   */
  readonly kendoSecondaryHoverColor?: string | null;
  withKendoSecondaryHoverColor(kendoSecondaryHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSecondaryActiveColor
   */
  readonly kendoSecondaryActiveColor?: string | null;
  withKendoSecondaryActiveColor(kendoSecondaryActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSecondaryEmphasisColor
   */
  readonly kendoSecondaryEmphasisColor?: string | null;
  withKendoSecondaryEmphasisColor(kendoSecondaryEmphasisColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSecondaryOnSubtleColor
   */
  readonly kendoSecondaryOnSubtleColor?: string | null;
  withKendoSecondaryOnSubtleColor(kendoSecondaryOnSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoOnSecondaryColor
   */
  readonly kendoOnSecondaryColor?: string | null;
  withKendoOnSecondaryColor(kendoOnSecondaryColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSecondaryOnSurfaceColor
   */
  readonly kendoSecondaryOnSurfaceColor?: string | null;
  withKendoSecondaryOnSurfaceColor(kendoSecondaryOnSurfaceColor: string | null): UiSdlDarkTheme;

  /**
   * kendoTertiarySubtleColor
   */
  readonly kendoTertiarySubtleColor?: string | null;
  withKendoTertiarySubtleColor(kendoTertiarySubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoTertiarySubtleHoverColor
   */
  readonly kendoTertiarySubtleHoverColor?: string | null;
  withKendoTertiarySubtleHoverColor(kendoTertiarySubtleHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoTertiarySubtleActiveColor
   */
  readonly kendoTertiarySubtleActiveColor?: string | null;
  withKendoTertiarySubtleActiveColor(kendoTertiarySubtleActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoTertiaryColor
   */
  readonly kendoTertiaryColor?: string | null;
  withKendoTertiaryColor(kendoTertiaryColor: string | null): UiSdlDarkTheme;

  /**
   * kendoTertiaryHoverColor
   */
  readonly kendoTertiaryHoverColor?: string | null;
  withKendoTertiaryHoverColor(kendoTertiaryHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoTertiaryActiveColor
   */
  readonly kendoTertiaryActiveColor?: string | null;
  withKendoTertiaryActiveColor(kendoTertiaryActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoTertiaryEmphasisColor
   */
  readonly kendoTertiaryEmphasisColor?: string | null;
  withKendoTertiaryEmphasisColor(kendoTertiaryEmphasisColor: string | null): UiSdlDarkTheme;

  /**
   * kendoTertiaryOnSubtleColor
   */
  readonly kendoTertiaryOnSubtleColor?: string | null;
  withKendoTertiaryOnSubtleColor(kendoTertiaryOnSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoOnTertiaryColor
   */
  readonly kendoOnTertiaryColor?: string | null;
  withKendoOnTertiaryColor(kendoOnTertiaryColor: string | null): UiSdlDarkTheme;

  /**
   * kendoTertiaryOnSurfaceColor
   */
  readonly kendoTertiaryOnSurfaceColor?: string | null;
  withKendoTertiaryOnSurfaceColor(kendoTertiaryOnSurfaceColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInfoSubtleColor
   */
  readonly kendoInfoSubtleColor?: string | null;
  withKendoInfoSubtleColor(kendoInfoSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInfoSubtleHoverColor
   */
  readonly kendoInfoSubtleHoverColor?: string | null;
  withKendoInfoSubtleHoverColor(kendoInfoSubtleHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInfoSubtleActiveColor
   */
  readonly kendoInfoSubtleActiveColor?: string | null;
  withKendoInfoSubtleActiveColor(kendoInfoSubtleActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInfoColor
   */
  readonly kendoInfoColor?: string | null;
  withKendoInfoColor(kendoInfoColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInfoHoverColor
   */
  readonly kendoInfoHoverColor?: string | null;
  withKendoInfoHoverColor(kendoInfoHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInfoActiveColor
   */
  readonly kendoInfoActiveColor?: string | null;
  withKendoInfoActiveColor(kendoInfoActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInfoEmphasisColor
   */
  readonly kendoInfoEmphasisColor?: string | null;
  withKendoInfoEmphasisColor(kendoInfoEmphasisColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInfoOnSubtleColor
   */
  readonly kendoInfoOnSubtleColor?: string | null;
  withKendoInfoOnSubtleColor(kendoInfoOnSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoOnInfoColor
   */
  readonly kendoOnInfoColor?: string | null;
  withKendoOnInfoColor(kendoOnInfoColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInfoOnSurfaceColor
   */
  readonly kendoInfoOnSurfaceColor?: string | null;
  withKendoInfoOnSurfaceColor(kendoInfoOnSurfaceColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSuccessSubtleColor
   */
  readonly kendoSuccessSubtleColor?: string | null;
  withKendoSuccessSubtleColor(kendoSuccessSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSuccessSubtleHoverColor
   */
  readonly kendoSuccessSubtleHoverColor?: string | null;
  withKendoSuccessSubtleHoverColor(kendoSuccessSubtleHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSuccessSubtleActiveColor
   */
  readonly kendoSuccessSubtleActiveColor?: string | null;
  withKendoSuccessSubtleActiveColor(kendoSuccessSubtleActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSuccessColor
   */
  readonly kendoSuccessColor?: string | null;
  withKendoSuccessColor(kendoSuccessColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSuccessHoverColor
   */
  readonly kendoSuccessHoverColor?: string | null;
  withKendoSuccessHoverColor(kendoSuccessHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSuccessActiveColor
   */
  readonly kendoSuccessActiveColor?: string | null;
  withKendoSuccessActiveColor(kendoSuccessActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSuccessEmphasisColor
   */
  readonly kendoSuccessEmphasisColor?: string | null;
  withKendoSuccessEmphasisColor(kendoSuccessEmphasisColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSuccessOnSubtleColor
   */
  readonly kendoSuccessOnSubtleColor?: string | null;
  withKendoSuccessOnSubtleColor(kendoSuccessOnSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoOnSuccessColor
   */
  readonly kendoOnSuccessColor?: string | null;
  withKendoOnSuccessColor(kendoOnSuccessColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSuccessOnSurfaceColor
   */
  readonly kendoSuccessOnSurfaceColor?: string | null;
  withKendoSuccessOnSurfaceColor(kendoSuccessOnSurfaceColor: string | null): UiSdlDarkTheme;

  /**
   * kendoWarningSubtleColor
   */
  readonly kendoWarningSubtleColor?: string | null;
  withKendoWarningSubtleColor(kendoWarningSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoWarningSubtleHoverColor
   */
  readonly kendoWarningSubtleHoverColor?: string | null;
  withKendoWarningSubtleHoverColor(kendoWarningSubtleHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoWarningSubtleActiveColor
   */
  readonly kendoWarningSubtleActiveColor?: string | null;
  withKendoWarningSubtleActiveColor(kendoWarningSubtleActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoWarningColor
   */
  readonly kendoWarningColor?: string | null;
  withKendoWarningColor(kendoWarningColor: string | null): UiSdlDarkTheme;

  /**
   * kendoWarningHoverColor
   */
  readonly kendoWarningHoverColor?: string | null;
  withKendoWarningHoverColor(kendoWarningHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoWarningActiveColor
   */
  readonly kendoWarningActiveColor?: string | null;
  withKendoWarningActiveColor(kendoWarningActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoWarningEmphasisColor
   */
  readonly kendoWarningEmphasisColor?: string | null;
  withKendoWarningEmphasisColor(kendoWarningEmphasisColor: string | null): UiSdlDarkTheme;

  /**
   * kendoWarningOnSubtleColor
   */
  readonly kendoWarningOnSubtleColor?: string | null;
  withKendoWarningOnSubtleColor(kendoWarningOnSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoOnWarningColor
   */
  readonly kendoOnWarningColor?: string | null;
  withKendoOnWarningColor(kendoOnWarningColor: string | null): UiSdlDarkTheme;

  /**
   * kendoWarningOnSurfaceColor
   */
  readonly kendoWarningOnSurfaceColor?: string | null;
  withKendoWarningOnSurfaceColor(kendoWarningOnSurfaceColor: string | null): UiSdlDarkTheme;

  /**
   * kendoErrorSubtleColor
   */
  readonly kendoErrorSubtleColor?: string | null;
  withKendoErrorSubtleColor(kendoErrorSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoErrorSubtleHoverColor
   */
  readonly kendoErrorSubtleHoverColor?: string | null;
  withKendoErrorSubtleHoverColor(kendoErrorSubtleHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoErrorSubtleActiveColor
   */
  readonly kendoErrorSubtleActiveColor?: string | null;
  withKendoErrorSubtleActiveColor(kendoErrorSubtleActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoErrorColor
   */
  readonly kendoErrorColor?: string | null;
  withKendoErrorColor(kendoErrorColor: string | null): UiSdlDarkTheme;

  /**
   * kendoErrorHoverColor
   */
  readonly kendoErrorHoverColor?: string | null;
  withKendoErrorHoverColor(kendoErrorHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoErrorActiveColor
   */
  readonly kendoErrorActiveColor?: string | null;
  withKendoErrorActiveColor(kendoErrorActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoErrorEmphasisColor
   */
  readonly kendoErrorEmphasisColor?: string | null;
  withKendoErrorEmphasisColor(kendoErrorEmphasisColor: string | null): UiSdlDarkTheme;

  /**
   * kendoErrorOnSubtleColor
   */
  readonly kendoErrorOnSubtleColor?: string | null;
  withKendoErrorOnSubtleColor(kendoErrorOnSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoOnErrorColor
   */
  readonly kendoOnErrorColor?: string | null;
  withKendoOnErrorColor(kendoOnErrorColor: string | null): UiSdlDarkTheme;

  /**
   * kendoErrorOnSurfaceColor
   */
  readonly kendoErrorOnSurfaceColor?: string | null;
  withKendoErrorOnSurfaceColor(kendoErrorOnSurfaceColor: string | null): UiSdlDarkTheme;

  /**
   * kendoLightSubtleColor
   */
  readonly kendoLightSubtleColor?: string | null;
  withKendoLightSubtleColor(kendoLightSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoLightSubtleHoverColor
   */
  readonly kendoLightSubtleHoverColor?: string | null;
  withKendoLightSubtleHoverColor(kendoLightSubtleHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoLightSubtleActiveColor
   */
  readonly kendoLightSubtleActiveColor?: string | null;
  withKendoLightSubtleActiveColor(kendoLightSubtleActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoLightColor
   */
  readonly kendoLightColor?: string | null;
  withKendoLightColor(kendoLightColor: string | null): UiSdlDarkTheme;

  /**
   * kendoLightHoverColor
   */
  readonly kendoLightHoverColor?: string | null;
  withKendoLightHoverColor(kendoLightHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoLightActiveColor
   */
  readonly kendoLightActiveColor?: string | null;
  withKendoLightActiveColor(kendoLightActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoLightEmphasisColor
   */
  readonly kendoLightEmphasisColor?: string | null;
  withKendoLightEmphasisColor(kendoLightEmphasisColor: string | null): UiSdlDarkTheme;

  /**
   * kendoLightOnSubtleColor
   */
  readonly kendoLightOnSubtleColor?: string | null;
  withKendoLightOnSubtleColor(kendoLightOnSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoOnLightColor
   */
  readonly kendoOnLightColor?: string | null;
  withKendoOnLightColor(kendoOnLightColor: string | null): UiSdlDarkTheme;

  /**
   * kendoLightOnSurfaceColor
   */
  readonly kendoLightOnSurfaceColor?: string | null;
  withKendoLightOnSurfaceColor(kendoLightOnSurfaceColor: string | null): UiSdlDarkTheme;

  /**
   * kendoDarkSubtleColor
   */
  readonly kendoDarkSubtleColor?: string | null;
  withKendoDarkSubtleColor(kendoDarkSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoDarkSubtleHoverColor
   */
  readonly kendoDarkSubtleHoverColor?: string | null;
  withKendoDarkSubtleHoverColor(kendoDarkSubtleHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoDarkSubtleActiveColor
   */
  readonly kendoDarkSubtleActiveColor?: string | null;
  withKendoDarkSubtleActiveColor(kendoDarkSubtleActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoDarkColor
   */
  readonly kendoDarkColor?: string | null;
  withKendoDarkColor(kendoDarkColor: string | null): UiSdlDarkTheme;

  /**
   * kendoDarkHoverColor
   */
  readonly kendoDarkHoverColor?: string | null;
  withKendoDarkHoverColor(kendoDarkHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoDarkActiveColor
   */
  readonly kendoDarkActiveColor?: string | null;
  withKendoDarkActiveColor(kendoDarkActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoDarkEmphasisColor
   */
  readonly kendoDarkEmphasisColor?: string | null;
  withKendoDarkEmphasisColor(kendoDarkEmphasisColor: string | null): UiSdlDarkTheme;

  /**
   * kendoDarkOnSubtleColor
   */
  readonly kendoDarkOnSubtleColor?: string | null;
  withKendoDarkOnSubtleColor(kendoDarkOnSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoOnDarkColor
   */
  readonly kendoOnDarkColor?: string | null;
  withKendoOnDarkColor(kendoOnDarkColor: string | null): UiSdlDarkTheme;

  /**
   * kendoDarkOnSurfaceColor
   */
  readonly kendoDarkOnSurfaceColor?: string | null;
  withKendoDarkOnSurfaceColor(kendoDarkOnSurfaceColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInverseSubtleColor
   */
  readonly kendoInverseSubtleColor?: string | null;
  withKendoInverseSubtleColor(kendoInverseSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInverseSubtleHoverColor
   */
  readonly kendoInverseSubtleHoverColor?: string | null;
  withKendoInverseSubtleHoverColor(kendoInverseSubtleHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInverseSubtleActiveColor
   */
  readonly kendoInverseSubtleActiveColor?: string | null;
  withKendoInverseSubtleActiveColor(kendoInverseSubtleActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInverseColor
   */
  readonly kendoInverseColor?: string | null;
  withKendoInverseColor(kendoInverseColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInverseHoverColor
   */
  readonly kendoInverseHoverColor?: string | null;
  withKendoInverseHoverColor(kendoInverseHoverColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInverseActiveColor
   */
  readonly kendoInverseActiveColor?: string | null;
  withKendoInverseActiveColor(kendoInverseActiveColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInverseEmphasisColor
   */
  readonly kendoInverseEmphasisColor?: string | null;
  withKendoInverseEmphasisColor(kendoInverseEmphasisColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInverseOnSubtleColor
   */
  readonly kendoInverseOnSubtleColor?: string | null;
  withKendoInverseOnSubtleColor(kendoInverseOnSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoOnInverseColor
   */
  readonly kendoOnInverseColor?: string | null;
  withKendoOnInverseColor(kendoOnInverseColor: string | null): UiSdlDarkTheme;

  /**
   * kendoInverseOnSurfaceColor
   */
  readonly kendoInverseOnSurfaceColor?: string | null;
  withKendoInverseOnSurfaceColor(kendoInverseOnSurfaceColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesAColor
   */
  readonly kendoSeriesAColor?: string | null;
  withKendoSeriesAColor(kendoSeriesAColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesABoldColor
   */
  readonly kendoSeriesABoldColor?: string | null;
  withKendoSeriesABoldColor(kendoSeriesABoldColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesABolderColor
   */
  readonly kendoSeriesABolderColor?: string | null;
  withKendoSeriesABolderColor(kendoSeriesABolderColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesASubtleColor
   */
  readonly kendoSeriesASubtleColor?: string | null;
  withKendoSeriesASubtleColor(kendoSeriesASubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesASubtlerColor
   */
  readonly kendoSeriesASubtlerColor?: string | null;
  withKendoSeriesASubtlerColor(kendoSeriesASubtlerColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesBColor
   */
  readonly kendoSeriesBColor?: string | null;
  withKendoSeriesBColor(kendoSeriesBColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesBBoldColor
   */
  readonly kendoSeriesBBoldColor?: string | null;
  withKendoSeriesBBoldColor(kendoSeriesBBoldColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesBBolderColor
   */
  readonly kendoSeriesBBolderColor?: string | null;
  withKendoSeriesBBolderColor(kendoSeriesBBolderColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesBSubtleColor
   */
  readonly kendoSeriesBSubtleColor?: string | null;
  withKendoSeriesBSubtleColor(kendoSeriesBSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesBSubtlerColor
   */
  readonly kendoSeriesBSubtlerColor?: string | null;
  withKendoSeriesBSubtlerColor(kendoSeriesBSubtlerColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesCColor
   */
  readonly kendoSeriesCColor?: string | null;
  withKendoSeriesCColor(kendoSeriesCColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesCBoldColor
   */
  readonly kendoSeriesCBoldColor?: string | null;
  withKendoSeriesCBoldColor(kendoSeriesCBoldColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesCBolderColor
   */
  readonly kendoSeriesCBolderColor?: string | null;
  withKendoSeriesCBolderColor(kendoSeriesCBolderColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesCSubtleColor
   */
  readonly kendoSeriesCSubtleColor?: string | null;
  withKendoSeriesCSubtleColor(kendoSeriesCSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesCSubtlerColor
   */
  readonly kendoSeriesCSubtlerColor?: string | null;
  withKendoSeriesCSubtlerColor(kendoSeriesCSubtlerColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesDColor
   */
  readonly kendoSeriesDColor?: string | null;
  withKendoSeriesDColor(kendoSeriesDColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesDBoldColor
   */
  readonly kendoSeriesDBoldColor?: string | null;
  withKendoSeriesDBoldColor(kendoSeriesDBoldColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesDBolderColor
   */
  readonly kendoSeriesDBolderColor?: string | null;
  withKendoSeriesDBolderColor(kendoSeriesDBolderColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesDSubtleColor
   */
  readonly kendoSeriesDSubtleColor?: string | null;
  withKendoSeriesDSubtleColor(kendoSeriesDSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesDSubtlerColor
   */
  readonly kendoSeriesDSubtlerColor?: string | null;
  withKendoSeriesDSubtlerColor(kendoSeriesDSubtlerColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesEColor
   */
  readonly kendoSeriesEColor?: string | null;
  withKendoSeriesEColor(kendoSeriesEColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesEBoldColor
   */
  readonly kendoSeriesEBoldColor?: string | null;
  withKendoSeriesEBoldColor(kendoSeriesEBoldColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesEBolderColor
   */
  readonly kendoSeriesEBolderColor?: string | null;
  withKendoSeriesEBolderColor(kendoSeriesEBolderColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesESubtleColor
   */
  readonly kendoSeriesESubtleColor?: string | null;
  withKendoSeriesESubtleColor(kendoSeriesESubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesESubtlerColor
   */
  readonly kendoSeriesESubtlerColor?: string | null;
  withKendoSeriesESubtlerColor(kendoSeriesESubtlerColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesFColor
   */
  readonly kendoSeriesFColor?: string | null;
  withKendoSeriesFColor(kendoSeriesFColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesFBoldColor
   */
  readonly kendoSeriesFBoldColor?: string | null;
  withKendoSeriesFBoldColor(kendoSeriesFBoldColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesFBolderColor
   */
  readonly kendoSeriesFBolderColor?: string | null;
  withKendoSeriesFBolderColor(kendoSeriesFBolderColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesFSubtleColor
   */
  readonly kendoSeriesFSubtleColor?: string | null;
  withKendoSeriesFSubtleColor(kendoSeriesFSubtleColor: string | null): UiSdlDarkTheme;

  /**
   * kendoSeriesFSubtlerColor
   */
  readonly kendoSeriesFSubtlerColor?: string | null;
  withKendoSeriesFSubtlerColor(kendoSeriesFSubtlerColor: string | null): UiSdlDarkTheme;

  /**
   * legendBackgroundColor
   */
  readonly legendBackgroundColor: string;
  withLegendBackgroundColor(legendBackgroundColor: string): UiSdlDarkTheme;

  /**
   * legendNameFontColor
   */
  readonly legendNameFontColor: string;
  withLegendNameFontColor(legendNameFontColor: string): UiSdlDarkTheme;

  /**
   * logoBlueBackgroundColor
   */
  readonly logoBlueBackgroundColor: string;
  withLogoBlueBackgroundColor(logoBlueBackgroundColor: string): UiSdlDarkTheme;

  /**
   * logoChocoBackgroundColor
   */
  readonly logoChocoBackgroundColor: string;
  withLogoChocoBackgroundColor(logoChocoBackgroundColor: string): UiSdlDarkTheme;

  /**
   * logoColor
   */
  readonly logoColor: string;
  withLogoColor(logoColor: string): UiSdlDarkTheme;

  /**
   * logoCyanBackgroundColor
   */
  readonly logoCyanBackgroundColor: string;
  withLogoCyanBackgroundColor(logoCyanBackgroundColor: string): UiSdlDarkTheme;

  /**
   * logoForestBackgroundColor
   */
  readonly logoForestBackgroundColor: string;
  withLogoForestBackgroundColor(logoForestBackgroundColor: string): UiSdlDarkTheme;

  /**
   * logoIconUrl
   */
  readonly logoIconUrl: string;
  withLogoIconUrl(logoIconUrl: string): UiSdlDarkTheme;

  /**
   * emptyStateIconUrl
   */
  readonly emptyStateIconUrl: string;
  withEmptyStateIconUrl(emptyStateIconUrl: string): UiSdlDarkTheme;

  /**
   * logoLimeBackgroundColor
   */
  readonly logoLimeBackgroundColor: string;
  withLogoLimeBackgroundColor(logoLimeBackgroundColor: string): UiSdlDarkTheme;

  /**
   * logoOliveBackgroundColor
   */
  readonly logoOliveBackgroundColor: string;
  withLogoOliveBackgroundColor(logoOliveBackgroundColor: string): UiSdlDarkTheme;

  /**
   * logoOrangeBackgroundColor
   */
  readonly logoOrangeBackgroundColor: string;
  withLogoOrangeBackgroundColor(logoOrangeBackgroundColor: string): UiSdlDarkTheme;

  /**
   * logoPlumBackgroundColor
   */
  readonly logoPlumBackgroundColor: string;
  withLogoPlumBackgroundColor(logoPlumBackgroundColor: string): UiSdlDarkTheme;

  /**
   * logoPurpleBackgroundColor
   */
  readonly logoPurpleBackgroundColor: string;
  withLogoPurpleBackgroundColor(logoPurpleBackgroundColor: string): UiSdlDarkTheme;

  /**
   * logoSlateBackgroundColor
   */
  readonly logoSlateBackgroundColor: string;
  withLogoSlateBackgroundColor(logoSlateBackgroundColor: string): UiSdlDarkTheme;

  /**
   * mapMarkerClusterColor
   */
  readonly mapMarkerClusterColor: string;
  withMapMarkerClusterColor(mapMarkerClusterColor: string): UiSdlDarkTheme;

  /**
   * mapTooltipAdditionalFieldsDescriptionFontColor
   */
  readonly mapTooltipAdditionalFieldsDescriptionFontColor: string;
  withMapTooltipAdditionalFieldsDescriptionFontColor(mapTooltipAdditionalFieldsDescriptionFontColor: string): UiSdlDarkTheme;

  /**
   * mapTooltipAdditionalFieldsHeaderFontColor
   */
  readonly mapTooltipAdditionalFieldsHeaderFontColor: string;
  withMapTooltipAdditionalFieldsHeaderFontColor(mapTooltipAdditionalFieldsHeaderFontColor: string): UiSdlDarkTheme;

  /**
   * mapTooltipHeaderFontColor
   */
  readonly mapTooltipHeaderFontColor: string;
  withMapTooltipHeaderFontColor(mapTooltipHeaderFontColor: string): UiSdlDarkTheme;

  /**
   * mapTooltipSubHeaderFontColor
   */
  readonly mapTooltipSubHeaderFontColor: string;
  withMapTooltipSubHeaderFontColor(mapTooltipSubHeaderFontColor: string): UiSdlDarkTheme;

  /**
   * menuActiveColor
   */
  readonly menuActiveColor: string;
  withMenuActiveColor(menuActiveColor: string): UiSdlDarkTheme;

  /**
   * menuBackgroundActiveColor
   */
  readonly menuBackgroundActiveColor: string;
  withMenuBackgroundActiveColor(menuBackgroundActiveColor: string): UiSdlDarkTheme;

  /**
   * menuBackgroundColor
   */
  readonly menuBackgroundColor: string;
  withMenuBackgroundColor(menuBackgroundColor: string): UiSdlDarkTheme;

  /**
   * menuDividerColor
   */
  readonly menuDividerColor: string;
  withMenuDividerColor(menuDividerColor: string): UiSdlDarkTheme;

  /**
   * menuHoverColor
   */
  readonly menuHoverColor: string;
  withMenuHoverColor(menuHoverColor: string): UiSdlDarkTheme;

  /**
   * menuItemActiveColor
   */
  readonly menuItemActiveColor: string;
  withMenuItemActiveColor(menuItemActiveColor: string): UiSdlDarkTheme;

  /**
   * menuItemBackgroundColor
   */
  readonly menuItemBackgroundColor: string;
  withMenuItemBackgroundColor(menuItemBackgroundColor: string): UiSdlDarkTheme;

  /**
   * menuItemBackgroundHoverColor
   */
  readonly menuItemBackgroundHoverColor: string;
  withMenuItemBackgroundHoverColor(menuItemBackgroundHoverColor: string): UiSdlDarkTheme;

  /**
   * menuItemHoverColor
   */
  readonly menuItemHoverColor: string;
  withMenuItemHoverColor(menuItemHoverColor: string): UiSdlDarkTheme;

  /**
   * menuPrimaryColor
   */
  readonly menuPrimaryColor: string;
  withMenuPrimaryColor(menuPrimaryColor: string): UiSdlDarkTheme;

  /**
   * numberIconColor
   */
  readonly numberIconColor: string;
  withNumberIconColor(numberIconColor: string): UiSdlDarkTheme;

  /**
   * numberIconTextColor
   */
  readonly numberIconTextColor: string;
  withNumberIconTextColor(numberIconTextColor: string): UiSdlDarkTheme;

  /**
   * objectIconColor
   */
  readonly objectIconColor: string;
  withObjectIconColor(objectIconColor: string): UiSdlDarkTheme;

  /**
   * objectIconTextColor
   */
  readonly objectIconTextColor: string;
  withObjectIconTextColor(objectIconTextColor: string): UiSdlDarkTheme;

  /**
   * opacity00
   */
  readonly opacity00: string;
  withOpacity00(opacity00: string): UiSdlDarkTheme;

  /**
   * opacity05
   */
  readonly opacity05: string;
  withOpacity05(opacity05: string): UiSdlDarkTheme;

  /**
   * opacity10
   */
  readonly opacity10: string;
  withOpacity10(opacity10: string): UiSdlDarkTheme;

  /**
   * opacity20
   */
  readonly opacity20: string;
  withOpacity20(opacity20: string): UiSdlDarkTheme;

  /**
   * opacity30
   */
  readonly opacity30: string;
  withOpacity30(opacity30: string): UiSdlDarkTheme;

  /**
   * opacity40
   */
  readonly opacity40: string;
  withOpacity40(opacity40: string): UiSdlDarkTheme;

  /**
   * opacity50
   */
  readonly opacity50: string;
  withOpacity50(opacity50: string): UiSdlDarkTheme;

  /**
   * opacity60
   */
  readonly opacity60: string;
  withOpacity60(opacity60: string): UiSdlDarkTheme;

  /**
   * opacity70
   */
  readonly opacity70: string;
  withOpacity70(opacity70: string): UiSdlDarkTheme;

  /**
   * opacity80
   */
  readonly opacity80: string;
  withOpacity80(opacity80: string): UiSdlDarkTheme;

  /**
   * opacity90
   */
  readonly opacity90: string;
  withOpacity90(opacity90: string): UiSdlDarkTheme;

  /**
   * opacity95
   */
  readonly opacity95: string;
  withOpacity95(opacity95: string): UiSdlDarkTheme;

  /**
   * opacity100
   */
  readonly opacity100: string;
  withOpacity100(opacity100: string): UiSdlDarkTheme;

  /**
   * opacityDisabled
   */
  readonly opacityDisabled: string;
  withOpacityDisabled(opacityDisabled: string): UiSdlDarkTheme;

  /**
   * opacityLoading
   */
  readonly opacityLoading: string;
  withOpacityLoading(opacityLoading: string): UiSdlDarkTheme;

  /**
   * otherIconColor
   */
  readonly otherIconColor: string;
  withOtherIconColor(otherIconColor: string): UiSdlDarkTheme;

  /**
   * otherIconTextColor
   */
  readonly otherIconTextColor: string;
  withOtherIconTextColor(otherIconTextColor: string): UiSdlDarkTheme;

  /**
   * pageBackgroundColor
   */
  readonly pageBackgroundColor: string;
  withPageBackgroundColor(pageBackgroundColor: string): UiSdlDarkTheme;

  /**
   * pageTitleBoxShadowColor
   */
  readonly pageTitleBoxShadowColor: string;
  withPageTitleBoxShadowColor(pageTitleBoxShadowColor: string): UiSdlDarkTheme;

  /**
   * referenceIconColor
   */
  readonly referenceIconColor: string;
  withReferenceIconColor(referenceIconColor: string): UiSdlDarkTheme;

  /**
   * referenceIconTextColor
   */
  readonly referenceIconTextColor: string;
  withReferenceIconTextColor(referenceIconTextColor: string): UiSdlDarkTheme;

  /**
   * resetZoomIconPath
   */
  readonly resetZoomIconPath: string;
  withResetZoomIconPath(resetZoomIconPath: string): UiSdlDarkTheme;

  /**
   * resetZoomIconUrl
   */
  readonly resetZoomIconUrl: string;
  withResetZoomIconUrl(resetZoomIconUrl: string): UiSdlDarkTheme;

  /**
   * resetZoomIconColor
   */
  readonly resetZoomIconColor: string;
  withResetZoomIconColor(resetZoomIconColor: string): UiSdlDarkTheme;

  /**
   * sankeyChartLabelBackgroundColor
   */
  readonly sankeyChartLabelBackgroundColor: string;
  withSankeyChartLabelBackgroundColor(sankeyChartLabelBackgroundColor: string): UiSdlDarkTheme;

  /**
   * scrollbarThumbColor
   */
  readonly scrollbarThumbColor: string;
  withScrollbarThumbColor(scrollbarThumbColor: string): UiSdlDarkTheme;

  /**
   * scrollbarTrackColor
   */
  readonly scrollbarTrackColor: string;
  withScrollbarTrackColor(scrollbarTrackColor: string): UiSdlDarkTheme;

  /**
   * secondaryFontColor
   */
  readonly secondaryFontColor: string;
  withSecondaryFontColor(secondaryFontColor: string): UiSdlDarkTheme;

  /**
   * secondaryVariantFontColor
   */
  readonly secondaryVariantFontColor: string;
  withSecondaryVariantFontColor(secondaryVariantFontColor: string): UiSdlDarkTheme;

  /**
   * selectFieldPillActiveBackgroundColor
   */
  readonly selectFieldPillActiveBackgroundColor: string;
  withSelectFieldPillActiveBackgroundColor(selectFieldPillActiveBackgroundColor: string): UiSdlDarkTheme;

  /**
   * selectFieldPillHoverBackgroundColor
   */
  readonly selectFieldPillHoverBackgroundColor: string;
  withSelectFieldPillHoverBackgroundColor(selectFieldPillHoverBackgroundColor: string): UiSdlDarkTheme;

  /**
   * selectFieldPillTextColor
   */
  readonly selectFieldPillTextColor: string;
  withSelectFieldPillTextColor(selectFieldPillTextColor: string): UiSdlDarkTheme;

  /**
   * selectionBackgroundColor
   */
  readonly selectionBackgroundColor: string;
  withSelectionBackgroundColor(selectionBackgroundColor: string): UiSdlDarkTheme;

  /**
   * sidePanelSubtitleColor
   */
  readonly sidePanelSubtitleColor: string;
  withSidePanelSubtitleColor(sidePanelSubtitleColor: string): UiSdlDarkTheme;

  /**
   * stringIconColor
   */
  readonly stringIconColor: string;
  withStringIconColor(stringIconColor: string): UiSdlDarkTheme;

  /**
   * stringIconTextColor
   */
  readonly stringIconTextColor: string;
  withStringIconTextColor(stringIconTextColor: string): UiSdlDarkTheme;

  /**
   * subMenuItemBackgroundActiveColor
   */
  readonly subMenuItemBackgroundActiveColor: string;
  withSubMenuItemBackgroundActiveColor(subMenuItemBackgroundActiveColor: string): UiSdlDarkTheme;

  /**
   * successColor
   */
  readonly successColor: string;
  withSuccessColor(successColor: string): UiSdlDarkTheme;

  /**
   * timeGraphBackgroundColor
   */
  readonly timeGraphBackgroundColor: string;
  withTimeGraphBackgroundColor(timeGraphBackgroundColor: string): UiSdlDarkTheme;

  /**
   * timeGraphDefaultEntityColor
   */
  readonly timeGraphDefaultEntityColor: string;
  withTimeGraphDefaultEntityColor(timeGraphDefaultEntityColor: string): UiSdlDarkTheme;

  /**
   * timeGraphDefaultLabelColor
   */
  readonly timeGraphDefaultLabelColor: string;
  withTimeGraphDefaultLabelColor(timeGraphDefaultLabelColor: string): UiSdlDarkTheme;

  /**
   * timeGraphHighlightColor
   */
  readonly timeGraphHighlightColor: string;
  withTimeGraphHighlightColor(timeGraphHighlightColor: string): UiSdlDarkTheme;

  /**
   * timeGraphScaleBackgroundColor
   */
  readonly timeGraphScaleBackgroundColor: string;
  withTimeGraphScaleBackgroundColor(timeGraphScaleBackgroundColor: string): UiSdlDarkTheme;

  /**
   * timeGraphScaleBorderColor
   */
  readonly timeGraphScaleBorderColor: string;
  withTimeGraphScaleBorderColor(timeGraphScaleBorderColor: string): UiSdlDarkTheme;

  /**
   * timeGraphScaleFontColor
   */
  readonly timeGraphScaleFontColor: string;
  withTimeGraphScaleFontColor(timeGraphScaleFontColor: string): UiSdlDarkTheme;

  /**
   * timeGraphScaleFontSize
   */
  readonly timeGraphScaleFontSize: string;
  withTimeGraphScaleFontSize(timeGraphScaleFontSize: string): UiSdlDarkTheme;

  /**
   * timeGraphTooltipBackgroundColor
   */
  readonly timeGraphTooltipBackgroundColor: string;
  withTimeGraphTooltipBackgroundColor(timeGraphTooltipBackgroundColor: string): UiSdlDarkTheme;

  /**
   * timeGraphTooltipBodyColor
   */
  readonly timeGraphTooltipBodyColor: string;
  withTimeGraphTooltipBodyColor(timeGraphTooltipBodyColor: string): UiSdlDarkTheme;

  /**
   * timeGraphTooltipSubtitleColor
   */
  readonly timeGraphTooltipSubtitleColor: string;
  withTimeGraphTooltipSubtitleColor(timeGraphTooltipSubtitleColor: string): UiSdlDarkTheme;

  /**
   * timeGraphTooltipTitleColor
   */
  readonly timeGraphTooltipTitleColor: string;
  withTimeGraphTooltipTitleColor(timeGraphTooltipTitleColor: string): UiSdlDarkTheme;

  /**
   * timeSeriesIconColor
   */
  readonly timeSeriesIconColor: string;
  withTimeSeriesIconColor(timeSeriesIconColor: string): UiSdlDarkTheme;

  /**
   * timeSeriesIconTextColor
   */
  readonly timeSeriesIconTextColor: string;
  withTimeSeriesIconTextColor(timeSeriesIconTextColor: string): UiSdlDarkTheme;

  /**
   * toggleSwitchBackgroundColor
   */
  readonly toggleSwitchBackgroundColor: string;
  withToggleSwitchBackgroundColor(toggleSwitchBackgroundColor: string): UiSdlDarkTheme;

  /**
   * toggleSwitchBorderColor
   */
  readonly toggleSwitchBorderColor: string;
  withToggleSwitchBorderColor(toggleSwitchBorderColor: string): UiSdlDarkTheme;

  /**
   * toggleSwitchCheckedBorderColor
   */
  readonly toggleSwitchCheckedBorderColor: string;
  withToggleSwitchCheckedBorderColor(toggleSwitchCheckedBorderColor: string): UiSdlDarkTheme;

  /**
   * toggleSwitchCheckedColor
   */
  readonly toggleSwitchCheckedColor: string;
  withToggleSwitchCheckedColor(toggleSwitchCheckedColor: string): UiSdlDarkTheme;

  /**
   * toggleSwitchCheckedDisabledBackgroundColor
   */
  readonly toggleSwitchCheckedDisabledBackgroundColor: string;
  withToggleSwitchCheckedDisabledBackgroundColor(toggleSwitchCheckedDisabledBackgroundColor: string): UiSdlDarkTheme;

  /**
   * toggleSwitchCheckedDisabledBorderColor
   */
  readonly toggleSwitchCheckedDisabledBorderColor: string;
  withToggleSwitchCheckedDisabledBorderColor(toggleSwitchCheckedDisabledBorderColor: string): UiSdlDarkTheme;

  /**
   * toggleSwitchCheckedDisabledColor
   */
  readonly toggleSwitchCheckedDisabledColor: string;
  withToggleSwitchCheckedDisabledColor(toggleSwitchCheckedDisabledColor: string): UiSdlDarkTheme;

  /**
   * toggleSwitchColor
   */
  readonly toggleSwitchColor: string;
  withToggleSwitchColor(toggleSwitchColor: string): UiSdlDarkTheme;

  /**
   * toggleSwitchDisabledBackgroundColor
   */
  readonly toggleSwitchDisabledBackgroundColor: string;
  withToggleSwitchDisabledBackgroundColor(toggleSwitchDisabledBackgroundColor: string): UiSdlDarkTheme;

  /**
   * toggleSwitchDisabledBorderColor
   */
  readonly toggleSwitchDisabledBorderColor: string;
  withToggleSwitchDisabledBorderColor(toggleSwitchDisabledBorderColor: string): UiSdlDarkTheme;

  /**
   * toggleSwitchDisabledColor
   */
  readonly toggleSwitchDisabledColor: string;
  withToggleSwitchDisabledColor(toggleSwitchDisabledColor: string): UiSdlDarkTheme;

  /**
   * tooltipBackgroundColor
   */
  readonly tooltipBackgroundColor: string;
  withTooltipBackgroundColor(tooltipBackgroundColor: string): UiSdlDarkTheme;

  /**
   * warningColor
   */
  readonly warningColor: string;
  withWarningColor(warningColor: string): UiSdlDarkTheme;

  /**
   * zebraStripeBackgroundColor
   */
  readonly zebraStripeBackgroundColor: string;
  withZebraStripeBackgroundColor(zebraStripeBackgroundColor: string): UiSdlDarkTheme;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJson
   */
  static fromJson(json: any | null): UiSdlDarkTheme | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJsonString
   */
  static fromJsonString(json: string | null): UiSdlDarkTheme | null;

  /**
   * Load the XML-based representation and reconstruct the corresponding object.
   *
   * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
   * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
   * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
   * will return an instance of the correct type.
   *
   * @see #toXmlString
   */
  static fromXmlString(xml: string | null): UiSdlDarkTheme | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): UiSdlDarkTheme | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlDarkTheme;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlDarkTheme;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlDarkTheme;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlDarkTheme | null>;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * asynchronous `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlDarkTheme | null>;

  /**
   * Result of this function call is a copy of current instance with specified field value replaced based on result of
   * the `mapper` invocation.
   * @param field
   *           field being mapped
   * @param includeEmpty
   *           if set, invokes mapper for fields with empty value
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): UiSdlDarkTheme;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlDarkTheme;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param mapper
   *           function to be executed for each pair of field type and Obj instance for producing new reference value
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlDarkTheme;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlDarkTheme;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           name of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlDarkTheme;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlDarkTheme;

  /**
   * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
   * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
   *
   * @param fields
   *           map of field names/values
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @return new Obj
   */
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): UiSdlDarkTheme;

  /**
   * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
   * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
   *
   * Immutable objects may return the same instance if the field being set does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path to set value at
   * @param value
   *           value to set
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @param doNotCreateIfMissing
   *           true indicates that any empty reference along the path will not set the value
   * @return new Obj
   */
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlDarkTheme;

  /**
   * Builds a new Obj without the specified path field.
   *
   * Immutable objects may return the same instance if the field being removed does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path for field to remove
   * @return new Obj
   *
   * @see #withFieldAtPath
   * @see #withoutField
   */
  withoutFieldAtPath(path: string): UiSdlDarkTheme;

  /**
   * Builds a new Obj, removing the field with the provided name.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: string | null): UiSdlDarkTheme;

  /**
   * Builds a new Obj, removing the field with the provided field type.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: FieldType | null): UiSdlDarkTheme;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): UiSdlDarkTheme;

  /**
   * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
   * exact same type as the type of the obj to respect the "ordinal" of the field type
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           field types to remove
   * @return new Obj with removed fields
   */
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): UiSdlDarkTheme;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlDarkTheme;

  /**
   * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
   * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
   * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
   * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
   * fields that have already been set.
   *
   * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
   * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
   *
   * @param includeEmptyRefsWithDefaults
   *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
   * @param defaultFields
   *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
   *           array will be ignored.
   * @return new Obj
   *
   * @see #defaultField
   * @see FieldType#defaultValueConst
   * @see FieldType#defaultValue
   */
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): UiSdlDarkTheme;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         name of the field to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: string): UiSdlDarkTheme;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         field type to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: FieldType): UiSdlDarkTheme;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         name of the field to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: string): UiSdlDarkTheme;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         field type to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: FieldType): UiSdlDarkTheme;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         name of the field to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: string): UiSdlDarkTheme;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         field type to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: FieldType): UiSdlDarkTheme;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
   *
   * @param other
   *           object
   * @param fieldPathMergeSpec
   *           mapping of fields of the object to the respective merge annotations
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): UiSdlDarkTheme;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence.
   *
   * @param other
   *           object
   * @param otherFieldsFilter
   *           only fields of otherFieldsFilter type from other are merged into this obj.
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, otherFieldsFilter: Type): UiSdlDarkTheme;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): UiSdlDarkTheme;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): UiSdlDarkTheme;

  mergeJson(json: any | null): UiSdlDarkTheme;

  /**
   * Merge the obj references within the current obj
   * @param deep
   *        If set, traverses the reference fields within the obj as well for a deep merge
   * @param objKey
   *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
   * @param filter
   *        Field paths that need to be filtered from this merge
   * @return Obj with child references merged
   */
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): UiSdlDarkTheme;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): UiSdlDarkTheme;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<UiSdlDarkTheme | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<UiSdlDarkTheme | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlDarkTheme | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<UiSdlDarkTheme | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlDarkTheme | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, UiSdlDarkTheme | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlDarkTheme | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlDarkTheme | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlDarkTheme | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): UiSdlDarkTheme;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): UiSdlDarkTheme;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): UiSdlDarkTheme;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlDarkTheme;

  /**
   * Construct an instance from provided fields
   * @param fields
   *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
   *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
   *            to Panda.make()
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
   *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
   *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
   *
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): UiSdlDarkTheme;

  /**
   * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
   *
   * ```js
   * User.make({
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   *
   * Obj.make({
   *   type: 'User',
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   * ```
   *
   * ```py
   * c3.User.make({
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.Obj.make({
   *   "type": 'User',
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.User(email='joe@smith.com', realName='Joe Smith')
   *
   * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
   * ```
   *
   * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
   * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
   * such as {@link Ann.Ser} do not apply.
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: any, withDefaults?: boolean): UiSdlDarkTheme;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): UiSdlDarkTheme | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): UiSdlDarkTheme;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: C3.Map<FieldType | null, any> | null): C3.Map<FieldType | null, any>;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): UiSdlDarkTheme;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlDarkTheme;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<UiSdlDarkTheme>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): UiSdlDarkTheme;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<UiSdlDarkTheme | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<UiSdlDarkTheme | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<UiSdlDarkTheme | null>;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow | null>;

  /**
   * Finds rows matching specification and returns them as iterator of Arrow batches.
   *
   * @param spec
   *           Specification of what rows to return.
   * @return Iterator of Arrow batches.
   */
  static scanArrow(spec: ScanArrowSpec): ArrowIterator | null;

  /**
   * Fetched multiple obj instances in multiple locales based on specification.
   *
   * @param spec
   *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
   *        type.
   * @return Requested objs where key of map is locale id
   */
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<UiSdlDarkTheme | null> | null>;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec | null): number;

  /**
   * Gets the estimated count of objs that a fetch on the type with the optional filter will return.
   * For non-kv types, The count is obtained from the query explain plan for the fetch.
   * For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
   * other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
   * upper bound for the partition. For more accurate results, perform fillBuckets first.
   *
   * @param spec
   *        Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
   *        explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
   *        fields.
   * @param updateStatistics
   *        If true, the database statistics for all tables involved in the query will be updated prior to obtaining
   *        the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
   *
   * @return The requested estimated count.
   */
  static fetchCountEstimated(spec?: FetchFilterSpec | null, updateStatistics?: boolean): number;

  /**
   * Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
   * a callback function for the given batch.
   *
   * @param spec
   *           Specification of the scan action.
   * @return Statistics of the scan action.
   */
  static scan(spec: ScanSpec): ScanStats | null;

  /**
   * Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
   *
   * @param spec
   *        Spec indicating how the operation should work.
   *
   * IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
   *             rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
   *             cause an issue if the results are blindly used to create filters for fetching batches as the last batch
   *             would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
   *             other would be specified, depending on whether you are interested in controlling the number of batches
   *             or batch size.
   *
   * @return A stream of batch ids based on the input parameters.
   */
  static batchIds(spec?: BatchIdsSpec | null): Stream<string | null>;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec | null): boolean;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(filter: Filter): boolean;

  /**
   * @return key field type.
   */
  static keyFieldType(): FieldType;

  /**
   * @return key field value.
   */
  keyFieldValue(): string | null;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  singletonMap(): C3.Map<string | null, WithKey | null>;

  /**
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): MetadataDeps<UiSdlDarkTheme | null>;

  save(subPath?: string | null, contentType?: string | null): UiSdlDarkTheme;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: UiSdlDarkTheme | null, spec?: UpsertSpec | null): UiSdlDarkTheme | null;

  upsert(srcObj?: UiSdlDarkTheme | null, spec?: UpsertSpec | null): UiSdlDarkTheme | null;

  /**
   * Retrieves folder that holds metadata.
   */
  static metadataFolder(): string | null;

  /**
   * If this Metadata type has arbitrary folder hierarchy.
   */
  static hasArbitraryFolderHierarchy(): boolean;

  /**
   * If metadata path is valid.
   * @param pkg
   *    name of the package
   * @param filePath
   *    path of metadata json file
   */
  static isValidMetadataJson(pkg: string, filePath: string): boolean;

  /**
   * Optional member function to enable custom validation logic.
   */
  validateMetadata(): ValidateObjResult;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
   * provide deserialization.
   *
   * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
   * of called-on type, but perhaps not the same type.
   *
   * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
   *
   * @see #toString
   */
  static fromString(s: string | null): UiSdlDarkTheme | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): UiSdlDarkTheme | null;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
