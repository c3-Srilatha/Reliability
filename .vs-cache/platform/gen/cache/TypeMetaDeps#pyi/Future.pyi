#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Pair import Pair
from c3.platform.Duration import Duration

# Python definitions for the C3 type Future

V = TypeVar('V')

class Future(Generic[V], Value):
    """
    Result of an asynchronous action.
    
    @remarks this represents a made instance of Future
    """
    def __init__(self) -> None: ...

    def isDone(self) -> bool:
    """
    @returns true if the action has completed.
    """
        ...
    def get(self, timeout: Duration=None) -> Union[V]:
    """
    @return value of this action; note that this is a potentially blocking call if value is not yet available.
            Also call will throw exception if action that is suppose to deliver the promise failed.
    """
        ...
    def getValueOrError(self, timeout: Duration=None) -> Union[Pair[V, Error]]:
    """
    @return one of  value or error; note that this is a potentially blocking call if value is not yet available.
    """
        ...

