#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.cssLibrary.UiSdlThemedValue import UiSdlThemedValue

# Python definitions for the C3 type ChipStyle


class ChipStyle(Value):
    """
    Color and icon configurations for individual chips in a {@link ChipsCell}.
    
    @remarks this represents a made instance of ChipStyle
    """
    
    colorPreset: Optional[str]=None
    """
    The predefined color preset to use for the chip. This shouldn't be specified if
    #customColorSettings is provided.
    """

    customColorSettings: Optional[UiSdlThemedValue[CustomChipColor]]=None
    """
    In case the [color presets](#colorPreset) are insufficient for a desired color scheme,
    this can be used to define a custom color of the chip. If {@link ChipsCell#outlined} is
    true, this affects the font and border color. Otherwise, this affects the background color.
    """

    icon: Optional[str]=None
    """
    If specified, an icon based on the provided Font Awesome suffix will be displayed
    before the text in each chip.
    """
    def __init__(self, colorPreset: Optional[str]=None, customColorSettings: Optional[UiSdlThemedValue[CustomChipColor]]=None, icon: Optional[str]=None) -> None: ...


