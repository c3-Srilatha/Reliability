#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TimeoutSpec import TimeoutSpec
from c3.platform.Promise import Promise

# Python definitions for the C3 type ActionExecutor


class ActionExecutor(Value):
    """
    Abstract interface for describing action executor behavior.
    
    @remarks this represents a made instance of ActionExecutor
    """
    def __init__(self) -> None: ...

    def exec(self, action: Callable[[], Union[Any]], spec: TimeoutSpec=None) -> Union[Any]:
    """
    Applies given lambda synchronously.
    """
        ...
    def async(self, action: Callable[[], Union[Any]], spec: TimeoutSpec=None) -> Union[Promise[Any]]:
    """
    Submits given lambda for asynchronous execution.
    """
        ...

