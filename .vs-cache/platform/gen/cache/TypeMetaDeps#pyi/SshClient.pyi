#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.SshEndPoint import SshEndPoint

# Python definitions for the C3 type SshClient


class SshClient(Value):
    """
    Type used from **all-env** to execute commands through ssh on any instance in the cloud.
    
    @remarks this represents a made instance of SshClient
    """
    def __init__(self) -> None: ...

    @classmethod
    def exec(cls, endPoint: SshEndPoint, command: str, debug: bool=None, pkFile: str=None, userName: str=None) -> Union[str]:
    """
    Execute a command in the instance described by the SshEndPoint.
    
    @param endPoint
              SshEndPoint object that describes the target instance for the command.
    @param command
              command to execute in the given instance.
    @param debug
              trace the ssh commands (-vvv) if true.
    @param pkFile
              if specified, absolute location for the pkfile to use. Defaults to the c3 user c3-kp-01.pem file.
    @param userName
              user to execute the command as. Defaults to 'root'.
    
    @return String
              if the command is successful (exit-code == 0) stdout of the command executed.
              if the command ifailes (exit-code != 0) stderr of the command executed.
    """
        ...
    @classmethod
    def clearEndPointCache(cls) -> None:
    """
    The SshEnpoints are cached for efficiency. The cache is never invalidated, so this action can be used
    to empty it.
    """
        ...

