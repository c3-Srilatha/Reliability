#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ContentValue import ContentValue

# Python definitions for the C3 type DocumentationDslPostprocessor


class DocumentationDslPostprocessor(DocumentationPostprocessor, Value):
    """
    Augment the rendered HTML page of DSL grammar.
    
    @see DocumentationDslPreprocessor
    
    @remarks this represents a made instance of DocumentationDslPostprocessor
    """
    def __init__(self) -> None: ...

    @classmethod
    def postprocess(cls, input: ContentValue, path: str=None, metadata: Map[str, str]=None) -> ContentValue:
    """
    Add custom CSS styles and JavaScript behavior to to rendered content (if HTML).
    """
        ...

