#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.JdbcCredentials import JdbcCredentials

# Python definitions for the C3 type ExMachinaUserJdbcCredentialsManagement


class ExMachinaUserJdbcCredentialsManagement(ExMachinaUserCredentialsManagement[JdbcCredentials], Value):
    """
    Contains API to enable normal exMachina users to manage USER level JdbcCredentials.
    We are leveraging {@link JdbcStoreConfig} to help manage credentials for exMachina.
    Here the configKey is set as credentialKey for the credentials that user created.
    
    @remarks this represents a made instance of ExMachinaUserJdbcCredentialsManagement
    """
    def __init__(self) -> None: ...

    @classmethod
    def validateExMachinaBasicUser(cls) -> None:
    """
    To validate the user has exmachina Basic User role.
    """
        ...
    @classmethod
    def isPlatformUser(cls) -> bool:
    """
    true if the user has role "ExMachinaManagement.Role.PlatformUser".
    """
        ...
    @classmethod
    def allCredentials(cls, _name: str=None) -> Union[Map[str, any]]:
    """
    All credentials for given type at USER level (plus platform default credential for platform users).
    The key of the result will be the credentialKey, and value will be the credential.
    If the user has the role "ExMachinaManagement.Role.PlatformUser", the default credentials will be
    included with credentialKey "PLATFORM_DEFAULT".
    """
        ...
    @classmethod
    def credentialsForCredentialKey(cls, _name: str=None, credentialKey: str=None) -> Union[any]:
    """
    Get credentials for given type with given credentialKey. If the user is exMachina platform user, and
    credentialKey is "PLATFORM_DEFAULT", return the platform default credential.
    """
        ...
    @classmethod
    def setCredentialsForCredentialKey(cls, credential: JdbcCredentials, _name: str=None, credentialKey: str=None) -> None:
    """
    Set credential for given type and credentialKey. Only applies to user defined credentials.
    """
        ...
    @classmethod
    def clearCredentialsForCredentialKey(cls, _name: str=None, credentialKey: str=None) -> None:
    """
    Remove the credentials for given type and credentialKey. Only applies to user defined credentials.
    """
        ...
    @classmethod
    def doSetCredentialsForCredentialKey(cls, credential: JdbcCredentials, credentialKey: str=None) -> None:
    """
    set credential for given credentialKey without specifying datastore.
    """
        ...

