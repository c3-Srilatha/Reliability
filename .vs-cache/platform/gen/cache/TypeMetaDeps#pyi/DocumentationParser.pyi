#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.DocumentationParserSpec import DocumentationParserSpec
from c3.platform.DocumentationParserResult import DocumentationParserResult

# Python definitions for the C3 type DocumentationParser


class DocumentationParser(Value):
    """
    This type is responsible for extracting and parsing documentation and delivering it for rendering.
    
    @see documentation-features.c3doc
    
    @remarks this represents a made instance of DocumentationParser
    """
    def __init__(self) -> None: ...

    @classmethod
    def parseType(cls, typeName: str, spec: DocumentationParserSpec=None) -> Union[DocumentationParserResult]:
    """
    Extract documentation for a DSL type.
    
    @param typeName
              the name of the type
    @return parsed type documentation
    """
        ...
    @classmethod
    def parseTypeField(cls, typeName: str, fieldName: str, spec: DocumentationParserSpec=None) -> Union[DocumentationParserResult]:
    """
    Extract documentation for a type field.  This will return a FieldTypeDocumentation.
    
    @param typeName
              the name of the type
    @param fieldName
              the name of the field
    @return parsed data field or function documentation
    """
        ...
    @classmethod
    def parseTypeMethod(cls, typeName: str, methodName: str, spec: DocumentationParserSpec=None) -> Union[DocumentationParserResult]:
    """
    Extract documentation for a type method.  This can either return either a MethodTypeDocumentation or
    a MergedDocumentation object, depending on whether the method is overloaded.
    
    @param typeName
              the name of the type
    @param methodName
              the name of the method
    @return parsed data field or function documentation
    """
        ...
    @classmethod
    def parseTopic(cls, topicName: str, spec: DocumentationParserSpec=None) -> Union[DocumentationParserResult]:
    """
    Extract documentation for a topic.
    
    @param topicName
              the name of the topic
    @return parsed topic documentation
    """
        ...
    @classmethod
    def parseMarkdown(cls, input: str, spec: DocumentationParserSpec=None) -> Union[DocumentationParserResult]:
    """
    Parse a Markdown block as a topic.
    
    @param input
              the textual input
    @return parsed topic documentation
    """
        ...

