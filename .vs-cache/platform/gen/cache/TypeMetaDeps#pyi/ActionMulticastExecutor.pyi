#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Pair import Pair
from c3.platform.ActionMulticastTargetSpec import ActionMulticastTargetSpec
from c3.platform.Promise import Promise

# Python definitions for the C3 type ActionMulticastExecutor


class ActionMulticastExecutor(Value):
    """
    Abstract interface for describing action multicast executor behavior.
    
    @remarks this represents a made instance of ActionMulticastExecutor
    """
    def __init__(self) -> None: ...

    @classmethod
    def multicast(cls, action: Callable[[], Union[Any]], spec: ActionMulticastTargetSpec=None) -> Union[Map[str, Pair[Any, Error]]]:
    """
    Applies given lambda synchronously on multiple server nodes.
    """
        ...
    @classmethod
    def asyncMulticast(cls, action: Callable[[], Union[Any]], spec: ActionMulticastTargetSpec=None) -> Union[Map[str, Promise[Any]]]:
    """
    Submits given lambda for asynchronous execution to multiple server nodes.
    """
        ...

