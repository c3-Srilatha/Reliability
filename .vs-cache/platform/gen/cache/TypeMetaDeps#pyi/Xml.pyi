#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Xml

T = TypeVar('T')

class Xml(Generic[T], Value):
    """
    @remarks this represents a made instance of Xml
    """
    def __init__(self) -> None: ...

    @classmethod
    def validate(cls, xml: str, xsd: str=None) -> None:
    """
    validates the xml - the schema can either be provided through the 'schema' annotation on the mixing type or
    the content of the xsd can be passed explicitly here. The schema specified using the annotation must be stored
    as an attachment in the C3 filesystem. The xml will be validated against this schema and W3C XML schema.
    
    @param xml the xml to validate
    @param xsd (optional) if provided, validates xml using this instead of the one provided through 'schema' annotation
    """
        ...
    @classmethod
    def toXml(cls, obj: T=None) -> Union[str]:
    """
    serialize the given object to xml
    """
        ...
    @classmethod
    def fromXml(cls, xml: str=None) -> Union[T]:
    """
    deserialize the given xml to an object
    """
        ...
    @classmethod
    def clearXsdCache(cls, schema: str=None) -> None:
    """
    clear the Xsd Cache
      this action will clear the xsd cache on all the nodes in the Cluster
    
    @param schema - this optional parameter can be used to remove a single entry from the cache
    """
        ...
    @classmethod
    def _clearNodeXsdCache(cls, schema: str=None) -> None:
    """
    INTERNAL function, do not invoke directly
    """
        ...

