#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type TestGenHelper


class TestGenHelper(Value):
    """
    Helper type for apps test template generator (tools/testgen)
    
    @remarks this represents a made instance of TestGenHelper
    """
    def __init__(self) -> None: ...

    @classmethod
    def getTypesForFields(cls, typeName: str=None, fields: str=None) -> Union[Array[str]]:
    """
    Get type names of dot-separated field names.
    Used for getting each type name of the path field of a metric.
    
    @param typeName
       name of the parent type
    @param fields
       dot-separated field names
    
    @return an array of type names
    """
        ...
    @classmethod
    def getAnnotationsForField(cls, typeName: str=None, field: str=None) -> Union[any]:
    """
    Get a list of annotations for a given field/function in a type.
    Used in testgen to classify actions, reducers, epic functions
    
    @param typeName
       name of the relevant type
    @param field
       the field or function whose annotations are to be return
    
    @return an array of type field/function annotations
    """
        ...

