#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.SeedFileFormat import SeedFileFormat
from c3.platform.ContentValue import ContentValue
from c3.platform.DocumentationRenderSpec import DocumentationRenderSpec

# Python definitions for the C3 type ToolsService


class ToolsService(Value):
    """
    This endpoint provides functions needed by tools clients.
    
    @remarks this represents a made instance of ToolsService
    """
    def __init__(self) -> None: ...

    @classmethod
    def completeTypeName(cls, typePrefix: str, packageName: str=None) -> Union[Array[str]]:
    """
    Return all types whose name start with the specified prefix.
    
    @param packageName
              the package relative to which types should be visible
    @param typePrefix
              the prefix of the type name to be completed
    """
        ...
    @classmethod
    def completeFieldName(cls, typeName: str, fieldPrefix: str, packageName: str=None) -> Union[Array[str]]:
    """
    Return all type fields whose name start with the specified prefix.
    
    @param packageName
              the package relative to which types should be visible
    @param typeName
              the name of the type to be inspected
    @param fieldPrefix
              the prefix of the field name to be completed
    """
        ...
    @classmethod
    def documentField(cls, typeName: str, fieldName: str, packageName: str=None, renderSpec: DocumentationRenderSpec=None) -> Union[ContentValue]:
    """
    Return formatted documentation for a single type data field or function.
    
    @param packageName
              the package relative to which types should be visible
    @param typeName
              the name of the type to be inspected
    @param fieldName
              the name of the field to be documented
    @param renderSpec
              options for documentation rendering
    """
        ...
    @classmethod
    def seedFileFormats(cls) -> Union[Array[SeedFileFormat]]:
    """
    Get all seed data file formats supported.
    """
        ...
    @classmethod
    def seedFileFormat(cls, format: str) -> Union[SeedFileFormat]:
    """
    Get the seed data file format for the specified extension or MIME type.
    
    @param format
              the seed data file extension or MIME type
    """
        ...

