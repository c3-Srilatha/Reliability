#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ServerRequest import ServerRequest
from c3.platform.TypeProxy import TypeProxy
from c3.platform.ServerConnection import ServerConnection
from c3.platform.AsyncThinTypeSystem import AsyncThinTypeSystem

# Python definitions for the C3 type ThinTypeSystem


class ThinTypeSystem(ThinTypeSystemBase, Value):
    """
    Type for the C3 remote thin type system, asynchronous version.
    
    The "thin" type system is distinguished from the {@link TypeSystem full type system} by the fact that
    values are parsed JSON and declared methods must be called by name (using `call`).
    
    @remarks this represents a made instance of ThinTypeSystem
    """
    def __init__(self) -> None: ...

    def type(self, name: str, failIfMissing: bool=None) -> Union[TypeProxy]:
    """
    Get a proxy to a type by name.
    """
        ...
    def sync(self) -> ThinTypeSystem:
    """
    Get a synchronous instance of the thin type system for this connection. If this instance is a synchronous version,
    the same value is returned.
    
    @return instance of this type system that dispatches actions in a synchronous manner
    """
        ...
    def async(self) -> AsyncThinTypeSystem:
    """
    Get an asynchronous instance of the thin type system for this connection. If this instance is an asynchronous
    version, the same value is returned.
    
    @return instance of this type system that dispatches actions in an asynchronous manner using Promise
    """
        ...
    def connection(self) -> ServerConnection:
    """
    Get the connection on which this instance operates.
    
    @return server connection
    """
        ...
    def clearCache(self, typeName: str=None) -> None:
    """
    When no argument is provided, discard all cached metadata on this connection. When it is specified to a type, remove
    cached metadata for the given type, and all sub types that mixes this type. This is typically used in client SDKs
    to refresh cache for updated types. Note that existing instances will still continue to use the old types, but
    references to types through this thin type system itself will reload after this call.
    """
        ...
    def cacheContainsType(self, typeName: str) -> bool:
    """
    True if the type with the given typeName is cached in TypeSystem.
    """
        ...
    def callRequest(self, type: str, action: str, *args: Array[Any]) -> ServerRequest:
    """
    Build a request instance usable for calling the specified type method. The type and method name are required to
    form the URL. The HTTP method will always be `POST`.
    
    If any arguments are specified, the body of the request will be JSON and it will have the JSON-related
    headers, including `Accept: application/json`. Otherwise, the request will have no body and `Accept: *\/*`.
    
    @param type the name of the type on which to call the method
    @param action the name of the method to call
    @param args the arguments to pass, with `this` or the type name first
    @return the HTTP request to make this call
    """
        ...

