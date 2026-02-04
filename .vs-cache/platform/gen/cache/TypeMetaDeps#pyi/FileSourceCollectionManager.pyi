#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TypeMeta import TypeMeta
from c3.platform.DeclaredFieldType import DeclaredFieldType
from c3.platform.FileSourceCollection import FileSourceCollection

# Python definitions for the C3 type FileSourceCollectionManager


class FileSourceCollectionManager(Value):
    """
    Represents a utility type for {@link FileSourceCollection}s.
    
    @remarks this represents a made instance of FileSourceCollectionManager
    """
    def __init__(self) -> None: ...

    @classmethod
    def remoteCollectionSourceBySourceSystem(cls, sourceSystemName: str, sourceCollectionName: str, credentials: any=None) -> Union[TypeMeta]:
    """
    Infers the source type metadata associated to the remote source collection.
    
    @param sourceSystemName
               The name of the source system for the target source collection.
    @param sourceSystemTypeName
               The type name for the target source system of the source collection.
    @param sourceCollectionName
               The target source collection name.
    @return A json representing the type metadata associated to the remote collection.
    """
        ...
    @classmethod
    def remoteCollectionSourceBySourceSystemName(cls, sourceSystemName: str, sourceCollectionName: str) -> Union[TypeMeta]:
    """
    See {@link FileSourceCollectionManager#remoteCollectionSourceBySourceSystem}
    
    @param sourceSystemName
               The source system id for the target source collection.
    @param sourceCollectionName
               The target source collection name.
    @return A json representing the type metadata associated to the remote collection.
    """
        ...
    @classmethod
    def addFileToCollection(cls, fileName: str, content: str, sourceCollection: FileSourceCollection) -> bool:
    """
    Adds a file to a {@link FileSourceCollection}
    @param fileName The file name
    @param content The file content
    @param sourceCollection The File Source Collection
    
    @return boolean Returns true if the action completes successfully
    """
        ...
    @classmethod
    def localSourceCollectionFieldsMismatchesWithRemote(cls, sourceCollectionName: str=None, localFields: Array[DeclaredFieldType]=None, remoteFields: Array[DeclaredFieldType]=None) -> Union[Map[str, str]]:
    """
    Compares the fields names and data types of the local source collection from the remote version
    
    @param sourceCollectionName
               name of the source collection
    @param localFields
               field types in local source
    @param remoteFields
               field types in remote source
    @return The source collection type associated to the given source system type name.
    """
        ...

