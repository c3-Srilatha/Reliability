#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Documentation import Documentation
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type DocumentationKind


class DocumentationKind():
    """
    What type of structure the documentation is associated with.
    @see Documentation
    
    @remarks this represents a made instance of DocumentationKind
    """
    
    INDEX: Optional[str]=None
    """
    A list of search results.
    """

    TOPIC: Optional[str]=None
    """
    Static documentation on a particular topic.
    
    @see TopicDocumentation
    """

    TYPE: Optional[str]=None
    """
    A type, with documentation of the model it presents.
    
    @see TypeDocumentation
    @see TypeMeta
    """

    TYPE_VARIABLE: Optional[str]=None
    """
    A generic variable in a type.
    
    @see Generic
    """

    TYPE_BINDING: Optional[str]=None
    """
    A generic variable binding in a type.
    
    @see Generic
    """

    FIELD: Optional[str]=None
    """
    A data field, with a description of the value.
    
    @see FieldTypeDocumentation
    @see FieldType
    """

    METHOD: Optional[str]=None
    """
    A method (function), with a description of the parameters and return value.
    
    @see MethodTypeDocumentation
    @see MethodType
    """

    FUNCTION_PARAM: Optional[str]=None
    """
    A function parameter.
    
    @see FunctionParam
    """

    FUNCTION_RETURN: Optional[str]=None
    """
    A function return value.
    
    @see FunctionType
    """

    ANNOTATION: Optional[str]=None
    """
    A single annotation.
    
    @see AnnotationDocumentation
    @see Annotatable
    """

    URL: Optional[str]=None
    """
    A reference to an external URL.
    
    @see DocumentationReference
    """

    POLY_TEST: Optional[str]=None
    """
    A reference to a poly test source file in the repo. This is a repository path to a `.c3poly.md` file.
    
    @see DocumentationReference
    @see poly-test.c3doc.md
    """

    NOTEBOOK: Optional[str]=None
    """
    A reference to a Jupyter or C3 notebook in the repo. For {@link JupyterNotebook seeded notebooks}, this can be the
    `id`. For all notebooks, this can be a repository path to an `.ipynb` or `.c3nb` file.
    
    @see DocumentationReference
    @see JupyterNotebook
    """

    MERGED: Optional[str]=None
    """
    Merged documentation, such as the overloads for a method.
    
    @see MethodTypeDocumentation
    @see Method
    """

    OTHER: Optional[str]=None
    """
    Another type of structure, without special support.
    """
    def __init__(self, INDEX: Optional[str]=None, TOPIC: Optional[str]=None, TYPE: Optional[str]=None, TYPE_VARIABLE: Optional[str]=None, TYPE_BINDING: Optional[str]=None, FIELD: Optional[str]=None, METHOD: Optional[str]=None, FUNCTION_PARAM: Optional[str]=None, FUNCTION_RETURN: Optional[str]=None, ANNOTATION: Optional[str]=None, URL: Optional[str]=None, POLY_TEST: Optional[str]=None, NOTEBOOK: Optional[str]=None, MERGED: Optional[str]=None, OTHER: Optional[str]=None) -> None: ...

    @classmethod
    def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Handle the natural forms as well as the forms produced by toUriComponent.
    """
        ...
    @classmethod
    def toLabel(cls, value: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum value to the label (field name).
    @param value the enum value
    @return the enum label
    """
        ...
    @classmethod
    def labelIndex(cls, label: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the label in the enum.
    @param label the enum label (field name)
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueIndex(cls, value: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the value in the enum.
    @param value the enum value
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueType(cls) -> ValueType:
    """
    @return value type of values in this enum
    """
        ...
    @classmethod
    def values(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
    the field name (same as the labels).
    """
        ...
    @classmethod
    def labels(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration labels. These are the same as the field names of the enum type.
    """
        ...
    @classmethod
    def valueToLabels(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration values to their labels.
    """
        ...
    @classmethod
    def labelToValues(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration labels to their values.
    """
        ...
    @classmethod
    def containsValue(cls, value: str) -> bool:
    """
    Is value a valid value for this enum type?
    @param value the enum value
    """
        ...
    @classmethod
    def eachLabel(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum label.
    """
        ...
    @classmethod
    def eachValue(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum value.
    """
        ...
    @classmethod
    def toUriComponent(cls, kind: str) -> str:
    """
    Take a kind and produce the component as used in a logical URI. This means converting to lower-case and
    replacing underscores with dashes.
    
    @see DocumentationUriLinkBuilder
    """
        ...
    @classmethod
    def isTopLevel(cls, kind: str) -> bool:
    """
    Return whether this kind can be a top-level piece of documentation, such as a type, field or topic.
    """
        ...
    @classmethod
    def fromObj(cls, obj: Documentation=None, failIfInvalid: bool=None) -> Union[str]:
    """
    Extract the documentation kind from a documentation object. If the obj is null or has no kind, null is returned.
    If failIfInvalid is true, a missing or invalid kind throws an appropriate error.
    
    @param obj Documentation obj to extract kind from
    @param failIfInvalid if true, error is thrown if obj is null, has no kind, or the kind is invalid
    
    @see Documentation
    @see #toValue
    """
        ...

