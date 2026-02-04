#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ContentValue import ContentValue

# Python definitions for the C3 type DocumentationHtmlResource


class DocumentationHtmlResource(DocumentationPostprocessor, Value):
    """
    Output a static Java HTML resource.
    
    Only resources listed in `c3doc-allow.txt` in the same directory may be viewed this way.
    
    @remarks this represents a made instance of DocumentationHtmlResource
    """
    
    ALLOW: Optional[str]=None
    """
    Only resources listed in this file, in the same directory, may be viewed.
    """
    def __init__(self, ALLOW: Optional[str]=None) -> None: ...

    @classmethod
    def postprocess(cls, input: ContentValue, path: str=None, metadata: Map[str, str]=None) -> ContentValue:
    """
    Output the specified Java HTML resource.
    """
        ...

