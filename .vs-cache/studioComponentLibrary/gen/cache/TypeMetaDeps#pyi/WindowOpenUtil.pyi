#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type WindowOpenUtil


class WindowOpenUtil(Value):
    """
    Utility functions for handling opening of windows
    
    @remarks this represents a made instance of WindowOpenUtil
    """
    def __init__(self) -> None: ...

    @classmethod
    def openUrlInNewTab(cls, category: str) -> None:
    """
    Opens a url in a new tab
    @param url
               the url to open
    """
        ...

