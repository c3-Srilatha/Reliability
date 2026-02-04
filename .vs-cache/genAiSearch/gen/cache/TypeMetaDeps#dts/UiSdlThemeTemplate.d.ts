// TypeScript definitions for the C3 type UiSdlThemeTemplate

/**
 * Remixes the UiSdlThemeTemplate type, and adds new fields specifically for GenAi.
 * Allows us to create custom light and dark theme configurations.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlThemeTemplate
 */
declare interface IUiSdlThemeTemplate {

  /**
   * Various system fields.
   */
  meta?: IMeta;

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
   * colorBgContentFrame
   */
  colorBgContentFrame: string;

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
   * Background color for the nav menu
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
   * colorFgAccentStrong
   */
  colorFgAccentStrong: string;

  /**
   * colorFgAccentWeak
   */
  colorFgAccentWeak: string;

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
   * colorFgInputPlaceholder
   */
  colorFgInputPlaceholder: string;

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

  /**
   * Additional CSS filter to apply on the buttons of the grid pagination
   * Allows to make Kendo v7 SVG buttons white in the dark theme
   */
  gridPaginationButtonFilter?: string;

  /**
   * Background color for a read only input
   */
  colorBgInputReadOnly: string;

  /**
   * The background color of a source component.
   */
  sourceBackgroundColor: string;

  /**
   * Blue background color
   */
  blueBackgroundColor: string;

  /**
   * The border color of a source component.
   */
  sourceBorderColor: string;

  /**
   * The color of visited links.
   */
  visitedLinkColor: string;

  /**
   * The background color of highlighted text.
   */
  textHighlightColor: string;

  /**
   * Blue font color
   */
  blueFontColor: string;

  /**
   * Neutral background color
   */
  neutralBackgroundColor: string;

  /**
   * Filter to apply to the Nav Menu Logo
   */
  menuLogoFilter: string;

  /**
   * Highlight text color when corroboration is contradictory
   */
  corroborationHighlight: string;

  /**
   * Color for the chat banner above the text box
   */
  chatBannerColor: string;

  /**
   * Background color for server messages in the chat box component.
   */
  serverMessageBackgroundColor: string;

  /**
   * Neutral font color
   */
  neutralFontColor: string;

  /**
   * Color for the training banners
   */
  contextualBannerColor: string;

  /**
   * Background color for the search page.
   */
  searchPageBackgroundColor: string;

  /**
   * Color for box shadows
   */
  boxShadowColor: string;

  /**
   * Background color for client messages in the chat box component.
   */
  clientMessageBackgroundColor: string;

  /**
   * Background color for the search bar.
   */
  searchBarBackgroundColor: string;
}

/**
 * Remixes the UiSdlThemeTemplate type, and adds new fields specifically for GenAi.
 * Allows us to create custom light and dark theme configurations.
 *
 * @remarks this represents a made instance of UiSdlThemeTemplate
 */
declare class UiSdlThemeTemplate extends Obj  {

  /**
   * Various system fields.
   */
  readonly meta?: Meta;
  withMeta(meta: IMeta | null): UiSdlThemeTemplate;

  /**
   * The unique and required id of this instance.
   */
  readonly id: string;
  withId(id: string): UiSdlThemeTemplate;

  /**
   * Whether this is a C3 type theme template.
   */
  readonly isC3?: boolean;
  withIsC3(isC3: boolean): UiSdlThemeTemplate;

  /**
   * Whether this is a Light or a Dark Theme.
   */
  readonly themeCategory: string;
  withThemeCategory(themeCategory: string): UiSdlThemeTemplate;

  /**
   * accentColor
   */
  readonly accentColor: string;
  withAccentColor(accentColor: string): UiSdlThemeTemplate;

  /**
   * accentFontColor
   */
  readonly accentFontColor: string;
  withAccentFontColor(accentFontColor: string): UiSdlThemeTemplate;

