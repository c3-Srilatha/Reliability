#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.SourceCollectionUiSpec import SourceCollectionUiSpec
from c3.platform.PingResult import PingResult
from c3.platform.SourceCollectionUi import SourceCollectionUi

# Python definitions for the C3 type SourceSystemManager


class SourceSystemManager(Value):
    """
    Represents a utility type for {@link SourceSystem}s.
    
    @remarks this represents a made instance of SourceSystemManager
    """
    def __init__(self) -> None: ...

    @classmethod
    def ping(cls, sourceSystemTypeName: str, credentials: any=None) -> Union[PingResult]:
    """
    Checks the source system for connectivity.
    
    @param sourceSystemTypeName
               The type of the source system.
    @param credentials
               The credentials of the target datastore. It must have a `name` field representing the actual instance name.
    @return The ping result
    """
        ...
    @classmethod
    def pingByName(cls, sourceSystemName: str) -> Union[PingResult]:
    """
    See {@link SourceSystemManager#ping}
    
    @param sourceSystemName
               The target source system name
    @return The ping result
    """
        ...
    @classmethod
    def sourceSystemRemoteAndLocalCollectionsInfos(cls, sourceSystemName: str, sourceSystemTypeName: str, credentials: any=None, spec: SourceCollectionUiSpec=None) -> Union[Array[SourceCollectionUi]]:
    """
    Fetches the source system collections both remotely and locally, then merges them by name and provides information
    on whether each collection resides in both environments and whether their schemas match.
    
    @param credentials
               The credential json of the target source system.
    @param sourceSystemName
               The name of the target source system.
    @param sourceSystemTypeName
               The type of the source system.
    @param spec
               A specification used to filter the results
    @return The merged list of remote and local {@link SourceCollectionUi} associated to the given source system.
    """
        ...
    @classmethod
    def sourceSystemRemoteAndLocalCollectionsInfosByName(cls, sourceSystemName: str, spec: SourceCollectionUiSpec=None) -> Union[Array[SourceCollectionUi]]:
    """
    See {@link SourceSystemManager#sourceSystemRemoteAndLocalCollectionsInfos}
    
    @param sourceSystemName
               The name of the target source system
    @param spec
               A specification used to filter the result.
    @return The merged list of remote and local {@link SourceCollectionUi} associated to the given source system.
    """
        ...
    @classmethod
    def sourceSystemLocalCollections(cls, sourceSystemName: str, spec: SourceCollectionUiSpec=None) -> Union[Array[any]]:
    """
    Fetches the local source collections associated to the given sourceSystemName.
    
    @param sourceSystemName
               The name of the target source system
    @param spec
               A specification used to filter the result.
    @return The list of local {@link SourceCollectionUi}s associated to the given source system.
    """
        ...

