#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ContentValue import ContentValue

# Python definitions for the C3 type DocumentationPostprocessor


class DocumentationPostprocessor(Value):
    """
    A documentation topic can register a "post-processor" which is given the rendered content and may manipulate it
    as needed before returning the result to the client.
    
    To register a post-processor, the metadata header line "Postprocessor" should be use like so:
    ```
    Postprocessor: TypeName
    ```
    The specified type must mixin DocumentationPostprocessor and implement #postprocess.
    
    @see DocumentationPreprocessor
    
    @remarks this represents a made instance of DocumentationPostprocessor
    """
    def __init__(self) -> None: ...

    @classmethod
    def postprocess(cls, input: ContentValue, path: str=None, metadata: Map[str, str]=None) -> ContentValue:
    """
    Take the rendered content and manipulate it, returning a new content file.
    
    Note that if the post-processor cannot handle the content type, it should return the content unchanged.
    
    @param input the rendered documentation topic
    @param path metadata resource path
    @param metadata document metadata headers
    @return same or altered rendered topic
    """
        ...

