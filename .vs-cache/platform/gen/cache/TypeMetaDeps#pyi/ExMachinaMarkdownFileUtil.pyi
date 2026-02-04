#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type ExMachinaMarkdownFileUtil


class ExMachinaMarkdownFileUtil(Value):
    """
    Helper functions for rendering HTML from markdown file. Note that this type and associated method
    have been duplicated from {@link UiSdlMarkdownFileUtil} to avoid Ex Machina having to inherit the
    uiComponentLibrary dependency.
    
    @remarks this represents a made instance of ExMachinaMarkdownFileUtil
    """
    def __init__(self) -> None: ...

    @classmethod
    def renderHTMLContent(cls, markdownContent: str, sanitize: bool=None) -> Union[str]:
    """
    Render HTML content from Markdown content.
    
    @param markdownContent
              The source content to render from.
    @param sanitize
              If true, sanitize the result. (Callers might prefer to do this at the front end instead.)
    
    @return The rendered content.
    """
        ...

