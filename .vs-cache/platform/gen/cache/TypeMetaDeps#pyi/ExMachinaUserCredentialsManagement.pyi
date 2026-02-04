#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type ExMachinaUserCredentialsManagement

C = TypeVar('C')

class ExMachinaUserCredentialsManagement(Generic[C], Value):
    """
    The base type to enable normal exMachina users to call APIs to manage USER level credentials.
    For exMachina users, there are 2 kinds of roles they can have to access credentials:
    1. ExMachina Basic User is the role (role name "ExMachinaManagement.Role.BasicUser") required for normal
    individual exMachina users to create exMachina instance, access the UI, etc. It is required for exMachina user to
    access exMachina. This role only allows users to access credentials defined by the user themselves.
    2. PlatformUser role (role name "ExMachinaManagement.Role.PlatformUser") is to enable users belonging to a
    corporate user to have access to platform default credentials.
    
    @remarks this represents a made instance of ExMachinaUserCredentialsManagement
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
    def setCredentialsForCredentialKey(cls, credential: C, _name: str=None, credentialKey: str=None) -> None:
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

