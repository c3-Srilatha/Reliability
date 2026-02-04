#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type CustomChipColor


class CustomChipColor(Value):
    """
    Color configurations for chips in a {@link ChipsCell} for a particular
    {@link UiSdlThemeTemplate}. This Type should not be used directly, but
    instead specified as a single configuration on a {@link UiSdlThemedValue}.
    
    @see ChipStyle#customColorSettings
    
    @remarks this represents a made instance of CustomChipColor
    """
    
    primaryColor: Optional[str]
    """
    The primary color of the chip. If {@link ChipsCell#outlined} is true, this
    affects the font and border color. Otherwise, this affects the background color.
    """

    invertFontColor: Optional[bool]=None
    """
    Whether or not to use an inverted font color to improve contrast with #primaryColor.
    Ignored when {@link ChipsCell#outlined} is true.
    """
    def __init__(self, primaryColor: Optional[str]=None, invertFontColor: Optional[bool]=None) -> None: ...


