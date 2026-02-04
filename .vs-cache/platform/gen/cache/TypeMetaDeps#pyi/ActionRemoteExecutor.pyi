#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TimeoutSpec import TimeoutSpec
from c3.platform.ActionTargetSpec import ActionTargetSpec
from c3.platform.Promise import Promise

# Python definitions for the C3 type ActionRemoteExecutor


class ActionRemoteExecutor(ActionStaticExecutor, Value):
    """
    Abstract interface for describing action executor behavior.
    
    @remarks this represents a made instance of ActionRemoteExecutor
    """
    def __init__(self) -> None: ...

    @overload
    @classmethod
    def exec(cls, action: Callable[[], Union[Any]], spec: TimeoutSpec=None) -> Union[Any]:
    """
    Applies given lambda synchronously.
    """
        ...
    @overload
    @classmethod
    def exec(cls, action: Callable[[], Union[Any]], spec: ActionTargetSpec=None) -> Union[Any]:
    """
    Applies given lambda synchronously and optionally remotely.
    """
        ...
    @overload
    @classmethod
    def async(cls, action: Callable[[], Union[Any]], spec: TimeoutSpec=None) -> Union[Promise[Any]]:
    """
    Submits given lambda for asynchronous execution.
    """
        ...
    @overload
    @classmethod
    def async(cls, action: Callable[[], Union[Any]], spec: ActionTargetSpec=None) -> Union[Promise[Any]]:
    """
    Submits given lambda for asynchronous and potentially remote execution.
    """
        ...

