#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.docgen.DocSiteLinkBuilder import DocSiteLinkBuilder
from c3.platform.DocumentationMarkup import DocumentationMarkup

# Python definitions for the C3 type DocSiteExport.MarkupUtils


class MarkupUtils(Value):
    """
    Type for traversing and/or modifying {@link DocumentationMarkup} nodes produced by the
    {@link DocumentationRenderer}.
    
    @remarks this represents a made instance of DocSiteExport.MarkupUtils
    """
    def __init__(self) -> None: ...

    @classmethod
    def enrichMarkup(cls, markup: DocumentationMarkup, linkBuilder: DocSiteLinkBuilder) -> Union[any]:
    """
    Helper function to traverse through {@link DocumentationMarkup} and do the following:
    
    - Enrich any {@link DocumentationReference}s by adding the following attributes
      to the references:
      - `pkgName`
      - `pkgVersion`
      - `exists` (boolean indicating whether the reference points to an existing resource)
    - Enrich any {@link DocumentationImage}s by converting any relative [src paths](DocumentationImage#src)
      to absolute paths.
    
    @param markup
              The parsed documentation markup to traverse and enrich.
    @param linkBuilder
              The link builder to use to enrich {@link DocumentationReference}s and
              {@link DocumentationImage}s.
    @returns The enriched markup.
    """
        ...

