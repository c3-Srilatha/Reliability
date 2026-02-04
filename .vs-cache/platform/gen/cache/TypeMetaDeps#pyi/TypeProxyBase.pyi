#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TypeProxy import TypeProxy
from c3.platform.ThinTypeSystemBase import ThinTypeSystemBase
from c3.platform.AsyncTypeProxy import AsyncTypeProxy
from c3.platform.ServerConnection import ServerConnection

# Python definitions for the C3 type TypeProxyBase


class TypeProxyBase(Value):
    """
    The {@link ThinTypeSystemBase thin type system} returns a simpler interface to a type that has a different set of
    methods than the full {@link Type}/{@link TypeMeta} exposed by the {@link TypeSystemBase full type system}.
    In particular, the individual methods of types are not exposed directly, but must be invoked using the generic
    call/callByName/callByPosition methods of the proxy.
    
    @remarks this represents a made instance of TypeProxyBase
    """
    def __init__(self) -> None: ...

    def name(self) -> str:
    """
    @return the name of the type
    """
        ...
    def isPersistable(self) -> bool:
    """
    @return whether or not this type is persistable (and whether this is a persistable proxy)
    """
        ...
    def sync(self) -> TypeProxy:
    """
    Get a synchronous proxy for this type. If this instance is a synchronous version, the same value is returned.
    
    @return instance of this proxy that dispatches actions in a synchronous manner
    """
        ...
    def async(self) -> AsyncTypeProxy:
    """
    Get an asynchronous proxy for this type. If this instance is an asynchronous version, the same value is returned.
    
    @return instance of this proxy that dispatches actions in a asynchronous manner using Promise
    """
        ...
    def typeSystem(self) -> ThinTypeSystemBase:
    """
    Get the instance of the type system that created this proxy.
    """
        ...
    def connection(self) -> ServerConnection:
    """
    Get the connection on which this proxy operates.
    
    @return server connection
    """
        ...

