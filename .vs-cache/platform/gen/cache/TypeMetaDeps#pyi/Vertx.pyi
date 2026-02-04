#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Vertx


class Vertx(Singleton, Mutable, Value):
    """
    @remarks this represents a made instance of Vertx
    """
    def __init__(self) -> None: ...

    @classmethod
    def inst(cls) -> Vertx:
    """
    @return the one and only instance to be used when member functions are called on this type.
    """
        ...
    @classmethod
    def cachedInst(cls) -> Union[Vertx]:
    """
    @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
    """
        ...
    @classmethod
    def make(cls) -> Vertx:
    """
    Construct an instance with initial state.
    """
        ...
    def start(self, port: int, allowDuplicateServer: bool=None) -> None:
        ...
    def stop(self) -> None:
        ...
    def client(self) -> Any:
        ...
    def port(self) -> int:
        ...
    def ipAddress(self) -> str:
        ...

