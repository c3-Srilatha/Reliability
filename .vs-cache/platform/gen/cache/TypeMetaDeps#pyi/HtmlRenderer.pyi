#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Content import Content

# Python definitions for the C3 type HtmlRenderer


class HtmlRenderer(Value):
    """
    Any object can provide a custom renderer within the Console or UI by extending the {@link HtmlRenderable} interface
    and implementing the {@link HtmlRenderable#renderer renderer} method.
    
    @see HtmlRenderable
    
    @remarks this represents a made instance of HtmlRenderer
    """
    def __init__(self) -> None: ...

    @classmethod
    def menuTitle(cls) -> Union[str]:
    """
    Return the title to be displayed in menus to enable this renderer.
    """
        ...
    def title(self) -> Union[str]:
    """
    Return the title to be displayed for a specific renderer instance.
    """
        ...
    def component(self) -> Union[Any]:
    """
    Return an appropriate instance of a React component (class or function) which can be called to produce the
    React component instance or HTML element that provides the visualization. This must be callable from the browser
    (typically with `js client`).
    """
        ...
    def toHtml(self) -> Union[str]:
    """
    Return a raw HTML string to be displayed within the calling context. This may be implemented anywhere as the
    string is naturally serializable.
    """
        ...
    def toImage(self) -> Union[Content]:
    """
    Return an image, such as a chart, that represents the instance. Ideally this will be an SVG image so that it
    doesn't suffer from degradation when zooming.
    """
        ...
    def render(self, div: any) -> None:
    """
    Build the HTML that renders the object into the specified jQuery div.
    The specified div is a jQuery object `$('<div>')` which should not be itself changed,
    although the renderer is expected to fill it with the rendered content.
    
    Note that the renderer may be called more than one for different divs.
    """
        ...
    def dispose(self, div: any) -> None:
    """
    Discard any cached state for this renderer for the rendering in the specified div.
    
    Note that this may not always be called, but will be called if the same renderer
    is re-rendered into the same div.
    """
        ...

