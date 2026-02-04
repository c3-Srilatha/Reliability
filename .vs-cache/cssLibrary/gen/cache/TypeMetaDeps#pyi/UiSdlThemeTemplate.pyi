#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.ScanStats import ScanStats
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.platform.FetchResult import FetchResult
from c3.platform.Meta import Meta
from c3.platform.ScanArrowSpec import ScanArrowSpec
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.platform.WithKey import WithKey
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.FieldType import FieldType
from c3.platform.SetBuilder import SetBuilder
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Stream import Stream
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Filter import Filter
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.SetType import SetType
from c3.platform.ArrowIterator import ArrowIterator
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ScanSpec import ScanSpec
from c3.platform.MetadataDeps import MetadataDeps
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapType import MapType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Exclude import Exclude
from c3.platform.ExistsSpec import ExistsSpec

# Python definitions for the C3 type UiSdlThemeTemplate


class UiSdlThemeTemplate(Metadata, Identified):
    """
    UiSdlThemeTemplate type type exposes theme properties that may be overridden by
    end users by remixing UiSdlDarkTheme and UiSdlLightTheme.
    
    @remarks this represents a made instance of UiSdlThemeTemplate
    """
    
    meta: Optional[Meta]=None
    """
    Various system fields.
    """

    id: Optional[str]
    """
    The unique and required id of this instance.
    """

    isC3: Optional[bool]=None
    """
    Whether this is a C3 type theme template.
    """

    themeCategory: Optional[str]
    """
    Whether this is a Light or a Dark Theme.
    """

    accentColor: Optional[str]
    """
    accentColor
    """

    accentFontColor: Optional[str]
    """
    accentFontColor
    """

    accentVariantColor: Optional[str]
    """
    accentVariantColor
    """

    avatarBadgeBlueBackgroundColor: Optional[str]
    """
    avatarBadgeBlueBackgroundColor
    """

    avatarBadgeBlueColor: Optional[str]
    """
    avatarBadgeBlueColor
    """

    avatarBadgeChocoBackgroundColor: Optional[str]
    """
    avatarBadgeChocoBackgroundColor
    """

    avatarBadgeChocoColor: Optional[str]
    """
    avatarBadgeChocoColor
    """

    avatarBadgeCyanBackgroundColor: Optional[str]
    """
    avatarBadgeCyanBackgroundColor
    """

    avatarBadgeCyanColor: Optional[str]
    """
    avatarBadgeCyanColor
    """

    avatarBadgeForestBackgroundColor: Optional[str]
    """
    avatarBadgeForestBackgroundColor
    """

    avatarBadgeForestColor: Optional[str]
    """
    avatarBadgeForestColor
    """

    avatarBadgeGreenBackgroundColor: Optional[str]
    """
    avatarBadgeGreenBackgroundColor
    """

    avatarBadgeGreenColor: Optional[str]
    """
    avatarBadgeGreenColor
    """

    avatarBadgeLimeBackgroundColor: Optional[str]
    """
    avatarBadgeLimeBackgroundColor
    """

    avatarBadgeLimeColor: Optional[str]
    """
    avatarBadgeLimeColor
    """

    avatarBadgeOliveBackgroundColor: Optional[str]
    """
    avatarBadgeOliveBackgroundColor
    """

    avatarBadgeOliveColor: Optional[str]
    """
    avatarBadgeOliveColor
    """

    avatarBadgeOrangeBackgroundColor: Optional[str]
    """
    avatarBadgeOrangeBackgroundColor
    """

    avatarBadgeOrangeColor: Optional[str]
    """
    avatarBadgeOrangeColor
    """

    avatarBadgePlumBackgroundColor: Optional[str]
    """
    avatarBadgePlumBackgroundColor
    """

    avatarBadgePlumColor: Optional[str]
    """
    avatarBadgePlumColor
    """

    avatarBadgePurpleBackgroundColor: Optional[str]
    """
    avatarBadgePurpleBackgroundColor
    """

    avatarBadgePurpleColor: Optional[str]
    """
    avatarBadgePurpleColor
    """

    avatarBadgeRedBackgroundColor: Optional[str]
    """
    avatarBadgeRedBackgroundColor
    """

    avatarBadgeRedColor: Optional[str]
    """
    avatarBadgeRedColor
    """

    avatarBadgeSlateBackgroundColor: Optional[str]
    """
    avatarBadgeSlateBackgroundColor
    """

    avatarBadgeSlateColor: Optional[str]
    """
    avatarBadgeSlateColor
    """

    avatarBadgeYellowBackgroundColor: Optional[str]
    """
    avatarBadgeYellowBackgroundColor
    """

    avatarBadgeYellowColor: Optional[str]
    """
    avatarBadgeYellowColor
    """

    booleanIconColor: Optional[str]
    """
    booleanIconColor
    """

    booleanIconTextColor: Optional[str]
    """
    booleanIconTextColor
    """

    borderColor: Optional[str]
    """
    borderColor
    """

    boxShadow01: Optional[str]
    """
    boxShadow01
    """

    boxShadow02: Optional[str]
    """
    boxShadow02
    """

    boxShadow03: Optional[str]
    """
    boxShadow03
    """

    boxShadow04: Optional[str]
    """
    boxShadow04
    """

    boxShadow05: Optional[str]
    """
    boxShadow05
    """

    boxShadowCardParent: Optional[str]
    """
    boxShadowCardParent
    """

    boxShadowMenu: Optional[str]
    """
    boxShadowMenu
    """

    boxZoomIconPath: Optional[str]
    """
    boxZoomIconPath
    """

    boxZoomIconUrl: Optional[str]
    """
    boxZoomIconUrl
    """

    boxZoomIconColor: Optional[str]
    """
    boxZoomIconColor
    """

    brightnessActionHover: Optional[str]
    """
    brightnessActionHover
    """

    brightnessActionHoverInverse: Optional[str]
    """
    brightnessActionHoverInverse
    """

    brightnessActionPressed: Optional[str]
    """
    brightnessActionPressed
    """

    brightnessActionPressedInverse: Optional[str]
    """
    brightnessActionPressedInverse
    """

    buttonControlBorderColor: Optional[str]
    """
    buttonControlBorderColor
    """

    buttonControlFontColor: Optional[str]
    """
    buttonControlFontColor
    """

    buttonControlHoverBackgroundColor: Optional[str]
    """
    buttonControlHoverBackgroundColor
    """

    buttonControlSelectedBackgroundColor: Optional[str]
    """
    buttonControlSelectedBackgroundColor
    """

    buttonControlSelectedDisabledBackgroundColor: Optional[str]
    """
    buttonControlSelectedDisabledBackgroundColor
    """

    buttonControlSelectedFontColor: Optional[str]
    """
    buttonControlSelectedFontColor
    """

    buttonControlSelectedHoverBackgroundColor: Optional[str]
    """
    buttonControlSelectedHoverBackgroundColor
    """

    buttonDangerPrimaryActiveBackgroundColor: Optional[str]
    """
    buttonDangerPrimaryActiveBackgroundColor
    """

    buttonDangerPrimaryHoverBackgroundColor: Optional[str]
    """
    buttonDangerPrimaryHoverBackgroundColor
    """

    buttonDangerSecondaryActiveBackgroundColor: Optional[str]
    """
    buttonDangerSecondaryActiveBackgroundColor
    """

    buttonDangerSecondaryHoverBackgroundColor: Optional[str]
    """
    buttonDangerSecondaryHoverBackgroundColor
    """

    buttonDangerTertiaryActiveBackgroundColor: Optional[str]
    """
    buttonDangerTertiaryActiveBackgroundColor
    """

    buttonDangerTertiaryHoverBackgroundColor: Optional[str]
    """
    buttonDangerTertiaryHoverBackgroundColor
    """

    buttonIconActiveBackgroundColor: Optional[str]
    """
    buttonIconActiveBackgroundColor
    """

    buttonIconBackgroundColor: Optional[str]
    """
    buttonIconBackgroundColor
    """

    buttonIconHoverBackgroundColor: Optional[str]
    """
    buttonIconHoverBackgroundColor
    """

    buttonIconSelectedActiveBackgroundColor: Optional[str]
    """
    buttonIconSelectedActiveBackgroundColor
    """

    buttonIconSelectedBackgroundColor: Optional[str]
    """
    buttonIconSelectedBackgroundColor
    """

    buttonIconSelectedForegroundColor: Optional[str]
    """
    buttonIconSelectedForegroundColor
    """

    buttonIconSelectedHoverBackgroundColor: Optional[str]
    """
    buttonIconSelectedHoverBackgroundColor
    """

    buttonPrimaryActiveBackgroundColor: Optional[str]
    """
    buttonPrimaryActiveBackgroundColor
    """

    buttonPrimaryHoverBackgroundColor: Optional[str]
    """
    buttonPrimaryHoverBackgroundColor
    """

    buttonSecondaryActiveBackgroundColor: Optional[str]
    """
    buttonSecondaryActiveBackgroundColor
    """

    buttonSecondaryHoverBackgroundColor: Optional[str]
    """
    buttonSecondaryHoverBackgroundColor
    """

    buttonTertiaryActiveBackgroundColor: Optional[str]
    """
    buttonTertiaryActiveBackgroundColor
    """

    buttonTertiaryHoverBackgroundColor: Optional[str]
    """
    buttonTertiaryHoverBackgroundColor
    """

    canvasBackgroundDotColor: Optional[str]
    """
    canvasBackgroundDotColor
    """

    canvasCyanNodeColor: Optional[str]
    """
    canvasCyanNodeColor
    """

    canvasForestNodeColor: Optional[str]
    """
    canvasForestNodeColor
    """

    canvasNodeBorderColor: Optional[str]
    """
    canvasNodeBorderColor
    """

    canvasNodeErrorBackgroundColor: Optional[str]
    """
    canvasNodeErrorBackgroundColor
    """

    canvasNodeWarningBackgroundColor: Optional[str]
    """
    canvasNodeWarningBackgroundColor
    """

    canvasOrangeIconColor: Optional[str]
    """
    canvasOrangeIconColor
    """

    canvasOrangeNodeColor: Optional[str]
    """
    canvasOrangeNodeColor
    """

    canvasPendingNodeBackgroundColor: Optional[str]
    """
    canvasPendingNodeBackgroundColor
    """

    canvasPendingNodeForegroundColor: Optional[str]
    """
    canvasPendingNodeForegroundColor
    """

    canvasPlumNodeColor: Optional[str]
    """
    canvasPlumNodeColor
    """

    canvasPurpleIconColor: Optional[str]
    """
    canvasPurpleIconColor
    """

    canvasPurpleNodeColor: Optional[str]
    """
    canvasPurpleNodeColor
    """

    canvasSlateIconColor: Optional[str]
    """
    canvasSlateIconColor
    """

    canvasSlateNodeColor: Optional[str]
    """
    canvasSlateNodeColor
    """

    cardElevation00BackgroundColor: Optional[str]
    """
    cardElevation00BackgroundColor
    """

    cardElevation01BackgroundColor: Optional[str]
    """
    cardElevation01BackgroundColor
    """

    cardElevation02BackgroundColor: Optional[str]
    """
    cardElevation02BackgroundColor
    """

    cardElevation03BackgroundColor: Optional[str]
    """
    cardElevation03BackgroundColor
    """

    cardElevation04BackgroundColor: Optional[str]
    """
    cardElevation04BackgroundColor
    """

    cardElevation06BackgroundColor: Optional[str]
    """
    cardElevation06BackgroundColor
    """

    cardElevation08BackgroundColor: Optional[str]
    """
    cardElevation08BackgroundColor
    """

    cardElevation12BackgroundColor: Optional[str]
    """
    cardElevation12BackgroundColor
    """

    cardElevation16BackgroundColor: Optional[str]
    """
    cardElevation16BackgroundColor
    """

    cardElevation24BackgroundColor: Optional[str]
    """
    cardElevation24BackgroundColor
    """

    chartSeriesTooltipNameFontColor: Optional[str]
    """
    chartSeriesTooltipNameFontColor
    """

    chartSeriesTooltipTitleFontColor: Optional[str]
    """
    chartSeriesTooltipTitleFontColor
    """

    chartSeriesTooltipValueFontColor: Optional[str]
    """
    chartSeriesTooltipValueFontColor
    """

    checkboxBackgroundColor: Optional[str]
    """
    checkboxBackgroundColor
    """

    checkboxColor: Optional[str]
    """
    checkboxColor
    """

    checkboxHoverBackgroundColor: Optional[str]
    """
    checkboxHoverBackgroundColor
    """

    checkboxHoverColor: Optional[str]
    """
    checkboxHoverColor
    """

    checkboxSelectedDisabledColor: Optional[str]
    """
    checkboxSelectedDisabledColor
    """

    checkboxSelectedHoverColor: Optional[str]
    """
    checkboxSelectedHoverColor
    """

    colorBgAccent: Optional[str]
    """
    colorBgAccent
    """

    colorBgAccentWeak: Optional[str]
    """
    colorBgAccentWeak
    """

    colorBgActionHover: Optional[str]
    """
    colorBgActionHover
    """

    colorBgActionHoverInverse: Optional[str]
    """
    colorBgActionHoverInverse
    """

    colorBgActionPressed: Optional[str]
    """
    colorBgActionPressed
    """

    colorBgActionPressedInverse: Optional[str]
    """
    colorBgActionPressedInverse
    """

    colorBgAvatarDefault: Optional[str]
    """
    colorBgAvatarDefault
    """

    colorBgBtnAccentFill: Optional[str]
    """
    colorBgBtnAccentFill
    """

    colorBgBtnDangerFill: Optional[str]
    """
    colorBgBtnDangerFill
    """

    colorBgBtnPrimaryFill: Optional[str]
    """
    colorBgBtnPrimaryFill
    """

    colorBgCardChildPrimary: Optional[str]
    """
    colorBgCardChildPrimary
    """

    colorBgCardChildSecondary: Optional[str]
    """
    colorBgCardChildSecondary
    """

    colorBgCardParent: Optional[str]
    """
    colorBgCardParent
    """

    colorBgContainer01: Optional[str]
    """
    colorBgContainer01
    """

    colorBgContainer02: Optional[str]
    """
    colorBgContainer02
    """

    colorBgDanger: Optional[str]
    """
    colorBgDanger
    """

    colorBgDangerWeak: Optional[str]
    """
    colorBgDangerWeak
    """

    colorBgDataGridHover: Optional[str]
    """
    colorBgDataGridHover
    """

    colorBgDataGridZebraStripe: Optional[str]
    """
    colorBgDataGridZebraStripe
    """

    colorBgDataZoomSliderFilter: Optional[str]
    """
    colorBgDataZoomSliderFilter
    """

    colorBgDataZoomSparkline: Optional[str]
    """
    colorBgDataZoomSparkline
    """

    colorBgDecoOrangeStrong: Optional[str]
    """
    colorBgDecoOrangeStrong
    """

    colorBgDecoOrange: Optional[str]
    """
    colorBgDecoOrange
    """

    colorBgDecoOrangeWeak: Optional[str]
    """
    colorBgDecoOrangeWeak
    """

    colorBgDecoOliveStrong: Optional[str]
    """
    colorBgDecoOliveStrong
    """

    colorBgDecoOlive: Optional[str]
    """
    colorBgDecoOlive
    """

    colorBgDecoOliveWeak: Optional[str]
    """
    colorBgDecoOliveWeak
    """

    colorBgDecoLimeStrong: Optional[str]
    """
    colorBgDecoLimeStrong
    """

    colorBgDecoLime: Optional[str]
    """
    colorBgDecoLime
    """

    colorBgDecoLimeWeak: Optional[str]
    """
    colorBgDecoLimeWeak
    """

    colorBgDecoForestStrong: Optional[str]
    """
    colorBgDecoForestStrong
    """

    colorBgDecoForest: Optional[str]
    """
    colorBgDecoForest
    """

    colorBgDecoForestWeak: Optional[str]
    """
    colorBgDecoForestWeak
    """

    colorBgDecoCyanStrong: Optional[str]
    """
    colorBgDecoCyanStrong
    """

    colorBgDecoCyan: Optional[str]
    """
    colorBgDecoCyan
    """

    colorBgDecoCyanWeak: Optional[str]
    """
    colorBgDecoCyanWeak
    """

    colorBgDecoSlateStrong: Optional[str]
    """
    colorBgDecoSlateStrong
    """

    colorBgDecoSlate: Optional[str]
    """
    colorBgDecoSlate
    """

    colorBgDecoSlateWeak: Optional[str]
    """
    colorBgDecoSlateWeak
    """

    colorBgDecoPurpleStrong: Optional[str]
    """
    colorBgDecoPurpleStrong
    """

    colorBgDecoPurple: Optional[str]
    """
    colorBgDecoPurple
    """

    colorBgDecoPurpleWeak: Optional[str]
    """
    colorBgDecoPurpleWeak
    """

    colorBgDecoPlumStrong: Optional[str]
    """
    colorBgDecoPlumStrong
    """

    colorBgDecoPlum: Optional[str]
    """
    colorBgDecoPlum
    """

    colorBgDecoPlumWeak: Optional[str]
    """
    colorBgDecoPlumWeak
    """

    colorBgDecoChocoStrong: Optional[str]
    """
    colorBgDecoChocoStrong
    """

    colorBgDecoChoco: Optional[str]
    """
    colorBgDecoChoco
    """

    colorBgDecoChocoWeak: Optional[str]
    """
    colorBgDecoChocoWeak
    """

    colorFgInputPlaceholder: Optional[str]
    """
    colorFgInputPlaceholder
    """

    colorBorderDataZoomSparkline: Optional[str]
    """
    colorBorderDataZoomSparkline
    """

    colorBgInlineNotificationError: Optional[str]
    """
    colorBgInlineNotificationError
    """

    colorBgInlineNotificationSuccess: Optional[str]
    """
    colorBgInlineNotificationSuccess
    """

    colorBgInlineNotificationWarning: Optional[str]
    """
    colorBgInlineNotificationWarning
    """

    colorBgInputReadonly: Optional[str]
    """
    colorBgInputReadonly
    """

    colorBgMenu: Optional[str]
    """
    colorBgMenu
    """

    colorBgMenuHoverUnselected: Optional[str]
    """
    colorBgMenuHoverUnselected
    """

    colorBgMenuItemSelected: Optional[str]
    """
    colorBgMenuItemSelected
    """

    colorBgPage: Optional[str]
    """
    colorBgPage
    """

    colorBgPrimary: Optional[str]
    """
    colorBgPrimary
    """

    colorBgPrimaryInverse: Optional[str]
    """
    colorBgPrimaryInverse
    """

    colorBgContentFrame: Optional[str]
    """
    colorBgContentFrame
    """

    colorBgCoreAccentStrong: Optional[str]
    """
    colorBgCoreAccentStrong
    """

    colorBgCoreAccent: Optional[str]
    """
    colorBgCoreAccent
    """

    colorBgCoreAccentWeak: Optional[str]
    """
    colorBgCoreAccentWeak
    """

    colorBgCoreDangerStrong: Optional[str]
    """
    colorBgCoreDangerStrong
    """

    colorBgCoreDanger: Optional[str]
    """
    colorBgCoreDanger
    """

    colorBgCoreDangerWeak: Optional[str]
    """
    colorBgCoreDangerWeak
    """

    colorBgCoreSuccessStrong: Optional[str]
    """
    colorBgCoreSuccessStrong
    """

    colorBgCoreSuccess: Optional[str]
    """
    colorBgCoreSuccess
    """

    colorBgCoreSuccessWeak: Optional[str]
    """
    colorBgCoreSuccessWeak
    """

    colorBgCoreWarningStrong: Optional[str]
    """
    colorBgCoreWarningStrong
    """

    colorBgCoreWarning: Optional[str]
    """
    colorBgCoreWarning
    """

    colorBgCoreWarningWeak: Optional[str]
    """
    colorBgCoreWarningWeak
    """

    colorBgSuccessWeak: Optional[str]
    """
    colorBgSuccessWeak
    """

    colorBgSideNavPanel: Optional[str]
    """
    colorBgSideNavPanel
    """

    colorBgSecondary: Optional[str]
    """
    colorBgSecondary
    """

    colorBgSecondaryInverse: Optional[str]
    """
    colorBgSecondaryInverse
    """

    colorBgSegBtnSelected: Optional[str]
    """
    colorBgSegBtnSelected
    """

    colorBgSelected: Optional[str]
    """
    colorBgSelected
    """

    colorBgSuccess: Optional[str]
    """
    colorBgSuccess
    """

    colorBgTertiary: Optional[str]
    """
    colorBgTertiary
    """

    colorBgTertiaryInverse: Optional[str]
    """
    colorBgTertiaryInverse
    """

    colorBgTickMark: Optional[str]
    """
    colorBgTickMark
    """

    colorBgTrack: Optional[str]
    """
    colorBgTrack
    """

    colorBgWarning: Optional[str]
    """
    colorBgWarning
    """

    colorBgWarningWeak: Optional[str]
    """
    colorBgWarningWeak
    """

    colorBorder: Optional[str]
    """
    colorBorder
    """

    colorBorderAccent: Optional[str]
    """
    colorBorderAccent
    """

    colorBorderBtnAccentOutline: Optional[str]
    """
    colorBorderBtnAccentOutline
    """

    colorBorderBtnDangerOutline: Optional[str]
    """
    colorBorderBtnDangerOutline
    """

    colorBorderBtnPrimaryOutline: Optional[str]
    """
    colorBorderBtnPrimaryOutline
    """

    colorBorderCardChildPrimary: Optional[str]
    """
    colorBorderCardChildPrimary
    """

    colorBorderCardChildSecondary: Optional[str]
    """
    colorBorderCardChildSecondary
    """

    colorBorderCardParent: Optional[str]
    """
    colorBorderCardParent
    """

    colorBorderDanger: Optional[str]
    """
    colorBorderDanger
    """

    colorBorderInlineNotificationError: Optional[str]
    """
    colorBorderInlineNotificationError
    """

    colorBorderInlineNotificationSuccess: Optional[str]
    """
    colorBorderInlineNotificationSuccess
    """

    colorBorderInlineNotificationWarning: Optional[str]
    """
    colorBorderInlineNotificationWarning
    """

    colorBorderMenu: Optional[str]
    """
    colorBorderMenu
    """

    colorBorderReadonly: Optional[str]
    """
    colorBorderReadonly
    """

    colorBorderSegBtn: Optional[str]
    """
    colorBorderSegBtn
    """

    colorBorderStrong: Optional[str]
    """
    colorBorderStrong
    """

    colorBorderSuccess: Optional[str]
    """
    colorBorderSuccess
    """

    colorBorderWarning: Optional[str]
    """
    colorBorderWarning
    """

    colorBorderWeak: Optional[str]
    """
    colorBorderWeak
    """

    colorDivider: Optional[str]
    """
    colorDivider
    """

    colorDividerStrong: Optional[str]
    """
    colorDividerStrong
    """

    colorDividerWeak: Optional[str]
    """
    colorDividerWeak
    """

    colorBgCollapsibleNav: Optional[str]
    """
    colorBgCollapsibleNav
    """

    colorBgTintTimeBarOverlay: Optional[str]
    """
    colorBgTintTimeBarOverlay
    """

    colorBgSankeyLabel: Optional[str]
    """
    colorBgSankeyLabel
    """

    colorBgSideNav: Optional[str]
    """
    colorBgSideNav
    """

    colorBgSideNavItemHover: Optional[str]
    """
    colorBgSideNavItemHover
    """

    colorBgSideItemHover: Optional[str]
    """
    colorBgSideItemHover
    """

    colorFgSideNavSelected: Optional[str]
    """
    colorFgSideNavSelected
    """

    colorFgSideNavUnselected: Optional[str]
    """
    colorFgSideNavUnselected
    """

    colorBorderSideNavItemIndicator: Optional[str]
    """
    colorBorderSideNavItemIndicator
    """

    colorBorderSideNavItemDivider: Optional[str]
    """
    colorBorderSideNavItemDivider
    """

    colorFgAccent: Optional[str]
    """
    colorFgAccent
    """

    colorFgAccentWeak: Optional[str]
    """
    colorFgAccentWeak
    """

    colorFgAccentStrong: Optional[str]
    """
    colorFgAccentStrong
    """

    colorFgBtnAccent: Optional[str]
    """
    colorFgBtnAccent
    """

    colorFgBtnDanger: Optional[str]
    """
    colorFgBtnDanger
    """

    colorFgBtnPrimary: Optional[str]
    """
    colorFgBtnPrimary
    """

    colorFgDanger: Optional[str]
    """
    colorFgDanger
    """

    colorFgDangerStrong: Optional[str]
    """
    colorFgDangerStrong
    """

    colorFgDangerWeak: Optional[str]
    """
    colorFgDangerWeak
    """

    colorFgDecoOrangeStrong: Optional[str]
    """
    colorFgDecoOrangeStrong
    """

    colorFgDecoOrange: Optional[str]
    """
    colorFgDecoOrange
    """

    colorFgDecoOrangeWeak: Optional[str]
    """
    colorFgDecoOrangeWeak
    """

    colorFgDecoOliveStrong: Optional[str]
    """
    colorFgDecoOliveStrong
    """

    colorFgDecoOlive: Optional[str]
    """
    colorFgDecoOlive
    """

    colorFgDecoOliveWeak: Optional[str]
    """
    colorFgDecoOliveWeak
    """

    colorFgDecoLimeStrong: Optional[str]
    """
    colorFgDecoLimeStrong
    """

    colorFgDecoLime: Optional[str]
    """
    colorFgDecoLime
    """

    colorFgDecoLimeWeak: Optional[str]
    """
    colorFgDecoLimeWeak
    """

    colorFgDecoForestStrong: Optional[str]
    """
    colorFgDecoForestStrong
    """

    colorFgDecoForest: Optional[str]
    """
    colorFgDecoForest
    """

    colorFgDecoForestWeak: Optional[str]
    """
    colorFgDecoForestWeak
    """

    colorFgDecoCyanStrong: Optional[str]
    """
    colorFgDecoCyanStrong
    """

    colorFgDecoCyan: Optional[str]
    """
    colorFgDecoCyan
    """

    colorFgDecoCyanWeak: Optional[str]
    """
    colorFgDecoCyanWeak
    """

    colorFgDecoSlateStrong: Optional[str]
    """
    colorFgDecoSlateStrong
    """

    colorFgDecoSlate: Optional[str]
    """
    colorFgDecoSlate
    """

    colorFgDecoSlateWeak: Optional[str]
    """
    colorFgDecoSlateWeak
    """

    colorFgDecoPurpleStrong: Optional[str]
    """
    colorFgDecoPurpleStrong
    """

    colorFgDecoPurple: Optional[str]
    """
    colorFgDecoPurple
    """

    colorFgDecoPurpleWeak: Optional[str]
    """
    colorFgDecoPurpleWeak
    """

    colorFgDecoPlumStrong: Optional[str]
    """
    colorFgDecoPlumStrong
    """

    colorFgDecoPlum: Optional[str]
    """
    colorFgDecoPlum
    """

    colorFgDecoPlumWeak: Optional[str]
    """
    colorFgDecoPlumWeak
    """

    colorFgDecoChocoStrong: Optional[str]
    """
    colorFgDecoChocoStrong
    """

    colorFgDecoChoco: Optional[str]
    """
    colorFgDecoChoco
    """

    colorFgDecoChocoWeak: Optional[str]
    """
    colorFgDecoChocoWeak
    """

    colorFgMenuItemSelected: Optional[str]
    """
    colorFgMenuItemSelected
    """

    colorFgMenuItemSelectedIndicator: Optional[str]
    """
    colorFgMenuItemSelectedIndicator
    """

    colorFgMenuItemUnselected: Optional[str]
    """
    colorFgMenuItemUnselected
    """

    colorFgPrimary: Optional[str]
    """
    colorFgPrimary
    """

    colorFgPrimaryInverse: Optional[str]
    """
    colorFgPrimaryInverse
    """

    colorFgReadonly: Optional[str]
    """
    colorFgReadonly
    """

    colorFgSecondary: Optional[str]
    """
    colorFgSecondary
    """

    colorFgSecondaryInverse: Optional[str]
    """
    colorFgSecondaryInverse
    """

    colorFgSegBtn: Optional[str]
    """
    colorFgSegBtn
    """

    colorFgSegBtnSelected: Optional[str]
    """
    colorFgSegBtnSelected
    """

    colorFgSuccess: Optional[str]
    """
    colorFgSuccess
    """

    colorFgSuccessStrong: Optional[str]
    """
    colorFgSuccessStrong
    """

    colorFgSuccessWeak: Optional[str]
    """
    colorFgSuccessWeak
    """

    colorFgWarning: Optional[str]
    """
    colorFgWarning
    """

    colorFgWarningStrong: Optional[str]
    """
    colorFgWarningStrong
    """

    colorFgWarningWeak: Optional[str]
    """
    colorFgWarningWeak
    """

    colorFocus: Optional[str]
    """
    colorFocus
    """

    componentBackgroundColor: Optional[str]
    """
    componentBackgroundColor
    """

    componentBackgroundColorError: Optional[str]
    """
    componentBackgroundColorError
    """

    componentBackgroundColorSuccess: Optional[str]
    """
    componentBackgroundColorSuccess
    """

    componentBackgroundColorWarning: Optional[str]
    """
    componentBackgroundColorWarning
    """

    componentBorderColor: Optional[str]
    """
    componentBorderColor
    """

    componentDividerColor: Optional[str]
    """
    componentDividerColor
    """

    dangerColor: Optional[str]
    """
    dangerColor
    """

    dateIconColor: Optional[str]
    """
    dateIconColor
    """

    dateIconTextColor: Optional[str]
    """
    dateIconTextColor
    """

    dropdownDescriptionBackgroundColor: Optional[str]
    """
    dropdownDescriptionBackgroundColor
    """

    dropdownDescriptionColor: Optional[str]
    """
    dropdownDescriptionColor
    """

    dropdownMessageColor: Optional[str]
    """
    dropdownMessageColor
    """

    dropdownOptionDividerColor: Optional[str]
    """
    dropdownOptionDividerColor
    """

    dropdownSelectionColor: Optional[str]
    """
    dropdownSelectionColor
    """

    dynamicComponentLoaderBackgroundColor: Optional[str]
    """
    dynamicComponentLoaderBackgroundColor
    """

    expressionFocusedInputBackgroundColor: Optional[str]
    """
    expressionFocusedInputBackgroundColor
    """

    fontColor: Optional[str]
    """
    fontColor
    """

    formFieldBackgroundColor: Optional[str]
    """
    formFieldBackgroundColor
    """

    formFieldBackgroundColorDisabled: Optional[str]
    """
    formFieldBackgroundColorDisabled
    """

    formFieldBorderColor: Optional[str]
    """
    formFieldBorderColor
    """

    formFieldBorderColorDisabled: Optional[str]
    """
    formFieldBorderColorDisabled
    """

    formFieldColorDisabled: Optional[str]
    """
    formFieldColorDisabled
    """

    formFieldColorHint: Optional[str]
    """
    formFieldColorHint
    """

    formFieldErrorBorderColor: Optional[str]
    """
    formFieldErrorBorderColor
    """

    formFieldErrorHoverBorderColor: Optional[str]
    """
    formFieldErrorHoverBorderColor
    """

    formFieldHeaderColorDisabled: Optional[str]
    """
    formFieldHeaderColorDisabled
    """

    formFieldHoverBackgroundColor: Optional[str]
    """
    formFieldHoverBackgroundColor
    """

    formFieldHoverBorderColor: Optional[str]
    """
    formFieldHoverBorderColor
    """

    formFieldLabelErrorColor: Optional[str]
    """
    formFieldLabelErrorColor
    """

    formFieldLabelFocusColor: Optional[str]
    """
    formFieldLabelFocusColor
    """

    formFieldSetLinkHoverColor: Optional[str]
    """
    formFieldSetLinkHoverColor
    """

    formFieldVariantBorderColor: Optional[str]
    """
    formFieldVariantBorderColor
    """

    gaugeAxisBarColor: Optional[str]
    """
    gaugeAxisBarColor
    """

    gaugeFontColor: Optional[str]
    """
    gaugeFontColor
    """

    gaugeProgressBarDefaultColor: Optional[str]
    """
    gaugeProgressBarDefaultColor
    """

    gradientLinearCardParentLeft: Optional[str]
    """
    gradientLinearCardParentLeft
    """

    gradientLinearCardParentRight: Optional[str]
    """
    gradientLinearCardParentRight
    """

    gradientLinearCardChildLeft: Optional[str]
    """
    gradientLinearCardChildLeft
    """

    gradientLinearCardChildRight: Optional[str]
    """
    gradientLinearCardChildRight
    """

    gradientLinearNav: Optional[str]
    """
    gradientLinearNav
    """

    graphVisualizationClusterNodeFillColor: Optional[str]
    """
    graphVisualizationClusterNodeFillColor
    """

    graphVisualizationClusterNodeOutlineColor: Optional[str]
    """
    graphVisualizationClusterNodeOutlineColor
    """

    graphVisualizationGlyphFontColor: Optional[str]
    """
    graphVisualizationGlyphFontColor
    """

    graphVisualizationLegendBackgroundColor: Optional[str]
    """
    graphVisualizationLegendBackgroundColor
    """

    graphVisualizationLegendViewMoreButtonFontColor: Optional[str]
    """
    graphVisualizationLegendViewMoreButtonFontColor
    """

    graphVisualizationMapTheme: Optional[str]
    """
    graphVisualizationMapTheme
    """

    graphVisualizationMergedEdgeGlyphBackgroundColor: Optional[str]
    """
    graphVisualizationMergedEdgeGlyphBackgroundColor
    """

    graphVisualizationNodeDefaultDonutColor: Optional[str]
    """
    graphVisualizationNodeDefaultDonutColor
    """

    graphVisualizationNodeInfoGlyphBackgroundColor: Optional[str]
    """
    graphVisualizationNodeInfoGlyphBackgroundColor
    """

    graphVisualizationNodeInfoGlyphFontColor: Optional[str]
    """
    graphVisualizationNodeInfoGlyphFontColor
    """

    graphVisualizationPercentageDonutSegmentColor: Optional[str]
    """
    graphVisualizationPercentageDonutSegmentColor
    """

    graphVisualizationTimeBarBackgroundColor: Optional[str]
    """
    graphVisualizationTimeBarBackgroundColor
    """

    graphVisualizationTimeBarColor: Optional[str]
    """
    graphVisualizationTimeBarColor
    """

    graphVisualizationTimeBarHoverColor: Optional[str]
    """
    graphVisualizationTimeBarHoverColor
    """

    graphVisualizationTimeBarScaleHoverColor: Optional[str]
    """
    graphVisualizationTimeBarScaleHoverColor
    """

    graphVisualizationTooltipBackgroundColor: Optional[str]
    """
    graphVisualizationTooltipBackgroundColor
    """

    graphVisualizationTooltipBodyColor: Optional[str]
    """
    graphVisualizationTooltipBodyColor
    """

    graphVisualizationTooltipSubtitleColor: Optional[str]
    """
    graphVisualizationTooltipSubtitleColor
    """

    graphVisualizationTooltipTitleColor: Optional[str]
    """
    graphVisualizationTooltipTitleColor
    """

    gridCellColorWheelBackgroundColor: Optional[str]
    """
    gridCellColorWheelBackgroundColor
    """

    gridHeaderFontColor: Optional[str]
    """
    gridHeaderFontColor
    """

    gridHoverBackgroundColor: Optional[str]
    """
    gridHoverBackgroundColor
    """

    gridMessageBackgroundColor: Optional[str]
    """
    gridMessageBackgroundColor
    """

    gridPagerLabelFontColor: Optional[str]
    """
    gridPagerLabelFontColor
    """

    gridPagerSizesFontColor: Optional[str]
    """
    gridPagerSizesFontColor
    """

    gridSelectedCellBackgroundColor: Optional[str]
    """
    gridSelectedCellBackgroundColor
    """

    gridSelectedCellBorderColor: Optional[str]
    """
    gridSelectedCellBorderColor
    """

    gridSelectedFontColor: Optional[str]
    """
    gridSelectedFontColor
    """

    gridSelectedHoverBackgroundColor: Optional[str]
    """
    gridSelectedHoverBackgroundColor
    """

    iconGroupColor: Optional[str]
    """
    iconGroupColor
    """

    indicatorBarBackgroundColor: Optional[str]
    """
    indicatorBarBackgroundColor
    """

    infoColor: Optional[str]
    """
    infoColor
    """

    invertedComponentBackgroundColor: Optional[str]
    """
    invertedComponentBackgroundColor
    """

    kanbanBoardBackgroundColumnTitle: Optional[str]
    """
    kanbanBoardBackgroundColumnTitle
    """

    kanbanBoardBackgroundItemSlot: Optional[str]
    """
    kanbanBoardBackgroundItemSlot
    """

    kanbanBoardBackgroundLayout: Optional[str]
    """
    kanbanBoardBackgroundLayout
    """

    kanbanBoardBorderTitle: Optional[str]
    """
    kanbanBoardBorderTitle
    """

    kanbanBoardButtonColor: Optional[str]
    """
    kanbanBoardButtonColor
    """

    kanbanBoardCardContentColor: Optional[str]
    """
    kanbanBoardCardContentColor
    """

    kanbanBoardCardHeadLineBlockColor: Optional[str]
    """
    kanbanBoardCardHeadLineBlockColor
    """

    kanbanBoardContentBackgroundColor: Optional[str]
    """
    kanbanBoardContentBackgroundColor
    """

    kanbanBoardTextBackgroundCollectionList: Optional[str]
    """
    kanbanBoardTextBackgroundCollectionList
    """

    kanbanBoardTitleColor: Optional[str]
    """
    kanbanBoardTitleColor
    """

    kendoAppSurfaceColor: Optional[str]=None
    """
    kendoAppSurfaceColor
    """

    kendoOnAppSurfaceColor: Optional[str]=None
    """
    kendoOnAppSurfaceColor
    """

    kendoSubtleColor: Optional[str]=None
    """
    kendoSubtleColor
    """

    kendoSurfaceColor: Optional[str]=None
    """
    kendoSurfaceColor
    """

    kendoSurfaceAltColor: Optional[str]=None
    """
    kendoSurfaceAltColor
    """

    kendoBorderColor: Optional[str]=None
    """
    kendoBorderColor
    """

    kendoBorderAltColor: Optional[str]=None
    """
    kendoBorderAltColor
    """

    kendoBaseSubtleColor: Optional[str]=None
    """
    kendoBaseSubtleColor
    """

    kendoBaseSubtleHoverColor: Optional[str]=None
    """
    kendoBaseSubtleHoverColor
    """

    kendoBaseSubtleActiveColor: Optional[str]=None
    """
    kendoBaseSubtleActiveColor
    """

    kendoBaseColor: Optional[str]=None
    """
    kendoBaseColor
    """

    kendoBaseHoverColor: Optional[str]=None
    """
    kendoBaseHoverColor
    """

    kendoBaseActiveColor: Optional[str]=None
    """
    kendoBaseActiveColor
    """

    kendoBaseEmphasisColor: Optional[str]=None
    """
    kendoBaseEmphasisColor
    """

    kendoBaseOnSubtleColor: Optional[str]=None
    """
    kendoBaseOnSubtleColor
    """

    kendoOnBaseColor: Optional[str]=None
    """
    kendoOnBaseColor
    """

    kendoBaseOnSurfaceColor: Optional[str]=None
    """
    kendoBaseOnSurfaceColor
    """

    kendoElevation01: Optional[str]=None
    """
    kendoElevation01
    """

    kendoElevation02: Optional[str]=None
    """
    kendoElevation02
    """

    kendoElevation03: Optional[str]=None
    """
    kendoElevation03
    """

    kendoElevation04: Optional[str]=None
    """
    kendoElevation04
    """

    kendoElevation05: Optional[str]=None
    """
    kendoElevation05
    """

    kendoElevation06: Optional[str]=None
    """
    kendoElevation06
    """

    kendoElevation07: Optional[str]=None
    """
    kendoElevation07
    """

    kendoElevation08: Optional[str]=None
    """
    kendoElevation08
    """

    kendoElevation09: Optional[str]=None
    """
    kendoElevation09
    """

    kendoPrimarySubtleColor: Optional[str]=None
    """
    kendoPrimarySubtleColor
    """

    kendoPrimarySubtleHoverColor: Optional[str]=None
    """
    kendoPrimarySubtleHoverColor
    """

    kendoPrimarySubtleActiveColor: Optional[str]=None
    """
    kendoPrimarySubtleActiveColor
    """

    kendoPrimaryColor: Optional[str]=None
    """
    kendoPrimaryColor
    """

    kendoPrimaryHoverColor: Optional[str]=None
    """
    kendoPrimaryHoverColor
    """

    kendoPrimaryActiveColor: Optional[str]=None
    """
    kendoPrimaryActiveColor
    """

    kendoPrimaryEmphasisColor: Optional[str]=None
    """
    kendoPrimaryEmphasisColor
    """

    kendoPrimaryOnSubtleColor: Optional[str]=None
    """
    kendoPrimaryOnSubtleColor
    """

    kendoOnPrimaryColor: Optional[str]=None
    """
    kendoOnPrimaryColor
    """

    kendoPrimaryOnSurfaceColor: Optional[str]=None
    """
    kendoPrimaryOnSurfaceColor
    """

    kendoSecondarySubtleColor: Optional[str]=None
    """
    kendoSecondarySubtleColor
    """

    kendoSecondarySubtleHoverColor: Optional[str]=None
    """
    kendoSecondarySubtleHoverColor
    """

    kendoSecondarySubtleActiveColor: Optional[str]=None
    """
    kendoSecondarySubtleActiveColor
    """

    kendoSecondaryColor: Optional[str]=None
    """
    kendoSecondaryColor
    """

    kendoSecondaryHoverColor: Optional[str]=None
    """
    kendoSecondaryHoverColor
    """

    kendoSecondaryActiveColor: Optional[str]=None
    """
    kendoSecondaryActiveColor
    """

    kendoSecondaryEmphasisColor: Optional[str]=None
    """
    kendoSecondaryEmphasisColor
    """

    kendoSecondaryOnSubtleColor: Optional[str]=None
    """
    kendoSecondaryOnSubtleColor
    """

    kendoOnSecondaryColor: Optional[str]=None
    """
    kendoOnSecondaryColor
    """

    kendoSecondaryOnSurfaceColor: Optional[str]=None
    """
    kendoSecondaryOnSurfaceColor
    """

    kendoTertiarySubtleColor: Optional[str]=None
    """
    kendoTertiarySubtleColor
    """

    kendoTertiarySubtleHoverColor: Optional[str]=None
    """
    kendoTertiarySubtleHoverColor
    """

    kendoTertiarySubtleActiveColor: Optional[str]=None
    """
    kendoTertiarySubtleActiveColor
    """

    kendoTertiaryColor: Optional[str]=None
    """
    kendoTertiaryColor
    """

    kendoTertiaryHoverColor: Optional[str]=None
    """
    kendoTertiaryHoverColor
    """

    kendoTertiaryActiveColor: Optional[str]=None
    """
    kendoTertiaryActiveColor
    """

    kendoTertiaryEmphasisColor: Optional[str]=None
    """
    kendoTertiaryEmphasisColor
    """

    kendoTertiaryOnSubtleColor: Optional[str]=None
    """
    kendoTertiaryOnSubtleColor
    """

    kendoOnTertiaryColor: Optional[str]=None
    """
    kendoOnTertiaryColor
    """

    kendoTertiaryOnSurfaceColor: Optional[str]=None
    """
    kendoTertiaryOnSurfaceColor
    """

    kendoInfoSubtleColor: Optional[str]=None
    """
    kendoInfoSubtleColor
    """

    kendoInfoSubtleHoverColor: Optional[str]=None
    """
    kendoInfoSubtleHoverColor
    """

    kendoInfoSubtleActiveColor: Optional[str]=None
    """
    kendoInfoSubtleActiveColor
    """

    kendoInfoColor: Optional[str]=None
    """
    kendoInfoColor
    """

    kendoInfoHoverColor: Optional[str]=None
    """
    kendoInfoHoverColor
    """

    kendoInfoActiveColor: Optional[str]=None
    """
    kendoInfoActiveColor
    """

    kendoInfoEmphasisColor: Optional[str]=None
    """
    kendoInfoEmphasisColor
    """

    kendoInfoOnSubtleColor: Optional[str]=None
    """
    kendoInfoOnSubtleColor
    """

    kendoOnInfoColor: Optional[str]=None
    """
    kendoOnInfoColor
    """

    kendoInfoOnSurfaceColor: Optional[str]=None
    """
    kendoInfoOnSurfaceColor
    """

    kendoSuccessSubtleColor: Optional[str]=None
    """
    kendoSuccessSubtleColor
    """

    kendoSuccessSubtleHoverColor: Optional[str]=None
    """
    kendoSuccessSubtleHoverColor
    """

    kendoSuccessSubtleActiveColor: Optional[str]=None
    """
    kendoSuccessSubtleActiveColor
    """

    kendoSuccessColor: Optional[str]=None
    """
    kendoSuccessColor
    """

    kendoSuccessHoverColor: Optional[str]=None
    """
    kendoSuccessHoverColor
    """

    kendoSuccessActiveColor: Optional[str]=None
    """
    kendoSuccessActiveColor
    """

    kendoSuccessEmphasisColor: Optional[str]=None
    """
    kendoSuccessEmphasisColor
    """

    kendoSuccessOnSubtleColor: Optional[str]=None
    """
    kendoSuccessOnSubtleColor
    """

    kendoOnSuccessColor: Optional[str]=None
    """
    kendoOnSuccessColor
    """

    kendoSuccessOnSurfaceColor: Optional[str]=None
    """
    kendoSuccessOnSurfaceColor
    """

    kendoWarningSubtleColor: Optional[str]=None
    """
    kendoWarningSubtleColor
    """

    kendoWarningSubtleHoverColor: Optional[str]=None
    """
    kendoWarningSubtleHoverColor
    """

    kendoWarningSubtleActiveColor: Optional[str]=None
    """
    kendoWarningSubtleActiveColor
    """

    kendoWarningColor: Optional[str]=None
    """
    kendoWarningColor
    """

    kendoWarningHoverColor: Optional[str]=None
    """
    kendoWarningHoverColor
    """

    kendoWarningActiveColor: Optional[str]=None
    """
    kendoWarningActiveColor
    """

    kendoWarningEmphasisColor: Optional[str]=None
    """
    kendoWarningEmphasisColor
    """

    kendoWarningOnSubtleColor: Optional[str]=None
    """
    kendoWarningOnSubtleColor
    """

    kendoOnWarningColor: Optional[str]=None
    """
    kendoOnWarningColor
    """

    kendoWarningOnSurfaceColor: Optional[str]=None
    """
    kendoWarningOnSurfaceColor
    """

    kendoErrorSubtleColor: Optional[str]=None
    """
    kendoErrorSubtleColor
    """

    kendoErrorSubtleHoverColor: Optional[str]=None
    """
    kendoErrorSubtleHoverColor
    """

    kendoErrorSubtleActiveColor: Optional[str]=None
    """
    kendoErrorSubtleActiveColor
    """

    kendoErrorColor: Optional[str]=None
    """
    kendoErrorColor
    """

    kendoErrorHoverColor: Optional[str]=None
    """
    kendoErrorHoverColor
    """

    kendoErrorActiveColor: Optional[str]=None
    """
    kendoErrorActiveColor
    """

    kendoErrorEmphasisColor: Optional[str]=None
    """
    kendoErrorEmphasisColor
    """

    kendoErrorOnSubtleColor: Optional[str]=None
    """
    kendoErrorOnSubtleColor
    """

    kendoOnErrorColor: Optional[str]=None
    """
    kendoOnErrorColor
    """

    kendoErrorOnSurfaceColor: Optional[str]=None
    """
    kendoErrorOnSurfaceColor
    """

    kendoLightSubtleColor: Optional[str]=None
    """
    kendoLightSubtleColor
    """

    kendoLightSubtleHoverColor: Optional[str]=None
    """
    kendoLightSubtleHoverColor
    """

    kendoLightSubtleActiveColor: Optional[str]=None
    """
    kendoLightSubtleActiveColor
    """

    kendoLightColor: Optional[str]=None
    """
    kendoLightColor
    """

    kendoLightHoverColor: Optional[str]=None
    """
    kendoLightHoverColor
    """

    kendoLightActiveColor: Optional[str]=None
    """
    kendoLightActiveColor
    """

    kendoLightEmphasisColor: Optional[str]=None
    """
    kendoLightEmphasisColor
    """

    kendoLightOnSubtleColor: Optional[str]=None
    """
    kendoLightOnSubtleColor
    """

    kendoOnLightColor: Optional[str]=None
    """
    kendoOnLightColor
    """

    kendoLightOnSurfaceColor: Optional[str]=None
    """
    kendoLightOnSurfaceColor
    """

    kendoDarkSubtleColor: Optional[str]=None
    """
    kendoDarkSubtleColor
    """

    kendoDarkSubtleHoverColor: Optional[str]=None
    """
    kendoDarkSubtleHoverColor
    """

    kendoDarkSubtleActiveColor: Optional[str]=None
    """
    kendoDarkSubtleActiveColor
    """

    kendoDarkColor: Optional[str]=None
    """
    kendoDarkColor
    """

    kendoDarkHoverColor: Optional[str]=None
    """
    kendoDarkHoverColor
    """

    kendoDarkActiveColor: Optional[str]=None
    """
    kendoDarkActiveColor
    """

    kendoDarkEmphasisColor: Optional[str]=None
    """
    kendoDarkEmphasisColor
    """

    kendoDarkOnSubtleColor: Optional[str]=None
    """
    kendoDarkOnSubtleColor
    """

    kendoOnDarkColor: Optional[str]=None
    """
    kendoOnDarkColor
    """

    kendoDarkOnSurfaceColor: Optional[str]=None
    """
    kendoDarkOnSurfaceColor
    """

    kendoInverseSubtleColor: Optional[str]=None
    """
    kendoInverseSubtleColor
    """

    kendoInverseSubtleHoverColor: Optional[str]=None
    """
    kendoInverseSubtleHoverColor
    """

    kendoInverseSubtleActiveColor: Optional[str]=None
    """
    kendoInverseSubtleActiveColor
    """

    kendoInverseColor: Optional[str]=None
    """
    kendoInverseColor
    """

    kendoInverseHoverColor: Optional[str]=None
    """
    kendoInverseHoverColor
    """

    kendoInverseActiveColor: Optional[str]=None
    """
    kendoInverseActiveColor
    """

    kendoInverseEmphasisColor: Optional[str]=None
    """
    kendoInverseEmphasisColor
    """

    kendoInverseOnSubtleColor: Optional[str]=None
    """
    kendoInverseOnSubtleColor
    """

    kendoOnInverseColor: Optional[str]=None
    """
    kendoOnInverseColor
    """

    kendoInverseOnSurfaceColor: Optional[str]=None
    """
    kendoInverseOnSurfaceColor
    """

    kendoSeriesAColor: Optional[str]=None
    """
    kendoSeriesAColor
    """

    kendoSeriesABoldColor: Optional[str]=None
    """
    kendoSeriesABoldColor
    """

    kendoSeriesABolderColor: Optional[str]=None
    """
    kendoSeriesABolderColor
    """

    kendoSeriesASubtleColor: Optional[str]=None
    """
    kendoSeriesASubtleColor
    """

    kendoSeriesASubtlerColor: Optional[str]=None
    """
    kendoSeriesASubtlerColor
    """

    kendoSeriesBColor: Optional[str]=None
    """
    kendoSeriesBColor
    """

    kendoSeriesBBoldColor: Optional[str]=None
    """
    kendoSeriesBBoldColor
    """

    kendoSeriesBBolderColor: Optional[str]=None
    """
    kendoSeriesBBolderColor
    """

    kendoSeriesBSubtleColor: Optional[str]=None
    """
    kendoSeriesBSubtleColor
    """

    kendoSeriesBSubtlerColor: Optional[str]=None
    """
    kendoSeriesBSubtlerColor
    """

    kendoSeriesCColor: Optional[str]=None
    """
    kendoSeriesCColor
    """

    kendoSeriesCBoldColor: Optional[str]=None
    """
    kendoSeriesCBoldColor
    """

    kendoSeriesCBolderColor: Optional[str]=None
    """
    kendoSeriesCBolderColor
    """

    kendoSeriesCSubtleColor: Optional[str]=None
    """
    kendoSeriesCSubtleColor
    """

    kendoSeriesCSubtlerColor: Optional[str]=None
    """
    kendoSeriesCSubtlerColor
    """

    kendoSeriesDColor: Optional[str]=None
    """
    kendoSeriesDColor
    """

    kendoSeriesDBoldColor: Optional[str]=None
    """
    kendoSeriesDBoldColor
    """

    kendoSeriesDBolderColor: Optional[str]=None
    """
    kendoSeriesDBolderColor
    """

    kendoSeriesDSubtleColor: Optional[str]=None
    """
    kendoSeriesDSubtleColor
    """

    kendoSeriesDSubtlerColor: Optional[str]=None
    """
    kendoSeriesDSubtlerColor
    """

    kendoSeriesEColor: Optional[str]=None
    """
    kendoSeriesEColor
    """

    kendoSeriesEBoldColor: Optional[str]=None
    """
    kendoSeriesEBoldColor
    """

    kendoSeriesEBolderColor: Optional[str]=None
    """
    kendoSeriesEBolderColor
    """

    kendoSeriesESubtleColor: Optional[str]=None
    """
    kendoSeriesESubtleColor
    """

    kendoSeriesESubtlerColor: Optional[str]=None
    """
    kendoSeriesESubtlerColor
    """

    kendoSeriesFColor: Optional[str]=None
    """
    kendoSeriesFColor
    """

    kendoSeriesFBoldColor: Optional[str]=None
    """
    kendoSeriesFBoldColor
    """

    kendoSeriesFBolderColor: Optional[str]=None
    """
    kendoSeriesFBolderColor
    """

    kendoSeriesFSubtleColor: Optional[str]=None
    """
    kendoSeriesFSubtleColor
    """

    kendoSeriesFSubtlerColor: Optional[str]=None
    """
    kendoSeriesFSubtlerColor
    """

    legendBackgroundColor: Optional[str]
    """
    legendBackgroundColor
    """

    legendNameFontColor: Optional[str]
    """
    legendNameFontColor
    """

    logoBlueBackgroundColor: Optional[str]
    """
    logoBlueBackgroundColor
    """

    logoChocoBackgroundColor: Optional[str]
    """
    logoChocoBackgroundColor
    """

    logoColor: Optional[str]
    """
    logoColor
    """

    logoCyanBackgroundColor: Optional[str]
    """
    logoCyanBackgroundColor
    """

    logoForestBackgroundColor: Optional[str]
    """
    logoForestBackgroundColor
    """

    logoIconUrl: Optional[str]
    """
    logoIconUrl
    """

    emptyStateIconUrl: Optional[str]
    """
    emptyStateIconUrl
    """

    logoLimeBackgroundColor: Optional[str]
    """
    logoLimeBackgroundColor
    """

    logoOliveBackgroundColor: Optional[str]
    """
    logoOliveBackgroundColor
    """

    logoOrangeBackgroundColor: Optional[str]
    """
    logoOrangeBackgroundColor
    """

    logoPlumBackgroundColor: Optional[str]
    """
    logoPlumBackgroundColor
    """

    logoPurpleBackgroundColor: Optional[str]
    """
    logoPurpleBackgroundColor
    """

    logoSlateBackgroundColor: Optional[str]
    """
    logoSlateBackgroundColor
    """

    mapMarkerClusterColor: Optional[str]
    """
    mapMarkerClusterColor
    """

    mapTooltipAdditionalFieldsDescriptionFontColor: Optional[str]
    """
    mapTooltipAdditionalFieldsDescriptionFontColor
    """

    mapTooltipAdditionalFieldsHeaderFontColor: Optional[str]
    """
    mapTooltipAdditionalFieldsHeaderFontColor
    """

    mapTooltipHeaderFontColor: Optional[str]
    """
    mapTooltipHeaderFontColor
    """

    mapTooltipSubHeaderFontColor: Optional[str]
    """
    mapTooltipSubHeaderFontColor
    """

    menuActiveColor: Optional[str]
    """
    menuActiveColor
    """

    menuBackgroundActiveColor: Optional[str]
    """
    menuBackgroundActiveColor
    """

    menuBackgroundColor: Optional[str]
    """
    menuBackgroundColor
    """

    menuDividerColor: Optional[str]
    """
    menuDividerColor
    """

    menuHoverColor: Optional[str]
    """
    menuHoverColor
    """

    menuItemActiveColor: Optional[str]
    """
    menuItemActiveColor
    """

    menuItemBackgroundColor: Optional[str]
    """
    menuItemBackgroundColor
    """

    menuItemBackgroundHoverColor: Optional[str]
    """
    menuItemBackgroundHoverColor
    """

    menuItemHoverColor: Optional[str]
    """
    menuItemHoverColor
    """

    menuPrimaryColor: Optional[str]
    """
    menuPrimaryColor
    """

    numberIconColor: Optional[str]
    """
    numberIconColor
    """

    numberIconTextColor: Optional[str]
    """
    numberIconTextColor
    """

    objectIconColor: Optional[str]
    """
    objectIconColor
    """

    objectIconTextColor: Optional[str]
    """
    objectIconTextColor
    """

    opacity00: Optional[str]
    """
    opacity00
    """

    opacity05: Optional[str]
    """
    opacity05
    """

    opacity10: Optional[str]
    """
    opacity10
    """

    opacity20: Optional[str]
    """
    opacity20
    """

    opacity30: Optional[str]
    """
    opacity30
    """

    opacity40: Optional[str]
    """
    opacity40
    """

    opacity50: Optional[str]
    """
    opacity50
    """

    opacity60: Optional[str]
    """
    opacity60
    """

    opacity70: Optional[str]
    """
    opacity70
    """

    opacity80: Optional[str]
    """
    opacity80
    """

    opacity90: Optional[str]
    """
    opacity90
    """

    opacity95: Optional[str]
    """
    opacity95
    """

    opacity100: Optional[str]
    """
    opacity100
    """

    opacityDisabled: Optional[str]
    """
    opacityDisabled
    """

    opacityLoading: Optional[str]
    """
    opacityLoading
    """

    otherIconColor: Optional[str]
    """
    otherIconColor
    """

    otherIconTextColor: Optional[str]
    """
    otherIconTextColor
    """

    pageBackgroundColor: Optional[str]
    """
    pageBackgroundColor
    """

    pageTitleBoxShadowColor: Optional[str]
    """
    pageTitleBoxShadowColor
    """

    referenceIconColor: Optional[str]
    """
    referenceIconColor
    """

    referenceIconTextColor: Optional[str]
    """
    referenceIconTextColor
    """

    resetZoomIconPath: Optional[str]
    """
    resetZoomIconPath
    """

    resetZoomIconUrl: Optional[str]
    """
    resetZoomIconUrl
    """

    resetZoomIconColor: Optional[str]
    """
    resetZoomIconColor
    """

    sankeyChartLabelBackgroundColor: Optional[str]
    """
    sankeyChartLabelBackgroundColor
    """

    scrollbarThumbColor: Optional[str]
    """
    scrollbarThumbColor
    """

    scrollbarTrackColor: Optional[str]
    """
    scrollbarTrackColor
    """

    secondaryFontColor: Optional[str]
    """
    secondaryFontColor
    """

    secondaryVariantFontColor: Optional[str]
    """
    secondaryVariantFontColor
    """

    selectFieldPillActiveBackgroundColor: Optional[str]
    """
    selectFieldPillActiveBackgroundColor
    """

    selectFieldPillHoverBackgroundColor: Optional[str]
    """
    selectFieldPillHoverBackgroundColor
    """

    selectFieldPillTextColor: Optional[str]
    """
    selectFieldPillTextColor
    """

    selectionBackgroundColor: Optional[str]
    """
    selectionBackgroundColor
    """

    sidePanelSubtitleColor: Optional[str]
    """
    sidePanelSubtitleColor
    """

    stringIconColor: Optional[str]
    """
    stringIconColor
    """

    stringIconTextColor: Optional[str]
    """
    stringIconTextColor
    """

    subMenuItemBackgroundActiveColor: Optional[str]
    """
    subMenuItemBackgroundActiveColor
    """

    successColor: Optional[str]
    """
    successColor
    """

    timeGraphBackgroundColor: Optional[str]
    """
    timeGraphBackgroundColor
    """

    timeGraphDefaultEntityColor: Optional[str]
    """
    timeGraphDefaultEntityColor
    """

    timeGraphDefaultLabelColor: Optional[str]
    """
    timeGraphDefaultLabelColor
    """

    timeGraphHighlightColor: Optional[str]
    """
    timeGraphHighlightColor
    """

    timeGraphScaleBackgroundColor: Optional[str]
    """
    timeGraphScaleBackgroundColor
    """

    timeGraphScaleBorderColor: Optional[str]
    """
    timeGraphScaleBorderColor
    """

    timeGraphScaleFontColor: Optional[str]
    """
    timeGraphScaleFontColor
    """

    timeGraphScaleFontSize: Optional[str]
    """
    timeGraphScaleFontSize
    """

    timeGraphTooltipBackgroundColor: Optional[str]
    """
    timeGraphTooltipBackgroundColor
    """

    timeGraphTooltipBodyColor: Optional[str]
    """
    timeGraphTooltipBodyColor
    """

    timeGraphTooltipSubtitleColor: Optional[str]
    """
    timeGraphTooltipSubtitleColor
    """

    timeGraphTooltipTitleColor: Optional[str]
    """
    timeGraphTooltipTitleColor
    """

    timeSeriesIconColor: Optional[str]
    """
    timeSeriesIconColor
    """

    timeSeriesIconTextColor: Optional[str]
    """
    timeSeriesIconTextColor
    """

    toggleSwitchBackgroundColor: Optional[str]
    """
    toggleSwitchBackgroundColor
    """

    toggleSwitchBorderColor: Optional[str]
    """
    toggleSwitchBorderColor
    """

    toggleSwitchCheckedBorderColor: Optional[str]
    """
    toggleSwitchCheckedBorderColor
    """

    toggleSwitchCheckedColor: Optional[str]
    """
    toggleSwitchCheckedColor
    """

    toggleSwitchCheckedDisabledBackgroundColor: Optional[str]
    """
    toggleSwitchCheckedDisabledBackgroundColor
    """

    toggleSwitchCheckedDisabledBorderColor: Optional[str]
    """
    toggleSwitchCheckedDisabledBorderColor
    """

    toggleSwitchCheckedDisabledColor: Optional[str]
    """
    toggleSwitchCheckedDisabledColor
    """

    toggleSwitchColor: Optional[str]
    """
    toggleSwitchColor
    """

    toggleSwitchDisabledBackgroundColor: Optional[str]
    """
    toggleSwitchDisabledBackgroundColor
    """

    toggleSwitchDisabledBorderColor: Optional[str]
    """
    toggleSwitchDisabledBorderColor
    """

    toggleSwitchDisabledColor: Optional[str]
    """
    toggleSwitchDisabledColor
    """

    tooltipBackgroundColor: Optional[str]
    """
    tooltipBackgroundColor
    """

    warningColor: Optional[str]
    """
    warningColor
    """

    zebraStripeBackgroundColor: Optional[str]
    """
    zebraStripeBackgroundColor
    """
    def __init__(self, meta: Optional[Meta]=None, id: Optional[str]=None, isC3: Optional[bool]=None, themeCategory: Optional[str]=None, accentColor: Optional[str]=None, accentFontColor: Optional[str]=None, accentVariantColor: Optional[str]=None, avatarBadgeBlueBackgroundColor: Optional[str]=None, avatarBadgeBlueColor: Optional[str]=None, avatarBadgeChocoBackgroundColor: Optional[str]=None, avatarBadgeChocoColor: Optional[str]=None, avatarBadgeCyanBackgroundColor: Optional[str]=None, avatarBadgeCyanColor: Optional[str]=None, avatarBadgeForestBackgroundColor: Optional[str]=None, avatarBadgeForestColor: Optional[str]=None, avatarBadgeGreenBackgroundColor: Optional[str]=None, avatarBadgeGreenColor: Optional[str]=None, avatarBadgeLimeBackgroundColor: Optional[str]=None, avatarBadgeLimeColor: Optional[str]=None, avatarBadgeOliveBackgroundColor: Optional[str]=None, avatarBadgeOliveColor: Optional[str]=None, avatarBadgeOrangeBackgroundColor: Optional[str]=None, avatarBadgeOrangeColor: Optional[str]=None, avatarBadgePlumBackgroundColor: Optional[str]=None, avatarBadgePlumColor: Optional[str]=None, avatarBadgePurpleBackgroundColor: Optional[str]=None, avatarBadgePurpleColor: Optional[str]=None, avatarBadgeRedBackgroundColor: Optional[str]=None, avatarBadgeRedColor: Optional[str]=None, avatarBadgeSlateBackgroundColor: Optional[str]=None, avatarBadgeSlateColor: Optional[str]=None, avatarBadgeYellowBackgroundColor: Optional[str]=None, avatarBadgeYellowColor: Optional[str]=None, booleanIconColor: Optional[str]=None, booleanIconTextColor: Optional[str]=None, borderColor: Optional[str]=None, boxShadow01: Optional[str]=None, boxShadow02: Optional[str]=None, boxShadow03: Optional[str]=None, boxShadow04: Optional[str]=None, boxShadow05: Optional[str]=None, boxShadowCardParent: Optional[str]=None, boxShadowMenu: Optional[str]=None, boxZoomIconPath: Optional[str]=None, boxZoomIconUrl: Optional[str]=None, boxZoomIconColor: Optional[str]=None, brightnessActionHover: Optional[str]=None, brightnessActionHoverInverse: Optional[str]=None, brightnessActionPressed: Optional[str]=None, brightnessActionPressedInverse: Optional[str]=None, buttonControlBorderColor: Optional[str]=None, buttonControlFontColor: Optional[str]=None, buttonControlHoverBackgroundColor: Optional[str]=None, buttonControlSelectedBackgroundColor: Optional[str]=None, buttonControlSelectedDisabledBackgroundColor: Optional[str]=None, buttonControlSelectedFontColor: Optional[str]=None, buttonControlSelectedHoverBackgroundColor: Optional[str]=None, buttonDangerPrimaryActiveBackgroundColor: Optional[str]=None, buttonDangerPrimaryHoverBackgroundColor: Optional[str]=None, buttonDangerSecondaryActiveBackgroundColor: Optional[str]=None, buttonDangerSecondaryHoverBackgroundColor: Optional[str]=None, buttonDangerTertiaryActiveBackgroundColor: Optional[str]=None, buttonDangerTertiaryHoverBackgroundColor: Optional[str]=None, buttonIconActiveBackgroundColor: Optional[str]=None, buttonIconBackgroundColor: Optional[str]=None, buttonIconHoverBackgroundColor: Optional[str]=None, buttonIconSelectedActiveBackgroundColor: Optional[str]=None, buttonIconSelectedBackgroundColor: Optional[str]=None, buttonIconSelectedForegroundColor: Optional[str]=None, buttonIconSelectedHoverBackgroundColor: Optional[str]=None, buttonPrimaryActiveBackgroundColor: Optional[str]=None, buttonPrimaryHoverBackgroundColor: Optional[str]=None, buttonSecondaryActiveBackgroundColor: Optional[str]=None, buttonSecondaryHoverBackgroundColor: Optional[str]=None, buttonTertiaryActiveBackgroundColor: Optional[str]=None, buttonTertiaryHoverBackgroundColor: Optional[str]=None, canvasBackgroundDotColor: Optional[str]=None, canvasCyanNodeColor: Optional[str]=None, canvasForestNodeColor: Optional[str]=None, canvasNodeBorderColor: Optional[str]=None, canvasNodeErrorBackgroundColor: Optional[str]=None, canvasNodeWarningBackgroundColor: Optional[str]=None, canvasOrangeIconColor: Optional[str]=None, canvasOrangeNodeColor: Optional[str]=None, canvasPendingNodeBackgroundColor: Optional[str]=None, canvasPendingNodeForegroundColor: Optional[str]=None, canvasPlumNodeColor: Optional[str]=None, canvasPurpleIconColor: Optional[str]=None, canvasPurpleNodeColor: Optional[str]=None, canvasSlateIconColor: Optional[str]=None, canvasSlateNodeColor: Optional[str]=None, cardElevation00BackgroundColor: Optional[str]=None, cardElevation01BackgroundColor: Optional[str]=None, cardElevation02BackgroundColor: Optional[str]=None, cardElevation03BackgroundColor: Optional[str]=None, cardElevation04BackgroundColor: Optional[str]=None, cardElevation06BackgroundColor: Optional[str]=None, cardElevation08BackgroundColor: Optional[str]=None, cardElevation12BackgroundColor: Optional[str]=None, cardElevation16BackgroundColor: Optional[str]=None, cardElevation24BackgroundColor: Optional[str]=None, chartSeriesTooltipNameFontColor: Optional[str]=None, chartSeriesTooltipTitleFontColor: Optional[str]=None, chartSeriesTooltipValueFontColor: Optional[str]=None, checkboxBackgroundColor: Optional[str]=None, checkboxColor: Optional[str]=None, checkboxHoverBackgroundColor: Optional[str]=None, checkboxHoverColor: Optional[str]=None, checkboxSelectedDisabledColor: Optional[str]=None, checkboxSelectedHoverColor: Optional[str]=None, colorBgAccent: Optional[str]=None, colorBgAccentWeak: Optional[str]=None, colorBgActionHover: Optional[str]=None, colorBgActionHoverInverse: Optional[str]=None, colorBgActionPressed: Optional[str]=None, colorBgActionPressedInverse: Optional[str]=None, colorBgAvatarDefault: Optional[str]=None, colorBgBtnAccentFill: Optional[str]=None, colorBgBtnDangerFill: Optional[str]=None, colorBgBtnPrimaryFill: Optional[str]=None, colorBgCardChildPrimary: Optional[str]=None, colorBgCardChildSecondary: Optional[str]=None, colorBgCardParent: Optional[str]=None, colorBgContainer01: Optional[str]=None, colorBgContainer02: Optional[str]=None, colorBgDanger: Optional[str]=None, colorBgDangerWeak: Optional[str]=None, colorBgDataGridHover: Optional[str]=None, colorBgDataGridZebraStripe: Optional[str]=None, colorBgDataZoomSliderFilter: Optional[str]=None, colorBgDataZoomSparkline: Optional[str]=None, colorBgDecoOrangeStrong: Optional[str]=None, colorBgDecoOrange: Optional[str]=None, colorBgDecoOrangeWeak: Optional[str]=None, colorBgDecoOliveStrong: Optional[str]=None, colorBgDecoOlive: Optional[str]=None, colorBgDecoOliveWeak: Optional[str]=None, colorBgDecoLimeStrong: Optional[str]=None, colorBgDecoLime: Optional[str]=None, colorBgDecoLimeWeak: Optional[str]=None, colorBgDecoForestStrong: Optional[str]=None, colorBgDecoForest: Optional[str]=None, colorBgDecoForestWeak: Optional[str]=None, colorBgDecoCyanStrong: Optional[str]=None, colorBgDecoCyan: Optional[str]=None, colorBgDecoCyanWeak: Optional[str]=None, colorBgDecoSlateStrong: Optional[str]=None, colorBgDecoSlate: Optional[str]=None, colorBgDecoSlateWeak: Optional[str]=None, colorBgDecoPurpleStrong: Optional[str]=None, colorBgDecoPurple: Optional[str]=None, colorBgDecoPurpleWeak: Optional[str]=None, colorBgDecoPlumStrong: Optional[str]=None, colorBgDecoPlum: Optional[str]=None, colorBgDecoPlumWeak: Optional[str]=None, colorBgDecoChocoStrong: Optional[str]=None, colorBgDecoChoco: Optional[str]=None, colorBgDecoChocoWeak: Optional[str]=None, colorFgInputPlaceholder: Optional[str]=None, colorBorderDataZoomSparkline: Optional[str]=None, colorBgInlineNotificationError: Optional[str]=None, colorBgInlineNotificationSuccess: Optional[str]=None, colorBgInlineNotificationWarning: Optional[str]=None, colorBgInputReadonly: Optional[str]=None, colorBgMenu: Optional[str]=None, colorBgMenuHoverUnselected: Optional[str]=None, colorBgMenuItemSelected: Optional[str]=None, colorBgPage: Optional[str]=None, colorBgPrimary: Optional[str]=None, colorBgPrimaryInverse: Optional[str]=None, colorBgContentFrame: Optional[str]=None, colorBgCoreAccentStrong: Optional[str]=None, colorBgCoreAccent: Optional[str]=None, colorBgCoreAccentWeak: Optional[str]=None, colorBgCoreDangerStrong: Optional[str]=None, colorBgCoreDanger: Optional[str]=None, colorBgCoreDangerWeak: Optional[str]=None, colorBgCoreSuccessStrong: Optional[str]=None, colorBgCoreSuccess: Optional[str]=None, colorBgCoreSuccessWeak: Optional[str]=None, colorBgCoreWarningStrong: Optional[str]=None, colorBgCoreWarning: Optional[str]=None, colorBgCoreWarningWeak: Optional[str]=None, colorBgSuccessWeak: Optional[str]=None, colorBgSideNavPanel: Optional[str]=None, colorBgSecondary: Optional[str]=None, colorBgSecondaryInverse: Optional[str]=None, colorBgSegBtnSelected: Optional[str]=None, colorBgSelected: Optional[str]=None, colorBgSuccess: Optional[str]=None, colorBgTertiary: Optional[str]=None, colorBgTertiaryInverse: Optional[str]=None, colorBgTickMark: Optional[str]=None, colorBgTrack: Optional[str]=None, colorBgWarning: Optional[str]=None, colorBgWarningWeak: Optional[str]=None, colorBorder: Optional[str]=None, colorBorderAccent: Optional[str]=None, colorBorderBtnAccentOutline: Optional[str]=None, colorBorderBtnDangerOutline: Optional[str]=None, colorBorderBtnPrimaryOutline: Optional[str]=None, colorBorderCardChildPrimary: Optional[str]=None, colorBorderCardChildSecondary: Optional[str]=None, colorBorderCardParent: Optional[str]=None, colorBorderDanger: Optional[str]=None, colorBorderInlineNotificationError: Optional[str]=None, colorBorderInlineNotificationSuccess: Optional[str]=None, colorBorderInlineNotificationWarning: Optional[str]=None, colorBorderMenu: Optional[str]=None, colorBorderReadonly: Optional[str]=None, colorBorderSegBtn: Optional[str]=None, colorBorderStrong: Optional[str]=None, colorBorderSuccess: Optional[str]=None, colorBorderWarning: Optional[str]=None, colorBorderWeak: Optional[str]=None, colorDivider: Optional[str]=None, colorDividerStrong: Optional[str]=None, colorDividerWeak: Optional[str]=None, colorBgCollapsibleNav: Optional[str]=None, colorBgTintTimeBarOverlay: Optional[str]=None, colorBgSankeyLabel: Optional[str]=None, colorBgSideNav: Optional[str]=None, colorBgSideNavItemHover: Optional[str]=None, colorBgSideItemHover: Optional[str]=None, colorFgSideNavSelected: Optional[str]=None, colorFgSideNavUnselected: Optional[str]=None, colorBorderSideNavItemIndicator: Optional[str]=None, colorBorderSideNavItemDivider: Optional[str]=None, colorFgAccent: Optional[str]=None, colorFgAccentWeak: Optional[str]=None, colorFgAccentStrong: Optional[str]=None, colorFgBtnAccent: Optional[str]=None, colorFgBtnDanger: Optional[str]=None, colorFgBtnPrimary: Optional[str]=None, colorFgDanger: Optional[str]=None, colorFgDangerStrong: Optional[str]=None, colorFgDangerWeak: Optional[str]=None, colorFgDecoOrangeStrong: Optional[str]=None, colorFgDecoOrange: Optional[str]=None, colorFgDecoOrangeWeak: Optional[str]=None, colorFgDecoOliveStrong: Optional[str]=None, colorFgDecoOlive: Optional[str]=None, colorFgDecoOliveWeak: Optional[str]=None, colorFgDecoLimeStrong: Optional[str]=None, colorFgDecoLime: Optional[str]=None, colorFgDecoLimeWeak: Optional[str]=None, colorFgDecoForestStrong: Optional[str]=None, colorFgDecoForest: Optional[str]=None, colorFgDecoForestWeak: Optional[str]=None, colorFgDecoCyanStrong: Optional[str]=None, colorFgDecoCyan: Optional[str]=None, colorFgDecoCyanWeak: Optional[str]=None, colorFgDecoSlateStrong: Optional[str]=None, colorFgDecoSlate: Optional[str]=None, colorFgDecoSlateWeak: Optional[str]=None, colorFgDecoPurpleStrong: Optional[str]=None, colorFgDecoPurple: Optional[str]=None, colorFgDecoPurpleWeak: Optional[str]=None, colorFgDecoPlumStrong: Optional[str]=None, colorFgDecoPlum: Optional[str]=None, colorFgDecoPlumWeak: Optional[str]=None, colorFgDecoChocoStrong: Optional[str]=None, colorFgDecoChoco: Optional[str]=None, colorFgDecoChocoWeak: Optional[str]=None, colorFgMenuItemSelected: Optional[str]=None, colorFgMenuItemSelectedIndicator: Optional[str]=None, colorFgMenuItemUnselected: Optional[str]=None, colorFgPrimary: Optional[str]=None, colorFgPrimaryInverse: Optional[str]=None, colorFgReadonly: Optional[str]=None, colorFgSecondary: Optional[str]=None, colorFgSecondaryInverse: Optional[str]=None, colorFgSegBtn: Optional[str]=None, colorFgSegBtnSelected: Optional[str]=None, colorFgSuccess: Optional[str]=None, colorFgSuccessStrong: Optional[str]=None, colorFgSuccessWeak: Optional[str]=None, colorFgWarning: Optional[str]=None, colorFgWarningStrong: Optional[str]=None, colorFgWarningWeak: Optional[str]=None, colorFocus: Optional[str]=None, componentBackgroundColor: Optional[str]=None, componentBackgroundColorError: Optional[str]=None, componentBackgroundColorSuccess: Optional[str]=None, componentBackgroundColorWarning: Optional[str]=None, componentBorderColor: Optional[str]=None, componentDividerColor: Optional[str]=None, dangerColor: Optional[str]=None, dateIconColor: Optional[str]=None, dateIconTextColor: Optional[str]=None, dropdownDescriptionBackgroundColor: Optional[str]=None, dropdownDescriptionColor: Optional[str]=None, dropdownMessageColor: Optional[str]=None, dropdownOptionDividerColor: Optional[str]=None, dropdownSelectionColor: Optional[str]=None, dynamicComponentLoaderBackgroundColor: Optional[str]=None, expressionFocusedInputBackgroundColor: Optional[str]=None, fontColor: Optional[str]=None, formFieldBackgroundColor: Optional[str]=None, formFieldBackgroundColorDisabled: Optional[str]=None, formFieldBorderColor: Optional[str]=None, formFieldBorderColorDisabled: Optional[str]=None, formFieldColorDisabled: Optional[str]=None, formFieldColorHint: Optional[str]=None, formFieldErrorBorderColor: Optional[str]=None, formFieldErrorHoverBorderColor: Optional[str]=None, formFieldHeaderColorDisabled: Optional[str]=None, formFieldHoverBackgroundColor: Optional[str]=None, formFieldHoverBorderColor: Optional[str]=None, formFieldLabelErrorColor: Optional[str]=None, formFieldLabelFocusColor: Optional[str]=None, formFieldSetLinkHoverColor: Optional[str]=None, formFieldVariantBorderColor: Optional[str]=None, gaugeAxisBarColor: Optional[str]=None, gaugeFontColor: Optional[str]=None, gaugeProgressBarDefaultColor: Optional[str]=None, gradientLinearCardParentLeft: Optional[str]=None, gradientLinearCardParentRight: Optional[str]=None, gradientLinearCardChildLeft: Optional[str]=None, gradientLinearCardChildRight: Optional[str]=None, gradientLinearNav: Optional[str]=None, graphVisualizationClusterNodeFillColor: Optional[str]=None, graphVisualizationClusterNodeOutlineColor: Optional[str]=None, graphVisualizationGlyphFontColor: Optional[str]=None, graphVisualizationLegendBackgroundColor: Optional[str]=None, graphVisualizationLegendViewMoreButtonFontColor: Optional[str]=None, graphVisualizationMapTheme: Optional[str]=None, graphVisualizationMergedEdgeGlyphBackgroundColor: Optional[str]=None, graphVisualizationNodeDefaultDonutColor: Optional[str]=None, graphVisualizationNodeInfoGlyphBackgroundColor: Optional[str]=None, graphVisualizationNodeInfoGlyphFontColor: Optional[str]=None, graphVisualizationPercentageDonutSegmentColor: Optional[str]=None, graphVisualizationTimeBarBackgroundColor: Optional[str]=None, graphVisualizationTimeBarColor: Optional[str]=None, graphVisualizationTimeBarHoverColor: Optional[str]=None, graphVisualizationTimeBarScaleHoverColor: Optional[str]=None, graphVisualizationTooltipBackgroundColor: Optional[str]=None, graphVisualizationTooltipBodyColor: Optional[str]=None, graphVisualizationTooltipSubtitleColor: Optional[str]=None, graphVisualizationTooltipTitleColor: Optional[str]=None, gridCellColorWheelBackgroundColor: Optional[str]=None, gridHeaderFontColor: Optional[str]=None, gridHoverBackgroundColor: Optional[str]=None, gridMessageBackgroundColor: Optional[str]=None, gridPagerLabelFontColor: Optional[str]=None, gridPagerSizesFontColor: Optional[str]=None, gridSelectedCellBackgroundColor: Optional[str]=None, gridSelectedCellBorderColor: Optional[str]=None, gridSelectedFontColor: Optional[str]=None, gridSelectedHoverBackgroundColor: Optional[str]=None, iconGroupColor: Optional[str]=None, indicatorBarBackgroundColor: Optional[str]=None, infoColor: Optional[str]=None, invertedComponentBackgroundColor: Optional[str]=None, kanbanBoardBackgroundColumnTitle: Optional[str]=None, kanbanBoardBackgroundItemSlot: Optional[str]=None, kanbanBoardBackgroundLayout: Optional[str]=None, kanbanBoardBorderTitle: Optional[str]=None, kanbanBoardButtonColor: Optional[str]=None, kanbanBoardCardContentColor: Optional[str]=None, kanbanBoardCardHeadLineBlockColor: Optional[str]=None, kanbanBoardContentBackgroundColor: Optional[str]=None, kanbanBoardTextBackgroundCollectionList: Optional[str]=None, kanbanBoardTitleColor: Optional[str]=None, kendoAppSurfaceColor: Optional[str]=None, kendoOnAppSurfaceColor: Optional[str]=None, kendoSubtleColor: Optional[str]=None, kendoSurfaceColor: Optional[str]=None, kendoSurfaceAltColor: Optional[str]=None, kendoBorderColor: Optional[str]=None, kendoBorderAltColor: Optional[str]=None, kendoBaseSubtleColor: Optional[str]=None, kendoBaseSubtleHoverColor: Optional[str]=None, kendoBaseSubtleActiveColor: Optional[str]=None, kendoBaseColor: Optional[str]=None, kendoBaseHoverColor: Optional[str]=None, kendoBaseActiveColor: Optional[str]=None, kendoBaseEmphasisColor: Optional[str]=None, kendoBaseOnSubtleColor: Optional[str]=None, kendoOnBaseColor: Optional[str]=None, kendoBaseOnSurfaceColor: Optional[str]=None, kendoElevation01: Optional[str]=None, kendoElevation02: Optional[str]=None, kendoElevation03: Optional[str]=None, kendoElevation04: Optional[str]=None, kendoElevation05: Optional[str]=None, kendoElevation06: Optional[str]=None, kendoElevation07: Optional[str]=None, kendoElevation08: Optional[str]=None, kendoElevation09: Optional[str]=None, kendoPrimarySubtleColor: Optional[str]=None, kendoPrimarySubtleHoverColor: Optional[str]=None, kendoPrimarySubtleActiveColor: Optional[str]=None, kendoPrimaryColor: Optional[str]=None, kendoPrimaryHoverColor: Optional[str]=None, kendoPrimaryActiveColor: Optional[str]=None, kendoPrimaryEmphasisColor: Optional[str]=None, kendoPrimaryOnSubtleColor: Optional[str]=None, kendoOnPrimaryColor: Optional[str]=None, kendoPrimaryOnSurfaceColor: Optional[str]=None, kendoSecondarySubtleColor: Optional[str]=None, kendoSecondarySubtleHoverColor: Optional[str]=None, kendoSecondarySubtleActiveColor: Optional[str]=None, kendoSecondaryColor: Optional[str]=None, kendoSecondaryHoverColor: Optional[str]=None, kendoSecondaryActiveColor: Optional[str]=None, kendoSecondaryEmphasisColor: Optional[str]=None, kendoSecondaryOnSubtleColor: Optional[str]=None, kendoOnSecondaryColor: Optional[str]=None, kendoSecondaryOnSurfaceColor: Optional[str]=None, kendoTertiarySubtleColor: Optional[str]=None, kendoTertiarySubtleHoverColor: Optional[str]=None, kendoTertiarySubtleActiveColor: Optional[str]=None, kendoTertiaryColor: Optional[str]=None, kendoTertiaryHoverColor: Optional[str]=None, kendoTertiaryActiveColor: Optional[str]=None, kendoTertiaryEmphasisColor: Optional[str]=None, kendoTertiaryOnSubtleColor: Optional[str]=None, kendoOnTertiaryColor: Optional[str]=None, kendoTertiaryOnSurfaceColor: Optional[str]=None, kendoInfoSubtleColor: Optional[str]=None, kendoInfoSubtleHoverColor: Optional[str]=None, kendoInfoSubtleActiveColor: Optional[str]=None, kendoInfoColor: Optional[str]=None, kendoInfoHoverColor: Optional[str]=None, kendoInfoActiveColor: Optional[str]=None, kendoInfoEmphasisColor: Optional[str]=None, kendoInfoOnSubtleColor: Optional[str]=None, kendoOnInfoColor: Optional[str]=None, kendoInfoOnSurfaceColor: Optional[str]=None, kendoSuccessSubtleColor: Optional[str]=None, kendoSuccessSubtleHoverColor: Optional[str]=None, kendoSuccessSubtleActiveColor: Optional[str]=None, kendoSuccessColor: Optional[str]=None, kendoSuccessHoverColor: Optional[str]=None, kendoSuccessActiveColor: Optional[str]=None, kendoSuccessEmphasisColor: Optional[str]=None, kendoSuccessOnSubtleColor: Optional[str]=None, kendoOnSuccessColor: Optional[str]=None, kendoSuccessOnSurfaceColor: Optional[str]=None, kendoWarningSubtleColor: Optional[str]=None, kendoWarningSubtleHoverColor: Optional[str]=None, kendoWarningSubtleActiveColor: Optional[str]=None, kendoWarningColor: Optional[str]=None, kendoWarningHoverColor: Optional[str]=None, kendoWarningActiveColor: Optional[str]=None, kendoWarningEmphasisColor: Optional[str]=None, kendoWarningOnSubtleColor: Optional[str]=None, kendoOnWarningColor: Optional[str]=None, kendoWarningOnSurfaceColor: Optional[str]=None, kendoErrorSubtleColor: Optional[str]=None, kendoErrorSubtleHoverColor: Optional[str]=None, kendoErrorSubtleActiveColor: Optional[str]=None, kendoErrorColor: Optional[str]=None, kendoErrorHoverColor: Optional[str]=None, kendoErrorActiveColor: Optional[str]=None, kendoErrorEmphasisColor: Optional[str]=None, kendoErrorOnSubtleColor: Optional[str]=None, kendoOnErrorColor: Optional[str]=None, kendoErrorOnSurfaceColor: Optional[str]=None, kendoLightSubtleColor: Optional[str]=None, kendoLightSubtleHoverColor: Optional[str]=None, kendoLightSubtleActiveColor: Optional[str]=None, kendoLightColor: Optional[str]=None, kendoLightHoverColor: Optional[str]=None, kendoLightActiveColor: Optional[str]=None, kendoLightEmphasisColor: Optional[str]=None, kendoLightOnSubtleColor: Optional[str]=None, kendoOnLightColor: Optional[str]=None, kendoLightOnSurfaceColor: Optional[str]=None, kendoDarkSubtleColor: Optional[str]=None, kendoDarkSubtleHoverColor: Optional[str]=None, kendoDarkSubtleActiveColor: Optional[str]=None, kendoDarkColor: Optional[str]=None, kendoDarkHoverColor: Optional[str]=None, kendoDarkActiveColor: Optional[str]=None, kendoDarkEmphasisColor: Optional[str]=None, kendoDarkOnSubtleColor: Optional[str]=None, kendoOnDarkColor: Optional[str]=None, kendoDarkOnSurfaceColor: Optional[str]=None, kendoInverseSubtleColor: Optional[str]=None, kendoInverseSubtleHoverColor: Optional[str]=None, kendoInverseSubtleActiveColor: Optional[str]=None, kendoInverseColor: Optional[str]=None, kendoInverseHoverColor: Optional[str]=None, kendoInverseActiveColor: Optional[str]=None, kendoInverseEmphasisColor: Optional[str]=None, kendoInverseOnSubtleColor: Optional[str]=None, kendoOnInverseColor: Optional[str]=None, kendoInverseOnSurfaceColor: Optional[str]=None, kendoSeriesAColor: Optional[str]=None, kendoSeriesABoldColor: Optional[str]=None, kendoSeriesABolderColor: Optional[str]=None, kendoSeriesASubtleColor: Optional[str]=None, kendoSeriesASubtlerColor: Optional[str]=None, kendoSeriesBColor: Optional[str]=None, kendoSeriesBBoldColor: Optional[str]=None, kendoSeriesBBolderColor: Optional[str]=None, kendoSeriesBSubtleColor: Optional[str]=None, kendoSeriesBSubtlerColor: Optional[str]=None, kendoSeriesCColor: Optional[str]=None, kendoSeriesCBoldColor: Optional[str]=None, kendoSeriesCBolderColor: Optional[str]=None, kendoSeriesCSubtleColor: Optional[str]=None, kendoSeriesCSubtlerColor: Optional[str]=None, kendoSeriesDColor: Optional[str]=None, kendoSeriesDBoldColor: Optional[str]=None, kendoSeriesDBolderColor: Optional[str]=None, kendoSeriesDSubtleColor: Optional[str]=None, kendoSeriesDSubtlerColor: Optional[str]=None, kendoSeriesEColor: Optional[str]=None, kendoSeriesEBoldColor: Optional[str]=None, kendoSeriesEBolderColor: Optional[str]=None, kendoSeriesESubtleColor: Optional[str]=None, kendoSeriesESubtlerColor: Optional[str]=None, kendoSeriesFColor: Optional[str]=None, kendoSeriesFBoldColor: Optional[str]=None, kendoSeriesFBolderColor: Optional[str]=None, kendoSeriesFSubtleColor: Optional[str]=None, kendoSeriesFSubtlerColor: Optional[str]=None, legendBackgroundColor: Optional[str]=None, legendNameFontColor: Optional[str]=None, logoBlueBackgroundColor: Optional[str]=None, logoChocoBackgroundColor: Optional[str]=None, logoColor: Optional[str]=None, logoCyanBackgroundColor: Optional[str]=None, logoForestBackgroundColor: Optional[str]=None, logoIconUrl: Optional[str]=None, emptyStateIconUrl: Optional[str]=None, logoLimeBackgroundColor: Optional[str]=None, logoOliveBackgroundColor: Optional[str]=None, logoOrangeBackgroundColor: Optional[str]=None, logoPlumBackgroundColor: Optional[str]=None, logoPurpleBackgroundColor: Optional[str]=None, logoSlateBackgroundColor: Optional[str]=None, mapMarkerClusterColor: Optional[str]=None, mapTooltipAdditionalFieldsDescriptionFontColor: Optional[str]=None, mapTooltipAdditionalFieldsHeaderFontColor: Optional[str]=None, mapTooltipHeaderFontColor: Optional[str]=None, mapTooltipSubHeaderFontColor: Optional[str]=None, menuActiveColor: Optional[str]=None, menuBackgroundActiveColor: Optional[str]=None, menuBackgroundColor: Optional[str]=None, menuDividerColor: Optional[str]=None, menuHoverColor: Optional[str]=None, menuItemActiveColor: Optional[str]=None, menuItemBackgroundColor: Optional[str]=None, menuItemBackgroundHoverColor: Optional[str]=None, menuItemHoverColor: Optional[str]=None, menuPrimaryColor: Optional[str]=None, numberIconColor: Optional[str]=None, numberIconTextColor: Optional[str]=None, objectIconColor: Optional[str]=None, objectIconTextColor: Optional[str]=None, opacity00: Optional[str]=None, opacity05: Optional[str]=None, opacity10: Optional[str]=None, opacity20: Optional[str]=None, opacity30: Optional[str]=None, opacity40: Optional[str]=None, opacity50: Optional[str]=None, opacity60: Optional[str]=None, opacity70: Optional[str]=None, opacity80: Optional[str]=None, opacity90: Optional[str]=None, opacity95: Optional[str]=None, opacity100: Optional[str]=None, opacityDisabled: Optional[str]=None, opacityLoading: Optional[str]=None, otherIconColor: Optional[str]=None, otherIconTextColor: Optional[str]=None, pageBackgroundColor: Optional[str]=None, pageTitleBoxShadowColor: Optional[str]=None, referenceIconColor: Optional[str]=None, referenceIconTextColor: Optional[str]=None, resetZoomIconPath: Optional[str]=None, resetZoomIconUrl: Optional[str]=None, resetZoomIconColor: Optional[str]=None, sankeyChartLabelBackgroundColor: Optional[str]=None, scrollbarThumbColor: Optional[str]=None, scrollbarTrackColor: Optional[str]=None, secondaryFontColor: Optional[str]=None, secondaryVariantFontColor: Optional[str]=None, selectFieldPillActiveBackgroundColor: Optional[str]=None, selectFieldPillHoverBackgroundColor: Optional[str]=None, selectFieldPillTextColor: Optional[str]=None, selectionBackgroundColor: Optional[str]=None, sidePanelSubtitleColor: Optional[str]=None, stringIconColor: Optional[str]=None, stringIconTextColor: Optional[str]=None, subMenuItemBackgroundActiveColor: Optional[str]=None, successColor: Optional[str]=None, timeGraphBackgroundColor: Optional[str]=None, timeGraphDefaultEntityColor: Optional[str]=None, timeGraphDefaultLabelColor: Optional[str]=None, timeGraphHighlightColor: Optional[str]=None, timeGraphScaleBackgroundColor: Optional[str]=None, timeGraphScaleBorderColor: Optional[str]=None, timeGraphScaleFontColor: Optional[str]=None, timeGraphScaleFontSize: Optional[str]=None, timeGraphTooltipBackgroundColor: Optional[str]=None, timeGraphTooltipBodyColor: Optional[str]=None, timeGraphTooltipSubtitleColor: Optional[str]=None, timeGraphTooltipTitleColor: Optional[str]=None, timeSeriesIconColor: Optional[str]=None, timeSeriesIconTextColor: Optional[str]=None, toggleSwitchBackgroundColor: Optional[str]=None, toggleSwitchBorderColor: Optional[str]=None, toggleSwitchCheckedBorderColor: Optional[str]=None, toggleSwitchCheckedColor: Optional[str]=None, toggleSwitchCheckedDisabledBackgroundColor: Optional[str]=None, toggleSwitchCheckedDisabledBorderColor: Optional[str]=None, toggleSwitchCheckedDisabledColor: Optional[str]=None, toggleSwitchColor: Optional[str]=None, toggleSwitchDisabledBackgroundColor: Optional[str]=None, toggleSwitchDisabledBorderColor: Optional[str]=None, toggleSwitchDisabledColor: Optional[str]=None, tooltipBackgroundColor: Optional[str]=None, warningColor: Optional[str]=None, zebraStripeBackgroundColor: Optional[str]=None) -> None: ...

    @overload
    def toJson(self) -> any:
    """
    Convert the internal object representation to a JSON object.
    
    @return JSON object representation
    
    @see #fromJson
    """
        ...
    @overload
    def toJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
    """
    Convert the internal object representation to a _typed_ JSON object.
    @param omitTopLevelType
           Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
           the outer level of the produced json.
    @param runtime
           If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
           performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
    
    
    @return JSON object representation
    
    @see #fromJson
    @see #toJson
    @see serdeser.c3doc
    @see JsonType
    """
        ...
    @overload
    def toTypedJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toJsonString(self) -> str:
        ...
    @overload
    def toJsonString(self, pretty: bool) -> str:
    """
    Convert the internal object representation to a serialized JSON string.
    
    @return JSON object as string
    """
        ...
    @overload
    def toTypedJsonString(self) -> str:
        ...
    @overload
    def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
        ...
    @overload
    def toJsString(self) -> str:
        ...
    @overload
    def toJsString(self, withType: bool) -> str:
    """
    Convert the internal object representation to a serialized JavaScript object literal.
    
    @return JavaScript object literal string
    """
        ...
    @overload
    def toXmlString(self) -> str:
        ...
    @overload
    def toXmlString(self, withType: bool) -> str:
    """
    Convert the internal object representation to a serialized XML string.
    
    @return XML element as string
    
    @see #fromXmlString
    """
        ...
    def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
    """
    Convert the internal object representation to a string serialized representation of the object.
    
    @return string serialized object representation
    """
        ...
    @classmethod
    def fromJson(cls, json: any) -> Union[UiSdlThemeTemplate]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJson
    """
        ...
    @classmethod
    def fromJsonString(cls, json: str) -> Union[UiSdlThemeTemplate]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJsonString
    """
        ...
    @classmethod
    def fromXmlString(cls, xml: str) -> Union[UiSdlThemeTemplate]:
    """
    Load the XML-based representation and reconstruct the corresponding object.
    
    fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
    may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
    isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
    will return an instance of the correct type.
    
    @see #toXmlString
    """
        ...
    @classmethod
    def deserialize(cls, contentStr: str, contentType: str) -> Union[UiSdlThemeTemplate]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
    """
        ...
    def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
    """
    Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
    there is a slight possibility that two objects with the same fingerprint will actually differ.
    
    The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
    {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
    unless the allIdentifiedRefFields option is specified.
    
    If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
    However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
    
    @param allIdentifiedRefFields
              if `true`, fingerprint individual fields of persistable references, not just the `id`
    @param trackRecursiveRefs
              if `true`, a set of referenced objects is maintained to avoid infinite recursion
    @param traversedRefs
              only considered together with trackRecursiveRefs and if provided then all traversed references are
              checked against and added to it
    @return integer fingerprint
    
    @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
    """
        ...
    def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
    """
    Measures retained memory by this instance.
    
    @param deep
           if true and this instance contains references to other objects also measures memory retained by those
    @param allMeasured
           if set then will skip instances that are in the set and will add instances that where measured by this call
    @return retained memory in bytes for this instances
    """
        ...
    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> UiSdlThemeTemplate:
    """
    Returns new instance with all references to old type, including result of #type, replaced with new type. If new
    type does not contain fields from old or field value types are not convertable then drops the field.
    
    This method is used during live metadata update
    """
        ...
    def super(self, mixin: Type=None) -> Any:
    """
     Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
     useful for redispatching **member** methods reimplemented on this type to a parent implementation:
     ```js
     function toString() {
       return this.super().toString() + ', x=' + this.x;
     }
     ```
    
     ```py
     def toString(this):
        return this.super().toString() + ', x=' + this.x
    ```
    
     To redispatch **static** methods, see {@link Type#super}.
    
     Note that this not the same as the language-specific `super` keyword because it works through the type system and
     supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
     globally.
    
     If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
     This can be used to create a local implementation "around" the server implementation for additional caching or
     other local state management.
    
     @param mixin if specified, this mixin is used instead or an error is thrown
     @return "super" calling proxy for this object
    
     @see Type.super
    """
        ...
    @overload
    def instanceOf(self, typeName: str) -> bool:
    """
    Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    
    @return true if this instance is of this type or any of its mixins
    """
        ...
    @overload
    def instanceOf(self, type: Type) -> bool:
    """
    Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    
    @return true if this instance is of this type or any of its mixins
    
    @see ValueType#isA
    """
        ...
    def isEmptyObj(self) -> bool:
    """
    Whether all the fields of this instance are empty.
    """
        ...
    def isSame(self, other: Obj) -> bool:
    """
    Whether the specified instance represents exactly the same object as this instance.
    """
        ...
    @overload
    def isFieldSet(self, field: str) -> bool:
    """
     Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
     if the field value set the its default value by the constructor. A set field is never missing.
    
    @param field the field to check
    
    @return whether the specified field is set
    """
        ...
    @overload
    def isFieldSet(self, field: FieldType) -> bool:
    """
     Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
     if the field value set the its default value by the constructor. A set field is never missing.
    
    @param field the field to check
    
    @return whether the specified field is set
    """
        ...
    @overload
    def isFieldMissing(self, field: str) -> bool:
    """
     Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
     should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
    {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
    A missing field is never set.
    
    @param field the field to check
    
    @return whether the specified field is missing
    """
        ...
    @overload
    def isFieldMissing(self, field: FieldType) -> bool:
    """
     Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
     should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
    {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
    A missing field is never set.
    
    @param field the field to check
    
    @return whether the specified field is missing
    """
        ...
    @overload
    def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
    """
    Returns value of the given field.
    
    @param field
              Field to return the value for
           defaultToEmpty
              will return default empty value if field is missing
    """
        ...
    @overload
    def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
    """
    Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
    the obj.
    
    @param field
              Field to return the value for
           defaultToEmpty
              will return default empty value if field is missing
    @return value for the given field
    """
        ...
    def fieldValues(self) -> Union[Array[FieldValue]]:
    """
    Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
    """
    Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
    Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
    #dataFieldTypes
    """
        ...
    def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
    """
    Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
    """
    Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldNames(self) -> Union[Array[str]]:
    """
    Returns all data field names including those whose values are empty. Array is ordered by
    field ordinal.
    """
        ...
    def unsetFieldNames(self) -> Union[Array[str]]:
    """
    @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
    field ordinal.
    """
        ...
    def missingFieldNames(self) -> Union[Array[str]]:
    """
    @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
    field ordinal.
    """
        ...
    @overload
    def at(self, ordinal: int) -> Union[T]:
    """
    Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
    
    @param ordinal
            Integer ordinal of the field in the parent type
    @return value of field at ordinal
    """
        ...
    @overload
    def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
    """
    Return value for the given serialized expression
    
    @param expr
            Serialized expression to obtain the value in the given Obj
    @param failIfNotValid
            If set, fails if not a valid expression
    @return value obtained as a result of expression evaluation
    """
        ...
    def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
    """
    Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
    `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
    that it also handles `null`. If path contains any collections then only first element will be traversed,
    unless the collection index is specified in the path.
    
    If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
    
    @param fieldPath
              field names separated by dots
    @param failIfNotFound
              if true, an error will be thrown if the any of the field types aren't defined
    @param context
              if an error is thrown, the context returned by calling the lambda will be incorporated
    @return the field or null
    """
        ...
    def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
    """
    Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
    traversals, unless the collection index is specified in the path.
    
    @param fieldPath
              field names separated by dots
    @param failIfNotFound
              if true, an error will be thrown if the any of the field types aren't defined
    @param context
              if an error is thrown, the context returned by calling the lambda will be incorporated
    @return fields as a flat list
    
    @see #fieldValueAtPath
    """
        ...
    @overload
    def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
    """
    Perform an action for each non-empty field of this object.
    
    @param action
              lambda to apply
    """
        ...
    @overload
    def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
    """
    Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
    
    @param spec
              which fields to include
    @param action
              lambda to apply
    """
        ...
    def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
    """
    Perform an action for each {@link isFieldSet set} field of this object.
    
    @param action
              lambda to apply
    """
        ...
    def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
    """
    Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
    on provided `spec`.
    
    @param spec
              which fields to include
    @param action
              lambda to apply; stop if this `action` returns `false
    @return `true` if iteration was not aborted by lambda i.e. it saw all field values
    """
        ...
    @overload
    def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
    the field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param action
              function to be executed for each pair of field type and Obj instance
    """
        ...
    @overload
    def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
    the field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param action
              function to be executed for each pair of field type and Obj instance
    """
        ...
    def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
    """
    Execute the specified lambda against each referenced Obj instance in this type while processing action returns
    `true`.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param action
              function to be executed for each pair of field type and Obj instance; stops processing if return `false`
    @return `true` if iteration was not aborted by lambda i.e. it saw all refs
    """
        ...
    def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
    """
        ...
    def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
    """
    Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
    processing action returns `true`.
    """
        ...
    @overload
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> UiSdlThemeTemplate:
    """
    Result of this function call is a copy of current instance with all non empty fields replaced based on results of
    the `mapper` invocation.
    
    @param action
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> UiSdlThemeTemplate:
    """
    Result of this function call is a copy of current instance with all fields replaced based on results of the
    `mapper` invocation.
    
    @param spec
              which fields to include
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[UiSdlThemeTemplate]:
    """
    Result of this function call is a copy of current instance with all non empty fields replaced based on results of
    the asynchronous `mapper` invocation.
    
    @param action
              lambda to apply for every field value to produce a new value for that fields
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[UiSdlThemeTemplate]:
    """
    Result of this function call is a copy of current instance with all fields replaced based on results of the
    asynchronous `mapper` invocation.
    
    @param spec
              which fields to include
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> UiSdlThemeTemplate:
    """
    Result of this function call is a copy of current instance with specified field value replaced based on result of
    the `mapper` invocation.
    @param field
              field being mapped
    @param includeEmpty
              if set, invokes mapper for fields with empty value
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> UiSdlThemeTemplate:
    """
    Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
    lambda application.
    
    Result of this function call is a copy of current instance with all references replaced based on results of the
    `mapper` invocation.
    
    @param action
              function to be executed for each pair of field type and Obj instance
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> UiSdlThemeTemplate:
    """
    Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
    lambda application.
    
    Result of this function call is a copy of current instance with all references replaced based on results of the
    `mapper` invocation.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param mapper
              function to be executed for each pair of field type and Obj instance for producing new reference value
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
    argument is a result of previous application. Initial value of `accumulator` will be `null`.
    
    This function is useful for calculating aggregate values based on all current non empty field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
    argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
    
    This function is useful for calculating aggregate values based on all current non empty field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
    result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
    
    This function is useful for calculating aggregate values based on all field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
    """
    Evaluates given projection expression over this instance.
    """
        ...
    @overload
    def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
    """
    Evaluates given projection over this instance and returns results as json.
    """
        ...
    @overload
    def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
    """
    Evaluates given projection over this instance and returns results as instance of the new Obj.
    """
        ...
    @overload
    def validateObj(self) -> UiSdlThemeTemplate:
    """
    Populates all missing default values and throws error if any constraint is violated.
    """
        ...
    @overload
    def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
    """
    Validate that the Obj fields are set according to all the required rules.
    """
        ...
    @overload
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> UiSdlThemeTemplate:
    """
    Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
    defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              name of the field
    @param value
              of the field
    @param doNotConvert
              if true, do not attempt to convert the value to match the field's type
    @return new Obj
    
    @see #withoutField
    @see #defaultField
    """
        ...
    @overload
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> UiSdlThemeTemplate:
    """
    Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
    defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              the field
    @param value
              of the field
    @param doNotConvert
              if true, do not attempt to convert the value to match the field's type
    @return new Obj
    
    @see #withoutField
    @see #defaultField
    """
        ...
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> UiSdlThemeTemplate:
    """
    Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
    defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
    
    @param fields
              map of field names/values
    @param doNotConvert
              if true, attempt to convert the values to match the fields' type
    @return new Obj
    """
        ...
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> UiSdlThemeTemplate:
    """
    Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
    If you would like to #unsetField, you should call #withoutFieldAtPath instead.
    
    Immutable objects may return the same instance if the field being set does not actually represent a
    change to the existing object.
    
    @param path
              path to set value at
    @param value
              value to set
    @param doNotConvert
              if true, attempt to convert the values to match the fields' type
    @param doNotCreateIfMissing
              true indicates that any empty reference along the path will not set the value
    @return new Obj
    """
        ...
    def withoutFieldAtPath(self, path: str) -> UiSdlThemeTemplate:
    """
    Builds a new Obj without the specified path field.
    
    Immutable objects may return the same instance if the field being removed does not actually represent a
    change to the existing object.
    
    @param path
              path for field to remove
    @return new Obj
    
    @see #withFieldAtPath
    @see #withoutField
    """
        ...
    @overload
    def withoutField(self, field: str) -> UiSdlThemeTemplate:
    """
    Builds a new Obj, removing the field with the provided name.
    
    Immutable objects may return the same instance if the field being removed is not present in the existing object.
    
    @param field
              name of the field to remove
    @return new Obj with removed field
    
    @see #unsetField
    @see #removeField
    """
        ...
    @overload
    def withoutField(self, field: FieldType) -> UiSdlThemeTemplate:
    """
    Builds a new Obj, removing the field with the provided field type.
    
    Immutable objects may return the same instance if the field being removed is not present in the existing object.
    
    @param field
              name of the field to remove
    @return new Obj with removed field
    
    @see #unsetField
    @see #removeField
    """
        ...
    def withoutFields(self, fields: Array[str]) -> UiSdlThemeTemplate:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> UiSdlThemeTemplate:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> UiSdlThemeTemplate:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> UiSdlThemeTemplate:
    """
    Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
    calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
    {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
    fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
    fields that have already been set.
    
    {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
    As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
    
    @param includeEmptyRefsWithDefaults
              it `true` then missing / empty child references that have fields with defaults will also be instantiated
    @param defaultFields
              If not empty, a list of default field paths to populate.  Any default fields not specified in the
              array will be ignored.
    @return new Obj
    
    @see #defaultField
    @see FieldType#defaultValueConst
    @see FieldType#defaultValue
    """
        ...
    @overload
    def defaultField(self, field: str) -> UiSdlThemeTemplate:
    """
    Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
    method will behave the same as {@link #unsetField}.
    
    @param field
            name of the field to default
    @return new `Obj` with the specified field set to its default value
    
    @see #withField
    @see #unsetField
    """
        ...
    @overload
    def defaultField(self, field: FieldType) -> UiSdlThemeTemplate:
    """
    Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
    method will behave the same as {@link #unsetField}.
    
    @param field
            field type to default
    @return new `Obj` with the specified field set to its default value
    
    @see #withField
    @see #unsetField
    """
        ...
    @overload
    def unsetField(self, field: str) -> UiSdlThemeTemplate:
    """
    Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
    is different from {@link removeField}
    
    @param field
            name of the field to unset
    @return new `Obj` with the specified field unset
    
    @see #withoutField
    @see #removeField
    """
        ...
    @overload
    def unsetField(self, field: FieldType) -> UiSdlThemeTemplate:
    """
    Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
    is different from {@link removeField}
    
    @param field
            field type to unset
    @return new `Obj` with the specified field unset
    
    @see #withoutField
    @see #removeField
    """
        ...
    @overload
    def removeField(self, field: str) -> UiSdlThemeTemplate:
    """
    Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
    is different from {@link #unsetField}
    
    @param field
            name of the field to remove
    @return new `Obj` with the specified field removed
    
    @see #withoutField
    @see #unsetField
    """
        ...
    @overload
    def removeField(self, field: FieldType) -> UiSdlThemeTemplate:
    """
    Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
    is different from {@link #unsetField}
    
    @param field
            field type to remove
    @return new `Obj` with the specified field removed
    
    @see #withoutField
    @see #unsetField
    """
        ...
    @overload
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> UiSdlThemeTemplate:
    """
    Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
    In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
    
    @param other
              object
    @param fieldPathMergeSpec
              mapping of fields of the object to the respective merge annotations
    @return the new merged Obj
    """
        ...
    @overload
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> UiSdlThemeTemplate:
    """
    Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
    In case of conflicts, fields of other instance take precedence.
    
    @param other
              object
    @param otherFieldsFilter
              only fields of otherFieldsFilter type from other are merged into this obj.
    @return the new merged Obj
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> UiSdlThemeTemplate:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> UiSdlThemeTemplate:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
    traverse child reference and collection fields.
    """
        ...
    def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
    """
    Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
    Fields that non null in only one of this and other will be in the resulting Obj without change.
    """
        ...
    def mergeJson(self, json: any) -> UiSdlThemeTemplate:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> UiSdlThemeTemplate:
    """
    Merge the obj references within the current obj
    @param deep
           If set, traverses the reference fields within the obj as well for a deep merge
    @param objKey
           lambda specifying how to obtain the key for the Obj while determining which Objs to merge
    @param filter
           Field paths that need to be filtered from this merge
    @return Obj with child references merged
    """
        ...
    def sumObj(self, other: Obj, deep: bool=None) -> UiSdlThemeTemplate:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[UiSdlThemeTemplate]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[UiSdlThemeTemplate]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[UiSdlThemeTemplate]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[UiSdlThemeTemplate]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[UiSdlThemeTemplate]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, UiSdlThemeTemplate]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, UiSdlThemeTemplate]]:
    """
    Create a map with the given key type and elements of this type.
    """
        ...
    @classmethod
    def myReferenceType(cls) -> ReferenceType:
        ...
    @classmethod
    def myMapTypeOf(cls, keyType: ValueType) -> MapType:
        ...
    @classmethod
    def myMapType(cls) -> MapType:
        ...
    @classmethod
    def myArrayType(cls) -> ArrayType:
        ...
    @classmethod
    def mySetType(cls) -> SetType:
        ...
    @classmethod
    def myStreamType(cls) -> StreamType:
        ...
    def toBuilder(self) -> ObjBuilder[UiSdlThemeTemplate]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[UiSdlThemeTemplate]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> UiSdlThemeTemplate:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> UiSdlThemeTemplate:
    """
    Construct an instance of this type from provided fields
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> UiSdlThemeTemplate:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> UiSdlThemeTemplate:
    """
    Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
               populated
    
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> UiSdlThemeTemplate:
    """
    Construct an instance from provided fields
    @param fields
               Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
               field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
               to Panda.make()
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
               -> 0) populated. Passing an empty value for a field will result in the initial value being set if
               the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
    
    
    @see fromFields
    @see beforeMake
    @see afterMake
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Any, withDefaults: bool=None) -> UiSdlThemeTemplate:
    """
    Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
    
    ```js
    User.make({
      email: 'joe@smith.com',
      realName: 'Joe Smith'
    })
    
    Obj.make({
      type: 'User',
      email: 'joe@smith.com',
      realName: 'Joe Smith'
    })
    ```
    
    ```py
    c3.User.make({
      "email": 'joe@smith.com',
      "realName": 'Joe Smith'
    })
    
    c3.Obj.make({
      "type": 'User',
      "email": 'joe@smith.com',
      "realName": 'Joe Smith'
    })
    
    c3.User(email='joe@smith.com', realName='Joe Smith')
    
    c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
    ```
    
    Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
    specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
    such as {@link Ann.Ser} do not apply.
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see fromFields
    @see beforeMake
    @see afterMake
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, s: str) -> Union[UiSdlThemeTemplate]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> UiSdlThemeTemplate:
    """
    Construct an instance of this type from provided instance of a subtype or a "duck type".
    """
        ...
    def remakeAs(self, type: Type) -> O:
    """
    Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
    converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
    could be costly if types have different value types for same fields.
    
    @param type
            Type of new obj to return
    @return new obj of the requested type with all fields present in the original obj that are defined in the new type
            converted and copied to it
    """
        ...
    @classmethod
    def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
    """
    Optional override that will be called every time instance of this type is created.
    
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    def afterMake(self) -> UiSdlThemeTemplate:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> UiSdlThemeTemplate:
    """
    Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
    every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
    Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
    
    @see ValueType#defaultEmptyValue
    """
        ...
    def toData(self) -> Union[Data]:
    """
    Represent the current obj instance as {@link Data}
    """
        ...
    @classmethod
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[UiSdlThemeTemplate]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> UiSdlThemeTemplate:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @overload
    @classmethod
    def fetch(cls, spec: FetchSpec=None) -> FetchResult[UiSdlThemeTemplate]:
    """
    Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param spec
              Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
              of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @overload
    @classmethod
    def fetch(cls, filter: Filter) -> FetchResult[UiSdlThemeTemplate]:
    """
    Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param filter
              Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @classmethod
    def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[UiSdlThemeTemplate]]:
    """
    Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param spec
              Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
    @return Requested obj stream.
    """
        ...
    @classmethod
    def fetchArrowStream(cls, spec: FetchArrowStreamSpec) -> Stream[Arrow]:
    """
    Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
    specified maximum batch size.
    
    @param spec
              Specification of what data to fetch.
    @return Stream of Arrow batches.
    """
        ...
    @classmethod
    def scanArrow(cls, spec: ScanArrowSpec) -> Union[ArrowIterator]:
    """
    Finds rows matching specification and returns them as iterator of Arrow batches.
    
    @param spec
              Specification of what rows to return.
    @return Iterator of Arrow batches.
    """
        ...
    @classmethod
    def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[UiSdlThemeTemplate]]]:
    """
    Fetched multiple obj instances in multiple locales based on specification.
    
    @param spec
           Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
           type.
    @return Requested objs where key of map is locale id
    """
        ...
    @classmethod
    def fetchCount(cls, spec: FetchFilterSpec=None) -> int:
    """
    @return The number of entries that match the specification.
    """
        ...
    @classmethod
    def fetchCountEstimated(cls, spec: FetchFilterSpec=None, updateStatistics: bool=None) -> int:
    """
    Gets the estimated count of objs that a fetch on the type with the optional filter will return.
    For non-kv types, The count is obtained from the query explain plan for the fetch.
    For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
    other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
    upper bound for the partition. For more accurate results, perform fillBuckets first.
    
    @param spec
           Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
           explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
           fields.
    @param updateStatistics
           If true, the database statistics for all tables involved in the query will be updated prior to obtaining
           the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
    
    @return The requested estimated count.
    """
        ...
    @classmethod
    def scan(cls, spec: ScanSpec) -> Union[ScanStats]:
    """
    Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
    a callback function for the given batch.
    
    @param spec
              Specification of the scan action.
    @return Statistics of the scan action.
    """
        ...
    @classmethod
    def batchIds(cls, spec: BatchIdsSpec=None) -> Union[Stream[str]]:
    """
    Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
    
    @param spec
           Spec indicating how the operation should work.
    
    IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
                rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
                cause an issue if the results are blindly used to create filters for fetching batches as the last batch
                would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
                other would be specified, depending on whether you are interested in controlling the number of batches
                or batch size.
    
    @return A stream of batch ids based on the input parameters.
    """
        ...
    @overload
    @classmethod
    def exists(cls, spec: ExistsSpec=None) -> bool:
    """
    @return True if there are at least the number of entries matching the filter/count specified in the spec.
    """
        ...
    @overload
    @classmethod
    def exists(cls, filter: Filter) -> bool:
    """
    @return True if there are at least the number of entries matching the filter/count specified in the spec.
    """
        ...
    @classmethod
    def keyFieldType(cls) -> FieldType:
    """
    @return key field type.
    """
        ...
    def keyFieldValue(self) -> Union[str]:
    """
    @return key field value.
    """
        ...
    def singletonMap(self) -> Map[str, WithKey]:
    """
    Build a map of the correct type with a single element which is this instance and key field value as key.
    """
        ...
    def dependencies(self) -> MetadataDeps[UiSdlThemeTemplate]:
    """
    Retrieves dependencies to types or other metadata elements for the given instance of metadata.
    """
        ...
    def save(self, subPath: str=None, contentType: str=None) -> UiSdlThemeTemplate:
        ...
    def remove(self, spec: UpsertSpec=None) -> bool:
        ...
    def removeWithChildren(self) -> bool:
    """
    Remove the metadata instance as well as its associated backward dependencies.
    Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
    """
        ...
    @classmethod
    def removeAll(cls, removeFilter: str=None) -> int:
        ...
    def update(self, srcObj: UiSdlThemeTemplate=None, spec: UpsertSpec=None) -> Union[UiSdlThemeTemplate]:
        ...
    def upsert(self, srcObj: UiSdlThemeTemplate=None, spec: UpsertSpec=None) -> Union[UiSdlThemeTemplate]:
        ...
    @classmethod
    def metadataFolder(cls) -> Union[str]:
    """
    Retrieves folder that holds metadata.
    """
        ...
    @classmethod
    def hasArbitraryFolderHierarchy(cls) -> bool:
    """
    If this Metadata type has arbitrary folder hierarchy.
    """
        ...
    @classmethod
    def isValidMetadataJson(cls, pkg: str, filePath: str) -> bool:
    """
    If metadata path is valid.
    @param pkg
       name of the package
    @param filePath
       path of metadata json file
    """
        ...
    def validateMetadata(self) -> ValidateObjResult:
    """
    Optional member function to enable custom validation logic.
    """
        ...
    def toString(self) -> Union[str]:
    """
    Build the canonical string representation of this instance. This must be implemented to provide serialization.
    
    If the object has no content, and fromString would properly reproduce it from a null value, toString may return
    null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
    
    @see #fromString
    """
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[UiSdlThemeTemplate]:
    """
    Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
    provide deserialization.
    
    fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
    of called-on type, but perhaps not the same type.
    
    E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
    
    @see #toString
    """
        ...
    @classmethod
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[UiSdlThemeTemplate]:
    """
    @return single instance of this Identified type by id.
    """
        ...

