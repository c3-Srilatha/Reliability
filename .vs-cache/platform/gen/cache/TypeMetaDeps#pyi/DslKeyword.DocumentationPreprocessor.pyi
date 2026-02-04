#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.DslKeyword import DslKeyword

# Python definitions for the C3 type DslKeyword.DocumentationPreprocessor


class DocumentationPreprocessor(DocumentationPreprocessor, Value):
    """
    This type expands a documentation topic with markdown documenting the list of DSL keywords. To use it, the
    documentation file should have a line like `{{keywords type}}` which will be replaced with a table listing the
    keywords. The valid DSL references are "type" and "ui" for the two DSL formats.
    
    @see type-keywords.c3doc
    @see ui-keywords.c3doc
    
    @remarks this represents a made instance of DslKeyword.DocumentationPreprocessor
    """
    def __init__(self) -> None: ...

    @classmethod
    def preprocess(cls, input: str, path: str=None, metadata: Map[str, str]=None) -> str:
    """
    Take the topic file body as present in the repository file and massage it _before_ normal Markdown parsing.
    Note that metadata will have been stripped out prior to calling this method, so it will only see the original
    document body.
    
    Metadata lines will be replaced by blank lines so line numbers in input will match up with the original file,
    so the processor should be prepared to skip leading blank lines. The metadata headers themselves are passed as the
    last argument to the method.
    
    @param input the topic body content
    @param path metadata resource path
    @param metadata document metadata headers
    @return processed Markdown file
    """
        ...
    @classmethod
    def table(cls, list: Array[DslKeyword]) -> str:
    """
    Produce a Markdown table for the keywords in the specified list. The table contains three columns:
     1. the keyword
     2. the tool tip
     3. a link to further documentation
    """
        ...

