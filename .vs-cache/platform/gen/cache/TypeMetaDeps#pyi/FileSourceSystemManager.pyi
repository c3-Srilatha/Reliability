#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.SourceCollectionUiSpec import SourceCollectionUiSpec
from c3.platform.PingResult import PingResult

# Python definitions for the C3 type FileSourceSystemManager


class FileSourceSystemManager(Value):
    """
    Represents a utility type for local {@link FileSourceSystem}s.
    
    @remarks this represents a made instance of FileSourceSystemManager
    """
    def __init__(self) -> None: ...

    @classmethod
    def ping(cls, credentials: any=None) -> Union[PingResult]:
    """
    Checks the source system for connectivity.
    
    @param credentials
               The credentials for the target source system.
    @return The ping result.
    """
        ...
    @classmethod
    def pingByName(cls, sourceSystemName: str) -> Union[PingResult]:
    """
    See {@link FileSourceSystemManager#ping}
    
    @param sourceSystemName
               The target source system name
    @return The ping result
    """
        ...
    @classmethod
    def sourceSystemRemoteCollections(cls, sourceSystemName: str, credentials: any=None, spec: SourceCollectionUiSpec=None) -> Union[Array[str]]:
    """
    Fetches the source system collections from the remote location.
    NOTE:
    - The source collections returned do not have the `source` field set as as a TypeRef, the corresponding
      type has to exist. But it is not always the case. Call `SourceCollectionManager.remoteCollectionSource` to get the
      source type metadata.
    
    @param credentials
               The credentials for the target source system.
    @param spec
               The spec to customize the results.
    @param sourceSystemName
               The name for the target source system.
    @return The list of names of remote {@link FileSourceCollection}s associated to the given source system.
    """
        ...
    @classmethod
    def sourceCollectionsExtra(cls, sourceSystem: any) -> Union[any]:
    """
    Gets extra information regarding the FileSourceSystem's source collections.
    - The map key is the source collection name.
    
    @param sourceSystem
               The target source system.
    @return Extra information regarding the FileSourceSystem's source collections.
    """
        ...

