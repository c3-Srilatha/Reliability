// TypeScript definitions for the C3 type UiSdlLightTheme

/**
 * UiSdlLightTheme type mixes UiSdlThemeTemplate and embeds the C3DefaultTheme theme values.
 * Users can remix this type in their package and override/add variables.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlLightTheme
 */
declare interface IUiSdlLightTheme {

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
 * UiSdlLightTheme type mixes UiSdlThemeTemplate and embeds the C3DefaultTheme theme values.
 * Users can remix this type in their package and override/add variables.
 *
 * @remarks this represents a made instance of UiSdlLightTheme
 */
declare class UiSdlLightTheme extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlLightTheme;

  /**
   * The unique and required id of this instance.
   */
  readonly id: string;
  withId(id: string): UiSdlLightTheme;

  /**
   * Whether this is a C3 type theme template.
   */
  readonly isC3?: boolean;
  withIsC3(isC3: boolean): UiSdlLightTheme;

  /**
   * Whether this is a Light or a Dark Theme.
   */
  readonly themeCategory: string;
  withThemeCategory(themeCategory: string): UiSdlLightTheme;

  /**
   * accentColor
   */
  readonly accentColor: string;
  withAccentColor(accentColor: string): UiSdlLightTheme;

  /**
   * accentFontColor
   */
  readonly accentFontColor: string;
  withAccentFontColor(accentFontColor: string): UiSdlLightTheme;

