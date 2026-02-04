#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Ray.Ref import Ray.Ref

# Python definitions for the C3 type Ray.ActorHandle


class ActorHandle(Value):
    """
    @remarks this represents a made instance of Ray.ActorHandle
    """
    def __init__(self) -> None: ...

    def id(self) -> str:
        ...
    @overload
    def call(self, func: str, *args: Array[Any]) -> Union[Ray.Ref]:
        ...
    @overload
    def call(self, func: str, args: Array[Any]=None, kwargs: Map[str, Any]=None) -> Union[Ray.Ref]:
        ...
    def kill(self) -> None:
        ...
    def restart(self) -> None:
        ...

