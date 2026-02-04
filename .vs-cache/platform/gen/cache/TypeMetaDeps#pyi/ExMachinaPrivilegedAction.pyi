#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ExMachinaSession import ExMachinaSession
from c3.platform.ExMachinaMemorySize import ExMachinaMemorySize
from c3.platform.ExMachinaSession.Info import ExMachinaSession.Info
from c3.platform.ExMachinaConfig import ExMachinaConfig
from c3.platform.K8sDeployment import K8sDeployment

# Python definitions for the C3 type ExMachinaPrivilegedAction


class ExMachinaPrivilegedAction(Value):
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
    Pkg.Store.fingerprintEncodedContent(C3.pkg().content(C3.pkg().typeSourceCodePaths(ExMachinaPrivilegedAction)[0]).readEncoded());
    ```
    
    @remarks this represents a made instance of ExMachinaPrivilegedAction
    """
    def __init__(self) -> None: ...

    @classmethod
    def startNewSessionForMe(cls, size: ExMachinaMemorySize) -> ExMachinaSession:
    """
    Start a new {@link ExMachinaSession} for the current member.
    
    @param size
             The session size. We perform server-side validation to ensure that the member does not exceed their
             max size limit.
    """
        ...
    @classmethod
    def getPageConfig(cls) -> ExMachinaConfig:
    """
    Invoke {@link ExMachinaConfig#getPageConfig} to load the page iframe
    """
        ...
    @classmethod
    def getAllK8sDeploymentsInCurrentApp(cls) -> Union[Array[K8sDeployment]]:
    """
    Get K8s deployments in the current Env/App
    """
        ...
    @classmethod
    def defaultInfoForMe(cls) -> Union[ExMachinaSession.Info]:
    """
    Get the default session info for the current user's member
    """
        ...

