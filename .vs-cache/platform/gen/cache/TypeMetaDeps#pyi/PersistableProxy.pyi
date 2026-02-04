#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TypeProxy import TypeProxy
from c3.platform.AsyncTypeProxy import AsyncTypeProxy
from c3.platform.ServerConnection import ServerConnection
from c3.platform.ThinTypeSystem import ThinTypeSystem

# Python definitions for the C3 type PersistableProxy


class PersistableProxy(TypeProxy, Value):
    """
    If the {@link ThinTypeSystem type system} returns an instance of a {@link Persistable} type, the
    {@link TypeProxy normal proxy} is extended by this "persistable proxy".
    
    @remarks this represents a made instance of PersistableProxy
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
    def typeSystem(self) -> ThinTypeSystem:
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
    def call(self, action: str, *args: Array[any], thisArg: any=None) -> Union[any]:
    """
    Call a method on this type, specifying the arguments as varargs. It handles both static and member functions. For
    static methods thisArg should be `null`. If target method is overloaded, will match overload based on argument
    value types.
    
    This matches the JavaScript `Function.call` or any language's positional argument syntax (`fn(arg1, arg2, ...)`).
    
    @see #callByName
    @see #callByPosition
    """
        ...
    def callByName(self, action: str, args: any=None) -> Union[any]:
    """
    Call a method on this type, specifying the arguments as name/value pairs. It handles both static and member
    functions. For member methods args should contain `this` key. If target method is overloaded will match overload
    based on argument value types.
    
    This matches Python's dict unpacking (`fn(**args)`).
    
    @see #call
    """
        ...
    def callByPosition(self, action: str, thisArg: any=None, args: Array[any]=None) -> Union[any]:
    """
    Call a method on this type, specifying the arguments positionaly as an array. It handles both static and member
    functions. For static methods thisArg should be `null`. If target method is overloaded, will match overload based
    on argument value types.
    
    This matches the JavaScript `Function.apply` or Python's list unpacking (`fn(*args)`).
    
    @see #call
    """
        ...
    def asPersistable(self, failIfMissing: bool=None) -> Union[PersistableProxy]:
    """
    Get the persistable version of proxy this proxy if the underlying type is persistable.
    """
        ...
    def get(self, id: str, include: str=None) -> Union[any]:
    """
    Retrieve a single instance of this type by {@link Identifiable id}.
    """
        ...
    def fetch(self, spec: any=None) -> Union[any]:
    """
    Query instances of this type using a variety of criteria a specified in the {@link FetchSpec} spec.
    """
        ...