  /**
   * accentVariantColor
   */
  readonly accentVariantColor: string;
  withAccentVariantColor(accentVariantColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeBlueBackgroundColor
   */
  readonly avatarBadgeBlueBackgroundColor: string;
  withAvatarBadgeBlueBackgroundColor(avatarBadgeBlueBackgroundColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeBlueColor
   */
  readonly avatarBadgeBlueColor: string;
  withAvatarBadgeBlueColor(avatarBadgeBlueColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeChocoBackgroundColor
   */
  readonly avatarBadgeChocoBackgroundColor: string;
  withAvatarBadgeChocoBackgroundColor(avatarBadgeChocoBackgroundColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeChocoColor
   */
  readonly avatarBadgeChocoColor: string;
  withAvatarBadgeChocoColor(avatarBadgeChocoColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeCyanBackgroundColor
   */
  readonly avatarBadgeCyanBackgroundColor: string;
  withAvatarBadgeCyanBackgroundColor(avatarBadgeCyanBackgroundColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeCyanColor
   */
  readonly avatarBadgeCyanColor: string;
  withAvatarBadgeCyanColor(avatarBadgeCyanColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeForestBackgroundColor
   */
  readonly avatarBadgeForestBackgroundColor: string;
  withAvatarBadgeForestBackgroundColor(avatarBadgeForestBackgroundColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeForestColor
   */
  readonly avatarBadgeForestColor: string;
  withAvatarBadgeForestColor(avatarBadgeForestColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeGreenBackgroundColor
   */
  readonly avatarBadgeGreenBackgroundColor: string;
  withAvatarBadgeGreenBackgroundColor(avatarBadgeGreenBackgroundColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeGreenColor
   */
  readonly avatarBadgeGreenColor: string;
  withAvatarBadgeGreenColor(avatarBadgeGreenColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeLimeBackgroundColor
   */
  readonly avatarBadgeLimeBackgroundColor: string;
  withAvatarBadgeLimeBackgroundColor(avatarBadgeLimeBackgroundColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeLimeColor
   */
  readonly avatarBadgeLimeColor: string;
  withAvatarBadgeLimeColor(avatarBadgeLimeColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeOliveBackgroundColor
   */
  readonly avatarBadgeOliveBackgroundColor: string;
  withAvatarBadgeOliveBackgroundColor(avatarBadgeOliveBackgroundColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeOliveColor
   */
  readonly avatarBadgeOliveColor: string;
  withAvatarBadgeOliveColor(avatarBadgeOliveColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeOrangeBackgroundColor
   */
  readonly avatarBadgeOrangeBackgroundColor: string;
  withAvatarBadgeOrangeBackgroundColor(avatarBadgeOrangeBackgroundColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeOrangeColor
   */
  readonly avatarBadgeOrangeColor: string;
  withAvatarBadgeOrangeColor(avatarBadgeOrangeColor: string): UiSdlLightTheme;

  /**
   * avatarBadgePlumBackgroundColor
   */
  readonly avatarBadgePlumBackgroundColor: string;
  withAvatarBadgePlumBackgroundColor(avatarBadgePlumBackgroundColor: string): UiSdlLightTheme;

  /**
   * avatarBadgePlumColor
   */
  readonly avatarBadgePlumColor: string;
  withAvatarBadgePlumColor(avatarBadgePlumColor: string): UiSdlLightTheme;

  /**
   * avatarBadgePurpleBackgroundColor
   */
  readonly avatarBadgePurpleBackgroundColor: string;
  withAvatarBadgePurpleBackgroundColor(avatarBadgePurpleBackgroundColor: string): UiSdlLightTheme;

  /**
   * avatarBadgePurpleColor
   */
  readonly avatarBadgePurpleColor: string;
  withAvatarBadgePurpleColor(avatarBadgePurpleColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeRedBackgroundColor
   */
  readonly avatarBadgeRedBackgroundColor: string;
  withAvatarBadgeRedBackgroundColor(avatarBadgeRedBackgroundColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeRedColor
   */
  readonly avatarBadgeRedColor: string;
  withAvatarBadgeRedColor(avatarBadgeRedColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeSlateBackgroundColor
   */
  readonly avatarBadgeSlateBackgroundColor: string;
  withAvatarBadgeSlateBackgroundColor(avatarBadgeSlateBackgroundColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeSlateColor
   */
  readonly avatarBadgeSlateColor: string;
  withAvatarBadgeSlateColor(avatarBadgeSlateColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeYellowBackgroundColor
   */
  readonly avatarBadgeYellowBackgroundColor: string;
  withAvatarBadgeYellowBackgroundColor(avatarBadgeYellowBackgroundColor: string): UiSdlLightTheme;

  /**
   * avatarBadgeYellowColor
   */
  readonly avatarBadgeYellowColor: string;
  withAvatarBadgeYellowColor(avatarBadgeYellowColor: string): UiSdlLightTheme;

  /**
   * booleanIconColor
   */
  readonly booleanIconColor: string;
  withBooleanIconColor(booleanIconColor: string): UiSdlLightTheme;

  /**
   * booleanIconTextColor
   */
  readonly booleanIconTextColor: string;
  withBooleanIconTextColor(booleanIconTextColor: string): UiSdlLightTheme;

  /**
   * borderColor
   */
  readonly borderColor: string;
  withBorderColor(borderColor: string): UiSdlLightTheme;

  /**
   * boxShadow01
   */
  readonly boxShadow01: string;
  withBoxShadow01(boxShadow01: string): UiSdlLightTheme;

  /**
   * boxShadow02
   */
  readonly boxShadow02: string;
  withBoxShadow02(boxShadow02: string): UiSdlLightTheme;

  /**
   * boxShadow03
   */
  readonly boxShadow03: string;
  withBoxShadow03(boxShadow03: string): UiSdlLightTheme;

  /**
   * boxShadow04
   */
  readonly boxShadow04: string;
  withBoxShadow04(boxShadow04: string): UiSdlLightTheme;

  /**
   * boxShadow05
   */
  readonly boxShadow05: string;
  withBoxShadow05(boxShadow05: string): UiSdlLightTheme;

  /**
   * boxShadowCardParent
   */
  readonly boxShadowCardParent: string;
  withBoxShadowCardParent(boxShadowCardParent: string): UiSdlLightTheme;

  /**
   * boxShadowMenu
   */
  readonly boxShadowMenu: string;
  withBoxShadowMenu(boxShadowMenu: string): UiSdlLightTheme;

  /**
   * boxZoomIconPath
   */
  readonly boxZoomIconPath: string;
  withBoxZoomIconPath(boxZoomIconPath: string): UiSdlLightTheme;

  /**
   * boxZoomIconUrl
   */
  readonly boxZoomIconUrl: string;
  withBoxZoomIconUrl(boxZoomIconUrl: string): UiSdlLightTheme;

  /**
   * boxZoomIconColor
   */
  readonly boxZoomIconColor: string;
  withBoxZoomIconColor(boxZoomIconColor: string): UiSdlLightTheme;

  /**
   * brightnessActionHover
   */
  readonly brightnessActionHover: string;
  withBrightnessActionHover(brightnessActionHover: string): UiSdlLightTheme;

  /**
   * brightnessActionHoverInverse
   */
  readonly brightnessActionHoverInverse: string;
  withBrightnessActionHoverInverse(brightnessActionHoverInverse: string): UiSdlLightTheme;

  /**
   * brightnessActionPressed
   */
  readonly brightnessActionPressed: string;
  withBrightnessActionPressed(brightnessActionPressed: string): UiSdlLightTheme;

  /**
   * brightnessActionPressedInverse
   */
  readonly brightnessActionPressedInverse: string;
  withBrightnessActionPressedInverse(brightnessActionPressedInverse: string): UiSdlLightTheme;

  /**
   * buttonControlBorderColor
   */
  readonly buttonControlBorderColor: string;
  withButtonControlBorderColor(buttonControlBorderColor: string): UiSdlLightTheme;

  /**
   * buttonControlFontColor
   */
  readonly buttonControlFontColor: string;
  withButtonControlFontColor(buttonControlFontColor: string): UiSdlLightTheme;

  /**
   * buttonControlHoverBackgroundColor
   */
  readonly buttonControlHoverBackgroundColor: string;
  withButtonControlHoverBackgroundColor(buttonControlHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonControlSelectedBackgroundColor
   */
  readonly buttonControlSelectedBackgroundColor: string;
  withButtonControlSelectedBackgroundColor(buttonControlSelectedBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonControlSelectedDisabledBackgroundColor
   */
  readonly buttonControlSelectedDisabledBackgroundColor: string;
  withButtonControlSelectedDisabledBackgroundColor(buttonControlSelectedDisabledBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonControlSelectedFontColor
   */
  readonly buttonControlSelectedFontColor: string;
  withButtonControlSelectedFontColor(buttonControlSelectedFontColor: string): UiSdlLightTheme;

  /**
   * buttonControlSelectedHoverBackgroundColor
   */
  readonly buttonControlSelectedHoverBackgroundColor: string;
  withButtonControlSelectedHoverBackgroundColor(buttonControlSelectedHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonDangerPrimaryActiveBackgroundColor
   */
  readonly buttonDangerPrimaryActiveBackgroundColor: string;
  withButtonDangerPrimaryActiveBackgroundColor(buttonDangerPrimaryActiveBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonDangerPrimaryHoverBackgroundColor
   */
  readonly buttonDangerPrimaryHoverBackgroundColor: string;
  withButtonDangerPrimaryHoverBackgroundColor(buttonDangerPrimaryHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonDangerSecondaryActiveBackgroundColor
   */
  readonly buttonDangerSecondaryActiveBackgroundColor: string;
  withButtonDangerSecondaryActiveBackgroundColor(buttonDangerSecondaryActiveBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonDangerSecondaryHoverBackgroundColor
   */
  readonly buttonDangerSecondaryHoverBackgroundColor: string;
  withButtonDangerSecondaryHoverBackgroundColor(buttonDangerSecondaryHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonDangerTertiaryActiveBackgroundColor
   */
  readonly buttonDangerTertiaryActiveBackgroundColor: string;
  withButtonDangerTertiaryActiveBackgroundColor(buttonDangerTertiaryActiveBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonDangerTertiaryHoverBackgroundColor
   */
  readonly buttonDangerTertiaryHoverBackgroundColor: string;
  withButtonDangerTertiaryHoverBackgroundColor(buttonDangerTertiaryHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonIconActiveBackgroundColor
   */
  readonly buttonIconActiveBackgroundColor: string;
  withButtonIconActiveBackgroundColor(buttonIconActiveBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonIconBackgroundColor
   */
  readonly buttonIconBackgroundColor: string;
  withButtonIconBackgroundColor(buttonIconBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonIconHoverBackgroundColor
   */
  readonly buttonIconHoverBackgroundColor: string;
  withButtonIconHoverBackgroundColor(buttonIconHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonIconSelectedActiveBackgroundColor
   */
  readonly buttonIconSelectedActiveBackgroundColor: string;
  withButtonIconSelectedActiveBackgroundColor(buttonIconSelectedActiveBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonIconSelectedBackgroundColor
   */
  readonly buttonIconSelectedBackgroundColor: string;
  withButtonIconSelectedBackgroundColor(buttonIconSelectedBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonIconSelectedForegroundColor
   */
  readonly buttonIconSelectedForegroundColor: string;
  withButtonIconSelectedForegroundColor(buttonIconSelectedForegroundColor: string): UiSdlLightTheme;

  /**
   * buttonIconSelectedHoverBackgroundColor
   */
  readonly buttonIconSelectedHoverBackgroundColor: string;
  withButtonIconSelectedHoverBackgroundColor(buttonIconSelectedHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonPrimaryActiveBackgroundColor
   */
  readonly buttonPrimaryActiveBackgroundColor: string;
  withButtonPrimaryActiveBackgroundColor(buttonPrimaryActiveBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonPrimaryHoverBackgroundColor
   */
  readonly buttonPrimaryHoverBackgroundColor: string;
  withButtonPrimaryHoverBackgroundColor(buttonPrimaryHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonSecondaryActiveBackgroundColor
   */
  readonly buttonSecondaryActiveBackgroundColor: string;
  withButtonSecondaryActiveBackgroundColor(buttonSecondaryActiveBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonSecondaryHoverBackgroundColor
   */
  readonly buttonSecondaryHoverBackgroundColor: string;
  withButtonSecondaryHoverBackgroundColor(buttonSecondaryHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonTertiaryActiveBackgroundColor
   */
  readonly buttonTertiaryActiveBackgroundColor: string;
  withButtonTertiaryActiveBackgroundColor(buttonTertiaryActiveBackgroundColor: string): UiSdlLightTheme;

  /**
   * buttonTertiaryHoverBackgroundColor
   */
  readonly buttonTertiaryHoverBackgroundColor: string;
  withButtonTertiaryHoverBackgroundColor(buttonTertiaryHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * canvasBackgroundDotColor
   */
  readonly canvasBackgroundDotColor: string;
  withCanvasBackgroundDotColor(canvasBackgroundDotColor: string): UiSdlLightTheme;

  /**
   * canvasCyanNodeColor
   */
  readonly canvasCyanNodeColor: string;
  withCanvasCyanNodeColor(canvasCyanNodeColor: string): UiSdlLightTheme;

  /**
   * canvasForestNodeColor
   */
  readonly canvasForestNodeColor: string;
  withCanvasForestNodeColor(canvasForestNodeColor: string): UiSdlLightTheme;

  /**
   * canvasNodeBorderColor
   */
  readonly canvasNodeBorderColor: string;
  withCanvasNodeBorderColor(canvasNodeBorderColor: string): UiSdlLightTheme;

  /**
   * canvasNodeErrorBackgroundColor
   */
  readonly canvasNodeErrorBackgroundColor: string;
  withCanvasNodeErrorBackgroundColor(canvasNodeErrorBackgroundColor: string): UiSdlLightTheme;

  /**
   * canvasNodeWarningBackgroundColor
   */
  readonly canvasNodeWarningBackgroundColor: string;
  withCanvasNodeWarningBackgroundColor(canvasNodeWarningBackgroundColor: string): UiSdlLightTheme;

  /**
   * canvasOrangeIconColor
   */
  readonly canvasOrangeIconColor: string;
  withCanvasOrangeIconColor(canvasOrangeIconColor: string): UiSdlLightTheme;

  /**
   * canvasOrangeNodeColor
   */
  readonly canvasOrangeNodeColor: string;
  withCanvasOrangeNodeColor(canvasOrangeNodeColor: string): UiSdlLightTheme;

  /**
   * canvasPendingNodeBackgroundColor
   */
  readonly canvasPendingNodeBackgroundColor: string;
  withCanvasPendingNodeBackgroundColor(canvasPendingNodeBackgroundColor: string): UiSdlLightTheme;

  /**
   * canvasPendingNodeForegroundColor
   */
  readonly canvasPendingNodeForegroundColor: string;
  withCanvasPendingNodeForegroundColor(canvasPendingNodeForegroundColor: string): UiSdlLightTheme;

  /**
   * canvasPlumNodeColor
   */
  readonly canvasPlumNodeColor: string;
  withCanvasPlumNodeColor(canvasPlumNodeColor: string): UiSdlLightTheme;

  /**
   * canvasPurpleIconColor
   */
  readonly canvasPurpleIconColor: string;
  withCanvasPurpleIconColor(canvasPurpleIconColor: string): UiSdlLightTheme;

  /**
   * canvasPurpleNodeColor
   */
  readonly canvasPurpleNodeColor: string;
  withCanvasPurpleNodeColor(canvasPurpleNodeColor: string): UiSdlLightTheme;

  /**
   * canvasSlateIconColor
   */
  readonly canvasSlateIconColor: string;
  withCanvasSlateIconColor(canvasSlateIconColor: string): UiSdlLightTheme;

  /**
   * canvasSlateNodeColor
   */
  readonly canvasSlateNodeColor: string;
  withCanvasSlateNodeColor(canvasSlateNodeColor: string): UiSdlLightTheme;

  /**
   * cardElevation00BackgroundColor
   */
  readonly cardElevation00BackgroundColor: string;
  withCardElevation00BackgroundColor(cardElevation00BackgroundColor: string): UiSdlLightTheme;

  /**
   * cardElevation01BackgroundColor
   */
  readonly cardElevation01BackgroundColor: string;
  withCardElevation01BackgroundColor(cardElevation01BackgroundColor: string): UiSdlLightTheme;

  /**
   * cardElevation02BackgroundColor
   */
  readonly cardElevation02BackgroundColor: string;
  withCardElevation02BackgroundColor(cardElevation02BackgroundColor: string): UiSdlLightTheme;

  /**
   * cardElevation03BackgroundColor
   */
  readonly cardElevation03BackgroundColor: string;
  withCardElevation03BackgroundColor(cardElevation03BackgroundColor: string): UiSdlLightTheme;

  /**
   * cardElevation04BackgroundColor
   */
  readonly cardElevation04BackgroundColor: string;
  withCardElevation04BackgroundColor(cardElevation04BackgroundColor: string): UiSdlLightTheme;

  /**
   * cardElevation06BackgroundColor
   */
  readonly cardElevation06BackgroundColor: string;
  withCardElevation06BackgroundColor(cardElevation06BackgroundColor: string): UiSdlLightTheme;

  /**
   * cardElevation08BackgroundColor
   */
  readonly cardElevation08BackgroundColor: string;
  withCardElevation08BackgroundColor(cardElevation08BackgroundColor: string): UiSdlLightTheme;

  /**
   * cardElevation12BackgroundColor
   */
  readonly cardElevation12BackgroundColor: string;
  withCardElevation12BackgroundColor(cardElevation12BackgroundColor: string): UiSdlLightTheme;

  /**
   * cardElevation16BackgroundColor
   */
  readonly cardElevation16BackgroundColor: string;
  withCardElevation16BackgroundColor(cardElevation16BackgroundColor: string): UiSdlLightTheme;

  /**
   * cardElevation24BackgroundColor
   */
  readonly cardElevation24BackgroundColor: string;
  withCardElevation24BackgroundColor(cardElevation24BackgroundColor: string): UiSdlLightTheme;

  /**
   * chartSeriesTooltipNameFontColor
   */
  readonly chartSeriesTooltipNameFontColor: string;
  withChartSeriesTooltipNameFontColor(chartSeriesTooltipNameFontColor: string): UiSdlLightTheme;

  /**
   * chartSeriesTooltipTitleFontColor
   */
  readonly chartSeriesTooltipTitleFontColor: string;
  withChartSeriesTooltipTitleFontColor(chartSeriesTooltipTitleFontColor: string): UiSdlLightTheme;

  /**
   * chartSeriesTooltipValueFontColor
   */
  readonly chartSeriesTooltipValueFontColor: string;
  withChartSeriesTooltipValueFontColor(chartSeriesTooltipValueFontColor: string): UiSdlLightTheme;

  /**
   * checkboxBackgroundColor
   */
  readonly checkboxBackgroundColor: string;
  withCheckboxBackgroundColor(checkboxBackgroundColor: string): UiSdlLightTheme;

  /**
   * checkboxColor
   */
  readonly checkboxColor: string;
  withCheckboxColor(checkboxColor: string): UiSdlLightTheme;

  /**
   * checkboxHoverBackgroundColor
   */
  readonly checkboxHoverBackgroundColor: string;
  withCheckboxHoverBackgroundColor(checkboxHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * checkboxHoverColor
   */
  readonly checkboxHoverColor: string;
  withCheckboxHoverColor(checkboxHoverColor: string): UiSdlLightTheme;

  /**
   * checkboxSelectedDisabledColor
   */
  readonly checkboxSelectedDisabledColor: string;
  withCheckboxSelectedDisabledColor(checkboxSelectedDisabledColor: string): UiSdlLightTheme;

  /**
   * checkboxSelectedHoverColor
   */
  readonly checkboxSelectedHoverColor: string;
  withCheckboxSelectedHoverColor(checkboxSelectedHoverColor: string): UiSdlLightTheme;

  /**
   * colorBgAccent
   */
  readonly colorBgAccent: string;
  withColorBgAccent(colorBgAccent: string): UiSdlLightTheme;

  /**
   * colorBgAccentWeak
   */
  readonly colorBgAccentWeak: string;
  withColorBgAccentWeak(colorBgAccentWeak: string): UiSdlLightTheme;

  /**
   * colorBgActionHover
   */
  readonly colorBgActionHover: string;
  withColorBgActionHover(colorBgActionHover: string): UiSdlLightTheme;

  /**
   * colorBgActionHoverInverse
   */
  readonly colorBgActionHoverInverse: string;
  withColorBgActionHoverInverse(colorBgActionHoverInverse: string): UiSdlLightTheme;

  /**
   * colorBgActionPressed
   */
  readonly colorBgActionPressed: string;
  withColorBgActionPressed(colorBgActionPressed: string): UiSdlLightTheme;

  /**
   * colorBgActionPressedInverse
   */
  readonly colorBgActionPressedInverse: string;
  withColorBgActionPressedInverse(colorBgActionPressedInverse: string): UiSdlLightTheme;

  /**
   * colorBgAvatarDefault
   */
  readonly colorBgAvatarDefault: string;
  withColorBgAvatarDefault(colorBgAvatarDefault: string): UiSdlLightTheme;

  /**
   * colorBgBtnAccentFill
   */
  readonly colorBgBtnAccentFill: string;
  withColorBgBtnAccentFill(colorBgBtnAccentFill: string): UiSdlLightTheme;

  /**
   * colorBgBtnDangerFill
   */
  readonly colorBgBtnDangerFill: string;
  withColorBgBtnDangerFill(colorBgBtnDangerFill: string): UiSdlLightTheme;

  /**
   * colorBgBtnPrimaryFill
   */
  readonly colorBgBtnPrimaryFill: string;
  withColorBgBtnPrimaryFill(colorBgBtnPrimaryFill: string): UiSdlLightTheme;

  /**
   * colorBgCardChildPrimary
   */
  readonly colorBgCardChildPrimary: string;
  withColorBgCardChildPrimary(colorBgCardChildPrimary: string): UiSdlLightTheme;

  /**
   * colorBgCardChildSecondary
   */
  readonly colorBgCardChildSecondary: string;
  withColorBgCardChildSecondary(colorBgCardChildSecondary: string): UiSdlLightTheme;

  /**
   * colorBgCardParent
   */
  readonly colorBgCardParent: string;
  withColorBgCardParent(colorBgCardParent: string): UiSdlLightTheme;

  /**
   * colorBgContainer01
   */
  readonly colorBgContainer01: string;
  withColorBgContainer01(colorBgContainer01: string): UiSdlLightTheme;

  /**
   * colorBgContainer02
   */
  readonly colorBgContainer02: string;
  withColorBgContainer02(colorBgContainer02: string): UiSdlLightTheme;

  /**
   * colorBgDanger
   */
  readonly colorBgDanger: string;
  withColorBgDanger(colorBgDanger: string): UiSdlLightTheme;

  /**
   * colorBgDangerWeak
   */
  readonly colorBgDangerWeak: string;
  withColorBgDangerWeak(colorBgDangerWeak: string): UiSdlLightTheme;

  /**
   * colorBgDataGridHover
   */
  readonly colorBgDataGridHover: string;
  withColorBgDataGridHover(colorBgDataGridHover: string): UiSdlLightTheme;

  /**
   * colorBgDataGridZebraStripe
   */
  readonly colorBgDataGridZebraStripe: string;
  withColorBgDataGridZebraStripe(colorBgDataGridZebraStripe: string): UiSdlLightTheme;

  /**
   * colorBgDataZoomSliderFilter
   */
  readonly colorBgDataZoomSliderFilter: string;
  withColorBgDataZoomSliderFilter(colorBgDataZoomSliderFilter: string): UiSdlLightTheme;

  /**
   * colorBgDataZoomSparkline
   */
  readonly colorBgDataZoomSparkline: string;
  withColorBgDataZoomSparkline(colorBgDataZoomSparkline: string): UiSdlLightTheme;

  /**
   * colorBgDecoOrangeStrong
   */
  readonly colorBgDecoOrangeStrong: string;
  withColorBgDecoOrangeStrong(colorBgDecoOrangeStrong: string): UiSdlLightTheme;

  /**
   * colorBgDecoOrange
   */
  readonly colorBgDecoOrange: string;
  withColorBgDecoOrange(colorBgDecoOrange: string): UiSdlLightTheme;

  /**
   * colorBgDecoOrangeWeak
   */
  readonly colorBgDecoOrangeWeak: string;
  withColorBgDecoOrangeWeak(colorBgDecoOrangeWeak: string): UiSdlLightTheme;

  /**
   * colorBgDecoOliveStrong
   */
  readonly colorBgDecoOliveStrong: string;
  withColorBgDecoOliveStrong(colorBgDecoOliveStrong: string): UiSdlLightTheme;

  /**
   * colorBgDecoOlive
   */
  readonly colorBgDecoOlive: string;
  withColorBgDecoOlive(colorBgDecoOlive: string): UiSdlLightTheme;

  /**
   * colorBgDecoOliveWeak
   */
  readonly colorBgDecoOliveWeak: string;
  withColorBgDecoOliveWeak(colorBgDecoOliveWeak: string): UiSdlLightTheme;

  /**
   * colorBgDecoLimeStrong
   */
  readonly colorBgDecoLimeStrong: string;
  withColorBgDecoLimeStrong(colorBgDecoLimeStrong: string): UiSdlLightTheme;

  /**
   * colorBgDecoLime
   */
  readonly colorBgDecoLime: string;
  withColorBgDecoLime(colorBgDecoLime: string): UiSdlLightTheme;

  /**
   * colorBgDecoLimeWeak
   */
  readonly colorBgDecoLimeWeak: string;
  withColorBgDecoLimeWeak(colorBgDecoLimeWeak: string): UiSdlLightTheme;

  /**
   * colorBgDecoForestStrong
   */
  readonly colorBgDecoForestStrong: string;
  withColorBgDecoForestStrong(colorBgDecoForestStrong: string): UiSdlLightTheme;

  /**
   * colorBgDecoForest
   */
  readonly colorBgDecoForest: string;
  withColorBgDecoForest(colorBgDecoForest: string): UiSdlLightTheme;

  /**
   * colorBgDecoForestWeak
   */
  readonly colorBgDecoForestWeak: string;
  withColorBgDecoForestWeak(colorBgDecoForestWeak: string): UiSdlLightTheme;

  /**
   * colorBgDecoCyanStrong
   */
  readonly colorBgDecoCyanStrong: string;
  withColorBgDecoCyanStrong(colorBgDecoCyanStrong: string): UiSdlLightTheme;

  /**
   * colorBgDecoCyan
   */
  readonly colorBgDecoCyan: string;
  withColorBgDecoCyan(colorBgDecoCyan: string): UiSdlLightTheme;

  /**
   * colorBgDecoCyanWeak
   */
  readonly colorBgDecoCyanWeak: string;
  withColorBgDecoCyanWeak(colorBgDecoCyanWeak: string): UiSdlLightTheme;

  /**
   * colorBgDecoSlateStrong
   */
  readonly colorBgDecoSlateStrong: string;
  withColorBgDecoSlateStrong(colorBgDecoSlateStrong: string): UiSdlLightTheme;

  /**
   * colorBgDecoSlate
   */
  readonly colorBgDecoSlate: string;
  withColorBgDecoSlate(colorBgDecoSlate: string): UiSdlLightTheme;

  /**
   * colorBgDecoSlateWeak
   */
  readonly colorBgDecoSlateWeak: string;
  withColorBgDecoSlateWeak(colorBgDecoSlateWeak: string): UiSdlLightTheme;

  /**
   * colorBgDecoPurpleStrong
   */
  readonly colorBgDecoPurpleStrong: string;
  withColorBgDecoPurpleStrong(colorBgDecoPurpleStrong: string): UiSdlLightTheme;

  /**
   * colorBgDecoPurple
   */
  readonly colorBgDecoPurple: string;
  withColorBgDecoPurple(colorBgDecoPurple: string): UiSdlLightTheme;

  /**
   * colorBgDecoPurpleWeak
   */
  readonly colorBgDecoPurpleWeak: string;
  withColorBgDecoPurpleWeak(colorBgDecoPurpleWeak: string): UiSdlLightTheme;

  /**
   * colorBgDecoPlumStrong
   */
  readonly colorBgDecoPlumStrong: string;
  withColorBgDecoPlumStrong(colorBgDecoPlumStrong: string): UiSdlLightTheme;

  /**
   * colorBgDecoPlum
   */
  readonly colorBgDecoPlum: string;
  withColorBgDecoPlum(colorBgDecoPlum: string): UiSdlLightTheme;

  /**
   * colorBgDecoPlumWeak
   */
  readonly colorBgDecoPlumWeak: string;
  withColorBgDecoPlumWeak(colorBgDecoPlumWeak: string): UiSdlLightTheme;

  /**
   * colorBgDecoChocoStrong
   */
  readonly colorBgDecoChocoStrong: string;
  withColorBgDecoChocoStrong(colorBgDecoChocoStrong: string): UiSdlLightTheme;

  /**
   * colorBgDecoChoco
   */
  readonly colorBgDecoChoco: string;
  withColorBgDecoChoco(colorBgDecoChoco: string): UiSdlLightTheme;

  /**
   * colorBgDecoChocoWeak
   */
  readonly colorBgDecoChocoWeak: string;
  withColorBgDecoChocoWeak(colorBgDecoChocoWeak: string): UiSdlLightTheme;

  /**
   * colorFgInputPlaceholder
   */
  readonly colorFgInputPlaceholder: string;
  withColorFgInputPlaceholder(colorFgInputPlaceholder: string): UiSdlLightTheme;

  /**
   * colorBorderDataZoomSparkline
   */
  readonly colorBorderDataZoomSparkline: string;
  withColorBorderDataZoomSparkline(colorBorderDataZoomSparkline: string): UiSdlLightTheme;

  /**
   * colorBgInlineNotificationError
   */
  readonly colorBgInlineNotificationError: string;
  withColorBgInlineNotificationError(colorBgInlineNotificationError: string): UiSdlLightTheme;

  /**
   * colorBgInlineNotificationSuccess
   */
  readonly colorBgInlineNotificationSuccess: string;
  withColorBgInlineNotificationSuccess(colorBgInlineNotificationSuccess: string): UiSdlLightTheme;

  /**
   * colorBgInlineNotificationWarning
   */
  readonly colorBgInlineNotificationWarning: string;
  withColorBgInlineNotificationWarning(colorBgInlineNotificationWarning: string): UiSdlLightTheme;

  /**
   * colorBgInputReadonly
   */
  readonly colorBgInputReadonly: string;
  withColorBgInputReadonly(colorBgInputReadonly: string): UiSdlLightTheme;

  /**
   * colorBgMenu
   */
  readonly colorBgMenu: string;
  withColorBgMenu(colorBgMenu: string): UiSdlLightTheme;

  /**
   * colorBgMenuHoverUnselected
   */
  readonly colorBgMenuHoverUnselected: string;
  withColorBgMenuHoverUnselected(colorBgMenuHoverUnselected: string): UiSdlLightTheme;

  /**
   * colorBgMenuItemSelected
   */
  readonly colorBgMenuItemSelected: string;
  withColorBgMenuItemSelected(colorBgMenuItemSelected: string): UiSdlLightTheme;

  /**
   * colorBgPage
   */
  readonly colorBgPage: string;
  withColorBgPage(colorBgPage: string): UiSdlLightTheme;

  /**
   * colorBgPrimary
   */
  readonly colorBgPrimary: string;
  withColorBgPrimary(colorBgPrimary: string): UiSdlLightTheme;

  /**
   * colorBgPrimaryInverse
   */
  readonly colorBgPrimaryInverse: string;
  withColorBgPrimaryInverse(colorBgPrimaryInverse: string): UiSdlLightTheme;

  /**
   * colorBgContentFrame
   */
  readonly colorBgContentFrame: string;
  withColorBgContentFrame(colorBgContentFrame: string): UiSdlLightTheme;

  /**
   * colorBgCoreAccentStrong
   */
  readonly colorBgCoreAccentStrong: string;
  withColorBgCoreAccentStrong(colorBgCoreAccentStrong: string): UiSdlLightTheme;

  /**
   * colorBgCoreAccent
   */
  readonly colorBgCoreAccent: string;
  withColorBgCoreAccent(colorBgCoreAccent: string): UiSdlLightTheme;

  /**
   * colorBgCoreAccentWeak
   */
  readonly colorBgCoreAccentWeak: string;
  withColorBgCoreAccentWeak(colorBgCoreAccentWeak: string): UiSdlLightTheme;

  /**
   * colorBgCoreDangerStrong
   */
  readonly colorBgCoreDangerStrong: string;
  withColorBgCoreDangerStrong(colorBgCoreDangerStrong: string): UiSdlLightTheme;

  /**
   * colorBgCoreDanger
   */
  readonly colorBgCoreDanger: string;
  withColorBgCoreDanger(colorBgCoreDanger: string): UiSdlLightTheme;

  /**
   * colorBgCoreDangerWeak
   */
  readonly colorBgCoreDangerWeak: string;
  withColorBgCoreDangerWeak(colorBgCoreDangerWeak: string): UiSdlLightTheme;

  /**
   * colorBgCoreSuccessStrong
   */
  readonly colorBgCoreSuccessStrong: string;
  withColorBgCoreSuccessStrong(colorBgCoreSuccessStrong: string): UiSdlLightTheme;

  /**
   * colorBgCoreSuccess
   */
  readonly colorBgCoreSuccess: string;
  withColorBgCoreSuccess(colorBgCoreSuccess: string): UiSdlLightTheme;

  /**
   * colorBgCoreSuccessWeak
   */
  readonly colorBgCoreSuccessWeak: string;
  withColorBgCoreSuccessWeak(colorBgCoreSuccessWeak: string): UiSdlLightTheme;

  /**
   * colorBgCoreWarningStrong
   */
  readonly colorBgCoreWarningStrong: string;
  withColorBgCoreWarningStrong(colorBgCoreWarningStrong: string): UiSdlLightTheme;

  /**
   * colorBgCoreWarning
   */
  readonly colorBgCoreWarning: string;
  withColorBgCoreWarning(colorBgCoreWarning: string): UiSdlLightTheme;

  /**
   * colorBgCoreWarningWeak
   */
  readonly colorBgCoreWarningWeak: string;
  withColorBgCoreWarningWeak(colorBgCoreWarningWeak: string): UiSdlLightTheme;

  /**
   * colorBgSuccessWeak
   */
  readonly colorBgSuccessWeak: string;
  withColorBgSuccessWeak(colorBgSuccessWeak: string): UiSdlLightTheme;

  /**
   * colorBgSideNavPanel
   */
  readonly colorBgSideNavPanel: string;
  withColorBgSideNavPanel(colorBgSideNavPanel: string): UiSdlLightTheme;

  /**
   * colorBgSecondary
   */
  readonly colorBgSecondary: string;
  withColorBgSecondary(colorBgSecondary: string): UiSdlLightTheme;

  /**
   * colorBgSecondaryInverse
   */
  readonly colorBgSecondaryInverse: string;
  withColorBgSecondaryInverse(colorBgSecondaryInverse: string): UiSdlLightTheme;

  /**
   * colorBgSegBtnSelected
   */
  readonly colorBgSegBtnSelected: string;
  withColorBgSegBtnSelected(colorBgSegBtnSelected: string): UiSdlLightTheme;

  /**
   * colorBgSelected
   */
  readonly colorBgSelected: string;
  withColorBgSelected(colorBgSelected: string): UiSdlLightTheme;

  /**
   * colorBgSuccess
   */
  readonly colorBgSuccess: string;
  withColorBgSuccess(colorBgSuccess: string): UiSdlLightTheme;

  /**
   * colorBgTertiary
   */
  readonly colorBgTertiary: string;
  withColorBgTertiary(colorBgTertiary: string): UiSdlLightTheme;

  /**
   * colorBgTertiaryInverse
   */
  readonly colorBgTertiaryInverse: string;
  withColorBgTertiaryInverse(colorBgTertiaryInverse: string): UiSdlLightTheme;

  /**
   * colorBgTickMark
   */
  readonly colorBgTickMark: string;
  withColorBgTickMark(colorBgTickMark: string): UiSdlLightTheme;

  /**
   * colorBgTrack
   */
  readonly colorBgTrack: string;
  withColorBgTrack(colorBgTrack: string): UiSdlLightTheme;

  /**
   * colorBgWarning
   */
  readonly colorBgWarning: string;
  withColorBgWarning(colorBgWarning: string): UiSdlLightTheme;

  /**
   * colorBgWarningWeak
   */
  readonly colorBgWarningWeak: string;
  withColorBgWarningWeak(colorBgWarningWeak: string): UiSdlLightTheme;

  /**
   * colorBorder
   */
  readonly colorBorder: string;
  withColorBorder(colorBorder: string): UiSdlLightTheme;

  /**
   * colorBorderAccent
   */
  readonly colorBorderAccent: string;
  withColorBorderAccent(colorBorderAccent: string): UiSdlLightTheme;

  /**
   * colorBorderBtnAccentOutline
   */
  readonly colorBorderBtnAccentOutline: string;
  withColorBorderBtnAccentOutline(colorBorderBtnAccentOutline: string): UiSdlLightTheme;

  /**
   * colorBorderBtnDangerOutline
   */
  readonly colorBorderBtnDangerOutline: string;
  withColorBorderBtnDangerOutline(colorBorderBtnDangerOutline: string): UiSdlLightTheme;

  /**
   * colorBorderBtnPrimaryOutline
   */
  readonly colorBorderBtnPrimaryOutline: string;
  withColorBorderBtnPrimaryOutline(colorBorderBtnPrimaryOutline: string): UiSdlLightTheme;

  /**
   * colorBorderCardChildPrimary
   */
  readonly colorBorderCardChildPrimary: string;
  withColorBorderCardChildPrimary(colorBorderCardChildPrimary: string): UiSdlLightTheme;

  /**
   * colorBorderCardChildSecondary
   */
  readonly colorBorderCardChildSecondary: string;
  withColorBorderCardChildSecondary(colorBorderCardChildSecondary: string): UiSdlLightTheme;

  /**
   * colorBorderCardParent
   */
  readonly colorBorderCardParent: string;
  withColorBorderCardParent(colorBorderCardParent: string): UiSdlLightTheme;

  /**
   * colorBorderDanger
   */
  readonly colorBorderDanger: string;
  withColorBorderDanger(colorBorderDanger: string): UiSdlLightTheme;

  /**
   * colorBorderInlineNotificationError
   */
  readonly colorBorderInlineNotificationError: string;
  withColorBorderInlineNotificationError(colorBorderInlineNotificationError: string): UiSdlLightTheme;

  /**
   * colorBorderInlineNotificationSuccess
   */
  readonly colorBorderInlineNotificationSuccess: string;
  withColorBorderInlineNotificationSuccess(colorBorderInlineNotificationSuccess: string): UiSdlLightTheme;

  /**
   * colorBorderInlineNotificationWarning
   */
  readonly colorBorderInlineNotificationWarning: string;
  withColorBorderInlineNotificationWarning(colorBorderInlineNotificationWarning: string): UiSdlLightTheme;

  /**
   * colorBorderMenu
   */
  readonly colorBorderMenu: string;
  withColorBorderMenu(colorBorderMenu: string): UiSdlLightTheme;

  /**
   * colorBorderReadonly
   */
  readonly colorBorderReadonly: string;
  withColorBorderReadonly(colorBorderReadonly: string): UiSdlLightTheme;

  /**
   * colorBorderSegBtn
   */
  readonly colorBorderSegBtn: string;
  withColorBorderSegBtn(colorBorderSegBtn: string): UiSdlLightTheme;

  /**
   * colorBorderStrong
   */
  readonly colorBorderStrong: string;
  withColorBorderStrong(colorBorderStrong: string): UiSdlLightTheme;

  /**
   * colorBorderSuccess
   */
  readonly colorBorderSuccess: string;
  withColorBorderSuccess(colorBorderSuccess: string): UiSdlLightTheme;

  /**
   * colorBorderWarning
   */
  readonly colorBorderWarning: string;
  withColorBorderWarning(colorBorderWarning: string): UiSdlLightTheme;

  /**
   * colorBorderWeak
   */
  readonly colorBorderWeak: string;
  withColorBorderWeak(colorBorderWeak: string): UiSdlLightTheme;

  /**
   * colorDivider
   */
  readonly colorDivider: string;
  withColorDivider(colorDivider: string): UiSdlLightTheme;

  /**
   * colorDividerStrong
   */
  readonly colorDividerStrong: string;
  withColorDividerStrong(colorDividerStrong: string): UiSdlLightTheme;

  /**
   * colorDividerWeak
   */
  readonly colorDividerWeak: string;
  withColorDividerWeak(colorDividerWeak: string): UiSdlLightTheme;

  /**
   * colorBgCollapsibleNav
   */
  readonly colorBgCollapsibleNav: string;
  withColorBgCollapsibleNav(colorBgCollapsibleNav: string): UiSdlLightTheme;

  /**
   * colorBgTintTimeBarOverlay
   */
  readonly colorBgTintTimeBarOverlay: string;
  withColorBgTintTimeBarOverlay(colorBgTintTimeBarOverlay: string): UiSdlLightTheme;

  /**
   * colorBgSankeyLabel
   */
  readonly colorBgSankeyLabel: string;
  withColorBgSankeyLabel(colorBgSankeyLabel: string): UiSdlLightTheme;

  /**
   * colorBgSideNav
   */
  readonly colorBgSideNav: string;
  withColorBgSideNav(colorBgSideNav: string): UiSdlLightTheme;

  /**
   * colorBgSideNavItemHover
   */
  readonly colorBgSideNavItemHover: string;
  withColorBgSideNavItemHover(colorBgSideNavItemHover: string): UiSdlLightTheme;

  /**
   * colorBgSideItemHover
   */
  readonly colorBgSideItemHover: string;
  withColorBgSideItemHover(colorBgSideItemHover: string): UiSdlLightTheme;

  /**
   * colorFgSideNavSelected
   */
  readonly colorFgSideNavSelected: string;
  withColorFgSideNavSelected(colorFgSideNavSelected: string): UiSdlLightTheme;

  /**
   * colorFgSideNavUnselected
   */
  readonly colorFgSideNavUnselected: string;
  withColorFgSideNavUnselected(colorFgSideNavUnselected: string): UiSdlLightTheme;

  /**
   * colorBorderSideNavItemIndicator
   */
  readonly colorBorderSideNavItemIndicator: string;
  withColorBorderSideNavItemIndicator(colorBorderSideNavItemIndicator: string): UiSdlLightTheme;

  /**
   * colorBorderSideNavItemDivider
   */
  readonly colorBorderSideNavItemDivider: string;
  withColorBorderSideNavItemDivider(colorBorderSideNavItemDivider: string): UiSdlLightTheme;

  /**
   * colorFgAccent
   */
  readonly colorFgAccent: string;
  withColorFgAccent(colorFgAccent: string): UiSdlLightTheme;

  /**
   * colorFgAccentWeak
   */
  readonly colorFgAccentWeak: string;
  withColorFgAccentWeak(colorFgAccentWeak: string): UiSdlLightTheme;

  /**
   * colorFgAccentStrong
   */
  readonly colorFgAccentStrong: string;
  withColorFgAccentStrong(colorFgAccentStrong: string): UiSdlLightTheme;

  /**
   * colorFgBtnAccent
   */
  readonly colorFgBtnAccent: string;
  withColorFgBtnAccent(colorFgBtnAccent: string): UiSdlLightTheme;

  /**
   * colorFgBtnDanger
   */
  readonly colorFgBtnDanger: string;
  withColorFgBtnDanger(colorFgBtnDanger: string): UiSdlLightTheme;

  /**
   * colorFgBtnPrimary
   */
  readonly colorFgBtnPrimary: string;
  withColorFgBtnPrimary(colorFgBtnPrimary: string): UiSdlLightTheme;

  /**
   * colorFgDanger
   */
  readonly colorFgDanger: string;
  withColorFgDanger(colorFgDanger: string): UiSdlLightTheme;

  /**
   * colorFgDangerStrong
   */
  readonly colorFgDangerStrong: string;
  withColorFgDangerStrong(colorFgDangerStrong: string): UiSdlLightTheme;

  /**
   * colorFgDangerWeak
   */
  readonly colorFgDangerWeak: string;
  withColorFgDangerWeak(colorFgDangerWeak: string): UiSdlLightTheme;

  /**
   * colorFgDecoOrangeStrong
   */
  readonly colorFgDecoOrangeStrong: string;
  withColorFgDecoOrangeStrong(colorFgDecoOrangeStrong: string): UiSdlLightTheme;

  /**
   * colorFgDecoOrange
   */
  readonly colorFgDecoOrange: string;
  withColorFgDecoOrange(colorFgDecoOrange: string): UiSdlLightTheme;

  /**
   * colorFgDecoOrangeWeak
   */
  readonly colorFgDecoOrangeWeak: string;
  withColorFgDecoOrangeWeak(colorFgDecoOrangeWeak: string): UiSdlLightTheme;

  /**
   * colorFgDecoOliveStrong
   */
  readonly colorFgDecoOliveStrong: string;
  withColorFgDecoOliveStrong(colorFgDecoOliveStrong: string): UiSdlLightTheme;

  /**
   * colorFgDecoOlive
   */
  readonly colorFgDecoOlive: string;
  withColorFgDecoOlive(colorFgDecoOlive: string): UiSdlLightTheme;

  /**
   * colorFgDecoOliveWeak
   */
  readonly colorFgDecoOliveWeak: string;
  withColorFgDecoOliveWeak(colorFgDecoOliveWeak: string): UiSdlLightTheme;

  /**
   * colorFgDecoLimeStrong
   */
  readonly colorFgDecoLimeStrong: string;
  withColorFgDecoLimeStrong(colorFgDecoLimeStrong: string): UiSdlLightTheme;

  /**
   * colorFgDecoLime
   */
  readonly colorFgDecoLime: string;
  withColorFgDecoLime(colorFgDecoLime: string): UiSdlLightTheme;

  /**
   * colorFgDecoLimeWeak
   */
  readonly colorFgDecoLimeWeak: string;
  withColorFgDecoLimeWeak(colorFgDecoLimeWeak: string): UiSdlLightTheme;

  /**
   * colorFgDecoForestStrong
   */
  readonly colorFgDecoForestStrong: string;
  withColorFgDecoForestStrong(colorFgDecoForestStrong: string): UiSdlLightTheme;

  /**
   * colorFgDecoForest
   */
  readonly colorFgDecoForest: string;
  withColorFgDecoForest(colorFgDecoForest: string): UiSdlLightTheme;

  /**
   * colorFgDecoForestWeak
   */
  readonly colorFgDecoForestWeak: string;
  withColorFgDecoForestWeak(colorFgDecoForestWeak: string): UiSdlLightTheme;

  /**
   * colorFgDecoCyanStrong
   */
  readonly colorFgDecoCyanStrong: string;
  withColorFgDecoCyanStrong(colorFgDecoCyanStrong: string): UiSdlLightTheme;

  /**
   * colorFgDecoCyan
   */
  readonly colorFgDecoCyan: string;
  withColorFgDecoCyan(colorFgDecoCyan: string): UiSdlLightTheme;

  /**
   * colorFgDecoCyanWeak
   */
  readonly colorFgDecoCyanWeak: string;
  withColorFgDecoCyanWeak(colorFgDecoCyanWeak: string): UiSdlLightTheme;

  /**
   * colorFgDecoSlateStrong
   */
  readonly colorFgDecoSlateStrong: string;
  withColorFgDecoSlateStrong(colorFgDecoSlateStrong: string): UiSdlLightTheme;

  /**
   * colorFgDecoSlate
   */
  readonly colorFgDecoSlate: string;
  withColorFgDecoSlate(colorFgDecoSlate: string): UiSdlLightTheme;

  /**
   * colorFgDecoSlateWeak
   */
  readonly colorFgDecoSlateWeak: string;
  withColorFgDecoSlateWeak(colorFgDecoSlateWeak: string): UiSdlLightTheme;

  /**
   * colorFgDecoPurpleStrong
   */
  readonly colorFgDecoPurpleStrong: string;
  withColorFgDecoPurpleStrong(colorFgDecoPurpleStrong: string): UiSdlLightTheme;

  /**
   * colorFgDecoPurple
   */
  readonly colorFgDecoPurple: string;
  withColorFgDecoPurple(colorFgDecoPurple: string): UiSdlLightTheme;

  /**
   * colorFgDecoPurpleWeak
   */
  readonly colorFgDecoPurpleWeak: string;
  withColorFgDecoPurpleWeak(colorFgDecoPurpleWeak: string): UiSdlLightTheme;

  /**
   * colorFgDecoPlumStrong
   */
  readonly colorFgDecoPlumStrong: string;
  withColorFgDecoPlumStrong(colorFgDecoPlumStrong: string): UiSdlLightTheme;

  /**
   * colorFgDecoPlum
   */
  readonly colorFgDecoPlum: string;
  withColorFgDecoPlum(colorFgDecoPlum: string): UiSdlLightTheme;

  /**
   * colorFgDecoPlumWeak
   */
  readonly colorFgDecoPlumWeak: string;
  withColorFgDecoPlumWeak(colorFgDecoPlumWeak: string): UiSdlLightTheme;

  /**
   * colorFgDecoChocoStrong
   */
  readonly colorFgDecoChocoStrong: string;
  withColorFgDecoChocoStrong(colorFgDecoChocoStrong: string): UiSdlLightTheme;

  /**
   * colorFgDecoChoco
   */
  readonly colorFgDecoChoco: string;
  withColorFgDecoChoco(colorFgDecoChoco: string): UiSdlLightTheme;

  /**
   * colorFgDecoChocoWeak
   */
  readonly colorFgDecoChocoWeak: string;
  withColorFgDecoChocoWeak(colorFgDecoChocoWeak: string): UiSdlLightTheme;

  /**
   * colorFgMenuItemSelected
   */
  readonly colorFgMenuItemSelected: string;
  withColorFgMenuItemSelected(colorFgMenuItemSelected: string): UiSdlLightTheme;

  /**
   * colorFgMenuItemSelectedIndicator
   */
  readonly colorFgMenuItemSelectedIndicator: string;
  withColorFgMenuItemSelectedIndicator(colorFgMenuItemSelectedIndicator: string): UiSdlLightTheme;

  /**
   * colorFgMenuItemUnselected
   */
  readonly colorFgMenuItemUnselected: string;
  withColorFgMenuItemUnselected(colorFgMenuItemUnselected: string): UiSdlLightTheme;

  /**
   * colorFgPrimary
   */
  readonly colorFgPrimary: string;
  withColorFgPrimary(colorFgPrimary: string): UiSdlLightTheme;

  /**
   * colorFgPrimaryInverse
   */
  readonly colorFgPrimaryInverse: string;
  withColorFgPrimaryInverse(colorFgPrimaryInverse: string): UiSdlLightTheme;

  /**
   * colorFgReadonly
   */
  readonly colorFgReadonly: string;
  withColorFgReadonly(colorFgReadonly: string): UiSdlLightTheme;

  /**
   * colorFgSecondary
   */
  readonly colorFgSecondary: string;
  withColorFgSecondary(colorFgSecondary: string): UiSdlLightTheme;

  /**
   * colorFgSecondaryInverse
   */
  readonly colorFgSecondaryInverse: string;
  withColorFgSecondaryInverse(colorFgSecondaryInverse: string): UiSdlLightTheme;

  /**
   * colorFgSegBtn
   */
  readonly colorFgSegBtn: string;
  withColorFgSegBtn(colorFgSegBtn: string): UiSdlLightTheme;

  /**
   * colorFgSegBtnSelected
   */
  readonly colorFgSegBtnSelected: string;
  withColorFgSegBtnSelected(colorFgSegBtnSelected: string): UiSdlLightTheme;

  /**
   * colorFgSuccess
   */
  readonly colorFgSuccess: string;
  withColorFgSuccess(colorFgSuccess: string): UiSdlLightTheme;

  /**
   * colorFgSuccessStrong
   */
  readonly colorFgSuccessStrong: string;
  withColorFgSuccessStrong(colorFgSuccessStrong: string): UiSdlLightTheme;

  /**
   * colorFgSuccessWeak
   */
  readonly colorFgSuccessWeak: string;
  withColorFgSuccessWeak(colorFgSuccessWeak: string): UiSdlLightTheme;

  /**
   * colorFgWarning
   */
  readonly colorFgWarning: string;
  withColorFgWarning(colorFgWarning: string): UiSdlLightTheme;

  /**
   * colorFgWarningStrong
   */
  readonly colorFgWarningStrong: string;
  withColorFgWarningStrong(colorFgWarningStrong: string): UiSdlLightTheme;

  /**
   * colorFgWarningWeak
   */
  readonly colorFgWarningWeak: string;
  withColorFgWarningWeak(colorFgWarningWeak: string): UiSdlLightTheme;

  /**
   * colorFocus
   */
  readonly colorFocus: string;
  withColorFocus(colorFocus: string): UiSdlLightTheme;

  /**
   * componentBackgroundColor
   */
  readonly componentBackgroundColor: string;
  withComponentBackgroundColor(componentBackgroundColor: string): UiSdlLightTheme;

  /**
   * componentBackgroundColorError
   */
  readonly componentBackgroundColorError: string;
  withComponentBackgroundColorError(componentBackgroundColorError: string): UiSdlLightTheme;

  /**
   * componentBackgroundColorSuccess
   */
  readonly componentBackgroundColorSuccess: string;
  withComponentBackgroundColorSuccess(componentBackgroundColorSuccess: string): UiSdlLightTheme;

  /**
   * componentBackgroundColorWarning
   */
  readonly componentBackgroundColorWarning: string;
  withComponentBackgroundColorWarning(componentBackgroundColorWarning: string): UiSdlLightTheme;

  /**
   * componentBorderColor
   */
  readonly componentBorderColor: string;
  withComponentBorderColor(componentBorderColor: string): UiSdlLightTheme;

  /**
   * componentDividerColor
   */
  readonly componentDividerColor: string;
  withComponentDividerColor(componentDividerColor: string): UiSdlLightTheme;

  /**
   * dangerColor
   */
  readonly dangerColor: string;
  withDangerColor(dangerColor: string): UiSdlLightTheme;

  /**
   * dateIconColor
   */
  readonly dateIconColor: string;
  withDateIconColor(dateIconColor: string): UiSdlLightTheme;

  /**
   * dateIconTextColor
   */
  readonly dateIconTextColor: string;
  withDateIconTextColor(dateIconTextColor: string): UiSdlLightTheme;

  /**
   * dropdownDescriptionBackgroundColor
   */
  readonly dropdownDescriptionBackgroundColor: string;
  withDropdownDescriptionBackgroundColor(dropdownDescriptionBackgroundColor: string): UiSdlLightTheme;

  /**
   * dropdownDescriptionColor
   */
  readonly dropdownDescriptionColor: string;
  withDropdownDescriptionColor(dropdownDescriptionColor: string): UiSdlLightTheme;

  /**
   * dropdownMessageColor
   */
  readonly dropdownMessageColor: string;
  withDropdownMessageColor(dropdownMessageColor: string): UiSdlLightTheme;

  /**
   * dropdownOptionDividerColor
   */
  readonly dropdownOptionDividerColor: string;
  withDropdownOptionDividerColor(dropdownOptionDividerColor: string): UiSdlLightTheme;

  /**
   * dropdownSelectionColor
   */
  readonly dropdownSelectionColor: string;
  withDropdownSelectionColor(dropdownSelectionColor: string): UiSdlLightTheme;

  /**
   * dynamicComponentLoaderBackgroundColor
   */
  readonly dynamicComponentLoaderBackgroundColor: string;
  withDynamicComponentLoaderBackgroundColor(dynamicComponentLoaderBackgroundColor: string): UiSdlLightTheme;

  /**
   * expressionFocusedInputBackgroundColor
   */
  readonly expressionFocusedInputBackgroundColor: string;
  withExpressionFocusedInputBackgroundColor(expressionFocusedInputBackgroundColor: string): UiSdlLightTheme;

  /**
   * fontColor
   */
  readonly fontColor: string;
  withFontColor(fontColor: string): UiSdlLightTheme;

  /**
   * formFieldBackgroundColor
   */
  readonly formFieldBackgroundColor: string;
  withFormFieldBackgroundColor(formFieldBackgroundColor: string): UiSdlLightTheme;

  /**
   * formFieldBackgroundColorDisabled
   */
  readonly formFieldBackgroundColorDisabled: string;
  withFormFieldBackgroundColorDisabled(formFieldBackgroundColorDisabled: string): UiSdlLightTheme;

  /**
   * formFieldBorderColor
   */
  readonly formFieldBorderColor: string;
  withFormFieldBorderColor(formFieldBorderColor: string): UiSdlLightTheme;

  /**
   * formFieldBorderColorDisabled
   */
  readonly formFieldBorderColorDisabled: string;
  withFormFieldBorderColorDisabled(formFieldBorderColorDisabled: string): UiSdlLightTheme;

  /**
   * formFieldColorDisabled
   */
  readonly formFieldColorDisabled: string;
  withFormFieldColorDisabled(formFieldColorDisabled: string): UiSdlLightTheme;

  /**
   * formFieldColorHint
   */
  readonly formFieldColorHint: string;
  withFormFieldColorHint(formFieldColorHint: string): UiSdlLightTheme;

  /**
   * formFieldErrorBorderColor
   */
  readonly formFieldErrorBorderColor: string;
  withFormFieldErrorBorderColor(formFieldErrorBorderColor: string): UiSdlLightTheme;

  /**
   * formFieldErrorHoverBorderColor
   */
  readonly formFieldErrorHoverBorderColor: string;
  withFormFieldErrorHoverBorderColor(formFieldErrorHoverBorderColor: string): UiSdlLightTheme;

  /**
   * formFieldHeaderColorDisabled
   */
  readonly formFieldHeaderColorDisabled: string;
  withFormFieldHeaderColorDisabled(formFieldHeaderColorDisabled: string): UiSdlLightTheme;

  /**
   * formFieldHoverBackgroundColor
   */
  readonly formFieldHoverBackgroundColor: string;
  withFormFieldHoverBackgroundColor(formFieldHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * formFieldHoverBorderColor
   */
  readonly formFieldHoverBorderColor: string;
  withFormFieldHoverBorderColor(formFieldHoverBorderColor: string): UiSdlLightTheme;

  /**
   * formFieldLabelErrorColor
   */
  readonly formFieldLabelErrorColor: string;
  withFormFieldLabelErrorColor(formFieldLabelErrorColor: string): UiSdlLightTheme;

  /**
   * formFieldLabelFocusColor
   */
  readonly formFieldLabelFocusColor: string;
  withFormFieldLabelFocusColor(formFieldLabelFocusColor: string): UiSdlLightTheme;

  /**
   * formFieldSetLinkHoverColor
   */
  readonly formFieldSetLinkHoverColor: string;
  withFormFieldSetLinkHoverColor(formFieldSetLinkHoverColor: string): UiSdlLightTheme;

  /**
   * formFieldVariantBorderColor
   */
  readonly formFieldVariantBorderColor: string;
  withFormFieldVariantBorderColor(formFieldVariantBorderColor: string): UiSdlLightTheme;

  /**
   * gaugeAxisBarColor
   */
  readonly gaugeAxisBarColor: string;
  withGaugeAxisBarColor(gaugeAxisBarColor: string): UiSdlLightTheme;

  /**
   * gaugeFontColor
   */
  readonly gaugeFontColor: string;
  withGaugeFontColor(gaugeFontColor: string): UiSdlLightTheme;

  /**
   * gaugeProgressBarDefaultColor
   */
  readonly gaugeProgressBarDefaultColor: string;
  withGaugeProgressBarDefaultColor(gaugeProgressBarDefaultColor: string): UiSdlLightTheme;

  /**
   * gradientLinearCardParentLeft
   */
  readonly gradientLinearCardParentLeft: string;
  withGradientLinearCardParentLeft(gradientLinearCardParentLeft: string): UiSdlLightTheme;

  /**
   * gradientLinearCardParentRight
   */
  readonly gradientLinearCardParentRight: string;
  withGradientLinearCardParentRight(gradientLinearCardParentRight: string): UiSdlLightTheme;

  /**
   * gradientLinearCardChildLeft
   */
  readonly gradientLinearCardChildLeft: string;
  withGradientLinearCardChildLeft(gradientLinearCardChildLeft: string): UiSdlLightTheme;

  /**
   * gradientLinearCardChildRight
   */
  readonly gradientLinearCardChildRight: string;
  withGradientLinearCardChildRight(gradientLinearCardChildRight: string): UiSdlLightTheme;

  /**
   * gradientLinearNav
   */
  readonly gradientLinearNav: string;
  withGradientLinearNav(gradientLinearNav: string): UiSdlLightTheme;

  /**
   * graphVisualizationClusterNodeFillColor
   */
  readonly graphVisualizationClusterNodeFillColor: string;
  withGraphVisualizationClusterNodeFillColor(graphVisualizationClusterNodeFillColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationClusterNodeOutlineColor
   */
  readonly graphVisualizationClusterNodeOutlineColor: string;
  withGraphVisualizationClusterNodeOutlineColor(graphVisualizationClusterNodeOutlineColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationGlyphFontColor
   */
  readonly graphVisualizationGlyphFontColor: string;
  withGraphVisualizationGlyphFontColor(graphVisualizationGlyphFontColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationLegendBackgroundColor
   */
  readonly graphVisualizationLegendBackgroundColor: string;
  withGraphVisualizationLegendBackgroundColor(graphVisualizationLegendBackgroundColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationLegendViewMoreButtonFontColor
   */
  readonly graphVisualizationLegendViewMoreButtonFontColor: string;
  withGraphVisualizationLegendViewMoreButtonFontColor(graphVisualizationLegendViewMoreButtonFontColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationMapTheme
   */
  readonly graphVisualizationMapTheme: string;
  withGraphVisualizationMapTheme(graphVisualizationMapTheme: string): UiSdlLightTheme;

  /**
   * graphVisualizationMergedEdgeGlyphBackgroundColor
   */
  readonly graphVisualizationMergedEdgeGlyphBackgroundColor: string;
  withGraphVisualizationMergedEdgeGlyphBackgroundColor(graphVisualizationMergedEdgeGlyphBackgroundColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationNodeDefaultDonutColor
   */
  readonly graphVisualizationNodeDefaultDonutColor: string;
  withGraphVisualizationNodeDefaultDonutColor(graphVisualizationNodeDefaultDonutColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationNodeInfoGlyphBackgroundColor
   */
  readonly graphVisualizationNodeInfoGlyphBackgroundColor: string;
  withGraphVisualizationNodeInfoGlyphBackgroundColor(graphVisualizationNodeInfoGlyphBackgroundColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationNodeInfoGlyphFontColor
   */
  readonly graphVisualizationNodeInfoGlyphFontColor: string;
  withGraphVisualizationNodeInfoGlyphFontColor(graphVisualizationNodeInfoGlyphFontColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationPercentageDonutSegmentColor
   */
  readonly graphVisualizationPercentageDonutSegmentColor: string;
  withGraphVisualizationPercentageDonutSegmentColor(graphVisualizationPercentageDonutSegmentColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationTimeBarBackgroundColor
   */
  readonly graphVisualizationTimeBarBackgroundColor: string;
  withGraphVisualizationTimeBarBackgroundColor(graphVisualizationTimeBarBackgroundColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationTimeBarColor
   */
  readonly graphVisualizationTimeBarColor: string;
  withGraphVisualizationTimeBarColor(graphVisualizationTimeBarColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationTimeBarHoverColor
   */
  readonly graphVisualizationTimeBarHoverColor: string;
  withGraphVisualizationTimeBarHoverColor(graphVisualizationTimeBarHoverColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationTimeBarScaleHoverColor
   */
  readonly graphVisualizationTimeBarScaleHoverColor: string;
  withGraphVisualizationTimeBarScaleHoverColor(graphVisualizationTimeBarScaleHoverColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationTooltipBackgroundColor
   */
  readonly graphVisualizationTooltipBackgroundColor: string;
  withGraphVisualizationTooltipBackgroundColor(graphVisualizationTooltipBackgroundColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationTooltipBodyColor
   */
  readonly graphVisualizationTooltipBodyColor: string;
  withGraphVisualizationTooltipBodyColor(graphVisualizationTooltipBodyColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationTooltipSubtitleColor
   */
  readonly graphVisualizationTooltipSubtitleColor: string;
  withGraphVisualizationTooltipSubtitleColor(graphVisualizationTooltipSubtitleColor: string): UiSdlLightTheme;

  /**
   * graphVisualizationTooltipTitleColor
   */
  readonly graphVisualizationTooltipTitleColor: string;
  withGraphVisualizationTooltipTitleColor(graphVisualizationTooltipTitleColor: string): UiSdlLightTheme;

  /**
   * gridCellColorWheelBackgroundColor
   */
  readonly gridCellColorWheelBackgroundColor: string;
  withGridCellColorWheelBackgroundColor(gridCellColorWheelBackgroundColor: string): UiSdlLightTheme;

  /**
   * gridHeaderFontColor
   */
  readonly gridHeaderFontColor: string;
  withGridHeaderFontColor(gridHeaderFontColor: string): UiSdlLightTheme;

  /**
   * gridHoverBackgroundColor
   */
  readonly gridHoverBackgroundColor: string;
  withGridHoverBackgroundColor(gridHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * gridMessageBackgroundColor
   */
  readonly gridMessageBackgroundColor: string;
  withGridMessageBackgroundColor(gridMessageBackgroundColor: string): UiSdlLightTheme;

  /**
   * gridPagerLabelFontColor
   */
  readonly gridPagerLabelFontColor: string;
  withGridPagerLabelFontColor(gridPagerLabelFontColor: string): UiSdlLightTheme;

  /**
   * gridPagerSizesFontColor
   */
  readonly gridPagerSizesFontColor: string;
  withGridPagerSizesFontColor(gridPagerSizesFontColor: string): UiSdlLightTheme;

  /**
   * gridSelectedCellBackgroundColor
   */
  readonly gridSelectedCellBackgroundColor: string;
  withGridSelectedCellBackgroundColor(gridSelectedCellBackgroundColor: string): UiSdlLightTheme;

  /**
   * gridSelectedCellBorderColor
   */
  readonly gridSelectedCellBorderColor: string;
  withGridSelectedCellBorderColor(gridSelectedCellBorderColor: string): UiSdlLightTheme;

  /**
   * gridSelectedFontColor
   */
  readonly gridSelectedFontColor: string;
  withGridSelectedFontColor(gridSelectedFontColor: string): UiSdlLightTheme;

  /**
   * gridSelectedHoverBackgroundColor
   */
  readonly gridSelectedHoverBackgroundColor: string;
  withGridSelectedHoverBackgroundColor(gridSelectedHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * iconGroupColor
   */
  readonly iconGroupColor: string;
  withIconGroupColor(iconGroupColor: string): UiSdlLightTheme;

  /**
   * indicatorBarBackgroundColor
   */
  readonly indicatorBarBackgroundColor: string;
  withIndicatorBarBackgroundColor(indicatorBarBackgroundColor: string): UiSdlLightTheme;

  /**
   * infoColor
   */
  readonly infoColor: string;
  withInfoColor(infoColor: string): UiSdlLightTheme;

  /**
   * invertedComponentBackgroundColor
   */
  readonly invertedComponentBackgroundColor: string;
  withInvertedComponentBackgroundColor(invertedComponentBackgroundColor: string): UiSdlLightTheme;

  /**
   * kanbanBoardBackgroundColumnTitle
   */
  readonly kanbanBoardBackgroundColumnTitle: string;
  withKanbanBoardBackgroundColumnTitle(kanbanBoardBackgroundColumnTitle: string): UiSdlLightTheme;

  /**
   * kanbanBoardBackgroundItemSlot
   */
  readonly kanbanBoardBackgroundItemSlot: string;
  withKanbanBoardBackgroundItemSlot(kanbanBoardBackgroundItemSlot: string): UiSdlLightTheme;

  /**
   * kanbanBoardBackgroundLayout
   */
  readonly kanbanBoardBackgroundLayout: string;
  withKanbanBoardBackgroundLayout(kanbanBoardBackgroundLayout: string): UiSdlLightTheme;

  /**
   * kanbanBoardBorderTitle
   */
  readonly kanbanBoardBorderTitle: string;
  withKanbanBoardBorderTitle(kanbanBoardBorderTitle: string): UiSdlLightTheme;

  /**
   * kanbanBoardButtonColor
   */
  readonly kanbanBoardButtonColor: string;
  withKanbanBoardButtonColor(kanbanBoardButtonColor: string): UiSdlLightTheme;

  /**
   * kanbanBoardCardContentColor
   */
  readonly kanbanBoardCardContentColor: string;
  withKanbanBoardCardContentColor(kanbanBoardCardContentColor: string): UiSdlLightTheme;

  /**
   * kanbanBoardCardHeadLineBlockColor
   */
  readonly kanbanBoardCardHeadLineBlockColor: string;
  withKanbanBoardCardHeadLineBlockColor(kanbanBoardCardHeadLineBlockColor: string): UiSdlLightTheme;

  /**
   * kanbanBoardContentBackgroundColor
   */
  readonly kanbanBoardContentBackgroundColor: string;
  withKanbanBoardContentBackgroundColor(kanbanBoardContentBackgroundColor: string): UiSdlLightTheme;

  /**
   * kanbanBoardTextBackgroundCollectionList
   */
  readonly kanbanBoardTextBackgroundCollectionList: string;
  withKanbanBoardTextBackgroundCollectionList(kanbanBoardTextBackgroundCollectionList: string): UiSdlLightTheme;

  /**
   * kanbanBoardTitleColor
   */
  readonly kanbanBoardTitleColor: string;
  withKanbanBoardTitleColor(kanbanBoardTitleColor: string): UiSdlLightTheme;

  /**
   * kendoAppSurfaceColor
   */
  readonly kendoAppSurfaceColor?: string | null;
  withKendoAppSurfaceColor(kendoAppSurfaceColor: string | null): UiSdlLightTheme;

  /**
   * kendoOnAppSurfaceColor
   */
  readonly kendoOnAppSurfaceColor?: string | null;
  withKendoOnAppSurfaceColor(kendoOnAppSurfaceColor: string | null): UiSdlLightTheme;

  /**
   * kendoSubtleColor
   */
  readonly kendoSubtleColor?: string | null;
  withKendoSubtleColor(kendoSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoSurfaceColor
   */
  readonly kendoSurfaceColor?: string | null;
  withKendoSurfaceColor(kendoSurfaceColor: string | null): UiSdlLightTheme;

  /**
   * kendoSurfaceAltColor
   */
  readonly kendoSurfaceAltColor?: string | null;
  withKendoSurfaceAltColor(kendoSurfaceAltColor: string | null): UiSdlLightTheme;

  /**
   * kendoBorderColor
   */
  readonly kendoBorderColor?: string | null;
  withKendoBorderColor(kendoBorderColor: string | null): UiSdlLightTheme;

  /**
   * kendoBorderAltColor
   */
  readonly kendoBorderAltColor?: string | null;
  withKendoBorderAltColor(kendoBorderAltColor: string | null): UiSdlLightTheme;

  /**
   * kendoBaseSubtleColor
   */
  readonly kendoBaseSubtleColor?: string | null;
  withKendoBaseSubtleColor(kendoBaseSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoBaseSubtleHoverColor
   */
  readonly kendoBaseSubtleHoverColor?: string | null;
  withKendoBaseSubtleHoverColor(kendoBaseSubtleHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoBaseSubtleActiveColor
   */
  readonly kendoBaseSubtleActiveColor?: string | null;
  withKendoBaseSubtleActiveColor(kendoBaseSubtleActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoBaseColor
   */
  readonly kendoBaseColor?: string | null;
  withKendoBaseColor(kendoBaseColor: string | null): UiSdlLightTheme;

  /**
   * kendoBaseHoverColor
   */
  readonly kendoBaseHoverColor?: string | null;
  withKendoBaseHoverColor(kendoBaseHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoBaseActiveColor
   */
  readonly kendoBaseActiveColor?: string | null;
  withKendoBaseActiveColor(kendoBaseActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoBaseEmphasisColor
   */
  readonly kendoBaseEmphasisColor?: string | null;
  withKendoBaseEmphasisColor(kendoBaseEmphasisColor: string | null): UiSdlLightTheme;

  /**
   * kendoBaseOnSubtleColor
   */
  readonly kendoBaseOnSubtleColor?: string | null;
  withKendoBaseOnSubtleColor(kendoBaseOnSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoOnBaseColor
   */
  readonly kendoOnBaseColor?: string | null;
  withKendoOnBaseColor(kendoOnBaseColor: string | null): UiSdlLightTheme;

  /**
   * kendoBaseOnSurfaceColor
   */
  readonly kendoBaseOnSurfaceColor?: string | null;
  withKendoBaseOnSurfaceColor(kendoBaseOnSurfaceColor: string | null): UiSdlLightTheme;

  /**
   * kendoElevation01
   */
  readonly kendoElevation01?: string | null;
  withKendoElevation01(kendoElevation01: string | null): UiSdlLightTheme;

  /**
   * kendoElevation02
   */
  readonly kendoElevation02?: string | null;
  withKendoElevation02(kendoElevation02: string | null): UiSdlLightTheme;

  /**
   * kendoElevation03
   */
  readonly kendoElevation03?: string | null;
  withKendoElevation03(kendoElevation03: string | null): UiSdlLightTheme;

  /**
   * kendoElevation04
   */
  readonly kendoElevation04?: string | null;
  withKendoElevation04(kendoElevation04: string | null): UiSdlLightTheme;

  /**
   * kendoElevation05
   */
  readonly kendoElevation05?: string | null;
  withKendoElevation05(kendoElevation05: string | null): UiSdlLightTheme;

  /**
   * kendoElevation06
   */
  readonly kendoElevation06?: string | null;
  withKendoElevation06(kendoElevation06: string | null): UiSdlLightTheme;

  /**
   * kendoElevation07
   */
  readonly kendoElevation07?: string | null;
  withKendoElevation07(kendoElevation07: string | null): UiSdlLightTheme;

  /**
   * kendoElevation08
   */
  readonly kendoElevation08?: string | null;
  withKendoElevation08(kendoElevation08: string | null): UiSdlLightTheme;

  /**
   * kendoElevation09
   */
  readonly kendoElevation09?: string | null;
  withKendoElevation09(kendoElevation09: string | null): UiSdlLightTheme;

  /**
   * kendoPrimarySubtleColor
   */
  readonly kendoPrimarySubtleColor?: string | null;
  withKendoPrimarySubtleColor(kendoPrimarySubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoPrimarySubtleHoverColor
   */
  readonly kendoPrimarySubtleHoverColor?: string | null;
  withKendoPrimarySubtleHoverColor(kendoPrimarySubtleHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoPrimarySubtleActiveColor
   */
  readonly kendoPrimarySubtleActiveColor?: string | null;
  withKendoPrimarySubtleActiveColor(kendoPrimarySubtleActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoPrimaryColor
   */
  readonly kendoPrimaryColor?: string | null;
  withKendoPrimaryColor(kendoPrimaryColor: string | null): UiSdlLightTheme;

  /**
   * kendoPrimaryHoverColor
   */
  readonly kendoPrimaryHoverColor?: string | null;
  withKendoPrimaryHoverColor(kendoPrimaryHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoPrimaryActiveColor
   */
  readonly kendoPrimaryActiveColor?: string | null;
  withKendoPrimaryActiveColor(kendoPrimaryActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoPrimaryEmphasisColor
   */
  readonly kendoPrimaryEmphasisColor?: string | null;
  withKendoPrimaryEmphasisColor(kendoPrimaryEmphasisColor: string | null): UiSdlLightTheme;

  /**
   * kendoPrimaryOnSubtleColor
   */
  readonly kendoPrimaryOnSubtleColor?: string | null;
  withKendoPrimaryOnSubtleColor(kendoPrimaryOnSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoOnPrimaryColor
   */
  readonly kendoOnPrimaryColor?: string | null;
  withKendoOnPrimaryColor(kendoOnPrimaryColor: string | null): UiSdlLightTheme;

  /**
   * kendoPrimaryOnSurfaceColor
   */
  readonly kendoPrimaryOnSurfaceColor?: string | null;
  withKendoPrimaryOnSurfaceColor(kendoPrimaryOnSurfaceColor: string | null): UiSdlLightTheme;

  /**
   * kendoSecondarySubtleColor
   */
  readonly kendoSecondarySubtleColor?: string | null;
  withKendoSecondarySubtleColor(kendoSecondarySubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoSecondarySubtleHoverColor
   */
  readonly kendoSecondarySubtleHoverColor?: string | null;
  withKendoSecondarySubtleHoverColor(kendoSecondarySubtleHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoSecondarySubtleActiveColor
   */
  readonly kendoSecondarySubtleActiveColor?: string | null;
  withKendoSecondarySubtleActiveColor(kendoSecondarySubtleActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoSecondaryColor
   */
  readonly kendoSecondaryColor?: string | null;
  withKendoSecondaryColor(kendoSecondaryColor: string | null): UiSdlLightTheme;

  /**
   * kendoSecondaryHoverColor
   */
  readonly kendoSecondaryHoverColor?: string | null;
  withKendoSecondaryHoverColor(kendoSecondaryHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoSecondaryActiveColor
   */
  readonly kendoSecondaryActiveColor?: string | null;
  withKendoSecondaryActiveColor(kendoSecondaryActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoSecondaryEmphasisColor
   */
  readonly kendoSecondaryEmphasisColor?: string | null;
  withKendoSecondaryEmphasisColor(kendoSecondaryEmphasisColor: string | null): UiSdlLightTheme;

  /**
   * kendoSecondaryOnSubtleColor
   */
  readonly kendoSecondaryOnSubtleColor?: string | null;
  withKendoSecondaryOnSubtleColor(kendoSecondaryOnSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoOnSecondaryColor
   */
  readonly kendoOnSecondaryColor?: string | null;
  withKendoOnSecondaryColor(kendoOnSecondaryColor: string | null): UiSdlLightTheme;

  /**
   * kendoSecondaryOnSurfaceColor
   */
  readonly kendoSecondaryOnSurfaceColor?: string | null;
  withKendoSecondaryOnSurfaceColor(kendoSecondaryOnSurfaceColor: string | null): UiSdlLightTheme;

  /**
   * kendoTertiarySubtleColor
   */
  readonly kendoTertiarySubtleColor?: string | null;
  withKendoTertiarySubtleColor(kendoTertiarySubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoTertiarySubtleHoverColor
   */
  readonly kendoTertiarySubtleHoverColor?: string | null;
  withKendoTertiarySubtleHoverColor(kendoTertiarySubtleHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoTertiarySubtleActiveColor
   */
  readonly kendoTertiarySubtleActiveColor?: string | null;
  withKendoTertiarySubtleActiveColor(kendoTertiarySubtleActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoTertiaryColor
   */
  readonly kendoTertiaryColor?: string | null;
  withKendoTertiaryColor(kendoTertiaryColor: string | null): UiSdlLightTheme;

  /**
   * kendoTertiaryHoverColor
   */
  readonly kendoTertiaryHoverColor?: string | null;
  withKendoTertiaryHoverColor(kendoTertiaryHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoTertiaryActiveColor
   */
  readonly kendoTertiaryActiveColor?: string | null;
  withKendoTertiaryActiveColor(kendoTertiaryActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoTertiaryEmphasisColor
   */
  readonly kendoTertiaryEmphasisColor?: string | null;
  withKendoTertiaryEmphasisColor(kendoTertiaryEmphasisColor: string | null): UiSdlLightTheme;

  /**
   * kendoTertiaryOnSubtleColor
   */
  readonly kendoTertiaryOnSubtleColor?: string | null;
  withKendoTertiaryOnSubtleColor(kendoTertiaryOnSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoOnTertiaryColor
   */
  readonly kendoOnTertiaryColor?: string | null;
  withKendoOnTertiaryColor(kendoOnTertiaryColor: string | null): UiSdlLightTheme;

  /**
   * kendoTertiaryOnSurfaceColor
   */
  readonly kendoTertiaryOnSurfaceColor?: string | null;
  withKendoTertiaryOnSurfaceColor(kendoTertiaryOnSurfaceColor: string | null): UiSdlLightTheme;

  /**
   * kendoInfoSubtleColor
   */
  readonly kendoInfoSubtleColor?: string | null;
  withKendoInfoSubtleColor(kendoInfoSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoInfoSubtleHoverColor
   */
  readonly kendoInfoSubtleHoverColor?: string | null;
  withKendoInfoSubtleHoverColor(kendoInfoSubtleHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoInfoSubtleActiveColor
   */
  readonly kendoInfoSubtleActiveColor?: string | null;
  withKendoInfoSubtleActiveColor(kendoInfoSubtleActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoInfoColor
   */
  readonly kendoInfoColor?: string | null;
  withKendoInfoColor(kendoInfoColor: string | null): UiSdlLightTheme;

  /**
   * kendoInfoHoverColor
   */
  readonly kendoInfoHoverColor?: string | null;
  withKendoInfoHoverColor(kendoInfoHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoInfoActiveColor
   */
  readonly kendoInfoActiveColor?: string | null;
  withKendoInfoActiveColor(kendoInfoActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoInfoEmphasisColor
   */
  readonly kendoInfoEmphasisColor?: string | null;
  withKendoInfoEmphasisColor(kendoInfoEmphasisColor: string | null): UiSdlLightTheme;

  /**
   * kendoInfoOnSubtleColor
   */
  readonly kendoInfoOnSubtleColor?: string | null;
  withKendoInfoOnSubtleColor(kendoInfoOnSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoOnInfoColor
   */
  readonly kendoOnInfoColor?: string | null;
  withKendoOnInfoColor(kendoOnInfoColor: string | null): UiSdlLightTheme;

  /**
   * kendoInfoOnSurfaceColor
   */
  readonly kendoInfoOnSurfaceColor?: string | null;
  withKendoInfoOnSurfaceColor(kendoInfoOnSurfaceColor: string | null): UiSdlLightTheme;

  /**
   * kendoSuccessSubtleColor
   */
  readonly kendoSuccessSubtleColor?: string | null;
  withKendoSuccessSubtleColor(kendoSuccessSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoSuccessSubtleHoverColor
   */
  readonly kendoSuccessSubtleHoverColor?: string | null;
  withKendoSuccessSubtleHoverColor(kendoSuccessSubtleHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoSuccessSubtleActiveColor
   */
  readonly kendoSuccessSubtleActiveColor?: string | null;
  withKendoSuccessSubtleActiveColor(kendoSuccessSubtleActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoSuccessColor
   */
  readonly kendoSuccessColor?: string | null;
  withKendoSuccessColor(kendoSuccessColor: string | null): UiSdlLightTheme;

  /**
   * kendoSuccessHoverColor
   */
  readonly kendoSuccessHoverColor?: string | null;
  withKendoSuccessHoverColor(kendoSuccessHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoSuccessActiveColor
   */
  readonly kendoSuccessActiveColor?: string | null;
  withKendoSuccessActiveColor(kendoSuccessActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoSuccessEmphasisColor
   */
  readonly kendoSuccessEmphasisColor?: string | null;
  withKendoSuccessEmphasisColor(kendoSuccessEmphasisColor: string | null): UiSdlLightTheme;

  /**
   * kendoSuccessOnSubtleColor
   */
  readonly kendoSuccessOnSubtleColor?: string | null;
  withKendoSuccessOnSubtleColor(kendoSuccessOnSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoOnSuccessColor
   */
  readonly kendoOnSuccessColor?: string | null;
  withKendoOnSuccessColor(kendoOnSuccessColor: string | null): UiSdlLightTheme;

  /**
   * kendoSuccessOnSurfaceColor
   */
  readonly kendoSuccessOnSurfaceColor?: string | null;
  withKendoSuccessOnSurfaceColor(kendoSuccessOnSurfaceColor: string | null): UiSdlLightTheme;

  /**
   * kendoWarningSubtleColor
   */
  readonly kendoWarningSubtleColor?: string | null;
  withKendoWarningSubtleColor(kendoWarningSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoWarningSubtleHoverColor
   */
  readonly kendoWarningSubtleHoverColor?: string | null;
  withKendoWarningSubtleHoverColor(kendoWarningSubtleHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoWarningSubtleActiveColor
   */
  readonly kendoWarningSubtleActiveColor?: string | null;
  withKendoWarningSubtleActiveColor(kendoWarningSubtleActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoWarningColor
   */
  readonly kendoWarningColor?: string | null;
  withKendoWarningColor(kendoWarningColor: string | null): UiSdlLightTheme;

  /**
   * kendoWarningHoverColor
   */
  readonly kendoWarningHoverColor?: string | null;
  withKendoWarningHoverColor(kendoWarningHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoWarningActiveColor
   */
  readonly kendoWarningActiveColor?: string | null;
  withKendoWarningActiveColor(kendoWarningActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoWarningEmphasisColor
   */
  readonly kendoWarningEmphasisColor?: string | null;
  withKendoWarningEmphasisColor(kendoWarningEmphasisColor: string | null): UiSdlLightTheme;

  /**
   * kendoWarningOnSubtleColor
   */
  readonly kendoWarningOnSubtleColor?: string | null;
  withKendoWarningOnSubtleColor(kendoWarningOnSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoOnWarningColor
   */
  readonly kendoOnWarningColor?: string | null;
  withKendoOnWarningColor(kendoOnWarningColor: string | null): UiSdlLightTheme;

  /**
   * kendoWarningOnSurfaceColor
   */
  readonly kendoWarningOnSurfaceColor?: string | null;
  withKendoWarningOnSurfaceColor(kendoWarningOnSurfaceColor: string | null): UiSdlLightTheme;

  /**
   * kendoErrorSubtleColor
   */
  readonly kendoErrorSubtleColor?: string | null;
  withKendoErrorSubtleColor(kendoErrorSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoErrorSubtleHoverColor
   */
  readonly kendoErrorSubtleHoverColor?: string | null;
  withKendoErrorSubtleHoverColor(kendoErrorSubtleHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoErrorSubtleActiveColor
   */
  readonly kendoErrorSubtleActiveColor?: string | null;
  withKendoErrorSubtleActiveColor(kendoErrorSubtleActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoErrorColor
   */
  readonly kendoErrorColor?: string | null;
  withKendoErrorColor(kendoErrorColor: string | null): UiSdlLightTheme;

  /**
   * kendoErrorHoverColor
   */
  readonly kendoErrorHoverColor?: string | null;
  withKendoErrorHoverColor(kendoErrorHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoErrorActiveColor
   */
  readonly kendoErrorActiveColor?: string | null;
  withKendoErrorActiveColor(kendoErrorActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoErrorEmphasisColor
   */
  readonly kendoErrorEmphasisColor?: string | null;
  withKendoErrorEmphasisColor(kendoErrorEmphasisColor: string | null): UiSdlLightTheme;

  /**
   * kendoErrorOnSubtleColor
   */
  readonly kendoErrorOnSubtleColor?: string | null;
  withKendoErrorOnSubtleColor(kendoErrorOnSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoOnErrorColor
   */
  readonly kendoOnErrorColor?: string | null;
  withKendoOnErrorColor(kendoOnErrorColor: string | null): UiSdlLightTheme;

  /**
   * kendoErrorOnSurfaceColor
   */
  readonly kendoErrorOnSurfaceColor?: string | null;
  withKendoErrorOnSurfaceColor(kendoErrorOnSurfaceColor: string | null): UiSdlLightTheme;

  /**
   * kendoLightSubtleColor
   */
  readonly kendoLightSubtleColor?: string | null;
  withKendoLightSubtleColor(kendoLightSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoLightSubtleHoverColor
   */
  readonly kendoLightSubtleHoverColor?: string | null;
  withKendoLightSubtleHoverColor(kendoLightSubtleHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoLightSubtleActiveColor
   */
  readonly kendoLightSubtleActiveColor?: string | null;
  withKendoLightSubtleActiveColor(kendoLightSubtleActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoLightColor
   */
  readonly kendoLightColor?: string | null;
  withKendoLightColor(kendoLightColor: string | null): UiSdlLightTheme;

  /**
   * kendoLightHoverColor
   */
  readonly kendoLightHoverColor?: string | null;
  withKendoLightHoverColor(kendoLightHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoLightActiveColor
   */
  readonly kendoLightActiveColor?: string | null;
  withKendoLightActiveColor(kendoLightActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoLightEmphasisColor
   */
  readonly kendoLightEmphasisColor?: string | null;
  withKendoLightEmphasisColor(kendoLightEmphasisColor: string | null): UiSdlLightTheme;

  /**
   * kendoLightOnSubtleColor
   */
  readonly kendoLightOnSubtleColor?: string | null;
  withKendoLightOnSubtleColor(kendoLightOnSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoOnLightColor
   */
  readonly kendoOnLightColor?: string | null;
  withKendoOnLightColor(kendoOnLightColor: string | null): UiSdlLightTheme;

  /**
   * kendoLightOnSurfaceColor
   */
  readonly kendoLightOnSurfaceColor?: string | null;
  withKendoLightOnSurfaceColor(kendoLightOnSurfaceColor: string | null): UiSdlLightTheme;

  /**
   * kendoDarkSubtleColor
   */
  readonly kendoDarkSubtleColor?: string | null;
  withKendoDarkSubtleColor(kendoDarkSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoDarkSubtleHoverColor
   */
  readonly kendoDarkSubtleHoverColor?: string | null;
  withKendoDarkSubtleHoverColor(kendoDarkSubtleHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoDarkSubtleActiveColor
   */
  readonly kendoDarkSubtleActiveColor?: string | null;
  withKendoDarkSubtleActiveColor(kendoDarkSubtleActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoDarkColor
   */
  readonly kendoDarkColor?: string | null;
  withKendoDarkColor(kendoDarkColor: string | null): UiSdlLightTheme;

  /**
   * kendoDarkHoverColor
   */
  readonly kendoDarkHoverColor?: string | null;
  withKendoDarkHoverColor(kendoDarkHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoDarkActiveColor
   */
  readonly kendoDarkActiveColor?: string | null;
  withKendoDarkActiveColor(kendoDarkActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoDarkEmphasisColor
   */
  readonly kendoDarkEmphasisColor?: string | null;
  withKendoDarkEmphasisColor(kendoDarkEmphasisColor: string | null): UiSdlLightTheme;

  /**
   * kendoDarkOnSubtleColor
   */
  readonly kendoDarkOnSubtleColor?: string | null;
  withKendoDarkOnSubtleColor(kendoDarkOnSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoOnDarkColor
   */
  readonly kendoOnDarkColor?: string | null;
  withKendoOnDarkColor(kendoOnDarkColor: string | null): UiSdlLightTheme;

  /**
   * kendoDarkOnSurfaceColor
   */
  readonly kendoDarkOnSurfaceColor?: string | null;
  withKendoDarkOnSurfaceColor(kendoDarkOnSurfaceColor: string | null): UiSdlLightTheme;

  /**
   * kendoInverseSubtleColor
   */
  readonly kendoInverseSubtleColor?: string | null;
  withKendoInverseSubtleColor(kendoInverseSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoInverseSubtleHoverColor
   */
  readonly kendoInverseSubtleHoverColor?: string | null;
  withKendoInverseSubtleHoverColor(kendoInverseSubtleHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoInverseSubtleActiveColor
   */
  readonly kendoInverseSubtleActiveColor?: string | null;
  withKendoInverseSubtleActiveColor(kendoInverseSubtleActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoInverseColor
   */
  readonly kendoInverseColor?: string | null;
  withKendoInverseColor(kendoInverseColor: string | null): UiSdlLightTheme;

  /**
   * kendoInverseHoverColor
   */
  readonly kendoInverseHoverColor?: string | null;
  withKendoInverseHoverColor(kendoInverseHoverColor: string | null): UiSdlLightTheme;

  /**
   * kendoInverseActiveColor
   */
  readonly kendoInverseActiveColor?: string | null;
  withKendoInverseActiveColor(kendoInverseActiveColor: string | null): UiSdlLightTheme;

  /**
   * kendoInverseEmphasisColor
   */
  readonly kendoInverseEmphasisColor?: string | null;
  withKendoInverseEmphasisColor(kendoInverseEmphasisColor: string | null): UiSdlLightTheme;

  /**
   * kendoInverseOnSubtleColor
   */
  readonly kendoInverseOnSubtleColor?: string | null;
  withKendoInverseOnSubtleColor(kendoInverseOnSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoOnInverseColor
   */
  readonly kendoOnInverseColor?: string | null;
  withKendoOnInverseColor(kendoOnInverseColor: string | null): UiSdlLightTheme;

  /**
   * kendoInverseOnSurfaceColor
   */
  readonly kendoInverseOnSurfaceColor?: string | null;
  withKendoInverseOnSurfaceColor(kendoInverseOnSurfaceColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesAColor
   */
  readonly kendoSeriesAColor?: string | null;
  withKendoSeriesAColor(kendoSeriesAColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesABoldColor
   */
  readonly kendoSeriesABoldColor?: string | null;
  withKendoSeriesABoldColor(kendoSeriesABoldColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesABolderColor
   */
  readonly kendoSeriesABolderColor?: string | null;
  withKendoSeriesABolderColor(kendoSeriesABolderColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesASubtleColor
   */
  readonly kendoSeriesASubtleColor?: string | null;
  withKendoSeriesASubtleColor(kendoSeriesASubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesASubtlerColor
   */
  readonly kendoSeriesASubtlerColor?: string | null;
  withKendoSeriesASubtlerColor(kendoSeriesASubtlerColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesBColor
   */
  readonly kendoSeriesBColor?: string | null;
  withKendoSeriesBColor(kendoSeriesBColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesBBoldColor
   */
  readonly kendoSeriesBBoldColor?: string | null;
  withKendoSeriesBBoldColor(kendoSeriesBBoldColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesBBolderColor
   */
  readonly kendoSeriesBBolderColor?: string | null;
  withKendoSeriesBBolderColor(kendoSeriesBBolderColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesBSubtleColor
   */
  readonly kendoSeriesBSubtleColor?: string | null;
  withKendoSeriesBSubtleColor(kendoSeriesBSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesBSubtlerColor
   */
  readonly kendoSeriesBSubtlerColor?: string | null;
  withKendoSeriesBSubtlerColor(kendoSeriesBSubtlerColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesCColor
   */
  readonly kendoSeriesCColor?: string | null;
  withKendoSeriesCColor(kendoSeriesCColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesCBoldColor
   */
  readonly kendoSeriesCBoldColor?: string | null;
  withKendoSeriesCBoldColor(kendoSeriesCBoldColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesCBolderColor
   */
  readonly kendoSeriesCBolderColor?: string | null;
  withKendoSeriesCBolderColor(kendoSeriesCBolderColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesCSubtleColor
   */
  readonly kendoSeriesCSubtleColor?: string | null;
  withKendoSeriesCSubtleColor(kendoSeriesCSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesCSubtlerColor
   */
  readonly kendoSeriesCSubtlerColor?: string | null;
  withKendoSeriesCSubtlerColor(kendoSeriesCSubtlerColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesDColor
   */
  readonly kendoSeriesDColor?: string | null;
  withKendoSeriesDColor(kendoSeriesDColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesDBoldColor
   */
  readonly kendoSeriesDBoldColor?: string | null;
  withKendoSeriesDBoldColor(kendoSeriesDBoldColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesDBolderColor
   */
  readonly kendoSeriesDBolderColor?: string | null;
  withKendoSeriesDBolderColor(kendoSeriesDBolderColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesDSubtleColor
   */
  readonly kendoSeriesDSubtleColor?: string | null;
  withKendoSeriesDSubtleColor(kendoSeriesDSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesDSubtlerColor
   */
  readonly kendoSeriesDSubtlerColor?: string | null;
  withKendoSeriesDSubtlerColor(kendoSeriesDSubtlerColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesEColor
   */
  readonly kendoSeriesEColor?: string | null;
  withKendoSeriesEColor(kendoSeriesEColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesEBoldColor
   */
  readonly kendoSeriesEBoldColor?: string | null;
  withKendoSeriesEBoldColor(kendoSeriesEBoldColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesEBolderColor
   */
  readonly kendoSeriesEBolderColor?: string | null;
  withKendoSeriesEBolderColor(kendoSeriesEBolderColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesESubtleColor
   */
  readonly kendoSeriesESubtleColor?: string | null;
  withKendoSeriesESubtleColor(kendoSeriesESubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesESubtlerColor
   */
  readonly kendoSeriesESubtlerColor?: string | null;
  withKendoSeriesESubtlerColor(kendoSeriesESubtlerColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesFColor
   */
  readonly kendoSeriesFColor?: string | null;
  withKendoSeriesFColor(kendoSeriesFColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesFBoldColor
   */
  readonly kendoSeriesFBoldColor?: string | null;
  withKendoSeriesFBoldColor(kendoSeriesFBoldColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesFBolderColor
   */
  readonly kendoSeriesFBolderColor?: string | null;
  withKendoSeriesFBolderColor(kendoSeriesFBolderColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesFSubtleColor
   */
  readonly kendoSeriesFSubtleColor?: string | null;
  withKendoSeriesFSubtleColor(kendoSeriesFSubtleColor: string | null): UiSdlLightTheme;

  /**
   * kendoSeriesFSubtlerColor
   */
  readonly kendoSeriesFSubtlerColor?: string | null;
  withKendoSeriesFSubtlerColor(kendoSeriesFSubtlerColor: string | null): UiSdlLightTheme;

  /**
   * legendBackgroundColor
   */
  readonly legendBackgroundColor: string;
  withLegendBackgroundColor(legendBackgroundColor: string): UiSdlLightTheme;

  /**
   * legendNameFontColor
   */
  readonly legendNameFontColor: string;
  withLegendNameFontColor(legendNameFontColor: string): UiSdlLightTheme;

  /**
   * logoBlueBackgroundColor
   */
  readonly logoBlueBackgroundColor: string;
  withLogoBlueBackgroundColor(logoBlueBackgroundColor: string): UiSdlLightTheme;

  /**
   * logoChocoBackgroundColor
   */
  readonly logoChocoBackgroundColor: string;
  withLogoChocoBackgroundColor(logoChocoBackgroundColor: string): UiSdlLightTheme;

  /**
   * logoColor
   */
  readonly logoColor: string;
  withLogoColor(logoColor: string): UiSdlLightTheme;

  /**
   * logoCyanBackgroundColor
   */
  readonly logoCyanBackgroundColor: string;
  withLogoCyanBackgroundColor(logoCyanBackgroundColor: string): UiSdlLightTheme;

  /**
   * logoForestBackgroundColor
   */
  readonly logoForestBackgroundColor: string;
  withLogoForestBackgroundColor(logoForestBackgroundColor: string): UiSdlLightTheme;

  /**
   * logoIconUrl
   */
  readonly logoIconUrl: string;
  withLogoIconUrl(logoIconUrl: string): UiSdlLightTheme;

  /**
   * emptyStateIconUrl
   */
  readonly emptyStateIconUrl: string;
  withEmptyStateIconUrl(emptyStateIconUrl: string): UiSdlLightTheme;

  /**
   * logoLimeBackgroundColor
   */
  readonly logoLimeBackgroundColor: string;
  withLogoLimeBackgroundColor(logoLimeBackgroundColor: string): UiSdlLightTheme;

  /**
   * logoOliveBackgroundColor
   */
  readonly logoOliveBackgroundColor: string;
  withLogoOliveBackgroundColor(logoOliveBackgroundColor: string): UiSdlLightTheme;

  /**
   * logoOrangeBackgroundColor
   */
  readonly logoOrangeBackgroundColor: string;
  withLogoOrangeBackgroundColor(logoOrangeBackgroundColor: string): UiSdlLightTheme;

  /**
   * logoPlumBackgroundColor
   */
  readonly logoPlumBackgroundColor: string;
  withLogoPlumBackgroundColor(logoPlumBackgroundColor: string): UiSdlLightTheme;

  /**
   * logoPurpleBackgroundColor
   */
  readonly logoPurpleBackgroundColor: string;
  withLogoPurpleBackgroundColor(logoPurpleBackgroundColor: string): UiSdlLightTheme;

  /**
   * logoSlateBackgroundColor
   */
  readonly logoSlateBackgroundColor: string;
  withLogoSlateBackgroundColor(logoSlateBackgroundColor: string): UiSdlLightTheme;

  /**
   * mapMarkerClusterColor
   */
  readonly mapMarkerClusterColor: string;
  withMapMarkerClusterColor(mapMarkerClusterColor: string): UiSdlLightTheme;

  /**
   * mapTooltipAdditionalFieldsDescriptionFontColor
   */
  readonly mapTooltipAdditionalFieldsDescriptionFontColor: string;
  withMapTooltipAdditionalFieldsDescriptionFontColor(mapTooltipAdditionalFieldsDescriptionFontColor: string): UiSdlLightTheme;

  /**
   * mapTooltipAdditionalFieldsHeaderFontColor
   */
  readonly mapTooltipAdditionalFieldsHeaderFontColor: string;
  withMapTooltipAdditionalFieldsHeaderFontColor(mapTooltipAdditionalFieldsHeaderFontColor: string): UiSdlLightTheme;

  /**
   * mapTooltipHeaderFontColor
   */
  readonly mapTooltipHeaderFontColor: string;
  withMapTooltipHeaderFontColor(mapTooltipHeaderFontColor: string): UiSdlLightTheme;

  /**
   * mapTooltipSubHeaderFontColor
   */
  readonly mapTooltipSubHeaderFontColor: string;
  withMapTooltipSubHeaderFontColor(mapTooltipSubHeaderFontColor: string): UiSdlLightTheme;

  /**
   * menuActiveColor
   */
  readonly menuActiveColor: string;
  withMenuActiveColor(menuActiveColor: string): UiSdlLightTheme;

  /**
   * menuBackgroundActiveColor
   */
  readonly menuBackgroundActiveColor: string;
  withMenuBackgroundActiveColor(menuBackgroundActiveColor: string): UiSdlLightTheme;

  /**
   * menuBackgroundColor
   */
  readonly menuBackgroundColor: string;
  withMenuBackgroundColor(menuBackgroundColor: string): UiSdlLightTheme;

  /**
   * menuDividerColor
   */
  readonly menuDividerColor: string;
  withMenuDividerColor(menuDividerColor: string): UiSdlLightTheme;

  /**
   * menuHoverColor
   */
  readonly menuHoverColor: string;
  withMenuHoverColor(menuHoverColor: string): UiSdlLightTheme;

  /**
   * menuItemActiveColor
   */
  readonly menuItemActiveColor: string;
  withMenuItemActiveColor(menuItemActiveColor: string): UiSdlLightTheme;

  /**
   * menuItemBackgroundColor
   */
  readonly menuItemBackgroundColor: string;
  withMenuItemBackgroundColor(menuItemBackgroundColor: string): UiSdlLightTheme;

  /**
   * menuItemBackgroundHoverColor
   */
  readonly menuItemBackgroundHoverColor: string;
  withMenuItemBackgroundHoverColor(menuItemBackgroundHoverColor: string): UiSdlLightTheme;

  /**
   * menuItemHoverColor
   */
  readonly menuItemHoverColor: string;
  withMenuItemHoverColor(menuItemHoverColor: string): UiSdlLightTheme;

  /**
   * menuPrimaryColor
   */
  readonly menuPrimaryColor: string;
  withMenuPrimaryColor(menuPrimaryColor: string): UiSdlLightTheme;

  /**
   * numberIconColor
   */
  readonly numberIconColor: string;
  withNumberIconColor(numberIconColor: string): UiSdlLightTheme;

  /**
   * numberIconTextColor
   */
  readonly numberIconTextColor: string;
  withNumberIconTextColor(numberIconTextColor: string): UiSdlLightTheme;

  /**
   * objectIconColor
   */
  readonly objectIconColor: string;
  withObjectIconColor(objectIconColor: string): UiSdlLightTheme;

  /**
   * objectIconTextColor
   */
  readonly objectIconTextColor: string;
  withObjectIconTextColor(objectIconTextColor: string): UiSdlLightTheme;

  /**
   * opacity00
   */
  readonly opacity00: string;
  withOpacity00(opacity00: string): UiSdlLightTheme;

  /**
   * opacity05
   */
  readonly opacity05: string;
  withOpacity05(opacity05: string): UiSdlLightTheme;

  /**
   * opacity10
   */
  readonly opacity10: string;
  withOpacity10(opacity10: string): UiSdlLightTheme;

  /**
   * opacity20
   */
  readonly opacity20: string;
  withOpacity20(opacity20: string): UiSdlLightTheme;

  /**
   * opacity30
   */
  readonly opacity30: string;
  withOpacity30(opacity30: string): UiSdlLightTheme;

  /**
   * opacity40
   */
  readonly opacity40: string;
  withOpacity40(opacity40: string): UiSdlLightTheme;

  /**
   * opacity50
   */
  readonly opacity50: string;
  withOpacity50(opacity50: string): UiSdlLightTheme;

  /**
   * opacity60
   */
  readonly opacity60: string;
  withOpacity60(opacity60: string): UiSdlLightTheme;

  /**
   * opacity70
   */
  readonly opacity70: string;
  withOpacity70(opacity70: string): UiSdlLightTheme;

  /**
   * opacity80
   */
  readonly opacity80: string;
  withOpacity80(opacity80: string): UiSdlLightTheme;

  /**
   * opacity90
   */
  readonly opacity90: string;
  withOpacity90(opacity90: string): UiSdlLightTheme;

  /**
   * opacity95
   */
  readonly opacity95: string;
  withOpacity95(opacity95: string): UiSdlLightTheme;

  /**
   * opacity100
   */
  readonly opacity100: string;
  withOpacity100(opacity100: string): UiSdlLightTheme;

  /**
   * opacityDisabled
   */
  readonly opacityDisabled: string;
  withOpacityDisabled(opacityDisabled: string): UiSdlLightTheme;

  /**
   * opacityLoading
   */
  readonly opacityLoading: string;
  withOpacityLoading(opacityLoading: string): UiSdlLightTheme;

  /**
   * otherIconColor
   */
  readonly otherIconColor: string;
  withOtherIconColor(otherIconColor: string): UiSdlLightTheme;

  /**
   * otherIconTextColor
   */
  readonly otherIconTextColor: string;
  withOtherIconTextColor(otherIconTextColor: string): UiSdlLightTheme;

  /**
   * pageBackgroundColor
   */
  readonly pageBackgroundColor: string;
  withPageBackgroundColor(pageBackgroundColor: string): UiSdlLightTheme;

  /**
   * pageTitleBoxShadowColor
   */
  readonly pageTitleBoxShadowColor: string;
  withPageTitleBoxShadowColor(pageTitleBoxShadowColor: string): UiSdlLightTheme;

  /**
   * referenceIconColor
   */
  readonly referenceIconColor: string;
  withReferenceIconColor(referenceIconColor: string): UiSdlLightTheme;

  /**
   * referenceIconTextColor
   */
  readonly referenceIconTextColor: string;
  withReferenceIconTextColor(referenceIconTextColor: string): UiSdlLightTheme;

  /**
   * resetZoomIconPath
   */
  readonly resetZoomIconPath: string;
  withResetZoomIconPath(resetZoomIconPath: string): UiSdlLightTheme;

  /**
   * resetZoomIconUrl
   */
  readonly resetZoomIconUrl: string;
  withResetZoomIconUrl(resetZoomIconUrl: string): UiSdlLightTheme;

  /**
   * resetZoomIconColor
   */
  readonly resetZoomIconColor: string;
  withResetZoomIconColor(resetZoomIconColor: string): UiSdlLightTheme;

  /**
   * sankeyChartLabelBackgroundColor
   */
  readonly sankeyChartLabelBackgroundColor: string;
  withSankeyChartLabelBackgroundColor(sankeyChartLabelBackgroundColor: string): UiSdlLightTheme;

  /**
   * scrollbarThumbColor
   */
  readonly scrollbarThumbColor: string;
  withScrollbarThumbColor(scrollbarThumbColor: string): UiSdlLightTheme;

  /**
   * scrollbarTrackColor
   */
  readonly scrollbarTrackColor: string;
  withScrollbarTrackColor(scrollbarTrackColor: string): UiSdlLightTheme;

  /**
   * secondaryFontColor
   */
  readonly secondaryFontColor: string;
  withSecondaryFontColor(secondaryFontColor: string): UiSdlLightTheme;

  /**
   * secondaryVariantFontColor
   */
  readonly secondaryVariantFontColor: string;
  withSecondaryVariantFontColor(secondaryVariantFontColor: string): UiSdlLightTheme;

  /**
   * selectFieldPillActiveBackgroundColor
   */
  readonly selectFieldPillActiveBackgroundColor: string;
  withSelectFieldPillActiveBackgroundColor(selectFieldPillActiveBackgroundColor: string): UiSdlLightTheme;

  /**
   * selectFieldPillHoverBackgroundColor
   */
  readonly selectFieldPillHoverBackgroundColor: string;
  withSelectFieldPillHoverBackgroundColor(selectFieldPillHoverBackgroundColor: string): UiSdlLightTheme;

  /**
   * selectFieldPillTextColor
   */
  readonly selectFieldPillTextColor: string;
  withSelectFieldPillTextColor(selectFieldPillTextColor: string): UiSdlLightTheme;

  /**
   * selectionBackgroundColor
   */
  readonly selectionBackgroundColor: string;
  withSelectionBackgroundColor(selectionBackgroundColor: string): UiSdlLightTheme;

  /**
   * sidePanelSubtitleColor
   */
  readonly sidePanelSubtitleColor: string;
  withSidePanelSubtitleColor(sidePanelSubtitleColor: string): UiSdlLightTheme;

  /**
   * stringIconColor
   */
  readonly stringIconColor: string;
  withStringIconColor(stringIconColor: string): UiSdlLightTheme;

  /**
   * stringIconTextColor
   */
  readonly stringIconTextColor: string;
  withStringIconTextColor(stringIconTextColor: string): UiSdlLightTheme;

  /**
   * subMenuItemBackgroundActiveColor
   */
  readonly subMenuItemBackgroundActiveColor: string;
  withSubMenuItemBackgroundActiveColor(subMenuItemBackgroundActiveColor: string): UiSdlLightTheme;

  /**
   * successColor
   */
  readonly successColor: string;
  withSuccessColor(successColor: string): UiSdlLightTheme;

  /**
   * timeGraphBackgroundColor
   */
  readonly timeGraphBackgroundColor: string;
  withTimeGraphBackgroundColor(timeGraphBackgroundColor: string): UiSdlLightTheme;

  /**
   * timeGraphDefaultEntityColor
   */
  readonly timeGraphDefaultEntityColor: string;
  withTimeGraphDefaultEntityColor(timeGraphDefaultEntityColor: string): UiSdlLightTheme;

  /**
   * timeGraphDefaultLabelColor
   */
  readonly timeGraphDefaultLabelColor: string;
  withTimeGraphDefaultLabelColor(timeGraphDefaultLabelColor: string): UiSdlLightTheme;

  /**
   * timeGraphHighlightColor
   */
  readonly timeGraphHighlightColor: string;
  withTimeGraphHighlightColor(timeGraphHighlightColor: string): UiSdlLightTheme;

  /**
   * timeGraphScaleBackgroundColor
   */
  readonly timeGraphScaleBackgroundColor: string;
  withTimeGraphScaleBackgroundColor(timeGraphScaleBackgroundColor: string): UiSdlLightTheme;

  /**
   * timeGraphScaleBorderColor
   */
  readonly timeGraphScaleBorderColor: string;
  withTimeGraphScaleBorderColor(timeGraphScaleBorderColor: string): UiSdlLightTheme;

  /**
   * timeGraphScaleFontColor
   */
  readonly timeGraphScaleFontColor: string;
  withTimeGraphScaleFontColor(timeGraphScaleFontColor: string): UiSdlLightTheme;

  /**
   * timeGraphScaleFontSize
   */
  readonly timeGraphScaleFontSize: string;
  withTimeGraphScaleFontSize(timeGraphScaleFontSize: string): UiSdlLightTheme;

  /**
   * timeGraphTooltipBackgroundColor
   */
  readonly timeGraphTooltipBackgroundColor: string;
  withTimeGraphTooltipBackgroundColor(timeGraphTooltipBackgroundColor: string): UiSdlLightTheme;

  /**
   * timeGraphTooltipBodyColor
   */
  readonly timeGraphTooltipBodyColor: string;
  withTimeGraphTooltipBodyColor(timeGraphTooltipBodyColor: string): UiSdlLightTheme;

  /**
   * timeGraphTooltipSubtitleColor
   */
  readonly timeGraphTooltipSubtitleColor: string;
  withTimeGraphTooltipSubtitleColor(timeGraphTooltipSubtitleColor: string): UiSdlLightTheme;

  /**
   * timeGraphTooltipTitleColor
   */
  readonly timeGraphTooltipTitleColor: string;
  withTimeGraphTooltipTitleColor(timeGraphTooltipTitleColor: string): UiSdlLightTheme;

  /**
   * timeSeriesIconColor
   */
  readonly timeSeriesIconColor: string;
  withTimeSeriesIconColor(timeSeriesIconColor: string): UiSdlLightTheme;

  /**
   * timeSeriesIconTextColor
   */
  readonly timeSeriesIconTextColor: string;
  withTimeSeriesIconTextColor(timeSeriesIconTextColor: string): UiSdlLightTheme;

  /**
   * toggleSwitchBackgroundColor
   */
  readonly toggleSwitchBackgroundColor: string;
  withToggleSwitchBackgroundColor(toggleSwitchBackgroundColor: string): UiSdlLightTheme;

  /**
   * toggleSwitchBorderColor
   */
  readonly toggleSwitchBorderColor: string;
  withToggleSwitchBorderColor(toggleSwitchBorderColor: string): UiSdlLightTheme;

  /**
   * toggleSwitchCheckedBorderColor
   */
  readonly toggleSwitchCheckedBorderColor: string;
  withToggleSwitchCheckedBorderColor(toggleSwitchCheckedBorderColor: string): UiSdlLightTheme;

  /**
   * toggleSwitchCheckedColor
   */
  readonly toggleSwitchCheckedColor: string;
  withToggleSwitchCheckedColor(toggleSwitchCheckedColor: string): UiSdlLightTheme;

  /**
   * toggleSwitchCheckedDisabledBackgroundColor
   */
  readonly toggleSwitchCheckedDisabledBackgroundColor: string;
  withToggleSwitchCheckedDisabledBackgroundColor(toggleSwitchCheckedDisabledBackgroundColor: string): UiSdlLightTheme;

  /**
   * toggleSwitchCheckedDisabledBorderColor
   */
  readonly toggleSwitchCheckedDisabledBorderColor: string;
  withToggleSwitchCheckedDisabledBorderColor(toggleSwitchCheckedDisabledBorderColor: string): UiSdlLightTheme;

  /**
   * toggleSwitchCheckedDisabledColor
   */
  readonly toggleSwitchCheckedDisabledColor: string;
  withToggleSwitchCheckedDisabledColor(toggleSwitchCheckedDisabledColor: string): UiSdlLightTheme;

  /**
   * toggleSwitchColor
   */
  readonly toggleSwitchColor: string;
  withToggleSwitchColor(toggleSwitchColor: string): UiSdlLightTheme;

  /**
   * toggleSwitchDisabledBackgroundColor
   */
  readonly toggleSwitchDisabledBackgroundColor: string;
  withToggleSwitchDisabledBackgroundColor(toggleSwitchDisabledBackgroundColor: string): UiSdlLightTheme;

  /**
   * toggleSwitchDisabledBorderColor
   */
  readonly toggleSwitchDisabledBorderColor: string;
  withToggleSwitchDisabledBorderColor(toggleSwitchDisabledBorderColor: string): UiSdlLightTheme;

  /**
   * toggleSwitchDisabledColor
   */
  readonly toggleSwitchDisabledColor: string;
  withToggleSwitchDisabledColor(toggleSwitchDisabledColor: string): UiSdlLightTheme;

  /**
   * tooltipBackgroundColor
   */
  readonly tooltipBackgroundColor: string;
  withTooltipBackgroundColor(tooltipBackgroundColor: string): UiSdlLightTheme;

  /**
   * warningColor
   */
  readonly warningColor: string;
  withWarningColor(warningColor: string): UiSdlLightTheme;

  /**
   * zebraStripeBackgroundColor
   */
  readonly zebraStripeBackgroundColor: string;
  withZebraStripeBackgroundColor(zebraStripeBackgroundColor: string): UiSdlLightTheme;

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
  static fromJson(json: any | null): UiSdlLightTheme | null;

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
  static fromJsonString(json: string | null): UiSdlLightTheme | null;

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
  static fromXmlString(xml: string | null): UiSdlLightTheme | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): UiSdlLightTheme | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlLightTheme;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlLightTheme;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlLightTheme;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlLightTheme | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlLightTheme | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): UiSdlLightTheme;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlLightTheme;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlLightTheme;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlLightTheme;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlLightTheme;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlLightTheme;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): UiSdlLightTheme;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlLightTheme;

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
  withoutFieldAtPath(path: string): UiSdlLightTheme;

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
  withoutField(field: string | null): UiSdlLightTheme;

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
  withoutField(field: FieldType | null): UiSdlLightTheme;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): UiSdlLightTheme;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): UiSdlLightTheme;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlLightTheme;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): UiSdlLightTheme;

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
  defaultField(field: string): UiSdlLightTheme;

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
  defaultField(field: FieldType): UiSdlLightTheme;

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
  unsetField(field: string): UiSdlLightTheme;

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
  unsetField(field: FieldType): UiSdlLightTheme;

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
  removeField(field: string): UiSdlLightTheme;

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
  removeField(field: FieldType): UiSdlLightTheme;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): UiSdlLightTheme;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): UiSdlLightTheme;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): UiSdlLightTheme;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): UiSdlLightTheme;

  mergeJson(json: any | null): UiSdlLightTheme;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): UiSdlLightTheme;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): UiSdlLightTheme;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<UiSdlLightTheme | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<UiSdlLightTheme | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlLightTheme | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<UiSdlLightTheme | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlLightTheme | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, UiSdlLightTheme | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlLightTheme | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlLightTheme | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlLightTheme | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): UiSdlLightTheme;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): UiSdlLightTheme;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): UiSdlLightTheme;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlLightTheme;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): UiSdlLightTheme;

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
  static make(fields: any, withDefaults?: boolean): UiSdlLightTheme;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): UiSdlLightTheme | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): UiSdlLightTheme;

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
  afterMake(): UiSdlLightTheme;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlLightTheme;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<UiSdlLightTheme>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): UiSdlLightTheme;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<UiSdlLightTheme | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<UiSdlLightTheme | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<UiSdlLightTheme | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<UiSdlLightTheme | null> | null>;

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
  dependencies(): MetadataDeps<UiSdlLightTheme | null>;

  save(subPath?: string | null, contentType?: string | null): UiSdlLightTheme;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: UiSdlLightTheme | null, spec?: UpsertSpec | null): UiSdlLightTheme | null;

  upsert(srcObj?: UiSdlLightTheme | null, spec?: UpsertSpec | null): UiSdlLightTheme | null;

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
  static fromString(s: string | null): UiSdlLightTheme | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): UiSdlLightTheme | null;
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
