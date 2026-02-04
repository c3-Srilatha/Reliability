#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.AsyncTypeSystem import AsyncTypeSystem
from c3.platform.Pkg.Event import Pkg.Event
from c3.platform.ServerRequest import ServerRequest
from c3.platform.TypeSystem import TypeSystem
from c3.platform.ServerConnection import ServerConnection

# Python definitions for the C3 type TypeSystemBase


class TypeSystemBase(Value):
    """
    Base type for a C3 Remote full type system. This is extended by synchronous and asynchronous versions.
    
    The "full" type system is distinguished from the {@link ThinTypeSystemBase thin type system} by the fact that
    values have the full C3 semantics and Obj instances expose the declared methods directly.
    
    @remarks this represents a made instance of TypeSystemBase
    """
    def __init__(self) -> None: ...

    def type(self, name: str, failIfMissing: bool=None) -> Union[Any]:
    """
    Get a full type by name.
    """
        ...
    def sync(self) -> TypeSystem:
    """
    Get a synchronous instance of the full type system for this connection. If this instance is a synchronous version,
    the same value is returned.
    
    @return instance of this type system that dispatches actions in a synchronous manner
    """
        ...
    def async(self) -> AsyncTypeSystem:
    """
    Get an asynchronous instance of the full type system for this connection. If this instance is an asynchronous
    version, the same value is returned.
    
    @return instance of this type system that dispatches actions in an asynchronous manner using Promise
    """
        ...
    def connection(self) -> ServerConnection:
    """
    Get the connection on which this type system operates.
    
    @return server connection
    """
        ...
    def clearCache(self, typeName: str=None, reimport: bool=None) -> None:
    """
    When no argument is provided, discard all cached metadata on this connection. When a typename is specified,
    remove cached metadata for the given type, and all sub types that mixes this type. This is typically used in
    client SDKs to refresh cache for updated types. Note that existing instances will still continue to use the old
    types, but references to types through this type system itself will reload after this call.
    
    @param typeName specific type to clear or null for all
    @param reimport if true, re-import single type if `importTypes` was called
    """
        ...
    def cacheContainsType(self, typeName: str) -> bool:
    """
    True if the type with the given typeName is cached in TypeSystem.
    """
        ...
    def c3(self) -> Any:
    """
    Returns a native c3 "namespace object". In general, this object has a field for each {@link Type} declared in
    a given package. This object also has all fields and methods of any {@link GlobalProtocol} sub-type. In Python,
    this method returns an object of the same type as the "c3" global variable. In JS, this method returns an object of
    the same type as the "C3" variable.
    """
        ...
    def trackTypeChanges(self, notify: Callable[[Pkg.Event]]=None) -> None:
    """
    Listens for changes occurring on the server and updates the local state as necessary. This is useful on development
    systems (apps in `DEV` mode) where types are being actively developed.
    
    @param notify lambda called each time a type change is detected
    
    @see Pkg#listen
    """
        ...
    def callRequest(self, type: str, action: str, *args: Array[Any]) -> ServerRequest:
    """
    Build a request instance usable for calling the specified method. The type and method name are required to form
    the URL. The HTTP method will always be `POST`.
    
    If any arguments are specified, the body of the request will be JSON and it will have the JSON-related
    headers, including `Accept: application/json`. Otherwise, the request will have no body and `Accept: *\/*`.
    
    @param type the name of the type on which to call the method
    @param action the name of the method to call
    @param args the arguments to pass, with `this` or the type name first
    @return the HTTP request to make this call
    """
        ...

