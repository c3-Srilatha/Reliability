#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TypeMeta import TypeMeta
from c3.platform.Type import Type
from c3.platform.DeclaredFieldType import DeclaredFieldType

# Python definitions for the C3 type SourceCollectionManager


class SourceCollectionManager(Value):
    """
    Represents a utility type for {@link SourceCollection}s.
    
    @remarks this represents a made instance of SourceCollectionManager
    """
    def __init__(self) -> None: ...

    @classmethod
    def remoteCollectionSourceBySourceSystem(cls, sourceSystemName: str, sourceSystemTypeName: str, sourceCollectionName: str, credentials: any=None) -> Union[TypeMeta]:
    """
    Infers the source type metadata associated to the remote source collection.
    The json output has the structure of a {@link Type}.
    
    @param sourceSystemName
               The name of the target source system.
    @param sourceSystemTypeName
               The type name of the target source system.
    @param sourceCollectionName
               The target source collection name.
    @param credentials
               The credentials for the target source system.
    @return A json representing the type metadata associated to the remote collection.
    """
        ...
    @classmethod
    def remoteCollectionSourceBySourceSystemName(cls, sourceSystemName: str, sourceCollectionName: str) -> Union[TypeMeta]:
    """
    See {@link SourceCollectionManager#remoteCollectionSourceBySourceSystem}
    
    @param sourceSystemName
               The target source system name.
    @param sourceCollectionName
               The target source collection name.
    @return A json representing the type metadata associated to the remote collection.
    """
        ...
    @classmethod
    def remoteCollectionSchemaByData(cls, sourceFieldsValues: Array[any]) -> Union[any]:
    """
    Infers the source type metadata from the given array of fields names with associated values.
    The json output has the structure of a {@link Type}.
    
    @param sourceFieldsValues
               Array of the fields and values to infer the {@link ValueType}s from.
               - The content of the array is a json keyed on the field names and whose values are the
                 fields values.
    @return A json representing the type metadata associated to the given data.
    """
        ...
    @classmethod
    def remoteCollectionSchemasByData(cls, sourcesFieldsValues: Array[Array[any]]) -> Union[Array[any]]:
    """
    Return the list of {@link SourceCollectionManager#remoteCollectionSchemaByData}
    
    @param sourcesFieldsValues
               Array of the various sources to infer the schema from.
    @return A list of json representing the type metadata associated to each data source.
    """
        ...
    @classmethod
    def localCollectionSourceBySourceCollectionName(cls, sourceCollectionName: str) -> Union[TypeMeta]:
    """
    Gets the source type metadata associated to the local source collection.
    The json output has the structure of a {@link Type}.
    
    @param sourceCollectionName
               The target source collection name
    @return A json representing the type metadata associated to the local source collection.
    """
        ...
    @classmethod
    def sourceCollectionTypeBySourceSystemTypeName(cls, sourceSystemTypeName: str) -> Union[Type]:
    """
    Gets the source collection type from the given source system type name.
    
    @param sourceSystemTypeName
               The target sourceSystem type name.
    @return The source collection type associated to the given source system type name.
    """
        ...
    @classmethod
    def localSourceCollectionFieldsMismatchesWithRemote(cls, sourceCollectionName: str=None, localFields: Array[DeclaredFieldType]=None, remoteFields: Array[DeclaredFieldType]=None) -> Union[Map[str, str]]:
    """
    Compares the fields names or schema name and data types of the local source collection from the remote version
    
    @param sourceCollectionName
               name of the source collection
    @param localFields
               field types in local source
    @param remoteFields
               field types in remote source
    @return The source collection type associated to the given source system type name.
    """
        ...

