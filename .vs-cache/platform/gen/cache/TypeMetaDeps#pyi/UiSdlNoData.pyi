#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type UiSdlNoData


class UiSdlNoData(Value):
    """
    Placeholder data spec type for UiSdlComponent without data.
    
    Example usage:
    
         type MyComponent extends UiSdlComponent<UiSdlNoData>
    
    @remarks this represents a made instance of UiSdlNoData
    """
    def __init__(self) -> None: ...


