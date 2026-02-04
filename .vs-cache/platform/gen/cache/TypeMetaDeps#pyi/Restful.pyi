#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.HttpRequest import HttpRequest
from c3.platform.HttpResponse import HttpResponse
from c3.platform.Pair import Pair

# Python definitions for the C3 type Restful


class Restful(Value):
    """
    Optional mixin for types exposing RESTful interface. It is also possible to create these endpoints without mixing
    in this type and instead using {@link Ann.Restful @restful} annotations. Mixing in this type works best for
    endpoints with custom handling that want to consume a raw request and produce a complete response.
    
    Both GET and POST requests are supported. For GET, parameters are taken from the query string. For POST they are
    taken from the source form (supporting `application/x-www-form-urlencoded` and `multipart/form-data`.
    
    In addition, the method can consume the whole request by declaring a single parameter of type {@link HttpRequest}
    or {@link Content}.
    
    Finally, for POST requests with JSON bodies, a single parameter can be deserialized using the
    {@link Ann.Restful#postBody} annotation. (Other parameters can come from the path, but not from the body.)
    
    @see Ann.Restful
    @see https://restfulapi.net/
    
    @remarks this represents a made instance of Restful
    """
    def __init__(self) -> None: ...

    @classmethod
    def handle(cls, httpPath: str, req: HttpRequest) -> Union[HttpResponse]:
    """
    Optional handler of all HTTP requests under `@restful(endpoint)` prefix from one and only sub type of Restful
    """
        ...
    @classmethod
    def targetFor(cls, httpPath: str) -> Union[Pair[Type, MethodType]]:
    """
    Find restful type and potentially method responsible for handling HTTP request with provided path or `null`
    """
        ...
    @classmethod
    def currentRequest(cls) -> Union[HttpRequest]:
    """
    While handling a RESTful request, the incoming HTTP request can be accessed. This works even for types that do not
    mixin **Restful**, but just use {@link Ann.Restful @restful} annotations.
    """
        ...
    def origin(self) -> Union[str]:
    """
    Get the origin URL for this endpoint. This only works for RESTful endpoints that mixin **Restful**.
    
    @see endpointOrigin
    """
        ...
    @classmethod
    def endpointOrigin(cls, endpoint: str) -> Union[str]:
    """
    Get the origin URL for an endpoint. This is useful for types that do not mixin **Restful**, but just use
    {@link Ann.Restful @restful} annotations.
    """
        ...

