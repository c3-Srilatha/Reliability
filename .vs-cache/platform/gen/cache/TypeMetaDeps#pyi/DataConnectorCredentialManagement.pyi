#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.DataConnectorSharedFileStorageCredential import DataConnectorSharedFileStorageCredential
from c3.platform.JsonDataConnectorCredential import JsonDataConnectorCredential
from c3.platform.JdbcStoreDataConnectorCredential import JdbcStoreDataConnectorCredential
from c3.platform.FileSystemDataConnectorCredential import FileSystemDataConnectorCredential

# Python definitions for the C3 type DataConnectorCredentialManagement


class DataConnectorCredentialManagement(Value):
    """
    @remarks this represents a made instance of DataConnectorCredentialManagement
    """
    def __init__(self) -> None: ...

    @classmethod
    def retrieveAll(cls, datastore: str) -> Union[Array[Union[FileSystemDataConnectorCredential,JdbcStoreDataConnectorCredential,JsonDataConnectorCredential]]]:
    """
    Retrieve all credential of the data store type that the caller has access to.
    
    @param datastore
              The data store type.
    """
        ...
    @classmethod
    def upsert(cls, credential: Union[FileSystemDataConnectorCredential,JdbcStoreDataConnectorCredential,JsonDataConnectorCredential]) -> bool:
    """
    Create or update the credential in {@link JdbcCredentials}.
    """
        ...
    @classmethod
    def remove(cls, credential: Union[FileSystemDataConnectorCredential,JdbcStoreDataConnectorCredential,JsonDataConnectorCredential]) -> bool:
    """
    Remove the credential.
    """
        ...
    @classmethod
    def get(cls, datastore: str, credential: str=None) -> Union[Union[FileSystemDataConnectorCredential,JdbcStoreDataConnectorCredential,JsonDataConnectorCredential]]:
    """
    Get the credential.
    
    @param credential
              The credential id
    """
        ...
    @classmethod
    def createSharedFileStorageCredential(cls, credential: DataConnectorSharedFileStorageCredential) -> bool:
    """
    Create the credential used for the storage service storing the shared files.
    
    @param credential
              The credential {@link FileSystemDataConnectorCredential}
    """
        ...
    @classmethod
    def sharedFileStorageCredential(cls) -> Union[DataConnectorSharedFileStorageCredential]:
    """
    Obtain the credential used for the storage service storing the shared files.
    """
        ...

