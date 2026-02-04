#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.AsyncTypeSystem import AsyncTypeSystem
from c3.platform.Promise import Promise
from c3.platform.ServerConnection import ServerConnection
from c3.platform.Promise import Promise

# Python definitions for the C3 type AsyncType


class AsyncType(Value):
    """
    The {@link AsyncTypeSystem async full type system} returns a version of the full {@link Type} on which methods are
    asynchronous.
    
    @remarks this represents a made instance of AsyncType
    """
    def __init__(self) -> None: ...

    def name(self) -> Union[str]:
    """
    The name of this type
    
    @see TypeMeta#qname
    """
        ...
    def meta(self) -> Promise[TypeMeta]:
    """
    @return metadata for this type
    """
        ...
    def call(self, action: str, *args: Array[Any], thisArg: Any=None) -> Union[Promise[Any]]:
    """
    Call a method on this type, with the arguments specified positionally (as varargs). For member method calls the
    "this" instance should be passed as `#thisArg` and for static method calls, `#thisArg` can optionally be passed as
    specific sub-type of this type.
    """
        ...
    def typeSystem(self) -> AsyncTypeSystem:
    """
    Get the instance of the type system that created this type.
    """
        ...
    def connection(self) -> ServerConnection:
    """
    Get the connection on which this type operates.
    
    @return server connection
    """
        ...

