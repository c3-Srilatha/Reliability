#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type DocumentationPreprocessor


class DocumentationPreprocessor(Value):
    """
    A documentation topic can register a "pre-processor" which is given the existing content and can manipulate it as
    needed, returning augmented/generated Markdown which will be parsed and processed as normal.
    
    To register a pre-processor, the metadata header line "Preprocessor" should be use like so:
    ```
    Preprocessor: TypeName
    ```
    The specified type must mixin DocumentationPreprocessor and implement #preprocess.
    
    @see DocumentationPostprocessor
    
    @remarks this represents a made instance of DocumentationPreprocessor
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

