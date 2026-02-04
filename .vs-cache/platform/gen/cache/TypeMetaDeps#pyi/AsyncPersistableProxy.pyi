#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TimeoutSpec import TimeoutSpec
from c3.platform.AsyncTypeProxy import AsyncTypeProxy
from c3.platform.Promise import Promise
from c3.platform.ServerConnection import ServerConnection
from c3.platform.AsyncThinTypeSystem import AsyncThinTypeSystem
from c3.platform.TypeProxy import TypeProxy

# Python definitions for the C3 type AsyncPersistableProxy


class AsyncPersistableProxy(AsyncTypeProxy, Value):
    """
    If the {@link AsyncThinTypeSystem type system} returns an instance of a {@link Persistable} type, the
    {@link AsyncTypeProxy normal proxy} is extended by this "persistable proxy".
    
    @remarks this represents a made instance of AsyncPersistableProxy
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
    def typeSystem(self) -> AsyncThinTypeSystem:
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
    def asPersistable(self, failIfNot: bool=None) -> Union[AsyncPersistableProxy]:
    """
    Get the persistable version of proxy this proxy if the underlying type is persistable.
    """
        ...
    def call(self, action: str, *args: Array[any], thisArg: any=None) -> Union[Promise[any]]:
    """
    Call a method on this type, specifying the arguments as varargs. It handles both static and member functions. For
    static methods thisArg should be `null`. If target method is overloaded, will match overload based on argument
    value types.
    
    This matches the JavaScript `Function.call` or any language's positional argument syntax (`fn(arg1, arg2, ...)`).
    
    @see #callByName
    @see #callByPosition
    """
        ...
    def callByName(self, action: str, args: any=None) -> Union[Promise[any]]:
    """
    Call a method on this type, specifying the arguments as name/value pairs. It handles both static and member
    functions. For member methods args should contain `this` key. If target method is overloaded will match overload
    based on argument value types.
    
    This matches Python's dict unpacking (`fn(**args)`).
    
    @see #call
    """
        ...
    def callByPosition(self, action: str, thisArg: any=None, args: Array[any]=None, timeout: Union[str,TimeoutSpec]=None) -> Union[Promise[any]]:
    """
    Call a method on this type, specifying the arguments positionally as an array. It handles both static and member
    functions. For static methods thisArg should be `null`. If target method is overloaded, will match overload based
    on argument value types.
    
    This matches the JavaScript `Function.apply` or Python's list unpacking (`fn(*args)`).
    
    Additionally, you can specify a {@Link TimeoutSpec} for the call. Consequently the {@link Action} dispatched as a
    result of this call will have a timeout of the specified value. Alternatively, you can only choose to specify the
    {@link Duration} after which you would like the action to be interrupted; in that case, the action will be stopped
    after a duration that is twice the specified interrupt duration.
    
    @see #call
    @see Action#interrupt
    @see Action#stop
    """
        ...
    def get(self, id: str, include: str=None) -> Union[Promise[any]]:
    """
    Retrieve a single instance of this type by {@link Identifiable id}.
    """
        ...
    def fetch(self, spec: any=None) -> Union[Promise[any]]:
    """
    Query instances of this type using a variety of criteria a specified in the {@link FetchSpec} spec.
    """
        ...

