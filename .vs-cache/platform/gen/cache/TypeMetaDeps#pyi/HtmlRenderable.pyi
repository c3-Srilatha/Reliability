#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.HtmlRenderer import HtmlRenderer

# Python definitions for the C3 type HtmlRenderable


class HtmlRenderable(Value):
    """
    Any object can implement a renderer within the Console or UI by extending the {@link HtmlRenderable} interface and
    implementing the {@link HtmlRenderable#renderer renderer} method.
    
    @see HtmlRenderer
    
    @remarks this represents a made instance of HtmlRenderable
    """
    def __init__(self) -> None: ...

    def renderer(self) -> Union[HtmlRenderer]:
    """
    Return an instance of an {@link HtmlRenderer} set up to render this instance. If there is no capable renderer,
    null may be returned. The implementation must be available within the browser (typically `js-client`).
    """
        ...

