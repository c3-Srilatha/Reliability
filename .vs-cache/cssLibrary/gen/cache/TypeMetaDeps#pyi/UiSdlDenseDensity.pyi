#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.ScanStats import ScanStats
from c3.platform.Promise import Promise
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.platform.Meta import Meta
from c3.platform.ScanArrowSpec import ScanArrowSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MetadataDeps import MetadataDeps
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.platform.WithKey import WithKey
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.FieldType import FieldType
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.Stream import Stream
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Filter import Filter
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.FetchResult import FetchResult
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.FieldValue import FieldValue
from c3.platform.SetType import SetType
from c3.platform.ArrowIterator import ArrowIterator
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ScanSpec import ScanSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude
from c3.platform.ExistsSpec import ExistsSpec

# Python definitions for the C3 type UiSdlDenseDensity


class UiSdlDenseDensity(UiSdlDensityTemplate):
    """
    UiSdlDenseDensity type mixes UiSdlDensityTemplate and embeds the C3DefaultDensity theme values.
    Users can remix this type in their package and override/add variables.
    
    @remarks this represents a made instance of UiSdlDenseDensity
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

    densityCategory: Optional[str]
    """
    Whether this is a Light or a Dark Theme.
    """

    borderHeightBtnDivider: Optional[str]
    """
    borderHeightBtnDivider
    """

    borderRadiusBtn: Optional[str]
    """
    borderRadiusBtn
    """

    borderRadiusCard: Optional[str]
    """
    borderRadiusCard
    """

    borderRadiusCircle: Optional[str]
    """
    borderRadiusCircle
    """

    borderRadiusMenu: Optional[str]
    """
    borderRadiusMenu
    """

    borderRadiusPill: Optional[str]
    """
    borderRadiusPill
    """

    borderRadiusDivider: Optional[str]
    """
    borderRadiusDivider
    """

    borderRadiusImageLg: Optional[str]
    """
    borderRadiusImageLg
    """

    borderRadiusImageMd: Optional[str]
    """
    borderRadiusImageMd
    """

    borderRadiusImageSm: Optional[str]
    """
    borderRadiusImageSm
    """

    borderRadiusImageXl: Optional[str]
    """
    borderRadiusImageXl
    """

    borderRadiusInput: Optional[str]
    """
    borderRadiusInput
    """

    borderRadiusXs: Optional[str]
    """
    borderRadiusXs
    """

    borderRadiusSm: Optional[str]
    """
    borderRadiusSm
    """

    borderRadiusMd: Optional[str]
    """
    borderRadiusMd
    """

    borderRadiusLg: Optional[str]
    """
    borderRadiusLg
    """

    borderRadiusXl: Optional[str]
    """
    borderRadiusXl
    """

    borderRadiusSegBtnEnd: Optional[str]
    """
    borderRadiusSegBtnEnd
    """

    borderRadiusSegBtnMiddle: Optional[str]
    """
    borderRadiusSegBtnMiddle
    """

    borderRadiusSegBtnStart: Optional[str]
    """
    borderRadiusSegBtnStart
    """

    borderWidthBtn: Optional[str]
    """
    borderWidthBtn
    """

    borderWidthSm: Optional[str]
    """
    borderWidthSm
    """

    borderWidthMd: Optional[str]
    """
    borderWidthMd
    """

    borderWidthLg: Optional[str]
    """
    borderWidthLg
    """

    borderWidthXl: Optional[str]
    """
    borderWidthXl
    """

    borderWidthCard: Optional[str]
    """
    borderWidthCard
    """

    borderWidthDividerSm: Optional[str]
    """
    borderWidthDividerSm
    """

    borderWidthInputSm: Optional[str]
    """
    borderWidthInputSm
    """

    borderWidthMenu: Optional[str]
    """
    borderWidthMenu
    """

    borderWidthSegBtn: Optional[str]
    """
    borderWidthSegBtn
    """

    breadcrumbsHeight: Optional[str]
    """
    breadcrumbsHeight
    """

    breadcrumbsPadding: Optional[str]
    """
    breadcrumbsPadding
    """

    cardButtonTopMargin: Optional[str]
    """
    cardButtonTopMargin
    """

    cardTitleHeight: Optional[str]
    """
    cardTitleHeight
    """

    chartTooltipWidth: Optional[str]
    """
    chartTooltipWidth
    """

    componentMargin: Optional[str]
    """
    componentMargin
    """

    componentPadding: Optional[str]
    """
    componentPadding
    """

    dropdownDescriptionPadding: Optional[str]
    """
    dropdownDescriptionPadding
    """

    elementWhiteSpace: Optional[str]
    """
    elementWhiteSpace
    """

    extraSmallSizeMargin: Optional[str]
    """
    extraSmallSizeMargin
    """

    extraSmallSizePadding: Optional[str]
    """
    extraSmallSizePadding
    """

    filterFieldTopMargin: Optional[str]
    """
    filterFieldTopMargin
    """

    flexMaxWidth: Optional[str]
    """
    flexMaxWidth
    """

    flexMinWidth: Optional[str]
    """
    flexMinWidth
    """

    fontFamilyDefault: Optional[str]
    """
    fontFamilyDefault
    """

    fontSize01: Optional[str]
    """
    fontSize01
    """

    fontSize02: Optional[str]
    """
    fontSize02
    """

    fontSize03: Optional[str]
    """
    fontSize03
    """

    fontSize04: Optional[str]
    """
    fontSize04
    """

    fontSize05: Optional[str]
    """
    fontSize05
    """

    fontSize06: Optional[str]
    """
    fontSize06
    """

    fontSize07: Optional[str]
    """
    fontSize07
    """

    fontSize08: Optional[str]
    """
    fontSize08
    """

    fontSize09: Optional[str]
    """
    fontSize09
    """

    fontSize10: Optional[str]
    """
    fontSize10
    """

    fontSize11: Optional[str]
    """
    fontSize11
    """

    fontSize12: Optional[str]
    """
    fontSize12
    """

    fontSize13: Optional[str]
    """
    fontSize13
    """

    fontSize14: Optional[str]
    """
    fontSize14
    """

    fontSize15: Optional[str]
    """
    fontSize15
    """

    fontSize16: Optional[str]
    """
    fontSize16
    """

    fontSize17: Optional[str]
    """
    fontSize17
    """

    fontSizeBody: Optional[str]
    """
    fontSizeBody
    """

    fontSizeH1: Optional[str]
    """
    fontSizeH1
    """

    fontSizeH2: Optional[str]
    """
    fontSizeH2
    """

    fontSizeMassive: Optional[str]
    """
    fontSizeMassive
    """

    fontWeightLight: Optional[str]
    """
    fontWeightLight
    """

    fontWeightRegular: Optional[str]
    """
    fontWeightRegular
    """

    fontWeightMedium: Optional[str]
    """
    fontWeightMedium
    """

    fontWeightSemibold: Optional[str]
    """
    fontWeightSemibold
    """

    fontWeightBold: Optional[str]
    """
    fontWeightBold
    """

    fontWeightBlack: Optional[str]
    """
    fontWeightBlack
    """

    formFieldSidePadding: Optional[str]
    """
    formFieldSidePadding
    """

    formOuterPadding: Optional[str]
    """
    formOuterPadding
    """

    gridCellColorWheelSizeLarge: Optional[str]
    """
    gridCellColorWheelSizeLarge
    """

    gridCellColorWheelSizeMedium: Optional[str]
    """
    gridCellColorWheelSizeMedium
    """

    gridCellColorWheelSizeSmall: Optional[str]
    """
    gridCellColorWheelSizeSmall
    """

    gridLayoutInnerPadding: Optional[str]
    """
    gridLayoutInnerPadding
    """

    gridLayoutOuterPadding: Optional[str]
    """
    gridLayoutOuterPadding
    """

    iconBtnSm: Optional[str]
    """
    iconBtnSm
    """

    iconBtnMd: Optional[str]
    """
    iconBtnMd
    """

    iconCheckbox: Optional[str]
    """
    iconCheckbox
    """

    iconInfoMd: Optional[str]
    """
    iconInfoMd
    """

    iconInputSm: Optional[str]
    """
    iconInputSm
    """

    iconLightXs: Optional[str]
    """
    iconLightXs
    """

    iconLightSm: Optional[str]
    """
    iconLightSm
    """

    iconLightMd: Optional[str]
    """
    iconLightMd
    """

    iconLightLg: Optional[str]
    """
    iconLightLg
    """

    iconLightXl: Optional[str]
    """
    iconLightXl
    """

    iconLightXxl: Optional[str]
    """
    iconLightXxl
    """

    iconMessageSm: Optional[str]
    """
    iconMessageSm
    """

    iconMessageMd: Optional[str]
    """
    iconMessageMd
    """

    iconMessageLg: Optional[str]
    """
    iconMessageLg
    """

    iconRegularXs: Optional[str]
    """
    iconRegularXs
    """

    iconRegularSm: Optional[str]
    """
    iconRegularSm
    """

    iconRegularMd: Optional[str]
    """
    iconRegularMd
    """

    iconRegularLg: Optional[str]
    """
    iconRegularLg
    """

    iconRegularXl: Optional[str]
    """
    iconRegularXl
    """

    iconRegularXxl: Optional[str]
    """
    iconRegularXxl
    """

    iconSolidXs: Optional[str]
    """
    iconSolidXs
    """

    iconSolidSm: Optional[str]
    """
    iconSolidSm
    """

    iconSolidMd: Optional[str]
    """
    iconSolidMd
    """

    iconSolidLg: Optional[str]
    """
    iconSolidLg
    """

    iconSolidXl: Optional[str]
    """
    iconSolidXl
    """

    iconSolidXxl: Optional[str]
    """
    iconSolidXxl
    """

    iconMenuIcon: Optional[str]
    """
    iconMenuIcon
    """

    inputContainerPaddingTop: Optional[str]
    """
    inputContainerPaddingTop
    """

    inputIconMarginRight: Optional[str]
    """
    inputIconMarginRight
    """

    inputIconMarginTop: Optional[str]
    """
    inputIconMarginTop
    """

    inputMenuMarginTop: Optional[str]
    """
    inputMenuMarginTop
    """

    largeSizeMargin: Optional[str]
    """
    largeSizeMargin
    """

    largeSizePadding: Optional[str]
    """
    largeSizePadding
    """

    layoutMargin: Optional[str]
    """
    layoutMargin
    """

    letterSpacingLg: Optional[str]
    """
    letterSpacingLg
    """

    letterSpacingMd: Optional[str]
    """
    letterSpacingMd
    """

    letterSpacingSm: Optional[str]
    """
    letterSpacingSm
    """

    letterSpacingXs: Optional[str]
    """
    letterSpacingXs
    """

    lineHeightLg: Optional[str]
    """
    lineHeightLg
    """

    lineHeightMd: Optional[str]
    """
    lineHeightMd
    """

    lineHeightSm: Optional[str]
    """
    lineHeightSm
    """

    mainMenuFontSize: Optional[str]
    """
    mainMenuFontSize
    """

    mainMenuWidth: Optional[str]
    """
    mainMenuWidth
    """

    margin: Optional[str]
    """
    margin
    """

    mediumSizeMargin: Optional[str]
    """
    mediumSizeMargin
    """

    mediumSizePadding: Optional[str]
    """
    mediumSizePadding
    """

    menuItemIconContainerSize: Optional[str]
    """
    menuItemIconContainerSize
    """

    menuItemIconSize: Optional[str]
    """
    menuItemIconSize
    """

    menuItemLabelSpacing: Optional[str]
    """
    menuItemLabelSpacing
    """

    menuItemSize: Optional[str]
    """
    menuItemSize
    """

    menuItemSpacing: Optional[str]
    """
    menuItemSpacing
    """

    modalPadding: Optional[str]
    """
    modalPadding
    """

    padding: Optional[str]
    """
    padding
    """

    pageTitleInputFieldHeight: Optional[str]
    """
    pageTitleInputFieldHeight
    """

    pageTitleInputMinWidth: Optional[str]
    """
    pageTitleInputMinWidth
    """

    pageTitleInputPaddingRight: Optional[str]
    """
    pageTitleInputPaddingRight
    """

    pageTitleMultiSelectPaddingBottom: Optional[str]
    """
    pageTitleMultiSelectPaddingBottom
    """

    size01: Optional[str]
    """
    size01
    """

    size02: Optional[str]
    """
    size02
    """

    size03: Optional[str]
    """
    size03
    """

    size04: Optional[str]
    """
    size04
    """

    size05: Optional[str]
    """
    size05
    """

    size06: Optional[str]
    """
    size06
    """

    size07: Optional[str]
    """
    size07
    """

    size08: Optional[str]
    """
    size08
    """

    size09: Optional[str]
    """
    size09
    """

    size10: Optional[str]
    """
    size10
    """

    size11: Optional[str]
    """
    size11
    """

    size12: Optional[str]
    """
    size12
    """

    size13: Optional[str]
    """
    size13
    """

    size14: Optional[str]
    """
    size14
    """

    size15: Optional[str]
    """
    size15
    """

    size16: Optional[str]
    """
    size16
    """

    size17: Optional[str]
    """
    size17
    """

    size18: Optional[str]
    """
    size18
    """

    size19: Optional[str]
    """
    size19
    """

    size20: Optional[str]
    """
    size20
    """

    size21: Optional[str]
    """
    size21
    """

    size22: Optional[str]
    """
    size22
    """

    size23: Optional[str]
    """
    size23
    """

    sizeFull: Optional[str]
    """
    sizeFull
    """

    sizeHeightBtnLg: Optional[str]
    """
    sizeHeightBtnLg
    """

    sizeHeightBtnMd: Optional[str]
    """
    sizeHeightBtnMd
    """

    sizeHeightBtnSm: Optional[str]
    """
    sizeHeightBtnSm
    """

    sizeHeightMenuMd: Optional[str]
    """
    sizeHeightMenuMd
    """

    sizeHeightMenuSm: Optional[str]
    """
    sizeHeightMenuSm
    """

    sizeHeightNavMenu: Optional[str]
    """
    sizeHeightNavMenu
    """

    sizeHeightTextareaLg: Optional[str]
    """
    sizeHeightTextareaLg
    """

    sizeHeightTextareaMd: Optional[str]
    """
    sizeHeightTextareaMd
    """

    sizeHeightTextareaSm: Optional[str]
    """
    sizeHeightTextareaSm
    """

    sizeImageLg: Optional[str]
    """
    sizeImageLg
    """

    sizeImageMd: Optional[str]
    """
    sizeImageMd
    """

    sizeImageSm: Optional[str]
    """
    sizeImageSm
    """

    sizeImageXl: Optional[str]
    """
    sizeImageXl
    """

    sizeImageXs: Optional[str]
    """
    sizeImageXs
    """

    sizeInputLg: Optional[str]
    """
    sizeInputLg
    """

    sizeInputMd: Optional[str]
    """
    sizeInputMd
    """

    sizeInputSm: Optional[str]
    """
    sizeInputSm
    """

    sizePageLg: Optional[str]
    """
    sizePageLg
    """

    sizePageMd: Optional[str]
    """
    sizePageMd
    """

    sizePageSm: Optional[str]
    """
    sizePageSm
    """

    sizeWidthBtnFull: Optional[str]
    """
    sizeWidthBtnFull
    """

    sizeWidthBtnIconLg: Optional[str]
    """
    sizeWidthBtnIconLg
    """

    sizeWidthBtnIconMd: Optional[str]
    """
    sizeWidthBtnIconMd
    """

    sizeWidthBtnIconSm: Optional[str]
    """
    sizeWidthBtnIconSm
    """

    sizeWidthBtnMin: Optional[str]
    """
    sizeWidthBtnMin
    """

    sizeWidthChartTooltipLg: Optional[str]
    """
    sizeWidthChartTooltipLg
    """

    sizeWidthChartTooltipMd: Optional[str]
    """
    sizeWidthChartTooltipMd
    """

    sizeWidthChartTooltipSm: Optional[str]
    """
    sizeWidthChartTooltipSm
    """

    sizeWidthInputFull: Optional[str]
    """
    sizeWidthInputFull
    """

    sizeWidthInputLg: Optional[str]
    """
    sizeWidthInputLg
    """

    sizeWidthInputMd: Optional[str]
    """
    sizeWidthInputMd
    """

    sizeWidthInputSm: Optional[str]
    """
    sizeWidthInputSm
    """

    sizeWidthInputXl: Optional[str]
    """
    sizeWidthInputXl
    """

    sizeWidthInputXs: Optional[str]
    """
    sizeWidthInputXs
    """

    sizeWidthMenuFull: Optional[str]
    """
    sizeWidthMenuFull
    """

    sizeWidthMenuLg: Optional[str]
    """
    sizeWidthMenuLg
    """

    sizeWidthMenuMd: Optional[str]
    """
    sizeWidthMenuMd
    """

    sizeWidthMenuSm: Optional[str]
    """
    sizeWidthMenuSm
    """

    sizeWidthMenuXl: Optional[str]
    """
    sizeWidthMenuXl
    """

    sizeWidthMenuXs: Optional[str]
    """
    sizeWidthMenuXs
    """

    sizeWidthNumberInputFull: Optional[str]
    """
    sizeWidthNumberInputFull
    """

    sizeWidthNumberInputMin: Optional[str]
    """
    sizeWidthNumberInputMin
    """

    smallSizeMargin: Optional[str]
    """
    smallSizeMargin
    """

    smallSizePadding: Optional[str]
    """
    smallSizePadding
    """

    space01: Optional[str]
    """
    space01
    """

    space02: Optional[str]
    """
    space02
    """

    space03: Optional[str]
    """
    space03
    """

    space04: Optional[str]
    """
    space04
    """

    space05: Optional[str]
    """
    space05
    """

    space06: Optional[str]
    """
    space06
    """

    space07: Optional[str]
    """
    space07
    """

    space08: Optional[str]
    """
    space08
    """

    space09: Optional[str]
    """
    space09
    """

    space10: Optional[str]
    """
    space10
    """

    space11: Optional[str]
    """
    space11
    """

    space12: Optional[str]
    """
    space12
    """

    spaceBlock01: Optional[str]
    """
    spaceBlock01
    """

    spaceBlock02: Optional[str]
    """
    spaceBlock02
    """

    spaceBlock03: Optional[str]
    """
    spaceBlock03
    """

    spaceBlock04: Optional[str]
    """
    spaceBlock04
    """

    spaceBlock05: Optional[str]
    """
    spaceBlock05
    """

    spaceBlock06: Optional[str]
    """
    spaceBlock06
    """

    spaceBlock07: Optional[str]
    """
    spaceBlock07
    """

    spaceBlock08: Optional[str]
    """
    spaceBlock08
    """

    spaceBlock09: Optional[str]
    """
    spaceBlock09
    """

    spaceBlock10: Optional[str]
    """
    spaceBlock10
    """

    spaceBlock11: Optional[str]
    """
    spaceBlock11
    """

    spaceBlock12: Optional[str]
    """
    spaceBlock12
    """

    spaceBlockInline01: Optional[str]
    """
    spaceBlockInline01
    """

    spaceBlockInline02: Optional[str]
    """
    spaceBlockInline02
    """

    spaceBlockInline03: Optional[str]
    """
    spaceBlockInline03
    """

    spaceBlockInline04: Optional[str]
    """
    spaceBlockInline04
    """

    spaceBlockInline05: Optional[str]
    """
    spaceBlockInline05
    """

    spaceBlockInline06: Optional[str]
    """
    spaceBlockInline06
    """

    spaceBlockInline07: Optional[str]
    """
    spaceBlockInline07
    """

    spaceBlockInline08: Optional[str]
    """
    spaceBlockInline08
    """

    spaceBlockInline09: Optional[str]
    """
    spaceBlockInline09
    """

    spaceBlockInline10: Optional[str]
    """
    spaceBlockInline10
    """

    spaceBlockInline11: Optional[str]
    """
    spaceBlockInline11
    """

    spaceBlockInline12: Optional[str]
    """
    spaceBlockInline12
    """

    spaceCardInset: Optional[str]
    """
    spaceCardInset
    """

    spaceInsetLg: Optional[str]
    """
    spaceInsetLg
    """

    spaceInsetMd: Optional[str]
    """
    spaceInsetMd
    """

    spaceInsetSm: Optional[str]
    """
    spaceInsetSm
    """

    spaceInsetXl: Optional[str]
    """
    spaceInsetXl
    """

    spaceSquishLg: Optional[str]
    """
    spaceSquishLg
    """

    spaceSquishMd: Optional[str]
    """
    spaceSquishMd
    """

    spaceSquishSm: Optional[str]
    """
    spaceSquishSm
    """

    spaceContainerPaddingNone: Optional[str]
    """
    spaceContainerPaddingNone
    """

    spaceContainerPaddingXs: Optional[str]
    """
    spaceContainerPaddingXs
    """

    spaceContainerPaddingSm: Optional[str]
    """
    spaceContainerPaddingSm
    """

    spaceContainerPaddingMd: Optional[str]
    """
    spaceContainerPaddingMd
    """

    spaceContainerPaddingLg: Optional[str]
    """
    spaceContainerPaddingLg
    """

    spaceContainerPaddingXl: Optional[str]
    """
    spaceContainerPaddingXl
    """

    spaceContainerGutterNone: Optional[str]
    """
    spaceContainerGutterNone
    """

    spaceContainerGutterXs: Optional[str]
    """
    spaceContainerGutterXs
    """

    spaceContainerGutterSm: Optional[str]
    """
    spaceContainerGutterSm
    """

    spaceContainerGutterMd: Optional[str]
    """
    spaceContainerGutterMd
    """

    spaceContainerGutterLg: Optional[str]
    """
    spaceContainerGutterLg
    """

    spaceContainerGutterXl: Optional[str]
    """
    spaceContainerGutterXl
    """

    tabBarHeight: Optional[str]
    """
    tabBarHeight
    """

    tabPanelDetailPadding: Optional[str]
    """
    tabPanelDetailPadding
    """

    tabPanelSubTitleMargin: Optional[str]
    """
    tabPanelSubTitleMargin
    """

    tabPanelTitleWidth: Optional[str]
    """
    tabPanelTitleWidth
    """

    tableRowHeight: Optional[str]
    """
    tableRowHeight
    """

    tabpanelParagraphMargin: Optional[str]
    """
    tabpanelParagraphMargin
    """

    textBodyLg: Optional[str]
    """
    textBodyLg
    """

    textBodyMd: Optional[str]
    """
    textBodyMd
    """

    textBodySm: Optional[str]
    """
    textBodySm
    """

    textBtnMd: Optional[str]
    """
    textBtnMd
    """

    textBtnSm: Optional[str]
    """
    textBtnSm
    """

    textCaptionLg: Optional[str]
    """
    textCaptionLg
    """

    textCaptionMd: Optional[str]
    """
    textCaptionMd
    """

    textCaptionSm: Optional[str]
    """
    textCaptionSm
    """

    textCodeMd: Optional[str]
    """
    textCodeMd
    """

    textCodeSm: Optional[str]
    """
    textCodeSm
    """

    textCodeError: Optional[str]
    """
    textCodeError
    """

    textDisplayLg: Optional[str]
    """
    textDisplayLg
    """

    textDisplayMd: Optional[str]
    """
    textDisplayMd
    """

    textDisplaySm: Optional[str]
    """
    textDisplaySm
    """

    textDisplayXl: Optional[str]
    """
    textDisplayXl
    """

    textDisplayXxl: Optional[str]
    """
    textDisplayXxl
    """

    textEnterpriseSearchInputSm: Optional[str]
    """
    textEnterpriseSearchInputSm
    """

    textEnterpriseSearchInputLg: Optional[str]
    """
    textEnterpriseSearchInputLg
    """

    iconEnterpriseSearchIconSm: Optional[str]
    """
    iconEnterpriseSearchIconSm
    """

    iconEnterpriseSearchIconLg: Optional[str]
    """
    iconEnterpriseSearchIconLg
    """

    sizeHeightEnterpriseSearchInputSm: Optional[str]
    """
    sizeHeightEnterpriseSearchInputSm
    """

    sizeHeightEnterpriseSearchInputMd: Optional[str]
    """
    sizeHeightEnterpriseSearchInputMd
    """

    sizeHeightEnterpriseSearchInputLg: Optional[str]
    """
    sizeHeightEnterpriseSearchInputLg
    """

    sizeWidthEnterpriseSearchInputSm: Optional[str]
    """
    sizeWidthEnterpriseSearchInputSm
    """

    sizeWidthEnterpriseSearchInputMd: Optional[str]
    """
    sizeWidthEnterpriseSearchInputMd
    """

    sizeWidthEnterpriseSearchInputLg: Optional[str]
    """
    sizeWidthEnterpriseSearchInputLg
    """

    textHeaderLg: Optional[str]
    """
    textHeaderLg
    """

    textHeaderMd: Optional[str]
    """
    textHeaderMd
    """

    textHeaderSm: Optional[str]
    """
    textHeaderSm
    """

    textHeaderXl: Optional[str]
    """
    textHeaderXl
    """

    textHeaderXs: Optional[str]
    """
    textHeaderXs
    """

    textHeaderXxl: Optional[str]
    """
    textHeaderXxl
    """

    textInputMd: Optional[str]
    """
    textInputMd
    """

    textInputSm: Optional[str]
    """
    textInputSm
    """

    textLabelLg: Optional[str]
    """
    textLabelLg
    """

    textLabelMd: Optional[str]
    """
    textLabelMd
    """

    textLabelSm: Optional[str]
    """
    textLabelSm
    """

    textLinkSm: Optional[str]
    """
    textLinkSm
    """

    textLinkMd: Optional[str]
    """
    textLinkMd
    """

    textLinkLg: Optional[str]
    """
    textLinkLg
    """

    textLinkXl: Optional[str]
    """
    textLinkXl
    """

    textLinkSmUnderline: Optional[str]
    """
    textLinkSmUnderline
    """

    textLinkLgUnderline: Optional[str]
    """
    textLinkLgUnderline
    """

    textLinkXlUnderline: Optional[str]
    """
    textLinkXlUnderline
    """

    iconLinkSm: Optional[str]
    """
    iconLinkSm
    """

    iconLinkMd: Optional[str]
    """
    iconLinkMd
    """

    iconLinkLg: Optional[str]
    """
    iconLinkLg
    """

    iconLinkXl: Optional[str]
    """
    iconLinkXl
    """

    textMenuCaption: Optional[str]
    """
    textMenuCaption
    """

    textMenuItemLg: Optional[str]
    """
    textMenuItemLg
    """

    textMenuItemMd: Optional[str]
    """
    textMenuItemMd
    """

    textMenuItemSm: Optional[str]
    """
    textMenuItemSm
    """

    textNumberInputMd: Optional[str]
    """
    textNumberInputMd
    """

    textNumberInputSm: Optional[str]
    """
    textNumberInputSm
    """

    textOverflow: Optional[str]
    """
    textOverflow
    """

    textSideNavItemSelected: Optional[str]
    """
    textSideNavItemSelected
    """

    textSideNavItemUnselected: Optional[str]
    """
    textSideNavItemUnselected
    """

    textSideNavTextLabelSelected: Optional[str]
    """
    textSideNavTextLabelSelected
    """

    textSideNavTextLabelUnselected: Optional[str]
    """
    textSideNavTextLabelUnselected
    """

    textSliderLabelSm: Optional[str]
    """
    textSliderLabelSm
    """

    textSubheaderLg: Optional[str]
    """
    textSubheaderLg
    """

    textSubheaderMd: Optional[str]
    """
    textSubheaderMd
    """

    textSubheaderSm: Optional[str]
    """
    textSubheaderSm
    """

    textSubheaderUppercaseMd: Optional[str]
    """
    textSubheaderUppercaseMd
    """

    textSubheaderUppercaseSm: Optional[str]
    """
    textSubheaderUppercaseSm
    """

    textTitleLg: Optional[str]
    """
    textTitleLg
    """

    textTitleXl: Optional[str]
    """
    textTitleXl
    """

    textTitleMd: Optional[str]
    """
    textTitleMd
    """

    textTitleSm: Optional[str]
    """
    textTitleSm
    """

    textSubtitleSm: Optional[str]
    """
    textSubtitleSm
    """

    textSubtitleMd: Optional[str]
    """
    textSubtitleMd
    """

    tileHeaderIconFontSize: Optional[str]
    """
    tileHeaderIconFontSize
    """

    tileValueFontSize: Optional[str]
    """
    tileValueFontSize
    """
    def __init__(self, meta: Optional[Meta]=None, id: Optional[str]=None, isC3: Optional[bool]=None, densityCategory: Optional[str]=None, borderHeightBtnDivider: Optional[str]=None, borderRadiusBtn: Optional[str]=None, borderRadiusCard: Optional[str]=None, borderRadiusCircle: Optional[str]=None, borderRadiusMenu: Optional[str]=None, borderRadiusPill: Optional[str]=None, borderRadiusDivider: Optional[str]=None, borderRadiusImageLg: Optional[str]=None, borderRadiusImageMd: Optional[str]=None, borderRadiusImageSm: Optional[str]=None, borderRadiusImageXl: Optional[str]=None, borderRadiusInput: Optional[str]=None, borderRadiusXs: Optional[str]=None, borderRadiusSm: Optional[str]=None, borderRadiusMd: Optional[str]=None, borderRadiusLg: Optional[str]=None, borderRadiusXl: Optional[str]=None, borderRadiusSegBtnEnd: Optional[str]=None, borderRadiusSegBtnMiddle: Optional[str]=None, borderRadiusSegBtnStart: Optional[str]=None, borderWidthBtn: Optional[str]=None, borderWidthSm: Optional[str]=None, borderWidthMd: Optional[str]=None, borderWidthLg: Optional[str]=None, borderWidthXl: Optional[str]=None, borderWidthCard: Optional[str]=None, borderWidthDividerSm: Optional[str]=None, borderWidthInputSm: Optional[str]=None, borderWidthMenu: Optional[str]=None, borderWidthSegBtn: Optional[str]=None, breadcrumbsHeight: Optional[str]=None, breadcrumbsPadding: Optional[str]=None, cardButtonTopMargin: Optional[str]=None, cardTitleHeight: Optional[str]=None, chartTooltipWidth: Optional[str]=None, componentMargin: Optional[str]=None, componentPadding: Optional[str]=None, dropdownDescriptionPadding: Optional[str]=None, elementWhiteSpace: Optional[str]=None, extraSmallSizeMargin: Optional[str]=None, extraSmallSizePadding: Optional[str]=None, filterFieldTopMargin: Optional[str]=None, flexMaxWidth: Optional[str]=None, flexMinWidth: Optional[str]=None, fontFamilyDefault: Optional[str]=None, fontSize01: Optional[str]=None, fontSize02: Optional[str]=None, fontSize03: Optional[str]=None, fontSize04: Optional[str]=None, fontSize05: Optional[str]=None, fontSize06: Optional[str]=None, fontSize07: Optional[str]=None, fontSize08: Optional[str]=None, fontSize09: Optional[str]=None, fontSize10: Optional[str]=None, fontSize11: Optional[str]=None, fontSize12: Optional[str]=None, fontSize13: Optional[str]=None, fontSize14: Optional[str]=None, fontSize15: Optional[str]=None, fontSize16: Optional[str]=None, fontSize17: Optional[str]=None, fontSizeBody: Optional[str]=None, fontSizeH1: Optional[str]=None, fontSizeH2: Optional[str]=None, fontSizeMassive: Optional[str]=None, fontWeightLight: Optional[str]=None, fontWeightRegular: Optional[str]=None, fontWeightMedium: Optional[str]=None, fontWeightSemibold: Optional[str]=None, fontWeightBold: Optional[str]=None, fontWeightBlack: Optional[str]=None, formFieldSidePadding: Optional[str]=None, formOuterPadding: Optional[str]=None, gridCellColorWheelSizeLarge: Optional[str]=None, gridCellColorWheelSizeMedium: Optional[str]=None, gridCellColorWheelSizeSmall: Optional[str]=None, gridLayoutInnerPadding: Optional[str]=None, gridLayoutOuterPadding: Optional[str]=None, iconBtnSm: Optional[str]=None, iconBtnMd: Optional[str]=None, iconCheckbox: Optional[str]=None, iconInfoMd: Optional[str]=None, iconInputSm: Optional[str]=None, iconLightXs: Optional[str]=None, iconLightSm: Optional[str]=None, iconLightMd: Optional[str]=None, iconLightLg: Optional[str]=None, iconLightXl: Optional[str]=None, iconLightXxl: Optional[str]=None, iconMessageSm: Optional[str]=None, iconMessageMd: Optional[str]=None, iconMessageLg: Optional[str]=None, iconRegularXs: Optional[str]=None, iconRegularSm: Optional[str]=None, iconRegularMd: Optional[str]=None, iconRegularLg: Optional[str]=None, iconRegularXl: Optional[str]=None, iconRegularXxl: Optional[str]=None, iconSolidXs: Optional[str]=None, iconSolidSm: Optional[str]=None, iconSolidMd: Optional[str]=None, iconSolidLg: Optional[str]=None, iconSolidXl: Optional[str]=None, iconSolidXxl: Optional[str]=None, iconMenuIcon: Optional[str]=None, inputContainerPaddingTop: Optional[str]=None, inputIconMarginRight: Optional[str]=None, inputIconMarginTop: Optional[str]=None, inputMenuMarginTop: Optional[str]=None, largeSizeMargin: Optional[str]=None, largeSizePadding: Optional[str]=None, layoutMargin: Optional[str]=None, letterSpacingLg: Optional[str]=None, letterSpacingMd: Optional[str]=None, letterSpacingSm: Optional[str]=None, letterSpacingXs: Optional[str]=None, lineHeightLg: Optional[str]=None, lineHeightMd: Optional[str]=None, lineHeightSm: Optional[str]=None, mainMenuFontSize: Optional[str]=None, mainMenuWidth: Optional[str]=None, margin: Optional[str]=None, mediumSizeMargin: Optional[str]=None, mediumSizePadding: Optional[str]=None, menuItemIconContainerSize: Optional[str]=None, menuItemIconSize: Optional[str]=None, menuItemLabelSpacing: Optional[str]=None, menuItemSize: Optional[str]=None, menuItemSpacing: Optional[str]=None, modalPadding: Optional[str]=None, padding: Optional[str]=None, pageTitleInputFieldHeight: Optional[str]=None, pageTitleInputMinWidth: Optional[str]=None, pageTitleInputPaddingRight: Optional[str]=None, pageTitleMultiSelectPaddingBottom: Optional[str]=None, size01: Optional[str]=None, size02: Optional[str]=None, size03: Optional[str]=None, size04: Optional[str]=None, size05: Optional[str]=None, size06: Optional[str]=None, size07: Optional[str]=None, size08: Optional[str]=None, size09: Optional[str]=None, size10: Optional[str]=None, size11: Optional[str]=None, size12: Optional[str]=None, size13: Optional[str]=None, size14: Optional[str]=None, size15: Optional[str]=None, size16: Optional[str]=None, size17: Optional[str]=None, size18: Optional[str]=None, size19: Optional[str]=None, size20: Optional[str]=None, size21: Optional[str]=None, size22: Optional[str]=None, size23: Optional[str]=None, sizeFull: Optional[str]=None, sizeHeightBtnLg: Optional[str]=None, sizeHeightBtnMd: Optional[str]=None, sizeHeightBtnSm: Optional[str]=None, sizeHeightMenuMd: Optional[str]=None, sizeHeightMenuSm: Optional[str]=None, sizeHeightNavMenu: Optional[str]=None, sizeHeightTextareaLg: Optional[str]=None, sizeHeightTextareaMd: Optional[str]=None, sizeHeightTextareaSm: Optional[str]=None, sizeImageLg: Optional[str]=None, sizeImageMd: Optional[str]=None, sizeImageSm: Optional[str]=None, sizeImageXl: Optional[str]=None, sizeImageXs: Optional[str]=None, sizeInputLg: Optional[str]=None, sizeInputMd: Optional[str]=None, sizeInputSm: Optional[str]=None, sizePageLg: Optional[str]=None, sizePageMd: Optional[str]=None, sizePageSm: Optional[str]=None, sizeWidthBtnFull: Optional[str]=None, sizeWidthBtnIconLg: Optional[str]=None, sizeWidthBtnIconMd: Optional[str]=None, sizeWidthBtnIconSm: Optional[str]=None, sizeWidthBtnMin: Optional[str]=None, sizeWidthChartTooltipLg: Optional[str]=None, sizeWidthChartTooltipMd: Optional[str]=None, sizeWidthChartTooltipSm: Optional[str]=None, sizeWidthInputFull: Optional[str]=None, sizeWidthInputLg: Optional[str]=None, sizeWidthInputMd: Optional[str]=None, sizeWidthInputSm: Optional[str]=None, sizeWidthInputXl: Optional[str]=None, sizeWidthInputXs: Optional[str]=None, sizeWidthMenuFull: Optional[str]=None, sizeWidthMenuLg: Optional[str]=None, sizeWidthMenuMd: Optional[str]=None, sizeWidthMenuSm: Optional[str]=None, sizeWidthMenuXl: Optional[str]=None, sizeWidthMenuXs: Optional[str]=None, sizeWidthNumberInputFull: Optional[str]=None, sizeWidthNumberInputMin: Optional[str]=None, smallSizeMargin: Optional[str]=None, smallSizePadding: Optional[str]=None, space01: Optional[str]=None, space02: Optional[str]=None, space03: Optional[str]=None, space04: Optional[str]=None, space05: Optional[str]=None, space06: Optional[str]=None, space07: Optional[str]=None, space08: Optional[str]=None, space09: Optional[str]=None, space10: Optional[str]=None, space11: Optional[str]=None, space12: Optional[str]=None, spaceBlock01: Optional[str]=None, spaceBlock02: Optional[str]=None, spaceBlock03: Optional[str]=None, spaceBlock04: Optional[str]=None, spaceBlock05: Optional[str]=None, spaceBlock06: Optional[str]=None, spaceBlock07: Optional[str]=None, spaceBlock08: Optional[str]=None, spaceBlock09: Optional[str]=None, spaceBlock10: Optional[str]=None, spaceBlock11: Optional[str]=None, spaceBlock12: Optional[str]=None, spaceBlockInline01: Optional[str]=None, spaceBlockInline02: Optional[str]=None, spaceBlockInline03: Optional[str]=None, spaceBlockInline04: Optional[str]=None, spaceBlockInline05: Optional[str]=None, spaceBlockInline06: Optional[str]=None, spaceBlockInline07: Optional[str]=None, spaceBlockInline08: Optional[str]=None, spaceBlockInline09: Optional[str]=None, spaceBlockInline10: Optional[str]=None, spaceBlockInline11: Optional[str]=None, spaceBlockInline12: Optional[str]=None, spaceCardInset: Optional[str]=None, spaceInsetLg: Optional[str]=None, spaceInsetMd: Optional[str]=None, spaceInsetSm: Optional[str]=None, spaceInsetXl: Optional[str]=None, spaceSquishLg: Optional[str]=None, spaceSquishMd: Optional[str]=None, spaceSquishSm: Optional[str]=None, spaceContainerPaddingNone: Optional[str]=None, spaceContainerPaddingXs: Optional[str]=None, spaceContainerPaddingSm: Optional[str]=None, spaceContainerPaddingMd: Optional[str]=None, spaceContainerPaddingLg: Optional[str]=None, spaceContainerPaddingXl: Optional[str]=None, spaceContainerGutterNone: Optional[str]=None, spaceContainerGutterXs: Optional[str]=None, spaceContainerGutterSm: Optional[str]=None, spaceContainerGutterMd: Optional[str]=None, spaceContainerGutterLg: Optional[str]=None, spaceContainerGutterXl: Optional[str]=None, tabBarHeight: Optional[str]=None, tabPanelDetailPadding: Optional[str]=None, tabPanelSubTitleMargin: Optional[str]=None, tabPanelTitleWidth: Optional[str]=None, tableRowHeight: Optional[str]=None, tabpanelParagraphMargin: Optional[str]=None, textBodyLg: Optional[str]=None, textBodyMd: Optional[str]=None, textBodySm: Optional[str]=None, textBtnMd: Optional[str]=None, textBtnSm: Optional[str]=None, textCaptionLg: Optional[str]=None, textCaptionMd: Optional[str]=None, textCaptionSm: Optional[str]=None, textCodeMd: Optional[str]=None, textCodeSm: Optional[str]=None, textCodeError: Optional[str]=None, textDisplayLg: Optional[str]=None, textDisplayMd: Optional[str]=None, textDisplaySm: Optional[str]=None, textDisplayXl: Optional[str]=None, textDisplayXxl: Optional[str]=None, textEnterpriseSearchInputSm: Optional[str]=None, textEnterpriseSearchInputLg: Optional[str]=None, iconEnterpriseSearchIconSm: Optional[str]=None, iconEnterpriseSearchIconLg: Optional[str]=None, sizeHeightEnterpriseSearchInputSm: Optional[str]=None, sizeHeightEnterpriseSearchInputMd: Optional[str]=None, sizeHeightEnterpriseSearchInputLg: Optional[str]=None, sizeWidthEnterpriseSearchInputSm: Optional[str]=None, sizeWidthEnterpriseSearchInputMd: Optional[str]=None, sizeWidthEnterpriseSearchInputLg: Optional[str]=None, textHeaderLg: Optional[str]=None, textHeaderMd: Optional[str]=None, textHeaderSm: Optional[str]=None, textHeaderXl: Optional[str]=None, textHeaderXs: Optional[str]=None, textHeaderXxl: Optional[str]=None, textInputMd: Optional[str]=None, textInputSm: Optional[str]=None, textLabelLg: Optional[str]=None, textLabelMd: Optional[str]=None, textLabelSm: Optional[str]=None, textLinkSm: Optional[str]=None, textLinkMd: Optional[str]=None, textLinkLg: Optional[str]=None, textLinkXl: Optional[str]=None, textLinkSmUnderline: Optional[str]=None, textLinkLgUnderline: Optional[str]=None, textLinkXlUnderline: Optional[str]=None, iconLinkSm: Optional[str]=None, iconLinkMd: Optional[str]=None, iconLinkLg: Optional[str]=None, iconLinkXl: Optional[str]=None, textMenuCaption: Optional[str]=None, textMenuItemLg: Optional[str]=None, textMenuItemMd: Optional[str]=None, textMenuItemSm: Optional[str]=None, textNumberInputMd: Optional[str]=None, textNumberInputSm: Optional[str]=None, textOverflow: Optional[str]=None, textSideNavItemSelected: Optional[str]=None, textSideNavItemUnselected: Optional[str]=None, textSideNavTextLabelSelected: Optional[str]=None, textSideNavTextLabelUnselected: Optional[str]=None, textSliderLabelSm: Optional[str]=None, textSubheaderLg: Optional[str]=None, textSubheaderMd: Optional[str]=None, textSubheaderSm: Optional[str]=None, textSubheaderUppercaseMd: Optional[str]=None, textSubheaderUppercaseSm: Optional[str]=None, textTitleLg: Optional[str]=None, textTitleXl: Optional[str]=None, textTitleMd: Optional[str]=None, textTitleSm: Optional[str]=None, textSubtitleSm: Optional[str]=None, textSubtitleMd: Optional[str]=None, tileHeaderIconFontSize: Optional[str]=None, tileValueFontSize: Optional[str]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[UiSdlDenseDensity]:
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
    def fromJsonString(cls, json: str) -> Union[UiSdlDenseDensity]:
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
    def fromXmlString(cls, xml: str) -> Union[UiSdlDenseDensity]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[UiSdlDenseDensity]:
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
    def replaceType(self, old: Type, new: Type) -> UiSdlDenseDensity:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> UiSdlDenseDensity:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> UiSdlDenseDensity:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[UiSdlDenseDensity]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[UiSdlDenseDensity]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> UiSdlDenseDensity:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> UiSdlDenseDensity:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> UiSdlDenseDensity:
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
    def validateObj(self) -> UiSdlDenseDensity:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> UiSdlDenseDensity:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> UiSdlDenseDensity:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> UiSdlDenseDensity:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> UiSdlDenseDensity:
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
    def withoutFieldAtPath(self, path: str) -> UiSdlDenseDensity:
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
    def withoutField(self, field: str) -> UiSdlDenseDensity:
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
    def withoutField(self, field: FieldType) -> UiSdlDenseDensity:
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
    def withoutFields(self, fields: Array[str]) -> UiSdlDenseDensity:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> UiSdlDenseDensity:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> UiSdlDenseDensity:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> UiSdlDenseDensity:
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
    def defaultField(self, field: str) -> UiSdlDenseDensity:
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
    def defaultField(self, field: FieldType) -> UiSdlDenseDensity:
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
    def unsetField(self, field: str) -> UiSdlDenseDensity:
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
    def unsetField(self, field: FieldType) -> UiSdlDenseDensity:
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
    def removeField(self, field: str) -> UiSdlDenseDensity:
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
    def removeField(self, field: FieldType) -> UiSdlDenseDensity:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> UiSdlDenseDensity:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> UiSdlDenseDensity:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> UiSdlDenseDensity:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> UiSdlDenseDensity:
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
    def mergeJson(self, json: any) -> UiSdlDenseDensity:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> UiSdlDenseDensity:
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
    def sumObj(self, other: Obj, deep: bool=None) -> UiSdlDenseDensity:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[UiSdlDenseDensity]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[UiSdlDenseDensity]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[UiSdlDenseDensity]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[UiSdlDenseDensity]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[UiSdlDenseDensity]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, UiSdlDenseDensity]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, UiSdlDenseDensity]]:
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
    def toBuilder(self) -> ObjBuilder[UiSdlDenseDensity]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[UiSdlDenseDensity]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> UiSdlDenseDensity:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> UiSdlDenseDensity:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> UiSdlDenseDensity:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> UiSdlDenseDensity:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> UiSdlDenseDensity:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> UiSdlDenseDensity:
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
    def make(cls, s: str) -> Union[UiSdlDenseDensity]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> UiSdlDenseDensity:
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
    def afterMake(self) -> UiSdlDenseDensity:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> UiSdlDenseDensity:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[UiSdlDenseDensity]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> UiSdlDenseDensity:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @overload
    @classmethod
    def fetch(cls, spec: FetchSpec=None) -> FetchResult[UiSdlDenseDensity]:
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
    def fetch(cls, filter: Filter) -> FetchResult[UiSdlDenseDensity]:
    """
    Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param filter
              Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @classmethod
    def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[UiSdlDenseDensity]]:
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
    def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[UiSdlDenseDensity]]]:
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
    def dependencies(self) -> MetadataDeps[UiSdlDenseDensity]:
    """
    Retrieves dependencies to types or other metadata elements for the given instance of metadata.
    """
        ...
    def save(self, subPath: str=None, contentType: str=None) -> UiSdlDenseDensity:
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
    def update(self, srcObj: UiSdlDenseDensity=None, spec: UpsertSpec=None) -> Union[UiSdlDenseDensity]:
        ...
    def upsert(self, srcObj: UiSdlDenseDensity=None, spec: UpsertSpec=None) -> Union[UiSdlDenseDensity]:
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
    def fromString(cls, s: str) -> Union[UiSdlDenseDensity]:
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
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[UiSdlDenseDensity]:
    """
    @return single instance of this Identified type by id.
    """
        ...

