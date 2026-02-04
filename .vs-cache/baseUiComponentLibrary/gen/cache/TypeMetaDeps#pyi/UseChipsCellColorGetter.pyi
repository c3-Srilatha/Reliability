#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.baseUiComponentLibrary.ChipStyle import ChipStyle

# Python definitions for the C3 type UseChipsCellColorGetter


class UseChipsCellColorGetter(Value):
    """
    React hook to extract primary and secondary colors from a {@link ChipStyle} for a
    {@link ChipsCell} based on the current [theme](UiSdlThemeTemplate#themeCategory).
    
    @remarks this represents a made instance of UseChipsCellColorGetter
    """
    def __init__(self) -> None: ...

    @classmethod
    def useChipsCellColorGetter(cls) -> Callable[[Union[ChipStyle], bool], Union[]]:
    """
    A function that returns a function which takes in {@link ChipStyle} object
    and returns the primary and secondary {@link Color}s based on the
    [current theme](UiSdlThemeTemplate#themeCategory).
    
    @returns A function to get primary and secondary colors based on a {@link ChipStyle}.
    """
        ...

