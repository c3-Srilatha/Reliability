#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type DocumentationDslPreprocessor


class DocumentationDslPreprocessor(DocumentationPreprocessor, Value):
    """
    Render the DSL grammar as Markdown for documentation of the language.
    
    @see DocumentationDslPostprocessor
    
    @remarks this represents a made instance of DocumentationDslPreprocessor
    """
    def __init__(self) -> None: ...

    @classmethod
    def preprocess(cls, input: str, path: str=None, metadata: Map[str, str]=None) -> str:
    """
    Ignore the body, but look for the DSL file name in the header, parse that and emit Markdown to render it.
    The page must have a metadata line with key "DSL" that specifies which DSL file to render.
    
    Any contents of the topic file will become the introductory section, and should _not_ include any headings.
    """
        ...

