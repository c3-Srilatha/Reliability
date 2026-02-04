#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.ExMachinaTypeResult import ExMachinaTypeResult
from c3.platform.ExMachinaTypeDescription import ExMachinaTypeDescription
from c3.platform.ExMachinaTypeField import ExMachinaTypeField

# Python definitions for the C3 type ExMachinaMetadata


class ExMachinaMetadata(Value):
    """
    @remarks this represents a made instance of ExMachinaMetadata
    """
    def __init__(self) -> None: ...

    @classmethod
    def getCurrentType(cls) -> Union[Type]:
    """
    Returns the type of the caller of the root action. Often useful when defining helper functions on types that are
    mixed in by other types, where the specific type is useful for calling downstream methods.
    
    Note: the use of `inline` here allows the function to return the caller type rather than the `ExMachinaMetadata`
    type
    """
        ...
    @classmethod
    def getCurrentTypeName(cls) -> Union[str]:
    """
    Returns the name of the type of the caller. See {@link getCurrentType} for more details.
    
    Note: the use of `inline` here allows the function to return the caller type name rather than `"ExMachinaMetadata"`
    """
        ...
    @classmethod
    def getTypes(cls, filterPersistables: bool=None) -> Union[ExMachinaTypeResult]:
    """
    Return types with optional filters applied to the persistable types
    """
        ...
    @classmethod
    def getMixinTypes(cls, typeName: str=None) -> Union[ExMachinaTypeResult]:
    """
    Return types that mix the given type
    """
        ...
    @classmethod
    def getMixinTypeNames(cls, typeName: str=None, filterByAccess: bool=None) -> Union[Array[str]]:
    """
    Returns the list of type names that mix the given type. The given typeName will not be included in the list.
    """
        ...
    @classmethod
    def getFields(cls, typeName: str=None, filterByAccess: bool=None) -> Union[Array[ExMachinaTypeField]]:
    """
    Return fields of given type in the specified tag
    """
        ...
    @classmethod
    def isKeyValueStoreType(cls, typeName: str) -> bool:
    """
    Return true if given type name is stored in cassandra
    """
        ...
    @classmethod
    def getPartitionKeyFieldForKeyValueStoreType(cls, typeName: str) -> Union[str]:
    """
    Return name of partition key filed if type with given name is in key value store, empty string will be
    returned otherwise
    """
        ...
    @classmethod
    def getParentTypeForKeyValueStoreType(cls, typeName: str) -> Union[str]:
    """
    Return parent type name if type with given name is in key value store, empty string will be returned otherwise
    """
        ...
    @classmethod
    def isExternalType(cls, typeName: str) -> bool:
    """
    Return true if given type name mixes in External or NoSystemCols
    """
        ...
    @classmethod
    def getTypeDescription(cls, typeName: str) -> Union[str]:
    """
    Returns the documentation/description for the specified type
    """
        ...
    @classmethod
    def getTypeDescriptions(cls, typeNames: Array[str]) -> Union[Array[ExMachinaTypeDescription]]:
    """
    Returns the documentation/descriptions of the specified types
    """
        ...
    @classmethod
    def isTypeFacaded(cls, typeName: str) -> bool:
    """
    Returns whether a type is facaded
    """
        ...

