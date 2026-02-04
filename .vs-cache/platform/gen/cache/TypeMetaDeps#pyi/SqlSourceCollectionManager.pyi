#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TypeMeta import TypeMeta
from c3.platform.DeclaredFieldType import DeclaredFieldType

# Python definitions for the C3 type SqlSourceCollectionManager


class SqlSourceCollectionManager(Value):
    """
    Represents a utility type for {@link SqlSourceCollection}s.
    
    @remarks this represents a made instance of SqlSourceCollectionManager
    """
    def __init__(self) -> None: ...

    @classmethod
    def remoteCollectionSourceBySourceSystem(cls, sourceSystemName: str, sourceCollectionName: str, credentials: any) -> Union[TypeMeta]:
    """
    Infers the source type metadata associated to the remote source collection.
    
    @param sourceSystemName
               The name for the target source system of the source collection.
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
    See {@link SqlSourceCollectionManager#remoteCollectionSourceBySourceSystem}
    
    @param sourceSystemName
               The source system name for the target source collection.
    @param sourceCollectionName
               The target source collection name.
    @return A json representing the type metadata associated to the remote collection.
    """
        ...
    @classmethod
    def localSourceCollectionFieldsMismatchesWithRemote(cls, sourceCollectionName: str=None, localFields: Array[DeclaredFieldType]=None, remoteFields: Array[DeclaredFieldType]=None) -> Union[Map[str, str]]:
    """
    Compares the schema name and data types of the local source collection from the remote version
    
    @param sourceCollectionName
               name of the source collection
    @param localFields
               field types in local source
    @param remoteFields
               field types in remote source
    @return The source collection type associated to the given source system type name.
    """
        ...

