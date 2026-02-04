#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.AsyncTypeSystem import AsyncTypeSystem
from c3.platform.ServerRequest import ServerRequest
from c3.platform.TypeSystem import TypeSystem
from c3.platform.ThinTypeSystem import ThinTypeSystem
from c3.platform.AsyncThinTypeSystem import AsyncThinTypeSystem

# Python definitions for the C3 type ServerConnection


class ServerConnection(Value):
    """
    A remote connection to a C3 server. This should be established by calling {@link Remote#connect connect} or
    {@link Remote#connectAsync connectAsync}.
    
    @see Remote
    
    @remarks this represents a made instance of ServerConnection
    """
    def __init__(self) -> None: ...

    def url(self) -> str:
    """
    The base URL to the server.
    """
        ...
    def close(self) -> None:
    """
    Clean up any state associated with this connection.
    """
        ...
    def request(self, method: str, encodedPath: str) -> ServerRequest:
    """
    Create a request to be used on this connection.
    """
        ...
    def typeSystem(self) -> TypeSystem:
    """
    Get an instance of the full type system that makes requests synchronously.
    """
        ...
    def asyncTypeSystem(self) -> AsyncTypeSystem:
    """
    Get an instance of the full type system that makes requests asynchronously.
    """
        ...
    def thinTypeSystem(self) -> ThinTypeSystem:
    """
    Get an instance of the thin type system that makes requests synchronously.
    """
        ...
    def asyncThinTypeSystem(self) -> AsyncThinTypeSystem:
    """
    Get an instance of the thin type system that makes requests asynchronously.
    """
        ...
    def metadataUrl(self, type: str, runtime: str=None) -> str:
    """
    Build a URL string for fetching the specified type's metadata. If the runtime is unspecified, it defaults to the
    one used to initialize the connection.
    """
        ...
    def callUrl(self, type: str, action: str) -> str:
    """
    Build a URL string for calling the specified type method.
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
    
    @see #callUrl
    """
        ...
    def cacheTypes(self, typeNames: Array[str]) -> None:
    """
    To cache metadata for types in given `typeNames`.
    """
        ...
    def clearTypeCache(self, typeName: str=None) -> None:
    """
    Discard cached type metadata for the given type. When not provided an argument, discard all cached type metadata
    on this connection. This is typically used in client SDKs to refresh cache for specific type or all types.
    Note that existing instances will still continue to use the old types, but references to types through this
    connection itself will reload after this call.
    
    Note that there may still be higher-level caches, particularly in the {@link TypeSystemBase full type systems}.
    """
        ...
    def cacheContainsType(self, typeName: str) -> bool:
    """
    Returns true if the type meta for the type with given typeName is cached on this server connection, false otherwise.
    """
        ...
    def withoutRemoting(self, action: Callable[[], Union[R]], throwOnRemote: bool=None) -> Union[R]:
    """
    Execute the specified code, preventing it from making any remote calls, and return the result. If the method tries
    to remote, the action will be aborted and null will be returned. Other errors will not be caught.
    
    Note that this is only meaningful in client environments, which often need to remote to the server.
    
    @param action code to be executed
    @param throwOnRemote throw error if the code remotes instead of returning null
    @return result value of action execution
    """
        ...

