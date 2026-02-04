#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.DocumentationRenderResult import DocumentationRenderResult
from c3.platform.DocumentationRenderSearchSpec import DocumentationRenderSearchSpec
from c3.platform.DocumentationRenderSpec import DocumentationRenderSpec
from c3.platform.Pkg.File import Pkg.File

# Python definitions for the C3 type DocumentationRenderer


class DocumentationRenderer(Value):
    """
    This type is responsible for formatting documentation for display.
    
    For convenience, it can be called via GET in a RESTful way since all its methods are idempotent:
      - /documentation/index
      - /documentation/type/_name_
      - /documentation/type/_name_/field/_name_
    
    Links within the documentation can be generated using this format, see {@link DocumentationRenderSpec#docLinks}.
    
    Rendering can be one to several formats, but the most canonical one is HTML. For HTML, we produce a document
    fragment (no `head` or `body` tags) which is meant to be embedded in some context that provides styles and
    script support. For example, the {@link server:/documentation/editor documentation micro site} hosts it within
    an application that provides the navigation structure.
    
    A more complete presentation can be obtained by specifying the {@link DocumentationRenderSpec#includeCss} and
    {@link DocumentationRenderSpec#includeJs includeJs} options to add basic CSS styles and JavaScript.
    To create a stand-alone HTML page, use the {@link DocumentationRenderSpec#standAlone standAlone} option.
    
    Additional CSS and JavaScript is needed for the following features:
     - [PrismJs](https://prismjs.com/) CSS and JavaScript
     - [MathJax](https://www.mathjax.org/) JavaScript
     - [Mermaid](https://mermaid.js.org/) JavaScript
    
    Features like callouts and tables use standard HTML, but need CSS to look good. Other features like cards require
    it. The HTML produced is tagged with classes for targeting CSS and JavaScript additions.
    
    @see DocumentationRenderSpec
    
    @remarks this represents a made instance of DocumentationRenderer
    """
    def __init__(self) -> None: ...

    @classmethod
    def renderType(cls, typeName: str, spec: DocumentationRenderSpec=None) -> Union[DocumentationRenderResult]:
    """
    Render type documentation for display.
    
    @param typeName
              the name of the type
    @return rendered documentation
    """
        ...
    @classmethod
    def renderTypeField(cls, typeName: str, fieldName: str, spec: DocumentationRenderSpec=None) -> Union[DocumentationRenderResult]:
    """
    Render type field documentation for display.
    
    @param typeName
              the name of the type
    @param fieldName
              the name of the field
    @return rendered documentation
    """
        ...
    @classmethod
    def renderTypeMethod(cls, typeName: str, methodName: str, spec: DocumentationRenderSpec=None) -> Union[DocumentationRenderResult]:
    """
    Render type method documentation for display.
    
    @param typeName
              the name of the type
    @param methodName
              the name of the method
    @return rendered documentation
    """
        ...
    @overload
    @classmethod
    def renderTopic(cls, topicName: str, spec: DocumentationRenderSpec=None) -> Union[DocumentationRenderResult]:
    """
    Render topic documentation for display.
    
    @param topicName
              the name of the topic
    @return rendered documentation
    """
        ...
    @overload
    @classmethod
    def renderTopic(cls, file: Pkg.File=None, spec: DocumentationRenderSpec=None) -> Union[DocumentationRenderResult]:
    """
    Render topic documentation for display given then topic file.
    
    @param file
               the {@link File} representing the topic
    @param spec
               the specifications for rendering the topic
    @return rendered documentation
    """
        ...
    @classmethod
    def renderSearch(cls, q: str, spec: DocumentationRenderSearchSpec=None) -> Union[DocumentationRenderResult]:
    """
    Render a search result for display.
    
    @param q
              search query
    @return rendered documentation
    """
        ...
    @classmethod
    def renderMarkdown(cls, input: str, spec: DocumentationRenderSpec=None) -> Union[DocumentationRenderResult]:
    """
    Render a Markdown block for display.
    
    @param input
              Markdown text
    @return rendered documentation
    """
        ...

