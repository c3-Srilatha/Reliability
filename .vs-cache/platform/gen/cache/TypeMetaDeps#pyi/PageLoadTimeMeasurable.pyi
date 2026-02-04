#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type PageLoadTimeMeasurable


class PageLoadTimeMeasurable(Value):
    """
    An abstract interface representing any page that can be opened for measuring load time
    
    @remarks this represents a made instance of PageLoadTimeMeasurable
    """
    def __init__(self) -> None: ...

    def openForMeasuringLoadTime(self) -> None:
    """
    Opens the page without any unnecessary wait logic so that its load time can be measured
    """
        ...

