#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type DocumentationGlossary


class DocumentationGlossary(DocumentationPreprocessor, Value):
    """
    A glossary of terms can be managed as a CSV file for more convenient editing. In order to turn the CSV into a
    markdown document, we take advantage of the pre-processing capability to call a function that turns the spreadsheet
    data into a set of definitions and links.
    
    @remarks this represents a made instance of DocumentationGlossary
    """
    def __init__(self) -> None: ...

    @classmethod
    def preprocess(cls, input: str, path: str=None, metadata: Map[str, str]=None) -> str:
    """
    Read the body of the document as a CSV file and produce a Markdown document which formats it as a nice glossary
    of terms.
    
    The first line of the spreadsheet should have a header line that indicates which features are being used:
     - "Term" (required): the term being defined
     - "Description" (required): a one-line definition of the term
     - "Alias" (optional): alternate term with the same definition
     - "See" (optional): the type name or other link target for further information
    
    The Description should be a sentence fragment that describes the term, but without the final period.
    It can (and should) also link to other terms in brackets `[Term]`:
    ```
    Term,Description,See
    Type,Declaration of the data and methods for a concept,Type
    Field Type,Declaration of a single data field or method of a [Type],FieldType
    ```
    
    The Alias and See columns are optional. Values within them can also be (nested) comma-separated values if multiple
    aliases or links are appropriate.
    
    The terms need not be defined in any particular order. They will be sorted during processing.
    """
        ...

