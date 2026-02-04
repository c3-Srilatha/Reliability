#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type DataTypeIconUtil


class DataTypeIconUtil(Value):
    """
    Helper functions for rendering data type icon.
    
    @remarks this represents a made instance of DataTypeIconUtil
    """
    def __init__(self) -> None: ...

    @classmethod
    def iconByDataType(cls, dataType: str) -> Union[str]:
    """
    Returns the icon name for a given data type.
    
    @param dataType
               The given data type
    
    @return fontAwesome icon name for the data type.
    """
        ...
    @classmethod
    def iconBackgroundColorByDataType(cls, dataType: str) -> Union[str]:
    """
    Returns the background color for a given data type.
    
    @param dataType
               The given data type.
    
    @return Color for the data type.
    """
        ...
    @classmethod
    def resolveType(cls, valueType: ValueType=None) -> Union[str]:
    """
    Returns the value type name.
    
    @param valueType
               The value type
    
    @return A string version of the value type name.
    """
        ...
    @classmethod
    def resolveTransformedType(cls, valueType: ValueType=None) -> Union[str]:
    """
    Returns the value type name for a {@link UiSdlTypeWorkerValueTypeTransformHelper} transformed value type.
    
    @param valueType
               The value type
    
    @return A string version of the value type name.
    """
        ...

