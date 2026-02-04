#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ExMachinaSession import ExMachinaSession
from c3.platform.ExMachinaInstance.Config import ExMachinaInstance.Config
from c3.platform.Config import Config
from c3.platform.ExMachinaConnectorCredentialConfig import ExMachinaConnectorCredentialConfig

# Python definitions for the C3 type ExMachinaBasePrivilegedAction


class ExMachinaBasePrivilegedAction(Value):
    """
    IMPORTANT
    
    Any changes to this file or the JavaScript file must be accompanied by a c3server commit in `PrivilegedAction.java`
    to update the fingerprint and the security team must be added as reviewers for the PR. For this reason, try to
    avoid any updates to this type and keep as much application logic as possible in other types. That being said, in
    order for PrivilegedAction to work correctly, the API called by the user must be set to `authz='always'` and the
    user must have explicit permissions, so also create as much abstraction as possible so a user cannot do anything
    malicious with the API.
    
    If changes are required, the fingerprint can be retrieved from console with:
    
    ```js
    Pkg.Store.fingerprintEncodedContent(C3.pkg().content(C3.pkg().typeSourceCodePaths(ExMachinaBasePrivilegedAction)[0]).readEncoded());
    ```
    
    @remarks this represents a made instance of ExMachinaBasePrivilegedAction
    """
    def __init__(self) -> None: ...

    @classmethod
    def setCredentialConfig(cls, config: ExMachinaConnectorCredentialConfig, override: str=None) -> None:
    """
    Sets non-secret value configuration for the provided Config object
    @param override
             {@link ConfigOverride} for the non-secret fields
    """
        ...
    @classmethod
    def setCredentialConfigValue(cls, config: ExMachinaConnectorCredentialConfig, path: str, value: Any, override: str=None) -> None:
    """
    Sets non-secret configuration field value at provided path in Config object
    @param config
             Config instance to update
           path
              Path of field to update
           value
              Value to insert at provided path
           override
               {@link ConfigOverride} for the field update
    """
        ...
    @classmethod
    def setCredentialSecret(cls, config: ExMachinaConnectorCredentialConfig, override: str=None) -> None:
    """
    Sets secret value configurations for the provided Config object
    @param override
             {@link ConfigOverride} for the secret fields
    """
        ...
    @classmethod
    def setCredentialSecretValue(cls, config: ExMachinaConnectorCredentialConfig, path: str, value: Any, override: str=None) -> None:
    """
    Sets secret configuration field value at provided path in Config object
    @param config
             Config instance to update
           path
              Path of field to update
           value
              Value to insert at provided path
           override
               {@link ConfigOverride} for the field update
    """
        ...
    @classmethod
    def getCredentialConfig(cls, config: ExMachinaConnectorCredentialConfig) -> Union[Config]:
    """
    Gets cached instance of Config
    @param config
             Config instance to retrieve secrets for
    @return the {@link Config} instance
    """
        ...
    @classmethod
    def getCredentialSecret(cls, config: ExMachinaConnectorCredentialConfig) -> Union[Config]:
    """
    Gets cached instance of Config containing only secret values
    @param config
             Config instance to retrieve secrets for
    @return the {@link Config} instance
    """
        ...
    @classmethod
    def credentialSecretValue(cls, config: ExMachinaConnectorCredentialConfig, path: str, failIfMissing: bool=None) -> Union[Any]:
    """
    Gets the cached secret value at the provided field path
    @param config
             Config instance to retrieve secrets for
           path
              Path of field to update
           failIfMissing
              Determines whether function returns null or errors if missing
    @return the secret value
    """
        ...
    @classmethod
    def clearConfigAndSecretOverride(cls, config: ExMachinaConnectorCredentialConfig) -> None:
    """
    Clears the configuration including secrets for app override level only
    """
        ...
    @classmethod
    def getExMachinaInstanceConfig(cls) -> ExMachinaInstance.Config:
    """
    Invoke {@link ExMachinaInstance#getConfig} to load the instance config
    """
        ...
    @classmethod
    def stopSession(cls, session: ExMachinaSession) -> ExMachinaSession:
    """
    Stop the given ExMachinaSession
    
    @param session
             The session to stop. We perform server-side validation to ensure that the user can stop the session
    """
        ...

