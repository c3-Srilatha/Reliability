#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type PyReprHtmlProtocol


class PyReprHtmlProtocol(Value):
    """
    Marker type indicating support for a Python value's _repr_html_() function often used in IPython notebooks.
    
    @remarks this represents a made instance of PyReprHtmlProtocol
    """
    def __init__(self) -> None: ...

    def _reprHtml_(self) -> Union[str]:
    """
    Implementation of _repr_html_() function
    """
        ...

