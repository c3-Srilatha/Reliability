#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.uiInfrastructure.UiSdlStyleIdSetAction import UiSdlStyleIdSetAction

# Python definitions for the C3 type GenAiUiThemeActions


class GenAiUiThemeActions(Value):
    """
    Helper action methods related to the theme used in the UI
    
    @remarks this represents a made instance of GenAiUiThemeActions
    """
    def __init__(self) -> None: ...

    @classmethod
    def setThemeAction(cls, theme: str=None) -> Union[UiSdlStyleIdSetAction]:
    """
    Returns an action to set the theme to light or dark. This should be called within an epic.
    """
        ...
    @classmethod
    def toggleThemeAction(cls) -> Union[UiSdlStyleIdSetAction]:
    """
    Returns an action to toggle the theme between light/dark. This should be called within an epic.
    """
        ...