  /**
   * accentVariantColor
   */
  readonly accentVariantColor: string;
  withAccentVariantColor(accentVariantColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeBlueBackgroundColor
   */
  readonly avatarBadgeBlueBackgroundColor: string;
  withAvatarBadgeBlueBackgroundColor(avatarBadgeBlueBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeBlueColor
   */
  readonly avatarBadgeBlueColor: string;
  withAvatarBadgeBlueColor(avatarBadgeBlueColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeChocoBackgroundColor
   */
  readonly avatarBadgeChocoBackgroundColor: string;
  withAvatarBadgeChocoBackgroundColor(avatarBadgeChocoBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeChocoColor
   */
  readonly avatarBadgeChocoColor: string;
  withAvatarBadgeChocoColor(avatarBadgeChocoColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeCyanBackgroundColor
   */
  readonly avatarBadgeCyanBackgroundColor: string;
  withAvatarBadgeCyanBackgroundColor(avatarBadgeCyanBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeCyanColor
   */
  readonly avatarBadgeCyanColor: string;
  withAvatarBadgeCyanColor(avatarBadgeCyanColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeForestBackgroundColor
   */
  readonly avatarBadgeForestBackgroundColor: string;
  withAvatarBadgeForestBackgroundColor(avatarBadgeForestBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeForestColor
   */
  readonly avatarBadgeForestColor: string;
  withAvatarBadgeForestColor(avatarBadgeForestColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeGreenBackgroundColor
   */
  readonly avatarBadgeGreenBackgroundColor: string;
  withAvatarBadgeGreenBackgroundColor(avatarBadgeGreenBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeGreenColor
   */
  readonly avatarBadgeGreenColor: string;
  withAvatarBadgeGreenColor(avatarBadgeGreenColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeLimeBackgroundColor
   */
  readonly avatarBadgeLimeBackgroundColor: string;
  withAvatarBadgeLimeBackgroundColor(avatarBadgeLimeBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeLimeColor
   */
  readonly avatarBadgeLimeColor: string;
  withAvatarBadgeLimeColor(avatarBadgeLimeColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeOliveBackgroundColor
   */
  readonly avatarBadgeOliveBackgroundColor: string;
  withAvatarBadgeOliveBackgroundColor(avatarBadgeOliveBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeOliveColor
   */
  readonly avatarBadgeOliveColor: string;
  withAvatarBadgeOliveColor(avatarBadgeOliveColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeOrangeBackgroundColor
   */
  readonly avatarBadgeOrangeBackgroundColor: string;
  withAvatarBadgeOrangeBackgroundColor(avatarBadgeOrangeBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeOrangeColor
   */
  readonly avatarBadgeOrangeColor: string;
  withAvatarBadgeOrangeColor(avatarBadgeOrangeColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgePlumBackgroundColor
   */
  readonly avatarBadgePlumBackgroundColor: string;
  withAvatarBadgePlumBackgroundColor(avatarBadgePlumBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgePlumColor
   */
  readonly avatarBadgePlumColor: string;
  withAvatarBadgePlumColor(avatarBadgePlumColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgePurpleBackgroundColor
   */
  readonly avatarBadgePurpleBackgroundColor: string;
  withAvatarBadgePurpleBackgroundColor(avatarBadgePurpleBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgePurpleColor
   */
  readonly avatarBadgePurpleColor: string;
  withAvatarBadgePurpleColor(avatarBadgePurpleColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeRedBackgroundColor
   */
  readonly avatarBadgeRedBackgroundColor: string;
  withAvatarBadgeRedBackgroundColor(avatarBadgeRedBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeRedColor
   */
  readonly avatarBadgeRedColor: string;
  withAvatarBadgeRedColor(avatarBadgeRedColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeSlateBackgroundColor
   */
  readonly avatarBadgeSlateBackgroundColor: string;
  withAvatarBadgeSlateBackgroundColor(avatarBadgeSlateBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeSlateColor
   */
  readonly avatarBadgeSlateColor: string;
  withAvatarBadgeSlateColor(avatarBadgeSlateColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeYellowBackgroundColor
   */
  readonly avatarBadgeYellowBackgroundColor: string;
  withAvatarBadgeYellowBackgroundColor(avatarBadgeYellowBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * avatarBadgeYellowColor
   */
  readonly avatarBadgeYellowColor: string;
  withAvatarBadgeYellowColor(avatarBadgeYellowColor: string): UiSdlThemeTemplate;

  /**
   * booleanIconColor
   */
  readonly booleanIconColor: string;
  withBooleanIconColor(booleanIconColor: string): UiSdlThemeTemplate;

  /**
   * booleanIconTextColor
   */
  readonly booleanIconTextColor: string;
  withBooleanIconTextColor(booleanIconTextColor: string): UiSdlThemeTemplate;

  /**
   * borderColor
   */
  readonly borderColor: string;
  withBorderColor(borderColor: string): UiSdlThemeTemplate;

  /**
   * boxShadow01
   */
  readonly boxShadow01: string;
  withBoxShadow01(boxShadow01: string): UiSdlThemeTemplate;

  /**
   * boxShadow02
   */
  readonly boxShadow02: string;
  withBoxShadow02(boxShadow02: string): UiSdlThemeTemplate;

  /**
   * boxShadow03
   */
  readonly boxShadow03: string;
  withBoxShadow03(boxShadow03: string): UiSdlThemeTemplate;

  /**
   * boxShadow04
   */
  readonly boxShadow04: string;
  withBoxShadow04(boxShadow04: string): UiSdlThemeTemplate;

  /**
   * boxShadow05
   */
  readonly boxShadow05: string;
  withBoxShadow05(boxShadow05: string): UiSdlThemeTemplate;

  /**
   * boxShadowCardParent
   */
  readonly boxShadowCardParent: string;
  withBoxShadowCardParent(boxShadowCardParent: string): UiSdlThemeTemplate;

  /**
   * boxShadowMenu
   */
  readonly boxShadowMenu: string;
  withBoxShadowMenu(boxShadowMenu: string): UiSdlThemeTemplate;

  /**
   * boxZoomIconPath
   */
  readonly boxZoomIconPath: string;
  withBoxZoomIconPath(boxZoomIconPath: string): UiSdlThemeTemplate;

  /**
   * boxZoomIconUrl
   */
  readonly boxZoomIconUrl: string;
  withBoxZoomIconUrl(boxZoomIconUrl: string): UiSdlThemeTemplate;

  /**
   * boxZoomIconColor
   */
  readonly boxZoomIconColor: string;
  withBoxZoomIconColor(boxZoomIconColor: string): UiSdlThemeTemplate;

  /**
   * brightnessActionHover
   */
  readonly brightnessActionHover: string;
  withBrightnessActionHover(brightnessActionHover: string): UiSdlThemeTemplate;

  /**
   * brightnessActionHoverInverse
   */
  readonly brightnessActionHoverInverse: string;
  withBrightnessActionHoverInverse(brightnessActionHoverInverse: string): UiSdlThemeTemplate;

  /**
   * brightnessActionPressed
   */
  readonly brightnessActionPressed: string;
  withBrightnessActionPressed(brightnessActionPressed: string): UiSdlThemeTemplate;

  /**
   * brightnessActionPressedInverse
   */
  readonly brightnessActionPressedInverse: string;
  withBrightnessActionPressedInverse(brightnessActionPressedInverse: string): UiSdlThemeTemplate;

  /**
   * buttonControlBorderColor
   */
  readonly buttonControlBorderColor: string;
  withButtonControlBorderColor(buttonControlBorderColor: string): UiSdlThemeTemplate;

  /**
   * buttonControlFontColor
   */
  readonly buttonControlFontColor: string;
  withButtonControlFontColor(buttonControlFontColor: string): UiSdlThemeTemplate;

  /**
   * buttonControlHoverBackgroundColor
   */
  readonly buttonControlHoverBackgroundColor: string;
  withButtonControlHoverBackgroundColor(buttonControlHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonControlSelectedBackgroundColor
   */
  readonly buttonControlSelectedBackgroundColor: string;
  withButtonControlSelectedBackgroundColor(buttonControlSelectedBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonControlSelectedDisabledBackgroundColor
   */
  readonly buttonControlSelectedDisabledBackgroundColor: string;
  withButtonControlSelectedDisabledBackgroundColor(buttonControlSelectedDisabledBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonControlSelectedFontColor
   */
  readonly buttonControlSelectedFontColor: string;
  withButtonControlSelectedFontColor(buttonControlSelectedFontColor: string): UiSdlThemeTemplate;

  /**
   * buttonControlSelectedHoverBackgroundColor
   */
  readonly buttonControlSelectedHoverBackgroundColor: string;
  withButtonControlSelectedHoverBackgroundColor(buttonControlSelectedHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonDangerPrimaryActiveBackgroundColor
   */
  readonly buttonDangerPrimaryActiveBackgroundColor: string;
  withButtonDangerPrimaryActiveBackgroundColor(buttonDangerPrimaryActiveBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonDangerPrimaryHoverBackgroundColor
   */
  readonly buttonDangerPrimaryHoverBackgroundColor: string;
  withButtonDangerPrimaryHoverBackgroundColor(buttonDangerPrimaryHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonDangerSecondaryActiveBackgroundColor
   */
  readonly buttonDangerSecondaryActiveBackgroundColor: string;
  withButtonDangerSecondaryActiveBackgroundColor(buttonDangerSecondaryActiveBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonDangerSecondaryHoverBackgroundColor
   */
  readonly buttonDangerSecondaryHoverBackgroundColor: string;
  withButtonDangerSecondaryHoverBackgroundColor(buttonDangerSecondaryHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonDangerTertiaryActiveBackgroundColor
   */
  readonly buttonDangerTertiaryActiveBackgroundColor: string;
  withButtonDangerTertiaryActiveBackgroundColor(buttonDangerTertiaryActiveBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonDangerTertiaryHoverBackgroundColor
   */
  readonly buttonDangerTertiaryHoverBackgroundColor: string;
  withButtonDangerTertiaryHoverBackgroundColor(buttonDangerTertiaryHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonIconActiveBackgroundColor
   */
  readonly buttonIconActiveBackgroundColor: string;
  withButtonIconActiveBackgroundColor(buttonIconActiveBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonIconBackgroundColor
   */
  readonly buttonIconBackgroundColor: string;
  withButtonIconBackgroundColor(buttonIconBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonIconHoverBackgroundColor
   */
  readonly buttonIconHoverBackgroundColor: string;
  withButtonIconHoverBackgroundColor(buttonIconHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonIconSelectedActiveBackgroundColor
   */
  readonly buttonIconSelectedActiveBackgroundColor: string;
  withButtonIconSelectedActiveBackgroundColor(buttonIconSelectedActiveBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonIconSelectedBackgroundColor
   */
  readonly buttonIconSelectedBackgroundColor: string;
  withButtonIconSelectedBackgroundColor(buttonIconSelectedBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonIconSelectedForegroundColor
   */
  readonly buttonIconSelectedForegroundColor: string;
  withButtonIconSelectedForegroundColor(buttonIconSelectedForegroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonIconSelectedHoverBackgroundColor
   */
  readonly buttonIconSelectedHoverBackgroundColor: string;
  withButtonIconSelectedHoverBackgroundColor(buttonIconSelectedHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonPrimaryActiveBackgroundColor
   */
  readonly buttonPrimaryActiveBackgroundColor: string;
  withButtonPrimaryActiveBackgroundColor(buttonPrimaryActiveBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonPrimaryHoverBackgroundColor
   */
  readonly buttonPrimaryHoverBackgroundColor: string;
  withButtonPrimaryHoverBackgroundColor(buttonPrimaryHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonSecondaryActiveBackgroundColor
   */
  readonly buttonSecondaryActiveBackgroundColor: string;
  withButtonSecondaryActiveBackgroundColor(buttonSecondaryActiveBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonSecondaryHoverBackgroundColor
   */
  readonly buttonSecondaryHoverBackgroundColor: string;
  withButtonSecondaryHoverBackgroundColor(buttonSecondaryHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonTertiaryActiveBackgroundColor
   */
  readonly buttonTertiaryActiveBackgroundColor: string;
  withButtonTertiaryActiveBackgroundColor(buttonTertiaryActiveBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * buttonTertiaryHoverBackgroundColor
   */
  readonly buttonTertiaryHoverBackgroundColor: string;
  withButtonTertiaryHoverBackgroundColor(buttonTertiaryHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * canvasBackgroundDotColor
   */
  readonly canvasBackgroundDotColor: string;
  withCanvasBackgroundDotColor(canvasBackgroundDotColor: string): UiSdlThemeTemplate;

  /**
   * canvasCyanNodeColor
   */
  readonly canvasCyanNodeColor: string;
  withCanvasCyanNodeColor(canvasCyanNodeColor: string): UiSdlThemeTemplate;

  /**
   * canvasForestNodeColor
   */
  readonly canvasForestNodeColor: string;
  withCanvasForestNodeColor(canvasForestNodeColor: string): UiSdlThemeTemplate;

  /**
   * canvasNodeBorderColor
   */
  readonly canvasNodeBorderColor: string;
  withCanvasNodeBorderColor(canvasNodeBorderColor: string): UiSdlThemeTemplate;

  /**
   * canvasNodeErrorBackgroundColor
   */
  readonly canvasNodeErrorBackgroundColor: string;
  withCanvasNodeErrorBackgroundColor(canvasNodeErrorBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * canvasNodeWarningBackgroundColor
   */
  readonly canvasNodeWarningBackgroundColor: string;
  withCanvasNodeWarningBackgroundColor(canvasNodeWarningBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * canvasOrangeIconColor
   */
  readonly canvasOrangeIconColor: string;
  withCanvasOrangeIconColor(canvasOrangeIconColor: string): UiSdlThemeTemplate;

  /**
   * canvasOrangeNodeColor
   */
  readonly canvasOrangeNodeColor: string;
  withCanvasOrangeNodeColor(canvasOrangeNodeColor: string): UiSdlThemeTemplate;

  /**
   * canvasPendingNodeBackgroundColor
   */
  readonly canvasPendingNodeBackgroundColor: string;
  withCanvasPendingNodeBackgroundColor(canvasPendingNodeBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * canvasPendingNodeForegroundColor
   */
  readonly canvasPendingNodeForegroundColor: string;
  withCanvasPendingNodeForegroundColor(canvasPendingNodeForegroundColor: string): UiSdlThemeTemplate;

  /**
   * canvasPlumNodeColor
   */
  readonly canvasPlumNodeColor: string;
  withCanvasPlumNodeColor(canvasPlumNodeColor: string): UiSdlThemeTemplate;

  /**
   * canvasPurpleIconColor
   */
  readonly canvasPurpleIconColor: string;
  withCanvasPurpleIconColor(canvasPurpleIconColor: string): UiSdlThemeTemplate;

  /**
   * canvasPurpleNodeColor
   */
  readonly canvasPurpleNodeColor: string;
  withCanvasPurpleNodeColor(canvasPurpleNodeColor: string): UiSdlThemeTemplate;

  /**
   * canvasSlateIconColor
   */
  readonly canvasSlateIconColor: string;
  withCanvasSlateIconColor(canvasSlateIconColor: string): UiSdlThemeTemplate;

  /**
   * canvasSlateNodeColor
   */
  readonly canvasSlateNodeColor: string;
  withCanvasSlateNodeColor(canvasSlateNodeColor: string): UiSdlThemeTemplate;

  /**
   * cardElevation00BackgroundColor
   */
  readonly cardElevation00BackgroundColor: string;
  withCardElevation00BackgroundColor(cardElevation00BackgroundColor: string): UiSdlThemeTemplate;

  /**
   * cardElevation01BackgroundColor
   */
  readonly cardElevation01BackgroundColor: string;
  withCardElevation01BackgroundColor(cardElevation01BackgroundColor: string): UiSdlThemeTemplate;

  /**
   * cardElevation02BackgroundColor
   */
  readonly cardElevation02BackgroundColor: string;
  withCardElevation02BackgroundColor(cardElevation02BackgroundColor: string): UiSdlThemeTemplate;

  /**
   * cardElevation03BackgroundColor
   */
  readonly cardElevation03BackgroundColor: string;
  withCardElevation03BackgroundColor(cardElevation03BackgroundColor: string): UiSdlThemeTemplate;

  /**
   * cardElevation04BackgroundColor
   */
  readonly cardElevation04BackgroundColor: string;
  withCardElevation04BackgroundColor(cardElevation04BackgroundColor: string): UiSdlThemeTemplate;

  /**
   * cardElevation06BackgroundColor
   */
  readonly cardElevation06BackgroundColor: string;
  withCardElevation06BackgroundColor(cardElevation06BackgroundColor: string): UiSdlThemeTemplate;

  /**
   * cardElevation08BackgroundColor
   */
  readonly cardElevation08BackgroundColor: string;
  withCardElevation08BackgroundColor(cardElevation08BackgroundColor: string): UiSdlThemeTemplate;

  /**
   * cardElevation12BackgroundColor
   */
  readonly cardElevation12BackgroundColor: string;
  withCardElevation12BackgroundColor(cardElevation12BackgroundColor: string): UiSdlThemeTemplate;

  /**
   * cardElevation16BackgroundColor
   */
  readonly cardElevation16BackgroundColor: string;
  withCardElevation16BackgroundColor(cardElevation16BackgroundColor: string): UiSdlThemeTemplate;

  /**
   * cardElevation24BackgroundColor
   */
  readonly cardElevation24BackgroundColor: string;
  withCardElevation24BackgroundColor(cardElevation24BackgroundColor: string): UiSdlThemeTemplate;

  /**
   * chartSeriesTooltipNameFontColor
   */
  readonly chartSeriesTooltipNameFontColor: string;
  withChartSeriesTooltipNameFontColor(chartSeriesTooltipNameFontColor: string): UiSdlThemeTemplate;

  /**
   * chartSeriesTooltipTitleFontColor
   */
  readonly chartSeriesTooltipTitleFontColor: string;
  withChartSeriesTooltipTitleFontColor(chartSeriesTooltipTitleFontColor: string): UiSdlThemeTemplate;

  /**
   * chartSeriesTooltipValueFontColor
   */
  readonly chartSeriesTooltipValueFontColor: string;
  withChartSeriesTooltipValueFontColor(chartSeriesTooltipValueFontColor: string): UiSdlThemeTemplate;

  /**
   * checkboxBackgroundColor
   */
  readonly checkboxBackgroundColor: string;
  withCheckboxBackgroundColor(checkboxBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * checkboxColor
   */
  readonly checkboxColor: string;
  withCheckboxColor(checkboxColor: string): UiSdlThemeTemplate;

  /**
   * checkboxHoverBackgroundColor
   */
  readonly checkboxHoverBackgroundColor: string;
  withCheckboxHoverBackgroundColor(checkboxHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * checkboxHoverColor
   */
  readonly checkboxHoverColor: string;
  withCheckboxHoverColor(checkboxHoverColor: string): UiSdlThemeTemplate;

  /**
   * checkboxSelectedDisabledColor
   */
  readonly checkboxSelectedDisabledColor: string;
  withCheckboxSelectedDisabledColor(checkboxSelectedDisabledColor: string): UiSdlThemeTemplate;

  /**
   * checkboxSelectedHoverColor
   */
  readonly checkboxSelectedHoverColor: string;
  withCheckboxSelectedHoverColor(checkboxSelectedHoverColor: string): UiSdlThemeTemplate;

  /**
   * colorBgAccent
   */
  readonly colorBgAccent: string;
  withColorBgAccent(colorBgAccent: string): UiSdlThemeTemplate;

  /**
   * colorBgAccentWeak
   */
  readonly colorBgAccentWeak: string;
  withColorBgAccentWeak(colorBgAccentWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgActionHover
   */
  readonly colorBgActionHover: string;
  withColorBgActionHover(colorBgActionHover: string): UiSdlThemeTemplate;

  /**
   * colorBgActionHoverInverse
   */
  readonly colorBgActionHoverInverse: string;
  withColorBgActionHoverInverse(colorBgActionHoverInverse: string): UiSdlThemeTemplate;

  /**
   * colorBgActionPressed
   */
  readonly colorBgActionPressed: string;
  withColorBgActionPressed(colorBgActionPressed: string): UiSdlThemeTemplate;

  /**
   * colorBgActionPressedInverse
   */
  readonly colorBgActionPressedInverse: string;
  withColorBgActionPressedInverse(colorBgActionPressedInverse: string): UiSdlThemeTemplate;

  /**
   * colorBgAvatarDefault
   */
  readonly colorBgAvatarDefault: string;
  withColorBgAvatarDefault(colorBgAvatarDefault: string): UiSdlThemeTemplate;

  /**
   * colorBgBtnAccentFill
   */
  readonly colorBgBtnAccentFill: string;
  withColorBgBtnAccentFill(colorBgBtnAccentFill: string): UiSdlThemeTemplate;

  /**
   * colorBgBtnDangerFill
   */
  readonly colorBgBtnDangerFill: string;
  withColorBgBtnDangerFill(colorBgBtnDangerFill: string): UiSdlThemeTemplate;

  /**
   * colorBgBtnPrimaryFill
   */
  readonly colorBgBtnPrimaryFill: string;
  withColorBgBtnPrimaryFill(colorBgBtnPrimaryFill: string): UiSdlThemeTemplate;

  /**
   * colorBgCardChildPrimary
   */
  readonly colorBgCardChildPrimary: string;
  withColorBgCardChildPrimary(colorBgCardChildPrimary: string): UiSdlThemeTemplate;

  /**
   * colorBgCardChildSecondary
   */
  readonly colorBgCardChildSecondary: string;
  withColorBgCardChildSecondary(colorBgCardChildSecondary: string): UiSdlThemeTemplate;

  /**
   * colorBgCardParent
   */
  readonly colorBgCardParent: string;
  withColorBgCardParent(colorBgCardParent: string): UiSdlThemeTemplate;

  /**
   * colorBgContainer01
   */
  readonly colorBgContainer01: string;
  withColorBgContainer01(colorBgContainer01: string): UiSdlThemeTemplate;

  /**
   * colorBgContainer02
   */
  readonly colorBgContainer02: string;
  withColorBgContainer02(colorBgContainer02: string): UiSdlThemeTemplate;

  /**
   * colorBgContentFrame
   */
  readonly colorBgContentFrame: string;
  withColorBgContentFrame(colorBgContentFrame: string): UiSdlThemeTemplate;

  /**
   * colorBgDanger
   */
  readonly colorBgDanger: string;
  withColorBgDanger(colorBgDanger: string): UiSdlThemeTemplate;

  /**
   * colorBgDangerWeak
   */
  readonly colorBgDangerWeak: string;
  withColorBgDangerWeak(colorBgDangerWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgDataGridHover
   */
  readonly colorBgDataGridHover: string;
  withColorBgDataGridHover(colorBgDataGridHover: string): UiSdlThemeTemplate;

  /**
   * colorBgDataGridZebraStripe
   */
  readonly colorBgDataGridZebraStripe: string;
  withColorBgDataGridZebraStripe(colorBgDataGridZebraStripe: string): UiSdlThemeTemplate;

  /**
   * colorBgDataZoomSliderFilter
   */
  readonly colorBgDataZoomSliderFilter: string;
  withColorBgDataZoomSliderFilter(colorBgDataZoomSliderFilter: string): UiSdlThemeTemplate;

  /**
   * colorBgDataZoomSparkline
   */
  readonly colorBgDataZoomSparkline: string;
  withColorBgDataZoomSparkline(colorBgDataZoomSparkline: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoOrangeStrong
   */
  readonly colorBgDecoOrangeStrong: string;
  withColorBgDecoOrangeStrong(colorBgDecoOrangeStrong: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoOrange
   */
  readonly colorBgDecoOrange: string;
  withColorBgDecoOrange(colorBgDecoOrange: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoOrangeWeak
   */
  readonly colorBgDecoOrangeWeak: string;
  withColorBgDecoOrangeWeak(colorBgDecoOrangeWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoOliveStrong
   */
  readonly colorBgDecoOliveStrong: string;
  withColorBgDecoOliveStrong(colorBgDecoOliveStrong: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoOlive
   */
  readonly colorBgDecoOlive: string;
  withColorBgDecoOlive(colorBgDecoOlive: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoOliveWeak
   */
  readonly colorBgDecoOliveWeak: string;
  withColorBgDecoOliveWeak(colorBgDecoOliveWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoLimeStrong
   */
  readonly colorBgDecoLimeStrong: string;
  withColorBgDecoLimeStrong(colorBgDecoLimeStrong: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoLime
   */
  readonly colorBgDecoLime: string;
  withColorBgDecoLime(colorBgDecoLime: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoLimeWeak
   */
  readonly colorBgDecoLimeWeak: string;
  withColorBgDecoLimeWeak(colorBgDecoLimeWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoForestStrong
   */
  readonly colorBgDecoForestStrong: string;
  withColorBgDecoForestStrong(colorBgDecoForestStrong: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoForest
   */
  readonly colorBgDecoForest: string;
  withColorBgDecoForest(colorBgDecoForest: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoForestWeak
   */
  readonly colorBgDecoForestWeak: string;
  withColorBgDecoForestWeak(colorBgDecoForestWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoCyanStrong
   */
  readonly colorBgDecoCyanStrong: string;
  withColorBgDecoCyanStrong(colorBgDecoCyanStrong: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoCyan
   */
  readonly colorBgDecoCyan: string;
  withColorBgDecoCyan(colorBgDecoCyan: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoCyanWeak
   */
  readonly colorBgDecoCyanWeak: string;
  withColorBgDecoCyanWeak(colorBgDecoCyanWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoSlateStrong
   */
  readonly colorBgDecoSlateStrong: string;
  withColorBgDecoSlateStrong(colorBgDecoSlateStrong: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoSlate
   */
  readonly colorBgDecoSlate: string;
  withColorBgDecoSlate(colorBgDecoSlate: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoSlateWeak
   */
  readonly colorBgDecoSlateWeak: string;
  withColorBgDecoSlateWeak(colorBgDecoSlateWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoPurpleStrong
   */
  readonly colorBgDecoPurpleStrong: string;
  withColorBgDecoPurpleStrong(colorBgDecoPurpleStrong: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoPurple
   */
  readonly colorBgDecoPurple: string;
  withColorBgDecoPurple(colorBgDecoPurple: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoPurpleWeak
   */
  readonly colorBgDecoPurpleWeak: string;
  withColorBgDecoPurpleWeak(colorBgDecoPurpleWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoPlumStrong
   */
  readonly colorBgDecoPlumStrong: string;
  withColorBgDecoPlumStrong(colorBgDecoPlumStrong: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoPlum
   */
  readonly colorBgDecoPlum: string;
  withColorBgDecoPlum(colorBgDecoPlum: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoPlumWeak
   */
  readonly colorBgDecoPlumWeak: string;
  withColorBgDecoPlumWeak(colorBgDecoPlumWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoChocoStrong
   */
  readonly colorBgDecoChocoStrong: string;
  withColorBgDecoChocoStrong(colorBgDecoChocoStrong: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoChoco
   */
  readonly colorBgDecoChoco: string;
  withColorBgDecoChoco(colorBgDecoChoco: string): UiSdlThemeTemplate;

  /**
   * colorBgDecoChocoWeak
   */
  readonly colorBgDecoChocoWeak: string;
  withColorBgDecoChocoWeak(colorBgDecoChocoWeak: string): UiSdlThemeTemplate;

  /**
   * colorBorderDataZoomSparkline
   */
  readonly colorBorderDataZoomSparkline: string;
  withColorBorderDataZoomSparkline(colorBorderDataZoomSparkline: string): UiSdlThemeTemplate;

  /**
   * colorBgInlineNotificationError
   */
  readonly colorBgInlineNotificationError: string;
  withColorBgInlineNotificationError(colorBgInlineNotificationError: string): UiSdlThemeTemplate;

  /**
   * colorBgInlineNotificationSuccess
   */
  readonly colorBgInlineNotificationSuccess: string;
  withColorBgInlineNotificationSuccess(colorBgInlineNotificationSuccess: string): UiSdlThemeTemplate;

  /**
   * colorBgInlineNotificationWarning
   */
  readonly colorBgInlineNotificationWarning: string;
  withColorBgInlineNotificationWarning(colorBgInlineNotificationWarning: string): UiSdlThemeTemplate;

  /**
   * colorBgInputReadonly
   */
  readonly colorBgInputReadonly: string;
  withColorBgInputReadonly(colorBgInputReadonly: string): UiSdlThemeTemplate;

  /**
   * colorBgMenu
   */
  readonly colorBgMenu: string;
  withColorBgMenu(colorBgMenu: string): UiSdlThemeTemplate;

  /**
   * colorBgMenuHoverUnselected
   */
  readonly colorBgMenuHoverUnselected: string;
  withColorBgMenuHoverUnselected(colorBgMenuHoverUnselected: string): UiSdlThemeTemplate;

  /**
   * colorBgMenuItemSelected
   */
  readonly colorBgMenuItemSelected: string;
  withColorBgMenuItemSelected(colorBgMenuItemSelected: string): UiSdlThemeTemplate;

  /**
   * colorBgPage
   */
  readonly colorBgPage: string;
  withColorBgPage(colorBgPage: string): UiSdlThemeTemplate;

  /**
   * colorBgPrimary
   */
  readonly colorBgPrimary: string;
  withColorBgPrimary(colorBgPrimary: string): UiSdlThemeTemplate;

  /**
   * colorBgPrimaryInverse
   */
  readonly colorBgPrimaryInverse: string;
  withColorBgPrimaryInverse(colorBgPrimaryInverse: string): UiSdlThemeTemplate;

  /**
   * colorBgCoreAccentStrong
   */
  readonly colorBgCoreAccentStrong: string;
  withColorBgCoreAccentStrong(colorBgCoreAccentStrong: string): UiSdlThemeTemplate;

  /**
   * colorBgCoreAccent
   */
  readonly colorBgCoreAccent: string;
  withColorBgCoreAccent(colorBgCoreAccent: string): UiSdlThemeTemplate;

  /**
   * colorBgCoreAccentWeak
   */
  readonly colorBgCoreAccentWeak: string;
  withColorBgCoreAccentWeak(colorBgCoreAccentWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgCoreDangerStrong
   */
  readonly colorBgCoreDangerStrong: string;
  withColorBgCoreDangerStrong(colorBgCoreDangerStrong: string): UiSdlThemeTemplate;

  /**
   * colorBgCoreDanger
   */
  readonly colorBgCoreDanger: string;
  withColorBgCoreDanger(colorBgCoreDanger: string): UiSdlThemeTemplate;

  /**
   * colorBgCoreDangerWeak
   */
  readonly colorBgCoreDangerWeak: string;
  withColorBgCoreDangerWeak(colorBgCoreDangerWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgCoreSuccessStrong
   */
  readonly colorBgCoreSuccessStrong: string;
  withColorBgCoreSuccessStrong(colorBgCoreSuccessStrong: string): UiSdlThemeTemplate;

  /**
   * colorBgCoreSuccess
   */
  readonly colorBgCoreSuccess: string;
  withColorBgCoreSuccess(colorBgCoreSuccess: string): UiSdlThemeTemplate;

  /**
   * colorBgCoreSuccessWeak
   */
  readonly colorBgCoreSuccessWeak: string;
  withColorBgCoreSuccessWeak(colorBgCoreSuccessWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgCoreWarningStrong
   */
  readonly colorBgCoreWarningStrong: string;
  withColorBgCoreWarningStrong(colorBgCoreWarningStrong: string): UiSdlThemeTemplate;

  /**
   * colorBgCoreWarning
   */
  readonly colorBgCoreWarning: string;
  withColorBgCoreWarning(colorBgCoreWarning: string): UiSdlThemeTemplate;

  /**
   * colorBgCoreWarningWeak
   */
  readonly colorBgCoreWarningWeak: string;
  withColorBgCoreWarningWeak(colorBgCoreWarningWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgSuccessWeak
   */
  readonly colorBgSuccessWeak: string;
  withColorBgSuccessWeak(colorBgSuccessWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgSideNavPanel
   */
  readonly colorBgSideNavPanel: string;
  withColorBgSideNavPanel(colorBgSideNavPanel: string): UiSdlThemeTemplate;

  /**
   * colorBgSecondary
   */
  readonly colorBgSecondary: string;
  withColorBgSecondary(colorBgSecondary: string): UiSdlThemeTemplate;

  /**
   * colorBgSecondaryInverse
   */
  readonly colorBgSecondaryInverse: string;
  withColorBgSecondaryInverse(colorBgSecondaryInverse: string): UiSdlThemeTemplate;

  /**
   * colorBgSegBtnSelected
   */
  readonly colorBgSegBtnSelected: string;
  withColorBgSegBtnSelected(colorBgSegBtnSelected: string): UiSdlThemeTemplate;

  /**
   * colorBgSelected
   */
  readonly colorBgSelected: string;
  withColorBgSelected(colorBgSelected: string): UiSdlThemeTemplate;

  /**
   * colorBgSuccess
   */
  readonly colorBgSuccess: string;
  withColorBgSuccess(colorBgSuccess: string): UiSdlThemeTemplate;

  /**
   * colorBgTertiary
   */
  readonly colorBgTertiary: string;
  withColorBgTertiary(colorBgTertiary: string): UiSdlThemeTemplate;

  /**
   * colorBgTertiaryInverse
   */
  readonly colorBgTertiaryInverse: string;
  withColorBgTertiaryInverse(colorBgTertiaryInverse: string): UiSdlThemeTemplate;

  /**
   * colorBgTickMark
   */
  readonly colorBgTickMark: string;
  withColorBgTickMark(colorBgTickMark: string): UiSdlThemeTemplate;

  /**
   * colorBgTrack
   */
  readonly colorBgTrack: string;
  withColorBgTrack(colorBgTrack: string): UiSdlThemeTemplate;

  /**
   * colorBgWarning
   */
  readonly colorBgWarning: string;
  withColorBgWarning(colorBgWarning: string): UiSdlThemeTemplate;

  /**
   * colorBgWarningWeak
   */
  readonly colorBgWarningWeak: string;
  withColorBgWarningWeak(colorBgWarningWeak: string): UiSdlThemeTemplate;

  /**
   * colorBorder
   */
  readonly colorBorder: string;
  withColorBorder(colorBorder: string): UiSdlThemeTemplate;

  /**
   * colorBorderAccent
   */
  readonly colorBorderAccent: string;
  withColorBorderAccent(colorBorderAccent: string): UiSdlThemeTemplate;

  /**
   * colorBorderBtnAccentOutline
   */
  readonly colorBorderBtnAccentOutline: string;
  withColorBorderBtnAccentOutline(colorBorderBtnAccentOutline: string): UiSdlThemeTemplate;

  /**
   * colorBorderBtnDangerOutline
   */
  readonly colorBorderBtnDangerOutline: string;
  withColorBorderBtnDangerOutline(colorBorderBtnDangerOutline: string): UiSdlThemeTemplate;

  /**
   * colorBorderBtnPrimaryOutline
   */
  readonly colorBorderBtnPrimaryOutline: string;
  withColorBorderBtnPrimaryOutline(colorBorderBtnPrimaryOutline: string): UiSdlThemeTemplate;

  /**
   * colorBorderCardChildPrimary
   */
  readonly colorBorderCardChildPrimary: string;
  withColorBorderCardChildPrimary(colorBorderCardChildPrimary: string): UiSdlThemeTemplate;

  /**
   * colorBorderCardChildSecondary
   */
  readonly colorBorderCardChildSecondary: string;
  withColorBorderCardChildSecondary(colorBorderCardChildSecondary: string): UiSdlThemeTemplate;

  /**
   * colorBorderCardParent
   */
  readonly colorBorderCardParent: string;
  withColorBorderCardParent(colorBorderCardParent: string): UiSdlThemeTemplate;

  /**
   * colorBorderDanger
   */
  readonly colorBorderDanger: string;
  withColorBorderDanger(colorBorderDanger: string): UiSdlThemeTemplate;

  /**
   * colorBorderInlineNotificationError
   */
  readonly colorBorderInlineNotificationError: string;
  withColorBorderInlineNotificationError(colorBorderInlineNotificationError: string): UiSdlThemeTemplate;

  /**
   * colorBorderInlineNotificationSuccess
   */
  readonly colorBorderInlineNotificationSuccess: string;
  withColorBorderInlineNotificationSuccess(colorBorderInlineNotificationSuccess: string): UiSdlThemeTemplate;

  /**
   * colorBorderInlineNotificationWarning
   */
  readonly colorBorderInlineNotificationWarning: string;
  withColorBorderInlineNotificationWarning(colorBorderInlineNotificationWarning: string): UiSdlThemeTemplate;

  /**
   * colorBorderMenu
   */
  readonly colorBorderMenu: string;
  withColorBorderMenu(colorBorderMenu: string): UiSdlThemeTemplate;

  /**
   * colorBorderReadonly
   */
  readonly colorBorderReadonly: string;
  withColorBorderReadonly(colorBorderReadonly: string): UiSdlThemeTemplate;

  /**
   * colorBorderSegBtn
   */
  readonly colorBorderSegBtn: string;
  withColorBorderSegBtn(colorBorderSegBtn: string): UiSdlThemeTemplate;

  /**
   * colorBorderStrong
   */
  readonly colorBorderStrong: string;
  withColorBorderStrong(colorBorderStrong: string): UiSdlThemeTemplate;

  /**
   * colorBorderSuccess
   */
  readonly colorBorderSuccess: string;
  withColorBorderSuccess(colorBorderSuccess: string): UiSdlThemeTemplate;

  /**
   * colorBorderWarning
   */
  readonly colorBorderWarning: string;
  withColorBorderWarning(colorBorderWarning: string): UiSdlThemeTemplate;

  /**
   * colorBorderWeak
   */
  readonly colorBorderWeak: string;
  withColorBorderWeak(colorBorderWeak: string): UiSdlThemeTemplate;

  /**
   * colorDivider
   */
  readonly colorDivider: string;
  withColorDivider(colorDivider: string): UiSdlThemeTemplate;

  /**
   * colorDividerStrong
   */
  readonly colorDividerStrong: string;
  withColorDividerStrong(colorDividerStrong: string): UiSdlThemeTemplate;

  /**
   * colorDividerWeak
   */
  readonly colorDividerWeak: string;
  withColorDividerWeak(colorDividerWeak: string): UiSdlThemeTemplate;

  /**
   * colorBgCollapsibleNav
   */
  readonly colorBgCollapsibleNav: string;
  withColorBgCollapsibleNav(colorBgCollapsibleNav: string): UiSdlThemeTemplate;

  /**
   * colorBgTintTimeBarOverlay
   */
  readonly colorBgTintTimeBarOverlay: string;
  withColorBgTintTimeBarOverlay(colorBgTintTimeBarOverlay: string): UiSdlThemeTemplate;

  /**
   * colorBgSankeyLabel
   */
  readonly colorBgSankeyLabel: string;
  withColorBgSankeyLabel(colorBgSankeyLabel: string): UiSdlThemeTemplate;

  /**
   * Background color for the nav menu
   */
  readonly colorBgSideNav: string;
  withColorBgSideNav(colorBgSideNav: string): UiSdlThemeTemplate;

  /**
   * colorBgSideNavItemHover
   */
  readonly colorBgSideNavItemHover: string;
  withColorBgSideNavItemHover(colorBgSideNavItemHover: string): UiSdlThemeTemplate;

  /**
   * colorBgSideItemHover
   */
  readonly colorBgSideItemHover: string;
  withColorBgSideItemHover(colorBgSideItemHover: string): UiSdlThemeTemplate;

  /**
   * colorFgSideNavSelected
   */
  readonly colorFgSideNavSelected: string;
  withColorFgSideNavSelected(colorFgSideNavSelected: string): UiSdlThemeTemplate;

  /**
   * colorFgSideNavUnselected
   */
  readonly colorFgSideNavUnselected: string;
  withColorFgSideNavUnselected(colorFgSideNavUnselected: string): UiSdlThemeTemplate;

  /**
   * colorBorderSideNavItemIndicator
   */
  readonly colorBorderSideNavItemIndicator: string;
  withColorBorderSideNavItemIndicator(colorBorderSideNavItemIndicator: string): UiSdlThemeTemplate;

  /**
   * colorBorderSideNavItemDivider
   */
  readonly colorBorderSideNavItemDivider: string;
  withColorBorderSideNavItemDivider(colorBorderSideNavItemDivider: string): UiSdlThemeTemplate;

  /**
   * colorFgAccent
   */
  readonly colorFgAccent: string;
  withColorFgAccent(colorFgAccent: string): UiSdlThemeTemplate;

  /**
   * colorFgAccentStrong
   */
  readonly colorFgAccentStrong: string;
  withColorFgAccentStrong(colorFgAccentStrong: string): UiSdlThemeTemplate;

  /**
   * colorFgAccentWeak
   */
  readonly colorFgAccentWeak: string;
  withColorFgAccentWeak(colorFgAccentWeak: string): UiSdlThemeTemplate;

  /**
   * colorFgBtnAccent
   */
  readonly colorFgBtnAccent: string;
  withColorFgBtnAccent(colorFgBtnAccent: string): UiSdlThemeTemplate;

  /**
   * colorFgBtnDanger
   */
  readonly colorFgBtnDanger: string;
  withColorFgBtnDanger(colorFgBtnDanger: string): UiSdlThemeTemplate;

  /**
   * colorFgBtnPrimary
   */
  readonly colorFgBtnPrimary: string;
  withColorFgBtnPrimary(colorFgBtnPrimary: string): UiSdlThemeTemplate;

  /**
   * colorFgDanger
   */
  readonly colorFgDanger: string;
  withColorFgDanger(colorFgDanger: string): UiSdlThemeTemplate;

  /**
   * colorFgDangerStrong
   */
  readonly colorFgDangerStrong: string;
  withColorFgDangerStrong(colorFgDangerStrong: string): UiSdlThemeTemplate;

  /**
   * colorFgDangerWeak
   */
  readonly colorFgDangerWeak: string;
  withColorFgDangerWeak(colorFgDangerWeak: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoOrangeStrong
   */
  readonly colorFgDecoOrangeStrong: string;
  withColorFgDecoOrangeStrong(colorFgDecoOrangeStrong: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoOrange
   */
  readonly colorFgDecoOrange: string;
  withColorFgDecoOrange(colorFgDecoOrange: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoOrangeWeak
   */
  readonly colorFgDecoOrangeWeak: string;
  withColorFgDecoOrangeWeak(colorFgDecoOrangeWeak: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoOliveStrong
   */
  readonly colorFgDecoOliveStrong: string;
  withColorFgDecoOliveStrong(colorFgDecoOliveStrong: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoOlive
   */
  readonly colorFgDecoOlive: string;
  withColorFgDecoOlive(colorFgDecoOlive: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoOliveWeak
   */
  readonly colorFgDecoOliveWeak: string;
  withColorFgDecoOliveWeak(colorFgDecoOliveWeak: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoLimeStrong
   */
  readonly colorFgDecoLimeStrong: string;
  withColorFgDecoLimeStrong(colorFgDecoLimeStrong: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoLime
   */
  readonly colorFgDecoLime: string;
  withColorFgDecoLime(colorFgDecoLime: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoLimeWeak
   */
  readonly colorFgDecoLimeWeak: string;
  withColorFgDecoLimeWeak(colorFgDecoLimeWeak: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoForestStrong
   */
  readonly colorFgDecoForestStrong: string;
  withColorFgDecoForestStrong(colorFgDecoForestStrong: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoForest
   */
  readonly colorFgDecoForest: string;
  withColorFgDecoForest(colorFgDecoForest: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoForestWeak
   */
  readonly colorFgDecoForestWeak: string;
  withColorFgDecoForestWeak(colorFgDecoForestWeak: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoCyanStrong
   */
  readonly colorFgDecoCyanStrong: string;
  withColorFgDecoCyanStrong(colorFgDecoCyanStrong: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoCyan
   */
  readonly colorFgDecoCyan: string;
  withColorFgDecoCyan(colorFgDecoCyan: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoCyanWeak
   */
  readonly colorFgDecoCyanWeak: string;
  withColorFgDecoCyanWeak(colorFgDecoCyanWeak: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoSlateStrong
   */
  readonly colorFgDecoSlateStrong: string;
  withColorFgDecoSlateStrong(colorFgDecoSlateStrong: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoSlate
   */
  readonly colorFgDecoSlate: string;
  withColorFgDecoSlate(colorFgDecoSlate: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoSlateWeak
   */
  readonly colorFgDecoSlateWeak: string;
  withColorFgDecoSlateWeak(colorFgDecoSlateWeak: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoPurpleStrong
   */
  readonly colorFgDecoPurpleStrong: string;
  withColorFgDecoPurpleStrong(colorFgDecoPurpleStrong: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoPurple
   */
  readonly colorFgDecoPurple: string;
  withColorFgDecoPurple(colorFgDecoPurple: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoPurpleWeak
   */
  readonly colorFgDecoPurpleWeak: string;
  withColorFgDecoPurpleWeak(colorFgDecoPurpleWeak: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoPlumStrong
   */
  readonly colorFgDecoPlumStrong: string;
  withColorFgDecoPlumStrong(colorFgDecoPlumStrong: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoPlum
   */
  readonly colorFgDecoPlum: string;
  withColorFgDecoPlum(colorFgDecoPlum: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoPlumWeak
   */
  readonly colorFgDecoPlumWeak: string;
  withColorFgDecoPlumWeak(colorFgDecoPlumWeak: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoChocoStrong
   */
  readonly colorFgDecoChocoStrong: string;
  withColorFgDecoChocoStrong(colorFgDecoChocoStrong: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoChoco
   */
  readonly colorFgDecoChoco: string;
  withColorFgDecoChoco(colorFgDecoChoco: string): UiSdlThemeTemplate;

  /**
   * colorFgDecoChocoWeak
   */
  readonly colorFgDecoChocoWeak: string;
  withColorFgDecoChocoWeak(colorFgDecoChocoWeak: string): UiSdlThemeTemplate;

  /**
   * colorFgInputPlaceholder
   */
  readonly colorFgInputPlaceholder: string;
  withColorFgInputPlaceholder(colorFgInputPlaceholder: string): UiSdlThemeTemplate;

  /**
   * colorFgMenuItemSelected
   */
  readonly colorFgMenuItemSelected: string;
  withColorFgMenuItemSelected(colorFgMenuItemSelected: string): UiSdlThemeTemplate;

  /**
   * colorFgMenuItemSelectedIndicator
   */
  readonly colorFgMenuItemSelectedIndicator: string;
  withColorFgMenuItemSelectedIndicator(colorFgMenuItemSelectedIndicator: string): UiSdlThemeTemplate;

  /**
   * colorFgMenuItemUnselected
   */
  readonly colorFgMenuItemUnselected: string;
  withColorFgMenuItemUnselected(colorFgMenuItemUnselected: string): UiSdlThemeTemplate;

  /**
   * colorFgPrimary
   */
  readonly colorFgPrimary: string;
  withColorFgPrimary(colorFgPrimary: string): UiSdlThemeTemplate;

  /**
   * colorFgPrimaryInverse
   */
  readonly colorFgPrimaryInverse: string;
  withColorFgPrimaryInverse(colorFgPrimaryInverse: string): UiSdlThemeTemplate;

  /**
   * colorFgReadonly
   */
  readonly colorFgReadonly: string;
  withColorFgReadonly(colorFgReadonly: string): UiSdlThemeTemplate;

  /**
   * colorFgSecondary
   */
  readonly colorFgSecondary: string;
  withColorFgSecondary(colorFgSecondary: string): UiSdlThemeTemplate;

  /**
   * colorFgSecondaryInverse
   */
  readonly colorFgSecondaryInverse: string;
  withColorFgSecondaryInverse(colorFgSecondaryInverse: string): UiSdlThemeTemplate;

  /**
   * colorFgSegBtn
   */
  readonly colorFgSegBtn: string;
  withColorFgSegBtn(colorFgSegBtn: string): UiSdlThemeTemplate;

  /**
   * colorFgSegBtnSelected
   */
  readonly colorFgSegBtnSelected: string;
  withColorFgSegBtnSelected(colorFgSegBtnSelected: string): UiSdlThemeTemplate;

  /**
   * colorFgSuccess
   */
  readonly colorFgSuccess: string;
  withColorFgSuccess(colorFgSuccess: string): UiSdlThemeTemplate;

  /**
   * colorFgSuccessStrong
   */
  readonly colorFgSuccessStrong: string;
  withColorFgSuccessStrong(colorFgSuccessStrong: string): UiSdlThemeTemplate;

  /**
   * colorFgSuccessWeak
   */
  readonly colorFgSuccessWeak: string;
  withColorFgSuccessWeak(colorFgSuccessWeak: string): UiSdlThemeTemplate;

  /**
   * colorFgWarning
   */
  readonly colorFgWarning: string;
  withColorFgWarning(colorFgWarning: string): UiSdlThemeTemplate;

  /**
   * colorFgWarningStrong
   */
  readonly colorFgWarningStrong: string;
  withColorFgWarningStrong(colorFgWarningStrong: string): UiSdlThemeTemplate;

  /**
   * colorFgWarningWeak
   */
  readonly colorFgWarningWeak: string;
  withColorFgWarningWeak(colorFgWarningWeak: string): UiSdlThemeTemplate;

  /**
   * colorFocus
   */
  readonly colorFocus: string;
  withColorFocus(colorFocus: string): UiSdlThemeTemplate;

  /**
   * componentBackgroundColor
   */
  readonly componentBackgroundColor: string;
  withComponentBackgroundColor(componentBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * componentBackgroundColorError
   */
  readonly componentBackgroundColorError: string;
  withComponentBackgroundColorError(componentBackgroundColorError: string): UiSdlThemeTemplate;

  /**
   * componentBackgroundColorSuccess
   */
  readonly componentBackgroundColorSuccess: string;
  withComponentBackgroundColorSuccess(componentBackgroundColorSuccess: string): UiSdlThemeTemplate;

  /**
   * componentBackgroundColorWarning
   */
  readonly componentBackgroundColorWarning: string;
  withComponentBackgroundColorWarning(componentBackgroundColorWarning: string): UiSdlThemeTemplate;

  /**
   * componentBorderColor
   */
  readonly componentBorderColor: string;
  withComponentBorderColor(componentBorderColor: string): UiSdlThemeTemplate;

  /**
   * componentDividerColor
   */
  readonly componentDividerColor: string;
  withComponentDividerColor(componentDividerColor: string): UiSdlThemeTemplate;

  /**
   * dangerColor
   */
  readonly dangerColor: string;
  withDangerColor(dangerColor: string): UiSdlThemeTemplate;

  /**
   * dateIconColor
   */
  readonly dateIconColor: string;
  withDateIconColor(dateIconColor: string): UiSdlThemeTemplate;

  /**
   * dateIconTextColor
   */
  readonly dateIconTextColor: string;
  withDateIconTextColor(dateIconTextColor: string): UiSdlThemeTemplate;

  /**
   * dropdownDescriptionBackgroundColor
   */
  readonly dropdownDescriptionBackgroundColor: string;
  withDropdownDescriptionBackgroundColor(dropdownDescriptionBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * dropdownDescriptionColor
   */
  readonly dropdownDescriptionColor: string;
  withDropdownDescriptionColor(dropdownDescriptionColor: string): UiSdlThemeTemplate;

  /**
   * dropdownMessageColor
   */
  readonly dropdownMessageColor: string;
  withDropdownMessageColor(dropdownMessageColor: string): UiSdlThemeTemplate;

  /**
   * dropdownOptionDividerColor
   */
  readonly dropdownOptionDividerColor: string;
  withDropdownOptionDividerColor(dropdownOptionDividerColor: string): UiSdlThemeTemplate;

  /**
   * dropdownSelectionColor
   */
  readonly dropdownSelectionColor: string;
  withDropdownSelectionColor(dropdownSelectionColor: string): UiSdlThemeTemplate;

  /**
   * dynamicComponentLoaderBackgroundColor
   */
  readonly dynamicComponentLoaderBackgroundColor: string;
  withDynamicComponentLoaderBackgroundColor(dynamicComponentLoaderBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * expressionFocusedInputBackgroundColor
   */
  readonly expressionFocusedInputBackgroundColor: string;
  withExpressionFocusedInputBackgroundColor(expressionFocusedInputBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * fontColor
   */
  readonly fontColor: string;
  withFontColor(fontColor: string): UiSdlThemeTemplate;

  /**
   * formFieldBackgroundColor
   */
  readonly formFieldBackgroundColor: string;
  withFormFieldBackgroundColor(formFieldBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * formFieldBackgroundColorDisabled
   */
  readonly formFieldBackgroundColorDisabled: string;
  withFormFieldBackgroundColorDisabled(formFieldBackgroundColorDisabled: string): UiSdlThemeTemplate;

  /**
   * formFieldBorderColor
   */
  readonly formFieldBorderColor: string;
  withFormFieldBorderColor(formFieldBorderColor: string): UiSdlThemeTemplate;

  /**
   * formFieldBorderColorDisabled
   */
  readonly formFieldBorderColorDisabled: string;
  withFormFieldBorderColorDisabled(formFieldBorderColorDisabled: string): UiSdlThemeTemplate;

  /**
   * formFieldColorDisabled
   */
  readonly formFieldColorDisabled: string;
  withFormFieldColorDisabled(formFieldColorDisabled: string): UiSdlThemeTemplate;

  /**
   * formFieldColorHint
   */
  readonly formFieldColorHint: string;
  withFormFieldColorHint(formFieldColorHint: string): UiSdlThemeTemplate;

  /**
   * formFieldErrorBorderColor
   */
  readonly formFieldErrorBorderColor: string;
  withFormFieldErrorBorderColor(formFieldErrorBorderColor: string): UiSdlThemeTemplate;

  /**
   * formFieldErrorHoverBorderColor
   */
  readonly formFieldErrorHoverBorderColor: string;
  withFormFieldErrorHoverBorderColor(formFieldErrorHoverBorderColor: string): UiSdlThemeTemplate;

  /**
   * formFieldHeaderColorDisabled
   */
  readonly formFieldHeaderColorDisabled: string;
  withFormFieldHeaderColorDisabled(formFieldHeaderColorDisabled: string): UiSdlThemeTemplate;

  /**
   * formFieldHoverBackgroundColor
   */
  readonly formFieldHoverBackgroundColor: string;
  withFormFieldHoverBackgroundColor(formFieldHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * formFieldHoverBorderColor
   */
  readonly formFieldHoverBorderColor: string;
  withFormFieldHoverBorderColor(formFieldHoverBorderColor: string): UiSdlThemeTemplate;

  /**
   * formFieldLabelErrorColor
   */
  readonly formFieldLabelErrorColor: string;
  withFormFieldLabelErrorColor(formFieldLabelErrorColor: string): UiSdlThemeTemplate;

  /**
   * formFieldLabelFocusColor
   */
  readonly formFieldLabelFocusColor: string;
  withFormFieldLabelFocusColor(formFieldLabelFocusColor: string): UiSdlThemeTemplate;

  /**
   * formFieldSetLinkHoverColor
   */
  readonly formFieldSetLinkHoverColor: string;
  withFormFieldSetLinkHoverColor(formFieldSetLinkHoverColor: string): UiSdlThemeTemplate;

  /**
   * formFieldVariantBorderColor
   */
  readonly formFieldVariantBorderColor: string;
  withFormFieldVariantBorderColor(formFieldVariantBorderColor: string): UiSdlThemeTemplate;

  /**
   * gaugeAxisBarColor
   */
  readonly gaugeAxisBarColor: string;
  withGaugeAxisBarColor(gaugeAxisBarColor: string): UiSdlThemeTemplate;

  /**
   * gaugeFontColor
   */
  readonly gaugeFontColor: string;
  withGaugeFontColor(gaugeFontColor: string): UiSdlThemeTemplate;

  /**
   * gaugeProgressBarDefaultColor
   */
  readonly gaugeProgressBarDefaultColor: string;
  withGaugeProgressBarDefaultColor(gaugeProgressBarDefaultColor: string): UiSdlThemeTemplate;

  /**
   * gradientLinearCardParentLeft
   */
  readonly gradientLinearCardParentLeft: string;
  withGradientLinearCardParentLeft(gradientLinearCardParentLeft: string): UiSdlThemeTemplate;

  /**
   * gradientLinearCardParentRight
   */
  readonly gradientLinearCardParentRight: string;
  withGradientLinearCardParentRight(gradientLinearCardParentRight: string): UiSdlThemeTemplate;

  /**
   * gradientLinearCardChildLeft
   */
  readonly gradientLinearCardChildLeft: string;
  withGradientLinearCardChildLeft(gradientLinearCardChildLeft: string): UiSdlThemeTemplate;

  /**
   * gradientLinearCardChildRight
   */
  readonly gradientLinearCardChildRight: string;
  withGradientLinearCardChildRight(gradientLinearCardChildRight: string): UiSdlThemeTemplate;

  /**
   * gradientLinearNav
   */
  readonly gradientLinearNav: string;
  withGradientLinearNav(gradientLinearNav: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationClusterNodeFillColor
   */
  readonly graphVisualizationClusterNodeFillColor: string;
  withGraphVisualizationClusterNodeFillColor(graphVisualizationClusterNodeFillColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationClusterNodeOutlineColor
   */
  readonly graphVisualizationClusterNodeOutlineColor: string;
  withGraphVisualizationClusterNodeOutlineColor(graphVisualizationClusterNodeOutlineColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationGlyphFontColor
   */
  readonly graphVisualizationGlyphFontColor: string;
  withGraphVisualizationGlyphFontColor(graphVisualizationGlyphFontColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationLegendBackgroundColor
   */
  readonly graphVisualizationLegendBackgroundColor: string;
  withGraphVisualizationLegendBackgroundColor(graphVisualizationLegendBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationLegendViewMoreButtonFontColor
   */
  readonly graphVisualizationLegendViewMoreButtonFontColor: string;
  withGraphVisualizationLegendViewMoreButtonFontColor(graphVisualizationLegendViewMoreButtonFontColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationMapTheme
   */
  readonly graphVisualizationMapTheme: string;
  withGraphVisualizationMapTheme(graphVisualizationMapTheme: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationMergedEdgeGlyphBackgroundColor
   */
  readonly graphVisualizationMergedEdgeGlyphBackgroundColor: string;
  withGraphVisualizationMergedEdgeGlyphBackgroundColor(graphVisualizationMergedEdgeGlyphBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationNodeDefaultDonutColor
   */
  readonly graphVisualizationNodeDefaultDonutColor: string;
  withGraphVisualizationNodeDefaultDonutColor(graphVisualizationNodeDefaultDonutColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationNodeInfoGlyphBackgroundColor
   */
  readonly graphVisualizationNodeInfoGlyphBackgroundColor: string;
  withGraphVisualizationNodeInfoGlyphBackgroundColor(graphVisualizationNodeInfoGlyphBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationNodeInfoGlyphFontColor
   */
  readonly graphVisualizationNodeInfoGlyphFontColor: string;
  withGraphVisualizationNodeInfoGlyphFontColor(graphVisualizationNodeInfoGlyphFontColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationPercentageDonutSegmentColor
   */
  readonly graphVisualizationPercentageDonutSegmentColor: string;
  withGraphVisualizationPercentageDonutSegmentColor(graphVisualizationPercentageDonutSegmentColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationTimeBarBackgroundColor
   */
  readonly graphVisualizationTimeBarBackgroundColor: string;
  withGraphVisualizationTimeBarBackgroundColor(graphVisualizationTimeBarBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationTimeBarColor
   */
  readonly graphVisualizationTimeBarColor: string;
  withGraphVisualizationTimeBarColor(graphVisualizationTimeBarColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationTimeBarHoverColor
   */
  readonly graphVisualizationTimeBarHoverColor: string;
  withGraphVisualizationTimeBarHoverColor(graphVisualizationTimeBarHoverColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationTimeBarScaleHoverColor
   */
  readonly graphVisualizationTimeBarScaleHoverColor: string;
  withGraphVisualizationTimeBarScaleHoverColor(graphVisualizationTimeBarScaleHoverColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationTooltipBackgroundColor
   */
  readonly graphVisualizationTooltipBackgroundColor: string;
  withGraphVisualizationTooltipBackgroundColor(graphVisualizationTooltipBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationTooltipBodyColor
   */
  readonly graphVisualizationTooltipBodyColor: string;
  withGraphVisualizationTooltipBodyColor(graphVisualizationTooltipBodyColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationTooltipSubtitleColor
   */
  readonly graphVisualizationTooltipSubtitleColor: string;
  withGraphVisualizationTooltipSubtitleColor(graphVisualizationTooltipSubtitleColor: string): UiSdlThemeTemplate;

  /**
   * graphVisualizationTooltipTitleColor
   */
  readonly graphVisualizationTooltipTitleColor: string;
  withGraphVisualizationTooltipTitleColor(graphVisualizationTooltipTitleColor: string): UiSdlThemeTemplate;

  /**
   * gridCellColorWheelBackgroundColor
   */
  readonly gridCellColorWheelBackgroundColor: string;
  withGridCellColorWheelBackgroundColor(gridCellColorWheelBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * gridHeaderFontColor
   */
  readonly gridHeaderFontColor: string;
  withGridHeaderFontColor(gridHeaderFontColor: string): UiSdlThemeTemplate;

  /**
   * gridHoverBackgroundColor
   */
  readonly gridHoverBackgroundColor: string;
  withGridHoverBackgroundColor(gridHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * gridMessageBackgroundColor
   */
  readonly gridMessageBackgroundColor: string;
  withGridMessageBackgroundColor(gridMessageBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * gridPagerLabelFontColor
   */
  readonly gridPagerLabelFontColor: string;
  withGridPagerLabelFontColor(gridPagerLabelFontColor: string): UiSdlThemeTemplate;

  /**
   * gridPagerSizesFontColor
   */
  readonly gridPagerSizesFontColor: string;
  withGridPagerSizesFontColor(gridPagerSizesFontColor: string): UiSdlThemeTemplate;

  /**
   * gridSelectedCellBackgroundColor
   */
  readonly gridSelectedCellBackgroundColor: string;
  withGridSelectedCellBackgroundColor(gridSelectedCellBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * gridSelectedCellBorderColor
   */
  readonly gridSelectedCellBorderColor: string;
  withGridSelectedCellBorderColor(gridSelectedCellBorderColor: string): UiSdlThemeTemplate;

  /**
   * gridSelectedFontColor
   */
  readonly gridSelectedFontColor: string;
  withGridSelectedFontColor(gridSelectedFontColor: string): UiSdlThemeTemplate;

  /**
   * gridSelectedHoverBackgroundColor
   */
  readonly gridSelectedHoverBackgroundColor: string;
  withGridSelectedHoverBackgroundColor(gridSelectedHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * iconGroupColor
   */
  readonly iconGroupColor: string;
  withIconGroupColor(iconGroupColor: string): UiSdlThemeTemplate;

  /**
   * indicatorBarBackgroundColor
   */
  readonly indicatorBarBackgroundColor: string;
  withIndicatorBarBackgroundColor(indicatorBarBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * infoColor
   */
  readonly infoColor: string;
  withInfoColor(infoColor: string): UiSdlThemeTemplate;

  /**
   * invertedComponentBackgroundColor
   */
  readonly invertedComponentBackgroundColor: string;
  withInvertedComponentBackgroundColor(invertedComponentBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * kanbanBoardBackgroundColumnTitle
   */
  readonly kanbanBoardBackgroundColumnTitle: string;
  withKanbanBoardBackgroundColumnTitle(kanbanBoardBackgroundColumnTitle: string): UiSdlThemeTemplate;

  /**
   * kanbanBoardBackgroundItemSlot
   */
  readonly kanbanBoardBackgroundItemSlot: string;
  withKanbanBoardBackgroundItemSlot(kanbanBoardBackgroundItemSlot: string): UiSdlThemeTemplate;

  /**
   * kanbanBoardBackgroundLayout
   */
  readonly kanbanBoardBackgroundLayout: string;
  withKanbanBoardBackgroundLayout(kanbanBoardBackgroundLayout: string): UiSdlThemeTemplate;

  /**
   * kanbanBoardBorderTitle
   */
  readonly kanbanBoardBorderTitle: string;
  withKanbanBoardBorderTitle(kanbanBoardBorderTitle: string): UiSdlThemeTemplate;

  /**
   * kanbanBoardButtonColor
   */
  readonly kanbanBoardButtonColor: string;
  withKanbanBoardButtonColor(kanbanBoardButtonColor: string): UiSdlThemeTemplate;

  /**
   * kanbanBoardCardContentColor
   */
  readonly kanbanBoardCardContentColor: string;
  withKanbanBoardCardContentColor(kanbanBoardCardContentColor: string): UiSdlThemeTemplate;

  /**
   * kanbanBoardCardHeadLineBlockColor
   */
  readonly kanbanBoardCardHeadLineBlockColor: string;
  withKanbanBoardCardHeadLineBlockColor(kanbanBoardCardHeadLineBlockColor: string): UiSdlThemeTemplate;

  /**
   * kanbanBoardContentBackgroundColor
   */
  readonly kanbanBoardContentBackgroundColor: string;
  withKanbanBoardContentBackgroundColor(kanbanBoardContentBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * kanbanBoardTextBackgroundCollectionList
   */
  readonly kanbanBoardTextBackgroundCollectionList: string;
  withKanbanBoardTextBackgroundCollectionList(kanbanBoardTextBackgroundCollectionList: string): UiSdlThemeTemplate;

  /**
   * kanbanBoardTitleColor
   */
  readonly kanbanBoardTitleColor: string;
  withKanbanBoardTitleColor(kanbanBoardTitleColor: string): UiSdlThemeTemplate;

  /**
   * legendBackgroundColor
   */
  readonly legendBackgroundColor: string;
  withLegendBackgroundColor(legendBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * legendNameFontColor
   */
  readonly legendNameFontColor: string;
  withLegendNameFontColor(legendNameFontColor: string): UiSdlThemeTemplate;

  /**
   * logoBlueBackgroundColor
   */
  readonly logoBlueBackgroundColor: string;
  withLogoBlueBackgroundColor(logoBlueBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * logoChocoBackgroundColor
   */
  readonly logoChocoBackgroundColor: string;
  withLogoChocoBackgroundColor(logoChocoBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * logoColor
   */
  readonly logoColor: string;
  withLogoColor(logoColor: string): UiSdlThemeTemplate;

  /**
   * logoCyanBackgroundColor
   */
  readonly logoCyanBackgroundColor: string;
  withLogoCyanBackgroundColor(logoCyanBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * logoForestBackgroundColor
   */
  readonly logoForestBackgroundColor: string;
  withLogoForestBackgroundColor(logoForestBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * logoIconUrl
   */
  readonly logoIconUrl: string;
  withLogoIconUrl(logoIconUrl: string): UiSdlThemeTemplate;

  /**
   * emptyStateIconUrl
   */
  readonly emptyStateIconUrl: string;
  withEmptyStateIconUrl(emptyStateIconUrl: string): UiSdlThemeTemplate;

  /**
   * logoLimeBackgroundColor
   */
  readonly logoLimeBackgroundColor: string;
  withLogoLimeBackgroundColor(logoLimeBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * logoOliveBackgroundColor
   */
  readonly logoOliveBackgroundColor: string;
  withLogoOliveBackgroundColor(logoOliveBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * logoOrangeBackgroundColor
   */
  readonly logoOrangeBackgroundColor: string;
  withLogoOrangeBackgroundColor(logoOrangeBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * logoPlumBackgroundColor
   */
  readonly logoPlumBackgroundColor: string;
  withLogoPlumBackgroundColor(logoPlumBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * logoPurpleBackgroundColor
   */
  readonly logoPurpleBackgroundColor: string;
  withLogoPurpleBackgroundColor(logoPurpleBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * logoSlateBackgroundColor
   */
  readonly logoSlateBackgroundColor: string;
  withLogoSlateBackgroundColor(logoSlateBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * mapMarkerClusterColor
   */
  readonly mapMarkerClusterColor: string;
  withMapMarkerClusterColor(mapMarkerClusterColor: string): UiSdlThemeTemplate;

  /**
   * mapTooltipAdditionalFieldsDescriptionFontColor
   */
  readonly mapTooltipAdditionalFieldsDescriptionFontColor: string;
  withMapTooltipAdditionalFieldsDescriptionFontColor(mapTooltipAdditionalFieldsDescriptionFontColor: string): UiSdlThemeTemplate;

  /**
   * mapTooltipAdditionalFieldsHeaderFontColor
   */
  readonly mapTooltipAdditionalFieldsHeaderFontColor: string;
  withMapTooltipAdditionalFieldsHeaderFontColor(mapTooltipAdditionalFieldsHeaderFontColor: string): UiSdlThemeTemplate;

  /**
   * mapTooltipHeaderFontColor
   */
  readonly mapTooltipHeaderFontColor: string;
  withMapTooltipHeaderFontColor(mapTooltipHeaderFontColor: string): UiSdlThemeTemplate;

  /**
   * mapTooltipSubHeaderFontColor
   */
  readonly mapTooltipSubHeaderFontColor: string;
  withMapTooltipSubHeaderFontColor(mapTooltipSubHeaderFontColor: string): UiSdlThemeTemplate;

  /**
   * menuActiveColor
   */
  readonly menuActiveColor: string;
  withMenuActiveColor(menuActiveColor: string): UiSdlThemeTemplate;

  /**
   * menuBackgroundActiveColor
   */
  readonly menuBackgroundActiveColor: string;
  withMenuBackgroundActiveColor(menuBackgroundActiveColor: string): UiSdlThemeTemplate;

  /**
   * menuBackgroundColor
   */
  readonly menuBackgroundColor: string;
  withMenuBackgroundColor(menuBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * menuDividerColor
   */
  readonly menuDividerColor: string;
  withMenuDividerColor(menuDividerColor: string): UiSdlThemeTemplate;

  /**
   * menuHoverColor
   */
  readonly menuHoverColor: string;
  withMenuHoverColor(menuHoverColor: string): UiSdlThemeTemplate;

  /**
   * menuItemActiveColor
   */
  readonly menuItemActiveColor: string;
  withMenuItemActiveColor(menuItemActiveColor: string): UiSdlThemeTemplate;

  /**
   * menuItemBackgroundColor
   */
  readonly menuItemBackgroundColor: string;
  withMenuItemBackgroundColor(menuItemBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * menuItemBackgroundHoverColor
   */
  readonly menuItemBackgroundHoverColor: string;
  withMenuItemBackgroundHoverColor(menuItemBackgroundHoverColor: string): UiSdlThemeTemplate;

  /**
   * menuItemHoverColor
   */
  readonly menuItemHoverColor: string;
  withMenuItemHoverColor(menuItemHoverColor: string): UiSdlThemeTemplate;

  /**
   * menuPrimaryColor
   */
  readonly menuPrimaryColor: string;
  withMenuPrimaryColor(menuPrimaryColor: string): UiSdlThemeTemplate;

  /**
   * numberIconColor
   */
  readonly numberIconColor: string;
  withNumberIconColor(numberIconColor: string): UiSdlThemeTemplate;

  /**
   * numberIconTextColor
   */
  readonly numberIconTextColor: string;
  withNumberIconTextColor(numberIconTextColor: string): UiSdlThemeTemplate;

  /**
   * objectIconColor
   */
  readonly objectIconColor: string;
  withObjectIconColor(objectIconColor: string): UiSdlThemeTemplate;

  /**
   * objectIconTextColor
   */
  readonly objectIconTextColor: string;
  withObjectIconTextColor(objectIconTextColor: string): UiSdlThemeTemplate;

  /**
   * opacity00
   */
  readonly opacity00: string;
  withOpacity00(opacity00: string): UiSdlThemeTemplate;

  /**
   * opacity05
   */
  readonly opacity05: string;
  withOpacity05(opacity05: string): UiSdlThemeTemplate;

  /**
   * opacity10
   */
  readonly opacity10: string;
  withOpacity10(opacity10: string): UiSdlThemeTemplate;

  /**
   * opacity20
   */
  readonly opacity20: string;
  withOpacity20(opacity20: string): UiSdlThemeTemplate;

  /**
   * opacity30
   */
  readonly opacity30: string;
  withOpacity30(opacity30: string): UiSdlThemeTemplate;

  /**
   * opacity40
   */
  readonly opacity40: string;
  withOpacity40(opacity40: string): UiSdlThemeTemplate;

  /**
   * opacity50
   */
  readonly opacity50: string;
  withOpacity50(opacity50: string): UiSdlThemeTemplate;

  /**
   * opacity60
   */
  readonly opacity60: string;
  withOpacity60(opacity60: string): UiSdlThemeTemplate;

  /**
   * opacity70
   */
  readonly opacity70: string;
  withOpacity70(opacity70: string): UiSdlThemeTemplate;

  /**
   * opacity80
   */
  readonly opacity80: string;
  withOpacity80(opacity80: string): UiSdlThemeTemplate;

  /**
   * opacity90
   */
  readonly opacity90: string;
  withOpacity90(opacity90: string): UiSdlThemeTemplate;

  /**
   * opacity95
   */
  readonly opacity95: string;
  withOpacity95(opacity95: string): UiSdlThemeTemplate;

  /**
   * opacity100
   */
  readonly opacity100: string;
  withOpacity100(opacity100: string): UiSdlThemeTemplate;

  /**
   * opacityDisabled
   */
  readonly opacityDisabled: string;
  withOpacityDisabled(opacityDisabled: string): UiSdlThemeTemplate;

  /**
   * opacityLoading
   */
  readonly opacityLoading: string;
  withOpacityLoading(opacityLoading: string): UiSdlThemeTemplate;

  /**
   * otherIconColor
   */
  readonly otherIconColor: string;
  withOtherIconColor(otherIconColor: string): UiSdlThemeTemplate;

  /**
   * otherIconTextColor
   */
  readonly otherIconTextColor: string;
  withOtherIconTextColor(otherIconTextColor: string): UiSdlThemeTemplate;

  /**
   * pageBackgroundColor
   */
  readonly pageBackgroundColor: string;
  withPageBackgroundColor(pageBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * pageTitleBoxShadowColor
   */
  readonly pageTitleBoxShadowColor: string;
  withPageTitleBoxShadowColor(pageTitleBoxShadowColor: string): UiSdlThemeTemplate;

  /**
   * referenceIconColor
   */
  readonly referenceIconColor: string;
  withReferenceIconColor(referenceIconColor: string): UiSdlThemeTemplate;

  /**
   * referenceIconTextColor
   */
  readonly referenceIconTextColor: string;
  withReferenceIconTextColor(referenceIconTextColor: string): UiSdlThemeTemplate;

  /**
   * resetZoomIconPath
   */
  readonly resetZoomIconPath: string;
  withResetZoomIconPath(resetZoomIconPath: string): UiSdlThemeTemplate;

  /**
   * resetZoomIconUrl
   */
  readonly resetZoomIconUrl: string;
  withResetZoomIconUrl(resetZoomIconUrl: string): UiSdlThemeTemplate;

  /**
   * resetZoomIconColor
   */
  readonly resetZoomIconColor: string;
  withResetZoomIconColor(resetZoomIconColor: string): UiSdlThemeTemplate;

  /**
   * sankeyChartLabelBackgroundColor
   */
  readonly sankeyChartLabelBackgroundColor: string;
  withSankeyChartLabelBackgroundColor(sankeyChartLabelBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * scrollbarThumbColor
   */
  readonly scrollbarThumbColor: string;
  withScrollbarThumbColor(scrollbarThumbColor: string): UiSdlThemeTemplate;

  /**
   * scrollbarTrackColor
   */
  readonly scrollbarTrackColor: string;
  withScrollbarTrackColor(scrollbarTrackColor: string): UiSdlThemeTemplate;

  /**
   * secondaryFontColor
   */
  readonly secondaryFontColor: string;
  withSecondaryFontColor(secondaryFontColor: string): UiSdlThemeTemplate;

  /**
   * secondaryVariantFontColor
   */
  readonly secondaryVariantFontColor: string;
  withSecondaryVariantFontColor(secondaryVariantFontColor: string): UiSdlThemeTemplate;

  /**
   * selectFieldPillActiveBackgroundColor
   */
  readonly selectFieldPillActiveBackgroundColor: string;
  withSelectFieldPillActiveBackgroundColor(selectFieldPillActiveBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * selectFieldPillHoverBackgroundColor
   */
  readonly selectFieldPillHoverBackgroundColor: string;
  withSelectFieldPillHoverBackgroundColor(selectFieldPillHoverBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * selectFieldPillTextColor
   */
  readonly selectFieldPillTextColor: string;
  withSelectFieldPillTextColor(selectFieldPillTextColor: string): UiSdlThemeTemplate;

  /**
   * selectionBackgroundColor
   */
  readonly selectionBackgroundColor: string;
  withSelectionBackgroundColor(selectionBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * sidePanelSubtitleColor
   */
  readonly sidePanelSubtitleColor: string;
  withSidePanelSubtitleColor(sidePanelSubtitleColor: string): UiSdlThemeTemplate;

  /**
   * stringIconColor
   */
  readonly stringIconColor: string;
  withStringIconColor(stringIconColor: string): UiSdlThemeTemplate;

  /**
   * stringIconTextColor
   */
  readonly stringIconTextColor: string;
  withStringIconTextColor(stringIconTextColor: string): UiSdlThemeTemplate;

  /**
   * subMenuItemBackgroundActiveColor
   */
  readonly subMenuItemBackgroundActiveColor: string;
  withSubMenuItemBackgroundActiveColor(subMenuItemBackgroundActiveColor: string): UiSdlThemeTemplate;

  /**
   * successColor
   */
  readonly successColor: string;
  withSuccessColor(successColor: string): UiSdlThemeTemplate;

  /**
   * timeGraphBackgroundColor
   */
  readonly timeGraphBackgroundColor: string;
  withTimeGraphBackgroundColor(timeGraphBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * timeGraphDefaultEntityColor
   */
  readonly timeGraphDefaultEntityColor: string;
  withTimeGraphDefaultEntityColor(timeGraphDefaultEntityColor: string): UiSdlThemeTemplate;

  /**
   * timeGraphDefaultLabelColor
   */
  readonly timeGraphDefaultLabelColor: string;
  withTimeGraphDefaultLabelColor(timeGraphDefaultLabelColor: string): UiSdlThemeTemplate;

  /**
   * timeGraphHighlightColor
   */
  readonly timeGraphHighlightColor: string;
  withTimeGraphHighlightColor(timeGraphHighlightColor: string): UiSdlThemeTemplate;

  /**
   * timeGraphScaleBackgroundColor
   */
  readonly timeGraphScaleBackgroundColor: string;
  withTimeGraphScaleBackgroundColor(timeGraphScaleBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * timeGraphScaleBorderColor
   */
  readonly timeGraphScaleBorderColor: string;
  withTimeGraphScaleBorderColor(timeGraphScaleBorderColor: string): UiSdlThemeTemplate;

  /**
   * timeGraphScaleFontColor
   */
  readonly timeGraphScaleFontColor: string;
  withTimeGraphScaleFontColor(timeGraphScaleFontColor: string): UiSdlThemeTemplate;

  /**
   * timeGraphScaleFontSize
   */
  readonly timeGraphScaleFontSize: string;
  withTimeGraphScaleFontSize(timeGraphScaleFontSize: string): UiSdlThemeTemplate;

  /**
   * timeGraphTooltipBackgroundColor
   */
  readonly timeGraphTooltipBackgroundColor: string;
  withTimeGraphTooltipBackgroundColor(timeGraphTooltipBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * timeGraphTooltipBodyColor
   */
  readonly timeGraphTooltipBodyColor: string;
  withTimeGraphTooltipBodyColor(timeGraphTooltipBodyColor: string): UiSdlThemeTemplate;

  /**
   * timeGraphTooltipSubtitleColor
   */
  readonly timeGraphTooltipSubtitleColor: string;
  withTimeGraphTooltipSubtitleColor(timeGraphTooltipSubtitleColor: string): UiSdlThemeTemplate;

  /**
   * timeGraphTooltipTitleColor
   */
  readonly timeGraphTooltipTitleColor: string;
  withTimeGraphTooltipTitleColor(timeGraphTooltipTitleColor: string): UiSdlThemeTemplate;

  /**
   * timeSeriesIconColor
   */
  readonly timeSeriesIconColor: string;
  withTimeSeriesIconColor(timeSeriesIconColor: string): UiSdlThemeTemplate;

  /**
   * timeSeriesIconTextColor
   */
  readonly timeSeriesIconTextColor: string;
  withTimeSeriesIconTextColor(timeSeriesIconTextColor: string): UiSdlThemeTemplate;

  /**
   * toggleSwitchBackgroundColor
   */
  readonly toggleSwitchBackgroundColor: string;
  withToggleSwitchBackgroundColor(toggleSwitchBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * toggleSwitchBorderColor
   */
  readonly toggleSwitchBorderColor: string;
  withToggleSwitchBorderColor(toggleSwitchBorderColor: string): UiSdlThemeTemplate;

  /**
   * toggleSwitchCheckedBorderColor
   */
  readonly toggleSwitchCheckedBorderColor: string;
  withToggleSwitchCheckedBorderColor(toggleSwitchCheckedBorderColor: string): UiSdlThemeTemplate;

  /**
   * toggleSwitchCheckedColor
   */
  readonly toggleSwitchCheckedColor: string;
  withToggleSwitchCheckedColor(toggleSwitchCheckedColor: string): UiSdlThemeTemplate;

  /**
   * toggleSwitchCheckedDisabledBackgroundColor
   */
  readonly toggleSwitchCheckedDisabledBackgroundColor: string;
  withToggleSwitchCheckedDisabledBackgroundColor(toggleSwitchCheckedDisabledBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * toggleSwitchCheckedDisabledBorderColor
   */
  readonly toggleSwitchCheckedDisabledBorderColor: string;
  withToggleSwitchCheckedDisabledBorderColor(toggleSwitchCheckedDisabledBorderColor: string): UiSdlThemeTemplate;

  /**
   * toggleSwitchCheckedDisabledColor
   */
  readonly toggleSwitchCheckedDisabledColor: string;
  withToggleSwitchCheckedDisabledColor(toggleSwitchCheckedDisabledColor: string): UiSdlThemeTemplate;

  /**
   * toggleSwitchColor
   */
  readonly toggleSwitchColor: string;
  withToggleSwitchColor(toggleSwitchColor: string): UiSdlThemeTemplate;

  /**
   * toggleSwitchDisabledBackgroundColor
   */
  readonly toggleSwitchDisabledBackgroundColor: string;
  withToggleSwitchDisabledBackgroundColor(toggleSwitchDisabledBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * toggleSwitchDisabledBorderColor
   */
  readonly toggleSwitchDisabledBorderColor: string;
  withToggleSwitchDisabledBorderColor(toggleSwitchDisabledBorderColor: string): UiSdlThemeTemplate;

  /**
   * toggleSwitchDisabledColor
   */
  readonly toggleSwitchDisabledColor: string;
  withToggleSwitchDisabledColor(toggleSwitchDisabledColor: string): UiSdlThemeTemplate;

  /**
   * tooltipBackgroundColor
   */
  readonly tooltipBackgroundColor: string;
  withTooltipBackgroundColor(tooltipBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * warningColor
   */
  readonly warningColor: string;
  withWarningColor(warningColor: string): UiSdlThemeTemplate;

  /**
   * zebraStripeBackgroundColor
   */
  readonly zebraStripeBackgroundColor: string;
  withZebraStripeBackgroundColor(zebraStripeBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * Additional CSS filter to apply on the buttons of the grid pagination
   * Allows to make Kendo v7 SVG buttons white in the dark theme
   */
  readonly gridPaginationButtonFilter?: string;
  withGridPaginationButtonFilter(gridPaginationButtonFilter: string | null): UiSdlThemeTemplate;

  /**
   * Background color for a read only input
   */
  readonly colorBgInputReadOnly: string;
  withColorBgInputReadOnly(colorBgInputReadOnly: string): UiSdlThemeTemplate;

  /**
   * The background color of a source component.
   */
  readonly sourceBackgroundColor: string;
  withSourceBackgroundColor(sourceBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * Blue background color
   */
  readonly blueBackgroundColor: string;
  withBlueBackgroundColor(blueBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * The border color of a source component.
   */
  readonly sourceBorderColor: string;
  withSourceBorderColor(sourceBorderColor: string): UiSdlThemeTemplate;

  /**
   * The color of visited links.
   */
  readonly visitedLinkColor: string;
  withVisitedLinkColor(visitedLinkColor: string): UiSdlThemeTemplate;

  /**
   * The background color of highlighted text.
   */
  readonly textHighlightColor: string;
  withTextHighlightColor(textHighlightColor: string): UiSdlThemeTemplate;

  /**
   * Blue font color
   */
  readonly blueFontColor: string;
  withBlueFontColor(blueFontColor: string): UiSdlThemeTemplate;

  /**
   * Neutral background color
   */
  readonly neutralBackgroundColor: string;
  withNeutralBackgroundColor(neutralBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * Filter to apply to the Nav Menu Logo
   */
  readonly menuLogoFilter: string;
  withMenuLogoFilter(menuLogoFilter: string): UiSdlThemeTemplate;

  /**
   * Highlight text color when corroboration is contradictory
   */
  readonly corroborationHighlight: string;
  withCorroborationHighlight(corroborationHighlight: string): UiSdlThemeTemplate;

  /**
   * Color for the chat banner above the text box
   */
  readonly chatBannerColor: string;
  withChatBannerColor(chatBannerColor: string): UiSdlThemeTemplate;

  /**
   * Background color for server messages in the chat box component.
   */
  readonly serverMessageBackgroundColor: string;
  withServerMessageBackgroundColor(serverMessageBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * Neutral font color
   */
  readonly neutralFontColor: string;
  withNeutralFontColor(neutralFontColor: string): UiSdlThemeTemplate;

  /**
   * Color for the training banners
   */
  readonly contextualBannerColor: string;
  withContextualBannerColor(contextualBannerColor: string): UiSdlThemeTemplate;

  /**
   * Background color for the search page.
   */
  readonly searchPageBackgroundColor: string;
  withSearchPageBackgroundColor(searchPageBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * Color for box shadows
   */
  readonly boxShadowColor: string;
  withBoxShadowColor(boxShadowColor: string): UiSdlThemeTemplate;

  /**
   * Background color for client messages in the chat box component.
   */
  readonly clientMessageBackgroundColor: string;
  withClientMessageBackgroundColor(clientMessageBackgroundColor: string): UiSdlThemeTemplate;

  /**
   * Background color for the search bar.
   */
  readonly searchBarBackgroundColor: string;
  withSearchBarBackgroundColor(searchBarBackgroundColor: string): UiSdlThemeTemplate;

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
  static fromJson(json: any): UiSdlThemeTemplate | null;

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
  static fromJsonString(json: string): UiSdlThemeTemplate | null;

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
  static fromXmlString(xml: string): UiSdlThemeTemplate | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): UiSdlThemeTemplate | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlThemeTemplate;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): UiSdlThemeTemplate;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): UiSdlThemeTemplate;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<UiSdlThemeTemplate>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<UiSdlThemeTemplate>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): UiSdlThemeTemplate;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlThemeTemplate;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlThemeTemplate;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlThemeTemplate;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlThemeTemplate;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlThemeTemplate;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): UiSdlThemeTemplate;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlThemeTemplate;

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
  withoutFieldAtPath(path: string): UiSdlThemeTemplate;

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
  withoutField(field: string): UiSdlThemeTemplate;

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
  withoutField(field: FieldType): UiSdlThemeTemplate;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): UiSdlThemeTemplate;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): UiSdlThemeTemplate;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlThemeTemplate;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): UiSdlThemeTemplate;

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
  defaultField(field: string): UiSdlThemeTemplate;

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
  defaultField(field: FieldType): UiSdlThemeTemplate;

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
  unsetField(field: string): UiSdlThemeTemplate;

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
  unsetField(field: FieldType): UiSdlThemeTemplate;

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
  removeField(field: string): UiSdlThemeTemplate;

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
  removeField(field: FieldType): UiSdlThemeTemplate;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): UiSdlThemeTemplate;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): UiSdlThemeTemplate;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): UiSdlThemeTemplate;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): UiSdlThemeTemplate;

  mergeJson(json: any): UiSdlThemeTemplate;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): UiSdlThemeTemplate;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): UiSdlThemeTemplate;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<UiSdlThemeTemplate>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<UiSdlThemeTemplate> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlThemeTemplate> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<UiSdlThemeTemplate>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlThemeTemplate> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, UiSdlThemeTemplate> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlThemeTemplate> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlThemeTemplate>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlThemeTemplate>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): UiSdlThemeTemplate;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): UiSdlThemeTemplate;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): UiSdlThemeTemplate;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlThemeTemplate;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): UiSdlThemeTemplate;

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
  static make(fields: any, withDefaults?: boolean): UiSdlThemeTemplate;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string): UiSdlThemeTemplate | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): UiSdlThemeTemplate;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): UiSdlThemeTemplate;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlThemeTemplate;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<UiSdlThemeTemplate> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): UiSdlThemeTemplate;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec): FetchResult<UiSdlThemeTemplate>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<UiSdlThemeTemplate>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec): Stream<UiSdlThemeTemplate> | null;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow>;

  /**
   * Fetched multiple obj instances in multiple locales based on specification.
   *
   * @param spec
   *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
   *        type.
   * @return Requested objs where key of map is locale id
   */
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec): Map_Type<string, FetchResult<UiSdlThemeTemplate>> | null;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec): number;

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
  static fetchCountEstimated(spec?: FetchFilterSpec, updateStatistics?: boolean): number;

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
  static batchIds(spec?: BatchIdsSpec): Stream<string> | null;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec): boolean;

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
  singletonMap(): Map_Type<string, WithKey>;

  /**
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): MetadataDeps<UiSdlThemeTemplate>;

  save(subPath?: string, contentType?: string): UiSdlThemeTemplate;

  remove(spec?: UpsertSpec): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string): number;

  update(srcObj?: UiSdlThemeTemplate, spec?: UpsertSpec): UiSdlThemeTemplate | null;

  upsert(srcObj?: UiSdlThemeTemplate, spec?: UpsertSpec): UiSdlThemeTemplate | null;

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
  static fromString(s: string): UiSdlThemeTemplate | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string, failIfMissing?: boolean): UiSdlThemeTemplate | null;
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
